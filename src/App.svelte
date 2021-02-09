<script>
  import { db } from "./firebase";

  let task = {
    name: "",
    desc: "",
  };

  let tasks = [];

  db.collection("tasks").onSnapshot((querySnapshot) => {
    let docs = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      docs.push(doc.data());
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
    console.log("Tarea creada");
  };

  const handleSubmit = () => {
    addTask();

    task = { name: "", desc: "" };
  };
</script>

<section>
  <form on:submit|preventDefault={handleSubmit}>
    <input
      bind:value={task.title}
      type="text"
      placeholder="Escribe una tarea"
    />
    <textarea
      bind:value={task.desc}
      rows="3"
      placeholder="Escribe una descripción"
    />
    <button>Guardar</button>
  </form>
</section>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  section {
    max-width: 80%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    background: rgb(255, 255, 255);
    min-height: 350px;
    width: 90%;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 30px rgba(255, 55, 255, 0.5);
  }

  input,
  textarea {
    max-width: 90%;
    width: 100%;
    height: 30px;
    margin: 20px;
    padding-left: 10px;
  }

  textarea {
    height: 80px;
    line-height: 18px;
  }

  button {
    width: 150px;
    border-radius: 20px;
    border: none;
    background: #09f;
    color: white;
    font-size: 20px;
    height: 40px;
  }
</style>
