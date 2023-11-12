---
title: Actualizar extensiones para Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_extensions
---

{{FirefoxSidebar}}

Este artículo ofrece información que será de utilidad para desarrolladores que deseen actualizar sus extensiones, para que éstas funcionen correctamente con Firefox 3.

Antes de continuar, queremos sugerirte algo: si el único cambio que requiere tu extensión es modificar el campo maxVersion en el manifiesto de instalación, la extensión está disponible en el servidor [addons.mozilla.org](https://addons.mozilla.org/es-ES/firefox/) y ¡no necesitarás actualizar tu extensión a una nueva versión! Simplemente usa el Panel de Control para desarrolladores en AMO para modificar `maxVersion`. De esta manera, puedes evitar el trabajo de tener que volver a revisar tu extensión.

### Paso 1: Actualiza el manifiesto de instalación

El primer paso —y para la mayoría de las extensiones, el único que será necesario— es actualizar el archivo `install.rdf` dentro del [manifiesto de instalación](/es/Manifiesto_de_instalaci%C3%B3n) para indicar la compatibilidad con Firefox 3.

Sólo debes buscar la línea que indica la máxima versión compatible de Firefox, lo que para Firefox 2, probablemente sea:

```
 <em:maxVersion>2.0.*</em:maxVersion>
```

Cámbiala para indicar compatibilidad con Firefox 3:

```
 <em:maxVersion>3.0.*</em:maxVersion>
```

A continuación, reinstala la extensión.

Recuerda que en Firefox 3 no necesitas incluir el ".0" extra en el número de la versión. Por lo tanto, en lugar de escribir "3.0.0.\*", sólo necesitas usar "3.0.\*".

Ha habido (y continuará habiendo) una serie de cambios en las APIs, lo que muy probablemente averiará algunas extensiones. Aún estamos trabajando para confeccionar una lista completa de estos cambios.

Si tu extensión todavía usa un script [`Install.js`](/es/Install.js) en vez de un [manifiesto de instalación](/es/Manifiesto_de_instalaci%c3%b3n), necesitas hacer la transición a un manifiesto de instalación lo más pronto posible. Firefox 3 no implementará el script `install.js` en documentos XPI.

#### Agregar localizaciones al manifiesto de instalación

Firefox 3 cuenta con tres nuevas propiedades en el manifiesto de instalación para especificar descripciones de localización. Los métodos antiguos todavía funcionan. Sin embargo, los nuevos permiten que Firefox escoja la localización, aún cuando la extensión esté deshabilitada o pendiente de instalación. Visita [Localizar las_descripciones_de_las_extensiones](/es/Traducir_las_descripciones_de_las_extensiones) para más detalles.

### Paso 2: Asegúrate de suministrar actualizaciones seguras

Si suministras extensiones por tu propia cuenta y no usas un proveedor de hosting seguro como [addons.mozilla.org](https://addons.mozilla.org), debes asegurarte de suministrar algún método seguro para la actualización de tus extensiones. Esto puede hacerse de dos formas: puedes usar un hosting con servicio de SSL o bien, puedes usar claves criptográficas para firmar la información de actualización. Lee [Cómo hacer actualizaciones seguras](/es/Versionado,_actualizaci%C3%B3n_y_compatibilidad_de_extensiones) para más información.

### Paso 3: Debes estar al tanto de los cambios en las APIs

Muchas APIs han sido modificadas de forma significativa. Los cambios más importantes, que seguramente afectarán a muchas extensiones son:

#### DOM

Los nodos de documentos externos deberán copiarse idénticamente usando [`importNode()`](/en/DOM/document.importNode) (o adoptarlos usando [`adoptNode()`](/en/DOM/document.adoptNode)) antes de poder insertarlos en el documento actual. Para más información acerca de cuestiones relacionadas con [`ownerDocument`](/en/DOM/element.ownerDocument), visita [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Actualmente, Firefox no exige hacerlo aunque sí lo hizo durante algún tiempo, durante el desarrollo de Firefox 3. Lo que ocurrió fue que muchos sitios sufrían averías cuando esta política era obligatoria. Nuestra recomendación para los desarrolladores web es que corrijan su código para cumplir con esta regla y así lograr una mejor compatibilidad a futuro.

#### Marcadores e Historial

Si de alguna forma tu extensión tiene acceso a Marcadores o Historial, necesitarás un gran esfuerzo para hacer que sea compatible con Firefox 3. Las APIs antiguas que daban acceso a esta información han sido reemplazadas por la nueva arquitectura [Catálogo (Biblioteca)](/es/Cat%C3%A1logo). Visita la [Guía para la migración a Catálogo (Biblioteca)](/es/Lugares/Gu%C3%ADa_para_migraci%C3%B3n_con_lugares) para más detalles acerca de cómo actualizar tus extensiones para el uso de las APIs de Catálogo (Biblioteca).

#### Administrador de descargas

La API del Administrador de descargas ha cambiado ligeramente debido a la transición del almacén de datos RDF al uso de la API [Almacenamiento](/es/Almacenamiento). Esto debería ser una transición sencilla y fácil. Además , se ha modificado la API que controla los procesos de descarga para permitir varios receptores del administrador de descargas. Visita `nsIDownloadManager`, `nsIDownloadProgressListener` y [Controlar descargas](/en/Monitoring_downloads) para más información.

#### Administrador de contraseñas

Si tu extensión tiene acceso a información de inicio de sesión de usuario en el Administrador de contraseñas, deberás actualizarla para poder utilizar la nueva API para el Administrador de inicio de sesión.

- El artículo [Utilizar nsILoginManager](/es/Using_nsILoginManager) incluye ejemplos y hasta una demostración de cómo debes escribir extensiones que funcionen tanto con el Administrador de contraseñas como con el Administrador de inicio de sesión, de manera que ambos funcionen con Firefox 3 y versiones anteriores.
- [`nsILoginInfo`](/es/nsILoginInfo)
- [`nsILoginManager`](/es/nsILoginManager)

También puedes sobrescribir el almacén del administrador de contraseñas interno si quieres ofrecer tu propia implementación del almacén de contraseñas en la extensión. Visita [Crear un módulo de almacenamiento para el Administrador de inicio de sesión](/es/Creating_a_Login_Manager_storage_module) para más detalles

#### Ventanas emergentes (Menús, Menús contextuales, Tooltips y Paneles)

En Firefox 3, se ha modificado sustancialmente el sistema XUL de ventanas emergentes. El sistema de ventanas emergentes ahora contempla menús principales, menús contextuales y paneles. Se ha creado una guía para [Utilizar Ventanas emergentes](/es/XUL/PopupGuide) que detalla cómo funciona este sistema. Algo que debes tener en cuenta, es que se desaconseja el uso de `popup.showPopup` en favor de los nuevos `popup.openPopup` y `popup.openPopupAtScreen`.

#### Autocompletar

El método [`handleEnter()`](/es/NsIAutoCompleteController#handleEnter.28.29) de la interfaz [`nsIAutoCompleteController`](/es/nsIAutoCompleteController) ha cambiado para aceptar un argumento que indique si el texto ha sido seleccionado desde una ventana emergente para Autocompletar o bien, por el usuario que ha pulsado la tecla Entrar (Enter) después de ingresar texto.

#### DOMParser

- Cuando se inicia una instancia de `DOMParser`, ésta hereda el código de la llamada principal, además de los códigos `documentURI` y `baseURI` de la ventana del constructor de donde proviene.
- Si el llamante tiene privilegios UniversalXPConnect, puede pasar parámetros a `new DOMParser()`. Si se pasan menos de tres parámetros, los parámetros restantes se pasarán con el valor `null` de forma predeterminada.

  - El primer parámetro es el principal que se debe utilizar y por esto, se sobrescribe el valor principal predeterminado generalmente heredado.
  - El segundo parámetro es el `documentURI` que se debe utilizar.
  - El tercer parámetro es el `baseURI` que se debe utilizar.

- Si inicias un `DOMParser` usando una instrucción como `createInstance()` y no llamas al método `init()` de `DOMParser`, al intentar iniciar la operación de análisis, se creará e iniciará automáticamente un `DOMParser` con un principal nulo y punteros `null` para `documentURI` y `baseURI`.

#### Interfaces eliminadas

Las siguientes interfaces han sido eliminadas en Gecko 1.9, el motor de renderizado de Firefox 3. Si tu extensión utiliza cualquiera de estas interfaces, deberás actualizar tu código:

- `nsIDOMPaintListener`
- `nsIDOMScrollListener`
- `nsIDOMMutationListener`
- `nsIDOMPageTransitionListener`
- `nsICloseAllWindows` (Lee el [Error 386200 en Firefox](https://bugzil.la/386200))

### Paso 4: Comprueba los cambios importantes en el chrome

Se ha producido un cambio menor en el chrome que puede requerir cambios en tu código. Se ha añadido un nuevo `vbox` llamado "browser-bottombox", que integra la barra de búsqueda y la barra de estado en la parte inferior de la ventana del navegador. Aunque esto no afecta la apariencia de la pantalla, puede que afecte tu extensión si el chrome se superpone, en relación a los elementos descriptos.

Por ejemplo, si has superpuesto algún elemento del chrome antes de la barra de estado de la siguiente manera:

```
<window id="main-window">
  <something insertbefore="status-bar" />
</window>
```

Debes cambiar tu código a algo que se parezca a:

```
<vbox id="browser-bottombox">
  <something insertbefore="status-bar" />
</vbox>
```

O bien, emplear la siguiente técnica para hacer que la superposición funcione en Firefox 2 y Firefox 3 por igual:

```
<window id="main-window">
  <vbox id="browser-bottombox" insertbefore="status-bar">
    <something insertbefore="status-bar" />
  <vbox>
</window>
```

> **Nota:** Este cambio es efectivo para Firefox 3 beta 4 y la prebeta 4.

#### Otros cambios

_Añade aquí cambios sencillos que debas realizar cuando actualizas tu extensión para que funcione con Firefox 3._

- Por razones de seguridad, se ha dejado de implementar `chrome://browser/base/utilityOverlay.js`. Si lo estabas usando, deberás cambiarlo por `chrome://browser/content/utilityOverlay.js`.
- Para implementar [`nsIAboutModule`](/es/nsIAboutModule) ahora debes incluir el método `getURIFlags`. Visita [nsIAboutModule.idl](https://mxr.mozilla.org/mozilla-central/source/netwerk/protocol/about/public/nsIAboutModule.idl) para consultar la documentación. Esto afecta a las extensiones que brinden nuevas URIs del tipo `about:`. ( [bug 337746](https://bugzilla.mozilla.org/show_bug.cgi?id=337746) )
- El elemento [tabbrowser](/en/XUL/tabbrowser) ya no forma parte del "conjunto de herramientas" ( [bug 339964](https://bugzilla.mozilla.org/show_bug.cgi?id=339964) ). Esto significa que este elemento ya no está disponible en aplicaciones y extensiones XUL. Este elemento sigue siendo parte de la ventana principal de Firefox (browser.xul).
- Es necesario documentar los cambios en [nsISupports proxies](/es/NsISupports_proxies) [\[1\]](https://groups.google.com/group/mozilla.dev.platform/browse_thread/thread/78236a4b312a2de4/939240fc3f5123a8?lnk=st&rnum=1#939240fc3f5123a8) y posiblemente, también aquellos relacionados con el procesamiento de interfaces.
- Si utilizas instrucciones de proceso XML, como por ejemplo `<?xml-stylesheet ?>` en tus archivos XUL, ten en cuenta los cambios descriptos en el [bug 319654](https://bugzilla.mozilla.org/show_bug.cgi?id=319654) :

  1. Se han añadido los XML PIs al DOM del documento XUL. Esto significa que no se garantiza que [`document.firstChild`](/en/DOM/document.firstChild) sea el elemento raíz. Si necesitas hacer referencia al documento raíz en tu script, usa [`document.documentElement`](/en/DOM/document.documentElement) en su lugar.
  2. Las instrucciones de procesamiento `<?xml-stylesheet ?>` y `<?xul-overlay ?>` ahora no tienen efecto fuera del prólogo del documento.

- Cuando se carga contenido web (es decir, se carga la página en el navegador) no se inicia `window.addEventListener("load", myFunc, true)`. Esto ocurre debido a que el [bug 296639](https://bugzilla.mozilla.org/show_bug.cgi?id=296639) cambia la forma de comunicación entre las ventanas internas y externas. Para corregir esto en forma sencilla, emplea `gBrowser.addEventListener("load", myFunc, true)`, según se describe [aquí](/es/Code_snippets/Tabbed_browser#Detecting_page_load). Además, funciona también para Firefox 2.
- `content.window.getSelection()` ofrece un objeto (que puede ser convertido en cadena con `toString()`). Se desaconseja el uso de `content.document.getSelection()` que devuelve una cadena.
- A partir de Firefox 2, se desaconsejó el uso de `event.preventBubble()` y actualmente, ha desaparecido en Firefox 3. En su lugar, usa [`event.stopPropagation()`](/es/DOM/event.stopPropagation), que también funciona en Firefox 2.
- Los contadores de tiempo que se inician usando `setTimeout()` ahora están bloqueados por las ventanas en modo 'modal' gracias a la corrección hecha en el [bug 52209](https://bugzilla.mozilla.org/show_bug.cgi?id=52209) . En su lugar, podrías usar `nsITimer`.
- Si en tu extensión necesitas permitir una fuente no fiable (un sitio web, por ejemplo) para acceder al chrome de la extensión, debes usar el nuevo flag [`contentaccessible` flag](/es/Chrome_Registration#contentaccessible).
