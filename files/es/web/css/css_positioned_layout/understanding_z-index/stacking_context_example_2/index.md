---
title: Ejemplo 2 del contexto de apilamiento
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2
---

« [CSS](/es/CSS) « [ENTENDIENDO LA PROPIEDAD CSS Z-INDEX](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index)

Este es un ejemplo muy simple, pero es la clave para entender el concepto de _contexto de apilamiento._ Tenemos los mismos 4 DIVs del ejemplo previo, pero ahora las propiedades z-index son asignadas en ambos niveles de la jerarquía.

Puedes ver que el DIV #2 (z-index: 2) está encima del DIV #3 (z-index: 1), porque ambos pertenecen al mismo contexto de apilamiento (el contexto raíz), así que los valores z-index indican cómo son apilados los elementos.

Lo que puede ser considerado extraño es que el DIV #2 (z-index: 2) está encima del DIV #4 (z-index: 10), a pesar de sus valores z-index. La razón es que ellos no pertenecen al mismo contexto de apilamiento. El DIV #4 pertenece al contexto de apilamiento creado por el DIV #3, y como explicamos previamente el DIV #3 (y todos su contenido) está debajo del DIV #2.

Para entender mejor esta situación, esta es la jerarquía del contexto de apilamiento:

- contexto de apilamiento raíz

  - DIV #2 (z-index 2)
  - DIV #3 (z-index 1)

    - DIV #4 (z-index 10)

> **Nota:** Vale la pena recordar que en general la jerarquía HTML es diferente de la jerarquía del contexto de apilamiento. En la jerarquía del contexto de apilamiento, los elementos que no crean un contexto de apilamiento son colapsados en sus padres.

### Código fuente de ejemplo

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <style type="text/css">
      div {
        font: 12px Arial;
      }

      span.bold {
        font-weight: bold;
      }

      #div2 {
        z-index: 2;
      }
      #div3 {
        z-index: 1;
      }
      #div4 {
        z-index: 10;
      }

      #div1,
      #div3 {
        height: 80px;
        position: relative;
        border: 1px dashed #669966;
        background-color: #ccffcc;
        padding-left: 5px;
      }

      #div2 {
        opacity: 0.8;
        position: absolute;
        width: 150px;
        height: 200px;
        top: 20px;
        left: 170px;
        border: 1px dashed #990000;
        background-color: #ffdddd;
        text-align: center;
      }

      #div4 {
        opacity: 0.8;
        position: absolute;
        width: 200px;
        height: 70px;
        top: 65px;
        left: 50px;
        border: 1px dashed #000099;
        background-color: #ddddff;
        text-align: left;
        padding-left: 10px;
      }
    </style>
  </head>

  <body>
    <br />

    <div id="div1">
      <br />
      <span class="bold">DIV #1</span><br />
      position: relative;
      <div id="div2">
        <br />
        <span class="bold">DIV #2</span><br />
        position: absolute;<br />
        z-index: 2;
      </div>
    </div>

    <br />

    <div id="div3">
      <br />
      <span class="bold">DIV #3</span><br />
      position: relative;<br />
      z-index: 1;
      <div id="div4">
        <br />
        <span class="bold">DIV #4</span><br />
        position: absolute;<br />
        z-index: 10;
      </div>
    </div>
  </body>
</html>
```

{{EmbedLiveSample('', '352', '270')}}

### También puedes ver

- [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) : Reglas de apilamiento por defecto
- [Apilamiento y float](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float) : Cómo son manejados los elementos flotantes
- [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index) : Usando z-index para cambiar el apilamiento por defecto
- [El contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento) : Notas sobre el contexto de apilamiento
- [Ejemplo 1 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en el último nivel
- [Ejemplo 3 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento) : Jerarquía HTML de 3 niveles, z-index en el segundo nivel

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
