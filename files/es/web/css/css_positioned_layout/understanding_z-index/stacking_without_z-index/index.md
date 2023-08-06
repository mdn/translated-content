---
title: Apilando sin z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_without_z-index
---

« [CSS](/es/CSS) « [ENTENDIENDO LA PROPIEDAD CSS Z-INDEX](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index)

Cuando ningún elemento tiene z-index, los elementos son apilados en este orden (de abajo hacia arriba):

1. El fondo y los bordes del elemento raiz
2. Bloques descendientes en el flujo normal, en orden de aparición (en HTML)
3. Elementos posicionados descendentemente, en orden de aparición (en HTML)

En el siguiente ejemplo, los bloques con posiciones absolutas y relativas son apropiadamente dimensionados y posicionados para ilustrar las reglas de apilamiento.

> **Nota:**
>
> - Dado un grupo homogéneo de elementos sin propiedad z-index, tales como los bloques posicionados (DIV #1 al #4) en el ejemplo, el orden de apilamiento de los elementos es su orden en la jerarquía HTML, independientemente de su posición.
> - Bloques estándar (DIV #5) en el flujo normal, sin ninguna propiedad de posicionamiento, siempre son renderizados antes de los elementos posicionados y aparecen debajo de los mismos, incluso si están después en la jerarquía HTML.

![understanding_zindex_01.png](understanding_zindex_01.png)

## Ejemplo

### HTML

```html
<div id="absdiv1">
  <br /><span class="bold">DIV #1</span> <br />position: absolute;
</div>
<div id="reldiv1">
  <br /><span class="bold">DIV #2</span> <br />position: relative;
</div>
<div id="reldiv2">
  <br /><span class="bold">DIV #3</span> <br />position: relative;
</div>
<div id="absdiv2">
  <br /><span class="bold">DIV #4</span> <br />position: absolute;
</div>
<div id="normdiv">
  <br /><span class="bold">DIV #5</span> <br />no positioning
</div>
```

### CSS

```css
.bold {
  font-weight: bold;
  font: 12px Arial;
}
#normdiv {
  height: 70px;
  border: 1px dashed #999966;
  background-color: #ffffcc;
  margin: 0px 50px 0px 50px;
  text-align: center;
}
#reldiv1 {
  opacity: 0.7;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  margin: 0px 50px 0px 50px;
  text-align: center;
}
#reldiv2 {
  opacity: 0.7;
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
  opacity: 0.7;
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
  opacity: 0.7;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}
```

### Resultado

(Si la imagen no aparece en CodePen, haz clic en el botón Tidy en la sección CSS)

{{EmbedLiveSample('', '', '')}}

### También puedes ver

- [Apilamiento y float](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Apilamiento_y_float) : Cómo son manejados los elementos flotantes
- [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index) : Usando z-index para cambiar el apilamiento por defecto
- [El contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento) : Notas sobre el contexto de apilamiento
- [Ejemplo 1 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en el último nivel
- [Ejemplo 2 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en todos los niveles
- [Ejemplo 3 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento) : Jerarquía HTML de 3 niveles, z-index en el segundo nivel

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: November 3rd, 2014
