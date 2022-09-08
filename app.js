const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "UI/UX developer",
      img:
        "https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg",
      text:
      "Lorem,  Dolorum, consequatur non! Expedita vitae ducimus consequuntur doloremque aliquid, corrupti officia aperiam iure cum, enim, impedit voluptas ipsum quasi dignissimos vero laboriosam?.",
    },
    {
      id: 2,
      name: "james dones",
      job: "web designer",
      img:
        "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      text:
        "Lorem,  Dolorum, consequatur non! Expedita vitae ducimus consequuntur doloremque aliquid, corrupti officia aperiam iure cum, enim, impedit voluptas ipsum quasi dignissimos vero laboriosam?.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "Cyber analyst",
      img:
        "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg",
      text:
      "Lorem,  Dolorum, consequatur non! Expedita vitae ducimus consequuntur doloremque aliquid, corrupti officia aperiam iure cum, enim, impedit voluptas ipsum quasi dignissimos vero laboriosam?.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "CEO",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpl60g6oKVerEKPde2ClN4-6ASK4Ds4KzlM0Y1N-K_bCgOCMBYZ019WUgRLOfNAqyyhnY&usqp=CAU",
      text:
      "Lorem,  Dolorum, consequatur non! Expedita vitae ducimus consequuntur doloremque aliquid, corrupti officia aperiam iure cum, enim, impedit voluptas ipsum quasi dignissimos vero laboriosam?.",
    },
  ];
  // select items
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
