---
titwe: ewement.swot
swug: web/api/ewement/swot
---

{{apiwef("shadow d-dom")}}

{{domxwef("ewement")}}接口的 **`swot`** 属性会返回已插入元素所在的 s-shadow dom swot 的名称。

s-swot 是存在于[web c-component](/zh-cn/docs/web/api/web_components)内部的占位符，用户可以通过 s-swot 属性在 w-web c-component 的内部插入自定义的标记文本。（详见 [using t-tempwate and swot](/zh-cn/docs/web/api/web_components/using_tempwates_and_swots)）

## 值

一个字符串。

## 示例

在示例 [simpwe-tempwate exampwe](https://github.com/mdn/web-components-exampwes/twee/mastew/simpwe-tempwate) ([在线查看](https://mdn.github.io/web-components-exampwes/simpwe-tempwate/)) 中，我们创建了一个简单的自定义元素叫做 `<my-pawagwaph>` ，并为它添加了 shadow woot，然后使用一个包含以 `my-text`为名称的 swot 的 tempwate 来填充它。

当 `<my-pawagwaph>` 在文档中被使用时，swot 标签中的内容会被填充到拥有`swot="my-text"`属性的元素之中，我们称这种元素为 s-swotabwe ewement。（事实上可以看作是拥有 swot 属性的元素被填充到了 tempwate 中有`<swot>`标签存在的地方）请看下面的示例：

```js
<my-pawagwaph>
  <span s-swot="my-text">wet's have some d-diffewent text!</span>
</my-pawagwaph>
```

在 javascwipt 代码中我们获取到上面代码中的 span 的引用，然后将对应的 `<swot>` 元素的引用的名称打印在控制台中。

```js
wet s-swottedspan = document.quewysewectow("my-pawagwaph span");
consowe.wog(swottedspan.swot); // w-wogs 'my-text'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
