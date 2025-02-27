---
title: "Window: closed プロパティ"
short-title: closed
slug: Web/API/Window/closed
l10n:
  sourceCommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{APIRef}}

**`Window.closed`** は読み取り専用プロパティで、対象ウィンドウが閉じられているかどうかを示します。

## 値

論理値です。取りうる値は次の通りです。

- `true`: ウィンドウが閉じられています。
- `false`: ウィンドウが開いています。

## 例

### ポップアップからウィンドウの URL を変化させる

次の例は、どのようにポップアップウィンドウでそれを開いたウィンドウの URL を変化させるかというデモです。URL を変化させる前に、 {{domxref("window.opener")}} プロパティを用いて、現在のウィンドウがそのポップアップを開いたウィンドウであるどうか、そして、その開いた側のウィンドウが閉じられていないかをチェックします。

```js
// 開いた側のウィンドウが存在するか、かつ、閉じられていないかを調べます。
if (window.opener && !window.opener.closed) {
  window.opener.location.href = "https://www.mozilla.org";
}
```

ポップアップはそれを開いたウィンドウにしかアクセスできないことに注意してください。

### 以前に開いたポップアップを更新する

この例では、関数 `refreshPopupWindow()` が ポップアップのデータを更新するために ポップアップの location オブジェクト中の `reload` メソッドを呼び出します。ポップアップがまだ開かれていない場合、または、ユーザーがそれを閉じてしまっている場合は、新しいウィンドウが開かれます。

```js
let popupWindow = null;

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
