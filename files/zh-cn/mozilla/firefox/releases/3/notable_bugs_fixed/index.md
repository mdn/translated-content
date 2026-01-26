---
title: Firefox 3 中修复的重要错误
slug: Mozilla/Firefox/Releases/3/Notable_bugs_fixed
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

本文列出了 Firefox 3 提供的一些重要错误修复，这些修复在文档中可能并不明显。

- 如果解析覆盖时发生错误，则不会应用该覆盖。解析错误会记录到错误控制台。（[Firefox 错误 335755](https://bugzil.la/335755)）
- 修复了 `<menupopup>` 元素可以放置在绑定内（当附加到菜单或类似菜单的元素时）的问题。（[Firefox 错误 345896](https://bugzil.la/345896)）
- 按钮的 `dlgType` 属性现在可以正常运作。（[Firefox 错误 308591](https://bugzil.la/308591)）
- {{ Domxref("event.initEvent") }} 的 `canBubble` 参数现在可以正常运作，因此可以触发不冒泡的事件。（[Firefox 错误 330190](https://bugzil.la/330190)）
- `DOMAttrModified` 事件现在可以正确处理命名空间属性。（[Firefox 错误 362391](https://bugzil.la/362391)）
- XML 处理指令（如 `<?xml-stylesheet ?>`）现在已添加到 XUL 文档的 DOM 中。这意味着 {{ Domxref("Node.firstChild", "document.firstChild") }} 不再保证是根元素，应改用 {{ Domxref("document.documentElement") }}。此外，`<?xml-stylesheet ?>` 和 `<?xul-overlay ?>` 处理指令现在在文档 prolog 之外无效。（[Firefox 错误 319654](https://bugzil.la/319654)）
- 已向 XUL 元素和文档添加 [`getElementsByAttributeNS()`](https://web.archive.org/web/20201210015651/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Method/getElementsByAttributeNS) 函数。（[Firefox 错误 239976](https://bugzil.la/239976))
- 在从 XUL 文档移动或移除元素时，事件监听器得以保留。（[Firefox 错误 286619](https://bugzil.la/286619)）
- 现在非显示文档也会触发突变事件。（[Firefox 错误 201236](https://bugzil.la/201236)）
- 修复了元素绘制顺序错误的各种问题。（[Firefox 错误 317375](https://bugzil.la/317375)）
- 修复了 [`getElementsByTagName()`](/zh-CN/docs/Web/API/Element/getElementsByTagName)，使其在标签名包含命名空间前缀的子树上也能正常运作。（[Firefox 错误 206053](https://bugzil.la/206053)）
- `DOMNodeInserted` 和 `DOMNodeRemoved` 事件现在可以正确应用于正确的节点。（[Firefox 错误 367164](https://bugzil.la/367164)）
- 正则表达式中的特殊字符之一 `\d` 已修复，现将仅匹配基本拉丁字母数字（等同于 `[0-9]`）。（[Firefox 错误 378738](https://bugzil.la/378738)）
- 图像嗅探服务类别允许以扩展形式实现的图像解码器正确解码发送时 MIME 类型错误的图像。（[Firefox 错误 391667](https://bugzil.la/391667)）
- 默认情况下，右键单击表单控件不会再弹出上下文菜单。（[Firefox 错误 404536](https://bugzil.la/404536))。参见[为表单控件提供上下文菜单](https://web.archive.org/web/20210612231358/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Offering_a_context_menu_for_form_controls)以了解如何逐个启用此功能。

### 参见

- [Firefox 3 的开发者说明](/zh-CN/docs/Mozilla/Firefox/Releases/3)
