---
title: Element.querySelector()
slug: Web/API/Element/querySelector
---

{{APIRef}}

El método **`querySelector()`** de la intrefaz {{domxref("Element")}} devuelve el primer descendiente del elemento sobre el cual es invocado que coincida con el o los selectores especificados.

## Sintáxis

```js
elemento = elementoBase.querySelector(selectores);
```

### Parametros

- `selectores`
  - : Es el grupo de [selectores](/es/docs/Web/Guide/CSS/Getting_Started/Selectors) que servirán para filtrar los elementos descendientes del {{domxref("Element")}} `elementoBase`; debe tener una sintáxis CSS válida o se producirá una excepción `SyntaxError`. Devuelve el primer elemento que encuentre que coincida con el grupo de selectores.

### Valor devuelto

Devolverá el primer descendiente del elemento `elementoBase` que coincida con el grupo de `selectores` especificado. Para la comparación se recorrerá la jerarquía completa de elementos, incluyendo a aquellos que no son descendientes del `elementoBase`; en otras palabras, los `selectores` se aplican primero al documento completo, no sólo al `elementoBase`, creando una lista inicial de elementos potencialmente seleccionables. Después se examina dicha lista para comprobar qué elementos son descendientes del `elementoBase`. El método `querySelector()` devolverá el primero de dichos elementos descendientes.

Si no hubiera coincidencias, devolverá el valor `null`.

### Excepciones

- `SyntaxError`
  - : Los `selectores` especificados no son válidos.

## Ejemplos

Vamos a ver unos cuantos ejemplos.

### Encontrar un elemento a traves del valor de sus atributos

En este primer ejemplo, obtendremos el primer elemento {{HTMLElement("style")}} del body del documento HTML que no tenga atributo "type" o cuyo atributo "type" sea igual a "text/css":

```js
var el = document.body.querySelector(
  "style[type='text/css'], style:not([type])",
);
```

### Toda la jerarquía cuenta

El ejemplo que mostramos a continuación, demuestra que la jerarquía de todo el documento se tiene en cuenta cuando se aplican los `selectores`, de modo que se tienen en cuenta todos los niveles que se encuentran fuera de la jerarquía del `elementoBase` para localizar coincidencias.

#### HTML

```html
<div>
  <h5>Original content</h5>
  <p>
    inside paragraph
    <span>inside span</span>
    inside paragraph
  </p>
</div>
<div>
  <h5>Output</h5>
  <div id="output"></div>
</div>
```

#### JavaScript

```js
var baseElement = document.querySelector("p");
document.getElementById("output").innerHTML =
  baseElement.querySelector("div span").innerHTML;
```

#### Resultado

El resultado es el siguiente:

{{ EmbedLiveSample('The_entire_hierarchy_counts', 600, 160) }}

Podemos ver que el selector `"div span"` coincide con el elemento {{HTMLElement("span")}}, aunque `baseElement` excluye el elemento {{domxref("div")}} al no ser parte de su selector.

### Más ejemplos

Puedes ver más ejemplos sobre el formato apropiado para los `selectores` aquí {{domxref("Document.querySelector()")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Localizando elementos DOM usando selectores](/es/docs/Referencia_DOM_de_Gecko/Localizando_elementos_DOM_usando_selectores)
- [Selectores de atributo](/es/docs/Web/CSS/Selectores_atributo) en la guia de CSS
- [Selectores de atributo](/es/docs/Learn/CSS/Building_blocks/Selectores_CSS/Selectores_de_atributos) en MDN Learning
- {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} y {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} y {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} y {{domxref("ParentNode.querySelectorAll()")}}
- [Code snippets for querySelector](/es/docs/Code_snippets/QuerySelector)
- Otros métodos que toman selectores: {{domxref("element.closest()")}} y {{domxref("element.matches()")}}.
