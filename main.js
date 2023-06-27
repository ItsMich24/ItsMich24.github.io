let app = document.getElementById('typewriter'); 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a25386;"> Desarrollo sitios web, me gusta la tecnlogia y la música.</span>')
  .pauseFor(200)
  .deleteChars(8)
  .start();
