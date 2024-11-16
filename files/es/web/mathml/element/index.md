---
title: Referencia de elementos de MathML
slug: Web/MathML/Element
---

{{MathMLRef}}

A continuación se muestra una lista alfabética de elementos de **presentación** en MathML.
La _etiqueta de presentación_ es usada para describir la estructura y el diseño de la notación matemática mientras que la _etiqueta de contenido_ proporciona el significado matemático subyacente y se supone que no se renderiza a través del parseador de MathML (ver [Error 276028 en Firefox](https://bugzil.la/276028)). Si quieres aprender más sobre la etiqueta de contenido deberías echar un vistazo al [Capítulo 4](http://www.w3.org/TR/MathML3/chapter4.html) en la [especificación de MathML 3](http://www.w3.org/TR/MathML3/).

### math

- {{ MathMLElement("math") }} (Elemento raíz)

### A

- {{ MathMLElement("maction") }} (Acciones enlazadas a sub-expresiones)
- {{ MathMLElement("maligngroup") }} (Grupo de alineación)
- {{ MathMLElement("malignmark") }} (Puntos de alineación)

### E

- {{ MathMLElement("menclose") }} (Enclosed contents)
- {{ MathMLElement("merror") }} (Enclosed syntax error messages)

### F

- {{ MathMLElement("mfenced") }} (Paréntesis)
- {{ MathMLElement("mfrac") }} (Fracción)

### G

- {{ MathMLElement("mglyph") }} (Mostrar símbolos no estándar)

### I

- {{ MathMLElement("mi") }} (Identificador)

### L

- {{ MathMLElement("mlabeledtr") }} (Fila etiquetada en una tabla o matriz)
- {{ MathMLElement("mlongdiv") }} (Notación de la división larga)

### M

- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)

### N

- {{ MathMLElement("mn") }} (Número)

### O

- {{ MathMLElement("mo") }} (Operador)
- {{ MathMLElement("mover") }} (Overscript)

### P

- {{ MathMLElement("mpadded") }} (Espacio alrrededor del contenido)
- {{ MathMLElement("mphantom") }} (Contenido invisible con espacio reservado)

### R

- {{ MathMLElement("mroot") }} (Radical con índice especificado)
- {{ MathMLElement("mrow") }} (Sub-expressiones agrupadas)

### S

- {{ MathMLElement("ms") }} (String literal)
- {{ MathMLElement("mscarries") }} (Annotations such as carries)
- {{ MathMLElement("mscarry") }} (Single carry, child element of {{ MathMLElement("mscarries") }})
- {{ MathMLElement("msgroup") }} (Grouped rows of {{ MathMLElement("mstack") }} and {{ MathMLElement("mlongdiv") }} elements)
- {{ MathMLElement("msline") }} (Horizontal lines inside {{ MathMLElement("mstack") }} elements)
- {{ MathMLElement("mspace") }} (Space)
- {{ MathMLElement("msqrt") }} (Square root without an index)
- {{ MathMLElement("msrow") }} (Rows in {{ MathMLElement("mstack") }} elements)
- {{ MathMLElement("mstack") }} (Stacked alignment)
- {{ MathMLElement("mstyle") }} (Style change)
- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)

### T

- {{ MathMLElement("mtable") }} (Table or matrix)
- {{ MathMLElement("mtd") }} (Cell in a table or a matrix)
- {{ MathMLElement("mtext") }} (Text)
- {{ MathMLElement("mtr") }} (Row in a table or a matrix)

### U

- {{ MathMLElement("munder") }} (Underscript)
- {{ MathMLElement("munderover") }} (Underscript-overscript pair)

### Other elements

- {{ MathMLElement("semantics") }} (Container for semantic annotations)
- [`<annotation>`](/es/docs/MathML/Element/semantics) (Data annotations)
- [`<annotation-xml>`](/es/docs/MathML/Element/semantics) (XML annotations)d
