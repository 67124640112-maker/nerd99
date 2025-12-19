
import React from 'react';

interface CalendarPickerProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({ selectedDate, onSelectDate }) => {
  // Simple month view for demo purposes based on October 2023
  const days = Array.from({ length: 7 }, (_, i) => i + 1); // Mocking Oct 1-7
  const currentSelectedDay = selectedDate.getDate();

  return (
    <div className="bg-white dark:bg-[#1a202c] pb-2 shadow-sm">
      <div className="flex flex-col p-4 pb-0">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined text-[#111418] dark:text-white" style={{ fontSize: '20px' }}>chevron_left</span>
          </button>
          <p className="text-[#111418] dark:text-white text-base font-bold leading-tight text-center">ตุลาคม 2023</p>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="material-symbols-outlined text-[#111418] dark:text-white" style={{ fontSize: '20px' }}>chevron_right</span>
          </button>
        </div>
        
        <div className="grid grid-cols-7 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <p key={i} className="text-[#637588] dark:text-gray-400 text-[13px] font-bold text-center">{day}</p>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {/* Empty slots for Oct 2023 alignment */}
          <div></div><div></div><div></div>
          {days.map((day) => {
            const isSelected = day === currentSelectedDay;
            return (
              <button 
                key={day} 
                onClick={() => onSelectDate(new Date(2023, 9, day))}
                className="h-9 w-full flex items-center justify-center relative group"
              >
                {isSelected ? (
                  <div className="flex size-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold shadow-md transition-all">
                    {day}
                  </div>
                ) : (
                  <div className="h-9 w-full flex items-center justify-center text-sm font-medium text-[#111418] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    {day}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarPicker;
