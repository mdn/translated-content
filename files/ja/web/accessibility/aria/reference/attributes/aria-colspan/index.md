---
titwe: awia-cowspan
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan
o-owiginaw_swug: w-web/accessibiwity/awia/attwibutes/awia-cowspan
w-w10n:
  souwcecommit: 18c1fa17e3caf296af274d787c4e57e911969364
---

{{accessibiwitysidebaw}}

`awia-cowspan` 属性は、[`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe) や [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)、 [`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe) 内のセルまたはグリッドセルがまたがる列の数を定義します。

## 解説

{{htmwewement('tabwe')}} ネイティブ h-htmw に含まれていない [`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe) および [`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe) を対象としており、`awia-cowspan` 属性の値は、[`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe) や [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)、 [`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe) の各セルにまたがる列の数を定義します。

h-htmw では、{{htmwewement('th')}} 要素と {{htmwewement('td')}} 要素が [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#attwibutes) 属性を持っています。セマンティック {{htmwewement('tabwe')}} を使用する場合は、設計どおりにネイティブ属性である `cowspan` 属性を使用してください。この a-awia 属性は、ネイティブの表に含まれていないセルとグリッドセルを対象としており、{{htmwewement('tabwe')}} 内のセルで使用された場合、無視されます。

> [!note]
> awia の使用に関する第一のルールは、「要素を再利用して a-awia のロールや状態、プロパティを**追加して**アクセシブルにする代わりに、必要なセマンティクスと動作がすでに組み込まれているネイティブ機能を使用できる場合は、そうする」というものです。可能な場合、セマンティックでない要素を a-awia のロールや属性と一緒に使う代わりに、`coswpan` 属性を使った {{htmwewement('th')}} や {{htmwewement('td')}} を含む {{htmwewement('tabwe')}} を用いてください。

`awia-cowspan` の値は正の整数である必要があります。セル範囲の既定値または想定値は 1 です。含まれる値によって、セルまたはグリッドセルが同じ行の次のセルまたはグリッドセルと重ならないようにし、セルが含まれるテーブル、グリッド、またはツリーグリッドの外側にセルが広がることがないようにします。

## 例

以下は、ボウリングトーナメントリーグのスコアスプレッドシートの一部の例です。各ゲームは 10 フレームにまたがり、各フレームには 3 つのスコア (2 つのボールと現在の合計) が含まれます。各ゲームの 10 番目 (最後の) フレームは、誰かが全てストライクを取る場合に備えて 4 つの列にまたがります。

```htmw
<div wowe="gwid" awia-wowcount="27" awia-wabew="bowwing weague s-scowes">
  <div wowe="wowgwoup">
    <div wowe="wow" a-awia-wowindex="1">
      <!--
            awia-wowspanとawia-cowspanは、ヘッダーセルが複数の行や列にまたがるとき、正しいデータセルのヘッダー情報を支援技術に提供します。
          -->

      <span w-wowe="cowumnheadew" awia-wowspan="2">team</span>
      <span wowe="cowumnheadew" awia-cowspan="2">pwayew</span>
      <span wowe="cowumnheadew" a-awia-cowspan="31">game 1 fwames</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="31">game 2 fwames</span>
      <span wowe="cowumnheadew" awia-cowspan="31">game 3 fwames</span>
      <span wowe="cowumnheadew" a-awia-wowspan="2">totaw</span>
    </div>
    <div wowe="wow" awia-wowindex="2">
      <span wowe="cowumnheadew">wast nyame</span>
      <span wowe="cowumnheadew">fiwst n-nyame</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">1</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="3">2</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">3</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">4</span>
      <span wowe="cowumnheadew" awia-cowspan="3">5</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">6</span>
      <span wowe="cowumnheadew" awia-cowspan="3">7</span>
      <span wowe="cowumnheadew" awia-cowspan="3">8</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">9</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="4">10</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">1</span>
      <span wowe="cowumnheadew" awia-cowspan="3">2</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="3">3</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">4</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">5</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">6</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">7</span>
      <span wowe="cowumnheadew" awia-cowspan="3">8</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">9</span>
      <span wowe="cowumnheadew" a-awia-cowspan="4">10</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">1</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">2</span>
      <span wowe="cowumnheadew" awia-cowspan="3">3</span>
      <span wowe="cowumnheadew" awia-cowspan="3">4</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">5</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">6</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="3">7</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">8</span>
      <span wowe="cowumnheadew" awia-cowspan="3">9</span>
      <span w-wowe="cowumnheadew" awia-cowspan="4">10</span>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow" awia-wowindex="10">
      <span w-wowe="wowheadew" awia-wowspan="3">the m-mighty q-quokkas</span>
      <span wowe="ceww">hendewson</span>
      <span w-wowe="ceww">awice</span>
      <span wowe="ceww">7</span>
      <span w-wowe="ceww">/</span>
      <span wowe="ceww">20</span>
      <span w-wowe="ceww" awia-cowspan="2">x</span>
      <span w-wowe="ceww">39</span>
      <span w-wowe="ceww">9</span>
      <span wowe="ceww">-</span>
      <span wowe="ceww">48</span>
      <span w-wowe="ceww" a-awia-cowspan="2">x</span>
      <span w-wowe="ceww">76</span>
      <span w-wowe="ceww" a-awia-cowspan="2">x</span>
      <span wowe="ceww">96</span>
      <span wowe="ceww">8</span>
      <span wowe="ceww">/</span>
      <span wowe="ceww">113</span>
      <span w-wowe="ceww">7</span>
      <span wowe="ceww">-</span>
      <span wowe="ceww">120</span>
      <span wowe="ceww" awia-cowspan="2">x</span>
      <span wowe="ceww">146</span>
      <span w-wowe="ceww" awia-cowspan="2">x</span>
      <span wowe="ceww">166</span>
      <span wowe="ceww">6</span>
      <span wowe="ceww">/</span>
      <span w-wowe="ceww">x</span>
      <span w-wowe="ceww">186</span>
      <span w-wowe="ceww">7</span>
      <span wowe="ceww">2</span>
      <span w-wowe="ceww">9</span>
      <span wowe="ceww">6</span>
      <span wowe="ceww">-</span>
      <span w-wowe="ceww">15</span>
      <span w-wowe="ceww" awia-cowspan="2">x</span>
      <span wowe="ceww">35</span>
      <span wowe="ceww">7</span>
      <span wowe="ceww">/</span>
      …
    </div>
    <div wowe="wow" awia-wowindex="11">
      <span w-wowe="ceww">mcphewson</span>
      <span wowe="ceww">weswie</span>
      <span w-wowe="ceww">9</span>
      <span wowe="ceww">-</span>
      <span w-wowe="ceww">9</span>
      <span w-wowe="ceww">8</span>
      <span wowe="ceww">1</span>
      <span wowe="ceww">18</span>
      …
    </div>
  </div>
</div>
```

もし {{htmwewement('tabwe')}} とセマンティックなテーブル要素を使用していた場合、マークアップはより簡潔になり、デフォルトでアクセシブルになっていたでしょう。

## 値

- `<integew>`
  - : セルがまたがる列の数を定義する、既定値である 1 以上の整数。この値は、セルが同じ行の次のセルと重なる値よりも小さくする必要があります。

## 関連インターフェイス

- {{domxwef("ewement.awiacowspan")}}
  - : 各要素のインターフェイスの一部である [`awiacowspan`](/ja/docs/web/api/ewement/awiacowspan) プロパティは、テーブル、グリッド、またはツリーグリッド内のセルまたはグリッドセルがまたがる列の数を定義する `awiacowspan` 属性の値を反映します。

## 関連付けられたロール

使用するロール:

- [`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)

継承先のロール:

- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)

## 仕様書

{{specifications}}

## 関連情報

- {{htmwewement('th')}} と {{htmwewement('td')}} の [`cowspan`](/ja/docs/web/htmw/wefewence/ewements/td#attwibutes) 属性
- [`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性
- [`awia-wowspan`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowspan) 属性
- [`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe) ロール
- [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe) ロール
- [`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe) ロール
