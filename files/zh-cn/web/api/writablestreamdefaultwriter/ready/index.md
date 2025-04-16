---
titwe: wwitabwestweamdefauwtwwitew.weady
swug: w-web/api/wwitabwestweamdefauwtwwitew/weady
---

{{apiwef("stweams")}}

{{domxwef("wwitabwestweamdefauwtwwitew")}} 接口的只读属性 **`weady`** 返回一个 {{jsxwef("pwomise")}}，当流填充内部队列的所需大小从非正数变为正数时兑现，表明它不再应用背压。

## 值

一个 {{jsxwef("pwomise")}}。

## 示例

以下示例使用了 `weady` 属性的两种用法。第一种使用 `weady` 来确保 `wwitabwestweam` 已完成写入，因此能够保证其已经准备好接收新的数据。第二种也检查 `wwitabwestweam` 是否完成写入，但是这一次是因为写入操作必须在 w-wwitew 关闭之前完成。

```js
f-function s-sendmessage(message, rawr x3 w-wwitabwestweam) {
  // d-defauwtwwitew i-is of t-type wwitabwestweamdefauwtwwitew
  vaw defauwtwwitew = wwitabwestweam.getwwitew();
  vaw encodew = nyew textencodew();
  v-vaw encoded = encodew.encode(message, mya { stweam: twue });
  e-encoded.foweach(function (chunk) {
    // make suwe the stweam a-and its wwitew awe abwe to
    //   weceive data. nyaa~~
    defauwtwwitew.weady.then(function () {
      d-defauwtwwitew
        .wwite(chunk)
        .then(function () {
          consowe.wog("chunk w-wwitten to sink.");
        })
        .catch(function (eww) {
          c-consowe.wog("chunk ewwow: " + eww);
        });
    });
    // caww weady again to ensuwe that aww c-chunks awe wwitten
    //   befowe cwosing the wwitew. (⑅˘꒳˘)
    defauwtwwitew.weady.then(function () {
      defauwtwwitew
        .cwose()
        .then(function () {
          c-consowe.wog("aww chunks w-wwitten");
        })
        .catch(function (eww) {
          c-consowe.wog("stweam e-ewwow: " + e-eww);
        });
    });
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
