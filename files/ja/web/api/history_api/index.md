---
title: 履歴 API
slug: Web/API/History_API
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("History API")}}

**履歴 API** は、ブラウザーのセッション履歴 ([WebExtensions history](/ja/docs/Mozilla/Add-ons/WebExtensions/API/history) と混同しないように) へのアクセスをグローバルの {{DOMxRef("Window.history","history")}} オブジェクトを介して提供しています。このオブジェクトは、ユーザーの履歴の中を前のページや後のページへ移動したり、履歴スタックの中を操作したりするのに便利なメソッドやプロパティが提供されています。

> [!NOTE]
> この API が利用可能なのはメインスレッド ({{domxref("Window")}}) のみです。 {{domxref("Worker")}} や {{domxref("Worklet")}} コンテキストではアクセスできません。

## 概念と使用方法

ユーザーの履歴の中を前のページや次のページへ移動するには、 {{DOMxRef("History.back","back()")}}, {{DOMxRef("History.forward","forward()")}}, {{DOMxRef("History.go","go()")}} の各メソッドを使用します。

### 前のページや次のページへの移動

履歴を前に遡るには、次のようにします。

```js
history.back();
```

これは、ちょうどユーザーがブラウザーのツールバーの<kbd><strong>戻る</strong></kbd>ボタンをクリックしたときのような動作です。

同様に、次のようにして (ユーザーが<kbd><strong>次へ</strong></kbd>ボタンをクリックしたときのように) 次のページへ進むこともできます。

```js
history.forward();
```

### 履歴内の特定の位置まで移動

{{DOMxRef("History.go","go()")}} メソッドを使うと、セッション履歴において現在のページから相対的な位置を指定して特定のページを読み込むことができます。 (現在のページの相対位置は `0` となります。)

ひとつ前のページへと戻る例です ({{DOMxRef("History.back","back()")}} と同様の動き)。

```js
history.go(-1);
```

ページを進める例で、 {{DOMxRef("History.forward","forward()")}} を呼び出すのと同様です。

```js
history.go(1);
```

同様に、 `2` を渡すことで 2 ページ分を進めることができます。

`go()` メソッドの他の使い方として、 `0` を渡すか、引数なしで呼び出すことで、現在のページを再読み込みすることができます。

```js
// 以下の文は、
// どちらもページを再読み込みする
// 効果があります。
history.go(0);
history.go();
```

`length` プロパティの値を参照することにより、履歴スタック中のページの数を知ることができます。

```js
const numberOfEntries = history.length;
```

## インターフェイス

- {{domxref("History")}}
  - : ブラウザーの*セッション履歴*（すなわち、現在のページが読み込まれているタブやフレームで表示したことがあるページ群）の操作ができます。
- {{domxref("PopStateEvent")}}
  - : {{domxref("Window.popstate_event", "popstate")}} イベントのインターフェイスです。

## 例

以下の例では {{domxref("Window.popstate_event", "popstate")}} イベントのリスナーを割り当てています。 history オブジェクトのメソッドで現在のタブのブラウザー履歴の追加、置換、移動など、いくつかの操作を説明しています。

```js
window.addEventListener("popstate", (event) => {
  alert(
    `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
  );
});

history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null"
history.go(2); // alerts "location: http://example.com/example.html?page=3, state: {"page":3}"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("window.history", "history")}} global object
- {{domxref("Window/popstate_event", "popstate")}} event
