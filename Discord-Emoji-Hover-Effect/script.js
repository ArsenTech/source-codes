let emoji = document.getElementById("emoji");
let emojiArr = [
     "😃",
     "😍",
     "😘",
     "🥰",
     "😋",
     "😜",
     "🤑",
     "🤔",
     "😏",
     "🤕",
     "😴",
     "🤠",
     "😎",
     "😳",
     "😱",
     "😛",
];
let incr = 0;
emoji.innerHTML = emojiArr[incr];
incr++;
emoji.addEventListener("mouseover", ()=>{
     if(incr == emojiArr.length){
          incr = 0;
     } else{
          emoji.innerHTML = emojiArr[incr];
          incr++;
     }
})