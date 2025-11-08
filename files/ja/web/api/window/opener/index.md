---
title: "Window: opener プロパティ"
short-title: opener
slug: Web/API/Window/opener
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef("HTML DOM")}}

{{domxref("Window")}} インターフェイスの **`opener`** プロパティは、 {{domxref("Window.open", "open()")}} によって、または [`target`](/ja/docs/Web/HTML/Reference/Elements/a#target) 属性の付いたリンクの操作によって開かれたウィンドウを開いたウィンドウへの参照を返します。

言い換えれば、ウィンドウ `A` がウィンドウ `B` を開いた場合、 `B.opener` は `A` を返します。

## 値

{{domxref("Window")}} 風のオブジェクトで、（{{domxref("window.open()")}} を使用するか、または [`target`](/ja/docs/Web/HTML/Reference/Elements/a#target) 属性が設定されたリンクによって）現在のウィンドウを開いたウィンドウ（オープナー）を参照します。このウィンドウが他のウィンドウにリンクされたり作成されたりして開かれたものでない場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) を返します。

オープナーが現在のページと同じオリジン上にない場合、オープナーオブジェクトの機能は制限されます。例えば、ウィンドウオブジェクトの変数と関数はアクセスすることができません。しかし、オープナーウィンドウのナビゲーションは利用可能です。これは、開かれたページが元のタブやウィンドウで URL を開くためのものであることを意味しています。場合によっては、これによりフィッシング攻撃が可能であり、元のウィンドウで開かれた信頼できるページが、新しく開かれたページによってフィッシングページに置き換えられてしまいます。

以下の場合、ブラウザーは `window.opener` を生成せず、 [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) のままにします。

- リンクに [`rel=noopener`](/ja/docs/Web/HTML/Reference/Attributes/rel#noopener) を指定するか、 `noopener` を {{domxref("Window.open", "windowFeatures")}} 引数に渡すことで、オープナーを消すことができます。
- [`target`](/ja/docs/Web/HTML/Reference/Elements/a#target) が `_blank` であるリンクによって開かれたウィンドウは、明示的に [`rel=opener`](/ja/docs/Web/HTML/Reference/Attributes/rel#opener) を要求しない限り、 `opener` になることはありません。
- 値が `same-origin` である {{HTTPHeader("Cross-Origin-Opener-Policy")}} ヘッダーがあると、 `opener` を設定することができません。新しいウィンドウは異なる閲覧コンテキストで読み込まれるので、開くためのウィンドウを参照することはありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
