/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Benjamin Loughmiller",
    photo: "images/profilePicture.png",
    favoriteFoods: [
        'Pizza', 
        'Enchiladas', 
        'Ice Cream', 
        'Eggnog'
    ],
    hobbies: [
        'Sports',
        'Soldering',
        'Drawing',
        'Board Games'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
// This occurs outside of the object definition.
myProfile.placesLived.push(
    {
        place: 'Boise, ID',
        length: "4 years"
    },
    {
        place: 'Lancaster, CA',
        length: '12 years'
    },
    {
        place: 'Lexington Park, MD',
        length: "1 year"
    },
    {
        place: 'Destin, FL',
        length: "2 years"
    },
    {
        place: 'Oakland, CA',
        length: "2 years"
    }

  );

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});
