---
title: ¿Qué es una URL?
slug: Learn_web_development/Howto/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 0b9a7f55285ab727f5e14f6d983f2812c70d62d1
---

Este artículo habla sobre las URL (localizador uniforme de recursos), explicando qué son y cómo están estructuradas.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Primero necesitas saber
        <a href="/es/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >cómo funciona Internet</a
        >,
        <a href="/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >qué es un servidor web</a
        >
        y
        <a href="/es/docs/Learn_web_development/Howto/Web_mechanics/What_are_hyperlinks"
          >los conceptos detrás de los enlaces en la web</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprenderás qué es una URL y cómo funciona en la Web.</td>
    </tr>
  </tbody>
</table>

## Resumen

Una **URL** (Localizador Uniforme de Recursos) es la dirección de un recurso único en internet. Es uno de los mecanismos clave que usan los {{Glossary("Browser","navegadores")}} para obtener recursos publicados, como páginas HTML, documentos CSS, imágenes, etc.

En teoría, cada URL válida apunta a un recurso único. En la práctica, existen algunas excepciones, siendo la más común una URL que apunta a un recurso que ya no existe o que se movió. Como el recurso representado por la URL y la URL misma son gestionados por el servidor web, es responsabilidad del propietario del servidor web administrar cuidadosamente ese recurso y su URL asociada.

## Aspectos básicos: anatomía de una URL

Estos son algunos ejemplos de URL:

```plain
https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
```

Cualquiera de esas URL puede escribirse en la barra de direcciones de tu navegador para indicarle que cargue el recurso asociado, que en los tres casos es una página web.

Una URL está compuesta de diferentes partes, algunas obligatorias y otras opcionales. Las partes más importantes se resaltan en la siguiente URL (los detalles se explican en las secciones siguientes):

![URL completa](mdn-url-all.png)

> [!NOTE]
> Puedes pensar en una URL como una dirección postal común: el _esquema_ representa el servicio postal que quieres usar, el _nombre de dominio_ es la ciudad o el pueblo, y el _puerto_ es como el código postal; la _ruta_ representa el edificio a donde debe entregarse tu correo; los _parámetros_ representan información adicional, como el número del apartamento en el edificio; y, finalmente, el _ancla_ representa a la persona a la que realmente le dirigiste tu correo.

> [!NOTE]
> Existen [algunas partes y reglas adicionales](https://en.wikipedia.org/wiki/Uniform_Resource_Locator) sobre las URL, pero no son relevantes para usuarios comunes ni para desarrolladores web. No te preocupes por esto, no necesitas conocerlas para construir y usar URL completamente funcionales.

## Esquema

![Esquema](mdn-url-protocol@x2_update.png)

La primera parte de la URL es el _esquema_, que indica el protocolo que el navegador debe usar para solicitar el recurso (un protocolo es un método establecido para intercambiar o transferir datos dentro de una red de computadoras). Por lo general, para los sitios web el protocolo es HTTPS o HTTP (su versión sin cifrar). Para direccionar páginas web se requiere uno de estos dos, pero los navegadores también saben manejar otros esquemas, como `mailto:` (para abrir un cliente de correo), así que no te sorprendas si ves otros protocolos.

## Autoridad

![Autoridad](mdn-url-authority.png)

A continuación viene la _autoridad_, que se separa del esquema por el patrón de caracteres `://`. Cuando está presente, la autoridad incluye tanto el _dominio_ (por ejemplo, `www.example.com`) como el _puerto_ (`80`), separados por dos puntos:

- El dominio indica a qué servidor web se está solicitando. Por lo general es un [nombre de dominio](/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name), pero también se puede usar una {{Glossary("IP address", "dirección IP")}} (aunque esto es poco frecuente, ya que resulta mucho menos conveniente).
- El puerto indica la "puerta" técnica que se usa para acceder a los recursos del servidor web. Por lo general se omite si el servidor web usa los puertos estándar del protocolo HTTP (80 para HTTP y 443 para HTTPS) para dar acceso a sus recursos. De lo contrario, es obligatorio.

> [!NOTE]
> El separador entre el esquema y la autoridad es `://`. Los dos puntos separan el esquema de la siguiente parte de la URL, mientras que `//` indica que la siguiente parte de la URL es la autoridad.
>
> Un ejemplo de URL que no usa autoridad es el cliente de correo (`mailto:foobar`). Contiene un esquema pero no usa un componente de autoridad. Por lo tanto, los dos puntos no van seguidos de dos barras, sino que solo actúan como delimitador entre el esquema y la dirección de correo.

## Ruta al recurso

![Ruta al archivo](mdn-url-path@x2.png)

`/path/to/myfile.html` es la ruta al recurso en el servidor web. En los primeros días de la Web, una ruta como esta representaba la ubicación física de un archivo en el servidor web. Hoy en día, es sobre todo una abstracción que gestionan los servidores web sin ninguna realidad física.

## Parámetros

![Parámetros](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2` son parámetros adicionales que se le entregan al servidor web. Esos parámetros son una lista de pares clave/valor separados con el símbolo `&`. El servidor web puede usar esos parámetros para hacer procesamiento adicional antes de devolver el recurso. Cada servidor web tiene sus propias reglas respecto a los parámetros, y la única forma confiable de saber si un servidor web en particular maneja parámetros es preguntándole al propietario del servidor web.

## Ancla

![Ancla](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument` es un ancla hacia otra parte del recurso mismo. Un ancla representa una especie de "marcador" dentro del recurso, que le indica al navegador cómo mostrar el contenido ubicado en ese punto "marcado". En un documento HTML, por ejemplo, el navegador se desplazará hasta el punto donde está definido el ancla; en un documento de video o audio, el navegador intentará ir al momento que representa el ancla. Vale la pena señalar que la parte después del **#**, también conocida como **identificador de fragmento**, nunca se envía al servidor junto con la solicitud.

## Cómo usar las URL

Cualquier URL se puede escribir directamente en la barra de direcciones del navegador para llegar al recurso que representa. ¡Pero esto es solo la punta del iceberg!

El lenguaje {{Glossary("HTML")}} (consulta [Estructurar el contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content)) hace un uso extensivo de las URL:

- para crear enlaces a otros documentos con el elemento {{HTMLElement("a")}};
- para enlazar un documento con sus recursos relacionados mediante distintos elementos como {{HTMLElement("link")}} o {{HTMLElement("script")}};
- para mostrar contenido multimedia como imágenes (con el elemento {{HTMLElement("img")}}), videos (con el elemento {{HTMLElement("video")}}), sonidos y música (con el elemento {{HTMLElement("audio")}}), etc.;
- para mostrar otros documentos HTML con el elemento {{HTMLElement("iframe")}}.

> [!NOTE]
> Al especificar URL para cargar recursos como parte de una página (como al usar `<script>`, `<audio>`, `<img>`, `<video>`, y similares), por lo general solo deberías usar URL HTTP y HTTPS, con pocas excepciones (una notable es `data:`; consulta [URL de datos](/es/docs/Web/URI/Reference/Schemes/data)). Usar FTP, por ejemplo, no es seguro y ya no es compatible con los navegadores modernos.

Otras tecnologías, como {{Glossary("CSS")}} o {{Glossary("JavaScript")}}, hacen un uso extensivo de las URL, y estas son realmente el corazón de la Web.

## URL absolutas vs. URL relativas

Lo que vimos arriba se llama una _URL absoluta_, pero también existe algo llamado _URL relativa_. El [estándar de URL](https://url.spec.whatwg.org/#absolute-url-string) define ambas, aunque usa los términos [_cadena de URL absoluta_](https://url.spec.whatwg.org/#absolute-url-string) y [_cadena de URL relativa_](https://url.spec.whatwg.org/#relative-url-string), para distinguirlas de los [objetos URL](https://url.spec.whatwg.org/#url) (que son representaciones en memoria de las URL).

Examinemos qué significa la distinción entre _absoluta_ y _relativa_ en el contexto de las URL.

Las partes obligatorias de una URL dependen en gran medida del contexto en el que se usa la URL. En la barra de direcciones de tu navegador, una URL no tiene ningún contexto, así que debes proporcionar una URL completa (o _absoluta_), como las que vimos arriba. No necesitas incluir el protocolo (el navegador usa HTTP de forma predeterminada) ni el puerto (que solo se requiere cuando el servidor web de destino usa algún puerto inusual), pero todas las demás partes de la URL son necesarias.

Cuando una URL se usa dentro de un documento, como en una página HTML, las cosas son un poco diferentes. Como el navegador ya conoce la URL propia del documento, puede usar esa información para completar las partes faltantes de cualquier URL disponible dentro de ese documento. Podemos diferenciar entre una _URL absoluta_ y una _URL relativa_ mirando solo la parte de la _ruta_ de la URL. Si la parte de la ruta comienza con el carácter `/`, el navegador obtendrá ese recurso desde la raíz del servidor, sin referencia al contexto que da el documento actual.

Veamos algunos ejemplos para dejarlo más claro. Supongamos que las URL se definen desde dentro del documento ubicado en la siguiente URL: `https://developer.mozilla.org/en-US/docs/Learn_web_development`.

`https://developer.mozilla.org/en-US/docs/Learn_web_development` en sí misma es una URL absoluta. Tiene todas las partes necesarias para ubicar el recurso al que apunta.

Todas las siguientes URL son URL relativas:

- URL relativa al esquema: `//developer.mozilla.org/en-US/docs/Learn_web_development` — solo falta el protocolo. El navegador usará el mismo protocolo que se usó para cargar el documento que aloja esa URL.
- URL relativa al dominio: `/en-US/docs/Learn_web_development` — faltan tanto el protocolo como el nombre de dominio. El navegador usará el mismo protocolo y el mismo nombre de dominio que se usaron para cargar el documento que aloja esa URL.
- Subrecursos: `Howto/Web_mechanics/What_is_a_URL` — faltan el protocolo y el nombre de dominio, y la ruta no comienza con `/`. El navegador intentará encontrar el documento en un subdirectorio del que contiene el recurso actual. En este caso, realmente queremos llegar a esta URL: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL`.
- Retroceder en el árbol de directorios: `../Web/CSS/Reference` — faltan el protocolo y el nombre de dominio, y la ruta comienza con `..`. Esto se hereda del mundo de sistemas de archivos UNIX, para indicarle al navegador que queremos subir un nivel. Aquí queremos llegar a esta URL: `https://developer.mozilla.org/en-US/docs/Learn_web_development/../Web/CSS/Reference`, que se puede simplificar a: `https://developer.mozilla.org/en-US/docs/Web/CSS/Reference`.
- Solo ancla: `#semantic_urls` — faltan todas las partes excepto el ancla. El navegador usará la URL del documento actual y reemplazará o agregará la parte del ancla. Esto es útil cuando quieres enlazar a una parte específica del documento actual.

## Nombres de usuario y contraseñas en la URL

Menos común que las partes de la URL vistas anteriormente, es posible que veas un nombre de usuario y una contraseña incluidos en las URL.

Por ejemplo:

```plain
https://username:password@www.example.com:80/
```

Cuando se incluyen, el nombre de usuario y la contraseña se colocan entre los caracteres `://` y la autoridad, con dos puntos entre ambos y un signo de arroba (`@`) al final.

Se puede incluir un nombre de usuario y una contraseña en la URL al acceder a sitios web que usan el mecanismo de seguridad de [autenticación HTTP](/es/docs/Web/HTTP/Guides/Authentication), para iniciar sesión de inmediato en un sitio web y saltarse el cuadro de diálogo de usuario/contraseña que de otro modo aparecería para ingresar tus credenciales.

Aunque todavía puedes ver este mecanismo usado en la práctica, está obsoleto por razones de seguridad, y los sitios web modernos suelen usar otros mecanismos de autenticación. Consulta [Acceder usando credenciales en la URL](/es/docs/Web/HTTP/Guides/Authentication#acceso_usando_credenciales_en_la_url) para más detalles.

## URL semánticas

A pesar de su marcado carácter técnico, las URL representan un punto de entrada legible para las personas hacia un sitio web. Se pueden memorizar, y cualquiera puede escribirlas en la barra de direcciones de un navegador. Las personas están en el centro de la Web, por lo que se considera una buena práctica construir lo que se conoce como [_URL semánticas_](https://en.wikipedia.org/wiki/Semantic_URL). Las URL semánticas usan palabras con significado propio que cualquiera puede entender, sin importar sus conocimientos técnicos.

Por supuesto, la semántica lingüística es irrelevante para las computadoras. Seguramente has visto muchas veces URL que parecen una mezcla de caracteres aleatorios. Pero crear URL legibles para las personas tiene muchas ventajas:

- Te resulta más fácil manipularlas.
- Le aclara las cosas a los usuarios en cuanto a dónde están, qué están haciendo, qué están leyendo o con qué están interactuando en la Web.
- Algunos motores de búsqueda pueden usar esa semántica para mejorar la clasificación de las páginas asociadas.

## Véase también

[URL de datos](/es/docs/Web/URI/Reference/Schemes/data): URL con el prefijo del esquema `data:`, que permite a los creadores de contenido incrustar archivos pequeños directamente en los documentos.
