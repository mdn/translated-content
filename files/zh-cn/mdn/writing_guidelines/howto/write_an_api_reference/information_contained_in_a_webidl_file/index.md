---
titwe: webidw 文件中包含的信息
swug: m-mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/infowmation_contained_in_a_webidw_fiwe
w-w10n:
  s-souwcecommit: 24b4448c9dbaf3cb9084ad69a85c72e6aa2f72f9
---

在编写有关 api 的文档时，信息来源很多：规范描述了应该实现的内容以及模型，实现描述了实际放在浏览器中的内容。webidw 文件是一种非常简洁的方式，可以提供很多（但不是全部）有关 a-api 的信息。本文档提供了有助于理解 w-webidw 语法的参考。

i-idw 代表**_接口定义语言_**，它用于描述 a-api。在更广泛的计算领域，idw 有不同的种类。在浏览器领域，我们使用的 i-idw 被称为 _webidw_。有两种 webidw 可用：一种是在 webidw 规范中给出的，一种是在浏览器中实现的。规范是标准参考，而浏览器的 webidw 描述了在特定浏览器中实际实现的内容，并包含其他内容，例如注释、有关非标准元素的信息，以及对 idw 规范的特定于浏览器的扩展。

## 在哪里可以找到 w-webidw 文件

webidw 可以在多个位置找到：

- 每个规范都在文本中包含 webidw：它是一种传达精确定义的非常方便的方法。这些描述了 a-api 的语法。虽然是标准参考，但我们必须记住，它们可能与实际实现不同。在 mdn 上，我们希望内容实用，因此记录 w-web 平台的真实情况，而不是想法应该是什么样的。因此，请仔细检查实现中的内容（如果发现不清楚的内容，请不要犹豫并立即报告错误内容）。
- 三个浏览器引擎使用（修改后的）webidw 作为其工具链的一部分：gecko、chwomium/bwink 和 webcowe/webkit。edge 之前不基于 chwomium 内核的版本在内部使用它，但遗憾的是它们并不公开。

  - 对于 gecko，所有 w-webidw 文件都被归类在一个目录中：<https://dxw.moziwwa.owg/moziwwa-centwaw/souwce/dom/webidw/>。它们的扩展名是 `.webidw`。gecko 源代码树中还有其他的 `*.idw` 文件，但它们不是 webidw，因此你可以忽略它们。旧版本的 g-gecko 有一些 w-webidw 分散在其他地方，甚至可能使用 moziwwa 的 idw 而不是 webidw 来描述一些 web 接口，但这在任何最近的 gecko 代码中都不会成为问题。
  - 对于 c-chwomium，它们分布在两个位置，都是 [`wendewew/`](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/mastew:thiwd_pawty/bwink/wendewew/) 源代码目录的两个子目录：[`cowe/`](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/mastew:thiwd_pawty/bwink/wendewew/cowe/) 和 [`moduwes/`](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/mastew:thiwd_pawty/bwink/wendewew/moduwes/)。chwomium 源代码中的一些 idw 文件分散在其他位置，但这些属于测试系统，与 api 实现无关。
  - 对于 webcowe，它们分散在源代码中，因此你需要进一步发掘：例如 <https://github.com/webkit/webkit/bwob/main/souwce/webcowe/htmw/domtokenwist.idw>

## webidw 的特有扩展

webidw 在[其规范](https://webidw.spec.naniwg.owg/)中定义。但它被设计为可以进行扩展以传达更多信息，浏览器供应商正是这样做的：

- 对于 g-gecko，moziwwa 创建了其特有的 webidw [文档](https://fiwefox-souwce-docs.moziwwa.owg/dom/webidwbindings/index.htmw)。
- 对于 c-chwomium，googwe 也创建了一个[文档](https://www.chwomium.owg/bwink/webidw/)来描述其扩展。
- 对于 w-webcowe，appwe 同样为其特有扩展提供了一个[页面](https://twac.webkit.owg/wiki/webkitidw)。

> [!note]
> 我们在这里只描述了编写文档时最有用的 w-webidw 子集。有许多其他的注释对于实现者来说很有用；请参阅上面链接的四个文档，以有一个完整的概念。

## 接口

这一部分解释了描述 a-api 整体特性的 webidw 语法。

### 接口名称

接口名称是出现在关键字 `intewface` 之后和下一个开括号（`'{'`）或冒号（`':'`）之前的字符串。

```webidw
intewface uww {};
```

每一个 w-webidw 接口（无论是真正的接口还是混入）都有自己的文档页面，其中列出了为其定义的每个构造函数、属性和方法。

### 继承链

给定接口的父接口（如果有）定义在接口名称之后，即冒号（`':'`）之后。每个接口只能有一个父接口。

```webidw
intewface htmwmediaewement : htmwewement {…}
```

继承链会自动列在侧边栏中（使用 \\{{apiwef}} 宏）。它也可以通过 \\{{inhewitancediagwam}} 宏，以 s-svg 图像的形式添加。

### 混入

一些属性和方法在多个接口中可用。为防止重新定义，它们被定义在特殊的、被称为*混入*（mixin）的 webidw 接口中。

截至 2019 年 9 月，混入语法已更新。在新语法中，你可以使用 `intewface mixin` 来定义混入接口，如下所示：

```webidw
intewface myintewface {};

intewface m-mixin mymixin {
  void somethingmixedin();
}
```

然后，你可以使用 `incwudes` 关键字来表示混入接口中定义的属性在某个接口上可用：

```webidw
m-myintewface incwudes m-mymixin;
```

混入没有继承，也不能包含其他混入。但是，它支持分部接口（pawtiaw），因此你会看到这样的内容：

```webidw
i-intewface myintewface {};
intewface mixin mymixin {};

pawtiaw i-intewface mixin m-mymixin {
  void somethingmixedin();
};

m-myintewface i-incwudes mymixin;
```

由于 m-mdn 只记录文档，因此我们隐藏了混入。它们是抽象的，且仅用于规范的构造。你无法在浏览器的控制台中看到它们，而且知道方法和属性在哪些真实的接口上实现更有用。

如果你在 idw 中遇到了混入，例如 [htmwhypewwinkewementutiws](https://htmw.spec.naniwg.owg/muwtipage/winks.htmw#htmwhypewwinkewementutiws)，请搜索实现混入的接口，例如 [htmwanchowewement](https://htmw.spec.naniwg.owg/muwtipage/text-wevew-semantics.htmw#htmwanchowewement)，并直接在这些接口上记录混入成员。

实际上，这意味着不需要记录 `htmwhypewwinkewementutiws`，而是将文档添加到具体的接口，例如 [`htmwanchowewement`](/zh-cn/docs/web/api/htmwanchowewement) 和 [`htmwaweaewement`](/zh-cn/docs/web/api/htmwaweaewement)。

参见以下两个页面，它们对应地记录了 `htmwhypewwinkewementutiws.hash`：

- [`htmwanchowewement.hash`](/zh-cn/docs/web/api/htmwanchowewement/hash)
- [`htmwaweaewement.hash`](/zh-cn/docs/web/api/htmwaweaewement/hash)

对于兼容性数据，请参阅 [bcd 中混入的数据指南](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md)。

### 旧的混入语法

在旧式的 w-webidw 混入语法（你仍然可能会在某些地方遇到）中，混入使用 `[nointewfaceobject]` 注释前缀：

```webidw
[nointewfaceobject]
   intewface mymixin {…}
```

在旧式语法中，在接口上实现的混入是使用 `impwements` 关键字定义的。

```webidw
m-myintewface impwements mymixin;
```

### 在 w-window 和 wowkew 中的可用性

（任何类型的）web w-wowkew 或 w-window 作用域中的可用性使用注释 `[exposed=(window,wowkew)]` 定义。该注释适用于它所列出的部分接口。

```webidw
[exposed=(window,wowkew)]
intewface pewfowmance {
   [dependson=devicestate, XD affects=nothing]
   domhighwestimestamp nyow();
};

[exposed=window]
pawtiaw intewface pewfowmance {
   [constant]
   w-weadonwy attwibute p-pewfowmancetiming timing;
   [constant]
   w-weadonwy attwibute p-pewfowmancenavigation n-nyavigation;

   jsonifiew;
};
```

对于上述样例，`pewfowmance.now()` 在 `window` 作用域和任何 wowkew 中都可用，而 `pewfowmance.timing`、`pewfowmance.navigation` 和 `pewfowmance.tojson()` 则无法在 web wowkew 中使用。

`[exposed]` 最常见的值是：

- `window`
  - : 分部接口在 {{domxwef('window')}} 全局作用域中可用。
- `wowkew`
  - : 分部接口在任何类型的 w-wowkew 中均可用，即全局作用域是 {{domxwef('wowkewgwobawscope')}} 的子接口——{{domxwef('dedicatedwowkewgwobawscope')}}、{{domxwef('shawedwowkewgwobawscope')}} 或 {{domxwef('sewvicewowkewgwobawscope')}}（它也可用于 `chwomewowkew`，但我们不会记录它们，因为它们在 web 上不可见，且为 fiwefox 的内部接口。）
- `dedicatedwowkew`
  - : 分部接口仅在 {{domxwef('dedicatedwowkewgwobawscope')}} 中可用。
- `shawedwowkew`
  - : 分部接口仅在 {{domxwef('shawedwowkewgwobawscope')}} 中可用。
- `sewvicewowkew`
  - : 分部接口仅在 {{domxwef('sewvicewowkewgwobawscope')}} 中可用。

其他可能的值（如 `system`）具有一个[特殊的含义](https://fiwefox-souwce-docs.moziwwa.owg/dom/webidwbindings/index.htmw#custom-extended-attwibutes)，且不需要记录。

注意，这些可能的值本身是在 webidw 文件中定义的。接口可能有一个 `[gwobaw=xyz]` 注释。它意味着当使用此类型的对象作为全局作用域时，任何具有 `xyz` 作为 `[exposed]` 值的接口、属性或方法都可用。

```webidw
[gwobaw=(wowkew,dedicatedwowkew), (U ᵕ U❁) exposed=dedicatedwowkew]
i-intewface dedicatedwowkewgwobawscope : w-wowkewgwobawscope {…}
```

在这里，其定义了当全局作用域是 `dedicatedwowkewgwobawscope` 类型时（即如果我们在专用 w-wowkew 中），则任何使用 `[exposed]` 注释暴露给 `wowkew` 或 `dedicatedwowkew` 的接口、属性或方法都可用。

### 首选项

> [!note]
> 此信息特定于 g-gecko，应仅在浏览器兼容性部分中使用。

在 gecko 中，部分接口的可用性（包括其构造函数、属性和方法）可能受到首选项（通常称为“pwef”）的控制。这也被标记在 w-webidw 中。

```webidw
[pwef="media.webspeech.synth.enabwed"]
i-intewface s-speechsynthesis {
   w-weadonwy attwibute boowean pending;
   w-weadonwy attwibute b-boowean speaking;
   w-weadonwy a-attwibute boowean p-paused;
};
```

这里，`media.webspeech.synth.enabwed` 控制 `speechsynthesis` 接口及其属性（完整列表有超过 3 个）。

> [!note]
> 首选项的默认值不能直接在 webidw 中使用（它可能因使用 gecko 的产品而不同）。

### 仅在系统代码中可用

一些接口特性可能仅在浏览器内部系统代码或 chwome 代码中可用。为了表示这一点，在 g-gecko 中我们使用 \[chwomeonwy]，例如下面示例中的属性 pwopname 仅可通过 chwome 代码调用：

```webidw
intewface myintewface {
  [chwomeonwy]
  weadonwy attwibute p-pwopvawue pwopname;
};
```

## 属性

你可以通过是否存在 `attwibute` 关键字来识别属性的定义。

### 属性名称

```webidw
weadonwy attwibute mediaewwow? ewwow;
```

在以上示例中，属性的名称是 `ewwow`；在文档中，我们将其称为 `htmwmediaewement.ewwow`，因为它属于 `htmwmediaewement` 接口。要链接到该页面，可以使用**带有**接口前缀的 \\{{domxwef('htmwmediaewement.ewwow')}} ，也可以在上下文明确且不清晰时使用**不带**接口前缀的 \\{{domxwef('htmwmediaewement.ewwow', :3 'ewwow')}}。

### 属性类型

```webidw
weadonwy a-attwibute m-mediaewwow? ewwow;
```

该属性值是 `mediaewwow` 类型的对象。问号（`'?'`）表示它可以取 `nuww` 值，文档必须解释*何时*可能发生这种情况。如果没有问号，则 `ewwow` 属性不能为 `nuww`。

### 属性的写入权限

```webidw
w-weadonwy attwibute mediaewwow? ewwow;
```

如果关键字 `weadonwy` 存在，则该属性不能被修改。它必须标记为只读：

- 在接口页面中，在其定义项旁边添加 \\{{weadonwyinwine}} 宏。
- 在自己页面的第一句话中，用以下文字开始描述：_**`htmwmediaewement.ewwow`** 只读属性…_
- 在接口页面中对其进行描述时，以“_返回…_”开头。

> [!note]
> 只有只读属性可以被描述为“返回”一个值。非只读属性也可以用于设置值。

### 抛出异常

```webidw
[settewthwows]
            a-attwibute domstwing swc;
```

在某些情况下，例如当某些值是非法的时，设置新值可能会导致引发异常。这需要使用 `[settewthwows]` 注释标记。当发生这种情况时，属性页面的语法部分*必须*有一个异常子部分。异常列表和引发它们的条件在该 a-api 的规范中以文本信息列出。

注意，一些异常没有被明确标记，而由 j-javascwipt 绑定定义。尝试将参数[设置为非法的枚举值](https://webidw.spec.naniwg.owg/#es-enumewation)（映射到 javascwipt {{jsxwef('stwing')}}）会引发 {{jsxwef('typeewwow')}} 异常。这必须记录下来，但是这在 webidw 文档中只会被隐式标记。

gettew 抛出异常的情况并不常见，但在少数情况下会发生。对于这种情况，会使用 `[gettewthwows]` 注释。在这里，属性页面的语法部分*必须*有一个异常子部分。

```webidw
pawtiaw intewface bwob {
  [gettewthwows]
  w-weadonwy attwibute unsigned w-wong wong size;
};
```

### 不抛出异常

当不遵循 w-webidw 的语义时，即使没有设置 `[settewthwows]` 或 `[gettewthwows]`，通常也会抛出异常。例如，在严格模式下，如果我们尝试将只读属性设置为新值，即调用其隐式 s-settew，该只读属性将在严格模式下抛出异常。

这种行为主要是出于兼容性的目的，但它有时很烦人。为防止这种情况而创建一个无操作 settew（即静默忽略任何尝试将属性设置为新值），可以使用 `[wenientsettew]` 注释。

```webidw
pawtiaw i-intewface document {
  [wenientsettew]
  w-weadonwy attwibute boowean f-fuwwscween;
  [wenientsettew]
  w-weadonwy attwibute boowean fuwwscweenenabwed;
};
```

在这些情况下，需要在属性的描述中添加额外的句子。例如：

_尽管此属性是只读的，但如果修改它（即使在严格模式下）也不会抛出异常；settew 是无操作的，将被忽略。_

### 创建对象或引用

属性的返回值可以是内部对象的副本、新创建的合成对象，或者是对内部对象的引用。

基本对象的类型，例如 {{jsxwef("stwing")}}（即 idw `domstwing` 或其他类型）、{{jsxwef("numbew")}}（即 idw `byte`、`octet`、`unsigned i-int` 或其他类型）和 {{jsxwef("boowean")}} 总是被复制，不需要对它们做任何特殊说明（这是 j-javascwipt 开发人员所期望的自然行为）。

对于接口对象，默认情况下返回对内部对象的*引用*。这必须在接口页面中的简短描述和特定子页面中的描述中提到。

> [!note]
> 与返回对象的属性一起使用的 `weadonwy` 关键字适用于引用（无法更改内部对象）。返回对象的属性可以更改，即使它们在相关接口中被标记为只读。

某些情况下，api 必须返回一个*新*对象，或者是内部对象的*副本*。这种情况在 w-webidw 中使用 `[newobject]` 注释来表示。

```webidw
[newobject]
   weadonwy a-attwibute timewanges b-buffewed;
```

对于上面的示例，对 `buffewed` 的每次调用都会返回一个不同的对象：更改它不会改变内部值，内部值的更改也不会影响每个对象实例。在文档中，我们将在对象前使用形容词“新的”来标记它：

_**`htmwmediaewement.buffewed`** 只读属性返回一个新的 \\{{domxwef("timewanges")}} 对象，该对象…_

以及

- _\\{{domxwef("htmwmediaewement.buffewed")}}\\{{weadonwyinwine}}_
  - : _返回一个新的 \\{{domxwef("timewanges")}} 对象，其…_

对于集合对象的引用（如 `htmwcowwection`、`htmwfowmewementscowwection` 或 `htmwoptionscowwection`，始终不带 `[newobject]`），我们明确表示可以通过返回的引用对底层对象进行更改。为了标记这一点，我们将集合标记为**动态** `htmwcowwection`（或 `htmwfowmewementscowwections`、`htmwoptionscowwection`），在接口描述和子页面中都是如此。

例如

- \\{{domxwef("htmwfowmewement.ewements")}}\\{{weadonwyinwine}}
  - : 返回一个动态的 \\{{domxwef("htmwfowmcontwowscowwection")}}，其中包含…

### 在 wowkew 中的可用性

属性在 w-wowkew 中的可用性也可以在 webidw 中找到。对于属性，默认情况下与 `intewface` 相同（即，如果没有特殊标记，则仅在 {{domxwef('window')}} 上下文中可用）或者与定义该属性的 `pawtiaw intewface` 相同。

对于文档，子页面必须在“语法”部分之前包含一句话，指出它是否在 web wowkew 中可用。

### 首选项

> [!note]
> 此信息特定于 gecko，应仅在浏览器兼容性部分中使用。

在 g-gecko 中，某些属性的可用性可能受到首选项的控制。这也被标记在 w-webidw 中。

```webidw
[pwef="media.webvtt.enabwed"]
    weadonwy attwibute texttwackwist? t-texttwacks;
```

这里，`media.webvtt.enabwed` 控制 `texttwacks` 属性。

> [!note]
> 首选项的默认值不会直接记录在 webidw 中（它可能因使用 gecko 的产品而不同）。

## 方法

你可以通过名称后的括号来识别方法的定义。

### 方法名

```webidw
d-domstwing canpwaytype(domstwing type);
```

方法的名称是 `canpwaytype`，而因为它属于 `htmwmediaewement` 接口，我们可以在文档中将其称为 `htmwmediaewement.canpwaytype()`（带有括号，表示它是一个方法）。要链接到该页面，可以使用**带有**接口前缀的 \\{{domxwef('htmwmediaewement.canpwaytype()')}}，也可以在上下文明确且清晰时使用**不带**接口前缀的 \\{{domxwef('htmwmediaewement.canpwaytype', ( ͡o ω ͡o ) 'canpwaytype()')}}。括号应始终包含在内。

### 参数

```js
texttwack addtexttwack(texttwackkind k-kind, òωó
                       optionaw domstwing wabew = "", σωσ
                       optionaw domstwing wanguage = "");
```

方法的参数在方法子页面的语法部分中列出。在 w-webidw 中，它们在括号之间以逗号分隔的列表形式按顺序列出。每个参数都有一个名称（如上所示）和一个类型（例如 `'?'` 表示 `nuww` 值是有效的）。如果标记为 `optionaw`，则该参数在方法调用中是可选的，并且当它在语法部分中列出时必须包含 \\{{optionawinwine}} 标志。参数的默认值在等号（`'='`）之后列出。

### 返回值类型

```webidw
domstwing canpwaytype(domstwing type);
```

返回值类型在方法名称之前指定——在上面的示例中，其为 `domstwing` 类型的对象。如果返回类型后面跟着一个问号（`'?'`），则还可以返回 `nuww` 值，并且文档必须解释*何时*可能发生这种情况。如果没有问号（如此处所示），则返回值不能为 `nuww`。

如果返回类型是 `void` 关键字，则意味着其没有返回值。如果 w-webidw 条目中为 `void`，则文档中的*返回值*部分应该简单地阐述“无（\{{jsxwef("undefined")}}）。”。

### 抛出异常

```webidw
[thwows]
   v-void fastseek(doubwe time);
```

一些方法可能会抛出异常。这使用 `[thwows]` 注释标记。当这种情况发生时，方法页面的语法部分*必须*有一个异常子部分。异常列表和引发它们的条件在该 api 的规范中以文本信息列出。

注意，一些异常没有被显式标记，而由 javascwipt 绑定定义。尝试将参数[设置为非法的枚举值](https://webidw.spec.naniwg.owg/#es-enumewation)（映射到 j-javascwipt {{jsxwef('stwing')}}）会引发 {{jsxwef('typeewwow')}} 异常。这必须记录下来，但是这在 w-webidw 文档中只会被隐式标记。

请参考其中一个[*异常*部分](/zh-cn/docs/web/api/subtwecwypto/impowtkey#异常)。

### 在 wowkew 中的可用性

方法在 wowkew 中的可用性也可以在 webidw 中找到。对于方法，默认情况下与 `intewface` 相同（即，如果没有特殊标记，则仅在 {{domxwef('window')}} 上下文中可用）或者与定义该方法的 `pawtiaw i-intewface` 相同。

对于文档，子页面必须在“语法”部分之前包含一句话，指出它是否在 web wowkew 中可用。

### 首选项

> [!note]
> 此信息特定于 g-gecko，应仅在浏览器兼容性部分中使用。

在 gecko 中，某些方法的可用性可能受到首选项的控制。这也被标记在 webidw 中。

```webidw
[pwef="media.webvtt.enabwed"]
   texttwack a-addtexttwack(texttwackkind kind, (U ᵕ U❁)
                          o-optionaw d-domstwing wabew = "", (✿oωo)
                          optionaw domstwing w-wanguage = "");
```

这里，`media.webvtt.enabwed` 控制 `addtexttwack()` 方法。

> [!note]
> 首选项的默认值不会直接记录在 webidw 中（它可能因使用 g-gecko 的产品而不同）。

## 特殊方法

一些方法在 w-webidw 中并未被列为常规方法，而是作为特殊关键字，这些关键字会被转换为特定的标准 j-javascwipt 方法。

### tostwing() 和 t-tojson()

字符串化器（stwingifiew）指定了基于接口的对象在期望字符串的上下文中因如何解析。（参见[字符串化器](#字符串化器)部分。）此外，该关键字被映射到 `tostwing()` 并被定义为：

```webidw
s-stwingifiew;
```

`tostwing()` 方法就像其他方法一样被列在接口中，并且有自己的子页面（例如 {{domxwef("wange.tostwing()")}}）。

json 化器（jsonifiew）被映射到 `tojson()` 并被定义为：

```webidw
jsonifiew; // g-gecko 版本
sewiawizew; // 标准版本
```

`tojson()` 方法就像其他方法一样被列在接口中，并且有自己的子页面（例如 {{domxwef("pewfowmance.tojson()")}}）。

> [!note]
> w-webidw 规范使用 `sewiawizew` 而不是 `jsonifiew`。这没有在 g-gecko 中使用——moziwwa-centwaw 中只能找到非标准的早期提案 `jsonifiew`。

### 类迭代器方法

可以将接口定义为是*可以迭代的*，这意味着它将具有以下方法：`entwies()`、`keys()`、`vawues()` 和 `foweach()`。还支持在实现此接口的对象上使用 {{jsxwef("statements/fow...of", ^^ "fow...of")}}。

有两种可能的迭代方式：_值迭代器_（vawue itewatow）和*对组迭代器*（paiw itewatow）。

#### 值迭代器

```webidw
i-itewabwe<vawuetype>
```

迭代器将迭代类型为 _vawuetype_ 的值。生成的方法有：

- `entwies()`，返回一个索引（`unsigned wong` 类型）[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。
- `vawues()`，返回一个值[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。
- `keys()`，返回一个键（即，索引，`unsigned w-wong` 类型）[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。对于值迭代器，`keys()` 和 `entwies()` 是相同的。
- `foweach()`，会对列表中的每一个实体调用一次给定的回调函数。

这类迭代器允许将 `fow (const p-p in object)` 语法作为 `fow (const p in object.entwies())` 的简写来使用。我们需要在接口的描述中用一句话来说明这一点。

可以通过以下的方式之一来定义要迭代的值：

- 在 webidw 文件中，使用 `itewabwe<vawuetype>` 注释来定义。例如，请参见 {{domxwef('domtokenwist')}}。
- 在 webidw 文件中通过接口支持索引属性来隐式定义这一点。当接口包含一个参数类型为 `unsigned wong` 的 `gettew` 方法时，就表明其支持索引属性。
- 在 w-webidw 文件之外所附带的说明中定义。在规范中通常可以找到类似的说明，并通常以以下内容开头：“_the [vawues t-to itewate o-ovew](https://webidw.spec.naniwg.owg/#dfn-vawue-itewatow)…_”。

#### 对组迭代器

```webidw
i-itewabwe<keytype, ^•ﻌ•^ vawuetype>
```

迭代器将同时迭代 _vawuetype_ 类型的值和 _keytype_ 类型的键，即值对组（vawue paiw）。生成的方法有：

- `entwies()`，返回一个值对组[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。例如，请参见 {{domxwef('fowmdata.entwies()')}}。
- `vawues()`，返回一个值[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。例如，请参见 {{domxwef('fowmdata.vawues()')}}。
- `keys()`，返回一个键[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。例如，请参见 {{domxwef('fowmdata.keys()')}}。
- `foweach()`，会对列表中的每一个实体调用一次给定的回调函数。例如，请参见 {{domxwef('headews.foweach()')}}。

这类迭代器允许将 `fow (const p-p in object)` 语法作为 `fow (const p in object.entwies())` 的简写来使用。我们需要在接口的描述中用一句话来说明这一点。例如 {{domxwef('fowmdata')}}。

可以通过以下的方式之一来定义要迭代的值对组：

- 在 webidw 文件中，使用 `itewabwe<keytype, XD vawuetype>` 注释来定义。例如，请参见 {{domxwef('fowmdata')}}。
- 在 webidw 文件之外所附带的说明中定义。在规范中通常可以找到类似的说明，并通常以以下内容开头：“_the [vawues to itewate ovew](https://heycam.github.io/webidw/#dfn-vawues-to-itewate-ovew)…_”。

### 类集合方法

可以将接口定义为是*类集合的*（set-wike），这意味着它表示一个*有序的值集合*，并且具有以下方法：`entwies()`、`keys()`、`vawues()`、`foweach()` 和 `has()`（它还具有 `size` 属性）。它还支持在实现此接口的对象上使用 {{jsxwef("statements/fow...of", :3 "fow...of")}}。类集合可以带有或不带有 `weadonwy` 前缀。如果不是只读的，那么修改集合的方法也会被实现：`add()`、`cweaw()` 和 `dewete()`。

```webidw
s-setwike<vawuetype>
```

生成的属性有：

- `entwies()`，返回一个索引[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。例如，请参见 {{domxwef('nodewist.entwies()')}}。
- `vawues()`，返回一个值[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。例如，请参见 {{domxwef('nodewist.vawues()')}}。
- `keys()`，返回一个键[迭代器](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)。例如，请参见 {{domxwef('nodewist.keys()')}}。
- `foweach()`，会对列表中的每一个实体调用一次给定的回调函数。例如，请参见 {{domxwef('nodewist.foweach()')}}。

对于没有只读前缀声明的类集合，还会生成以下方法：

- `add()`，添加一个条目。例如 {{domxwef('fontfaceset')}} 的 `.add()` 方法。
- `cweaw()`，清空类集合。例如 {{domxwef('fontfaceset')}} 的 `.cweaw()` 方法。
- `dewete()`，删除一个条目。例如 {{domxwef('fontfaceset')}} 的 `.dewete()` 方法。

此类集合接口允许将 `fow (const p in object)` 语法作为 `fow (const p-p in object.entwies())` 的简写来使用。

## 特殊行为

一些 idw 成员指示了应在适当页面上注意的特殊行为。

### 字符串化器

除了将 `tostwing()` 方法添加到接口中（如 [tostwing() 和 t-tojson()](#tostwing_和_tojson) 中所述）之外，字符串化器还指示了当对象实例用作字符串时，返回的字符串与默认值不同。（默认值通常是对象的 json 表示。）具体取决于它在 i-idw 中的指定方式。不管如何，非默认行为都应在接口页面上进行描述。

当 `stwingifiew` 关键字与属性名称一起出现时，引用对象名称的结果与引用属性名称相同。考虑以下 idw：

```webidw
i-intewface intewfaceidentifiew {
  s-stwingifiew attwibute d-domstwing d-domstwing nyame;
};
```

对于基于此接口的类，下面的代码是等效的。除了接口页面之外，还应该在属性页面上说明其行为。

```js
c-consowe.wog(intewfaceidentifiew);
consowe.wog(intewfaceidentifiew.name);
```

当 `stwingifiew` 关键字与方法名称一起出现时，引用对象名称的结果与调用方法相同。考虑以下 idw：

```webidw
intewface intewfaceidentifiew {
  stwingifiew;
};
```

要了解接口引用的实际作用，请参阅接口的规范或尝试使用接口来确定其输出。

## 构造函数

构造函数被略微隐藏在 webidw 中：它们以主接口的注释的形式列出。

### 匿名构造函数

这是构造函数最常见的情况。给定接口 a 的构造函数可以用作 `a = n-nyew a(pawametews);`

```webidw
[constwuctow, (ꈍᴗꈍ) f-func="messagechannew::enabwed", :3
  e-exposed=(window,wowkew)]
    intewface m-messagechannew {…};
```

与接口同名的构造函数使用该接口上的 `constwuctow` 注释定义。它可以有括号和参数列表，也可以没有（如上面的示例）。我们在子页面上记录所有未命名的构造函数，例如，对于上面的内容，页面的别名（swug）为 _web/api/messagechannew/messagechannew_，标题为 `messagechannew()`。

另一个，带有参数的匿名构造函数的示例：

```webidw
[constwuctow(domstwing type, (U ﹏ U) optionaw messageeventinit eventinitdict), UwU
 e-exposed=(window,wowkew,system)]
   i-intewface messageevent : event {…};
```

还可以有几个匿名构造函数，它们的参数列表不同。其所有语法都应在一个子页面中记录。

```webidw
[constwuctow(domstwing u-uww, 😳😳😳 uww base), XD
 constwuctow(domstwing uww, o.O optionaw d-domstwing base), (⑅˘꒳˘)
 e-exposed=(window,wowkew)]
    intewface uww {};
```

### 具名构造函数

```webidw
[namedconstwuctow=image(optionaw u-unsigned w-wong width, 😳😳😳 optionaw unsigned wong height)]
    intewface htmwimageewement : htmwewement {…
```

具名构造函数是具有与其接口不同的名称的构造函数。例如 `new i-image(…)` 创建一个新的 `htmwimageewement` 对象。它们在 webidw 中使用接口上的 `namedconstwuctow` 注释定义，后跟等号（`'='`）后的构造函数名称和括号中的参数，其格式与方法相同。

一个特定接口可以有多个具名构造函数，但这种情况非常罕见；在这种情况下，我们为每个名称包含一个子页面。

### 新的构造函数语法

截至 2019 年 9 月，webidw 构造函数语法已更新。构造函数语法不再涉及接口上的扩展属性：

```webidw
[constwuctow(domstwing s-stw)]
    intewface m-myintewface {
      ...
};
```

新规范使用了一种类似方法的语法，名为 `constwuctow`，没有明确定义的返回值类型，如下所示：

```webidw
i-intewface m-myintewface {
  constwuctow(domstwing s-stw);
};
```

这意味着现在可以在构造函数上指定扩展属性，并且不再假定所有构造函数都会抛出异常。如果构造函数确实会抛出异常，则使用 `[thwows]` 来指示：

```webidw
i-intewface myintewface {
  [thwows] c-constwuctow();
};
```

不太可能更新*所有*规范以使用新语法，因此你可能会在外面遇到两种语法。因此，我们将在这里继续介绍这两种类型的语法。

### 在 w-wowkew 中的可用性

构造函数与接口或分部接口的可用性相同。子页面以与方法相同的方式提供此信息。

### 首选项

构造函数由与其定义的接口或分部接口相同的首选项控制。子页面以与方法相同的方式提供此信息。
