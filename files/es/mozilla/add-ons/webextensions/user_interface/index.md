---
title: Interfaz de usuario
slug: Mozilla/Add-ons/WebExtensions/user_interface
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

Las extensiones que usan las API de WebExtension se proporcionan con varias opciones de interfaz de usuario para que su funcionalidad pueda estar disponible para el usuario. A continuación se proporciona un resumen de esas opciones, con una introducción más detallada a cada opción de la interfaz de usuario en esta sección.

> **Nota:** Para obtener consejos sobre el uso de estos componentes de la interfaz de usuario para crear una excelente experiencia de usuario en su extensión, consulte el artículo [Prácticas recomendadas para la experiencia del usuario](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Opción de interfaz de usuario</th>
      <th scope="col">Descripción</th>
      <th scope="col">Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action"
          >Botón de la barra de herramientas</a
        >
        (acción del navegador)
      </td>
      <td>
        Un botón en la barra de herramientas del navegador que envía un evento
        a la extensión cuando se hace clic. De forma predeterminada,
        el botón está visible en todas las pestañas.
      </td>
      <td>
        <img
          alt="Ejemplo que muestra un botón de la barra de herramientas (acción del navegador)."
          src="browser-action.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Botón de la barra de herramientas con una
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >ventana emergente</a
        >
      </td>
      <td>
        Una ventana emergente en un botón en la barra de herramientas del navegador
        que se abre cuando se hace clic en el botón. La ventana emergente se define
        en un documento HTML que maneja la interacción del usuario.
      </td>
      <td>
        <img
          alt="Ejemplo de la ventana emergente en un botón de la barra de herramientas"
          src="popup-shadow.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions"
          >Botón de la barra de direcciones</a
        >
        (acción de la página)
      </td>
      <td>
        Un botón en la barra de direcciones del navegador que envía un evento
        a la extensión cuando se hace clic. De forma predeterminada, el botón
        está oculto en todas las pestañas.
      </td>
      <td>
        <img
          alt="Ejemplo que muestra un botón de la barra de direcciones (acción de página)"
          src="address_bar_button.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        Botón de la barra de direcciones con una
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups"
          >ventana emergente</a
        >
      </td>
      <td>
        Una ventana emergente en un botón en la barra de direcciones del navegador
        que se abre cuando se hace clic en el botón. La ventana emergente se define
        en un documento HTML que maneja la interacción del usuario.
      </td>
      <td>
        <img
          alt="Ejemplo de una ventana emergente en el botón de la barra de direcciones"
          src="page_action_popup.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items"
          >Elemento del menú contextual</a
        >
      </td>
      <td>
        Elementos de menú, casillas de verificación y botones de radio en uno
        o más de los menús contextuales del navegador. Además, los menús se pueden
        estructurar agregando separadores. Cuando se hace clic en los elementos
        del menú, se envía un evento a la extensión.
      </td>
      <td>
        <img
          alt="Ejemplo de elementos de menú de contenido agregados por una WebExtension, del ejemplo de demostración de menú contextual"
          src="context_menu_example.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars"
          >Barra lateral</a
        >
      </td>
      <td>
        <p>
          Un documento HTML que se muestra junto a una página web, con la opción
          de contenido único por página. La barra lateral se abre cuando se instala
          la extensión, luego obedece a la selección de visibilidad de la barra lateral
          del usuario. La interacción del usuario dentro de la barra lateral es manejada
          por su documento HTML.
        </p>
      </td>
      <td><img alt="Ejemplo de una barra lateral" src="bookmarks-sidebar.png" /></td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages"
          >Página de opciones</a
        >
      </td>
      <td>
        Una página que le permite definir preferencias para su extensión que
        sus usuarios pueden cambiar. El usuario puede acceder a esta página
        desde el administrador de complementos del navegador.
      </td>
      <td>
        <img
          alt="Ejemplo que muestra el contenido de la página de opciones agregado en el ejemplo de colores favoritos."
          src="options_page.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages"
          >Página de extensión</a
        >
      </td>
      <td>
        Use las páginas web incluidas en su extensión para proporcionar formularios,
        ayuda o cualquier otro contenido requerido, dentro de ventanas o pestañas.
      </td>
      <td>
        <img
          alt="Ejemplo de una página empaquetada simple que se muestra como un panel independiente."
          src="bundled_page_as_panel_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications"
          >Notificación</a
        >
      </td>
      <td>
        Notificaciones transitorias que se muestran al usuario a través del mecanismo
        de notificaciones del sistema operativo subyacente. Envía un evento a la extensión
        cuando el usuario hace clic en una notificación o cuando se cierra una notificación
        (ya sea automáticamente o a pedido del usuario).
      </td>
      <td>
        <img
          alt="Ejemplo de una notificación del sistema activada por extensión"
          src="notify-shadowed.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox"
          >Sugerencia de barra de direcciones</a
        >
      </td>
      <td>
        Ofrezca sugerencias personalizadas en la barra de direcciones cuando el usuario ingrese una palabra clave.
      </td>
      <td>
        <img
          alt="Ejemplo que muestra el resultado de la personalización de firefox_code_search WebExtension de las sugerencias de la barra de direcciones."
          src="omnibox_example_small.png"
        />
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels"
          >Panel de herramientas para desarrolladores</a
        >
      </td>
      <td>
        Una pestaña con un documento HTML asociado que se muestra en las herramientas
        de desarrollo del navegador.
      </td>
      <td>
        <img
          alt="Ejemplo que muestra el resultado de la personalización de firefox_code_search WebExtension de las sugerencias de la barra de direcciones."
          src="developer_panel_tab.png"
        />
      </td>
    </tr>
  </tbody>
</table>

Las siguientes guías prácticas brindan orientación paso a paso para crear algunas de estas opciones de interfaz de usuario:

- [Guías de accesibilidad](https://extensionworkshop.com/documentation/develop/build-an-accessible-extension/)
- [Agregar un botón a la barra de herramientas](/es/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Estilos de navegador](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [Ampliación de las herramientas de desarrollo](/es/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Implementar una página de configuración](/es/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
