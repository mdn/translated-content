---
title: <big>
slug: Web/HTML/Element/big
tags:
  - Element
  - HTML
  - Obsolete
  - Referenz
  - Web
translation_of: Web/HTML/Element/big
---
{{obsolete_header}}

## Übersicht

Das HTML Big Element (`<big>`) vergrößert die Schrift um einen Wert (zum Beispiel von small nach medium oder von large nach x-large) bis zur maximalen Schriftgröße des Browsers.

> **Note:** **Hinweis zur Benutzung:** Dadurch, dass dieses Element rein der Darstellung diente, wurde es in [HTML5](/de/docs/Web/Guide/HTML/HTML5) entfernt und sollte nicht mehr verwendet werden. Stattdessen sollten Webentwickler die [CSS](/de/docs/Web/CSS) Eigenschaften nutzen.

## Attribute

Dieses Element hat nicht mehr als die [globalen Attribute](/de/docs/HTML/global_attributes "HTML/global attributes"), wie jedes Element.

## Beispiel 1

```xml
<p>
  Das ist der erste Satz. <big>Der zweite
  Satz wird größer dargestellt.</big>
</p>
```

## Beispiel 2 (CSS Alternative)

```xml
<p>
  Das ist der erste Satz. <span style="font-size:1.2em">Der zweite
  Satz wird größer dargestellt.</span>
</p>
```

### Ergebnis

Das ist der erste Satz. Der zweite Satz wird größer dargestellt.

## DOM Schnittstelle

Dieses Element implementiert die {{domxref('HTMLElement')}} Schnittstelle.

> **Note:** **Hinweis zur Implementierung:** Bis einschließlich Gecko 1.9.2 implementierte Firefox die {{domxref('HTMLSpanElement')}} Schnittstelle für dieses Element.

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
- HTML 4.01 Spezifikation: [Font Styles](http://www.w3.org/TR/html4/present/graphics.html#h-15.2)

{{HTMLRef}}
