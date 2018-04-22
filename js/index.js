//Templates and words taken from AAs with higher score than CN Staff and more than one member
var templates = ["adj", "adj adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj adj2", "adj adj noun adj2", "adj adj2", "adj adj2", "adj adj2", "adj adj2", "adj adj2", "adj adj2 and noun adj2", "adj adj2 of adj adj2", "adj adj2 of adj adj2", "adj adj2 of adj adj2", "adj adj2 of adj noun", "adj adj2 of adj2", "adj adj2 of noun", "adj adj2 of noun noun and noun", "adj adj2", "adj adj2 adj2", "adj noun", "adj noun", "adj noun", "adj noun", "adj noun", "adj noun adj2", "adj noun adj2", "adj noun adj2", "adj noun adj2", "adj noun adj2", "adj noun adj2", "adj noun adj2", "adj noun adj2", "adj noun adj2", "adj nouns and noun nouns", "adj nouns in the noun", "gib", "gib", "gib", "gib", "gib", "gib", "gib adj adj2", "gib gib", "gib gib", "gib gib", "gib gib gib gib", "adj2 of adj adj adj2", "adj2 of adj adj2", "adj2 of adj adj2", "adj2 of adj adj2", "adj2 of adj adj2", "adj2 of adj adj2", "adj2 of noun", "adj2 of the adj2", "adj2", "adj2 adj adj noun", "adj2 noun of noun adj2", "adj2 of noun", "adj2 of noun", "adj2 of noun", "adj2 of the adj noun", "adj2 of the noun adj2", "adj2 suf", "noun2 adj2", "noun2 noun2", "noun2 noun2 noun2", "noun2 noun2 noun adj2", "noun2 noun noun", "noun", "noun", "noun", "noun", "noun", "noun", "noun", "noun", "noun", "noun", "noun adj", "noun gib", "noun adj2", "noun adj2", "noun adj2", "noun adj2 of adj adj2", "noun adj2", "noun noun", "noun noun", "noun of adj noun adj2", "noun suf", "The adj adj nouns of the noun", "The adj adj2", "The adj adj2", "The adj adj2", "The adj adj2", "The adj adj2", "The adj adj2", "The adj adj2 of adj2", "The adj adj2 of adj2", "The adj adj2", "The adj adj2", "The adj adj2", "The adj noun", "The adj noun", "The adj2", "The adj2", "The adj2 of gib", "The adj2 of noun and noun", "The adj2 of the adj noun", "The adj2 of the noun", "The adj2 of the noun", "The noun2", "The noun", "The noun adj2", "The noun adj2", "The noun adj2", "The noun adj2", "The noun adj2"];

var pos = {
  //Parts of speech: adj, adj2, adj3, noun, nouns, noun2, gib (gibberish/foreign), suf (suffixes)
  "adj": ["Aged", "Ancient", "Autumn", "Billowing", "Bitter", "Black", "Blue", "Bold", "Broken", "Cold", "Cool", "Crimson", "Damp", "Dark", "Delicate", "Divine", "Dry", "Empty", "Falling", "Flat", "Floral", "Fragrant", "Frosty", "Green", "Hidden", "Holy", "Icy", "Late", "Lingering", "Little", "Lively", "Long", "Misty", "Muddy", "Nameless", "Old", "Patient", "Polished", "Proud", "Purple", "Quiet", "Red", "Restless", "Rough", "Shy", "Silent", "Small", "Snowy", "Solitary", "Sparkling", "Spring", "Still", "Summer", "Throbbing", "Twilight", "Wandering", "Weathered", "White", "Wild", "Winter", "Wispy", "Withered", "Young", "Giant", "Shy", "Defiant", "Calm", "Docile"],

  "adj2": ["Aged", "Ancient", "Autumn", "Billowing", "Bitter", "Black", "Blue", "Bold", "Broken", "Cold", "Cool", "Crimson", "Damp", "Dark", "Delicate", "Divine", "Dry", "Empty", "Falling", "Flat", "Floral", "Fragrant", "Frosty", "Green", "Hidden", "Holy", "Icy", "Late", "Lingering", "Little", "Lively", "Long", "Misty", "Muddy", "Nameless", "Old", "Patient", "Polished", "Proud", "Purple", "Quiet", "Red", "Restless", "Rough", "Shy", "Silent", "Small", "Snowy", "Solitary", "Sparkling", "Spring", "Still", "Summer", "Throbbing", "Twilight", "Wandering", "Weathered", "White", "Wild", "Winter", "Wispy", "Withered", "Young", "Giant", "Shy", "Defiant", "Calm", "Docile"],

  "adj2": ["Aged", "Ancient", "Autumn", "Billowing", "Bitter", "Black", "Blue", "Bold", "Broken", "Cold", "Cool", "Crimson", "Damp", "Dark", "Delicate", "Divine", "Dry", "Empty", "Falling", "Flat", "Floral", "Fragrant", "Frosty", "Green", "Hidden", "Holy", "Icy", "Late", "Lingering", "Little", "Lively", "Long", "Misty", "Muddy", "Nameless", "Old", "Patient", "Polished", "Proud", "Purple", "Quiet", "Red", "Restless", "Rough", "Shy", "Silent", "Small", "Snowy", "Solitary", "Sparkling", "Spring", "Still", "Summer", "Throbbing", "Twilight", "Wandering", "Weathered", "White", "Wild", "Winter", "Wispy", "Withered", "Young", "Giant", "Shy", "Defiant", "Calm", "Docile"],

  "adj3": ["Aged", "Ancient", "Autumn", "Billowing", "Bitter", "Black", "Blue", "Bold", "Broken", "Cold", "Cool", "Crimson", "Damp", "Dark", "Delicate", "Divine", "Dry", "Empty", "Falling", "Flat", "Floral", "Fragrant", "Frosty", "Green", "Hidden", "Holy", "Icy", "Late", "Lingering", "Little", "Lively", "Long", "Misty", "Muddy", "Nameless", "Old", "Patient", "Polished", "Proud", "Purple", "Quiet", "Red", "Restless", "Rough", "Shy", "Silent", "Small", "Snowy", "Solitary", "Sparkling", "Spring", "Still", "Summer", "Throbbing", "Twilight", "Wandering", "Weathered", "White", "Wild", "Winter", "Wispy", "Withered", "Young", "Giant", "Shy", "Defiant", "Calm", "Docile"],

  "noun": [ "Bird", "Breeze", "Brook", "Bush", "Butterfly", "Cherry", "Cloud", "Darkness", "Dawn", "Dew", "Dream", "Dust", "Feather", "Field", "Fire", "Firefly", "Flower", "Fog", "Forest", "Frog", "Frost", "Glade", "Glitter", "Grass", "Hamster", "Haze", "Hill", "Lake", "Leaf", "Meadow", "Mind", "Moon", "Morning", "Mountain", "Night", "Paper", "Pine", "Pond", "Rain", "Resonance", "River", "Sea", "Shadow", "Shape", "Silence", "Sky", "Smoke", "Snow", "Snowflake", "Sound", "Star", "Sun", "Sunset", "Surf", "Thunder", "Trail", "Tree", "Violet", "Voice", "Water", "Waterfall", "Wave", "Wildflower", "Wind", "Wood", "Girl", "Tone", "Joy"],

  "nouns": [ "Bird", "Breeze", "Brook", "Bush", "Butterfly", "Cherry", "Cloud", "Darkness", "Dawn", "Dew", "Dream", "Dust", "Feather", "Field", "Fire", "Firefly", "Flower", "Fog", "Forest", "Frog", "Frost", "Glade", "Glitter", "Grass", "Hamster", "Haze", "Hill", "Lake", "Leaf", "Meadow", "Mind", "Moon", "Morning", "Mountain", "Night", "Paper", "Pine", "Pond", "Rain", "Resonance", "River", "Sea", "Shadow", "Shape", "Silence", "Sky", "Smoke", "Snow", "Snowflake", "Sound", "Star", "Sun", "Sunset", "Surf", "Thunder", "Trail", "Tree", "Violet", "Voice", "Water", "Waterfall", "Wave", "Wildflower", "Wind", "Wood", "Girl", "Tone", "Joy"],

  "noun2": [ "Bird", "Breeze", "Brook", "Bush", "Butterfly", "Cherry", "Cloud", "Darkness", "Dawn", "Dew", "Dream", "Dust", "Feather", "Field", "Fire", "Firefly", "Flower", "Fog", "Forest", "Frog", "Frost", "Glade", "Glitter", "Grass", "Hamster", "Haze", "Hill", "Lake", "Leaf", "Meadow", "Mind", "Moon", "Morning", "Mountain", "Night", "Paper", "Pine", "Pond", "Rain", "Resonance", "River", "Sea", "Shadow", "Shape", "Silence", "Sky", "Smoke", "Snow", "Snowflake", "Sound", "Star", "Sun", "Sunset", "Surf", "Thunder", "Trail", "Tree", "Violet", "Voice", "Water", "Waterfall", "Wave", "Wildflower", "Wind", "Wood", "Girl", "Tone", "Joy"],

  "suf": ["Inc", "X"],

  "gib": ["Avaritia", "Grata", "Insieme", "Invicta", "Kaskus", "La", "Malorum", "Menotah", "Non", "Nusantara", "Omnium", "Radix", "Sengoku", "Shangri", "Sileo", "Tenebris", "Vae", "Victis", "X"]
};

//Do not edit below this point
var keys = Object.keys(pos);

function generateRandomName(prefill) {
  //Prefill is an object containing key/value pairs of the template word to be replaced and either an array of possible replacement words or a string containing one word to use
  if (typeof prefill !== "object") prefill = {}; //if prefill is not supplied (or not an object) turn it into an empty object so things don't break
  var template = prefill.template || templates[~~(Math.random() * templates.length)]; //if the template is prefilled, choose that, else a random one
  template = template.split(" "); //split the template into words so we can fill it

  var word;
  for (var i = 0; i < template.length; i++) {
    word = template[i];
    if (pos[word]) { //if the word is something we want to replace (i.e. not "the", "of", etc.)
      if (prefill[word]) { //if we have a prefill
        if (typeof prefill[word] === "object" && prefill[word].length) { //if prefill is an array
          template[i] = prefill[word].splice(~~(Math.random() * prefill[word].length), 1)[0];
        } else { //if prefill is a string (or other non-object data type)
          teplate[i] = prefill[word];
          prefill[word] = undefined; //remove the word so we can't reuse it
        }
      } else {
        template[i] = pos[word][~~(Math.random() * pos[word].length)];
      }
    }
  }
  return template.join(" ");
}

function generateMultiple(e) {
  if (!e || e.keyCode === undefined || e.keyCode === 13) {
    //If we call programmatically, click, or hit Enter
    var i;

    var output = document.getElementById("output");
    if (output.style.display === "none") {
      //Update templates and pos
      var textLists = document.getElementById("textLists");
      templates = textLists.getElementsByClassName("templates")[0].firstElementChild.value.split(/\n+/);
      for (i = 0; i < keys.length; i++) pos[keys[i]] = textLists.getElementsByClassName(keys[i])[0].firstElementChild.value.split(/\n+/);
      
       //Toggle editor/output
      output.style.display = "";
      document.getElementById("listEditor").style.display = "none";
    }

    //Get number to generate. If it's invalid, set it to 10.
    var number = parseInt(document.getElementById("numNames").value);
    if (isNaN(number) || !isFinite(number)) number = 10;
    document.getElementById("numNames").value = number;

    //This is far from best practices, but it's late and I'm lazy
    var txt = "<tr id='randomNames'><th colspan=2>Generated Names</th></tr>";
    for (i = 0; i < number; i++) txt += "<tr><td>" + (i + 1) + ")</td><td>" + generateRandomName() + "</td></tr>";
    output.innerHTML = txt;
  }
}

function editLists(e) {
  var listContainer = document.getElementById("listEditor");
  if (listContainer.style.display === "none") {
    document.getElementById("output").style.display = "none";
    listContainer.style.display = ""; //Toggle editor/output
  }
}

function showList(e) {
	document.getElementById("descRow").appendChild(document.getElementsByClassName(e.target.className)[1]);
document.getElementById("textLists").appendChild(document.getElementsByClassName(e.target.className)[2]);
}

//Add page interactivity
document.getElementById("generator").addEventListener("click", generateMultiple, false);
document.getElementById("numNames").addEventListener("keyup", generateMultiple, false);
document.getElementById("edit").addEventListener("click", editLists, false);
var buttons = document.getElementById("buttonPanel").children;
for (var i = 0; i < buttons.length; i++) buttons[i].addEventListener("click", showList, false);

//Fill the text boxes with their default values
var textLists = document.getElementById("textLists");
for (i = 0; i < keys.length; i++) textLists.getElementsByClassName(keys[i])[0].firstElementChild.value = pos[keys[i]].join("\n");
textLists.getElementsByClassName("templates")[0].firstElementChild.value = templates.join("\n");

document.getElementById("listEditor").style.display = "none";
generateMultiple();