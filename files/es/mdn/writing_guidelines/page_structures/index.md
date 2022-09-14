---
title: >-
  Tablas de compatibilidad y repositorio de datos de compatibilidad del
  navegador (DCN)
slug: MDN/Writing_guidelines/Page_structures
tags:
  - Estructuras
  - Guía
  - Meta MDN
  - compatibilidad con el navegador
  - tablas de compatibilidad
translation_of: MDN/Structures/Compatibility_tables
original_slug: MDN/Structures/Compatibility_tables
---
{{MDNSidebar}}

MDN tiene un formato estándar para tablas de compatibilidad para nuestra documentación web abierta; es decir, documentación de tecnologías como DOM, HTML, CSS, JavaScript, SVG, etc., que se comparte en todos los navegadores. Este artículo es una guía de "introducción" sobre cómo agregar y mantener la base de datos a partir de la cual se generan las tablas de compatibilidad, además de cómo integrar las tablas en artículos.

Para obtener documentación más avanzada, así como los últimos cambios en los procesos y los esquemas JSON utilizados para representar los datos, échale un vistazo al repositorio de datos de la [guía para colaboradores](https://github.com/mdn/browser-compat-data/blob/master/docs/contributing.md), así como a la [guía de directrices de datos](https://github.com/mdn/browser-compat-data/blob/master/docs/data-guidelines.md).

Si tienes preguntas o descubres problemas, compártelos con nosotros en el [foro de discusión de MDN](https://discourse.mozilla-community.org/c/mdn).

## Cómo acceder al repositorio de datos

Los datos se almacenan en un repositorio de GitHub; consulta <https://github.com/mdn/browser-compat-data>. Para acceder a él, necesitas tener una cuenta de GitHub, bifurcar el repositorio de compatibilidad de datos del navegador en tu propia cuenta y luego clonar tu bifurcación en tu máquina local.

## Preparándose para agregar los datos

Antes de agregar algunos datos nuevos, te debes asegurar de que tu bifurcación esté actualizada con el repositorio principal (contiene el mismo contenido), crea una nueva rama dentro de tu bifurcación para contener tus adiciones, luego ingresa esa rama en tu clon local para que puedas empezar a trabajar dentro de ella:

Veamos la siguiente sencilla forma de asegurarte de que tu bifurcación esté actualizada:

### Agregar el repositorio principal de datos de compatibilidad del navegador como remoto

Ve al clon local de tu bifurcación en tu terminal/línea de comandos, y agrega un control remoto que apunte al repositorio principal (`upstream`) de esa manera (solo necesitas hacer esto una vez):

```bash
git remote add upstream https://github.com/mdn/browser-compat-data.git
```

Si no estás seguro de haber hecho esto, puedes verificar qué controles remotos tiene tu repositorio usando

```bash
git remote -v
```

### Actualiza tu bifurcación con el contenido del remoto

Ahora, siempre que desees actualizar tu bifurcación, lo puedes hacer mediante:

1. Asegúrate de que estas en la rama `master`:

    ```bash
    git checkout master
    ```

2. obtén el contenido actualizado del repositorio utilizando lo siguiente:

    ```bash
    git fetch upstream
    ```

3. rebasa el contenido de tu `master` con el contenido del repositorio principal:

    ```bash
    git rebase upstream/master
    ```

4. empuja estas actualizaciones a tu bifurcación remota usando lo siguiente:

    ```bash
    git push
    ```

### Crea una nueva rama para hacer tu trabajo

A continuación, ve a tu bifurcación remota (estará en `https://github.com/tu-nombre-de-usuario/browser-compat-data`) y crea una nueva rama para almacenar tus cambios para esta adición de datos. Esto lo puedes hacer mediante:

1. Un clic en el botón "Rama: Master".
2. Ingresa un nuevo nombre para la rama en el campo de texto "Buscar o crear una rama...".
3. Presiona el botón resultante "Crear rama _nombre-de-rama_ desde Master".

Por ejemplo, si quisieras agregar datos para la API WebVR, crearías una rama llamada algo así como "webvr".

### Cambia a la nueva rama

En este punto, regresa a tu terminal/línea de comando y actualiza el clon local de tu bifurcación para incluir tu nueva rama usando el siguiente comando:

```bash
git pull
```

Ahora cambia a tu nueva rama usando esto:

```bash
git checkout nombre-de-rama
```

¡Ahora debería estar listo para comenzar a agregar tus datos!

## Añadir los datos

Para agregar los datos, debes crear un nuevo archivo o archivos para almacenar tus datos de compatibilidad. Los archivos que necesitas crear difieren, según la tecnología en la que estés trabajando:

- **[HTML](/es/docs/Web/HTML):** Un archivo por elemento HTML, contenido en [browser-compat-data/html/elements](https://github.com/mdn/browser-compat-data/tree/master/html/elements). El archivo se debe denominar con el nombre del elemento, todo en minúsculas, p. ej. `div.json`.
- **[CSS](/es/docs/Web/CSS):** Un archivo por propiedad CSS o selector, contenido en el directorio apropiado (consulta [browser-compat-data/css](https://github.com/mdn/browser-compat-data/tree/master/css)). El archivo debe tener el nombre de la función, todo en minúsculas, p. ej. `background-color.json` o `hover.json`.
- **[JS](/es/docs/Web/JavaScript):** Un archivo por objeto JS, contenido en [browser-compat-data/javascript/builtins](https://github.com/mdn/browser-compat-data/tree/master/javascript/builtins). El archivo se debe denominar con el nombre exacto del objeto, conservando la envoltura, p. ej. `Date.json` o `InternalError.json`.
- **[APIs](/es/docs/Web/API):** Un archivo por interfaz contenida en la API, ponlo en [browser-compat-data/api](https://github.com/mdn/browser-compat-data/tree/master/api). Cada archivo se debe denominar con el nombre exacto de la interfaz, conservando la envoltura, p. ej. La API de WebVR tiene `VRDisplay.json`, `VRDisplayCapabilities.json`, etc.

Cada archivo que crees debe seguir el patrón definido en el esquema contenido en nuestro repositorio; puedes ver la [descripción detallada del esquema aquí](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md).

### Estructura básica de datos de compatibilidad

Veamos un ejemplo. Los archivos JSON de propiedades CSS, por ejemplo, necesitan la siguiente estructura básica:

```json
{
  "css": {
    "properties": {
      "border-width": {
        "__compat": {
          ...
        }
      }
    }
  }
}
```

Tienes el objeto `css`, dentro del cual hay un objeto `properties`. Dentro del objeto `properties`, necesitas un miembro para cada una de las características específicas para las que deseas definir los datos de compatibilidad. Cada uno de estos miembros tiene un miembro `__compat`, dentro del cual van los datos reales.

Los datos anteriores se encuentran en el archivo: [border-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json) compáralo con la [tabla de soporte de `border-width` representada en MDN](/es/docs/Web/CSS/border-width#Browser_compatibility).

Otros tipos de características funcionan de la misma manera, pero con diferentes nombres de objeto:

- Los selectores de CSS funcionan básicamente de la misma manera que las propiedades de CSS, excepto que la estructura del objeto de nivel superior es `css.selectors` en lugar de `css.properties`. Consulta [cue.json](https://github.com/mdn/browser-compat-data/blob/master/css/selectors/cue.json) para ver un ejemplo.
- Los datos HTML funcionan básicamente de la misma manera, excepto que la estructura del objeto de nivel superior es `html.elements`. Consulta [article.json](https://github.com/mdn/browser-compat-data/blob/master/html/elements/article.json) para ver un ejemplo.
- La estructura del objeto de nivel superior para los objetos incorporados de JS es `javascript.builtins`; consulta [Array.json](https://github.com/mdn/browser-compat-data/blob/master/javascript/builtins/Array.json) para ver un ejemplo.

En páginas HTML, CSS y JS, normalmente solo necesitarás una función. Las interfaces de API funcionan de forma ligeramente diferente — siempre tienen varias subcaracterísticas (consulta [Subcaracterísticas](#sub-features), a continuación).

### Estructura básica dentro de una característica

Dentro de un miembro de función `__compat`, debes incluir los siguientes miembros:

- `mdn_url`: contiene la URL de la página de referencia para esta característica en MDN. Ten en cuenta que esto se debe escribir sin el directorio de configuración regional dentro, p. ej. `/docs/...` no `/en-US/docs/...`. Esto lo agrega la macro cuando los datos se colocan en la página, con fines de localización.
- `support`: contiene miembros que representan la información de soporte del navegador para esta característica en todos los diferentes navegadores que queremos informar.
- `status`: contiene miembros que informan sobre el estado de seguimiento de estándares de esta característica.

Los nombres de los miembros del navegador se definen en el esquema (consulta [identificadores del navegador](https://github.com/mdn/browser-compat-data/blob/master/schemas/compat-data-schema.md#browser-identifiers)). Debes utilizar la lista completa de identificadores definidos actualmente. Si deseas agregar otro navegador, habla con nosotros primero, ya que esto podría tener un impacto de gran alcance y no se debe hacer sin pensarlo detenidamente.

En un archivo de datos de compatibilidad del navegador básico, solo necesitarás incluir "`version_added`" dentro de los miembros del identificador del navegador (cubriremos [Casos avanzados](#advanced_cases) más adelante). Los diferentes valores que posiblemente quieras incluir son los siguientes:

- Un número de versión: Si conoces la versión exacta en la que un navegador comenzó a admitir tu característica, usa una cadena que represente el número, p. ej. `"47"`.
- `true`: Si un navegador admite una característica, pero no conoces el número de versión exacto, utiliza el valor `true`.
- `false`: Si un navegador no admite una característica, utiliza el valor `false`.
- `null`: Si no sabes si un navegador admite una característica o no, utiliza el valor `null`.

Dentro del miembro `status`, incluirás tres submiembros:

- `experimental`: Se debe establecer en `true` si la característica es [experimental](/es/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental) o `false` en caso contrario.
- `standard_track`: Esto se debe establecer en `true` si una característica está en algún tipo de pista de estándares (comúnmente W3C/WHATWG, pero también hay otros esfuerzos de estándares como Khronos, TC39, etc.) o `false` de lo contrario.
- `deprecated`: Se debe establecer en `true` si la característica está [desaprobada](/es/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete) o `false` en caso contrario.

Los datos de características de [`border-width`](/es/docs/Web/CSS/border-width#Browser_compatibility) (consulta también [border-width.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/border-width.json)) se muestra a continuación como ejemplo:

```json
"__compat": {
  "mdn_url": "https://developer.mozilla.org/docs/Web/CSS/border-width",
  "support": {
    "chrome": {
      "version_added": "1"
    },
    "webview_android": {
      "version_added": "2"
    },
    "edge": {
      "version_added": true
    },
    "edge_mobile": {
      "version_added": true
    },
    "firefox": {
      "version_added": "1"
    },
    "firefox_android": {
      "version_added": "1"
    },
    "ie": {
      "version_added": "4"
    },
    "ie_mobile": {
      "version_added": "6"
    },
    "opera": {
      "version_added": "3.5"
    },
    "opera_android": {
      "version_added": "11"
    },
    "safari": {
      "version_added": "1"
    },
    "safari_ios": {
      "version_added": "3"
    }
  },
  "status": {
    "experimental": false,
    "standard_track": true,
    "deprecated": false
  }
}
```

#### Agrega una descripción

Hay un cuarto miembro, opcional, que puede ir dentro del miembro `__compat` — `description`. Este se puede utilizar para incluir una descripción legible por humanos de la característica. Únicamente lo debes incluir si es difícil ver cuál es la característica al mirar los datos. Por ejemplo, puede que no sea tan obvio lo que es un constructor al mirar la estructura de datos, por lo que puedes incluir una descripción como esta:

```json
{
  "api": {
    "AbortController": {
      "__compat": {
        ...
      },
      "AbortController": {
        "__compat": {
          "mdn_url": "https://developer.mozilla.org/docs/Web/API/AbortController/AbortController",
          "description": "<code>AbortController()</code> constructor",
          "support": {
            ...
          }
        }
      }

      ... etc.
    }
  }
}
```

### Subcaracterísticas

En una página donde la tabla de compatibilidad tiene más de una fila, necesitarás varias subcaracterísticas dentro de cada característica para definir la información de cada fila. Esto puede suceder, por ejemplo, cuando tienes el soporte básico para una característica almacenada en una fila, pero luego la característica también tiene una nueva propiedad o tipo de valor que se agregó mucho más tarde en la vida de la especificación y solo se admite en una par de navegadores.

Como ejemplo, consulta los [datos de compatibilidad](https://github.com/mdn/browser-compat-data/blob/master/css/properties/background-color.json) y la [página MDN correspondiente](/es/docs/Web/CSS/background-color) para la propiedad `background-color`. El soporte básico existe dentro del objeto `__compat` como se explicó anteriormente, luego tienes una fila adicional para el soporte de los navegadores para "canal alfa para valores hexadecimales", que contiene tu propio objeto `__compat`.

```json
{
  "css": {
    "properties": {
      "background-color": {
        "__compat": {
          ...
        },
        "alpha_ch_for_hex": {
          "__compat": {
            ...
          },
        }
      }
    }
  }
}
```

Para una API, tienes los dos niveles superiores definidos como `api.nombre-de-la-interfaz`, luego un `__compat` de nivel superior para definir la compatibilidad general del navegador de la interfaz, luego una subfunción para cada uno de los métodos, propiedades y constructores contenidos dentro de la interfaz. La estructura básica se ve así:

```json
{
  "api": {
    "VRDisplay": {
      "__compat": {
        ...
      },
      "cancelAnimationFrame": {
        "__compat": {
          ...
        }
      },
      "capabilities": {
        "__compat": {
          ...
        }
      },

      ... etc.

    }
  }
}
```

Consulta [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json) para ver un ejemplo completo.

## Agregar datos: casos avanzados

Hay algunas características avanzadas que querrás incluir en los datos de compatibilidad del navegador. El objetivo de esta sección es enumerar los más comunes, proporcionando un ejemplo de cada uno para mostrar cómo los puedes implementar en tus propios datos de compatibilidad.

### Incluyendo una nota a pie de página

A menudo, las tablas de compatibilidad incluirán notas a pie de página relacionadas con ciertas entradas que explican detalles útiles o comportamientos extraños que los desarrolladores encontrarán útiles. Como ejemplo, la entrada de Chrome para Android para {{domxref("VRDisplay.capabilities")}} (consulta también [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/master/api/VRDisplay.json)) (en el momento de escribir este artículo) tenía una nota al pie de página "Actualmente solo es compatible con Google Daydream". Para incluir esto en los datos de capacidades, agregamos un submiembro "`notes`" dentro del submiembro "chrome_android" relevante; se vería así:

```json
"chrome_android": {
  "version_added": true,
  "notes": "Currently supported only by Google Daydream."
}
```

### Incluyendo un prefijo de proveedor

Si una característica es compatible con un prefijo de proveedor en uno o más navegadores, querrás dejarlo en claro en los datos de compatibilidad del navegador. imagina que tienes una característica que es compatible con un prefijo `-moz-` en Firefox. Para especificar esto en los datos de compatibilidad, debes agregar un submiembro "`prefix`" dentro del submiembro "firefox" relevante. Y se vería así:

```json
"firefox": {
  "version_added": true,
  "prefix": "-moz-"
}
```

### Incluyendo preferencias o banderas del navegador

Algunas características pueden ser compatibles con un navegador, pero son experimentales y están desactivadas de forma predeterminada. Si un usuario quiere jugar con esta característica, debe activarla usando una preferencia/bandera.

Para representar esto en los datos de compatibilidad, debes agregar el submiembro "`flags`" dentro del submiembro del identificador del navegador relevante. El valor de "`flags`" es un arreglo de objetos, cada uno de los cuales contiene tres miembros:

- `type`: Qué tipo de bandera o preferencia es. El valor más común es "`preference`", que se establece dentro del navegador (por ejemplo, usando `about: config` en Firefox, o `chrome://flags` en Chrome), pero a veces también puedes usar un valor de "`compile_flag`", que es un conjunto de preferencias cuando se construye la compilación del navegador.
- `name`: Esta es una cadena que representa el nombre de la preferencia que necesita tener un valor establecido. Por ejemplo, "Habilitar funciones experimentales de la plataforma web" es una preferencia que existe en Chrome, que se encuentra en `chrome://flags`.
- `value_to_set`: Esta es una cadena que representa el valor que se debe establecer en la preferencia, por ejemplo, "`true`".

Entonces, para agregar una preferencia/bandera al soporte de Chrome para una característica, harías algo como esto:

```json
"chrome": {
  "version_added": "50",
  "flags": [
    {
      "type": "preference",
      "name": "Enable Experimental Web Platform Features",
      "value_to_set": "true"
    }
  ]
},
```

Si una característica está detrás de dos o más banderas, puedes agregar objetos adicionales al arreglo "`flags`", como en este caso, por ejemplo:

```json
"firefox": {
  "version_added": "57",
  "flags": [
    {
      "type": "preference",
      "name": "dom.streams.enabled",
      "value_to_set": "true"
    },
    {
      "type": "preference",
      "name": "javascript.options.streams",
      "value_to_set": "true"
    }
  ]
},
```

### Incluyendo una versión donde se eliminó el soporte

A veces, una característica se agregará en una determinada versión del navegador, pero luego se eliminará nuevamente cuando la característica esté obsoleta. Esto se puede representar fácilmente usando el submiembro "`version_removed`", que toma como valor una cadena que representa el número de versión en el que se eliminó. Por ejemplo:

```json
"firefox": {
  "version_added": "35",
  "version_removed": "47",
},
```

### Incluyendo múltiples puntos de soporte para la misma entrada del navegador

A veces, querrás agregar varios puntos de datos de soporte para el mismo navegador dentro de la misma característica.

Como ejemplo, la propiedad {{cssxref("text-align-last")}} (ve también [text-align-last.json](https://github.com/mdn/browser-compat-data/blob/master/css/properties/text-align-last.json)) se agregó a Chrome en la versión 35, compatible con una pref.

El soporte mencionado anteriormente se eliminó en la versión 47; también en la versión 47, se agregó soporte para `text-align-last` habilitado de manera predeterminada.

Para incluir estos dos puntos de datos, puedes hacer que el valor del submiembro "`chrome`" sea un arreglo que contenga dos objetos de información de soporte, en lugar de un solo objeto de información de soporte:

```json
"chrome": [
  {
    "version_added": "47"
  },
  {
    "version_added": "35",
    "version_removed": "47",
    "flags": [
      {
        "type": "preference",
        "name": "Enable Experimental Web Platform Features",
        "value_to_set": "true"
      }
    ]
  }
],
```

> **Nota:** Debes colocar el punto de soporte más actual o importante primero en el arreglo — esto hace que los datos sean más fáciles de leer para las personas que solo desean escanearlos para obtener la información más reciente.

### Incluyendo un nombre alternativo

Ocasionalmente, los navegadores admitirán una característica con un nombre diferente al definido en su especificación. Esto se podría deber, por ejemplo, a que un navegador agregó soporte experimental para una característica antes, y luego el nombre cambió antes de que se estabilizara la especificación.

Para incluir un caso de este tipo en los datos de compatibilidad del navegador, puedes incluir un punto de información de soporte que especifique el nombre alternativo dentro de un miembro "`alternative_name`".

> **Nota:** Es posible que el nombre alternativo no sea un alias exacto — posiblemente tenga un comportamiento diferente al de la versión estándar.

Veamos un ejemplo. La propiedad {{cssxref("border-top-right-radius")}} (consulta también [border-top-right-radius.json](https://github.com/mdn/browser-compat-data/blob/2a0cc3f6bb17aa4345441bed47a059dffd847793/css/properties/border-top-right-radius.json)) era compatible con Firefox:

- Desde la versión 4 en adelante con el nombre estándar `border-top-right-radius`.
- A partir de la versión 49 con un prefijo `-webkit-`, por motivos de compatibilidad con el navegador.
- Desde la versión 1 en adelante con el nombre alternativo `-moz-border-radius-topright`. La compatibilidad con este alias se eliminó en la versión 12.

Para representar esto en los datos, usamos el siguiente JSON:

```json
"firefox": [
  {
    "version_added": "4",
    "notes": "Antes de Firefox 50.0, los estilos de borde de las esquinas redondeadas siempre se representaban como si border-style fuera sólido. Esto se ha solucionado en Firefox 50.0."
  },
  {
    "prefix": "-webkit-",
    "version_added": "49",
    "notes": "De Firefox 44 a 48, el prefijo -webkit- estaba disponible con la preferencia layout.css.prefixes.webkit. A partir de Firefox 49, la preferencia predeterminada es <code>true</code>."
  },
  {
    "alternative_name": "-moz-border-radius-topright",
    "version_added": "1",
    "version_removed": "12"
  }
],
```

## Empujar un cambio de nuevo al repositorio principal

Una vez que hayas terminado de agregar tus datos de compatibilidad, primero debes probarlos usando los siguientes comandos:

- `npm run lint` — prueba todos los datos de compatibilidad para asegurarse de que el JSON sea válido y esté escrito en el estilo correcto, por ejemplo, sangría correcta, sin comas, etc. Imprimirá una larga lista de nombres de archivos y resultados de pruebas; si se encuentra un error, el linter arrojará un error en el archivo en el que se encuentra, brindándote útil información de depuración como número de línea, mensaje de error, etc.
- `npm run show-errors` — valida el JSON con el esquema de datos y resalta errores como el uso de números de versión de navegador no válidos.

Si se ve bien, debes confirmarlo y volver a colocarlo en tu bifurcación remota en GitHub. Lo puedes hacer fácilmente en tu terminal con comandos como estos:

```bash
git add .
git commit -m 'adding compat data for nombre-de-la-característica'
git push
```

Ahora ve a tu bifurcación remota (es decir, `https://github.com/tu-nombre-de-usuario/browser-compat-data`) y deberías ver información sobre tu inserción en la parte superior de la lista de archivos (debajo de "Tus ramas enviadas recientemente"). Puedes crear una solicitud de extracción (iniciando el proceso de enviarla al repositorio principal) presionando el botón "Comparar y solicitud de extracción" y luego siguiendo las sencillas instrucciones en la siguiente pantalla.

En este punto, solo tienes que esperar. Un revisor examinará tu solicitud de extracción y la fusionará con el repositorio principal, O solicitará que realices cambios. Si se necesitan cambios, realiza los cambios y envíalos nuevamente hasta que se acepte la SE.

## Insertar los datos en páginas MDN

Una vez que tus nuevos datos se hayan incluido en el repositorio principal, puedes comenzar a generar dinámicamente tablas de compatibilidad del navegador basadas en esos datos en las páginas MDN usando la macro {{TemplateLink("Compat")}}. Esta toma un solo parámetro, la notación de puntos requerida para recorrer los datos JSON y encontrar el objeto que representa la característica para la que deseas generar la tabla de compatibilidad.

Por encima de la llamada a la macro, para ayudar a otros colaboradores a encontrar su camino, debes agregar un texto oculto que solo sea visible a los colaboradores de MDN en el modo de edición:

```html
<div class="hidden">
La tabla de compatibilidad de esta página se genera a partir de datos estructurados.
Si deseas contribuir con los datos, consulta
<a href="https://github.com/mdn/browser-compat-data">https://github.com/mdn/browser-compat-data</a>
y envíanos una solicitud de extracción.
</div>
```

Por ejemplo, en la página de encabezado HTTP {{HTTPHeader("Accept-Charset")}}, la llamada a la macro se ve así: `\{{Compat("http.headers.Accept-Charset")}}`. Si observas el [accept-charset.json](https://github.com/mdn/browser-compat-data/blob/master/http/headers/accept-charset.json) en el repositorio, verás cómo esto se refleja en los datos JSON.

Otro ejemplo, la tabla de compatibilidad para la propiedad {{domxref("VRDisplay.capabilities")}} se genera usando `\{{Compat("api.VRDisplay.capabilities")}}`. La llamada a la macro genera la siguiente tabla (y el correspondiente conjunto de notas):

{{Compat("api.VRDisplay.capabilities")}}

> **Nota:** Los nombres de archivo a menudo coinciden con las etiquetas dadas a las interfaces dentro de las estructuras JSON, pero no siempre es así. Cuando las llamadas a macro generan las tablas, recorren todos los archivos hasta encontrar el JSON relevante para usar, por lo que los nombres de archivo no son críticos. Dicho esto, siempre debes nombrarlos de la manera más intuitiva posible.
