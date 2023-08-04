---
title: Creacion de plugins OpenSearch para Firefox
slug: Web/OpenSearch
---

## OpenSearch

[Firefox 2](/es/Firefox_2) admite el formato de descripción [OpenSearch](http://opensearch.org/) para complementos (_plugins_) de búsqueda. Aquellos complementos que usen [la sintaxis OpenSearch](http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document) son compatibles con Firefox e Internet Explorer 7. Por ello es el formato recomendado para cualquier nuevo desarrollo.

Firefox admite además capacidades de búsqueda adicionales no incluidas en [la sintaxis de descripción OpenSearch](http://www.opensearch.org/Specifications/OpenSearch/1.1#OpenSearch_description_document), tales como las "sugerencias de búsqueda" y el elemento `SearchForm`. Este artículo se centrará en la creación de complementos compatibles con OpenSearch que empleen estas capacidades adicionales de Firefox.

Además, los ficheros de descripción OpenSearch pueden ser anunciados dentro de una página HTML de forma que puedan ser descubiertos automáticamente por el navegador (esto se describe en [Detección automática de motores de búsqueda](#Autodiscovery_of_search_plugins).

Por último, estos complementos, pueden ser instalados mediante código tal y como se describe en [Añadir motores de búsqueda desde páginas web](/es/A%c3%b1adir_motores_de_b%c3%basqueda_desde_p%c3%a1ginas_web).

## El fichero de descripción OpenSearch

El fichero XML que describe un motor de búsqueda es bastante sencillo, tal y como se puede ver en la plantilla básica que se muestra más abajo. Las secciones en negrita deben ser personalizadas basándonos en las necesidades particulares del motor para el que estamos escribiendo nuestro complemento.

```
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
<ShortName>engineName</ShortName>
<Description>engineDescription</Description>
<InputEncoding>inputEncoding</InputEncoding>
<Image width="16" height="16">data:image/x-icon;base64,imageData</Image>
<Url type="text/html" method="method" template="searchURL">
  <Param name="paramName1" value="paramValue1"/>
  ...
  <Param name="paramNameN" value="paramValueN"/>
</Url>
<Url type="application/x-suggestions+json" template="suggestionURL"/>
<moz:SearchForm>searchFormURL</moz:SearchForm>
</OpenSearchDescription>
```

- **ShortName**
  - : Nombre corto para el motor de búsqueda.

<!---->

- **Description**
  - : Descripción del motor de búsqueda.

<!---->

- **InputEncoding**
  - : Codificación de caracteres a emplear en los datos que se envían al motor de búsqueda. Por ejemplo, "UTF-8".

<!---->

- **Image**
  - : Icono de 16x16 codificado en Base-64 que represente al motor de búsqueda. Puedes encontrar una utilidad para generar estos datos en: [The data: URI kitchen](http://software.hixie.ch/utilities/cgi/data/data).

<!---->

- **Url**

  - : Describe la(s) URL(s) a emplear para la búsqueda. El atributo `method` indica si se debe emplear una petición `GET` o `POST` para obtener los resultados.

    > **Nota:** Internet Explorer 7 no admite peticiones `POST`.

    Firefox admite dos tipos de URL en el campo `type`:

    - `type="text/html"` se usa al especificar la URL a donde se va a enviar la petición de búsqueda.
    - `type="application/x-suggestions+json"` se usa al especificar la URL de donde se van a obtener las sugerencias de búsqueda.

    El atributo `template` indica la forma en que se construirá la URL para la consulta. Dentro de este atributo se pueden introducir plantillas que se expanden de forma dinámica; la más habitual es `{searchTerms}`, la cual se expande a los términos de búsqueda introducidos por el usuario en la barra de búsquedas. En [OpenSearch 1.1 parameters](http://www.opensearch.org/Specifications/OpenSearch/1.1/Draft_3#OpenSearch_1.1_parameters) se describen los otros tipos admitidos.

    Para consultas que devuelven sugerencias de búsqueda, la URL descrita en `template` se usa para obtener una lista de sugerencias en el formato JSON (JavaScript Object Notation). Para saber más sobre como incorporar sugerencias de búsqueda en el lado del servidor, ver [Permitir sugerencias en los plugins de búsqueda](/es/Permitir_sugerencias_en_los_plugins_de_b%c3%basqueda).

<!---->

- **Param**

  - : Los parámetros que es necesario suministrar junto con la consulta, en la forma de pares clave/valor. En los valores es posible emplear las plantillas dinámicas presentadas anteriormente; por ejemplo, se puede usar `{searchTerms}` para insertar los términos de búsqueda que el usuario introdujo en la barra de búsquedas.

    > **Nota:** Internet Explorer 7 no admite este elemento.

- **SearchForm**

  - : La URL donde se encuentra la página de búsquedas del sitio al que hace referencia el complemento que estamos desarrollando. Esto permite al usuario acceder directamente al sitio web en cuestión.

    > **Nota:** Dado que este elemento es específico de Firefox y no forma parte de la especificación OpenSearch, en el ejemplo anterior, usamos el prefijo "`moz:`" en el espacio de nombres XML para asegurarnos que otros agentes de usuario que no admiten este elemento puedan ignoralo de forma segura.

## Detección automática de complementos de búsqueda

Un sitio web que ofrezca un complemento de búsqueda puede anunciarlo, de forma que los usuarios de Firefox puedan descargarlo e instalarlo fácilmente.

Para incorporar la detección automática, sólo es necesario añadir una línea a la sección `<head>` de la página:

```
<link rel="search" type="application/opensearchdescription+xml" title="searchTitle" href="pluginURL">
```

Sustituiremos los elementos en itálica tal y como se explica a continuación:

- **searchTitle**
  - : El título de la búsqueda que se va a llevar a cabo; por ejemplo, "Buscar en MDC" o "Búsqueda en Google". Este valor debe coincidir con el `ShortName` de nuestro complemento.

<!---->

- **pluginURL**
  - : La URL que debe emplear el navegador para descargar el fichero XML con la descripción del complemento.

Si tu sitio ofrece múltiples complementos de búsqueda también es posible que el navegador los descubra de forma automática; basta con repetir el `link` las veces que sea necesario. Por ejemplo:

```
<link rel="search" type="application/opensearchdescription+xml" title="MiSitio: Por Autor" href="http://www.misitio.com/autores.xml">
<link rel="search" type="application/opensearchdescription+xml" title="MiSitio: Por Título" href="http://www.misitio.com/titulos.xml">
```

De esta forma podemos ofrecer complementos independientes para buscar tanto por autor como por título.

## Resolución de problemas

Si hay algún error en el fichero XML que describe el complemento, seguramente habrá problemas al añadir en Firefox 2 un complemento descubierto automáticamente. El mensaje de error puede no ser de mucha ayuda, así que los siguientes consejos pueden ayudar a encontrar la causa del problema.

- Asegúrate de que el documento XML de tu complemento está bien formado. Puedes comprobarlo cargando el fichero directamente en Firefox. Los _Ampersands_ en la plantilla de la URL deben ser escapadas con \&amp; y las etiquetas (_tags_) deben ser cerradas con una barra (`/`) al final o con la correspondiente etiqueta de cierre.
- El atributo `xmlns` es importante. Sin él, puedes obtener un mensaje de error indicando que "Firefox no pudo descargar el motor de búsqueda desde: (URL)".
- Ten en cuente que **debes** incluir una URL del tipo `text/html` — los complmentos que sólo incluyan URLs del tipo Atom o [RSS](/es/RSS) (lo cual es válido, pero Firefox no admite) producirán el error "no pudo descargar el motor de búsqueda".
- Los _favicons_ obtenidos remotamente no deben ser mayores de 10KB (ver [Error 361923 en Firefox](https://bugzil.la/361923)).

Adicionalmente, el servicio de complementos de búsqueda suministra un mecanismo de registro (_logging_) que puede ser de utilidad a los desarrolladores de complementos. Usa _about:config_ para establecer la preferencia '`browser.search.log`' al valor `true`. La información de registro aparecerá en la consola de errores de Firefox (Tools->Error Console) cuando se añada un complemento de búsqueda.

## Material de referencia

- [OpenSearch - Documentación oficial](http://opensearch.org/)
- Technorati.com tiene un ejemplo de fichero XML en <http://technorati.com/osd.xml>
- Más información sobre problemas en la detección automática en bugzilla [Error 340208 en Firefox](https://bugzil.la/340208)
- Wikipedia - [`data:` URL](http://es.wikipedia.org/wiki/Data:_URL)
- [Searchy](http://searchy.protecus.de/) - [Crea](http://searchy.protecus.de/en/add2.php) tu propio complemento o usa [la lista de complementos](http://searchy.protecus.de/en/searchbox-add-ons.php).
- [searchplugins.net](http://www.searchplugins.net) - Crea complementos OpenSearch plugins para ser usados con Firefox 2. [Lista de complementos de búsqueda](http://www.searchplugins.net/pluginlist.aspx)
- [Ready2Search](http://ready.to/search/en/) - Crea complementos OpenSearch. [Búsquedas personalizadas a través de Ready2Search](http://ready.to/search/make/en_make_plugin.htm)

Interwiki link
