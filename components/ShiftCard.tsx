
import React from 'react';
import { WardShift, WardStatus, ShiftType } from '../types';

interface ShiftCardProps {
  shift: WardShift;
  onManage: (id: string) => void;
  onView: (id: string) => void;
  onAddStaff: (id: string) => void;
}

const StatusBadge: React.FC<{ status: WardStatus, message?: string }> = ({ status, message }) => {
  switch (status) {
    case WardStatus.URGENT:
      return (
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">ต้องการด่วน</span>
          {message && <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{message}</p>}
        </div>
      );
    case WardStatus.FULL:
      return (
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">ครบตามจำนวน</span>
        </div>
      );
    case WardStatus.SHORTAGE:
      return (
        <div className="flex items-center gap-2 mb-1">
          <span className="text-red-600 dark:text-red-400 flex items-center gap-1 text-xs font-bold uppercase tracking-wide">
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>warning</span>
            {message || 'ขาดคน'}
          </span>
        </div>
      );
    case WardStatus.NORMAL:
    default:
      return (
        <div className="flex items-center gap-2 mb-1">
          <span className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">ปกติ</span>
        </div>
      );
  }
};

const ShiftCard: React.FC<ShiftCardProps> = ({ shift, onManage, onView, onAddStaff }) => {
  const isShortage = shift.status === WardStatus.SHORTAGE;
  const cardClasses = `flex flex-col rounded-xl bg-white dark:bg-[#1a202c] p-4 shadow-sm border border-gray-100 dark:border-gray-700 ${
    isShortage ? 'border-l-4 border-l-red-500' : ''
  }`;

  return (
    <div className="px-4 py-2">
      <div className={cardClasses}>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex flex-col gap-1 flex-1">
            <StatusBadge status={shift.status} message={shift.vacancyMessage} />
            <p className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{shift.wardName}</p>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>groups</span>
              <p className="text-sm">ต้องการพยาบาล {shift.requiredStaffCount} คน</p>
            </div>
          </div>
          <div 
            className="size-16 rounded-lg bg-cover bg-center shrink-0 shadow-inner" 
            style={{ backgroundImage: `url("${shift.imageUrl}")` }}
          ></div>
        </div>

        <div className="h-px bg-gray-100 dark:bg-gray-700 my-3"></div>

        <div className="flex items-center justify-between">
          {shift.currentStaff.length > 0 ? (
            <div className="flex -space-x-2 overflow-hidden">
              {shift.currentStaff.slice(0, 4).map((staff) => (
                <img
                  key={staff.id}
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-[#1a202c] object-cover"
                  src={staff.avatar}
                  alt={staff.name}
                />
              ))}
              {shift.requiredStaffCount - shift.currentStaff.length > 0 && shift.currentStaff.length >= 4 && (
                <button className="flex size-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 ring-2 ring-white dark:ring-[#1a202c] text-xs font-medium text-gray-500 dark:text-gray-300">
                  +{shift.requiredStaffCount - shift.currentStaff.length}
                </button>
              )}
              {shift.status === WardStatus.URGENT && shift.currentStaff.length < 5 && (
                 <button className="flex size-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 ring-2 ring-white dark:ring-[#1a202c] text-xs font-medium text-gray-500 dark:text-gray-300">
                   +1
                 </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 italic">
              <span className="flex size-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-400">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person_add</span>
              </span>
              รอการจัดสรร
            </div>
          )}

          {shift.status === WardStatus.SHORTAGE ? (
            <button 
              onClick={() => onAddStaff(shift.id)}
              className="flex items-center gap-1 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm hover:bg-blue-600 transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_add</span>
              เติมคน
            </button>
          ) : shift.status === WardStatus.FULL ? (
            <button 
              onClick={() => onView(shift.id)}
              className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>visibility</span>
              ดูข้อมูล
            </button>
          ) : (
            <button 
              onClick={() => onManage(shift.id)}
              className="flex items-center gap-1 text-primary text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
              จัดการ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShiftCard;
