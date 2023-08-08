---
title: ¿Cómo se utiliza Github pages?
slug: Learn/Common_questions/Tools_and_setup/Using_GitHub_pages
---

[GitHub](https://github.com/) es un sitio "social coding". Te permite subir repositorios de código para almacenarlo en el **sistema de control de versiones** [Git](http://git-scm.com/). Tu puedes colaborar en proyectos de código, y el sistema es código abierto por defecto, lo que significa que cualquiera en el mundo puede encontrar tu código en GitHub, usarlo, aprender de el, y mejorarlo. ¡Tú puedes hacer eso con el código de otras personas tambien! Este artículo provee una guía básica para publicar contenido usando la característica gh-pages de Github.

## Publicando contenido

Github es una comunidad muy importante y útil para involucrarse, y Git/GitHub es un [sistema de control de versiones](http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) muy popular — la mayoría de las empresas de tecnología ahora lo utilizan en su flujo de trabajo. GitHub tiene una característica muy útil llamada [GitHub pages](https://pages.github.com/), que te permite publicar el código del sitio en vivo en la Web.

### Configuración básica de Github

1. Primero que todo, [instala Git](http://git-scm.com/downloads) en tu máquina. Este es el software del sistema de control de versiones subyacente en el que GitHub funciona.
2. Seguido, [Regístrate para una cuenta de GitHub](https://github.com/join). Es simple y fácil.
3. Una vez te hayas registrado, inicia sesión en [github.com](https://github.com) con tu nombre de usuario y contraseña.

### Preparando tu código para subirlo

Tú puedes almacenar cualquier código que tu quieras en un repositorio de Github, pero para usar la característica páginas de Github con pleno efecto, tu código debe estar estructurado como un sitio web típico, por ejemplo que el punto de entrada primario sea un archivo HTML llamado `index.html`.

La otra cosa que necesitas hacer antes de seguir adelante es inicializar el directorio de código como un repositorio Git. para hacer esto:

1. Apunta la línea de comandos a tu directorio `test-site` (o como se llame el directorio que contiene tu sitio web). Para esto, usa el comando `cd` (Es decir "_cambio de directorio_"). Esto es lo que deberías digitar si has puesto tu sitio web en un directorio llamado `test-site` en tu escritorio:

   ```sh
   cd Desktop/test-site
   ```

2. Cuando la línea comandos está apuntando hacia el interior del directorio de tu sitio web, digita el siguiente comando, que le dice a la herramienta `git` para convertir el directorio en un repositorio git:

   ```sh
   git init
   ```

#### An aside on command line interfaces

La mejor manera de subir tu código a Github es mediante la linea de comandos — esta es una ventana donde tú escribe comandos para hacer cosas como crear archivos y ejecutar programas, en lugar de hacer clic dentro de una interfaz de usuario. Se verá algo como esto:

![](command-line.png)

> **Nota:** Tú también podrías considerar una [interfaz gráfica de usuario de Git](http://git-scm.com/downloads/guis) para hacer el mismo trabajo, si te sientes incómodo con la linea de comandos.

Cada sistema operativo viene con una herramienta de línea de comandos:

- **Windows**: **Command Prompt** se puede acceder pulsando la tecla Windows, tipeando _Command Prompt_, Y elegirlo de la lista que aparece. Nota que Windows tiene sus propias convenciones de comando diferentes de Linux y OS X, así que los comandos abajo pueden variar en su máquina.
- **OS X**: **Terminal** se puede encontrar en _Aplicaciones > Utilidades_.
- **Linux**: Por lo general, puede extraer una terminal con _Ctrl + Alt + T_. Si eso no funciona, busca **Terminal** en una barra de aplicaciones o menú.

Esto puede parecer un poco espantoso al principio, pero no te preocupes — que pronto conseguiras la caída de los conceptos básicos. Tú le dices a la computadora que haga algo en la terminal, digitando un comando y oprimiendo la tecla Enter, como se ha visto anteriormente.

### Creando un repositorio para tu código

1. A continuación, tu necesitas crear un nuevo repositorio para colocar tus archivos en el. Has clic en el signo más (+) en la parte superior derecha de la página de inicio de GitHub, luego escoge _Nuevo Repositorio_.
2. En esta página, en la caja _Nombre del Repositorio_, digita el nombre para tu repositorio de código, por ejemplo _my-repository_.
3. También llena una descripción para decir lo que tu repositorio va a contener. Tu pantalla debe mostrar algo como esto:
   ![](create-new-repo.png)
4. Has Clic en _Crear repositorio_; Esto debería llevarte a la siguiente página:
   ![](github-repo.png)

### Subiendo tus archivos a GitHub

1. En la página actual, tú estás interesado en la sección _…o empujar un repositorio existente desde la línea de comandos_. Tú deberias ver dos lineas de código listado en esta sección. Copia la totalidad de la primera línea, pégala en la línea de comandos, presiona la tecla Enter. El comando debería mostrarte algo como esto:

   ```sh
   git remote add origin https://github.com/chrisdavidmills/my-repository.git
   ```

2. A continuación, digita los siguientes dos comandos, presionando Enter despues de cada uno. Estos preparán el código para subirlo a GitHub, y pida a GIt que administre estos archivos.

   ```sh
   git add --all
   git commit -m 'adding my files to my repository'
   ```

3. Por último, empuja el código hasta GitHub yendo a la página de GitHub en la que estas e ingresando en la terminal el segundo de los dos comandos que vimos _…o empuje un repositorio existente desde la sección de línea de comandos_:

   ```sh
   git push -u origin master
   ```

4. Ahora necesitas crear la rama gh-pages de tu repositorio; actualiza la página actual y verá una página del repositorio algo así como la de abajo. Tú necesitas presionar el boton que dice _Branch: **master**_, digita _gh-pages_ en el campo de texto, luego presiona el boton azul que dice _Create branch: gh-pages_. Esto crea una rama de código especial llamada gh-pages que es publicada en una ubicación especial. La URL toma la forma _username.github.io/my-repository-name_, asi en mi caso de ejemplo, la URL debería ser `https://chrisdavidmills.github.io/my-repository`. La página mostrada es la página index.html.

5. Navega tu dirección web de GitHub pages en un nuevo ta del navegador, y tu deberias ver tu sitio en linea! Mandalo por correo electrónico a tus amigos y muestra tu dominio.

> **Nota:** Si te atascas, la [página de inicio de GitHub Pages](https://pages.github.com/) también es muy útil.

### Un mayor conocimiento de GitHub

Si deseas realizar más cambios en su sitio de prueba y cargarlos en GitHub, simplemente tendrás que realizar el cambio en tus archivos como antes. A continuación, debes introducir los siguientes comandos (pulsando Intro después de cada uno) para empujar los cambios a GitHub:

```sh
git add --all
git commit -m 'another commit'
git push
```

Puedes reemplazar _otro commit_ con un mensaje más adecuado para describir qué cambio acaba de hacer.

Apenas hemos arañado la superficie de Git.Para obtener más información, comience con el [sitio de ayuda de GitHub](https://help.github.com/index.html).
