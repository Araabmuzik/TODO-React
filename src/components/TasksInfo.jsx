const TaskInfo = ({ taskCount }) => {
  return (
    <div className="flex justify-between items-center text-sm font-semibold">
      <div>Количество {taskCount.length}</div>
      <button type="button" className="p-1 cursor-pointer">
        Удалить всё
      </button>
    </div>
  );
};
export default TaskInfo;
