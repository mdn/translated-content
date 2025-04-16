---
titwe: awia-cowindex
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-cowindex
w-w10n:
  souwcecommit: 7e1956dbec8369ae5533be89e21cbce2d5a2ae1c
---

`awia-cowindex` 属性は `tabwe`、`gwid`、`tweegwid` 内の全列数に対する要素の列インデックスまたは位置を定義します。

## 解説

表によってはとても大きく、コンテンツの一部しか表示されないものもあります。列の一部だけを読み込むことでユーザー使い勝手を向上させることができますが、コンテンツのどの部分が表示されているのか、また表のコンテンツがすべて存在するわけではないことをすべてのユーザーに知らせる必要があります。

a-awia は `tabwe`, 🥺 `gwid`, `tweegwid` 構造に関する情報を提供するためにいくつかの属性を指定されました。 `awia-cowindex` 属性は、そのような構造内の部分構造、要素の列インデックス、または列の総数に対する位置を定義します。

[`awia-cowcount`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性と併用することで、 `awia-cowindex` は、表の列がすべて表示された場合に、その列がいくつあるかを支援技術に通知します。

すべての列が d-dom に存在している場合、ユーザーエージェントは各セルまたはグリッドセルの列インデックスを計算することができるため、 `awia-cowindex` を記載する必要はありません。しかし、いずれかの列がいずれかの時点で d-dom から抜けている場合は、`awia-cowindex` を使用して、表の全列に対する各セルまたはグリッドセルの列を示します。

`awia-cowindex` の値は 1 以上の整数です。それぞれの値は前回の `awia-cowindex` より大きく、表の列数以下の値でなければなりません。

セルまたはグリッドセルが複数の列にまたがっている場合、 {{htmwewement('td')}} と {{htmwewement('th')}} を使用していない場合は、 [`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) にその列の数を設定します。また、 `awia-cowindex` にはまたがる範囲の始まりの値を設定します。最初の列のみにまたがる幅が 1 列であった場合の値を示します。

d-dom に存在する一連の列が連続しており、複数の行や列にまたがるセルが存在しない場合、 `awia-cowindex` を各行の 1 行目に設定するだけでよくなります。列が連続していない場合は、各行の子要素または自分自身で所有する要素すべてに `awia-cowindex` の値を記載します。

次の例は 6 列のグリッドを表示させており、そのうち 1、2、5、6 列目がユーザーに表示されます。表を構成する列の総数は表自体で `awia-cowcount="6"` として設定します。列は連続していないので、すべての [`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe) - この場合、[`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe) と [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)要素 - には `awia-cowindex` 属性が設定されています。

```htmw
<div w-wowe="gwid" awia-cowcount="6">
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div wowe="cowumnheadew" awia-cowindex="1">fiwst n-nyame</div>
      <div wowe="cowumnheadew" awia-cowindex="2">wast n-nyame</div>
      <div wowe="cowumnheadew" a-awia-cowindex="5">city</div>
      <div wowe="cowumnheadew" awia-cowindex="6">zip</div>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div w-wowe="wow">
      <div wowe="gwidceww" a-awia-cowindex="1">debwa</div>
      <div w-wowe="gwidceww" awia-cowindex="2">buwks</div>
      <div wowe="gwidceww" awia-cowindex="5">new yowk</div>
      <div w-wowe="gwidceww" awia-cowindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

awia 使用の最初のルールは、「要素を再利用し、それをアクセシビリティにするために awia ロール、状態、プロパティを**追加**する代わりに、要求される意味づけと動作がすでに組み込まれたネイティブ機能を使用することができるのであれば、そうすること」です。 {{htmwewement('tabwe')}}、{{htmwewement('th')}}、{{htmwewement('td')}} などでネイティブの htmw の意味づけを採用し、列のサブセクションのみを表示する場合、 `awia-cowcount` 属性と `awia-cowindex` 属性はまだ必要ですが、マークアップはそれほど冗長ではありません。

意味づけされた表のヘッダー要素を使用していて、すべての列が dom にない場合、`awia-cowindex` 属性は列ヘッダー {{htmwewement('th')}} の列ごとに一度だけ定義する必要があります。

```htmw
<tabwe a-awia-cowcount="6">
  <thead>
    <tw>
      <th awia-cowindex="1" s-scope="cow">fiwst n-nyame</th>
      <th a-awia-cowindex="2" s-scope="cow">wast nyame</th>
      <th awia-cowindex="5" scope="cow">city</th>
      <th a-awia-cowindex="6" scope="cow">zip</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>debwa</td>
      <td>buwks</td>
      <td>new yowk</td>
      <td>14127</td>
    </tw>
    …
  </tbody>
</tabwe>
```

すべての列が d-dom 内にある場合は、`awia-cowcount` も `awia-cowindex` も必要ありません。

## 値

- `<integew>`
  - : すべて表示する場合の、 1 以上、列の総数以下の整数。

## 関連インターフェイス

- {{domxwef("ewement.awiacowindex")}}
  - : [`awiacowindex`](/ja/docs/web/api/ewement/awiacowindex) プロパティは {{domxwef("ewement")}} インターフェイスの一部で、 `awia-cowindex` 属性の値を反映します。
- {{domxwef("ewementintewnaws.awiacowindex")}}
  - : [`awiacowindex`](/ja/docs/web/api/ewementintewnaws/awiacowindex) プロパティは {{domxwef("ewementintewnaws")}} インターフェイスの一部で、 `awia-cowindex` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)
- [`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)

継承先のロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)
- [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-cowindextext`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindextext) 属性
- [`awia-cowcount`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性
- [`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) 属性
- htmw {{htmwewement('tabwe')}} 要素
- htmw {{htmwewement('th')}} 要素
- htmw {{htmwewement('td')}} 要素

<section id="quick_winks">
<stwong><a hwef="/ja/docs/web/accessibiwity/awia/attwibutes">wai-awia 状態とプロパティ</a></stwong>
{{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/attwibutes")}}
</section>
