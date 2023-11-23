// 1.create a list of available freelancers.
// 2.create an object that ties freelancers to their job and prices, using a tabel
// 3.create a loop that displays the average price every 30 seconds.

//Using the .querySelector to acess the Header in the body
 const body = document.querySelector("body");
 const title = document.createElement("h1");
 title.textContent = "Freelance Forum";
 body.append(title)
//Using the .getElementsByTagName to acess the paragraph in the Body.Header.Paragraph. 
 const h1 = document.getElementsByTagName("h1");
 const paragraph = document.createElement("p");
 paragraph.textContent = "The average starting Price is $30.";
 body.append(paragraph)
// Create another Header to dispay available freelancers
 const h2 = document.getElementsByTagName("h2")
 const title2 = document.createElement("h2")
 title2.textContent = "Available Freelancers"
 body.append(title2)
 
 const h3 = document.getElementsByTagName("h3")
 const title3 = document.createElement("h3")
 title3.textContent = "Name Occupation Starting Price"
 body.append(title3)

 //Freelancers are defined in an array to, need to map through to show reflect a change every 30 seconds.
 const freelancers = [
     { name: 'Alice', occupation: 'Writer', startingPrice: 30},
     { name: 'Bob', occupation: 'Teacher', startingPrice: 50} 
  ];
  //Create a function that allows me to calculate the average price
  let totalStartingPrice = 0;

  function calculateAverage() {
    const averageElement = document.getElementById('averagePrice');
    const average = totalStartingPrice / freelancers.length;
    averageElement.textContent = average.toFixed(2);
  }
  //Creating a new freelancer
  function addFreelancer(name, occupation, startingPrice) {
    const freelancersDiv = document.getElementById('freelancers');
  
    const freelancerElement = document.createElement('div');
    freelancerElement.textContent = `${name} - ${occupation}, Starting Price: $${startingPrice}`;
  
    freelancersDiv.appendChild(freelancerElement);
  

    totalStartingPrice += startingPrice;
    calculateAverage();
  }
  const mytable = document.getElementsByTagName("myTable")
  const table = document.createElement("myTable")
  body.append(myTable)

  
  // Adding new freelancer in 3 seconds once the page is refreshed
  setTimeout(() => {
    addFreelancer('Carol', 'Programmer', 70);
  }, 3000);
  
 














