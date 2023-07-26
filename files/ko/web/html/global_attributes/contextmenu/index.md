---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
---

{{HTMLSidebar("Global_attributes")}}

> **경고:** [contextmenu 특성은 폐기되었으며](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu), 모든 브라우저에서 제거될 것입니다.

**`contextmenu`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 이 요소의 컨텍스트 메뉴로 사용될 {{HTMLElement("menu")}}의 [`id`](/ko/docs/Web/HTML/Global_attributes/id)입니다.

컨텍스트 메뉴는 마우스의 우클릭(right-click)과 같은 사용자 상호작용 중에 나타나는 메뉴를 말합니다. HTML5에서는 이 메뉴를 커스터마이징할 수 있습니다. 다음은 계층 메뉴(nested menu)를 포함한 구현 예제입니다.

## Example

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
      Anywhere in the example you can share the page on Twitter and
      Facebook using the Share menu from your context menu.
    </li>
    <li contextmenu="changeFont" id="fontSizing">
      On this specific list element, you can change the size of the text
      by using the "Increase/Decrease font" actions from your context menu
    </li>
    <menu type="context" id="changeFont">
      <menuitem label="Increase Font" onclick="incFont()"></menuitem>
      <menuitem label="Decrease Font" onclick="decFont()"></menuitem>
    </menu>
    <li contextmenu="ChangeImage" id="changeImage">
      On the image below, you can fire the "Change Image" action
      in your Context Menu.<br />
      <img src="https://developer.mozilla.org/media/img/promote/promobutton_mdn5.png"
          contextmenu="ChangeImage" id="promoButton" />
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
  window.open("https://twitter.com/intent/tweet?text=" +
      "Hurray! I am learning ContextMenu from MDN via Mozilla");
}

function shareViaFacebook() {
  window.open("https://facebook.com/sharer/sharer.php?u=" +
      "https://developer.mozilla.org/en/HTML/Element/Using_HTML_context_menus");
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
      index + ".png";
}
```

### Result

{{EmbedLiveSample("Example", "100%", 400)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

\[1] An experimental implementation was originally available via the command line option `--enable-blink-features=ContextMenu`. Until Chrome 52 and Opera 39 it was additionally available by enabling the _Experimental Web Platform features_ option, but got removed from that due to a [Web compatibility issue](https://bugs.chromium.org/p/chromium/issues/detail?id=412945). In June 2017, it was removed entirely from the browsers. This is documented in [Chrome bug 87553](https://bugs.chromium.org/p/chromium/issues/detail?id=87553).

\[2] Support for the `contextmenu` attribute has been removed from Firefox Mobile ([Firefox bug 1424252](https://bugzil.la/1424252)).

## See also

- All [global attributes](/ko/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contextMenu")}}
