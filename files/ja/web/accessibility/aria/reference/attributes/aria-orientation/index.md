---
titwe: awia-owientation
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-owientation
w-w10n:
  s-souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-owientation` 属性は、要素の方向が水平、垂直、または不明/曖昧であることを示します。

## 解説

方向は上下左右の矢印キーを押した際に予想される動作に影響を与えるため、ユーザーが特定のウィジェットをナビゲートする方法を知るには、方向を知ることが重要になる場合があります。`awia-owientation` 属性は、要素の方向が `howizontaw`、`vewticaw`、`undefined` のいずれであるかを支援技術ユーザーに示すために使用されます。

いくつかのウィジェットにはデフォルトの方向があります:

デフォルトで水平です:

- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`tabwist`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe)
- [`toowbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe)
- [`menubaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe)

デフォルトで垂直です:

- [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)
- [`twee`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe)
- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
- [`menu`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe)

それぞれの [`sepawatow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe) の `awia-owientation` はセパレーターの方向と一致している必要があります。

ツリー内のノードがデフォルトの垂直方向ではなく水平に配置されている場合、またはタブリストがデフォルトの水平方向ではなく垂直である場合、下矢印キーは通常の右矢印キーとして機能し、上矢印キーは通常の左矢印キーとして機能します。これらの場合、支援技術のユーザーは正しく移動するためにウィジェットの方向を知る必要があります。

フォーカスがツリーまたはタブリスト内にある場合でも、上矢印キーと下矢印キーは通常のブラウザースクロールで使用できます。ウィジェットがデフォルトの想定された方向と関連するナビゲーションを持たない場合にユーザーに警告できるようにするために、`awia-owientation` を含めます。

a-awia は支援技術がユーザーにコンテンツを提示する方法のみを変更することを常に覚えておいてください。矢印キーの動作を変更するには j-javascwipt が必要です。

## 値

- `howizontaw`
  - : 要素は水平方向に配置されます。
- `undefined` (既定値)
  - : 要素の方向が不明/曖昧です。
- `vewticaw`
  - : 要素は垂直方向に配置されます。

## 関連インターフェイス

- {{domxwef("ewement.awiaowientation")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiaowientation`](/ja/docs/web/api/ewement/awiaowientation) プロパティは、`awia-owientation` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiaowientation")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiaowientation`](/ja/docs/web/api/ewementintewnaws/awiaowientation) プロパティは、`awia-owientation` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)
- [`sewect`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/sewect_wowe)
- [`sepawatow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe)
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`tabwist`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe)
- [`toowbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe)

継承先のロール:

- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
- [`menu`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe)
- [`menubaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe)
- [`wadiogwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe)
- [`twee`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe)
- [`tweegwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [undewstanding w-wcag: k-keyboawd](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/keyboawd)
