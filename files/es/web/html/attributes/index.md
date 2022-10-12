---
title: Referencia de Atributos HTML
slug: Web/HTML/Attributes
tags:
  - HTML
  - Referencia
  - Web
  - atributo
translation_of: Web/HTML/Attributes
original_slug: Web/HTML/Atributos
---
Los elementos en HTML tienen **atributos**; estos son valores adicionales que configuran los elementos o ajustan su comportamiento de diversas formas para cumplir los criterios de los usuarios.

## Lista de Atributos

((Tabla))

## Contenido versus atributos IDL

En HTML, la mayoria de los atributos tiene dos caras: el **atributo de contenido** y el **atributo IDL**

El atributo de contenido es aquel que se define desde el contenido (Codigo HTML) y puedes definirlo u obtenerlo con {{domxref("element.setAttribute()")}} o {{domxref("element.getAttribute()")}}. El atributo de contenido es siempre un string incluso cuando el valor esperado en un integer. Por ejemplo, para definir el maxlength de un {{HTMLElement("input")}} a 42 usando el atributo de contenido, se debe llamar a `setAttribute("maxlength", "42") en ese elemento.`

El atributo IDL, tambien conocido como propiedad JavaScript. Estos son atributos que se pueden leer o definir usando JavaScript como `element.foo.`. El atributo IDL siempre va a usar (pero puede transformarse) en el atributo de contenido subyacente para retornar un valor cuando lo obtiene y lo guarda en el atributo de contenido cuando es definido. En otras palabras el atributo IDL, en esencia, refleja los atributos de contenido.

La mayoria del tiempo, los atributos IDL pueden retornar sus valores como realmente son usados. Por ejemplo, el `type` por defecto para los elementos {{HTMLElement("input")}} es "texto", entonces si defines `input.type="foobar",` el elemento `<input>` sera de tipo texto (en apariencia y comportamiento) pero el valor del Atributo de contenido "type" sera "foobat". De cualquier manera, el `type` del atributo IDL retornara el string "text".

Los atributos IDL no son siempre strings; por ejemplo, `input.maxlength` es un numero (marcado como long). Cuando se usan atributos IDL, lees o defines valores del tipo deseado, entonces `input.maxlength`siempre retornara un numero y cuando definas `input,maxlength`, esperara un numero. Si se le entrega otro tipo, se convierte antomaticamente a numero como se especifica en las reglas del estandar de JavaScript para conversiones de tipo.

Los atributos IDL pueden [reflejar otros tipos](http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes) como un long sin asignacion, URL's, booleanos, etc. Desafortunadamente no hay reglas claras y el comportamiento que los atributos IDL en conjunto con sus respectivos atributos de contenido depende del mismo atributo. La mayoria del tiempo, siguen [las reglas de diseño en la especificacion](http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes), pero algunas veces no lo hacen. Las especificaciones HTML tratan de ser lo mas amigables para el dasarrollador como es posible, pero por varias razones (mayormente historicas), algunos aributos se comportan de forma extraña (`select.size`, por ejemplo) y debes leer las especificaciones para comprender como éste se comporta exactamente.

## Ver Tambien

- [Elementos](/es/docs/Web/HTML/Elemento)
