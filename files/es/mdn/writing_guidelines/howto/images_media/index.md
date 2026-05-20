---
title: Cómo añadir imágenes, medios y recursos
short-title: Añadir medios
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Esta página describe cómo añadir imágenes y medios a las páginas de documentación de MDN.

## Almacenar y usar medios con shared-assets

Antes de añadir imágenes o medios (especialmente cuando se demuestra una tecnología en la que el contenido multimedia es secundario), comprueba si existe algo que puedas usar en el [repositorio mdn/shared-assets](https://github.com/mdn/shared-assets).
Considera este repositorio como una **biblioteca de medios** que puedes navegar para elegir un recurso adecuado para un ejemplo, sin preocuparte por el almacenamiento, el despliegue o las licencias.

El repositorio contiene audio, video, fuentes, imágenes como fotos, diagramas e iconos, y archivos diversos como PDF, archivos de subtítulos, perfiles de color, etc.
Si no hay nada adecuado en el repositorio, puedes añadir tus recursos junto con los archivos fuente para los medios que deseas incluir.
Puedes encontrar ejemplos en el [directorio HTTP del repositorio shared-assets](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http).

Para usar cualquier elemento del repositorio shared-assets en una página de MDN, consulta la sección [Using shared assets in documentation](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) del README del proyecto.

## Usar formatos vectoriales

En general, al añadir imágenes, especialmente diagramas, considera usar un formato vectorial como SVG por las siguientes razones:

- **Los autores pueden editar SVG directamente** con cualquier IDE o herramienta en línea.
  Editar un archivo .png normalmente implica recrear el recurso desde cero o usar software de edición de imágenes, lo que es propenso a errores y puede introducir artefactos visuales o de compresión.
- **Git puede mostrar las diferencias de un SVG (_diff_)**. En cambio, un archivo binario completo se registra como un cambio cuando se modifica, por lo que un .png de 1 MB aumentará el tamaño del repositorio en 1 MB en cada commit de fusión (merge) en el que haya sido modificado.
- **UX flexible**. Los SVG son formatos vectoriales, por lo que no se ven borrosos a ninguna escala.

## Añadir imágenes a repositorios de contenido

Si el repositorio shared-assets no es apropiado para tu caso de uso, puedes añadir imágenes a un repositorio de contenido (en-US o translated-content).
Para añadir una imagen a un documento, añade el archivo de imagen a la carpeta del documento y, a continuación, haz referencia a la imagen desde el archivo `index.md` del documento usando [la sintaxis de imagen de Markdown](https://github.github.com/gfm/#images) o el elemento HTML `<img>` equivalente.

Veamos un ejemplo:

1. Comienza con una nueva rama de trabajo con el contenido más reciente de la rama `main` del repositorio remoto `mdn`.

   ```bash
   cd ~/ruta/a/mdn/content
   git checkout main
   git pull mdn main
   # Ejecuta "npm install" para asegurarte de que las dependencias estén actualizadas
   npm install
   git checkout -b mis-imagenes
   ```

2. Añade tu imagen a la carpeta del documento. Para este ejemplo, supongamos que estamos agregando una nueva imagen al documento `files/en-us/web/css`.

   ```bash
   cd ~/ruta/a/mdn/content
   cp ../alguna/ruta/mi-imagen-genial.png files/en-us/web/css/
   ```

3. Ejecuta `filecheck` en cada imagen, lo que puede mostrar un error si algo falla.
   Para más detalles, consulta la sección [Comprimir imágenes](#comprimir_imágenes).

   ```bash
   npm run filecheck files/en-us/web/css/mi-imagen-genial.png
   ```

4. Referencia tu imagen en el documento usando la sintaxis de Markdown para imágenes, proporcionando [texto descriptivo para el atributo `alt`](/es/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) entre corchetes que describan la imagen, o incluye un elemento {{htmlelement("img")}} con atributo `alt` dentro de `files/en-us/web/css/index.md`:

   ```md
   ![Mi imagen genial](mi-imagen-genial.png)
   <img src="mi-imagen-genial.png" alt="Mi imagen genial" />
   ```

5. Agrega y confirma todos los archivos eliminados, creados y modificados, y también haz push de tu rama a tu fork:

   ```bash
   git add files/en-us/web/css/mi-imagen-genial.png files/en-us/web/css/index.html
   git commit
   git push -u origin mis-imagenes
   ```

6. Ahora estás listo para crear tu
   [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Añadir texto alternativo a las imágenes

Cada imagen, `![]` y `<img>`, debe incluir texto `alt`.
Los atributos `alt` deben ser cortos y proporcionar toda la información relevante que transmite la imagen.
Al escribir la descripción de la imagen, piensa en la información valiosa que contiene y cómo se la transmitirías a alguien que puede leer el contenido de la página pero no puede cargar las imágenes.

Asegúrate de que el texto alternativo esté basado en el contexto de la imagen.
Si la foto de Fluffy, el perro, es un avatar junto a una reseña de la comida para perros Yuckymeat, `alt="Fluffy"` es apropiado.
Si la misma foto forma parte de la página de adopción del refugio de animales de Fluffy, la información que transmite la imagen es relevante para los futuros dueños de perros, por ejemplo: `alt="Fluffy, un terrier tricolor con pelo muy corto, con una pelota de tenis en la boca."`.
Es probable que el texto circundante ya mencione el tamaño y la raza de Fluffy, por lo que incluirlo sería redundante.
Evita describir la imagen con demasiado detalle: el futuro dueño no necesita saber si el perro está en el interior o al aire libre, ni si tiene un collar rojo y una correa azul.

Al usar capturas de pantalla, escribe lo que se deduce de la imagen, no detalles de su contenido, y omite la información que los lectores no necesitan o ya conocen.
Por ejemplo, si estás en una página sobre cómo cambiar la configuración en Bing, si tienes una captura de pantalla de un resultado de búsqueda, no incluyas el término de búsqueda o el número de resultados, ya que no son el objetivo de la imagen.
Limita el texto alternativo al tema en cuestión: cómo cambiar la configuración en Bing.
El texto alternativo podría ser `alt="El icono de configuración está en la barra de navegación debajo del campo de búsqueda."`.
No incluyas "captura de pantalla" o "Bing", ya que el usuario no necesita saber que es una captura de pantalla y ya sabe que es Bing porque está en una página que explica su configuración.

La sintaxis en markdown y HTML:

```md-nolint
![<texto-alt>](<url-de-la-imagen>)
<img alt="<texto-alt>" src="<url-de-la-imagen>">
```

Ejemplo:

```md
![OpenWebDocs Logo: Carle el ratón de biblioteca](carle.png)
<img alt="OpenWebDocs Logo: Carle el ratón de biblioteca" src="carle.png" />
```

Si bien las imágenes puramente decorativas deben tener un `alt` vacío, las imágenes añadidas a la documentación de MDN deben tener un propósito y, por lo tanto, requieren una descripción que no esté vacía.
Para obtener consejos sobre el texto alternativo, consulta [An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/) para aprender a usar este atributo en diversas situaciones.

## Comprimir imágenes

Cuando añades imágenes a una página de MDN Web Docs, debes asegurarte de que estén comprimidas lo máximo posible (sin degradar la calidad) para reducir el tamaño de descarga para los lectores.
De hecho, si no lo haces, el proceso de CI fallará y los resultados de la compilación te advertirán de que algunas de tus imágenes son demasiado grandes.

La mejor manera de comprimir las imágenes es usar la herramienta de compresión integrada.
Puedes comprimir una imagen adecuadamente usando el comando `filecheck` con la opción `--save-compression`.
Esta opción comprime la imagen tanto como sea posible y reemplaza la original con la versión comprimida.
Por ejemplo:

```bash
npm run filecheck files/en-us/web/css/mi-imagen-genial.png --save-compression
```

## Añadir videos a páginas de MDN

MDN Web Docs no es un sitio con mucho contenido de video, pero hay ciertos lugares donde tiene sentido usarlo como parte de un artículo.
Este artículo explica cuándo es apropiado incluir videos en los artículos y ofrece consejos sobre cómo crear videos sencillos pero efectivos con un presupuesto limitado.

Existen varios argumentos en contra del uso de contenido de video para la documentación técnica, particularmente para material de referencia y guías de nivel avanzado. Algunos de ellos se enumeran a continuación:

- El video es lineal.
  Las personas no tienden a leer la documentación en línea de manera lineal, comenzando desde el principio y leyendo hasta el final.
  _Escanean._
  El video es realmente difícil de escanear: obliga al usuario a consumir el contenido de principio a fin.
- El video tiene menos densidad de información que el texto.
  Se tarda más en consumir un video explicativo que en leer las instrucciones equivalentes.
- El video ocupa mucho espacio en disco y, por lo tanto, es más costoso y menos eficiente que el texto.
- El video tiene problemas de accesibilidad: es más costoso de producir en general que el texto, pero especialmente para localizarlo o hacerlo utilizable por usuarios de lectores de pantalla.
- En relación con el punto anterior, editar, actualizar y mantener videos es mucho más difícil que editar contenido de texto.

> [!NOTE]
> Vale la pena tener en cuenta estos problemas incluso al crear videos, para intentar mitigar algunos de ellos.

Hay muchos sitios web de videos populares que ofrecen gran cantidad de videotutoriales.
MDN Web Docs no es un sitio orientado al video, pero el video sí tiene cabida en MDN Web Docs en determinados contextos.

Solemos usar el video principalmente cuando describimos algún tipo de secuencia de instrucciones o flujo de trabajo de varios pasos que sería difícil de describir de forma concisa con palabras: _"haz esto, luego haz aquello, luego sucederá esto"_.
Es especialmente útil cuando se intenta describir procesos que abarcan múltiples aplicaciones o ventanas y que incluyen interacciones con la interfaz gráfica (GUI) que pueden no ser fáciles de describir: _"ahora haz clic en el botón cerca de la parte superior izquierda que se parece un poco a un pato"_.

En estos casos, a menudo es más efectivo simplemente **mostrar** lo que quieres decir.

### Pautas para el contenido de video

El contenido de video para MDN Web Docs debe ser:

- **Corto**: intenta que los videos duren menos de 30 segundos, idealmente menos de 20 segundos.
  Esto es lo suficientemente breve como para no exigir demasiado a la atención de los lectores.
- **Simple**: intenta que el flujo de trabajo sea sencillo, con 2 a 4 pasos bien diferenciados.
  Esto los hace más fáciles de seguir.
- **Sin audio**: el audio hace que los videos sean mucho más atractivos, pero su producción requiere mucho más tiempo.
  Además, tener que explicar lo que se hace alarga considerablemente los videos y aumenta los costos (tanto económicos como en tiempo) de la localización.

Para explicar algo más complejo, puedes combinar videos cortos y capturas de pantalla, intercaladas con texto.
El texto puede ayudar a reforzar los puntos tratados en el video, y el usuario puede apoyarse en el texto o en el video según prefiera.
Consulta [Working with the Animation Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) para ver un buen ejemplo.

Además, debes considerar los siguientes consejos:

- El video terminará siendo subido a YouTube antes de incrustarse.
  Recomendamos una {{glossary("aspect ratio", "relación de aspecto")}} de 16:9 para este uso, de modo que ocupe todo el marco de visualización y no aparezcan barras negras en la parte superior e inferior (o izquierda y derecha) de tu video.
  Por ejemplo, podrías elegir una resolución de 1024×576, 1152×648 o 1280×720.
- Graba el video en HD, para que se vea mejor al subirlo.
- Para videos de DevTools, a menudo es una buena idea elegir un tema que contraste con el contenido de la página. Por ejemplo, elige el tema oscuro si la página de ejemplo tiene un tema claro. Es más fácil ver qué ocurre y dónde empiezan las DevTools y dónde termina la página.
- Para los videos de DevTools, haz zoom en las DevTools todo lo posible sin dejar de mostrar todo lo que quieres enseñar y sin que el resultado se vea mal.
- Asegúrate de que lo que intentas demostrar no quede tapado por el cursor del ratón.
- Considera si sería útil o no configurar la herramienta de grabación de pantalla para agregar un indicador visual a los clics del ratón.

### Herramientas y software de video

Necesitarás una herramienta para grabar el video.
Las hay desde gratuitas hasta costosas, y desde simples hasta complejas.
Si ya tienes experiencia creando contenido de video, genial.
Si no es así, te recomendamos comenzar con una herramienta sencilla y luego avanzar a algo más complejo si empiezas a disfrutar de la creación de videos y deseas realizar producciones más interesantes.

La siguiente tabla ofrece algunas recomendaciones de buenas herramientas para empezar:

| Herramienta               | Sistema operativo     | Costo  | ¿Funciones de postproducción? |
| ------------------------- | --------------------- | ------ | ----------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Gratis | Sí                            |
| CamStudio                 | Windows               | Gratis | Limitadas                     |
| Camtasia                  | Windows, macOS        | Alto   | Sí                            |
| QuickTime Player          | macOS                 | Gratis | No, solo grabación simple     |
| ScreenFlow                | macOS                 | Medio  | Sí                            |
| Kazam                     | Linux                 | Gratis | Mínimas                       |

#### Consejos para QuickTime Player

Si usas macOS, deberías tener disponible QuickTime Player.
Los pasos de grabación con esta herramienta son bastante sencillos:

1. Elige _Archivo_ > _Nueva grabación de pantalla_ en el menú principal.
2. En el cuadro de _Grabación de pantalla_, presiona el botón de grabación (el botón redondo rojo).
3. Arrastra un rectángulo alrededor del área de la pantalla que deseas grabar.
4. Pulsa el botón _Comenzar grabación_.
5. Realiza las acciones que deseas grabar.
6. Pulsa el botón _Detener_.
7. Elige _Archivo_ > _Exportar como..._ > _1080p_ en el menú principal para guardar en alta definición.

### Otros recursos

- [Cómo agregar llamadas personalizadas a los videos de screencast en Screenflow (en inglés)](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Flujo de trabajo para crear videos

Las siguientes secciones describen los pasos generales que deseas seguir para crear un video y agregarlo a un artículo de MDN Web Docs.

Primero, planifica el flujo que deseas capturar: considera cuáles son los mejores puntos de inicio y fin.
Asegúrate de que el fondo de escritorio y el perfil del navegador estén limpios.
Planifica el tamaño y la posición de las ventanas del navegador, especialmente si vas a usar varias.

Planifica con cuidado lo que vas a grabar y practica los pasos varias veces antes de empezar:

- No comiences un video en mitad de un proceso: considera si el espectador tendrá suficiente contexto para entender tus acciones.
  En un video breve de DevTools, por ejemplo, es buena idea comenzar abriendo las DevTools para que el espectador se oriente.
- Considera cuáles son tus acciones, reduce la velocidad y hazlas evidentes.
  Cada vez que tengas que realizar una acción (por ejemplo, hacer clic en un icono), hazlo despacio y hazlo evidente. Por ejemplo:
  - Mueve el ratón sobre el icono.
  - Resalta o haz zoom (no siempre, según si parece necesario).
  - Haz una pausa breve.
  - Haz clic en el icono.

- Planifica los niveles de zoom para las partes de la interfaz de usuario que vas a mostrar.
  No todos podrán ver el video en alta definición.
  Podrás hacer zoom en partes concretas en la postproducción, pero también es una buena idea acercar la aplicación de antemano.

> [!NOTE]
> No hagas tanto zoom que las interfaces que muestras comiencen a verse extrañas o poco atractivas.

#### Grabación

Al grabar el flujo de trabajo que quieres mostrar, recórrelo de forma fluida y constante.
Haz una pausa de uno o dos segundos en los momentos clave, por ejemplo, justo antes de hacer clic en un botón.
Asegúrate de que el cursor del ratón no oculte ningún icono ni texto importante para lo que intentas demostrar.

Recuerda hacer una pausa de uno o dos segundos al final para mostrar el resultado del flujo.

> [!NOTE]
> Si usas una herramienta muy sencilla como QuickTime Player y la postproducción no es una opción por alguna razón, configura las ventanas en el tamaño correcto para mostrar el área que deseas. En las DevTools de Firefox, puedes usar la [herramienta de reglas](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) para asegurarte de que el área de visualización tiene la relación de aspecto adecuada para la grabación.

#### Post-procesamiento

Podrás resaltar momentos clave en la postproducción.
Un resaltado puede consistir en varias cosas que a menudo se combinan, como:

- Hacer zoom en partes de la pantalla.
- Difuminar el fondo.

Resalta los momentos clave del flujo de trabajo, especialmente donde el detalle es difícil de ver: hacer clic en un icono concreto o introducir una URL específica, por ejemplo.
El resaltado debería durar entre 1 y 2 segundos.
Es buena idea añadir una transición corta (200-300 milisegundos) al inicio y al final de cada resaltado.

Usa moderación: no conviertas el video en un desfile constante de acercamientos y alejamientos, o los espectadores se marearán.
Recorta el video a la relación de aspecto deseada si es necesario.

#### Subir e insertar videos

Actualmente los videos deben subirse a YouTube para mostrarse en MDN Web Docs, por ejemplo, al canal [mozhacks](https://www.youtube.com/user/mozhacks/videos).
Pide a un miembro del equipo de MDN Web Docs que suba el video si no tienes un lugar adecuado donde alojarlo.

> [!NOTE]
> Marca el video como "no listado" si no tiene sentido fuera del contexto de la página (si es un video corto, probablemente no lo tenga).

### Inserción

Una vez subido, puedes incrustar el video en la página usando la macro [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs).
Para ello, inserta lo siguiente en tu página en la posición donde quieres que aparezca el video:

```plain
\{{EmbedYouTube("slug-de-url-de-youtube")}}
```

La única propiedad que acepta la llamada a la macro es la cadena de caracteres al final de la URL del video, no toda la URL.
Por ejemplo, si la URL del video es `https://www.youtube.com/watch?v=ELS2OOUvxIw`, la llamada a la macro requerida será:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Véase también

- Discusión en GitHub de MDN sobre [Usar formato SVG en lugar de imágenes .png (en inglés)](https://github.com/orgs/mdn/discussions/631).
