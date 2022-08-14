---
title: Document.registerElement()
slug: Web/API/Document/registerElement
tags:
  - API
  - DOM
  - Veraltet
  - Web Components
translation_of: Web/API/Document/registerElement
---
{{APIRef("DOM")}}

> **Warning:** **Warnung:** document.registerElement() läuft zu Gunsten von [customElements.define()](/de/docs/Web/API/CustomElementRegistry/define) aus.

Die **`document.registerElement()`**-Methode registriert ein neues [benutzerdefiniertes Element](/de/docs/Web/Web_Components/Custom_Elements) im Browser und gibt einen Konstruktor für das neue Element zurück.

> **Note:** **Hinweis:** Dies ist eine experimentelle Technologie. Der Browser, der sie benutzen soll, muss Web Components unterstützen. Siehe [Web Components in Firefox erlauben](/de/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox).

## Syntax

    var constructor = document.registerElement(tag-name, options);

### Parameter

- _tag-name_
  - : Der Name des benutzerdefinierten Elements. Der Name muss einen Bindestrich (-) enthalten, zum Beispiel `my-tag`.
- _options {{optional_inline}}_
  - : Ein Objekt mit den Eigenschaften **prototype**, auf dem das benutzerdefinierte Element basieren soll, und **extends**, einem bestehenden Tag, der erweitert werden soll. Beide sind optional.

## Beispiel

Hier ist ein einfaches Beispiel:

```js
var Mytag = document.registerElement('my-tag');
```

Der Tag ist num im Browser registriert. Die `Mytag`-Variable enthält einen Konstruktor, der benutzt werden kann, um ein `my-tag`-Element wie folgt im Dokument zu erzeugen:

```js
document.body.appendChild(new Mytag());
```

Das fügt ein leeres `my-tag`-Element ein, dass sichtbar wird, wenn die Entwicklerwerkzeuge des Browsers benutzt werden aber nicht, wenn mit Hilfe des Brwoser der Quellcode betrachtet wird. So lange dem Tag kein Inhalt beigefügt wird, wird es auch in der normalen Browser-Ansicht nicht sichtbar sein. Inhalt kann beispielsweise folgendermaßen hinzugefügt werden:

```js
var mytag = document.getElementsByTagName("my-tag")[0];
mytag.textContent = "I am a my-tag element.";
```

## Browserkompatibilität

{{Compat}}

\[1] Diese API ist hinter einer Einstellung versteckt.

## Siehe auch

- [Custom Elements](/de/docs/Web/Web_Components/Custom_Elements)
