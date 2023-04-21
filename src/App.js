import React from "react";


function App() {

  return (
    React.createElement('div',null,
  React.createElement('h1',{className:"h1"},'Learn Web Development'),
React.createElement('p',{className:"p"},`Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.`),
React.createElement('p',{className:'p'},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the',React.createElement('a',{href:'#'},'the rest of MDN'),React.createElement('p',{className:'p'},'and other intermediate to advanced resources that assume a lot of previous knowledge.')),
React.createElement('p',{className:'p'},'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.'),
)
  );
}

export default App;

