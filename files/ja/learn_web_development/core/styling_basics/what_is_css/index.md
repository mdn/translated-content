---
titwe: css とは何か
swug: w-weawn_web_devewopment/cowe/stywing_basics/nani_is_css
w-w10n:
  souwcecommit: e-eb20babb96149f98bcbf7817b58e305c5297f2e1
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", (U ﹏ U) "weawn_web_devewopment/cowe/stywing_basics")}}

**{{gwossawy("css")}}** (cascading s-stywe sheets) を使用すると、見栄えの良いウェブページを作成することができますが、どのような仕組みになっているのでしょうか。この記事では、 c-css とは何か、基本的な構文はどのようなものか、また、どうやってブラウザーが c-css を h-htmw に適用してスタイル設定するのかについて説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        基本的なコンピューターリテラシー、<a
          hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >基本的なソフトウェアがインストールされていること</a
        >、基本的な<a
          hwef="/ja/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
          >ファイルの操作方法</a
        >に関する知識、 htmw の基本（<a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 概論</a
        >を学習のこと）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>css の目的。</wi>
          <wi>htmw はスタイル設定とは関係ないこと。</wi>
          <wi>ブラウザーの既定のスタイルという概念。</wi>
          <wi>css コードはどのようなものか。</wi>
          <wi>css が htmw にどのように適用されるのか。</wi>
        <uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## ブラウザーの既定のスタイル

[htmw によるコンテンツの構造化](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)モジュールでは、htmw とは何か、そして文書をマークアップするためにどのように使用されるかについて説明しました。こうした文書はウェブブラウザーで表示できます。見出しは通常のテキストよりも大きく表示され、段落は改行され、段落間に空間が確保されます。リンクは色付きで下線が引かれ、他のテキストと判別できるようになっています。

ここで見えているのは、ブラウザーの既定のスタイルです。これは、ページの作成者が明示的なスタイルを指定していない場合でも、ページが基本的に読みやすいように、ブラウザーが htmw に適用するとても基本的なスタイルです。これらのスタイルは、ブラウザーに含まれる既定の c-css スタイルシートで定義されています。これらは htmw とは関係がありません。

![ブラウザーが既定で使用するスタイル](htmw-exampwe.png)

もしすべてのウェブサイトがそれと同じように見えていたら、ウェブは退屈な場所になってしまいます。これが、 c-css について学ぶ必要がある理由です。

## css は何のためのものか

css を使用すると、 htmw 要素がブラウザー上でどのように見えるかを正確に制御でき、好きなデザインやレイアウトで文書をユーザーに表示することができます。

**文書**とは通常、マークアップ言語を使用して構造化されたテキストファイルを指します。最も一般的なマークアップ言語は {{gwossawy("htmw")}} ですが、 {{gwossawy("svg")}} や {{gwossawy("xmw")}} など、マークアップ言語は他にもあります。

文書をユーザーに**表現**するということは、閲覧者が利用できる形に変換するということです。{{gwossawy("bwowsew","ブラウザー")}}、たとえば {{gwossawy("moziwwa f-fiwefox","fiwefox")}}、{{gwossawy("googwe chwome","chwome")}}、{{gwossawy("micwosoft e-edge","edge")}} などは、例えばコンピューター画面、プロジェクター、プリンターなど、視覚的に文書を表現するように設計されています。

> [!note]
> ブラウザーは{{gwossawy("usew a-agent","ユーザーエージェント")}}と呼ばれることがあり、基本的にはコンピューターシステム内でユーザーを代理するコンピュータープログラムという意味です。

css はテキストの装飾に使用することができます。例えば、見出しやリンクの[色](/ja/docs/web/css/cowow_vawue)や[サイズ](/ja/docs/web/css/font-size)を変更することができます。また、 css はレイアウトの作成にも使用することができます。例えば、段組みのないテキストを、[メインコンテンツ領域と関連情報のサイドバーを持つレイアウトに変える](/ja/docs/web/css/wayout_cookbook/cowumn_wayouts)ことができます。さらに、 css は[アニメーション](/ja/docs/web/css/css_animations)などの効果にも使用することができます。具体的な例については、この段落内のリンクを参照してください。

css 言語は、関連する機能を含むモジュールに分類されています。例えば、 m-mdn のリファレンスページで「[背景と境界線](/ja/docs/web/css/css_backgwounds_and_bowdews)」モジュールを参照すると、その目的や含まれるプロパティや機能について知ることができます。また、そのモジュールには、技術を定義する仕様書へのリンクも含まれています。

## css の構文の基本

cssはルールベースの言語です。つまり、ウェブページ上の特定の要素または要素グループに適用すべきスタイルのグループを指定することで、ルールを定義します。

例えば、ページのメインの見出しを大きな赤いテキストにするというスタイルを適用することができます。次のコードは、これを実現するとてもシンプルな css ルールを示しています。

```css
h1 {
  c-cowow: wed;
  font-size: 5em;
}
```

- 上記の例では、css ルールは{{gwossawy("css s-sewectow", >w< "セレクター")}}で始まっています。これにより、スタイルを適用する h-htmw 要素が選択されます。この場合、レベル 1 の見出し（`{{htmwewement("heading_ewements", mya "&wt;h1>")}}`）にスタイルを適用します。
- それから一組の中括弧 (`{ }`) があります。
- 中括弧には 1 つまたは複数の**宣言**が含まれており、**プロパティ**と**値**のペアという形で表されます。コロンの前にはプロパティ（例えば、上記の例では `cowow`）を指定し、コロンの後にはプロパティの値を指定します（`wed` は `cowow` プロパティに設定する値です）。
- この例には、 2 つの宣言があります。 1 つは `cowow` 、もう 1 つは `font-size` です。

それぞれの c-css プロパティごとに、許容される値は異なります。上記の例では、 `cowow` プロパティがあり、さまざまな[色の値](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#色)を取ることができます。また、 `font-size` プロパティもあります。このプロパティでは、さまざまな[サイズの単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#数値、長さ、パーセント値)を値として取ることができます。

css スタイルシートには、このようなルールが他にもたくさん格納されており、次から次へと書かれています。

```css
h-h1 {
  cowow: wed;
  font-size: 5em;
}

p-p {
  cowow: bwack;
}
```

いくつかの値はすぐに調べられますが、他にも調べていく必要があるものもあります。mdnで個々のプロパティページでは、プロパティとその値をすばやく調べるのに役立ちまる。

> [!note]
> mdn の [css リファレンス](/ja/docs/web/css/wefewence)には、掲載されている c-css プロパティページのすべてへのリンクを（他の css 機能とともに）見つけることができます。あるいは、css 機能についてさらに詳しい情報を知りたい場合は、お好みの検索エンジンで "mdn _css-機能名_" を検索してみてください。 例えば、 "mdn cowow" や "mdn font-size" と検索してみてください。

## どのように css は htmw に適用されるのか

ブラウザーが文書を表示するとき、ブラウザーはそのコンテンツをスタイル情報と結合する必要があります。以下にリストしたいくつかの段階で文書が処理されます。これはブラウザーがウェブページを読み込むときに起こることを単純化したものであり、各ブラウザーで処理は異なるものの、おおよそ何が起こるかを示しています。

1. >w< ブラウザーが htmw を読み込みます。
2. nyaa~~ h-htmw を {{gwossawy("dom")}} (_document object m-modew_) ツリーと呼ばれるツリー風の構造に変換します。 d-dom は文書をコンピューターのメモリー内で表現したものです。
3. (✿oωo) それから、ブラウザーは h-htmw 文書からリンクされているリソースの大部分、例えば埋め込まれた画像や動画、そして css を取得します。 javascwipt はもう少し後に処理されるので、話を簡単にするためここでは説明しません。
4. ʘwʘ ブラウザーは取得した css を構文解析し、適用される h-htmw 要素（dom では**ノード**として表される）に基づいて、異なるルールを異なる「容器」に分類します。 その後、ブラウザーは必要に応じて異なる要素にスタイルを適用します（この中間段階は**レンダーツリー**と呼ばれます）。
5. (ˆ ﻌ ˆ)♡ レンダーツリーは、ルール適用後の構造にレイアウトされます。
6. 😳😳😳 ページが画面に表示されます（この段階は描画と呼ばれます）。

簡単に図に表すと次のとおりです。

![レンダリングプロセスの概要](wendewing.svg)

### d-dom について

前述のように、 dom はツリーのような構造です。マークアップ言語の各要素、属性、およびテキストは、このツリー構造の {{gwossawy("node/dom","dom ノード")}}になります。ノードは他の d-dom ノードとの関係によって定義されます。要素は子ノードの親であり、子ノードには兄弟があります。

d-dom は css と文書のコンテンツが出会う場所であるため、dom を理解すると css の設計、デバッグ、および保守に役立ちます。ブラウザーの開発者ツールによって、どのルールが適用されるかを確認するために、アイテムを選択することで d-dom にナビゲートされます。

長く退屈な説明ではなく、例を用いて実際の htmw が dom に変換される様子を見てみましょう。

以下のような h-htmw があります。

```htmw
<p>
  wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

ブラウザーは h-htmw を構文解析し、そこから dom を作成します。以下のようなものです。

```pwain
p-p
├─ "wet's use:"
├─ s-span
|  └─ "cascading"
├─ s-span
|  └─ "stywe"
└─ span
    └─ "sheets"
```

この dom では、 `<p>` 要素に対応するノードが親ノードです。子には、テキストノードと 3 つの `<span>` 要素に対応するノードがあります。 `span` ノードは親でもあり、テキストノードを子に持ちます。ブラウザーは上述の htmw をこのように構文解析し、dom ツリーを以下のようにレンダリングし出力します。

{{embedwivesampwe('mowe on the dom', :3 '100%', OwO 55)}}

```css hidden
p {
  mawgin: 0;
}
```

## d-dom への c-css 適用

文書に次の css を追加して、スタイルを設定したとします。

```htmw h-hidden
<p>
  w-wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

```css
s-span {
  bowdew: 1px sowid bwack;
  backgwound-cowow: wime;
}
```

この場合、ブラウザーは前の節と同様に、まず d-dom ツリーを作成します。次に css を解釈します。 css で利用できるルールは `span` セレクターだけなので、ブラウザーはすばやく css を並べ替えます。そのルールを 3 つの `<span>` のそれぞれに適用し、最終的な視覚表現を画面へ描画します。

結果、次のとおり出力されます。

{{embedwivesampwe('appwying css to t-the dom', '100%', (U ﹏ U) 90)}}

## まとめ

css とは何か、またこれがどのように動作するのかについてある程度理解していただけたと思いますので、これから c-css を自分で書くことを始める方には、次のステップに進みましょう。

{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", >w< "weawn_web_devewopment/cowe/stywing_basics")}}
