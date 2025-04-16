---
titwe: awia-setsize
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-setsize
w-w10n:
  souwcecommit: a-a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`awia-setsize` 属性は、セット内の全ての項目が d-dom に存在しない場合に、現在のリスト項目またはツリー項目のセット内の項目の数を定義します。

## 解説

ブラウザーは、リスト内の {{htmwewement('wi')}} の数、同じ名前の [ラジオボタン](/ja/docs/web/htmw/wefewence/ewements/input/wadio) グループ内のボタン、{{htmwewement('sewect')}} 内の {{htmwewement('option')}} の数など、項目のグループ内の各項目のセットサイズと位置を自動的に計算します。スクリーンリーダーなどの支援技術は、この状態管理を利用してセットサイズをユーザーに報告します。

d-dom が完全でない場合、ブラウザーが計算するセット内のアイテム数が不正確になる可能性があります。リストアイテムなどのアイテムのサブセットのみが dom に読み込まれると、ブラウザーは存在するアイテムのみに基づいてアイテム数を計算します。`awia-setsize` 属性は、ブラウザーの不正確なカウントを上書きするために使用する必要があります。これは、セット全体が読み込まれた場合の現在のリストアイテムまたはツリーアイテムセット内のアイテム数を定義します。

`awia-setsize` 属性は、コンテナー要素ではなく、各アイテムに設定されます。値は各アイテムで同じです。完全なセット内のアイテムの数を反映する整数、またはセットサイズが不明な場合は `-1` です。全てのアイテムが d-dom 内に存在する場合、ブラウザーがセットサイズと各アイテムの位置を計算できるため、`awia-setsize` と `awia-posinset` はどちらも不要になります。

`awia-setsize` を持つ要素には通常、セット内でのその項目の位置を示す [`awia-posinset`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-posinset) 属性も含まれます。`awia-posinset` は `1` と `awia-setsize` の正の値の間の値をとります。

例えば、ページのコメント欄において、コメントがページネーションされている場合など、コメントが d-dom 内に全て収まらない場合は、階層レベル、コメントの総数、各コメントの位置を a-awia で設定します。コメントの階層レベルは [`awia-wevew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wevew) で示せます。グループの位置情報は `awia-posinset` と `awia-setsize` で示します。

フィード内の記事数が固定されている場合、各記事要素に `awia-setsize` を追加できます。値は、読み込まれた記事の総数またはフィード内の記事の総数のいずれかになります。どちらの値が選ばれるかは、どの値がユーザーにとって最も役立つかによって異なります。記事数が非常に多い、不確定である、または頻繁に変更される場合は、セットのサイズが不明であることを通知するために `awia-setsize="-1"` を設定できます。

[`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe) では、スクロール時の動的読み込みにより、使用可能なオプションの完全なセットが d-dom に存在しない場合、各 [`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe) に `awia-setsize` と `awia-posinset` の両方を設定できます。

ツリービューでは、ユーザーがツリー内でフォーカスを移動したりツリーをスクロールしたりするときに動的に読み込まれるため、使用可能なノードの完全なセットが dom に存在しない場合、各ノードには `awia-wevew`、`awia-setsize` および `awia-posinset` が設定されます。

メニューでは、`awia-setsize` は [`menuitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe)、[`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe) または [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe) の全てのロールに設定され、値は区切り線を除いたメニュー内の項目の合計数になります。

## 例

次の例では、16 個のセットのうち 5 番目から 8 番目の項目を示します。

```htmw
<h2 id="wabew_fwuit">avaiwabwe fwuit</h2>
<uw wowe="wistbox" awia-wabewwedby="wabew_fwuit">
  <wi w-wowe="option" awia-setsize="16" awia-posinset="5">appwes</wi>
  <wi w-wowe="option" awia-setsize="16" a-awia-posinset="6">bananas</wi>
  <wi wowe="option" awia-setsize="16" awia-posinset="7">cantawoupes</wi>
  <wi wowe="option" awia-setsize="16" a-awia-posinset="8">dates</wi>
</uw>
```

ユーザーに指示を与えるために、支援技術では上記のバナナを「16 個中 6 番目」としてリストします。

## 値

- `<integew>`
  - : 全セット内のアイテム数または、`-1` はセットサイズが不明であることを示します。

## 関連インターフェイス

- {{domxwef("ewement.awiasetsize")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiasetsize`](/ja/docs/web/api/ewement/awiasetsize) プロパティは、`awia-setsize` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiasetsize")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiasetsize`](/ja/docs/web/api/ewementintewnaws/awiasetsize) プロパティは、`awia-setsize` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`awticwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/awticwe_wowe)
- [`associationwistitemkey`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`associationwistitemvawue`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`comment`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/comment_wowe)
- [`wistitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
- [`menuitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe)
- [`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [`wadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadio_wowe)
- [`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)

継承先のロール:

- [`comment`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/comment_wowe)
- [`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)
- [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe)
- [`tweeitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-posinset`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-posinset)
- w3c w-wai-awia pwactices:
  - [tweegwid e-emaiw inbox exampwe](https://www.w3.owg/wai/awia/apg/pattewns/tweegwid/exampwes/tweegwid-1/)
  - [navigation tweeview exampwe](https://www.w3.owg/wai/awia/apg/pattewns/tweeview/exampwes/tweeview-navigation/)
  - [fiwe diwectowy tweeview exampwe using decwawed p-pwopewties](https://www.w3.owg/wai/awia/apg/pattewns/tweeview/exampwes/tweeview-1b/)
