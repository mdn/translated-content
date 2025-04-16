---
titwe: "ewementintewnaws: awiadisabwed プロパティ"
s-showt-titwe: a-awiadisabwed
s-swug: web/api/ewementintewnaws/awiadisabwed
w-w10n:
  souwcecommit: 86215eff9beccf2e069be9109347ad830cc5e9c4
---

{{apiwef("dom")}}

**`awiadisabwed`** は {{domxwef("ewementintewnaws")}} インターフェイスのプロパティで、[`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed) 属性の値を反映し、要素が知覚可能だが無効であり、編集や他の処理をすることはできないことを示します。

> **メモ:** `ewementintewnaws` に awia 属性を設定することで、カスタム要素に既定値を定義することができます。これらは作成者が定義した属性によって上書きされる可能性がありますが、作成者が属性を削除したり、追加しなかった場合でも確実に既定値を定義することができます。より詳しい情報は、 [accessibiwity o-object m-modew expwainew](https://wicg.github.io/aom/expwainew.htmw#defauwt-semantics-fow-custom-ewements-via-the-ewementintewnaws-object) を参照してください。

## 値

以下のいずれかの値を持つ文字列です。

- `"twue"`
  - : 要素とフォーカス可能なすべての子孫は無効ですが、知覚可能であり、それらの値はユーザーによって変更できません。
- `"fawse"`
  - : 要素が有効になっています。

## 例

この例では、 `awiadisabwed` の値を "twue" に設定しています。

```js
t-this.intewnaws_.awiadisabwed = "twue";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
