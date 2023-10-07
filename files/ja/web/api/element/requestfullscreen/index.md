---
title: "Element: requestFullscreen() メソッド"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Fullscreen API")}}

**`Element.requestFullscreen()`** メソッドは、要素を全画面表示するための非同期的な要求を発行します。

要素が全画面モードに移行することは保証されていません。全画面モードに移行する許可が与えられている場合は、返される {{JSxRef("Promise")}} が解決され、文書が全画面モードになったことを知ることができる {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} イベントを受け取るようになります。権限が拒否された場合は、代わりに {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} イベントを受け取ります。
このメソッドはユーザーの操作または機器の方向の変更によって呼び出す必要があり、そうでなければ失敗します。

## 構文

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### 引数

- `options` {{optional_inline}}
  - : 全画面モードへの移行時の挙動を制御するオブジェクトです。利用できるオプションは以下の通りです。
    - `navigationUI` {{optional_inline}}
      - : 要素が全画面モードのときにナビゲーション UI を表示するかどうかを制御します。
        既定値では `"auto"` であり、これはブラウザーが何をすべきかを決定することを示す。
        - `"hide"`
          - : このとき、ブラウザーのナビゲーションインターフェースは非表示になり、画面全体が要素の表示に割り当てられます。
        - `"show"`
          - : ブラウザーは、ページナビゲーションコントロールや、場合によっては他のユーザーインターフェイスを表示します。要素の寸法（および画面の知覚サイズ）は、このユーザーインターフェイスのためのスペースを残すために締め付けられます。
        - `"auto"`
          - : 上記の設定のうち、どれを適用するかはブラウザーが選択します。
            これが既定値です。

### 返値

全画面への移行が完了した時に、 `undefined` の値で解決する {{JSxRef("Promise")}} です。

### 例外

_`requestFullscreen()` プロシージャは、従来の例外を発生させるのではなく、返された `Promise` を拒否することでエラー状況を知らせます。拒絶ハンドラーは以下の例外値のいずれかを受け取ります。_

- {{jsxref("TypeError")}}

  - : 例外 `TypeError` は以下のいずれかの状況で送出されることがあります。

    - その要素を含む文書が完全にアクティブでない、つまり、現在のアクティブ文書でない。
    - その要素が文書内に含まれていない。
    - この要素は、[権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)の設定または他のアクセス制御機能により、 `fullscreen` 機能を使用することが許可されていない。
    - 要素とその文書が同じノードである。
    - この要素が[ポップオーバー](/ja/docs/Web/API/Popover_API)であり、既に {{domxref("HTMLElement.showPopover()")}} で表示されている。

## セキュリティ

[ユーザーによる一時的な有効化](/ja/docs/Web/Security/User_activation)が必要です。この機能が動作するためには、ユーザーがページまたは UI 要素と対話する必要があります。

## 使用上のメモ

### 互換性のある要素

全画面モードにするための要素は、次のようないくつかの単純な条件を満たしていなければなりません。

- 標準の HTML 要素または {{SVGElement("svg")}} または {{MathMLElement("math")}} のいずれかであること。
- {{HTMLElement("dialog")}} 要素ではないこと。
- 最上位の文書内か、 [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen) 属性を適用した {{HTMLElement("iframe")}} 内に位置していなければなりません。

さらに、設定された権限ポリシーがこの機能の使用を許可している必要があります。

### 全画面起動の検出

全画面モードへの切り替えが成功したかどうかは、 `requestFullscreen()` が返す {{jsxref("Promise")}} を使用することで判断することができます。下記の[例](#例)にある通りです。

他のコードが全画面モードのオンとオフを切り替えたことを知るためには、 {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントに対するリスナーを {{domxref("Document")}} に設置する必要があります。
また、例えばユーザーが手動で全画面モードを切り替えたときや、ユーザーがアプリケーションを切り替えてアプリケーションが一時的に全画面モードを終了したときなどを認識するために `fullscreenchange` を待ち受けすることも重要です。

## 例

### 全画面モードのリクエスト

この関数は、文書内で最初に得られた {{HTMLElement("video")}} 要素を全画面モードに切り替えたり、全画面モードを終了させたりします。

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
      );
    });
  } else {
    document.exitFullscreen();
  }
}
```

文書内の文書がまだ全画面モードでなければ、 {{domxref("document.fullscreenElement")}} に値があるかどうかを見て検出し、動画の `requestFullscreen()` メソッドを呼び出します。成功した場合は何らかの処理をする必要はありませんが、リクエストに失敗した場合はプロミスの `catch()` ハンドラーが適切なエラーメッセージとともに警告を表示します。

逆に、既に全画面モードが有効な場合は、 {{domxref("document.exitFullscreen()")}} を呼び出して全画面モードを無効化します。

[この例をその場で見る](https://fullscreen-requestfullscreen-demo.glitch.me/)ことができます。また、[コードを見たり改造したり](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo)することが [Glitch](https://glitch.com/) でできます。

### navigationUI の使用

この例では、 {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} を文書の {{DOMxRef("Document.documentElement")}}、すなわち文書のルートである
{{HTMLElement("html")}} 要素に対して呼び出すことによって、文書全体を全画面モードにすることができるようになっています。

```js
let elem = document.documentElement;

elem
  .requestFullscreen({ navigationUI: "show" })
  .then(() => {})
  .catch((err) => {
    alert(
      `An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`,
    );
  });
```

プロミスの解決ハンドラーは何もしませんが、プロミスが拒否された場合は {{DOMxRef("Window.alert", "alert()")}} を呼び出すことでエラーメッセージが表示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}
- [`allowfullscreen`](/ja/docs/Web/HTML/Element/iframe#allowfullscreen)
