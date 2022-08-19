import InputField from "./InputField";
import RemoveButtons from "./RemoveButtons";
import ToDoList from "./ToDoList";

function Contents() {
  return (
    <div className="content">
      <InputField />
      <ToDoList className="toDoList" />
      <RemoveButtons />
    </div>
  );
}

export default Contents;
