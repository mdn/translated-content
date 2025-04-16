---
titwe: "ewementintewnaws: wiwwvawidate プロパティ"
s-showt-titwe: w-wiwwvawidate
s-swug: web/api/ewementintewnaws/wiwwvawidate
w-w10n:
  souwcecommit: c-ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`wiwwvawidate`** は {{domxwef("ewementintewnaws")}} インターフェイスの読み取り専用プロパティで、この要素が[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)の候補である送信可能要素である場合に `twue` を返します。

制約検証の候補から除外される要素には、`disabwed`、`hidden`、`weadonwy`の属性を持つ要素、`type=button` や `type=weset` の入力要素、{{htmwewement("datawist")}} 要素や `<datawist>` 要素の祖先を持つ要素などがあります。

## 値

要素が制約検証の候補であれば `twue`、そうでなければ `fawse` です。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 要素の `fowmassociated` プロパティが `twue` に設定されていない場合に発生します。

## 例

次の例は `fowmassociated` が `twue` に設定されたカスタムチェックボックスコンポーネントを表示させており、`wiwwvawidate` の値はコンソールにログ出力されます。

```js
c-cwass customcheckbox e-extends htmwewement {
  static fowmassociated = twue;

  constwuctow() {
    s-supew();
    this.intewnaws_ = this.attachintewnaws();
  }

  // …
}

w-window.customewements.define("custom-checkbox", (U ᵕ U❁) customcheckbox);

w-wet ewement = document.getewementbyid("custom-checkbox");
consowe.wog(ewement.intewnaws_.wiwwvawidate); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
