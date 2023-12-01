---
title: data-*
slug: Web/HTML/Global_attributes/data-*
---

{{HTMLSidebar("Global_attributes")}}

**data-\*** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes) 是一类被称为**自定义数据属性**的属性，它赋予我们在所有 HTML 元素上嵌入自定义数据属性的能力，并可以通过脚本在 [HTML](/zh-CN/docs/Web/HTML) 与 [DOM](/zh-CN/docs/Web/API/Document_Object_Model) 表现之间进行专有数据的交换。

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

所有这些自定义数据属性都可以通过所属元素的 {{domxref("HTMLElement")}} 接口来访问。 {{domxref("HTMLElement.dataset")}} 属性可以访问它们。 `*` 可以使用遵循 [xml 名称生产规则](http://www.w3.org/TR/REC-xml/#NT-Name) 的任何名称来被替换，并具有以下限制：

- 该名称不能以`xml`开头，无论这些字母是大写还是小写；
- 该名称不能包含任何分号 (`U+003A`)；
- 该名称不能包含 A 至 Z 的大写字母。

注意，{{domxref("HTMLElement.dataset")}} 属性是一个{{domxref("DOMStringMap")}}，并且自定义数据属性 _data-test-value_ 可以通过 `HTMLElement.dataset.testValue` ( 或者是 `HTMLElement.dataset["testValue"]`) 来访问，任何破折号 (`U+002D`) 都会被下个字母的大写替代 (驼峰拼写)。

### 用法

通过添加 **data-\*** 属性，即使是普通的 HTML 元素也能变成相当复杂且强大的编程对象。例如，在游戏里的太空船 "[sprite](https://en.wikipedia.org/wiki/Sprite_%28computer_graphics%29)" 可以是一个带有一个 [class](/zh-CN/docs/Web/HTML/Global_attributes/class) 属性和几个 data-\* 属性的简单 {{HTMLElement("img")}} 元素：

```plain
<img class="spaceship cruiserX3" src="shipX3.png"
  data-ship-id="324" data-weapons="laserI laserII" data-shields="72%"
  data-x="414354" data-y="85160" data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()">
</img>
```

有关使用 HTML 数据属性的更深入的教程，请参阅[使用数据属性](/zh-CN/docs/Learn/HTML/Howto/Use_data_attributes)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

相关链接

- 所有的[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.dataset")}} 属性允许访问和修改这些值
- [使用数据属性](/zh-CN/docs/Learn/HTML/Howto/Use_data_attributes)
