---
title: Was ist JavaScript?
slug: Learn/JavaScript/First_steps/What_is_JavaScript
translation_of: Learn/JavaScript/First_steps/What_is_JavaScript
original_slug: Learn/JavaScript/First_steps/Was_ist_JavaScript
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}

Willkommen zum MDN-Einsteigerkurs für JavaScript! Im ersten Artikel werden wir uns JavaScript von aussen anschauen und Fragen beantworten wie "Was ist das?" oder "Was macht das?", und wir stellen sicher, das du weißt was JavaScript ist.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Umgang mit einem Computer und ein Grundverständniss von HTML und CSS
      </td>
    </tr>
    <tr>
      <th scope="row">Thema:</th>
      <td>
        JavaScript kennenlernen, was JavaScript tun kann und wie es in einer
        Webseite arbeitet.
      </td>
    </tr>
  </tbody>
</table>

## Eine Experten Definition

JavaScript ist eine Programmiersprache mit der sich komplexe Programme in eine Webseite realisieren lassen. Immer wenn eine Webseite mehr macht als nur statische Informationen anzuzeigen, (zum Beispiel:

- Zeitliche Inhalt-Updates ( Liveticker )
- interaktive Karten ( Google Maps)
- animierte 2D/3D Grafiken ( Spiele )
- ...)

kannst du dir sicher sein das JavaScript benutzt wurde. Es ist die Dritte der Drei Standard-Technologien im Web, die anderen beiden ( [HTML ](de/Learn/HTML)und [CSS ](/de/docs/Learn/CSS)) werden in anderen Bereichen des MDN eingeführt und referenziert.

![](https://mdn.mozillademos.org/files/13502/cake.png)

- {{glossary("HTML")}} ist die Markup-Language, die wir benutzen, um eine Webseite zu strukturieren und unsere Inhalte darzustellen, zum Beispiel durch Paragraphen, Überschriften, Tabellen aber auch um Bilder und Videos in die Webseite einzubinden.
- {{glossary("CSS")}} ist die Sprache, um Stil-Regeln für HTML zu definieren, zum Beispiel, indem wir die Hintergrundfarbe und die Schriftart ändern.
- {{glossary("JavaScript")}} ist eine Progammiersprache, die es erlaubt dynamische Updates der Inhalte, animierte Bilder und noch sehr viel mehr zu realisieren.

Die drei Teile bauen gut auf einander auf. Hier mal ein einfaches Beispiel: Wir können zunächst HTML benutzten, um eine Struktur zu bauen.

```html
<p>Player 1: Chris</p>
```

![](https://mdn.mozillademos.org/files/13422/just-html.png)

Anschließend können wir mit einigen CSS-Regeln denn Satz schön aussehen lassen:

```css
p {
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0,0,200,0.6);
  background: rgba(0,0,200,0.3);
  color: rgba(0,0,200,0.6);
  box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor:pointer;
}
```

![](https://mdn.mozillademos.org/files/13424/html-and-css.png)

Und zum Schluss können wir mit etwas JavaScript eine Reaktion auf das Klicken des Benutzers implementieren:

```js
var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```

{{ EmbedLiveSample('A_high-level_definition', '100%', 80) }}

Klick auf das Label und sieh, was passiert (den [Code](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/javascript-label.html) findest du auf GitHub und hier kannst du es in [Aktion ](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/javascript-label.html)sehen).

## So und was kann ich jetzt damit machen?

Der Kern von JavaScript ähnelt dem anderer Programmiersprachen. In JavaScript kannst du:

- Nützliche Werte in Variablen speichern. Wie im Beispiel als wir eine Variable verwendet haben um den von dir eingebenen Namen zu speichern.
- Operationen auf Texten ( in der Programmierung "Strings" genannt). Im oberen Beispiel hatten wir den String "Player 1:" und die Variable `name` verbunden und (wenn `name` "Chris" ist) haben wir den Text "Player 1: Chris" bekommen.
- Mit Code auf Events in einer Webseite reagieren. Wir haben ein {{Event("click")}} Event benutzt um darauf zu reagieren wenn man auf das Label drückt.
- Und viel mehr. ( siehe jedes größere Webprojekt.)

Aber es gibt noch andere Funktionen die auf dem Kern von JavaScript aufbauen. Die sogenannten **Application Programming Interfaces (APIs)** geben dir noch mehr Funktionen mit denen du deine Projekte aufbessern kann.

APIs sind von anderen Programmieren geschriebener Code die dir mehr Möglichkeiten geben für dein Programm. Die für dich schwer oder unmöglich wären selber zu programmieren. Sie sind das gleiche was Werkzeuge und Material für Handwerker sind. Es wäre deutlich schwerer alleine erst alle Werkzeuge und dann alle Materiallien herzustellen.

Die APIs kann man generell in zwei Kategorien einteilen:

![](https://mdn.mozillademos.org/files/13508/browser.png)

**Browser APIs** sind vom Webbrowser des Benutzers. Und sie können auf Ressourcen des computers zugreifen, oder erledigen Dinge die sehr komlpex sind. Ein paar Beispiele:

- Die {{domxref("Document_Object_Model","DOM (Document Object Model)")}} API
- Die [Geolocation API](/de/docs/Web/API/Geolocation) ruft geografische Informationen ab. So ist es für [Google Maps](https://www.google.com/maps) möglich dein Standort zu ermitteln um es danach z.B. auf einer Karte anzuzeigen.
- The [Canvas](/de/docs/Web/API/Canvas_API) and [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es dir, 2D oder 3D animierte Grafiken zu erstellen. Das ermöglicht die Darstellung und den Einsatz von Webtechnologien. Mehr kannst du unter [Chrome Experiments](https://www.chromeexperiments.com/webgl) und [webglsamples](http://webglsamples.org/) erfahren.
- [Audio and Video APIs](https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery) beispielsweise {{domxref("HTMLMediaElement")}} und [WebRTC](/de/docs/Web/API/WebRTC_API) ermöglichen es wirklich spannende Dinge multimedial zu erstellen. Beispielsweise können Audio und Video in eine Webseite integriert werden, Ebenso ist es möglich die Webcam aufzunehmen und sie danach wiederzugeben. (Probiere unser einfaches [Snapshot Beispiel](http://chrisdavidmills.github.io/snapshot/) um eine Einblick zu bekommen).

> **Note:** **Notiz:** Viele der oben genannten Beispiele funktionieren in älteren Browsern nicht — wenn du dein Code ausprobieren willst, dann ist es eine gute Idee einen Modernen Browser wie Firefox, Chrome, Edge oder Opera zu benutzen. Es wird trotzdem nötig sein, sich mit [Cross Browser Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing) auseinander zu setzen, wenn es näher an eine Produktionssystem gehen soll(z.B. Echter Code die echte Kunden benutzen sollen).

**Drittanbieter-APIs**sind nicht standardmäßig im Browser integriert, und du wirst großenteils deren Code und Informationen von wo anders finden müssen. Zum Beispiel

- Die [Twitter API](https://dev.twitter.com/overview/documentation)erlaubt es dir Dinge, wie die aktuellsten Tweets auf deiner Webseite anzeigen zu lassen.
- [Google Maps API](https://developers.google.com/maps/)erlaubt es dir, eigene Karten auf deiner Webseite anzeigen zu lassen oder andere ähnliche Funktionen zu benutzen

> **Note:** **Notiz:** Diese APIs sind sehr fortschrittlich und werden in diesem Modul nicht weiter behandelt.Du findest weitere Informationen bei unseren Modul[Clientbasierte Web APIs Modul](/de/docs/Learn/JavaScript/Client-side_web_APIs).

Es sind noch viele weitere APIs Verfügbar! Trotzdem werde jetzt nicht zu aufgeregt, denn du wirst es nicht schaffen, das nächste Facebook, Google Maps, oder Instagram zu entwickeln, nach gerade mal 24 Stunden JavaScript lernen — es gibt nämlich noch viele Sachen die Behandelt werden müssen. Und deswegen bist du hier — also lass uns weiter machen!

## Was genau macht JavaScript auf deiner Webseite?

Here we'll start actually looking at some code, and while doing so explore what actually happens when you run some JavaScript in your page.

Let's briefly recap the story of what happens when you load a web page in a browser (first talked about in our [How CSS works](/en-US/Learn/CSS/Introduction_to_CSS/How_CSS_works#How_does_CSS_actually_work) article). When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab). This is like a factory that takes in raw materials (the code) and outputs a product (the web page).

![](https://mdn.mozillademos.org/files/13504/execution.png)

The JavaScript is executed by the browser's JavaScript engine, after the HTML and CSS have been assembled and put together into a web page. This ensures that the structure and style of the page are already in place by the time the JavaScript starts to run.

This is a good thing, as a very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above). If the JavaScript loaded and tried to run before the HTML and CSS was there to affect, then errors would occur.

### Browser Sicherheit

Each browser tab is its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website. This is a good security measure — if this were not the case, then pirates could start writing code to steal information from other websites, and other such bad things.

> **Note:** There are ways to send code and data between different websites/tabs in a safe manner, but these are advanced techniques that we won't cover in this course.

### JavaScript running order

When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom. This means that you need to be careful what order you put things in. For example, let's return to the block of JavaScript we saw in our first example:

```js
var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```

Here we are selecting a text paragraph (line 1), then attaching an event listener to it (line 3) so that when the paragraph is clicked, the `updateName()` code block (lines 5–8) is run. The `updateName()` code block (these types of reusable code block are called "functions") asks the user for a new name, and then inserts that name into the paragraph to update the display.

If you swapped the order of the first two lines of code, it would no longer work — instead, you'd get an error returned in the browser developer console — `TypeError: para is undefined`. This means that the `para` object does not exist yet, so we can't add an event listener to it.

> **Note:** This is a very common error — you need to be careful that the objects referenced in your code exist before you try to do stuff to them.

### Interpreted versus compiled code

You might hear the terms **interpreted** and **compiled** in the context of programming. JavaScript is an interpreted language — the code is run from top to bottom and the result of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it.

Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. For example C/C++ are compiled into assembly language that is then run by the computer.

Both approaches have different advantages, which we won't discuss at this point.

### Server-side versus client-side code

You might also hear the terms **server-side** and **client-side** code, specially in the context of web development. Client-side code is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. In this JavaScript module we are explicitly talking about **client-side JavaScript**.

Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser. Examples of popular server-side web languages include PHP, Python, Ruby, and ASP.NET. And JavaScript! JavaScript can also be used as a server-side language, for example in the popular Node.js environment — you can find more out about server-side JavaScript in our [Dynamic Websites – Server-side programming](/de/docs/Learn/Server-side) topic.

The word **dynamic** is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required. Server-side code dynamically generates new content on the server, e.g. pulling data from a database, whereas client-side JavaScript dynamically generates new content inside the browser on the client, e.g. creating a new HTML table, inserting data requested from the server into it, then displaying the table in a web page shown to the user. The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together.

A web page with no dynamically updating content is referred to as **static** — it just shows the same content all the time.

## How do you add JavaScript to your page?

JavaScript is applied to your HTML page in a similar manner to CSS. Whereas CSS uses {{htmlelement("link")}} elements to apply external stylesheets and {{htmlelement("style")}} elements to apply internal stylesheets to HTML, JavaScript only needs one friend in the world of HTML — the {{htmlelement("script")}} element. Let's learn how this works.

### Internal JavaScript

1.  First of all, make a local copy of our example file [apply-javascript.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript.html). Save it in a directory somewhere sensible.
2.  Open the file in your web browser and in your text editor. You'll see that the HTML creates a simple web page containing a clickable button.
3.  Next, go to your text editor and add the following just before your closing `</body>` tag:

    ```html
    <script>

      // JavaScript goes here

    </script>
    ```

4.  Now we'll add some JavaScript inside our {{htmlelement("script")}} element to make the page do something more interesting — add the following code just below the "// JavaScript goes here" line:

    ```js
    function createParagraph() {
      var para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
    }

    var buttons = document.querySelectorAll('button');

    for (var i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }
    ```

5.  Save your file and refresh the browser — now you should see that when you click the button, a new paragraph is generated and placed below.

> **Note:** If your example doesn't seem to work, go through the steps again and check that you did everything right. Did you save your local copy of the starting code as a `.html` file? Did you add your {{htmlelement("script")}} element just before the `</body>` tag? Did you enter the JavaScript exactly as shown? **JavaScript is case sensitive, and very fussy, so you need to enter the syntax exactly as shown, otherwise it may not work.**

> **Note:** You can see this version on GitHub as [apply-javascript-internal.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html) ([see it live too](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-internal.html)).

### External JavaScript

This works great, but what if we wanted to put our JavaScript in an external file? Let's explore this now.

1.  First, create a new file in the same directory as your sample HTML file. Call it `script.js` — make sure it has that .js filename extension, as that's how it is recognized as JavaScript.
2.  Next, copy all of the script out of your current {{htmlelement("script")}} element and paste it into the .js file. Save that file.
3.  Now replace your current {{htmlelement("script")}} element with the following:

    ```html
    <script src="script.js"></script>
    ```

4.  Save and refresh your browser, and you should see the same thing! It works just the same, but now we've got the JavaScript in an external file. This is generally a good thing in terms of organizing your code, and making it reusable across multiple HTML files. Plus the HTML is easier to read without huge chunks of script dumped in it.

**Note**: You can see this version on GitHub as [apply-javascript-external.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html) and [script.js](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/script.js) ([see it live too](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/what-is-js/apply-javascript-external.html)).

### Inline JavaScript handlers

Note that sometimes you'll come across bits of actual JavaScript code living inside HTML. It might look something like this:

```js example-bad
function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}
```

```html example-bad
<button onclick="createParagraph()">Click me!</button>
```

You can try this version of our demo below.

{{ EmbedLiveSample('Inline_JavaScript_handlers', '100%', 150) }}

This demo has exactly the same functionality as in the previous two sections, except that the {{htmlelement("button")}} element includes an inline `onclick` handler to make the function run when the button is pressed.

**Please don't do this, however.** It is bad practice to pollute your HTML with JavaScript, and it is inefficient — you'd have to include the `onclick="createParagraph()"` attribute on every button you wanted the JavaScript to apply to.

Using a pure JavaScript construct allows you to select all the buttons using one instruction. The code we used above to serve this purpose looks like this:

    var buttons = document.querySelectorAll('button');

    for (var i = 0; i < buttons.length ; i++) {
      buttons[i].addEventListener('click', createParagraph);
    }

This might look a bit longer than the `onclick` attribute, but this will work for all buttons no matter how many are on the page, and how many are added or removed. The JavaScript does not need to be changed.

> **Note:** Try editing your version of `apply-javascript.html` and add a few more buttons into the file. When you reload, you should find that all of the buttons when clicked will create a paragraph. Neat, huh?

## Comments

As with HTML and CSS, it is possible to write comments into your JavaScript code that will be ignored by the browser, and exist simply to provide instructions to your fellow developers on how the code works (and you, if you come back to your code after 6 months and can't remember what you did). Comments are very useful, and you should use them often, particularly for larger applications. There are two types:

- A single line comment is written after a double forward slash (//), e.g.

  ```js
  // I am a comment
  ```

- A multi-line comment is written between the strings /\* and \*/, e.g.

  ```js
  /*
    I am also
    a comment
  */
  ```

So for example, we could annotate our last demo's JavaScript with comments like so:

```js
// Function: creates a new paragraph and append it to the bottom of the HTML body.

function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

/*
  1. Get references to all the buttons on the page and sort them in an array.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
```

## Summary

So there you go, your first step into the world of JavaScript. We've begun with just theory, to start getting you used to why you'd use JavaScript, and what kind of things you can do with it. Along the way you saw a few code examples and learned how JavaScript fits in with the rest of the code on your website, amongst other things.

JavaScript may seem a bit daunting right now, but don't worry — in this course we will take you through it in simple steps that will make sense going forward. In the next article we will [plunge straight into the practical](/de/docs/Learn/JavaScript/Introduction_to_JavaScript_1/A_first_splash), getting you to jump straight in and build your own JavaScript examples.

## In this module

- **[What is JavaScript?](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript)**
- [A first splash into JavaScript](/de/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/de/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/de/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/de/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/de/docs/Learn/JavaScript/First_steps/Silly_story_generator)

{{NextMenu("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps")}}
