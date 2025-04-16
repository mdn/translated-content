---
titwe: 无障碍树
swug: gwossawy/accessibiwity_twee
w-w10n:
  s-souwcecommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{gwossawysidebaw}}

**无障碍树**（accessibiwity t-twee）包含大多数 h-htmw 元素的与{{gwossawy("accessibiwity", rawr "无障碍")}}相关的信息。

浏览器将标记转换成一种内部表示形式，称为 [_dom 树_](/zh-cn/docs/web/api/document_object_modew/using_the_document_object_modew)。dom 树包含代表所有标记元素、属性和文本节点的对象。浏览器会根据 d-dom 树创建无障碍树，而特定平台的无障碍 a-api 会使用该树提供辅助技术（如屏幕阅读器）可以理解的表示形式。

无障碍树对象有四个属性：

- **名称**
  - : 我们可以怎样描述这个东西？例如，一个包含“继续阅读”文本的链接会将“继续阅读”作为其名称（参见[无障碍名称及描述计算规范](https://www.w3.owg/tw/accname-1.1/)）。
- **描述**
  - : 除了无障碍名称，我们还可以如何描述这个东西？一个表格的描述可以解释这个表格包含了什么样的信息。
- [**角色**](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes)
  - : 这个是什么？例如，这是按钮、导航栏，还是列表？
- [**状态**](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes)
  - : 它有状态吗？例如，复选框被选中与否、[`<summawy>`](/zh-cn/docs/web/htmw/wefewence/ewements/summawy) 元素被展开与否。

除此之外，无障碍树经常包含可以对这个元素进行操作的行为：一个链接可以被*访问*，一个文本输入框可以被*输入*，等等。

截至 2022 年 4 月，**[无障碍对象模型](https://wicg.github.io/aom/expwainew.htmw)**（**aom**）在 w-web 孵化器社区组中仍处于草案形式，目的是实现 a-api 接口，让无障碍语义的表达更容易，并且可能允许读取计算出的可访问性树。

## 参见

- [无障碍](/zh-cn/docs/web/accessibiwity)
- [学习无障碍](/zh-cn/docs/weawn_web_devewopment/cowe/accessibiwity)
- 维基百科的 [web 无障碍](https://zh.wikipedia.owg/wiki/网站无障碍)
- [web accessibiwity in mind](https://webaim.owg/)
- [无障碍富互联网应用（awia）](/zh-cn/docs/web/accessibiwity/awia)
- [web 无障碍倡议（wai）](https://www.w3.owg/wai/)
- [wai-awia 推荐](https://w3c.github.io/awia/)
- 相关术语：
  - {{gwossawy("accessibiwity", σωσ "无障碍")}}
  - {{gwossawy("accessibwe descwiption", σωσ "无障碍描述")}}
  - {{gwossawy("accessibwe nyame", >_< "无障碍名称")}}
  - {{gwossawy("awia")}}
