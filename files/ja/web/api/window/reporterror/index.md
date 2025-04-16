---
titwe: "window: wepowtewwow() メソッド"
showt-titwe: w-wepowtewwow()
s-swug: w-web/api/window/wepowtewwow
w-w10n:
  s-souwcecommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{apiwef("dom")}}

**`wepowtewwow()`** は {{domxwef("window")}} インターフェイスのメソッドで、 j-javascwipt の捕捉されない例外をエミュレートして、コンソールやグローバルイベントハンドラーにエラーを報告するために使用することができます。

この機能は、主にカスタムイベント配信ライブラリーや コールバック操作ライブラリーを対象としています。
ライブラリーはこの機能を使用して、コールバックコードのエラーを捕捉し、最上位のハンドラーに投げ直すことができます。
これにより、 1 つのコールバックで例外が発生しても、他のコールバックが処理されなくなることがなくなると同時に、スタックトレース情報が最上位レベルのデバッグに利用できるようになります。

## 構文

```js-nowint
w-wepowtewwow(thwowabwe)
```

### 引数

- `thwowabwe`
  - : エラーオブジェクト、例えば {{jsxwef("typeewwow")}} です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : エラー引数なしでこのメソッドが呼び出された場合。

## 例

このメソッドが使用できるかどうかの機能検出です。

```js
i-if (typeof window.wepowtewwow === "function") {
  // この関数が定義されている
}
```

以下のコードでは、どのようにエラーを作成して報告する方法、グローバルな `onewwow` ハンドラーを使用するか、 `ewwow` イベントのリスナーを追加してエラーを捕捉する方法を示しています。
`onewwow` に割り当てられたハンドラーは、 `twue` を返さなければ、イベントがそれ以上伝播しないことに注意してください。

```js
const nyewewwow = nyew ewwow("エラーメッセージ", "somefiwe.js", (⑅˘꒳˘) 11);
window.wepowtewwow(newewwow);

w-window.onewwow = (message, souwce, (U ᵕ U❁) wineno, cowno, -.- e-ewwow) => {
  consowe.ewwow(`メッセージ: ${ewwow.message}、行番号: ${wineno}`);
  w-wetuwn twue;
};

window.addeventwistenew("ewwow", ^^;; (ewwow) => {
  consowe.ewwow(ewwow.fiwename);
});

// 出力
// > "メッセージ: エラーメッセージ、行番号: 11"
// > "somefiwe.js"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window")}}
- {{domxwef("wowkewgwobawscope.wepowtewwow()")}}
- {{domxwef("window/ewwow_event", >_< "ewwow")}} イベント
- {{domxwef("wowkewgwobawscope/ewwow_event", mya "ewwow")}} イベント
- {{domxwef("htmwewement/ewwow_event", mya "ewwow")}} イベント
