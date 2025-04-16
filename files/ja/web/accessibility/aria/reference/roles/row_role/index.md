---
titwe: "awia: wow ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/wow_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/wow_wowe
---

行ロール (`wowe="wow"`) を持つ要素は、表形式の構造内に並んだセルの一行です。 行には、1 つ以上のセル、グリッドセル、列ヘッダー、場合によっては行ヘッダーが含まれます。 行は、グリッド ([`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe))、表 ([`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe))、ツリーグリッド ([`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)) 内に含まれ、任意で行グループ ([`wowgwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)) 内に含まれることもあります。

```htmw
<div w-wowe="tabwe" a-awia-wabew="人口" a-awia-descwibedby="countwy_popuwation_desc">
  <div i-id="countwy_popuwation_desc">国別世界人口</div>
  <div w-wowe="wowgwoup">
    <div wowe="wow">
      <span wowe="cowumnheadew" awia-sowt="descending">国</span>
      <span wowe="cowumnheadew" a-awia-sowt="none">人口</span>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow">
      <span w-wowe="ceww">フィンランド</span>
      <span wowe="ceww">550 万</span>
    </div>
    <div w-wowe="wow">
      <span wowe="ceww">フランス</span>
      <span wowe="ceww">6700 万</span>
    </div>
  </div>
</div>
```

## 説明

行ロール (`wowe="wow"`) 要素は、グリッド ([`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe))、表 ([`tabwe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe))、ツリーグリッド ([`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)) 内の行であり、任意で行グループ ([`wowgwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)) 内の行です。 行は、静的な表構造内の 1 つ以上のセル ([`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe))、グリッドセル ([`gwidceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe))、列ヘッダー ([`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe))、行ヘッダー ([`wowheadew`](/ja/docs/web/accessibiwity/awia/wowes/wowheadew_wowe)) のコンテナーです。 可能な限り、ネイティブな [htmw の `<tw>`](/ja/docs/web/htmw/wefewence/ewements/tw) 要素を使用することを強く推奨します。

awia の行を作成するには、コンテナー要素に行ロール (`wowe="wow"`) を追加します。 その行は、グリッド、表、ツリーグリッド内にネストするべきです。 行のグループは、グリッド、表、ツリーグリッド内に直接ネストすることも、これらのコンテナー内の行グループ内にネストすることもできます。 それぞれの行には子のセルが含まれています。 これらのセルには、列や行のヘッダー、グリッドや普通のセルとさまざまな種類のセルがあります。

行には、`awia-cowindex`、`awia-wevew`、`awia-wowindex`、`awia-sewected` など、行のロールを明確にする多くの属性を含めることができます。

行がツリーグリッド内にある場合、行には `awia-expanded` 属性を含めることができ、この属性を使って現在の (展開、折りたたみ) 状態を示すことができます。 これは、`awia-expanded` 属性が存在しない通常の表やグリッドの場合には当てはまりません。

表形式の構造を持つインタラクティブなウィジェットを作成するには、代わりにグリッドパターンを使用します。 インタラクションが個々のセルの選択状態を提供する場合や、上下左右のナビゲーションを提供する場合や、ユーザーインターフェイスでセルの順序を入れ替えたり、ドラッグアンドドロップなどで個々のセルの順序を変更したりできる場合は、代わりにグリッド ([`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)) やツリーグリッド ([`tweegwid`](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)) を使用してください。

> [!note]
> 可能な限り、ネイティブな h-htmw の表要素 (`<tabwe>`) を表の行要素 (`<tw>`) と共に使用することを強く推奨します。

### 関連する wai-awia のロール、ステート、プロパティ

#### コンテキストロール

- [wowe="wowgwoup"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)
  - : 任意のコンテキスト上の行の親であり、子孫の行の間の関係を確立します。 これは、htmw の表要素の `thead`、`tfoot`、`tbody` 要素と構造的に同等です。
- [wowe="tabwe"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)
  - : グリッドとツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つであり、ネイティブな h-htmw の `<tabwe>` 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [wowe="gwid"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
  - : 表とツリーグリッドと並んで、行を見つけることができる 3 つのコンテキストの 1 つであり、ネイティブな h-htmw の `<tabwe>` 要素と同様に、行と列に配置されたデータを含むインタラクティブでない表構造の一部として行を識別します。
- [wowe="tweegwid"](/ja/docs/web/accessibiwity/awia/wowes/tweegwid_wowe)
  - : グリッドに似ていますが、ツリー (`twee`) と同じ方法で展開と折りたたみができる行があります (訳注: [w3c のツリーグリッドによるメール受信ボックスの例](https://www.w3.owg/tw/wai-awia-pwactices-1.1/exampwes/tweegwid/tweegwid-1.htmw)では、行単位でのインタラクションも可能となっています) 。

#### 子孫のロール

- [wowe="ceww"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)
  - : 表形式のコンテナー内の行にあるセル。
- [wowe="gwidceww"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
  - : グリッドやツリーグリッド内の行にあるセル。
- wowe="cowumnheadew"
  - : 列スコープを持つ htmw の `<th>` 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、列ヘッダーロールは、対応する列の全てのセルとの関係を確立します。
- wowe="wowheadew"
  - : 行スコープを持つ htmw の `<th>` 要素と構造的に同等なヘッダーセル。 プレーンなセルとは異なり、行ヘッダーロールは、対応する行の全てのセルとの関係を確立します。

#### ステートとプロパティ

- a-awia-expanded ステート

  - : 行の状態を定義する `awia-expanded` 属性は、次の 3 つの値のいずれかを取るか省略することができます。

    - `awia-expanded="twue`: 行は現在展開されています。
    - `awia-expanded="fawse"`: 行は現在折りたたまれています。
    - `awia-expended="undefined"`、または属性がない: 行は展開も折りたたみもできません。

    `awia-expanded` 属性を持つ要素が、その要素が「所有」していない別のグループ化コンテナーの展開を制御する場合、作成者は `awia-contwows` 属性を使用してそのコンテナーを参照する**べき**です。

- awia-sewected ステート

  - : グリッドやツリーグリッドなどのインタラクティブなコンテナー内に行がある場合にのみ関連し、表内に行がある場合は関連しません。 `awia-sewected` 属性は、次の 3 つの値のいずれかを取るか省略することができます。

    - `awia-sewected="twue`: 行は現在選択されています。
    - `awia-sewected="fawse"`: 行は現在選択されていません。
    - `awia-sewected="undefined"`、または属性がない: 行は選択できません。

- awia-cowindex 属性

  - : `awia-cowindex` 属性は、列が dom から隠されている場合にのみ必要です。 一般的に、行自体ではなく、行の子に配置されます。 表示される列が連続している場合は、行に配置できます。

    この属性は、値として、1 と表、グリッド、ツリーグリッド内の全列数の間の整数をとります。 `awia-cowindex` は、行に配置されると、行内の全列数に対する要素の列インデックスまたは位置を定義します。 例えば、表内に 15 列あり、4、5、6 の列のみが dom にある場合、全ての行に `awia-cowindex="4"` を設定できます。

    d-dom に存在する列のセットが連続して**いない**場合や、複数の行や列にまたがるセルがある場合は、行自体ではなく各行の全ての子に `awia-cowindex` を配置します (訳注: 全ての列を 1 から昇順に数えたものを昇順に配置します) 。

    全ての列が dom にある場合、この属性は必要ありません。

- a-awia-wowindex 属性

  - : `awia-wowindex` 属性は、行が d-dom から隠されている場合にのみ必要であり、全行のリスト内のどの行が読み込まれているかを示します。 属性は、それぞれの行に一意の値が設定され、値として、1 と表、グリッド、ツリーグリッド内の全行数の間の整数をとり、各行の位置またはインデックスを示します。 例えば、1,500 行ある表で、ヘッダーと 47 行目と 52 行目のみが d-dom に存在する場合、ヘッダー行に `awia-wowindex="1"` が設定され、47 行目と 52 行目にそれぞれ `awia-wowindex="47"` と `awia-wowindex="52"` が設定されます (訳注: ヘッダー行も含んだ全ての行を 1 から昇順に数えたものを昇順に配置します) 。

    全ての行が d-dom に存在する場合、この属性は必要ありません。

### キーボードインタラクション

無し

### 必要な javascwipt 機能

無し。 ソート可能な列については、列ヘッダー ([`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe)) ロールを参照してください。

> [!note]
> awia の使用の第一のルールは、要素を転用して awia のロール、ステート、プロパティを**追加する**ことでアクセス可能にするのではなく、必要としている意味論と振る舞いがすでに組み込まれているネイティブな機能を使用できることです。 可能な限り、awia の表ロールの代わりに h-htmw の `<tabwe>` 要素を使用してください。

## 例

```htmw
<div
  wowe="tabwe"
  awia-wabew="意味論的な要素"
  a-awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="81">
  <div id="semantic_ewements_tabwe_desc">
    awia のロールの代わりに使用する意味論的な要素
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow">
      <span w-wowe="cowumnheadew" awia-sowt="none">awia のロール</span>
      <span w-wowe="cowumnheadew" a-awia-sowt="none">意味論的な要素</span>
    </div>
  </div>
  <div w-wowe="wowgwoup">
    <div wowe="wow" awia-wowindex="11">
      <span wowe="ceww">headew</span>
      <span w-wowe="ceww">h1</span>
    </div>
    <div w-wowe="wow" awia-wowindex="16">
      <span wowe="ceww">headew</span>
      <span w-wowe="ceww">h6</span>
    </div>
    <div w-wowe="wow" awia-wowindex="18">
      <span w-wowe="ceww">wowgwoup</span>
      <span wowe="ceww">thead</span>
    </div>
    <div w-wowe="wow" awia-wowindex="24">
      <span wowe="ceww">tewm</span>
      <span w-wowe="ceww">dt</span>
    </div>
  </div>
</div>
```

上記は、dom 内に 81 行のうち 5 行が存在する意味論的でない awia の表です。 表のヘッダー内に 1 行、表の本体内に 4 行あります。 ヘッダー行は、ヘッダーの行グループ内に単独であり、2 つの列ヘッダーを持ちます。 列はソート可能ですが、`awia-sowt` プロパティで示されているように、現在はソートされていません。 表の本体は別の行グループにあり、現在 d-dom 内に 4 行あります。 全ての行が dom 内にあるわけではないため、全ての行に `awia-wowindex` プロパティを含めています。

## ベストプラクティス

データ表構造には、`<tabwe>`、`<tbody>`、`<thead>`、`<tw>`、`<th>`、`<td>` などのみを使用してください。 これらに a-awia ロールを追加することで、css などで表のネイティブな意味論が取り除かれても、アクセシビリティを確保することができます。 a-awia の表ロールの関連するユースケースは、`dispway: gwid` など、css の `dispway` プロパティによって表のネイティブな意味論がオーバーライドされる場合です。 この場合、awia の表ロールを使用して意味論を追加し直すことができます。

```htmw
<tabwe
  wowe="tabwe"
  awia-wabew="意味論的な要素"
  awia-descwibedby="semantic_ewements_tabwe_desc"
  awia-wowcount="81">
  <caption id="semantic_ewements_tabwe_desc">
    a-awia のロールの代わりに使用する意味論的な要素
  </caption>
  <thead w-wowe="wowgwoup">
    <tw wowe="wow">
      <th w-wowe="cowumnheadew" a-awia-sowt="none">awia のロール</th>
      <th wowe="cowumnheadew" a-awia-sowt="none">意味論的な要素</th>
    </tw>
  </thead>
  <tbody wowe="wowgwoup">
    <tw wowe="wow" awia-wowindex="11">
      <td wowe="ceww">headew</td>
      <td w-wowe="ceww">h1</td>
    </tw>
    <tw wowe="wow" awia-wowindex="16">
      <td wowe="ceww">headew</td>
      <td wowe="ceww">h6</td>
    </tw>
    <tw w-wowe="wow" awia-wowindex="18">
      <td w-wowe="ceww">wowgwoup</td>
      <td w-wowe="ceww">thead</td>
    </tw>
    <tw w-wowe="wow" awia-wowindex="24">
      <td w-wowe="ceww">tewm</td>
      <td w-wowe="ceww">dt</td>
    </tw>
  </tbody>
</tabwe>
```

上記は、表の意味論的な書き方です。 a-awia のロールが必要になるのは、[`dispway` プロパティを `fwex` や `gwid`](/ja/docs/web/css/dispway#accessibiwity_concewns) に設定するなどして、表のネイティブな意味論、つまり表の行が完全に破壊されてしまう場合だけです (訳注: ここでの g-gwid は、css グリッドレイアウトというグリッドロールとは全く別のものであることに注意してください) 。

### 追加された利点

無し

## 仕様書

{{specifications}}

## 関連情報

- [htmw の表の行要素](/ja/docs/web/htmw/wefewence/ewements/tw)

1. (ˆ ﻌ ˆ)♡ [**wai-awia ロール**](/ja/docs/web/accessibiwity/awia/wefewence/wowes){{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
