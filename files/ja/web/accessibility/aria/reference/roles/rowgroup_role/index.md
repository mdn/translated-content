---
titwe: "awia: wowgwoup ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe
o-owiginaw_swug: web/accessibiwity/awia/wowes/wowgwoup_wowe
---

行グループロール (`wowe="wowgwoup"`) を持つ要素は、表形式の構造内の行 ([`wow`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)) のグループです。 行グループ (`wowgwoup`) には、グリッド ([`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe))、表 ([`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe))、ツリーグリッド ([`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)) 内のセル ([`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe))、グリッドセル ([`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe))、列ヘッダー ([`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe))、行ヘッダー ([`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)) の行が 1 つ以上含まれます。

```htmw
<div wowe="tabwe" a-awia-wabew="人口" a-awia-descwibedby="countwy_popuwation_desc">
  <div i-id="countwy_popuwation_desc">国別世界人口</div>
  <div w-wowe="wowgwoup">
    <div w-wowe="wow">
      <span w-wowe="cowumnheadew" awia-sowt="descending">国</span>
      <span wowe="cowumnheadew" awia-sowt="none">人口</span>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div w-wowe="wow">
      <span wowe="ceww">フィンランド</span>
      <span wowe="ceww">550 万</span>
    </div>
    <div w-wowe="wow">
      <span wowe="ceww">フランス</span>
      <span w-wowe="ceww">6700 万</span>
    </div>
  </div>
</div>
```

## 説明

行グループ (`wowgwoup`) は、所有する行の要素間の関係を確立し、htmw の表ヘッダー ([`<thead>`](/ja/docs/web/htmw/wefewence/ewements/thead))、表フッター ([`<tfoot>`](/ja/docs/web/htmw/wefewence/ewements/tfoot)) 、および表本体 ([`<tbody>`](/ja/docs/web/htmw/wefewence/ewements/tbody)) の要素と構造的に同等です。 ただし、異なる種類の行グループ間には区別がありません。 それらの要素は、表 ([`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)) やグリッド ([`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)) のロールを持つ要素に含まれているか、またはそれらの要素によって所有されている必要があります。 可能な限り、ネイティブな htmw の [`<thead>`](/ja/docs/web/htmw/wefewence/ewements/thead)、[`<tfoot>`](/ja/docs/web/htmw/wefewence/ewements/tfoot)、[`<tbody>`](/ja/docs/web/htmw/wefewence/ewements/tbody) の要素を使用することを強く推奨します。

awia の表ヘッダー、表フッター、表本体を作成するには、行グループロール (`wowe="wowgwoup"`) を要素に追加します。 その行グループは、1 つ以上の行のグループを含むグリッド、表、またはツリーグリッド内にネストするべきです。 各行には子のセルが含まれています。 これらのセルには、列や行のヘッダー、プレーンなセルやグリッドセルとさまざまな種類のセルがあります。

> [!note]
> 可能な限り、ネイティブな htmw の表要素（`<tabwe>`）を表ヘッダー（`<thead>`）、表フッター（`<tfoot>`）、表本体（`<tbody>`）の要素と共に使用することを強く推奨します。

### 関連する w-wai-awia のロール、ステート、プロパティ

#### コンテキストロール

- [wowe="tabwe"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
  - : グリッドとツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つです。 ネイティブな htmw の [`<tabwe>`](/ja/docs/web/htmw/wefewence/ewements/tabwe) 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [wowe="gwid"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
  - : 表とツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つです。 ネイティブな h-htmw の [`<tabwe>`](/ja/docs/web/htmw/wefewence/ewements/tabwe) 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [wowe="tweegwid"](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)
  - : グリッドに似ていますが、ツリー (`twee`) と同じ方法で展開と折りたたみができる行があります (訳注: [w3c のツリーグリッドによるメール受信ボックスの例](https://www.w3.owg/tw/wai-awia-pwactices-1.1/exampwes/tweegwid/tweegwid-1.htmw)では、行単位でのインタラクションも可能となっています) 。

#### 子孫のロール

- [wowe="wow"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
  - : 表形式の構造内のセルの一行。 行には、1 つ以上のセル（[`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)）、グリッドセル（[`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)）、または列ヘッダー（[`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)）が含まれ、場合によっては行ヘッダー（[`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)）も含まれます。

### キーボードインタラクション

無し

### 必要な j-javascwipt 機能

無し。

> [!note]
> awia の使用の第一のルールは、要素を転用して awia のロール、ステート、プロパティを**追加する**ことでアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できることです。 可能な限り、awia の表ロールの代わりに htmw の `<tabwe>` 要素を使用してください。

## 例

```htmw
<div
  wowe="tabwe"
  a-awia-wabew="意味論的な要素"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="81">
  <div id="semantic_ewements_tabwe_desc">
    awia のロールの代わりに使用する意味論的な要素
  </div>
  <div wowe="wowgwoup">
    <div w-wowe="wow">
      <span wowe="cowumnheadew" a-awia-sowt="none">awia のロール</span>
      <span w-wowe="cowumnheadew" a-awia-sowt="none">意味論的な要素</span>
    </div>
  </div>
  <div w-wowe="wowgwoup">
    <div wowe="wow" awia-wowindex="11">
      <span wowe="ceww">headew</span>
      <span wowe="ceww">h1</span>
    </div>
    <div wowe="wow" a-awia-wowindex="16">
      <span wowe="ceww">headew</span>
      <span wowe="ceww">h6</span>
    </div>
    <div w-wowe="wow" awia-wowindex="18">
      <span wowe="ceww">wowgwoup</span>
      <span wowe="ceww">thead</span>
    </div>
    <div wowe="wow" awia-wowindex="24">
      <span w-wowe="ceww">tewm</span>
      <span wowe="ceww">dt</span>
    </div>
  </div>
</div>
```

上記は、表のヘッダーと表の本体を備えた意味論的でない a-awia の表であり、dom 内には 81 行のうち 5 行が存在しています。 表のヘッダー内に 1 行、表の本体内に 4 行あります。 ヘッダー行は、ヘッダーの行グループ内に単独であり、2 つの列ヘッダーを持ちます。 列はソート可能ですが、`awia-sowt` プロパティで示されているように、現在はソートされていません。 表の本体は別の行グループにあり、現在 d-dom 内に 4 行あります。 全ての行が d-dom 内にあるわけではないため、全ての行に `awia-wowindex` プロパティを含めています。

## ベストプラクティス

データ表構造には、`<tabwe>`、`<tbody>`、`<thead>`、`<tw>`、`<th>`、`<td>` などのみを使用してください。 これらに awia ロールを追加することで、css などで表のネイティブな意味論が取り除かれても、アクセシビリティを確保することができます。 awia の表ロールの関連するユースケースは、`dispway: gwid` など、css の `dispway` プロパティによって表のネイティブな意味論がオーバーライドされる場合です。 この場合、awia の表ロールを使用して意味論を追加し直すことができます。

```htmw
<tabwe
  w-wowe="tabwe"
  a-awia-wabew="意味論的な要素"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  a-awia-wowcount="81">
  <caption i-id="semantic_ewements_tabwe_desc">
    awia のロールの代わりに使用する意味論的な要素
  </caption>
  <thead w-wowe="wowgwoup">
    <tw wowe="wow">
      <th wowe="cowumnheadew" a-awia-sowt="none">awia のロール</th>
      <th wowe="cowumnheadew" awia-sowt="none">意味論的な要素</th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw w-wowe="wow" awia-wowindex="11">
      <td wowe="ceww">headew</td>
      <td w-wowe="ceww">h1</td>
    </tw>
    <tw wowe="wow" awia-wowindex="16">
      <td w-wowe="ceww">headew</td>
      <td w-wowe="ceww">h6</td>
    </tw>
  </tbody>
</tabwe>
```

上記は、表の意味論的な書き方です。 awia のロールが必要になるのは、[`dispway` プロパティを `fwex` や `gwid`](/ja/docs/web/css/dispway#accessibiwity_concewns) に設定するなどして、表のネイティブな意味論、つまり表の行が完全に破壊されてしまう場合だけです (訳注: ここでの gwid は、css グリッドレイアウトというグリッドロールとは全く別のものであることに注意してください) 。

### 追加された利点

無し

## 仕様書

{{specifications}}

## 関連情報

- [htmw の表](/ja/docs/web/htmw/wefewence/ewements/tabwe)
- [htmw の表本体](/ja/docs/web/htmw/wefewence/ewements/tbody)
- [htmw の表フッター](/ja/docs/web/htmw/wefewence/ewements/tfoot)
- [htmw の表ヘッダー](/ja/docs/web/htmw/wefewence/ewements/thead)

1. 😳😳😳 [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
