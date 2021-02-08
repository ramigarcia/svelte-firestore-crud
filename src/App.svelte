<script>
  const handleSubmit = (e) => {
    e.preventDefault("");
    console.log("Guardado");
  };
</script>

<form on:submit={handleSubmit}>
  <input type="text" placeholder="Escribe una tarea" />
  <textarea rows="3" placeholder="Escribe una descripción" />
  <button>Guardar</button>
</form>

<style>
</style>
