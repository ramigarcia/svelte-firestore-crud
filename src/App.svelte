<script>
  import { db } from "./firebase";
  import toastr from "toastr";

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
    editStatus = false;
    toastr.success("Task update successfully", {
      timeout: 1000,
      progressBar: true,
      positionClass: "toast-bottom-right",
    });
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
  <form on:submit|preventDefault={handleSubmit} class="card card-body">
    <div class="form-group">
      <input
        bind:value={task.name}
        type="text"
        placeholder="Write a new task"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <textarea
        bind:value={task.desc}
        rows="3"
        placeholder="Write a task description"
        class="form-control"
      />
    </div>
    <button class="btn btn-primary mt-2">
      {#if !editStatus}Save {:else} Update {/if}
    </button>
    {#if editStatus}
      <button on:click={onCancel} class="btn btn-info mt-2">Cancel</button>
    {/if}
  </form>
  <!-- Para recorrer el tasks usamos each -->
  {#each tasks as task}
    <div class="card card-body mt-2">
      <div class="d-flex justify-content-between">
        <h5>{task.name}</h5>
        <i
          class="material-icons"
          on:click={editTask(task)}
          style="vertical-align:middle;">edit</i
        >
      </div>
      <p>{task.desc}</p>
      <button on:click={deleteTask(task.id)} class="btn btn-danger">
        <i class="material-icons" style="vertical-align:middle;"
          >delete_forever</i
        >
      </button>
    </div>
  {/each}
</section>

<style>
</style>
