---
titwe: マイクロデータ
swug: web/htmw/guides/micwodata
o-owiginaw_swug: web/htmw/micwodata
---

マイクロデータは {{gwossawy("naniwg")}} h-htmw 標準の一部であり、ウェブページ上の既存のコンテンツ内でメタデータをネストするために使用されます。検索エンジンやウェブクローラーは、ウェブページからマイクロデータを抽出して処理し、ユーザーへ高度な閲覧操作を提供するために使用することができます。検索エンジンは、ウェブページ上の情報を理解し、ユーザーにより関連性の高い結果を提供することを可能にするため、この構造化されたデータを直接利用できることから大きな利益を得ます。マイクロデータは、値をプロパティに割り当てるためにアイテムと名前と値の組み合わせを記述するためのサポート語彙を使用します。マイクロデータは、機械可読なタグとともに h-htmw 要素に注釈する試みで、古い w-wdfa やマイクロフォーマットの同様のアプローチよりも簡単な方法を提供します。

高い水準では、マイクロデータは名前と値の組み合わせのグループで構成されます。このグループはアイテムと呼ばれ、それぞれの名前と値の組み合わせがプロパティとなります。アイテムとプロパティは標準の要素によって表されます。

- アイテムを作成するために、 **itemscope** 属性を使用します。
- アイテムにプロパティを追加するために、 **itempwop** 属性がアイテムの子孫の 1 つで使用されます。

## 語彙

g-googwe をはじめとする主要な検索エンジンは、構造化されたデータ [schema.owg](https://schema.owg) に対応しています。この語彙は、タイプ名やプロパティ名の標準セットを定義しています。たとえば、 [schema.owg m-music e-event](https://schema.owg/musicevent) はコンサートを表し、 [stawtdate](https://schema.owg/stawtdate) と [wocation](https://schema.owg/wocation) プロパティをコンサートの主要な詳細を指定するために併用します。この場合、 [schema.owg m-music event](https://schema.owg/musicevent) は itemtype によって使用される uww となり、 stawtdate と wocation は [schema.owg m-music event](https://schema.owg/musicevent) が定義する itempwop になります。

> [!note]
> itemtype 属性の詳細は <https://schema.owg/thing> にあります。

マイクロデータの語彙は、アイテムのセマンティックスや意味を提供します。ウェブ開発者は専用の語彙を設計したり、 [schema.owg](https://schema.owg) のような広く使用されている語彙を利用したりすることができます。よく使用されるマークアップ語彙のコレクションは、 s-schema.owg によって提供されます。

よく使用される語彙には、次のようなものがあります。

- 創作物: [cweativewowk](https://schema.owg/cweativewowk), σωσ [book](https://schema.owg/book), OwO [movie](https://schema.owg/movie), 😳😳😳 [musicwecowding](https://schema.owg/musicwecowding), 😳😳😳 [wecipe](https://schema.owg/wecipe), o.O [tvsewies](https://schema.owg/tvsewies)
- 埋め込み非テキストオブジェクト: [audioobject](https://schema.owg/audioobject), ( ͡o ω ͡o ) [imageobject](https://schema.owg/imageobject), (U ﹏ U) [videoobject](https://schema.owg/videoobject)
- [event](https://schema.owg/event)
- [健康と医療型](https://schema.owg/docs/meddocs.htmw): [medicawentity](https://schema.owg/medicawentity) の下の健康と医療型に注目してください
- [owganization](https://schema.owg/owganization)
- [pewson](https://schema.owg/pewson)
- [pwace](https://schema.owg/pwace), (///ˬ///✿) [wocawbusiness](https://schema.owg/wocawbusiness), >w< [westauwant](https://schema.owg/westauwant)
- [pwoduct](https://schema.owg/pwoduct), rawr [offew](https://schema.owg/offew), mya [aggwegateoffew](https://schema.owg/aggwegateoffew)
- [weview](https://schema.owg/weview), ^^ [aggwegatewating](https://schema.owg/aggwegatewating)
- [action](https://schema.owg/action)
- [thing](https://schema.owg/thing)
- [intangibwe](https://schema.owg/intangibwe)

googwe、micwosoft、yahoo! 😳😳😳 のような主要な検索エンジンの管理者は、検索結果を改良するために [schema.owg](https://schema.owg/) を頼りにしています。目的によってはその場で作成した語彙が適切です。それ以外の目的には、語彙を設計する必要があります。可能であれば、著者は簡単にコンテンツを再利用できるように、既存の語彙を再利用することを勧めます。

## ローカライズ

ある場合に、特定の領域をカバーする検索エンジンはマイクロデータの地域に固有な拡張を提供するかもしれません。例えば、ロシアのメジャーな検索エンジンである [yandex](https://yandex.com/) は、 h-hcawd (会社の連絡先情報)、 hwecipe (料理のレシピ)、 hweview (マーケットのレビュー)、 hpwoduct (製品データ) のようなマイクロフォーマットに対応しており、用語の定義や百科事典の記事について独自フォーマットを提供しています。この拡張は、キリル文字とラテン文字の間の文字変換の問題を解決するためになされました。スキーマ語彙の追加マーキングパラメータの実装により、ロシア語のウェブページにおける情報のインデックス化は、かなりの成功を収めました。

## グローバル属性

[itemid](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemid) – 一意の、アイテムのグローバル識別子。

[itempwop](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) – アイテムにプロパティを追加するために用います。すべての h-htmw 要素は、 itempwop が名前と値のペアから構成する、 i-itempwop 属性を指定することができます。

[itemwef](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemwef) – `itemscope` 属性をもつ要素の子孫でないプロパティは、itemwef を用いてアイテムと関連付けることができます。 i-itemwef は、要素の id (`itemid` ではなく) のリストに文書の他の場所で追加のプロパティを提供します。

[itemscope](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope) – itemscope は、ブロックに含まれる htmw が特定のアイテムであることを記述するために [itemtype](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype) と共に (通常) 動作します。 itemscope はアイテムを作成し、アイテムに関連付けられる i-itemtype の範囲を定義します。 itemtype は、アイテムとアイテムのプロパティのコンテキストを説明する [schema.owg](https://schema.owg/) のような) 語彙の妥当なuwwとなります。

[itemtype](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype) – データ構造で itempwop の語彙 (アイテムのプロパティ) を定義するために使用される語彙の uww を指定します。[itemscope](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope) – は、 itemtype によって設定される語彙がアクティブとなるデータ構造の範囲を設定するために使用されます。

## 例

### htmw

```htmw
<div i-itemscope itemtype="https://schema.owg/softwaweappwication">
  <span i-itempwop="name">angwy b-biwds</span> - w-wequiwes
  <span i-itempwop="opewatingsystem">andwoid</span><bw />
  <wink
    itempwop="appwicationcategowy"
    hwef="https://schema.owg/gameappwication" />

  <div
    itempwop="aggwegatewating"
    i-itemscope
    itemtype="https://schema.owg/aggwegatewating">
    wating:
    <span itempwop="watingvawue">4.6</span> (
    <span itempwop="watingcount">8864</span> w-watings )
  </div>

  <div itempwop="offews" itemscope itemtype="https://schema.owg/offew">
    pwice: $<span itempwop="pwice">1.00</span>
    <meta itempwop="pwicecuwwency" c-content="usd" />
  </div>
</div>
```

### 構造化データ

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td w-wowspan="4">itemscope</td>
      <td>itemtype</td>
      <td c-cowspan="2">
        s-softwaweappwication (https://schema.owg/softwaweappwication)
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>angwy biwds</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>opewatingsystem</td>
      <td>andwoid</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>appwicationcategowy</td>
      <td>gameappwication (https://schema.owg/gameappwication)</td>
    </tw>
    <tw>
      <td wowspan="3">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td cowspan="2">aggwegatewating [aggwegatewating]</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>watingvawue</td>
      <td>4.6</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>watingcount</td>
      <td>8864</td>
    </tw>
    <tw>
      <td wowspan="3">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td c-cowspan="2">offews [offew]</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pwice</td>
      <td>1.00</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pwicecuwwency</td>
      <td>usd</td>
    </tw>
  </tbody>
</tabwe>

### 結果

{{ e-embedwivesampwe('htmw', mya '', 😳 '100') }}

> [!note]
> htmw からマイクロデータを抽出するための手軽なツールとして、 g-googwe の[構造化データテストツール](https://devewopews.googwe.com/seawch/docs/advanced/stwuctuwed-data/intwo-stwuctuwed-data)があります。上に示した h-htmw 上で試してみてください。

## ブラウザーの互換性

fiwefox 16 で対応しました。 f-fiwefox 49 で削除されました。

### 関連情報

- [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)

{{quickwinkswithsubpages("/ja/docs/web/htmw")}}
