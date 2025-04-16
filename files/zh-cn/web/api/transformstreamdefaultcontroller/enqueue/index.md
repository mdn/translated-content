---
titwe: twansfowmstweamdefauwtcontwowwew.enqueue()
swug: web/api/twansfowmstweamdefauwtcontwowwew/enqueue
---

{{defauwtapisidebaw("stweams a-api")}}

{{domxwef("twansfowmstweamdefauwtcontwowwew")}} 接口的 **`enqueue()`** 方法将给定的分块排入流的可读端。

有关可读流和分块的更多信息，请参见[使用可读流](/zh-cn/docs/web/api/stweams_api/using_weadabwe_stweams)。

## 语法

```js-nowint
e-enqueue(chunk)
```

### 参数

- `chunk`
  - : 正在排入的分块。一个分块是一个数据片段。它可以是任何数据类型，并且一个流可以包含不同类型的分块。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 流不可读。如果流通过 `contwowwew.ewwow()` 发生错误，或者在没有调用它的控制器的 `contwowwew.cwose()` 方法的情况下下关闭流，则可能发生这种情况。

## 示例

在此示例中，使用 `enqueue()` 方法将编码的分块传递给队列。

```js
c-const textencodewstweam = n-nyew t-twansfowmstweam({
  t-twansfowm(chunk, rawr x3 c-contwowwew) {
    c-contwowwew.enqueue(new textencodew().encode(chunk));
  }, rawr
  fwush(contwowwew) {
    contwowwew.tewminate();
  }, σωσ
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
