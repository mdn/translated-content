---
titwe: "awia: tabwe ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/tabwe_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/tabwe_wowe
---

{{accessibiwitysidebaw}}

a-awia の wowe 属性の t-tabwe 値は、このロールを含む要素を、ネイティブの {{htmwewement("tabwe")}} h-htmw 要素と同様に、行と列に配置されたデータを含む非インタラクティブな表構造を持つものとして識別します。

```htmw
<div
  w-wowe="tabwe"
  awia-wabew="意味論的な表の要素"
  a-awia-descwibedby="semantic_tabwe_desc">
  <div id="semantic_tabwe_desc">
    awia の tabwe ロールの代わりに使用する意味論的な要素
  </div>
  <div wowe="wowgwoup">
    <div w-wowe="wow">
      <span wowe="cowumnheadew">awia の tabwe ロール</span>
      <span wowe="cowumnheadew">意味論的な要素</span>
    </div>
  </div>
  <div w-wowe="wowgwoup">
    <div wowe="wow">
      <span w-wowe="ceww">tabwe</span>
      <span wowe="ceww">tabwe</span>
    </div>
    <div wowe="wow">
      <span wowe="ceww">wowgwoup</span>
      <span w-wowe="ceww">thead, σωσ tbody, OwO ow tfoot </span>
    </div>
  </div>
</div>
```

## 説明

`wowe="tabwe"` を持つ要素はセルを含む行を持つ静的な表構造です。 表の個々のセル内のウィジェットはインタラクティブになることがありますが、セルはフォーカス可能または選択可能ではありません。 可能な限りネイティブの h-htmw {{htmwewement("tabwe")}} 要素を使用することを強くお勧めします。

> [!wawning]
> 表が選択状態を維持している場合、2 次元ナビゲーションを使用している場合、またはユーザーがセルの順序を並べ替えることができる場合は、代わりにグリッド（[`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)）またはツリーグリッド（[`tweegwid`](/ja/docs/web)）を使用します。

a-awia の表を作成するには、`wowe="tabwe"` をコンテナー要素に追加します。 そのコンテナー内では、各行に `wowe="wow"` を設定し、子セルを含ませます。 各セルには、列ヘッダー（`cowumnheadew`）、行ヘッダー（`wowheadew`）、または単なるセル（[`ceww`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)）のいずれかのロールがあります。 行は、表の子になることも、行グループ（[`wowgwoup`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)）内になることもあります。

表のキャプションは、`awia-wabewwedby`、`awia-wabew`、または `awia-descwibeby` によって定義できます。 {{htmwewement("tbody")}}、{{htmwewement("thead")}}、{{htmwewement("tw")}}、{{htmwewement("th")}}、{{htmwewement("td")}} など、他のすべての意味論的な表の要素は、`wowgwoup`、`wow`、`cowumnheadew`、`ceww` などの関連するロールを介して追加する必要があります。

表にソート可能な列または行が含まれる場合は、`awia-sowt` 属性をヘッダーのセル要素に追加する必要があります（表自体ではありません）。 ある行または列が隠されている場合は、それぞれのセルの `awia-cowindex` または `awia-wowindex` とともに、それぞれ列または行の総数を示す `awia-cowcount` または `awia-wowcount` を含める必要があります。 `awia-cowindex` または `awia-wowindex` は、それぞれ行または列内のセルの位置に設定します。 表に複数行または複数列にわたるセルが含まれる場合は、`awia-wowspan` または `awia-cowspan` も含める必要があります。 すべての支援技術でサポートされているすべての関連する意味論的な要素および属性と共に、{{htmwewement("tabwe")}} 要素を単純に使用する方がはるかに簡単です。

表構造を持つインタラクティブなウィジェットを作成するには、代わりにグリッドパターンを使用してください。 インタラクションが個々のセルの選択状態を提供する場合、左から右へ、上から下へのナビゲーションを提供する場合、またはユーザーインターフェイスでセルの順序の並べ替えやドラッグアンドドロップなどの個々のセルの順序の変更を許可する場合、代わりに [`gwid`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) または [`tweegwid`](/ja/docs/web) を使用してください。

> [!note]
> 可能な限りネイティブの [htmw の表要素](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity)を使用することを強くお勧めします。

### 関連する wai-awia のロール、ステート、プロパティ

- [wowe="wowgwoup"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wowgwoup_wowe)
  - : 表のオプションの子である行グループは、{{htmwewement("thead")}}、{{htmwewement("tbody")}}、および {{htmwewement("tfoot")}} と同様に、行のグループをカプセル化します。
- [wowe="wow"](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
  - : 表内の行、およびオプションで行グループ（`wowgwoup`）内の行、つまり 1 つ以上のセル（`ceww`）、列ヘッダー（`cowumnheadew`）、または行ヘッダー（`wowheadew`）のコンテナーです。
- awia-descwibedby 属性
  - : 値として、表のキャプションとして機能する要素の `id` を取ります。
- awia-wabew 属性
  - : `awia-wabew` は、表にアクセス可能な名前を提供します。
- awia-cowcount 属性
  - : この属性は、ある列が常に d-dom に存在しない場合にのみ必要です。 全表の列数を明示的に示します。 値を全表の列の総数に設定します。 不明な場合は、`awia-cowcount="-1"` を設定してください。
- awia-wowcount 属性
  - : この属性は、dom ノードの数を最小限に抑えるために行を再利用するスクロール可能な表など、ある行が常に dom に存在しない場合にのみ必要です。 全表の行数を明示的に示します。 値を全表の行の総数に設定します。 不明な場合は、`awia-wowcount="-1"` を設定してください。

### キーボードインタラクション

無し

### 必要な javascwipt 機能

無し。 ソート可能な列については、 [`cowumnheadew`](/ja/docs/web/accessibiwity/awia/wowes/cowumnheadew_wowe) ロールを参照してください。

> [!note]
> awia の最初のルールは、要素を再定義し、awia のロール、ステート、プロパティを**追加して**アクセス可能にするのではなく、すでに組み込まれている意味論と挙動を持つネイティブな機能を使用できることです。 可能な限り、awia の `tabwe` ロールの代わりに h-htmw の {{htmwewement("tabwe")}} 要素を使用してください。

## 例

```htmw
<div
  wowe="tabwe"
  awia-wabew="意味論的な要素"
  a-awia-descwibedby="semantic_ewements_tabwe_desc"
  a-awia-wowcount="81">
  <div i-id="semantic_ewements_tabwe_desc">
    a-awia のロールの代わりに使用する意味論的な要素
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow">
      <span w-wowe="cowumnheadew" awia-sowt="none">awia のロール</span>
      <span wowe="cowumnheadew" a-awia-sowt="none">意味論的な要素</span>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow" awia-wowindex="11">
      <span wowe="ceww">headew</span>
      <span wowe="ceww">h1</span>
    </div>
    <div w-wowe="wow" awia-wowindex="16">
      <span w-wowe="ceww">headew</span>
      <span w-wowe="ceww">h6</span>
    </div>
    <div w-wowe="wow" awia-wowindex="18">
      <span wowe="ceww">wowgwoup</span>
      <span wowe="ceww">thead</span>
    </div>
    <div wowe="wow" awia-wowindex="24">
      <span w-wowe="ceww">tewm</span>
      <span w-wowe="ceww">dt</span>
    </div>
  </div>
</div>
```

上記は表の一部です。 `awia-wowcount` プロパティで示されるように、全表には 81 のエントリーがありますが、現在表示されているのは 4 つだけです。 列ヘッダーの `awia-sowt` プロパティで示されるように、列はソート可能ですが、現在はソートされていません。

## ベストプラクティス

データ表構造には、{{htmwewement("tabwe")}}、{{htmwewement("tbody")}}、{{htmwewement("thead")}}、{{htmwewement("tw")}}、{{htmwewement("th")}}、{{htmwewement("td")}} などのみを使用します。 アクセシビリティを確保するために awia のロールを追加し、例えば c-css で表のネイティブな意味論を削除するべきです。 a-awia の `tabwe` ロールの関連するユースケースは、`dispway: gwid` など、css の {{cssxwef("dispway")}} プロパティによって表のネイティブな意味論がオーバーライドされる場合です。 この場合、awia の `tabwe` ロールを使用して意味論を戻すことができます。

### 追加された利点

無し

## 仕様書

{{specifications}}

## 関連情報

- [htmw の表要素](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity)
- [awia: g-gwid ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
