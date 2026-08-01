---
title: 仮想キーボード API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

仮想キーボード API は、タブレットや携帯電話など、ハードウェアキーボードが搭載されていない端末において、画面上に仮想キーボードが現れたり非表示になったりした際のアプリケーションのレイアウトを、開発者が制御できる手段を提供します。

ウェブブラウザーは通常、仮想キーボードへの対応を、ビューポートの高さを調整したり、フォーカスが当たった際に入力フィールドまでスクロールしたりすることで自動的に行います。

次の図は、端末の画面上の仮想キーボードが非表示の場合と表示されている場合における、ウェブページのビューポートの高さとスクロール位置の違いを示しています。

![2 つの端末があります。1 つは仮想キーボードがついておらず、ウェブページが端末の縦方向の空間の大部分を使用することができることを示しており、もう 1 つは仮想キーボードがついており、ウェブページは残りの空間にしか表示させることができないことを示しています。](viewport-height.png)

より複雑なアプリケーションや、マルチスクリーン対応の携帯電話などの特殊な端末では、仮想キーボードが現れた際のレイアウトをより細かく制御することが必要となることがあります。

次の図は、デュアルスクリーン端末において、2 つの画面のうち 1 つだけに仮想キーボードが現れた場合の状況を示しています。仮想キーボードを表示させるために、両方の画面のビューポートが縮小され、仮想キーボードが表示されていない画面には無駄な空間が残ってしまいます。

![デュアルスクリーン端末で、一方の画面に仮想キーボードが表示されている場合、もう一方の画面に空きスペースが残ってしまっても、ウェブページはキーボードが表示された後に残った縦方向のスペースしか使用できないことがわかる](dual-screen.png)

仮想キーボード API は、ブラウザーによる仮想キーボードの自動処理を無効にし、代わりにそれを完全に制御するために使用できます。仮想キーボード API を使用しても、フォームコントロールにフォーカスが当たった際に必要に応じてキーボードは現れたり非表示になったりしますが、ビューポートは変化しないため、JavaScript や CSS を使用してレイアウトを調整することができます。

## 概要

VirtualKeyboard API は、以下の 3 つの部分で構成されています。

- {{domxref("VirtualKeyboard")}} インターフェイス。これは {{domxref("navigator.virtualKeyboard")}} からアクセスでき、仮想キーボードの自動表示機能を無効にしたり、プログラムから仮想キーボードを表示・非表示にしたり、仮想キーボードの現在の位置やサイズを取得したりするために使用します。
- CSS の `keyboard-inset-*` 環境変数は、仮想キーボードの位置やサイズに関する情報を提供します。
[`virtualkeyboardpolicy`](/ja/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) 属性は、`contenteditable` 要素に仮想キーボードが現れるかどうかを指定します。

### 仮想キーボードの自動動作を無効にする

ブラウザーの仮想キーボードの自動動作を無効にするには、`navigator.virtualKeyboard.overlaysContent = true` を使用してください。これにより、ブラウザーは仮想キーボードを表示するための空間を確保するためにビューポートのサイズを自動的に変更できなくなり、代わりに仮想キーボードがコンテンツの上に重ねて表示されるようになります。

### JavaScript で仮想キーボードの形状を検出する

ブラウザーのデフォルトの動作を無効にしたら、`navigator.virtualKeyboard.boundingRect` を使用して仮想キーボードの現在の形状を取得し、CSS や JavaScript を使ってレイアウトを適宜調整することができます。さらに、`geometrychange` イベントを使用することで、キーボードの表示・非表示など、形状の変更を監視することも可能です。

これは、重要な UI の要素を、仮想キーボードで網羅されていない領域に配置するのに有益です。

次のコードスニペットでは、`geometrychange` イベントを使用して、仮想キーボードの形状が変更されたことを検知しています。その後、`boundingRect` プロパティにアクセスして、仮想キーボードのサイズと位置を取得しています。

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### CSS 環境変数を使用して仮想キーボードの形状を検出する

仮想キーボード API では、[CSS 環境変数](/ja/docs/Web/CSS/Reference/Values/env)として `keyboard-inset-top`、`keyboard-inset-right`、`keyboard-inset-bottom`、`keyboard-inset-left`、`keyboard-inset-width`、`keyboard-inset-height` も公開しています。

CSS の `keyboard-inset-*` 環境変数は、CSS を使用してレイアウトを仮想キーボードの外観に合わせて調整するのに有益です。これらは、ビューポートの端からの上、右、下、左のインセットによって矩形を定義します。必要に応じて、`width` および `height` 変数も利用できます。

以下のコードスニペットでは、CSS 環境変数 `keyboard-inset-height` を使用して、チャット風アプリケーションにおいて、メッセージ一覧や入力フィールドの下に仮想キーボードが現れるための空間を確保しています。仮想キーボードが非表示のとき、`env()` 関数は `0px` を返し、`keyboard` グリッド領域は非表示になります。メッセージや入力要素は、ビューポートの高さ全体を占めることができます。仮想キーボードが現れると、`keyboard` グリッド領域の高さは仮想キーボードの高さになります。

```html
<ul id="messages"></ul>
<input type="text" />
```

```css
body {
  display: grid;
  margin: 0;
  height: 100vh;
  grid-template:
    "messages" 1fr
    "input" auto
    "keyboard" env(keyboard-inset-height, 0px);
}
```

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;
}
```

### `contenteditable` の要素上の仮想キーボードを制御する

デフォルトで、[`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) 属性を使用している要素は、タップまたはクリックされると同時に仮想キーボードも起動します。状況によっては、この動作を無効にし、別のイベントが発生した後に仮想キーボードを表示させたい場合もあるでしょう。

[`virtualkeyboardpolicy`](/ja/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) 属性を `manual` に設定すると、ブラウザーによる仮想キーボードのデフォルトの処理が抑制され、代わりに {{domxref("VirtualKeyboard")}} インターフェイスの `show()` および `hide()` メソッドを使用して、自分で処理することができます。

下記のコードスニペットは、`virtualkeyboardpolicy` 属性と `navigator.virtualKeyboard.show()` メソッドを使用して、ダブルクリック時に仮想キーボードを表示させる方法を示しています。

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
```

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  const editor = document.getElementById("editor");
  editor.addEventListener("dblclick", () => {
    navigator.virtualKeyboard.show();
  });
}
```

## インターフェイス

- {{domxref('VirtualKeyboard')}} {{experimental_inline}}
  - : キーボードレイアウトマップを取得したり、物理キーボードからのキー入力の捕捉をオン／オフに切り替えたりする機能を提供します。

## 他のインターフェイスへの拡張

- {{domxref("Navigator.virtualKeyboard")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 画面上の仮想キーボードを制御するための {{DOMxRef("VirtualKeyboard")}} API への参照を返します。
- {{domxref("HTMLElement.virtualkeyboardpolicy")}} {{experimental_inline}}
  - : 要素にフォーカスが当たった際に、仮想キーボードの表示についてブラウザーのデフォルトのポリシーを使用するか、それとも手動で処理するかを示す文字列。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
