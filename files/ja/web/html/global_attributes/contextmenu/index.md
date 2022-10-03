---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
---

{{HTMLSidebar("Global_attributes")}}

> **警告:** [contextmenu 属性は廃止](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu)されており、今後、すべてのブラウザーから削除される予定です。

**`contextmenu`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は、当該要素のコンテキストメニューとして使用する {{HTMLElement("menu")}} 要素の [**id**](/ja/docs/Web/HTML/Global_attributes/id) です。

*コンテキストメニュー*は、右クリックなどユーザーの操作によって現れます。 HTML5 ではこのメニューをカスタマイズできます。以下は入れ子のメニューを含む実装例です。

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
      <img src="promobutton_mdn5.png"
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

### 表示結果

{{EmbedLiveSample("Example", "100%", 400)}}

## 仕様書

| 仕様書                                                                                                       | 状態                         | 備考                                                                    |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------------------------- |
| {{SpecName("HTML5.1", "interactive-elements.html#context-menus", "contextmenu")}} | {{Spec2("HTML5.1")}} | {{SpecName("HTML WHATWG")}} のスナップショットであり、初回定義 |

## ブラウザーの互換性

{{Compat("html.global_attributes.contextmenu")}}

\[1] コマンドラインオプション `--enable-blink-features=ContextMenu` を使用して、実験的な実装を使用できます。 Chrome 52 および Opera 39 までは*試験運用版のウェブプラットフォームの機能*フラグでも有効化できましたが、[ウェブ互換性の問題](https://bugs.chromium.org/p/chromium/issues/detail?id=412945) のために削除されました。この機能の対応は [Chrome bug 87553](https://bugs.chromium.org/p/chromium/issues/detail?id=87553) で要望されています。

\[2] Firefox モバイルから `contextmenu` 属性の対応が削除されました ({{bug(1424252)}})。

## 関連情報

- すべての [グローバル属性](/ja/docs/Web/HTML/Global_attributes)。
- {{domxref("HTMLElement.contextMenu")}}
