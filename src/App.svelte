<script>
  import { db } from "./firebase";

  let task = {
    name: "",
    desc: "",
  };
  let tasks = [];
  let editStatus = false;
  let currentId;

  db.collection("tasks").onSnapshot((querySnapshot) => {
    let docs = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      docs.push({ ...doc.data(), id: doc.id });
    });
    tasks = [...docs];
    console.log(tasks);
  });

  const addTask = async () => {
    await db
      .collection("tasks")
      .doc()
      .set({
        ...task,
        createAt: Date.now(),
      });
    console.log("New task created");
  };

  const updateTask = () => {
    db.collection("tasks").doc(currentId).update(task);
  };

  const handleSubmit = () => {
    if (!editStatus) {
      addTask();
    } else {
      updateTask();
    }

    task = { name: "", desc: "" };
  };

  const deleteTask = async (id) => {
    // console.log(id);
    await db.collection("tasks").doc(id).delete();
  };
  const editTask = (currentTask) => {
    // console.log(task);
    editStatus = true;
    task.name = currentTask.name;
    task.desc = currentTask.desc;
    currentId = currentTask.id;
  };

  const onCancel = () => {
    editStatus = false;
    task = { name: "", desc: "" };
  };
</script>

<section>
  <form on:submit|preventDefault={handleSubmit}>
    <input bind:value={task.name} type="text" placeholder="Write a new task" />
    <textarea
      bind:value={task.desc}
      rows="3"
      placeholder="Write a task description"
    />
    <button>
      {#if !editStatus}Save {:else} Update {/if}
    </button>
    {#if editStatus}
      <button on:click={onCancel}>Cancel</button>
    {/if}
  </form>
  <!-- Para recorrer el tasks usamos each -->
  {#each tasks as task}
    <div>
      <h5>{task.name}</h5>
      <p>{task.desc}</p>
      <button on:click={deleteTask(task.id)}>Delete</button>
      <button on:click={editTask(task)}>Edit</button>
    </div>
  {/each}
</section>

<style>
</style>
