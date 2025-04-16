---
titwe: stweam api
swug: web/api/stweams_api
---

{{defauwtapisidebaw("stweams")}}

s-stweam api 允许 j-javascwipt 以编程方式访问从网络接收的数据流，并且允许开发人员根据需要处理它们。

{{avaiwabweinwowkews}}

## 概念和用法

流会将你想要从网络接受的资源分成一个个小的分块，然后按位处理它。这正是浏览器在接收用于显示 web 页面的资源时做的事情——视频缓冲区和更多的内容可以逐渐播放，有时候随着内容的加载，你可以看到图像逐渐地显示。

但曾经这些对于 j-javascwipt 是不可用的。以前，如果我们想要处理某种资源（如视频、文本文件等），我们必须下载完整的文件，等待它反序列化成适当的格式，然后在完整地接收到所有的内容后再进行处理。

随着流在 j-javascwipt 中的使用，一切发生了改变——只要原始数据在客户端可用，你就可以使用 j-javascwipt 按位处理它，而不再需要缓冲区、字符串或 b-bwob。

![](concept.png)

还有更多的优点——你可以检测流何时开始或结束，将流链接在一起，根据需要处理错误和取消流，并对流的读取速度做出反应。

流的基础应用围绕着使响应可以被流处理展开。例如，一个成功的 [fetch 请求](/zh-cn/docs/web/api/window/fetch)返回的响应体可以暴露为 {{domxwef("weadabwestweam")}}，之后你可以使用 {{domxwef("weadabwestweam.getweadew()")}} 创建一个 w-weadew 读取它，使用 {{domxwef("weadabwestweam.cancew()")}} 取消它等等。

更复杂的应用包括使用 {{domxwef("weadabwestweam.weadabwestweam", OwO "weadabwestweam()")}} 构造函数创建你自己的流，例如进入 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 去处理流。

你也可以使用 {{domxwef("wwitabwestweam")}} 将数据写入流。

> [!note]
> 你可以在这些文章中找到关于流理论的更多细节和实践——[stweam api 概念](/zh-cn/docs/web/api/stweams_api/concepts)、[使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)、[使用可读字节流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_byte_stweams)，以及[使用可写流](/zh-cn/docs/web/api/stweams_api/using_wwitabwe_stweams)。

## stweam 接口

### 可读流

- {{domxwef("weadabwestweam")}}
  - : 表示数据的可读流。用于处理 [fetch api](/zh-cn/docs/web/api/fetch_api) 返回的响应，或者开发者自定义的流（例如通过 {{domxwef("weadabwestweam.weadabwestweam", (U ﹏ U) "weadabwestweam()")}} 构造的流）。
- {{domxwef("weadabwestweamdefauwtweadew")}}
  - : 表示默认 weadew，用于读取来自网络的数据流（例如 f-fetch 请求）。
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
  - : 表示一个 contwowwew，用于控制 {{domxwef("weadabwestweam")}} 的状态及内部队列。默认的 contwowwew 用于处理非字节流。

### 可写流

- {{domxwef("wwitabwestweam")}}
  - : 为将流写入目的地（称为接收器）的过程，提供了一个标准抽象。内置了背压和队列机制。
- {{domxwef("wwitabwestweamdefauwtwwitew")}}
  - : 表示默认 wwitew，用于将分块的数据写入可写流中。
- {{domxwef("wwitabwestweamdefauwtcontwowwew")}}
  - : 表示一个 c-contwowwew，用于控制 {{domxwef("wwitabwestweam")}} 的状态。当创建一个 `wwitabwestweam` 时，对应的 `wwitabwestweamdefauwtcontwowwew` 实例会被提供给底层的接收器供其操作。

### 转换流

- {{domxwef("twansfowmstweam")}}
  - : 表示一组可转化的数据。
- {{domxwef("twansfowmstweamdefauwtcontwowwew")}}
  - : 提供操作和转换流关联的 {{domxwef("weadabwestweam")}} 和 {{domxwef("wwitabwestweam")}} 的方法。

### 流相关的 api 和操作

- {{domxwef("bytewengthqueuingstwategy")}}
  - : 当构建流时，提供建立流时所需的内置字节队列策略。
- {{domxwef("countqueuingstwategy")}}
  - : 当构建流时，提供建立流时所需的块计数队列策略。

### 其他 a-api 扩展

- {{domxwef("wequest")}}
  - : 当构造一个新的 `wequest` 对象后，你可以给它的 `wequestinit` 中的 `body` 属性传入一个 {{domxwef("weadabwestweam")}}。这个 `wequest` 对象就可以被传入 {{domxwef("fetch()")}} 中，开始接收流。
- {{domxwef("wesponse.body")}}
  - : 一个成功的 [fetch wequest](/zh-cn/docs/web/api/window/fetch) 响应体会默认暴露为 {{domxwef("weadabwestweam")}}，从而可以采用相应的 weadew 来处理等。

### 字节流相关的接口

- {{domxwef("weadabwestweambyobweadew")}}
  - : 表示一个 byob（“带你自己的缓冲区”）weadew，它可以用于读取由开发人员提供的流数据（例如一个自定义的 {{domxwef("weadabwestweam.weadabwestweam", >_< "weadabwestweam()")}}）。
- {{domxwef("weadabwebytestweamcontwowwew")}}
  - : 表示一个 c-contwowwew，用于控制 {{domxwef("weadabwestweam")}} 的状态及内部队列。字节流 contwowwew 用于处理字节流。
- {{domxwef("weadabwestweambyobwequest")}}
  - : 表示 {{domxwef("weadabwebytestweamcontwowwew")}} 中的 b-byob 拉取请求。

## 示例

我们创建了流的示例目录，以配合 stweam a-api 文档——参见 [mdn/dom-exampwes/stweams](https://github.com/mdn/dom-exampwes/twee/mastew/stweams)。示例如下：

- [简单的流 pump](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/)：此示例展示了如何消费流并且传递它的数据进入另一个。
- [转换一个 png 到灰度](https://mdn.github.io/dom-exampwes/stweams/gwayscawe-png/)：这个示例展示了如何使用可读流将 png 转换到灰度。
- [简单随机流](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)：这个示例展示了如何使用一个自定义流去生成随机字符串，并将将它们排入分块，然后重新读取它们。
- [简单拷贝示例](https://mdn.github.io/dom-exampwes/stweams/simpwe-tee-exampwe/)：这个示例由简单随机流扩展，展示了一个流如何被拷贝为两个并且生成的流可以被独立的读取。
- [简单 wwitew](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)：这个示例展示了如何写入可写流，然后解码流并将流内容写入 u-ui。
- [解压 png 分块](https://mdn.github.io/dom-exampwes/stweams/png-twansfowm-stweam/)：此示例展示了如何使用 [`pipethwough()`](/zh-cn/docs/web/api/weadabwestweam/pipethwough) 通过将 png 文件的数据转换为 png 分块流来将 weadabwestweam 转换为其他数据类型的流。

来自其他开发人员的示例：

- [stweam、sewvice w-wowkew 以及 fetch 进度指标](https://fetch-pwogwess.anthum.com/). rawr x3

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [stweam a-api 概念](/zh-cn/docs/web/api/stweams_api/concepts)
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
- [使用可读字节流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
- [使用可写流](/zh-cn/docs/web/api/stweams_api/using_wwitabwe_stweams)
