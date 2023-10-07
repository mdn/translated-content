---
title: Apilamiento y float
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_floating_elements
---

{{cssref}}

### Apilamiento y float

Para los bloques flotantes el orden de apilamiento es un poco diferente. Los bloques flotantes son colocados entre bloques no posicionados y bloques posicionados:

1. Fondo y bordes del elemento raiz
2. Bloques descendientes en el flujo normal, en orden de aparición (en HTML)
3. Bloques flotantes
4. Elementos posicionados descendentemente , en orden de aparición (en HTML)

En realidad, como puedes ver en el siguiente ejemplo, el fondo y el borde del bloque no posicionado (DIV #4) no son afectados por los bloques flotantes, mientras que el contenido si es afectado. Esto ocurre de acuerdo al comportamiento flotante stándar de CSS.

Este comportamiento puede ser explicado con una versión mejorada de la lista previa:

1. Fondo y bordes del elemento raiz
2. Bloques descendientes en el flujo normal, en orden de aparición (en HTML)
3. Bloques flotantes
4. Descendientes en línea en el flujo normal
5. Elementos posicionados descendentemente , en orden de aparición (en HTML)

> **Nota:** En el ejemplo debajo, todos los bloques excepto el no posicionado son translúcidos para mostrar el orden de apilamiento. Si la opacidad del bloque no posicionado (DIV #4) es reducida, entonces algo extraño ocurre: el fondo y el borde de ese bloque sobresale por encima de los bloques flotantes, pero aun debajo de los bloques posicionados. Yo no pude entender si esto es un bug o una interpretación peculiar de la especificación. (Aplicar opacidad debería crear implícitamente un contexto de apilamiento.)

## Código fuente de ejemplo

### HTML

```html
<div id="abs1"><b>DIV #1</b><br />position: absolute;</div>

<div id="flo1"><b>DIV #2</b><br />float: left;</div>

<div id="flo2"><b>DIV #3</b><br />float: right;</div>

<br />

<div id="sta1"><b>DIV #4</b><br />no positioning</div>

<div id="abs2"><b>DIV #5</b><br />position: absolute;</div>
```

### CSS

```css
div {
  padding: 10px;
  text-align: center;
}

b {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 10px 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 130px;
  left: 100px;
  border: 1px dashed #990;
  background-color: #fdd;
}
```

### Resultado

{{EmbedLiveSample('', '563', '255')}}

### También puedes ver

- [Apilando sin z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Stacking_without_z-index) : Reglas de apilamiento por defecto
- [Agregando z-index](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/Agregando_z-index) : Usando z-index para cambiar el apilamiento por defecto
- [El contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/El_contexto_de_apilamiento) : Notas sobre el contexto de apilamiento
- [Ejemplo 1 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_1_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en el último nivel
- [Ejemplo 2 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_2_del_contexto_de_apilamiento) : Jerarquía HTML de 2 niveles, z-index en todos los niveles
- [Ejemplo 3 del contexto de apilamiento](/es/docs/Web/CSS/CSS_Positioning/entendiendo_z_index/ejemplo_3_del_contexto_de_apilamiento) : Jerarquía HTML de 3 niveles, z-index en el segundo nivel

### Información del documento original

- Autor(es): Paolo Lombardi
- Este artículo es una traducción al inglés de un artículo que escribí en italiano para [YappY](http://www.yappy.it). He dado el derecho de compartir el contenido bajo [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/)
- Last Updated Date: November 3rd, 2014
