---
title: "<progress>: Elemento indicador de progreso"
slug: Web/HTML/Reference/Elements/progress
original_slug: Web/HTML/Element/progress
---

{{HTMLSidebar}}

La etiqueta **HTML `<progress>`** se utiliza para visualizar el progreso de una tarea. Aunque los detalles de como se muestran depende directamente del navegador que utiliza el cliente, aunque básicamente aparece una barra de progreso.

{{InteractiveExample("HTML Demo: &lt;progress&gt;", "tabbed-standard")}}

```html interactive-example
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

- _[Categorias de contenido](/es/docs/Web/HTML/Guides/Content_categories#flujo_de_contenido)_[Flujo de contenido](/es/docs/Web/HTML/Guides/Content_categories#flujo_de_contenido), [contenido de redacción](/es/docs/Web/HTML/Guides/Content_categories#Contenido_de_redacci%C3%B3n), contenido etiquetable, contenido palpable.
- _Contenido permitido_ [Contenido de redacción](/es/docs/Web/HTML/Guides/Content_categories#phrasing_content), pero no debe haber ningún elemento de progreso entre sus descendientes
- _Etiquetas por omisión_ Ninguna, tanto la etiqueta inicial como la final son obligatorias.
- _Elementos padres permitidos_ Cualquier elemento que acepte [contenido de redacción](/es/docs/Web/HTML/Guides/Content_categories#phrasing_content).
- _DOM interfaz_ {{domxref("HTMLProgressElement")}}

## Atributos

Este elemento incluye [Atributos Globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `max`
  - : Este atributo indica la cantidad de trabajo que demorá la carga, se define en el elemento `progress`. Por ejemplo max="100".
- `value`
  - : Este atributo indica que parte de la tarea ya se ha completado o cargado. Debe especificarse un valor entre 0 y `max`, o entre 0 y 1.0 si `max` está omitido. Si al atributo `value` no se le especifica ningún valor, se estara llevando a cabo la tarea sin que el elemento mueste funcionamiento alguno. Por ejemplo si la carga está al 50% será de 0.5 el valor, en el caso de no especificar max.

Puedes usar la propiedad CSS {{ cssxref("orient") }} permite especificar la orientacion de la barra de progreso (horizontal o vertical) con horizontal por defecto. La pseudo-clase {{ cssxref(":indeterminate") }} se puede utiliza para hacer que coincida con las barras de progreso indeterminadas.

## Ejemplo

```html
<progress value="70" max="100">70 %</progress>
```

### Resultado

{{InteractiveExample("HTML Demo: &lt;progress&gt;", "tabbed-standard")}}

```html interactive-example
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```

```css interactive-example
label {
  padding-right: 10px;
  font-size: 1rem;
}
```

En Mac OS X, Se vería como esto:

![progress-1.png](progress-1.png)

En Windows, el resultante sería este:

![progress-firefox.JPG](progress-firefox.jpg)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
