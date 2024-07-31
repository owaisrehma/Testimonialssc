const container = [
    {
        name: "Mohd Ubais",
        photoUrl: "./Owais.jpg", 
        text: "I spent 1 year in the ssc institution. It provide best education and best faculty to the student."
    },

    {
        name: "Alexender Hipp",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        text: "Education is the most powerful weapon"
    },

    {
        name: "Albert Dera",
        photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        text: "Education is must"
    },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updatetestimonial();


function updatetestimonial(){
    const {name, photoUrl, text} = container[idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    usernameEl.innerHTML = name;
    idx++;
    if (idx === container.length){
    idx = 0;
    }

    setTimeout(()=>{
     updatetestimonial()

    },2000);

};