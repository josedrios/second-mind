export async function createTask(task) {
  try {
    const response = await fetch(`http://localhost:3001/api/task/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: task.name,
        info: task.info,
        tag: task.tag,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData.message);
      return;
    } else {
      return;
    }
  } catch (err) {
    console.log("Error:", err);
    return;
  }
}

export async function editTask( id, task ) {
    console.log(id)
    try {
        const response = await fetch(`http://localhost:3001/api/task/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: task.name,
            info: task.info,
            tag: task.tag
          }),
        });
    
        const responseData = await response.json();
    
        if (!response.ok) {
          console.log(responseData.message);
          return;
        } else {
          return;
        }
      } catch (err) {
        console.log("Error:", err);
        return;
      }
    return;
}

export async function fetchTasks() {
  try {
    const response = await fetch(`http://localhost:3001/api/task/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData.message);
    } else {
      console.log(responseData);
      return responseData;
    }
  } catch (err) {
    console.log("Error:", err);
    return;
  }
}