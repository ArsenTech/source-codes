const langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a");
let lang = localStorage.getItem("lang") || "english";
let index = parseInt(localStorage.getItem("langIndex")) || 0;

if(lang==="english"){
     langs.querySelector(".active").classList.remove("active");
     link[0].classList.add("active");
     changeLang("english")
} else{
     langs.querySelector(".active").classList.remove("active");
     link[index].classList.add("active");
     changeLang(lang)
}

link.forEach((el,i)=>el.addEventListener("click", ()=>{
     langs.querySelector(".active").classList.remove("active");
     el.classList.add("active");
     const attr = el.dataset.lang;
     lang = attr;
     index = i;
     if(lang!=="english") changeLang(lang)
     else changeLang("english");
     localStorage.setItem("lang", attr);
     localStorage.setItem("langIndex",i);
}))

async function changeLang(lang){
     const res = await fetch(`./i18n/${lang}.json`)
     const data = await res.json()
     for(const key in data){
          const elem = document.querySelector(`.lng-${key}`)
          elem.textContent = data[key]
     }
}