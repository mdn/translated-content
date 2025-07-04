---
title: Cómo añadir imágenes y medios
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 2077d0702d038c9ccc743a53d8ad1c0c21fef5be
---

{{MDNSidebar}}

## Añadiendo imágenes

Para agregar una imagen a un documento, añade el archivo de imagen a la carpeta del documento y luego referencia la imagen desde dentro del archivo `index.md` del documento usando [la sintaxis de imagen de Markdown](https://github.github.com/gfm/#images) o el elemento HTML `<img>` equivalente.

Veamos un ejemplo:

1. Comienza con una nueva rama de trabajo con el contenido más reciente de la rama `main` del repositorio remoto `mdn`.

   ```bash
   cd ~/ruta/a/mdn/contenido
   git checkout main
   git pull mdn main
   # Ejecuta "yarn" nuevamente solo para asegurarte de que has
   # instalado la última dependencia de Yari.
   yarn
   git checkout -b mis-imagenes
   ```

2. Agregar tu imagen a la carpeta del documento. Para este ejemplo, supongamos que estamos agregando una nueva imagen al documento `files/es/web/css`.

   ```bash
   cd ~/ruta/hacia/el/contenido/de/mdn
   cp ../alguna/ruta/mi-imagen-genial.png files/es/web/css/
   ```

3. Ejecuta `filecheck` en cada imagen, lo cual podría mostrar si hay algún problema.
   Para más detalles, consulta la sección [Compresión de imágenes](#compressing_images).

   ```bash
   yarn filecheck files/es/web/css/mi-imagen-genial.png
   ```

4. Referencia tu imagen en el documento usando la sintaxis de Markdown para imágenes, proporcionando [texto descriptivo para el atributo `alt`](/es/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) entre corchetes que describan la imagen, o incluye un elemento {{htmlelement("img")}} con atributo `alt` dentro de `files/es/web/css/index.md`:

   ```md
   ![Mi genial imagen](mi-imagen-genial.png)
   <img src="mi-imagen-genial.png" alt="Mi genial imagen" />
   ```

5. Agrega y confirma todos los archivos eliminados, creados y modificados, así mismo empuja tu rama a tu bifurcación:

   ```bash
   git add files/es/web/css/mi-imagen-genial.png files/es/web/css/index.html
   git commit
   git push -u origin mis-imagenes
   ```

6. Ahora estás listo para crear tu
   [solicitud de incorporación](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Agregando texto alternativo a las imágenes

Cada imagen, `![]` y `<img>`, debe incluir texto `alt`.
Los atributos `alt` deben ser cortos, proporcionando toda la información relevante que la imagen transmite.
Al escribir la descripción de la imagen, piensa en la información valiosa de la imagen y cómo transmitirías esa información a alguien que pueda leer el contenido de la página pero no pueda cargar imágenes.

Asegúrate de que el texto alternativo para la imagen esté basado en su contexto.
Si la foto de Fluffy, el perro, es un avatar junto a una reseña de la comida para perros Yuckymeat, `alt="Fluffy"` es apropiado.
Si la misma foto es parte de la página de adopción de rescate de animales de Fluffy, la información transmitida en la imagen es relevante para los futuros padres de perros, como `alt="Fluffy, un terrier tricolor con pelo muy corto, con una pelota de tenis en la boca."`.
Es probable que el texto circundante tenga el tamaño y la raza de Fluffy, por lo que incluirlo sería redundante.
Evita describir la imagen en demasiado detalle: el futuro padre no necesita saber si el perro está adentro o afuera o tiene un collar rojo y una correa azul.

Con capturas de pantalla, escribe lo que aprendes de la imagen, no detalles del contenido de la captura de pantalla, y omite información que los lectores no necesitan o ya conocen.
Por ejemplo, si estás en una página sobre cómo cambiar la configuración en Bing, si tienes una captura de pantalla de un resultado de búsqueda de Bing, no incluyas el término de búsqueda o el número de resultados, etc., ya que no son el punto de la imagen.
Limita el texto alternativo al tema en cuestión: cómo cambiar la configuración en Bing.
El texto alternativo podría ser `alt="El ícono de configuración está en la barra de navegación debajo del campo de búsqueda."`.
No incluyas "captura de pantalla" o "Bing" ya que el usuario no necesita saber que es una captura de pantalla y ya sabe que es Bing ya que está en una página que explica cómo cambiar la configuración de Bing.

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

Si bien las imágenes puramente decorativas deberían tener un atributo `alt` vacío, las imágenes agregadas a la documentación de MDN deben tener un propósito, y por lo tanto requieren una descripción no vacía.

## Compresión de imágenes

Cuando agregas imágenes a una página en MDN Web Docs, debes asegurarte de que estén comprimidas lo máximo posible (sin degradar la calidad) para ahorrar en el tamaño de descarga para nuestros lectores.
De hecho, si no haces esto, nuestro proceso de CI fallará y los resultados de la compilación te advertirán que algunas de tus imágenes son demasiado grandes.

La mejor manera de comprimir las imágenes es usando la herramienta de compresión incorporada.
Puedes comprimir una imagen adecuadamente usando el comando `filecheck` con la opción `--save-compression`.
Esta opción comprime la imagen tanto como sea posible y reemplaza la original con la versión comprimida.
Por ejemplo:

```bash
yarn filecheck files/es/web/css/mi-imagen-genial.png --save-compression
```

## Agregar videos

MDN Web Docs no es un sitio con mucho contenido de video, pero hay ciertos lugares donde tiene sentido usar contenido de video como parte de un artículo.
Este artículo discute cuándo incluir videos en los artículos es apropiado y proporciona consejos sobre cómo crear videos simples pero efectivos con un presupuesto limitado.

Existen varios argumentos en contra de usar contenido de video para la documentación técnica, especialmente para material de referencia y guías de nivel avanzado. Algunos de estos se enumeran a continuación:

- El video es lineal.
  Las personas no tienden a leer la documentación en línea de manera lineal, comenzando al principio y leyendo hasta el final.
  _Escanean._
  El video es realmente difícil de escanear: obliga al usuario a consumir el contenido de principio a fin.
- El video tiene menos densidad de información que el texto.
  Se tarda más en consumir un video que explica algo que en leer las instrucciones equivalentes.
- El video tiene problemas de accesibilidad: es más costoso de producir en general que el texto, pero especialmente para localizarlo o hacerlo utilizable para los usuarios de lectores de pantalla.
- Siguiendo con el último punto, el video es mucho más difícil de editar/actualizar/mantener que el contenido de texto.

> [!NOTE]
> Vale la pena tener estos problemas en mente incluso cuando estás haciendo videos, para que puedas tratar de mitigar algunos de ellos.

Hay muchos sitios de video populares que proporcionan muchos tutoriales en video.
MDN Web Docs no es un sitio impulsado por video, pero el video tiene un lugar en MDN Web Docs en ciertos contextos.

Tendemos a usar más comúnmente el video cuando se describe algún tipo de secuencia de instrucciones o flujo de trabajo de múltiples pasos que sería difícil de describir de manera concisa en palabras: _"haz esto, luego haz eso, luego esto sucederá"_.
Es especialmente útil cuando se intenta describir procesos que cruzan múltiples aplicaciones o ventanas e incluyen interacciones GUI que pueden no ser simples de describir: _"ahora haz clic en el botón cerca de la parte superior izquierda que se parece un poco a un pato"_.

En tales casos, a menudo es más efectivo simplemente **mostrar** lo que quieres decir.

<!-- Usamos más comúnmente videos cuando explicamos características de las [Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).-->

## Directrices para el contenido de video

El contenido de video para MDN Web Docs debe ser:

- **Corto**: Intenta mantener los videos por debajo de los 30 segundos, idealmente por debajo de los 20 segundos.
  Esto es lo suficientemente corto como para no hacer grandes demandas en la atención de los lectores.
- **Simple**: Trata de hacer el flujo de trabajo simple, con 2-4 piezas distintas.
  Esto los hace más fáciles de seguir.
- **Silencioso**: El audio hace que los videos sean mucho más atractivos, pero son mucho más laboriosos de hacer.
  Además, tener que explicar lo que estás haciendo hace que los videos sean mucho más largos y aumenta los costos (tanto financieros como en términos de tiempo) de la localización.

Para explicar algo más complejo, puedes usar una combinación de videos cortos y capturas de pantalla, intercaladas con texto.
El texto puede ayudar a reforzar los puntos hechos en el video, y el usuario puede confiar en el texto o el video según su elección.
Consulta [Trabajando con el Inspector de Animación](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) para ver un buen ejemplo.

Además, debes considerar los siguientes consejos:

- El video terminará siendo cargado en YouTube antes de incrustarse.
  Recomendamos una relación de aspecto de 16:9 para este uso, para que llene todo el marco de visualización y no termines con barras negras feas en la parte superior e inferior (o izquierda y derecha) de tu video.
  Por lo tanto, por ejemplo, podrías elegir una resolución de 1024×576, 1152×648 o 1280×720.
- Graba el video en HD, para que se vea mejor al cargarse.
- Para videos de DevTools, a menudo es una buena idea elegir un tema contrastante con el contenido de la página. Por ejemplo, elige el tema oscuro si la página de ejemplo tiene un tema claro. Es más fácil ver qué está sucediendo y dónde comienzan las DevTools y termina la página.
- Para videos de DevTools, haz zoom en las DevTools tanto como puedas sin dejar de mostrar todo lo que deseas mostrar y que se vea bien.
- Asegúrate de que lo que estás tratando de demostrar no esté cubierto por el cursor del mouse.
- Considera si sería útil configurar la herramienta de grabación de pantalla para agregar un indicador visual de clics de mouse.

## Directrices para herramientas de video

Necesitarás una herramienta para grabar el video.
Estas van desde gratuitas hasta costosas y simples hasta complejas.
Si ya tienes experiencia en la creación de contenido de video, genial.
Si no, entonces te recomendamos que comiences con una herramienta simple y luego pases a algo más complejo si comienzas a disfrutar creando contenido de video y quieres crear producciones más interesantes.

La siguiente tabla proporciona algunas recomendaciones de buenas herramientas para principiantes:

| Herramienta               | Sistema Operativo     | Costo  | ¿Funciones de postproducción disponibles? |
| ------------------------- | --------------------- | ------ | ----------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Gratis | Sí                                        |
| CamStudio                 | Windows               | Gratis | Limitado                                  |
| Camtasia                  | Windows, macOS        | Alto   | Sí                                        |
| QuickTime Player          | macOS                 | Gratis | No, solo permite grabación simple         |
| ScreenFlow                | macOS                 | Medio  | Sí                                        |
| Kazam                     | Linux                 | Gratis | Mínimo                                    |

### Consejos para QuickTime Player

Si estás usando macOS, deberías tener disponible QuickTime Player.
Los pasos de grabación usando esta herramienta son bastante simples:

1. Elige _Archivo_ > _Nueva grabación de pantalla_ en el menú principal.
2. En el cuadro de _Grabación de pantalla_, presiona el botón de grabación (el botón redondo rojo).
3. Arrastra un rectángulo alrededor del área de la pantalla que deseas grabar.
4. Presiona el botón _Comenzar grabación_.
5. Realiza las acciones que deseas grabar.
6. Presiona el botón _Detener_.
7. Elige _Archivo_ > _Exportar como..._ > _1080p_ en el menú principal para guardar en alta definición.

### Otros recursos

- [Cómo agregar llamadas personalizadas a videos de screencast en Screenflow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

## Flujo de trabajo para crear videos

Las siguientes subsecciones describen los pasos generales que deseas seguir para crear un video y agregarlo a un artículo de MDN Web Docs.

### Preparación

Primero, planifica el flujo que deseas capturar: considera los mejores puntos para comenzar y terminar.

Asegúrate de que el fondo de pantalla del escritorio y el perfil del navegador estén limpios.
Planea el tamaño y la posición de las ventanas del navegador, especialmente si vas a usar varias ventanas.

Planea cuidadosamente lo que realmente vas a grabar y practica los pasos varias veces antes de grabarlos:

- No comiences un video en medio de un proceso, considera si el espectador tendrá suficiente contexto para que tus acciones tengan sentido. Por ejemplo, en un video breve de DevTools, es una buena idea comenzar abriendo las DevTools para permitir que el espectador se oriente.
- Considera cuáles son tus acciones, ralentízalas y hazlas obvias. Siempre que tengas que realizar una acción (digamos, hacer clic en un ícono), hazlo lento y hazlo obvio. Entonces, por ejemplo:
  - Mueve el mouse sobre el ícono.
  - Resalta o haz zoom (no siempre, dependiendo de si se siente necesario).
  - Haz una pausa por un momento.
  - Haz clic en el ícono.

- Planea niveles de zoom para las partes de la interfaz de usuario que vas a mostrar. No todos podrán ver tu video en alta definición. Podrás hacer zoom en partes específicas en la postproducción, pero también es una buena idea hacer zoom en la aplicación de antemano.

> [!NOTE]
> No hagas zoom tan lejos que las interfaces de usuario que estás mostrando comiencen a verse poco familiares o feas.

### Grabación

Cuando grabes el flujo de trabajo que deseas mostrar, pasa por el flujo suavemente y de manera constante. Haz una pausa durante uno o dos segundos cuando estés en momentos clave, por ejemplo, cuando estés a punto de hacer clic en un botón. Asegúrate de que el puntero del mouse no oculte ningún ícono o texto importante para lo que estás tratando de demostrar.

Recuerda hacer una pausa durante uno o dos segundos al final para mostrar el resultado del flujo.

> [!NOTE]
> Si estás usando una herramienta realmente simple como QuickTime Player y la postproducción no es una opción por alguna razón, debes configurar tus ventanas en el tamaño correcto para mostrar el área que deseas mostrar. En las DevTools de Firefox, puedes usar la [Herramienta de reglas](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) para asegurarte de que el área de visualización tenga la relación de aspecto correcta para la grabación.

### Post-procesamiento

Podrás resaltar momentos clave en la postproducción. Un resaltado puede consistir en un par de cosas, que a menudo combinarás, como:

- Hacer zoom en partes de la pantalla.
- Desvanecer el fondo.

Resalta momentos clave del flujo de trabajo, especialmente donde el detalle es difícil de ver: hacer clic en un ícono específico o ingresar una URL específica, por ejemplo. Apunta a que el resaltado dure de 1 a 2 segundos. Es una buena idea agregar una transición corta (200-300 milisegundos) al inicio y al final de los aspectos más destacados.

Usa algo de moderación aquí: no hagas que el video sea un desfile constante de acercamiento y alejamiento, de lo contrario, los espectadores se marearán.

Recorta el video al formato de aspecto deseado, si es necesario.

### Carga

Los videos actualmente tienen que cargarse en YouTube para mostrarse en MDN Web Docs, por ejemplo, en el canal [mozhacks](https://www.youtube.com/user/mozhacks/videos). Pídele a un miembro del equipo de MDN Web Docs que cargue el video si no tienes un lugar adecuado para ponerlo.

> [!NOTE]
> Marca el video como "no listado" si no tiene sentido fuera del contexto de la página (si es un video corto, entonces probablemente no lo tenga).

### Incrustación

Una vez cargado, puedes incrustar el video en la página usando la macro [`EmbedYouTube`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedYouTube.ejs). Esto se hace insertando lo siguiente en tu página en la posición donde deseas que aparezca el video:

```plain
\{{EmbedYouTube("slug-de-url-de-youtube")}}
```

La única propiedad tomada por la llamada a la macro es la cadena de caracteres al final de la URL del video, no toda la URL. Por ejemplo, si la URL del video es `https://www.youtube.com/watch?v=ELS2OOUvxIw`, la llamada a la macro requerida será:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```
