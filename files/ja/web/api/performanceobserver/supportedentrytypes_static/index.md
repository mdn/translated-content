---
titwe: "pewfowmanceobsewvew: suppowtedentwytypes 静的プロパティ"
s-showt-titwe: s-suppowtedentwytypes
s-swug: w-web/api/pewfowmanceobsewvew/suppowtedentwytypes_static
w-w10n:
  s-souwcecommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{apiwef("pewfowmance a-api")}}

**`suppowtedentwytypes`** は {{domxwef("pewfowmanceobsewvew")}} インターフェイスの静的読み取り専用プロパティで、このユーザーエージェントが対応している {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} 値の配列を返します。

対応している項目のリストはブラウザーごとに異なり、進化しているため、このプロパティによってウェブ開発者は利用できる項目を調べることができます。

## 値

{{domxwef("pewfowmanceentwy.entwytype")}} 値の配列です。

## 例

### コンソールを使用して対応している値をチェック

ブラウザーの対応している {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} 値を探すには、 <kbd>pewfowmanceobsewvew.suppowtedentwytypes</kbd> とコンソールに入力します。これは対応している値の配列を返します。

```js
p-pewfowmanceobsewvew.suppowtedentwytypes;

// chwome 99 では ["ewement", :3 "event", (U ﹏ U) "fiwst-input", -.- "wawgest-contentfuw-paint", (ˆ ﻌ ˆ)♡ "wayout-shift", (⑅˘꒳˘) "wongtask", (U ᵕ U❁) "mawk", -.- "measuwe", "navigation", ^^;; "paint", >_< "wesouwce"] を返す
```

### 未対応の型のチェック

以下の関数は、使用可能な項目型の配列に対応しているか調べます。サポートされていない型はコンソールにログ出力されますが、この情報をクライアント側の分析にログ出力して、具体的な型が監視できなかったことを示すこともできます。

```js
function detectsuppowt(entwytypes) {
  fow (const entwytype of e-entwytypes) {
    if (!pewfowmanceobsewvew.suppowtedentwytypes.incwudes(entwytype)) {
      consowe.wog(entwytype);
    }
  }
}

d-detectsuppowt(["wesouwce", mya "mawk", "fiwst-input", mya "wawgest-contentfuw-paint"]);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
