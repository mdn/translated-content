---
title: ピクチャインピクチャ API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

**ピクチャインピクチャ API** (Picture-in-Picutre API) では、ウェブサイトが他のウィンドウの上に常に浮かぶ動画ウィンドウを作成し、ユーザーが他のコンテンツサイトや端末上のアプリケーションを操作しながらメディアを視聴し続けることができます。

## インターフェイス

- {{DOMxRef("PictureInPictureWindow")}}
  - : 浮動動画ウィンドウを表します。これには {{domxref("PictureInPictureWindow/width", "width")}} および {{domxref("PictureInPictureWindow/height", "height")}}、そして {{domxref("PictureInPictureWindow/resize_event", "onresize")}} イベントハンドラープロパティがあります。

## インスタンスメソッド

ピクチャインピクチャ API は、 {{DOMxRef("HTMLVideoElement")}} と {{DOMxRef("Document")}} インターフェイスにメソッドを追加し、浮動動画ウィンドウを切り替えられるようにします。

### HTMLVideoElement インターフェイスのインスタンスメソッド

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
  - : ユーザーエージェントが動画をピクチャインピクチャモードにするようリクエストします。

### Document インターフェイスのインスタンスメソッド

- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : ユーザーエージェントがピクチャインピクチャモードの要素を元のボックスに返すようにリクエストします。

## インスタンスプロパティ

ピクチャインピクチャ API は、{{DOMxRef("HTMLVideoElement")}}、{{DOMxRef("Document")}}、{{DOMxRef("ShadowRoot")}} の各インターフェイスを拡張し、浮動動画ウィンドウモードに対応しているかどうか、利用できるかどうか、ピクチャインピクチャモードが現在有効かどうか、どの動画が浮動しているかを判断するために使用できるプロパティを提供します。

### HTMLVideoElement インターフェイスのインスタンスプロパティ

- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
  - : `disablePictureInPicture` プロパティは、ユーザーエージェントにピクチャインピクチャをユーザーに提案しない、または自動的にリクエストしないようにするヒントを提供します。

### Document インターフェイスのインスタンスプロパティ

- {{DOMxRef("Document.pictureInPictureEnabled")}}
  - : `pictureInPictureEnabled` プロパティはピクチャインピクチャモードが使用可能かどうかを指示します。何らかの理由でピクチャインピクチャモードが利用できない場合（例えば、[`"picture-in-picture"` 機能](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture)が許可されていない、またはピクチャインピクチャモードに対応していない場合）は `false` となります。

### Document または ShadowRoot インターフェイスのインスタンスプロパティ

- {{DOMxRef("Document.pictureInPictureElement")}} / {{DOMxRef("ShadowRoot.pictureInPictureElement")}}
  - : `pictureInPictureElement` プロパティで、浮動ウィンドウ（またはシャドウ DOM）に現在表示されている要素 ({{DOMxRef("Element")}}) を伝えます。これが `null` である場合、文書（またはシャドウ DOM）内には現在ピクチャインピクチャモードになっているノードがありません。

## イベント

_ピクチャインピクチャ API では 3 つのイベントを定義しており、ピクチャインピクチャモードが切り替わったときや、浮動要素であるウィンドウのサイズが変更されたことを検出するために利用できます。_

- {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}}
  - : ピクチャインピクチャモードになったときに {{DOMxRef("HTMLVideoElement")}} に送られます。
- {{domxref("HTMLVideoElement.leavepictureinpicture_event", "leavepictureinpicture")}}
  - : ピクチャインピクチャモードから抜けるときに {{DOMxRef("HTMLVideoElement")}} に送られます。
- {{domxref("PictureInPictureWindow.resize_event", "resize")}}
  - : サイズ変更時に {{DOMxRef("PictureInPictureWindow")}} に送られます。

## コントロールの追加

メディアアクションハンドラーが[メディアセッション API](/ja/docs/Web/API/Media_Session_API) を介して設定されている場合、それらのアクションのための適切なコントロールがブラウザーによってピクチャインピクチャのオーバーレイに追加されます。例えば、 `"nexttrack"` アクションが設定されている場合、ピクチャインピクチャビューにスキップボタンが表示されるかもしれません。独自の HTML ボタンやコントロールを追加するための対応はありません。

## スタイルの制御

[`:picture-in-picture`](/ja/docs/Web/CSS/Reference/Selectors/:picture-in-picture) は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、現在ピクチャインピクチャモードになっている動画要素に一致します。これにより、動画がピクチャインピクチャモードと従来の表示モードを行き来するときに、コンテンツのサイズやスタイル、レイアウトを自動的に調整するようにスタイルシートを設定することができます。

## アクセスの制御

ピクチャインピクチャモードが利用できるかは、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)を使って制御することができます。全画面モード機能は文字列 `"picture-in-picture"` で識別され、既定値の allowlist 値は `"self"` です。これは、ピクチャインピクチャモードが最上位の文書コンテキストで許可されることと、最上位の文書と同じオリジンから読み込まれた入れ子の閲覧コンテキストで許可されることを意味します。

## 例

この例では、ウェブページに動画を表示しています。下記のボタンをクリックすると、ユーザーは浮動動画ウィンドウを切り替えることができます。

{{EmbedGHLiveSample("dom-examples/picture-in-picture/index.html", '100%', 350)}}

### ピクチャインピクチャモードの切り替え

このコードは、ユーザーが "Toggle Picture-in-Picture" ボタンをクリックすると、 click ハンドラーから呼び出されます。

```js
function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  }
}
```

このブロックは {{DOMxRef("Document", "document")}} の `pictureInPictureElement` 属性の値を見ていきます。

値が `null` でない場合、要素が現在ピクチャインピクチャモード、つまり浮動ウィンドウの中にあります。 {{DOMxRef("Document.exitPictureInPicture", "document.exitPictureInPicture()")}} を呼び出すと、動画を最初のボックスに戻ります。

値が `null` の場合、動画は浮動ウィンドウにありません。そこで、動画にピクチャインピクチャモードになるようリクエストします。そのためには、 {{HTMLElement("video")}} 要素で {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}} を呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
