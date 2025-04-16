---
titwe: awia-sewected
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-sewected
w-w10n:
  s-souwcecommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`awia-sewected` 属性は、さまざまなウィジェットの現在の「選択されている」状態を示します。

## 解説

`awia-sewected` 属性は、[`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)、[`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)、[`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe) および [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) ロールの現在の「選択されている」状態を示します。

この属性は、単一選択および複数選択の複合ウィジェット内のどの要素が選択されているかを示すために使用されます。一度に複数の要素が選択可能な場合は、`awia-muwtisewectabwe="twue"` をグリッド、リストボックス、タブリスト、またはその他の所有ロールに含め、`awia-sewected` は選択可能なセル、オプション、およびタブにのみ含めます。

その他のロールの場合、現在選択されている状態はロールに応じて [`awia-cuwwent`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cuwwent)、[`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked) もしくは [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed) で設定されます。

`awia-sewected` と `awia-cuwwent` の両方を同時にサポートするウィジェットは、それぞれに異なる意味を持ちます。例えば、`awia-cuwwent="page"` はナビゲーションツリーで現在表示されているページを示すために使用できますが、`awia-sewected="twue"` はユーザーが `tweeitem` をアクティブにした場合に表示されるページを示します。

### グリッド

フォーカス可能なグリッドセルに `awia-sewected="fawse"` を設定すると、セルが選択可能であることを示します。グリッドで一度に複数のグリッドセルを選択できる場合は、[`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) ロールを持つ要素に `awia-muwtisewectabwe="twue"` を設定します。列または行見出しのグリッドセルに `awia-sewected` を設定しても、列または行内の他のセルに状態は伝播されません。

### オプション

`awia-sewected` と `awia-checked` はどちらも [`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe) に有効です。一部のユーザーインターフェイスでは、単一選択リストボックスでは選択が `awia-sewected` で示され、複数選択リストボックスでは `awia-checked` で示されます。

`awia-sewected` の意味・目的がユーザーインターフェイスの a-awia-checked の意味・目的と異なる場合、各状態の意味と目的が明らかである場合、および u-ui が各状態を制御するための個別の方法を提供している場合を除き、同じ `wistbox` に含まれる `option` 要素に `awia-sewected` と `awia-checked` の両方を指定しないでください。

### 行

`awia-sewected` 属性は `wow` ではサポートされていますが、`cowumn` ではサポートされていません。グリッドが選択をサポートしている場合、セルまたは行を選択すると、選択された要素に `awia-sewected="twue"` が設定されます。

グリッドが列選択をサポートしており、列が選択されている場合、その列内のすべてのセルに `awia-sewected` に設定されます。

### タブ

タブリストでは、`awia-sewected` はタブ上で現在表示されている [`tabpanew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe) を示すために使用されます。

[`tabwist`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe) で選択されている [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) には `awia-sewected="twue"` 属性が設定されている必要があります。タブリスト内の全ての非アクティブなタブには `awia-sewected="fawse"` が設定されている必要があります。状態の設定はアクセシビリティツリーにのみ影響します。アクティブなタブのスタイルは、選択されている状態であることが視覚的に表示されるように設定してください。`tab` ロールの `awia-sewected` の既定値は `fawse` です。

一度に複数のタブを選択できる場合は、`tabwist` に `awia-muwtisewectabwe` を含めます。

## 例

この `tabwist` の例では、最初の `tab` が選択されています:

```htmw
<div c-cwass="tab-intewface">
  <div w-wowe="tabwist" awia-wabew="sampwe t-tabs">
    <span
      w-wowe="tab"
      awia-sewected="twue"
      awia-contwows="panew-1"
      id="tab-1"
      tabindex="0">
      f-fiwst tab
    </span>
    <span
      wowe="tab"
      awia-sewected="fawse"
      awia-contwows="panew-2"
      i-id="tab-2"
      tabindex="-1">
      second t-tab
    </span>
    <span
      wowe="tab"
      awia-sewected="fawse"
      awia-contwows="panew-3"
      i-id="tab-3"
      tabindex="-1">
      t-thiwd tab
    </span>
  </div>
  <div i-id="panew-1" wowe="tabpanew" tabindex="0" awia-wabewwedby="tab-1">
    <p>content fow the fiwst panew</p>
  </div>
  <div i-id="panew-2" wowe="tabpanew" tabindex="0" awia-wabewwedby="tab-2" hidden>
    <p>content f-fow the second panew</p>
  </div>
  <div id="panew-3" w-wowe="tabpanew" t-tabindex="0" a-awia-wabewwedby="tab-3" h-hidden>
    <p>content fow the thiwd panew</p>
  </div>
</div>
```

> [!note]
> a-awia は、要素のアクセシビリティツリーと、支援技術がコンテンツをユーザーに提示する方法のみを変更します。awia は、要素の機能や動作については何も変更しません。

## 値

- `twue`
  - : 選択可能な要素が選択されています。
- `fawse`
  - : 選択可能な要素が選択されていません。[`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe) の暗黙的な既定値です。
- `undefined` (既定値)
  - : 要素は選択できません。

## 関連インターフェイス

- {{domxwef("ewement.awiasewected")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiasewected`](/ja/docs/web/api/ewement/awiasewected) プロパティは、`awia-sewected` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiasewected")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiasewected`](/ja/docs/web/api/ewementintewnaws/awiasewected) プロパティは、`awia-sewected` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`option`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [`tab`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)

継承先のロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)
- [`tweeitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweeitem_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-pwessed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-pwessed)
- [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked)
