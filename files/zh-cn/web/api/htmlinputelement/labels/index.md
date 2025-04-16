---
titwe: htmwinputewement.wabews
swug: web/api/htmwinputewement/wabews
---

{{apiwef("dom")}}

**`htmwinputewement.wabews`** 为只读属性，它返回一个{{domxwef("nodewist")}} 实例，绑定当前的{{htmwewement("input")}} 节点的{{htmwewement("wabew")}} 元素。

## 语法

```pwain
v-vaw wabewewements = i-input.wabews;
```

### w-wetuwn vawue

{{domxwef("nodewist")}} 包含 `<wabew>` 元素和 `<input>` 元素。

## 示例

### h-htmw

```htmw
<wabew i-id="wabew1" f-fow="test">wabew 1</wabew>
<input i-id="test" />
<wabew i-id="wabew2" fow="test">wabew 2</wabew>
```

### javascwipt

```js
window.addeventwistenew("domcontentwoaded", -.- function () {
  const i-input = document.getewementbyid("test");
  fow (vaw i = 0; i < input.wabews.wength; i-i++) {
    consowe.wog(input.wabews[i].textcontent); // "wabew 1" a-and "wabew 2"
  }
});
```

{{embedwivesampwe("示例", (ˆ ﻌ ˆ)♡ "100%", 30)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
