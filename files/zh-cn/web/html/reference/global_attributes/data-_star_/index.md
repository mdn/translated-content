---
title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

**`data-*`** [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)是一类被称为**自定义数据属性**的属性，可以通过脚本在 [HTML](/zh-CN/docs/Web/HTML) 与 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 表示之间进行专有数据的交换。

{{InteractiveExample("HTML Demo: data-*", "tabbed-standard")}}

```html interactive-example
<h1>Secret agents</h1>

<ul>
  <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
  <li data-id="97865">
    Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in
    "Goldeneye".
  </li>
  <li data-id="45732">
    James Bond, 007: The main man; shaken but not stirred.
  </li>
</ul>
```

```css interactive-example
h1 {
  margin: 0;
}

ul {
  margin: 10px 0 0;
}

li {
  position: relative;
  width: 200px;
  padding-bottom: 10px;
}

li:after {
  content: "Data ID: " attr(data-id);
  position: absolute;
  top: -22px;
  left: 10px;
  background: black;
  color: white;
  padding: 2px;
  border: 1px solid #eee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover:after {
  opacity: 1;
}
```

所有这些自定义数据属性都可以通过所属元素的 {{domxref("HTMLElement")}} 接口来访问。{{domxref("HTMLElement.dataset")}} 属性可以访问它们。`*` 可以使用遵循 [XML 名称生产规则](https://www.w3.org/TR/REC-xml/#NT-Name) 的任何名称来被替换，并具有以下限制：

- 该名称不应以 `xml` 开头（不区分大小写），因为它是为未来的 XML 规范保留的。
- 该名称不应包含任何冒号字符（`:`），因为 XML 会赋予此类名称意义。
- 该名称不应包含任何大写字母，因为 XML 都是小写字母。

这些都是建议。如果不遵循这些命名建议，将不会发生错误。属性仍将使用 CSS [属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)进行匹配，属性不区分大小写，任何属性值都区分大小写。不符合这三项建议的属性仍将被 JavaScript {{domxref("HTMLElement.dataset")}} 属性识别，用户代理将把该属性包含在包含 {{domxref("HTMLElement")}} 的所有自定义数据属性的 {{domxref("DOMStringMap")}} 中。

如果计划使用 {{domxref("HTMLElement.dataset")}}，那么属性名中 `data-` 后面的部分只能包含 JavaScript 属性名中允许使用的字符（以及连字符，连字符将被删除）。属性名的 `dataset` 版本会去掉“data-”前缀，并将名称的其余部分从{{Glossary("Kebab_case", "烤串命名法")}}转换为驼峰命名法。例如，`element.getAttribute("data-test")` 等同于 `element.dataset.test`，而 `data-test-abc ` 将以 `HTMLElement.dataset.testAbc`（或 `HTMLElement.dataset["testAbc"]`）的形式访问。避免使用连字符后的非字母字符，如 `data-test-1` 或 `data--test`，因为 {{domxref("HTMLElement.dataset")}} 无法识别这些字符。

### 用法

通过添加 `data-*` 属性，即使是普通的 HTML 元素也能变成相当复杂且强大的编程对象。例如，在游戏里的太空船“[精灵图](https://zh.wikipedia.org/wiki/精灵图)”可以只是带有一个 [`class`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/class) 属性和几个 `data-*` 属性的 {{HTMLElement("img")}} 元素：

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()" />
```

有关使用 HTML 数据属性的更深入的教程，请参阅[使用数据属性](/zh-CN/docs/Web/HTML/How_to/Use_data_attributes)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有的[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)
- {{domxref("HTMLElement.dataset")}} 属性允许访问和修改这些值
- [使用数据属性](/zh-CN/docs/Web/HTML/How_to/Use_data_attributes)
