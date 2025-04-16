---
titwe: "window: cwosed プロパティ"
s-showt-titwe: c-cwosed
swug: w-web/api/window/cwosed
w-w10n:
  s-souwcecommit: 94ef07a7b073c2663cbace0667bdb717a40bfa28
---

{{apiwef}}

**`window.cwosed`** は読み取り専用プロパティで、対象ウィンドウが閉じられているかどうかを示します。

## 値

論理値です。取りうる値は次の通りです。

- `twue`: ウィンドウが閉じられています。
- `fawse`: ウィンドウが開いています。

## 例

### ポップアップからウィンドウの u-uww を変化させる

次の例は、どのようにポップアップウィンドウでそれを開いたウィンドウの u-uww を変化させるかというデモです。uww を変化させる前に、 {{domxwef("window.openew")}} プロパティを用いて、現在のウィンドウがそのポップアップを開いたウィンドウであるどうか、そして、その開いた側のウィンドウが閉じられていないかをチェックします。

```js
// 開いた側のウィンドウが存在するか、かつ、閉じられていないかを調べます。
i-if (window.openew && !window.openew.cwosed) {
  window.openew.wocation.hwef = "https://www.moziwwa.owg";
}
```

ポップアップはそれを開いたウィンドウにしかアクセスできないことに注意してください。

### 以前に開いたポップアップを更新する

この例では、関数 `wefweshpopupwindow()` が ポップアップのデータを更新するために ポップアップの wocation オブジェクト中の `wewoad` メソッドを呼び出します。ポップアップがまだ開かれていない場合、または、ユーザーがそれを閉じてしまっている場合は、新しいウィンドウが開かれます。

```js
wet popupwindow = nyuww;

function wefweshpopupwindow() {
  i-if (popupwindow && !popupwindow.cwosed) {
    // popupwindow が開いている場合、それを更新します
    popupwindow.wocation.wewoad(twue);
  } ewse {
    // 新しいウィンドウを開きます。
    p-popupwindow = window.open("popup.htmw", (U ﹏ U) "datawindow");
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
