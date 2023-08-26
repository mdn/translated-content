---
title: Especificidad
slug: Web/CSS/Specificity
---

La **especificidad** es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados. La especificidad está basada en las reglas de coincidencia que están compuestas por diferentes tipos de [selectores CSS](/es/CSS/CSS_Reference#Selectors).

## ¿Cómo se calcula?

La especificidad es un peso (importancia o valor) que se le asigna a una declaración CSS dada, determinada por el número correspondiente de cada [tipo de selector](/es/docs/Web/CSS/Especificidad#Tipos_de_selectores). Cuando varias declaraciones tienen igual especificidad, se aplicará al elemento la última declaración encontrada en el CSS. La especificidad solo se aplica cuando el mismo elemento es objetivo de múltiples declaraciones. Según las reglas de CSS, en caso de que un elemento sea objeto de una [declaración directa](/es/docs/Web/CSS/Especificidad#Elementos_objetivos_de_una_declaración_directa_vs_estilos_heredados), esta siempre tendrá preferencia sobre las reglas heredadas de su ancestro.

> **Nota:** La **proximidad de elementos** en el árbol del documento no tiene efecto en la especificidad.

### Tipos de selectores

La siguiente lista de tipos de selectores incrementa en función de la especificidad:

1. [Selectores de tipo](/es/docs/Web/CSS/Type_selectors) (p.e., `h1`) y pseudo-elementos (p.e., `::before`).
2. [Selectores de clase](/es/docs/Web/CSS/Class_selectors) (p.e., `.example`), selectores de atributos (p.e., `[type="radio"]`) y pseudo-clases (p.e., `:hover`).
3. [Selectores de ID](/es/docs/Web/CSS/ID_selectors) (p.e., `#example`).

El selector universal ({{CSSxRef("Universal_selectors", "*")}}), los combinadores ({{CSSxRef("Adjacent_sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, [`␣`](/es/docs/Web/CSS/Descendant_combinator), {{CSSxRef("Column_combinator", "||")}}) y la pseudo-clase de negación ({{CSSxRef(":not", ":not()")}}) no tienen efecto sobre la especificidad. (Sin embargo, los selectores declarados _dentro de_ `:not()` si lo tienen.)

Para más información, visita ["Especificidad" en "Cascada y herencia"](/es/docs/Learn/CSS/Building_blocks/Cascada_y_herencia#Especificidad), también puedes visitar: [https://specifishity.com](https://specifishity.com/)

Los estilos _inline_ añadidos a un elemento (p.e., `style="font-weight:bold"`) siempre sobrescriben a cualquier estilo escrito en hojas de estilo externas, por lo que se puede decir que tienen la mayor especificidad.

### La excepción !important

Cuando se emplea `important` en una declaración de estilo, esta declaración sobrescribe a cualquier otra. Aunque técnicamente `!important` no tiene nada que ver con especificidad, interactúa directamente con esta. Sin embargo, el uso de `!important` es una **mala práctica** y debería evitarse porque hace que el código sea más difícil de depurar al romper la [cascada (artículo en inglés)](/es/docs/Web/CSS/Cascade) natural de las hojas de estilo. Cuando dos declaraciones en conflicto con el `!important` son aplicadas al mismo elemento, se aplicará la declaración con mayor especificidad.

**Algunas reglas de oro:**

- Busca **siempre** una manera de emplear la especificidad antes de considerar el uso de `!important`.
- Usa `!important` **solo** en declaraciones específicas de CSS que sobrescriban CSS externo (de librerías externas como Bootstrap o normalize.css).
- **Nunca** uses `!important` cuando estés intentando escribir un plugin/mashup.
- **Nunca** uses `!important` en todo el código CSS.

**En lugar de usar `!important`, considera:**

1. Hacer un mejor uso de las propiedades en cascada de CSS.
2. Usar reglas más específicas. Indicando uno o más elementos antes del elemento que estás seleccionando, la regla se vuelve más específica y gana mayor prioridad:

   ```html
   <div id="test">
     <span>Text</span>
   </div>
   ```

   ```css
   div#test span {
     color: green;
   }
   div span {
     color: blue;
   }
   span {
     color: red;
   }
   ```

3. Como un caso especial sin sentido para (2), duplicar selectores simples para aumentar la especificidad cuando no tiene nada más que especificar

   ```
   #myId#myId span { color: yellow; }
   .myClass.myClass span { color: orange; }
   ```

#### Cómo se debería usar !important

##### A) Sobrescribiendo los estilos en linea

1. Tienes un archivo CSS que establece aspectos visuales de tu sitio de manera global.
2. Tú (u otros) usan estilos inline en los propios elementos. Esto es considerado como una muy mala práctica.

En este caso, puedes establecer ciertos estilos en tu archivo CSS global como importantes, superando así los estilos en línea configurados directamente en los elementos.

Ejemplo del mundo real: Algunos **plugins jQuery** muy mal escritos que usan estilos inline.

B) Otro escenario:

```
#someElement p {
    color: blue;
}

p.awesome {
    color: red;
}
```

¿Cómo haces que los párrafos `awesome` se vuelvan siempre rojos, incluso los que se encuentren dentro de `#someElement`? Sin `!important`, la primera regla tendrá más especificidad y ganará a la segunda.

#### Cómo sobrescribir !important

A) Simplemente añade otra regla CSS con `!important` y, o bien da al selector una especificidad mayor (añadiendo una etiqueta, id o clase al selector), o añadiendo una regla CSS con el mismo selector en un punto posterior al ya existente. Esto funciona porque en caso de empate en especificidad, la última regla prevalece.

Algunos ejemplos con una gran especificidad:

```
table td    {height: 50px !important;}
.myTable td {height: 50px !important;}
#myTable td {height: 50px !important;}
```

B) O añade el mismo selector después de uno existente:

```
td {height: 50px !important;}
```

C) O reescribe la regla original para evitar el uso de `!important`.

**Para más información, visita (en inglés):**

<http://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css>

<http://stackoverflow.com/questions/9245353/what-does-important-in-css-mean>

<http://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css>

<http://stackoverflow.com/questions/11178673/how-to-override-important>

<http://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css>

### La excepción `:not`

La pseudo-clase negación `:not` _no_ es considerada una pseudo-clase para el cálculo de la especificidad. Pero los selectores colocados dentre de ella, si cuentan como selectores normales a la hora de determinar el valor de los [tipos de selectores](/es/docs/Web/CSS/Especificidad#Tipos_de_selectores).

Aquí tienes un pedazo de CSS:

```css
div.outer p {
  color: orange;
}
div:not(.outer) p {
  color: lime;
}
```

cuando se usa con el siguiente HTML:

```html
<div class="outer">
  <p>Esto está en el outer div.</p>
  <div class="inner">
    <p>Este texto está en el inner div.</p>
  </div>
</div>
```

Debería aparecer en pantalla como:

{{EmbedLiveSample}}

### Especificidad basada en la forma

La especificidad está basada en la forma de un selector. En el siguiente caso, el selector `*[id="foo"]` cuenta como un atributo selector para la determinación de la especificidad de un selector, incluso cuando se selecciona un ID.

Las siguientes declaraciones de estilo:

```css
*#foo {
  color: green;
}
*[id="foo"] {
  color: purple;
}
```

cuando se usan con este marcador:

```html
<p id="foo">Soy un texto de ejemplo.</p>
```

Se acabarán viendo así:

{{EmbedLiveSample}}

Debido a que coincide con el mismo elemento, pero el selector ID tiene una mayor especificidad.

### Ignorancia de proximidad en el árbol

La proximidad de un elemento con otros a los que se hace referencia en un selector determinado, no tiene impacto en la especificidad. La siguiente declaración de estilo:

```css
body h1 {
  color: green;
}
html h1 {
  color: purple;
}
```

Con el siguiente HTML:

```html
<html>
  <body>
    <h1>¡Aquí va un título!</h1>
  </body>
</html>
```

Se mostrará como:

{{EmbedLiveSample}}

Porque las dos declaraciones tienen un resultado de tipo de selector igual, pero el selector `html h1`se ha declarado después.

### Declaración directa vs estilos heredados

Los estilos para elementos objetivo de una declaración directa siempre tienen preferencia sobre los estilos heredados, sin importar la especificidad de la regla heredada.

```css
#parent {
  color: green;
}
h1 {
  color: purple;
}
```

Con el siguiente HTML:

```html
<html>
  <body id="parent">
    <h1>¡Aquí va un título!</h1>
  </body>
</html>
```

Se verá así:

{{EmbedLiveSample}}

Porque el selector `h1` selecciona el objetivo de manera específica, pero el color verde simplemente es heredad de su padre.

## Consulta también (en inglés)

- Specificity Calculator: An interactive website to test and understand your own CSS rules - <https://specificity.keegan.st/>
- CSS3 Selectors Specificity - <http://www.w3.org/TR/selectors/#specificity>
- CSS Key Concepts: [CSS syntax](/es/docs/Web/CSS/Syntax), [at-rule](/es/docs/Web/CSS/At-rule), [comments](/es/docs/Web/CSS/Comments), [specificity](/es/docs/Web/CSS/Specificity) and [inheritance](/es/docs/Web/CSS/inheritance), the [box](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), [layout modes](/es/docs/Web/CSS/Layout_mode) and [visual formatting models](/es/docs/Web/CSS/Visual_formatting_model), and [margin collapsing](/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing), or the [initial](/es/docs/Web/CSS/initial_value), [computed](/es/docs/Web/CSS/computed_value), [resolved](/es/docs/Web/CSS/resolved_value), [specified](/es/docs/Web/CSS/specified_value), [used](/es/docs/Web/CSS/used_value), and [actual](/es/docs/Web/CSS/actual_value) values. Definitions of [value syntax](/es/docs/Web/CSS/Value_definition_syntax), [shorthand properties](/es/docs/Web/CSS/Shorthand_properties) and [replaced elements](/es/docs/Web/CSS/Replaced_element).
