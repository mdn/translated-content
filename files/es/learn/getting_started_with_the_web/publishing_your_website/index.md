---
title: Publicar tu sitio web
slug: Learn/Getting_started_with_the_web/Publishing_your_website
---

{{LearnSidebar()}}

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works","Learn/Getting_started_with_the_web")}}

Una vez que termines de escribir tu código y organizar los archivos que forman parte de tu sitio, debes ponerlo en línea para que la gente pueda consultarlo. Este artículo muestra cómo conseguir de manera sencilla que tu código esté en línea.

## ¿Cuáles son las opciones?

Publicar un sitio no es un tema sencillo, principalmente porque hay muchas maneras diferentes de hacerlo. En este artículo no se trata de ver todos los modos posibles. En su lugar, discutiremos los pros y contras de tres amplias estrategias desde el punto de vista de un principiante, y luego debes seleccionar qué método usarás.

### Obtener alojamiento y un nombre de dominio

Si deseas un control total sobre tu sitio web publicado, probablemente necesitarás gastar dinero para comprar:

- _Alojamiento_ (_Hosting_) — espacio de almacenamiento alquilado en el [servidor web](/es/docs/Learn/Common_questions/Que_es_un_servidor_WEB) de una compañia de alojamientos. Pones los archivos de tu sitio web en este espacio, y el servidor web suministra el contenido a los usuarios que lo solicitan.
- Un [nombre de dominio](/es/docs/Learn/Common_questions/What_is_a_domain_name) — dirección única mediante la cual la gente puede encontrar tu sitio web, como `https://www.mozilla.org`, o `https://es.wikipedia.org/`. Puedes tomar en alquiler el nombre de tu dominio durante algunos años en un **registrador de dominio**.

Muchos sitios web profesionales toman esta opción.

Además, necesitarás un programa de [protocolo de transferencia de archivo](/es/docs/Glossary/FTP) (_File Transfer Protocol_, FTP) para transferir los archivos que conforman tu sitio web al servidor (mira más detalles de [cuánto puede costar: software](/es/docs/Learn/Common_questions/Cuanto_cuesta#Software)). Los programas FTP varían ampliamente, pero en general tienes que conectarte a tu servidor web contratado mediante detalles proporcionados por tu empresa de alojamiento (por ejemplo: nombre de usuario, contraseña, nombre del _host_). Una vez conectado con el servidor web el programa te mostrará tus archivos locales y los archivos del servidor web en dos ventanas y te proporcionará una forma de transferir los archivos de un lado a otro.

![](ftp.jpg)

#### Consejos para elegir alojamienoto y dominio

- En MDN no promovemos empresas comerciales de alojamiento o resgistradoras de nombre de dominio específicas. Para encontrarlas basta con buscar «alojamiento web» o «_hosting_ web» y «nombres de dominio». A veces las empresas proporcionan ambos en un paquete único. Los registradores acostumbran a facilitar la manera de comprobar si el nombre de dominio que deseas para tu sitio está disponible.
- El [proveedor de servicio de Internet](/es/docs/Glossary/ISP) (ISP) de tu casa u oficina puede proporcionar algún alojamiento limitado para un pequeño sitio web. El conjunto de características disponibles será limitado, pero podría ser perfecto para tus primeros experimentos; ¡ponte en contacto con ellos y pregunta!

- Hay servicios gratiuitos disponibles como [Neocities](https://neocities.org/), [Blogspot](https://www.blogger.com), y [Wordpress](https://es.wordpress.com/). Una vez más, obtienes lo que pagas, pero son ideales para tus experimentos iniciales. Los servicios gratuitos en su mayoría no requieren software de FTP para transferencias de archivos pues permiten arrastrar y soltar archivos justo dentro de su interfaz web.
- Muchas compañías proporcionan alojamiento y dominio simultáneamente.

### Utilizar una herramienta en línea como GitHub o Dropbox

Algunas herramientas te permiten publicar tu sitio en línea:

- [GitHub](https://github.com/) es un sitio de «codificación social». Te permite cargar repositorios de código para almacenarlos en el **sistema de control de versiónes** de [Git](http://git-scm.com/). De esta manera puedes colaborar en proyectos de código pues por defecto el sistema es de código abierto, lo que significa que cualquier persona en el mundo puede encontrar tu código en GitHub, usarlo, aprender de él y mejorarlo. ¡Puedes hacer esto con el código de otra persona también! Git es un [sistema de control de versiones](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Acerca-del-Control-de-Versiones) muy popular y GitHub es una comunidad muy importante y útil por lo que la mayor parte de empresas de tecnología ahora lo usan en su proceso laboral. GitHub tiene una característica muy útil llamada [GitHub Pages](https://pages.github.com), que te permite exponer el código de tu sitio web en vivo en la web.
- [Dropbox](https://www.dropbox.com/) es un sistema de almacenamiento de archivos que te permite guardar los archivos en la web y tenerlos disponibles desde cualquier ordenador. Cualquier persona con una conexión a Internet puede acceder a cualquier carpeta de Dropbox que esté accesible al público. Si esa carpeta contiene los archivos del sitio web, estos serán visualizados como un sitio web de forma automática.
- [Google App Engine](https://cloud.google.com/appengine/) es una poderosa plataforma que permite construir y ejecutar aplicaciones en la infraestructura de Google, ya sea que necesites construir una aplicación web de varios niveles desde cero o alojar un sitio web estático. Para obtener más información consulta [¿Cómo se aloja un sitio web en Google App Engine?](/es/docs/Learn/Common_questions/How_do_you_host_your_website_on_Google_App_Engine) (en inglés).

A diferencia de la mayoría de alojamientos (servicios de _hosting_), tales herramientas son por lo general libres de utilizar, pero solo permiten un conjunto de funciones limitadas.

### Utilizar un entorno basado en web como CodePen

Existe un número de aplicaciones web que emulan un entorno de desarrollo de sitios web, permitiendo que ingreses tu código HTML, CSS y Javascript y luego muestran los resultados de dicho código como un sitio web, ¡todo en una pestaña del navegador! En términos generales, estas herramientas son bastante sencillas, geniales para aprender, buenas para compartir código (por ejemplo, si quieres compartir con alguien una técnica o pedir ayuda en la depuración del código) y gratuitas para las funciones básicas. Además, mantienen tu página renderizada en una única dirección web. Sin embargo, las características básicas son muy limitadas y estas aplicaciones usualmente no proveen espacio de almacenamiento para recursos (como imágenes).

Prueba con algunos de estos ejemplos y observa cuál es el que mejor se adapta a tu gusto:

- [JSFiddle](http://jsfiddle.net/)
- [Glitch](https://glitch.com/)
- [JS Bin](http://jsbin.com/)
- [CodePen](https://codepen.io/)

![](jsbin-screen.png)

## Publicar a través de GitHub

Explicados estos tres métodos veamos ahora cómo publicar fácilmente, de forma muy visual e intuitiva, o bien por medio de comandos, tu sitio a través de [GitHub Pages](https://pages.github.com/) (en inglés).

### De manera visual y sin necesidad de más herramientas

Esta no es la única manera, pero sí la que te permite poner manos a la obra inmediatamente.

1. Si aún no lo has hecho [da de alta una cuenta en GitHub](https://github.com/join). Es simple y sencillo, solo debes verificar tu dirección de correo electrónico.
2. Una vez registrado, ingresa a tu cuenta en GitHub.com con tu usuario y contraseña suministrados al crear tu cuenta.
3. A continuación, necesitas crear un nuevo repositorio para tus archivos. Haz clic en el signo más (+) en la parte superior derecha de la página inicial de GitHub y selecciona _New Repository_ (Nuevo repositorio).
4. En esta página, en la casilla _Repository name_ (Nombre del repositorio), ingresa <kbd><em>usuario</em>.github.io</kbd>, donde _usuario_ es tu nombre de usuario. Así por ejemplo, nuestro amigo Bob Smith ingresaría _<kbd>bobsmith.github.io</kbd>_. ![](github-create-repo.png)

5. Opcionalmente escribe una corta descripción de tu sitio web en el campo _Description_ para que recuerdes cuál es la temática que tratarás en él y selecciona la casilla de verificación _Public_ (Público) si quieres que cualquier persona pueda ver los resultados de las ediciones que haces al sitio web que estás creando.
6. Marca la casilla de verificación _Initialize this repository with a README_ (Inicializar este repositorio con un README (LÉAME)). Esto te permitirá clonar inmediatamente el repositorio a tu equipo. ¡Si vas a transferir tus archivos desde tu equipo al servidor de GitHub a través de un cliente de FTP (como se explica en la sección _[Subir tus archivos a GitHub a través de la línea de comandos](/es/docs/Learn/Getting_started_with_the_web/Publishing_your_website#Subir_tus_archivos_a_Github_a_través_de_la_línea_de_comandos)_, a continuación), **no debes realizar este paso**!

7. Da clic en _Create repository_ (Crear repositorio).
8. Arrastra y suelta el contenido de la carpeta de tu sitio web en tu repositorio. Cuando termines de pasar el contenido haz clic en _Commit changes_ (Confirmar cambios).

   > **Nota:** cerciórate que tu carpeta tiene un archivo de nombre <kbd>index.html</kbd>

9. En tu navegador desplázate a <kbd>username.github.io</kbd> para ver tu sitio web en línea. Por ejemplo, para el nombre de usuario Bob Smith, escribe <kbd>bobsmith.github.io</kbd>.

   > **Nota:** puede que tu página web tarde unos minutos en entrar en funcionamiento. Si tu sitio web no se muestra inmediatamente, espera unos minutos e inténtalo de nuevo.

### Subir tus archivos a GitHub a través de la línea de comandos

No estamos diciendo que esta es la única manera, o la mejor, de publicar tu sitio, pero es gratis, decentemente simple y abarca algunas nuevas habilidades que encontrarás útiles en adelante.

Antes que nada, [descarga e instala Git](http://git-scm.com/downloads) en tu equipo. Este paso es necesario si vas a trabajar con los archivos de tu página web en él y luego los transferirás al servidor de GitHub.

Sigue los pasos **1 a 5** y el **7** (recuerda omitir el 6) detallados en la anterior sección _[De manera visual y sin necesidad de más herramientas](/es/docs/Learn/Getting_started_with_the_web/Publishing_your_website#De_manera_visual_y_sin_necesidad_de_m%C3%A1s_herramientas)_. Una vez hayas dado clic en _Create repository_ (Crear repositorio) verás la siguiente ventana (¡no la cierres, más adelante necesitarás copiar información de allí!):

![](github-populate-repo.png)

En este punto ya estarás listo para poder utilizar la línea de comandos para subir los archivos de tu repositorio a GitHub. Una _línea de órdenes o de comandos_ es una ventana donde escribes comandos que realizarán tareas como crear archivos y ejecutar programas, en lugar de utiizar la interfaz gráfica de usuario. Se debe parecer a algo como esto:

![](command-line.png)

> **Nota:** si no te sientes cómodo utilizando la línea de comandos, podrías considerar usar [Git graphical user interface](http://git-scm.com/downloads/guis) para realizar la misma tarea.

Todos los sistemas operativos vienen con una herramienta de línea de comandos:

- **Windows**: se puede acceder al **Intérprete de comandos** desde el menú que se presenta al pulsar _Win + X_ (o abre el menú pulsando el botón secundario del ratón sobre el botón Inicio de Windows en la parte inferior izquierda del escritorio). Advierte que Windows tiene sus propias sintaxis de comandos diferente a las de Linux y MacOS X, así que los siguientes comandos pueden variar para tu máquina.
- **MacOS X**: **Terminal** puede ser hallada en Aplicaciones _> Utilidades_.
- **Linux**: usualmente puedes abrir una terminal con _Ctrl + Alt + T_. Si esto no funciona, busca **Terminal** en la barra de aplicaciones o en el menú.

Aunque este procedimiento pueda parecer un poco aterrador al principio no te preocupes, pronto te darás cuenta de lo básico. Darás órdenes al equipo en el terminal escribiendo un comando y presionando <kbd>Intro</kbd>.

1. Apunta la línea de comandos a tu directorio `sitio-prueba` (o como quiera que hayas llamado al directorio que contiene tu sitio web). Para esto utiliza el comando `cd` (es decir, _«change directory»_, _«cambiar de directorio»_). Aquí viene lo que deberías teclear si has ubicado tu sitio web en un directorio llamado `sitio-prueba` en tu escritorio:

   ```bash
   cd Desktop/sitio-prueba
   ```

   En Windows sería:

   ```bash
   cd %USERPROFILE%\Desktop\sitio-prueba
   ```

2. Cuando la línea de comandos esté apuntando dentro del directorio de tu sitio web, teclea el siguiente comando, que indica a la herramienta de `git` que transforme el directorio en un repositorio de Git:

   ```bash
   git init
   ```

3. A continuación, regresa a la ventana del sitio de GitHub que dejaste abierta. En esa página, la sección que interesa es _…or push an existing repository from the command line_. Deberías ver dos líneas de código listadas en esa sección. Copia toda la primera línea, pégala en la línea de comandos y presiona <kbd>Intro</kbd>. El comando debería verse similar a:

   ```bash
   git remote add origin https://github.com/bobsmith/bobsmith.github.io.gi
   ```

4. A continuación, ingresa los siguientes dos comandos, presionando <kbd>Intro</kbd> después de cada uno. Estos preparan el código para cargar a GitHub y pedir a Git administrar estos archivos.

   ```bash
   git add --all
   git commit -m 'agregando archivos a mi repositorio'
   ```

5. Finalmente, envía el codigo a GitHub tomando de la página web de GitHub en la que estás el segundo de los dos comandos del paso 3 e introdúcelo en el terminal:

   ```bash
   git push -u origin master
   ```

6. Ahora cuando vayas a la direccion de red de tu página GitHub (_usuario.github.io_) en una nueva pestaña del navegador ¡deberías ver tu sitio en línea! Envíala por correo-e a tus amigos y presume de tu maestría.

> **Nota:** has tocado apenas la superficie de Git. Si te quedas atascado la [ayuda de GitHub en español](https://help.github.com/es/github/working-with-github-pages/getting-started-with-github-pages) te será de gran apoyo.

### Conocer más de GitHub

Si deseas hacer más cambios a tu sitio y enviarlos a GitHub, luego de modificar los archivos, debes ingresar los siguientes comandos (presionando <kbd>Intro</kbd> después de cada uno) para enviar esos cambios a GitHub:

```bash
git add --all
git commit -m 'otro commit'
git push
```

Puedes reemplazar el texto _otro commit_ con un mensaje más descriptivo respecto a los cambios que hiciste.

## Conclusión

En este punto, deberías tener tu página web de ejemplo disponible en una dirección web única. ¡Bien hecho!

![](hosted-final-site.png)

### Ver también

- [¿Qué es un servidor web?](/es/docs/Learn/Common_questions/Que_es_un_servidor_WEB)
- [¿Qué es un nombre de dominio?](/es/docs/Learn/Common_questions/What_is_a_domain_name)
- [¿Cuánto cuesta hacer algo en la web?](/es/docs/Learn/Common_questions/Cuanto_cuesta)
- [Cheap or free static web hosting](http://alignedleft.com/resources/cheap-web-hosting) (Alojamiento web estático barato o gratuito) _de Scott Murray_ tiene algunas ideas útiles sobre servicios disponibles aunque el sitio ya está algo desactualizado (en inglés).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web/How_the_Web_works","Learn/Getting_started_with_the_web")}}
