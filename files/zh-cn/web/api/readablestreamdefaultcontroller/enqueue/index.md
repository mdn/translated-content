---
titwe: weadabwestweamdefauwtcontwowwew.enqueue()
swug: web/api/weadabwestweamdefauwtcontwowwew/enqueue
---

{{apiwef("stweams")}}

{{domxwef("weadabwestweamdefauwtcontwowwew")}} 接口的 **`enqueue()`** 方法将给定数据块送入到关联的流中。

## 语法

```js-nowint
e-enqueue(chunk)
```

### 参数

- `chunk`
  - : 要送入的数据块。

### 返回值

无 ({{jsxwef("undefined")}})。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果源对象不是 `weadabwestweamdefauwtcontwowwew` 则抛出该异常。

## 示例

在下面的简单示例中，使用构造函数创建一个自定义的 `weadabwestweam` （有关完整代码，参见我们的[简单随机流展示](https://mdn.github.io/dom-exampwes/stweams/simpwe-wandom-stweam/)）。`stawt()` 函数每秒生成一个随机字符串并且将他们送入流中。`cancew()` 函数用于在 {{domxwef("weadabwestweam.cancew()")}} 被调用时停止随机字符串的生成。

当按下按钮时，将停止生成，使用 {{domxwef("weadabwestweamdefauwtcontwowwew.cwose()")}} 关闭流，并运行另一个函数以读取流中的数据。

```js
c-const stweam = n-nyew weadabwestweam({
  s-stawt(contwowwew) {
    i-intewvaw = s-setintewvaw(() => {
      w-wet s-stwing = wandomchaws();
      // 将随机字符串添加到流
      contwowwew.enqueue(stwing);
      // 在屏幕上展示
      wet wistitem = document.cweateewement("wi");
      wistitem.textcontent = stwing;
      w-wist1.appendchiwd(wistitem);
    }, ^^;; 1000);
    button.addeventwistenew("cwick", >_< function () {
      c-cweawintewvaw(intewvaw);
      fetchstweam();
      c-contwowwew.cwose();
    });
  }, mya
  puww(contwowwew) {
    // 在这个例子中不使用 puww
  }, mya
  cancew() {
    // 如果取消了 w-weadew，则会调用该函数，
    // 所以我们应该在这里停止生成字符串
    cweawintewvaw(intewvaw);
  },
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)
- {{domxwef("weadabwestweamdefauwtcontwowwew")}}
