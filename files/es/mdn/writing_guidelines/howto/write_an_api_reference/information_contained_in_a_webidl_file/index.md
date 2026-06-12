---
title: Información contenida en un archivo WebIDL
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 0d155984425e8964c889efb63ec39593e11bbc14
---

Al documentar una API, hay muchas fuentes de información: las especificaciones describen qué se debe implementar, así como el modelo, y las implementaciones muestran qué es lo que realmente se ha incluido en los navegadores. Los archivos WebIDL son una forma muy condensada de proporcionar gran parte, aunque no toda, de la información sobre la API. Este documento sirve como referencia para ayudarte a comprender la sintaxis de WebIDL.

IDL son las siglas de **_Interface Definition Language_** (Lenguaje de Definición de Interfaces) y está diseñado para describir API. En el mundo de la informática existen varios tipos de IDL. En el ámbito de los navegadores, el IDL que utilizamos se denomina _WebIDL_. Existen dos tipos de WebIDL disponibles: el definido en la especificación WebIDL y el que implementan los navegadores. La especificación es la referencia canónica, mientras que el WebIDL del navegador describe lo que está realmente implementado en un navegador concreto, e incluye elementos adicionales como anotaciones, información sobre elementos no estándar y extensiones específicas del navegador a la especificación IDL.

## Dónde encontrar archivos WebIDL

WebIDL puede encontrarse en varias ubicaciones:

- Cada especificación incluye WebIDL en su texto: es una forma muy conveniente de transmitir definiciones precisas. Estas describen la sintaxis de la API. Aunque son la referencia canónica, debes tener en cuenta que pueden diferir de la implementación real. En MDN queremos ser prácticos y documentar cómo es realmente la plataforma web, no lo que idealmente debería ser. Por lo tanto, verifica siempre lo que aparece con las implementaciones (y no dudes en reportar errores si encuentras incoherencias).
- Tres motores de navegador utilizan WebIDL (modificado) como parte de su cadena de herramientas: Gecko, Chromium/Blink y WebCore/WebKit. Las versiones de Edge anteriores a Chromium lo usaban internamente, pero lamentablemente no son públicas.
  - Para Gecko, todos los archivos WebIDL están agrupados en un único directorio: <https://searchfox.org/firefox-main/source/dom/webidl/>. Su extensión es `.webidl`. Hay otros archivos `*.idl` en el árbol de código fuente de Gecko, pero no son WebIDL, así que puedes ignorarlos. Las versiones antiguas de Gecko tienen algunos de sus archivos WebIDL dispersos, e incluso pueden usar el IDL de Mozilla en lugar de WebIDL para describir algunas interfaces web, pero esto no será un problema en ningún código reciente de Gecko.
  - Para Chromium, se encuentran en dos ubicaciones, ambas subárboles del directorio [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/) del código fuente: [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) y [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). El código fuente de Chromium tiene archivos IDL en otras ubicaciones, pero estos forman parte del sistema de pruebas y no son relevantes para las implementaciones de API.
  - Para WebCore, están dispersos por el código fuente, por lo que debes buscar un poco más. Por ejemplo: <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Diferentes dialectos de WebIDL

WebIDL está definido en [su especificación](https://webidl.spec.whatwg.org/). Sin embargo, está diseñado para extenderse y transmitir más información, y los proveedores de navegadores así lo han hecho:

- Para Gecko, Mozilla creó la [documentación](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) de su dialecto WebIDL.
- Para Chromium, Google también creó un [documento](https://www.chromium.org/blink/webidl/) para describir sus extensiones.
- Para WebCore, Apple también puso a disposición una [página](https://docs.webkit.org/Deep%20Dive/Architecture/JSWrappers.html) sobre su dialecto.

> [!NOTE]
> Aquí solo describimos el subconjunto de WebIDL más útil al redactar documentación. Hay muchas más anotaciones útiles para implementadores; consulta los cuatro documentos enlazados arriba para tener una visión general completa.

## Interfaces

Esta sección explica la sintaxis de WebIDL que describe las características generales de la API.

### Nombre de la interfaz

El nombre de la interfaz es la cadena de texto que aparece después de la palabra clave `interface` y antes del siguiente corchete de apertura (`'{'`) o dos puntos (`':'`).

```webidl
interface URL {};
```

Cada interfaz WebIDL, ya sea una interfaz real o un mixin, tiene su propia página en la documentación, en la que se listan todos los constructores, propiedades y métodos definidos para ella.

### Cadena de herencia

El padre de una interfaz determinada, si existe, se define después del nombre de la interfaz, precedido de dos puntos (`':'`). Cada interfaz solo puede tener un padre.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

La cadena de herencia se muestra automáticamente en la barra lateral (usando la macro \\{{APIRef}}). También puede añadirse como imagen SVG mediante la macro \\{{InheritanceDiagram}}.

### Mixins

Algunas propiedades o métodos están disponibles en varias interfaces. Para evitar su redefinición, se definen en interfaces especiales de WebIDL llamadas _mixins_.

A partir de septiembre de 2019, se actualizó la sintaxis de mixin. En la nueva sintaxis, se usa `interface mixin` para definir una interfaz mixin, de la siguiente manera:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Después se usa la palabra clave `includes` para indicar que las propiedades definidas en un mixin están disponibles en una interfaz:

```webidl
MyInterface includes MyMixin;
```

Los mixins no tienen herencia y no pueden incluir otros mixins. Sin embargo, sí admiten partials, por lo que verás cosas como esta:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

A efectos de documentación, MDN oculta los mixins. Son componentes abstractos exclusivos de la especificación. No los puedes ver en la consola del navegador, y resulta más útil saber en qué interfaces reales se implementan los métodos y propiedades.

Si encuentras un mixin en un IDL, como [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils), busca las interfaces que implementan ese mixin, por ejemplo [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), y documenta los miembros del mixin directamente en esas interfaces.

En la práctica, esto significa que, en lugar de documentar `HTMLHyperlinkElementUtils`, se añade la documentación a las interfaces concretas, como [`HTMLAnchorElement`](/es/docs/Web/API/HTMLAnchorElement) y [`HTMLAreaElement`](/es/docs/Web/API/HTMLAreaElement).

Consulta las siguientes dos páginas que documentan `HTMLHyperlinkElementUtils.hash` de manera correspondiente:

- [`HTMLAnchorElement.hash`](/es/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/es/docs/Web/API/HTMLAreaElement/hash)

Para los datos de compatibilidad, consulta la [guía de datos para mixins en BCD](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Sintaxis antigua de mixin

En la sintaxis antigua de mixin de WebIDL, que aún puedes encontrar en algunos sitios, los mixins se prefijan con la anotación `[NoInterfaceObject]`:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

En la sintaxis antigua, los mixins implementados en una interfaz se definen con la palabra clave `implements`.

```webidl
MyInterface implements MyMixin;
```

### Disponibilidad en window y workers

La disponibilidad en los web workers (de cualquier tipo) y en el ámbito de Window se define mediante una anotación: `[Exposed=(Window,Worker)]`. La anotación se aplica a la interfaz parcial con la que aparece.

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

En este caso, `Performance.now()` está disponible en el ámbito `Window` y en cualquier worker, mientras que `Performance.timing`, `Performance.navigation` y `Performance.toJSON()` no están disponibles en los Web Workers.

Los valores más comunes para `[Exposed]` son:

- `Window`
  - : La interfaz parcial está disponible en el ámbito global de {{domxref('Window')}}.
- `Worker`
  - : La interfaz parcial está disponible en cualquier tipo de worker, es decir, si el ámbito global es descendiente de {{domxref('WorkerGlobalScope')}} — {{domxref('DedicatedWorkerGlobalScope')}}, {{domxref('SharedWorkerGlobalScope')}} o {{domxref('ServiceWorkerGlobalScope')}} (también está disponible para `ChromeWorker`, pero no lo documentamos porque no son visibles en la web y son internos de Firefox).
- `DedicatedWorker`
  - : La interfaz parcial solo está disponible en {{domxref('DedicatedWorkerGlobalScope')}}.
- `SharedWorker`
  - : La interfaz parcial solo está disponible en {{domxref('SharedWorkerGlobalScope')}}.
- `ServiceWorker`
  - : La interfaz parcial solo está disponible en {{domxref('ServiceWorkerGlobalScope')}}.

Es posible otro valor, como `System`, pero tiene un [significado especial](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) y no es necesario documentarlo.

Ten en cuenta que estos valores posibles están a su vez definidos en archivos WebIDL. Las interfaces pueden tener una anotación `[Global=xyz]`. Esto significa que cuando un objeto de ese tipo se usa como ámbito global, cualquier interfaz, propiedad o método con `xyz` como valor de `[Exposed]` estará disponible.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Aquí se define que cuando el ámbito global es de tipo `DedicatedWorkerGlobalScope`, es decir, si estamos en un dedicated worker, cualquier interfaz, propiedad o método expuesto —mediante la anotación `[Exposed]`— a `Worker` o `DedicatedWorker` estará disponible.

### Preferencias

> [!NOTE]
> Esta información es específica de Gecko y solo debe usarse en la sección de compatibilidad con navegadores.

En Gecko, la disponibilidad de una interfaz parcial, incluidos su constructor, propiedades y métodos, puede estar controlada por una preferencia (generalmente llamada "pref"). Esto también se indica en el WebIDL.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Aquí `media.webspeech.synth.enabled` controla la interfaz `SpeechSynthesis` y sus propiedades (la lista completa tiene más de 3).

> [!NOTE]
> El valor predeterminado de la preferencia no está disponible directamente en el WebIDL (puede variar de un producto que usa Gecko a otro).

### Disponible solo en código del sistema

Algunas características de la interfaz solo pueden estar disponibles en el código del sistema interno del navegador o en el código de Chrome. Para indicarlo, en Gecko usamos \[ChromeOnly], por ejemplo, la propiedad propName en el siguiente ejemplo solo se puede llamar a través del código de Chrome.

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Propiedades

Puedes identificar la definición de una propiedad por la presencia de la palabra clave `attribute`.

### Nombre de la propiedad

```webidl
readonly attribute MediaError? error;
```

En el ejemplo anterior, el nombre de la propiedad es `error`; en la documentación nos referiremos a ella como `HTMLMediaElement.error`, ya que pertenece a la interfaz `HTMLMediaElement`. El enlace a la página se realiza **con** el prefijo de la interfaz usando \\{{domxref('HTMLMediaElement.error')}} o **sin** el prefijo usando \\{{domxref('HTMLMediaElement.error', 'error')}} cuando el contexto es obvio e inequívoco.

### Tipo de la propiedad

```webidl
readonly attribute MediaError? error;
```

El valor de la propiedad es un objeto de tipo `MediaError`. El signo de interrogación (`'?'`) indica que puede tomar el valor `null`, y la documentación debe explicar _cuándo_ puede ocurrir esto. Si no hay signo de interrogación, la propiedad `error` no puede ser `null`.

El tipo de la propiedad puede estar precedido de un _atributo extendido_, una cadena entre corchetes (como `[LegacyNullToEmptyString]`). Estos atributos extendidos indican comportamientos especiales que deben describirse en el texto. A continuación se muestra una lista de los atributos extendidos estándar de tipos, y el texto que debe añadirse:

- `[LegacyNullToEmptyString]`
  - : El valor `null` se convierte a una cadena de una manera no estándar. La forma estándar es convertirlo a la cadena `"null"`, pero en este caso, se convierte en `""`.

    Añade la siguiente oración al final de la sección _Valor_ del artículo:

    _Cuando se establece en el valor `null`, ese valor `null` se convierte a la cadena vacía (`""`), por lo que `elt.innerHTML = null` es equivalente a `elt.innerHTML = ""`._

    El pequeño ejemplo en línea se debe adaptar para cada propiedad.

### Permisos de escritura en la propiedad

```webidl
readonly attribute MediaError? error;
```

Si la palabra clave `readonly` está presente, la propiedad no puede modificarse. Debe marcarse como de solo lectura:

- En la interfaz, añadiendo la macro \\{{ReadOnlyInline}} junto a su término de definición.
- En la primera oración de su propia página, iniciando la descripción con: _La propiedad de solo lectura **`HTMLMediaElement.error`**…_
- Iniciando su descripción en la página de la interfaz con _Devuelve…_

> [!NOTE]
> Solo las propiedades de solo lectura pueden describirse como propiedades que "devuelven" un valor. Las propiedades que no son de solo lectura también pueden usarse para establecer un valor.

Algunas propiedades tienen la anotación `[PutForwards=xyz]`. Esto significa que la propiedad es una referencia a otro objeto y, al asignarle un nuevo valor, la asignación se reenvía a la propiedad `xyz` del objeto referenciado.

Añade al final de la sección _Valor_ del artículo un párrafo similar al siguiente:

_Aunque la propiedad `style` es en sí de solo lectura en el sentido de que no puedes reemplazar el objeto `CSSStyleDeclaration`, aún se puede asignar directamente a la propiedad `style`, lo cual equivale a asignar a su propiedad {{domxref("CSSStyleDeclaration/cssText", "cssText")}}. También puedes modificar el objeto `CSSStyleDeclaration` mediante los métodos {{domxref("CSSStyleDeclaration/setProperty", "setProperty()")}} y {{domxref("CSSStyleDeclaration/removeProperty", "removeProperty()")}}._

### Lanzamiento de excepciones

```webidl
[SetterThrows]
            attribute DOMString src;
```

En algunos casos, como cuando ciertos valores no son válidos, establecer un nuevo valor puede lanzar una excepción. Esto se indica con la anotación `[SetterThrows]`. Cuando ocurre, la sección Sintaxis de la página de la propiedad _debe_ tener una subsección Excepciones. La lista de excepciones y las condiciones para que se generen se especifican, como información textual, en la especificación de esa API.

Ten en cuenta que algunas excepciones no están marcadas explícitamente, sino que están definidas por las vinculaciones de JavaScript (bindings). [Intentar establecer un valor enumerado no válido](https://webidl.spec.whatwg.org/#es-enumeration) (mapeado a un {{jsxref('String')}} de JavaScript) lanza una excepción {{jsxref('TypeError')}}. Esto debe documentarse, pero solo se indica implícitamente en el documento WebIDL.

No es habitual que los getters lancen excepciones, aunque ocurre en algunos casos. En ese caso se usa la anotación `[GetterThrows]`. Aquí también, la sección Sintaxis de la página de la propiedad _debe_ tener una subsección Excepciones.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Sin lanzamiento de excepciones

Cuando no se sigue la semántica de WebIDL, a menudo se lanza una excepción, incluso sin tener `[SetterThrows]` o `[GetterThrows]` establecidos. Por ejemplo, en modo estricto, si intentamos establecer una propiedad de solo lectura a un nuevo valor, es decir, llamar a su setter implícito, una propiedad de solo lectura lanzará una excepción en modo estricto.

Principalmente por razones de compatibilidad, este comportamiento puede resultar molesto. Para evitarlo mediante la creación de un setter que no haga nada (es decir, ignorando silenciosamente cualquier intento de establecer la propiedad a un nuevo valor), puedes utilizar la anotación `[LenientSetter]`.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

En estos casos, se añade una oración adicional a la descripción de la propiedad. Por ejemplo:

_Aunque esta propiedad es de solo lectura, no lanzará una excepción si se modifica (incluso en modo estricto); el setter no realiza ninguna operación y será ignorado._

### Objetos nuevos o referencias

El valor de retorno de una propiedad puede ser una copia de un objeto interno, un objeto sintético recién creado o una referencia a un objeto interno.

Los objetos básicos con tipos como {{jsxref("String")}} (ya sea un `DOMString` de IDL u otro), {{jsxref("Number")}} (un `byte`, `octet`, `unsigned int` de IDL u otro) y {{jsxref("Boolean")}} siempre se copian y no hay que señalar nada especial sobre ellos (es el comportamiento natural que espera cualquier desarrollador JavaScript).

Para los objetos de interfaz, el comportamiento predeterminado es devolver una _referencia_ al objeto interno. Esto debe mencionarse tanto en la descripción breve de la página de la interfaz como en la descripción de las subpáginas específicas.

> [!NOTE]
> La palabra clave `readonly` usada con una propiedad que devuelve un objeto se aplica a la referencia (el objeto interno no se puede cambiar). Las propiedades del objeto devuelto sí pueden modificarse, incluso si están marcadas como de solo lectura en la interfaz correspondiente.

A veces, una API debe devolver un objeto _nuevo_ o una _copia_ de uno interno. Este caso se indica en el WebIDL mediante la anotación `[NewObject]`.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

En este caso, cada llamada a `buffered` devuelve un objeto diferente: modificarlo no cambiará el valor interno, y un cambio en el valor interno no afectará a cada instancia del objeto. En la documentación, lo marcaremos usando el adjetivo _nuevo_ junto al objeto:

_La propiedad de solo lectura **`HTMLMediaElement.buffered`** devuelve un nuevo objeto \\{{domxref("TimeRanges")}} que…_

y

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Devuelve un nuevo objeto \\{{domxref("TimeRanges")}} que…_

En el caso de una referencia a un objeto de colección (como `HTMLCollection`, `HTMLFormElementsCollection` o `HTMLOptionsCollection`, siempre sin `[NewObject]`), dejamos claro que los cambios en el objeto subyacente estarán disponibles a través de la referencia devuelta. Para indicarlo, calificamos la colección como una `HTMLCollection` **activa** (o `HTMLFormElementsCollections` o `HTMLOptionsCollection`), tanto en la descripción de la interfaz como en la subpágina.

Por ejemplo:

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Devuelve una \\{{domxref("HTMLFormControlsCollection")}} activa que contiene…

### Disponibilidad en workers

La disponibilidad individual de propiedades en los workers también se encuentra en el WebIDL. Para una propiedad, lo predeterminado es tener la misma disponibilidad que la `interface` (es decir, disponible solo en el contexto de {{domxref('Window')}} si no hay ninguna marca especial) o como la `partial interface` en la que está definida.

Para la documentación, la subpágina debe incluir una frase que indique si está disponible o no en los web workers, justo antes de la sección "Sintaxis".

### Preferencias

> [!NOTE]
> Esta información es específica de Gecko y solo debe usarse en la sección de compatibilidad con navegadores.

En Gecko, la disponibilidad de algunas propiedades puede estar controlada por una preferencia. Esto también se indica en el WebIDL.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Aquí `media.webvtt.enabled` controla la propiedad `textTracks`.

> [!NOTE]
> El valor predeterminado de la preferencia no está disponible directamente en el WebIDL (puede variar de un producto que usa Gecko a otro).

## Métodos

Puedes identificar la definición de un método por la presencia de paréntesis después del nombre.

### Nombre del método

```webidl
DOMString canPlayType(DOMString type);
```

El nombre del método es `canPlayType`, y nos referiremos a él como `HTMLMediaElement.canPlayType()` (con los paréntesis que indican que es un método) en la documentación, ya que pertenece a la interfaz `HTMLMediaElement`. El enlace a la página se realiza **con** el prefijo de la interfaz usando \\{{domxref('HTMLMediaElement.canPlayType()')}}, o **sin** el prefijo usando \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} cuando el contexto es claro e inequívoco. Los paréntesis siempre deben incluirse.

### Parámetros

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Los parámetros de un método se listan en la sección Sintaxis de la subpágina del método. Se muestran en el WebIDL en orden, entre paréntesis, como una lista separada por comas. Cada parámetro tiene un nombre (indicado arriba) y un tipo (por ejemplo, `'?'` significa que el valor `null` es válido). Si está marcado como `optional`, el parámetro es opcional al incluirlo en la llamada al método y debe tener la bandera \\{{optional_inline}} cuando se enumere en la sección Sintaxis. El valor predeterminado del parámetro se indica después del signo igual (`'='`).

Los tipos de parámetros pueden tener comportamientos especiales descritos mediante atributos extendidos (como `[LegacyNullToEmptyString]`). A continuación se muestra la lista de estos atributos y el texto que debes añadir:

- `[LegacyNullToEmptyString]`
  - : Añade la siguiente oración al final de la descripción del parámetro: _Un valor [`null`](/es/docs/Web/JavaScript/Reference/Operators/null) se trata igual que la cadena vacía (`""`)._

### Tipo del valor de retorno

```webidl
DOMString canPlayType(DOMString type);
```

El tipo del valor de retorno se indica antes del nombre del método. En el ejemplo anterior, el valor es un objeto de tipo `DOMString`. Si el tipo de retorno va seguido de un signo de interrogación (`'?'`), también puede devolver un valor `null`, y la documentación debe explicar _cuándo_ puede ocurrir. Si no hay signo de interrogación, como en este caso, el valor de retorno no puede ser `null`.

Si el valor de retorno es la palabra clave `void`, significa que no hay valor de retorno. No es un tipo de valor de retorno. Si la entrada WebIDL dice `void`, la sección _Valor de retorno_ de la documentación debe indicar simplemente "Ninguno (\\{{jsxref("undefined")}})."

### Lanzamiento de excepciones

```webidl
[Throws]
   void fastSeek(double time);
```

Algunos métodos pueden lanzar excepciones. Esto se indica mediante la anotación `[Throws]`. Cuando ocurre, la sección Sintaxis de la página del método _debe_ tener una subsección Excepciones. La lista de excepciones y las condiciones para que se lancen se especifican, como información textual, en la especificación de esa API.

Ten en cuenta que algunas excepciones no están marcadas explícitamente, sino que están definidas por los bindings de JavaScript. [Intentar establecer un valor enumerado no válido](https://webidl.spec.whatwg.org/#es-enumeration) (mapeado a un {{jsxref('String')}} de JavaScript) como parámetro lanzará una excepción {{jsxref('TypeError')}}. Esto se debe documentar, pero solo se marca de forma implícita en el documento WebIDL.

Echa un vistazo a una de estas [secciones de _Excepciones_](/es/docs/Web/API/SubtleCrypto/importKey#exceptions).

### Disponibilidad en workers

La disponibilidad individual de los métodos en los web workers también se encuentra en el WebIDL. Para un método, lo predeterminado es tener la misma disponibilidad que la de la `interface` (es decir, disponible para el contexto de {{domxref('Window')}} solo si no se marca nada especial) o que la de la `partial interface` en la que está definido.

Para la documentación, la subpágina debe contener una frase que indique si está disponible en Web workers, justo antes de la sección Sintaxis.

### Preferencias

> [!NOTE]
> Esta información es específica de Gecko y solo debe usarse en la sección de compatibilidad con navegadores.

En Gecko, la disponibilidad de algunos métodos puede controlarse mediante una preferencia. Esto también se indica en el WebIDL.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Aquí `media.webvtt.enabled` controla el método `addTextTrack()`.

> [!NOTE]
> El valor predeterminado de la preferencia no está disponible directamente en el WebIDL (puede variar de un producto que usa Gecko a otro).

## Métodos especiales

Algunos métodos no se listan como métodos regulares en WebIDL, sino como palabras clave especiales que se traducen en métodos estándar específicos de JavaScript.

### toString() y toJSON()

Un stringifier especifica cómo se resuelve un objeto basado en una interfaz en contextos que esperan una cadena. (Consulta la sección [Stringifiers](#stringifiers).) Además, la palabra clave se mapea a `toString()` y se define así:

```webidl
stringifier;
```

El método `toString()` se lista como cualquier otro método de la interfaz y tiene su propia subpágina (por ejemplo, {{domxref("Range.toString()")}}).

Un jsonifier se mapea a `toJSON()` y se define así:

```webidl
jsonifier; // Versión de Gecko
serializer; // Versión estándar
```

El método `toJSON()` se lista como cualquier otro método de la interfaz y tiene su propia subpágina (por ejemplo, {{domxref("Performance.toJSON()")}}).

> [!NOTE]
> La especificación WebIDL usa `serializer` en lugar de `jsonifier`. Esto no se usa en Gecko; en mozilla-central solo se encuentra `jsonifier`, que es una propuesta temprana no estándar.

### Métodos de tipo iterador

Una interfaz puede definirse como _iterable_, lo que significa que tendrá los siguientes métodos: `entries()`, `keys()`, `values()` y `forEach()`. También admite el uso de {{jsxref("Statements/for...of", "for...of")}} en un objeto que implemente esta interfaz.

Hay dos tipos de iteración posibles: el _iterador de valores_ y el _iterador de pares_.

#### Iterador de valores

```webidl
iterable<valueType>
```

El iterador recorrerá valores de tipo _valueType_. Los métodos generados serán:

- `entries()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre los índices (que son `unsigned long`).
- `values()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre los valores.
- `keys()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre las claves, que son sus índices (que son `unsigned long`). En el caso de los iteradores de valores, `keys()` y `entries()` son idénticos.
- `forEach()`, que ejecuta una función callback dada una vez por cada entrada de la lista.

Este iterador permite usar la sintaxis `for (const p in object)` como forma abreviada de `for (const p in object.entries())`. Añadimos una oración al respecto en la descripción de la interfaz.

Los valores sobre los que iterar pueden definirse de una de las siguientes maneras:

- En el archivo WebIDL, usando la notación `iterable<valueType>`. Por ejemplo, consulta {{domxref('DOMTokenList')}}.
- Implícitamente en el archivo WebIDL, si la interfaz admite propiedades indexadas. Esto se indica cuando la interfaz incluye métodos `getter` con un parámetro de tipo `unsigned long`.
- Fuera del archivo WebIDL, en el texto que lo acompaña. Dicho texto suele encontrarse en la especificación y normalmente comienza con: _"The [values to iterate over](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Iterador de pares

```webidl
iterable<keyType, valueType>
```

El iterador recorrerá valores de tipo _valueType_ con claves de tipo _keyType_, es decir, los pares de valores. Los métodos generados serán:

- `entries()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre los pares de valores. Por ejemplo, consulta {{domxref('FormData.entries()')}}.
- `values()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre los valores. Por ejemplo, consulta {{domxref('FormData.values()')}}.
- `keys()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre las claves. Por ejemplo, consulta {{domxref('FormData.keys()')}}.
- `forEach()`, que ejecuta una función callback dada una vez por cada entrada de la lista. Por ejemplo, consulta {{domxref('Headers.forEach()')}}.

Este iterador permite usar la sintaxis `for (const p in object)` como forma abreviada de `for (const p in object.entries())`. Añadimos una oración al respecto en la descripción de la interfaz. Por ejemplo, {{domxref('FormData')}}.

Los pares de valores sobre los que iterar pueden definirse de una de las siguientes maneras:

- En el archivo WebIDL, usando la notación `iterable<keyType, valueType>`. Por ejemplo, consulta {{domxref('FormData')}}.
- Fuera del archivo WebIDL, en el texto que lo acompaña. Dicho texto suele encontrarse en la especificación y normalmente comienza con: _"The [value pairs to iterate over](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Métodos de tipo conjunto

Una interfaz se puede definir como de tipo conjunto (_set-like_), lo que significa que representa un _conjunto ordenado de valores_ y tendrá los siguientes métodos: `entries()`, `keys()`, `values()`, `forEach()` y `has()` (también tiene la propiedad `size`). Además, admite el uso de {{jsxref("Statements/for...of", "for...of")}} en un objeto que implemente esta interfaz. El tipo de conjunto puede tener el prefijo `readonly` o no. Si no es de solo lectura, también se implementan los métodos para modificar el conjunto: `add()`, `clear()` y `delete()`.

```webidl
setlike<valueType>
```

Las propiedades generadas serán:

- `entries()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre los índices. Por ejemplo, consulta {{domxref('NodeList.entries()')}}.
- `values()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre los valores. Por ejemplo, consulta {{domxref('NodeList.values()')}}.
- `keys()`, que devuelve un [`iterador`](/es/docs/Web/JavaScript/Reference/Iteration_protocols) sobre las claves. Por ejemplo, consulta {{domxref('NodeList.keys()')}}.
- `forEach()`, que ejecuta una función callback dada una vez por cada entrada de la lista. Por ejemplo, consulta {{domxref('NodeList.forEach()')}}.

En los casos en los que la declaración de tipo conjunto no esté precedida por readonly, también se generan los siguientes métodos:

- `add()`, que añade una entrada. Por ejemplo, el método `.add()` de {{domxref('FontFaceSet')}}.
- `clear()`, que vacía la estructura tipo conjunto. Por ejemplo, el método `.clear()` de {{domxref('FontFaceSet')}}.
- `delete()`, que elimina una entrada. Por ejemplo, el método `.delete()` de {{domxref('FontFaceSet')}}.

Esta interfaz de conjunto también permite utilizar la sintaxis `for (const p in object)` como forma abreviada de `for (const p in object.entries())`.

## Comportamientos especiales

Algunos miembros de IDL indican comportamientos especiales que deben mencionarse en las páginas correspondientes.

### Stringifiers

Además de añadir el método `toString()` a una interfaz, como se describe en [toString() y toJSON()](#tostring_y_tojson), los stringifiers también indican que una instancia de objeto, al usarse como una cadena, devuelve una cadena distinta a la predeterminada (la predeterminada suele ser una representación JSON del objeto). La forma exacta depende de cómo se especifique en el IDL. Independientemente del cómo, el comportamiento no predeterminado debe describirse en la página de la interfaz.

Cuando la palabra clave `stringifier` acompaña a un nombre de atributo, hacer referencia al nombre del objeto tiene el mismo resultado que hacer referencia al nombre del atributo. Considera el siguiente IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Para una clase basada en esta interfaz, las siguientes líneas de código son equivalentes. El comportamiento debe mencionarse tanto en la página de la propiedad como en la de la interfaz.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Cuando la palabra clave `stringifier` se usa sola, un objeto de la interfaz puede usarse como se ha indicado anteriormente, pero el comportamiento está definido en el código fuente.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Para saber qué hace realmente una referencia a una interfaz, consulta la especificación de la interfaz o experimenta con ella para determinar su salida.

## Constructores

Los constructores están algo ocultos en WebIDL: aparecen como anotaciones de la interfaz principal.

### Constructores sin nombre

Este es el caso más común para los constructores. El constructor de una interfaz A dada se puede utilizar como `a = new A(parameters);`

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Un constructor con la misma interfaz se define usando la anotación `Constructor` en la interfaz. Puede haber paréntesis y una lista de parámetros o no (como en el ejemplo anterior). Documentamos todos los constructores sin nombre en una subpágina; por ejemplo, el anterior tiene el slug _Web/API/MessageChannel/MessageChannel_ y el título `MessageChannel()`.

Otro ejemplo de constructor sin nombre, con parámetros:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

También puede haber varios constructores sin nombre, que se diferencian por sus listas de parámetros. Toda la sintaxis está documentada en una única subpágina.

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

Un constructor con nombre es aquel que tiene un nombre diferente al de su interfaz. Por ejemplo, `new Image(…)` crea un nuevo objeto `HTMLImageElement`. Se definen en el WebIDL mediante la anotación `NamedConstructor` en la interfaz, seguida del nombre del constructor después del signo igual (`'='`) y el parámetro entre paréntesis, en el mismo formato que verás para los métodos.

Puede haber varios constructores con nombre para una interfaz específica, pero esto es extremadamente raro; en tal caso, incluimos una subpágina por nombre.

### Nueva sintaxis del constructor

A partir de septiembre de 2019, se actualizó la sintaxis del constructor en WebIDL. La sintaxis del constructor ya no implica un atributo extendido en la interfaz:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

En su lugar, las nuevas especificaciones utilizan una sintaxis similar a la de los métodos, denominada `constructor`, sin tipo de retorno definido explícitamente, escrita así:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Esto significa que ahora se pueden especificar atributos extendidos en el constructor, y ya no se asume que todos los constructores lanzan excepciones. Si un constructor lanza una excepción, se usará `[Throws]` para indicar que:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es poco probable que _todas_ las especificaciones se actualicen para utilizar la nueva sintaxis, así que probablemente encuentres ambas en la práctica. Por lo tanto, seguimos cubriendo ambos tipos de sintaxis aquí.

### Disponibilidad en workers

Los constructores tienen la misma disponibilidad que la interfaz, o interfaz parcial, en la que se definen. La subpágina proporciona esta información de la misma manera que para un método.

### Preferencias

Los constructores se controlan mediante la misma preferencia que la interfaz, o interfaz parcial, en la que se definen. La subpágina proporciona esta información de la misma manera que para un método.
