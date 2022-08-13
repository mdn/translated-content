---
title: <svg>
slug: Web/SVG/Element/svg
tags:
  - Element
  - Referenz
  - SVG
  - SVG Kontainer
  - Web
translation_of: Web/SVG/Element/svg
---
{{SVGRef}}

Das `svg` Element ist ein Container, der ein neues Koordinatensystem und ein [Darstellungsfeld](/de/docs/Web/SVG/Attribute/viewBox) definiert. Es wird als das äußerste Element jedes SVG Dokuments verwendet, aber kann auch dazu dienen SVG Fragmente innerhalb von einem anderen SVG oder einem HTML Dokument einzubetten.

> **Hinweis:** Das `xmlns` Attribute wird nur benötigt wenn das `svg`-Element das äußerste Element eines _SVG Dokuments_ ist.

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="red" fill="grey" />
  <circle cx="150" cy="50" r="4" stroke="red" fill="grey" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" stroke="red" fill="grey" />
  </svg>
</svg>
```

{{EmbedLiveSample('Exeemple', 150, '100%')}}

## Beispiel

Berücksichtige das folgende SVG Bild (dies stellt die italienische Nationalflagge dar):

```xml
<svg xmlns="http://www.w3.org/2000/svg"
     width="150" height="100" viewBox="0 0 3 2">

  <rect width="1" height="2" x="0" fill="#008d46" />
  <rect width="1" height="2" x="1" fill="#ffffff" />
  <rect width="1" height="2" x="2" fill="#d2232c" />
</svg>
```

Es könnt folgendermaßen in ein HTML5 Dokument inkludiert werden:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>HTML/SVG Example</title>
</head>

<body>

  <svg width="150" height="100" viewBox="0 0 3 2">
    <rect width="1" height="2" x="0" fill="#008d46" />
    <rect width="1" height="2" x="1" fill="#ffffff" />
    <rect width="1" height="2" x="2" fill="#d2232c" />
  </svg>

</body>
</html>
```

## Attribute

### Globale Attribute

- [Conditional processing attributes](/de/docs/Web/SVG/Attribute#ConditionalProccessing) »
- [Core attributes](/de/docs/Web/SVG/Attribute#Core) »
- [Document event attributes](/de/docs/Web/SVG/Attribute#DocumentEvent) »
- [Graphical event attributes](/de/docs/Web/SVG/Attribute#GraphicalEvent) »
- [Presentation attributes](/de/docs/Web/SVG/Attribute#Presentation) »
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("externalResourcesRequired")}}

### Spezifische Attribute

- {{SVGAttr("version")}}
- {{SVGAttr("baseProfile")}}
- {{SVGAttr("x")}}
- {{SVGAttr("y")}}
- {{SVGAttr("width")}}
- {{SVGAttr("height")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("contentScriptType")}}
- {{SVGAttr("contentStyleType")}}
- {{SVGAttr("viewBox")}}

## DOM Interface

Dieses Element implementiert das [`SVGSVGElement`](/en-US/docs/Web/API/SVGSVGElement) Interface.

## Nutzungskontext

{{svginfo}}

## Spezifikationen

| Spezifikation                                                                        | Status                   | Kommentar          |
| ------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('SVG2', 'struct.html#NewDocument', '&lt;svg&gt;')}} | {{Spec2('SVG2')}} |                    |
| {{SpecName('SVG1.1', 'struct.html#NewDocument', '&lt;svg&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Browserkompatibilität

{{Compat("svg.elements.svg")}}
