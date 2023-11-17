---
title: Instalación de software básico
slug: Learn/Getting_started_with_the_web/Installing_basic_software
---

{{LearnSidebar}}{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}

La _Instalación de software básico_, te muestra las herramientas que necesitas para hacer el desarrollo web simple, y la forma de instalarlas correctamente.

## ¿Qué herramientas usan los profesionales?

- **Una computadora**. Tal vez esto suena obvio para algunas personas, pero habrá quien esté leyendo este artículo desde el móvil o una computadora de biblioteca. Para el desarrollo web serio, es mejor invertir en un equipo de escritorio o portátil con Windows, Mac o Linux.
- **Un editor de texto**, para escribir código. Puedes usar un editor de texto libre (ej. [Brackets](http://brackets.io/), [Atom](https://atom.io/), [Notepad++](https://notepad-plus-plus.org/), [Sublime Text](https://www.sublimetext.com/), [GNU Emacs](https://www.gnu.org/software/emacs/), [VIM](https://www.vim.org/), [Visual Studio Code](https://code.visualstudio.com/), [WebStorm](https://www.jetbrains.com/webstorm/)) o un editor híbrido ([Dreamweaver](https://www.adobe.com/products/dreamweaver.html)). Los editores de documentos de oficina no son adecuados para esto, pues dependen de elementos ocultos que interfieren con los motores de renderizado usados por los navegadores.
- **Navegadores web**, para probar el código. Actualmente los navegadores más usados son [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Opera](http://www.opera.com/), [Safari](https://www.apple.com/safari/), [Vivaldi](https://vivaldi.com/es/), [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie) y [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge). También debes comprobar cómo funciona tu web en dispositivos móviles y en cualquier navegador antiguo que tu público objetivo pueda estar usando aún (tal como IE 6–8.)
- **Un editor de gráficos o imágenes**, como [GIMP](http://www.gimp.org/), [Paint.NET](http://www.getpaint.net/) o [Photoshop](https://www.adobe.com/products/photoshop.html), para crear imágenes para tus páginas web.
- **Un sistema de control de versiones**, para administrar archivos en servidores, colaborar en un proyecto con un equipo, compartir código y recursos, y evitar conflictos de edición. Hoy en día [Git](http://git-scm.com/) es el sistema de control de versiones más popular y el servicio de alojamiento de código [GitHub](https://github.com/), basado en Git, también es muy popular.
- **Un programa de FTP**, para cargar páginas web en un servidor para el público (Git está reemplazando cada vez más a FTP para ese fin). Hay un montón de estos programas disponibles incluyendo [Cyberduck](https://cyberduck.io/), [Fetch](http://fetchsoftworks.com/) y [FileZilla](https://filezilla-project.org/).
- **Un sistema de automatización**, como [Grunt](http://gruntjs.com/) o [Gulp](http://gulpjs.com/) para realizar tareas repetitivas de forma automática, por ejemplo minimización de código y ejecución de pruebas.
- Bibliotecas, marcos de desarrollo (`frameworks`), etc., para acelerar la escritura de funciones comunes. Una biblioteca tiende a ser un archivo JavaScript o CSS existente que proporciona una funcionalidad lista para usar para que la utilices en tu código. Un framework tiende a llevar esta idea más allá, ofreciendo un sistema completo con alguna sintaxis personalizada para que puedas escribir una aplicación web basada en él.
- ¡Muchas más herramientas!

## Ahora mismo: ¿qué herramientas necesitas realmente?

Esto parece una lista espeluznante pero, afortunadamente, puedes comenzar a trabajar en el desarrollo web sin saber nada de la mayoría de estas herramientas. En este artículo solo tendrás que configurar lo mínimo: un editor de texto y algunos navegadores web modernos.

### Instalación de un editor de texto

Probablemente ya tengas un editor de texto básico instalado en tu computadora. De manera predeterminada Windows incluye el [Bloc de notas](https://es.wikipedia.org/wiki/Bloc_de_notas) y OS X viene con [TextEdit](https://es.wikipedia.org/wiki/TextEdit). Las _distros_ (versiones) de Linux varían: Ubuntu viene con [Gedit](https://es.wikipedia.org/wiki/Gedit); distribuciones basadas en KDE suelen traer [Kate](http://kate-editor.org/) o [Kwrite](https://es.wikipedia.org/wiki/KWrite).

Para el desarrollo Web, probablemente hay cosas mejores que el Bloc de notas o TextEdit. Una recomendación puede ser empezar con [Brackets](http://brackets.io), un editor gratuito que ofrece vistas previas en vivo y sugerencias de código.

### Instalación de navegadores web modernos

Por ahora, solo tendrás que instalar un par de navegadores web de escritorio para poner a prueba tu código. Selecciona tu sistema operativo y pulsa los enlaces pertinentes para descargar los instaladores de tus navegadores preferidos:

- Linux: [Firefox](https://www.mozilla.org/es-ES/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Opera](http://www.opera.com/es/), [Vivaldi](https://vivaldi.com/es/).
- Windows: [Firefox](https://www.mozilla.org/es-ES/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Opera](http://www.opera.com/es/), [Vivaldi](https://vivaldi.com/es/), [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/download-ie) (si tienes Windows 8 o superior, puedes instalar IE 10 o posterior, de lo contrario, deberías instalar un navegador alternativo).
- Mac: [Firefox](https://www.mozilla.org/es-ES/firefox/new/), [Chrome](https://www.google.com/chrome/browser/), [Opera](http://www.opera.com/es/), [Vivaldi](https://vivaldi.com/es/), [Safari](https://www.apple.com/safari/) (Safari de manera predeterminada viene con iOS y OS X)

Antes de continuar, deberías instalar al menos dos de estos navegadores y tenerlos disponibles para pruebas.

> **Nota:** Internet Explorer no es compatible con algunas funciones web modernas y es posible que no puedas ejecutar tu proyecto. Por lo general, no necesitas preocuparte por hacer que tus proyectos web sean compatibles con él, ya que muy pocas personas todavía lo usan; ciertamente, no te preocupes demasiado por él mientras aprendes. En ocasiones, es posible que te encuentres con un proyecto que requiera soporte.

### Instalación de un servidor web local

Algunos ejemplos necesitarás ejecutarlos a través de un servidor web para que funcionen exitosamente. Puedes encontrar cómo hacer esto en [¿Cómo se configura un servidor de prueba local?](/es/docs/Learn/Common_questions/set_up_a_local_testing_server)

{{NextMenu("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web")}}
