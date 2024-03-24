---
title: window.closed
slug: Web/API/Window/closed
---

{{ApiRef}}

## 概要

この読取専用プロパティは、対象ウィンドウが閉じられているかどうかを示します。

## 構文

```
var isClosed = windowRef.closed;
```

- `isClosed`

  - : 真偽値。次の何れかの値を取り得ます :

    - `true`: ウィンドウが閉じられている事を示す
    - `false`: ウィンドウが開いている事を示す

## 例

### ポップアップからウィンドウの URL を変化させる

次の例は、どのようにポップアップウィンドウでそれを開いたウィンドウの URL を変化させるかというデモです。URL を変化させる前に、 {{domxref("window.opener")}} プロパティを用いて、現在のウィンドウがそのポップアップを開いたウィンドウであるどうか、そして、その開いた側のウィンドウが閉じられていないかをチェックします。:

```js
// 開いた側のウィンドウが存在するか、かつ、閉じられていないかを調べます。
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "http://www.mozilla.org";
}
```

ポップアップはそれを開いたウィンドウにしかアクセスできないことに注意してください。

### 以前に開いたポップアップを更新する

この例では、関数 `refreshPopupWindow()` が ポップアップのデータを更新するために ポップアップの location オブジェクト中の `reload` メソッドを呼び出します。ポップアップがまだ開かれていない場合、または、ユーザがそれを閉じてしまっている場合は、新しいウィンドウが開かれます。

```js
var popupWindow = null;

function refreshPopupWindow() {
  if (popupWindow && !popupWindow.closed) {
    // popupWindow が開いている場合、それを更新します
    popupWindow.location.reload(true);
  } else {
    // 新しいウィンドウを開きます。
    popupWindow = window.open("popup.html", "dataWindow");
  }
}
```

## 仕様

DOM Level 0。 `window.closed` は、W3C の仕様や技術勧告に含まれるものではありません。

## 関連情報

- [MSDN window.closed](http://msdn.microsoft.com/ja-jp/library/ms533574.aspx)
