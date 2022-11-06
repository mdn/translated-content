---
title: data-*
slug: Web/HTML/Global_attributes/data-*
translation_of: Web/HTML/Global_attributes/data-*
original_slug: Web/HTML/Atributos_Globales/data-*
---
> **Nota:** {{HTMLSidebar("Global_attributes")}}

Los [atributos globales](/es/docs/Web/HTML/Atributos_Globales) **data-\*** forman una clase de atributos , llamados atributos de datos modificables , permite a la información propietaria ser intercambiada entre el [HTML](/es/docs/Web/HTML) y su representación en el [DOM](/es/docs/Referencia_DOM_de_Gecko) que puede ser usada por scripts . Todos esos datos modificables están disponibles a través de la interface del elemento {{domxref("HTMLElement")}} , el atributo se establece encendido . La propiedad {{domxref("HTMLElement.dataset")}} otorga acceso a ellos .

El \* puede ser remplazado por cualquier nombre siguiedo las [reglas de producción de nombres xml](http://www.w3.org/TR/REC-xml/#NT-Name) con las siguientes restricciones :

- el nombre no debe de empezar con `xml` , cualquiera sea el caso usado para estas letras.
- el nombre no debe de contener algún punto y coma (`U+003A`) .
- el nombre no debe de contener letras mayúsculas de la A a la Z .

Notar que la propiedad {{domxref("HTMLElement.dataset")}} es un {{domxref("StringMap")}} y que el nombre del atributo de datos modificable*data-test-value* será accesible a través de `HTMLElement.dataset.testValue` como cualquier guión (`U+002D`) es reemplazado por la versión en mayúscula de la siguiente letra (camelcase) .

## Especificaciones

| Especificación                                                                                                                                       | Estatus                          | Comentario                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}} | {{Spec2('HTML WHATWG')}} | Sin cambio desde el último snapshot, {{SpecName('HTML5.1')}}                               |
| {{SpecName('HTML5.1', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}         | {{Spec2('HTML5.1')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, sin cambio desde {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', "dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes", "data-*")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot de {{SpecName('HTML WHATWG')}}, definición inicial.                               |

## Compatibilidad en exploradores

{{Compat("html.global_attributes.data_attributes")}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales) .
- La propiedad {{domxref("HTMLElement.dataset")}} que permite el acceso y modifica estos valores .
