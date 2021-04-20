export default function Form() {
  return (
    <form>
      <div class="mb-3">
        <input type="text" class="form-control" placeholder="Enter a city" />
      </div>
      <button type="submit">Search</button> <div id="divider">OR</div>
      <button>Current Location</button>
    </form>
  );
}
