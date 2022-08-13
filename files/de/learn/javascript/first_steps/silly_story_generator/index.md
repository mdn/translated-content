---
title: Der Lustige Geschichten Generator
slug: Learn/JavaScript/First_steps/Silly_story_generator
translation_of: Learn/JavaScript/First_steps/Silly_story_generator
original_slug: Learn/JavaScript/First_steps/lustige_geschichten_generator
---
{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

In dieser Prüfung ist es deine Aufgabe das von dir in den vorherigen Artikeln gesammelten Wissen anzuwenden, indem due eine lustige Applikation schreibst, mit der man lustige Geschichten erzeugen kann. Viel Spass mit dem Lustige Geschichten Generator !

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorraussetzungen:</th>
      <td>
        Bevor du dich an dieser Aufgabe versuchst, solltest du alle anderen
        Artikel dieses Moduls gelesen und bearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis von fundamentalen JavaScript Kenntnissen, wie Variablen,
        Operatoren und einfachen Datentypen (Zahlen, Zeichenketten, Arrays)
      </td>
    </tr>
  </tbody>
</table>

## Start

Um mit deiner Aufgabe zu beginnen, solltest du::

- Öffne [die HTML-Vorlage](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/index.html) und speichere eine lokale Kopie davon auf deinem Rechner in einen neuen Ordner als `index.html`. Die Datei enthält auch einige CSS-Anweisungen für das Styling.
- Öffne [die Seite, die die Text-Vorlagen enthält](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/assessment-start/raw-text.txt) und öffne sie in einem seperaten Browserfenster oder -tab. Die brauchst du später noch.

> **Note:** **Notiz**: Alternativ kannst du auch eine Seite wie [JSBin](http://jsbin.com/) oder [Glitch](https://glitch.com/) benutzen, um die Aufgabe zu bearbeiten. Kopiere dazu einfach den Quelltext von HTML, CSS und JavaScript in einen dieser Online-Editoren. Wenn einer dieser Editoren kein extra JavaScript Panel haben sollte, kopiere das JavaScript einfach zwischen `<script>-Tags` in deinem HTML-Code.

## Projektbeschreibung

Für diese Aufgabe geben wir dir einige HTML/CSS Codestücke, einige Textbausteine und ein paar JavaScript Funktionen in die Hand; du musst die fehlenden JavaScript-Teile ergänzen, um alles zu einem lauffähigen Programm zu kombinieren, was Folgendes tun kann:

- es generiert eine lustige Geschichte, wenn der "Generate random story" button gedrückt wird.
- es ersetzt den vorgegebenen Namen "Bob" in der Geschichte mit einem individuellen Namen, allerdings nur, wenn eine Eingabe in das "Enter custom name" Text-Feld gemacht worden ist, bevor der Button gedrückt wurde.
- es konvertiert US-amerikanische Maßeinheiten, wie Gewicht und Temperatur in die englischen Äquivalente, wenn der Radio-Button entsprechend gesetzt wurde, bevor der Button gedrückt wurde.
- es generiert immer wieder eine neue Variante der Geschichte, wenn der Button erneut gedrückt wird.

Der folgende Screenshot zeigt dir ein Beispiel, wie die Ausgabe deines geschriebenen Programmes aussehen wird:

![](https://mdn.mozillademos.org/files/16178/Screen_Shot_2018-09-19_at_10.01.38_AM.png)

Um dich noch mehr mit deiner Arbeit vertraut zu machen, [schau dir die fertige Lösung an](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/) (ohne im Quellcode zu spicken! )

## Schritt-für-Schritt Anleitung

In den folgenden Abschnitten wird dir erklärt, was du tun musst.

Grundaufbau:

1. Erzeuge eine Datei mit dem Namen `main.js`, und zwar im selben Verzeichnis, wie deine `index.html` Datei.
2. Verbinde deine externe JavaScript Datei `main.js`mit deiner HTML Datei, indem du es mithilfe des Script-tags {{htmlelement("script")}} in deinem HTML aufrufst. Füge die Zeile kurz vor dem schließenden `</body>` tag ein.

Vorgegebene Variablen und Functions:

1. Kopiere alle Code-Zeilen aus der Roh-Text-Datei, die unter der Überschrift "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" stehen und füge Sie an den Anfang deiner `main.js` Datei. Im Code wirst du 3 Variablen entdecken, die sich auf verschiedene Teile der Ausgabe beziehen: (`customName`) bezieht sich auf das "Enter custom name" Text Feld , the "Generate random story" button (`randomize`), and the {{htmlelement("p")}} element at the bottom of the HTML body that the story will be copied into (`story`), respectively. In addition you've got a function called `randomValueFromArray()` that takes an array, and returns one of the items stored inside the array at random.
2. Now look at the second section of the raw text file — "2. RAW TEXT STRINGS". This contains text strings that will act as input into our program. We'd like you to contain these inside variables inside `main.js`:

    1. Store the first, big long, string of text inside a variable called `storyText`.
    2. Store the first set of three strings inside an array called `insertX`.
    3. Store the second set of three strings inside an array called `insertY`.
    4. Store the third set of three strings inside an array called `insertZ`.

Placing the event handler and incomplete function:

1. Now return to the raw text file.
2. Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" and paste it into the bottom of your `main.js` file. This:

    - Adds a click event listener to the `randomize` variable so that when the button it represents is clicked, the `result()` function is run.
    - Adds a partially-completed `result()` function definiton to your code. For the remainder of the assessment, you'll be filling in lines inside this function to complete it and make it work properly.

Completing the `result()` function:

1. Create a new variable called `newStory`, and set it's value to equal `storyText`. This is needed so we can create a new random story each time the button is pressed and the function is run. If we made changes directly to `storyText`, we'd only be able to generate a new story once.
2. Create three new variables called `xItem`, `yItem`, and `zItem`, and make them equal to the result of calling `randomValueFromArray()` on your three arrays (the result in each case will be a random item out of each array it is called on). For example you can call the function and get it to return one random string out of `insertX` by writing `randomValueFromArray(insertX)`.
3. Next we want to replace the three placeholders in the `newStory` string — `:insertx:`, `:inserty:`, and `:insertz:` — with the strings stored in `xItem`, `yItem`, and `zItem`. There is a particular string method that will help you here — in each case, make the call to the method equal to `newStory`, so each time it is called, `newStory` is made equal to itself, but with substitutions made. So each time the button is pressed, these placeholders are each replaced with a random silly string. As a further hint, the method in question only replaces the first instance of the substring it finds, so you might need to make one of the calls twice.
4. Inside the first `if` block, add another string replacement method call to replace the name 'Bob' found in the `newStory` string with the `name` variable. In this block we are saying "If a value has been entered into the `customName` text input, replace Bob in the story with that custom name."
5. Inside the second `if` block, we are checking to see if the `uk` radio button has been selected. If so, we want to convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade. What you need to do is as follows:

    1. Look up the formulae for converting pounds to stone, and Fahrenheit to centigrade.
    2. Inside the line that defines the `weight` variable, replace 300 with a calculation that converts 300 pounds into stones. Concatenate `' stone'` onto the end of the result of the overall `Math.round()` call.
    3. Inside the line that defines the `temperature` variable, replace 94 with a calculation that converts 94 Fahrenheit into centigrade. Concatenate `' centigrade'` onto the end of the result of the overall `Math.round()` call.
    4. Just under the two variable definitions, add two more string replacement lines that replace '94 fahrenheit' with the contents of the `temperature` variable, and '300 pounds' with the contents of the `weight` variable.

6. Finally, in the second-to-last line of the function, make the `textContent` property of the `story` variable (which references the paragraph) equal to `newStory`.

## Hints and tips

- You don't need to edit the HTML in any way, except to apply the JavaScript to your HTML.
- If you are unsure whether the JavaScript is applied to your HTML properly, try removing everything else from the JavaScript file temporarily, adding in a simple bit of JavaScript that you know will create an obvious effect, then saving and refreshing. The following for example turns the background of the {{htmlelement("html")}} element red — so the entire browser window should go red if the JavaScript is applied properly:

  ```js
  document.querySelector('html').style.backgroundColor = 'red';
  ```

- [`Math.round()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) is a built-in JavaScript method that simply rounds the result of a calculation to the nearest whole number.
- There are three instances of strings that need to be replaced. You may repeat the `replace()` method multiple times, or you can use regular expressions. For instance, `let text = 'I am the biggest lover, I love my love'; text.replace(/love/g,'like');` will replace all instances of 'love' to 'like'. Remember, Strings are immutable!

## Assessment

If you are following this assessment as part of an organized course, you should be able to give your work to your teacher/mentor for marking. If you are self-learning, then you can get the marking guide fairly easily by asking on the [discussion thread for this exercise](https://discourse.mozilla.org/t/silly-story-generator-assessment/24686), or in the [#mdn](irc://irc.mozilla.org/mdn) IRC channel on [Mozilla IRC](https://wiki.mozilla.org/IRC). Try the exercise first — there is nothing to be gained by cheating!

{{PreviousMenu("Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

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
