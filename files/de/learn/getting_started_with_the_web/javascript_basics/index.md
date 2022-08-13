---
title: JavaScript-Grundlagen
slug: Learn/Getting_started_with_the_web/JavaScript_basics
tags:
  - Anfänger
  - JavaScript
  - Lernen
  - Web
  - Webdesign
translation_of: Learn/Getting_started_with_the_web/JavaScript_basics
original_slug: Learn/Getting_started_with_the_web/JavaScript_basis
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript ist eine Programmiersprache, mit der man interaktive Inhalte zu einer Webseite hinzufügen kann (zum Beispiel: Spiele, Reaktionen durch das Drücken von Buttons oder Eingaben in Formulare, dynamisches Aussehen, Animationen, usw.). Dieser Artikel hilft Ihnen, erste Schritte mit dieser spannenden Sprache zu machen und eine Vorstellung zu verschaffen, was möglich ist.

## Was ist JavaScript wirklich?

{{Glossary("JavaScript")}} (Kurz "JS") ist eine vollwertige und dynamische Programmiersprache, welche, wenn man sie zu einem {{Glossary("HTML")}} Dokument hinzufügt, für Dynamik und Interaktion mit dem Nutzer sorgt. JS wurde von Brendan Eich erfunden, Mitbegründer des Mozilla Projektes, der Mozilla Foundation, und der Mozilla Corporation.

JavaScript ist unglaublich vielseitig. Man beginnt ganz einfach mit simplen Features, wie z.B. Karussels, (Bilder-)Galerien, variablen Layouts und Reaktionen auf Button-Klicks. Wenn Sie dann später erfahrener im Umgang mit der Sprache sind, können Sie damit ganze Spiele, animierte 2D- und 3D-Grafiken, auf Datenbanken basierende Apps und vieles mehr erstellen!

JavaScript an sich ist sehr kompakt und trotzdem flexibel. Viele Entwickler haben noch weitere Tools/Erweiterungen für die Arbeit mit JavaScript geschrieben, um noch mehr Effizienz mit wenig Aufwand aus JS herauszuholen. Diese Funktionen sind:

- Programmierschnittstellen ({{Glossary("API","APIs")}}), die in Browsern implementiert wurden, um diese um JS-Funktionen zu erweitern, z.B. das dynamische Erstellen von HTML oder das Einstellen eines CSS-Styles, Abfangen und Manipulieren von Videostreams, Erzeugen von 3D-Grafiken/Audio-Samples und vieles mehr...
- Drittanbieter-APIs, die es Entwicklern ermöglichen, Funktionen von anderen Seiten in eigene Seiten einzubinden, z.B. von Twitter oder Facebook.
- Drittanbieter-Frameworks und Bibliotheken, die man zu HTML hinzufügen kann, die es ermöglichen, Webseiten und Apps schnell zu erzeugen.

Da dieser Artikel dazu gedacht ist, Ihnen eine leichte Einführung in die Grundlagen von JavaScript zu geben, werden wir uns hier nicht über die Unterschiede zwischen der Basis der JavaScript-Sprache und den obengenannten Erweiterungen unterhalten. Sie können später im Detail lernen, was es damit auf sich hat in unserem [JavaScript Lernbereich](/de/docs/Learn/JavaScript).

Hier werden wir einige Grundlagen von JavaScript zeigen und Sie werden mit einigen Browser APIs experimentieren können. Viel Spaß!

## Ein "Hallo Welt!" Beispiel

Der vorhergehende Absatz klingt sehr aufregend und das zurecht. JavaScript ist eine der spannendsten Internet-Technologien und wenn Sie damit beginnen, wird Ihre Webseite sehr viel mächtiger.

Jedoch ist JavaScript etwas komplexer als HTML und CSS. Daher werden Sie klein anfangen, und in kurzen, regelmäßigen Schritten vorangehen müssen. Zum Start zeigen wir Ihnen, wie man JavaScript-Code zu einer Seite hinzu fügt, um ein "Hallo Welt!" Beispiel zu erstellen ([der Standard in elementaren Programmierbeispielen](https://de.wikipedia.org/wiki/Hallo-Welt-Programm)).

> **Warning:** **WICHTIG**: Wenn Sie dem vorhergehenden Kurs nicht bis hierher gefolgt sind, [laden Sie dieses Codebeispiel herunter](https://github.com/mdn/beginner-html-site-styled/archive/gh-pages.zip) und benutzen es als Einstieg.

1.  Zuerst gehen Sie zu Ihrer Testseite und erstellen eine neue Datei mit dem Namen `main.js`. Speichern Sie diese Datei in Ihrem skripts-Ordner.
2.  Dann gehen Sie zur `index.html` Datei und fügen das folgende Element in einer neuen Zeile vor dem schließenden `</body>-`Tag ein:

    ```html
    <script src="scripts/main.js"></script>
    ```

3.  Dies macht dasselbe, wie das {{htmlelement("link")}} Element für CSS — Es bindet die JavaScript-Datei auf der Seite ein, damit es einen Einfluss auf den HTML Code haben kann (und auch auf den CSS-Code und alles andere auf der Seite).
4.  Fügen Sie nun den folgenden Code in die `main.js-`Datei ein:

    ```js
    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hallo Welt!';
    ```

5.  Gehen Sie sicher, dass die Javascript und HTML-Dateien gespeichert sind, und laden `index.html` in einen Browser. Die Webseite sollte wie folgt aussehen:![](https://mdn.mozillademos.org/files/15479/beginner-js1-de.jpg)

> **Note:** **Hinweis**: Das {{htmlelement("script")}}-Element haben wir am Ende des \<body>-Elements geschrieben, da das HTML vom Browser in der Reihenfolge geladen wird, wie es in der Datei geschrieben wurde. Wenn der JavaScript-Code geladen wird, bevor die HTML-Seite aufgebaut wurde, hat es möglicherweise keinen Einfluss auf die HTML-Elemente, die später geladen werden. Also ist es meistens am besten, JavaScript-Code eher am Ende der HTML Seite einzubinden.

### Was ist passiert?

Ihre Überschrift wurde durch die Benutzung von JavaScript zu "Hello world!" geändert. Wir haben dies dadurch ermöglicht, indem wir zuerst eine Funktion mit dem Namen {{domxref("Document.querySelector", "querySelector()")}} benutzt haben, um eine Referenz zu unserer Überschrift zu bekommen und sie in einer Variable mit dem Namen `myHeading` gespeichert. Es ist ähnlich zu dem, was wir in CSS mit den Selektoren gemacht haben. Wenn Sie irgendetwas mit einem Element machen möchten, müssen Sie es zuerst auswählen.

Anschließend setzen wir den Wert der Eigenschaft {{domxref("Node.textContent", "textContent")}} der Variablen `myHeading` (die den Inhalt des Headings repräsentiert) auf "Hallo Welt!".

> **Note:** **Hinweis:** Beide Funktionen die Sie genutzt haben\*\* **sind Teile** \*\*des [Document Object Model (DOM) API](/de/docs/Web/API/Document_Object_Model)

## Programmier-Crash-Kurs

Es folgt eine Beschreibung einiger Basis-Eigenschaften der Sprache JavaScript, um Ihnen etwas mehr Verständnis der Zusammenhänge zu vermitteln. Diese Eigenschaften sind anderen Programmiersprachen gemeinsam. Wenn Sie diese Grundlagen verstehen, sollte es Ihnen möglich sein, mit dem Programmieren zu beginnen.

> **Warning:** **Wichtig**: Versuchen Sie, die Zeilen des Beispielcodes dieses Artikels, in die JavaScript-Konsole einzufügen, um zu sehen, was geschieht. Weitere Details zur JavaScript-Konsole entnehmen Sie aus [Entdecke Browser Entwickler-Werkzeuge](/en-US/Learn/Discover_browser_developer_tools).

### Variablen

{{Glossary("Variable", "Variables")}} sind Container, in denen Werte gespeichert werden können. Zunächst wird eine Variable mit dem Schlüsselwort `var `deklariert, gefolgt von irgendeinem Namen, unter dem diese Variable adressiert werden soll:

```js
var myVariable;
```

> **Note:** **Anmerkung**: Jede Befehlszeile in JavaScript muss mit einem Semikolon abgeschlossen werden, um das Ende der Befehlszeile zu markieren. Tun Sie dies nicht, erwarten Sie unerwartete Ergebnisse.

> **Note:** **Anmerkung**: Sie können eine Variable fast beliebig benennen, allerdings gibt es einige Restriktionen zu beachten (siehe [diesen Artikel über die Regeln von Benennung von Variablen](http://www.codelifter.com/main/tips/tip_020.shtml).) Wenn Sie unsicher sind, können Sie [den Variablennamen prüfen](https://mothereff.in/js-variables), um die Gültigkeit zu prüfen.

> **Note:** **Anmerkung**: JavaScript beachtet Groß-/Kleinschrift — `myVariable` ist unterschiedlich zur Variablen `myvariable`. Falls Sie in Ihrem Programmcode Probleme bekommen sollten, prüfen Sie zuerst die Groß-/Kleinschreibung!

Nachdem eine Variable deklariert wurde, können Sie ihr einen Wert geben:

```js
myVariable = 'Bob';
```

Beide Schritte (Variable deklarieren und ihr einen Wert zuweisen) können in einem Schritt zusammengefasst werden:

```js
var myVariable = 'Bob';
```

Sie können den Wert der Variablen abrufen, indem der Variablenname aufgerufen wird:

```js
myVariable;
```

Nachdem der Variablen ein Wert gegeben wurde, kann dieser später geändert werden:

    var myVariable = 'Bob';
    myVariable = 'Steve';

Beachten Sie, dass Variablen unterschiedliche [Datentypen](/de/docs/Web/JavaScript/Data_structures) aufweisen:

| Variable                         | Erklärung                                                                                                                                                    | Beispiel                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("String")}}     | Ein String mit Text. Um zu zeigen, dass es sich hier um einen String handelt, sollten Sie diesen in Anführungszeichen setzen.                                | `var myVariable = 'Bob';`                                                                                                              |
| {{Glossary("Number")}}     | Eine Nummer. Nummern werden nicht in Anführungszeichen eingebettet.                                                                                          | `var myVariable = 10;`                                                                                                                 |
| {{Glossary("Boolean")}} | Ein wahr/falsch (true/false) Wert. Die Worte `true` und `false` sind spezielle Schlüsselworte in JS und erfordern daher keine Anführungszeichen              | `var myVariable = true;`                                                                                                               |
| {{Glossary("Array")}}     | Eine Struktur, die Ihnen erlaubt, mehrere Werte in einer einzigen Referenz zu speichern.                                                                     | `var myVariable = [1,'Bob','Steve',10];` Bezieht sich auf jedes Mitglied des arrays wie dieses: `myVariable[0]`, `myVariable[1]`, etc. |
| {{Glossary("Object")}}     | Grundsätzlich alles. Alles in JavaScript ist ein Objekt und kann in einer Variablen gespeichert werden. Behalten Sie dies im Gedächtnis, während Sie lernen. | `var myVariable = document.querySelector('h1');` Und ebenso alle der obigen Beispiele.                                                 |

Warum werden Variablen benötigt? Nun, Variablen werden benötigt, um alles Interessante beim Programmieren abzudecken. Wenn sich Werte nicht ändern könnten, dann könnte nichts Dynamisches geschaffen werden, wie zum Beispiel eine Willkommensmeldung zu personalisieren oder ein Bild, das in einer Bildgallerie angezeigt wird.

### Kommentare

Sie können Kommentare in JavaScript-Code genauso einfügen, wie in CSS:

```js
/*
Alles hier drin ist ein Kommentar.
*/
```

Enthält der Kommentar keine Zeilenumbrüche, dann ist es oft leichter, ihn hinter zwei Schrägstrichen zu platzieren:

```js
// Dies ist ein Kommentar
```

### Operatoren

Ein {{Glossary("operator")}} ist ein mathematisches Symbol, das ein Ergebnis erzeugt, das auf zwei Werten (oder Variablen) basiert. In der folgenden Tabelle sehen Sie einige der einfachsten Operatoren, gefolgt von einigen Beispielen, die Sie in der JavaScript Konsole ausprobieren können.

| Operator                             | Erklärung                                                                                                                                                               | Symbol(e)     | Beispiel                                                                                                                                                                                                                                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| addieren/verbinden                   | Wird verwendet, um zwei Zahlen zu addieren, oder zwei Strings zusammenzusetzen.                                                                                         | `+`           | `6 + 9; "Hello " + "world!";`                                                                                                                                                                                                                                                                  |
| subtrahieren, multiplizieren, teilen | Verhalten sich so, wie aus der Mathematik bekannt.                                                                                                                      | `-`, `*`, `/` | `9 - 3; 8 * 2; // in JS ist der Multiplikationsoperator ein Stern 9 / 3;`                                                                                                                                                                                                                      |
| Zuweisungsoperator                   | Sie haben dies bereits gesehen: Ein Wert wird einer Variablen zugeordnet                                                                                                | `=`           | `var myVariable = 'Bob';`                                                                                                                                                                                                                                                                      |
| Gleichheitsoperator                  | Prüft zwei Werte auf Gleichheit und liefert `true`/`false` (Boolean) als Ergebnis                                                                                       | `===`         | `var myVariable = 3; myVariable === 4;`                                                                                                                                                                                                                                                        |
| Verneinung, ungleich                 | Liefert als Ergebnis das logische Gegenteil; dreht ein `true` in ein `false, `etc. In Verbindung mit dem Gleichheitsoperator wird geprüft, ob zwei Werte ungleich sind. | `!`, `!==`    | Der Basis-Ausdruck ist `true`, aber der Vergleich liefert `false` weil er negiert wurde:`var myVariable = 3; !(myVariable === 3);`Hier wird geprüft, ob `myVariable` ungleich 3 ist. Der Rückgabewert ist `false, weil myVariable `den Wert 3 aufweist.`var myVariable = 3; myVariable !== 3;` |

Es gibt noch viele weitere Operatoren zu entdecken, aber es reicht für jetzt. Eine komplette Liste finden Sie in [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Reference/Operators).

> **Note:** **Anmerkung**: Das Vermischen von Datentypen kann bei Berechnungen unerwartete Ergebnisse liefern. Achten Sie darauf, die Variablen korrekt zu verwenden und prüfen Sie, ob das erwartete Ergebnis zurückgegeben wird. Tippen Sie beispielsweise "35" + "25" in die Konsole ein und schauen sich das Ergebnis an. Haben Sie dies erwartet? Aufgrund der Anführungszeichen werden die Werte als Strings behandelt und somit verbunden, statt addiert. Wenn Sie 35 + 25 eintippen, erhalten Sie das erwartete Ergebnis.

### Bedingungen

Bedingungen sind Code-Strukturen, die Ihnen erlauben, zu prüfen, ob ein Ausdruck wahr oder falsch ist und in Abhängigkeit des Ergebnisses unterschiedlichen Code auszuführen. Die gebräuchlichste Art von Bedingungen sind `if ... else.` Zum Beispiel:

```js
var eis = 'Schokolade';
if (eis === 'Schokolade') {
  alert('Yuhu, ich liebe Schokoladeneis!');
} else {
  alert('Awwww, ich mag lieber ein Schokoladeneis...');
}
```

Der Ausdruck innerhalb des `if ( ... ) `ist der Test - dieser verwendet den Gleichheitsoperator (wie oben beschrieben), um die Variable `eis` mit dem String S`chokolade` zu vergleichen, um zu sehen, ob die Werte identisch sind. Liefert dieser Vergleich `true`, wird der erste Block des Codes ausgeführt. Wenn nicht, wird dieser Code übersprungen und der zweite Block nach dem `else` Befehl ausgeführt.

### Funktionen

{{Glossary("Function", "Functions")}} ist ein Weg, um Funktionalitäten zusammenzupacken, die wiederverwendet werden sollen. Immer wenn die Funktionalität benötigt wird, wird die Funktion unter ihrem Namen aufgerufen, statt denselben Code immer wieder erneut schreiben zu müssen. Sie haben bereits einige Verwendungen von Funktionen gesehen, zum Beispiel:

1.  ```js
    var myVariable = document.querySelector('h1');
    ```
2.  ```js
    alert('Hallo!');
    ```

Die Funktionen `document.querySelector` and `alert` sind in den Browser eingebunden, um benutzt zu werden, wann immer es passt.

Wenn sie etwas sehen, das wie ein Variablenname aussieht, aber von runden Klammern — `()` — abgeschlossen ist, ist es möglicherweise eine Funktion. Funktionen nehmen oft {{Glossary("Argument", "arguments")}} auf, um die Funktionalität zu gewährleisten. Diese Argumente werden innerhalb der runden Klammern platziert und von Komma getrennt, wenn mehr als ein Argument übergeben wird.

Beispielsweise erzeugt die Funktion `alert()` eine Pop-Up-Box innerhalb des Browser-Fensters. Dieser Funktion muss ein String als Argument übergeben werden, um der Funktion mitzuteilen, was in diese Pop-Up-Box geschrieben werden soll.

Die guten Nachrichten sind, dass Sie Ihre eigenen Funktionen definieren können. Im nächsten Beispiel schreiben wir eine einfache Funktion, die zwei Zahlen als Argumente aufnimmt und diese multipliziert:

```js
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
```

Versuchen Sie, diese Funktion in der Konsole auszuführen, dann versuchen Sie Ihre neue Funktion mehrmals aufzurufen:

```js
multiply(4,7);
multiply(20,20);
multiply(0.5,3);
```

> **Note:** **Anmerkung**: Das [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Kommando teilt dem Browser mit, die Variable `result` aus der Funktion zurückzuliefern. Somit ist es möglich, diese zu benutzen. Dies ist notwendig, weil Variablen, die innerhalb der Funktion verwendet werden, nur dort gültig sind. Diese Verhaltensweise wird {{Glossary("Scope", "scoping")}} genannt. (Lesen Sie [mehr über den Gültigkeitsbereich von Variablen](/de/docs/Web/JavaScript/Guide/Values,_variables,_and_literals#Variable_scope).)

### Ereignisse (Events)

Um wirkliche Interaktivität auf einer Website herzustellen, werden Ereignisse (events) benötigt - dieses sind Code-Strukturen, die auf Ereignisse achten, die im Browser geschehen und Ihnen dann erlauben, Code auszuführen, um auf diese Ereignisse zu reagieren. Das offensichtlichste Beispiel ist das [Klick-Ereignis](/de/docs/Web/Events/click), das vom Browser abgefeuert wird, wenn man mit dem Mauszeiger auf etwas klickt. Um dies zu zeigen, geben Sie den folgenden Code in die Konsole ein und klicken auf die aktuelle Webseite:

```js
document.querySelector('html').onclick = function() {
    alert('Hey! Nicht so viel klicken!');
}
```

Es existieren viele Möglichkeiten, ein Ereignis mit einem Element zu verbinden. Hier wählen wir das Element HTML aus und setzen die Eigenschaft des [onclick](/de/docs/Web/API/GlobalEventHandlers.onclick)-Handlers gleich einer anonymen (namenlosen) Funktion, die den Code enthält, den wir ausführen wollen, wenn das Ereignis geschieht.

Beachten Sie, dass

```js
document.querySelector('html').onclick = function() {};
```

gleichbedeutend ist mit

```js
var myHTML = document.querySelector('html');
myHTML.onclick = function() {};
```

Es ist nur kürzer.

## Dynamische Inhalte für unsere Beispielwebseite

Nun, da wir einige Grundlagen von JavaScript kennengelernt haben, lassen Sie uns einige dynamische Inhalte in Ihre erste Webseite einfügen, damit Sie sehen was mit JavaScript möglich ist.

### Bilder wechseln

Wir werden der Webseite ein weiteres Bild hinzufügen. Mit etwas JavaScript-Code werden wir zwischen den beiden Bildern wechseln, wenn auf diese mit der Maus geklickt wird.

1.  Suchen Sie sich zuerst ein zweites Bild für Ihre Webseite aus. Es sollte möglichst die selbe Größe haben, wie das Bild, das Sie schon auf der Webseite haben.
2.  Speichern Sie dieses Bild in Ihrem `bilder`-Ordner.
3.  Ändern Sie den Namen des Bildes in etwas, das Sie sich leicht merken können, wir haben es `'firefox2.png'` genannt.
4.  Gehen Sie in Ihre `main.js` Datei und geben den folgenden JavaScript-Code ein: (Löschen Sie das "hello world"-Beispiel von oben)

    ```js
    var myImage = document.querySelector('img');

    myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        if(mySrc === 'bilder/firefox-icon.png') {
          myImage.setAttribute ('src','bilder/firefox2.png');
        } else {
          myImage.setAttribute ('src','bilder/firefox-icon.png');
        }
    }
    ```

5.  Speichern Sie alle Dateien und laden Sie `index.html` in Ihrem Browser. Wenn Sie jetzt auf das Bild klicken, sollte es sich ändern!

Wir erstellen die Variable `myImage` und speichern in dieser eine Referenz zu unserem Bild-Element(`img`). Als nächstes setzen wir das `onclick`-Event dieser Variablen gleich mit einer Funktion ohne Namen (einer*anonymen* Funktion). In dieser Funktion steht, was jedes mal passieren soll, wenn auf das Bild geklickt wird:

1.  Wir holen uns den Wert des `src` Attributes von unserem Bild.
2.  Wir benutzen eine `if`-Bedingung, um zu überprüfen ob der `src`-Wert derselbe ist, wie der Pfad unseres original Bildes:

    1.  Wenn die Bedingung wahr ist, ändern wir den `src`-Wert in den Pfad des zweiten Bildes, so das dieses Bild nun in unser {{htmlelement("image")}}-Element geladen wird.
    2.  Wenn die Bedingung falsch ist (das Bild also schon angeklickt und geändert wurde), ändern wir den `src`-Wert wieder in den Pfad des ersten Bildes, so das bei erneutem Klick mit der Maus das Originalbild wieder erscheint.

### Ein persönlicher Willkommensgruß

Als nächstes fügen wir unserer Webseite einen persönlichen Willkommensgruß hinzu, welcher vom Benutzer beim ersten Besuch der Seite geändert werden kann. Die Änderung soll auch erhalten bleiben, wenn der Benutzer die Seite verlässt und später wieder zurück kommt. Wir werden auch eine Option haben, den Nutzer zu ändern, so das der Gruß dementsprechend geändert wird.

1.  In der `index.html`-Datei fügen Sie direkt vor dem {{htmlelement("script")}} Element folgende Code-Zeile ein:

    ```html
    <button>Name ändern</button>
    ```

2.  In `main.js` fügen Sie den folgenden Code am Ende hinzu. Achten Sie darauf, das Ihr Code genauso aussieht wie hier gezeigt. Damit erstellen wir zwei neue Variablen und speichern in der Ersten eine Referenz zu unserem neu erstellten button und in der Zweiten zu unserer Hauptüberschrift auf der Webseite:

    ```js
    var myButton = document.querySelector('button');
    var myHeading = document.querySelector('h1');
    ```

3.  Fügen Sie nun die folgende Funktion ein. Diese erstellt den personalisierten Willkommensgruß. Jetzt macht diese Funktion noch nichts, aber wir werden sie gleich benutzen:

    ```js
    function setUserName() {
      var myName = prompt('Bitte geben Sie Ihren Namen ein.');
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla ist cool, ' + myName;
    }
    ```

    Innerhalb der Funktion wird in der ersten Zeile die neue Variable `myName` erstellt, in welcher der Name des Benutzers gespeichert werden soll. Der Name des Benutzers wird mit der [`prompt()`](/de/docs/Web/API/Window.prompt)-Funktion erfragt - es öffnet sich eine Dialogbox, ähnlich wie bei der `alert()`-Funktion, in welcher der Benutzer seinen Namen eingeben kann und mit einem klick auf **OK** bestätigen kann. Als nächstes Rufen wir eine API namens `localStorage` auf, mit welcher wir Daten im Browser speichern und später darauf zurückgreifen können. Wir nutzen die s`etItem()`-Funktion von `localStorage`, um ein Datenobjekt mit dem Namen `'name'` zu erstellen und setzen für den Wert die Variable `myName` ein, welche den Namen enthält, den der Benutzer eingegeben hat. Als letztes ersetzen wir den Textinhalt (`textContent`) von `myHeading` mit unserem Gruß welcher den Namen des Benutzers beinhaltet.

4.  Fügen Sie als nächstes diesen `if ... else` Block hinzu — dies ist der Initialisierungscode, mit welchem wir unsere App aufsetzen, wenn sie das erste mal geladen wird:

    ```js
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      var storedName = localStorage.getItem('name');
      myHeading.textContent = 'Mozilla ist cool, ' + storedName;
    }
    ```

    Dieser Code-Block benutzt eine logische Verneinung, um zu überprüfen ob es schon einen gespeicherten Namen gibt. Wenn der Name nicht existiert, dann wird die Funktion `setUserName()` aufgerufen, um einen Namen zu bekommen. Wenn der Name existiert, der Benutzer also diesen schon bei einem vorherigen Besuch der Webseite angegeben hat, dann wird der gespeicherte Name mit der `getItem()`-Funktion geladen, in der Variablen `storedName` gespeichert und dem String für den Willkommensgruß hinzugefügt.

5.  Als letztes fügen wir unserem Button den unten stehenden `onclick`-Eventhandler hinzu, welcher die `setUserName()`-Funktion aufruft. Damit kann der Benutzer den Namen jederzeit ändern, wenn er auf den Button drückt:

    ```js
    myButton.onclick = function() {
      setUserName();
    }
    ```

Wenn Sie Ihre Seite jetzt im Browser aufrufen, werden Sie beim ersten Besuch nach Ihrem Namen gefragt und der Willkommensgruß wird personalisiert. Sie können den Namen jederzeit ändern, indem Sie auf den Button drücken. Der personalisierte Willkommensgruß wird auch wieder angezeigt, wenn Sie die Seite verlassen und danach wieder aufrufen, da der Name in `localStorage`, im Browser, gespeichert wird!

## Zusammenfassung

Wenn Sie der Anleitung in diesem Artikel gefolgt sind, dann sollten Sie jetzt eine Webseite besitzen die ähnlich aussieht, wie diese hier ([sehen Sie sich unsere Version an](https://mdn.github.io/beginner-html-site-scripted/)):

![](https://mdn.mozillademos.org/files/15477/beginner-js2-de.jpg)

Wenn Sie nicht das selbe Resultat haben und keine Lösung finden (probieren Sie es erst selbst hinzubekommen), dann können Sie sich [unseren Code auf Github anschauen](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js).

Hier haben wir nur einige Grundlagen und Beispiele von JavaScript gezeigt. Wenn es Sie interessiert, lernen Sie mehr über JavaScript in unserem [JavaScript Guide](/de/docs/Web/JavaScript/Guide).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
