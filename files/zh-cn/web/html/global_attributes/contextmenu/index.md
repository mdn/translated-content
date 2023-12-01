---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
---

{{HTMLSidebar("Global_attributes")}}

> **警告：** [contextmenu](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu) 属性已经过时，将从所有浏览器中删除。

**`contextmenu`** [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)是指用于某个元素的“上下文菜单”的{{HTMLElement("menu")}}的[ID](/zh-CN/docs/Web/HTML/Global_attributes/id)属性。上下文菜单是指在用户交互（例如右键点击）时出现的菜单。HTML5 允许我们自定义此菜单。这里有一些实现示例，包括嵌套菜单。

## 示例

### HTML

```html
<body contextmenu="share">
  <menu type="context" id="share">
    <menu label="share">
      <menuitem label="Twitter" onclick="shareViaTwitter()"></menuitem>
      <menuitem label="Facebook" onclick="shareViaFacebook()"></menuitem>
    </menu>
  </menu>
  <ol>
    <li>
      Anywhere in the example you can share the page on Twitter and Facebook
      using the Share menu from your context menu.
    </li>
    <li contextmenu="changeFont" id="fontSizing">
      On this specific list element, you can change the size of the text by
      using the "Increase/Decrease font" actions from your context menu
    </li>
    <menu type="context" id="changeFont">
      <menuitem label="Increase Font" onclick="incFont()"></menuitem>
      <menuitem label="Decrease Font" onclick="decFont()"></menuitem>
    </menu>
    <li contextmenu="ChangeImage" id="changeImage">
      On the image below, you can fire the "Change Image" action in your Context
      Menu.<br />
      <img
        src="https://developer.mozilla.org/media/img/promote/promobutton_mdn5.png"
        contextmenu="ChangeImage"
        id="promoButton" />
      <menu type="context" id="ChangeImage">
        <menuitem label="Change Image" onclick="changeImage()"></menuitem>
      </menu>
    </li>
  </ol>
</body>
```

### JavaScript

```js
function shareViaTwitter() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      "Hurray! I am learning ContextMenu from MDN via Mozilla",
  );
}

function shareViaFacebook() {
  window.open(
    "https://facebook.com/sharer/sharer.php?u=" +
      "https://developer.mozilla.org/en/HTML/Element/Using_HTML_context_menus",
  );
}

function incFont() {
  document.getElementById("fontSizing").style.fontSize = "larger";
}

function decFont() {
  document.getElementById("fontSizing").style.fontSize = "smaller";
}

function changeImage() {
  var index = Math.ceil(Math.random() * 39 + 1);
  document.images[0].src =
    "https://developer.mozilla.org/media/img/promote/promobutton_mdn" +
    index +
    ".png";
}
```

### 结果

{{EmbedLiveSample('示例', "100%", 400)}}

## 规范

[contextmenu](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu) 属性已经过时，将从所有浏览器中删除。

## 浏览器兼容性

{{Compat}}

## 参见

- All [global attributes](/zh-CN/docs/Web/HTML/Global_attributes)
