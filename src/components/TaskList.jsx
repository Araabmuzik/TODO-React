const TaskList = ({ taskData }) => {
  const listItems = taskData.map((task) => {
    return (
      <li
        className="flex items-center gap-3 relative p-3 outline rounded-xl outline-[#d9d9d9] transition-colors hover:bg-[#d9d9d9]"
        id={task.id}
      >
        <div className="peer relative w-5 h-5 flex items-center justify-center shrink-0">
          <input
            type="checkbox"
            id={task.id}
            className="peer relative w-5 h-5 appearance-none shrink-0 border border-[#757575] rounded-sm checked:bg-[#2c2c2c] checked:border-[#2c2c2c] cursor-pointer"
          />
          <svg
            className="absolute pointer-events-none hidden peer-checked:block stroke-[#F5F5F5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3334 4L6.00002 11.3333L2.66669 8"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#F5F5F5"
            />
          </svg>
        </div>

        <label
          htmlFor={task.id}
          className="peer-has-checked:line-through peer-has-checked:text-[#757575] transition-all"
        >
          {task.text}
        </label>
        <button
          type="button"
          className="group absolute cursor-pointer inline-flex justify-center items-center transition-all right-0 top-1/2 -translate-y-1/2 w-12 h-12 hover:bg-black rounded-xl"
        >
          <svg
            className="stroke-[#757575] group-hover:stroke-white"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5L10 10M10 10L5 15M10 10L5 5M10 10L15 15"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </li>
    );
  });

  return <ul className="flex flex-col gap-3 ">{listItems}</ul>;
};
export default TaskList;
