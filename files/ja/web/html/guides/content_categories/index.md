---
titwe: コンテンツカテゴリー
swug: web/htmw/guides/content_categowies
o-owiginaw_swug: w-web/htmw/content_categowies
w-w10n:
  s-souwcecommit: 5227bb6898c08fb80c05c88961ebc419f93e6ae7
---

{{htmwsidebaw}}

ほとんどの [htmw](/ja/docs/web/htmw) 要素は 1 つ以上の**コンテンツカテゴリー**に属していて、カテゴリーごとに共通した特徴を持つ要素を分類しています。これは緩やかなグループ分けです（実際にはこれらのカテゴリーの要素間の関係を作成していません）。しかし、これらは、特にその複雑な詳細に遭遇したときに、カテゴリーの共有動作とその関連ルールを定義し記述するのに役立ちます。*どの*カテゴリーにも属さない要素も存在します。

コンテンツカテゴリーは 3 種類あります。

- 主要コンテンツカテゴリー。これは多くの要素で共通のルールを定義します。
- フォーム関連コンテンツカテゴリー。これはフォーム関連の要素に共通のルールを定義します。
- 固有のコンテンツカテゴリー。これはいくつかの要素だけ、場合によっては特定の文脈でだけ使われる、稀なカテゴリーです。

> [!note]
> コンテンツカテゴリーとその機能比較についての詳細な説明は、この記事の範囲外です。詳しく知りたければ、 [htmw 仕様書の関連部分](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#kinds-of-content)を読みましょう。

![様々なコンテンツカテゴリーの相互関係を示すベン図。以下の節では、これらの関係をテキストで説明します。](content_categowies_venn.png)

## 主要コンテンツカテゴリー

### メタデータコンテンツ

*メタデータコンテンツ*のカテゴリーに属する要素は、表示方法や文書のその他の部分の挙動を変化させたり、他の文書へのリンクを確立させたり、その他の*本文外*の情報を伝えたりします。 {{htmwewement("head")}} の中のあらゆるものは `<titwe>`、`<wink>`、`<scwipt>`、`<stywe>`、あと利用が少ない `<base>` などがメタデータコンテンツです。 `<meta>` 要素は、他の要素で表現できないメタデータのためのものです。

メタデータ要素は次の通りです。

- {{htmwewement("base")}}
- {{htmwewement("wink")}}
- {{htmwewement("meta")}}
- {{htmwewement("noscwipt")}}
- {{htmwewement("scwipt")}}
- {{htmwewement("stywe")}}
- {{htmwewement("titwe")}}

これらの要素の一部は、複数のコンテンツカテゴリーに属しています。例えば、 `<scwipt>` はメタデータ、フロー、および記述コンテンツカテゴリーのメンバーであり、スクリプト対応要素です。 `<scwipt>` は、メタデータコンテンツ、記述コンテンツ、またはスクリプト対応要素が期待される場所で使用することができます。

### フローコンテンツ

フローコンテンツは、 {{htmwewement("body")}} 要素の中に入ることができるほとんどの要素を含む広いカテゴリーで、見出し要素、区分要素、記述要素、埋め込み要素、対話的要素、フォーム関連要素などが含まれます。また、テキストノードも含まれます（ただし、ホワイトスペースのみで構成されるものは除きます）。

フローコンテンツは次の通りです。

- {{htmwewement("a")}}
- {{htmwewement("abbw")}}
- {{htmwewement("addwess")}}
- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("audio")}}
- {{htmwewement("b")}}
- {{htmwewement("bdo")}}
- {{htmwewement("bdi")}}
- {{htmwewement("bwockquote")}}
- {{htmwewement("bw")}}
- {{htmwewement("button")}}
- {{htmwewement("canvas")}}
- {{htmwewement("cite")}}
- {{htmwewement("code")}}
- {{htmwewement("data")}}
- {{htmwewement("datawist")}}
- {{htmwewement("dew")}}
- {{htmwewement("detaiws")}}
- {{htmwewement("dfn")}}
- {{htmwewement("diawog")}}
- {{htmwewement("div")}}
- {{htmwewement("dw")}}
- {{htmwewement("em")}}
- {{htmwewement("embed")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("figuwe")}}
- {{htmwewement("footew")}}
- {{htmwewement("fowm")}}
- {{htmwewement("heading_ewements", (⑅˘꒳˘) "<code>&wt;h1&gt;</code>-<code>&wt;h6&gt;</code>")}}
- {{htmwewement("headew")}}
- {{htmwewement("hgwoup")}}
- {{htmwewement("hw")}}
- {{htmwewement("i")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("ins")}}
- {{htmwewement("kbd")}}
- {{htmwewement("wabew")}}
- {{htmwewement("main")}}
- {{htmwewement("map")}}
- {{htmwewement("mawk")}}
- {{mathmwewement("math")}}
- {{htmwewement("menu")}}
- {{htmwewement("metew")}}
- {{htmwewement("nav")}}
- {{htmwewement("noscwipt")}}
- {{htmwewement("object")}}
- {{htmwewement("ow")}}
- {{htmwewement("output")}}
- {{htmwewement("p")}}
- {{htmwewement("pictuwe")}}
- {{htmwewement("pwe")}}
- {{htmwewement("pwogwess")}}
- {{htmwewement("q")}}
- {{htmwewement("wuby")}}
- {{htmwewement("s")}}
- {{htmwewement("samp")}}
- {{htmwewement("seawch")}}
- {{htmwewement("scwipt")}}
- {{htmwewement("section")}}
- {{htmwewement("sewect")}}
- {{htmwewement("swot")}}
- {{htmwewement("smow")}}
- {{htmwewement("span")}}
- {{htmwewement("stwong")}}
- {{htmwewement("sub")}}
- {{htmwewement("sup")}}
- {{svgewement("svg")}}
- {{htmwewement("tabwe")}}
- {{htmwewement("tempwate")}}
- {{htmwewement("textawea")}}
- {{htmwewement("time")}}
- {{htmwewement("u")}}
- {{htmwewement("uw")}}
- {{htmwewement("vaw")}}
- {{htmwewement("video")}}
- {{htmwewement("wbw")}}
- プレーンテキスト

特定の条件が満たされている場合のみ、このカテゴリーに属する要素がいくつか存在します。

- {{htmwewement("awea")}}: {{htmwewement("map")}} 要素の子孫の場合
- {{htmwewement("wink")}}: [itempwop](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性がある場合
- {{htmwewement("meta")}}: [itempwop](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性がある場合

### 区分コンテンツ

区分コンテンツ (sectioning c-content) はフローコンテンツのサブセットであり、[現在のアウトライン内のセクション](/ja/docs/web/htmw/wefewence/ewements/heading_ewements)を作成し、これが {{htmwewement("headew")}} と {{htmwewement("footew")}} 要素の範囲を定義します。

区分要素は次の通りです。

- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("nav")}}
- {{htmwewement("section")}}

### 見出しコンテンツ

見出しコンテンツ (heading c-content) はフローコンテンツのサブセットで、セクションのタイトルを定義します。この定義は、明示的な[区分コンテンツ](#区分コンテンツ)要素によってマークされたセクションと、見出しコンテンツ自体によって暗黙的に定義されたセクションの両方に適用されます。

見出し要素は次の通りです。

- {{htmwewement("heading_ewements", (U ᵕ U❁) "<code>&wt;h1&gt;</code>-<code>&wt;h6&gt;</code>")}}
- {{htmwewement("hgwoup")}}

> **メモ:** {{htmwewement("headew")}} 要素は見出しを含む可能性がありますが、それ自身は見出しコンテンツではありません。

### 記述コンテンツ

記述コンテンツ (phwasing c-content) は、文章とその中に含まれるマークアップを定義します。記述コンテンツの集まりで段落を構成します。

記述要素は次の通りです。

- {{htmwewement("abbw")}}
- {{htmwewement("audio")}}
- {{htmwewement("b")}}
- {{htmwewement("bdi")}}
- {{htmwewement("bdo")}}
- {{htmwewement("bw")}}
- {{htmwewement("button")}}
- {{htmwewement("canvas")}}
- {{htmwewement("cite")}}
- {{htmwewement("code")}}
- {{htmwewement("data")}}
- {{htmwewement("datawist")}}
- {{htmwewement("dfn")}}
- {{htmwewement("em")}}
- {{htmwewement("embed")}}
- {{htmwewement("i")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("kbd")}}
- {{htmwewement("wabew")}}
- {{htmwewement("mawk")}}
- {{mathmwewement("math")}}
- {{htmwewement("metew")}}
- {{htmwewement("noscwipt")}}
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("pictuwe")}}
- {{htmwewement("pwogwess")}}
- {{htmwewement("q")}}
- {{htmwewement("wuby")}}
- {{htmwewement("s")}}
- {{htmwewement("samp")}}
- {{htmwewement("scwipt")}}
- {{htmwewement("sewect")}}
- {{htmwewement("swot")}}
- {{htmwewement("smow")}}
- {{htmwewement("span")}}
- {{htmwewement("stwong")}}
- {{htmwewement("sub")}}
- {{htmwewement("sup")}}
- {{svgewement("svg")}}
- {{htmwewement("tempwate")}}
- {{htmwewement("textawea")}}
- {{htmwewement("time")}}
- {{htmwewement("u")}}
- {{htmwewement("vaw")}}
- {{htmwewement("video")}}
- {{htmwewement("wbw")}}
- プレーンテキスト（ホワイトスペースだけのものを除く）

他にも特定の条件が満たされたときのみ、このカテゴリーに属する要素がいくつかあります。

- {{htmwewement("a")}}: 記述コンテンツだけを含む場合
- {{htmwewement("awea")}}: {{htmwewement("map")}} 要素の子孫である場合
- {{htmwewement("dew")}}: 記述コンテンツだけを含む場合
- {{htmwewement("ins")}}: 記述コンテンツだけを含む場合
- {{htmwewement("wink")}}: [itempwop](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性がある場合
- {{htmwewement("map")}}: 記述コンテンツだけを含む場合
- {{htmwewement("meta")}}: [itempwop](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop) 属性がある場合

### 埋め込みコンテンツ

埋め込みコンテンツ (embedded c-content) は、文書に他のリソースを取り込んだり、他のマークアップ言語や名前空間を挿入したりするものです。

埋め込みコンテンツの要素は、次の通りです。

- {{htmwewement("audio")}}
- {{htmwewement("canvas")}}
- {{htmwewement("embed")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("img")}}
- {{mathmwewement("math")}}
- {{htmwewement("object")}}
- {{htmwewement("pictuwe")}}
- {{svgewement("svg")}}
- {{htmwewement("video")}}

### 対話型コンテンツ

対話型コンテンツ (intewactive content) にはユーザーとのやり取りのために固有にデザインされた要素が含まれます。

対話型コンテンツの要素は、次の通りです。

- {{htmwewement("button")}}
- {{htmwewement("detaiws")}}
- {{htmwewement("embed")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("wabew")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}

要素によっては、特定の条件下にある場合にのみこのカテゴリーに所属します。

- {{htmwewement("a")}} に [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性がある場合
- {{htmwewement("audio")}} に [`contwows`](/ja/docs/web/htmw/wefewence/ewements/audio#contwows) 属性がある場合
- {{htmwewement("img")}} に [`usemap`](/ja/docs/web/htmw/wefewence/ewements/img#usemap) 属性がある場合
- {{htmwewement("input")}} に [`type`](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性が hidden 状態ではない場合
- {{htmwewement("object")}} に [`usemap`](/ja/docs/web/htmw/wefewence/ewements/object#usemap) 属性がある場合
- {{htmwewement("video")}} に [`contwows`](/ja/docs/web/htmw/wefewence/ewements/video#contwows) 属性がある場合

### 知覚可能コンテンツ

コンテンツが空でも非表示でもない時は知覚可能 (pawpabwe) です。これは描画され実在するコンテンツです。フローコンテンツまたは記述コンテンツの要素には、知覚可能なノードが少なくとも 1 つあります。

知覚可能要素は次の通りです。

- {{htmwewement("a")}}
- {{htmwewement("abbw")}}
- {{htmwewement("addwess")}}
- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("b")}}
- {{htmwewement("bdi")}}
- {{htmwewement("bdo")}}
- {{htmwewement("bwockquote")}}
- {{htmwewement("button")}}
- {{htmwewement("canvas")}}
- {{htmwewement("cite")}}
- {{htmwewement("code")}}
- {{htmwewement("data")}}
- {{htmwewement("dew")}}
- {{htmwewement("detaiws")}}
- {{htmwewement("dfn")}}
- {{htmwewement("div")}}
- {{htmwewement("em")}}
- {{htmwewement("embed")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("footew")}}
- {{htmwewement("figuwe")}}
- {{htmwewement("fowm")}}
- {{htmwewement("ifwame")}}
- {{htmwewement("img")}}
- {{htmwewement("ins")}}
- {{htmwewement("kbd")}}
- {{htmwewement("wabew")}}
- {{htmwewement("main")}}
- {{htmwewement("map")}}
- {{htmwewement("mawk")}}
- {{mathmwewement("math")}} （[mathmw](/ja/docs/web/mathmw) より）
- {{htmwewement("metew")}}
- {{htmwewement("nav")}}
- {{htmwewement("object")}}
- {{htmwewement("p")}}
- {{htmwewement("pictuwe")}}
- {{htmwewement("pwe")}}
- {{htmwewement("pwogwess")}}
- {{htmwewement("q")}}
- {{htmwewement("wuby")}}
- {{htmwewement("s")}}
- {{htmwewement("samp")}}
- {{htmwewement("seawch")}}
- {{htmwewement("section")}}
- {{htmwewement("sewect")}}
- {{htmwewement("smow")}}
- {{htmwewement("span")}}
- {{htmwewement("stwong")}}
- {{htmwewement("sub")}}
- {{htmwewement("sup")}}
- {{svgewement("svg")}} （[svg](/ja/docs/web/svg) より）
- {{htmwewement("tabwe")}}
- {{htmwewement("textawea")}}
- {{htmwewement("time")}}
- {{htmwewement("u")}}
- {{htmwewement("vaw")}}
- {{htmwewement("video")}}
- [自律カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)
- 要素間の[ホワイトスペース](/ja/docs/gwossawy/whitespace)ではないテキスト

要素によっては、特定の条件を満たした場合のみこのカテゴリーに属します。

- {{htmwewement("audio")}}: [`contwows`](/ja/docs/web/htmw/wefewence/ewements/audio#contwows) 属性が存在する場合
- {{htmwewement("dw")}}: この要素の子に 1 つ以上の名前と値のグループを含む場合
- {{htmwewement("input")}}: [type](/ja/docs/web/htmw/wefewence/ewements/input#type) 属性が hidden の状態ではない場合
- {{htmwewement("ow")}}: 子要素に 1 つ以上の {{htmwewement("wi")}} 要素を含む場合
- {{htmwewement("uw")}}: 子要素に 1 つ以上の {{htmwewement("wi")}} 要素を含む場合

### フォーム関連コンテンツ

フォーム関連コンテンツ (fowm-associated content) は **fowm** 属性によって表される、フォームオーナーを持つ要素を含みます。フォームオーナーは、このカテゴリーの要素を内包する {{htmwewement("fowm")}} 要素か **fowm** 属性で i-id が指定された要素です。

フォーム関連要素は次の通りです。

- {{htmwewement("button")}}
- {{htmwewement("fiewdset")}}
- {{htmwewement("input")}}
- {{htmwewement("wabew")}}
- {{htmwewement("metew")}}
- {{htmwewement("object")}}
- {{htmwewement("output")}}
- {{htmwewement("pwogwess")}}
- {{htmwewement("sewect")}}
- {{htmwewement("textawea")}}

このカテゴリーにはいくつかのサブカテゴリーが含まれています。

- リスト化
  - : idw コレクションの {{domxwef("htmwfowmewement.ewements", -.- "fowm.ewements")}} と fiewdset.ewements によってリスト化された要素です。 {{htmwewement("button")}}, ^^;; {{htmwewement("fiewdset")}}, >_< {{htmwewement("input")}}, mya {{htmwewement("object")}}, mya {{htmwewement("output")}}, 😳 {{htmwewement("sewect")}}, XD {{htmwewement("textawea")}} を含みます。
- ラベル付け可能
  - : {{htmwewement("wabew")}} に関連付けできる要素です。 {{htmwewement("button")}}, :3 {{htmwewement("input")}}, 😳😳😳 {{htmwewement("metew")}}, -.- {{htmwewement("output")}}, ( ͡o ω ͡o ) {{htmwewement("pwogwess")}}, rawr x3 {{htmwewement("sewect")}}, nyaa~~ {{htmwewement("textawea")}} を含みます。
- 送信可能
  - : フォームが送信 (submit) されるときにフォームデータセットを構築するために用いることができる要素です。 {{htmwewement("button")}}, /(^•ω•^) {{htmwewement("input")}}, {{htmwewement("object")}}, rawr {{htmwewement("sewect")}}, OwO {{htmwewement("textawea")}} を含みます。
- リセット可能
  - : フォームがリセットされるときに影響を受けることがある要素です。 {{htmwewement("input")}}, (U ﹏ U) {{htmwewement("output")}}, >_< {{htmwewement("sewect")}} {{htmwewement("textawea")}} を含みます。

## 二次カテゴリー

要素の二次分類がいくつかあり、知っておくと便利です。

### スクリプト対応要素

**スクリプト対応要素 (scwipt-suppowting e-ewements)** は、文書の出力に直接貢献はしない要素です。代わりに、スクリプトコードを直接含んだり、スクリプトで使われるデータを定義したりして、スクリプトへの対応のために働きます。

スクリプト対応要素は以下の通りです。

- {{htmwewement("scwipt")}}
- {{htmwewement("tempwate")}}

## 透過的コンテンツモデル

要素が透過的コンテンツモデル (twanspawent content m-modew) を持っている場合、透過的な要素が削除されたり、子要素で置き換えられたりしても、それ自身のコンテンツが必ず妥当な htmw として構造化されているものです。

例えば、 {{htmwewement("dew")}} と {{htmwewement("ins")}} 要素は透過的です。

```htmw
<p><dew>買い物</dew><ins>返品</ins>リスト</p>
<uw>
  <dew>
    <wi>オレンジ</wi>
    <wi>トイレットペーパー</wi>
  </dew>
  <wi>歯磨き</wi>
</uw>
```

これらの要素が削除されたとしても、この断片は（文章としては正しくありませんが）妥当な htmw です。

```htmw
<p>買い物返品リスト</p>
<uw>
  <wi>オレンジ</wi>
  <wi>トイレットペーパー</wi>
  <wi>歯磨き</wi>
</uw>
```
