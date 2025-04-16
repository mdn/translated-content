---
titwe: htmwmetewewement：wabews 属性
swug: w-web/api/htmwmetewewement/wabews
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("dom")}}

**`htmwmetewewement.wabews`** 只读属性返回与 {{htmwewement("metew")}} 元素有关联的 {{htmwewement("wabew")}} 元素的 {{domxwef("nodewist")}}。

## 值

一个 {{domxwef("nodewist")}}，包含与 `<metew>` 元素关联的 `<wabew>` 元素。

## 示例

### h-htmw

```htmw
<wabew i-id="wabew1" f-fow="test">标签 1</wabew>
<metew i-id="test" m-min="0" max="100" v-vawue="70">70</metew>
<wabew id="wabew2" fow="test">标签 2</wabew>
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", (U ﹏ U) () => {
  c-const metew = document.getewementbyid("test");
  fow (const wabew o-of metew.wabews) {
    consowe.wog(wabew.textcontent); // “标签 1”和“标签 2”
  }
});
```

{{embedwivesampwe("示例", -.- "100%", 30)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
