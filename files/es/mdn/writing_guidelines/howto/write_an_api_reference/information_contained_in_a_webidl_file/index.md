---
title: Información contenida en un archivo WebIDL
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 0d155984425e8964c889efb63ec39593e11bbc14
---

Al escribir documentación sobre una API, las fuentes de información son muchas: las especificaciones describen qué se debe implementar así como el modelo, y las implementaciones describen qué se ha puesto realmente en los navegadores. Los archivos WebIDL son una forma muy condensada de dar mucha, pero no toda, la información sobre la API. Este documento proporciona una referencia para ayudar a comprender la sintaxis de WebIDL.

IDL significa **_Interface Definition Language_** (lenguaje de definición de interfaces) y está diseñado para describir API. En el mundo más amplio de la computación hay varios tipos de IDL. En el mundo de los navegadores, el IDL que usamos se llama _WebIDL_. Hay dos tipos de WebIDL disponibles: el dado en la especificación WebIDL, y el implementado en los navegadores. La especificación es la referencia canónica, y el WebIDL del navegador describe lo que realmente se implementa en un navegador en particular, y contiene cosas adicionales como anotaciones, información sobre elementos no estándar y extensiones específicas del navegador a la especificación IDL.

## Dónde encontrar archivos WebIDL

WebIDL se puede encontrar en múltiples ubicaciones:

- Cada especificación contiene WebIDL dentro del texto: es una forma muy conveniente de transmitir una definición precisa. Estos describen la sintaxis de la API. Aunque son la referencia canónica, debemos tener en cuenta que pueden diferir de la implementación real. En MDN queremos ser prácticos y documentar lo que realmente es la plataforma web, no lo que idealmente debería ser. Así que verifique lo que hay allí con las implementaciones (y no dude en presentar errores si descubre incoherencias).
- Tres motores de navegador usan WebIDL (modificado) como parte de su cadena de herramientas: Gecko, Chromium/Blink y WebCore/WebKit. Las versiones anteriores a Chromium de Edge lo usaban internamente, pero lamentablemente no son públicas.
  - Para Gecko, todos los archivos WebIDL se agrupan en un solo directorio: <https://searchfox.org/firefox-main/source/dom/webidl/>. Su extensión es `.webidl`. Hay otros archivos `*.idl` en el árbol de fuentes de Gecko, pero no son WebIDL, así que puede ignorarlos. Las versiones anteriores de Gecko tienen algo de su WebIDL disperso, e incluso pueden usar el IDL de Mozilla en lugar de WebIDL para describir algunas interfaces web, pero esto no será un problema en ningún código de Gecko reciente.
  - Para Chromium, se ubican en dos lugares, ambos subdirectorios del directorio [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) del código fuente: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) y [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). El código fuente de Chromium tiene archivos IDL en otros lugares, pero estos son parte del sistema de prueba y no son relevantes para las implementaciones de API.
  - Para WebCore, están dispersos en el código fuente, así que necesita excavar un poco más: por ejemplo, <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Diferentes dialectos de WebIDL

WebIDL se define en [su especificación](https://webidl.spec.whatwg.org/). Pero se ha diseñado para extenderse para transmitir más información, y los proveedores de navegadores lo han hecho:

- Para Gecko, Mozilla creó la [documentación](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) de su WebIDL dialectal.
- Para Chromium, Google también creó un [documento](https://www.chromium.org/blink/webidl/) para describir sus extensiones.
- Para WebCore, Apple también puso a disposición una [página](https://docs.webkit.org/Deep%20Dive/Architecture/JSWrappers.html) para su dialecto.

> [!NOTE]
> Aquí describimos solo el subconjunto de WebIDL que es más útil al escribir documentación. Hay muchas más anotaciones útiles para implementadores; consulte los cuatro documentos vinculados anteriormente para tener una visión general completa.

## Interfaces

Esta sección explica la sintaxis de WebIDL que describe las características generales de la API.

### Nombre de la interfaz

El nombre de la interfaz es la cadena que aparece después de la palabra clave `interface` y antes del siguiente corchete de apertura (`'{'`) o dos puntos (`':'`).

```webidl
interface URL {};
```

Cada interfaz WebIDL, ya sea una interfaz verdadera o un mixin, tiene su propia página en la documentación, que enumera cada constructor, propiedad y método definido para ella.

### Cadena de herencia

El padre, si lo hay, de una interfaz dada se define después del nombre de la interfaz, siguiendo un dos puntos (`':'`). Solo puede haber un padre por interfaz.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

La cadena de herencia se enumera automáticamente en la barra lateral (usando la macro \\{{APIRef}}). También se puede agregar como una imagen SVG a través de la macro \\{{InheritanceDiagram}}.

### Mixins

Algunas propiedades o métodos están disponibles para varias interfaces. Para evitar la redefinición, se definen en interfaces WebIDL especiales llamadas _mixins_.

A partir de septiembre de 2019, la sintaxis de mixin se actualizó. En la nueva sintaxis, usa `interface mixin` para definir una interfaz mixin, así:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Luego usa la palabra clave `includes` para decir que las propiedades definidas dentro de un mixin están disponibles en una interfaz:

```webidl
MyInterface includes MyMixin;
```

Los mixins no tienen herencia y no pueden incluir otros mixins. Sin embargo, admiten parciales, así que verá cosas como esta:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Para fines de documentación, MDN oculta los mixins. Son construcciones abstractas y solo de especificación.
No puede verlos en la consola del navegador y es más útil saber en qué interfaces reales se implementan los métodos y propiedades.

Si encuentra un mixin en IDL, como [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
busque las interfaces que implementan el mixin, por ejemplo
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), y documente los miembros del mixin directamente en esas interfaces.

En la práctica, esto significa que en lugar de documentar `HTMLHyperlinkElementUtils`,
se agregan documentos a las interfaces concretas, como [`HTMLAnchorElement`](/es/docs/Web/API/HTMLAnchorElement)
y [`HTMLAreaElement`](/es/docs/Web/API/HTMLAreaElement).

Consulte las siguientes dos páginas que documentan `HTMLHyperlinkElementUtils.hash` en consecuencia:

- [`HTMLAnchorElement.hash`](/es/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/es/docs/Web/API/HTMLAreaElement/hash)

Para datos de compatibilidad, consulte la [guía de datos para mixins en BCD](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Sintaxis antigua de mixin

En la sintaxis antigua de mixin de WebIDL, que aún puede encontrar en algunos lugares, los mixins tienen el prefijo usando la anotación `[NoInterfaceObject]`:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

En la sintaxis antigua, los mixins implementados en una interfaz se definen usando la palabra clave `implements`.

```webidl
MyInterface implements MyMixin;
```

### Disponibilidad en window y workers

La disponibilidad en workers web (de cualquier tipo) y en el ámbito de Window se define usando una anotación: `[Exposed=(Window,Worker)]`. La anotación se aplica a la interfaz parcial con la que está listada.

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

En este caso, `Performance.now()` está disponible en el ámbito `Window` y para cualquier worker, mientras que `Performance.timing`, `Performance.navigation` y `Performance.toJSON()` no están disponibles para los workers web.

Los valores más comunes para `[Exposed]` son:

- `Window`
  - : La interfaz parcial está disponible para el ámbito global {{domxref('Window')}}.
- `Worker`
  - : La interfaz parcial está disponible para cualquier tipo de worker, es decir, si el ámbito global es un descendiente de {{domxref('WorkerGlobalScope')}} — {{domxref('DedicatedWorkerGlobalScope')}}, {{domxref('SharedWorkerGlobalScope')}}, o {{domxref('ServiceWorkerGlobalScope')}} (También está disponible para `ChromeWorker`, pero no lo documentamos ya que no son visibles en la web y son internos de Firefox).
- `DedicatedWorker`
  - : La interfaz parcial está disponible solo para {{domxref('DedicatedWorkerGlobalScope')}}.
- `SharedWorker`
  - : La interfaz parcial está disponible solo para {{domxref('SharedWorkerGlobalScope')}}.
- `ServiceWorker`
  - : La interfaz parcial está disponible solo para {{domxref('ServiceWorkerGlobalScope')}}.

Es posible otro valor, como `System`, pero esto tiene un [significado especial](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) y no necesita documentarse.

Tenga en cuenta que estos posibles valores en sí mismos se definen en archivos WebIDL. Las interfaces pueden tener una anotación `[Global=xyz]`. Significa que cuando un objeto de este tipo se usa como ámbito global, cualquier interfaz, propiedad o método, con `xyz` como valor de `[Exposed]` está disponible.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Aquí, se define que cuando el ámbito global es de tipo `DedicatedWorkerGlobalScope`, es decir, si estamos en un worker dedicado, cualquier interfaz, propiedad o método expuesto, usando la anotación `[Exposed]`, a `Worker` o `DedicatedWorker` está disponible.

### Preferencias

> [!NOTE]
> Esta información es específica de Gecko y solo debe usarse en la sección de Compatibilidad con navegadores.

En Gecko, la disponibilidad de una interfaz parcial, incluido su constructor, propiedades y métodos puede estar controlada por una preferencia (generalmente llamada "pref"). Esto está marcado en el WebIDL también.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Aquí `media.webspeech.synth.enabled` controla la interfaz `SpeechSynthesis` y sus propiedades (el listado completo tiene más de 3).

> [!NOTE]
> El valor predeterminado de la preferencia no está disponible directamente en el WebIDL (puede ser diferente de un producto que usa Gecko a otro).

### Disponible solo en código del sistema

Algunas características de la interfaz pueden estar disponibles solo en el código del sistema interno del navegador o código chrome. Para signify esto, en Gecko usamos \[ChromeOnly], por ejemplo, la propiedad propName en el siguiente ejemplo solo se puede llamar a través de código chrome:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Propiedades

Puede reconocer la definición de una propiedad por la presencia de la palabra clave `attribute`.

### Nombre de la propiedad

```webidl
readonly attribute MediaError? error;
```

En el ejemplo anterior, el nombre de la propiedad es `error`; en los documentos nos referiremos a ella como `HTMLMediaElement.error` ya que pertenece a la interfaz `HTMLMediaElement`. Vincular a la página se hace **con** el prefijo de interfaz usando \\{{domxref('HTMLMediaElement.error')}} o **sin** el prefijo usando \\{{domxref('HTMLMediaElement.error', 'error')}} cuando el contexto es obvio y inequívoco.

### Tipo de la propiedad

```webidl
readonly attribute MediaError? error;
```

El valor de la propiedad es un objeto de tipo `MediaError`. El signo de interrogación (`'?'`) indica que puede tomar un valor de `null`, y la documentación debe explicar _cuándo_ puede ocurrir esto. Si no hay ningún signo de interrogación presente, la propiedad `error` no puede ser `null`.

El tipo de la propiedad puede tener el prefijo de un _atributo extendido_, una cadena entre corchetes (como `[LegacyNullToEmptyString]`). Dichos atributos extendidos indican comportamientos especiales que deben describirse en la prosa. Aquí hay una lista de atributos extendidos estándar de tipos, y la adición que se debe hacer:

- `[LegacyNullToEmptyString]`
  - : El valor `null` se convierte en una cadena de una manera no estándar. La forma estándar es convertirlo en la cadena `"null"`, pero en este caso, se convierte en `""`.

    Agregue la siguiente oración al final de la sección _Valor_ del artículo:

    _Cuando se establece en el valor `null`, ese valor `null` se convierte en la cadena vacía (`""`), así que `elt.innerHTML = null` es equivalente a `elt.innerHTML = ""`._

    El pequeño ejemplo en línea debe adaptarse para cada propiedad.

### Permisos de escritura en la propiedad

```webidl
readonly attribute MediaError? error;
```

Si la palabra clave `readonly` está presente, la propiedad no se puede modificar. Debe marcarse como de solo lectura:

- En la interfaz, agregando la macro \\{{ReadOnlyInline}} junto a su término de definición.
- En la primera oración de su propia página, comenzando la descripción con: _La propiedad de solo lectura **`HTMLMediaElement.error`**…_
- Comenzando su descripción en la página de la interfaz con _Devuelve…_

> [!NOTE]
> Solo las propiedades de solo lectura pueden describirse como "que devuelven" un valor. Las propiedades que no son de solo lectura también se pueden usar para establecer un valor.

Algunas propiedades tienen la anotación `[PutForwards=xyz]`. Esto significa que la propiedad es una referencia a otro objeto, y cuando se le asigna un nuevo valor, la asignación se reenvía a la propiedad `xyz` del objeto referenciado.

Agregue un párrafo similar al siguiente al final de la sección _Valor_ del artículo:

_Aunque la propiedad `style` en sí es de solo lectura en el sentido de que no puede reemplazar el objeto `CSSStyleDeclaration`, todavía puede asignar a la propiedad `style` directamente, lo que equivale a asignar a su propiedad {{domxref("CSSStyleDeclaration/cssText", "cssText")}}. También puede modificar el objeto `CSSStyleDeclaration` usando los métodos {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} y {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}}._

### Lanzar excepciones

```webidl
[SetterThrows]
            attribute DOMString src;
```

En algunos casos, como cuando algunos valores son ilegales, establecer un nuevo valor puede provocar que se lance una excepción. Esto está marcado usando la anotación `[SetterThrows]`. Cuando esto sucede, la sección Sintaxis de la página de propiedades _debe_ tener una subsección Excepciones. La lista de excepciones y las condiciones para que se lancen se enumeran, como información textual, en la especificación de esa API.

Tenga en cuenta que algunas excepciones no están marcadas explícitamente pero están definidas por los enlaces de JavaScript. [Intentar establecer un valor enumerado ilegal](https://webidl.spec.whatwg.org/#es-enumeration) (mapeado a un {{jsxref('String')}} de JavaScript) lanza una excepción {{jsxref('TypeError')}}. Esto debe documentarse, pero solo está marcado implícitamente en el documento WebIDL.

Es poco común que los getters lancen excepciones, aunque sucede en algunos casos. En este caso se usa la anotación `[GetterThrows]`. Aquí también, la sección Sintaxis de la página de propiedades _debe_ tener una subsección Excepciones.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### No lanzar excepciones

Cuando no se siguen la semántica de WebIDL, a menudo se lanza una excepción, incluso sin `[SetterThrows]` o `[GetterThrows]` establecido. Por ejemplo, en modo estricto, si intentamos establecer una propiedad de solo lectura en un nuevo valor, es decir, llamar a su setter implícito, una propiedad de solo lectura lanzará en modo estricto.

Principalmente por compatibilidad, este comportamiento a veces es molesto. Para evitar esto creando un setter no operativo (es decir, ignorando silenciosamente cualquier intento de establecer la propiedad en un nuevo valor), se puede usar la anotación `[LenientSetter]`.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

En estos casos, se agrega una oración extra a la descripción de la propiedad. Por ejemplo

_Aunque esta propiedad es de solo lectura, no lanzará si se modifica (incluso en modo estricto); el setter es una operación no operativa y se ignorará._

### Objetos nuevos o referencias

El valor de retorno de una propiedad puede ser una copia de un objeto interno, un objeto sintético recién creado o una referencia a un objeto interno.

Los objetos básicos con tipos como {{jsxref("String")}} (siendo un IDL `DOMString` u otro), {{jsxref("Number")}} (siendo un IDL `byte`, `octet`, `unsigned int` u otro) y {{jsxref("Boolean")}} siempre se copian y no hay nada especial que notar sobre ellos (es un comportamiento natural esperado por un desarrollador de JavaScript).

Para los objetos de interfaz, el valor predeterminado es devolver una _referencia_ al objeto interno. Esto debe mencionarse tanto en la descripción breve en la página de la interfaz como en la descripción en las subpáginas específicas.

> [!NOTE]
> La palabra clave `readonly` usada con una propiedad que devuelve un objeto se aplica a la referencia (el objeto interno no se puede cambiar). Las propiedades del objeto devuelto se pueden cambiar, incluso si están marcadas como de solo lectura en la interfaz relevante.

A veces, una API debe devolver un objeto _nuevo_ o una _copia_ de uno interno. Este caso se indica en el WebIDL usando la anotación `[NewObject]`.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

En este caso, cada llamada a `buffered` devuelve un objeto diferente: cambiarlo no cambiará el valor interno, y un cambio en el valor interno no afectará cada instancia de objeto. En la documentación, lo marcaremos usando el adjetivo _nuevo_ junto al objeto:

_La propiedad de solo lectura **`HTMLMediaElement.buffered`** devuelve un objeto \\{{domxref("TimeRanges")}} nuevo que…_

y

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Devuelve un objeto \\{{domxref("TimeRanges")}} nuevo que …_

En el caso de una referencia a un objeto de colección (como `HTMLCollection`, `HTMLFormElementsCollection` o `HTMLOptionsCollection`, siempre sin `[NewObject]`), lo hacemos explícito que los cambios al objeto subyacente estarán disponibles a través de la referencia devuelta. Para marcar esto, calificamos la colección como una `HTMLCollection` **en vivo** (o `HTMLFormElementsCollections` o `HTMLOptionsCollection`), tanto en la descripción de la interfaz como en la subpágina.

Por ejemplo

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Devuelve una \\{{domxref("HTMLFormControlsCollection")}} en vivo que contiene…

### Disponibilidad en workers

La disponibilidad de propiedades individuales en workers también se encuentra en el WebIDL. Para una propiedad, el valor predeterminado es la misma disponibilidad que la `interface` (es decir, disponible solo para el contexto {{domxref('Window')}} si no se marca nada especial) o la `interfaz parcial` en la que está definida.

Para la documentación, la subpágina debe contener una oración que indique si está disponible o no en los workers web, justo antes de la sección "Sintaxis".

### Preferencias

> [!NOTE]
> Esta información es específica de Gecko y solo debe usarse en la sección de Compatibilidad con navegadores.

En Gecko, la disponibilidad de algunas propiedades puede estar controlada por una preferencia. Esto está marcado en el WebIDL también.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Aquí `media.webvtt.enabled` controla la propiedad `textTracks`.

> [!NOTE]
> El valor predeterminado de la preferencia no está disponible directamente en el WebIDL (puede ser diferente de un producto que usa Gecko a otro).

## Métodos

Puede reconocer la definición de un método por la presencia de paréntesis después del nombre.

### Nombre del método

```webidl
DOMString canPlayType(DOMString type);
```

El nombre del método es `canPlayType`, y nos referiremos a él como `HTMLMediaElement.canPlayType()` (con los paréntesis que indican que es un método) en los documentos, ya que pertenece a la interfaz `HTMLMediaElement`. Vincular a la página se hace **con** el prefijo de interfaz usando \\{{domxref('HTMLMediaElement.canPlayType()')}} o **sin** el prefijo usando \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} cuando el contexto es obvio y inequívoco. Los paréntesis siempre deben incluirse.

### Parámetros

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Los parámetros de un método se enumeran en la sección Sintaxis de la subpágina del método. Se enumeran en el WebIDL en orden, entre paréntesis, como una lista separada por comas. Cada parámetro tiene un nombre (indicado anteriormente) y un tipo (por ejemplo, un `'?'` significa que el valor `null` es válido). Si está marcado como `optional`, el parámetro es opcional para incluir en una llamada al método y debe tener la bandera \\{{optional_inline}} incluida cuando se enumera en la sección Sintaxis. El valor predeterminado del parámetro se enumera después del signo de igualdad (`'='`).

Los tipos de parámetros pueden tener comportamientos especiales descritos usando atributos extendidos (como `[LegacyNullToEmptyString]`). Aquí está la lista de dichos atributos y la adición que tiene que hacer en la prosa:

- `[LegacyNullToEmptyString]`
  - : Agregue la siguiente oración al final de la descripción del parámetro: _Un valor [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) se trata igual que la cadena vacía (`""`)._

### Tipo del valor de retorno

```webidl
DOMString canPlayType(DOMString type);
```

El tipo de valor de retorno se indica antes del nombre del método; en el caso anterior, el valor es un objeto de tipo `DOMString`. Si el tipo de retorno va seguido de un signo de interrogación (`'?'`), también se puede devolver un valor de `null`, y la documentación debe explicar _cuándo_ puede suceder esto. Si no hay ningún signo de interrogación presente, como aquí, el valor de retorno no puede ser `null`.

Si el valor de retorno es la palabra clave `void`, significa que no hay valor de retorno. No es un tipo de valor de retorno. Si la entrada de WebIDL lee `void`, la sección _Valor de retorno_ en los documentos simplemente debe indicar "Ninguno (\{{jsxref("undefined")}}).".

### Lanzar excepciones

```webidl
[Throws]
   void fastSeek(double time);
```

Algunos métodos pueden lanzar excepciones. Esto está marcado usando la anotación `[Throws]`. Cuando esto sucede, la sección Sintaxis de la página del método _debe_ tener una subsección Excepciones. La lista de excepciones y las condiciones para que se lancen se enumeran, como información textual, en la especificación de esa API.

Tenga en cuenta que algunas excepciones no están marcadas explícitamente pero están definidas por los enlaces de JavaScript. [Intentar establecer un valor enumerado ilegal](https://webidl.spec.whatwg.org/#es-enumeration) (mapeado a un {{jsxref('String')}} de JavaScript) como parámetro lanzará una excepción {{jsxref('TypeError')}}. Esto debe documentarse, pero solo está marcado implícitamente en el documento WebIDL.

Eche un vistazo a una de estas [secciones _Excepciones_](/es/docs/Web/API/SubtleCrypto/importKey#exceptions).

### Disponibilidad en workers

La disponibilidad de métodos individuales en workers también se encuentra en el WebIDL. Para un método, el valor predeterminado es la misma disponibilidad que la `interface` (es decir, disponible para el contexto {{domxref('Window')}} si no se marca nada especial) o la `interfaz parcial` en la que está definida.

Para la documentación, la subpágina debe contener una oración que indique si está disponible en los workers web, justo antes de la sección Sintaxis.

### Preferencias

> [!NOTE]
> Esta información es específica de Gecko y solo debe usarse en la sección de Compatibilidad con navegadores.

En Gecko, la disponibilidad de algunos métodos puede estar controlada por una preferencia. Esto está marcado en el WebIDL también.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Aquí `media.webvtt.enabled` controla el método `addTextTrack()`.

> [!NOTE]
> El valor predeterminado de la preferencia no está disponible directamente en el WebIDL (puede ser diferente de un producto que usa Gecko a otro).

## Métodos especiales

Algunos métodos no se enumeran como métodos regulares en WebIDL sino como palabras clave especiales, que se traducen a métodos JavaScript estándar específicos.

### toString() y toJSON()

Un stringifier especifica cómo se resuelve un objeto basado en una interfaz en contextos que esperan una cadena. (Consulte la sección [Stringifiers](#stringifiers)). Además, la palabra clave se asigna a `toString()` y se define como:

```webidl
stringifier;
```

El método `toString()` se enumera como cualquier otro método de la interfaz y tiene su propia subpágina (por ejemplo, {{domxref("Range.toString()")}})

Un jsonifier se asigna a `toJSON()` y se define como:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

El método `toJSON()` se enumera como cualquier otro método de la interfaz y tiene su propia subpágina (por ejemplo, {{domxref("Performance.toJSON()")}})

> [!NOTE]
> La especificación WebIDL usa `serializer` en lugar de `jsonifier`. Esto no se usa en Gecko; solo se encuentra la propuesta temprana no estándar probable `jsonifier` en mozilla-central.

### Métodos tipo iterador

Una interfaz puede definirse como _iterable_, lo que significa que tendrá los siguientes métodos: `entries()`, `keys()`, `values()` y `forEach()`. También admiten el uso de {{jsxref("Statements/for...of", "for...of")}} en un objeto que implementa esta interfaz.

Hay dos tipos de iteración posibles: el _iterador de valor_ y el _iterador de pares._

#### Iterador de valor

```webidl
iterable<valueType>
```

El iterador iterará sobre valores de tipo _valueType_. Los métodos generados serán:

- `entries()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en los índices (que son `unsigned long`).
- `values()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en los valores.
- `keys()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en las claves, que son sus índices (que son `unsigned long`). En el caso de iteradores de valor, `keys()` y `entries()` son idénticos.
- `forEach()`, que ejecuta una función de devolución de llamada dada una vez para cada entrada en la lista.

Dicho iterador permite usar la sintaxis `for (const p in object)` como abreviatura de `for (const p in object.entries())`. Agregamos una oración sobre esto en la descripción de la interfaz.

Los valores sobre los que iterar se pueden definir de una de las siguientes maneras:

- En el archivo WebIDL, usando la notación `iterable<valueType>`. Por ejemplo, consulte {{domxref('DOMTokenList')}}.
- Implícitamente en el archivo WebIDL, si la interfaz admite propiedades indexadas. Esto se indica cuando la interfaz incluye métodos `getter` con un parámetro de tipo `unsigned long`.
- Fuera del archivo WebIDL, en la prosa que lo acompaña. Dicha prosa se encuentra típicamente en la especificación y generalmente comienza con: _"Los [valores sobre los que iterar](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_

#### Iterador de pares

```webidl
iterable<keyType, valueType>
```

El iterador iterará sobre valores de tipo _valueType_ con claves de tipo _keyType_, es decir, los pares de valores. Los métodos generados serán:

- `entries()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en los pares de valores. Por ejemplo, consulte {{domxref('FormData.entries()')}}.
- `values()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en los valores. Por ejemplo, consulte {{domxref('FormData.values()')}}.
- `keys()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en las claves. Por ejemplo, consulte {{domxref('FormData.keys()')}}.
- `forEach()`, que ejecuta una función de devolución de llamada dada una vez para cada entrada en la lista. Por ejemplo, consulte {{domxref('Headers.forEach()')}}.

Dicho iterador permite usar la sintaxis `for (const p in object)` como abreviatura de `for (const p in object.entries())`. Agregamos una oración sobre esto en la descripción de la interfaz. Por ejemplo, {{domxref('FormData')}}.

Los pares de valores sobre los que iterar se pueden definir de una de las siguientes maneras:

- En el archivo WebIDL, usando la notación `iterable<keyType, valueType>`. Por ejemplo, consulte {{domxref('FormData')}}.
- Fuera del archivo WebIDL, en la prosa que lo acompaña. Dicha prosa se encuentra típicamente en la especificación y generalmente comienza con: _"Los [pares de valores sobre los que iterar](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_

### Métodos tipo conjunto

Una interfaz puede definirse como _set-like_, lo que significa que representa un _conjunto ordenado de valores_ tendrá los siguientes métodos: `entries()`, `keys()`, `values()`, `forEach()` y `has()` (también tiene la propiedad `size`). También admiten el uso de {{jsxref("Statements/for...of", "for...of")}} en un objeto que implementa esta interfaz. El set-like puede tener el prefijo `readonly` o no. Si no es de solo lectura, también se implementan los métodos para modificar el conjunto: `add()`, `clear()` y `delete()`.

```webidl
setlike<valueType>
```

Las propiedades generadas serán:

- `entries()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en los índices. Por ejemplo, consulte {{domxref('NodeList.entries()')}}.
- `values()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en los valores. Por ejemplo, consulte {{domxref('NodeList.values()')}}.
- `keys()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) en las claves. Por ejemplo, consulte {{domxref('NodeList.keys()')}}.
- `forEach()`, que ejecuta una función de devolución de llamada dada una vez para cada entrada en la lista. Por ejemplo, consulte {{domxref('NodeList.forEach()')}}.

En casos donde la declaración set-like no tiene el prefijo de solo lectura, también se generan los siguientes métodos:

- `add()` que agrega una entrada. Por ejemplo, el método `.add()` de {{domxref('FontFaceSet')}}.
- `clear()` que vacía la estructura set-like. Por ejemplo, el método `.clear()` de {{domxref('FontFaceSet')}}.
- `delete()` que elimina una entrada. Por ejemplo, el método `.delete()` de {{domxref('FontFaceSet')}}.

Dicha interfaz de conjunto también permite usar la sintaxis `for (const p in object)` como abreviatura de `for (const p in object.entries())`.

## Comportamientos especiales

Algunos miembros IDL indican comportamientos especiales que deben notedarse en las páginas apropiadas.

### Stringifiers

Además de agregar el método `toString()` a una interfaz como se describe en [toString() y toJSON()](#tostring_and_tojson), los stringifiers también indican que una instancia de objeto, cuando se usa como una cadena, devuelve una cadena diferente de la predeterminada. (La predeterminada suele ser una representación JSON del objeto). Exactamente cómo depende de la forma en que se especifica en el IDL. Independientemente del cómo, el comportamiento no predeterminado debe describirse en la página de la interfaz.

Cuando la palabra clave `stringifier` acompaña un nombre de atributo, referenciar el nombre del objeto tiene el mismo resultado que referenciar el nombre del atributo. Considere el siguiente IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Para una clase basada en esta interfaz, las siguientes líneas de código son equivalentes. El comportamiento debe notarse en la página de propiedades además de en la página de la interfaz.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Cuando la palabra clave `stringifier` se usa por sí sola, un objeto de la interfaz puede usarse como arriba, pero el comportamiento está definido en el código fuente.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Para aprender lo que realmente hace una referencia de interfaz, consulte la especificación de la interfaz o experimente con la interfaz para determinar su salida.

## Constructores

Los constructores están un poco ocultos en WebIDL: se enumeran como anotaciones de la interfaz principal.

### Constructores sin nombre

Este es el caso más común para los constructores. El constructor de una interfaz A dada se puede usar como `a = new A(parameters);`

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Un constructor con la misma interfaz se define usando la anotación `Constructor` en la interfaz. Puede haber paréntesis y una lista de parámetros o no (como en el ejemplo anterior). Documentamos todos los constructores sin nombre en una subpágina; por ejemplo, el anterior se le da el slug _Web/API/MessageChannel/MessageChannel_ y el título `MessageChannel()`.

Otro ejemplo de un constructor sin nombre, con parámetros:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

También puede haber varios constructores sin nombre, que difieren por sus listas de parámetros. Toda la sintaxis se documenta en una sola subpágina.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### Constructores con nombre

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

Un constructor con nombre es un constructor que tiene un nombre diferente al de su interfaz. Por ejemplo, `new Image(…)` crea un nuevo objeto `HTMLImageElement`. Se definen en el WebIDL usando la anotación `NamedConstructor` en la interfaz, seguida del nombre del constructor después del signo de igualdad (`'='`) y el parámetro dentro del paréntesis, en el mismo formato que verá para los métodos.

Puede haber varios constructores con nombre para una interfaz específica, pero esto es extremadamente raro; en tal caso, incluimos una subpágina por nombre.

### Sintaxis de constructor nueva

A partir de septiembre de 2019, la sintaxis de constructor de WebIDL se actualizó. La sintaxis de constructor ya no implica un atributo extendido en la interfaz:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Las nuevas especificaciones en su lugar usan una sintaxis similar a un método llamada `constructor` sin un tipo de retorno definido explícitamente, escrita así:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Esto significa que ahora se pueden especificar atributos extendidos en el constructor, y ya no se asume que todos los constructores lancen. Si un constructor lanza, se usará `[Throws]` para indicarlo:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es poco probable que _todas_ las especificaciones se actualicen para usar la nueva sintaxis, por lo que probablemente encontrará ambas. Por lo tanto, continuaremos cubriendo ambos tipos de sintaxis aquí.

### Disponibilidad en workers

Los constructores tienen la misma disponibilidad que la interfaz o interfaz parcial en la que están definidos. La subpágina proporciona esta información de la misma manera que para un método.

### Preferencias

Los constructores están controlados por la misma preferencia que la interfaz o interfaz parcial en la que están definidos. La subpágina proporciona esta información de la misma manera que para un método.
