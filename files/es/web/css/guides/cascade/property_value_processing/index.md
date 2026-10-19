---
title: Procesamiento del valor de las propiedades CSS
short-title: Procesamiento del valor
slug: Web/CSS/Guides/Cascade/Property_value_processing
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

Para cada elemento del árbol de un documento, el navegador asigna un valor a todas las propiedades CSS que le aplican. El valor renderizado de cada propiedad CSS para un elemento o caja dados es el resultado de un cálculo basado en las definiciones de las hojas de estilo, la herencia, la [cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction), las dependencias, la conversión de unidades y el entorno de visualización. Esta guía ofrece una visión general de los pasos de procesamiento que definen cómo se renderiza finalmente cada valor CSS, recorriendo conceptos clave como el valor especificado, el calculado, el utilizado y el real.

## Valores de las propiedades

Todo estilo aplicado a un elemento o pseudoelemento se basa en una única declaración de propiedad CSS. Cada propiedad CSS tiene un solo valor. El valor que se aplica lo determinan los [valores en cascada](#valor_en_cascada) de todas las declaraciones de esa propiedad que aplican a ese elemento o pseudoelemento, y el valor único que se aplica proviene de la declaración que ocupa el puesto más alto en el [orden de la cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction), según el [algoritmo de la cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction).

Cuando hay varios [valores declarados](#valor_declarado), con varias declaraciones que proporcionan el mismo valor o valores distintos para el mismo elemento, cada valor de propiedad debe seguir proviniendo de un único par nombre-valor, ya que de cada propiedad se aplica un solo valor, aunque ese valor sea una lista de valores separados por comas.

Para determinar qué [valor declarado](#valor_declarado) se aplica, el agente de usuario reúne y procesa todos los estilos de las distintas fuentes, como los estilos en línea y las hojas de estilo internas y externas.

La [cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction) determina qué valor debe aplicarse cuando varios estilos en conflicto apuntan al mismo elemento. El [algoritmo de la cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction) define cómo combinan los agentes de usuario los valores de propiedad procedentes de distintas fuentes, ámbitos o [capas](/es/docs/Web/CSS/Guides/Cascade/Introduction). Cuando un selector coincide con un elemento, se aplica el [valor declarado](#valor_declarado) de la propiedad procedente del [origen](/es/docs/Web/CSS/Guides/Cascade/Introduction) con mayor precedencia, aunque un selector de un [origen](/es/docs/Web/CSS/Guides/Cascade/Introduction) o unas [capas](/es/docs/Web/CSS/Guides/Cascade/Introduction) de menor precedencia tenga mayor [especificidad](/es/docs/Web/CSS/Guides/Cascade/Specificity).

Algunas propiedades heredan los valores de sus elementos padre salvo que se sobrescriban explícitamente. La [herencia](/es/docs/Web/CSS/Guides/Cascade/Inheritance) puede darse cuando no existe información de estilo para una propiedad concreta en un elemento. Si la propiedad se hereda, el valor se establece al [valor calculado](#valor_calculado) del elemento padre. Si no se hereda, su valor se establece al [valor inicial](#valor_inicial) para ese elemento.

Después de aplicar paso a paso las reglas de [cascada](#cascada) y los valores por defecto, el navegador garantiza que la presentación visual se corresponde con el CSS procesado.

## Visión general del procesamiento

Antes de entrar en cada una de las etapas del valor, conviene entender las tres fases principales del procesamiento: el [filtrado](#filtrado), la [cascada](#cascada) y la [asignación por defecto](#asignación_por_defecto).

### Filtrado

El **filtrado** es el proceso de identificar todas las declaraciones que aplican a cada elemento. Una declaración aplica a un elemento sólo si:

- La declaración pertenece a una hoja de estilo que se aplica actualmente a este documento.
- Las [reglas condicionales](/es/docs/Web/CSS/Guides/Conditional_rules) (como {{cssxref("@media")}} o {{cssxref("@supports")}}) que contienen la declaración se cumplen actualmente.
- La declaración pertenece a una regla de estilo cuyo selector coincide con el elemento.
- La declaración es sintácticamente válida: el navegador reconoce el nombre de la propiedad y el valor coincide con la sintaxis esperada para esa propiedad.

Sólo las declaraciones válidas se convierten en valores declarados. Las declaraciones con nombres de propiedad o valores no válidos se descartan según las [reglas de manejo de errores de CSS](/es/docs/Web/CSS/Guides/Syntax/Error_handling).

En este ejemplo sólo se procesan las declaraciones {{cssxref("font-size")}} y {{cssxref("font-weight")}}. El [analizador de CSS filtra los errores](/es/docs/Web/CSS/Guides/Syntax/Error_handling), ignorando o «filtrando» la declaración cuyo nombre de propiedad no es válido:

```css
p {
  font-size: 1.25em;
  colr: blue;
  font-weight: bold;
}
```

Cuando termina el filtrado, cada elemento tiene cero o más [valores declarados](#valor_declarado) para cada propiedad CSS. Esos valores declarados son el punto de partida de la etapa de [cascada](#cascada).

### Cascada

La [cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction) resuelve los conflictos cuando varias declaraciones aplican a la misma propiedad del mismo elemento. La cascada ordena las declaraciones mediante el algoritmo del [orden de la cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction).

Por ejemplo, las dos declaraciones de {{cssxref("font-size")}} coinciden con `<p class="large">¡CSS es divertido!</p>`, pero se aplica la segunda porque tiene mayor [especificidad](/es/docs/Web/CSS/Guides/Cascade/Specificity). Ambas tienen origen de autor, pero el segundo selector tiene una especificidad de `0-1-1` frente al `0-0-1` del primero:

```css
p {
  font-size: 1em;
}

p.large {
  font-size: 1.5em;
}
```

Tras la cascada, el navegador determina el [**valor en cascada**](#valor_en_cascada) de cada propiedad en cada elemento. Ese es el valor que se usa en la etapa siguiente: la [asignación por defecto](#asignación_por_defecto).

### Asignación por defecto

La **asignación por defecto** garantiza que toda propiedad de todo elemento tenga un valor. Consiste en aplicar los valores predeterminados de la propiedad cuando ninguna declaración CSS establece explícitamente ese valor.
Esto implica:

- Establecer los **valores heredados** para las [propiedades que se heredan](/es/docs/Web/CSS/Guides/Cascade/Inheritance#propiedades_heredadas).
- Establecer los **valores iniciales** para las [propiedades que no se heredan](/es/docs/Web/CSS/Guides/Cascade/Inheritance#propiedades_no_heredadas).

Como resultado de la asignación por defecto, se garantiza que toda propiedad tenga un [valor especificado](#valor_especificado).

Ten en cuenta que las palabras clave de asignación explícita ({{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}}) también se resuelven a sus valores correspondientes para determinar el [valor especificado](#valor_especificado).

## Etapas del procesamiento

Todos los elementos que forman parte del árbol aplanado de elementos del documento tienen valores [declarado](#valor_declarado), [en cascada](#valor_en_cascada), [especificado](#valor_especificado), [calculado](#valor_calculado), [utilizado](#valor_utilizado) y [real](#valor_real). Para una propiedad concreta, esos valores pueden coincidir o no. Por ejemplo, si tu base de código incluye el CSS `p { font-size: 1.25em; }` y tu HTML incluye `<p class="large">¡CSS es divertido!</p>`, ¿de qué tamaño será el párrafo? El valor de {{cssxref("font-size")}} pasa por varias etapas para ir del valor especificado en `em` al valor renderizado en `px`.

Las etapas del procesamiento del valor son el [valor declarado](#valor_declarado), el [valor en cascada](#valor_en_cascada), el [valor especificado](#valor_especificado), el [valor calculado](#valor_calculado), el [valor utilizado](#valor_utilizado) y el [valor real](#valor_real). Con ellos se determina el [valor renderizado](#valores_renderizados) final.

### Valor declarado

Un **valor declarado** es cualquier valor sintácticamente válido de una declaración que aplica a un elemento. Un elemento puede tener cero o más valores declarados para cada propiedad. Esos valores provienen de las hojas de estilo (de autor, de usuario o del agente de usuario) y se identifican durante la etapa de [filtrado](#filtrado).

Siguiendo con nuestro ejemplo, en el que la hoja de estilo incluye `p { font-size: 1.25em; }` y el documento que la enlaza incluye `<p class="large">¡CSS es divertido!</p>`, puede haber otras declaraciones de `font-size` que podrían aplicar al mismo párrafo. La hoja de estilo del agente de usuario podría establecer `font-size: 1em` para todos los párrafos, mientras que otra declaración de autor establece `font-size: 2em` para los elementos con la clase «large»:

```css
/* Estilos del agente de usuario */
p {
  font-size: 1em;
}

/* Estilos de autor */
p {
  font-size: 1.25em;
}

.large {
  font-size: 2em;
}
```

Puede haber muchas otras declaraciones de `font-size` en nuestras hojas de estilo, pero sólo se convierten en valores declarados aquellas cuyos selectores coinciden con el elemento. En este ejemplo, como nuestro elemento `<p>` tiene `class="large"`, las tres declaraciones son valores declarados para este elemento.

### Valor en cascada

El **valor en cascada** es el valor declarado que gana la [cascada](#cascada). Hay como mucho un valor en cascada por propiedad y elemento.

De nuestros valores declarados, los estilos de autor ganan a los del agente de usuario. Dentro del mismo origen, los estilos con mayor especificidad ganan a los de menor especificidad. En este caso, el valor en cascada sería `font-size: 2em`, del origen de autor con especificidad `0-1-1`:

```css
font-size: 2em;
```

Si no hay valores declarados para una propiedad, no hay valor en cascada, lo que significa que el [valor especificado](#valor_especificado) de esa propiedad lo determina el proceso de [asignación por defecto](#asignación_por_defecto).

### Valor especificado

El **valor especificado** es el resultado del proceso de [asignación por defecto](#asignación_por_defecto). Se garantiza que existe para toda propiedad de todo elemento. Se determina así:

1. Si hay un [valor en cascada](#valor_en_cascada), ese es el valor especificado.
2. Si _no_ hay valor en cascada y la propiedad [se hereda](/es/docs/Web/CSS/Guides/Cascade/Inheritance), el valor especificado es el [valor calculado](#valor_calculado) del elemento padre.
3. Si _no_ hay valor en cascada y la propiedad _no_ se hereda, el valor especificado es el [valor inicial](#valor_inicial) de la propiedad.

En nuestro ejemplo, como tenemos un [valor en cascada](#valor_en_cascada) de `2em`, ese pasa a ser el valor especificado:

```css
font-size: 2em;
```

Para las propiedades sin valor en cascada, el valor lo determina el proceso de asignación por defecto. Por ejemplo, si no se especifica `color`, se hereda del valor calculado del padre, ya que es una propiedad que se hereda. Si no se especifica `margin`, se usa el valor `initial` de `0`, porque `margin` no es una [propiedad que se herede](/es/docs/Web/CSS/Guides/Cascade/Inheritance#propiedades_heredadas):

```css
color: inherit;
margin: 0;
```

#### Valor inicial

El **valor inicial** de una propiedad es el valor predeterminado que figura en su tabla de definición en la especificación. El valor inicial se usa durante la asignación por defecto cuando:

- En las [propiedades que se heredan](/es/docs/Web/CSS/Guides/Cascade/Inheritance#propiedades_heredadas), el valor inicial se usa _sólo en el elemento raíz_, que no tiene elemento padre, cuando no existe valor en cascada.
- En las [propiedades que no se heredan](/es/docs/Web/CSS/Guides/Cascade/Inheritance#propiedades_no_heredadas), el valor inicial se usa en _todos los elementos_ cuando no existe valor en cascada.

Puedes establecer explícitamente el valor inicial usando la palabra clave {{cssxref("initial")}}.

> [!NOTE]
> El valor inicial se encuentra en la sección de sintaxis formal de la página de referencia de cada propiedad CSS. Por ejemplo, el [valor inicial de `font-size` es `medium`](/es/docs/Web/CSS/Reference/Properties/font-size#definición_formal). No debe confundirse con el valor especificado por la hoja de estilo del navegador.

### Valor calculado

El **valor calculado** de una propiedad es el valor que se transfiere del padre al hijo durante la herencia. Es el resultado de resolver cosas como las unidades relativas y las propiedades personalizadas a valores absolutos, pero antes de tener en cuenta la información específica del diseño.

El valor calculado se obtiene a partir del [valor especificado](#valor_especificado) mediante:

1. El tratamiento de los valores especiales {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} y {{cssxref("unset")}}.
2. El cálculo necesario para llegar al valor descrito en la línea «Computed value» de la tabla de definición de la propiedad.

Ese cálculo suele implicar convertir valores relativos (como los expresados en unidades `em` o en porcentajes) a valores absolutos. Por ejemplo, si un elemento tiene los valores especificados `font-size: 16px` y `padding-top: 2em`, el valor calculado de `padding-top` es `32px` (el doble del tamaño de fuente).

Sin embargo, en algunas propiedades (aquellas cuyos porcentajes son relativos a algo que puede requerir el cálculo del diseño, como `width`, `margin-right`, `text-indent` o `top`), los valores especificados en porcentaje se convierten en valores calculados en porcentaje. Además, los números sin unidad especificados en la propiedad `line-height` pasan a ser el valor calculado tal cual. Los valores relativos que permanecen en el valor calculado se vuelven absolutos al determinarse el [valor utilizado](#valor_utilizado).

### Valor utilizado

El **valor utilizado** es el valor de la propiedad después de realizar todos los cálculos sobre el [valor calculado](#valor_calculado) y de afinarlo con los detalles específicos del diseño (por ejemplo, los porcentajes resueltos a valores reales en píxeles).

Toda propiedad CSS tiene un valor utilizado. Los valores utilizados de las dimensiones (por ejemplo {{cssxref("width")}} o {{cssxref("line-height")}}) se expresan en píxeles. Los valores utilizados de las propiedades abreviadas (por ejemplo {{cssxref("background")}}) son coherentes con los de sus propiedades componentes (por ejemplo {{cssxref("background-color")}} o {{cssxref("background-size")}}) y con {{cssxref("position")}} y {{cssxref("float")}}.

El valor utilizado del {{cssxref("width")}} o del {{cssxref("inline-size")}} de un elemento es un valor en píxeles, aunque el valor especificado de la propiedad se haya fijado con porcentajes o con palabras clave.

Si tenemos tres elementos contenedores con su ancho fijado como `auto`, `50%` e `inherit`:

```html hidden
<div id="no-width">
  <p>Sin ancho explícito.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Ancho explícito: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Ancho explícito: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Para ver mejor los resultados */
div {
  border: 1px solid red;
  padding: 8px;
}
```

```js hidden
function updateUsedWidth(id) {
  const div = document.getElementById(id);
  const par = div.querySelector(".show-used-width");
  const wid = window.getComputedStyle(div)["width"];
  par.textContent = `Ancho utilizado: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

Aunque los tres valores especificados, `auto`, `50%` e `inherit`, son palabras clave y valores de {{cssxref("percentage")}}, obtener el `width` con `window.getComputedStyle(el)["width"];` devuelve un valor de [longitud absoluta](/es/docs/Web/CSS/Reference/Values/length#unidades_de_longitud_absolutas) en `px`:

{{ EmbedLiveSample('Example', '80%', 372) }}

Cambia el tamaño de la ventana o gira tu dispositivo móvil para cambiar el tamaño y los valores utilizados.

## Valores renderizados

El valor renderizado se llama [valor real](#valor_real), mientras que el valor que se obtiene mediante scripts se llama [valor resuelto](#valor_resuelto).

### Valor real

El **valor real** de una propiedad es el [valor utilizado](#valor_utilizado) de esa propiedad después de aplicar las aproximaciones necesarias. Es el valor final renderizado tal como lo implementa el navegador, incluidos los ajustes por peculiaridades o limitaciones de renderizado. Por ejemplo, un {{glossary("user agent", "agente de usuario")}} que sólo pueda renderizar bordes con un ancho de píxel entero puede redondear el grosor del borde al entero más cercano.

El cálculo incluye estos pasos:

1. Primero se determina el [valor especificado](#valor_especificado) a partir del resultado de la [cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction), la [herencia](/es/docs/Web/CSS/Guides/Cascade/Inheritance) o el uso del [valor inicial](#valor_inicial).
2. Después se calcula el [valor calculado](#valor_calculado) según la especificación (por ejemplo, un `span` con `position: absolute` verá cambiado su `display` calculado a `block`).
3. A continuación se calcula el diseño, lo que da como resultado el [valor utilizado](#valor_utilizado).
4. Por último, el valor utilizado se transforma según las limitaciones del entorno local, lo que da como resultado el valor real.

### Valor resuelto

El **valor resuelto** de una propiedad es el valor tras aplicar las hojas de estilo activas y resolver los cálculos básicos que esos valores puedan contener. El método {{domxref("Window.getComputedStyle", "getComputedStyle()")}} devuelve un objeto {{domxref("CSSStyleDeclaration")}} vivo que contiene los valores resueltos de todas las propiedades CSS aplicadas a un elemento dado. Cada valor resuelto es el [valor calculado](#valor_calculado) o el [valor utilizado](#valor_utilizado), según la propiedad.

Históricamente, `getComputedStyle()` devolvía el valor calculado de un elemento o pseudoelemento. A medida que CSS evolucionó, también lo hizo el concepto de «valor calculado», pero los valores devueltos por `getComputedStyle()` tuvieron que mantenerse iguales por compatibilidad con los scripts ya desplegados. Esos valores son los «valores resueltos».

En la mayoría de las propiedades el valor resuelto es el valor calculado, pero en unas pocas propiedades heredadas del pasado (entre ellas {{cssxref("width")}} y {{cssxref("height")}}) es el valor utilizado. La [especificación de CSSOM](https://drafts.csswg.org/cssom/#resolved_values) detalla el comportamiento propiedad por propiedad.

CSS 2.0 definía el _valor calculado_ como el último paso del cálculo de una propiedad. CSS 2.1 introdujo la definición diferenciada de «valor utilizado». Un elemento podía entonces heredar explícitamente el ancho o el alto de su padre, cuyo valor calculado es un porcentaje. En las propiedades CSS que no dependen del diseño (por ejemplo `display`, `font-size` o `line-height`), el valor calculado y el utilizado coinciden. La lista siguiente contiene las propiedades de CSS 2.1 que _sí_ dependen del diseño y que, por tanto, tienen un valor calculado distinto del utilizado (tomada de [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q21.36)):

- {{cssxref("background-position")}}
- {{cssxref("bottom")}}, {{cssxref("left")}}, {{cssxref("right")}}, {{cssxref("top")}}
- {{cssxref("height")}}, {{cssxref("width")}}
- {{cssxref("margin-bottom")}}, {{cssxref("margin-left")}}, {{cssxref("margin-right")}}, {{cssxref("margin-top")}}
- {{cssxref("min-height")}}, {{cssxref("min-width")}}
- {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}, {{cssxref("padding-right")}}, {{cssxref("padding-top")}}
- {{cssxref("text-indent")}}

## Véase también

- Valores CSS para controlar la herencia: {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("revert")}}, {{cssxref("revert-layer")}} y {{cssxref("unset")}}
- Módulo [Cascada y herencia en CSS](/es/docs/Web/CSS/Guides/Cascade)
- Módulo [Sintaxis de CSS](/es/docs/Web/CSS/Guides/Syntax)
