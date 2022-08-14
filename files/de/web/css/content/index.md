---
title: content
slug: Web/CSS/content
tags:
  - CSS
  - CSS Eigenschaft
  - Referenz
translation_of: Web/CSS/content
---
{{ CSSRef() }}

## Zusammenfassung

Die `content` CSS Eigenschaft wird mit {{ cssxref("::before") }} und {{ cssxref("::after") }} Pseudo-elementen genutzt um Inhalte in einen Element zu generieren. Die Inhalte die in `content` eingefügt werden sind Anonym, sie werden nur gerendert und sind nicht im DOM vorhanden. Siehe:_ [replaced elements](/de/docs/CSS/Replaced_element "CSS/Replaced_element")._

{{cssinfo}}

## Syntax

{{csssyntax("/en-US/docs/CSS/Value_definition_syntax")}}

    content: normal                                /* Keywords die nicht mit anderen Werten kombiniert werden können */
    content: none

    content: 'prefix'                              /* <string> Wert, nicht-lateinische Zeichen müssen codiert werden z.B. \00A0 for &nbsp; */
    content: url(http://www.example.com/test.html) /* <uri> Wert */
    content: chapter_counter                       /* <counter> Werte */
    content: attr(value string)                    /* attr() Wert verbunden mit dem HTML Attribut Wert */
    content: open-quote                            /* Sprach- und positionsabhängige Keywords */
    content: close-quote
    content: no-open-quote
    content: no-close-quote

    content: open-quote chapter_counter            /* Außer für normal und none, können mehrere Werte gleichzeitig verwendet werden */

    content: inherit

### Werte

- `none`
  - : Das Pseudo-Element wird nicht erzeugt.
- `normal`
  - : Berechnet auf `none` für `:before` und `:after` Pseudo-elemente.
- \<string>
  - : Text Inhalt.
- \<uri>` url()`
  - : Der Wert ist ein URI, die eine externe Ressource bezeichnet (beispielsweise ein Bild). Wenn die Ressource oder das Bild nicht angezeigt werden kann, wird es entweder ignoriert oder ein Platzhalter wird angezeigt.
- \<counter>
  - : Die Zähler (Counters) können mit zwei verschiedenen Funktionen angegeben werden: 'counter()' oder 'counters()'. Ersteres hat zwei Formen: 'counter(name) "oder" counter(name, style). Der erzeugte Text ist der Wert des counter innersten, im Scope dieses Pseudoelements; es wird in der angegebenen Art ('dezimal' als Standard) formatiert. Die letztere Funktion hat auch zwei Formen: "counter(name, string) 'oder' counters(name, string, style) '. Der erzeugte Text ist der Wert aller Zähler mit dem angegebenen Namen im Scope dieses Pseudoelements, von außen nach innen, durch den angegebenen String getrennt. Die counter werden in der angegebenen Art ('dezimal' als Standard) wiedergegeben. Siehe den Abschnitt über automatische Counter und Nummerierung für weitere Informationen. Der Name darf nicht "none", "inherit" oder "initial" sein. Ein solcher Name bewirkt, dass die Deklaration ignoriert wird.
- `attr(X)`
  - : Gibt den Wert des Elementen Attributes X als String zurück. Gibt es kein Attribut X wird ein leerer String zurückgegeben. Die Groß- und Kleinschreibung von Attributnamen hängt von der Dokumentsprache ab.
- `open-quote` | `close-quote`
  - : Diese Werte werden durch die entsprechende Zeichenfolge aus der {{ cssxref("quotes") }} Eigenschaft ersetzt.
- `no-open-quote` | `no-close-quote`
  - : Stellt keine Inhalte, sondern erhöht (verringert) die Ebene der Schachtelung für Zitate.

## Beispiele

### Code Beispiele - Überschriften und Zitate

#### HTML

```html
<h1>5</h1>
<p> We shall start this with a quote from Sir Tim Berners-Lee,
    <q cite="http://www.w3.org/People/Berners-Lee/FAQ.html#Internet">
        I was lucky enough to invent the Web at the time when the Internet already existed - and had for a decade and a half.</q>  We must understand that there is nothing fundamentally wrong with building on the contributions of others.
</p>

<h1>6</h1>
<p> Here we shall quote the Mozilla Manifesto,
    <q cite="http://www.mozilla.org/en-US/about/manifesto/">
        Individuals must have the ability to shape the Internet and their own experiences on the Internet.</q> And so, we can infer that contributing to the open web, can protect our own individual experiences on it.
</p>
```

#### CSS

```css
q {
    color: #00008B;
    font-style: italic;
}

q::before   { content: open-quote }
q::after    { content: close-quote }

h1::before  { content: "Chapter "; }
```

#### Ausgabe

{{ EmbedLiveSample('Code_sample_-_headings_and_quotes', 460, 100) }}

### Code sample - content with multiple values adding an icon before a link

#### HTML

```html
<a href="http://www.mozilla.org/en-US/">Home Page</a>
```

#### CSS

```css
a::before{
    content: url(http://www.mozilla.org/favicon.ico) " MOZILLA: ";
    font:    x-small Arial,freeSans,sans-serif;
    color:   gray;
}
```

#### Ausgabe

{{ EmbedLiveSample('Code_sample_-_content_with_multiple_values', 200, 60) }}

### Code sample - adding an icon after text in a custom list

#### HTML

```html
<div>
  <ul class="brightIdea">
    <li>This is my first idea</li>
    <li>and another good idea</li>
  </ul>
</div>
```

#### CSS

```css
/* first import the icon from a suitable site */
@import url(http://weloveiconfonts.com/api/?family=entypo);

.brightIdea li::after{
    content: '\1f4a1';
    font-family: 'entypo', sans-serif;
}
```

#### Ausgabe

{{ EmbedLiveSample('Code_sample_-_adding_an_icon_after_text', 300, 100) }}

### Code sample - class based example

#### HTML

```html
<h2>Paperback best sellers</h2>
<ol>
    <li>Political thriller</li>
    <li class="newEntry">Halloween Stories</li>
    <li>My Biography</li>
    <li class="newEntry">Vampire Romance</li>
</ol>
```

#### CSS

```css
/* use a class rather that an element selector to give more flexibility.
Simple string example, but don't forget add a leading space in the text string
for spacing purposes  */

.newEntry::after {
    content: " New!";
    color: red;
}
```

#### Ausgabe

{{ EmbedLiveSample('Code_sample_-_class_based_example', 300, 200) }}

### Code sample - rich link styling

#### HTML

```html
<ul>
    <li><a id="moz" href="http://www.mozilla.org/">
        Mozilla Home Page</a></li>
    <li><a id="mdn" href="https://developer.mozilla.org/">
        Mozilla Developer Network</a></li>
    <li><a id="w3c" href="http://www.w3c.org/">
        World Wide Web Consortium</a></li>
</ul>
```

#### CSS

```css
a {
    text-decoration: none;
    border-bottom: 3px dotted navy;
}

a::after {
    content: " (" attr(id) ")";
}

#moz::before {
    content:url(https://mozorg.cdn.mozilla.net/media/img/favicon.ico) ;
}

#mdn::before {
    content:url(https://mdn.mozillademos.org/files/7691/mdn-favicon16.png) ;
}

#w3c::before {
    content:url(http://w3c.org/2008/site/images/favicon.ico) ;
}

li {
    margin: 1em;
}
```

#### Ausgabe

{{ EmbedLiveSample('Code_sample_-_rich_link_styling', 340, 200) }}

## Specifications

| Specification                                                                    | Status                       | Comment |
| -------------------------------------------------------------------------------- | ---------------------------- | ------- |
| {{ SpecName('CSS2.1', 'generate.html#content', 'content') }} | {{ Spec2('CSS2.1') }} |         |

## Browser compatibility

{{Compat("css.properties.content")}}

## See also

- {{ Cssxref("::after") }}, {{ Cssxref("::before") }}, {{ Cssxref("quotes") }}
