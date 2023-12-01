---
title: Agregando z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Using_z-index
---

« [CSS](/es/CSS) « [ENTENDIENDO LA PROPIEDAD CSS Z-INDEX](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index)

### Agregando {{ cssxref("z-index") }}

El primer ejemplo, [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index), explica cómo es organizado el apilamiento por defecto. Si quieres especificar un orden diferente de apilamiento, debes posicionar un elemento y usar la propiedad z-index.

Esta propiedad es asignada con un valor entero (positivo o negativo), el cuál representa la posición del elemento en el eje-Z. Si no estás familiarizado con el eje-Z, imagina que la página tiene muchas capas una encima de la otra. Cada capa es numerada. Una capa con un número mayor es renderizada encima de las capas con números menores.

> **Advertencia:** z-index solo tiene efecto si un elemento es [posicionado](/es/CSS/position).

- _bottom: el más lejano al observador_
- ...
- Capa -3
- Capa -2
- Capa -1
- Capa 0*capa de renderizado por defecto*
- Capa 1
- Capa 2
- Capa 3
- ...
- _top: el más cercano al observador_

> **Nota:**
>
> - Cuando la propiedad z-index no ha sido especificada, los elementos son renderizados en la capa de renderizado por defecto 0 (cero).
> - Si varios elementos comparten el mismo valor z-index (_i.e._ están situados en la misma capa), las reglas de apilamiento explicadas en la sección [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) son aplicadas.

En el siguiente ejempo, el orden de apilamiento de las capas es organizado usando z-index. El z-index del DIV#5 no hace efecto ya que este no es un elemento posicionado.

### Código fuente de ejemplo

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Adding z-index</title>
    <style type="text/css">
      div {
        opacity: 0.7;
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      #normdiv {
        z-index: 8;
        height: 70px;
        border: 1px dashed #999966;
        background-color: #ffffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv1 {
        z-index: 3;
        height: 100px;
        position: relative;
        top: 30px;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #reldiv2 {
        z-index: 2;
        height: 100px;
        position: relative;
        top: 15px;
        left: 20px;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        margin: 0px 50px 0px 50px;
        text-align: center;
      }

      #absdiv1 {
        z-index: 5;
        position: absolute;
        width: 150px;
        height: 350px;
        top: 10px;
        left: 10px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }

      #absdiv2 {
        z-index: 1;
        position: absolute;
        width: 150px;
        height: 350px;
        top: 10px;
        right: 10px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <br /><br />

    <div id="absdiv1">
      <br /><span class="bold">DIV #1</span> <br />position: absolute;
      <br />z-index: 5;
    </div>

    <div id="reldiv1">
      <br /><span class="bold">DIV #2</span> <br />position: relative;
      <br />z-index: 3;
    </div>

    <div id="reldiv2">
      <br /><span class="bold">DIV #3</span> <br />position: relative;
      <br />z-index: 2;
    </div>

    <div id="absdiv2">
      <br /><span class="bold">DIV #4</span> <br />position: absolute;
      <br />z-index: 1;
    </div>

    <div id="normdiv">
      <br /><span class="bold">DIV #5</span> <br />no positioning <br />z-index:
      8;
    </div>
  </body>
</html>
```

{{EmbedLiveSample('', '468', '365')}}

### También puedes ver

- [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) : Reglas de apilamiento por defecto
- [Apilamiento y float](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float) : Cómo son manejados los elementos flotantes
- [El contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento) : Notas sobre el contexto de apilamiento
- [Ejemplo 1 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en el último nivel
- [Ejemplo 2 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en todos los niveles
- [Ejemplo 3 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento) : Jerarquía HTML de 3 niveles, z-index en el segundo nivel

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: November 3rd, 2014
