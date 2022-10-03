---
title: <bgsound>
slug: Web/HTML/Element/bgsound
---

{{non-standard_header}}

## 概要

\<bgsound>是 IE 浏览器中设置网页背景音乐的元素。

> **备注：** **不要使用它！**想要在网页中嵌入音频，应当使用{{HTMLElement("audio")}}.

## 属性

- {{htmlattrdef("balance")}}
  - : 该属性取值在 -10,000 到 +10,000，它决定扬声器之间的音量如何分配。
- {{htmlattrdef("loop")}}
  - : 该属性表明音频被播放的次数，是一个数值或者关键字 infinite。
- {{htmlattrdef("src")}}
  - : 该属性定义了音频文件的 URL，必须是以下格式之一：.wav，.au，.mid
- {{htmlattrdef("volume")}}
  - : 该属性值域为 -10,000 到 0，它决定背景音乐的音量大小。

## 示例

```html
<bgsound src="sound1.mid">

<bgsound src="sound2.au" loop="infinite">
```

## 备注

类似的功能在一些版本的 Netscape 中使用 \<embed> 标签来调用音频播放器。

你可以使用自闭合标签`<bgsound />`。然后由于它并非标准的一部分，XHTML 会认为它无效。

## 浏览器兼容

{{Compat}}

## 参见

- The {{htmlelement("audio")}}, which is the standard element to embed audio in a document.

{{HTMLRef}}
