---
title: Kontextmenü
slug: Web/HTML/Global_attributes/contextmenu
tags:
  - Globale Attribute
  - HTML
  - Kontextmenü
  - Referenz
translation_of: Web/HTML/Global_attributes/contextmenu
original_slug: Web/HTML/Globale_Attribute/kontextmenu
---
{{HTMLSidebar("Global_attributes")}}

> **Warning:** Das [contextmenu Attrbut ist obsolet](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu) und die Unterstützung wird aus allen Browsern entfernt werden.

Das [globale Attribut](/de/docs/Web/HTML/Global_attributes)**`contextmenu`** ist die [**id**](/de/docs/Web/HTML/Global_attributes/id) von einem {{HTMLElement("menu")}}, welches als Kontextmenü benutzt werden soll.

Ein _Kontextmenü_ ist ein Menü, dass nach einer Interaktion des Benutzers erscheint. HTML5 erlaubt nun, dieses Menü anzupassen. Hier sind ein paar Beispiele, inklusive verschachtelter Menüs.

## Beispiel

### HTML

```html
<body contextmenu="share">
  <menu type="context" id="share">
    <menu label="share">
      <menuitem label="Twitter" onclick="shareViaTwitter()"></menuitem>
      <menuitem label="Facebook" onclick="shareViaFacebook()"></menuitem>
    </menu>
  </menu>
  <ol>
    <li>
      Überall in diesem Beispiel kannst du die Seite über das Kontextmenü auf Twitter und Facebook teilen.
    </li>
    <li contextmenu="changeFont" id="fontSizing">
      In diesem besonderen Listen-Element kannst du die Schriftgröße eines
      Textes über das Kontextmenü vergrößern und verkleinern.
    </li>
    <menu type="context" id="changeFont">
      <menuitem label="Schrift vergrößern" onclick="incFont()"></menuitem>
      <menuitem label="Schrift verkleinern" onclick="decFont()"></menuitem>
    </menu>
    <li contextmenu="ChangeImage" id="changeImage">
      Auf dem unteren Bild kannst du die Option
      "Wechsele Bild" im Kontextmenü auswählen.<br />
      <img src="https://developer.mozilla.org/media/img/promote/promobutton_mdn5.png"
          contextmenu="ChangeImage" id="promoButton" />
      <menu type="context" id="ChangeImage">
        <menuitem label="Wechsele Bild" onclick="changeImage()"></menuitem>
      </menu>
    </li>
  </ol>
</body>
```

### JavaScript

```js
function shareViaTwitter() {
  window.open("https://twitter.com/intent/tweet?text=" +
      "Hurray! I am learning ContextMenu from MDN via Mozilla");
}

function shareViaFacebook() {
  window.open("https://facebook.com/sharer/sharer.php?u=" +
      "https://developer.mozilla.org/en/HTML/Element/Using_HTML_context_menus");
}

function incFont() {
  document.getElementById("fontSizing").style.fontSize = "larger";
}

function decFont() {
  document.getElementById("fontSizing").style.fontSize = "smaller";
}

function changeImage() {
  var index = Math.ceil(Math.random() * 39 + 1);
  document.images[0].src =
      "https://developer.mozilla.org/media/img/promote/promobutton_mdn" +
      index + ".png";
}
```

### Ergebnis

{{EmbedLiveSample("Beispiel", "100%", 400)}}

## Spezifikationen

| Specification                                                                                                | Status                           | Comment                                                                      |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "forms.html#attr-contextmenu", "contextmenu")}}             | {{Spec2('HTML WHATWG')}} | Keine Änderungen seit dem letzten Snapshot, {{SpecName('HTML5.1')}} |
| {{SpecName('HTML5.1', "interactive-elements.html#context-menus", "contextmenu")}} | {{Spec2('HTML5.1')}}     | Snapshot von {{SpecName('HTML WHATWG')}}, initiale Definition.      |

## Browser Kompatibilität

{{Compat}}

\[1] Eine experimentelle Implementation war zwischenzeitlich mit der Kommandozeilen-Option `--enable-blink-features=ContextMenu` verfügbar. Bis Chrome 52 und Opera 39 war diese außerdem durch Aktivieren der Option _Experimental Web Platform_ verfügbar, welche aber aufgrund eines Kompatibilitätsproblems entfernt wurde. Dies ist dokumentiert in [Chromium bug 87553](https://bugs.chromium.org/p/chromium/issues/detail?id=87553).

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contextMenu")}}
