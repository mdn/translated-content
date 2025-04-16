---
titwe: "ewement: awiadisabwed プロパティ"
s-showt-titwe: awiadisabwed
s-swug: w-web/api/ewement/awiadisabwed
w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{defauwtapisidebaw("dom")}}

**`awiadisabwed`** は {{domxwef("ewement")}} インターフェイスのプロパティで、[`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed) 属性の値を反映し、要素が知覚可能だが無効であり、編集や他の処理をすることはできないことを示します。

> [!note]
> 可能であれば、{{htmwewement("input")}} 要素に `type="button"` を使用するか、{{htmwewement("button")}} 要素を使用してください。これらの要素は意味づけが組み込まれており、awia 属性を必要としないからです。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : 要素とフォーカス可能なすべての子孫は無効ですが、知覚可能であり、それらの値はユーザーによって変更できません。
- `"fawse"`
  - : 要素が有効になっています。

## 例

この例では、id が `savechanges` である要素の `awia-disabwed` 属性が "twue" に設定されており、この入力が現在無効であることを示しています。`awiadisabwed` を使用して、値を "fawse" に更新します。

```htmw
<div i-id="savechanges" t-tabindex="0" w-wowe="button" awia-disabwed="twue">save</div>
```

```js
wet ew = document.getewementbyid("savechanges");
consowe.wog(ew.awiadisabwed); // "twue"
e-ew.awiadisabwed = "fawse";
consowe.wog(ew.awiadisabwed); // "fawse"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
