---
title: ¿Qué software necesito para construir un sitio web?
slug: Learn/Common_questions/Tools_and_setup/What_software_do_I_need
---

En este artículo se explican cuales componentes de software necesita para editar, cargar, o visualizar un sitio web.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerrequisitos:</th>
      <td>
        Deberías conocer acerca de
        <a href="/es/docs/Learn/page_vs_site_vs_server_vs_search_engine"
          >la diferencia entre páginas web, sitios web, servidores web, y
          moteres de búsqueda.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender qué componentes de software necesita si quiere editar, cargar o
        visualizar un sitio web.
      </td>
    </tr>
  </tbody>
</table>

## Resumen

Puede descargar la mayoría de los programas que necesita para el desarrollo web de forma gratuita. Proporcionaremos unos enlaces en este artículo.

Necesitarás herramientas para:

- Crear y editar páginas web
- Cargar archivos a tu servidor web
- Visualizar tu servidor web

Casi todos los sistemas operativos incluyen por defecto un editor de texto y un navegador, el cual puedes usar para ver los sitios web. Como resultado, usualmente sólo necesitas adquirir software para la transferencia de archivos a tu servidor web.

## Aprendizaje activo

_No hay aprendizaje activo disponible todavía. [Por favor, considere contribuir](/es/docs/MDN/Comenzando)._

## Profundización

### Creción y edición de páginas web

Para crear y editar un sitio web, necesita un editor de texto. Editores de texto crean y modifican archivos de texto sin formato. Otros formatos, como **{{Glossary("RTF")}}**, te permiten añadirle formato, como negrita y señalado, esos no son adecuados para escribir páginas web. Debe pensar bien qué editor de texto usar, ya que trabajará intensamente con él mientras construye el sitio web.

Todos los sistemas operativos de escritorio traen un editor de texto básico. Estos editores son muy sencillos, pero les faltan características especiales para codificar páginas web. Si desea algo un poco más elegante, hay muchas herramientas de terceros disponibles. Editores de terceros, a menudo viene con características extra, como coloreado de sintaxis, autocompletado, secciones expandibles y búsqueda de código. A continuación se muestra una lista de algunos editores:

<table>
  <thead>
    <tr>
      <th scope="col">Sistema operativo</th>
      <th scope="col">Editor incorporado</th>
      <th scope="col">Editor de terceros</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/Notepad_%28software%29"
              rel="external"
              >Notepad</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="http://notepad-plus-plus.org/">Notepad++</a></li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="https://www.jetbrains.com/webstorm/">Web Storm</a></li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li>
            <a href="http://en.wikipedia.org/wiki/TextEdit" rel="external"
              >TextEdit</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <a href="http://www.barebones.com/products/textwrangler/"
              >TextWrangler</a
            >
          </li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a href="http://en.wikipedia.org/wiki/Vi" rel="external">Vi</a> (All
            UNIX)
          </li>
          <li>
            <a href="http://en.wikipedia.org/wiki/Gedit" rel="external"
              >GEdit</a
            >
            (Gnome)
          </li>
          <li>
            <a
              href="http://en.wikipedia.org/wiki/Kate_%28text_editor%29"
              rel="external"
              >Kate</a
            >
            (KDE)
          </li>
          <li>
            <a href="http://en.wikipedia.org/wiki/Leafpad" rel="external"
              >LeafPad</a
            >
            (Xfce)
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="http://www.gnu.org/software/emacs/">Emacs</a></li>
          <li><a href="http://www.vim.org/" rel="external">Vim</a></li>
          <li>
            <a href="https://www.visualstudio.com/">Visual Studio Code</a>
          </li>
          <li><a href="http://brackets.io/">Brackets</a></li>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com/">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Chrome OS</td>
      <td></td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Aquí se muestra una captura de pantalla de un editor de texto avanzado:

![Screenshot of Notepad++.](notepadplusplus.png)

Esta es una captura de panalla de un editor de texto online:

![Screenshot of ShiftEdit](shiftedit.png)

### Subir archivos a la Web

Cuando tu sitio web está listo para visualización pública , tendrás que subir tus páginas web a tu servidor web. Puedes comprar espacio en un servidor de varios proveedores (vea el artículo [¿Cuánto cuesta hacer algo en la web?](/es/docs/Learn/How_much_does_it_cost)). Una vez que establezca qué proveedor utilizar, el proveedor le enviará un correo con la información de acceso, usualmente en la forma de una URL SFTP, nombre de usuario, contraseña, y otra información necesaria para conectarte con su servidor. Tenga en cuenta que el protocolo (S)FTP está actualmente algo pasado de moda, mientras otros sistemas de carga de archivos están comenzando a volverse populares como [RSync](https://en.wikipedia.org/wiki/Rsync) y [Git/GitHub](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).

> **Nota:** FTP es inherentemente inseguro. Deberías asegurarte de que tu proveedor de alojamiento permite el uso de una conexión segura, por ejemplo SFTP o RSync sobre SSH.

Subir archivos a un sitio web es un paso muy importante mientras se crea un sitio web, por lo que sete tema se abarca en detalle en [un artículo aparte](/es/docs/Learn/Upload_files_to_a_web_server). Por ahora, se presenta una lista de clientes (S)FTP gratuitos:

<table>
  <thead>
    <tr>
      <th scope="col">Sistema operativo</th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        Software FTP
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li><a href="http://winscp.net" rel="external">WinSCP</a></li>
          <li><a href="http://mobaxterm.mobatek.net/">Moba Xterm</a></li>
        </ul>
      </td>
      <td colspan="1" rowspan="3">
        <ul>
          <li>
            <a href="https://filezilla-project.org/">FileZilla</a> (Todos los
            SO)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a
              href="https://wiki.gnome.org/action/show/Apps/Files?action=show&#x26;redirect=Apps%2FNautilus"
              rel="external"
              >Nautilus/Files</a
            >
            (Gnome)
          </li>
          <li>
            <a href="http://dolphin.com/" rel="external">Dolphin</a> (KDE)
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li><a href="http://cyberduck.de/">Cyberduck</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Chrome OS</td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net/">ShiftEdit</a> (Todos los SO)</li>
        </ul>
      </td>
      <td colspan="1"></td>
    </tr>
  </tbody>
</table>

### Navegación por sitios web

Como ya sabe, necesita un navegador para ver los sitios web. Existen [docenas](http://en.wikipedia.org/wiki/List_of_web_browsers) de opciones de navegadores para uso personal, pero cuando usted está desarrollando un sitio web debe probarlo al menos con los navegadores principales siguientes, para estar seguro de que su sitio web funciona para la mayoría de las personas:

- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)
- [Google Chrome](https://www.google.fr/chrome/browser/)
- [Microsoft Internet Explorer](http://windows.microsoft.com/en-US/internet-explorer/download-ie)
- [Apple Safari](http://www.apple.com/safari/)

Si su sitio está destinado a un grupo específico (por ejemplo, una plataforma técnica o país), puede que tenga que probar el sitio con navegadores adicionales, como [Opera](http://www.opera.com/) o [Konqueror](http://www.konqueror.org/).

Sin embargo las pruebas se dificultan debido a que algunos navegadores sólo funcionan en determinados sistemas operativos. Apple Safari se ejecuta en iOS y Mac OS, mientras Internet Explorer corre solamente en Windows. Lo mejor es aprovechar los servicios como [Browsershots](http://browsershots.org/) o [Browserstack](http://www.browserstack.com/). Browsershots proporciona capturas de pantallas de tu sitio web en diferentes navegadores. Browserstack realmente te otorga acceso remoto a máquinas virtuales de modo que puedes probar tu sitio en los entornos más comunes. De manera alternativa, puedes instalar tu propia máquina virtual, pero se necesita algo de experiencia. (Si escoge este camino, Microsoft tiene algunas herramientas para desarrolladores incluso una [máquina virtual lista para utilizar](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)).

Sin falta ejecute algunas pruebas en dispositivos reales, especialmente en dispositivos móviles reales. Simulación de dispositivos móviles es una tecnología nueva, en evolución y menos confiable que la simulación de escritorio. Desde luego, los dispositivos móviles son costosos, por lo que le sugerimos echar un vistazo a [la inictiva de Laboratorios de dispositivos abiertos](http://opendevicelab.com/). Puede además compartir dispositivos quiere probar en diferentes plataformas sin gastar mucho.

## Próximos pasos

- Algunos de estos programas son gratis, pero no todos. [Descubra cuánto cuesta hacer algo en la web](/es/docs/Learn/Common_questions/How_much_does_it_cost).

- Si desea aprrender más sobre editores de texto, lea este artículo acerca de [cómo seleccionar e instalar un editor de texto](/es/docs/Learn/Choose,_Install_and_set_up_a_text_editor).
- Si se está preguntando cómo publicar en tu sitio web, eche un vistazo a ["Cómo subir archivos a un servidor web"](/es/docs/Learn/Upload_files_to_a_web_server).
