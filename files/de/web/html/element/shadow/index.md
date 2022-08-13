---
title: <shadow>
slug: Web/HTML/Element/Shadow
translation_of: Web/HTML/Element/shadow
---
## Zusammenfassung

Das **[HTML](/de/docs/Web/HTML) `<shadow>`** Element wird als shadow DOM {{glossary("insertion point")}} genutzt. Es kann eventuell gesehen werden, wenn mehrerere shadow roots unter einem shadow host erstellt wurden. Es wird mit [Web Components](/de/docs/Web/Web_Components) genutzt.

| [Kategorien des Inhalts](/de/docs/Web/HTML/Content_categories) | [Transparenter Inhalt](/de/docs/Web/HTML/Content_categories#Transparent_content_model "HTML/Content_categories#Transparent_content_model"). |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Zulässiger Inhalt                                              | [Flow content](/de/docs/Web/HTML/Content_categories#Flow_content).                                                                          |
| Tags                                                           | {{no_tag_omission}}                                                                                                                    |
| Zulässige Eltern-Elemente                                      | Any element that accepts flow content.                                                                                                      |
| DOM Schnittstelle                                              | {{domxref("HTMLShadowElement")}}                                                                                                |

## Attribute

Dieses Element inkludiert die [Globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Beispiel

Hier ist ein einfaches Beispiel, welches das `<shadow>` Element verwendet. Es ist eine HTML-Datei mit allem was benötigt wird.

> **Note:** **Notiz:** Dies ist eine experimentelle Technologie. Damit dieser Code funktioniert muss ihr Browser Web Components unterstützen. [Aktivieren von Web Components in Firefox](/de/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox).

```html
<html>
  <head></head>
  <body>

  <!-- This <div> will hold the shadow roots. -->
  <div>
    <!-- This heading will not be displayed -->
    <h4>My Original Heading</h4>
  </div>

  <script>
    // Get the <div> above with its content
    var origContent = document.querySelector('div');
    // Create the first shadow root
    var shadowroot1 = origContent.createShadowRoot();
    // Create the second shadow root
    var shadowroot2 = origContent.createShadowRoot();

    // Insert something into the older shadow root
    shadowroot1.innerHTML =
      '<p>Older shadow root inserted by &lt;shadow&gt;</p>';
    // Insert into younger shadow root, including <shadow>.
    // The previous markup will not be displayed unless
    // <shadow> is used below.
    shadowroot2.innerHTML =
      '<shadow></shadow> <p>Younger shadow root, displayed because it is the youngest.</p>';
  </script>

  </body>
</html>
```

Das obige Beispiel sollte folgendes anzeigen.

![shadow example](https://mdn.mozillademos.org/files/10083/shadow-example.png)

## Spezifikationen

{{Specifications}}

## Browser Kompatibilität

{{Compat}}

\[1] Wenn Shadow DOM nicht in Firefox aktiviert ist, verhalten sich `<shadow>` Elemente wie {{domxref("HTMLUnknownElement")}}. Shadow DOM wurde erstmals in Firefox 33 implementiert und steckt hinter der Einstellung `dom.webcomponents.enabled`, welche standardmäßig aktiviert ist.

## Siehe auch

- [Web Components](/de/docs/Web/Web_Components)
- {{HTMLElement("content")}}, {{HTMLElement("template")}}, {{HTMLElement("element")}}

{{HTMLRef}}
