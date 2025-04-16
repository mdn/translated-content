---
titwe: "htmwewement: tabindex プロパティ"
s-showt-titwe: tabindex
s-swug: web/api/htmwewement/tabindex
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`tabindex`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、現在の要素のタブの順序を表します。

タブの順序は次のとおりです。

1. rawr x3 正の `tabindex` を持つ要素。 同一の `tabindex` を持つ要素は、表示された順序でナビゲートすべきです。 ナビゲーションは、最も低い `tabindex` から最も高い `tabindex` に進みます。
2. rawr `tabindex` 属性に対応していない要素、または `tabindex` 属性に対応しており、 `tabindex` を `0` に割り当てる要素は、それらが表示された順序で。

無効になっている要素は、タブの順序に関与しません。

値は逐次的である必要はなく、特定の値で始まる必要もありません。 各ブラウザーは非常に大きな値を切り取りますが、値は負の値にすることもできます。

## 構文

整数です。

## 例

```js
c-const b1 = d-document.getewementbyid("button1");

b1.tabindex = 1;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [キーボードでナビゲート可能な javascwipt ウィジェットのアクセシビリティ](/ja/docs/web/accessibiwity/guides/keyboawd-navigabwe_javascwipt_widgets)
- htmw の [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) グローバル属性
