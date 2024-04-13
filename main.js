/////////////////////////////////////// DeBouncer ////////////////////////////////////////

function debounce(delay, cd) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        cd(...args);
      }, delay);
    };
  }

  function LogCordinates(event) {
     console.log(`coordinates:  x-${event.clientX}, y-${event.clientY}`);
  }
  const debouncedCordinates = debounce(1000 , LogCordinates);

  document.addEventListener('mousemove', debouncedCordinates);

///////////////////////////////////////////////////       2 Fetch      /////////////////////////////////////////////////////////////

// let fake = document.querySelector(".FakeStore");
// let json = document.querySelector(".Jsonplaceholder");
// const fakestore = "https://fakestoreapi.com/users";
// const jsonplaceholder = "https://jsonplaceholder.typicode.com/users";

// async function fetchData(apiURL) {
//   try {
//     const response = await fetch(apiURL);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// function Showdata(data, parent) {
//   parent.innerHTML = data
//     .map(
//       (el) =>
//         `
//         <div>
//             <p>${el.email}</p>
//             <p>${el.username}</p>
//         </div>
//         `
//     )
//     .join("");
// }

// Promise.all([fetchData(fakestore), fetchData(jsonplaceholder)])
//   .then(([fakestore, jsonplaceholder]) => {
//     Showdata(fakestore, fake);
//     console.log(fakestore);
//     Showdata(jsonplaceholder, json);
//     console.log(jsonplaceholder);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
