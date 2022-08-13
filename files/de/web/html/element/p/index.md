---
title: p
slug: Web/HTML/Element/p
tags:
  - HTML
  - HTML Elemente
  - HTML Referenz
translation_of: Web/HTML/Element/p
---
## Übersicht

Das **\<p>**-Element erzeugt einen Absatz, den zusammenhängenden Abschnitt eines längeren Textes. In HTML kann `<p>` jedoch für jedwede Art von zu gruppierendem, zusammenhängendem Inhalt genutzt werden, zum Beispiel Bilder oder Formularfelder.

`<p>` ist eines der am häufigsten benutzen HTML-Elemente.

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

`<p>` ist ein [Blockelement](/de/docs/Web/HTML/Block-level_elements); als solches wird es automatisch beendet, sobald ein anderes Blockelement vor seinem eigenen schließenden \</p> erscheint.

## Attribute

Dieses Element unterstützt lediglich die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

> **Hinweis:** Das `align`-Attribut sollte nicht mehr benutzt werden.

## Beispiel

### HTML

    <p>
    Das ist der erste Absatz des Textes. Das ist der erste Absatz des Textes.
    Das ist der erste Absatz des Textes. Das ist der erste Absatz des Textes.
    </p>

    <p>
    Das ist der zweite Absatz des Textes. Das ist der zweite Absatz des Textes.
    Das ist der zweite Absatz des Textes. Das ist der zweite Absatz des Textes.
    </p>

### Ergebnis

Das ist der erste Absatz des Textes. Das ist der erste Absatz des Textes. Das ist der erste Absatz des Textes. Das ist der erste Absatz des Textes.

Das ist der zweite Absatz des Textes. Das ist der zweite Absatz des Textes. Das ist der zweite Absatz des Textes. Das ist der zweite Absatz des Textes.

## Absätze gestalten

Zwei Absätze werden üblicherweise durch einen leeren Zwischenraum voneinander getrennt. {{glossary("CSS")}} ermöglicht jedoch vielfältige Gestaltungsmöglichkeiten, etwa den Einzug der ersten Zeile:

### HTML

```html
<p>Separating paragraphs with blank lines is easiest
for readers to scan, but they can also be separated
by indenting their first lines. This is often used
to take up less space, such as to save paper in print.</p>

<p>Writing that is intended to be edited, such as school
papers and rough drafts, uses both blank lines and
indentation for separation. In finished works, combining
both is considered redundant and amateurish.</p>

<p>In very old writing, paragraphs were separated with a
special character: ¶, the <i>pilcrow</i>. Nowadays, this
is considered claustrophobic and hard to read.</p>

<p>How hard to read? See for yourself:
  <button data-toggle-text="Oh no! Switch back!">Use pilcrow for paragraphs</button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
   text-indent: 0;
   display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector('button').addEventListener('click', function (event) {
  document.querySelectorAll('p').forEach(function (paragraph) {
    paragraph.classList.toggle('pilcrow');
  });
  var newButtonText = event.target.dataset.toggleText;
  var oldText = event.target.innerText;
  event.target.innerText = newButtonText;
  event.target.dataset.toggleText = oldText;
});
```

### Result

{{EmbedLiveSample('Styling_paragraphs')}}

## Barrierefreiheit

Das Aufteilen eines Dokuments in mehrere Absätze erleichtert das Verständnis des Inhalts für alle Nutzergruppen erheblich.

Bildschirmleseprogramme und ähnliche Hilfsmittel verfügen darüber hinaus über Bedienelemente, mit denen Absätze übersprungen werden können. Dies erlaubt blinden Nutzern das schnelle Überfliegen eines Textes, ähnlich wie die Leerzeilen sehenden Nutzern Orientierungspunkte bieten.

Leere `<p>`-Elemente und auch mehrere aufeinanderfolgende `<br>`-Zeilenumbrüche, deren einziger Nutzen das Vergrößeren des visuellen Abstandes ist, führen bei Bildschirmleseprogrammen oft zu einer verwirrenden Ausgabe: Es werden Absätze angekündigt, die eigentlich gar nicht vorhanden sind.

Auf die Dauer kann dieses Verhalten frustrierend sein. Abstände sollten deshalb ausschließlich mit {{glossary("CSS")}} erzeugt werden. CSS ermöglicht zudem eine wesentlich feinere Kontrolle der Maße.

## Siehe auch

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar                         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-p-element', '&lt;p&gt;')}}         | {{Spec2('HTML WHATWG')}} | Keine Änderung.                   |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-p-element', '&lt;p&gt;')}} | {{Spec2('HTML5 W3C')}}     | `align`-Attribut ist überflüssig. |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.3.1', '&lt;p&gt;')}}                 | {{Spec2('HTML4.01')}}     | Erste Definition.                 |

## Browserkompatibilät

{{Compat("html.elements.p")}}
