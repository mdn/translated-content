---
title: Transformando XML con XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
---

### Introducción

La separación del contenido y la presentación es una característica clave en el diseño de [XML](/es/XML). La estructura de un documento XML esta diseñada para reflejar y clarificar relaciones importantes entre los aspectos individuales del contenido en si mismo, sin preocuparse de la forma en que posteriormente se visualizaran los datos. Una estructuración inteligente es particularmente importante cuando cada día se realizan más conexiones entre máquinas muy diferentes a través de la red.

Finalmente, gran parte del contenido almacenado en los documentos XML será mostrado al lector (humano). Dado que el navegador proporciona un interfaz conocido y flexible al usuario, es el mecanismo ideal para presentar los contenidos en XML. Construido él mismo usando numerosas tecnologías XML, Mozilla incluye todos los mecanismos necesarios para procesar tanto los documentos XML originales, como las hojas de transformación utilizadas para formatearlo y mostrarlo en HTML. Al mismo tiempo se reduce la carga del servidor, dado que el procesamiento se produce en el lado del cliente.

Actualmente, Gecko (el motor de visualización que utilizan Mozilla y Firefox) soporta dos tipos de hojas de estilo para XML. Para el control básico de la apariencia (como fuentes, colores, posición, etc...) Gecko utiliza [CSS](/es/CSS), parecido al [DHTML](/es/DHTML). Todo CSS1 y la mayor parte de CSS2 están soportados. El soporte para el estándar CSS3 está en desarrollo. Para más información sobre CSS, véase [Eric Meyer's CSS pages](http://www.meyerweb.com/eric/css/). Para una introducción de CSS1 y Netscape, véase [Browser Central page](http://home.netscape.com/browsers/future/standards.html#1).

El segundo tipo de hojas de transformación que soporta Gecko son las hojas de estilo XSLT, eXtensible Stylesheet Language/Transform. XSLT permite al autor de una hoja de estilo transformar un documento original XML de dos formas: manipulando y ordenando el contenido (incluyendo una reordenación general de éste si es necesario), y transformando el contenido en distintos formatos (en el caso de Netscape, se convierte al vuelo en HTML para ser mostrado por el navegador).

### Referencia de XSLT/XPath

#### [Elementos](/es/XSLT/Elementos)

- [xsl:apply-imports](/es/XSLT/apply-imports) _(soportado)_
- [xsl:apply-templates](/es/XSLT/apply-templates) _(soportado)_
- [xsl:attribute](/es/XSLT/attribute) _(soportado)_
- [xsl:attribute-set](/es/XSLT/attribute-set) _(soportado)_
- [xsl:call-template](/es/XSLT/call-template) _(soportado)_
- [xsl:choose](/es/XSLT/choose) _(soportado)_
- [xsl:comment](/es/XSLT/comment) _(soportado)_
- [xsl:copy](/es/XSLT/copy) _(soportado)_
- [xsl:copy-of](/es/XSLT/copy-of) _(soportado)_
- [xsl:decimal-format](/es/XSLT/decimal-format) _(soportado)_
- [xsl:element](/es/XSLT/element) _(soportado)_
- [xsl:fallback](/es/XSLT/fallback) _(no soportado)_
- [xsl:for-each](/es/XSLT/for-each) _(soportado)_
- [xsl:if](/es/XSLT/if) _(soportado)_
- [xsl:import](/es/XSLT/import) _(soportado en la mayoría de casos)_
- [xsl:include](/es/XSLT/include) _(soportado)_
- [xsl:key](/es/XSLT/key) _(soportado)_
- [xsl:message](/es/XSLT/message) _(soportado)_
- [xsl:namespace-alias](/es/XSLT/namespace-alias) _(no soportado)_
- [xsl:number](/es/XSLT/number) _(parcialmente soportado)_
- [xsl:otherwise](/es/XSLT/otherwise) _(soportado)_
- [xsl:output](/es/XSLT/output) _(parcialmente soportado)_
- [xsl:param](/es/XSLT/param) _(soportado)_
- [xsl:preserve-space](/es/XSLT/preserve-space) _(soportado)_
- [xsl:processing-instruction](/es/XSLT/processing-instruction)
- [xsl:sort](/es/XSLT/sort) _(soportado)_
- [xsl:strip-space](/es/XSLT/strip-space) _(soportado)_
- [xsl:stylesheet](/es/XSLT/stylesheet) _(parcialmente soportado)_
- [xsl:template](/es/XSLT/template) _(soportado)_
- [xsl:text](/es/XSLT/text) _(parcialmente supported)_
- [xsl:transform](/es/XSLT/transform) _(soportado)_
- [xsl:value-of](/es/XSLT/value-of) _(parcialmente soportado)_
- [xsl:variable](/es/XSLT/variable) _(soportado)_
- [xsl:when](/es/XSLT/when) _(soportado)_
- [xsl:with-param](/es/XSLT/with-param) _(soportado)_

#### [Ejes](/es/XPath/Ejes)

- [ancestor](/es/XPath/Ejes/ancestor)
- [ancestor-or-self](/es/XPath/Ejes/ancestor-or-self)
- [attribute](/es/XPath/Ejes/attribute)
- [child](/es/XPath/Ejes/child)
- [descendant](/es/XPath/Ejes/descendant)
- [descendant-or-self](/es/XPath/Ejes/descendant-or-self)
- [following](/es/XPath/Ejes/following)
- [following-sibling](/es/XPath/Ejes/following-sibling)
- [namespace](/es/XPath/Ejes/namespace) _(no soportado)_
- [parent](/es/XPath/Ejes/parent)
- [preceding](/es/XPath/Ejes/preceding)
- [preceding-sibling](/es/XPath/Ejes/preceding-sibling)
- [self](/es/XPath/Ejes/self)

#### [Funciones](/es/XPath/Funciones)

- [boolean()](/es/XPath/Funciones/boolean) _(soportado)_
- [ceiling()](/es/XPath/Funciones/ceiling) _(soportado)_
- [concat()](/es/XPath/Funciones/concat) _(soportado)_
- [contains()](/es/XPath/Funciones/contains) _(soportado)_
- [count()](/es/XPath/Funciones/count) _(soportado)_
- [current()](/es/XPath/Funciones/current) _(soportado)_
- [document()](/es/XPath/Funciones/document) _(soportado)_
- [element-available()](/es/XPath/Funciones/element-available) _(soportado)_
- [false()](/es/XPath/Funciones/false) _(soportado)_
- [floor()](/es/XPath/Funciones/floor) _(soportado)_
- [format-number()](/es/XPath/Funciones/format-number) _(soportado)_
- [function-available()](/es/XPath/Funciones/function-available) _(soportado)_
- [generate-id()](/es/XPath/Funciones/generate-id) _(soportado)_
- [id()](/es/XPath/Funciones/id) _(parcialmente soportado)_
- [key()](/es/XPath/Funciones/key) _(soportado)_
- [lang()](/es/XPath/Funciones/lang) _(soportado)_
- [last()](/es/XPath/Funciones/last) _(soportado)_
- [local-name()](/es/XPath/Funciones/local-name) _(soportado)_
- [name()](/es/XPath/Funciones/name) _(soportado)_
- [namespace-uri()](/es/XPath/Funciones/namespace-uri) _(soportado)_
- [normalize-space()](/es/XPath/Funciones/normalize-space) _(soportado)_
- [not()](/es/XPath/Funciones/not) _(soportado)_
- [number()](/es/XPath/Funciones/number) _(soportado)_
- [position()](/es/XPath/Funciones/position) _(soportado)_
- [round()](/es/XPath/Funciones/round) _(soportado)_
- [starts-with()](/es/XPath/Funciones/starts-with) _(soportado)_
- [string()](/es/XPath/Funciones/string) _(soportado)_
- [string-lenght()](/es/XPath/Funciones/string-length) _(soportado)_
- [substring()](/es/XPath/Funciones/substring) _(soportado)_
- [substring-after()](/es/XPath/Funciones/substring-after) _(soportado)_
- [substring-before()](/es/XPath/Funciones/substring-before) _(soportado)_
- [sum()](/es/XPath/Funciones/sum) _(soportado)_
- [system-property()](/es/XPath/Funciones/system-property) _(soportado)_
- [translate()](/es/XPath/Funciones/translate) _(soportado)_
- [true()](/es/XPath/Funciones/true) _(soportado)_
- [unparsed-entity-url()](/es/XPath/Funciones/unparsed-entity-url) _(no soportado)_

### [Para futuras lecturas](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas)

- [Libros](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas#Libros)
- [Online](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas#Online)

  - [El Consorcio del amplio mundo de la Web](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas#El_Consorcio_del_Mundo_de_la_Web)
  - [Portales](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas#Portales)
  - [Artículos](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas#Art.C3.ADculos)
  - [Tutoriales/Ejemplos](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas#Tutoriales.2FEjemplos)
  - [Listas de mails/Grupos de noticias](/es/Transformando_XMLcon_XSLT/Para_Futuras_Lecturas#Listas_de_mails.2FGrupos_de_noticias)

### [Índice](/es/Transformando_XML_con_XSLT/Indice)

### Información original del documento

- Copyright Information: Copyright © 2001-2003 Netscape. All rights reserved.
- Note: This reprinted article was originally part of the DevEdge site.

Categorías

enlaces interwikis
