window.onload = async () => {
  //request games from our API
  const uri = "/api/v1/games";
  const config = {
    method: "get",
    mode: "cors"
  }
  const response = await fetch(uri, config);
  const json = await response.json();
  console.log(json);
}