---
title: Справка по элементам MathML
slug: Web/MathML/Element
---

Здесь представлен алфавитный список **презентационных (presentation)** элементов MathML.

Термин **презентационная разметка (presentation markup)** используется для описания разметки отображения математической системы обозначений, тогда как **разметка содержимого (content markup)** обеспечивает базовый математический смысл и не должна воспроизводиться парсером MathML (смотрите {{ bug(276028) }}). Если вы хотите узнать больше о разметке контента, вы можете изучить [Chapter 4](http://www.w3.org/TR/MathML3/chapter4.html) из [спецификации MathML 3](http://www.w3.org/TR/MathML3/).

### math

- {{ MathMLElement("math") }} (Top-level element)

### A

- {{ MathMLElement("maction") }} (Binded actions to sub-expressions)
- {{ MathMLElement("maligngroup") }} (Alignment group)
- {{ MathMLElement("malignmark") }} (Alignment points)

### E

- {{ MathMLElement("menclose") }} (Enclosed contents)
- {{ MathMLElement("merror") }} (Enclosed syntax error messages)

### F

- {{ MathMLElement("mfenced") }} (Parentheses)
- {{ MathMLElement("mfrac") }} (Fraction)

### G

- {{ MathMLElement("mglyph") }} (Displaying non-standard symbols)

### I

- {{ MathMLElement("mi") }} (Identifier)

### L

- {{ MathMLElement("mlabeledtr") }} (Labeled row in a table or a matrix)
- {{ MathMLElement("mlongdiv") }} (Long division notation)

### M

- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)

### N

- {{ MathMLElement("mn") }} (Number)

### O

- {{ MathMLElement("mo") }} (Operator)
- {{ MathMLElement("mover") }} (Overscript)

### P

- {{ MathMLElement("mpadded") }} (Space around content)
- {{ MathMLElement("mphantom") }} (Invisible content with reserved space)

### R

- {{ MathMLElement("mroot") }} (Radical with specified index)
- {{ MathMLElement("mrow") }} (Grouped sub-expressions)

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
- [`<annotation>`](/ru/docs/MathML/Element/semantics) (Data annotations)
- [`<annotation-xml>`](/ru/docs/MathML/Element/semantics) (XML annotations)

## See also

- [MathML](/ru/docs/Web/MathML)
- [MathML attribute reference](/ru/docs/Web/MathML/Attribute)
