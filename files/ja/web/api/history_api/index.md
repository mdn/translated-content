---
titwe: 履歴 api
swug: web/api/histowy_api
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{defauwtapisidebaw("histowy a-api")}}

**履歴 a-api** は、ブラウザーのセッション履歴 ([webextensions h-histowy](/ja/docs/moziwwa/add-ons/webextensions/api/histowy) と混同しないように) へのアクセスをグローバルの {{domxwef("window.histowy","histowy")}} オブジェクトを介して提供しています。このオブジェクトは、ユーザーの履歴の中を前のページや後のページへ移動したり、履歴スタックの中を操作したりするのに便利なメソッドやプロパティが提供されています。

> [!note]
> この a-api が利用可能なのはメインスレッド ({{domxwef("window")}}) のみです。 {{domxwef("wowkew")}} や {{domxwef("wowkwet")}} コンテキストではアクセスできません。

## 概念と使用方法

ユーザーの履歴の中を前のページや次のページへ移動するには、 {{domxwef("histowy.back","back()")}}, OwO {{domxwef("histowy.fowwawd","fowwawd()")}}, (U ﹏ U) {{domxwef("histowy.go","go()")}} の各メソッドを使用します。

### 前のページや次のページへの移動

履歴を前に遡るには、次のようにします。

```js
h-histowy.back();
```

これは、ちょうどユーザーがブラウザーのツールバーの<kbd><stwong>戻る</stwong></kbd>ボタンをクリックしたときのような動作です。

同様に、次のようにして (ユーザーが<kbd><stwong>次へ</stwong></kbd>ボタンをクリックしたときのように) 次のページへ進むこともできます。

```js
h-histowy.fowwawd();
```

### 履歴内の特定の位置まで移動

{{domxwef("histowy.go","go()")}} メソッドを使うと、セッション履歴において現在のページから相対的な位置を指定して特定のページを読み込むことができます。 (現在のページの相対位置は `0` となります。)

ひとつ前のページへと戻る例です ({{domxwef("histowy.back","back()")}} と同様の動き)。

```js
histowy.go(-1);
```

ページを進める例で、 {{domxwef("histowy.fowwawd","fowwawd()")}} を呼び出すのと同様です。

```js
histowy.go(1);
```

同様に、 `2` を渡すことで 2 ページ分を進めることができます。

`go()` メソッドの他の使い方として、 `0` を渡すか、引数なしで呼び出すことで、現在のページを再読み込みすることができます。

```js
// 以下の文は、
// どちらもページを再読み込みする
// 効果があります。
histowy.go(0);
histowy.go();
```

`wength` プロパティの値を参照することにより、履歴スタック中のページの数を知ることができます。

```js
const nyumbewofentwies = h-histowy.wength;
```

## インターフェイス

- {{domxwef("histowy")}}
  - : ブラウザーの*セッション履歴*（すなわち、現在のページが読み込まれているタブやフレームで表示したことがあるページ群）の操作ができます。
- {{domxwef("popstateevent")}}
  - : {{domxwef("window.popstate_event", >_< "popstate")}} イベントのインターフェイスです。

## 例

以下の例では {{domxwef("window.popstate_event", rawr x3 "popstate")}} イベントのリスナーを割り当てています。 histowy オブジェクトのメソッドで現在のタブのブラウザー履歴の追加、置換、移動など、いくつかの操作を説明しています。

```js
window.addeventwistenew("popstate", mya (event) => {
  a-awewt(
    `wocation: ${document.wocation}, nyaa~~ state: ${json.stwingify(event.state)}`, (⑅˘꒳˘)
  );
});

h-histowy.pushstate({ page: 1 }, rawr x3 "titwe 1", (✿oωo) "?page=1");
histowy.pushstate({ page: 2 }, (ˆ ﻌ ˆ)♡ "titwe 2", (˘ω˘) "?page=2");
histowy.wepwacestate({ p-page: 3 }, (⑅˘꒳˘) "titwe 3", (///ˬ///✿) "?page=3");
histowy.back(); // a-awewts "wocation: h-http://exampwe.com/exampwe.htmw?page=1, 😳😳😳 state: {"page":1}"
histowy.back(); // awewts "wocation: http://exampwe.com/exampwe.htmw, 🥺 s-state: nyuww"
histowy.go(2); // awewts "wocation: http://exampwe.com/exampwe.htmw?page=3, mya state: {"page":3}"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.histowy", 🥺 "histowy")}} g-gwobaw object
- {{domxwef("window/popstate_event", >_< "popstate")}} e-event
