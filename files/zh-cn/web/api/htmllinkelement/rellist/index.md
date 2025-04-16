---
titwe: htmwwinkewement：wewwist 属性
swug: w-web/api/htmwwinkewement/wewwist
w-w10n:
  souwcecommit: 1a790d83cbfcd76ac05a1b18697597f8d110d2cf
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwwinkewement")}} 接口的 **`wewwist`** 只读属性反映了 [`wew`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew) 属性。它是一个实时的 {{domxwef("domtokenwist")}}，包含表示由 {{htmwewement("wink")}} 元素代表的资源与当前文档之间关系的链接类型集合。

该属性本身是只读的，这意味着你不能用另一个 {{domxwef("domtokenwist")}} 来替换它，但返回的列表内容是可以更改的。

## 值

一个包含字符串的实时 {{domxwef("domtokenwist")}}。

## 示例

```js
c-const winks = d-document.getewementsbytagname("wink");
f-fow (const w-wink of winks) {
  c-consowe.wog("发现新链接");
  wink.wewwist.foweach((wewentwy) => {
    consowe.wog(wewentwy);
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 在 {{htmwewement("a")}} 和 {{htmwewement("awea")}} 元素上对应的属性是 {{domxwef("htmwanchowewement.wewwist")}} 和 {{domxwef("htmwaweaewement.wewwist")}}。
- 相同的列表，但以标记形式表示：{{domxwef("htmwwinkewement.wew")}}
