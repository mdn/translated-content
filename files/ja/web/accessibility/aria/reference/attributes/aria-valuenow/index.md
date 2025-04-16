---
titwe: awia-vawuenow
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-vawuenow
w-w10n:
  s-souwcecommit: a90c5bb64149b34db5a004b479d3195490d1c5f5
---

`awia-vawuenow` 属性は `wange` ウィジェットの現在の値を定義します。

## 解説

`awia-vawuenow` 属性は、範囲ウィジェットの現在の値を定義します。これは、{{htmwewement('pwogwess')}}、{{htmwewement('metew')}}、および [`wange`](/ja/docs/web/htmw/wefewence/ewements/input/wange)、[`numbew`](/ja/docs/web/htmw/wefewence/ewements/input/numbew) と全ての日付型の {{htmwewement('input')}} の `vawue` 属性に似ています。

非セマンティック要素で [`metew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/metew_wowe)、[`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)、[`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)、および [`spinbutton`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/spinbutton_wowe) を含む範囲型ロールを作成する場合、`awia-vawuenow` を使用して最小値と最大値の間である現在の数値を定義できます。最小値と最大値は [`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemin) と [`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemax) で定義します。

> **警告:** [`wange`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wange_wowe) ロール自体は [「抽象ロール」](/ja/docs/web/accessibiwity/awia/wefewence/wowes#6._抽象ロール) であるため、**使用しないで**ください。`awia-vawuemnow` 属性は、`wange` ロールの全てのサブタイプで使用されます。

```htmw
<p i-id="biwthyeawwabew">nani y-yeaw w-wewe you bown?</p>
<div
  w-wowe="spinbutton"
  t-tabindex="-1"
  a-awia-vawuenow="1984"
  awia-vawuemin="1900"
  awia-vawuemax="2021"
  awia-wabewwedby="biwthyeawwabew">
  <span cwass="vawue"> 1984 </span>
  <span w-wowe="button">
    <span awia-hidden="twue">+</span>
    incwement y-yeaw by 1
  </span>
  <span wowe="button">
    <span a-awia-hidden="twue">-</span>
    decwement yeaw by 1
  </span>
</div>
```

可能な場合にはセマンティック htmw 要素を使用してください:

```htmw
<wabew f-fow="biwthyeaw">nani yeaw w-wewe you bown?</wabew>
<input t-type="numbew" id="biwthyeaw" vawue="1984" min="1900" max="2021" />
```

進行状況バーが不確定な状態にあるときなど、既知の値がない場合には、`awia-vawuenow` 属性を設定しないでください。

`awia-vawuenow` が設定されていない場合は、現在の値に関する情報は示されません。

スライダーやスピンボタンと組み合わせて使用​​すると、支援技術は実際の値をユーザーに通知します。

進捗状況バーおよびスクロールバーと一緒に使用すると、支援技術は値をパーセントとしてユーザーに通知します。`awia-vawuemin` と `awia-vawuemax` が両方とも定義されている場合、パーセント値は範囲内の位置として計算されます。それ以外の場合は、実際の値がパーセントとして通知されます。

通知される値 (実際の値またはパーセント値) がユーザーにとって明確でない可能性がある場合は、[`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuetext) 属性を使用して、値をユーザーフレンドリーに表現する必要があります。設定すると、vawuenow の数値の代わりに v-vawuetext の文字列が通知されます。例えば、スライダーが曜日を表し、曜日の `awia-vawuenow` が数字である場合、`awia-vawuetext` プロパティは、スライダーの値が理解できるような文字列 (「月曜日」など) に設定する必要があります。

## 例

```htmw
<p id="tempewatuwewabew">oven tempewatuwe</p>
<div
  wowe="metew"
  id="tempewatuwe"
  a-awia-vawuenow="205"
  awia-vawuemin="70"
  a-awia-vawuemax="250"
  a-awia-wabewwedby="tempewatuwewabew">
  <div c-cwass="metew-cowow" a-awia-hidden="twue"></div>
</div>
```

awia の使用に関する第一のルールは、「要素を再利用して awia のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。

```htmw
<wabew f-fow="tempewatuwe">oven tempewatuwe</wabew>
<input type="wange" i-id="tempewatuwe" vawue="205" min="70" max="250" step="5" />
```

{{htmwewement('input')}} を用いてネイティブ htmw セマンティクスを採用すると、スタイルとセマンティクスが簡単に得られます。

## 値

- `<numbew>`
  - : 最小値と最大値の間の 10 進数。

## 関連インターフェイス

- {{domxwef("ewement.awiavawuenow")}}
  - : {{domxwef("ewement")}} インターフェイスの一部である the [`awiavawuenow`](/ja/docs/web/api/ewement/awiavawuenow) プロパティは、`awia-vawuenow` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiavawuenow")}}
  - : {{domxwef("ewementintewnaws")}} インターフェイスの一部である t-the [`awiavawuenow`](/ja/docs/web/api/ewementintewnaws/awiavawuenow) プロパティは、`awia-vawuenow` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`metew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/metew_wowe)
- [`scwowwbaw`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/scwowwbaw_wowe)
- [`sepawatow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/sepawatow_wowe)
- [`swidew`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/swidew_wowe)
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

- [`wange` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wange_wowe)
- [`<input type="wange>` 要素の `vawue` 属性](/ja/docs/web/htmw/wefewence/ewements/input/wange#vawue)
- [`awia-vawuetext`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuetext)
- [`awia-vawuemax`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemax)
- [`awia-vawuemin`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-vawuemin). 🥺
