---
title: 呼び出しコマンド API
slug: Web/API/Invoker_Commands_API
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("Invoker Commands API")}}

**呼び出しコマンド API** は、ボタンに動作を宣言的に割り当てる方法を提供し、ボタンが操作されたとき（クリックまたはスペースバーやリターンキーなどのキー操作による呼び出し）にインタラクティブな要素を制御できるようにします。

## 概念と使い方

ウェブでは、{{HTMLElement("button")}} 要素がページの様々な側面を制御するパターンがよく見られます。例えば、{{domxref("Popover API", "ポップオーバー", "", "nocode")}}や {{HTMLElement("dialog")}} 要素の開閉、テキストの書式設定などです。

従来、この種の制御を実装するには、ボタンに JavaScript のイベントリスナーを追加し、制御対象の要素に対して API を呼び出す必要がありました。 {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} および {{domxref("HTMLButtonElement.command", "command")}} プロパティは、限定された種類のアクションに対して、宣言的にこれを実現する手段を提供します。これにより、組み込みコマンドでは、ユーザーが JavaScript のダウンロードや実行を待たずにボタンをインタラクティブに操作できる利点があります。

## HTML 属性

- [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor)
  - : {{htmlelement("button")}} 要素をボタンに変換し、指定されたインタラクティブ要素を制御します。制御対象要素のIDを値として受け取ります。
- [`command`](/ja/docs/Web/HTML/Reference/Elements/button#command)
  - : `commandfor` 属性で指定された、`<button>` コントロールによって制御される要素に対して実行されるアクションを指定します。

## インターフェイス

- {{domxref("CommandEvent")}}
  - : コマンドが発行されたことをユーザーに通知するイベントを表します。これは {{domxref("HTMLElement/command_event", "command")}} イベントのイベントオブジェクトです。このイベントは {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} で参照される要素上で発生します。

## 他のインターフェイスの拡張

### インスタンスプロパティ

- {{domxref("HTMLButtonElement.commandForElement")}}
  - : ボタンを通じて制御する要素を取得または設定します。JavaScript において HTML の [`commandfor`](/ja/docs/Web/HTML/Reference/Elements/button#commandfor) 属性に対応するものです。
- {{domxref("HTMLButtonElement.command")}}
  - : ボタンによって制御されている要素に対して実行されるアクションを取得および設定します。 HTML の [`command`](/ja/docs/Web/HTML/Reference/Elements/button#command) 属性の値を反映します。

### イベント

- {{domxref("HTMLElement.command_event", "command")}} イベント
  - : ボタンが参照している要素で発生します。

## 例

### 宣言的なポップオーバーの作成

```html
<button commandfor="mypopover" command="toggle-popover">
  ポップオーバーを切り替え
</button>
<div id="mypopover" popover>
  <button commandfor="mypopover" command="hide-popover">閉じる</button>
  ポップオーバーのコンテンツ
</div>
```

### 宣言的なダイアログの作成

```html-nolint
<button commandfor="mydialog" command="show-modal">モーダルダイアログを表示</button>
<dialog id="mydialog">
  <button commandfor="mydialog" command="close">閉じる</button>
  ダイアログのコンテンツ
</dialog>
```

### 独自のコマンドの作成

```html
<button commandfor="my-img" command="--rotate-left">左に回転</button>
<button commandfor="my-img" command="--rotate-right">右に回転</button>
<img id="my-img" src="photo.jpg" alt="[ここに適切な代替テキストを追加]" />
```

```js
const myImg = document.getElementById("my-img");

myImg.addEventListener("command", (event) => {
  if (event.command === "--rotate-left") {
    myImg.style.rotate = "-90deg";
  } else if (event.command === "--rotate-right") {
    myImg.style.rotate = "90deg";
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLButtonElement.command", "command")}} プロパティ
- {{domxref("HTMLButtonElement.commandForElement", "commandForElement")}} プロパティ
- {{domxref("CommandEvent", "CommandEvent")}} インターフェイス
