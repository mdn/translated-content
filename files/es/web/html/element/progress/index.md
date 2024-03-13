---
title: "<progress>: Elemento indicador de progreso"
slug: Web/HTML/Element/progress
---

{{HTMLSidebar}}

La etiqueta **HTML `<progress>`** se utiliza para visualizar el progreso de una tarea. Aunque los detalles de como se muestran depende directamente del navegador que utiliza el cliente, aunque básicamente aparece una barra de progreso.

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples)and send us a pull request.

- _[Categorias de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido#Flujo_de_contenido)_[Flujo de contenido](/es/docs/Web/Guide/HTML/categorias_de_contenido#Flujo_de_contenido), [contenido de redacción](/es/docs/Web/Guide/HTML/categorias_de_contenido#Contenido_de_redacci%C3%B3n), contenido etiquetable, contenido palpable.
- _Contenido permitido_ [Contenido de redacción](/es/docs/HTML/Content_categories#Phrasing_content), pero no debe haber ningún elemento de progreso entre sus descendientes
- _Etiquetas por omisión_ {{no_tag_omission}}
- _Elementos padres permitidos_ Cualquier elemento que acepte [contenido de redacción](/es/docs/HTML/Content_categories#Phrasing_content).
- _DOM interfaz_ {{domxref("HTMLProgressElement")}}

## Atributos

Este elemento incluye [Atributos Globales](/es/docs/HTML/Global_attributes).

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

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

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
