---
title: Extensiones del navegador
slug: Mozilla/Add-ons/WebExtensions
---

{{AddonSidebar}}

Las extensiones pueden extender y modificar la capacidad de un navegador. Las extensiones para Firefox son construidas utilizando las APIs de WebExtension, un sistema para el desarrollo de extensiones multi-navegador. En gran medida, el sistema es compatible con la [API de extensión](https://developer.chrome.com/extensions) soportada por Google Chrome, Opera y el [borrador del grupo de la comunidad del W3C](https://browserext.github.io/browserext/).

Las extensiones escritas para estos navegadores se ejecutarán en la mayoría de los casos en Firefox o [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) con sólo [unos pocos cambios](/es/Add-ons/WebExtensions/Porting_from_Google_Chrome). La API también es totalmente compatible con [multiprocesos de Firefox](/es/Firefox/Multiprocess_Firefox).

Si tiene alguna idea, pregunta, o necesita ayuda en el proceso de migración de un complemento heredado al uso de las APIs de WebExtension, puede ponerse en contacto con nosotros a través del [Discourse de Add-ons](https://discourse.mozilla.org/c/add-ons/35) o en el canal [#webextensions](irc://irc.mozilla.org/webextensions) de [IRC](https://wiki.mozilla.org/IRC).

## Primeros pasos

- [¿Qué son las extensiones?](/es/Add-ons/WebExtensions/Que_son_las_WebExtensions)
- [Tu primera extensión](/es/Add-ons/WebExtensions/Tu_primera_WebExtension)
- [Tu segunda extensión](/es/Add-ons/WebExtensions/Tutorial)
- [Anatomía de una extensión](/es/Add-ons/WebExtensions/Anatomia_de_una_WebExtension)
- [Ejemplos de extensiones](/es/Add-ons/WebExtensions/Examples)
- [¿Qué sigue?](/es/docs/Mozilla/Add-ons/WebExtensions/What_next_)

## Conceptos

- [Descripción general de la API JavaScript](/es/docs/Mozilla/Add-ons/WebExtensions/API)
- [Scripts de contenido](/es/Add-ons/WebExtensions/Content_scripts)
- [Patrones de coincidencia](/es/Add-ons/WebExtensions/Match_patterns)
- [Trabajando con archivos](/es/docs/Mozilla/Add-ons/WebExtensions/Working_with_files)
- [Internacionalización](/es/docs/Mozilla/Add-ons/WebExtensions/Internationalization)
- [Las mejores prácticas de seguridad](/es/docs/Mozilla/Add-ons/WebExtensions/Security_best_practices)
- [Política de seguridad de contenido](/es/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)
- [Mensajería nativa](/es/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
- [Utilización de las APIs de devtools](/es/Add-ons/WebExtensions/Extending_the_developer_tools)
- [Buenas prácticas para la experiencia de usuario](/es/Add-ons/WebExtensions/User_experience_best_practices)
- [Manifestaciones nativas](/es/Add-ons/WebExtensions/Native_manifests)
- [Acciones de los usuarios](/es/docs/Mozilla/Add-ons/WebExtensions/User_actions)

## Interfaz de usuario

- [Introducción](/es/Add-ons/WebExtensions/user_interface)
- [Botón en la barra de herramientas del navegador](/es/Add-ons/WebExtensions/user_interface/Accion_navegador)
- [Botón en barra de herramientas del navegador con una ventana emergente](/es/Add-ons/WebExtensions/user_interface/Popups)
- [Botón en la barra de direcciones](/es/Add-ons/WebExtensions/user_interface/Page_actions)
- [Botón en barra de direcciones con una ventana emergente](/es/Add-ons/WebExtensions/user_interface/Popups)
- [Elementos en el menú contextual](/es/Add-ons/WebExtensions/user_interface/Context_menu_items)
- [Barras laterales](/es/Add-ons/WebExtensions/user_interface/Sidebars)
- [Página de opciones](/es/Add-ons/WebExtensions/user_interface/Options_pages)
- [Páginas de extensiones](/es/Add-ons/WebExtensions/user_interface/Extension_pages)
- [Notificaciones](/es/Add-ons/WebExtensions/user_interface/Notifications)
- [Sugerencias en la barra de direcciones](/es/Add-ons/WebExtensions/user_interface/Omnibox)
- [Paneles de herramientas para desarrolladores](/es/Add-ons/WebExtensions/user_interface/devtools_panels)
- [Estilos del navegador](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)

## Cómo

- [Interceptar solicitudes HTTP](/es/docs/Mozilla/Add-ons/WebExtensions/Intercept_HTTP_requests)
- [Modificar una página web](/es/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page)
- [Agregar un botón a la barra de herramientas](/es/docs/Mozilla/Add-ons/WebExtensions/Add_a_button_to_the_toolbar)
- [Implementar una página de configuración](/es/docs/Mozilla/Add-ons/WebExtensions/Implement_a_settings_page)
- [Interactuar con el portapapapeles](/es/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard)
- [Trabajar con el API de las pestañas](/es/Add-ons/WebExtensions/Working_with_the_Tabs_API)
- [Trabajar con el API de los marcadores](/es/Add-ons/WebExtensions/Work_with_the_Bookmarks_API)
- [Trabajar con el API de las cookies](/es/Add-ons/WebExtensions/Work_with_the_Cookies_API)
- [Trabjar con identidades contextuales](/es/Add-ons/WebExtensions/Work_with_contextual_identities)
- [Insertar contenido externo](/es/Add-ons/WebExtensions/Safely_inserting_external_content_into_a_page)

## Portado

- [Portar una extensión de Google Chrome](/es/Add-ons/WebExtensions/Porting_from_Google_Chrome)
- [Portar un complemento heredado de Firefox](/es/docs/Mozilla/Add-ons/WebExtensions/Porting_a_legacy_Firefox_add-on)
- [Desarrollo para Firefox para Android](/es/Add-ons/WebExtensions/Developing_WebExtensions_for_Firefox_for_Android)
- [WebExtensions integradas](/es/docs/Mozilla/Add-ons/WebExtensions/Embedded_WebExtensions)
- [Comparación con el complemento SDK](/es/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_the_Add-on_SDK)
- [Comparación con las extensiones XUL/XPCOM](/es/docs/Mozilla/Add-ons/WebExtensions/Comparison_with_XUL_XPCOM_extensions)
- [Incompatibilidades con Chrome](/es/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities)
- [Diferencias entre el escritorio y Android](/es/Add-ons/WebExtensions/Differences_between_desktop_and_Android)
- [Diferencias entre implementaciones de API](/es/docs/Mozilla/Add-ons/WebExtensions/Differences_between_API_implementations)

## Flujo de trabajo de Firefox

- [Experiencia de usuario](/es/Add-ons/WebExtensions/User_experience_best_practices)
- [Instalación](/es/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)
- [Depuración](/es/Add-ons/WebExtensions/Debugging)
- [Prueba de funciones persistentes y de reinicio](/es/Add-ons/WebExtensions/Testing_persistent_and_restart_features)
- [Primeros pasos con web-ext](/es/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)
- [Referencia del comando web-ext](/es/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference)
- [Extensiones y el ID del complemento](/es/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID)
- [Opciones alternativas de distribución](/es/Add-ons/WebExtensions/Alternative_distribution_options)
- [Solicite los permisos correctos](/es/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Compartir objetos con guiones de página](/es/Add-ons/WebExtensions/Sharing_objects_with_page_scripts)
- [Retirando su extensión](/es/Add-ons/Distribution/Retiring_your_extension)
- [Consejos y trucos](/es/docs/Mozilla/Add-ons/WebExtensions/Tips)
- [Herramientas de desarrollo para las extensiones del navegador](/es/docs/Mozilla/Add-ons/WebExtensions/Development_Tools)

## Reference

### JavaScript APIs

- [Descripción general de la API JavaScript](/es/docs/Mozilla/Add-ons/WebExtensions/API)
- [Tablas de compatibilidad del navegador para las API de JavaScript](/es/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

#### APIs de JavaScript

{{ListSubpages("/en-US/Add-ons/WebExtensions/API")}}

### Manifest keys

- [Resumen del manifest.json](/es/Add-ons/WebExtensions/manifest.json)
- [Compatibilidad del navegador para el manifest.json](/es/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

{{ListSubpages("/en-US/Add-ons/WebExtensions/manifest.json")}}
