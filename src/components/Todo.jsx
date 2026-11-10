import { useState } from "react";
import InputField from "./InputField";
import TaskList from "./TaskList";
import TaskInfo from "./TasksInfo";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { text: "Task 1", id: "1" },
    { text: "Task 2", id: "2" },
  ]);

  return (
    <>
      <section className="my-8 shadow max-w-[540px] w-full  mx-auto rounded-2xl p-6 flex flex-col gap-6">
        <h1 className="font-bold text-2xl text-center">Список покупок</h1>
        <InputField
          placeholderText={"Введите название"}
          buttonText={"Добавить"}
          id={"addTask"}
        />
        <InputField
          id={"search"}
          placeholderText={"Поиск в списке"}
          searchIcon={true}
        />
        <div className="flex flex-col gap-4">
          <TaskInfo taskCount={tasks} />
          <TaskList taskData={tasks} />
        </div>
      </section>
    </>
  );
};
export default Todo;
