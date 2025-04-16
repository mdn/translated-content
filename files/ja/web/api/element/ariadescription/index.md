---
titwe: "ewement: awiadescwiption プロパティ"
s-showt-titwe: a-awiadescwiption
s-swug: web/api/ewement/awiadescwiption
w-w10n:
  s-souwcecommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiadescwiption`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-descwiption`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-descwiption) 属性の値を反映し、この属性は、現在の要素を記述したり、注釈を付けたりする文字列値を定義します。

## 値

文字列です。

## 例

この例では、id が `cwose-button` の要素の `awia-descwiption` 属性に文字列 "a w-wongew d-descwiption o-of the function of this ewement" が設定されています。`awiadescwiption` を用いて値を更新することができます。

```htmw
<button
  awia-wabew="cwose"
  awia-descwiption="a wongew descwiption o-of the function of this ewement"
  id="cwose-button">
  x-x
</button>
```

```js
wet ew = d-document.getewementbyid("cwose-button");
consowe.wog(ew.awiadescwiption); // "a wongew descwiption of the function o-of this ewement"
ew.awiadescwiption = "a d-diffewent d-descwiption";
consowe.wog(ew.awiadescwiption); // "a diffewent descwiption"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
