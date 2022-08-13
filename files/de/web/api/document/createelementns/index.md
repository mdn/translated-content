---
title: Document.createElementNS()
slug: Web/API/Document/createElementNS
translation_of: Web/API/Document/createElementNS
---
{{ApiRef("DOM")}}Erzeugt ein Element mit der angegebenen Namespace-URL und einem Namen.Um ein Element zu definieren, ohne eine Namespace-URL anzugeben, verwenden Sie die Methode [createElement](createElement).

## Syntax

```js
var element = document.createElementNS(namespaceURI, qualifiedName[, options]);
```

### Parameter

- `namespaceURI`
  - : Ein String, der die mit dem Element verknüpfte [Namespace-URL](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) angibt. Die Eigenschaft [namespaceURI](/de/docs/DOM/element.namespaceURI) des neu erstellten Elements wird mit dem Wert von `namespaceURI` initialisiert (siehe Gültige Namespace-URLs).
- `qualifiedName`
  - : Ein String, der den Namen des Elements angibt. Die Eigenschaft [nodeName](/de/docs/DOM/element.nodeName) des neu erstellten Elements wird mit dem Wert von `qualifiedName` initialisiert.
- `options` {{optional_inline}}

  - : Das optionale Objekt `ElementCreationOptions` enthält eine einzelne Eigenschaft mit Namen `is`, dessen Wert der Tag-Name eines zuvor mit `customElements.define()` definierten angepassten Elements ist. Aus Gründen der Abwärtskompatibilität erlauben einige Browser hier auch die Übergabe eines Strings mit dem Taf-Namen (s. [Custom Elements specification](https://www.w3.org/TR/custom-elements/)). Siehe [Extending native HTML elements](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml) für weitere Informationen zur Verwendung dieses Parameters.

    Das neue Element erhält ein Attribut mit Namen `is` dessen Wert den Tag-Namen des Elements enthält. Angepasste Elemente sind ein experimentelles Feature, das nich in allen Browsern verfügbar ist.

### Rückgabewert

Das neu erstelle [`Element`](/de/docs/Web/API/Element "The Element interface represents an object of a Document. This interface describes methods and properties common to all kinds of elements. Specific behaviors are described in interfaces which inherit from Element but add additional functionality.").

## Gültige Namespace-URLs

- HTML - `http://www.w3.org/1999/xhtml`
- SVG - `http://www.w3.org/2000/svg`
- XBL - `http://www.mozilla.org/xbl`
- XUL - `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`

## Beispiel

Dies erstellt ein neues Element vom Typ \<div> im [XHTML](/de/docs/XHTML "XHTML")-Namespace und fügt es dem vbox-Element hinzu. Obwohl dies kein besonders sinnvolles [XUL](/de/docs/XUL "XUL")-Document ist, demonstriert es die Verwendung von Elementen verschiedener Namespaces innerhalb eines Dokuments:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Working with elements||"
      onload="init()">

<script type="text/javascript"><![CDATA[
 var container;
 var newdiv;
 var txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml","div");
   txtnode = document.createTextNode("This is text that was constructed dynamically with createElementNS and createTextNode then inserted into the document using appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id='ContainerBox' flex='1'>
  <html:div>
   The script on this page will add dynamic content below:
  </html:div>
 </vbox>

</page>
```

> **Note:** Das obige Beispiel verwendet ein Inline-Skript, was für XHTML-Dokumente nicht empfohlen wird. Dieses Beispiel ist eigentlich ein XUL-Dokument mit eingebettetem XHTML. Nichts desto trotz bleibt die Empfehlung bestehen.

## Spezifikationen

| Spezigikation                                                                                                    | Status                           | Kpmmentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('DOM WHATWG', "#dom-document-createelementns", "Document.createElement")}} | {{Spec2('DOM WHATWG')}} |           |

## Browser-Kompatibilität

{{Compat}}

\[1] In vorangegangenen Versionen dieser Spezifikation war dieses Argument ein einfacher String, dessen Wert der Tag-Name eines angepassten Elements ist. Aus Gründen der Abwärtskompatibilität akzeptiert Chrome hier beide Formate

\[2] Siehe \[1] oben: Wie Chrome, akzeptiert hier auch Firefox einen String anstelle eines Objekts. Allerdings erst ab Version 51 aufwärts. In Version 50 muss `options` ein Objekt sein.

\[3] Um in Firefox mit angepassten Elementen zu experimentieren müssen die Einstellungen `dom.webcomponents.enabled` und `dom.webcomponents.customelements.enabled` auf `true` gesetzt werden.

## Siehe auch

- [document.createElement](createElement)
- [document.createTextNode](createTextNode)
- [Node.namespaceURI](../Node/namespaceURI)
- [Namespaces in XML](http://www.w3.org/TR/1999/REC-xml-names-19990114)
