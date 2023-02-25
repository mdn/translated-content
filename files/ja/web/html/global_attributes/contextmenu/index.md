---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}{{Deprecated_Header}}{{Non-standard_header}}

**`contextmenu`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は、当該要素のコンテキストメニューとして使用する {{HTMLElement("menu")}} 要素の [**id**](/ja/docs/Web/HTML/Global_attributes/id) です。

*コンテキストメニュー*は、右クリックなどユーザーの操作によって現れます。 HTML ではこのメニューをカスタマイズできます。以下は入れ子のメニューを含む実装例です。

## 例

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
      この例のどこででも、コンテキストメニューの "share" メニューを使用して
      Twitter や Facebook に、このページを共有できます。
    </li>
    <li contextmenu="changeFont" id="fontSizing">
      このリスト項目で、コンテキストメニューの
      "Increase/Decrease font" を使用してテキストのサイズを変更できます。
    </li>
    <menu type="context" id="changeFont">
      <menuitem label="Increase Font" onclick="incFont()"></menuitem>
      <menuitem label="Decrease Font" onclick="decFont()"></menuitem>
    </menu>
    <li contextmenu="ChangeImage" id="changeImage">
      以下の画像で、コンテキストメニューから "Change Image" の
      アクションを実行できます。<br />
      <img
        src="promobutton_mdn5.png"
        contextmenu="ChangeImage"
        id="promoButton"
        alt="Better CSS Docs for a better web" />
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
      "Hurray! I am learning ContextMenu from MDN via Mozilla"
  );
}

function shareViaFacebook() {
  window.open(
    "https://facebook.com/sharer/sharer.php?u=" +
      "https://developer.mozilla.org/en/HTML/Element/Using_HTML_context_menus"
  );
}

function incFont() {
  document.getElementById("fontSizing").style.fontSize = "larger";
}

function decFont() {
  document.getElementById("fontSizing").style.fontSize = "smaller";
}

function changeImage() {
  const index = Math.ceil(Math.random() * 39 + 1);
  document.images[0].src = `${index}.png`;
}
```

### 結果

{{EmbedLiveSample("Example", "100%", 400)}}

## 仕様書

[contextmenu 属性は廃止され](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu)、すべてのブラウザーから削除される予定です。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contextMenu")}}
