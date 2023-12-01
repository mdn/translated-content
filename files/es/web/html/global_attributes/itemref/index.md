---
title: itemref
slug: Web/HTML/Global_attributes/itemref
---

## Resumen

Las propiedades que no son descendientes de un elemento con el atributo `itemscope` pueden ser asociadas con el elemento usando un **itemref** . **Itemref** provee una lista de ids de los elementos (no `itemids`) con propiedades adicionales en otras partes dentro del documento .

El atributo itemref puede ser solo especificado en elementos que tienen un atributo itemscope especificado .

> **Nota:** el atributo itemref no es parte del modelo de micro datos . Es solamente un constructor sintáctico que ayuda a los autores en el ingreso de anotaciones a las páginas donde los datos que se van a anotar no siguen una estructura de arbol conveniente . Por ejemplo , permite a los autores marcar los datos en una tabla para que cada columna defina un item separado mientras se mantienen las propiedades en las celdas .

## Ejemplo

### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

### Datos estructurados

<table class="standard-table">
  <tbody>
    <tr>
      <th>id's</th>
      <th>itemscope</th>
      <th>itemref</th>
      <th></th>
      <th>(nombre de itemprop )</th>
      <th>(valor de itemprop)</th>
    </tr>
    <tr>
      <td>id=amanda</td>
      <td>itemscope</td>
      <td>itemref=a,b</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>id=a</td>
      <td></td>
      <td></td>
      <td>itemprop</td>
      <td>name</td>
      <td>Amanda</td>
    </tr>
    <tr>
      <td>id=b</td>
      <td>itemscope</td>
      <td>itemref=c</td>
      <td></td>
      <td>band</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="2">id=c</td>
      <td></td>
      <td></td>
      <td>itemprop</td>
      <td>Band</td>
      <td>Jazz Band</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>itemprop</td>
      <td>Size</td>
      <td>p</td>
    </tr>
  </tbody>
</table>

### Resultado

{{EmbedLiveSample('', '', '')}}

## Especificación

| Especificación                                                         | Estatus                                             |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| [itemref](https://html.spec.whatwg.org/multipage/microdata.html#items) | Nota WG - No se encuentra activamente en desarrollo |
