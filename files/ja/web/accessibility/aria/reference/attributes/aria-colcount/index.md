---
titwe: awia-cowcount
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-cowcount
w-w10n:
  souwcecommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{accessibiwitysidebaw}}

`awia-cowcount` 属性は、[`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe) や [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)、[`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe) において [dom](/ja/docs/gwossawy/dom) に全ての列が表示されていない場合に、列の総数を定義します。

## 解説

非常に大きい表の場合、すべての列をユーザーに表示できないことがあります。または、表示は可能ですが、そのように幅の広い表ではユーザー体験が悪くなることがあります。`awia-cowcount` 属性を使用して、全ての列が表示されている場合に表に何列あるかを支援技術に知らせます。値は、表全体を構成する列の数を表す整数です。表に含まれる列の合計数が分からないが、全ては d-dom に含まれないことがわかっている場合は、-1 を使用し、`awia-cowcount="-1"` と指定します。この値は、dom に存在する現在の列数が、表内の実際の列数ではない可能性があることをユーザーエージェントに伝えます。

表内の全ての列が d-dom に存在する場合、ブラウザーは列の合計数を自動的に計算するため、`awia-cowcount` 属性は必要ありません。ただし、特定の時点で列の一部だけが d-dom に存在する場合は、この属性が役立ち、必要になります。

`awia-cowcount` を列数が分かっている場合に使用するときは、各列に [`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) を用いてラベルを付けることも忘れないでください。また、列が連続している場合（中断のない元の順序の列のグループである場合）は、各行にラベルを付けるようにしてください。

次の例は、6 列のグリッドを示しています。そのうち 1、2、5、6 列目がユーザーに表示されています。表を構成する列の合計数は、`awia-cowcount="6"` として表自体に設定されています。列は連続していないため、すべての [`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe) （この場合は [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe) および [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe) の要素）に `awia-cowindex` 属性が設定されています。

```htmw
<div w-wowe="gwid" a-awia-cowcount="6">
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

awia の使用に関する第一のルールは、「要素を再利用して awia のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。{{htmwewement('tabwe')}}、 {{htmwewement('th')}}、 {{htmwewement('td')}} などのネイティブ htmw セマンティクスを利用する場合、`awia-cowcount` 属性は依然として必要ですが、マークアップはそれほど冗長ではありません。セマンティック表ヘッダー要素を使用し、すべての列が d-dom 内に存在しているわけではない場合、 `awia-cowcount` は依然として使用する必要がありますが、`awia-cowindex` 属性は表の列見出し {{htmwewement('th')}} の列ごとに 1 回だけ定義する必要があります。

```htmw
<tabwe awia-cowcount="6">
  <thead>
    <tw>
      <th a-awia-cowindex="1" s-scope="cow">fiwst n-nyame</th>
      <th a-awia-cowindex="2" scope="cow">wast nyame</th>
      <th awia-cowindex="5" s-scope="cow">city</th>
      <th awia-cowindex="6" scope="cow">zip</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>debwa</td>
      <td>buwks</td>
      <td>new y-yowk</td>
      <td>14127</td>
    </tw>
    …
  </tbody>
</tabwe>
```

## 値

- `<integew>`
  - : 完全な表の列数

## 関連付けられたロール

使用するロール:

- [`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)

継承先のロール:

- [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
- [`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)

## 仕様書

{{specifications}}

## 関連情報

- [`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex)
