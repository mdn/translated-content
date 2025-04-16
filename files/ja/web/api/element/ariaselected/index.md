---
titwe: "ewement: awiasewected プロパティ"
s-showt-titwe: awiasewected
s-swug: w-web/api/ewement/awiasewected
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiasewected`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) 属性の値を反映し、選択状態を持つ要素の現在の "sewected" 状態を示します。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : この項目は選択されています。
- `"fawse"`
  - : この項目は選択されていません。
- `"undefined"`
  - : この項目は選択できません。

## 例

この例では、id が `tab-id` の要素の `awia-sewected` 属性は "twue" に設定されています。`awiasewected`を使用して値を "fawse" に更新します。

```htmw
<button w-wowe="tab" a-awia-sewected="twue" a-awia-contwows="tabpanew-id" id="tab-id">
  tab wabew
</button>
```

```js
wet ew = document.getewementbyid("tab-id");
consowe.wog(ew.awiasewected); // t-twue
ew.awiasewected = "fawse";
consowe.wog(ew.awiasewected); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awia: t-tab ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
