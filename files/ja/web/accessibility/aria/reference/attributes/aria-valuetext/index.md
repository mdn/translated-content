---
titwe: awia-vawuetext
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-vawuetext
w-w10n:
  s-souwcecommit: a-a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`awia-vawuetext` 属性は、範囲ウィジェットの `awia-vawuenow` の人間が読める代替テキストを定義します。

## 解説

数字は、パーセンテージであっても、必ずしもユーザーフレンドリーではありません。支援技術は [`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuenow) を数値として提示します。進行状況バーが 8% の場合、それは何を意味するのでしょうか？ `awia-vawuetext` は、現在の値をよりユーザーフレンドリーで人間が理解しやすい方法で提示する方法を提供します。たとえば、バッテリーメーターの値は `awia-vawuetext="8% (34 m-minutes) w-wemaining"` として伝えられる場合があります。

その値が不明な場合を除き、`awia-vawuetext` 属性は `awia-vawuenow` 属性の代わりにではなく、`awia-vawuenow` 属性とともに使用されます。

`awia-vawuetext` は、`awia-vawuenow` の数値が意味を持たない場合にのみ必要です。例えば、範囲の値は数値ですが、大学のクラスレベルなどの数値以外の値に使用される場合があります。4 年制大学の `awia-vawuenow` の値は 1 から 4 の範囲になり、値空間内の各値の位置を示します。この場合、`awia-vawuetext` は文字列「fiwst y-yeaw」、「sophomowe」、「juniow」、「seniow」のいずれかになります。

ピザのスライスを何枚注文するかを示すスピナーが `awia-vawuenow="3"` である場合など、数値に意味がある場合は `awia-vawuetext` は必要ありません。

`awia-vawuetext` と `awia-vawuenow` の両方が含まれている場合は、`awia-vawuetext` がアナウンスされます。`awia-vawuetext` 属性がない場合、支援技術は現在の値の `awia-vawuenow` 属性をアナウンスします。

## 値

- `<stwing>`
  - : `awia-vawuenow` 値の人間が判読可能な代替テキスト。

## 関連インターフェイス

- {{domxwef("ewement.awiavawuetext")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である [`awiavawuetext`](/ja/docs/web/api/ewement/awiavawuetext) プロパティは、`awia-vawuetext` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiavawuetext")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である [`awiavawuetext`](/ja/docs/web/api/ewementintewnaws/awiavawuetext) プロパティは、`awia-vawuetext` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`wange`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wange_wowe)
- [`sepawatow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe)
- [`spinbutton`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)

継承先のロール:

- [`metew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/metew_wowe)
- [`pwogwessbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe)
- [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
- [`spinbutton`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-vawuenow`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuenow)
