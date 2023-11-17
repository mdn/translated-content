---
title: Crear hipervínculos
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

Los hipervínculos (o enlaces) son elementos verdaderamente importantes — son los que hacen que la web sea _**web**_. Este artículo expone la sintaxis necesaria para crear un enlace, además contiene un catálogo de buenas prácticas para crearlos.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Estar familiarizado con HTML, cubierto en
        [Empezar con HTML](/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started).
        Aplicación de formato a texto en documentos HTML, según lo expuesto en
        la sección
        [fundamentos de texto HTML](/es/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a implementar un <em>hipervínculo</em> de forma efectiva y
        enlazar múltiples archivos.
      </td>
    </tr>
  </tbody>
</table>

## ¿Qué es un hipervínculo?

Los hipervínculos son una de las innovaciones más interesantes que ofrece la Web. Han formado parte de esta desde el principio, pero hacen que la web sea _web_ : Los hipervínculos nos permiten vincular documentos a otros documentos o recursos, vincular a partes específicas de documentos o hacer que las aplicaciones estén disponibles en una dirección web. Prácticamente cualquier contenido web se puede convertir en un enlace que, al pulsarlo (activarlo), dirija el navegador a la dirección web a la que apunta el enlace ({{Glossary("URL")}}).

> **Nota:** Una URL puede apuntar a archivos HTML, archivos de texto, imágenes, documentos de texto, archivos de audio o vídeo, y cualquier otra cosa que se pueda mostrar en la web. Si el navegador no sabe cómo manejar el archivo, te preguntará si lo quieres abrir (en cuyo caso la tarea de abrirlo y manejarlo se transferirá a la aplicación nativa instalada en el dispositivo) o si lo quieres descargar (en cuyo caso podrás ocuparte de él más tarde).

El sitio web de la BBC, por ejemplo, contiene una gran cantidad de enlaces que apuntan a multitud de noticias en diferentes zonas de el sitio (funcionalidad de navegación), zonas de acceso/registro (herramientas de usuario) y otras.

![Portada de bbc.co.uk, que muestra muchas noticias y la funcionalidad del menú de navegación](updated-bbc-website.png)

## Anatomía de un enlace

Un enlace básico se crea incluyendo el texto (o cualquier otro contenido, ve [Convertir bloques de contenido en enlaces](#convertir_bloques_de_contenido_en_enlaces)), que queramos convertir en un enlace usando un elemento ancla {{HTMLElement("a")}}, dándole un atributo [`href`](/es/docs/Web/HTML/Element/a#href) (también conocido como «**_Hypertext Reference_**», «**_target_**» u **objetivo**) que contendrá la dirección web hacia dónde queremos que apunte el enlace.

```html
<p>
  Crea un enlace a
  <a href="https://www.mozilla.org/es-ES/">la página de inicio de Mozilla</a>.
</p>
```

Este código producirá el siguiente resultado:

Crea un enlace a <a class="ignore-external" href="https://www.mozilla.org/es-ES/">la página de inicio de Mozilla</a>.

### Añadir información de asistencia con el atributo `title`

Otro atributo que posiblemente quieras agregar a tus enlaces es `title`. El título contiene información adicional sobre el enlace, como qué tipo de información contiene la página o cosas que debes tener en cuenta en el sitio web.

```html
<p>
  Crea un enlace a
  <a
    href="https://www.mozilla.org/es-ES/"
    title="El mejor lugar para encontrar más información acerca de la misión de Mozilla
          y cómo contribuir"
    >la página de inicio de Mozilla</a
  >.
</p>
```

Este código producirá el siguiente resultado (el título se mostrará al pasar el ratón sobre el texto del enlace):

Crea un enlace a [la página de inicio de Mozilla](https://www.mozilla.org/es-ES/).

> **Nota:** El título de un enlace solo será visible al pasar el ratón por encima, lo cual significa que los usuarios que naveguen usando los controles de sus teclados, o pantallas táctiles, tendrán dificultades para acceder a la información proporcionada por el título. Si la información del título es verdaderamente importante para el uso de la página, deberemos presentar el título de manera que sea accesible a todos los usuarios, por ejemplo incluyéndola como parte del texto del enlace.

### Aprendizaje activo: crea tu propio ejemplo de enlace

Es momento del aprendizaje activo — crea un documento HTML con tu editor de código (nuestra [plantilla de aprendizaje](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) te hará la tarea más llevadera).

- En el cuerpo del HTML (`body`), añade uno o más párrafos o cualquier otro tipo de contenido de los que ya conoces.
- Convierte algún texto en enlaces.
- Incluye atributos de título (`title`).

### Convertir bloques de contenido en enlaces

Como hemos mencionado anteriormente, puedes convertir cualquier contenido en un enlace, incluso [Elementos de bloque y elementos en línea](/es/docs/Learn/HTML/Getting_started#Elementos_de_bloque_y_elementos_en_línea). Si quieres convertir una imagen en un enlace, simplemente usa el elemento {{HTMLElement("a")}} encerrando el elemento {{HTMLElement("img")}} entre `<a>` y `</a>`.

```html
<a href="https://www.mozilla.org/es-ES/">
  <img
    src="mozilla-image.png"
    alt="Logotipo de Mozilla que dirige a la página inicial de Mozilla" />
</a>
```

> **Nota:** Encontrarás mucho más sobre el manejo de imágenes en próximos artículos en esta web.

## Primer acercamiento a URLs y rutas

Para comprender completamente a dónde apuntan los enlaces, necesitas conocer las URLs y las rutas. En esta sección encontrarás la información que necesitas sobre el tema.

Una localizadora uniforme de recursos (URL, de las iniciales en inglés de «_Uniform Resource Locator_») es simplemente una secuencia de caracteres de texto que definen donde está situado algo en la web. Por ejemplo, la página de Mozilla está ubicada en `https://www.mozilla.org/es-ES/`.

Las URLs utilizan rutas para encontrar los archivos. Las rutas especifican dónde se encuentra el archivo que buscas dentro del sistema de archivos. Veamos un ejemplo de una estructura de directorios (ve el directorio [creating-hyperlinks](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/creating-hyperlinks)).

![Una estructura de directorios simple. El directorio principal se llama creating-hyperlinks y contiene dos archivos llamados index.html y contacts.html, y dos directorios llamados projects y pdfs, que contiene un archivo index.html y un archivo project-brief.pdf, respectivamente](simple-directory.png)

Al directorio **raíz** de esta estructura de directorios lo hemos llamado `creating-hyperlinks`. Al trabajar en modo local en una web, habrá un directorio que contendrá toda la información. En nuestro ejemplo, dentro de la raíz, encontramos el archivo `index.html` y el archivo `contacts.html`. En una web real, `index.html` es el punto de entrada a la web, lo que se conoce como _página de inicio_.

Observamos también dos directorios dentro de nuestro directorio raíz que son: `pdfs` y `projects`. Cada uno de ellos tiene archivos en su interior — un archivo PDF (`project-brief.pdf`) y un archivo `index.html`, respectivamente. Observa que es posible tener sin problemas dos archivos `index.html` en un proyecto siempre y cuando se encuentren alojados en ubicaciones diferentes de nuestra estructura de archivos — muchos sitios web lo hacen. El segundo `index.html` será la página de inicio para la información relativa a los proyectos.

- **En el mismo directorio**: Si queremos incluir un hipervínculo dentro del archivo `index.html` (el `index.html` del nivel más alto) que apunte al archivo `contacts.html`, simplemente especificaremos el nombre del archivo al que hacemos referencia, porque se encuentra en el mismo directorio en el que se encuentra el archivo `index.html` desde donde lo queremos llamar. Por lo tanto, usamos la URL `contacts.html` — veamos el código:

  ```html
  <p>
    ¿Quieres contactar con un miembro específico del personal? Encuentra los
    detalles en nuestra <a href="contacts.html">página de contactos</a>.
  </p>
  ```

- **Bajando por la estructura de subdirectorios**: Si queremos incluir un hipervínculo dentro del archivo `index.html` (el `index.html` de nivel más alto) que apunta a `projects/index.html`, debemos bajar hasta el directorio `projects` antes de indicar al archivo al que queremos enlazar. Para ello especificamos el nombre del directorio y le añadimos una barra inclinada hacia adelante, y a continuación el nombre del archivo. Por lo tanto, utilizaremos la URL `projects/index.html`:

  ```html
  <p>
    Visita mi <a href="projects/index.html">página de inicio del proyecto</a>.
  </p>
  ```

- **Subiendo por nuestro sistema de directorios**: Si ahora queremos incluir un hipervínculo dentro del archivo `projects/index.html` que apunte a `pdfs/project-brief.pdf`, hay que subir un nivel en nuestro sistema de directorios, para luego bajar al directorio `pdf`. Para «Subir un nivel» utilizamos los dos puntos — (`..`) — por lo que usamos la URL `../pdfs/project-brief.pdf`:

  ```html
  <p>
    Un enlace a mi<a href="../pdfs/project-brief.pdf">resumen del proyecto</a>.
  </p>
  ```

> **Nota:** Podemos combinar más de una instancia de estas características y generar URLs más complejas, si es necesario, por ejemplo: `../../../ruta/compleja/a/mi/archivo.html`.

### Fragmentos de documento

Es posible apuntar hacia una parte concreta de un documento HTML en vez de a todo un documento. Para ello hay que asignar previamente un atributo [`id`](/es/docs/Web/HTML/Global_attributes#id) al elemento hacia el que apuntamos. Esto se debe hacer en el encabezado y quedará así:

```html
<h2 id="Dirección_de_envío">Dirección de envío</h2>
```

Posteriormente para hacer referencia a este `id` concreto, lo añadiremos al final de la URL precedido por una almohadilla — veamos el ejemplo:

```html
<p>
  ¿Quieres mandarnos una carta? Aquí tienes nuestra
  <a href="contacts.html#Dirección_de_envío">Dirección de envío</a>.
</p>
```

También podemos usar esta referencia a un fragmento de documento para apuntar hacia otra _parte del mismo documento_:

```html
<p>
  La <a href="#Dirección_de_envío">Dirección de envío de la empresa</a> se
  encuentra al final de esta página.
</p>
```

### URLs absolutas y relativas

Dos términos que encontrarás en la Web son **URL absoluta** y **URL relativa:**

**URL absoluta**: Hace referencia a una dirección definida por su ubicación absoluta en la web, esta incluye el {{Glossary("protocol", "protocolo")}} y el {{Glossary("domain name", "nombre del dominio")}}. Por ejemplo, si subes una página de inicio `index.html` a un directorio llamado `projects` que se encuentra dentro de la raíz de un servidor web, y el dominio del sitio web es `http://www.example.com`, se podrá acceder a la página desde `http://www.example.com/projects/index.html` (o simplemente `http://www.example.com/projects/`, ya que la mayoría de los servidores web buscan la página de inicio `index.html` para cargarla por omisión si no se les especifica otra en la URL).

Una URL absoluta siempre apuntará a la misma dirección, sin importar desde dónde se utilice.

Una **URL relativa**: Hace referencia a una dirección que depende de la posición del archivo desde donde se utiliza — son las que vimos en la sección anterior. Por ejemplo, si desde un archivo ubicado en `http://www.example.com/projects/index.html` queremos enlazar hacia un archivo PDF ubicado en el mismo directorio, la URL sería simplemente el nombre del archivo (por ejemplo: `project-brief.pdf`) no necesitamos más información. Si el archivo PDF está situado en un subdirectorio dentro de `projects` llamado `pdfs`, la URL relativa es: `pdfs/project-brief.pdf` (la URL absoluta equivalente sería: `http://www.example.com/projects/pdfs/project-brief.pdf`).

Una URL relativa hará referencia a diferentes direcciones según dónde se encuentre el archivo desde el cual se utiliza — por ejemplo, si movemos nuestro archivo `index.html` del directorio `projects` a la raíz del sitio web (el nivel más alto, no cualquiera de los otros directorios), la URL relativa `pdfs/project-brief.pdf` ahora hará referencia a `http://www.example.com/pdfs/project-brief.pdf`, en lugar de a `http://www.example.com/projects/pdfs/project-brief.pdf`.

Por supuesto, la ubicación del archivo `pdfs/project-brief.pdf` y del directorio `pdfs` no cambian de repente cuando mueves el archivo `index.html`; esto hará que tus enlaces apunten a un sitio equivocado y no funcionarán correctamente al hacer clic en ellos. ¡Por lo tanto debes tener cuidado!

## Buenas prácticas en el uso de los enlaces

Hay algunas buenas prácticas que debemos respetar cuando escribimos enlaces. Veamos cuáles son.

### Redacción clara del enlace

Es fácil rellenar de enlaces una página, sin más. Pero esto no basta. Hay que lograr que nuestros enlaces sean _accesibles_ para todo tipo de lectores, sin importar el contexto o las herramientas que prefieran. Por ejemplo:

- Los usuarios de lectores de pantalla suelen saltar de enlace a enlace en la página y los leen todos sin contexto.
- Los motores de búsqueda utilizan el texto de los enlaces para indizar los archivos buscados, por lo que es una buena idea incluir palabras clave al definir el texto de los enlaces para describir de forma efectiva el sitio al que apuntan.
- Los usuarios visuales suelen echar un vistazo rápido a la página y leen solo lo que les interesa, en lugar de leer todo el texto palabra por palabra, y sus miradas van directamente a las características destacadas de la página, como son los enlaces. Este tipo de usuarios encuentra útiles los textos descriptivos que estos contienen.

Veamos un ejemplo concreto:

_**Buen** texto en un enlace_: [Descargar Firefox](https://firefox.com)

```html
<p><a href="https://firefox.com/"> Descargar Firefox </a></p>
```

_**Mal** texto en un enlace_: [Pulsar aquí](https://firefox.com/) para descargar Firefox

```html
<p><a href="https://firefox.com/"> Haz clic aquí </a> para descargar Firefox</p>
```

Otras indicaciones:

- No repetir la URL como parte del texto — Las URLs suenan horrible, y todavía suenan peor si las lee un lector de pantalla, letra por letra.
- No escribir «_link_» o «_link a_» o «enlace» o «enlace a» en el texto del enlace porque es redundante. Los lectores automáticos indican que hay un enlace al encontrarlo. Los usuarios también saben que hay un enlace, porque normalmente se suele cambiar el color del texto y se subraya (no hay que romper esta convención, porque los usuarios están acostumbrados a ella).
- Redacta la etiqueta del enlace de la manera más breve y concisa posible — los textos de enlace largos son especialmente molestos para los usuarios que utilizan lectores automáticos, porque tienen que escuchar todo el texto del enlace.
- Minimiza los casos en los que varias copias del mismo texto están vinculadas a diferentes lugares. Esto puede causar problemas a los usuarios de lectores de pantalla, si hay una lista de enlaces fuera de contexto que están etiquetados como "haz clic aquí", "haz clic aquí", "haz clic aquí".

### Utiliza enlaces relativos siempre que sea posible

A partir de las indicaciones anteriores podemos llegar a pensar que es mejor utilizar referencias absolutas en todos los casos; después de todo, estas no se rompen cuando la página se traslada como ocurre con las referencias relativas. Sin embargo, debes utilizar enlaces relativos siempre que sea posible cuando enlaces a otras ubicaciones dentro del _mismo sitio web_. Cuando vinculas a otro sitio web, deberás utilizar un vínculo absoluto.

- Primero, porque el código es mucho más fácil de leer — las URLs relativas suelen ser mucho más cortas que las absolutas, lo que hace que el código sea mucho más fácil de leer.
- Segundo, resulta más eficiente utilizar URLs relativas cuando sea posible. Cuando usas una URL absoluta, el navegador comienza buscando la ubicación real del servidor en el Sistema de nombres de dominio ({{Glossary("DNS")}}), consulta [Cómo funciona la web](/es/docs/Learn/Getting_started_with_the_web/How_the_Web_works) para obtener más información). Entonces va a ese servidor y busca el archivo solicitado. En cambio, con una URL relativa, el navegador simplemente busca el archivo solicitado en el mismo servidor. Si usas URLs absolutas donde las URLs relativas lo harían, constantemente estás haciendo que tu navegador haga un trabajo adicional, lo cual significa que funcionará de manera menos eficiente.

### Indica claramente los recursos no HTML

Cuando damos referencias a recursos para descargarlos (como documentos en formato PDF o Word) o para reproducirlos (como archivos de audio o vídeo) o que tengan un efecto inesperado (una ventana emergente) hay que indicarlo para no confundir al usuario.

Por ejemplo:

- Si tienes una conexión con poco ancho de banda, pulsas un enlace y comienza a descargar un archivo pesado de forma inesperada.
- Si no tienes instalado el reproductor Flash, pulsas un enlace y te conduce a una página que requiere Flash.

Veamos algunos ejemplos, para ver qué texto puede ser aconsejable en estos casos:

```html
<p>
  <a href="http://www.example.com/large-report.pdf">
    Descarga el informe de ventas (PDF, 10MB)
  </a>
</p>

<p>
  <a href="http://www.example.com/video-stream/">
    Reproduce el vídeo (el flujo de datos se abre en una pestaña independiente,
    calidad HD)
  </a>
</p>

<p>
  <a href="http://www.example.com/car-game">
    Juega al juego del automóvil (requiere Flash)
  </a>
</p>
```

### Utiliza el atributo `download` al enlazar una descarga

Si queremos hacer referencia a una descarga en lugar de a algo que abra el navegador, disponemos del atributo `download` para proporcionar un nombre predeterminado al archivo a guardar. Veamos un ejemplo con un enlace a la descarga de la versión para Windows de Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=es-MX"
  download="firefox-latest-64bit-installer.exe">
  Descarga la última versión de Firefox para Windows (64 bits) (Español, es-MX)
</a>
```

## Aprendizaje activo: crear un menú de navegación

Para este ejercicio, deberás crear lo que se conoce como _web multipágina_: un menú de navegación con enlaces a distintas páginas. Esta es una manera común de crear páginas web — usamos la misma estructura en todas las páginas, incluida la que contiene el menú de navegación. Cuando los usuarios pulsen los enlaces tendrán la sensación de que están en la misma página y que solo cambia el contenido mostrado.

Tendrás que hacer copias locales, en el mismo directorio, de las cuatro siguientes páginas (revisa el directorio [navigation-menu-start](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-start) para el listado completo):

- [index.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/social.html)

A continuación:

1. Añade una lista no ordenada en el lugar adecuado de la página, que contenga los nombres de las páginas a las que enlazas. Un menú de navegación normalmente es una lista de enlaces (_links_), por lo que esto es semánticamente correcto.
2. Convierte cada nombre en un enlace a esa página.
3. Copia el menú de navegación en cada una de las páginas.
4. En cada página, elimina solo el enlace que hace referencia a sí mismo (es confuso y no tiene sentido que una página se llame a sí misma, y la falta del enlace actúa como recordatorio de la página en la que se está en cada momento).

El ejercicio terminado debería crear una página como la siguiente:

![Un ejemplo de un menú de navegación HTML simple, con inicio, imágenes, proyectos y elementos del menú social](navigation-example.png)

> **Nota:** Si ahora encallas, o no estás seguro de haberlo conseguido, revisa el directorio [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-marked-up) para ver la respuesta correcta.

## Enlace a correo electrónico

Es posible crear enlaces o botones que, cuando se pulsan, abren un nuevo correo saliente en lugar de enlazar a un recurso o página. Esto se consigue con el elemento ancla {{HTMLElement("a")}} y el elemento `mailto:` seguido del esquema de la URL.

En su forma más básica, un enlace `mailto:` simplemente contiene la dirección de correo electrónico de los destinatarios. Por ejemplo:

```html
<a href="mailto:nowhere@mozilla.org"
  >Enviar correo electrónico a ninguna parte</a
>
```

Esto da como resultado un enlace que se ve así: [Enviar correo electrónico a ninguna parte](mailto:nowhere@mozilla.org).

De hecho, incluso el atributo con la dirección de correo electrónico es opcional. Si lo omites y tu ([`href`](/es/docs/Web/HTML/Element/a#href) simplemente es "mailto:", aparecerá una nueva ventana de correo saliente en el gestor de correo sin la dirección del destinatario. Esto es útil cuando queremos compartir enlaces que los usuarios puedan pulsar para enviar un correo electrónico y elegir un destinatario posteriormente.

### Especificar detalles

Además de la dirección de correo electrónico, puedes proporcionar otra información. De hecho, puedes incluir cualquier campo estándar contenido en el encabezado de cualquier mensaje en la URL `mailto` que proporciones. Los más utilizados son el «`subject`» (asunto), «`cc`» (con copia a) o «`bcc`» (copia oculta), y «`body`» (cuerpo del mensaje, que no es realmente un campo de la cabecera, pero permite especificar un mensaje breve para el nuevo correo electrónico). Cada campo y su valor se especifican como un argumento de la consulta.

Veamos un ejemplo que incluye estos campos:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Enviar un correo electrónico cc, bcc, asunto y cuerpo
</a>
```

> **Nota:** Los valores de cada campo deben tener la URL codificada, es decir, sin caracteres no imprimibles (caracteres invisibles, tabulaciones, retornos de carro y saltos de página) y espacios con codificación porcentual (%20) [Código porciento](https://es.wikipedia.org/wiki/Código_porciento). También hay que tener en cuenta el uso del signo de interrogación (?) para separar la URL principal de los valores de los campos, y el símbolo ampersand (&) para separar cada campo dentro del enlace `mailto:`. Esta es la notación de consulta URL estándar. Lee [el método GET](/es/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data#The_GET_method) para comprender mejor qué notación de consulta URL se usa comúnmente.

A continuación otros ejemplos de utilización de enlaces `mailto`:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## ¡Pon a prueba tus habilidades!

Has llegado al final de este artículo, pero ¿puedes recordar la información más importante? Encuentra más ejercicios con los que comprobar que has retenido esta información antes de seguir adelante; consulta [Pon a prueba tus habilidades: Enlaces](/es/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links).

## Resumen

Eso es todo en cuanto a enlaces, ¡por ahora! Volveremos a ellos más tarde en este curso cuando comencemos a usar estilos. Lo siguiente en HTML, será aprender la semántica de texto para usar algunas características avanzadas/inusuales que nos serán utilidad — Formato de texto avanzado será la próxima parada.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
