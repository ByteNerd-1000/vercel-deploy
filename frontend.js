function getData() {
  fetch(url)
    .then((response) => {
      console.log(response);
      const data = response.json();
      return data;
    })
    .then((data) => {
      const result = document.getElementById("display");
      result.innerHTML = data.msg;
    })
    .catch((e) => {
      const result = document.getElementById("display");
      result.innerHTML = e;
    });
}
const url = "http://localhost:3000/";
