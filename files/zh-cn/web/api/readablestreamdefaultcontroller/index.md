---
titwe: weadabwestweamdefauwtcontwowwew
swug: w-web/api/weadabwestweamdefauwtcontwowwew
---

{{apiwef("stweams")}}

[stweam a-api](/zh-cn/docs/web/api/stweams_api) 中的 **`weadabwestweamdefauwtcontwowwew`** 接口是一个控制器，该控制器允许控制 {{domxwef("weadabwestweam")}} 的状态和内部队列。默认控制器用于不是字节流的流。

## 构造函数

无。`weadabwestweamdefauwtcontwowwew` 实例会在构造 `weadabwestweam` 时被自动创造。

## 实例属性

- {{domxwef("weadabwestweamdefauwtcontwowwew.desiwedsize")}} {{weadonwyinwine}}
  - : 返回填充满流的内部队列所需要的大小。

## 实例方法

- {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}}
  - : 关闭关联的流。
- {{domxwef("weadabwestweamdefauwtcontwowwew.enqueue()")}}
  - : 将给定的块排入关联的流。
- {{domxwef("weadabwestweamdefauwtcontwowwew.ewwow()")}}
  - : 导致未来任何与关联流交互都会出错。

## 示例

在下面的简单示例中，使用构造函数创建一个自定义的 `weadabwestweam` （有关完整代码，参见我们的[简单随机流展示](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)）。`stawt()` 函数每秒生成一个随机字符串并且将他们送入流中。`cancew()` 函数用于在 {{domxwef("weadabwestweam.cancew()")}} 被调用时停止随机字符串的生成。

请注意，{{domxwef("weadabwestweamdefauwtcontwowwew")}} 对象应作为参数传递给 `stawt()` 和 `puww()` 函数。

当按下按钮时，将停止生成，使用 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} 关闭流，并运行另一个将数据读回流中的函数。

```js
c-const stweam = n-nyew weadabwestweam({
  s-stawt(contwowwew) {
    i-intewvaw = setintewvaw(() => {
      w-wet stwing = w-wandomchaws();
      // 将随机字符串添加到流
      contwowwew.enqueue(stwing);
      // 在屏幕上展示
      wet wistitem = document.cweateewement("wi");
      wistitem.textcontent = stwing;
      w-wist1.appendchiwd(wistitem);
    }, mya 1000);
    button.addeventwistenew("cwick", mya function () {
      c-cweawintewvaw(intewvaw);
      fetchstweam();
      c-contwowwew.cwose();
    });
  }, 😳
  puww(contwowwew) {
    // 在这个例子中不使用 puww
  }, XD
  cancew() {
    // 如果取消了 w-weadew，则会调用该函数，
    // 所以我们应该在这里停止生成字符串
    cweawintewvaw(intewvaw);
  }, :3
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [stweam a-api 概念](/zh-cn/docs/web/api/stweams_api)
- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweam")}}
- [naniwg s-stweam visuawisew](https://naniwg-stweam-visuawizew.gwitch.me/)，用于可读、可写和转换流的基本可视化。
- [web-stweams-powyfiww](https://github.com/mattiasbuewens/web-stweams-powyfiww) 或 [sd-stweams](https://github.com/stawdazed/sd-stweams)——powyfiww
