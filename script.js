const animals = [
    { name: "Lion",
      img: "https://plus.unsplash.com/premium_photo-1661962845905-879dbe49c086?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      about: "A large wild cat and apex predator of African savannas"
    },

    { name: "Tiger",
      img: "https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlnZXJ8ZW58MHx8MHx8fDA%3D",
      about: "The largest living cat, recognizable by its orange coat and black stripes, and a powerful solitary hunter native to Asia."
    },

    { name: "Elephant",
      img: "https://images.unsplash.com/photo-1544211412-2a32426e7fd5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxwaGFudHxlbnwwfHwwfHx8MA%3D%3D",
      about: "The largest land animal, highly intelligent and social."
    },

    { name: "Giraffe",
      img: "https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lyYWZmZXxlbnwwfHwwfHx8MA%3D%3D",
      about: "The tallest land animal."
    },

    { name: "Zebra",
      img: "https://images.unsplash.com/photo-1574145967029-52f4cd6b7e76?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHplYnJhfGVufDB8fDB8fHww",
      about: "An African wild horse with distinctive black-and-white stripes "
    },

    { name: "Panda",
      img: "https://images.unsplash.com/photo-1703248187251-c897f32fe4ec?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuZGF8ZW58MHx8MHx8fDA%3D",
      about: "A black-and-white bear native to China that feeds almost entirely on bamboo and is a global symbol of conservation."
    },

    { name: "Kangaroo",
      img: "https://plus.unsplash.com/premium_photo-1666777247057-40fd5ff166c4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FuZ2Fyb298ZW58MHx8MHx8fDA%3D",
      about: "An Australian marsupial that hops on powerful hind legs and carries its young in a pouch."
    },

    { name: "Koala",
      img: "https://images.unsplash.com/photo-1579972383667-4894c883d674?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29hbGF8ZW58MHx8MHx8fDA%3D",
      about: "A tree-dwelling Australian marsupial that eats eucalyptus leaves and sleeps up to 20 hours a day."
    },

    { name: "Penguin",
      img: "https://images.unsplash.com/photo-1712921674663-0bf5370a2ce7?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVuZ3VpbnxlbnwwfHwwfHx8MA%3D%3D",
      about: "A flightless seabird superbly adapted to swimming, found mostly in the Southern Hemisphere."
    },

    { name: "Dolphin",
      img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9scGhpbnN8ZW58MHx8MHx8fDA%3D",
      about: "A highly intelligent marine mammal known for playful behavior, echolocation, and complex social groups."
    },

    { name: "Whale",
      img: "https://plus.unsplash.com/premium_photo-1724668625323-ccd85574c6b9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2hhbGVzfGVufDB8fDB8fHww",
      about: "A massive marine mammal; the blue whale is the largest animal ever known to have lived."
    },

    { name: "Shark",
      img: "https://images.unsplash.com/photo-1531959870249-9f9b729efcf4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hhcmt8ZW58MHx8MHx8fDA%3D",
      about: "A cartilaginous fish and ancient ocean predator with keen senses and rows of replaceable teeth."
    },

    { name: "Eagle",
      img: "https://images.unsplash.com/photo-1497119146420-012f8fc80a3a?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFnbGV8ZW58MHx8MHx8fDA%3D",
      about: "A large bird of prey with sharp vision and powerful talons, often a symbol of strength and freedom."
    },

    { name: "Owl",
      img: "https://plus.unsplash.com/premium_photo-1664304409780-6d31241e9058?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3dsfGVufDB8fDB8fHww",
      about: "A nocturnal bird of prey with silent flight and the ability to rotate its head widely to spot prey."
    },

    { name: "Parrot",
      img: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFycm90fGVufDB8fDB8fHww",
      about: "A colorful, intelligent bird known for mimicking sounds and human speech."
    },

    { name: "Peacock",
      img: "https://images.unsplash.com/photo-1559048958-4d1a3dc247d1?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVhY29ja3xlbnwwfHwwfHx8MA%3D%3D",
      about: "A large pheasant whose males display iridescent tail feathers in a spectacular fan during courtship."
    },

    { name: "Flamingo",
      img: "https://images.unsplash.com/photo-1629394661462-13ea8fe156ef?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxhbWluZ298ZW58MHx8MHx8fDA%3D",
      about: "A wading bird with long legs and pink plumage that comes from pigments in the algae and shrimp it eats."
    },

    { name: "Crocodile",
      img: "https://images.unsplash.com/photo-1696583867317-deeafd2ce8a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyb2NvZGlsZXxlbnwwfHwwfHx8MA%3D%3D",
      about: "A large aquatic reptile with a powerful bite, among the oldest surviving predators on Earth."
    },

    { name: "Snake",
      img: "https://images.unsplash.com/photo-1697203820706-7ae117f3d3fb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNuYWtlfGVufDB8fDB8fHww",
      about: "A legless reptile that swallows prey whole; some species are venomous while others constrict."
    },

    { name: "Turtle",
      img: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHVydGxlfGVufDB8fDB8fHww",
      about: "A reptile protected by a bony shell; sea turtles migrate thousands of miles across the oceans."
    },

    { name: "Frog",
      img: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvZ3xlbnwwfHwwfHx8MA%3D%3D",
      about: "An amphibian that lives both in water and on land and is known for jumping and croaking calls."
    },

    { name: "Rabbit",
      img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFiYml0fGVufDB8fDB8fHww",
      about: "A small mammal with long ears and strong hind legs, known for rapid breeding and burrowing."
    },

    { name: "Fox",
      img: "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm94fGVufDB8fDB8fHww",
      about: "A clever, adaptable member of the dog family recognized by its bushy tail and pointed snout."
    },

    { name: "Wolf",
      img: "https://images.unsplash.com/photo-1667938318975-823e395d74d5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29sZnxlbnwwfHwwfHx8MA%3D%3D",
      about: "A social wild canine that hunts in packs and is the ancestor of the domestic dog."
    },
 
    { name: "Otter",
      img: "https://images.unsplash.com/photo-1720198270654-dbe3ca4b838f?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3R0ZXJ8ZW58MHx8MHx8fDA%3D",
      about: "A playful aquatic mammal with dense fur that hunts fish and uses tools to crack shellfish."
    },

    { name: "Seal",
      img: "https://images.unsplash.com/photo-1565413294262-fa587c396965?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhbHxlbnwwfHwwfHx8MA%3D%3D",
      about: "A marine mammal that swims gracefully in water but moves awkwardly on land."
    },

    { name: "Octopus",
      img: "https://images.unsplash.com/photo-1642672084202-00b8d61cf24c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9jdG9wdXN8ZW58MHx8MHx8fDA%3D",
      about: "A highly intelligent sea creature with eight arms and the ability to change color and shape."
    },

    { name: "Jellyfish",
      img: "https://images.unsplash.com/photo-1543007168-5fa9b3c5f5fb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2N0b3B1c3xlbnwwfHwwfHx8MA%3D%3D",
      about: "A gelatinous ocean drifter with stinging tentacles and one of the oldest animal body plans."
    },

    { name: "Butterfly",
      img: "https://images.unsplash.com/photo-1599631438215-75bc2640feb8?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnV0dGVyZmx5fGVufDB8fDB8fHww",
      about: "A colorful insect that transforms from caterpillar to winged adult through metamorphosis."
    },

    { name: "Bee",
      img: "https://images.unsplash.com/photo-1589526261866-ab0d34f8dc19?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVlfGVufDB8fDB8fHww",
      about: "A vital pollinating insect that lives in colonies and produces honey and beeswax."
    },

    { name: "Ant",
      img: "https://images.unsplash.com/photo-1629678945317-aeaf81f49fe6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW50fGVufDB8fDB8fHww",
      about: "A tiny but strong social insect that lives in highly organized colonies."
    },

    { name: "Spider",
      img: "https://images.unsplash.com/photo-1567210590635-06998f86961e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwaWRlcnxlbnwwfHwwfHx8MA%3D%3D",
      about: "An eight-legged arachnid that spins silk webs to trap prey."
    }
];

 

 function showAnimal(arr){
  arr.forEach(function(animals){

    let card = document.createElement("div")
    card.classList.add("card")

 let imag = document.createElement("img");
 imag.src = animals.img
 imag.classList.add("bg-img")

 let blured = document.createElement("div")
 blured.style.backgroundImage = `url(${animals.img})`
 blured.classList.add("blurred-layer")

 let content = document.createElement("div")
 content.classList.add("content")

 let h3 = document.createElement("h3")
 h3.textContent = animals.name

 let p = document.createElement("p")
 p.classList.add("ptag")
 p.textContent = animals.about



 content.appendChild(h3)
 content.appendChild(p)


 card.appendChild(imag)
 card.appendChild(blured)
 card.appendChild(content)


 document.querySelector(".container").appendChild(card)


  })
 }

 showAnimal(animals)

 let inp = document.querySelector("input")

 inp.addEventListener("input", function(){
  let newAnimal = animals.filter((animal)=>{
    return animal.name.toLowerCase().startsWith(inp.value.toLowerCase())
   })
   if(newAnimal.length === 0){
    document.querySelector(".container").innerHTML = ""

    let err = document.createElement("p");
    err.innerHTML = "ANIMAL NOT FOUND IN THE DIRECTORY"
    err.classList.add("err")
    document.querySelector(".container").appendChild(err)
   
   }
    
 else{

 
   document.querySelector(".container").innerHTML = ""
   showAnimal(newAnimal)
 }
 })