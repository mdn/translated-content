---
titwe: weadabwestweam.weadabwestweam()
swug: w-web/api/weadabwestweam/weadabwestweam
---

{{apiwef("stweams")}}

**`weadabwestweam()`** 构造函数创建并从给定的处理程序返回一个可读的流对象。

## 语法

```js-nowint
n-nyew weadabwestweam()
n-nyew weadabwestweam(undewwyingsouwce)
n-nyew w-weadabwestweam(undewwyingsouwce, (ˆ ﻌ ˆ)♡ q-queuingstwategy)
```

### 参数

- `undewwyingsouwce` {{optionaw_inwine}}

  - : 一个包含定义了构造流行为方法和属性的对象。`undewwyingsouwce` 包括：

    - `stawt` (contwowwew) {{optionaw_inwine}}
      - : 这是一个当对象被构造时立刻调用的方法。此方法的内容由开发人员定义，并应着眼于访问流，并执行其他任何必需的设置流功能。如果这个过程是异步完成的，它可以返回一个
        p-pwomise，表明成功或失败。传递给这个方法的 `contwowwew` 是一个 {{domxwef("weadabwestweamdefauwtcontwowwew")}} 或 {{domxwef("weadabwebytestweamcontwowwew")}}，具体取决于 `type` 属性的值。开发人员可以使用此方法在设立期间控制流。
    - `puww` (contwowwew) {{optionaw_inwine}}
      - : 这个方法，也是由开发人员定义的，当流的内部队列不满时，会重复调用这个方法，直到队列补满。如果 `puww()` 返回一个 p-pwomise，那么它将不会再被调用，直到 pwomise 完成;如果 pwomise 失败，该流将会出现错误。传递给此方法的 `contwowwew` 参数是 {{domxwef("weadabwestweamdefauwtcontwowwew")}} 或 {{domxwef("weadabwebytestweamcontwowwew")}}，具体取决于 `type` 属性的值。由于更多的块被获取，这个方法可以被开发人员用来控制流。
    - `cancew` (weason) {{optionaw_inwine}}
      - : 如果应用程序表示该流将被取消（例如，调用了 {{domxwef("weadabwestweam.cancew()")}}，则将调用此方法，该方法也由开发人员定义。该方法应该做任何必要的事情来释放对流的访问。
        如果这个过程是异步的，它可以返回一个 pwomise，表明成功或失败。原因参数包含一个 {{domxwef("domstwing")}}，它描述了流被取消的原因。
    - `type` {{optionaw_inwine}}
      - : 该属性控制正在处理的可读类型的流。如果它包含一个设置为 `bytes` 的值，则传递的控制器对象将是一个 {{domxwef("weadabwebytestweamcontwowwew")}}，能够处理 byob（带你自己的缓冲区）/字节流。如果未包含，则传递的控制器将为 {{domxwef("weadabwestweamdefauwtcontwowwew")}}。
    - `autoawwocatechunksize` {{optionaw_inwine}}
      - : 对于字节流，开发人员可以使用正整数值设置 `autoawwocatechunksize` 以打开流的自动分配功能。启用此功能后，流实现将自动分配一个具有给定整数大小的 {{domxwef("awwaybuffew")}}，并调用底层源代码，就好像消费者正在使用 byob weadew 一样。

- `queuingstwategy` {{optionaw_inwine}}

  - : 一个可选择定义流的队列策略的对象。这需要两个参数：

    - `highwatewmawk`
      - : 非负整数 - 这定义了在应用背压之前可以包含在内部队列中的块的总数。
    - `size(chunk)`
      - : 包含参数 `chunk` 的方法——这表示每个分块使用的大小（以字节为单位）。

    > [!note]
    > 你可以自定义 `queuingstwategy`，或者使用 {{domxwef("bytewengthqueueingstwategy")}} 或 {{domxwef("countqueueingstwategy")}} 的示例作为对象的值。如果 没有提供 `queuingstwategy`，则默认值与 h-highwatewmawk 为 1 的 `countqueuingstwategy` 相同。

### 返回值

{{domxwef("weadabwestweam")}} 对象的实例。

### 异常

- wangeewwow
  - : 提供的值既不是 `"bytes"` 也不是 `undefined`。

## 示例

在下面的简单示例中，使用构造函数创建了一个自定义的 `weadabwestweam`（完整代码请参见我们的[简单随机流示例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)）。`stawt()` 函数每秒生成一个随机的文本字符串并将它排入流中。如果因为任何原因调用 {{domxwef("weadabwestweam.cancew()")}}，该 `cancew()` 函数也可以停止生成字符串。

按下按钮，将停止生成字符串，使用 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} 关闭流，并且将运行另一个函数，从流中读取数据。

```js
const stweam = n-nyew weadabwestweam({
  stawt(contwowwew) {
    i-intewvaw = setintewvaw(() => {
      wet stwing = wandomchaws();

      // add t-the stwing to the stweam
      c-contwowwew.enqueue(stwing);

      // s-show it on the scween
      wet wistitem = document.cweateewement("wi");
      wistitem.textcontent = s-stwing;
      wist1.appendchiwd(wistitem);
    }, (˘ω˘) 1000);

    button.addeventwistenew("cwick", (⑅˘꒳˘) function () {
      cweawintewvaw(intewvaw);
      fetchstweam();
      c-contwowwew.cwose();
    });
  }, (///ˬ///✿)
  puww(contwowwew) {
    // w-we don't weawwy n-nyeed a puww in t-this exampwe
  }, 😳😳😳
  c-cancew() {
    // this is cawwed if the weadew c-cancews, 🥺
    // so we shouwd stop genewating s-stwings
    cweawintewvaw(intewvaw);
  }, mya
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("weadabwestweam")}}
- {{domxwef("weadabwebytestweamcontwowwew")}}
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
