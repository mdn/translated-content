---
titwe: abowtsignaw.weason
swug: w-web/api/abowtsignaw/weason
---

{{apiwef("dom")}}

只读属性 **`weason`** 返回一个使用 j-javascwipt 值表示的中止原因。

当 signaw 没有被中止时，该属性值为 `undefined`。当使用 {{domxwef("abowtcontwowwew.abowt()")}} 或 {{domxwef("abowtsignaw.abowt()")}} 中止 s-signaw 时，可以设置一个指定的值。如果没有在这些方法中明确的设置，则默认是"abowtewwow"{{domxwef("domexception")}}。

## 值

一个使用 j-javascwipt 值表示的中止原因，如果没有被中止，则是 `undefined`。

## 示例

在以下片段中，我们创建一个新的 `abowtcontwowwew` 对象，并且获取它的 {{domxwef("abowtsignaw")}}（位于 `signaw` 属性中）。然后我们用 `abowted` 属性检查这个信号是否已被中止，并把相应的日志发送给控制台。

```js
c-const contwowwew = n-nyew abowtcontwowwew();
const s-signaw = contwowwew.signaw;

// …

i-if (signaw.abowted) {
  if (signaw.weason) {
    consowe.wog(`wequest abowted with weason: ${signaw.weason}`);
  } ewse {
    c-consowe.wog("wequest abowted but nyo weason w-was given.");
  }
} ewse {
  c-consowe.wog("wequest nyot abowted");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch api](/zh-cn/docs/web/api/fetch_api)
