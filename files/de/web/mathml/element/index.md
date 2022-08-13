---
title: MathML Element-Referenz
slug: Web/MathML/Element
tags:
  - MathML
  - Referenz
translation_of: Web/MathML/Element
---
Dies ist eine alphabetische Liste aller MathML**-Darstellungselemente** (engl. presentation markup). Damit können innerhalb einer html-Umgebung mathematische Terme und Gleichungen dargestellt werden.

> **Hinweis:** Damit nicht zu verwechseln ist die inhaltliche Beschreibung eines mathematischen Terms oder einer Gleichung (engl. content markup). Die inhaltliche Beschreibung ist nicht dafür gedacht, unmittelbar vom MathML-Parser innerhalb von html-Seiten dargestellt zu werden. (siehe {{ bug(276028) }}). Wenn Du mehr über das content markup lernen möchtest, dann besuche [Kapitel 4](http://www.w3.org/TR/MathML3/chapter4.html) der [MathML 3-Spezifikation](http://www.w3.org/TR/MathML3/).

### math

- {{ MathMLElement("math") }} (Wurzelelement, Top-level element)

### A

- {{ MathMLElement("maction") }} (Mit einem Ausdruck verknüpfte Aktion)
- {{ MathMLElement("maligngroup") }} (Alignment group){{ unimplemented_inline() }}
- {{ MathMLElement("malignmark") }} (Alignment points){{ unimplemented_inline() }}

### E

- {{ MathMLElement("menclose") }} (Umrandung/Markierung)
- {{ MathMLElement("merror") }} (Fehler im Ausdruck hervorheben)

### F

- {{ MathMLElement("mfenced") }} (Klammern setzen)
- {{ MathMLElement("mfrac") }} (Bruch)

### G

- {{ MathMLElement("mglyph") }} (Displaying non-standard symbols) {{ unimplemented_inline() }}

### I

- {{ MathMLElement("mi") }} (Bezeichner, engl. identifier)

### L

- {{ MathMLElement("mlabeledtr") }} (Labeled row in a table or a matrix) {{ unimplemented_inline() }}
- {{ MathMLElement("mlongdiv") }} (Long division notation) {{ unimplemented_inline() }}

### M

- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)

### N

- {{ MathMLElement("mn") }} (Wert, engl. number)

### O

- {{ MathMLElement("mo") }} (Rechenzeichen, Operator)
- {{ MathMLElement("mover") }} (Akzent/Grenzwert oberhalb des Ausdrucks)

### P

- {{ MathMLElement("mpadded") }} (Innenabstand hinzufügen)
- {{ MathMLElement("mphantom") }} (Platz für unsichtbaren Ausdruck)

### R

- {{ MathMLElement("mroot") }} (Wurzel _mit_ ausgeschriebenem Exponenten)
- {{ MathMLElement("mrow") }} (Ausdrücke gruppieren)

### S

- {{ MathMLElement("ms") }} (Zeichenkette)
- {{ MathMLElement("mscarries") }} (Annotations such as carries) {{ unimplemented_inline() }}
- {{ MathMLElement("mscarry") }} (Single carry, child element of {{ MathMLElement("mscarries") }}) {{ unimplemented_inline() }}
- {{ MathMLElement("msgroup") }} (Grouped rows of {{ MathMLElement("mstack") }} and {{ MathMLElement("mlongdiv") }} elements) {{ unimplemented_inline() }}
- {{ MathMLElement("msline") }} (Horizontal lines inside {{ MathMLElement("mstack") }} elements) {{ unimplemented_inline() }}
- {{ MathMLElement("mspace") }} (Leerraum)
- {{ MathMLElement("msqrt") }} (\[Quadrat-]Wurzel, _ohne_ angegebenen Exponenten)
- {{ MathMLElement("msrow") }} (Rows in {{ MathMLElement("mstack") }} elements) {{ unimplemented_inline() }}
- {{ MathMLElement("mstack") }} (Stacked alignment) {{ unimplemented_inline() }}
- {{ MathMLElement("mstyle") }} (Änderung der Darstellung)
- {{ MathMLElement("msub") }} (Subscript, tiefergestellte Zahl)
- {{ MathMLElement("msup") }} (Superscript, Exponent, höhergestellte Zahl)
- {{ MathMLElement("msubsup") }} (Höher- _und_ tiefergestellte Zahl)

### T

- {{ MathMLElement("mtable") }} (Tabelle oder Matrix)
- {{ MathMLElement("mtd") }} (Zelle in einer Tabelle oder Matrix)
- {{ MathMLElement("mtext") }} (Text)
- {{ MathMLElement("mtr") }} (Zeile in einer Tabelle oder Matrix)

### U

- {{ MathMLElement("munder") }} (Akzent/Grenzwert unterhalb des Ausdrucks)
- {{ MathMLElement("munderover") }} (Akzente/Grenzwerte ober- und unterhalb des Ausdrucks)

### Other elements

- {{ MathMLElement("semantics") }} (Container for semantic annotations)
- {{ MathMLElement("annotation") }} (Data annotations)
- {{ MathMLElement("annotation-xml") }} (XML annotations)

## Siehe auch

- [MathML](/de/docs/Web/MathML "/en-US/docs/Web/MathML")
- [MathML Attribut-Referenz](/de/docs/Web/MathML/Attribute)
