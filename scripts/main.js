const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter")
  {
    getInputValue(); 
    
    removeInput(); 
    new_line(); 
  }
});

app.addEventListener("click", function(event) // allows the user to click and type in the terminal
{
  const input = document.querySelector("input"); 
  input.focus();
})


async function open_terminal() // sends opening lines of text
{
  createText("welcome");
  await delay(700);
  createText("configuring the terminal...");
  await delay(1500);
  createText("you can use the following commands to help you navigate the terminal:");
 
  createCommand("help", "lists all commands");
  createCommand("clear", "cleans the terminal");
  createCommand("sudo rm -rf", "[!] destroys every file. will break the computer. do not run this command.");

  await delay(500);
  new_line();
}

function close_terminal() // removes the terminal by clicking button
{
  var container = document.getElementsByClassName("container")[0]
  container.style.visibility = "hidden";
  var credit = document.getElementsByClassName("credit")[0]
  credit.style.visibility = "visible";
}

function destroy_terminal() // removes the terminal by running sudo rm -rf
{
  var container = document.getElementsByClassName("container")[0]
  container.style.visibility = "hidden";
  var credit = document.getElementsByClassName("credit")[0]
  credit.style.visibility = "hidden";
  var explosion = document.getElementsByClassName("explosion")[0]
  explosion.style.visibility = "visible";
}

function minimise_terminal() // hides the terminal but allows it to be reopened
{
  var container = document.getElementsByClassName("container")[0]
  container.style.visibility = "hidden";
  var exe = document.getElementsByClassName("exe")[0]
  exe.style.visibility = "visible"
}

function maximise_terminal() // shows the terminal again with the same content
{
  var container = document.getElementsByClassName("container")[0]
  container.style.visibility = "visible";
  var credit = document.getElementsByClassName("credit")[0]
  credit.style.visibility = "hidden";
  var exe = document.getElementsByClassName("exe")[0]
  exe.style.visibility = "hidden"
}

function new_line() // creates a new line with info and a pointer (>), and focuses the mouse on the terminal
{
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "root";
  span1.textContent = "@terminal:";
  span2.textContent = "~/aqwuah-portfolio";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icon")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() // removes what the user typed and replaces it with the coloured command (stripped and lowercase)
{
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() // check what the user typed and show output
{
  value = document.querySelector("input").value; // user input
  value = value.toLowerCase().trim() // makes it lowercase and removes whitespace

  if (value === "help")
  {
    trueValue(value); 
    createCommand("about me", "a little bit about what i do");
    createCommand("social -a/--all", "all my social networks");
    createCommand("skills", "things i know")
    createCommand("projects", "everything i have worked on");
  }

  else if (value === "projects")
  {
    trueValue(value);
    createText("project source code can be seen at <a href='https://github.com/aqwuah' target='_blank'><i class='fab fa-github white'></i> github.com/aqwuah</a>")
    createText("<a onclick='clicked_alert()'><u>click</u></a> / <abbr title='good hover(ing)?'>hover</abbr> the project for more info (if available)")
    createText("--- discord bots ---")
    createText("<abbr title='unreleased'>aquo</abbr> - multipurpose discord bot")
    createText("<a href='https://discord.gg/competitive'><u>rcl utility</u></a> - role management system for .gg/competitive (5.9k users)")
    createText("<abbr title='no longer in service'>wooly</abbr> - hypixel woolwars stats bot (1.6k users)")
    createText("<abbr title='private bot'>srb</abbr> - general management bot")
    createText("--- websites ---")
    createText("<a href='https://github.com/aqwuah/portfolio'><u>portfolio</u></a> - this!")
    createText("<a href='https://github.com/aqwuah/aquobin'><u>aquobin</u></a> - simple pastebin made using faunadb")
    createText("<a href='https://github.com/aqwuah/url-shortener'><u>url shortener</u></a> - custom url shortener")
    createText("<abbr title='private'>aquoogle</abbr> - personal search engine with no tracking")
    createText("<a href='https://chat.aqwuah.com'><u>chat</u></a> - chat website using firebase and react")
    createText("--- games ---")
    createText("<a href='https://runner.aqwuah.com'><u>runner</u></a> - unoriginal (not endless) runner i made in like 5 mins using unity")
    createText("<a href='https://frst.aqwuah.com'><u>frst</u></a> - gem collecting game set in a 3D forest surrounded by mountains")
    createText("<a href='https://pewpew.aqwuah.com'><u>pewpew</u></a> - 2D shooter / platformer with npc mechanics and a dialogue system")
  }

  else if (value === "about me")
  {
    trueValue(value);
    createText("hey, i'm aqua :D")
    createText("i spent alot of time doing anything tech related. i code, create bugs, play games, attempt to create games, fix tech, break tech etc. as well as this, i play the drums and piano, and enjoy helping others with coding.")
  }

  else if (value === "social -a" || value === "social --all")
  {
    trueValue(value);
    createText("<a href='https://en.pronouns.page/@aqwuah' target='_blank'><i class='fab fa-font-awesome-alt white'></i> @aqwuah (pronouns page)")
    createText("<a href='https://github.com/aqwuah' target='_blank'><i class='fab fa-github white'></i> aqwuah (github)")
    createText("<a href='https://discordapp.com/users/835582617323044914' target='_blank'><i class='fab fa-discord white'></i> aqua#5664 (discord)")
  }

  else if (value === "skills")
  {
    trueValue(value);
    createText("<a id='top-of-skills'>i spent most of my time dipping into random projects, and that means i have knowledge in lots of different things.</a>")
    createText("--- languages ---")
    createText("python - first language i learnt and i am now advanced in it, and use it all the time")
    createText("sql - used with python and am fairly advanced in accessing databases")
    createText("html, css - learnt these from a young age and am proficient in them")
    createText("js - learnt alongside the markup languages and am confident using it")
    createText("c - learning from harvard university, intermediate knowledge")
    createText("c# - working on game development and consequentially c#, basic knowledge")
    createText("rust - learning")
    createText("--- version control ---")
    createText("git - confident using a cli for version control")
    createText("--- ethical hacking ---")
    createText("networking - subnetting, the osi model etc")
    createText("osint - confident")
    createText("hacking skills - proficient and still learning")
    createText("social engineering - learning")
    createText("--- misc ---")
    createText("cyber security - confident in defence and offense (red + blue teams)")
    createText("game development - learning 2d and 3d development")
    createText("<a href='#top-of-skills'><u>(click to scroll to top)</u></a>")
  }

  else if (value === "social") // for if user forgets the -a / --all
  {
    midValue(value);
    createText("Didn't you mean: social -a/--all?")
  }

  else if (value === "social -a/--all" || value === "social -a --all" || value === "social --all -a") // for if user does both -a and --all
  {
    midValue(value);
    createText("You can use either -a or --all, not both!")
  }

  else if (value === "sudo rm -rf")
  {
    falseValue(value);
    createText("I WARNED YOU.")
    createText("SELF DESTRUCTING IN 3... 2... 1...")
    await delay(4000)
    destroy_terminal();
  }

  else if (value === "easter egg")
  {
    eggValue(value);
    createText("hello there.")
  }
  
  else if (value === "clear") // removing all previous text
  {
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e)); 
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }

  else if (value === "") // user just presses enter
  {
    // does nothing, just makes a new line
  }

  else
  {
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function destroyed_alert()
{
  alert("the website has been destroyed. don't say i didn't warn you.")
}

function clicked_alert()
{
  alert("well clicked")
}


function trueValue(value) // makes the pointer green
{
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icon success")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "success")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) // makes the pointer red
{  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icon error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function midValue(value) // makes the pointer yellow
{  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icon mid")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "mid")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function eggValue(value) // makes the pointer aqua
{  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icon egg")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "egg")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) // adds some text to the terminal
{
  const p = document.createElement("p");
  
  p.innerHTML = text;
  app.appendChild(p);
}

function createCommand(command, description) // creates an overview of a command with a blue command header and a description
{
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${command} <br/><span class='text'> ${description} </span>`;
  app.appendChild(p);
}

function change_window_size() // make terminal the size of the screen or reset
{
  var element = document.querySelector('.container').style
  if (element.maxWidth)
  {
    element.height = "100%";
    element.removeProperty('max-width');
    element.removeProperty('margin');
    element.removeProperty('border-radius')
  }
  else
  {
    element.height = "600px";
    element.setProperty('max-width', '900px')
    element.setProperty('margin', '20px')
    element.setProperty('border-radius', '6px')
  }
}

open_terminal();
