---
title: "Window: close() メソッド"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: 2d37dd97bab97f39457bef2d89e7f525362d8602
---

{{APIRef}}

**`Window.close()`** メソッドは、現在のウィンドウ、またはそのページ上で呼び出されたウィンドウを閉じます。

ウェブコンテンツによって作成されたウィンドウは、スクリプトで閉じることができます。これには一般的に以下のような場合です。

- {{domxref("Window.open()")}} を用いて開かれたウィンドウ
- リンク (`<a target="_blank">`) やフォーム (`<form target="_blank">`) などのウェブコンテンツを介して、ユーザーによる変更操作なしに開かれたウィンドウ

ブラウザーの UI 操作（右クリック→新しいタブで開く、Ctrl+クリック、Shift+クリック、中クリックなど）によって開かれたウィンドウは、多くの場合、スクリプトで閉じることができません。これらは、ナビゲーションが行われていない場合（履歴の長さが 1 のままである場合）にのみ閉じることができます。それ以外の場合に `close()` を呼び出すと、通常はコンソールに `スクリプトはスクリプトによって開かれたウィンドウのみを閉じます。` という警告を表示します。

なお `close()` は、[`HTMLIFrameElement.contentWindow`](/ja/docs/Web/API/HTMLIFrameElement/contentWindow) によって返された {{domxref("Window")}} オブジェクトに対して呼び出しても、何の効果もありません。

## 構文

```js-nolint
close()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### `window.open()` で開かれたウィンドウを閉じる

この例は、ウィンドウを開くメソッドと、そのウィンドウを閉じるメソッドです。これは、{{domxref("window.open()")}} の呼び出しにより開かれたウィンドウを閉じる `Window.close()` の使い方を実演します。

```js
// 開いたウィンドウへの参照を保持するグローバル変数
let openedWindow;

function openWindow() {
  openedWindow = window.open("more-info.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
