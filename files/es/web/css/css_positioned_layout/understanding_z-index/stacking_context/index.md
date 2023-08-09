---
title: El contexto de apilamiento
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context
---

« [CSS](/es/CSS) « [ENTENDIENDO LA PROPIEDAD CSS Z-INDEX](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index)

El contexto de apilamiento es la conceptualización tridimensional de los elementos HTML a lo largo de un eje-Z imaginario relativo al usuario que se asume está de cara al viewport o página web. Los elementos HTML ocupan este espacio por orden de prioridad basado en sus atributos.

En el ejemplo previo, [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index), el orden de renderizado de ciertos DIVs es influenciado por sus valores z-index. Esto ocurre debido a que estos DIVs tienen propiedades especiales que causan que formen un contexto de apilamiento.

Un contexto de apilamiento es formado, en cualquier lugar del documento, por cualquier elemento que

- sea el elemento raiz (HTML),
- tenga posición (absoluta o relativa) con un valor z-index distinto de "auto",
- un elemento flex con un valor z-index distinto de "auto", que sea el elemento padre display: flex|inline-flex,
- sean elementos con un valor {{cssxref("opacity")}} menor de 1. (Mira [la especificación de opacity](http://www.w3.org/TR/css3-color/#transparency)),
- elementos con un valor {{cssxref("transform")}} distinto de "none",
- elementos con un valor {{cssxref("mix-blend-mode")}} distinto de "normal",
- elementos con un valor {{cssxref("filter")}} distinto de "none",
- elementos con un valor {{cssxref("perspective")}} distinto de "none",
- elementos con un valor {{cssxref("isolation")}} igual a "isolate",
- `position: fixed`
- especifican cualquier atributo superior en {{cssxref("will-change")}} incluso si no especificas valores para estos atributos directamente (Mira [este post](http://dev.opera.com/articles/css-will-change-property/))
- elementos con un valor {{cssxref("-webkit-overflow-scrolling")}} igual a "touch"

Dentro de un contexto de apilamiento, los elementos hijos son apilados de acuerdo a las mismas reglas previamente explicadas. Es importante entender que los valores z-index de los contextos de apilamiento de los hijos solo tienen sentido en el contexto del padre. Los contextos de apilamiento son tratados atómicamente como una sola unidad en el contexto de apilamiento del padre.

En resumen:

- Posicionar y asignar un valor z-index a un elemento HTML crea un contexto de apilamiento, (asi como también lo hace asignar una opacidad parcial)
- Contextos de apilamiento pueden ser contenidos en otros contextos de apilamiento, y juntos crean una jerarquía de contextos de apilamiento
- Cada contexto de apilamiento es completamente independiente de sus hermanos: solo los elementos descendientes son considerados cuando el apilamiento es procesado.
- Cada contexto de apilamiento es auto contenido: luego que los contenidos del elemento son apilados, el elemento completo es considerado en el orden de apilamiento del contexto del padre.

> **Nota:** La jerarquía de apilar contextos es un sub conjunto de la jerarquía de elementos HTML, porque solo ciertos elementos crean contextos de apilamiento. Podemos decir que los elementos que no crean sus propios contextos de apilamiento son asimilados por el contexto de apilamiento padre.

## El ejemplo

![Example of stacking rules modified using z-index](understanding_zindex_04.png)

En este ejemplo cada elemento posicionado crea su propio contexto de apilamiento, debido a sus valores de posicionamiento y z-index. La jerarquía de contextos de apilamiento es organizada de la siguiente manera:

- Raíz

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

Es importante notar que el DIV #4, DIV #5 y el DIV #6 son hijos del DIV #3, así que el apilamiento de esos elementos es completamente resuelto dentro del DIV#3. Una vez que el apilamiento y el renderizado dentro del DIV#3 ha sido completado, todo el elemento DIV#3 es apilado en el elemento raíz con respecto a sus DIV hermanos.

> **Nota:**
>
> - DIV #4 es renderizado debajo de DIV #1 porque el z-index (5) de DIV #1 es válido dentro del contexto de apilamiento del elemento raiz, mientras que el z-index (6) de DIV #4 es válido dentro del contexto de apilamiento de DIV #3. Así que DIV #4 está debajo de DIV #1, porque DIV #4 pertenece a DIV #3, que tiene un valor z-index menor.
> - Por la misma razón DIV #2 (z-index 2) es renderizado bajo DIV#5 (z-index 1) porque DIV #5 pertenece a DIV #3, que tiene un valor z-index mayor.
> - El valor z-index de DIV #3 es 4, pero este valor es independiente del z-index de DIV #4, DIV #5 and DIV #6, porque pertenece a un contexto de apilamiento diferente.
> - Una forma fácil de descubrir el _orden de renderizado_ de los elementos apilados en el eje Z es pensar en esto como un tipo de "número de versión", donde los elementos hijos son números de versión menores bajo los números de versión mayores de sus padres. De esta manera podemos ver fácilmente cómo un elemento con un valor z-index de 1 (DIV #5) es apilado encima de un elemento con un valor z-index de 2 (DIV #2), y cómo un elemento con un valor z-index de 6 (DIV #4) es apilado debajo de un elemento con un valor z-index de 5 (DIV #1). En nuestro ejemplo (ordenado de acuerdo al orden de renderizado final):
>
>   - Raíz
>
>     - El valor z-index de DIV #2 es 2
>     - El valor z-index de DIV #3 es 4
>
>       - El valor z-index de DIV #5 es 1, apilado bajo un elemento con un valor z-index de 4, que resulta en un orden de renderizado de 4.1
>       - El valor z-index de DIV #6 es 3, apilado debajo de un elemento con un valor z-index de 4, que resulta en un orden de renderizado de 4.3
>       - El valor z-index de DIV #4 es 6, apilado bajo un elemento con valor z-index de 4, que resulta en un orden de renderizado de 4.6
>
>     - El valor z-index de DIV #1 es 5

## Ejemplo

### HTML

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code
    >position: relative;<br />
    z-index: 5;</code
  >
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code
    >position: relative;<br />
    z-index: 2;</code
  >
</div>

<div id="div3">
  <div id="div4">
    <h1>Division Element #4</h1>
    <code
      >position: relative;<br />
      z-index: 6;</code
    >
  </div>

  <h1>Division Element #3</h1>
  <code
    >position: absolute;<br />
    z-index: 4;</code
  >

  <div id="div5">
    <h1>Division Element #5</h1>
    <code
      >position: relative;<br />
      z-index: 1;</code
    >
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code
      >position: absolute;<br />
      z-index: 3;</code
    >
  </div>
</div>
```

### CSS

```css
* {
  margin: 0;
}
html {
  padding: 20px;
  font:
    12px/20px Arial,
    sans-serif;
}
div {
  opacity: 0.7;
  position: relative;
}
h1 {
  font: inherit;
  font-weight: bold;
}
#div1,
#div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}
#div1 {
  z-index: 5;
  margin-bottom: 190px;
}
#div2 {
  z-index: 2;
}
#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}
#div4,
#div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}
#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}
#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}
#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: center;
}
```

### Resultado

{{ EmbedLiveSample('Example', '556', '396') }}

### También puedes ver

- [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) : Reglas de apilamiento por defecto
- [Apilamiento y float](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float) : Cómo son manejados los elementos flotantes
- [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index) : Usando z-index para cambiar el apilamiento por defecto
- [Ejemplo 1 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en el último nivel
- [Ejemplo 2 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en todos los niveles
- [Ejemplo 3 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento) : Jerarquía HTML de 3 niveles, z-index en el segundo nivel

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
