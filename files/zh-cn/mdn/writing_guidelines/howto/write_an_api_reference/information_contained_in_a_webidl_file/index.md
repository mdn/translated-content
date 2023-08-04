---
title: Information contained in a WebIDL file
slug: MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file
---

{{MDNSidebar}}

在编写有关 API 的文档时，信息来源很多：规范描述了应该实现的内容以及模型，实现描述了实际放在浏览器中的内容。WebIDL 文件是一种非常简洁的方式，可以提供很多（但不是全部）有关 API 的信息。本文档提供了有助于理解 WebIDL 语法的参考。

IDL 代表**_接口定义语言_**，它用于描述 API。在更广泛的计算领域，有几种 IDL。在浏览器领域，我们使用的 IDL 称为*WebIDL*。有两种 WebIDL 可用：WebIDL 规范中给出的一种，以及在浏览器中实现的一种。规范是规范引用，浏览器 WebIDL 描述了在特定浏览器中实际实现的内容，并包含其他内容，例如注释和有关非标准元素的信息。

## 在哪里可以找到 WebIDL 文件

WebIDL 可以在多个位置找到：

- 每个规范在文本中都包含 WebIDL：它是一种传达精确定义的非常方便的方法。这些描述了 API 的语法。虽然是规范参考，但我们必须记住，它们可能与实际实施不同。在 MDN 上，我们希望实用并记录 Web 平台的真正含义，而不是理想应该是什么。因此，请仔细检查实现中的内容（如果发现错误，请不要犹豫，立即提交）。
- 三个浏览器引擎使用（修改）WebIDL 作为其工具链的一部分：Gecko，Chromium / Blink 和 WebCore / WebKit。Edge 在内部使用它，但遗憾的是它们不公开（它会帮助我们很多）。

  - 对于 Gecko，所有 WebIDL 文件都分组在一个目录中：<https://dxr.mozilla.org/mozilla-central/source/dom/webidl/>
  - 他们的延伸是`.webidl`。`*.idl`Gecko 源代码树中还有其他 文件，但它们不是 WebIDL，因此您可以忽略它们。旧版本的 Gecko 有一些 WebIDL 分散在某些地方，甚至可能使用 Mozilla 的 IDL 而不是 WebIDL 来描述一些 Web 界面，但这在任何最近的 Gecko 代码中都不会成为问题。
  - 对于 Chromium，它们分散在源代码中，所以你需要多花点功夫：例如<http://src.chromium.org/viewvc/blink/trunk/Source/modules/mediastream/MediaStream.idl>
  - 同样，WebCore 正如预期的那样，因为 Chromium 是从它分叉出来的，例如<https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/DOMTokenList.idl>

## Different dialects of WebIDL

WebIDL is defined in [its specification](https://heycam.github.io/webidl/). But it has been designed to be extended to convey more information, and browser vendors have done so:

- For Gecko, MDN has the [documentation](/zh-CN/docs/Mozilla/WebIDL_bindings) of its dialectal WebIDL.
- For Chromium, Google also created a [document](https://www.chromium.org/blink/webidl) to describe its extensions.
- For WebCore, Apple also made available a [page](https://trac.webkit.org/wiki/WebKitIDL) for its dialect.

> **备注：** We describe here only the subset of WebIDL which is most useful when writing documentation. There are many more annotations useful for implementers; refer to the four documents linked above to have a complete overview.

## Interfaces

This section explains the WebIDL syntax that describes overall API features.

### Name of the interface

The interface name is the string that appears after the keyword `interface` and before the next opening bracket (`'{'`) or colon (`':'`).

```
interface URL {};
```

Each WebIDL interface, being a true interface or a mixin, has its own page in the documentation, listing every constructor, property and method defined for it.

### Inheritance chain

The parent, if any, of a given interface is defined after the interface name, following a colon (`':'`). There can be only one parent per interface.

```
interface HTMLMediaElement : HTMLElement {…}
```

The inheritance chain is listed automatically in the sidebar (using the \\{{APIRef}} macro). It can also be added as an SVG image via the macro \\{{InheritanceDiagram}}.

### Mixins

Some properties or methods are available to several interfaces. To prevent redefinition they are defined in special WebIDL interfaces called _mixins_. In the WebIDL, they are prefixed using the `[NoInterfaceObject]` annotation. The name of a mixin, `Body` in the following example, doesn't appear in JavaScript.

```
[NoInterfaceObject]
  interface Body {…}
```

For documentation purposes, we create a mixin page, with the same structure as an interface page. As they are not true interfaces, the word _interface_ is not used — _mixin_ is used instead.

Mixin methods and properties are listed in the same way as regular methods and properties:

- They have their own pages, prefixed with the mixin name. E.g {{domxref('Body.bodyUsed')}} or {{domxref('Body.blob()')}}.
- They are listed on the interface page when the interface _implements_ the mixin. Unlike regular properties and methods, they are prefixed with the mixin name and not the interface name. You can see `Body` properties and methods listed on both {{domxref('Request')}} and {{domxref('Response')}} interfaces, as they both implement the `Body` mixin.

Mixins implemented on an interface are defined using the `implements` keyword.

```
Request implements Body;
Response implements Body;
```

> **备注：** Mixin names do not appear in a Web developer console. We shouldn't show them, but we currently do this as it saves us from duplicating content, which would lead to a maintenance issue. We do this if the mixin is only used in one interface (such cases are bugs in the relevant specs — they shouldn't be defined as mixins, but as partial interfaces.)

### Availability in workers

Availability in Web workers (of any type) and on the Window scope is defined using an annotation: `[Exposed=(Window,Worker)]`. The annotation applies to the partial interface it is listed with. If no annotation is available, the default value is `Window`.

```
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

In this case `Performance.now()` is available on the `Window` scope and to any worker, while `Performance.timing`, `Performance.navigation` and `Performance.toJSON()` are not available to Web workers.

The most common values for the `[Exposed]` are:

- `Window`
  - : The partial interface is available to the {{domxref('Window')}} global scope.
- `Worker`
  - : The partial interface is available to any kind of worker, that is if the global scope is a descendant of {{domxref('WorkerGlobalScope')}} — {{domxref('DedicatedWorkerGlobalScope')}}, {{domxref('SharedWorkerGlobalScope')}}, or {{domxref('ServiceWorkerGlobalScope')}} (It also is available to `ChromeWorker`, but we don't document this as they are not visible on the Web and are internal to Firefox.)
- `DedicatedWorker`
  - : The partial interface is available to the {{domxref('DedicatedWorkerGlobalScope')}} only.``
- `SharedWorker`
  - : The partial interface is available to the {{domxref('SharedWorkerGlobalScope')}} only.
- `ServiceWorker`
  - : The partial interface is available to the {{domxref('ServiceWorkerGlobalScope')}} only.

Another value is possible, like `System`, but this has a [special meaning](/zh-CN/docs/Mozilla/WebIDL_bindings#Exposed) and doesn't need to be documented.

Note that these possible values are themselves defined in WebIDL files. Interfaces may have a `[Global=xyz]` annotation. It means that when an object of this type is used as a global scope, any interface, property or method, with `xyz` as a value of `[Exposed]` is available.

```
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Here, it is defined that when the global scope is of type `DedicatedWorkerGlobalScope`, that is if we are in a dedicated worker, any interface, property or method exposed – using the `[Exposed]` annotation – to `Worker` or `DedicatedWorker` is available.

Even the primary global is defined in WebIDL. The primary global is the value of an `[Exposed]` annotation when not present. This is defined using the `[PrimaryGlobal]` annotation and is present on {{domxref('Window')}}:

```
[PrimaryGlobal, NeedResolve]
/*sealed*/ interface Window : EventTarget {…}
```

### Preferences

> **备注：** this information is specific to Gecko and should only be used in the Browser compatibility section.

In Gecko, the availability of a partial interface, including its constructor, properties and methods may be controlled by a preference (usually called a "pref"). This is marked in the WebIDL too.

```
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
    readonly attribute boolean pending;
    readonly attribute boolean speaking;
    readonly attribute boolean paused;
};
```

Here `media.webspeech.synth.enabled` controls the `SpeechSynthesis` interface and its properties (the full listing has more than 3.)

> **备注：** the default value of the preference is not available directly in the WebIDL (it can be different from one product using Gecko to another.)

## Properties

You can recognize the definition of a property by the presence of the `attribute` keyword.

### Name of the property

```
readonly attribute MediaError? error;
```

In the above example the name of the property is `error`; in the docs we will refer to it as `HTMLMediaElement.error` as it belongs to the `HTMLMediaElement` interface. Linking to the page is either done **with** the interface prefix using \\{{domxref('HTMLMediaElement.error')}} or **without** the prefix using \\{{domxref('HTMLMediaElement.error', 'error')}} when the context is obvious and unambiguous.

### Type of the property

```
readonly attribute MediaError? error;
```

The property value is an object of type `MediaError`. The question mark (`'?'`) indicates that it can take a value of `null`, and the documentation must explain _when_ this may occur. If no question mark is present, the `error` property can't be `null`.

### Writing permissions on the property

```
readonly attribute MediaError? error;
```

If the keyword `readonly` is present, the property can't be modified. It must be marked as read-only:

- In the interface, by adding the \\{{ReadOnlyInline}} macro next to its definition term.
- In the first sentence of its own page, by starting the description with: _The read-only **`HTMLMediaElement.error`** property…_
- By adding the `Read-only` tag to its own page.
- By starting its description in the interface page with _Returns…_

> **备注：** Only read-only properties can be described as 'returning' a value. Non read-only properties can also be used to set a value.

### Throwing exceptions

```
[SetterThrows]
attribute DOMString src;
```

In some cases, like when some values are illegal, setting a new value can lead to an exception being raised. This is marked using the `[SetterThrows]` annotation. When this happens, the Syntax section of the property page _must_ have an Exceptions subsection. The list of exceptions and the conditions to have them thrown are listed, as textual information, in the specification of that API.

Note that some exceptions are not explicitly marked but are defined by the JavaScript bindings. [Trying to set an illegal enumerated value](http://heycam.github.io/webidl/#es-enumeration) (mapped to a JavaScript {{jsxref('String')}}) raises a {{jsxref('TypeError')}} exception. This must be documented, but is only implicitly marked in the WebIDL document.

It is uncommon to have getters throwing exceptions, though it happens in a few cases. In this case the `[GetterThrows]` annotation is used. Here also, the Syntax section of the property page _must_ have an Exceptions subsection.

```
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Not throwing exceptions

When the semantics of Webidl is not followed, an exception is often thrown, even without `[SetterThrows]` or `[GetterThrows]` set. For example, in strict mode, if we try to set a read-only property to a new value, that is to call its implicit setter, a read-only property will throw in strict mode.

Mostly for compatibility purpose, this behavior is sometimes annoying. To prevent this by creating a no-op setter (that is by silently ignoring any attempt to set the property to a new value), the `[LenientSetter]` annotation can be used.

```
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In these cases, an extra sentence is added to the description of the property. E.g

_Although this property is read-only, it will not throw if it is modified (even in strict mode); the setter is a no-operation and it will be ignored._

### New objects or references

The return value of a property can be either a copy of an internal object, a newly created synthetic object, or a reference to an internal object.

Basic objects with types like {{jsxref("String")}} (being an IDL `DOMString`, or other), {{jsxref("Number")}} (being an IDL `byte`, `octet`, `unsigned int`, or other), and {{jsxref("Boolean")}} are always copied and nothing special has to be noted about them (it is natural behavior expected by a JavaScript developer.)

For interface objects, the default is to return a _reference_ to the internal object. This has to be mentioned both in the short description in the interface page, and in the description in the specific sub-pages.

> **备注：** The keyword `readonly` used with a property returning an object applies to the _reference_ (the internal object cannot be changed.) The properties of the returned object can be changed, even if they are marked as read-only in the relevant interface.

Sometimes an API must return a _new_ object, or a _copy_ of an internal one. This case is indicated in the WebIDL using the `[NewObject]` annotation.

```
[NewObject]
readonly attribute TimeRanges buffered;
```

In this case, each call to `buffered` returns a different object: changing it will not change the internal value, and a change in the internal value will not affect each object instance. In the documentation, we will mark it by using the adjective _new_ next to object:

_The **`HTMLMediaElement.buffered`** read-only property returns a new \\{{domxref("TimeRanges")}} object that…_

and

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{readonlyinline}}_
  - : _Returns a new \\{{domxref("TimeRanges")}} object that …_

In the case of a reference to a collection object (like `HTMLCollection`, `HTMLFormElementsCollection`, or `HTMLOptionsCollection`, always without `[NewObject]`), we make it explicit that changes to the underlying object will be available via the returned reference. To mark this, we qualify the collection as a **live** `HTMLCollection` (or `HTMLFormElementsCollections`, or `HTMLOptionsCollection`), both in the interface description and in the subpage.

E.g.

- \\{{domxref("HTMLFormElement.elements")}}\\{{readonlyinline}}
  - : Returns a live \\{{domxref("HTMLFormControlsCollection")}} containing…

### Availability in workers

Individual property availability in workers is also found in the WebIDL. For a property, the default is the same availability as the `interface` (that is available to {{domxref('Window')}} context only if nothing special is marked) or as the `partial interface` it is defined in.

For documentation, the subpage must contain a sentence indicating if it is available or not in Web workers, right before the "Syntax" section.

### Preferences

> **备注：** This information is specific to Gecko and should only be used in the Browser compatibility section.

In Gecko, the availability of some properties may be controlled by a preference. This is marked in the WebIDL too.

```
[Pref="media.webvtt.enabled"]
readonly attribute TextTrackList? textTracks;
```

Here `media.webvtt.enabled` controls the `textTracks` property.

> **备注：** The default value of the preference is not available directly in the WebIDL (it can be different from one product using Gecko to another).

## Methods

You can recognize the definition of a method by the presence of parentheses after the name.

### Name of the method

```
DOMString canPlayType(DOMString type);
```

The name of the method is `canPlayType`, and we will refer to it as `HTMLMediaElement.canPlayType()` (with the parentheses that indicate that it is a method) in the docs, as it belongs to the `HTMLMediaElement` interface. Linking to the page is either done **with** the interface prefix using \\{{domxref('HTMLMediaElement.canPlayType()')}}, or **without** the prefix using \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}} when the context is obvious and unambiguous. The parentheses should always be included.

### Parameters

```
TextTrack addTextTrack(TextTrackKind kind,
                        optional DOMString label = "",
                        optional DOMString language = "");
```

The parameters of a method are listed in the Syntax section of the method sub-page. They are listed in the WebIDL in order, between the parenthesis, as a comma-separated list. Each parameter has a name (indicated above) and a type (e.g. a `'?'` means that the `null` value is valid.) If marked `optional`, the parameter is optional to include in a method call and must have the \\{{OptionalInline}} flag included when it is listed in the Syntax section. The parameter's default value is listed after the equality sign (`'='`).

### Type of the return value

```
DOMString canPlayType(DOMString type);
```

The return value type is indicated first inside the parentheses — in the above case the value is an object of type `DOMString`. if followed by a question mark (`'?'`), a value of `null` can be returned too, and the documentation must explain _when_ this may happen. If no question mark is present, like here, the return value can't be `null`.

The keyword `void` means that there is no return value. It is not a return value type. If the WebIDL entry reads `void`, the _Return value_ section in the docs should contain only a simple _None_.

### Throwing exceptions

```
[Throws]
void fastSeek(double time);
```

Some methods can throw exceptions. This is marked using the `[Throws]` annotation. When this happens, the Syntax section of the method page _must_ have an Exceptions subsection. The list of exceptions and the conditions to have them thrown are listed, as textual information, in the specification of that API.

Note that some exceptions are not explicitly marked but are defined by the JavaScript bindings. [Trying to set an illegal enumerated value](http://heycam.github.io/webidl/#es-enumeration) (mapped to a JavaScript {{jsxref('String')}}) as a parameter will raise a {{jsxref('TypeError')}} exception. This must be documented, but it is only implicitly marked in the WebIDL document.

Have a look at one of these [_Exceptions_ sections](/zh-CN/docs/Web/API/SubtleCrypto/importKey#Exceptions).

### Availability in workers

Individual method availability in workers is also found in the WebIDL. For a method, the default is the same availability as the `interface` (that is available to {{domxref('Window')}} context only if nothing special is marked) or as the `partial interface` it is defined it.

For the documentation, the sub-page must contain a sentence indicating if it is available in Web workers, right before the Syntax section.

### Preferences

> **备注：** this information is specific to Gecko and should only be used in the Browser compatibility section.

In Gecko, the availability of some properties may be controlled by a preference. This is marked in the WebIDL too.

```
[Pref="media.webvtt.enabled"]
TextTrack addTextTrack(TextTrackKind kind,
                      optional DOMString label = "",
                      optional DOMString language = "");
```

Here `media.webvtt.enabled` controls the `addTextTrack()` method.

> **备注：** The default value of the preference is not available directly in the WebIDL (it can be different from one product using Gecko to another.)

## Special methods

Some methods are not listed as regular methods in WebIDL but instead as special keywords, which translate to specific standard JavaScript methods.

### toString() and toJSON()

A stringifier is mapped to `toString()` and defined as:

```
stringifier;
```

The `toString()` method is listed just like any other method of the interface and has its own sub-page (E.g. {{domxref("Range.toString()")}})

A jsonifier is mapped to `toJSON()` and defined as:

```
jsonifier; // Gecko version
serializer; // Standard version
```

The `toJSON()` method is listed just like any other method of the interface and has its own sub-page (E.g. {{domxref("Performance.toJSON()")}})

> **备注：** the WebIDL specification uses `serializer` instead of `jsonifier`. This is not used in Gecko — only the non-standard likely early proposal `jsonifier` is found in mozilla-central.

### Iterator-like methods

An interface may be defined as _iterable_, meaning that it will have the following methods: `entries()`, `keys()`, `values()` and `forEach()`. They also supports the use of {{jsxref("Statements/for...of", "for...of")}} on an object implementing this interface.

There are two kinds of iteration possible: the _value iterator_ and the _pair iterator._

#### Value iterator

```
iterable<valueType>
```

The iterator will iterate over values of type _valueType_. The generated methods will be:

- `entries()`, which returns an {{jsxref('iterator')}} on the indexes (that are `unsigned long`).
- `values()`, which returns an {{jsxref('iterator')}} on the values.
- `keys()`, which returns an {{jsxref('iterator')}} on the keys, that are its indexes (that are `unsigned long`). In the case of value iterators, `keys()` and `entries()` are identical.
- `forEach()`, which returns an {{jsxref('iterator')}} on the keys that calls a given callback function one for each entry in the list.

Such an iterator allows to use the syntax `for (var p in object)` as a shorthand of `for (var p in object.entries())`. We add a sentence about it in the interface description.

> **备注：** the value pairs to iterate over can be defined in two different ways:
>
> 1. Outside the webidl file, in the prose accompanying it. Such a prose is in the spec and usually starts with: _"The [values to iterate over](https://heycam.github.io/webidl/#dfn-values-to-iterate-over)…"_.
> 2. In the webidl file, implicitly, if the interface supports indexed properties, that is when the interface has a `getter` methods with a parameter of type `unsigned long`.

#### Pair iterator

```
iterable<keyType, valueType>
```

The iterator will iterate over values of type _valueType_, with keys of type _keyType_. The generated methods will be:

- `entries()` that returns an {{jsxref('iterator')}} on the indexes (of type _keyType_). E.g. {{domxref('FormData.entries()')}}
- `values()` that returns an {{jsxref('iterator')}} on the values. E.g. {{domxref('FormData.values()')}}
- `keys()` that returns an {{jsxref('iterator')}} on the keys. E.g. {{domxref('FormData.keys()')}}
- Once [Firefox bug 1216751](https://bugzil.la/1216751) lands, `forEach()`.

Such an iterator allows to use the syntax `for (var p in object)` as a shorthand of `for (var p in object.entries())`. We add a sentence about it in the interface description. E.g. {{domxref('FormData')}}.

> **备注：** the value pairs to iterate over are _not_ defined in the webidl file, but in the prose accompanying it. Such a prose is in the spec and usually starts with: _"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over)…"_
> E.g, for {{domxref('FormData')}} you find in the spec: _"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over) are the [entries](https://xhr.spec.whatwg.org/#concept-formdata-entry) with the key being the [name](https://xhr.spec.whatwg.org/#concept-formdata-entry-name) and the value the [value](https://xhr.spec.whatwg.org/#concept-formdata-entry-value). "_

### Set-like methods

An interface may be defined as _set-like_, meaning that it represents an _ordered set of values_ will have the following methods: `entries()`, `keys()`, `values()`, `forEach()`, and `has()` (it also has the `size` property). They also supports the use of {{jsxref("Statements/for...of", "for...of")}} on an object implementing this interface. The set-like can be prefixed `readonly` or not. If not read-only, the methods to modify the set are also implemented: `add()`, `clear()`, and `delete()`.

```
setlike<valueType>
```

The generated properties will be:

- `entries()` that returns an {{jsxref('iterator')}} on the indexes. E.g. {{domxref('FontFaceSet.entries()')}}.
- `values()` that returns an {{jsxref('iterator')}} on the values. E.g. {{domxref('FontFaceSet.values()')}}.
- `keys()` that returns an {{jsxref('iterator')}} on the keys. E.g. {{domxref('FontFaceSet.keys()')}},
- `forEach()`.

In the case, the set-like declaration is not prefixed by read-only, the following methods are also generated:

- `add()` that adds an entry. E.g. {{domxref('FontFaceSet.add()')}}.
- `clear()` that empty the set-like. E.g. {{domxref('FontFaceSet.clear()')}}.
- `delete()` that remove an entry. E.g. {{domxref('FontFaceSet.delete()')}}.

Such an set interface also allows to use the syntax `for (var p in object)` as a shorthand of `for (var p in object.entries())`. We add a sentence about it in the interface description. E.g. {{domxref('FontFaceSet')}}.

## Constructors

Constructors are a little bit hidden in WebIDL: they are listed as annotations of the main interface.

### Unnamed constructors

This is the most common case for constructors. The constructor of a given interface A, can be used as `a = new A(parameters);`

```
[Constructor, Func="MessageChannel::Enabled",
Exposed=(Window,Worker)]
  interface MessageChannel {…};
```

A constructor with the same interface is defined using the `Constructor` annotation on the interface. There can be parenthesis and a list of parameters or not (like in the above example.) We document all the unnamed constructors on a sub-page — for example the above is given the slug _Web/API/MessageChannel/MessageChannel_ and the title `MessageChannel()`.

Another example of an unnamed constructor, with parameters:

```
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
  Exposed=(Window,Worker,System)]
    interface MessageEvent : Event {…};
```

There can also be several unnamed constructors, differing by their parameter lists. All syntax is documented in one single sub-page.

```
[Constructor(DOMString url, URL base),
  Constructor(DOMString url, optional DOMString base),
  Exposed=(Window,Worker)]
    interface URL {};
```

### Named constructors

```
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

A named constructor is a constructor that has a different name than that of its interface. For example`new Image(…)` creates a new `HTMLImageElement` object. They are defined in the WebIDL using the `NamedConstructor` annotation on the interface, followed by the name of the constructor after the equality sign (`'='`) and the parameter inside the parenthesis, in the same format as you'll see for methods.

There can be several named constructors for a specific interface, but this is extremely rare; in such a case we include one sub-page per name.

### Availability in workers

Constructors have the same availability as the interface, or partial interface, they are defined on. The sub-page provides this information in the same way as for a method.

### Preferences

Constructors are controlled by the same preference as the interface, or partial interface, they are defined on. The sub-page provides this information in the same way as for a method.
