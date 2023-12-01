---
title: ¿Cuánto cuesta hacer algo en la Web?
slug: Learn/Common_questions/Tools_and_setup/How_much_does_it_cost
---

Dedicarse a la web no es tan barato como parece. En este artículo discutimos cuánto puedes tener que gastar, y por qué.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Deberías ya entender
        <a href="/en-US/Learn/What_software_do_I_need">qué software necesitas</a
        >, la diferencia entre
        <a href="/en-US/Learn/page_vs_site_vs_server_vs_search_engine"
          >una página web, un sitio web, etc</a
        >., y qué
        <a href="/en-US/Learn/Understanding_domain_names"
          >es un nombre de dominio</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Examina el proceso completo para crear un sitio web y descubre cuánto te
        puede costar cada paso.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

Al lanzar un sitio web, puedes no gastar nada, o puede que el costo sea muy elevado. En este artículo discutimos acerca de cuánto cuesta todo y cómo obtienes lo que pagas (o no pagas).

## Software

### Editores de texto

Probablemente tienes un editor de texto: tal como Notepad en Windows, Gedit en Linux, TextEdit en Mac. Le resultará más fácil escribir código si elige un editor que coloree el código, chequee la sintaxis y te ayude a mantener la estructura del programa.

Muchos editores son gratis, por ejemplo [Atom](https://atom.io/), [Brackets](http://brackets.io/), [Bluefish](http://bluefish.openoffice.nl/), [TextWrangler](http://www.barebones.com/products/textwrangler/), [Eclipse](http://eclipse.org/), y [Netbeans](https://netbeans.org/). Algunos, como [Sublime Text](http://www.sublimetext.com/), los puedes probar tanto como quieras, pero se te anima a pagar. Otros, como [PhpStorm](https://www.jetbrains.com/phpstorm/), pueden costar entre unas pocas docenas y 200 dólares, en dependencia del plan que pague. Algunos de ellos, como [Microsoft Visual Studio](http://www.visualstudio.com/), pueden costar cientos o miles de dólares; aunque Visual Studio Express is gratis para desarrolladores individuales o proyectos de código abierto. A menudo, los editores pagados tienen una versión de prueba.

Para comenzar, le segerimos probar con diferentes editores, para tener un indicio de cuál trabaja mejor para ti. Si está solamente escribiendo código simple de {{Glossary("HTML")}}, {{Glossary("CSS")}}, and {{Glossary("Javascript")}}, utilice un editor sencillo.

El el precio no refleja de manera confiable la calidad o utilidad de un editor de texto. Tienes que probarlo por ti mismo y decidir si se ajusta a tus necesidades. Por ejemplo, Sublime Text es barato, pero tiene muhos plugins gratis que pueden extender su funcionalidad.

### Editores de imágenes

Tu sistema incluye seguramente un simple editor de imágenes, o visor: Paint en Windows, Eye of Gnome en Ubuntu, Preview en Mac. Estos programas son relativamente limitados, pronto gustarás tener un editor más potente para añadir capas, efectos y agrupamiento de imágenes.

Los editores pueden ser gratis ([GIMP](http://www.gimp.org/), [Paint.NET](https://www.getpaint.net/)), de costo moderado ([PaintShop Pro](http://www.paintshoppro.com/), menos de $100), o cientos de dólares ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html)).

Puedes usar cualquiera de ellos, ya que tienen funciones similares, aunque algunos son tan completos que nunca vas a utilizar cada característica. Si en algún punto necesitas intercambiar proyectos con otros diseñadores, deberías descubrir qué herramientas utilizan. Los editores pueden exportar los proyectos finalizados a formatos de archivo estándares, pero cada editor guarda los proyectos actuales en su formato especializado. La mayoría de las imágenes en Internet están protegidas por los derechos de autor, por lo que es mejor chequear la licencia del aechivo antes de utilizarlo. Sitios como [Pixabay](https://pixabay.com/) proporcionan imágenes bajo la licencia CC0, así que la puedes usar, editar y publicar incluso con modificaciones para uso comercial.

### Editores de medios

Si desea incluir video o audio en su sitio web, puede incrustar servicios online (por ejemplo YouTube, Vimeo, or Dailymotion), o incluir sus propios videos (ver más abajo los costos de ancho de banda).

Para archivos de audio, puede encontrar software gratuito([Audacity](http://audacity.sourceforge.net/?lang=en), [Wavosaur](http://www.wavosaur.com/)), o pagar hasta unos poco cientos de dólares ([Sony Sound Forge](http://www.sonycreativesoftware.com/soundforge), [Adobe Audition](http://www.adobe.com/products/audition.html)). Sin embargo, el software de edición de vídeo puede ser gratis ([PiTiVi](http://www.pitivi.org/), [OpenShot](http://www.openshot.org/) for Linux, [iMovie](https://www.apple.com/mac/imovie/) for Mac), menos de $100 ([Adobe Premiere Elements](https://www.adobe.com/us/products/premiere-elements.html)), o varios cientos de dólares ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](http://www.avid.com/US/products/family/Media-Composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). El software recibido con tu cámara digital puede cubrir todas tus necesidades.

### Herramientas de publicación

Además necesitas una forma de subir archivos: desde tu disco duro a un servidor web distante. Para hacer esto deberías utilizar una herramienta de publicación tal como un cliente (S)[FTP](/es/docs/Glossary/FTP), [RSync](https://en.wikipedia.org/wiki/Rsync), o [Git/GitHub](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

Cada sistema operativo incluye un cliente (S)FTP, como parte de su administrador de archivos. Windows Explorer, Nautilus (un administrador de archivos común en Linux), y Mac Finder inclueyen todos esta funcionalidad. Sin embargo, las personas a menudo seleccionan clientes (S)FTP dedicados a mostrar directorios locales y remotos y almacenar contraseñas de servidor.

Si desea instalar un cliente (S)FTP, existen varias opciones seguras y gratuitas: por ejemplo, [FileZilla](https://filezilla-project.org/) para todas las plataformas, [WinSCP](http://winscp.net/) para Windows, [Cyberduck](https://cyberduck.io/) para Mac o Windows, [y otros más](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

Debido a que el protocolo FTP es inseguro, deberías asegurarte de utilizar SFTP — la versión segura, encriptada de FTP que la mayoría de los sitios de alojamiento (en inglés _hosting_) actuales ofrecen por defecto— u otra solución segura como Rsync sobre SSH.

## Navegadores

Ya debes tener un navegador o puedes conseguirlo gratuito. Si lo necesitas, descarga Firefox [aquí](https://www.mozilla.org/en-US/firefox/all/) o Google Chrome [aquí](https://www.google.com/chrome/browser/).

## Acceso a la web

### Computadora / módem

Necesitas una computadora. El costo puede variar mucho, en dependencia de tu presupuesto, y dónde vivas. Para publicar un sitio web básico, sólo necesitas una computadora básica capaz de ejecutar, por lo que el nivel de entrada puede ser bastante bajo.

Por supuesto, necesitarás una computadora más formal si quieres producir diseños complicados, retocar fotos, o producir archivos de audio y vídeo.

Necesitas subir contenido a un servidor remoto (ver _Alojamiento_ más abajo), por lo que necesitas un módem.Tu proveedor {{Glossary("ISP")}} puede venderte la conexión a internet por unos pocos dólares al mes, aunque tu presupuesto pudiera variar, en dependencia de tu localización.

### Acceso del Proveedor ISP

Asegúrese de contar con suficiente {{Glossary("Ancho de banda", "ancho de banda")}}:

- El acceso de ancho de banda bajo puede ser adecuado para soportar un sitio web simple: imágenes reducidas, textos, algunos archivos CSS y JavaScript. Esto probablemente te cueste unas pocas docenas de dólares, incluyendo la renta del módem.
- De otra manera, necesitarás un ancho de banda superior, tal como acceso por DSL, cable, o fibra, si desea un sitio web más avanzado con cientos de archivos o quiere entregar archivos pesados de vídeo/audio directamente desde tu servidor. Te pudiera costar lo mismo que el acceso de ancho de banda bajo, hasta varios cientos de dólares mensuales para necesidades más profesionales.

## Alojamiento

### Entendiendo el ancho de banda

Los proveedores de alojamiento te cobran de acuerdo a cuánto {{Glossary("Ancho de banda", "ancho de banda")}} consume tu sitio web. . Esto depende de cuántas personaas, y robots de rastreo Web, accedan a tu contenido durante un tiempo dado, y cuánto espacio en el servidor tu contenido ocupa. Esta es la razón por la cual las personas usualmente almacenan sus videos en servicios dedicadostales como Youtube, Dailymotion, y Vimeo. Por ejemplo, tu proveedor puede tener un plan que incluye hasta varios miles de visitantes por díam por un uso "razonable". Sea cuidadoso, puesto que puede variar mucho de un servidor de alojamiento a otro. Como regla de oro, reconozca que el servicio de alojamiento confiable, pagado y personal puede costar alrededor de 10 a 15 dólares al mes.

> **Nota:** Note que que no existe el ancho de banda "ilimitado". Si consumes una enorme cantidad de ancho de banda, espere pagar una enorme cantidad de dinero.

### Nombre de dominio

Su nombre de dominio tiene que ser comprado a través de un proveedor de nombres (un registrador). Tu proveedor de alojamiento puede además ser un registrador (por ejemplo [1&1](https://www.1and1.com/) y [Gandi](https://www.gandi.net/?lang=en) son al mismo tiempo registradores y proveedores de alojamiento). El nombre de dominio usualmente cuesta $5-15 por año. Este costo varía en dependencia de:

- Obligaciones locales: algunos nombres de dominio de primer nivel pertenecientes a países son más costosos, ya que diferentes países establecen precios diferentes.
- Servicios asociados con un nombre de dominio: algunos registradores proveen protección contra spam ocultando tu dirección postal y corre electrónico detrás de sus propias direcciones: la dirección postal puede ser proveída a cargo del registrador y tu dirección de correo puede ser ocultada detrás del alias de tu registrador.

### Alojamiento de aficionados vs. Alojamiento "empaquetado"

Cuando deseas publicar un sitio web, puedes hacer todo por ti mismo: preparar una base de datos (si es necesaria), Sistema de Gestión de Contenidos, or {{Glossary("CMS")}} (como [Wordpress](http://wordpress.org/), [Dotclear](http://dotclear.org/), [spip](http://www.spip.net/en_rubrique25.html), etc.), subir tus propias plantillas o contenido preeditado.

Pudieras utilizar el entorno de tu proveedor de alojamiento, por aproximadamente de 10 a 15 dólares al mes, o suscribirse directamente a un servicio de alojamiento con CMS pre-empaquetado (por ejemplo, [Wordpress](http://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Para esta última no tienes que pagar nada, pero puedes tener menos control sobre las plantillas y otras opciones.

### Alojamiento gratuito vs. alojamiento pagado

Te pudieras preguntar, ¿por qué pago por mi alojamiento cuando existen tantos servicios gratuitos?

- Tienes más libertad cuando pagas. Tu sitio web es tuyo, y puedes trasladarlo a la perfección de un proveedor de alojamiento a otro.
- Los proveedores de alojamiento gratuito puede añadir anuncios Free hosting providers may add advertising to your content, beyond your control.

Es mejor pagar el alojamiento que depender de alojamiento gratuito, ya que en la mayoría de los sitios pagados es posible trasladar tus archivos fácilmente y el tiempo de actividad está garantizado. La mayoría de los proveedores de alojamiento te dan un gran descuento para comenzar.

Algunas personan optan por un enfoque mixto. Por ejemplo, su blog principal en un sitio pagado con un nombre de dominio completo, y a su vez contenido espóntaneo, menos estratégico en un servicio de alojamiento gratuito.

## Agencias y alojamiento de sitios web profesionales

Si desea un sitio web profesional, probablemente le pedirás a una agencia web que lo haga por ti.

Aquí, los costos dependen de múltiples factores, tales como:

- ¿Es este un sitio web sencillo con unas pocas páginas de texto? ¿O un sitio web más complejo con miles de extensas páginas?
- ¿Quieres actualizarlo de manera regular? ¿O será un sitio web estático?
- ¿Tu sitio web debe conectarse a tu compañía para obtener el contenido (es decir, datos internos)?
- ¿Quieres algunas características fanstásticas de las más usadas del momento? En el momento que se escribió este artículo, los clientes buscan sitios de página única con complicados paralajes (React).
- ¿Necesitarás que la agencia cree historias de usuarios o resuelva complejos problemas {{Glossary("UX")}}? Por ejemplo, crear una estrategia que atraiga usuarios, o pruebas A/B para seleccionar una solución entre diferentes ideas.

...y para alojamiento:

- ¿Quieres servidores adicionales, en caso de que tu servidor se caiga?
- ¿Es 95% porciento adecuada la fiabilidad, o necesitas servicio profesional las 24 horas?
- ¿Quiere un gran perfil, servidores dedicados ultra-responsivos, o puede trabajar con una máquina más lenta compartida?

En dependencia de cómo responda estas preguntas, su sitio pudiera costar miles hasta cientos de miles de dólares.

## Próximos pasos

Ahora que entiende que cantidad de dinero su sitio puede costarle, es tiempo de comenzar a diseñar un sitio web y [preparar su entorno de trabajo](/es/docs/Learn/Set_up_a_basic_working_environment).

- Lea sobre [cómo seleccionar e instalar un editor de texto](/es/docs/Learn/Choose,_Install_and_set_up_a_text_editor).
- SI está más enfocado en diseño, eche una mirada a la [anatomía de una página web](/es/Learn/Anatomy_of_a_web_page).
