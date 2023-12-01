---
title: Firefox 3 para desarrolladores
slug: Mozilla/Firefox/Releases/3
---

{{FirefoxSidebar}}

Si eres un desarrollador que intenta ponerse al día con todas las nuevas características de Firefox 3, este es el lugar perfecto para empezar. Este artículo proporciona una lista de nuevos artículos que tratan sobre las características añadidas a Firefox 3. Aunque no cubre necesariamente todos los pequeños cambios, te ayudará a conocer mejor las mejoras más importantes.

### Características nuevas para desarrolladores en Firefox 3

#### Para desarrolladores de sitios y aplicaciones web

- [Actualizar aplicaciones web para Firefox 3](/es/Actualizar_aplicaciones_web_para_Firefox_3)
  - : Información sobre los cambios que se podrían necesitar para realizar un sitio o aplicación web y sacarle mayor ventaja a las nuevas características de Firefox 3.
- [Eventos online y offline](/es/Eventos_online_y_offline)
  - : Firefox 3 implementa los eventos conectado y desconectado definidos por WHATWG, que permiten a aplicaciones y extensiones descubrir si una conexión activa de internet es disponible, además de detectar cuando hay conexión o desconexión.
- [Manipuladores de protocolo web](/es/DOM/window.navigator.registerProtocolHandler)
  - : Ahora se puede registrar una aplicación web como manipulador de protocolo con el método `navigator.registerProtocolHandler()`.
- [Dibujar texto usando canvas](/es/Dibujar_texto_usando_canvas)
  - : Ahora se puede dibujar texto en canvas con una API no estándar implementada por Firefox 3.
- [Gestión de transformaciones en canvas](/es/Tutorial_de_Canvas/Transformaciones#Transformaciones)
  - : Firefox 3 administra los métodos `transform()` y `setTransform()` en canvases (lienzos).
- [El uso de microformatos](/es/El_uso_de_microformatos)

  - : Firefox 3 tiene APIs que permiten trabajar con microformatos.

- [Hojas de estilo alternativas](/es/Hojas_de_estilo_alternativas)
  - : Firefox 3 implementa modelos alternativos de hojas de estilo API de objeto CSS.
- [Eventos arrastrar y soltar](/es/Eventos_arrastrar_y_soltar)
  - : Firefox 3 implementa nuevos eventos que se envían al nodo de origen cuando la operación de arrastre comienza y termina.
- [Gestión del foco en HTML](/es/Gestión_del_foco_en_HTML)
  - : Se han implementado los atributos `activeElement` y `hasFocus` de la nueva especificación HTML 5.
- [Recursos en modo desconectado en Firefox](/es/Recursos_en_modo_desconectado_en_Firefox)
  - : Firefox 3 permite ahora que las aplicaciones web soliciten que recursos puedan ser puestos en cache para ser ejecutados en modo desconectado.
- [Mejoras CSS en Firefox 3](/es/Mejoras_CSS_en_Firefox_3)
  - : Firefox 3 ofrece un número de mejoras en su implementación de CSS.
- [Mejoras DOM en Firefox 3](/es/Mejoras_DOM_en_Firefox_3)
  - : Firefox 3 ofrece mejoras en la implementación de DOM, incluyendo la gestión de varias extensiones de Internet Explorer al DOM.
- [Implementación de JavaScript 1.8](/es/Novedades_en_JavaScript_1.8)
  - : Firefox 3 ofrece JavaScript 1.8.
- [Implementación de EXSLT](/es/EXSLT)
  - : Firefox 3 permite la utilización de una parte importante de las extensiones [EXSLT](/es/EXSLT) y [XSLT](/es/XSLT).
- [Mejoras SVG en Firefox 3](/es/Mejoras_SVG_en_Firefox_3)
  - : La implementación a SVG en Firefox 3 ha sido mejorada de manera significante, con muchos nuevos filtros, elementos, atributos y otras mejoras.
- [Gráficos PNG animados](/es/Gráficos_PNG_animados)
  - : Firefox 3 administra las imágenes animadas en formato PNG (APNG).

#### Para desarrolladores de XUL y de extensiones

##### Cambios y mejoras notables

- [Actualizar extensiones para Firefox 3](/es/Actualizar_extensiones_para_Firefox_3)
  - : Una guía con las cosas que hay que hacer para poner al día una extensión para que trabaje con Firefox 3.
- [Mejoras XUL en Firefox 3](/es/Mejoras_XUL_en_Firefox_3)
  - : Firefox 3 ofrece varios nuevos elementos XUL, incluyendo escaleras deslizables, selectores de hora y fecha, y botones de incremento.
- [Plantillas en Firefox 3](/es/Plantillas_en_Firefox_3)
  - : Las plantillas han sido notablemente mejoradas en Firefox 3. Las mejoras más importantes es la posibilidad de usar procesadores de solicitud personalizada para permitir el uso de otras fuentes de datos que RDF.
- [Asegurando las actualizaciones](/es/Versionado,_actualización_y_compatibilidad_de_extensiones#Asegurando_las_actualizaciones)
  - : Para proporcionar actualizaciones más seguras de los complementos a los usuarios, ahora los complementos requieren proporcionar un método seguro para obtener las actualizaciones antes de ser instaladas. Los complementos alojados en [AMO](https://addons.mozilla.org) lo proporcionan automáticamente.
- [Migrar y usar el catálogo](/es/Migrar_y_usar_el_catálogo)
  - : Un artículo sobre como migrar una extensión existente para utilizar el API de catálogo.
- [Mejoras en el gestor de descargas en Firefox 3](/es/Mejoras_en_el_administrador_de_descargas_en_Firefox_3)
  - : El administrador de descargas de Firefox 3 contiene nuevas y mejoradas APIs, incluyendo la implementación de múltiples escuchas de progreso.
- [Uso de nsILoginManager](/es/Uso_de_nsILoginManager)
  - : El administrador de contraseñas ha sido reemplazado por el nuevo Login Manager.
- [Integración de los vínculos XBL](/es/XBL/Referencia_de_XBL_1.0/Elementos#binding)
  - : Ya es posible utilizar el protocolo URL `data:` para integrar directamente los vínculos XBL en lugar de tener que colocarlos en un archivo XML por separado.
- [Traducir las descripciones de las extensiones](/es/Traducir_las_descripciones_de_las_extensiones)
  - : Firefox 3 ofrece un nuevo método localizando add-on metadata. Esto permite que los detalles localizados estén disponibles tan pronto como los add-on han sido descargados, al igual que cuando el add-on sea desinstalado.
- [Localización y plurales](/es/Localización_y_Plurales)
  - : Firefox 3 dispone del nuevo módulo PluralForm, el cual sirve para ayudar a poner correctamente en plural las palabras según el idioma local.
- [Cambios en los temas de Firefox 3](/es/Cambios_en_los_temas_de_Firefox_3)
  - : Notas e información para quienes quisiera crear temas para Firefox 3.

##### Nuevos componentes y funcionalidades

- [Biblioteca FUEL](/es/FUEL)
  - : FUEL sirve para facilitar la productividad de los desarrolladores de extensiones, reduciendo algunas formalidades de XPCOM y colocando algunas ideas "modernas" en JavaScript.
- [Catálogo](/es/Catálogo)
  - : Las APIS del historial y de los marcadores han sido remplazadas completamente por la nueva API del [Catálogo](/es/Catálogo).
- [Servicio idle](/es/nsIIdleService)
  - : Firefox 3 ofrece la nueva interfaz `nsIIdleService`, la cual permite a las extensiones determinar cuánto tiempo ha pasado desde que el usuario pulso una tecla o movió el ratón por última vez.
- [El convertidor ZIP](/es/El_convertidor_ZIP)
  - : La nueva interfaz `nsIZipWriter` permite a las extensiones crear archivos ZIP.
- [Zoom a página completa](/es/Zoom_a_página_completa)
  - : Firefox 3 mejora la experiencia de usuario ofreciendo zoom a página completa además de zoom de solo texto.
- [El colector de ciclo XPCOM](/es/El_colector_de_ciclo_XPCOM)
  - : El código XPCOM puede beneficiarse del colector de ciclo, el cual ayuda a asegurar que la memoria no utilizada es liberada y evitar fugas de memoria.
- [El administrador de hilos](/es/El_administrador_de_hilos)
  - : Firefox 3 proporciona la nueva interfaz `nsIThreadManager`, así como otras nuevas interfaces para hilos y eventos de hilos, los cuales proporcionan una manera apropiada de crear y administrar hilos en tu código.
- [Módulos JavaScript](/es/Módulos_JavaScript)
  - : Firefox 3 ofrece un nuevo mecanismo de código compartido que te permite crear módulos facilmente en JavaScript que pueden ser cargados por extensiones y aplicaciones para su uso, muy parecido a las librerías compartidas.
- [La interfaz nsIJSON](/es/NsIJSON)
  - : Firefox 3 ofrece la nueva interface `nsIJSON`, which offers high-performance encoding and decoding of JSON strings.
- [La interfaz nsIParentalControlsService](/es/NsIParentalControlsService)
  - : Ahora Firefox 3 implementa las características del control parental de Microsoft Windows Vista, y permite al cñodigo interactuar con él.
- [Usar las preferencias de contenido](/es/Usar_las_preferencias_de_contenido)
  - : Firefox 3 incluye un nuevo servicio para obtener y fijar configuraciones especificas para cada sitio web que pueden usar tanto las extensiones como el código principal para llevar un registro de las preferencias de usuarios en sitios individuales.
- [Vigilancia de plugins](/es/Vigilancia_de_plugins)
  - : Está disponible un nuevo componente del sistema de plugins para controlar el tiempo que les toma a los plugins (como por ejemplo: Macromedia Flash) ejecutar sus llamadas.

### Bugs ya solucionados

<dl><dt><a href="/es/Bugs_importantes_solucionados_en_Firefox_3" title="es/Bugs_importantes_solucionados_en_Firefox_3">Bugs importantes solucionados en Firefox 3</a></dt></dl>

### Nuevas características para el usuario final

#### Mejoras para el usuario

- **Gestión más sencilla de contraseñas.** En la parte superior de la ventana del navegador aparece una barra de información que permitirá guardar las contraseñas después de iniciar la sesión.
- **Instalación simplificada de complementos.** Ahora, instalar extensiones de terceros se hace en menos pasos porque se ha eliminado el filtro de los sitios de confianza para la descarga de complementos.
- **Nuevo administrador de descargas.** El administrador de descargas facilita el acceso a los archivos descargados.
- **Reanudar descargas.** Podemos reanudar las descargas al reiniciar el navegador o la conexión a la red.
- **Vista a pantalla completa.** Podemos aumentar o reducir el tamaño de todo el contenido de la página desde el menú Ver o con los atajos de teclado. Estas modificaciones de tamaño se aplicarán tanto al texto como a las imágenes.
- **Desplazamiento y menú rápido de pestañas.** Las pestañas son más fáciles de identificar gracias a su nueva característica de desplazamiento y menú rápido.
- **Guardar lo que estamos haciendo.** En Firefox 3, una ventana emergente nos preguntará si queremos guardar las pestañas abiertas antes de cerrar.
- **Comportamiento de la opción "Abrir en pestañas".** Al abrir una carpeta de marcadores en pestañas, las pestañas nuevas no sustituyen a las que están abiertas sino que se suman a ellas.
- **Barra de direcciones y de búsquedas más simples de dimensionar.** Modificar el tamaño de la barra de dirección y de búsquedas se hace fácilmente con el icono que aparece entre ellas.
- **Mejoras en la selección de texto.** Podemos seleccionar varias secciones de texto con la tecla Control 'Ctrl' (Comando en Macintosh), un doble clic y arrastrar lo hará palabra por palabra y un triple clic agarrará un párrafo entero.
- **Barra de búsqueda.** La barra de búsqueda funciona también sobre la selección actual.
- **Administración de plugins.** El usuario puede deshabilitar el o los plugins que desea en el administrador de complementos.
- **Integración con Windows Vista.** Los menús de Firefox se muestran utilizando el tema nativo de Vista.
- **Integración con Mac OS X.** Firefox 3 utiliza el corrector ortográfico de Mac OS X y permite usar [Growl](https://growl.info/) para la notificación de descargas completadas y actualizaciones disponibles.
- **Botón estrella.** El nuevo botón con forma de estrella en la barra de direcciones añade un marcador nuevo con un solo clic, un segundo clic permite ordenar y etiquetarlo.
- **Etiquetas.** Permiten clasificar los marcadores por temas asignándoles palabras clave.
- **Barra de búsqueda local y autocompletado.** Sirve para buscar una página en el historial y los marcadores. Lo iconos, marcadores y etiquetas permiten ver la ubicación de los resultados mostrados.
- **Carpeta de marcadores inteligentes.** La carpeta de marcadores inteligentes de Firefox permite acceder rápidamente a los últimos sitios etiquetados o añadidos a marcadores, así como las páginas visitadas con frecuencia.
- **Administrador de marcadores e historial.** La creación de un único administrador para los marcadores y el historial permite buscar en ambos con múltiples vistas y carpetas inteligentes para almacenar búsquedas frecuentes.
- **Administradores de protocolos Web.** Las aplicaciones web, como los proveedores de correo electrónico, se pueden utilizar en vez de aplicaciones de escritorio para administrar los enlaces `mailto:` de otras webs. También se prestan gestiones similares para otros protocolos. (Aviso: las aplicaciones Web deben estar registradas en Firefox para que funcione).
- **Acciones de descarga fáciles de usar.** El nuevo panel de preferencias de aplicaciones proporciona una interfaz de usuario mejorada para configurar los administradores de varios tipos de archivos y esquemas de protocolo.
- **Apariencia y entorno mejorados.** La gestión gráfica y de las fuentes ha sido mejorada para que las páginas web se vean con más calidad, incluidas la nitidez del texto y la mayor compatibilidad con fuentes complejas. Además, gracias a este nuevo aspecto de Firefox, los usuarios de Mac y Linux (Gnome) lo encontrarán más parecido a una aplicación nativa de su propio sistema.
- **Gestión del color.** Al establecer la preferencia `gfx.color_management.enabled` en `about:config`, haremos que Firefox utilice los perfiles de color integrados en las imágenes para que se adapten a la configuración de nuestra pantalla.
- **Funcionamiento en modo desconectado.** Las aplicaciones Web pueden beneficiarse de nuevas características que permiten utilizarlas sin estar conectado a Internet.

#### Seguridad y privacidad

- **Información con un clic.** ¿Quiere tener más información sobre el sitio Web que estás visitando? Haciendo clic en el icono del sitio en la barra de direcciones veremos a quién pertenece. La información de identificación se muestra de forma clara y es más fácil de entender que nunca.
- **Protección contra malware.** Firefox 3 avisa cuando se entra en una Web que instala virus, spyware, troyanos, u otro software peligroso (conocido como malware). Puede ver un ejemplo [aquí](https://www.mozilla.com/firefox/its-an-attack.html).
- **Protección mejorada contra páginas Web que intentan suplantar tu identidad.** Cuando visite una página sospechosa de suplantación se mostrará en su lugar una página especial con una advertencia. Puede ver un ejemplo [aquí](https://www.mozilla.com/firefox/its-a-trap.html).
- **Mensajes de error SSL fáciles de entender.** Ahora cuando aparezca un mensaje de error por certificado SSL incorrecto comprenderá más fácil en qué consiste el problema.
- **Protección contra complementos desactualizados.** Firefox 3 comprueba automáticamente los plugins y complementos, deshabilitando las versiones más antiguas y peligrosas.
- **Actualizaciones seguras de complementos.** Se ha mejorado la seguridad en la actualización de complementos al obligarlos a proporcionar un mecanismo seguro de actualización.
- **Integración con antivirus.** Firefox 3 envía un informe al antivirus cuando se descargan archivos ejecutables.
- **Compatible con el control paterno de Windows Vista.** Firefox 3 es compatible con la función para deshabilitar la descarga de archivos del control paterno de Vista.

#### Rendimiento

- **Fiabilidad.** Firefox 3 almacena marcadores, historial, cookies, y preferencias usando un formato transaccional de base de datos seguro. Es decir, tus datos no se perderán aunque tengas una caída del sistema.
- **Velocidad.** Se ha mejorado el rendimiento de Firefox 3 al sustituir totalmente la parte del software que controla el aspecto gráfico, así como el modo de gestionar los formatos de página.
- **Reducción de consumo de memoria.** Firefox 3 es más eficaz que nunca gracias a la corrección de unos 300 fallos de fuga de memoria y nuevas características que ayudan a localizar y eliminar automáticamente los bloques con fuga de memoria.

### Lecturas relacionadas

- [Actualizar extensiones para Firefox 3](/es/Actualizar_extensiones_para_Firefox_3)
- [Actualizar aplicaciones web para Firefox 3](/es/Actualizar_aplicaciones_web_para_Firefox_3)
- [Firefox 2 para desarrolladores](/es/Firefox_2_para_desarrolladores)
- [Firefox 1.5 para Desarrolladores](/es/Firefox_1.5_para_Desarrolladores)
