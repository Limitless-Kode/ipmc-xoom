const chatForm = document.querySelector("#chatForm");
const chatMessage = document.querySelector("#chatMessage");
const messages = document.querySelector('.messages');
const random = Math.floor(Math.random() * 1000);

chatForm.addEventListener("submit",(e)=>{
    const message = chatMessage.value.trim();
    e.preventDefault();

    
    if(message !== "" && message !== null){
        chatMessage.value = "";
        socket.emit("chat",{username: `Peter${random}`,message: message});
    }
});


function createMessage(data){
    const message = document.createElement("div");
    message.classList.add("message");
    data.username == `Peter${random}` && message.classList.add("mine");

    const header = document.createElement("div");
    header.classList.add("header");

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.innerText = data.username[0]

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerText = data.username;

    const text = document.createElement("div");
    text.classList.add("text");

    const paragraph = document.createElement("p");
    paragraph.innerText = data.message;

    text.appendChild(paragraph);
    header.appendChild(avatar);
    header.appendChild(title);
    message.appendChild(header);
    message.appendChild(text);

    return message;
}

socket.on("chat",(data)=>{
    messages.append(createMessage(data))
});