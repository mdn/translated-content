---
title: border-radius
slug: Web/CSS/border-radius
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

La propiedad **`border-radius`** [CSS](/es/docs/Web/CSS) redondea las esquinas del borde exterior de un elemento. Puedes establecer un único radio para crear esquinas circulares o dos radios para crear esquinas elípticas.

{{InteractiveExample("CSS Demo: border-radius")}}

```css interactive-example-choice
border-radius: 30px;
```

```css interactive-example-choice
border-radius: 25% 10%;
```

```css interactive-example-choice
border-radius: 10% 30% 50% 70%;
```

```css interactive-example-choice
border-radius: 10% / 50%;
```

```css interactive-example-choice
border-radius: 10px 100px / 120px;
```

```css interactive-example-choice
border-radius: 50% 20% / 10% 40%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with rounded corners.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

El radio se aplica a todo el {{cssxref("background")}}, incluso si el elemento no tiene borde; la posición exacta del recorte se define con la propiedad {{cssxref("background-clip")}}.

La propiedad `border-radius` no se aplica a los elementos de tabla cuando {{cssxref("border-collapse")}} es `collapse`.

> [!NOTE]
> Como ocurre con cualquier propiedad abreviada, las subpropiedades individuales no pueden heredar, como en `border-radius:0 0 inherit inherit`, lo que sobrescribiría parcialmente definiciones existentes. En su lugar, se deben usar las propiedades individuales en su forma larga.

## Propiedades constituyentes

Esta propiedad es una abreviatura de las siguientes propiedades CSS:

- [`border-top-left-radius`](/es/docs/Web/CSS/border-top-left-radius)
- [`border-top-right-radius`](/es/docs/Web/CSS/border-top-right-radius)
- [`border-bottom-right-radius`](/es/docs/Web/CSS/border-bottom-right-radius)
- [`border-bottom-left-radius`](/es/docs/Web/CSS/border-bottom-left-radius)

## Sintaxis

```css
/* La sintaxis del primer radio permite uno a cuatro valores */
/* Radio para los 4 lados */
border-radius: 10px;

/* esquina-superior-izquierda-e-inferior-derecha | esquina-superior-derecha-e-inferior-izquierda */
border-radius: 10px 5%;

/* esquina-superior-izquierda | esquina-superior-derecha-e-inferior-izquierda | esquina-inferior-derecha */
border-radius: 2px 4px 2px;

/* esquina-superior-izquierda | esquina-superior-derecha | esquina-inferior-derecha | esquina-inferior-izquierda */
border-radius: 1px 0 3px 4px;

/* La sintaxis del segundo radio permite uno a cuatro valores */
/* (valores del primer radio) / radio */
border-radius: 10px / 20px;

/* (valores del primer radio) / esquina-superior-izquierda-e-inferior-derecha | esquina-superior-derecha-e-inferior-izquierda */
border-radius: 10px 5% / 20px 30px;

/* (valores del primer radio) / esquina-superior-izquierda | esquina-superior-derecha-e-inferior-izquierda | esquina-inferior-derecha */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* (valores del primer radio) / esquina-superior-izquierda | esquina-superior-derecha | esquina-inferior-derecha | esquina-inferior-izquierda */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Valores globales */
border-radius: inherit;
border-radius: initial;
border-radius: revert;
border-radius: revert-layer;
border-radius: unset;
```

La propiedad `border-radius` se especifica como:

- uno, dos, tres o cuatro valores {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}}. Esto se utiliza para establecer un único radio en las esquinas.
- opcionalmente seguido por "/" y uno, dos, tres o cuatro valores `<length>` o `<percentage>`. Esto se usa para establecer un radio adicional, permitiendo esquinas elípticas.

### Valores

<table>
  <tbody>
    <tr>
      <td><em>radio</em></td>
      <td><img alt="Un rectángulo azul claro con un borde gris claro. Las 4 esquinas están redondeadas." src="all-corner.png" /></td>
      <td>
        Es un {{cssxref("&lt;length&gt;")}} o un
        {{cssxref("&lt;percentage&gt;")}} que indica un radio a usar
        para el borde en cada esquina. Se usa solo en la
        sintaxis de un valor.
      </td>
    </tr>
    <tr>
      <td><em>esquina-superior-izquierda-y-esquina-inferior-derecha</em></td>
      <td>
        <img alt="Un rectángulo azul claro con un borde gris claro. Las 2 esquinas en la parte superior izquierda y la inferior derecha están redondeadas." src="top-left-bottom-right.png" />
      </td>
      <td>
        Es un {{cssxref("&lt;length&gt;")}} o un
        {{cssxref("&lt;percentage&gt;")}} que indica
        un radio a usar para el borde en las esquinas
        superior izquierda e inferior derecha del
        cuadro del elemento. Se usa solo en la
        sintaxis de dos valores.
      </td>
    </tr>
    <tr>
      <td><em>esquina-superior-derecha-y-esquina-inferior-izquierda</em></td>
      <td>
        <img alt="Un rectángulo azul claro con un borde gris claro. Las 2 esquinas en la parte superior derecha y la inferior izquierda están redondeadas." src="top-right-bottom-left.png" />
      </td>
      <td>
        Es un {{cssxref("&lt;length&gt;")}} o un
        {{cssxref("&lt;percentage&gt;")}} que indica un radio
        a usar para el borde en las esquinas superior derecha
        e inferior izquierda del cuadro del elemento.
        Se usa solo en las sintaxis de dos y tres valores.
      </td>
    </tr>
    <tr>
      <td><em>esquina-superior-izquierda</em></td>
      <td><img alt="Un rectángulo azul claro con un borde gris claro. La esquina superior izquierda está redondeada." src="top-left.png" /></td>
      <td>
        Es un {{cssxref("&lt;length&gt;")}} o un
        {{cssxref("&lt;percentage&gt;")}} que indica un radio
        a usar para el borde en la esquina superior
        izquierda del cuadro del elemento. Se usa solo
        en las sintaxis de tres y cuatro valores.
      </td>
    </tr>
    <tr>
      <td><em>esquina-superior-derecha</em></td>
      <td><img alt="Un rectángulo azul claro con un borde gris claro. La esquina superior derecha está redondeada." src="top-right.png" /></td>
      <td>
        Es un {{cssxref("&lt;length&gt;")}} o un
        {{cssxref("&lt;percentage&gt;")}} que indica un
        radio a usar para el borde en la esquina superior
        derecha del cuadro del elemento. Se usa solo
        en la sintaxis de cuatro valores.
      </td>
    </tr>
    <tr>
      <td><em>esquina-inferior-derecha</em></td>
      <td><img alt="Un rectángulo azul claro con un borde gris claro. La esquina inferior derecha está redondeada." src="bottom-right.png" /></td>
      <td>
        Es un {{cssxref("&lt;length&gt;")}} o un
        {{cssxref("&lt;percentage&gt;")}} que
        indica un radio a usar para el borde en
        la esquina inferior derecha del cuadro
        del elemento. Se usa solo en las sintaxis
        de tres y cuatro valores.
      </td>
    </tr>
    <tr>
      <td><em>esquina-inferior-izquierda</em></td>
      <td><img alt="Un rectángulo azul claro con un borde gris claro. La esquina inferior izquierda está redondeada." src="bottom-left.png" /></td>
      <td>
        Es un {{cssxref("&lt;length&gt;")}} o un
        {{cssxref("&lt;percentage&gt;")}} que indica
        un radio a usar para el borde en la esquina
        inferior izquierda del cuadro del elemento.
        Se usa solo en la sintaxis de cuatro valores.
      </td>
    </tr>
  </tbody>
</table>

- {{cssxref("&lt;length&gt;")}}
  - : Indica el tamaño del radio del círculo o de los semiejes mayor y menor de la elipse, utilizando valores de longitud. Los valores negativos no son válidos.
- {{cssxref("&lt;percentage&gt;")}}
  - : Indica el tamaño del radio del círculo o de los semiejes mayor y menor de la elipse, utilizando valores porcentuales. Los porcentajes para el eje horizontal se refieren al ancho del cuadro; los porcentajes para el eje vertical se refieren a la altura del cuadro. Los valores negativos no son válidos.

Por ejemplo:

```css
border-radius: 1em/5em;

/* Es equivalente a: */
border-top-left-radius: 1em 5em;
border-top-right-radius: 1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius: 1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* Es equivalente a: */
border-top-left-radius: 4px 2px;
border-top-right-radius: 3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius: 3px 4px;
```

## Definición formal

{{CSSInfo}}

## Syntaxis formal

{{csssyntax}}

## Ejemplos

```html hidden
<pre id="example-1">
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
</pre>

<pre id="example-2">
  border: groove 1em red;
  border-radius: 2em;
</pre>

<pre id="example-3">
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
</pre>

<pre id="example-4">
  border: none;
  border-radius: 40px 10px;
  background: gold;
</pre>

<pre id="example-5">
  border: none;
  border-radius: 50%;
  background: burlywood;
</pre>

<pre id="example-6">
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
</pre>

<pre id="example-7">
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
</pre>
```

```css hidden
pre {
  margin: 20px;
  padding: 20px;
  width: 80%;
  height: 80px;
}

pre#example-1 {
  border: solid 10px;
  border-radius: 10px 40px 40px 10px;
}

pre#example-2 {
  border: groove 1em red;
  border-radius: 2em;
}

pre#example-3 {
  background: gold;
  border: ridge gold;
  border-radius: 13em/3em;
}

pre#example-4 {
  border: none;
  border-radius: 40px 10px;
  background: gold;
}

pre#example-5 {
  border: none;
  border-radius: 50%;
  background: burlywood;
}

pre#example-6 {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

pre#example-7 {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
}
```

{{EmbedLiveSample("Examples", "200", "1150")}}

### Ejemplos interactivos

- Ejemplo 1: <https://jsfiddle.net/Tripad/qnGKj/2/>
- Ejemplo 2: <https://jsfiddle.net/Tripad/qnGKj/3/>
- Ejemplo 3: <https://jsfiddle.net/Tripad/qnGKj/4/>
- Ejemplo 4: <https://jsfiddle.net/Tripad/qnGKj/5/>
- Ejemplo 5: <https://jsfiddle.net/Tripad/qnGKj/6/>

## Especificaciones

{{Specifications}}

## Compatibilidad con los navegadores

{{Compat}}

## Véase también

- Propiedades relacionadas con border-radius: {{cssxref("border-top-left-radius")}}, {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, {{cssxref("border-end-end-radius")}}
