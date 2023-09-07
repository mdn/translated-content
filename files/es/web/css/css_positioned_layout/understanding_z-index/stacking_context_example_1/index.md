---
title: Ejemplo 1 del contexto de apilamiento
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_1
---

« [CSS](/es/CSS) « [ENTENDIENDO LA PROPIEDAD CSS Z-INDEX](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index)

Empecemos con un ejemplo básico. En el contexto de apilamiento raíz tenemos dos DIVs (DIV #1 and DIV #3), ambos con posición relativa, pero sin propiedad z-index. Dentro del DIV #1 se encuentra el DIV #2 de posición absoluta, mientras que en el DIV #3 se encuentra el DIV #4 con posición absoluta, ambos sin propiedad z-index.

El único contexto de apilamiento es el contexto raíz. Sin la propiedad z-index, los elementos son apilados por orden de ocurrencia.

![Stacking context example 1](understanding_zindex_05a.png)

Si a DIV #2 le asignamos un valor z-index positivo (no-cero y no-auto), es renderizado encima de todos los otros DIVs.

![Stacking context example 1](understanding_zindex_05b.png)

Luego si al DIV #4 también se le asigna un z-index positivo mayor que el z-index del DIV #2, es renderizado encima de los otros DIVs incluyendo DIV #2.

![Stacking context example 1](understanding_zindex_05c.png)

En este último ejemplo puedes ver que el DIV #2 y el DIV #4 no son hermanos, porque pertenecen a padres distintos en la jerarquía de elementos HTML. A pesar de esto, el apilamiento del DIV #4 con respecto al DIV #2 puede ser controlado a través de z-index. Pasa que, dado a que al DIV #1 y al DIV #3 no se le ha asignado ningún valor z-index, ellos no han creado un contexto de apilamiento. Esto significa que todos sus contenidos, incluyendo el DIV #2 y el DIV #4, pertenecen al mismo contexto de apilamiento raíz.

En términos de contextos de apilamiento, el DIV #1 y el DIV #3 son simplemente asimilados dentro del elemento raíz, y la jerarquía resultante es la siguiente:

- contexto de apilamiento raíz

  - DIV #2 (z-index 1)
  - DIV #4 (z-index 2)

> **Nota:** El DIV #1 y el DIV #3 no son translúcidos. Es importante recordar que asignar una opacidad menor a 1 a un elemento posicionado implica la creación de un contexto de apilamiento, como ocurre cuando se añade un valor z-index. Y este ejemplo muestra que ocurre cuando un elemento padre no crea un contexto de apilamiento.

## Ejemplo

### HTML

```html
<div id="div1">
<br /><span class="bold">DIV #1</span>
<br />position: relative;
   <div id="div2">
   <br /><span class="bold">DIV #2</span>
   <br />position: absolute;
   <br />z-index: 1;
   </div>
</div>

<br />

<div id="div3">
<br /><span class="bold">DIV #3</span>
<br />position: relative;
   <div id="div4">
   <br /><span class="bold">DIV #4</span>
   <br />position: absolute;
   <br />z-index: 2;
   </div>
</div>

</body></html>
```

### CSS

```css
.bold {
  font-weight: bold;
  font: 12px Arial;
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
  z-index: 1;
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
  z-index: 2;
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
```

### Resultado

{{EmbedLiveSample('', '', '')}}

### También puedes ver

- [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) : Reglas de apilamiento por defecto
- [Apilamiento y float](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float) : Cómo son manejados los elementos flotantes
- [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index) : Usando z-index para cambiar el apilamiento por defecto
- [El contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento) : Notas sobre el contexto de apilamiento
- [Ejemplo 2 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en todos los niveles
- [Ejemplo 3 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento) : Jerarquía HTML de 3 niveles, z-index en el segundo nivel

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: July 9th, 2005
