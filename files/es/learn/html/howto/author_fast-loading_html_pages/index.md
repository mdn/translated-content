---
title: Consejos para la creación de páginas HTML de carga rápida
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
---

## Consejos para la creación de páginas HTML de carga rápida

Estos consejos estan basados en conocimiento común y experimentación.

Una página web optimizada no solo provee una mayor respuesta a su sitio por parte de los visitantes, sino que también reduce la carga en su servidores web y en su conexión de internet. Esto puede ser crucial para sitios con alto volumen o sitios que tienen un pico de trafico debido a circunstancias inucuales como noticias de ultima hora.

Optimizar la carga de páginas no es solo para el contenido que será visto atraves de una estrecha conexión telefónica o dispositivos móviles. Es tan importante para el contenido de banda ancha y puede conducir a mejoras espectaculares incluso para sus visitantes con las conexiones más rápidas.

### Consejos

#### Reducir el peso de las páginas web

El peso de las páginas web es por mucho el factor más importante en el rendimiento de carga de una página.

Reducir el peso de la página mediante la eliminación de espacios en blanco innecesarios y comentarios, comunmente se coonoce como minimalización, y al mover "inline-script" y "CSS" a un archivo externo, puede mejorar el rendimiento de la descarga con minimas necesidades de otros cambios en la estructura de la página.

Herramientas como [HTML Tidy](http://tidy.sourceforge.net/) pueden quitar automáticamente espacios en blanco y las líneas en blanco adicionales de código fuente HTML valido. Otras herramientas pueden "comprimir" JavaScript al reformatear el codigo fuente o por ofuscación la fuente y la sustitución de los identificadores largos con versiones mas cortas.

### Minimizar el número de archivos

Reducir el número de archivos referentes en una pagina web baja el número de conexiones [HTTP](/es/docs/HTTP) requeridas para bajar la página.

Dependiendo de la configuración de cache de un navegador, puede enviar una petición "If-Modified-Since" al servidor web para cada "CSS", JavaScript o archivo de imágen, preguntando si el archivo ha sido modificado desde la ultima vez que fué descargado.

Al reducir el número de archivos que son refereciados dentro de una página web, se reduce el tiempo necesario para que estas solicitudes se envíen, y para que sus respuestas que se reciban.

Si se usan muchas imágenes de fondo en sus "CSS", puedes reducir la cantidad de busquedas HTTP necesarias al combinar las imagenes en una, conocido como "image sprite". Luego solamente se aplica la misma imagen cada vez que lo necesite para un fondo, ajustando las coordenadas el eje (X / Y) adecuadamente. Estas técnica trabaja mejor con elementos que tendrán dimensiones limitadas, no funcionará para todos los usos de imagenes de fondo, sin embargo, la menor cantidad de pedidos HTTP y el uso de una única imágen en caché puede reducir el timepo de carga de una página.

Demasiado tiempo gastado en consultar la ultima modificación de los archivos referenciados puede demorar la pantalla inicial de una página web, ya que el explorador debe comprobar la fecha de modificación de cada archivo CSS o JavaScript, antes de pintar la página.

### Reducir la busqueda de dominios

Debido a que cada dominio separado cuesta tiempo en una busqeuda DNS, el tiempo de carga de la página crecerá junto con el número de dominios que aparecen en enlace CSS (s), JavaScript y recursos de imagen.

Esto no puede ser siempre práctico; sin embargo siempre se debe tener cuidado de usar sólo el número mínimo necesario de los diferentes dominios en sus páginas.

### Reutilización de contenido de cache

Asegúrese de que cualquier contenido que se pueden almacenar en caché, se almacena en caché, y con fechas de caducidad correspondientes.

En particular, prestar atención a la cabecera "`Last-Modified`". Permite el eficiente almacenamiento en cache de la página; por medio de esta cabecera, la información se transmite al agente de usuario sobre el archivo que quiere cargar, por ejemplo, como cuando fue modificada por última vez. La mayoría de los servidores web añadirá automáticamente la cabecera Last-Modified para páginas estáticas (por ejemplo .html, .css), basado en la fecha de última modificación almacenada en el sistema de archivos. Con páginas dinámicas (por ejemplo, .php, .aspx), esto, por supuesto, no se puede hacer, y la cabecera no se envía.

Así, en particular para las páginas que se generan de forma dinámica, un poco de investigación sobre este tema es beneficioso. Puede ser un poco complicada, pero se ahorrará mucho en las solicitudes de página en las páginas que normalmente no serían cacheable.
