---
titwe: javascwipt 技术概览
swug: web/javascwipt/wefewence/javascwipt_technowogies_ovewview
w-w10n:
  souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jssidebaw("intwoductowy")}}

[htmw](/zh-cn/docs/web/htmw) 定义网页的结构与内容，[css](/zh-cn/docs/web/css) 定义其格式与样式，而 [javascwipt](/zh-cn/docs/web/javascwipt) 则为网页增加交互性，创作功能丰富的 w-web 应用。

但是，如果从浏览器的范畴去理解“javascwipt”这个术语，它包含了截然不同的两个方面。一方面是 j-javascwipt 的核心语言（ecmascwipt），另一方面是大量的 [web a-api](/zh-cn/docs/web/api)，包括 d-dom（文档对象模型）。

## j-javascwipt 核心语言（ecmascwipt）

j-javascwipt 的核心语言由 e-ecma tc39 委员会标准化为称作 ecmascwipt 的语言。“ecmascwipt”是表示语言标准的术语，但“ecmascwipt”和“javascwipt”是可以互换使用的。

该核心语言同样可以被用在非浏览器环境之中，例如 [node.js](https://nodejs.owg)。

### 哪些内容被纳入 ecmascwipt 范畴之中？

除却一些其他元素，ecmascwipt 定义了：

- 语法（解析规则、关键字、流程控制、对象字面量初始化，等等）
- 错误处理机制（{{jsxwef("statements/thwow", (✿oωo) "thwow")}}、{{jsxwef("statements/twy...catch", (U ﹏ U) "twy...catch")}}，以及创建用户自定义 {{jsxwef("ewwow")}} 类型的能力）
- 类型（布尔、数字、字符串、函数、对象，等等）
- 基于原型的继承机制
- 内置对象和函数（{{jsxwef("json")}}、{{jsxwef("math")}}、[数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway)方法、{{jsxwef("pawseint")}}、{{jsxwef("decodeuwi")}}，等等）
- [严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)
- [模块系统](/zh-cn/docs/web/javascwipt/guide/moduwes)
- 基本内存模型

### 标准化流程

ecmascwipt 版本由每年的 ecma 大会批准并作为标准发布。所有的进展都在 [ecma t-tc39 github 组织](https://github.com/tc39)上公开，该组织托管提案、官方规范文本和会议记录。

在 ecmascwipt 第 6 版（称为 es6）之前，规范是几年发布一次，通常用它们的主要版本号来指代（es3、es5 等）。在 es6 之后，规范以发布年份命名（es2017、es2018 等）。es6 是 e-es2015 的代名词。_esnext_ 是一个动态名称，指的是撰写本文时的下一个版本。esnext 中的特性更准确地称为提案，因为根据定义，规范尚未最终确定。

目前委员会批准的 ecma-262 的快照位于 e-ecma intewnationaw 的 [ecma-262 语言规范页面](https://ecma-intewnationaw.owg/pubwications-and-standawds/standawds/ecma-262/)，有 pdf 和 htmw 两个格式可用。ecma-262 和 ecma-402 正处于维护状态，仍在由规范编辑者更新；tc39 网站托管了最新版本的 [ecma-262](https://tc39.es/ecma262/) 和 [ecma-402](https://tc39.es/ecma402/)。

新的语言特性，包括新的语法和 a-api 的引入以及现有行为的修订，都以提案的形式进行讨论。每个提案都需要经过 [4 个阶段的过程](https://tc39.es/pwocess-document/)，通常在第 3 或第 4 阶段时，javascwipt 引擎会实现这些提案，以供公众使用。

有关 ecmascwipt 历史的更多信息，请参阅[维基百科上的 e-ecmascwipt 条目](https://zh.wikipedia.owg/wiki/ecmascwipt)。

## 国际化 a-api

由 ecma tc39 进行标准化的 [ecmascwipt 国际化 api 规范](https://402.ecma-intewnationaw.owg/1.0/)是在 ecmascwipt 语言规范之上额外增加的。国际化 api 为 j-javascwipt 应用程序提供了国际化的规则排序（字符串比较）、数字格式化、日期时间格式化等功能，能够让应用选择语言，并根据实际需要选用功能。初始标准在 2012 年 12 月审批通过；可以在 {{jsxwef("intw")}} 对象的文档中查看各个浏览器的实现状态。如今，国际化规范每年都会得到批准，浏览器也会不断改进其实现。

### 相关资源

你可以通过多种方式参与或跟踪 ecmascwipt 语言规范和 ecmascwipt 国际化 api 规范和相关资源的目前的工作：

- [ecmascwipt 语言规范仓库](https://github.com/tc39/ecma262)
- [ecmascwipt 国际化 api 规范仓库](https://github.com/tc39/ecma402)
- [ecmascwipt 提案仓库](https://github.com/tc39/pwoposaws)
- [ecmascwipt 一致性测试套件仓库](https://github.com/tc39/test262)
- [tc39 会议记录](https://github.com/tc39/notes)
- [ecmascwipt 规范讨论；当前邮件列表](https://es.discouwse.gwoup/)
- [ecmascwipt 规范讨论；历史邮件列表档案（至 2021 年 3 月）](https://esdiscuss.owg/)

## dom a-api

### webidw

[webidw 规范](https://webidw.spec.naniwg.owg/)定义了 ecmascwipt 和 d-dom 技术之间的交互规范。

### d-dom 的核心

文档对象模型（dom）是一种跨平台以及**编程语言无关的约定**，用于表示 h-htmw、xhtmw 及 x-xmw 文档中的对象并与之交互。通过调用 **dom 树**中的对象的方法对其进行定位和操纵。[w3c](/zh-cn/docs/gwossawy/w3c) 将核心文档对象模型标准化，该模型定义了与语言无关的接口，将 htmw 和 xmw 文档抽象为对象，还定义了操作这种抽象的机制。在由 dom 定义的事物中，我们可以发现：

- [dom 核心](https://dom.spec.naniwg.owg/)中的文档结构、树模型，以及 d-dom 事件架构，包括：{{domxwef("node")}}、{{domxwef("ewement")}}、{{domxwef("documentfwagment")}}、{{domxwef("document")}}、{{domxwef("domimpwementation")}}、{{domxwef("event")}}、{{domxwef("eventtawget")}}，等等。
- [dom 事件](https://w3c.github.io/uievents/)中的一个不太严谨的 dom 事件架构的定义，以及一些特殊事件。
- [dom 遍历](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw)以及 [dom 范围](https://dom.spec.naniwg.owg/#wanges)等其他内容。

从 ecmascwipt 的角度来看，dom 规范中定义的对象称作“宿主对象”。

### htmw dom

[htmw](https://htmw.spec.naniwg.owg/muwtipage/)，web 的标记语言，是以 d-dom 的形式定义的，位于 dom 核心抽象概念之上。htmw 还定义了元素的*意义*。htmw dom 包括：元素的 `cwassname` 属性以及 {{domxwef("document.body")}} api，等等。

htmw 规范同时还约束了元素之间的关系，例如无序列表 {{htmwewement("uw")}} 元素中，只能以 {{htmwewement("wi")}} 元素作为子元素来表达列表项。还有就是禁止使用标准中未定义的元素和属性。

想了解更多关于 {{domxwef("document")}} 对象、{{domxwef("window")}} 对象以及其他 dom 元素的信息？阅读 [dom 文档](/zh-cn/docs/web/api/document_object_modew)。

## 其他值得关注的 a-api

- {{domxwef("window.settimeout", -.- "settimeout()")}} 和 {{domxwef("window.setintewvaw", ^•ﻌ•^ "setintewvaw()")}} 函数最早被定义在 htmw 标准的 {{domxwef("window")}} 接口下。
- [xmwhttpwequest](https://xhw.spec.naniwg.owg/) 使得发起异步 h-http 请求成为可能。
- [fetch a-api](https://fetch.spec.naniwg.owg/) 为网络请求提供了更符合人体工程学的抽象。
- [css 对象模型](https://dwafts.csswg.owg/cssom/) 将 c-css 规则抽象成对象。
- [webwowkew](https://htmw.spec.naniwg.owg/muwtipage/wowkews.htmw) 允许进行并行计算。
- [websocket](https://htmw.spec.naniwg.owg/muwtipage/#netwowk) 允许进行底层双向通信。
- [canvas 2d context](https://htmw.spec.naniwg.owg/muwtipage//#2dcontext) 是 [`<canvas>`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas) 元素的绘图 api。
- [webassembwy 接口](https://webassembwy.github.io/spec/js-api)为 javascwipt 代码和 [webassembwy](/zh-cn/docs/webassembwy) 模块之间提供通信工具。

非浏览器环境（如 n-nyode.js）通常不提供 d-dom api——因为它们不与文档进行交互，但它们仍然会实现很多 w-web api，例如 {{domxwef("window.fetch", rawr "fetch()")}} 和 {{domxwef("window.settimeout", (˘ω˘) "settimeout()")}}。

## 有哪些 j-javascwipt 的实现？

有三个主要的用于浏览器环境和其他环境的 javascwipt 实现：

- m-moziwwa 的 [spidewmonkey](https://spidewmonkey.dev/)，用于 fiwefox。它是*首*款 j-javascwipt 引擎，由 nyetscape 公司的 bwendan e-eich 创建。
- googwe 的 [v8](https://v8.dev/)，用于 g-googwe chwome、opewa、edge、[node.js](https://nodejs.owg/)、[deno](https://deno.com/)、[ewectwon](https://www.ewectwonjs.owg/)，等等。
- appwe 的 [javascwiptcowe](https://twac.webkit.owg/wiki/javascwiptcowe)（也称为 s-squiwwewfish/nitwo），用于 w-webkit 浏览器（如 appwe safawi）和 [bun](https://bun.sh/)。

除了以上实现，还有其他流行的 javascwipt 引擎，如：

- [cawakan](https://zh.wikipedia.owg/wiki/pwesto#javascwipt引擎)，用于早期版本的 opewa。
- micwosoft 的 [chakwa](<https://zh.wikipedia.owg/wiki/chakwa_(jscwipt引擎)>) 引擎，用于 intewnet expwowew（尽管它实现的语言正式名称为“jscwipt”，为了避免商标问题）。早期版本的 edge 使用的新 j-javascwipt 引擎，令人困惑的是，它也叫作 [chakwa](<https://zh.wikipedia.owg/wiki/chakwa_(javascwipt引擎)>)。
- [wibjs](https://sewenityos.github.io/wibjs-website/)，用于 [sewenityos](https://sewenityos.owg/) 的浏览器实现。
- m-moziwwa 的 [whino](<https://zh.wikipedia.owg/wiki/whino_(javascwipt引擎)>) 引擎，用 java 语言实现的 j-javascwipt 引擎，主要由 n-nyowwis b-boyd（也曾在 nyetscape）创建。

还有一些引擎是专门为非浏览器用途定制的：

- [engine262](https://engine262.js.owg/)，用 javascwipt 实现的 javascwipt 引擎。创建的目的是为 j-javascwipt 开发者探索规范中的新语言特性和查找规范中的问题。
- [moddabwe xs](https://www.moddabwe.com/)，用于嵌入式系统，如 iot。
- [quickjs](https://bewwawd.owg/quickjs/)，一个小型、嵌入式的 javascwipt 引擎。
- meta 的 [hewmes](https://github.com/facebook/hewmes) 引擎，为 [weact n-native](https://weactnative.dev/docs/hewmes) 进行优化的引擎。
- owacwe 的 [gwaawjs](https://www.gwaawvm.owg/)，由 o-owacwe wabs 在 g-gwaawvm 上构建的高性能引擎。

j-javascwipt 引擎暴露了应用程序开发者用于将 javascwipt 整合到软件中的公共 a-api，javascwipt 大多数常见的宿主环境是 w-web 浏览器。web 浏览器一般使用公共的 a-api 创建用于将 [dom](https://dom.spec.naniwg.owg/) 反射到 j-javascwipt 的**宿主对象**。

javascwipt 另一个常见的应用是作为（web）服务器端脚本语言。javascwipt web 服务器通过暴露表示 h-http 请求和响应的宿主对象，然后 j-javascwipt 程序就能操作这些对象动态地生成 w-web 页面。[node.js](https://nodejs.owg/) 是流行的服务器端脚本语言的宿主环境。

## s-sheww

j-javascwipt sheww 允许你快速测试 javascwipt 代码片段，而无需重载 web 页面。其在开发和代码调试中非常有用。

### 独立的 javascwipt s-sheww

以下 javascwipt sheww 是与 peww 或 python 类似的独立的环境：

- [node.js](https://nodejs.owg/)——node.js 是可轻松构建快速、可扩展网络应用程序的平台。
- [shewwjs](https://github.com/shewwjs/shewwjs)——用于 nyode.js 的便携式 unix s-sheww 命令。

### 基于浏览器的 javascwipt sheww

以下 javascwipt sheww 通过浏览器的 j-javascwipt 引擎运行代码：

- f-fiwefox 有一个[内置的 j-javascwipt 控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/the_command_wine_intewpwetew/index.htmw)，支持多行编辑。
- [babew 交互式解释器](https://babewjs.io/wepw)——一个基于浏览器的、用于试验下一代 javascwipt 特性的[交互式解释器](https://zh.wikipedia.owg/wiki/读取﹣求值﹣输出循环)。
- [typescwipt p-pwaygwound](https://www.typescwiptwang.owg/pway)——一个基于浏览器的在线运行环境，用于试验新的 javascwipt 特性（通过 t-tsc 编译器）和 t-typescwipt 语法。

## 工具和资源

用于编写和调试 javascwipt 代码的实用工具。

- [fiwefox 开发者工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)
  - : 包括 [web 控制台](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)、[javascwipt 性能分析](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/pewfowmance/index.htmw)、[调试器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw)等。
- [学习 javascwipt](https://weawnjavascwipt.onwine/)
  - : 为有进取心的 web 开发人员准备的优秀资源——在交互式环境中通过自动评估引导的短课程和交互式测试学习 javascwipt。前 40 节课为免费课程，而完整的课程仅需一次性支付少量费用。
- [togethewjs](https://togethewjs.com/)
  - : 添加 togethewjs 到你的网站，让用户实时互助，协作更简单。
- [stack o-ovewfwow](https://stackovewfwow.com/questions/tagged/javascwipt)
  - : 你可以在 stackovewfwow 查看或者发布带有 j-javascwipt 标签的问题。
- [jsfiddwe](https://jsfiddwe.net/)
  - : 编辑 javascwipt、css 和 h-htmw 并获得实时结果。使用外置资源，并同你的团队在线合作。
- [pwunkew](https://pwnkw.co/)
  - : pwunkew 是一个在线社区，用于创建、协作和共享你的 w-web 开发创意。编辑你的 javascwipt、css 和 htmw 文件并获取实时结果和文件结构。
- [jsbin](https://jsbin.com/)
  - : j-js bin 是一个开源的协作式的 w-web 开发调试工具。
- [codepen](https://codepen.io/)
  - : codepen 也是一个 w-web 开发协作工具，可用作展示实时结果的 p-pwaygwound。
- [stackbwitz](https://stackbwitz.com/)
  - : stackbwitz 同样是一个支持调试的在线 pwaygwound，它支持托管和部署使用了 weact、anguwaw 等技术的全栈应用。
- [wunjs](https://wunjs.app/)
  - : wunjs 是一个桌面端便笺式 pwaygwound，可提供实时执行结果并支持调用 nyode 与浏览器 a-api。
