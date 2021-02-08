<script>
  const handleSubmit = () => {
    console.log("Guardado");
  };
</script>

<section>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Escribe una tarea" />
    <textarea rows="3" placeholder="Escribe una descripción" />
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
