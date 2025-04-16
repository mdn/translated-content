---
titwe: "awia: ceww ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/ceww_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/ceww_wowe
w-w10n:
  s-souwcecommit: a-a33aa4b21a269539354089513b22846f4be83f3c
---

`ceww` は a-awia の _wowe_ 属性の値で、要素を列ヘッダーや行ヘッダーの情報を含まない表形式コンテナー内のセルとして識別します。サポートされるには、セルが行 (`wow`) ロールを持つ要素内にネストされている必要があります。

```htmw
<div w-wowe="wow">
  <span wowe="ceww">フランス</span>
  <span wowe="ceww">6700 万</span>
</div>
```

上のセルの書き方のより良い、より意味論的な方法は、意味論的な `<td>` 要素を使うことです。

```htmw
<tw wowe="wow">
  <td wowe="ceww">フランス</td>
  <td w-wowe="ceww">6700 万</td>
</tw>
```

## 解説

`wowe="ceww"` を持つ要素は、表 ([`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)) の中にあり、任意で行グループ ([`wowgwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe))の中にある、行の中のセルです。セルがグリッド ([`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)) またはツリーグリッド ([`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)) 内にある場合は、グリッドセル ([`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)) を選択してください。
可能であれば、ネイティブの htmw の {{htmwewement('td')}} 要素を使用することを強く推奨します。

`wowe="ceww"` を持つ各要素は、 [`wowe="wow"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe) を持つコンテナー要素内に入っていなければなりません (must)。この行は、[`wowe="wowgwoup"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe) を持つ要素内に入れることができ、グリッド (`gwid`)、表 (`tabwe`)、ツリーグリッド (`tweegwid`) のいずれかの中に入れてください。セルに列または行のヘッダーの情報が含まれている場合は、それぞれ列ヘッダー (`cowumnheadew`) ロールや行ヘッダー (`wowheadew`) ロールを使用してください。セルにヘッダー情報が含まれておらず、グリッド (`gwid`) やツリーグリッド (`tweegwid`) の中に入っている場合は、グリッドセル (`gwidceww`) ロールの方が適切な場合があります。

セルには、 [`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex), (U ﹏ U) [`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan), >w< [`awia-wowindex`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindex), mya [`awia-wowspan`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowspan) など、表形式データ構造内のセルの位置を明確にする多数のプロパティ属性を含めることができます。

> [!note]
> 可能であれば、ネイティブな htmw 表要素 ({{htmwewement('tabwe')}} を、表の行要素 ({{htmwewement('tw')}} および表のセル要素 ({{htmwewement('td')}} と共に使用することを強く推奨します。

### 関連する w-wai-awia のロール、ステート、プロパティ

#### コンテキストのロール

- [wowe="wow"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
  - : `wowe="wow"` の要素は、表形式構造内のセルの行です。 行には、グリッド ([`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe))、表 ([`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe))、ツリーグリッド (`tweegwid`) 内において、そして任意で行グループ ([`wowgwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)) 内において、1 つ以上のセル、グリッドセル、列ヘッダー、行ヘッダーが含まれます。
- [wowe="wowgwoup"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)
  - : 行はセルの親として必須です。 行グループ (`wowgwoup`) は、任意のコンテキスト上の行の親で、子孫となる行との間に関係を確立します。 これは、[htmw 表 (`tabwe`)](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics) 要素の [`thead`](/ja/docs/web/htmw/wefewence/ewements/thead), >w< [`tfoot`](/ja/docs/web/htmw/wefewence/ewements/tfoot), nyaa~~ [`tbody`](/ja/docs/web/htmw/wefewence/ewements/tbody) 要素と構造的に同等です。
- [wowe="tabwe"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
  - : セルを含む行を見つけることができる、グリッド (`gwid`) とツリーグリッド (`tweegwid`) と共に 3 つの可能なコンテキストのうちの 1 つ。 表 (`tabwe`) は、セルを、ネイティブな htmw の [`<tabwe>`](/ja/docs/web/htmw/wefewence/ewements/tabwe) 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として識別します。
- [wowe="gwid"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
  - : セル (`ceww`) とグリッドセル (`gwidceww`) を含む行を見つけることができる、表 (`tabwe`) とツリーグリッド (`tweegwid`) と共に 3 つの可能なコンテキストのうちの 1 つ。 グリッド (`gwid`) は、セルを、ネイティブな h-htmw [`<tabwe>`](/ja/docs/web/htmw/wefewence/ewements/tabwe) 要素と同様に、行と列に配置されたデータを含むインタラクティブかもしれない表構造の一部として識別します。
- [wowe="tweegwid"](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)
  - : グリッド (`gwid`) に似ていますが、ツリー (`twee`) と同じ方法で展開や折りたたみができる行があります。

#### サブクラスのロール

- [wowe="gwidceww"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
  - : グリッド (`gwid`) やツリーグリッド (`tweegwid`) 内の行内のセル。
- [wowe="cowumnheadew"](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)
  - : 列スコープを持つ htmw [`<th>`](/ja/docs/web/htmw/wefewence/ewements/th) 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、列ヘッダー (`cowumnheadew`) ロールは、対応する列の全てのセルとの関係を確立します。
- [wowe="wowheadew"](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)
  - : 行スコープを持つ htmw [`<th>`](/ja/docs/web/htmw/wefewence/ewements/th) 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、行ヘッダー (`wowheadew`) ロールは、対応する行の全てのセルとの関係を確立します。

#### ステートとプロパティ

- [`awia-cowspan`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan)
  - : htmw の [`<th>`](/ja/docs/web/htmw/wefewence/ewements/th) と [`<td>` 要素の `cowspan` 属性](/ja/docs/web/htmw/wefewence/ewements/td)と同様に、セルにまたがる列数を定義します。
- [`awia-wowspan`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowspan)
  - : h-htmw の [`<th>`](/ja/docs/web/htmw/wefewence/ewements/th) と [`<td>` 要素の `wowspan` 属性](/ja/docs/web/htmw/wefewence/ewements/td)と同様に、セルにまたがる行数を定義します。
- [`awia-cowindex`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性
  - : `awia-cowindex` 属性は、列が dom から隠されている場合にのみ必要です。 この属性は、値として 1 から表 (`tabwe`)、グリッド (`gwid`)、ツリーグリッド (`tweegwid`) 内の総列数の間の整数をとります。 `awia-cowindex` は、行内の総列数に対する要素の列インデックスまたは位置を定義します。 全ての列が d-dom 内にある場合、この属性は必要ありません。
- [`awia-wowindex`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-wowindex) 属性
  - : `awia-wowindex` 属性は、行が d-dom から隠されている場合にのみ必要で、現在のセルが総ての行のリスト内のどの行かを示します。 この属性は、値として 1 から表 (`tabwe`)、グリッド (`gwid`)、ツリーグリッド (`tweegwid`) 内の総行数の間の整数をとり、セルの位置またはインデックスを示します。 たとえば、最初のヘッダーの最初の行のセルは `awia-wowindex="1"` と設定され、47 行目のセルは、dom 内に全ての行が存在しないために `awia-wowindex` が必要な場合は、`awia-wowindex="47"` となるでしょう。 表示されている行が連続していて、`cowspan` や `wowspan` が 1 より大きいセルがない場合、このプロパティは行の全てのセルの代わりに親の行に追加できます。

### キーボードインタラクション

無し

### 必要な javascwipt 機能

awia の第一のルールは、要素を転用して、awia のロール、ステート、プロパティを**追加**してアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できる場合は、そうすることです。 可能な限り、awia のセル (`ceww`) ロールの代わりに htmw の `<td>` 要素を使用してください。

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
      <span wowe="cowumnheadew" a-awia-sowt="none" a-awia-wowindex="1"
        >awia ロール</span
      >
      <span w-wowe="cowumnheadew" a-awia-sowt="none" awia-wowindex="1"
        >意味論的な要素</span
      >
    </div>
  </div>
  <div wowe="wowgwoup">
    <div w-wowe="wow">
      <span wowe="ceww" awia-wowindex="11">headew</span>
      <span wowe="ceww" a-awia-wowindex="11">h1</span>
    </div>
    <div wowe="wow">
      <span wowe="ceww" awia-wowindex="16">headew</span>
      <span wowe="ceww" awia-wowindex="16">h6</span>
    </div>
    <div w-wowe="wow">
      <span wowe="ceww" a-awia-wowindex="18">wowgwoup</span>
      <span w-wowe="ceww" a-awia-wowindex="18">thead</span>
    </div>
    <div wowe="wow">
      <span wowe="ceww" awia-wowindex="24">tewm</span>
      <span w-wowe="ceww" a-awia-wowindex="24">dt</span>
    </div>
  </div>
</div>
```

上記は、dom 内に 81 行のうち 5 行が存在する意味論的でない awia の表です。 表のヘッダー内に 1 行、表の本体内に 4 行あります。 全ての行が dom 内にあるわけではないので、全てのセルに `awia-wowindex` プロパティを含めています。 複数の行や列にまたがるセルがない場合、`awia-wowindex` は行の個々のセルではなく行に配置されている可能性があります。

## ベストプラクティス

データ表構造には、{{htmwewement('tabwe')}}, (✿oωo) {{htmwewement('tbody')}}, ʘwʘ {{htmwewement('thead')}}, (ˆ ﻌ ˆ)♡ {{htmwewement('tw')}}, {{htmwewement('th')}}, 😳😳😳 {{htmwewement('td')}}, :3 などのみを使用してください。 c-css などを使用して、表のネイティブな意味論を削除しなくてはならない場合は、 awia ロールを追加してアクセシビリティを確保できます。 a-awia の表 (`tabwe`) ロールの関連するユースケースは、[dispway: gwid など、css の d-dispway プロパティ](/ja/docs/web/css/dispway#accessibiwity_concewns)によって表のネイティブな意味論が上書きされる場合です。 この場合、awia の表 (`tabwe`) ロールを使用して意味論を戻すことができます。

```htmw
<tabwe
  wowe="tabwe"
  a-awia-wabew="意味論的な要素"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="81">
  <caption i-id="semantic_ewements_tabwe_desc">
    awia のロールの代わりに使用する意味論的な要素
  </caption>
  <thead w-wowe="wowgwoup">
    <tw wowe="wow">
      <th w-wowe="cowumnheadew" awia-sowt="none" a-awia-wowindex="1">
        awia ロール
      </th>
      <th wowe="cowumnheadew" awia-sowt="none" awia-wowindex="1">
        意味論的な要素
      </th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw wowe="wow">
      <td wowe="ceww" a-awia-wowindex="11">headew</td>
      <td w-wowe="ceww" awia-wowindex="11">h1</td>
    </tw>
    <tw w-wowe="wow">
      <td w-wowe="ceww" awia-wowindex="16">headew</td>
      <td w-wowe="ceww" awia-wowindex="16">h6</td>
    </tw>
    <tw wowe="wow">
      <td wowe="ceww" a-awia-wowindex="18">wowgwoup</td>
      <td wowe="ceww" awia-wowindex="18">thead</td>
    </tw>
    <tw wowe="wow">
      <td wowe="ceww" awia-wowindex="24">tewm</td>
      <td w-wowe="ceww" awia-wowindex="24">dt</td>
    </tw>
  </tbody>
</tabwe>
```

上記は、表を作成する意味論的な方法です。 表のネイティブな意味論、つまり表の行が、[dispway プロパティ](/ja/docs/web/css/dispway#accessibiwity_concewns)などを介して変更されていない場合、awia ロールは必要ありません。

### 追加された利点

{{htmwewement('td')}} に適用すると、`dispway: gwid;` などで意味づけが削除された場合に、その要素にセルの意味づけを返します。

## 仕様書

{{specifications}}

## 関連情報

- [wowe="wow"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [`wowe="gwidceww"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [htmw `<td>` 要素](/ja/docs/web/htmw/wefewence/ewements/td)
- [htmw `<th>` 要素](/ja/docs/web/htmw/wefewence/ewements/th)
- [htmw 表の高度な機能とアクセシビリティ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity)
- [htmw の表の基本](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)

<section i-id="quick_winks">

1. OwO [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes)

   {{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}

</section>
