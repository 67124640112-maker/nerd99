
import React, { useState, useMemo } from 'react';
import { ShiftType, WardShift, WardStatus } from './types';
import { SHIFT_LABELS, SHIFT_ICONS, MOCK_SHIFTS } from './constants';
import CalendarPicker from './components/CalendarPicker';
import ShiftCard from './components/ShiftCard';

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2023, 9, 5));
  const [filter, setFilter] = useState<ShiftType>(ShiftType.ALL);

  const filteredShifts = useMemo(() => {
    if (filter === ShiftType.ALL) return MOCK_SHIFTS;
    return MOCK_SHIFTS.filter(s => s.type === filter);
  }, [filter]);

  // Group shifts by time category for display
  const morningShifts = useMemo(() => filteredShifts.filter(s => s.type === ShiftType.MORNING), [filteredShifts]);
  const afternoonShifts = useMemo(() => filteredShifts.filter(s => s.type === ShiftType.AFTERNOON), [filteredShifts]);
  const nightShifts = useMemo(() => filteredShifts.filter(s => s.type === ShiftType.NIGHT), [filteredShifts]);

  const handleManage = (id: string) => alert(`Managing shift: ${id}`);
  const handleView = (id: string) => alert(`Viewing details for: ${id}`);
  const handleAddStaff = (id: string) => alert(`Adding staff to: ${id}`);
  const handlePublish = () => alert('Publishing schedule...');

  return (
    <div className="relative flex h-screen w-full flex-col overflow-x-hidden group/design-root bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-[#1a202c] p-4 pb-2 justify-between shadow-sm border-b dark:border-gray-800">
        <div className="flex size-12 shrink-0 items-center justify-start text-[#111418] dark:text-white cursor-pointer hover:opacity-70 transition-opacity">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">จัดการกะ</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {/* Calendar Picker */}
        <CalendarPicker selectedDate={selectedDate} onSelectDate={setSelectedDate} />

        {/* Filter Chips */}
        <div className="sticky top-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md pt-4 pb-2 px-4">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {Object.values(ShiftType).map((type) => {
              const isActive = filter === type;
              return (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`flex h-9 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg px-4 shadow-sm transition-all active:scale-95 border ${
                    isActive 
                      ? 'bg-primary text-white border-primary' 
                      : 'bg-white dark:bg-[#1a202c] text-[#111418] dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{SHIFT_ICONS[type]}</span>
                  <p className="text-sm font-medium leading-normal">{SHIFT_LABELS[type]}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Morning Section */}
        {morningShifts.length > 0 && (
          <section>
            <div className="flex items-center px-4 pt-4 pb-2">
              <div className="h-6 w-1 rounded-full bg-orange-400 mr-3"></div>
              <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">กะเช้า (07:00 - 15:00)</h3>
            </div>
            {morningShifts.map(shift => (
              <ShiftCard 
                key={shift.id} 
                shift={shift} 
                onManage={handleManage} 
                onView={handleView} 
                onAddStaff={handleAddStaff} 
              />
            ))}
          </section>
        )}

        {/* Afternoon Section */}
        {afternoonShifts.length > 0 && (
          <section className="mt-4">
            <div className="flex items-center px-4 pt-4 pb-2">
              <div className="h-6 w-1 rounded-full bg-blue-400 mr-3"></div>
              <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">กะบ่าย (15:00 - 23:00)</h3>
            </div>
            {afternoonShifts.map(shift => (
              <ShiftCard 
                key={shift.id} 
                shift={shift} 
                onManage={handleManage} 
                onView={handleView} 
                onAddStaff={handleAddStaff} 
              />
            ))}
          </section>
        )}

        {/* Night Section */}
        {nightShifts.length > 0 && (
          <section className="mt-4">
            <div className="flex items-center px-4 pt-4 pb-2">
              <div className="h-6 w-1 rounded-full bg-indigo-600 mr-3"></div>
              <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">กะดึก (23:00 - 07:00)</h3>
            </div>
            {nightShifts.map(shift => (
              <ShiftCard 
                key={shift.id} 
                shift={shift} 
                onManage={handleManage} 
                onView={handleView} 
                onAddStaff={handleAddStaff} 
              />
            ))}
          </section>
        )}
        
        {/* Empty state if filtered results are 0 */}
        {filteredShifts.length === 0 && (
           <div className="flex flex-col items-center justify-center py-20 px-10 text-center opacity-50">
              <span className="material-symbols-outlined text-6xl mb-4">calendar_today</span>
              <p className="text-lg font-medium">ไม่พบกะงานในช่วงเวลานี้</p>
           </div>
        )}
      </main>

      {/* Floating Action Button for Quick Publish */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none px-4">
        <button 
          onClick={handlePublish}
          className="pointer-events-auto flex items-center gap-3 bg-[#111418] dark:bg-white dark:text-[#111418] text-white px-8 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-transform font-bold text-base"
        >
          <span className="material-symbols-outlined">send</span>
          เผยแพร่ตารางเวร
        </button>
      </div>
    </div>
  );
};

export default App;
