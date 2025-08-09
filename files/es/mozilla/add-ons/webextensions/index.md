---
title: Extensiones del navegador
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

Las extensiones pueden extender y modificar la capacidad de un navegador. Las extensiones para Firefox son construidas utilizando las APIs de WebExtension, un sistema para el desarrollo de extensiones multi-navegador. En gran medida, el sistema es compatible con la [API de extensión](https://developer.chrome.com/docs/extensions) soportada por Google Chrome, Opera y el [borrador del grupo de la comunidad del W3C](https://browserext.github.io/browserext/).

Las extensiones escritas para estos navegadores se ejecutarán en la mayoría de los casos en Firefox o [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) con sólo [unos pocos cambios](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/). La API también es totalmente compatible con [multiprocesos de Firefox](/es/docs/Mozilla/Firefox/Multiprocess_Firefox).

Si tiene alguna idea, pregunta, o necesita ayuda en el proceso de migración de un complemento heredado al uso de las APIs de WebExtension, puede ponerse en contacto con nosotros a través del [Discourse de Add-ons](https://discourse.mozilla.org/c/add-ons/35) o en el canal [#webextensions](irc://irc.mozilla.org/webextensions) de [IRC](https://wiki.mozilla.org/IRC).

## Primeros pasos

- [¿Qué son las extensiones?](/es/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions)
- [Tu primera extensión](/es/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Tu segunda extensión](/es/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [Anatomía de una extensión](/es/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [Ejemplos de extensiones](/es/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [¿Qué sigue?](/es/docs/Mozilla/Add-ons/WebExtensions/What_next)

## Conceptos

- [Descripción general de la API JavaScript](/es/docs/Mozilla/Add-ons/WebExtensions/API)
- [Scripts de contenido](/es/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Patrones de coincidencia](/es/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- [Trabajando con archivos](/es/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internacionalización](/es/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Las mejores prácticas de seguridad](https://extensionworkshop.com/documentation/develop/build-a-secure-extension/)
- [Política de seguridad de contenido](/es/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Mensajería nativa](/es/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Utilización de las APIs de devtools](/es/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Buenas prácticas para la experiencia de usuario](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)
- [Manifestaciones nativas](/es/docs/Mozilla/Add-ons/WebExtensions/Native_manifests)
- [Acciones de los usuarios](/es/docs/Mozilla/Add-ons/WebExtensions/User_actions)

## Interfaz de usuario

- [Introducción](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface)
- [Botón en la barra de herramientas del navegador](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button)
- [Botón en barra de herramientas del navegador con una ventana emergente](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Botón en la barra de direcciones](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)
- [Botón en barra de direcciones con una ventana emergente](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups)
- [Elementos en el menú contextual](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [Barras laterales](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars)
- [Página de opciones](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
- [Páginas de extensiones](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages)
- [Notificaciones](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Notifications)
- [Sugerencias en la barra de direcciones](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Omnibox)
- [Paneles de herramientas para desarrolladores](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels)
- [Estilos del navegador](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)

## Cómo

- [Interceptar solicitudes HTTP](/es/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Modificar una página web](/es/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Agregar un botón a la barra de herramientas](/es/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Implementar una página de configuración](/es/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Interactuar con el portapapapeles](/es/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Trabajar con el API de las pestañas](/es/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Trabajar con el API de los marcadores](/es/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Trabajar con el API de las cookies](/es/docs/Mozilla/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Trabjar con identidades contextuales](/es/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Insertar contenido externo](/es/docs/Mozilla/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)

## Portado

- [Portar una extensión de Google Chrome](https://extensionworkshop.com/documentation/develop/porting-a-google-chrome-extension/)
- [Portar un complemento heredado de Firefox](https://extensionworkshop.com/documentation/develop/porting-a-legacy-firefox-extension/)
- [Desarrollo para Firefox para Android](https://extensionworkshop.com/documentation/develop/developing-extensions-for-firefox-for-android/)
- [WebExtensions integradas](/es/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Comparación con el complemento SDK](https://extensionworkshop.com/documentation/develop/comparison-with-the-add-on-sdk/)
- [Comparación con las extensiones XUL/XPCOM](https://extensionworkshop.com/documentation/develop/comparison-with-xul-xpcom-extensions/)
- [Incompatibilidades con Chrome](/es/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Diferencias entre el escritorio y Android](https://extensionworkshop.com/documentation/develop/differences-between-desktop-and-android-extensions/)
- [Diferencias entre implementaciones de API](/es/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)

## Flujo de trabajo de Firefox

- [Experiencia de usuario](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)
- [Instalación](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [Depuración](https://extensionworkshop.com/documentation/develop/debugging/)
- [Prueba de funciones persistentes y de reinicio](https://extensionworkshop.com/documentation/develop/testing-persistent-and-restart-features/)
- [Primeros pasos con web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
- [Referencia del comando web-ext](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/)
- [Extensiones y el ID del complemento](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/)
- [Opciones alternativas de distribución](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)
- [Solicite los permisos correctos](/es/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Compartir objetos con guiones de página](/es/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Retirando su extensión](https://extensionworkshop.com/documentation/manage/retiring-your-extension/)
- [Consejos y trucos](/es/docs/Mozilla/Add-ons/WebExtensions)
- [Herramientas de desarrollo para las extensiones del navegador](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)

## Reference

### JavaScript APIs

- [Descripción general de la API JavaScript](/es/docs/Mozilla/Add-ons/WebExtensions/API)
- [Tablas de compatibilidad del navegador para las API de JavaScript](/es/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

#### APIs de JavaScript

{{ListSubpages("/en-US/Add-ons/WebExtensions/API")}}

### Manifest keys

- [Resumen del manifest.json](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- [Compatibilidad del navegador para el manifest.json](/es/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ListSubpages("/en-US/Add-ons/WebExtensions/manifest.json")}}
