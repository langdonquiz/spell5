const wordLists = {

"Summer 1 Week 4": [
  { word: "unhappy", definition: "not happy", examples: ["She looked ______ today.", "He felt ______ about the test."] },
  { word: "unfair", definition: "not fair", examples: ["That rule is ______!", "It's ______ to cheat."] },
  { word: "unarmed", definition: "not carrying weapons", examples: ["The man was ______.", "The guards were ______ at the gate."] },
  { word: "unfasten", definition: "to undo or open something", examples: ["Please ______ your coat.", "He tried to ______ the buttons."] },
  { word: "unwell", definition: "not feeling well", examples: ["I feel ______ today.", "She stayed home because she was ______."] },
  { word: "undo", definition: "to take back or reverse", examples: ["Can you ______ the knot?", "Click here to ______ your last move."] },
  { word: "unlock", definition: "to open a lock", examples: ["I will ______ the door.", "She forgot how to ______ her phone."] },
  { word: "unbolt", definition: "to slide a bolt open", examples: ["He tried to ______ the gate.", "______ the door from inside."] },
  { word: "unknown", definition: definition: "not known or familiar", examples: ["We took an ______ path.", "An ______ number called me."] },
  { word: "unable", definition: "not able to do something", examples: ["I was ______ to lift it.", "He is ______ to attend."] },
  { word: "unload", definition: "to take things out", examples: ["Time to ______ the car.", "We ______ the boxes from the van."] },
  { word: "unfold", definition: "to open something folded", examples: ["Please ______ your map.", "She ______ the blanket."] },
  { word: "unfit", definition: "not in good health or not suitable", examples: ["He was ______ to run.", "That toy is ______ for babies."] },
  { word: "unhealthy", definition: "not healthy", examples: ["Eating too much cake is ______.", "That snack is ______."] },
  { word: "untidy", definition: "not neat or clean", examples: ["Your room is ______.", "Pick up these ______ clothes."] },
  { word: "unusual", definition: "not common or normal", examples: ["That's an ______ pet.", "She wore an ______ dress."] },
  { word: "unpopular", definition: "not liked by many", examples: ["The rule was ______.", "He was ______ at school."] },
  { word: "untrained", definition: "not taught or prepared", examples: ["The dog is still ______.", "I'm ______ for that job."] }
],

"Summer 1 Week 6": [
  { word: "the", definition: "used to point to a specific thing", examples: ["Close ______ door.", "I saw ______ dog outside."] },
  { word: "to", definition: "shows direction or purpose", examples: ["Give it ______ her.", "We went ______ the shop."] },
  { word: "said", definition: "spoke words aloud", examples: ["She ______ hello to me.", "He ______ it was time to go."] },
  { word: "were", definition: "past form of 'are'", examples: ["They ______ happy.", "We ______ at the park."] },
  { word: "his", definition: "belongs to a boy or man", examples: ["That is ______ bag.", "He lost ______ pencil."] },
  { word: "a", definition: "one of something", examples: ["I saw ______ cat.", "She has ______ apple."] },
  { word: "today", definition: "the current day", examples: ["We have P.E. ______.", "Is it sunny ______?"] },
  { word: "says", definition: "talks or tells", examples: ["He ______ it’s time to eat.", "Mum ______ it’s bedtime."] },
  { word: "was", definition: "past form of 'is'", examples: ["She ______ late.", "It ______ a good day."] },
  { word: "has", definition: "owns or holds", examples: ["He ______ a new toy.", "She ______ a pet rabbit."] },
  { word: "do", definition: "to act or perform something", examples: ["Can you ______ your work?", "What shall we ______ now?"] },
  { word: "of", definition: "shows belonging or part", examples: ["A glass ______ water.", "A piece ______ cake."] },
  { word: "are", definition: "present form of 'be'", examples: ["You ______ kind.", "We ______ going home."] },
  { word: "is", definition: "tells what someone or something is", examples: ["She ______ my friend.", "The ball ______ red."] },
  { word: "I", definition: "yourself when speaking", examples: ["______ am happy.", "______ like pizza."] },
  { word: "you", definition: "the person being spoken to", examples: ["______ are funny!", "Can ______ help me?"] },
  { word: "your", definition: "belonging to you", examples: ["Is this ______ book?", "I like ______ drawing."] },
  { word: "they", definition: "a group of people or things", examples: ["______ are my friends.", "______ live next door."] }
],

"Summer 1 Week 7": [
  { word: "cats", definition: "more than one cat", examples: ["The ______ chased a mouse.", "Two black ______ sat on the wall."] },
  { word: "hunting", definition: "looking for animals or something to find", examples: ["They went ______ for treasure.", "The fox is ______ for food."] },
  { word: "grander", definition: "more impressive or big", examples: ["Her dress was even ______ than before.", "This house is ______ than ours."] },
  { word: "unhappy", definition: "not happy", examples: ["She looked ______ today.", "He felt ______ about the test."] },
  { word: "football", definition: "a sport played with a ball and feet", examples: ["We played ______ at lunch.", "He kicked the ______ far."] },
  { word: "dogs", definition: "more than one dog", examples: ["The ______ barked loudly.", "Three ______ ran in the park."] },
  { word: "hunted", definition: "looked for animals", examples: ["The wolf ______ in a pack.", "They ______ in the forest."] },
  { word: "grandest", definition: "most grand or fancy", examples: ["This is the ______ room in the house.", "She wore her ______ dress."] },
  { word: "undo", definition: "to take back or reverse", examples: ["Can you ______ the knot?", "Click here to ______ your last move."] },
  { word: "playground", definition: "a place for children to play", examples: ["We ran to the ______ after lunch.", "There’s a swing in the ______."] },
  { word: "spends", definition: "uses money or time", examples: ["She ______ time with her family.", "He ______ all his pocket money."] },
  { word: "hunter", definition: "someone who looks for animals", examples: ["The ______ waited quietly.", "A lion is a great ______."] },
  { word: "fresher", definition: "more clean or new", examples: ["This fruit is ______ than that one.", "The air is ______ today."] },
  { word: "unload", definition: "to take things out", examples: ["Time to ______ the car.", "We ______ the boxes from the van."] },
  { word: "farmyard", definition: "the area around a farm building", examples: ["The chickens ran in the ______.", "The ______ was noisy and muddy."] },
  { word: "said", definition: "spoke words aloud", examples: ["She ______ hello to me.", "He ______ it was time to go."] },
  { word: "says", definition: "talks or tells", examples: ["He ______ it’s time to eat.", "Mum ______ it’s bedtime."] },
  { word: "are", definition: "present form of 'be'", examples: ["You ______ kind.", "We ______ going home."] }
],

"Summer 2 Week 1": [
  { word: "pocket", definition: "a small pouch in clothes to hold things", examples: ["He put his keys in his ______.", "Check your ______ for coins."] },
  { word: "thunder", definition: "a loud noise during a storm", examples: ["I heard ______ last night.", "The ______ made me jump."] },
  { word: "table", definition: "a piece of furniture with a flat top", examples: ["We ate dinner at the ______.", "Put the book on the ______."] },
  { word: "trousers", definition: "clothing for your legs", examples: ["He wore blue ______.", "My ______ have a tear."] },
  { word: "wallet", definition: "a small case for money and cards", examples: ["Dad lost his ______.", "She opened her ______."] },
  { word: "rabbit", definition: "a small animal with long ears", examples: ["The ______ hopped away.", "We fed the ______ some carrots."] },
  { word: "sunset", definition: "when the sun goes down", examples: ["We watched the ______ together.", "The ______ was beautiful."] },
  { word: "curtain", definition: "cloth that covers a window", examples: ["I closed the ______.", "Pull the ______ open."] },
  { word: "jumper", definition: "a warm piece of clothing", examples: ["She wore her red ______.", "He folded his ______."] },
  { word: "water", definition: "a clear liquid we drink", examples: ["Drink some ______.", "She poured ______ into a glass."] },
  { word: "carrot", definition: "a long orange vegetable", examples: ["I ate a raw ______.", "The rabbit nibbled a ______."] },
  { word: "happy", definition: "feeling good or joyful", examples: ["She was ______ on her birthday.", "He smiled because he was ______."] },
  { word: "tablet", definition: "a flat computer or a small pill", examples: ["I played a game on the ______.", "He took a ______ for his cold."] },
  { word: "glasses", definition: "lenses worn to help see", examples: ["She wears ______ to read.", "Clean your ______."] },
  { word: "toilet", definition: "a bathroom fixture for waste", examples: ["Go to the ______ before we leave.", "The ______ is upstairs."] },
  { word: "backpack", definition: "a bag carried on your back", examples: ["He packed his ______ for school.", "She zipped up her ______."] },
  { word: "apple", definition: "a round fruit with red or green skin", examples: ["I ate an ______ at lunch.", "She brought an ______ for snack."] },
  { word: "orange", definition: "a citrus fruit or colour", examples: ["Peel the ______ before eating.", "She wore an ______ jumper."] }
],

"Summer 2 Week 2": [
  { word: "there", definition: "in that place", examples: ["Put it over ______.", "He is sitting over ______."] },
  { word: "here", definition: "in this place", examples: ["Come and sit ______.", "The book is right ______."] },
  { word: "quiet", definition: "not noisy", examples: ["Be ______ in the library.", "The house was very ______."] },
  { word: "won", definition: "past tense of win", examples: ["He ______ the game.", "Our team ______ the match."] },
  { word: "to", definition: "shows direction or purpose", examples: ["Give it ______ her.", "We went ______ the shop."] },
  { word: "their", definition: "belonging to them", examples: ["It is ______ dog.", "They lost ______ bags."] },
  { word: "hear", definition: "to listen with your ears", examples: ["Can you ______ that noise?", "I ______ music."] },
  { word: "see", definition: "to use your eyes", examples: ["I ______ the moon.", "Can you ______ the bird?"] },
  { word: "sun", definition: "the star that gives us light", examples: ["The ______ is shining.", "Wear a hat in the ______."] },
  { word: "two", definition: "the number 2", examples: ["She has ______ cats.", "I see ______ birds."] },
  { word: "they’re", definition: "they are", examples: ["______ going to the park.", "______ my friends."] },
  { word: "quite", definition: "very or a little bit", examples: ["That was ______ hard.", "She is ______ tall."] },
  { word: "sea", definition: "a large body of salt water", examples: ["We swam in the ______.", "The boat sailed on the ______."] },
  { word: "son", definition: "a male child", examples: ["Their ______ is 7 years old.", "He has a ______ and a daughter."] },
  { word: "be", definition: "to exist or happen", examples: ["He wants to ______ a vet.", "It will ______ fine."] },
  { word: "bee", definition: "an insect that makes honey", examples: ["The ______ buzzed past.", "She was stung by a ______."] },
  { word: "blue", definition: "a colour like the sky", examples: ["He wore a ______ shirt.", "The sky is ______."] },
  { word: "blew", definition: "past tense of blow", examples: ["The wind ______ hard.", "She ______ out the candles."] }
],

"Summer 2 Week 3": [
  { word: "catch", definition: "to grab something", examples: ["Can you ______ the ball?", "She will ______ the bus."] },
  { word: "notch", definition: "a small cut or mark", examples: ["He made a ______ in the wood.", "There’s a small ______ in the spoon."] },
  { word: "latch", definition: "a lock for a door or gate", examples: ["Fasten the ______.", "The gate has a metal ______."] },
  { word: "wretch", definition: "an unhappy or wicked person", examples: ["The poor ______ cried.", "The ______ stole the gold."] },
  { word: "fetch", definition: "to go and bring something", examples: ["Can you ______ my bag?", "The dog can ______ the stick."] },
  { word: "hutch", definition: "a small house for animals", examples: ["The rabbit sleeps in a ______.", "Clean the guinea pig’s ______."] },
  { word: "hatch", definition: "to come out of an egg", examples: ["The chicks will ______ soon.", "The dragon will ______ from the egg."] },
  { word: "batch", definition: "a group of items made together", examples: ["She baked a ______ of cookies.", "We made a big ______ of cards."] },
  { word: "stretch", definition: "to reach or extend", examples: ["I ______ my arms.", "Can you ______ that far?"] },
  { word: "kitchen", definition: "a room where food is cooked", examples: ["She is in the ______.", "The ______ smells good."] },
  { word: "match", definition: "a game or something that is the same", examples: ["We won the football ______.", "Find the right ______ for the sock."] },
  { word: "patch", definition: "a small area that is different", examples: ["There’s a muddy ______.", "Mum sewed a ______ on my jeans."] },
  { word: "retch", definition: "to try to vomit", examples: ["The smell made him ______.", "She began to ______ suddenly."] },
  { word: "switch", definition: "a device to turn something on or off", examples: ["Flip the light ______.", "The ______ is on the wall."] },
  { word: "itch", definition: "a feeling that makes you want to scratch", examples: ["I have an ______ on my leg.", "Don’t scratch that ______!"] },
  { word: "watch", definition: "a device that tells time or to look closely", examples: ["Wear your ______ on your wrist.", "______ the show with me."] },
  { word: "pitch", definition: "a sports field or how high a sound is", examples: ["The game is on the football ______.", "She sang in a high ______."] }
],

"Summer 2 Week 4": [
  { word: "have", definition: "to own or hold", examples: ["I ______ a new pencil.", "We ______ lunch at noon."] },
  { word: "love", definition: "to care about deeply", examples: ["I ______ my family.", "She ______s her cat."] },
  { word: "serve", definition: "to give food or help", examples: ["They ______ lunch at noon.", "He will ______ the ball."] },
  { word: "captive", definition: "someone held prisoner", examples: ["The lion was a ______ in the zoo.", "The pirate kept a ______."] },
  { word: "attractive", definition: "nice to look at", examples: ["The flowers are very ______.", "That dress is really ______."] },
  { word: "live", definition: "to be alive or happen now", examples: ["They ______ in London.", "We watched a ______ show."] },
  { word: "above", definition: "over or higher than", examples: ["The clock is ______ the door.", "Birds flew ______ the trees."] },
  { word: "nerve", definition: "a part of your body or bravery", examples: ["He hurt a ______ in his leg.", "She had the ______ to try."] },
  { word: "massive", definition: "very large", examples: ["That truck is ______!", "We saw a ______ cake."] },
  { word: "extensive", definition: "large in amount or area", examples: ["The search was ______.", "He has ______ knowledge."] },
  { word: "give", definition: "to hand something to someone", examples: ["Please ______ me the ball.", "She will ______ you a gift."] },
  { word: "glove", definition: "clothing that covers your hand", examples: ["He wore one ______.", "Put on your ______ in the snow."] },
  { word: "active", definition: "doing things; full of energy", examples: ["She is very ______ in class.", "The volcano is still ______."] },
  { word: "native", definition: "born in a place", examples: ["He’s a ______ speaker.", "That tree is ______ to this area."] },
  { word: "swerve", definition: "to turn suddenly", examples: ["The car had to ______.", "She ______d to miss the cat."] },
  { word: "sensitive", definition: "easily affected", examples: ["His skin is ______ to sun.", "She’s very ______ to noise."] },
  { word: "relative", definition: "a member of your family", examples: ["My aunt is my ______.", "We visited every ______."] },
  { word: "carve", definition: "to cut into something", examples: ["He will ______ the pumpkin.", "She likes to ______ wood."] }
],

"Summer 2 Week 5": [
  { word: "me", definition: "the person speaking", examples: ["Give it to ______.", "He saw ______ at the park."] },
  { word: "no", definition: "a word used to refuse or deny", examples: ["The answer is ______.", "I said ______ to sweets."] },
  { word: "by", definition: "next to or through the action of", examples: ["She stood ______ the door.", "The book was written ______ him."] },
  { word: "there", definition: "in that place", examples: ["Put it over ______.", "He is sitting over ______."] },
  { word: "come", definition: "to move towards", examples: ["Please ______ here.", "Can you ______ to the park?"] },
  { word: "she", definition: "a girl or woman being talked about", examples: ["______ is my sister.", "______ went to the shop."] },
  { word: "go", definition: "to move from one place to another", examples: ["Let’s ______ to the park.", "They will ______ now."] },
  { word: "my", definition: "belonging to me", examples: ["This is ______ book.", "______ shoes are new."] },
  { word: "where", definition: "asks about a place", examples: ["______ are you going?", "Tell me ______ it is."] },
  { word: "some", definition: "a small amount or number", examples: ["Would you like ______ juice?", "I found ______ coins."] },
  { word: "we", definition: "the person speaking and others", examples: ["______ are going home.", "______ made a cake."] },
  { word: "so", definition: "therefore or very", examples: ["It was ______ fun!", "I was tired, ______ I slept."] },
  { word: "here", definition: "in this place", examples: ["Come and sit ______.", "The toy is right ______."] },
  { word: "love", definition: "to care about deeply", examples: ["I ______ my family.", "She ______s her cat."] },
  { word: "one", definition: "the number 1", examples: ["I have ______ dog.", "Choose just ______ toy."] },
  { word: "once", definition: "one time", examples: ["We went there ______.", "Try it just ______."] },
  { word: "ask", definition: "to say you want information", examples: ["Can I ______ a question?", "I will ______ the teacher."] },
  { word: "friend", definition: "someone you like and spend time with", examples: ["He is my best ______.", "She played with her ______."] }
],

"Summer 2 Week 6": [
  { word: "very", definition: "to a great degree", examples: ["She is ______ happy today.", "That test was ______ hard."] },
  { word: "party", definition: "a fun event with people", examples: ["We had a birthday ______.", "The ______ was fun."] },
  { word: "my", definition: "belonging to me", examples: ["This is ______ toy.", "I love ______ dog."] },
  { word: "fry", definition: "to cook in hot oil", examples: ["Can you ______ the eggs?", "We will ______ the chips."] },
  { word: "busy", definition: "having a lot to do", examples: ["He was too ______ to play.", "She had a ______ day."] },
  { word: "happy", definition: "feeling good or joyful", examples: ["She was ______ on her birthday.", "He smiled because he was ______."] },
  { word: "family", definition: "people who live together and are related", examples: ["My ______ went on holiday.", "We had dinner with our ______."] },
  { word: "shy", definition: "not wanting to be seen or noticed", examples: ["The girl is very ______.", "He is too ______ to speak."] },
  { word: "ivy", definition: "a green plant that climbs walls", examples: ["The ______ grew up the wall.", "We saw ______ in the garden."] },
  { word: "copy", definition: "to do the same thing or make a duplicate", examples: ["Please ______ the sentence.", "She tried to ______ my drawing."] },
  { word: "funny", definition: "something that makes you laugh", examples: ["That joke was ______!", "He told a ______ story."] },
  { word: "by", definition: "next to or through the action of", examples: ["She stood ______ the door.", "The book was written ______ him."] },
  { word: "boy", definition: "a young male child", examples: ["The ______ is playing football.", "That ______ is my cousin."] },
  { word: "ruby", definition: "a red gemstone", examples: ["The ring had a ______ in it.", "She wore a ______ necklace."] },
  { word: "pony", definition: "a small horse", examples: ["The child rode a ______.", "We saw a brown ______."] },
  { word: "sway", definition: "to move slowly side to side", examples: ["The trees ______ in the wind.", "He began to ______ to the music."] },
  { word: "edgy", definition: "nervous or easily upset", examples: ["She felt ______ before the test.", "He was a bit ______ all day."] },
  { word: "gory", definition: "showing lots of blood or violence", examples: ["The movie was too ______ for kids.", "That story had a ______ scene."] }
],

"Summer 2 Week 7": [
  { word: "table", definition: "a piece of furniture with a flat top", examples: ["We ate dinner at the ______.", "Put the book on the ______."] },
  { word: "quiet", definition: "not noisy", examples: ["Be ______ in the library.", "The house was very ______."] },
  { word: "itch", definition: "a feeling that makes you want to scratch", examples: ["I have an ______ on my leg.", "Don’t scratch that ______!"] },
  { word: "love", definition: "to care about deeply", examples: ["I ______ my family.", "She ______s her cat."] },
  { word: "once", definition: "one time", examples: ["We went there ______.", "Try it just ______."] },
  { word: "curtain", definition: "cloth that covers a window", examples: ["I closed the ______.", "Pull the ______ open."] },
  { word: "see", definition: "to use your eyes", examples: ["I ______ the moon.", "Can you ______ the bird?"] },
  { word: "watch", definition: "a device that tells time or to look closely", examples: ["Wear your ______ on your wrist.", "______ the show with me."] },
  { word: "above", definition: "over or higher than", examples: ["The clock is ______ the door.", "Birds flew ______ the trees."] },
  { word: "ask", definition: "to say you want information", examples: ["Can I ______ a question?", "I will ______ the teacher."] },
  { word: "tablet", definition: "a flat computer or a small pill", examples: ["I played a game on the ______.", "He took a ______ for his cold."] },
  { word: "sea", definition: "a large body of salt water", examples: ["We swam in the ______.", "The boat sailed on the ______."] },
  { word: "pitch", definition: "a sports field or how high a sound is", examples: ["The game is on the football ______.", "She sang in a high ______."] },
  { word: "glove", definition: "clothing that covers your hand", examples: ["He wore one ______.", "Put on your ______ in the snow."] },
  { word: "friend", definition: "someone you like and spend time with", examples: ["He is my best ______.", "She played with her ______."] },
  { word: "busy", definition: "having a lot to do", examples: ["He was too ______ to play.", "She had a ______ day."] },
  { word: "copy", definition: "to do the same thing or make a duplicate", examples: ["Please ______ the sentence.", "She tried to ______ my drawing."] },
  { word: "pony", definition: "a small horse", examples: ["The child rode a ______.", "We saw a brown ______."] }
]

};
let currentList = null;
let quizWords = [];
let wrongWords = [];
let round = 1;
let currentIndex = 0;
let mustTypeCorrect = false;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-GB';
  window.speechSynthesis.speak(utterance);
}

function goHome() {
  document.getElementById('root').innerHTML = `
    <h1>Choose a List</h1>
    ${Object.keys(wordLists).map(
      (list) => `<button onclick="selectList('${list}')">${list}</button>`
    ).join('')}
    <div id="content"></div>
  `;
}

function goBack() {
  selectList(currentList);
}

function selectList(listName) {
  currentList = listName;
  document.getElementById('root').innerHTML = `
    <h1>${listName}</h1>
    <button onclick="startQuiz()">Start Quiz</button>
    <button onclick="viewWords()">View Words</button>
    <button onclick="goHome()">Back to Main Menu</button>
    <div id="content"></div>
  `;
}

function viewWords() {
  const words = wordLists[currentList];
  document.getElementById('content').innerHTML = `
    <h2>${currentList} - Words</h2>
    ${words.map(w => `
      <div class="card">
        <h3>${w.word}</h3>
        <p><strong>${w.definition}</strong></p>
        ${w.examples.map(e => `<div><em>${e}</em></div>`).join('')}
      </div>
    `).join('')}
    <button onclick="goBack()">Back</button>
  `;
}

function startQuiz() {
  quizWords = [...wordLists[currentList]];
  wrongWords = [];
  round = 1;
  currentIndex = 0;
  showQuiz();
}

function showQuiz() {
  if (currentIndex >= quizWords.length) {
    if (wrongWords.length) {
      quizWords = [...wrongWords];
      wrongWords = [];
      round++;
      currentIndex = 0;
      document.getElementById('content').innerHTML = `
        <h2>Round ${round} begins!</h2>
        <button onclick="showQuiz()">Start</button>`;
    } else {
      document.getElementById('content').innerHTML = `
        <h2>🎉 Congratulations! You completed the test!</h2>
        <button onclick="goHome()">Home</button>`;
    }
    return;
  }

  const word = quizWords[currentIndex];
  document.getElementById('content').innerHTML = `
    <h2>${currentList} - Round ${round}</h2>
    <div class="card">
      <p><strong>${word.definition}</strong></p>
      ${word.examples.map(e => `<div><em>${e}</em></div>`).join('')}
      <br>
      <button onclick="speak('${word.word}')">Hear Word</button>
      <br><br>
      <input id="userInput" type="text" placeholder="Type the word" onkeydown="if(event.key==='Enter') checkAnswer()">
      <div id="message" style="margin-top:10px; font-weight:bold;"></div>
      <br>
      <button onclick="checkAnswer()">Check</button>
    </div>
  `;

  setTimeout(() => {
    const input = document.getElementById('userInput');
    if (input) input.focus();
  }, 50);

  speak(word.word);
}

function checkAnswer() {
  const inputField = document.getElementById('userInput');
  // Improved normalization and apostrophe handling
  const input = inputField.value.trim().toLowerCase()
    .normalize("NFKD")
    .replace(/[’‘‛ʻ´`]/g, "'");  // Normalize all types of apostrophes
  const correct = quizWords[currentIndex].word.toLowerCase();
  const messageDiv = document.getElementById('message');

  if (mustTypeCorrect) {
    if (input === correct) {
      mustTypeCorrect = false;
      messageDiv.textContent = "✅ Correct!";
      currentIndex++;
      setTimeout(showQuiz, 1000);
    } else {
      messageDiv.textContent = `❌ Please type the correct spelling: ${quizWords[currentIndex].word}`;
      setTimeout(() => {
        inputField.value = '';
        inputField.focus();
        messageDiv.textContent = '';
      }, 1000);
    }
  } else {
    if (input === correct) {
      messageDiv.textContent = "✅ Correct!";
      currentIndex++;
      setTimeout(showQuiz, 1000);
    } else {
      mustTypeCorrect = true;
      wrongWords.push(quizWords[currentIndex]);
      messageDiv.textContent = `❌ Incorrect. The correct spelling is: ${quizWords[currentIndex].word}`;
      setTimeout(() => {
        inputField.value = '';
        inputField.placeholder = quizWords[currentIndex].word;
        inputField.focus();
      }, 1000);
    }
  }
}

goHome();
