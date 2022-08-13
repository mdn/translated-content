---
title: CSS3 Spalten
slug: Web/CSS/CSS_Columns/Using_multi-column_layouts
tags:
  - CSS
  - CSS3
translation_of: Web/CSS/CSS_Columns/Using_multi-column_layouts
original_slug: CSS3_Columns
---
Viele Benutzer haben Schwierigkeiten Texte zu lesen, wenn die Zeilen sehr lang sind. Es dauert dann zu lange für das Auge vom Ende der Zeile zum Anfang einer Neuen zu springen. Sie verrutschen unter Umständen in der Zeile und der Lesefluss wird unterbrochen. Um dennoch das Maximum an Bildfläche von großen Bildschirmen zu nutzen, sollten Autoren eine begrenzte Spaltenbreite verwenden, die den Text dann nebeneinander platziert (vergleichbar mit dem Spaltensatz in Zeitungen). Unglücklicherweise ist es mittels HTML und CSS 2.1 nicht möglich Spaltenumbrüche festzulegen, ohne dass diese an festen Positionen gebunden sind. Das erlaubte Markup im Text muss stark eingeschränkt werden oder die Spalten müssen durch die Verwendung von Scripts erstellt werden.

Die [CSS3 Multi-column Spezifikation](http://www.w3.org/TR/css3-multicol/) schlägt einige neue CSS Eigenschaften vor, die diese Funktionen mittels CSS ermöglichen. In Firefox 1.5 und später wurde ein Teil dieser Eigenschaften implementiert, um das Verhalten, so wie es in der Spezifikation beschrieben ist (mit einer Ausnahme; siehe unten), zu realisieren.

In [Robert O'Callahans Blog](http://weblogs.mozillazine.org/roc/) kann man den Einsatz von CSS Columns mit einem Firefox 1.5 oder später betrachten.

## Verwendung von Spalten

### Spaltenanzahl und -breite

Zwei CSS Eigenschaften steuern, ob und wie viele Spalten erscheinen werden: [`-moz-column-count`](/de/CSS/-moz-column-count "de/CSS/-moz-column-count") und [`-moz-column-width`](/de/CSS/-moz-column-width "de/CSS/-moz-column-width").

`-moz-column-count` legt die Anzahl an Spalten auf eine bestimmte Zahl fest, z.B.:

```html
<div style="-moz-column-count:2">In Vorbereitung zum Release von Mozilla Firefox 1.5 Beta 1,
wird der Tree heute Nacht um 11:59pm Pacific Daylight Time (UTC -0700) geschlossen.
Nach diesem Zeitpunkt werden keine weiteren Checkins für Firefox 1.5 Beta 1 erlaubt,
da dieser am Donnerstag released werden soll.</div>
```

Dieser Codeschnipsel wird den Inhalt in zwei Spalten anzeigen (funktioniert nur unter Firefox 1.5 oder höher):

In Vorbereitung zum Release von Mozilla Firefox 1.5 Beta 1, wird der Tree heute Nacht um 11:59pm Pacific Daylight Time (UTC -0700) geschlossen. Nach diesem Zeitpunkt werden keine weiteren Checkins für Firefox 1.5 Beta 1 erlaubt, da dieser am Donnerstag released werden soll.

`-moz-column-width` legt die minimal erwünschte Spaltenbreite fest.
Wenn `-moz-column-count` nicht ebenfalls festgelegt wurde, wird der Browser automatisch so viele Spalten erstellen, wie in die verfügbare Breite passen.

```html
<div style="-moz-column-width:20em;">In Vorbereitung zum Release von Mozilla Firefox 1.5 Beta 1,
wird der Tree heute Nacht um 11:59pm Pacific Daylight Time (UTC -0700) geschlossen.
Nach diesem Zeitpunkt werden keine weiteren Checkins für Firefox 1.5 Beta 1 erlaubt,
da dieser am Donnerstag released werden soll.</div>
```

Wird so angezeigt:

In Vorbereitung zum Release von Mozilla Firefox 1.5 Beta 1, wird der Tree heute Nacht um 11:59pm Pacific Daylight Time (UTC -0700) geschlossen. Nach diesem Zeitpunkt werden keine weiteren Checkins für Firefox 1.5 Beta 1 erlaubt, da dieser am Donnerstag released werden soll.

Die genauen Details dazu sind in der [CSS3 Spezifikation](http://www.w3.org/TR/css3-multicol/) beschrieben.

In einem mehrspaltigen Block, wird der Inhalt (wenn nötig) automatisch von der einen in die nächste Spalte transportiert. Alle HTML, CSS und DOM Funktionen werden innerhalb von Spalten unterstützt, auch beim Bearbeiten und Drucken des Textes.

### Höhenausgleich

In der CSS3 Spezifikation ist festgelegt, dass sich die Spaltenhöhen ausgleichen müssen: Das bedeutet, dass der Browser die maximale Höhe automatisch festlegt, sodass die Höhe jeder Spalte ungefähr gleich sind. Firefox macht genau das.

Es ist jedoch in einigen Situationen nützlich eine maximale Höhe der Spalten explizit festzulegen, den Inhalt in die erste Spalte zu legen und dann soviele Spalten wie nötig zu erstellen, die sich nach rechts austrecken. Daher wurde das Spaltenmodel erweitert. Wenn die [`height`](/de/CSS/height "de/CSS/height") Eigenschaft in einem mehrspaltigen Block festgelegt wurde, kann jede Spalte nur so hoch wie diese Höhenangabe werden und nicht größer, bevor dann eine neue Spalte hinzugefügt wird. Dieser Modus ist effizienter für das Layout.

### Spaltenlücken

Seit Firefox 3 gibt es standardmäßig eine Lücke von `1em` zwischen den einzelnen Spalten (vorher war jede Spalte direkt neben der nächsten Spalte).
Es ist einfach das Standardverhalten zu ändern, in dem man die [`-moz-column-gap`](/de/CSS/-moz-column-gap "de/CSS/-moz-column-gap") Eigenschaft einsetzt:

```html
<div style="-moz-column-width:20em; -moz-column-gap:2em;">In Vorbereitung zum Release von Mozilla Firefox 1.5 Beta 1,
wird der Tree heute Nacht um 11:59pm Pacific Daylight Time (UTC -0700) geschlossen.
Nach diesem Zeitpunkt werden keine weiteren Checkins für Firefox 1.5 Beta 1 erlaubt,
da dieser am Donnerstag released werden soll.</div>
```

In Vorbereitung zum Release von Mozilla Firefox 1.5 Beta 1, wird der Tree heute Nacht um 11:59pm Pacific Daylight Time (UTC -0700) geschlossen. Nach diesem Zeitpunkt werden keine weiteren Checkins für Firefox 1.5 Beta 1 erlaubt, da dieser am Donnerstag released werden soll.

### Graceful Degradation (Abwärtskompatibilität und Fehlertoleranz)

Die [`-moz-column`](/de/CSS/-moz-column "de/CSS/-moz-column") Eigenschaft wird von Browsern, die Spalten nicht unterstützen, einfach ignoriert. Daher ist es relativ einfach ein Layout zu erstellen, dass den Inhalt in diesen Browsern in einer einzigen Spalte anzeigt, während in Firefox 1.5 und später mehrere Spalten angezeigt werden.

## Fazit

CSS3 Spalten bieten eine neue Möglichkeit für Webentwickler das Beste aus der Bildfläche herauszuholen. Fantasievolle Entwickler finden vielleicht weitere Verwendungsmöglichkeiten, bei denen die Funktion des automatischen Höhenausgleichs zum Einsatz kommen könnte.

## Siehe auch

- [`-moz-column-width`](/de/CSS/-moz-column-width "de/CSS/-moz-column-width"), [`-moz-column-count`](/de/CSS/-moz-column-count "de/CSS/-moz-column-count"), [`-moz-column-gap`](/de/CSS/-moz-column-gap "de/CSS/-moz-column-gap"), [`-moz-column-rule`](/de/CSS/-moz-column-rule "de/CSS/-moz-column-rule"), [`-moz-column-rule-width`](/de/CSS/-moz-column-rule-width "de/CSS/-moz-column-rule-width"), [`-moz-column-rule-style`](/de/CSS/-moz-column-rule-style "de/CSS/-moz-column-rule-style"), [`-moz-column-rule-color`](/de/CSS/-moz-column-rule-color "de/CSS/-moz-column-rule-color")
- [CSS Referenz](/de/CSS_Referenz "de/CSS_Referenz"), [Mozilla CSS Erweiterungen](/de/CSS_Referenz/Mozilla_CSS_Erweiterungen "de/CSS_Referenz/Mozilla_CSS_Erweiterungen")

## Zusätzliche Referenzen

- [Robert O'Callahan: »Gecko 1.8 For Web Developers: Columns«](http://weblogs.mozillazine.org/roc/archives/2005/03/gecko_18_for_we.html)
