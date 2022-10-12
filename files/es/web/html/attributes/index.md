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
<p>Los elementos en HTML tienen <strong>atributos</strong>; estos son valores adicionales que configuran los elementos o ajustan su comportamiento de diversas formas para cumplir los criterios de los usuarios.</p>

<h2 id="Lista_de_Atributos">Lista de Atributos</h2>

((Tabla))

<h2 id="Contenido_versus_atributos_IDL">Contenido versus atributos IDL</h2>

<p>En HTML, la mayoria de los atributos tiene dos caras: el <strong>atributo de contenido</strong> y el <strong>atributo IDL</strong></p>

<p>El atributo de contenido es aquel que se define desde el contenido (Codigo HTML) y puedes definirlo u obtenerlo con {{domxref("element.setAttribute()")}} o {{domxref("element.getAttribute()")}}. El atributo de contenido es siempre un string incluso cuando el valor esperado en un integer. Por ejemplo, para definir el maxlength de un {{HTMLElement("input")}} a 42 usando el atributo de contenido, se debe llamar a <code>setAttribute("maxlength", "42") en ese elemento.</code></p>

<p>El atributo IDL, tambien conocido como propiedad JavaScript. Estos son atributos que se pueden leer o definir usando JavaScript como <code>element.foo.</code>. El atributo IDL siempre va a usar (pero puede transformarse) en el atributo de contenido subyacente para retornar un valor cuando lo obtiene y lo guarda en el atributo de contenido cuando es definido. En otras palabras el atributo IDL, en esencia, refleja los atributos de contenido.</p>

<p>La mayoria del tiempo, los atributos IDL pueden retornar sus valores como realmente son usados. Por ejemplo, el <code>type</code> por defecto para los elementos {{HTMLElement("input")}} es "texto", entonces si defines <code>input.type="foobar",</code> el elemento <code>&lt;input&gt;</code> sera de tipo texto (en apariencia y comportamiento) pero el valor del Atributo de contenido "type" sera "foobat". De cualquier manera, el <code>type</code> del atributo IDL retornara el string "text".</p>

<p>Los atributos IDL no son siempre strings; por ejemplo, <code>input.maxlength</code> es un numero (marcado como long). Cuando se usan atributos IDL, lees o defines valores del tipo deseado, entonces <code>input.maxlength </code>siempre retornara un numero y cuando definas <code>input,maxlength</code>, esperara un numero. Si se le entrega otro tipo, se convierte antomaticamente a numero como se especifica en las reglas del  estandar de JavaScript para conversiones de tipo.</p>

<p>Los atributos IDL pueden <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes">reflejar otros tipos</a> como un long sin asignacion, URL's, booleanos, etc. Desafortunadamente no hay reglas claras y el comportamiento que los atributos IDL en conjunto con sus respectivos atributos de contenido depende del mismo atributo. La mayoria del tiempo, siguen <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes">las reglas de diseño en la especificacion</a>, pero algunas veces no lo hacen. Las especificaciones HTML tratan de ser lo mas amigables para el dasarrollador como es posible, pero por varias razones (mayormente historicas), algunos aributos se comportan de forma extraña (<code>select.size</code>, por ejemplo) y debes leer las especificaciones para comprender como éste se comporta exactamente.</p>

<h2 id="Ver_Tambien">Ver Tambien</h2>

<ul>
 <li><a href="/es/docs/Web/HTML/Elemento" title="/es/docs/Web/HTML/Elemento">Elementos</a></li>
</ul>
