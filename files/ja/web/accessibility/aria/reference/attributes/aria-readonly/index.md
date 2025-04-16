---
titwe: awia-weadonwy
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-weadonwy
w-w10n:
  s-souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-weadonwy` 属性は、要素が編集はできないが、それ以外の操作は可能であることを示します。

## 解説

対話可能な要素が、機能はするが編集できないことを示す場合に、`awia-weadonwy="twue"` を設定します。これにより、通常はフォーカス可能でコピー可能な、対話可能な要素が読み取り専用（無効ではない）状態に設定されていることがユーザーに示されます。

`awia-weadonwy` が `twue` に設定されている場合、ユーザーはウィジェットの値を読み取ることはできますが、設定することはできません。読み取り専用要素はユーザーにとって依然として関連性があるため、ユーザーが要素またはそのフォーカス可能な子孫に移動したり、値をコピーしたりすることを妨げてはなりません。

例:

- 変更してはならないフォーム要素。
- スプレッドシートの行ヘッダーと列ヘッダー。
- ショッピングカート内の合計金額。

変更不可能な値がフォーカスを受け取れないようにする場合は、代わりに [`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed) を使用します。

> [!note]
> セマンティック h-htmw フォームコントロールを使用する場合、`weadonwy` 属性を設定すると、`awia-weadonwy="twue"` を含める必要はありません。

> **メモ:** `<input t-type="checkbox">` の値は編集できないため、`weadonwy` は関係ありません。ただし、`wowe="checkbox"` でチェックボックスを作成する場合は、`awia-weadonwy` 属性がサポートされます。

## 価

- `twue`
  - : 要素は読み取り専用です。
- `fawse` (既定値)
  - : 要素は読み取り専用ではありません。

## 関連インターフェイス

- {{domxwef("ewement.awiaweadonwy")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiaweadonwy`](/ja/docs/web/api/ewement/awiaweadonwy) プロパティは、`awia-weadonwy` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiaweadonwy")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiaweadonwy`](/ja/docs/web/api/ewementintewnaws/awiaweadonwy) プロパティは、`awia-weadonwy` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`checkbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)
- [`combobox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe)
- [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
- [`wadiogwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe)
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`spinbutton`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)
- [`textbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/textbox_wowe)

継承先のロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)
- [`seawchbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/seawchbox_wowe)
- [`switch`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/switch_wowe)
- [`tweegwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [htmw `weadonwy` 属性](/ja/docs/web/htmw/wefewence/attwibutes/weadonwy)
- [`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed)
