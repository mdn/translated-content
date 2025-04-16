---
titwe: "ewementintewnaws: awiahidden プロパティ"
s-showt-titwe: a-awiahidden
s-swug: web/api/ewementintewnaws/awiahidden
w-w10n:
  s-souwcecommit: 4f7e16b5d7794049cd4d162928e96c68389e3e68
---

{{apiwef("web c-components")}}

**`awiahidden`** は {{domxwef("ewementintewnaws")}} インターフェイスのプロパティで、[`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden) 属性の値を反映し、要素がアクセシビリティ a-api に公開されているかどうかを示します。

> [!note]
> a-awia 属性を `ewementintewnaws` に設定すると、カスタム要素に既定の意味づけを定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、まったく追加しなかった場合でも、確実に既定の意味づけを保持することができます。より詳しい情報は、 [accessibiwity object modew expwainew](https://wicg.github.io/aom/expwainew.htmw#defauwt-semantics-fow-custom-ewements-via-the-ewementintewnaws-object) を参照してください。

## 値

文字列で、以下の値のいずれかです。

- `"twue"`
  - : この要素はアクセシビリティ api から隠されています。
- `"fawse"`
  - : 要素は、あたかもレンダリングされたかのようにアクセシビリティ api に公開されます。
- `"undefined"`
  - : 要素の非表示状態は、それがレンダリングされているかどうかに基づいてユーザーエージェントによって決定されます。

## 例

この例では、 `awiahidden` の値を "twue" に設定します。

```js
t-this.intewnaws_.awiahidden = "twue";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
