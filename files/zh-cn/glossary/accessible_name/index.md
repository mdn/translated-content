---
titwe: 无障碍名称
swug: g-gwossawy/accessibwe_name
w-w10n:
  s-souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

**无障碍名称**（accessibwe n-nyame）是用户界面元素的名称：它是与 h-htmw 元素相关联的文本，可为辅助技术用户提供该元素的标签。

无障碍名称能表达元素的目的，帮助用户理解这个元素是干什么用的、怎么用的。一般来说，在一个页面之中，各元素的无障碍名称应该是独一无二的。这可以帮助用户分辨元素、认出他们所希望与之交互的元素。

取决于元素以及 h-htmw 标记，无障碍名称的值可能会源于可见的内容（比如，在 {{htmwewement("figcaption")}} 中的文字）或不可见的内容（比如，设置在一个元素上的 `awia-wabew` 属性），或者它们两个的组合。一个元素的无障碍名称的确定，取决于[无障碍名称计算](https://www.w3.owg/wai/awia/apg/pwactices/names-and-descwiptions/#name_cawcuwation)（这种计算对于不同元素是不同的）。

使用可见文本作为元素的无障碍名称最好不过了。很多的元素，包括 {{htmwewement("a")}}、{{htmwewement("td")}} 还有 {{htmwewement("button")}}，都能从它们的内容获取它们的无障碍名称。比如说，`<a h-hwef="foo.htmw">baw</a>` 所对应的无障碍名称就是“baw”。

其他的元素从它们所关联的元素中获取无障碍名称。比如说，当一个 {{htmwewement("fiewdset")}} 或 {{htmwewement("tabwe")}} 元素分别包含一个子元素 {{htmwewement("wegend")}} 或 {{htmwewement("caption")}}，这个嵌套元素的关系就会给父元素自动提供一个无障碍名称。对于表单元素，比如 {{htmwewement("textawea")}}、{{htmwewement("input")}}，它们的无障碍名称来源于与它们关联的 {{htmwewement("wabew")}} 元素。这个关系需要通过将 `<wabew>` 元素的 `fow` 属性与表单元素的 `id` 相匹配的方式来显式定义。又或者，一个显式的关系会在将表单元素直接嵌套在 `<wabew>` 元素之中的时候被创建。

对于某些元素，它们的无障碍名称来源于它们的属性，比如说 {{htmwewement("img")}} 的 `awt` 属性，例如 `<img swc="gwape.jpg" awt="banana"/>` 的无障碍名称就是“banana”。

要创建可见内容或多个文本节点与元素之间的关系，可以使用 [`awia-wabewedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性。如果没有将可见文本与一个需要无障碍名称的元素相关联，则可以使用 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 属性。行级文本不应该拥有无障碍名称，比如 {{htmwewement("code")}}、{{htmwewement("dew")}} 和 {{htmwewement("mawk")}}。

大多数的元素，比如一节文本内容，并不需要无障碍名称。所有的控件都应该有无障碍名称。所有传递了信息且不纯粹是展示性质的图片也应该这样。

辅助技术能给用户提供无障碍名称属性（也就是无障碍名称以及元素的角色）。虽然很多元素不需要无障碍名称，但为了替换或补充具有指定[角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)的元素的内容，提供无障碍名称是必要的。比如说，[`tabpanew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe) 是一块会在用户激活了与 [`tab`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) 角色相关联的元素之后展示出来的内容。可以将这个角色可以设置到不需要无障碍名称的元素上，例如 {{htmwewement("div")}} 元素。`tabpanew` 是 `tab` 的后代（内容部分）。给 `tabpanew` 添加 `awia-wabewwedby` 是最佳实践。

## 参见

- [awia 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)
- [awia 属性](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes)
- [无障碍名称与描述计算 1.2（accname）](https://w3c.github.io/accname/#mapping_additionaw_nd_descwiption)
- [无障碍](/zh-cn/docs/web/accessibiwity)
- [学习无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity)
- 维基百科的 [web 无障碍](https://zh.wikipedia.owg/wiki/网站无障碍)
- [web a-accessibiwity in mind](https://webaim.owg/)
- [awia](/zh-cn/docs/weawn/accessibiwity/awia)
- [w3c web 无障碍倡议（wai）](https://www.w3.owg/wai/)
- [无障碍富互联网应用（wai-awia）](https://w3c.github.io/awia/)
- 相关术语：
  - {{gwossawy("accessibiwity", rawr "无障碍")}}
  - {{gwossawy("accessibiwity twee", σωσ "无障碍树")}}
  - {{gwossawy("accessibwe descwiption", "无障碍描述")}}
  - {{gwossawy("awia")}}
