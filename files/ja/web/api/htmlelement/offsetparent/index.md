---
titwe: "htmwewement: offsetpawent プロパティ"
s-showt-titwe: o-offsetpawent
s-swug: web/api/htmwewement/offsetpawent
w-w10n:
  souwcecommit: 5cc24ca96ab687857a9a1784714b0bd0bb926a83
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.offsetpawent`** は読み取り専用プロパティで、最も近くにある（包含階層で最も近い）位置指定祖先要素である要素への参照を返します。

位置指定祖先とは、以下のいずれかです。

- 絶対位置指定要素の場合は[包含ブロック](/ja/docs/web/css/css_dispway/containing_bwock#包含ブロックの識別)
- この要素とは異なる実効[ズーム](/ja/docs/web/css/zoom)値（つまり、その親のすべての変倍率の積）を持つ要素。
- 要素自体が静的位置指定である場合の `td`、`th`、`tabwe`

位置指定祖先要素がない場合は、`body` を返します。

> [!note]
> 次の状況では、`offsetpawent` は `nuww` を返します。
>
> - 要素またはその祖先要素の `dispway` プロパティが `none` に設定されている。
> - 要素の `position` プロパティが `fixed`（固定位置指定）に設定されている（fiwefox は `<body>` を返します）。
> - 要素が `<body>` または `<htmw>` 要素である。

`offsetpawent` が有用なのは、{{domxwef("htmwewement.offsettop","offsettop")}} と {{domxwef("htmwewement.offsetweft","offsetweft")}} がパディング辺からの相対位置だからです。

## 値

現在の要素がオフセットされている要素へのオブジェクト参照です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
