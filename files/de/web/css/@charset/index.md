---
title: '@charset'
slug: Web/CSS/@charset
tags:
  - CSS
  - CSS At-Regel
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/@charset
---
{{CSSRef}}

## Übersicht

Die `@charset` [CSS](/de/docs/Web/CSS "CSS") [At-Regel](/de/docs/Web/CSS/At-Regel "At-rule") gibt die Zeichenkodierung an, die in dem Stylesheet verwendet wird. Sie muss das erste Element im Stylesheet sein und ihr darf kein Zeichen vorangestellt werden; da sie kein [verschachtelter Ausdruck](/de/docs/Web/CSS/Syntax#verschachtelte_Ausdrücke "en/CSS/Syntax#nested_statements") ist, kann sie nicht innerhalb [bedingten Gruppen At-Regeln](/de/docs/Web/CSS/At-Regel#bedingte_Gruppen_Regel "en/CSS/At-rule#Conditional_Group_Rules") verwendet werden. Falls mehrere `@charset` At-Regeln definiert sind, wird nur die erste verwendet. Und sie kann auch nicht innerhalb eines `style` Attributs eines HTML Elements oder innerhalb des {{ HTMLElement("style") }} Elements verwendet werden, in dem die Zeichenkodierung der HTML Seite ausschlaggebend ist.

Diese At-Regel ist nützlich, wenn nicht-ASCII Zeichen in manchen CSS Eigenschaften wie {{ cssxref("content") }} verwendet werden.

Da es mehrere Möglichkeiten gibt, die Zeichenkodierung eines Stylesheets anzugeben, versucht der Browser die folgenden Methoden in der angegebenen Reihenfolge (und stoppt, sobald eine ein Ergebnis zurückliefert):

1. Der Wert des [Unicode Bytereihenfolge](http://de.wikipedia.org/wiki/Byte_Order_Mark) Zeichens, das am Anfang der Datei gesetzt ist.
2. Der Wert, der durch das `charset` Attribut des `Content-Type:` HTTP-Headers angegeben wurde oder das Äquivalent hierzu im Protokoll, das verwendet wird, um das Stylesheet zu übertragen.
3. Die `@charset` CSS At-Regel.
4. Benutze die Zeichenkodierung, die durch das referenzierte Dokument angegeben wird: Das `charset` Attribut des {{ HTMLElement("link") }} Elements. Diese Methode ist veraltet in HTML5 und darf nicht verwendet werden.
5. Nimm an, dass das Dokument UTF-8 kodiert ist.

## Syntax

```css
@charset "UTF-8";
@charset 'iso-8859-15';
```

- _charset_
  - : Ist ein {{cssxref("&lt;string&gt;")}}, der die zu verwendende Zeichenkodierung angibt. Dies muss der Name einer websicheren Zeichenkodierung sein, wie sie in der [IANA Registrierung](http://www.iana.org/assignments/character-sets) definiert wird. Falls mehrere Namen mit einer Kodierung assoziiert werden, wird nur der verwendet, der mit _preferred_ gekennzeichnet ist.

### Formale Syntax

{{csssyntax}}

## Beispiele

Gültige Bespiele:

```css
@charset "UTF-8";       /* Setzt die Kodierung des Stylesheets auf Unicode UTF-8 */
@charset 'iso-8859-15'; /* Setzt die Kodierung des Stylesheets auf Latin-9 (Westeuropäische Sprachen, mit Eurozeichen) */
```

Ungültige Beispiele:

```css
 @charset "UTF-8";      /* Ungültig, da ein Zeichen (Leerzeichen) vor der At-Regel steht */
@charset UTF-8;         /* Ungültig, da kein ' oder " angegeben wurde, die Zeichenkodierung ist kein CSS {{cssxref("&lt;string&gt;")}} */
```

## Spezifikationen

| Spezifikation                                                            | Status                   | Kommentar                |
| ------------------------------------------------------------------------ | ------------------------ | ------------------------ |
| {{SpecName('CSS2.1', 'syndata.html#x57', '@charset')}} | {{Spec2('CSS2.1')}} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.at-rules.charset")}}
