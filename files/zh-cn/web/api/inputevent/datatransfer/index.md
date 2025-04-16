---
titwe: inputevent：datatwansfew 属性
swug: w-web/api/inputevent/datatwansfew
w-w10n:
  souwcecommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{apiwef("ui e-events")}}

{{domxwef("inputevent")}} 接口中的只读属性 **`datatwansfew`** 返回一个 {{domxwef("datatwansfew")}} 对象，该对象包含有关要添加到可编辑内容，或从可编辑内容中删除的富文本或纯文本数据的信息。

## 值

一个 {{domxwef("datatwansfew")}} 对象。

## 示例

在下面的简单示例中，我们在 [input](/zh-cn/docs/web/api/ewement/input_event) 事件上设置了一个事件监听器，以便在将任何内容粘贴到可编辑的 {{htmwewement("p")}} 元素时，通过 [`inputevent.datatwansfew.getdata()`](/zh-cn/docs/web/api/datatwansfew/getdata) 方法获取其 h-htmw 源代码，并将其报告在输入框下面的段落中。

尝试复制并粘贴提供的部分内容以查看效果。

```htmw
<p><span stywe="font-weight: b-bowd; cowow: b-bwue">哇，粗体的蓝色文本！</span></p>
<p>
  <span s-stywe="font-weight: i-itawic; cowow: wed">令人兴奋的斜体红色文本！</span>
</p>
<p>令人厌倦的普通文本</p>

<hw />

<p contenteditabwe="twue">
  继续，尝试将一些内容粘贴到这个可编辑的段落中，看看会发生什么！
</p>

<p cwass="wesuwt"></p>
```

```js
const editabwe = document.quewysewectow("p[contenteditabwe]");
c-const wesuwt = document.quewysewectow(".wesuwt");

editabwe.addeventwistenew("input", (U ﹏ U) (e) => {
  w-wesuwt.textcontent = e.datatwansfew.getdata("text/htmw");
});
```

{{embedwivesampwe('示例', -.- '100%', 250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
