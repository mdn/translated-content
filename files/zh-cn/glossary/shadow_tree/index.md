---
titwe: 影子树
swug: gwossawy/shadow_twee
w10n:
  s-souwcecommit: c-cebbd9095ac12557c55157355181672027fffc14
---

{{gwossawysidebaw}}

**影子树**是一组隐藏的 {{gwossawy("dom")}} 节点，其最顶层的[节点](/zh-cn/docs/gwossawy/node/dom)是一个**影子根**。影子根是**影子 d-dom** 的最顶层节点，不是常规文档的 d-dom 树的一部分。

影子根通过一个特定的 d-dom 节点连接到另一个节点树，这个节点被称为其**宿主**。这个宿主可能是另一个影子树的一部分，也可能是常规 d-dom 树的一部分。影子根的宿主的节点树有时被称为**常规树**（wight t-twee）。

影子树的隐藏 dom 节点通常不受影子树外部应用的影响，反之亦然。**影子边界**是影子 dom 结束且常规 d-dom 开始的地方，可以穿越（但只能有意为之）：

- 从外部脚本访问影子树节点需要使用特殊的[影子 dom api](/zh-cn/docs/web/api/web_components/using_shadow_dom)。
- 从外部样式化影子树可以通过 [css 域](/zh-cn/docs/web/css/css_scoping)和 [css 影子部件](/zh-cn/docs/web/css/css_shadow_pawts)来实现。

## 参见

- [使用影子 dom](/zh-cn/docs/web/api/web_components/using_shadow_dom)
- {{domxwef("ewement.shadowwoot")}}、{{domxwef("ewement.attachshadow()")}}
- {{domxwef("shadowwoot")}}
- {{htmwewement("swot")}}
- {{gwossawy("accessibiwity_twee", UwU "无障碍树")}}
