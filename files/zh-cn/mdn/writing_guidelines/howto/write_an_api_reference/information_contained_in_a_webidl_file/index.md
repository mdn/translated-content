---
title: WebIDL 文件中包含的信息
slug: MDN/Writing_guidelines/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file
---

{{MDNSidebar}}

在编写有关 API 的文档时，信息来源很多：规范描述了应该实现的内容以及模型，实现描述了实际放在浏览器中的内容。WebIDL 文件是一种非常简洁的方式，可以提供很多（但不是全部）有关 API 的信息。本文档提供了有助于理解 WebIDL 语法的参考。

IDL 代表**_接口定义语言_**，它用于描述 API。在更广泛的计算领域，有几种 IDL。在浏览器领域，我们使用的 IDL 被称为 _WebIDL_。有两种 WebIDL 可用：WebIDL 规范中给出的一种，以及在浏览器中实现的一种。规范是规范引用，浏览器 WebIDL 描述了在特定浏览器中实际实现的内容，并包含其他内容，例如注释、有关非标准元素的信息，以及对 IDL 规范的特定于浏览器的扩展。

## 在哪里可以找到 WebIDL 文件

WebIDL 可以在多个位置找到：

- 每个规范在文本中都包含 WebIDL：它是一种传达精确定义的非常方便的方法。这些描述了 API 的语法。虽然是规范参考，但我们必须记住，它们可能与实际实施不同。在 MDN 上，我们希望实用并记录 Web 平台的真正含义，而不是理想应该是什么。因此，请仔细检查实现中的内容（如果发现错误，请不要犹豫，立即提交）。
- 三个浏览器引擎使用（修改）WebIDL 作为其工具链的一部分：Gecko、Chromium/Blink 和 WebCore/WebKit。Edge 之前不基于 Chromium 内核的版本在内部使用它，但遗憾的是它们不公开。

  - 对于 Gecko，所有 WebIDL 文件都分组在一个目录中：<https://dxr.mozilla.org/mozilla-central/source/dom/webidl/>。它们的扩展名是 `.webidl`。Gecko 源代码树中还有其他的 `*.idl` 文件，但它们不是 WebIDL，因此你可以忽略它们。旧版本的 Gecko 有一些 WebIDL 分散在某些地方，甚至可能使用 Mozilla 的 IDL 而不是 WebIDL 来描述一些 Web 接口，但这在任何最近的 Gecko 代码中都不会成为问题。
  - 对于 Chromium，它们分布在两个位置，都是 [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/) 源代码目录的两个子目录：[`core/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/) 和 [`modules/`](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/modules/)。Chromium 源代码中的一些 IDL 文件分散在其他位置，但这些属于测试系统，与 API 实现无关。
  - 对于 WebCore，它们分散在源代码中，因此你需要进一步发掘：例如 <https://github.com/WebKit/webkit/blob/master/Source/WebCore/html/DOMTokenList.idl>

## WebIDL 的特有扩展

WebIDL 在[其规范](https://heycam.github.io/webidl/)中定义。但它被设计为可以进行扩展以传达更多信息，浏览器供应商正是这样做的：

- 对于 Gecko，Mozilla 创建了其特有的 WebIDL [文档](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html)。
- 对于 Chromium，Google 也创建了一个[文档](https://www.chromium.org/blink/webidl/)来描述其扩展。
- 对于 WebCore，Apple 同样为其特有扩展提供了一个[页面](https://trac.webkit.org/wiki/WebKitIDL)。

> **备注：** 我们在这里只描述了编写文档时最有用的 WebIDL 子集。有许多其他的注释对于实现者来说很有用；请参阅上面链接的四个文档，以获得完整的概述。

## 接口

这一部分解释了描述 API 整体特性的 WebIDL 语法。

### 接口名称

接口名称是在关键字 `interface` 之后和下一个开括号（`'{'`）或冒号（`':'`）之前出现的字符串。

```webidl
interface URL {};
```

每一个 WebIDL 接口（无论是真正的接口还是混入）都有自己的文档页面，其中列出了为其定义的每个构造函数、属性和方法。

### 继承链

给定接口的父接口（如果有）定义在接口名称之后，即冒号（`':'`）之后。每个接口只能有一个父接口。

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

继承链会自动列在侧边栏中（使用 \\{{APIRef}} 宏）。它也可以通过 \\{{InheritanceDiagram}} 宏，以 SVG 图像的形式添加。

### 混入

一些属性和方法在多个接口中可用。为了防止重新定义，它们被定义在特殊的、被称为*混入*（mixin）的 WebIDL 接口中。

截至 2019 年 9 月，混入语法已更新。在新语法中，你使用 `interface mixin` 来定义混入接口，如下所示：

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

然后，你可以使用 `includes` 关键字来表示混入接口中定义的属性在接口上可用：

```webidl
MyInterface includes MyMixin;
```

混入没有继承，也不能包含其他混入。但是，它支持分部接口（partial），因此你会看到这样的内容：

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

由于 MDN 只记录文档，因此我们隐藏了混入。它们是抽象的，且仅用于规范的构造。你无法在浏览器的控制台中看到它们，而且知道方法和属性在哪些真实的接口上实现更有用。

如果你在 IDL 中遇到了混入，例如 [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils)，请搜索实现混入的接口，例如 [HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement)，并直接在这些接口上记录混入成员。

实际上，这意味着不需要记录 `HTMLHyperlinkElementUtils`，而是将文档添加到具体的接口，例如 [`HTMLAnchorElement`](/zh-CN/docs/Web/API/HTMLAnchorElement) 和 [`HTMLAreaElement`](/zh-CN/docs/Web/API/HTMLAreaElement)。

参见以下两个页面，它们对应地记录了 `HTMLHyperlinkElementUtils.hash`：

- [`HTMLAnchorElement.hash`](/zh-CN/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/zh-CN/docs/Web/API/HTMLAreaElement/hash)

对于兼容性数据，请参阅 [BCD 中混入的数据指南](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md)。

### 旧的混入语法

在旧式的 WebIDL 混入语法（你仍然可能会在某些地方遇到）中，混入使用 `[NoInterfaceObject]` 注释前缀：

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

在旧式语法中，在接口上实现的混入是使用 `implements` 关键字定义的。

```webidl
MyInterface implements MyMixin;
```

### 在 window 和 worker 中的可用性

（任何类型的）Web worker 或 Window 作用域中的可用性使用注释 `[Exposed=(Window,Worker)]` 定义。该注释适用于它所列出的部分接口。

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

对于上述样例，`Performance.now()` 在 `Window` 作用域和任何 worker 中都可用，而 `Performance.timing`、`Performance.navigation` 和 `Performance.toJSON()` 则无法在 Web worker 中使用。

`[Exposed]` 最常见的值是：

- `Window`
  - : 分部接口在 {{domxref('Window')}} 全局作用域中可用。
- `Worker`
  - : 分部接口在任何类型的 worker 中均可用，即全局作用域是 {{domxref('WorkerGlobalScope')}} 的子接口——{{domxref('DedicatedWorkerGlobalScope')}}、{{domxref('SharedWorkerGlobalScope')}} 或 {{domxref('ServiceWorkerGlobalScope')}}（它也可用于 `ChromeWorker`，但我们不会记录它们，因为它们在 Web 上不可见，且是 Firefox 的内部接口。）
- `DedicatedWorker`
  - : 分部接口仅在 {{domxref('DedicatedWorkerGlobalScope')}} 中可用。
- `SharedWorker`
  - : 分部接口仅在 {{domxref('SharedWorkerGlobalScope')}} 中可用。
- `ServiceWorker`
  - : 分部接口仅在 {{domxref('ServiceWorkerGlobalScope')}} 中可用。

其他可能的值，如 `System`，具有一个[特殊的含义](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes)，且不需要记录。

注意，这些可能的值本身是在 WebIDL 文件中定义的。接口可能有一个 `[Global=xyz]` 注释。它意味着当使用此类型的对象作为全局作用域时，任何具有 `xyz` 作为 `[Exposed]` 值的接口、属性或方法都可用。

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

在这里，其定义了当全局作用域是 `DedicatedWorkerGlobalScope` 类型时（即如果我们在专用 worker 中），则任何使用 `[Exposed]` 注释公开给 `Worker` 或 `DedicatedWorker` 的接口、属性或方法都可用。

### 首选项

> **备注：** 此信息特定于 Gecko，应仅在浏览器兼容性部分中使用。

在 Gecko 中，部分接口的可用性（包括其构造函数、属性和方法）可能受到首选项（通常称为“pref”）的控制。这也被标记在 WebIDL 中。

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

这里，`media.webspeech.synth.enabled` 控制 `SpeechSynthesis` 接口及其属性（完整列表有超过 3 个）。

> **备注：** 首选项的默认值不能直接在 WebIDL 中使用（它可能因使用 Gecko 的产品而不同）。

### 仅在系统代码中可用

一些接口特性可能仅在浏览器内部系统代码或 chrome 代码中可用。为了表示这一点，在 Gecko 中我们使用 \[ChromeOnly]，例如下面示例中的属性 propName 仅可通过 chrome 代码调用：

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## 属性

你可以通过 `attribute` 关键字的存在来识别属性的定义。

### 属性名称

```webidl
readonly attribute MediaError? error;
```

在以上示例中，属性的名称是 `error`；在文档中，我们将其称为 `HTMLMediaElement.error`，因为它属于 `HTMLMediaElement` 接口。要链接到该页面，可以使用**带有**接口前缀的 \\{{domxref('HTMLMediaElement.error')}} ，也可以在上下文明确且不清晰时使用**不带**接口前缀的 \\{{domxref('HTMLMediaElement.error', 'error')}}。

### 属性类型

```webidl
readonly attribute MediaError? error;
```

该属性值是 `MediaError` 类型的对象。问号（`'?'`）表示它可以取 `null` 值，文档必须解释*何时*可能发生这种情况。如果没有问号，则 `error` 属性不能为 `null`。

### 属性的写入权限

```webidl
readonly attribute MediaError? error;
```

如果关键字 `readonly` 存在，则该属性不能被修改。它必须标记为只读：

- 在接口页面中，在第一句话中使用 \\{{ReadOnlyInline}} 宏。
- 在其自己的页面中，在第一句话中使用中使用描述：_**`HTMLMediaElement.error`** 只读属性……_
- 在其自己的页面中，添加 `Read-only` 标签。
- 在接口页面中对其进行描述时，使用“*返回……”*开始。

> **备注：** 只有只读属性可以被描述为“返回”一个值。非只读属性也可以用于设置值。

### 抛出异常

```webidl
[SetterThrows]
            attribute DOMString src;
```

在某些情况下，例如当某些值是非法的时，设置新值可能会导致引发异常。这需要使用 `[SetterThrows]` 注释标记。当这种情况发生时，属性页面的语法部分*必须*有一个异常子部分。异常列表和引发它们的条件在该 API 的规范中列出，作为文本信息。

注意，一些异常没有被明确标记，而由 JavaScript 绑定定义。尝试将参数[设置为非法的枚举值](https://webidl.spec.whatwg.org/#es-enumeration)（映射到 JavaScript {{jsxref('String')}}）会引发 {{jsxref('TypeError')}} 异常。这必须记录下来，但是这在 WebIDL 文档中只会被隐式标记。

getter 抛出异常的情况并不常见，但在少数情况下会发生。在这种情况下，使用 `[GetterThrows]` 注释。在这里，属性页面的语法部分*必须*有一个异常子部分。

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### 不抛出异常

当不遵循 Webidl 的语义时，即使没有设置 `[SetterThrows]` 或 `[GetterThrows]`，通常也会抛出异常。例如，在严格模式下，如果我们尝试将只读属性设置为新值，即调用其隐式 setter，则该只读属性将在严格模式下抛出。

主要是出于兼容性的目的，这种行为有时很烦人。为了防止这种情况而创建一个无操作 setter（即静默忽略任何尝试将属性设置为新值），可以使用 `[LenientSetter]` 注释。

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

在这些情况下，需要在属性的描述中添加额外的句子。例如：

_尽管此属性是只读的，但如果修改它（即使在严格模式下），它也不会抛出异常；setter 是无操作的，将被忽略。_

### 创建对象或引用

属性的返回值可以是内部对象的副本、新创建的合成对象，或者是对内部对象的引用。

基本对象的类型，例如 {{jsxref("String")}}（即 IDL `DOMString` 或其他类型）、{{jsxref("Number")}}（即 IDL `byte`、`octet`、`unsigned int` 或其他类型）和 {{jsxref("Boolean")}} 总是被复制，不需要对它们做任何特殊说明（这是 JavaScript 开发人员所期望的自然行为）。

对于接口对象，默认情况下返回对内部对象的*引用*。这必须在接口页面中的简短描述和特定子页面中的描述中提到。

> **备注：** 与返回对象的属性一起使用的关键字 `readonly` 适用于引用（无法更改内部对象）。返回对象的属性可以更改，即使它们在相关接口中被标记为只读。

某些情况下，API 必须返回一个*新*对象，或者是内部对象的*副本*。这种情况在 WebIDL 中使用 `[NewObject]` 注释来表示。

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

对于上面的示例，对 `buffered` 的每次调用都会返回一个不同的对象：更改它不会更改内部值，内部值的更改也不会影响每个对象实例。在文档中，我们将在对象前使用形容词“新的”来标记它：

_**`HTMLMediaElement.buffered`** 只读属性返回一个新的 \\{{domxref("TimeRanges")}} 对象，该对象……_

以及

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _返回一个新的 \\{{domxref("TimeRanges")}} 对象，其……_

对于集合对象的引用（如 `HTMLCollection`、`HTMLFormElementsCollection` 或 `HTMLOptionsCollection`，始终不带 `[NewObject]`），我们明确表示对基础对象的更改将通过返回的引用可用。为了标记这一点，我们将集合标记为**动态的** `HTMLCollection`（或 `HTMLFormElementsCollections`、`HTMLOptionsCollection`），在接口描述和子页面中都是如此。

例如

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : 返回一个动态的 \\{{domxref("HTMLFormControlsCollection")}}，其中包含…

### 在 worker 中的可用性

属性在 worker 中的可用性也可以在 WebIDL 中找到。对于属性，默认情况下与 `interface` 相同（即，如果没有特殊标记，则仅在 {{domxref('Window')}} 上下文中可用）或者与定义该属性的 `partial interface` 相同。

对于文档，子页面必须在“语法”部分之前包含一句话，指出它是否在 Web worker 中可用。

### 首选项

> **备注：** 此信息特定于 Gecko，应仅在浏览器兼容性部分中使用。

在 Gecko 中，某些属性的可用性可能受到首选项的控制。这也被标记在 WebIDL 中。

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

这里，`media.webvtt.enabled` 控制 `textTracks` 属性。

> **备注：** 首选项的默认值不会直接记录在 WebIDL 中（它可能因使用 Gecko 的产品而不同）。

## 方法

你可以通过名称后的括号来识别方法的定义。

### 方法名

```webidl
DOMString canPlayType(DOMString type);
```

方法的名称是 `canPlayType`，而因为它属于 `HTMLMediaElement` 接口，我们可以在文档中将其称为 `HTMLMediaElement.canPlayType()`（带有括号，表示它是一个方法）。要链接到该页面，可以使用**带有**接口前缀的 \\{{domxref('HTMLMediaElement.canPlayType()')}}，也可以在上下文明确且清晰时使用**不带**接口前缀的 \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}}。括号应始终包含在内。

### 参数

```js
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

方法的参数在方法子页面的语法部分中列出。在 WebIDL 中，它们在括号之间以逗号分隔的列表形式按顺序列出。每个参数都有一个名称（如上所示）和一个类型（例如 `'?'` 表示 `null` 值是有效的）。如果标记为 `optional`，则该参数在方法调用中是可选的，并且当它在语法部分中列出时必须包含 \\{{OptionalInline}} 标志。参数的默认值在等号（`'='`）之后列出。

### 返回值类型

```webidl
DOMString canPlayType(DOMString type);
```

返回值类型在方法名称之前指定——在上面的示例中，其为 `DOMString` 类型的对象。如果后面跟着一个问号（`'?'`），则还可以返回 `null` 值，并且文档必须解释*何时*可能发生这种情况。如果没有问号（如此处所示），则返回值不能为 `null`。

关键字 `void` 表示没有返回值。它不是返回值类型。如果 WebIDL 条目读取 `void`，则文档中的*返回值*部分应该只包含一句“无（\{{jsxref("undefined")}}）。”。

### 抛出异常

```webidl
[Throws]
   void fastSeek(double time);
```

一些方法可能会抛出异常。这使用 `[Throws]` 注释标记。当这种情况发生时，方法页面的语法部分*必须*有一个异常子部分。异常列表和引发它们的条件在该 API 的规范中以文本信息列出。

注意，一些异常没有被明确标记，而由 JavaScript 绑定定义。尝试将参数[设置为非法的枚举值](https://webidl.spec.whatwg.org/#es-enumeration)（映射到 JavaScript {{jsxref('String')}}）会引发 {{jsxref('TypeError')}} 异常。这必须记录下来，但是这在 WebIDL 文档中只会被隐式标记。

请参考其中一个[*异常*部分](/zh-CN/docs/Web/API/SubtleCrypto/importKey#异常)。

### 在 worker 中的可用性

方法在 worker 中的可用性也可以在 WebIDL 中找到。对于方法，默认情况下与 `interface` 相同（即，如果没有特殊标记，则仅在 {{domxref('Window')}} 上下文中可用）或者与定义该方法的 `partial interface` 相同。

对于文档，子页面必须在“语法”部分之前包含一句话，指出它是否在 Web worker 中可用。

### 首选项

> **备注：** 此信息特定于 Gecko，应仅在浏览器兼容性部分中使用。

在 Gecko 中，某些方法的可用性可能受到首选项的控制。这也被标记在 WebIDL 中。

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

这里，`media.webvtt.enabled` 控制 `addTextTrack()` 方法。

> **备注：** 首选项的默认值不会直接记录在 WebIDL 中（它可能因使用 Gecko 的产品而不同）。

## 特殊方法

一些方法在 WebIDL 中并未被列为常规方法，而是作为特殊关键字，这些关键字会被转换为特定的标准 JavaScript 方法。

### toString() 和 toJSON()

字符串化器（stringifier）指定了基于接口的对象在期望字符串的上下文中因如何解析。（参见[字符串化器](#字符串化器)部分。）此外，该关键字被映射到 `toString()` 并被定义为：

```webidl
stringifier;
```

`toString()` 方法就像其他方法一样被列在接口中，并且有自己的子页面（例如 {{domxref("Range.toString()")}}）。

JSON 化器（jsonifier）被映射到 `toJSON()` 并被定义为：

```webidl
jsonifier; // Gecko 版本
serializer; // 标准版本
```

`toJSON()` 方法就像其他方法一样被列在接口中，并且有自己的子页面（例如 {{domxref("Performance.toJSON()")}}）。

> **备注：** WebIDL 规范使用 `serializer` 而不是 `jsonifier`。这没有在 Gecko 中使用——mozilla-central 中只能找到非标准的早期提案 `jsonifier`。

### 类迭代器方法

An interface may be defined as _iterable_, meaning that it will have the following methods: `entries()`, `keys()`, `values()` and `forEach()`. They also supports the use of {{jsxref("Statements/for...of", "for...of")}} on an object implementing this interface.

There are two kinds of iteration possible: the _value iterator_ and the _pair iterator._

#### 值迭代器

```webidl
iterable<valueType>
```

The iterator will iterate over values of type _valueType_. The generated methods will be:

- `entries()`, which returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the indexes (that are `unsigned long`).
- `values()`, which returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the values.
- `keys()`, which returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys, that are its indexes (that are `unsigned long`). In the case of value iterators, `keys()` and `entries()` are identical.
- `forEach()`, which returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys that calls a given callback function one for each entry in the list.

Such an iterator allows to use the syntax `for (const p in object)` as a shorthand of `for (const p in object.entries())`. We add a sentence about it in the interface description.

> **Note:** the value pairs to iterate over can be defined in two different ways:
>
> 1. Outside the webidl file, in the prose accompanying it. Such a prose is in the spec and usually starts with: _"The [values to iterate over](https://heycam.github.io/webidl/#dfn-values-to-iterate-over)…"_.
> 2. In the webidl file, implicitly, if the interface supports indexed properties, that is when the interface has a `getter` methods with a parameter of type `unsigned long`.

#### Pair iterator

<!-- #### 对偶迭代器  -->

```webidl
iterable<keyType, valueType>
```

The iterator will iterate over values of type _valueType_, with keys of type _keyType_. The generated methods will be:

- `entries()` that returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the indexes (of type _keyType_). E.g. {{domxref('FormData.entries()')}}
- `values()` that returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the values. E.g. {{domxref('FormData.values()')}}
- `keys()` that returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys. E.g. {{domxref('FormData.keys()')}}
- Once [Firefox bug 1216751](https://bugzil.la/1216751) lands, `forEach()`.

Such an iterator allows to use the syntax `for (const p in object)` as a shorthand of `for (const p in object.entries())`. We add a sentence about it in the interface description. E.g. {{domxref('FormData')}}.

> **Note:** the value pairs to iterate over are _not_ defined in the webidl file, but in the prose accompanying it. Such a prose is in the spec and usually starts with: _"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over)…"_
>
> E.g, for {{domxref('FormData')}} you find in the spec: _"The [value pairs to iterate over](https://heycam.github.io/webidl/#dfn-value-pairs-to-iterate-over) are the [entries](https://xhr.spec.whatwg.org/#concept-formdata-entry) with the key being the [name](https://xhr.spec.whatwg.org/#concept-formdata-entry-name) and the value the [value](https://xhr.spec.whatwg.org/#concept-formdata-entry-value). "_

### 类集合方法

An interface may be defined as _set-like_, meaning that it represents an _ordered set of values_ will have the following methods: `entries()`, `keys()`, `values()`, `forEach(),` and `has()` (it also has the `size` property). They also supports the use of {{jsxref("Statements/for...of", "for...of")}} on an object implementing this interface. The set-like can be prefixed `readonly` or not. If not read-only, the methods to modify the set are also implemented: `add()`, `clear()`, and `delete()`.

```webidl
setlike<valueType>
```

The generated properties will be:

- `entries()` that returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the indexes. E.g. {{domxref('NodeList.entries()')}}.
- `values()` that returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the values. E.g. {{domxref('NodeList.values()')}}.
- `keys()` that returns an [`iterator`](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols) on the keys. E.g. {{domxref('NodeList.keys()')}},
- `forEach()`.

In cases where the set-like declaration is not prefixed by read-only, the following methods are also generated:

- `add()` that adds an entry. E.g. the `.add()` method of {{domxref('FontFaceSet')}}.
- `clear()` that empties the set-like structure. E.g. the `.clear()` method of {{domxref('FontFaceSet')}}.
- `delete()` that removes an entry. E.g. the `.delete()` method of {{domxref('FontFaceSet')}}.

Such an set interface also allows to use the syntax `for (const p in object)` as a shorthand of `for (const p in object.entries())`.

## 特殊行为

Some IDL members indicate special behaviors that should be noted on appropriate pages.

### 字符串化器

In addition to adding the `toString()` method to an interface as described in [toString() and toJSON()](#tostring_and_tojson), stringifiers also indicate that an object instance, when used as a string, returns a string other than the default. (The default is usually a JSON representation of the object). Exactly how depends on the way it is specified in the IDL. Regardless of the how, the non-default behavior should be described on the interface page.

When the `stringifier` keyword accompanies an attribute name, referencing the object name has the same result as referencing the attribute name. Consider the following IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

For a class based on this interface, the following lines of code below are equivalent. The behavior should be noted on the property page in addition to the interface page.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

When the `stringifier` keyword is used by itself, an object of the interface may be used as above, but the behavior is defined in source code.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

To learn what an interface reference actually does, refer to the interface's spec or experiment with the interface to determine its output.

## 构造函数

Constructors are a little bit hidden in WebIDL: they are listed as annotations of the main interface.

### 匿名构造函数

This is the most common case for constructors. The constructor of a given interface A, can be used as `a = new A(parameters);`

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

A constructor with the same interface is defined using the `Constructor` annotation on the interface. There can be parenthesis and a list of parameters or not (like in the above example.) We document all the unnamed constructors on a sub-page — for example the above is given the slug _Web/API/MessageChannel/MessageChannel_ and the title `MessageChannel()`.

Another example of an unnamed constructor, with parameters:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

There can also be several unnamed constructors, differing by their parameter lists. All syntax is documented in one single sub-page.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### 具名构造函数

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

A named constructor is a constructor that has a different name than that of its interface. For example `new Image(…)` creates a new `HTMLImageElement` object. They are defined in the WebIDL using the `NamedConstructor` annotation on the interface, followed by the name of the constructor after the equality sign (`'='`) and the parameter inside the parenthesis, in the same format as you'll see for methods.

There can be several named constructors for a specific interface, but this is extremely rare; in such a case we include one sub-page per name.

### 新的构造函数语法

As of September 2019, WebIDL constructor syntax was updated. Constructor syntax no longer involves an extended attribute on the interface:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

New specs instead use a method-like syntax named `constructor` with no explicitly-defined return type, written like so:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

This means extended attributes can now be specified on the constructor, and it is no longer assumed that all constructors throw. If a constructor does throw, `[Throws]` will be used to indicate that:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

It is unlikely that _all_ specs will be updated to use the new syntax, so you'll probably encounter both out in the wild. We will therefore continue to cover both types of syntax here.

### 在 worker 中的可用性

Constructors have the same availability as the interface, or partial interface, they are defined on. The sub-page provides this information in the same way as for a method.

### 首选项

Constructors are controlled by the same preference as the interface, or partial interface, they are defined on. The sub-page provides this information in the same way as for a method.
