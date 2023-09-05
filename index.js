const readline = require('readline-sync');
// Inicializar la lista de tareas
const tasks = [];
// Función para mostrar las tareas
function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. [${task.completed ? 'X' : ' '}] ${task.description}`);
  });
}
// Función para añadir una tarea
function addTask() {
  const description = readline.question('Escribe la descripción de la tarea: ');
  tasks.push({ description, completed: false });
  console.log('Tarea añadida.');
}
// Función para eliminar una tarea
function deleteTask() {
  showTasks();
  const index = readline.questionInt('Escribe el número de la tarea que deseas eliminar: ') - 1;
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Número de tarea inválido.');
  }
}
// Función para marcar una tarea como completada
function completeTask() {
  showTasks();
  const index = readline.questionInt('Escribe el número de la tarea que deseas marcar como completada: ') - 1;
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Número de tarea inválido.');
  }
}
// Función principal
function main() {
  while (true) {
    console.log('\nOpciones:');
    console.log('1. Mostrar tareas');
    console.log('2. Añadir tarea');
    console.log('3. Eliminar tarea');
    console.log('4. Marcar tarea como completada');
    console.log('5. Salir');
    const choice = readline.questionInt('Elige una opción: ');
    switch (choice) {
      case 1:
        showTasks();
        break;
      case 2:
        addTask();
        break;
      case 3:
        deleteTask();
        break;
      case 4:
        completeTask();
        break;
      case 5:
        console.log('Saliendo del programa.');
        process.exit(0);
      default:
        console.log('Opción inválida. Inténtalo de nuevo.');
    }
  }
}
main();
