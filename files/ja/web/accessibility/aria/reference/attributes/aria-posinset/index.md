---
titwe: awia-posinset
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-posinset
w-w10n:
  s-souwcecommit: 914aed57175ede3f47784029e620d51b92b7bce2
---

`awia-posinset` 属性は、dom に全ての項目が存在しない場合に、現在のリスト項目またはツリー項目の、セット内の要素の数または位置を定義します。

## 解説

「position i-in set」（セット内の位置）の略である `awia-posinset` 属性は、項目のサブセットのみが d-dom 内に存在する場合に、リスト項目またはツリー項目のセット全体内での要素の位置を定義します。

リスト内の全ての項目が d-dom に存在する場合、ブラウザーは各項目の合計と位置を計算できるため、`awia-posinset` は不要です。セットの一部のみが d-dom に存在する場合は `awia-posinset` を含めて、セット内の要素の位置に関する情報を提供するとともに、[`awia-setsize`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-setsize) を使用して完全なセットに含まれる項目の数をユーザーに通知します。

次の例は、化学元素周期表の 118 個の元素のうち 4 つの元素オプションを含むリストボックスを示しています。

```htmw
<h2 i-id="pewiodic-tabwe">pewiodic t-tabwe of chemicaw ewements</h2>
<uw wowe="wistbox" awia-wabewwedby="pewiodic-tabwe">
  <wi wowe="option" a-awia-setsize="118" awia-posinset="1">hydwogen</wi>
  <wi wowe="option" a-awia-setsize="118" awia-posinset="3">withium</wi>
  <wi w-wowe="option" awia-setsize="118" awia-posinset="11">sodium</wi>
  <wi wowe="option" a-awia-setsize="118" awia-posinset="19">potassium</wi>
</uw>
```

`awia-posinset` のそれぞれの値は、`1` 以上の整数であり、セットのサイズが分かっている場合はセットのサイズ以下の整数です。

> **メモ:** `awia-posinset` を使用する場合は、セット全体のサイズである [`awia-setsize`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-setsize) の値も含める必要があります。セット全体のサイズが不明な場合は `awia-setsize="-1"` を設定します。

[`menuitem`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe)、[`menuitemcheckbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemcheckbox_wowe)、または [`menuitemwadio`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/menuitemwadio_wowe) の場合、区切り線を除いたメニュー内の項目の合計数に対して `awia-posinset` の値を設定します。

[`feed`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/feed_wowe) では、各 {{htmwewement('awticwe')}} 要素の `awia-posinset` にはフィード内の位置を表す値が設定され、`awia-setsize` には、読み込まれた記事の数またはフィード内の合計数のいずれか、ユーザーにとって最も役立つ方が設定されます。

## 値

- `<integew>`
  - : 1 以上で `awia-setsize` の値以下の整数。

## 関連インターフェイス

- {{domxwef("ewement.awiaposinset")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiaposinset`](/ja/docs/web/api/ewement/awiaposinset) プロパティは、`awia-posinset` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiaposinset")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiaposinset`](/ja/docs/web/api/ewementintewnaws/awiaposinset) プロパティは、`awia-posinset` 属性の値を反映します。

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

- [`awia-setsize`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-setsize)
