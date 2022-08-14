---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
tags:
  - API
  - CustomElementRegistry
  - Method
  - Reference
  - Web Components
  - Webkomponente
  - benutzerdefiniert
  - custom elements
  - define
translation_of: Web/API/CustomElementRegistry/define
---
{{APIRef("CustomElementRegistry")}}

Die **`define()`** Methode der {{domxref("CustomElementRegistry")}} Schnittstelle beschreibt ein neues benutzerdefiniertes Element.

Es gibt zwei Arten von benutzerdefinierten Elementen, die erstellt werden können:

- **Autonomes benutzerdefiniertes Element:** Eigenständige Elemente; Sie erben nicht von eingebauten HTML-Elementen.
- **Angepasstes integriertes Element:** Diese Elemente erben und erweitern eingebaute HTML-Elemente.

## Syntax

    customElements.define(name, constructor, options);

### Parameter

- name
  - : Name des neuen benutzerdefinierten Elements. Beachte, dass Namen von benutzerdefinierten Elementen einen Bindestrich enthalten müssen.
- constructor
  - : Konstruktor für das neue, benutzerdefinierte Element.
- options {{optional_inline}}
  - : Objekt, das steuert, wie das Element definiert ist. Eine Option wird derzeit unterstützt:\* `extends`: String des Namens eines integrierten Elements das erweitert werden soll. Wird verwendet um ein _angepasstes integriertes Element_ zu erzeugen*.*

### Return value

Void.

### Ausnahmebehandlung

| Exception           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NotSupportedError` | Das {{domxref("CustomElementRegistry")}} enthält bereits einen Eintrag mit dem gleichen Namen oder dem gleichen Konstruktor (oder ist auf andere Weise bereits definiert), oder `extends` ist angegeben und es ist ein [gültiger benutzerdefinierter Elementname](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name) oder `extends` ist angegeben, aber das Element, das es zu erweitern versucht, ist ein unbekanntes Element. |
| `SyntaxError`       | Der angegebene Name ist kein [gültiger benutzerdefinierter Elementname](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).                                                                                                                                                                                                                                                                                                                 |
| `TypeError`         | Der referenzierte Konstruktor ist kein Konstruktor.                                                                                                                                                                                                                                                                                                                                                                                                                             |

> **Note:** **Hinweis**: Du wirst oftmals `NotSupportedError`s geworfen bekommen, die so erscheinen als würde `define()` fehlschlagen, aber stattdessen wahrscheinlich ein Problem mit {domxref("Element.attachShadow()")}} sind.

## Beispiele

### Autonomes benutzerdefiniertes Element

Der folgende Code entstammt dem [popup-info-box-web-component](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) Beispiel ([siehe Live](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)).

```js
// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

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
                           'position: relative;' +
                        '}' +

                         '.info {' +
                            'font-size: 0.8rem;' +
                            'width: 200px;' +
                            'display: inline-block;' +
                            'border: 1px solid black;' +
                            'padding: 10px;' +
                            'background: white;' +
                            'border-radius: 10px;' +
                            'opacity: 0;' +
                            'transition: 0.6s all;' +
                            'position: absolute;' +
                            'bottom: 20px;' +
                            'left: 10px;' +
                            'z-index: 3;' +
                          '}' +

                          'img {' +
                            'width: 1.2rem' +
                          '}' +

                          '.icon:hover + .info, .icon:focus + .info {' +
                            'opacity: 1;' +
                          '}';

    // attach the created elements to the shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);
```

```html
<popup-info img="img/alt.png" text="Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card.">
```

> **Note:** **Hinweis**: Konstruktoren für autonome benutzerdefinierte Elemente müssen {{domxref("HTMLElement")}} extenden.

### Benutzerdefiniertes integriertes Element

Der folgende Code entstammt dem [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) Beispiel ([siehe Live](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this.parentNode;

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // Create a shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Create text node and add word count to it
    var text = document.createElement('span');
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);


    // Update count when element content changes
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

## Spezifikationen

| Spezifikation                                                                                                                                        | Status                           | Kommentar           |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "custom-elements.html#dom-customelementregistry-define", "customElements.define()")}} | {{Spec2("HTML WHATWG")}} | Initial definition. |

## Browserkompatibilität

{{Compat("api.CustomElementRegistry.define")}}
