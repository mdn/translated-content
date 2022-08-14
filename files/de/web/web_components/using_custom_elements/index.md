---
title: Benutzerdefinierte Elemente
slug: Web/Web_Components/Using_custom_elements
translation_of: Web/Web_Components/Using_custom_elements
---
{{DefaultAPISidebar("Web Components")}}

Eines der Hauptmerkmale des Web Components Standards ist die Möglichkeit, benutzerdefinierte Elemente (custom elements) zu erstellen, die ihre Funktionalität auf einer HTML-Seite kapseln, anstatt sich mit einem langen, verschachtelten Stapel von Elementen begnügen zu müssen, die zusammen eine benutzerdefinierte Seitenfunktion bereitstellen. Dieser Artikel stellt die Verwendung von benutzerdefinierten HTML-Elementen vor.

> **Note:** **Hinweis**: Benutzerdefinierte Elemente werden standardmäßig in Chrome und Opera unterstützt. Firefox ist sehr weit in der Entwicklung; sie sind derzeit verfügbar, wenn Sie die Einstellungen `dom.webcomponents.shadowdom.enabled `und `dom.webcomponents.customelements.enabled` auf `true` setzen. Die Implementierung von Firefox soll in der Version 60/61 standardmäßig aktiviert werden. Safari unterstützt bisher nur autonome benutzerdefinierte Elemente, und Edge arbeitet auch an einer Implementierung.

## High-Level-Ansicht

Der Controller von benutzerdefinierten Elementen in einem Web-Dokument ist das Objekt {{domxref("CustomElementRegistry")}} - mit diesem Objekt können Sie ein benutzerdefiniertes Element auf der Seite registrieren, Informationen darüber zurückgeben, welche benutzerdefinierten Elemente registriert sind etc.

Um ein benutzerdefiniertes Element auf der Seite zu registrieren, verwenden Sie die Methode {{domxref("CustomElementRegistry.define()")}}. Das sind die Argumente:

- Ein {{domxref("DOMString")}} repräsentiert den Namen, den Sie dem Element geben. Beachten Sie, dass benutzerdefinierte Elementnamen einen [Bindestrich erfordern](https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name); sie können keine einzelnen Wörter sein.
- Ein [Klassenobjekt](/de/docs/Web/JavaScript/Reference/Classes), das das Verhalten des Elements definiert.
- Optional ein Optionsobjekt, das eine `extends`Eigenschaft enthält, die das eingebaute Element angibt, von dem Ihr Element erbt, falls vorhanden.

So können wir z.B. ein benutzerdefiniertes [Wortzählelement](https://mdn.github.io/web-components-examples/word-count-web-component/) wie dieses definieren:

```js
customElements.define('word-count', WordCount, { extends: 'p' });
```

Das Element heißt `word-count`, sein Klassenobjekt ist WordCount, und es erweitert das Element {{htmlelement("p")}}.

Das Klassenobjekt eines benutzerdefinierten Elements wird mit der ES 2015 Standardsyntax einer Klasse geschrieben. Zum Beispiel ist `WordCount`so aufgebaut:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Element functionality written in here

    ...
  }
}
```

Dies ist nur ein einfaches Beispiel, aber es gibt noch mehr, was Sie hier tun können. Es ist möglich, spezifische Lifecycle-Callbacks innerhalb des Konstruktors zu definieren, die an bestimmten Stellen im Lebenszyklus des Elements ablaufen. Zum Beispiel wird `connectedCallback `aufgerufen, wenn das benutzerdefinierte Element zum ersten Mal mit dem DOM des Dokuments verbunden wird, während `attributeChangedCallback` aufgerufen wird, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, entfernt oder geändert wird.

Im untenstehenden Kapitel [Using the lifecycle callbacks](#using_the_lifecycle_callbacks) wirst du mehr über Lifecycle-Callbacks erfahren.

Es gibt zwei Arten von benutzerdefinierten Elementen:

- **Autonome benutzerdefinierte Elemente** sind eigenständig, d.h. sie erben nicht von standardisierten HTML-Elementen. Du kannst diese Art von benutzerdefinierten Elementen verwenden, indem du ein HTML-Element mit dem entsprechenden Namen erzeugst, z.B. `<popup-info>` oder `document.createElement("popup-info")`.
- **Benutzerdefinierte Standardelemente** erben von standardisierten HTML-Elementen. Beim Erstellen eines solchen Elements musst du angeben, von welchem standardisierten HTML-Element geerbt wird (vgl. obige Beispiele). Um ein benutzerdefiniertes Standardelement zu verwenden, erstellst du Objekt des Basiselements mit dem Attribut (oder der Eigenschaft) {{htmlattrxref("is")}}, z.B. `<p is="word-count">` oder `document.createElement("p", { is: "word-count" })`.

## Weitere einfache Beispiele

Wir gehen durch einige einfache Beispiele um etwas detaillierter zu zeigen wie benutzerdefinierte Elemente erzeugt werden.

### Autonome benutzerdefinierte Elemente

Wir betrachten ein Beispiel eines autonomen benutzerdefinierte Elementes —
[`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) (siehe hierzu [live example](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)).

Dieses Element nimmt ein Icon und einen Textstring entgegen und fügt das Icon in die Seite ein. Erhält das Icon den Focus, wird der Text in einem Popup-Dialog angezeigt um mehr Information anzubieten

Folgendes JavaScript File definiert eine Klasse `PopUpInfo`, welches das {{domxref("HTMLElement")}} erweitert. Autonome benutzerdefinierte Elemente erweitern nahezu immer das `HTMLElement`.

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}
```

Dieser Code enthält die {{jsxref("Classes.constructor","constructor")}} Definition für diese Klasse, welche immer mit einem Aufruf von [`super()`](/en-US/docs/Web/JavaScript/Reference/Operators/super) beginnt, damit die korrekte Prototypkette erzeugt wird.

Innerhalb des Konstruktors definieren wir alle Funktionalität welche das Element haben wird wenn von diesem eine Instanz erzeugt wird.

Wir binden eine shadow root an das Element, benutzen DOM-Funktionalität um die interne shadow DOM -Struktur zu erzeugen, welch dann an die shadow root gebunden wird. Abschließend fügen wir der shadow root noch etwas CSS hinzu um diese zu stylen.

```js
// Create a shadow root
var shadow = this.attachShadow({mode: 'open'});

// Create spans
var wrapper = document.createElement('span');
wrapper.setAttribute('class','wrapper');
var icon = document.createElement('span');
icon.setAttribute('class','icon');
icon.setAttribute('tabindex', 0);
var info = document.createElement('span');
info.setAttribute('class','info');

// Take attribute content and put it inside the info span
var text = this.getAttribute('text');
info.textContent = text;

// Insert icon
var imgUrl;
if(this.hasAttribute('img')) {
  imgUrl = this.getAttribute('img');
} else {
  imgUrl = 'img/default.png';
}
var img = document.createElement('img');
img.src = imgUrl;
icon.appendChild(img);

// Create some CSS to apply to the shadow dom
var style = document.createElement('style');

style.textContent = '.wrapper {' +
// CSS truncated for brevity

// attach the created elements to the shadow dom

shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

Letztlich registrieren wir unser benutzerdefiniertes Elementen in der `CustomElementRegistry` mit der Methode `define()` , in deren Parametern spezifizieren wir den Namen des Elements und dann den Namen der Klasse welche die Funktionalität definiert:

```js
customElements.define('popup-info', PopUpInfo);
```

Jetzt ist unser benutzerdefiniertes Elementen fertig zur Benutzung auf unserer Seite.
In unserem HTML sieht das nun so aus:

```html
<popup-info img="img/alt.png" text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card.">
```

> **Note:** Die vollständige [JavaScript Quelle ](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js).

### Customized built-in elements

Now let's have a look at another customized built in element example — [expanding-list](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component) ([see it live also](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). This turns any unordered list into an expanding/collapsing menu.

First of all, we define our element's class, in the same manner as before:

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}
```

We will not explain the element functionality in any detail here, but you can discover how it works by checking out the source code. The only real difference here is that our element is extending the {{domxref("HTMLUListElement")}} interface, and not {{domxref("HTMLElement")}}. So it has all the characteristics of a {{htmlelement("ul")}} element with the functionality we define built on top, rather than being a standalone element. This is what makes it a customized built-in, rather than an autonomous element.

Next, we register the element using the `define()` method as before, except that this time it also includes an options object that details what element our custom element inherits from:

```js
customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```

Using the built-in element in a web document also looks somewhat different:

```html
<ul is="expanding-list">

  ...

</ul>
```

You use a `<ul>` element as normal, but specify the name of the custom element inside the `is` attribute.

> **Note:** Again, you can see the full [JavaScript source code](https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js) here.

## Using the lifecycle callbacks

You can define several different callbacks inside a custom element's constructor, which fire at different points in the element's lifecycle:

- `connectedCallback`: Invoked when the custom element is first connected to the document's DOM.
- `disconnectedCallback`: Invoked when the custom element is disconnected from the document's DOM.
- `adoptedCallback`: Invoked when the custom element is moved to a new document.
- `attributeChangedCallback`: Invoked when one of the custom element's attributes is added, removed, or changed.

Let's look at an example of these in use. The code below is taken from the [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) example ([see it running live](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)). This is a trivial example that simply generates a colored square of a fixed size on the page. The custom element looks like this:

```html
<custom-square l="100" c="red"></custom-square>
```

The class constructor is really simple — here we attach a shadow DOM to the element, then attach empty {{htmlelement("div")}} and {{htmlelement("style")}} elements to the shadow root:

```js
var shadow = this.attachShadow({mode: 'open'});

var div = document.createElement('div');
var style = document.createElement('style');
shadow.appendChild(style);
shadow.appendChild(div);
```

The key function in this example is `updateStyle()` — this takes an element, gets its shadow root, finds its `<style>` element, and adds {{cssxref("width")}}, {{cssxref("height")}}, and {{cssxref("background-color")}} to the style.

```js
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {
      childNodes[i].textContent = 'div {' +
                          ' width: ' + elem.getAttribute('l') + 'px;' +
                          ' height: ' + elem.getAttribute('l') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c');
    }
  }
}
```

The actual updates are all handled by the life cycle callbacks, which are placed inside the constructor. The `connectedCallback()` runs when the element is added to the DOM — here we run the `updateStyle()` function to make sure the square is styled as defined in its attributes:

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}
```

the `disconnectedCallback()` and `adoptedCallback()` callbacks log simple messages to the console to inform us when the element is either removed from the DOM, or moved to a different page:

```js
disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}
```

The `attributeChangedCallback()` callback is run whenever one of the element's attributes is changed in some way. As you can see from its properties, it is possible to act on attributes individually, looking at their name, and old and new attribute values. In this case however, we are just running the `updateStyle()` function again to make sure that the square's style is updated as per the new values:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

Note that to get the `attributeChangedCallback()` callback to fire when an attribute changes, you have to observe the attributes. This is done by calling the `observedAttributes()` getter inside custom element class, including inside it a `return` statement that returns an array containing the names of the attributes you want to observe:

```js
static get observedAttributes() {return ['w', 'l']; }
```

This is placed right at the top of the constructor, in our example.

> **Note:** Find the [full JavaScript source](https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js) here.
