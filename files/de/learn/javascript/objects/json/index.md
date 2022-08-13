---
title: Arbeiten mit JSON
slug: Learn/JavaScript/Objects/JSON
translation_of: Learn/JavaScript/Objects/JSON
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

Die JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format, um strukturierte Daten auf Basis eines JavaScript Objekts darzustellen. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet (z.B. das Senden einiger Daten vom Server zum Client, damit sie auf einer Webseite angezeigt werden können oder umgekehrt). Es wird dir sehr häufig über den Weg laufen, daher geben wir dir in diesem Artikel alles mit, damit du JSON mithilfe von JavaScript nutzen kannst, einschließlich des Umwandelns von JSON, damit du auf die enthaltenen Daten zugreifen und JSON erstellen kannst.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Computerkenntnisse, grundlegendes Verständnis von HTML, CSS
        und JavaScript (siehe
        <a href="/en-US/docs/Learn/JavaScript/First_steps">First steps</a> und
        <a href="/en-US/docs/Learn/JavaScript/Building_blocks"
          >Building blocks</a
        >) sowie OOJS Grundkenntnisse (siehe
        <a href="/en-US/docs/Learn/JavaScript/Object-oriented/Introduction"
          >Introduction to objects</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziele:</th>
      <td>
        Zu verstehen, wie man mit Daten im JSON-Format arbeitet und eigene
        JSON-Objekte erstellt.
      </td>
    </tr>
  </tbody>
</table>

## Nein, im ernst, was ist JSON?

{{glossary("JSON")}} ist ein textbasierendes Datenformat angelehnt an die JavaScript Object Syntax und popularisiert durch [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford). Auch wenn es der JavaScript Object Syntax ähnelt, ist es dennoch Javascript unabhängig. Heutzutage unterstützen zahlreiche Programmierumgebungen JSON, sowohl lesend (parse) als auch schreibend.

JSON existiert als eine Zeichenkette (String) — das ist nützlich, um Daten über das Netzwerk zu übermitteln. Es muss in ein natives JavaScript Objekt umgewandelt werden, wenn du auf die Daten zugreifen willst. Das ist kein großes Ding — JavaScript stellt ein globales JSON-Objekt zur Verfügung, das Methoden zur Konvertierung zwischen den beiden zur Verfügung stellt.

> **Note:** Eine Zeichenkette in ein natives Objekt umzuwandeln nennt man _parsing_, wohingegen die Umwandlung eines nativen Objekts in eine Zeichenkette, um es im Netzwerk zu übermitteln, _stringification_ genannt wird.

Ein JSON Objekt kann als einfache Textdatei mit der Endung `.json` gespeichert werden oder einen {{glossary("MIME type")}} als `application/json`.

### JSON Struktur

Wie bereits erwähnt, ist JSON ein textbasierendes Datenformat angelehnt an die JavaScript Object Syntax. Es können sowohl in JSON als auch in JavaScript Objekten die gleichen Datentypen verwendet werden — Strings, Zahlen, Arrays, Booleans und andere Objekttypen. Das erlaubt es dir, eine Datenhierarchie zu erstellen. Z.B.:

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Würden wir das Objekt in ein JavaScript Programm laden und die Variable `superHeroes` auslesen, könnten wir die Objektdaten mittels der gleichen `dot/bracket notation` abrufen, wie in diesem Artikel behandelt: [JavaScript object basics](/de/docs/Learn/JavaScript/Objects/Basics). Zum Beispiel:

```js
superHeroes.homeTown
superHeroes['active']
```

Um Daten in tieferen hierarchischen Ebenen abrufen zu können, müssen die benötigten Eigenschaften und Array-indizes aneinandergereiht werden. Um beispielsweise die dritte `superpower` des zweiten `hero` in der `members` Liste abrufen zu können, würdest du sowas machen:

```js
superHeroes['members'][1]['powers'][2]
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin wollen wir die `members` Eigenschaft abrufen, also benutzen wir`["members"]`.
3. `members` beinhaltet ein Array mit Objekten. Wir wollen das zweite Objekt innerhalb des Arrays abrufen, also benutzen wir `[1]`.
4. Innerhalb des Objekts wollen wir die `powers` Eigenschaft abrufen, demnach benutzen wir `["powers"]`.
5. Die `powers` Eigenschaft ist ein Array, welches die gewählten `superpowers` der `heroe`s hält. Wir wollen die dritte `superpower`, also `[2]`.

> **Note:** Wir haben euch das zuvor erwähnte JSON in einer Variable in unserem [JSONTest.html](http://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) Beispiel (siehe [source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/JSONTest.html)) zur Verfügung gestellt. Versuche es hochzuladen und die Daten in der Variable mittels der JavaScript Konsole deines Browser's abzurufen.

### Arrays als JSON

Eben haben wir angemerkt, dass JSON Text im Grunde wie ein JavaScript object aussieht, und das ist weitestgehend richtig. "Weitestgehend" da ein Array eben gültiges(valid) JSON darstellt, zum Beispiel:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

Dieses Arrays ist komplett gültges JSON. Die Array Elemente müssen lediglich beginnend mit des Array's Index - z.B. `[0]["powers"][0]` - abgerufen werden.

### Anmerkungen

- JSON ist ein reines Datenformat — es beinhaltet nur Eigenschaften, keine Methoden.
- JSON benötigt **immer** doppelte Anführungszeichen - also `" "` - bei Strings und Eigenschaftsnamen. Einfache Anführungszeichen - also `' '` - sind nicht zulässig (invalid).
- Ein einziges deplaziertes Kommata oder ähnliches lässt eine JSON Datei korrupieren und fehlschlagen. Du solltest alle Daten mit denen du arbeitest oder die du verarbeiten möchtest gründlich überprüfen (wobei computer-generiertes JSON bei korrekt funktionierenden JSON generatoren eher nicht fehleranfällig ist). Um dein JSON zu überprüfen, kannst du zum Beispiel eine Anwendung wie [JSONLint](http://jsonlint.com/) benutzen.
- JSON kann jeden Datentyp der zur Einbindung in JSON geeignet ist annehmen, nicht nur Arrays oder Objekte. So kann zum Beispiel ein einfacher `String`oder eine `number` ein gültiges JSON Objekt sein.
- Im Gegensatz zu JavaScript Code in dem Objekt Eigenschaften Anführungszeichen nicht zwingend benötigen, dürfen in JSON nur `strings`in Anführungszeichen als Objekt Eigenschaften genutzt werden.

## Aktives Lernen: Arbeiten mithilfe eines JSON Beispiels

Lasst uns durch ein Beispiel durcharbeiten um zu veranschaulichen wie wir mit JSON Daten auf einer Webseite arbeiten können.

### Los Geht's

Anfangs, mache lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/style.css) Dateien. Letztere enthält ein paar einfache CSS Elemente um unsere Seite ein wenig zu stylen, während die Erste einen einfachen HTML `body`enthält:

```html
<header>
</header>

<section>
</section>
```

Und ein {{HTMLElement("script")}} Element, welches den JavaScript Code halten wird, den wir etwas später erstellen werden. Momentan existieren nur zwei Zeilen, welche auf das {{HTMLElement("header")}} und {{HTMLElement("section")}} Element referenzieren und sie in Variablen speichern:

```js
var header = document.querySelector('header');
var section = document.querySelector('section');
```

Wir haben unsere JSON Daten auf unserem GitHub Account veröffentlicht: <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Wir laden es in unsere Seite und benutzen geschickt die DOM Manipulation um es so darzustellen:

![](https://mdn.mozillademos.org/files/13857/json-superheroes.png)

### JSON erhalten

Um JSON zu erhalten, werden wir unsere API, genannt {{domxref("XMLHttpRequest")}} (oft **XHR** genannt), benutzen. Es handelt sich um ein sehr nützliches JavaScript Objekt, das es uns erlaubt, Netzwerkabfragen auszuführen um Ressourcen eines Servers via JavaScript (e.g. Bilder, Text, JSON, sogar HTML snippets) zu erhalten. So können wir kleine Sektionen mit Inhalt aktualisieren ohne die komplette Seite neuzuladen. Das führt zu responsiveren Webseiten und klingt ziemlich spannend. Allerdings fällt es außerhalb des hier behandelten Themas um es ausführlicher zu erklären.

1. Zuerst werden wir die JSON URL die wir abrufen möchten in einer Variable speichern. Füge Folgendes zum Ende deines JavaScript Codes hinzu:

    ```js
    var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    ```

2. Um eine Abfrage zu erstellen, müssen wir eine neue Objekt-Abfrage-Instanz des `XMLHttpRequest` constructors mit dem Keyword `new`erstellen. Füge Folgenden Code hinzu:

    ```js
    var request = new XMLHttpRequest();
    ```

3. Nun müssen wir eine neue Abfrage mit der [`open()`](/en-US/docs/Web/API/XMLHttpRequest/open) Methode eröffnen. Füge Folgenden Code hinzu:

    ```js
    request.open('GET', requestURL);
    ```

    Die Methode braucht mindestens zwei Parameter — wobei es weitere optionale Parameter gibt. Für dieses Beispiel werden wir uns jedoch nur den einfachen, zwingend erforderlichen Parametern widmen :

    - Die HTTP Methode die für die Netzwerkabfrage erforderlich ist. In diesem Fall reicht `GET`aus, da wir ja nur simple Daten erhalten wollen .
    - Die Ziel-URL — Die JSON URL die wir zuvor in der `requestURL` Variable gespeichert haben.

4. Füge als Nächstes folgende Zeilen hinzu — hier setzen wir den [`responseType`](/en-US/docs/Web/API/XMLHttpRequest/responseType) auf JSON, sodass XHR weiß, dass der Server JSON zurückgeben und im Hintergrund in ein JavaScript Objekt konvertiert werden soll. Anschließend versenden wir die Abfrage mit der [`send()`](/en-US/docs/Web/API/XMLHttpRequest/send) Methode:

    ```js
    request.responseType = 'json';
    request.send();
    ```

5. Zu guter Letzt müssen wir auf die Antwort des Servers (response) warten und sie anschließend weiterverarbeiten. Füge folgenden Code hinter deinem bisherigen Code hinzu:

    ```js
    request.onload = function() {
      var superHeroes = request.response;
      populateHeader(superHeroes);
      showHeroes(superHeroes);
    }
    ```

Hier speichern wir die Response zu unserer Abfrage (verfügbar in der [`response`](/en-US/docs/Web/API/XMLHttpRequest/response) Eigenschaft) in einer Variable namens: `superHeroes`; Diese Variable enthält nun das JavaScript Objekt basieren auf dem JSON! Nun geben wir das Objekt an zwei Funktionsaufrufe weiter— der erste wird den <`header>` mit korrekte Daten füllen, während der zweite einen Informationssteckbrief eines jeden Helden im Team erstellt und es in die `<section>`einfügt.

Wir packen den Code in einen Eventhandler der ausgeführt wird, sobald das `load`event auf das Request Objekt angestoßen wird (siehe [`onload`](/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload)) — das passiert, da das `load`Event angestoßen wird sobald die `response`erfolgreich zurückgegeben wurde. Das garantiert, dass `request.response` definitiv verfügbar sein wird, wenn wir damit etwas machen wollen.

### Populating the header

Wir haben also die JSON Daten bekommen und in ein JavaScript Objekt konvertiert. Nun arbeiten wir damit und schreiben zwei Funktionen. Als Erstes, füge folgende Funktion unter deinen bisherigen Code:

```js
function populateHeader(jsonObj) {
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['squadName'];
  header.appendChild(myH1);

  var myPara = document.createElement('p');
  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  header.appendChild(myPara);
}
```

Wir haben den Parameter `jsonObj`aufgerufen, um uns daran zu erinnern, dass das JavaScript Objekt seinen Ursprung in JSON hat. Wir erstellen zunächst ein {{HTMLElement("h1")}} element with [`createElement()`](/en-US/docs/Web/API/Document/createElement), set its [`textContent`](/en-US/docs/Web/API/Node/textContent) to equal the `squadName` property of the object, then append it to the header using [`appendChild()`](/en-US/docs/Web/API/Node/appendChild). We then do a very similar operation with a paragraph: create it, set its text content and append it to the header. The only difference is that its text is set to a concatenated string containing both the `homeTown` and `formed` properties of the object.

### Creating the hero information cards

Next, add the following function at the bottom of the code, which creates and displays the superhero cards:

```js
function showHeroes(jsonObj) {
  var heroes = jsonObj['members'];

  for (var i = 0; i < heroes.length; i++) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
    myPara2.textContent = 'Age: ' + heroes[i].age;
    myPara3.textContent = 'Superpowers:';

    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

To start with, we store the `members` property of the JavaScript object in a new variable. This array contains multiple objects that contain the information for each hero.

Next, we use a [for loop](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#The_standard_for_loop) to loop through each object in the array. For each one, we:

1. Create several new elements: an `<article>`, an `<h2>`, three `<p>`s, and a `<ul>`.
2. Set the \<h2> to contain the current hero's `name`.
3. Fill the three paragraphs with their `secretIdentity`, `age`, and a line saying "Superpowers:" to introduce the information in the list.
4. Store the `powers` property in another new variable called `superPowers` — this contains an array that lists the current hero's superpowers.
5. Use another `for` loop to loop through the current hero's superpowers — for each one we create a `<li>` element, put the superpower inside it, then put the `listItem` inside the `<ul>` element (`myList`) using `appendChild()`.
6. The very last thing we do is to append the `<h2>`, `<p>`s, and `<ul>` inside the `<article>` (`myArticle`), then append the `<article>` inside the `<section>`. The order in which things are appended is important, as this is the order they will be displayed inside the HTML.

> **Note:** If you are having trouble getting the example to work, try referring to our [heroes-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished.html) source code (see it [running live](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) also.)

> **Note:** If you are having trouble following the dot/bracket notation we are using to access the JavaScript object, it can help to have the [superheroes.json](http://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) file open in another tab or your text editor, and refer to it as you look at our JavaScript. You should also refer back to our [JavaScript object basics](/de/docs/Learn/JavaScript/Objects/Basics) article for more information on dot and bracket notation.

## Converting between objects and text

The above example was simple in terms of accessing the JavaScript object, because we set the XHR request to convert the JSON response directly into a JavaScript object using:

```js
request.responseType = 'json';
```

But sometimes we aren't so lucky — sometimes we'll receive a raw JSON string, and we'll need to convert it to an object ourselves. And when we want to send a JavaScript object across the network, we'll need to convert it to JSON (a string) before sending. Luckily, these two problems are so common in web development that a built-in [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) object is available in browsers, which contains the following two methods:

- [`parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
- [`stringify()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Accepts an object as a parameter, and returns the equivalent JSON string form.

You can see the first one in action in our [heroes-finished-json-parse.html](http://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) example (see the [source code](https://github.com/mdn/learning-area/blob/master/javascript/oojs/json/heroes-finished-json-parse.html)) — this does exactly the same thing as the example we built up earlier, except that we set the XHR to return the raw JSON text, then used `parse()` to convert it to an actual JavaScript object. The key snippet of code is here:

```js
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  var superHeroesText = request.response; // get the string from the response
  var superHeroes = JSON.parse(superHeroesText); // convert it to an object
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

As you might guess, `stringify()` works the opposite way. Try entering the following lines into your browser's JavaScript console one by one to see it in action:

```js
var myJSON = { "name": "Chris", "age": "38" };
myJSON
var myString = JSON.stringify(myJSON);
myString
```

Here we're creating a JavaScript object, then checking what it contains, then converting it to a JSON string using `stringify()` — saving the return value in a new variable — then checking it again.

## Summary

In this article, we've given you a simple guide to using JSON in your programs, including how to create and parse JSON, and how to access data locked inside it. In the next article, we'll begin looking at object-oriented JavaScript.

## See also

- [JSON object reference page](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [XMLHttpRequest object reference page](/de/docs/Web/API/XMLHttpRequest)
- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTTP request methods](/de/docs/Web/HTTP/Methods)
- [Official JSON web site with link to ECMA standard](http://json.org)

{{PreviousMenuNext("Learn/JavaScript/Objects/Inheritance", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

## In this module

- [Object basics](/de/docs/Learn/JavaScript/Objects/Basics)
- [Object-oriented JavaScript for beginners](/de/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [Object prototypes](/de/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Inheritance in JavaScript](/de/docs/Learn/JavaScript/Objects/Inheritance)
- [Working with JSON data](/de/docs/Learn/JavaScript/Objects/JSON)
- [Object building practice](/de/docs/Learn/JavaScript/Objects/Object_building_practice)
- [Adding features to our bouncing balls demo](/de/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features)
