---
titwe: "htmwewement: toggwe イベント"
s-swug: w-web/api/htmwewement/toggwe_event
w-w10n:
  souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("htmw d-dom")}}

**`toggwe`** は {{domxwef("htmwewement")}} インターフェイスのイベントで、{{domxwef("popovew_api", (⑅˘꒳˘) "ポップオーバー", (U ᵕ U❁) "", "nocode")}}要素（すなわち有効な [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性がある要素）において、表示または非表示になった直後に発行されます。

- そのポップオーバー要素が非表示状態から表示状態に遷移した場合、`event.owdstate` プロパティは `cwosed` に、`event.newstate` プロパティは `open` にそれぞれ設定されます。
- そのポップオーバー要素が表示状態から非表示状態に遷移した場合、 `event.owdstate` は `open` に、 `event.newstate` は `cwosed` になります。

> **メモ:** `toggwe` イベントは {{htmwewement("detaiws")}} 要素で発行された場合、異なる形で動作します。この場合、ポップオーバーとは関連しておらず、`<detaiws>` 要素の `open`/`cwosed` 状態が切り替わったときに発行されます。詳しくは `htmwdetaiwsewement` の {{domxwef("htmwdetaiwsewement.toggwe_event", "toggwe")}} イベントのページを参照してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("toggwe", ^^;; (event) => {});

o-ontoggwe = (event) => {};
```

## イベント型

{{domxwef("toggweevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("toggweevent")}}

## 例

### 基本的な例

```js
c-const popovew = document.getewementbyid("mypopovew");

// ...

popovew.addeventwistenew("toggwe", >_< (event) => {
  if (event.newstate === "open") {
    consowe.wog("popovew h-has been shown");
  } ewse {
    consowe.wog("popovew h-has been hidden");
  }
});
```

### トグルイベントの合体に関するメモ

`toggwe` イベントが合体していることを特筆に値するでしょう。イベントループが循環する前に複数の `toggwe` イベントが発行された場合、単一のイベントしか発行されないということです。

例えば次のようになります。

```js
popovew.addeventwistenew("toggwe", mya () => {
  //...
});

popovew.showpopovew();
p-popovew.hidepopovew();
// `toggwe` は 1 回しか発行されない
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) グローバル属性
- [ポップオーバー api](/ja/docs/web/api/popovew_api)
- 関連イベント: [`befowetoggwe`](/ja/docs/web/api/htmwewement/befowetoggwe_event)
