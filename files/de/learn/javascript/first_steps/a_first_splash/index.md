---
title: Ein erster Eindruck von JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
translation_of: Learn/JavaScript/First_steps/A_first_splash
original_slug: Learn/JavaScript/First_steps/Erster_Blick
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Nachdem Sie etwas über die Theorie von JavaScript gelernt haben und was Sie damit machen können, werden wir Ihnen in einem komplett praktischen Tutorial einen Crashkurs in den Grundfunktionen von JavaScript anbieten. Wir werden hier Schritt für Schritt ein einfaches Zahlenraten Spiel programmieren.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Computerkenntnisse, einfache Grundkentnisse von HTML und
        CSS, sowie eine Vorstellung, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erste Erfahrung beim Schreiben von JavaScript zu bekommen und zumindest
        ein grundlegendes Verständnis dafür zu erlangen, was das Schreiben eines
        JavaScript-Programms beinhaltet.
      </td>
    </tr>
  </tbody>
</table>

Es ist nicht nötig, dass Sie den gesamten Code sofort im Detail verstehen - wir wollen Ihnen nur grob die Konzepte vorab vorstellen und Ihnen eine Vorstellung davon vermitteln, wie JavaScript (und andere Programmiersprachen) funktionieren. In den folgenden Artikeln werden wir alle diese Funktionen noch einmal im Detail besprechen!

> **Note:** Hinweis: Viele der Befehle und Konstrukte, die Sie in JavaScript sehen werden, sind die gleichen wie in anderen Programmiersprachen - Funktionen, Schleifen, etc. Die Syntax sieht anders aus, aber die Konzepte sind immer noch weitgehend die gleichen.

## Denken wie ein Programmierer

Eines der schwierigsten Dinge, die man bei der Programmierung lernen muss, sind nicht die Befehle, sondern wie man sie zur Lösung der Aufgabe anwendet. Sie müssen anfangen, wie ein Programmierer zu denken - Sie müssen sich im klaren sein was Ihr Programm tun soll, um dann herauszuarbeiten welche Funktionen und Befehle Sie dafür benötigen.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersprache und Praxis - und ein wenig Kreativität. Je mehr Sie kodieren, desto besser werden Sie werden. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln werden, aber wir werden Ihnen viel Gelegenheit geben, während des gesamten Kurses das Denken wie ein Programmierer zu üben.

In diesem Sinne betrachten Sie das Beispiel, das wir in diesem Artikel erstellen werden und üben damit den Prozess der Zerlegung in konkrete Einzelschritte.

## Beispiel — Rate die Zahl

In diesem Artikel zeigen wir Ihnen, wie Sie das Ratespiel aufbauen können, das Sie hier sehen können.:

```html hidden
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Number guessing game</title>
    <style>
        html {
            font-family: sans-serif;
        }

        body {
            width: 50%;
            max-width: 800px;
            min-width: 480px;
            margin: 0 auto;
        }

        .lastResult {
            color: white;
            padding: 3px;
        }
    </style>
</head>

<body>
    <h1>Zahlenraten</h1>
    <p>Wir haben eine Zufallszahl zwischen 1 und 100 gewählt. Können Sie sie in höchstens 10 Versuchen erraten? Nach jeder Eingabe bekommen Sie einen Hinweis ob ihre Zahl zu gross oder zu klein war</p>
    <div class="form"> <label for="guessField">Geben Sie ihre Zahl ein: </label><input type="text" id="guessField" class="guessField"> <input type="submit" value="Tip absenden" class="guessSubmit"> </div>
    <div class="resultParas">
        <p class="guesses"></p>
        <p class="lastResult"></p>
        <p class="lowOrHi"></p>
    </div>
<script>
    // Ihr JavaScript Code steht hier
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    const guesses = document.querySelector('.guesses');
    const lastResult = document.querySelector('.lastResult');
    const lowOrHi = document.querySelector('.lowOrHi');
    const guessSubmit = document.querySelector('.guessSubmit');
    const guessField = document.querySelector('.guessField');
    let guessCount = 1;
    let resetButton;

    function checkGuess() {
      let userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Vorherige Versuche: ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = 'Glückwunsch! Richtig geraten!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!!ENDESPIEL!!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = 'Falsch!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Ihre Zahl ist zu niedrig!' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Ihre Zahl ist zu hoch!';
        }
      }

      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Spiel neu starten';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      const resetParas = document.querySelectorAll('.resultParas p');
      for(let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();
      lastResult.style.backgroundColor = 'white';
      randomNumber = Math.floor(Math.random() * 100) + 1;
    }
</script>

</body>
</html>
```

{{ EmbedLiveSample('Top_hidden_code', '100%', 320, "", "", "hide-codepen-jsfiddle") }}

Machen Sie sich mit der Funktionsweise des Spiels vertraut, bevor Sie weitermachen.

Stellen wir uns vor, Ihr Chef hat Ihnen den folgenden Auftrag für die Erstellung dieses Spiels gegeben:

> Schreiben Sie ein Programm das ein Zahlenratespiel implementiert. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und den Spieler auffordern, die Zahl nach spätestens 10 Runden zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig geraten hat oder nicht - und, wenn er Unrecht hat, ob die Zahl zu niedrig oder zu hoch war. Außerdem sollen dem Spieler alle vorher geratenen Zahlen angezeigt werden. Das Spiel endet, wenn der Spieler richtig rät oder wenn er 10-mal falsch geraten hat. Wenn das Spiel endet, sollte dem Spieler die Möglichkeit gegeben werden, erneut zu spielen.

Wenn wir uns diesen Anweisungen ansehen, können wir zunächst damit beginnen, ihn in einfache, umsetzbare Aufgaben aufzuteilen, und zwar aus der Sicht eines Programmierers:

1.  Generiere eine zufällige Zahl zwischen 1 und 100.
2.  Speichere die Anzahl der getätigten Rateversuche, setze den Wert anfangs auf 1.
3.  Ermögliche dem Spieler, einen Tipp abzugeben.
4.  Sobald ein Tip abgegeben wurde, speichere sie damit der Spieler seine vorherigen Eingaben sehen kann.
5.  Als Nächstes überprüfe, ob es sich um die richtige Zahl handelt.
6.  Wenn sie richtig ist:

    1.  Zeige Glückwunsch Nachricht.
    2.  Verhindere weiter Eingaben, da das Spiel zu Ende ist.
    3.  Biete eine Möglichkeit, das Spiel neu zu starten.

7.  Wenn sie falsch ist und noch Versuche übrig sind:

    1.  Dem Spieler mitteilen, dass die Zahl noch nicht erraten ist.
    2.  Die Eingabe einer weiteren Zahl ermöglichen.
    3.  Die Anzahl der Rateversuche um 1 erhöhen.

8.  Wenn die Zahl falsch ist und keine Versuche mehr übrig sind:

    1.  Dem Spieler mitteilen, dass das Spiel zu Ende ist.
    2.  Keine weiteren Eingaben mehr zulassen.
    3.  Ein Steuerelement zum Neustart des Spiels anzeigen.

9.  Wenn das Spiel neu startet, sicherstellen dass Logik und Benutzeroberfläche zurückgesetzt werden. Danach zurück zum 1. Schritt.

Lassen Sie uns nun fortfahren und schauen, wie wir diese Punkte in Code umwandeln können, das Beispiel aufbauen und die JavaScript-Funktionen während der Arbeit erforschen.

### Vorbereitungen

Um dieses Tutorial zu beginnen, möchten wir Sie bitten, eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) ([see it live here](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)) zu erstellen. Öffnen Sie es sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, einen Absatz mit Anweisungen und ein Formular zur Eingabe einer Schätzung, aber das Formular wird derzeit nichts tun.

Unseren gesamten Code werden wir innerhalb des {{htmlelement("script")}} Elements am Ende der HTML-Datei einfügen:

```html
<script>

  // Ihr Programm steht hier

</script>
```

### Variablen hinzufügen um Daten zu speichern

Lassen Sie uns anfangen. Fügen Sie zunächst die folgenden Zeilen nach dem {{htmlelement("script")}} Element ein:

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
```

Obiger Code richtet die Variablen und Konstanten ein, die wir benötigen, um die Daten zu speichern, die unser Programm verwenden wird. Variablen sind im Grunde genommen Container für Werte (z.B. Zahlen oder Text). Sie erstellen eine Variable mit dem Schlüsselwort `let` (oder `var`) gefolgt von einem Namen für Ihre Variable (Sie werden mehr über den Unterschied zwischen den beiden Schlüsselwörtern in einem zukünftigen Artikel lesen). Konstanten werden verwendet, um Werte zu speichern, die Sie nicht ändern möchten, und werden mit dem Schlüsselwort const erstellt. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern; der Text in einigen von ihnen kann sich ändern, aber die referenzierten HTML-Elemente bleiben unverändert.

Sie können Ihrer Variablen oder Konstanten einen Wert mit einem Gleichheitszeichen (=) zuweisen, gefolgt von dem Wert, den Sie ihr geben möchten.

In unser Beispiel:

- Die erste Variable — `randomNumber` — ist assigned a random number between 1 and 100, calculated using a mathematical algorithm.
- The first three constants are each made to store a reference to the results paragraphs in our HTML, and are used to insert values into the paragraphs later on in the code:

  ```html
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
  ```

- The next two constants store references to the form text input and submit button and are used to control submitting the guess later on.

  ```html
  <label for="guessField">Enter a guess: </label><input type="text" id="guessField" class="guessField">
  <input type="submit" value="Submit guess" class="guessSubmit">
  ```

- Our final two variables store a guess count of 1 (used to keep track of how many guesses the player has had), and a reference to a reset button that doesn't exist yet (but will later).

> **Note:** You'll learn a lot more about variables/constants later on in the course, starting with the [next article](/de/docs/user:chrisdavidmills/variables).

### Functions

Next, add the following below your previous JavaScript:

```js
function checkGuess() {
  alert('I am a placeholder');
}
```

Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time. This is really useful. There are a number of ways to define functions, but for now we'll concentrate on one simple type. Here we have defined a function by using the keyword `function`, followed by a name, with parentheses put after it. After that we put two curly braces (`{ }`). Inside the curly braces goes all the code that we want to run whenever we call the function.

When we want to run the code, we type the name of the function followed by the parentheses.

Let's try that now. Save your code and refresh the page in your browser. Then go into the [developer tools JavaScript console](/de/docs/Learn/Common_questions/What_are_browser_developer_tools), and enter the following line:

```js
checkGuess();
```

After pressing <kbd>Return</kbd>/<kbd>Enter</kbd>, you should see an alert come up that says "`I am a placeholder`"; we have defined a function in our code that creates an alert whenever we call it.

> **Note:** You'll learn a lot more about functions [later in the course](/de/docs/Learn/JavaScript/Building_blocks/Functions).

### Operators

JavaScript operators allow us to perform tests, do maths, join strings together, and other such things.

If you haven't already done so, save your code, refresh the page in your browser, and open the [developer tools JavaScript console](/de/docs/Learn/Common_questions/What_are_browser_developer_tools). Then we can try typing in the examples shown below — type in each one from the "Example" columns exactly as shown, pressing <kbd>Return</kbd>/<kbd>Enter</kbd> after each one, and see what results they return.

First let's look at arithmetic operators, for example:

| Operator | Name           | Example   |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraction    | `20 - 15` |
| `*`      | Multiplication | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

You can also use the `+` operator to join text strings together (in programming, this is called _concatenation_). Try entering the following lines, one at a time:

```js
let name = 'Bingo';
name;
let hello = ' says hello!';
hello;
let greeting = name + hello;
greeting;
```

There are also some shortcut operators available, called augmented [assignment operators](/de/docs/Web/JavaScript/Reference/Operators/Assignment_Operators). For example, if you want to simply add a new text string to an existing one and return the result, you could do this:

```js
name += ' says hello!';
```

This is equivalent to

```js
name = name + ' says hello!';
```

When we are running true/false tests (for example inside conditionals — see [below](#conditionals)) we use [comparison operators](/de/docs/Web/JavaScript/Reference/Operators/Comparison_Operators). For example:

| Operator | Name                                      | Example |
| -------- | ----------------------------------------- | ------- |
| `===`    | Strict equality (is it exactly the same?) | ```js   |

5 === 2 + 4 // false 'Chris' === 'Bob' // false 5 === 2 + 3 // true 2 === '2' // false; number versus string

````|
| `!==`    | Non-equality (is it not the same?)        | ```js
5 !== 2 + 4 // true 'Chris' !== 'Bob' // true 5 !== 2 + 3 // false 2 !== '2' // true; number versus string
```   |
| `<`      | Less than                                 | ```js
6 < 10 // true 20 < 10 // false
```                                                                               |
| `>`      | Greater than                              | ```js
6 > 10 // false 20 > 10  // true
```                                                                              |

### Conditionals

Returning to our `checkGuess()` function, I think it's safe to say that we don't want it to just spit out a placeholder message. We want it to check whether a player's guess is correct or not, and respond appropriately.

At this point, replace your current `checkGuess()` function with this version instead:

```js
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
````

This is a lot of code — phew! Let's go through each section and explain what it does.

- The first line (line 2 above) declares a variable called `userGuess` and sets its value to the current value entered inside the text field. We also run this value through the built-in `Number()` constructor, just to make sure the value is definitely a number.
- Next, we encounter our first conditional code block (lines 3–5 above). A conditional code block allows you to run code selectively, depending on whether a certain condition is true or not. It looks a bit like a function, but it isn't. The simplest form of conditional block starts with the keyword `if`, then some parentheses, then some curly braces. Inside the parentheses we include a test. If the test returns `true`, we run the code inside the curly braces. If not, we don't, and move on to the next bit of code. In this case the test is testing whether the `guessCount` variable is equal to `1` (i.e. whether this is the player's first go or not):

  ```js
  guessCount === 1
  ```

  If it is, we make the guesses paragraph's text content equal to "`Previous guesses: `". If not, we don't.

- Line 6 appends the current `userGuess` value onto the end of the `guesses` paragraph, plus a blank space so there will be a space between each guess shown.
- The next block (lines 8–24 above) does a few checks:

  - The first `if(){ }` checks whether the user's guess is equal to the `randomNumber` set at the top of our JavaScript. If it is, the player has guessed correctly and the game is won, so we show the player a congratulations message with a nice green color, clear the contents of the Low/High guess information box, and run a function called `setGameOver()`, which we'll discuss later.
  - Now we've chained another test onto the end of the last one using an `else if(){ }` structure. This one checks whether this turn is the user's last turn. If it is, the program does the same thing as in the previous block, except with a game over message instead of a congratulations message.
  - The final block chained onto the end of this code (the `else { }`) contains code that is only run if neither of the other two tests returns true (i.e. the player didn't guess right, but they have more guesses left). In this case we tell them they are wrong, then we perform another conditional test to check whether the guess was higher or lower than the answer, displaying a further message as appropriate to tell them higher or lower.

- The last three lines in the function (lines 26–28 above) get us ready for the next guess to be submitted. We add 1 to the `guessCount` variable so the player uses up their turn (`++` is an incrementation operation — increment by 1), and empty the value out of the form text field and focus it again, ready for the next guess to be entered.

### Events

At this point we have a nicely implemented `checkGuess()` function, but it won't do anything because we haven't called it yet. Ideally we want to call it when the "Submit guess" button is pressed, and to do this we need to use an event. Events are things that happen in the browser — a button being clicked, a page loading, a video playing, etc. — in response to which we can run blocks of code. The constructs that listen out for the event happening are called **event listeners**, and the blocks of code that run in response to the event firing are called **event handlers**.

Add the following line below your `checkGuess()` function:

```js
guessSubmit.addEventListener('click', checkGuess);
```

Here we are adding an event listener to the `guessSubmit` button. This is a method that takes two input values (called _arguments_) — the type of event we are listening out for (in this case `click`) as a string, and the code we want to run when the event occurs (in this case the `checkGuess()` function). Note that we don't need to specify the parentheses when writing it inside {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

Try saving and refreshing your code now, and your example should work — to a point. The only problem now is that if you guess the correct answer or run out of guesses, the game will break because we've not yet defined the `setGameOver()` function that is supposed to be run once the game is over. Let's add our missing code now and complete the example functionality.

### Finishing the game functionality

Let's add that `setGameOver()` function to the bottom of our code and then walk through it. Add this now, below the rest of your JavaScript:

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
```

- The first two lines disable the form text input and button by setting their disabled properties to `true`. This is necessary, because if we didn't, the user could submit more guesses after the game is over, which would mess things up.
- The next three lines generate a new {{htmlelement("button")}} element, set its text label to "Start new game", and add it to the bottom of our existing HTML.
- The final line sets an event listener on our new button so that when it is clicked, a function called `resetGame()` is run.

Now we need to define this function too! Add the following code, again to the bottom of your JavaScript:

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

This rather long block of code completely resets everything to how it was at the start of the game, so the player can have another go. It:

- Puts the `guessCount` back down to 1.
- Empties all the text out of the information paragraphs.
- Removes the reset button from our code.
- Enables the form elements, and empties and focuses the text field, ready for a new guess to be entered.
- Removes the background color from the `lastResult` paragraph.
- Generates a new random number so that you are not just guessing the same number again!

**At this point you should have a fully working (simple) game — congratulations!**

All we have left to do now in this article is talk about a few other important code features that you've already seen, although you may have not realized it.

### Loops

One part of the above code that we need to take a more detailed look at is the [for](/de/docs/Web/JavaScript/Reference/Statements/for) loop. Loops are a very important concept in programming, which allow you to keep running a piece of code over and over again, until a certain condition is met.

To start with, go to your [browser developer tools JavaScript console](/de/docs/Learn/Common_questions/What_are_browser_developer_tools) again, and enter the following:

```js
for (let i = 1 ; i < 21 ; i++) { console.log(i) }
```

What happened? The numbers `1` to `20` were printed out in your console. This is because of the loop. A `for` loop takes three input values (arguments):

1.  **A starting value**: In this case we are starting a count at 1, but this could be any number you like. You could replace the letter `i` with any name you like too, but `i` is used as a convention because it's short and easy to remember.
2.  **An exit condition**: Here we have specified `i < 21` — the loop will keep going until `i` is no longer less than 21. When `i` reaches 21, the loop will no longer run.
3.  **An incrementor**: We have specified `i++`, which means "add 1 to i". The loop will run once for every value of `i`, until `i` reaches a value of 21 (as discussed above). In this case, we are simply printing the value of `i` out to the console on every iteration using {{domxref("Console.log", "console.log()")}}.

Now let's look at the loop in our number guessing game — the following can be found inside the `resetGame()` function:

```js
let resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}
```

This code creates a variable containing a list of all the paragraphs inside `<div class="resultParas">` using the {{domxref("Document.querySelectorAll", "querySelectorAll()")}} method, then it loops through each one, removing the text content of each.

### A small discussion on objects

Let's add one more final improvement before we get to this discussion. Add the following line just below the `let resetButton;` line near the top of your JavaScript, then save your file:

```js
guessField.focus();
```

This line uses the {{domxref("HTMLElement.focus", "focus()")}} method to automatically put the text cursor into the {{htmlelement("input")}} text field as soon as the page loads, meaning that the user can start typing their first guess right away, without having to click the form field first. It's only a small addition, but it improves usability — giving the user a good visual clue as to what they've got to do to play the game.

Let's analyze what's going on here in a bit more detail. In JavaScript, everything is an object. An object is a collection of related functionality stored in a single grouping. You can create your own objects, but that is quite advanced and we won't be covering it until much later in the course. For now, we'll just briefly discuss the built-in objects that your browser contains, which allow you to do lots of useful things.

In this particular case, we first created a `guessField` constant that stores a reference to the text input form field in our HTML — the following line can be found amongst our declarations near the top of the code:

```js
const guessField = document.querySelector('.guessField');
```

To get this reference, we used the {{domxref("document.querySelector", "querySelector()")}} method of the {{domxref("document")}} object. `querySelector()` takes one piece of information — a [CSS selector](/de/docs/Learn/CSS/Introduction_to_CSS/Selectors) that selects the element you want a reference to.

Because `guessField` now contains a reference to an {{htmlelement("input")}} element, it will now have access to a number of properties (basically variables stored inside objects, some of which can't have their values changed) and methods (basically functions stored inside objects). One method available to input elements is `focus()`, so we can now use this line to focus the text input:

```js
guessField.focus();
```

Variables that don't contain references to form elements won't have `focus()` available to them. For example, the `guesses` constant contains a reference to a {{htmlelement("p")}} element, and the `guessCount` variable contains a number.

### Playing with browser objects

Let's play with some browser objects a bit.

1.  First of all, open up your program in a browser.
2.  Next, open your [browser developer tools](/de/docs/Learn/Common_questions/What_are_browser_developer_tools), and make sure the JavaScript console tab is open.
3.  Type in `guessField` and the console will show you that the variable contains an {{htmlelement("input")}} element. You'll also notice that the console autocompletes the names of objects that exist inside the execution environment, including your variables!
4.  Now type in the following:

    ```js
    guessField.value = 'Hello';
    ```

    The `value` property represents the current value entered into the text field. You'll see that by entering this command, we've changed the text in the text field!

5.  Now try typing in `guesses` and pressing return. The console will show you that the variable contains a {{htmlelement("p")}} element.
6.  Now try entering the following line:

    ```js
    guesses.value
    ```

    The browser will return `undefined`, because paragraphs don't have the `value` property.

7.  To change the text inside a paragraph, you need the {{domxref("Node.textContent", "textContent")}} property instead. Try this:

    ```js
    guesses.textContent = 'Where is my paragraph?';
    ```

8.  Now for some fun stuff. Try entering the below lines, one by one:

    ```js
    guesses.style.backgroundColor = 'yellow';
    guesses.style.fontSize = '200%';
    guesses.style.padding = '10px';
    guesses.style.boxShadow = '3px 3px 6px black';
    ```

    Every element on a page has a `style` property, which itself contains an object whose properties contain all the inline CSS styles applied to that element. This allows us to dynamically set new CSS styles on elements using JavaScript.

## Finished for now\...

So that's it for building the example. You got to the end — well done! Try your final code out, or [play with our finished version here](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). If you can't get the example to work, check it against the [source code](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

## In this module

- [What is JavaScript?](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](/de/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/de/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/de/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/de/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/de/docs/Learn/JavaScript/First_steps/Silly_story_generator)
