
const TasksController = {
  getList: (req, res) => {
    console.log(req.query.status);
    res.send([
      { id: 1, name: "task 1", status: "TODO" },
      { id: 2, name: "task 2", status: "Done" },
    ]);
  },
  getById: (req, res) => {
    res.send(`get task by id ${req.params.id}`);
  },
  // הוספת מתודות חדשות:
  add: (req, res) => {
    // כאן תהיה הלוגיקה להוספת משימה חדשה
    // לדוגמה, גישה ל-req.body כדי לקבל את נתוני המשימה
    console.log('Adding new task:', req.body);
    res.send("add a new task");
  },
  update: (req, res) => {
    // כאן תהיה הלוגיקה לעדכון משימה קיימת
    // לדוגמה, גישה ל-req.params.id ו-req.body
    console.log(`Updating task ${req.params.id} with:`, req.body);
    res.send("update a task");
  },
  delete: (req, res) => {
    // כאן תהיה הלוגיקה למחיקת משימה
    // לדוגמה, גישה ל-req.params.id
    console.log(`Deleting task ${req.params.id}`);
    res.send("delete a task");
  }
};

export default TasksController;