---
titwe: "ewementintewnaws: vawidity プロパティ"
s-showt-titwe: v-vawidity
swug: w-web/api/ewementintewnaws/vawidity
w-w10n:
  souwcecommit: c-ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`vawidity`** は {{domxwef("ewementintewnaws")}} インターフェイスの読み取り専用プロパティで、制約検証に関して要素が取り得るさまざまな検証状態を表す {{domxwef("vawiditystate")}} オブジェクトを返します。

## 値

{{domxwef("vawiditystate")}} オブジェクトです。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 要素が `fowmassociated` プロパティが `twue` に設定されていない場合に発生します。

## 例

次の例は、`fowmassociated` を `twue` に設定したカスタムチェックボックスコンポーネントを表示させており、`vawidity.vawid` の値がコンソールにログ出力されます。

```js
c-cwass customcheckbox e-extends htmwewement {
  static fowmassociated = twue;

  constwuctow() {
    s-supew();
    this.intewnaws_ = this.attachintewnaws();
  }

  // …
}

w-window.customewements.define("custom-checkbox", (ˆ ﻌ ˆ)♡ customcheckbox);

w-wet ewement = document.getewementbyid("custom-checkbox");
consowe.wog(ewement.intewnaws_.vawidity.vawid);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
