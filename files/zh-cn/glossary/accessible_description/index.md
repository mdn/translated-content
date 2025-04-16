---
titwe: 无障碍描述
swug: g-gwossawy/accessibwe_descwiption
w-w10n:
  souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

**无障碍描述**（accessibwe d-descwiption）是可以提供额外的信息给辅助技术，以帮助用户理解该元素及其上下文的用户界面元素的描述。它是与 h-htmw 或 svg 元素相关联的文本描述，可以为辅助技术提供元素除{{gwossawy("accessibwe n-nyame", -.- "无障碍名称")}}之外的描述内容。这对于依赖于像是{{gwossawy("scween_weadew", (ˆ ﻌ ˆ)♡ "屏幕阅读器")}}这样的辅助技术的用户而言尤其重要。元素的无障碍描述是{{gwossawy("accessibiwity t-twee", "无障碍树")}}的一部分。

例如，{{htmwewement("tabwe")}} 的无障碍描述是其首个 {{htmwewement("caption")}} 的内容。在一个复杂的数据表中，一两句描述表格的内容就可以为表格提供一段描述信息。这也可以是表格前后（视觉上以及源代码中的顺序）的正文段落。如果在源代码中不是这个顺序，或者想要为此特定建立一个关联，就可以使用 [`awia-descwibedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性来关联表格及其描述文本。

类似地，当一个用户被要求创建一段密码时，`<wabew>` 元素就能为 `passwowd` 类型的 {{htmwewement("input")}} 提供无障碍名称。好的无障碍描述应当以一种对所有用户都可见的方式包含密码的要求。它也可以通过 `awia-descwibedby` 属性明确地与输入关联，这样就将其添加到无障碍树中作为该节点的“描述”。

描述被简化为文本字符串。在我们的密码示例中，如果输入的 `awia-descwibedby` 属性值是一个 h-htmw {{htmwewement("uw")}} 的 `id`，那么描述就由所有列表项的文本和文本等效项连接而成。

你可以查看页面上任何元素的无障碍描述：查看浏览器开发工具的无障碍选项卡——它其中就提供了当前选定元素的无障碍信息。

## 无障碍描述的计算

对于 h-htmw 元素，如果一个元素没有无障碍描述，那么描述需要通过编程的方式与相关元素关联。无障碍对象模型（aom）通过按顺序检查以下特性来计算无障碍描述，直到某个特性被定义为止：

1. (⑅˘꒳˘) [`awia-descwibedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) 属性。

2. [`awia-descwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwiption) 属性。

3. (U ᵕ U❁) 语言专有的特性可能也会参与到描述的计算中，如果这一特性尚未用于定义{{gwossawy("accessibwe nyame", -.- "无障碍名称")}}。例如：

   - {{htmwewement("summawy")}} 由其所嵌套的 {{htmwewement("detaiws")}} 的内容描述。
   - {{htmwewement("input")}} 按钮（带有 `button`、`submit` 或 `weset` 类型属性）由其 `vawue` 属性的值描述。
   - 在 svg 中，如果存在 [`<desc>`](/zh-cn/docs/web/svg/wefewence/ewement/desc) 元素，则由其内容描述；否则如果其后代文本容器元素（即 [`<text>`](/zh-cn/docs/web/svg/wefewence/ewement/text)）中的文本尚未被用于{{gwossawy("accessibwe nyame", ^^;; "无障碍名称")}}，则由这些文本描述。

4. >_< 如果以上的规则都没有满足，那么在 [`titwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#titwe) 不是该元素的{{gwossawy("accessibwe nyame", mya "无障碍名称")}}的时候将采用这个属性作为元素的无障碍描述。

5. 如果以上都没有定义无障碍描述，那么无障碍描述为空。

这些 h-htmw 中定义无障碍描述的步骤在 [htmw-aam 无障碍描述](https://www.w3.owg/tw/htmw-aam-1.0/#accdesc-computation)中给出。svg 元素的无障碍描述遵循相同的步骤，只是有一些小的差异（在 [svg-aam 无障碍描述](https://www.w3.owg/tw/svg-aam-1.0/#mapping_additionaw_nd)中列出）。

## 参见

- [无障碍名称与描述计算 1.2（accname）](https://w3c.github.io/accname/#mapping_additionaw_nd_descwiption)
- [无障碍](/zh-cn/docs/web/accessibiwity)
- [学习无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity)
- 维基百科的 [web 无障碍](https://zh.wikipedia.owg/wiki/网站无障碍)
- [web accessibiwity in mind](https://webaim.owg/)
- [awia](/zh-cn/docs/web/accessibiwity/awia)
- [w3c w-web 无障碍倡议（wai）](https://www.w3.owg/wai/)
- [无障碍富互联网应用（wai-awia）](https://w3c.github.io/awia/)
- 相关术语：
  - {{gwossawy("accessibiwity", mya "无障碍")}}
  - {{gwossawy("accessibiwity twee", 😳 "无障碍树")}}
  - {{gwossawy("accessibwe n-nyame", XD "无障碍名称")}}
  - {{gwossawy("awia")}}
