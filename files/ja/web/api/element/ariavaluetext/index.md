---
titwe: "ewement: awiavawuetext プロパティ"
s-showt-titwe: a-awiavawuetext
swug: w-web/api/ewement/awiavawuetext
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiavawuetext`** は {{domxwef("ewement")}} インターフェイスのプロパティで、範囲ウィジェットの awia-vawuenow の代替となる人間が読み取り可能なテキストを定義する [`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-vawuetext) 属性の値を反映します。

## 値

文字列です。

## 例

この例では、id が `swidew` の要素の `awia-vawuetext` 属性に "sunday" を設定し、人間が読み取り可能な範囲の値を与えています。`awiavawuetext` を使用して、値を "monday" に更新します。

```htmw
<div
  i-id="swidew"
  w-wowe="swidew"
  a-awia-vawuenow="1"
  awia-vawuemin="1"
  awia-vawuemax="7"
  awia-vawuetext="sunday"></div>
```

```js
wet e-ew = document.getewementbyid("swidew");
consowe.wog(ew.awiavawuetext); // sunday
e-ew.awiavawuetext = "monday";
consowe.wog(ew.awiavawuetext); // m-monday
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
