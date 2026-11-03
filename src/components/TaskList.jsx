import closeBtn from "../assets/close.svg";

const TaskList = (taskData, dataId) => {
  const tasks = [
    { text: "Task 1", id: "1" },
    { text: "Task 2", id: "2" },
  ];

  const listItems = tasks.map((task) => {
    return (
      <li
        className="relative p-3 outline rounded-xl outline-[#d9d9d9] transition-colors hover:bg-[#d9d9d9] flex items-center gap-3"
        data-id={task.id}
      >
        <input
          type="checkbox"
          className="relative w-5 h-5 appearance-none shrink-0 after:content-[''] after:w-4 after:h-4 after:top-1/2 after:left-1/2 after:translate-1/2 after:bg-[url:(../assets/Check.svg)] after:bg-contain after:bg-center after:bg-no-repeat"
        />
        {task.text}
        <button
          type="button"
          className="absolute inline-flex justify-center items-center right-0 top-1/2 -translate-y-1/2 w-12 h-12 hover:bg-black rounded-xl"
        >
          <img src={closeBtn} className="" alt="close button" />
        </button>
      </li>
    );
  });

  return <ul className="flex flex-col gap-3 ">{listItems}</ul>;
};
export default TaskList;
