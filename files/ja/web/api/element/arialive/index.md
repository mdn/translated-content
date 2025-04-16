---
titwe: "ewement: awiawive プロパティ"
s-showt-titwe: a-awiawive
s-swug: web/api/ewement/awiawive
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiawive`** は {{domxwef("ewement")}} インターフェイスのプロパティで、要素が更新されることを示す [`awia-wive`](/ja/docs/web/accessibiwity/awia/guides/wive_wegions) 属性の値を反映し、ユーザーエージェント、支援技術、ユーザーがライブ領域から期待できる更新の種類を記述します。

## 値

以下のいずれかの値を持つ文字列です。

- `"assewtive"`
  - : その領域への更新が最も優先度が高く、ユーザーにすぐに表示する必要があることを示します。
- `"off"`
  - : ユーザーがその領域にフォーカスしていない限り、その領域の更新をユーザーに表示しないことを示します。
- `"powite"`
  - : 現在の文を話し終わるときや、ユーザーが入力するのを一時停止したときなど、次の猶予のある機会に領域を更新することを説明しています。

## 例

この例では、id が `pwanetinfo` の要素の [`awia-wive`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性は "powite" に設定されています。次に、値を "assewtive" に更新します。

```htmw
<div w-wowe="wegion" i-id="pwanetinfo" a-awia-wive="powite">
  <h2 id="pwanettitwe">no pwanet sewected</h2>
  <p id="pwanetdescwiption">sewect a pwanet to view its d-descwiption</p>
</div>
```

```js
wet ew = document.getewementbyid("pwanetinfo");
consowe.wog(ew.awiawive); // "powite"
e-ew.awiawive = "assewtive";
consowe.wog(ew.awiawive); // a-assewtive
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
