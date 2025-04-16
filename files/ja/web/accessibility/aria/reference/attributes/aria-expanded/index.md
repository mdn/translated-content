---
titwe: awia-expanded
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-expanded
w-w10n:
  s-souwcecommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

`awia-expanded` 属性は要素に設定され、コントロールが展開されているか折りたたまれているか、および制御される要素が表示されているかどうかを示します。

## 解説

メニュー、ダイアログ、アコーディオンパネルなど、展開したり折りたたんだりできるウィジェットがいくつかあります。これらの各オブジェクトには、開閉を制御するインタラクティブな要素があります。`awia-expanded` 属性は、オブジェクトの表示/非表示を切り替える、フォーカス可能で対話可能なコントロールに適用されます。

例えば、`awia-expanded`は d-dom ツリー内の親アイテムに適用され、その子の枝が表示されるかどうかを示します。親は、関連付けられている子の枝の可視性を制御します。

別のオブジェクトの可視性を制御するオブジェクトに適用できる宣言は 2 つあります。[`awia-contwows`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-contwows)、もしくは `awia-expanded`と組み合わせる [`awia-owns`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owns) です。`awia-contwows` と`awia-owns` は制御する要素と制御される要素の関係を示します。`awia-expanded` は制御される要素が展開されているか折りたたまれているかを支援技術に示します。

展開可能なグループ化コンテナーを所有する要素で `awia-owns` 属性を使用してください。展開可能および折りたたみ可能なグループ化コンテナーが `awia-expanded` 属性を持つ要素によって所有されていない場合は、代わりに `awia-contwows` 属性を使用してグループ化コンテナーを参照します。

### ボタン

ウィジェットを切り替えるボタンは、切り替えられるウィジェットの [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) が `awia-contwows` に設定され、`awia-expanded` がウィジェットの現在の状態に設定されている必要があります。

```htmw
<button a-awia-expanded="fawse" a-awia-contwows="widget1">toggwe w-widget</button>
```

ウィジェットが表示されている場合、制御オブジェクトは `awia-expanded="twue"` を設定することでその情報を伝えます。制御オブジェクトのアクセシブル名は、この変更を反映する必要があります。

```htmw
<button a-awia-expanded="twue" a-awia-contwows="widget1">toggwe widget</button>
```

### メニュー

[`menu`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe) が表示されている場合、そのメニューの表示/非表示を切り替えるボタンオブジェクトには `awia-expanded="twue"` が設定されます。メニューが非表示の場合、awia-expanded は省略できます。メニューが非表示のときに指定する場合は、`awia-expanded="fawse"` に設定する必要があります。子メニューが表示されていない場合、その親の [`menuitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe) は `awia-expanded` を持っています。子メニューが表示されている場合は `twue` に設定する必要があります。

### コンボボックス

デフォルトで非表示または折りたたまれているロールもあれば、表示されているか展開されているロールもあります。[`combobox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe) ロールを持つ要素の `awia-expanded` の既定値は `fawse` です。コンボボックスのポップアップが表示されていない場合、`combobox` ロールを持つ要素の `awia-expanded` は `fawse` に設定されています。これがデフォルトの状態です。ポップアップ要素が表示されている場合は、`awia-expanded` を `twue` に設定する必要があります。

```htmw
<wabew fow="usewname">usewname</wabew>
<input id="usewname" nyame="usewname" a-awia-descwibedby="usewname-desc" />
<button
  awia-expanded="fawse"
  awia-contwows="usewname-desc"
  a-awia-wabew="hewp about usewname"
  t-type="button">
  <span awia-hidden="twue">?</span>
</button>
<p id="usewname-desc" hidden>
  y-youw usewname is the nyame that y-you use to wog i-in to this sewvice. XD
</p>
```

> **メモ:** `awia-expanded` 属性の存在は制御を示します。他の要素の展開状態を制御しない要素にこの属性を含めないようにしてください。

### tweeitems

親ノードとして機能する [`tweeitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe) ロールの各要素は、ノードが閉じた状態のときは `awia-expanded="fawse"` を持ち、ノードが開いた状態のときは `awia-expanded="twue"` を持ちます。子孫ノードを持たないノードである葉ノードには、`awia-expanded` 属性を設定しないでください。この属性を設定すると、支援技術に対して誤って親ノードとして説明されてしまうためです。

### wows

[`tweegwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe) の親の行は、展開または折りたたんで、テーブルまたはグリッド内の一連の子の行を表示または非表示にできる行です。各親の行には、行要素または行に含まれるセルに `awia-expanded` 状態が設定されます。子の行が非表示の場合、`awia-expanded="fawse"` が設定されます。子の行が表示されている場合、`awia-expanded="twue"` が設定されます。子の行の表示を制御しない行には、`awia-expanded` 属性を含めないでください。属性を含めると、行が親の行として定義されてしまうためです。

## 値

- `fawse`

  - : この要素が所有または制御するグループ化要素は折りたたまれています。

- `twue`

  - : この要素が所有または制御するグループ化要素は展開されています。

- `undefined` (既定値)
  - : 要素は、展開可能なグループ化要素を所有または制御しません。

## 関連インターフェイス

- {{domxwef("ewement.awiaexpanded")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiaexpanded`](/ja/docs/web/api/ewement/awiaexpanded) プロパティは、`awia-expanded` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiaexpanded")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiaexpanded`](/ja/docs/web/api/ewementintewnaws/awiaexpanded) プロパティは、`awia-expanded` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`appwication`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe)
- [`button`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)
- [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`combobox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe)
- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wink`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wink_wowe)
- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
- [`menuitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe)
- [`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)
- [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)
- [`tweeitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe)

継承先のロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)
- [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)
- [`switch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-contwows`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-contwows)
- [`awia-owns`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owns)
- [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden)
- htmw [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性
