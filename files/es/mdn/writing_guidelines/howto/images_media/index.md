---
title: Cómo agregar imágenes, medios y recursos
short-title: Agregar medios
slug: MDN/Writing_guidelines/Howto/Images_media
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Esta página describe cómo agregar imágenes y medios a las páginas de documentación en MDN.

## Almacenar y usar medios con shared-assets

Antes de agregar imágenes o medios (especialmente cuando demuestre una tecnología donde el contenido multimedia es secundario), verifique si hay algo que pueda usar que ya existe en el [repositorio mdn/shared-assets](https://github.com/mdn/shared-assets).
Trate este repositorio como una **biblioteca de medios** que puede navegar para elegir un recurso apropiado para un ejemplo sin preocuparse por el almacenamiento, implementación o licencia.

El repositorio contiene audio, video, fuentes, imágenes como fotos, diagramas e iconos, y archivos varios como PDF, archivos de subtítulos, perfiles de color, etc.
Si no hay nada adecuado en el repositorio, puede agregar sus recursos junto con cualquier archivo fuente para los medios que desee incluir.
Puede encontrar ejemplos en el [directorio HTTP de shared-assets](https://github.com/mdn/shared-assets/tree/main/images/diagrams/http).

Para usar algo del repositorio shared-assets en una página de MDN, consulte la sección [Usar recursos compartidos en la documentación](https://github.com/mdn/shared-assets?tab=readme-ov-file#using-shared-assets-in-documentation) del README del proyecto.

## Usar formatos vectoriales

En general, si agrega imágenes, especialmente diagramas, considere usar un formato vectorial como SVG por las siguientes razones:

- **Los autores pueden editar SVG directamente** usando cualquier IDE o herramientas en línea.
  Editar un .png generalmente implica recrear un recurso desde cero o usar software de edición de imágenes, lo cual es propenso a errores y puede introducir artefactos visuales o de compresión.
- **Git puede hacer diff de SVG**. Por el contrario, todo el archivo se hace diff como un cambio en binarios cuando se modifica, por lo que un .png de 1MB aumentará el tamaño del repositorio en 1MB en cada confirmación de fusión cuando se haya modificado.
- **UX flexible**. Los SVG son formatos vectoriales, por lo que no se ven borrosos en ningún escalado.

## Confirmar imágenes en repositorios de contenido

Si el repositorio de recursos compartidos no es apropiado para su caso de uso, puede agregar imágenes a un repositorio de contenido (en-US o translated-content).
Para agregar una imagen a un documento, agregue su archivo de imagen a la carpeta del documento y luego referencie la imagen desde dentro del archivo `index.md` del documento usando [sintaxis de imagen de Markdown](https://github.github.com/gfm/#images) o el elemento HTML `<img>` equivalente.

Recorramos un ejemplo:

1. Comience con una rama de trabajo nueva con el contenido más reciente de la rama `main` del remoto `mdn`.

   ```bash
   cd ~/path/to/mdn/content
   git checkout main
   git pull mdn main
   # Ejecute "npm install" para asegurarse de que las dependencias estén actualizadas
   npm install
   git checkout -b my-images
   ```

2. Agregue su imagen a la carpeta del documento. Para este ejemplo, supongamos que estamos agregando una nueva imagen al documento `files/en-us/web/css`.

   ```bash
   cd ~/path/to/mdn/content
   cp ../some/path/my-cool-image.png files/en-us/web/css/
   ```

3. Ejecute `filecheck` en cada imagen, que podría quejarse si hay algo incorrecto.
   Para más detalles, consulte la sección [Comprimir imágenes](#comprimir_imagenes).

   ```bash
   npm run filecheck files/en-us/web/css/my-cool-image.png
   ```

4. Referencie su imagen en el documento usando la sintaxis de Markdown para imágenes, proporcionando [texto descriptivo para el atributo `alt`](/es/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives) entre los corchetes que describen la imagen, o incluya un elemento {{htmlelement("img")}} con atributo `alt` dentro de `files/en-us/web/css/index.md`:

   ```md
   ![My cool image](my-cool-image.png)
   <img src="my-cool-image.png" alt="My cool image" />
   ```

5. Agregue y confirme todos los archivos eliminados, creados y modificados, así como envíe su rama a su fork:

   ```bash
   git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
   git commit
   git push -u origin my-images
   ```

6. Ahora está listo para crear su [solicitud de extracción](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Agregar texto alternativo a las imágenes

Cada imagen, `![]` y `<img>`, debe incluir texto `alt`.
Los atributos alt deben ser cortos, proporcionando toda la información relevante que la imagen transmite.
Al escribir la descripción de la imagen, piense en la información valiosa de la imagen y cómo transmitiría esa información a alguien que pueda leer el contenido de la página pero no pueda cargar imágenes.

Asegúrese de que el texto alternativo para la imagen se base en su contexto.
Si la foto de Fluffy el perro es un avatar junto a una reseña de la comida para perros Yuckymeat, `alt="Fluffy"` es apropiado.
Si la misma foto es parte de la página de adopción de rescate animal de Fluffy, la información transmitida en la imagen es relevante para los futuros padres de perros, como `alt="Fluffy, un terrier tricolor con pelo muy corto, con una pelota de tenis en la boca."`.
El texto circundante probablemente tiene el tamaño y la raza de Fluffy, por lo que incluirlo sería redundante.
Absténgase de describir la imagen con demasiado detalle: el futuro padre no necesita saber si el perro está dentro o fuera o tiene un collar rojo y una correa azul.

Con capturas de pantalla, escriba lo que aprende de la imagen, no detalle el contenido de la captura de pantalla, y omita información que las lectoras no necesitan o ya conocen.
Por ejemplo, si está en una página sobre cambiar la configuración en Bing, si tiene una captura de pantalla de un resultado de búsqueda de Bing, no incluya el término de búsqueda o el número de resultados, etc., ya que esos no son el punto de la imagen.
Limite el alt al tema en cuestión: cómo cambiar la configuración en Bing.
El alt podría ser `alt="El ícono de configuración está en la barra de navegación debajo del campo de búsqueda."`.
No incluya "captura de pantalla" o "Bing" ya que la usuaria no necesita saber que es una captura de pantalla y ya sabe que es Bing ya que están en una página que explica cambiar la configuración de Bing.

La sintaxis en markdown y HTML:

```md-nolint
![<texto-alt>](<url-de-la-imagen>)
<img alt="<texto-alt>" src="<url-de-la-imagen>">
```

Ejemplos:

```md
![OpenWebDocs Logo: Carle the book worm](carle.png)
<img alt="OpenWebDocs Logo: Carle the book worm" src="carle.png" />
```

Si bien las imágenes puramente decorativas deberían tener un `alt` vacío, las imágenes agregadas a la documentación de MDN deben tener un propósito, y por lo tanto requieren una descripción de cadena no vacía.
Para obtener sugerencias sobre texto alt, consulte [Árbol de decisión de alt](https://www.w3.org/WAI/tutorials/images/decision-tree/) para aprender cómo usar un atributo alt para imágenes en varias situaciones.

## Comprimir imágenes

Cuando agrega imágenes a una página en MDN Web Docs, debe asegurarse de que estén comprimidas tanto como sea posible (sin degradar la calidad) para ahorrar en el tamaño de descarga para nuestras lectoras.
De hecho, si no hace esto, nuestro proceso de CI fallará y los resultados de la compilación le advertirán que algunas de sus imágenes son demasiado grandes.

La mejor manera de comprimir las imágenes es usando la herramienta de compresión incorporada.
Puede comprimir una imagen apropiadamente usando el comando `filecheck` con la opción `--save-compression`.
Esta opción comprime la imagen tanto como sea posible y reemplaza la original con la versión comprimida.
Por ejemplo:

```bash
npm run filecheck files/en-us/web/css/my-cool-image.png --save-compression
```

## Agregar videos a páginas de MDN

MDN Web Docs no es un sitio muy pesado en video, pero hay ciertos lugares donde el contenido de video tiene sentido usar como parte de un artículo.
Este artículo discute cuándo incluir videos en los artículos es apropiado y proporciona consejos sobre cómo crear videos simples pero efectivos con un presupuesto limitado.

Hay varios argumentos en contra del uso de contenido de video para la documentación técnica, particularmente para material de referencia y guías de nivel avanzado. Algunos de estos se enumeran a continuación:

- El video es lineal.
  Las personas no tienden a leer la documentación en línea de manera lineal, comenzando al principio y leyendo hasta el final.
  _Escanean._
  El video es realmente difícil de escanear: obliga a la usuaria a consumir el contenido de principio a fin.
- El video tiene menos densidad de información que el texto.
  Se tarda más en consumir un video que explica algo que en leer las instrucciones equivalentes.
- El video es grande en términos de tamaño de archivo y, por lo tanto, más costoso y menos eficiente que el texto.
- El video tiene problemas de accesibilidad: es más costoso de producir en general que el texto, pero especialmente para localizarlo, o hacerlo utilizable para las usuarias de lectores de pantalla.
- Siguiendo con el último punto, el video es mucho más difícil de editar/actualizar/mantener que el contenido de texto.

> [!NOTE]
> Vale la pena mantener estos problemas en mente incluso cuando está creando videos, para que pueda tratar de aliviar algunos de ellos.

Hay muchos sitios de video populares que proporcionan muchos tutoriales en video.
MDN Web Docs no es un sitio impulsado por video, pero el video tiene un lugar en MDN Web Docs en ciertos contextos.

Tendemos a usar más comúnmente el video cuando describimos algún tipo de secuencia de instrucciones o flujo de trabajo de múltiples pasos que sería difícil de describir de manera concisa en palabras: _"haga esto, luego haga aquello, luego esto sucederá"_.
Es especialmente útil cuando se intenta describir procesos que cruzan múltiples aplicaciones o ventanas e incluyen interacciones GUI que podrían no ser simples de describir: _"ahora haga clic en el botón cerca de la parte superior izquierda que se parece un poco a un pato"_.

En tales casos, a menudo es más efectivo simplemente **mostrar** lo que quiere decir.

### Directrices para el contenido de video

El contenido de video para MDN Web Docs debe ser:

- **Corto**: Intente mantener los videos por debajo de los 30 segundos, idealmente por debajo de los 20 segundos.
  Esto es lo suficientemente corto como para no hacer grandes demandas en los períodos de atención de las lectoras.
- **Simple**: Intente hacer el flujo de trabajo simple, con 2-4 piezas distintas.
  Esto los hace más fáciles de seguir.
- **Silencioso**: El audio hace que los videos sean mucho más atractivos, pero son mucho más lentos de hacer.
  Además, tener que explicar lo que está haciendo hace que los videos sean mucho más largos y agrega a los costos (tanto financieros como en términos de tiempo) de la localización.

Para explicar algo más complejo, puede usar una combinación de videos cortos y capturas de pantalla, intercalados con texto.
El texto puede ayudar a reforzar los puntos hechos en el video, y la usuaria puede confiar en el texto o en el video como elija.
Consulte [Trabajar con el Inspector de Animación](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#animation-inspector) para ver un buen ejemplo.

Además, debe considerar los siguientes consejos:

- El video terminará cargándose en YouTube antes de incrustarse.
  Recomendamos una relación de aspecto de 16:9 {{glossary("aspect ratio")}} para este uso, de modo que llene todo el marco de visualización y no termine con barras negras feas en la parte superior e inferior (o izquierda y derecha) de su video.
  Entonces, por ejemplo, podría elegir una resolución de 1024×576, 1152×648 o 1280×720.
- Grabe el video en HD, para que se vea mejor cuando se cargue.
- Para videos de DevTools, a menudo es una buena idea elegir un tema contrastante con el contenido de la página. Por ejemplo, elija el tema oscuro si la página web de ejemplo tiene un tema claro. Es más fácil ver qué está pasando y dónde comienzan las DevTools y termina la página.
- Para videos de DevTools, haga zoom en las DevTools tanto como pueda mientras todavía muestra todo lo que quiere mostrar y se ve bien.
- Asegúrese de que lo que está tratando de demostrar no esté cubierto por el cursor del mouse.
- Considere si sería útil configurar la herramienta de grabación de pantalla para agregar un indicador visual de clics del mouse.

### Herramientas y software de video

Necesitará una herramienta para grabar el video.
Estas van desde gratuitas hasta costosas y simples hasta complejas.
Si ya tiene experiencia en la creación de contenido de video, entonces excelente.
Si no, entonces le recomendaríamos que comience con una herramienta simple y luego pase a algo más complejo si comienza a disfrutar creando contenido de video y desea crear producciones más interesantes.

La siguiente tabla proporciona algunas recomendaciones para buenas herramientas de iniciación:

| Herramienta               | Sistema operativo     | Costo  | ¿Funciones de postproducción disponibles? |
| ------------------------- | --------------------- | ------ | ----------------------------------------- |
| Open Broadcaster Software | macOS, Windows, Linux | Gratis | Sí                                        |
| CamStudio                 | Windows               | Gratis | Limitado                                  |
| Camtasia                  | Windows, macOS        | Alto   | Sí                                        |
| QuickTime Player          | macOS                 | Gratis | No, solo permite grabación simple         |
| ScreenFlow                | macOS                 | Medio  | Sí                                        |
| Kazam                     | Linux                 | Gratis | Mínimo                                    |

#### Consejos de QuickTime Player

Si está usando macOS, debería tener disponible QuickTime Player.
Los pasos de grabación usando esta herramienta son bastante simples:

1. Elija _Archivo_ > _Nueva grabación de pantalla_ en el menú principal.
2. En el cuadro _Grabación de pantalla_, presione el botón de grabación (el botón redondo).
3. Arrastre un rectángulo alrededor del área de la pantalla que desea grabar.
4. Presione el botón _Comenzar grabación_.
5. Realice las acciones que desea grabar.
6. Presione el botón _Detener_.
7. Elija _Archivo_ > _Exportar como..._ > _1080p_ en el menú principal para guardar como alta definición.

### Otros recursos

- [Cómo agregar llamadas personalizadas a videos de screencast en ScreenFlow](https://photography.tutsplus.com/tutorials/how-to-add-custom-callouts-to-screencast-videos-in-screenflow--cms-27122)

### Flujo de trabajo para crear videos

Las siguientes secciones describen los pasos generales que le gustaría seguir para crear un video y agregarlo a un artículo de MDN Web Docs.

Primero, planifique el flujo que desea capturar: considere los mejores puntos para comenzar y terminar.
Asegúrese de que el fondo del escritorio y el perfil del navegador estén limpios.
Planifique el tamaño y la posición de las ventanas del navegador, especialmente si va a usar múltiples ventanas.

Planifique cuidadosamente lo que realmente va a grabar y practique los pasos varias veces antes de grabarlos:

- No comience un video en medio de un proceso; considere si la espectadora tendrá suficiente contexto para que sus acciones tengan sentido.
  En un video corto de DevTools, por ejemplo, es una buena idea comenzar abriendo las DevTools para permitir que la espectadora se oriente.
- Considere cuáles son sus acciones, ralentícelas y hágalas obvias.
  Siempre que tenga que realizar una acción (digamos, hacer clic en un icono), tómese su tiempo y hágalo obvio. Entonces, por ejemplo:
  - Mueva el mouse sobre el icono.
  - Resalte o haga zoom (no siempre, dependiendo de si se siente necesario).
  - Haga una pausa por un momento.
  - Haga clic en el icono.

- Planifique niveles de zoom para las partes de la interfaz de usuario que va a mostrar.
  No todos podrán ver su video en alta definición.
  Podrá hacer zoom en partes particulares en la postproducción, pero también es una buena idea hacer zoom en la aplicación de antemano.

> [!NOTE]
> No haga zoom tan lejos que las interfaces de usuario que está mostrando comiencen a verse poco familiares o feas.

#### Grabación

Cuando grabe el flujo de trabajo que desea mostrar, recorra el flujo suavemente y de manera constante.
Haga una pausa durante uno o dos segundos cuando esté en momentos clave; por ejemplo, cuando esté a punto de hacer clic en un botón. Asegúrese de que el puntero del mouse no oculte ningún icono o texto importante para lo que está tratando de demostrar.

Recuerde hacer una pausa durante uno o dos segundos al final para mostrar el resultado del flujo.

> [!NOTE]
> Si está usando una herramienta realmente simple como QuickTime Player y la postproducción no es una opción por alguna razón, debe configurar sus ventanas en el tamaño correcto para mostrar el área que desea mostrar. En las DevTools de Firefox, puede usar la [Herramienta de reglas](https://firefox-source-docs.mozilla.org/devtools-user/rulers/index.html) para asegurarse de que el área visual tenga la relación de aspecto correcta para la grabación.

#### Post-procesamiento

Podrá resaltar momentos clave en la post-producción.
Un resaltado puede consistir en un par de cosas, que a menudo combinará, como:

- Hacer zoom en partes de la pantalla.
- Desvanecer el fondo.

Resalte momentos clave del flujo de trabajo, especialmente donde el detalle es difícil de ver: hacer clic en un icono en particular o ingresar una URL en particular, por ejemplo.
Apunte a que el resaltado dure de 1 a 2 segundos.
Es una buena idea agregar una transición corta (200-300 milisegundos) al inicio y al final de los aspectos más destacados.

Use algo de moderación aquí: no haga que el video sea un desfile constante de acercamiento y alejamiento, de lo contrario, las espectadoras se marearán.
Corte el video a la relación de aspecto deseada, si se requiere.

#### Cargar e incrustar video

Los videos actualmente tienen que cargarse en YouTube para mostrarse en MDN Web Docs, por ejemplo, en el canal [mozhacks](https://www.youtube.com/user/mozhacks/videos).
Pídale a un miembro del equipo de MDN Web Docs que cargue el video si no tiene un lugar apropiado para ponerlo.

> [!NOTE]
> Marque el video como "no listado" si no tiene sentido fuera del contexto de la página (si es un video corto, entonces probablemente no lo tenga).

### Incrustar

Una vez cargado, puede incrustar el video en la página usando la macro [`EmbedYouTube`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_youtube.rs).
Esto se usa insertando lo siguiente en su página en la posición donde desea que aparezca el video:

```plain
\{{EmbedYouTube("you-tube-url-slug")}}
```

La única propiedad que toma la llamada a la macro es la cadena de caracteres al final de la URL del video, no toda la URL.
Por ejemplo, si la URL del video es `https://www.youtube.com/watch?v=ELS2OOUvxIw`, la llamada a la macro requerida será:

```plain
\{{EmbedYouTube("ELS2OOUvxIw")}}
```

## Véase también

- [Usar formato SVG en lugar de imágenes .png](https://github.com/orgs/mdn/discussions/631) Discusión de MDN en GitHub
