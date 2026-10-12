---
title: Instalar software básico
short-title: Instalar software
slug: Learn_web_development/Getting_started/Environment_setup/Installing_software
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}

En este artículo veremos qué software necesitas para hacer desarrollo web sencillo y qué tienes que instalar ahora, incluido un editor de código y algunos navegadores web modernos.

<table>
  <tbody>
    <tr>
      <th scope="row">Requisitos previos:</th>
      <td>
        Familiaridad básica con el sistema operativo (SO) de tu computadora.
      </td>
    </tr>
    <tr>
      <th scope="row">Resultados de aprendizaje:</th>
      <td>
        <ul>
          <li>Entender qué software necesitas para empezar.</li>
          <li>Instalar un editor de código, algunos navegadores modernos y un servidor de pruebas local.</li>
          <li>Explorar opciones para otros tipos habituales de aplicaciones.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Editores de código

Un buen editor de código es una de las cosas más importantes que cualquier desarrollador debe tener disponible en su equipo. Además de ser el lugar donde escribes el código, los editores de código ofrecen muchísimas otras funcionalidades. Más adelante en la serie dedicamos un artículo entero a los editores de código.

Por ahora, te recomendamos instalar [Visual Studio Code](https://code.visualstudio.com/), porque está disponible en distintas plataformas, tiene un gran conjunto de funciones y buen soporte, y es el editor que más usamos. Deberías instalarlo ahora para seguir el resto de este artículo.

## Navegadores web modernos

Tener navegadores web modernos a tu disposición es esencial para el desarrollo web, para que puedas probar tus sitios web o aplicaciones en los navegadores que usan tus visitantes para acceder a ellos. También tienes que mantener tus navegadores web actualizados, para que admitan las tecnologías web más recientes y tengan aplicadas las últimas correcciones de seguridad.

Los navegadores más habituales con los que te encontrarás son los siguientes:

- Navegadores de escritorio:
  - Basados en [Chromium](<https://es.wikipedia.org/wiki/Chromium_(navegador)>): [Google Chrome](https://www.google.com/chrome/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge), [Vivaldi](https://vivaldi.com/).
  - Basados en [Gecko](<https://es.wikipedia.org/wiki/Gecko_(software)>): [Mozilla Firefox](https://www.firefox.com/en-US/).
  - Basados en [WebKit](https://es.wikipedia.org/wiki/WebKit): [Apple Safari](https://www.apple.com/safari/).
- Navegadores de dispositivos móviles o alternativos:
  - Basados en Chromium (Android): [Google Chrome](https://www.google.com/chrome/go-mobile/), [Opera](https://www.opera.com/opera), [Brave](https://brave.com/download/), [Microsoft Edge](https://explore.microsoft.com/en-us/edge/mobile), [Samsung Internet](https://www.samsung.com/us/support/owners/app/samsung-internet), [Vivaldi](https://vivaldi.com/android/).
  - Basados en Gecko (Android): [Mozilla Firefox](https://www.firefox.com/en-US/download/android/).
  - Basados en WebKit (iOS): [Apple Safari](https://www.apple.com/safari/).
    > [!NOTE]
    > La mayoría de los navegadores para Android de la lista anterior también tienen versiones para iOS, pero históricamente todas funcionaban por dentro con el motor WebKit de Apple, debido a las normas de la App Store de Apple. En el momento de escribir esto, los navegadores están empezando a crear versiones para iOS basadas en sus propios motores de renderizado, debido a cambios regulatorios. Consulta [Apple is finally allowing full versions of Chrome and Firefox to run on the iPhone](https://www.theverge.com/2024/1/25/24050478/apple-ios-17-4-browser-engines-eu) (en inglés).

La mayoría de los navegadores modernos suelen instalar las actualizaciones automáticamente y aplican los cambios al reiniciarse. Normalmente puedes buscar actualizaciones en la página «Acerca de» del navegador. Está en lugares un poco distintos según el navegador y el sistema operativo, por ejemplo:

- Firefox: en _Firefox_ > _Acerca de Firefox_ en macOS, y en el icono del menú > _Ayuda_ > _Acerca de Firefox_ en Windows.
- Chrome: en _Chrome_ > _Información de Google Chrome_ en macOS, y en el icono del menú > _Ayuda_ > _Información de Google Chrome_ en Windows.

### Qué navegadores instalar

Por ahora, deberías instalar un par de navegadores de escritorio y de dispositivos móviles o alternativos para probar tu código. Instala navegadores basados en al menos dos motores de renderizado distintos (por ejemplo, Chromium y Gecko), para no probar solo en varios navegadores basados en el mismo motor. Esto es importante porque tu código puede tener errores que solo afecten a un motor de renderizado.

Los navegadores basados en WebKit no están disponibles para los sistemas operativos Windows, Linux y Android. Si quieres probar tu código en los tres motores de renderizado principales y tu computadora usa Windows, necesitarás acceso a un dispositivo de pruebas con macOS o iOS, o usar una solución por software, como una máquina virtual o una plataforma de pruebas. Sin embargo, en esta etapa no tienes que preocuparte por hacer pruebas exhaustivas: por ahora basta con reconocer que deberías probar tu código en distintos motores de renderizado y practicar un poco.

Verás las estrategias de pruebas con más detalle en nuestro módulo de [Pruebas](/es/docs/Learn_web_development/Extensions/Testing).

## Servidores web locales

Normalmente, cuando escribes una dirección web en un navegador para cargar un sitio web, los archivos que tu navegador combina para mostrar ese sitio se obtienen de un servidor web remoto alojado en una computadora servidor en algún otro lugar del mundo. Aprenderás más sobre cómo funciona esto en el siguiente artículo de la serie.

Cuando creas un sitio web en local (en tu propio equipo), a menudo puedes cargar directamente en un navegador el archivo HTML principal para probarlo. Sin embargo, algunos ejemplos tendrán que ejecutarse a través de un servidor web instalado en local para funcionar correctamente.

### Instalar un servidor web local

Una de las opciones más sencillas que hemos encontrado para tener un servidor local es usar una extensión del editor de código; así lo tienes disponible dentro del propio editor. Haz lo siguiente en Visual Studio Code:

1. Abre el panel _Extensiones_ con la opción del menú _Ver_ > _Extensiones_.
2. En el cuadro de búsqueda de la parte superior de este panel, escribe «live preview». El primer resultado debería ser la extensión [_Live Preview_](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server), creada por Microsoft.
3. Haz clic en esa opción para abrir una página con información sobre ella, que incluye cómo usarla.
4. Pulsa el botón _Instalar_ para instalar la extensión.
5. Ahora, cuando trabajes con un archivo HTML en el editor, deberías poder hacer clic en el botón «Show Preview» para abrir el ejemplo en vivo en una pestaña aparte.

La opción anterior es sencilla, pero no muy flexible. En el futuro, quizá quieras una opción de servidor local más flexible que se pueda usar para cargar ejemplos en cualquier navegador que tengas. Para otras opciones (y más información sobre por qué son necesarios los servidores locales), consulta [¿Cómo configurar un servidor de pruebas local?](/es/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server).

## Editores gráficos

A menudo, los desarrolladores web tienen que manipular archivos de imagen para usarlos en los sitios web que crean. Esto puede implicar diseñar o crear recursos gráficos, pero también es habitual que los gráficos los proporcione un diseñador gráfico (que puede ser alguien del equipo o un tercero); en ese caso, al desarrollador web le pueden pedir que recorte o cambie el tamaño de los archivos que recibe.

Ninguno de los artículos de aprendizaje de MDN te pide crear tus propios gráficos, aunque algunos pueden pedirte que manipules los archivos que te proporcionamos.

Te recomendamos no instalar un editor gráfico hasta que lo necesites más adelante en tu aprendizaje. Y, desde luego, no gastes dinero en un producto comercial caro a menos que de verdad creas que te aportará valor.

Hay muchas herramientas de software gratuitas y servicios en línea que probablemente te bastarán por ahora, por ejemplo:

- macOS incluye una herramienta llamada [Vista Previa](https://support.apple.com/en-gb/guide/preview/welcome/mac). Se usa sobre todo para ver imágenes y PDF, pero también tiene funciones muy útiles para editar imágenes, como cambiar el tamaño, girar, recortar, anotar y convertir entre distintos tipos de archivo.
- La [aplicación Fotos](https://support.microsoft.com/en-us/windows/apps/photos/manage-photos-and-videos-with-microsoft-photos-app) integrada en Windows incluye muchas funciones parecidas.
- El sitio web [tinypng](https://tinypng.com/) ofrece un servicio gratuito que te permite comprimir archivos PNG, JPEG y más. Es una tarea muy habitual que tendrás que hacer al preparar recursos para usarlos en un sitio web.

En cuanto a las opciones comerciales, [Adobe Photoshop](https://www.adobe.com/products/photoshop.html) lleva mucho tiempo siendo el estándar del sector, sobre todo para la edición de fotos, mientras que programas como [Sketch](https://www.sketch.com/) son más adecuados para el trabajo con iconos e interfaces de usuario. También hay recién llegados populares, como [Figma](https://www.figma.com/), [The Affinity Suite](https://www.affinity.studio/) y [Canva](https://www.canva.com/).

La mayoría de las aplicaciones anteriores tienen versiones de prueba o modos gratuitos que vale la pena explorar. También hay algunas aplicaciones gratuitas muy valoradas, como [GIMP](https://www.gimp.org/), [Adobe Express](https://www.adobe.com/express/) y [Paint.NET](https://paint.net/).

## Herramientas de control de versiones

Los desarrolladores usan herramientas de **control de versiones** para gestionar archivos en servidores, colaborar en un proyecto con un equipo, compartir código y recursos, y evitar conflictos de edición. Ahora mismo, [Git](https://git-scm.com/) es el sistema de control de versiones más popular, junto con servicios de alojamiento como [GitHub](https://github.com/) o [GitLab](https://about.gitlab.com/).

Aunque las herramientas de control de versiones son esenciales para los equipos de desarrollo web, por ahora no tienes que preocuparte por ellas. Tenemos un módulo dedicado al [Control de versiones](/es/docs/Learn_web_development/Core/Version_control) cerca del final de nuestra serie de módulos principales (Core).

## Aplicaciones para desplegar sitios

Cuando termines de desarrollar un sitio web o una aplicación (en tu computadora local, o quizá en un servidor de desarrollo), querrás ponerlo en un servidor web remoto para que tus usuarios puedan escribir la dirección web asociada y verlo en la web.

Hay varias formas de hacerlo: desde contratar un alojamiento y usar una [aplicación de SFTP](/es/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server), hasta usar un servicio como [GitHub Pages](https://pages.github.com/) o [Netlify](https://www.netlify.com/), o incluso preparar una demostración rápida para compartirla con otras personas con algo como [CodePen](https://codepen.io/) o [JSFiddle](https://jsfiddle.net/).

Una lista de opciones así puede parecer abrumadora, pero no te preocupes: ahora mismo no necesitas saber nada sobre publicar sitios web. Veremos este tema muchas veces más adelante en el curso. Muy pronto tendrás experiencia práctica con él en nuestro módulo [Tu primer sitio web](/es/docs/Learn_web_development/Getting_started/Your_first_website).

{{NextMenu("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup")}}
