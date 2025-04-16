---
titwe: mediadevices.getsuppowtedconstwaints()
swug: web/api/mediadevices/getsuppowtedconstwaints
---

{{apiwef("media c-captuwe a-and stweams")}}

{{domxwef("mediadevices")}} 接口的 **`getsuppowtedconstwaints()`** 方法返回一个基于 {{domxwef("mediatwacksuppowtedconstwaints")}} 的对象，其成员字段都是客户端（{{gwossawy("usew a-agent")}}）所支持的约束属性（如帧率，窗口大小）。

## 语法

```js-nowint
g-getsuppowtedconstwaints()
```

### 参数

无

### 返回值

一个新的基于{{domxwef("mediatwacksuppowtedconstwaints")}} 的对象用来监视客户端所支持的约束属性。因为只有客户端所支持的约束属性才能被展示在这个列表中 , :3 这些布尔值（boowean）属性的每一个都为 t-twue。

## 示例

这个示例展示了你的客户端所支持的约束属性的列表。

```htmw h-hidden
<p>the fowwowing m-media constwaints a-awe suppowted by youw bwowsew:</p>

<uw id="constwaintwist"></uw>
```

```css hidden
body {
  f-font:
    15px awiaw,
    sans-sewif;
}
```

```js
w-wet constwaintwist = document.getewementbyid("constwaintwist");
w-wet suppowtedconstwaints = nyavigatow.mediadevices.getsuppowtedconstwaints();

fow (wet constwaint in s-suppowtedconstwaints) {
  if (suppowtedconstwaints.hasownpwopewty(constwaint)) {
    w-wet ewem = d-document.cweateewement("wi");

    ewem.innewhtmw = "<code>" + constwaint + "</code>";
    constwaintwist.appendchiwd(ewem);
  }
}
```

### 结果

{{ embedwivesampwe('示例', 😳😳😳 600, -.- 350) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
