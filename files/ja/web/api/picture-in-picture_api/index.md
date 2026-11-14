---
title: ピクチャインピクチャ API
slug: Web/API/Picture-in-Picture_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("Picture-in-Picture API")}}

**ピクチャインピクチャ API** (Picture-in-Picture API) を使用すると、ウェブサイトは常に最前面に表示される浮動動画ウィンドウを作成できます。
これにより、ユーザーは端末上の他のサイトやアプリケーションを操作しながら、メディアを視聴し続けることができます。

> [!NOTE]
> {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}} イベントを使用すると、最前面のウィンドウがプログラムによって開かれたときにコードを実行できます。ただし、コードではなくブラウザー自体がコンテンツを最前面のウィンドウに移動した場合、このイベントは発生しません。例えば、コンテンツが他の要素に覆われた場合、表示中のタブが切り替えられた場合、またはユーザーが動画のコンテキストメニューやブラウザーの UI から「ピクチャインピクチャ」オプションを選択した場合などです。
>
> このような操作に応じてコードを実行するには、`type` を `enterpictureinpicture` にして {{domxref("MediaSession.setActionHandler()")}} を使用し、メディアセッションのアクションハンドラーを設定してください。

> [!NOTE]
> [文書ピクチャインピクチャ API](/ja/docs/Web/API/Document_Picture-in-Picture_API) は、動画だけでなく任意の HTML コンテンツを最前面のウィンドウに表示できるように、ピクチャインピクチャ API を拡張します。

## 概念と使い方

動画をウェブサイトとは別のウィンドウで再生すると、関連するアプリのコンテンツを表示したまま視聴を続けたり、別のウェブサイトを表示したりできるため便利な場合があります。
通常の新しいブラウザーウィンドウを開いて実現することもできますが、次の 2 つの大きな問題があります。

1. 2 つのウィンドウ間で状態情報を共有する処理が必要です。
2. 追加のアプリウィンドウは常に最前面に表示されるとは限らず、他のウィンドウに隠れることがあります。

`<video>` 向けの Picture-in-Picture API は、単一の {{htmlelement("video")}} 要素を別の最前面ウィンドウに表示する処理の複雑さの大部分を管理し、これらの問題を解決します。

### コントロールの追加

[メディアセッション API](/ja/docs/Web/API/Media_Session_API) を介してメディアアクションハンドラーが設定されている場合、それらのアクションに対応するコントロールがブラウザーによってピクチャインピクチャのオーバーレイに追加されます。例えば、`"nexttrack"` アクションが設定されている場合、ピクチャインピクチャ表示にスキップボタンが表示されることがあります。独自の HTML ボタンやコントロールを追加することには対応していません。

### スタイルの制御

{{cssxref(":picture-in-picture")}} は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、現在ピクチャインピクチャモードになっている動画要素に一致します。動画がピクチャインピクチャモードと従来の表示モードを行き来するときに、コンテンツのサイズ、スタイル、レイアウトを自動的に調整するよう、スタイルシートを設定できます。

## インターフェイス

- {{DOMxRef("PictureInPictureWindow")}}
  - : 浮動動画ウィンドウを表します。これには {{domxref("PictureInPictureWindow/width", "width")}} および {{domxref("PictureInPictureWindow/height", "height")}}、そして {{domxref("PictureInPictureWindow/resize_event", "onresize")}} イベントハンドラープロパティがあります。
- {{DOMxRef("PictureInPictureEvent")}}
  - : {{domxref("HTMLVideoElement/enterpictureinpicture_event", "enterpictureinpicture")}}、{{domxref("HTMLVideoElement/leavepictureinpicture_event", "leavepictureinpicture")}}、{{domxref("PictureInPictureWindow/resize_event", "resize")}} など、ピクチャインピクチャに関連するイベントを表します。

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
  - : `pictureInPictureEnabled` プロパティはピクチャインピクチャモードが利用可能かどうかを示します。何らかの理由でピクチャインピクチャモードが利用できない場合（例えば、[`"picture-in-picture"` 機能](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture)が許可されていない、またはピクチャインピクチャモードに対応していない場合）は `false` になります。

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

## セキュリティ上の注意事項

ピクチャインピクチャモードの利用可否は、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)で制御できます。ピクチャインピクチャモード機能は文字列 `"picture-in-picture"` で識別され、デフォルトの許可リスト値は `*` です。つまり、ピクチャインピクチャモードは最上位の文書コンテキストと、最上位の文書と同じオリジンから読み込まれた入れ子の閲覧コンテキストで許可されます。

## 例

### ピクチャインピクチャモードの切り替え

この例では、ウェブページに {{HTMLElement("video")}} 要素、ピクチャインピクチャを切り替える {{HTMLElement("button")}} 要素、および例に関する情報を記録する要素を配置します。
ブラウザーの対応状況が判明するまでは、{{HTMLElement("button")}} 要素は初期状態で `disabled` です。

```html
<video
  src="/shared-assets/videos/friday.mp4"
  id="video"
  muted
  controls
  loop
  width="300"></video>

<button id="pip-button" disabled>PiP を切り替え</button>
<pre id="log"></pre>
```

```css hidden
body {
  font:
    14px "Open Sans",
    sans-serif;
  padding: 0.5em;
}

button {
  display: block;
  margin-block: 1rem;
}
```

まず、`document.pictureInPictureEnabled` でブラウザーが PiP に対応しているかを確認します。対応していない場合、その情報を `<pre>` 要素に記録します。
ブラウザーが対応している場合、PiP モードを開始および終了する切り替え操作を有効にできます。

コントロールでは、{{HTMLElement("button")}} 要素のイベントリスナーが、定義済みの `togglePictureInPicture()` 関数を呼び出します。
`togglePictureInPicture()` 内の `if` 文は、{{DOMxRef("Document", "document")}} の `pictureInPictureElement` 属性の値を確認します。

- 値が `null` の場合、浮動ウィンドウに動画は表示されていないため、動画をピクチャインピクチャモードにするようリクエストできます。
  {{HTMLElement("video")}} 要素で {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}} を呼び出します。
- 値が `null` でない場合、現在ある要素がピクチャインピクチャモードになっています。
  {{DOMxRef("Document.exitPictureInPicture", "document.exitPictureInPicture()")}} を呼び出すと、動画を元のボックスに戻し、ピクチャインピクチャモードを終了できます。

```js
const video = document.getElementById("video");
const pipButton = document.getElementById("pip-button");
const log = document.getElementById("log");

if (document.pictureInPictureEnabled) {
  pipButton.removeAttribute("disabled");
} else {
  log.innerText =
    "PiP は対応していません。詳細はブラウザーの互換性を確認してください。";
}

function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
}

pipButton.addEventListener("click", togglePictureInPicture);
```

```css
:picture-in-picture {
  outline: 5px dashed green;
}
```

「PiP を切り替え」ボタンをクリックすると、ページ内で動画を再生する状態と、浮動ウィンドウで再生する状態を切り替えられます。

{{embedlivesample("toggling_picture-in-picture_mode", , "350")}}

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
- [文書ピクチャインピクチャ API](/ja/docs/Web/API/Document_Picture-in-Picture_API)
