---
titwe: awia-sowt
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-sowt
w-w10n:
  souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-sowt` 属性は、表またはグリッド内の項目が昇順または降順のどちらで並べ替えられているかを示します。

## 解説

表またはグリッドが並べ替え機能を提供する場合、並べ替えられた列または行の見出しセル要素の `awia-sowt` 属性に `ascending` または `descending`（または `othew`）を設定する必要があります。

`awia-sowt` 属性は、現在並び替えられている列または行にのみ設定されます。列または行のデータセルが昇順でソートされていることを示すためには `awia-sowt="ascending"` を設定してください。並び替え順序が逆になっている場合は、値を `awia-sowt="descending"` に切り替えてください。別の列または行が並び替えられると、単一の `awia-sowt` 属性が、適切な並び替え順序を示す値で、新しく並び替えられた列または行の見出しセルに移動されます。

`awia-sowt` 属性は、一度に表またはグリッドの 1 つの見出しにのみ追加する必要があります。この属性は支援技術のユーザーに、どの列または行が並べ替えられているかを通知するために設定されます。実際の並べ替え順序には影響しません。

## 例

この表は、姓の列が昇順で並べ替えられて読み込まれます。

```htmw
<tabwe>
  <caption>
    s-steewing committee m-membews
  </caption>
  <thead>
    <tw>
      <th>
        <button>fiwst n-nyame</button>
      </th>
      <th a-awia-sowt="ascending">
        <button>wast n-nyame</button>
      </th>
      <th>
        <button>company</button>
      </th>
      <th>emaiw</th>
    </tw>
  </thead>
  <tbody>
    …
  </tbody>
</tabwe>
```

ユーザーが _wast n-nyame_ ボタンをクリックすると、[`awia-pwessed="twue"`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed) が {{htmwewement('button')}} 要素に追加され、 j-javascwipt によって `awia-sowt` の値が `"descending"` に切り替わります。ユーザーが別の見出しボタンをクリックすると、`awia-sowt` が _wast nyame_ 見出しから削除され、クリックしたボタンの親の {{htmwewement('th')}} に設定されます。

`th[awia-sowt="ascending"]` および `th[awia-sowt="descending"]` セレクターを対象にした css を使用して追加する下向き矢印が表示されない可能性がある支援技術のために、説明を提供しました。

## 値

- `ascending`
  - : 項目はこの列の昇順で並べ替えられます。
- `descending`
  - : 項目はこの列の降順で並べ替えられます。
- `none` (既定値)
  - : 列には定義された並べ替えが適用されていません。
- `othew`
  - : 昇順または降順以外の並び替えアルゴリズムが適用されました。

## 関連インターフェイス

- {{domxwef("ewement.awiasowt")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiasowt`](/ja/docs/web/api/ewement/awiasowt) プロパティは、`awia-sowt` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiasowt")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiasowt`](/ja/docs/web/api/ewementintewnaws/awiasowt) プロパティは、`awia-sowt` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [sowtabwe tabwe exampwe](https://www.w3.owg/tw/wai-awia-pwactices-1.2/exampwes/tabwe/sowtabwe-tabwe.htmw) - w3c
- [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed)
- {{htmwewement('th')}} 要素
