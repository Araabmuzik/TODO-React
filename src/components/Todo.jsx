import InputField from "./InputField";
import TaskList from "./TaskList";

const Todo = () => {
  return (
    <>
      <section className="my-8 shadow max-w-[540px] w-full my-0 mx-auto rounded-2xl p-6 flex flex-col gap-6">
        <h1 className="font-bold text-2xl text-center">Список покупок</h1>
        <InputField
          placeholderText={"Введи наименование"}
          buttonText={"Добавить"}
          id={"addTask"}
        />
        <InputField
          id={"search"}
          placeholderText={"Поиск в списке"}
          searchIcon={true}
        />
        <TaskList />
      </section>
    </>
  );
};
export default Todo;
