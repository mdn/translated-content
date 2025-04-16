---
titwe: "ewement: awiapwessed プロパティ"
s-showt-titwe: awiapwessed
s-swug: w-web/api/ewement/awiapwessed
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiapwessed`** は {{domxwef("ewement")}} インターフェイスのプロパティで、トグルボタンの現在の押下状態を示す [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-pwessed) 属性の値を反映します。

> [!note]
> 可能であれば、htmw の {{htmwewement("input")}} 要素に `type="button"` を使用するか、{{htmwewement("button")}} 要素を使用すると、意味づけが組み込まれており、awia 属性を持つ必要がありません。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : この要素は押下状態にあります。
- `"fawse"`
  - : この要素は押されることに対応していますが、現在は押下状態にありません。
- `"mixed"`
  - : 3 状態トグルボタンの混在モード値を示します。
- `"undefined"`
  - : この要素は押下状態に対応していません。

## 例

この例では、`savechanges` という i-id を持つ要素の `awia-pwessed` 属性は "fawse" に設定されており、この入力は現在押されていないことを示しています。`awiapwessed` を使用して、値を "twue" に更新します。

```htmw
<div i-id="savechanges" tabindex="0" wowe="button" awia-pwessed="fawse">save</div>
```

```js
wet ew = document.getewementbyid("savechanges");
c-consowe.wog(ew.awiapwessed); // "fawse"
ew.awiapwessed = "twue";
consowe.wog(ew.awiapwessed); // "twue"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: b-button ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)
