---
title: Actualizar aplicaciones web para Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
---

{{FirefoxSidebar}}

Existen varios cambios en el próximo Firefox 3 que pueden afectar tu sitio web o aplicación web, así como nuevas características que se pueden aprovechar. Este artículo servirá como punto de partida para actualizar el contenido web de modo que se pueda aprovechar Firefox 3 al máximo.

### Cambios DOM

Nodes from external documents should be cloned using [`document.importNode()`](/es/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/es/docs/Web/API/Document/adoptNode)) before they
can be inserted into the current document. For more on the [`Node.ownerDocument`](/es/docs/Web/API/Node/ownerDocument) issues, see the
[W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many
sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for
improved future compatibility.

### Cambios HTML

#### Cambios en el conjunto de caracteres de herencia

Firefox 3 cierra un fallo en la seguridad en frames e iframes que les permitía heredar el conjunto de caracteres de donde eran derivadas. Esto podría causar problemas en ciertos casos. Ahora, las frames están solamente permitidas a heredar el conjunto de caracteres si ambos frames y el conjunto de caracteres fue cargado del mismo servidor. Si tienes páginas que asumen que las frames fueron cargadas de otro servidor heredará el mismo conjunto de caracteres, deberías actualizar los HTML de las frames para indicar el conjunto de caracteres específicamente.

#### Cambios en el elemento SCRIPT

Ahora hay que cerrar el elemento \<script> en `text/html` con \</script> en los documentos de HTML 4, incluso si no hay contenido dentro. En las versiones previas de Firefox, bastaba con hacer:

```
<script ...   />
```

Ahora se deben cumplir las especificaciones de HTML (si se trata de un HTML), y por lo tanto se deben cerrar, así:

```
<script ...></script>
```

Esto mejora tanto la compatibilidad como la seguridad.

### Cambios en CSS

#### Cambio al tamaño de fuente basado en unidades em, ex

Los valores de fuente en unidades em y ex solían ser afectadas por el tamaño mínimo de fuente utilizado por el usuario: si una fuente se desplegaba más grande debido al tamaño mínimo, el ajuste de las unidades em y ex para el tamaño de fuente basados en esta se incrementarían de forma acorde. Esto era inconsistente con la forma en que las fuentes basadas en porcentaje se comportaban.

Los valores del tamaño de fuente en unidades em y ex ahora están basadas en un "tamaño de fuente intencionado" que no se ve afectado por el tamaño mínimo de fuente del usuario. En otras palabras, los tamaños de la fuente se calculan de acuerdo a las intenciones del diseñador y se ajustan al tamaño mínimo de fuente después de ello.

Ver [Error 322943 en Firefox](https://bugzil.la/322943) para una demostración (se debe ver con un tamaño mínimo de fuente 6 para detectar la diferencia: las dos cajas en cascada se comportan diferente en Firefox 2, porque el tamaño de fuente basado en em "retorna" el tamaño mínimo de fuente.

### Cambios de seguridad

#### Acceso Chrome

En versiones anteriores de Firefox, cualquier página web podía cargar scripts o imágenes `chrome://` usando el protocolo chrome. Entre otras cosas, esto hizo posible que algunos sitios no detectaran la presencia de complementos, lo cual podía ser usado para traspasar la seguridad del usuario saltando los complementos que agregaban medidas de seguridad al buscador.

Firefox 3 solo permite contenido web para acceder a los elementos en los espacios del `chrome://browser/` y en espacio chrome://toolkit/. Estos archivos pretenden ser accesibles por el contenido web. Ahora cualquier otro contenido chrome es bloqueado para el sitio web.

Hay, sin embargo, métodos para ciertas extensiones que puden ser accedidos por la web. Se puede especificar una bandera en su archivo chrome.manifest de esta manera:

```
content mypackage location/ contentaccessible=yes
```

Esto no debería ser algo que se haga muy seguido, pero está disponible para aquellos casos raros en los que es necesario. Debe tomarse en cuenta que es posible que Firefox alerte al usuario que su extensión utiliza una bandera en el contentaccessible de alguna manera, ya que consituye un riesgo potencial en la seguridad.

> **Nota:** Ya que Firefox 2 no entiende la bandera `contentaccessible` (ignorará la instrucción completa de que contiene la bandera), si se desea que el complemento sea compatible con Firefox 2 y Firefox 3, hay que hacer algo como esto:
>
> ```
> content mypackage location/
> content mypackage location/ contentaccessible=yes
> ```

#### Campos para subir archivos

En versiones anteriores de Firefox, había casos en los que cuando el usuario seleccionaba un archivo para subir, la aplicación web podía ver la ruta completa del archivo. Esta pertinencia de privacidad ha sido resuelta en Firefox 3; ahora la aplicación web solo mostrará el nombre del archivo.

### Cambios en JavaScript

Firefox 3 soporta [JavaScript 1.8](/en/New_in_JavaScript_1.8). Un cambio importante que quizás requiera actualizaciones en los sitios web o en las aplicaciones, es que los Script obsoletos y no-estandar no son soportados. Esto no es la etiqueta `<script>`, pero un objeto de JavaScript que nunca fue estandarizado. De cualquier manera es muy improbable que se use, así que probablemente no surgan problemas.

### Vea también

- [Firefox 3 para desarrolladores](/es/Firefox_3_for_developers) [Nuevo en JavaScript 1.8](/es/New_in_JavaScript_1.8) [Actualizando extensiones para Firefox 3](/es/Updating_extensions_for_Firefox_3)
