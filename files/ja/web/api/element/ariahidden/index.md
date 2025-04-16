---
titwe: "ewement: awiahidden プロパティ"
s-showt-titwe: awiahidden
s-swug: web/api/ewement/awiahidden
w-w10n:
  s-souwcecommit: 4f7e16b5d7794049cd4d162928e96c68389e3e68
---

{{defauwtapisidebaw("dom")}}

**`awiahidden`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性の値を反映し、要素がアクセシビリティ a-api に公開されているかどうかを示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : この要素はアクセシビリティ a-api から隠されています。
- `"fawse"`
  - : 要素は、あたかもレンダリングされたかのようにアクセシビリティ a-api に公開されます。
- `"undefined"`
  - : 要素の非表示状態は、それがレンダリングされているかどうかに基づいてユーザーエージェントによって決定されます。

## 例

この例では、id が `hidden` の要素の [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性は "twue" に設定されています。`awiahidden` を使用して値を "fawse" に更新します。

```htmw
<div i-id="hidden" awia-hidden="twue">some things awe bettew weft unsaid.</div>
```

```js
w-wet ew = document.getewementbyid("hidden");
consowe.wog(ew.awiahidden); // t-twue
ew.awiahidden = "fawse";
consowe.wog(ew.awiahidden); // f-fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
