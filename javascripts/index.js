// getting nodes and initializing variables
const mailBtn = document.querySelector(".mail-btn");
const mailContainer = document.querySelector(".mail");
const leftContainer = document.querySelector(".left-container");
let errorMsg;
let errorImage;
let successMsg;

mailBtn.addEventListener("click", (event) => {
   validateEmail();
});

const validateEmail = () => {
   let mail = document.querySelector(".mail input");

   //regexp to check invalid characters
   const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i
   );

   // if false | if invalid characters
   if (!emailRegexp.test(mail.value)) {
      if (!mailContainer.classList.contains("error")) {
         //successMsg.remove();
         mailContainer.classList.add("error");
         errorImage = new Image();
         errorImage.src = "../images/icon-error.svg";
         errorImage.classList.add = "error-img";
         mailContainer.insertBefore(errorImage, mailContainer.children[1]);
         errorMsg = document.createElement("p");
         errorMsg.classList.add("msg", "msg-error");
         errorMsg.textContent = "Please provide a valid mail";
         leftContainer.appendChild(errorMsg);
         mailBtn.classList.add("btn-error");
         successMsg.remove();
      }
   } else {
      mail.value = "";
      if (mailContainer.classList.contains("error")) {
         mailContainer.classList.remove("error");
         errorMsg.remove();
         errorImage.remove();
      }
      if (!successMsg) {
         successMsg = document.createElement("p");
         successMsg.textContent = "Sucessfully subscribed!";
         successMsg.classList.add("msg", "msg-sucess");
         leftContainer.appendChild(successMsg);
      }
   }
};
