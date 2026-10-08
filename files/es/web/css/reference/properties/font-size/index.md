---
title: Propiedad CSS `font-size`
short-title: font-size
slug: Web/CSS/Reference/Properties/font-size
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

La propiedad [CSS](/es/docs/Web/CSS) **`font-size`** establece el tamaño de la fuente. Cambiar el tamaño de la fuente también actualiza el tamaño de las unidades {{cssxref("&lt;length&gt;")}} relativas a él, como `em`, `ex`, etc.

{{InteractiveExample("CSS Demo: font-size")}}

```css interactive-example-choice
font-size: 1.2rem;
```

```css interactive-example-choice
font-size: x-small;
```

```css interactive-example-choice
font-size: smaller;
```

```css interactive-example-choice
font-size: 12px;
```

```css interactive-example-choice
font-size: 80%;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

## Sintaxis

```css
/* Valores <absolute-size> */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;
font-size: xxx-large;

/* Valores <relative-size> */
font-size: smaller;
font-size: larger;

/* Valores <length> */
font-size: 12px;
font-size: 0.8em;

/* Valores <percentage> */
font-size: 80%;

/* Valor math */
font-size: math;

/* Valores globales */
font-size: inherit;
font-size: initial;
font-size: revert;
font-size: revert-layer;
font-size: unset;
```

### Valores

Esta propiedad se especifica con un único valor de la lista siguiente:

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`, `xxx-large`
  - : Palabras clave de [tamaño absoluto](/es/docs/Web/CSS/Reference/Values/absolute-size), basadas en el tamaño de fuente predeterminado de quien usa el navegador (que es `medium`).

- `larger`, `smaller`
  - : Palabras clave de [tamaño relativo](/es/docs/Web/CSS/Reference/Values/relative-size). La fuente será mayor o menor con respecto al tamaño de fuente del elemento padre, aproximadamente en la misma proporción que separa las palabras clave de tamaño absoluto anteriores.

- {{cssxref("&lt;length&gt;")}}
  - : Un valor {{cssxref("&lt;length&gt;")}} positivo. Para la mayoría de las unidades relativas a la fuente (como `em` y `ex`), el tamaño de fuente es relativo al del elemento padre.

    Para las unidades relativas a la fuente que se basan en la raíz (como `rem`), el tamaño de fuente es relativo al de la fuente que usa el elemento {{HTMLElement("html")}} (el elemento raíz).

- {{cssxref("&lt;percentage&gt;")}}
  - : Un valor {{cssxref("&lt;percentage&gt;")}} positivo, relativo al tamaño de fuente del elemento padre.
    > [!NOTE]
    > Para maximizar la accesibilidad, por lo general es mejor usar valores relativos al tamaño de fuente predeterminado de quien usa el navegador.

- `math`
  - : Se aplican [reglas de escalado](https://w3c.github.io/mathml-core/#the-math-script-level-property) al determinar el valor calculado de la propiedad `font-size` en los elementos matemáticos, con respecto al `font-size` del padre que los contiene.
    Consulta la propiedad [math-depth](/es/docs/Web/CSS/Reference/Properties/math-depth) para más información.

## Descripción

Hay varias formas de especificar el tamaño de la fuente, con palabras clave o con valores numéricos en píxeles o en ems. Elige el método adecuado según las necesidades de cada página web.

### Palabras clave

Las palabras clave son una buena manera de fijar el tamaño de las fuentes en la web. Al establecer un tamaño de fuente con palabra clave en el elemento {{HTMLElement("body")}}, puedes fijar tamaños relativos en el resto de la página, lo que te permite escalar con facilidad la fuente hacia arriba o hacia abajo en toda ella.

### Píxeles

Fijar el tamaño de fuente en píxeles (`px`) es una buena opción cuando necesitas precisión exacta. Un valor en px es estático. Es una forma independiente del sistema operativo y del navegador de indicarle literalmente al navegador que dibuje las letras con exactamente la altura en píxeles que has especificado. Los resultados pueden variar ligeramente entre navegadores, porque pueden usar algoritmos distintos para lograr un efecto similar.

Los ajustes de tamaño de fuente también se pueden combinar. Por ejemplo, si un elemento padre está fijado en `16px` y su elemento hijo en `larger`, el hijo se muestra más grande que el padre en la página.

> [!NOTE]
> Definir los tamaños de fuente en `px` _[no es accesible](https://es.wikipedia.org/wiki/Accesibilidad_web)_, porque en algunos navegadores no se puede cambiar el tamaño de la fuente. Por ejemplo, quien tenga visión reducida puede querer un tamaño de fuente mucho mayor que el elegido por quien diseñó la web. Evita usarlos para los tamaños de fuente si quieres crear un diseño inclusivo.

### Ems

Usar un valor `em` crea un tamaño de fuente dinámico o calculado (históricamente la unidad `em` derivaba del ancho de una «M» mayúscula en una tipografía dada). El valor numérico actúa como multiplicador de la propiedad `font-size` del elemento sobre el que se usa. Fíjate en este ejemplo:

```css
p {
  font-size: 2em;
}
```

En este caso, el tamaño de fuente de los elementos `<p>` será el doble del `font-size` calculado que heredan. Por extensión, un `font-size` de `1em` equivale al `font-size` calculado del elemento sobre el que se usa.

Si no se ha fijado ningún `font-size` en los ancestros del `<p>`, entonces `1em` equivaldrá al `font-size` predeterminado del navegador, que suele ser `16px`. Así que, por defecto, `1em` equivale a `16px` y `2em` a `32px`. Si fijaras un `font-size` de 20px en el elemento `<body>`, entonces `1em` en los elementos `<p>` equivaldría a `20px`, y `2em` a `40px`.

Para calcular el equivalente en `em` de cualquier valor en píxeles, puedes usar esta fórmula:

```plain
em = valor en píxeles deseado para el elemento / tamaño de fuente del padre en píxeles
```

Por ejemplo, supongamos que el `font-size` del `<body>` de la página está fijado en `16px`. Si el tamaño de fuente que quieres es `12px`, debes especificar `0.75em` (porque 12/16 = 0,75). De igual modo, si quieres un tamaño de fuente de `10px`, especifica `0.625em` (10/16 = 0,625); para `22px`, especifica `1.375em` (22/16).

El `em` es una unidad muy útil en CSS, ya que adapta automáticamente su longitud a la fuente que elija usar quien lee.

Un dato importante que conviene recordar: los valores en em se componen. Fíjate en el HTML y el CSS siguientes:

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Exterior <span>interior</span> exterior</span>
</div>
```

El resultado es:

{{EmbedLiveSample("Ems", 400, 100)}}

Suponiendo que el `font-size` predeterminado del navegador sea 16px, las palabras «exterior» se dibujarían a 25,6px, pero la palabra «interior» se dibujaría a 40,96px. Esto se debe a que el `font-size` del {{HTMLElement("span")}} interior es de 1.6em, relativo al `font-size` de su padre, que a su vez es relativo al `font-size` del suyo. Esto es lo que se suele llamar **composición**.

### Rems

Los valores `rem` se inventaron para sortear el problema de la composición. Los valores `rem` son relativos al elemento raíz `html`, no al elemento padre. Dicho de otro modo, te permiten especificar un tamaño de fuente de forma relativa sin verte afectado por el tamaño del padre, lo que elimina la composición.

El CSS siguiente es casi idéntico al del ejemplo anterior. La única diferencia es que la unidad ha cambiado a `rem`.

```css
html {
  font-size: 100%;
}
span {
  font-size: 1.6rem;
}
```

Y aplicamos este CSS al mismo HTML, que queda así:

```html
<span>Exterior <span>interior</span> exterior</span>
```

{{EmbedLiveSample("Rems", 400, 100)}}

En este ejemplo, las palabras «exterior interior exterior» se muestran todas a 25,6px (suponiendo que el `font-size` del navegador se haya dejado en su valor predeterminado de 16px).

### Ex

Igual que con la unidad `em`, el `font-size` de un elemento fijado con la unidad `ex` es calculado o dinámico. Se comporta exactamente igual, salvo que al fijar la propiedad `font-size` con unidades `ex`, el `font-size` equivale a la altura de la x de la [primera fuente disponible](https://drafts.csswg.org/css-fonts/#first-available-font) que se use en la página. El valor numérico multiplica el `font-size` heredado por el elemento, y el `font-size` se compone de forma relativa.

Consulta el borrador editorial del W3C para una descripción más detallada de las [unidades de longitud relativas a la fuente](https://drafts.csswg.org/css-values-4/#font-relative-length) como `ex`.

## Definición formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Establecer tamaños de fuente

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">H1 pequeño</h1>
<h1 class="larger">H1 más grande</h1>
<h1 class="point">H1 de 24 puntos</h1>
<h1 class="percent">H1 al 200%</h1>
```

#### Resultado

{{EmbedLiveSample('Establecer_tamaños_de_fuente', 600, 250)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("font-size-adjust")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
- Atributo SVG {{SVGAttr("font-size")}}
- [Aprende: fundamentos del estilo de texto y fuentes](/es/docs/Learn_web_development/Core/Text_styling/Fundamentals)
