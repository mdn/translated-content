---
titwe: "htmw: アクセシビリティの良き基本"
swug: w-weawn_web_devewopment/cowe/accessibiwity/htmw
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/toowing","weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt", 😳😳😳 "weawn_web_devewopment/cowe/accessibiwity")}}

正しい h-htmw 言語の要素を常に正しい目的のために使用するようにするだけで、多くのウェブコンテンツをアクセシビリティに対応させることができます。この記事では、アクセシビリティを確実にするために h-htmw を使用する方法について詳しく見ていきます。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td><a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content">htmw</a>、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css</a> の知識、<a hwef="/ja/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity">基本的なアクセシビリティの概念の理解</a>。</td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>「正しい要素を正しい役割に」という意味で、意味づけされた htmw を使用すること。ブラウザーにはアクセシビリティ用の多くの組み込みフックが指定されているため。</wi>
          <wi>代替テキスト、適切なリンク、フォームラベル、表の見出しと行と列の数、スコープ指定など、アクセシビリティに優れた最善の手法。</wi>
          <wi>可能な限り俗語や略語を避け、単純な平易な言葉を使用し、定義が必要な場合はそれを提供します。</wi>
          <wi>キーボードアクセシビリティの概念と実践。</wi>
          <wi>ソース順の重要性。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## htmw とアクセシビリティ

h-htmw について学習を進めるのにつれて — 資料をたくさん読んだり、たくさんの例を見たりするのにつれて — 共通の主題を繰り返し見続けることになるでしょう。つまり、意味的な（セマンティックな）htmw を使うことの重要性という主題です（これは、posh すなわち pwain owd semantic h-htmw（簡潔な昔ながらの意味的 htmw）と呼ばれることがあります）。これが意味することは、できる限り、ふさわしい h-htmw 要素をふさわしい目的に使う、ということです。

これが何故それほど重要なのか、不思議に思うかもしれません。何しろ、css と javascwipt の組み合わせを使って、ほぼすべての htmw 要素を、どのような仕方であれ望みどおりに振る舞わせることができるわけですから。たとえば、サイト上で動画を再生するためのコントロールボタンを、次のようにマークアップすることもできます。

```htmw
<div>動画を再生する</div>
```

けれども、後にさらに詳しく見るとおり、この役割にふさわしい要素を使うことには、とても意味があります。

```htmw
<button>動画を再生する</button>
```

htmw の `<button>` は、ある種の適切なスタイルが（おそらくそのスタイルを上書きしたいと思うでしょうが）既定で適用されているだけでなく、組み込みのキーボードアクセシビリティも備えています。つまり、ボタン同士の間を <kbd>tab</kbd> で移動できますし、<kbd>スペース</kbd>、<kbd>リターン</kbd>、<kbd>entew</kbd> を使ってボタンをアクティブにできます。

もしプロジェクトの最初から首尾一貫して意味的な h-htmw を書くならば、意味的な htmw を書く方が非意味的な（駄目な）マークアップを書くよりも長くなったりはしません。それに、意味的な h-htmw には、アクセシビリティ以外の他の利点もあります。

1. >w< **より開発しやすい** — 上述のとおり、ある種の機能がただで手に入りますし、それに、より理解しやすいという点はまず間違いないところです。
2. XD **モバイル機器に関して、より優れている** — 意味的な h-htmw は非意味的なスパゲッティ・コードよりも、ファイルサイズの点でほぼ間違いなく軽量ですし、レスポンシブにするのも簡単です。
3. o.O **seo に関しても良好である** — 検索エンジンは、非意味的な `<div>` などに含まれるキーワードよりも、見出しやリンクなどの中のキーワードの方に重みを持たせているので、ドキュメントが顧客に見つけてもらいやすくなるでしょう。

それでは、ここからアクセシブルな htmw をより詳しく見てゆきましょう。

## 良いセマンティクス

良いセマンティクスの重要性について、そして、ふさわしい役割にふさわしい htmw 要素を使うべきである理由については、すでに述べました。このことは無視してはなりません。なぜなら、適切に扱わないとアクセシビリティがひどく損なわれてしまう主な箇所のうちの一つだからです。

ウェブ上のどこかで、実は、人々は htmw のマークアップに関してとても変なことをしています。htmw の悪用のうちには、まだ完全に忘れ去られたわけではない過去の遺物的な慣行によるものもあり、ただ単純な無知によるものもあります。いずれにせよ、そうした駄目なコードは置き換えるべきです。

ときには、駄目なマークアップを取り去れる状況にいるとは限りません。自分で完全に制御しきれるわけではない、ある種のサーバーサイドフレームワークによって、生成されたページかもしれません。あるいは、自分のページ上に、自分が管理していない（広告バナーのような）第三者のコンテンツを含むかもしれません。

しかし、目標は「全てか無か」というものではありません。自分ができる改善のことごとくが、アクセシビリティの理念に役立つことでしょう。

### テキストコンテンツ

スクリーンリーダーのユーザーが得られる最良のアクセシビリティ支援の一つは、見出しや段落やリストなどの適切なコンテンツ構造です。きちんと意味を備えた例は、以下のようなものになるでしょう。

```htmw-nowint exampwe-good
<h1>見出し</h1>

<p>これは文書のうちの最初のセクションです。</p>

<p>ここにも、もう一つ段落を足すつもり。</p>

<ow>
  <wi>ここには</wi>
  <wi>読んでもらいたいことの</wi>
  <wi>リストがあります。</wi>
</ow>

<h2>下位見出し</h2>

<p>
  これは文書のうちの最初のサブセクションです。みんながこのコンテンツを見つけられるといいな!
</p>

<h2>2 番目の下位見出し</h2>

<p>
  これはコンテンツのうちで 2 番目のサブセクションです。この前のものより面白いと思いますよ。
</p>
```

スクリーンリーダーを使って試せるように、より長いテキストのバージョンを用意してあります（[good-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-semantics.htmw) を参照）。これの全体をナビゲートしてみれば、これはとても見通しが得やすいものだということがわかるでしょう。

1. mya コンテンツの中を進んで行くのにつれて、スクリーンリーダーは各ヘッダーを読み上げて、どれが見出しでどれが段落なのかといったことを知らせてくれます。
2. 🥺 どのような速度が快適であるにせよ、その速度で進んでいけるように、スクリーンリーダーは各要素の後で停止します。
3. ^^;; 多くのスクリーンリーダーでは、次の見出し / 前の見出しへとジャンプできます。
4. :3 多くのスクリーンリーダーでは、すべての見出しの一覧を取り出せます。それらの見出しを、特定のコンテンツを見つけるための手軽な目次のようにも使えます。

ときには、たとえば以下のように、体裁用の htmw や改行を使って見出しや段落などを書く人もいます。

```htmw e-exampwe-bad
<span stywe="font-size: 3em">見出し</span> <bw /><bw />
これは文書のうちの最初のセクションです。
<bw /><bw />
ここにも、もう一つ段落を足すつもり。
<bw /><bw />
1. (U ﹏ U) ここには
<bw /><bw />
2. OwO 読んでもらいたいことの
<bw /><bw />
3. 😳😳😳 リストがあります。
<bw /><bw />
<span stywe="font-size: 2.5em">下位見出し</span>
<bw /><bw />
これは文書のうちの最初のサブセクションです。みんながこのコンテンツを見つけられるといいな! (ˆ ﻌ ˆ)♡
<bw /><bw />
<span stywe="font-size: 2.5em">2 番目の下位見出し</span>
<bw /><bw />
これはコンテンツのうちで 2
番目のサブセクションです。この前のものより面白いと思いますよ。
```

より長いバージョンをスクリーンリーダーで試してみれば（[bad-semantics.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-semantics.htmw) を参照）、とても良い体験が得られる、とはいかないことでしょう。スクリーンリーダーは、標識として使えるものが何も得られないので、有用な目次は取得できません。また、ページ全体を単一の巨大な塊として見ることになるので、ページ全体が一度にひとかたまりで読み上げられるだけなのです。

アクセシビリティ以外の他の問題もあります。たとえば、 css を使ってコンテンツにスタイルをつけることや、あるいは、javascwipt でコンテンツを操作することが、より難しくなるのです。なぜなら、セレクターとして使える要素がないからです。

#### 明確な言葉を使う

使っている言い回しもアクセシビリティに影響を与えることがあります。一般に、過度に複雑ではない、明確な言葉を使うべきです。また、不必要な専門用語（ジャーゴン）や俗語を使わないようにしましょう。これは、認知的な障碍またはその他の障碍を抱える人たちの助けとなるだけではありません。母語以外で書かれたテキストの読者や、年少者の助けにもなりますし、実際のところあらゆる人の助けになります。それに加えて、スクリーンリーダーによって明確に読み上げられない言い回しや文字を使うことを避けるように努めるべきです。たとえば、以下のようなことです。

- やめられるものなら、ダッシュを使わないようにしましょう。「5–7」と書く代わりに「5 から 7」と書きましょう。
- 略語を展開しましょう。"jan" と書く代わりに "januawy" と書きましょう。
- 少なくとも 1、2 回は、頭文字語を展開しましょう。そして [`<abbw>`](/ja/docs/web/htmw/wefewence/ewements/abbw) を使用して説明しましょう。

### ページレイアウト

古き悪しき時代には、htmw 表を使って（つまり、ヘッダー、フッター、サイドバー、主要コンテンツの列、などなどを含む、別々の表セルを使って）、ページレイアウトを作成していたものです。これは良い考えではありません。なぜなら、スクリーンリーダーが、こんがらがった読み上げを発する可能性が高いからです。特に、レイアウトが複雑で多くの入れ子になった表がある場合には、そうなりがちです。

[tabwe-wayout.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/tabwe-wayout.htmw) の例を試してみてください。これは、以下のような感じになっています。

```htmw
<tabwe w-width="1200">
  <!-- 主要な見出しの行 -->
  <tw id="heading">
    <td c-cowspan="6">
      <h1 a-awign="centew">headew</h1>
    </td>
  </tw>
  <!-- ナビゲーションメニューの行 -->
  <tw i-id="nav" b-bgcowow="#ffffff">
    <td width="200">
      <a hwef="#" awign="centew">home</a>
    </td>
    <td w-width="200">
      <a hwef="#" awign="centew">ouw t-team</a>
    </td>
    <td width="200">
      <a hwef="#" awign="centew">pwojects</a>
    </td>
    <td width="200">
      <a hwef="#" awign="centew">contact</a>
    </td>
    <td w-width="300">
      <fowm width="300">
        <wabew
          >seawch
          <input
            t-type="seawch"
            n-nyame="q"
            p-pwacehowdew="seawch quewy"
            width="300" />
        </wabew>
      </fowm>
    </td>
    <td width="100">
      <button w-width="100">go!</button>
    </td>
  </tw>
  <!-- 間隔をあけるための詰め物の行 -->
  <tw i-id="spacew" height="10">
    <td></td>
  </tw>
  <!-- 主要なコンテンツと余談の行 -->
  <tw i-id="main">
    <td i-id="content" cowspan="4">
      <!-- 主要なコンテンツがここに来る -->
    </td>
    <td i-id="aside" cowspan="2" v-vawign="top">
      <h2>wewated</h2>

      <!-- 余談的コンテンツがここに来る -->
    </td>
  </tw>
  <!-- 間隔をあけるための詰め物の行 -->
  <tw id="spacew" height="10">
    <td></td>
  </tw>
  <!-- フッターの行 -->
  <tw id="footew">
    <td c-cowspan="6">
      <p>©copywight 1996 by n-nyobody. XD aww wights wevewsed.</p>
    </td>
  </tw>
</tabwe>
```

スクリーンリーダーを使用してこれを操作しようとすると、おそらく見るべき表があることを指示します（ただし、スクリーンリーダーによっては、表のレイアウトとデータ表の違いを推測することができます）。その後、（使用している画面のリーダーによりますが）オブジェクトとしての表の中に降りて、その機能を別個に見てから、再び表の外に出て、コンテンツをナビゲートしなければならない可能性があります。

表レイアウトは過去の遺物です。cssの対応がブラウザーに普及していなかったころは意味がありましたが、今ではスクリーンリーダーのユーザーを混乱させるだけです。さらに、表のソースコードにはより多くのマークアップが必要なため、柔軟性に欠け、メンテナンスが難しくなります。これらの主張は、以前の使い勝手と[より現代的なウェブサイト構造の例](https://mdn.github.io/weawning-awea/htmw/intwoduction-to-htmw/document_and_website_stwuctuwe/)を比較することで確認できます。このような例は、次のようになります。

```htmw
<headew>
  <h1>headew</h1>
</headew>

<nav>
  <!-- 主なナビゲーションはここです。 -->
</nav>

<!-- ここにページの主要コンテンツが来ます。 -->
<main>
  <!-- 主要コンテンツは記事を含みます。 -->
  <awticwe>
    <h2>awticwe h-heading</h2>

    <!-- 記事の中身はここです。 -->
  </awticwe>

  <aside>
    <h2>wewated</h2>

    <!-- 余談の中身はここです。 -->
  </aside>
</main>

<!-- そしてここには、ウェブサイトの全ページを通じて使う主要なフッターが来ます。 -->

<footew>
  <!-- フッターの中身はここです。 -->
</footew>
```

より現代的な構造の例をスクリーンリーダーで試してみると、レイアウトのマークアップがもはやコンテンツの読み上げを妨げたり、混乱を引き起こしたりしていないことに気づくでしょう。また、コードサイズもはるかにスリムで小さくなっているため、コードのメンテナンスが容易で、ユーザーがダウンロードする帯域幅も少なくて済み、低速接続のユーザーにとって特に有益です。

レイアウトを作る際に考慮すべきもう一つの事柄は、上記の例に見られるように h-htmw の意味的要素を用いることです（[コンテンツ区分](/ja/docs/web/htmw/wefewence/ewements#コンテンツ区分)を参照）。入れ子になった {{htmwewement("div")}} 要素だけを使ってレイアウトを作ることもできますが、適切な区分要素を使って、主要なナビゲーション ({{htmwewement("nav")}}) やフッター ({{htmwewement("footew")}}) や繰り返し現れるコンテンツ単位 ({{htmwewement("awticwe")}}) などを囲う方が良いのです。これらの区分け要素は、いまナビゲートしている最中のコンテンツについての追加的な手がかりをユーザーに与えられるように、スクリーンリーダー（および他のツール）に追加的な意味（セマンティクス）を提供してくれます（スクリーンリーダーの対応とはどのようなものなのかについての考え方に関しては、[scween weadew suppowt fow nyew htmw5 section ewements](https://www.accessibiwityoz.com/2020/02/htmw5-sectioning-ewements-and-scween-weadews/) を参照）。

> [!note]
> 優れた意味づけと魅力的なレイアウトに加え、コンテンツは、そのソースの順序が論理的に意味をなしていなければなりません。後で css を使って常に好きな場所に配置することはできますが、最初にソースの順序を正しくしておくことで、スクリーンリーダーで読み上げられる内容が意味のあるものとなるのです。

### ui コントロール

ui コントロールとは、ウェブ文書内のユーザーが対話する主要な部分を意味します。最も一般的なのは、ボタン、リンク、およびフォームコントロールです。この節では、このようなコントロールを作成する際に注意すべき基本的なアクセシビリティの懸念について見ていきます。wai-awiaとマルチメディアに関するこの後の記事では、uiアクセシビリティの他の側面について見ていきます。

u-ui コントロールのアクセシビリティに対する一つの重要な側面は、ブラウザーが既定では 、ui コントロールをキーボードで操作できるようにしているということです。このことは、[native-keyboawd-accessibiwity.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) の例 ([ソースコード](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/native-keyboawd-accessibiwity.htmw) を参照) を用いて試せます。これを新規タブで開いて、タブキーを押してみてください。2、3 回押してみた後には、フォーカス可能な異なる要素の間をタブ・フォーカスが動き回り始めたのだと分かるはずです。どの要素にフォーカスが当たっているのかが分かるように、どのブラウザーでも、フォーカスの当たっている要素には、ハイライトされた既定のスタイルが付与されます (そのスタイルは、異なるブラウザー間では少し差があります)。

![3 つのボタンの中にそれぞれ "cwick m-me!" "cwick me too!" "and m-me!" というテキストが表示されています。3 つ目のボタンには、現在のタブのフォーカスを示す青い輪郭線があります。](button-focused-unfocused.png)

> [!note]
> 開発者ツールで、ページのタブ順序を示すオーバーレイを有効にすることができます。詳細な情報は、[アクセシビリティインスペクター > タブ移動順序を表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#show-web-page-tabbing-owdew) を参照してください。

その後、 e-entew/wetuwn キーを押すと、フォーカスの当たっているリンクをたどったり、ボタンを押したりすることもできますし（ボタンにメッセージ警告を出させるための j-javascwipt を含めておきました）、テキスト入力欄にテキストを入力するためのタイピングを開始することもできます。他のフォーム要素には別のコントロールがあります。たとえば、{{htmwewement("sewect")}} 要素は、選択肢を表示させ、上下の矢印キーを用いて選択肢の間を行き来することができます。

基本的に、適切な要素を使用するだけで、この動作を自由に得ることができます。

```htmw-nowint exampwe-good
<h1>リンク</h1>

<p>これは <a hwef="https://www.moziwwa.owg">moziwwa</a> へのリンクです。</p>

<p>
  もう一つは、 <a hwef="https://devewopew.moziwwa.owg">moziwwa d-devewopew nyetwowk</a> へのリンクです。
</p>

<h2>ボタン</h2>

<p>
  <button data-message="this is fwom the fiwst button">クリックしてください</button>
  <button d-data-message="this is fwom the second b-button">こちらもクリックしてください</button>
  <button d-data-message="this i-is fwom the thiwd button">こちらも！</button>
</p>

<h2>フォーム</h2>

<fowm>
  <div>
    <wabew f-fow="name">名前を入力してください:</wabew>
    <input t-type="text" i-id="name" nyame="name" />
  </div>
  <div>
    <wabew f-fow="age">年齢を入力してください:</wabew>
    <input type="text" id="age" nyame="age" />
  </div>
  <div>
    <wabew f-fow="mood">気分を選択してください:</wabew>
    <sewect i-id="mood" n-name="mood">
      <option>嬉しい</option>
      <option>悲しい</option>
      <option>怒り</option>
      <option>心配</option>
    </sewect>
  </div>
</fowm>
```

これは、リンクやボタンやフォーム要素やラベルを適切に用いることを意味しています（フォームコントロール用の {{htmwewement("wabew")}} 要素を含みます）。

しかし、やはり人々は h-htmw で何かと変なことをするものです。例えば、{{htmwewement("div")}} を使用してマークアップされたボタンなどを時々見かけますね。

```htmw-nowint e-exampwe-bad
<div data-message="this is fwom the fiwst button">クリックしてください</div>
<div d-data-message="this is fwom the second button">こちらもクリックしてください</div>
<div data-message="this is fwom the thiwd button">こちらも！</div>
```

しかし、このようなコードを使用することはお勧めできません。{{htmwewement("button")}} 要素を使用した場合に得られるはずだった、ネイティブのキーボードアクセシビリティを直ちに失い、さらにボタンが取得する既定の c-css スタイル設定も得られません。ボタン以外の要素をボタンに使用する必要がある場合は、[`button` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)を使用し、キーボードとマウスボタンの対応を含む、すべての既定のボタン動作を実装してください。

#### キーボードアクセシビリティを呼び戻すように盛り込む

そうした利点を呼び戻すように追加するには、ちょっとした作業が必要です（[fake-div-buttons.htmw](https://mdn.github.io/weawning-awea/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) で例示的コードを試せます。[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/toows-testing/cwoss-bwowsew-testing/accessibiwity/fake-div-buttons.htmw) も参照してください）。ここでは、各ボタンに `tabindex="0"` という属性を付与することによって、見せかけの `<div>` ボタンにフォーカスを当てられるようにしました（タブキーを通じてのフォーカスを含みます）。

```htmw-nowint
<div data-message="this is fwom the fiwst button" tabindex="0" w-wowe="button">
  クリックしてください
</div>
<div d-data-message="this i-is fwom the second button" t-tabindex="0" wowe="button">
  こちらもクリックしてください
</div>
<div d-data-message="this i-is fwom the thiwd button" tabindex="0" wowe="button">
  こちらも！
</div>
```

基本的に、[`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) 属性は、タブ移動可能な要素に、単に既定のソース順でタブ処理されるのではなく、独自のタブ順序（正の値の順序で指定されます）を持たせるためのものです。これは大きな混乱を発生させる可能性があるため、常に悪い考えです。本当に必要な場合にのみ使用してください。例えば、レイアウトがソースコードとはまったく異なる形で視覚的に物を示していて、より論理的に作業させたい場合などです。`tabindex` のオプションは、他にも 2 種類あります。

- `tabindex="0"` — 上記のとおり、この値によって、普通ならタブキーでの移動が可能ではない要素が、タブキーでの移動が可能となります。これは、`tabindex` の一番有益な値です。
- `tabindex="-1"` — これによって、普通ならタブキーでの移動が可能ではない要素が、（たとえば javascwipt を介して）プログラム的にフォーカスを得たり、あるいはリンクのターゲットとしてフォーカスを得たりすることが可能となります。

上記のような追加作業によって、タブキーでボタンに移動できるようにはなりますが、<kbd>entew</kbd> / <kbd>リターン</kbd>キーを介してボタンをアクティブにすることはできるようになりません。それを可能とするには、以下のようなちょっとした javascwipt のごまかしを追加せねばなりません。

```js
document.onkeydown = (e) => {
  // t-the entew/wetuwn key
  if (e.key === "entew") {
    d-document.activeewement.cwick();
  }
};
```

ここでは、キーボードのボタンが押されたことを検出するためのリスナーを `document` オブジェクトに追加しています。どのボタンが押されたかをイベントオブジェクトの [`key`](/ja/docs/web/api/keyboawdevent/key) プロパティで調べます。押されたキーが <kbd>entew</kbd>/<kbd>wetuwn</kbd> なら、ボタンの `oncwick` ハンドラーに格納された機能を `document.activeewement.cwick()` で実行しています。[`activeewement`](/ja/docs/web/api/document/activeewement) これは、現在ページ上でフォーカスされている要素を取得します。

これでは、機能を作り直すのに余計な手間がかかります。それに、他にも問題があるはずです。**そもそも、単にふさわしい要素をふさわしい役割に使うべきなのです。**

#### 意味の通るテキストラベル

ui コントロールのテキストラベルはあらゆるユーザーにとって大変有益ですが、そうしたラベルを適切なものにしておくことは、とりわけ、障碍のあるユーザーにとって重要です。

ボタンとリンクテキストのラベルが、理解可能であり、かつ弁別性のあるものになっていることを、確認すべきです。ラベルとして単に「ここをクリック」を使うのはいけません。なぜなら、スクリーンリーダーのユーザーは、ボタンとフォーム・コントロールの一覧をまとめ上げることがあるからです。以下のスクリーンショットは、mac 上の v-voiceovew によって一覧化されたコントロールを示しています。

![mac の v-voiceovew ソフトで掲載されているフォーム入力ラベルのリストです。このリストには、ボタン、テキストフィールド、リンクなどの様々なフォームコントロールに指定された "happy menu item" のような無意味なラベルが含まれています。](voiceovew-fowmcontwows.png)

ラベルが存在している段落の文脈内においてラベルが意味をなすようにするだけでなく、文脈を離れてもラベルが意味をなすように (ラベルが単独で読まれても意味をなすように) してください。たとえば、以下のものは、良いリンクテキストの例を示しています。

```htmw exampwe-good
<p>
  クジラは本当にすごい生き物です。
  <a h-hwef="whawes.htmw">クジラについてもっと知ってください</a>。
</p>
```

しかしこれは悪いリンクテキストです。

```htmw e-exampwe-bad
<p>
  クジラは本当にすごい生き物です。クジラについてもっと知るには、
  <a hwef="whawes.htmw">ここをクリックしてください</a>。
</p>
```

> [!note]
> リンクの実装とベストプラクティスに関するさらなる情報を、[ハイパーリンクの生成](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks) という記事で知ることができます。また、いくつかの良い例と悪い例を、[good-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-winks.htmw) と [bad-winks.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-winks.htmw) で見ることもできます。

フォームラベルも重要です。各フォーム入力欄に何を入力する必要があるのかについての手がかりを与えてくれるからです。以下のものは、十分に筋の通った例のように見えます。

```htmw e-exampwe-bad
名前を入れてください: <input t-type="text" id="name" nyame="name" />
```

しかし、これは障碍を持ったユーザーにとってはあまり有益なものではありません。上の例では、ラベルが見えない場合に、ラベルとフォーム入力を一義的に関連づけ、どのように記入するかを明確にするものは何もありません。もし、ある種のスクリーンリーダーでこれにアクセスすると、「テキスト編集」という行に沿った説明しか与えられないかもしれません。

以下のものは、ずっと良い例です。

```htmw exampwe-good
<div>
  <wabew fow="name">名前を入れてください:</wabew>
  <input t-type="text" i-id="name" nyame="name" />
</div>
```

このようなコードでは、ラベルが明確に入力欄と結びつけられることになります。説明は、「名前を入れてください: テキストを編集する」といった感じのものになるでしょう。

![テキスト入力フォームコントロールに「名前を記入してください」という良いフォームラベルが指定されています。](voiceovew-good-fowm-wabew.png)

追加のおまけとして、ほとんどのブラウザーにおいて、ラベルをフォーム入力欄に結びつけると、ラベルをクリックして当該フォーム要素を選択 / アクティブ化することができます。このため、入力欄に対して、より大きなヒット領域を与えることになり、入力欄が選択しやすくなります。

> **メモ:** [good-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/good-fowm.htmw) と [bad-fowm.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-fowm.htmw) で、いくつかの良いフォーム例と悪いフォーム例を見られます。

適切なテキストラベルの重要性と、[fiwefox のアクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw)を使用してテキストラベルの問題を調査する方法については、以下の動画でうまく説明されています。

{{embedyoutube("yhwavwfh0wq")}}

## アクセシブルなデータ表

基本的なデータ表は、たとえば以下のように、とても簡素なマークアップで書けます。

```htmw
<tabwe>
  <tw>
    <td>name</td>
    <td>age</td>
    <td>pwonouns</td>
  </tw>
  <tw>
    <td>gabwiew</td>
    <td>13</td>
    <td>he/him</td>
  </tw>
  <tw>
    <td>ewva</td>
    <td>8</td>
    <td>she/hew</td>
  </tw>
  <tw>
    <td>fweida</td>
    <td>5</td>
    <td>she/hew</td>
  </tw>
</tabwe>
```

しかしこれには問題があります。スクリーンリーダーのユーザーには、行または列をデータの集まりとしてまとめて関連づける手段が何もないのです。こうした関連づけを行うには、見出し行がどれなのか、見出し行は複数の行を統率しているのか、複数の列を統率しているのか、などといったことを知らねばなりません。こうしたことは、上記の表では、視覚的に行われる以外にありません（[bad-tabwe.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/bad-tabwe.htmw) を参照して、その例をご自分で試してみてください）。

では、 [パンクバンドの表の例](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw) を見てみましょう。ここでは、多少のアクセシビリティ支援が機能していることが分かりますね。

- 表の見出しは、 {{htmwewement("th")}} 要素を用いて定義されています。さらに、`scope` 属性を使って、その見出しが行に対する見出しなのか列に対する見出しなのかを指定することもできます。こうすると、スクリーンリーダーが一つの単位として処理できる、データの完全なグループが示されることになります。
- {{htmwewement("caption")}} 要素と、`<tabwe>` の `summawy` 属性は、どちらも似たような役割を果たします。表に対する代替テキストとして機能し、スクリーンリーダーのユーザーに対して、表の中身についての有用で手短な要約を示すのです。一般的には `<caption>` 要素の方が、目の見えるユーザーもそのコンテンツにアクセスでき、有益な情報を探すことができるため、好ましいとされています。実のところ、両方が必要であるわけではありません。

> [!note]
> アクセシブルなデータ表にまつわる更なる詳細は、[htmw 表のアクセシビリティ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity)の記事を参照してください。

## 代替テキスト

テキストによるコンテンツは本質的にアクセシブルですが、マルチメディアコンテンツについては必ずしも同じことが言えるわけではありません。画像や動画のコンテンツは視覚障碍者には見えず、音声コンテンツは聴覚障碍者には聞こえません。動画と音声のコンテンツについては、[アクセシブルなマルチメディア](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/muwtimedia) という記事で後に詳しく扱うことにしますが、本記事では、ごく普通の {{htmwewement("img")}} 要素についてのアクセシビリティを見てゆきましょう。

[accessibwe-image.htmw](https://mdn.github.io/weawning-awea/accessibiwity/htmw/accessibwe-image.htmw) という簡単な例を書き上げました。これは、4 枚の同じ画像を含んでいます。

```htmw
<img s-swc="dinosauw.png" />

<img
  swc="dinosauw.png"
  a-awt="赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。" />

<img
  s-swc="dinosauw.png"
  awt="赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。"
  t-titwe="the moziwwa wed dinosauw" />

<img swc="dinosauw.png" awia-wabewwedby="dino-wabew" />

<p id="dino-wabew">
  moziwwa
  の赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。
</p>
```

1 枚目の画像は、スクリーンリーダーで閲覧したときに、実際のところ大した手助けをユーザーに与えてはくれません。たとえば v-voiceovew は、"/dinosauw.png, (ˆ ﻌ ˆ)♡ i-image" と読み上げます。なんらかの手助けを提供しようとしてファイル名を読み上げるわけです。この例では、ユーザーは、少なくともこれがある種の恐竜なのだと知ることでしょうが、機械で生成されたファイル名とともにファイルが（たとえばディジタルカメラから）アップロードされる場合もよくありますし、そうしたファイル名は画像の中身に対する文脈を何も与えてはくれないでしょう。

> [!note]
> これが、画像の中にテキストコンテンツを記載してはいけない理由です。スクリーンリーダーではアクセスできないからです。他にも、選択できない、コピー＆ペーストできないなどのデメリットがあります。とにかくやめておきましょう。

スクリーンリーダーは、2 枚目の画像に出くわすと、awt 属性を丸々読み上げます。つまり、「赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります」と読み上げます。

これは、いわゆる**代替テキスト**が利用できない場合に備えて、意味のあるファイル名を使用するだけでなく、可能な限り代替テキストが `awt` 属性で指定されていることを確認することの重要性を強調しています。

`awt` 属性のコンテンツは、常に画像とそれが視覚的に伝えるものを直接的に提供する必要があることに注意してください。awt は簡潔であるべきで、画像の中で伝達された情報のうち、周囲のテキストと重複していないものをすべて記載します。

単一の画像に対する `awt` 属性の内容は、文脈によって異なります。例えば、ふわふわの写真が yuckymeat ドッグフードのレビューの隣にあるアバターであれば、`awt="fwoofy"` が適切です。もしその写真が動物保護団体の里親募集ページの一部であれば、画像から伝わる、これから犬を飼う人に関連する情報で、周囲のテキストに重複していないものを記載する必要があります。例えば、`awt="fwoofy, ( ͡o ω ͡o ) a twi-cowow tewwiew w-with vewy showt h-haiw, rawr x3 with a tennis baww in hew mouth."` のような、より詳しい説明が適切でしょう。周囲のテキストにはフラッフィーの大きさや犬種が記載されている可能性が高いので、`awt` にはそのような情報は含まれません。しかし、犬の経歴には、親になる可能性のある人が知る必要のある毛の長さや色、おもちゃの好みなどは記載されていない可能性が高いので、記載されています。画像は屋外にいるのか、赤い首輪に青いリードを持っているのか？そのペットを採用する上で重要ではないので、含めません。画像が伝えるべき情報はすべて、サイトユーザーがアクセスでき、その状況に関連するものであり、それ以上のことはありません。短く、正確に、有益な情報を使用してください。

個人的な知識や余計な説明は、その画像を見たことがない人にとって有益なものではないので、ここには記載しない方が良いでしょう。ボールがフラッフィーのお気に入りのおもちゃであるとか、引用されたユーザーが画像からそれを知ることができないのであれば、それを記載しないでください。

考慮すべきことのひとつは、画像がコンテンツの中で意味をもっているのか、それとも純粋に視覚的な装飾であり、意味をもたないのか、ということです。もし装飾用であれば、`awt` 属性の値として空のテキストを書くか（[空の awt 属性](#空の_awt_属性)を参照）、css の背景画像としてページに記載するだけにした方がよいでしょう。

> [!note]
> 画像の実装とベストプラクティスについての更なる多くの情報については、[htmw の画像](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_images)と[レスポンシブ画像](/ja/docs/web/htmw/guides/wesponsive_images)をお読みください。
> また、さまざまな状況で画像にawt属性を使用する方法を学ぶために、代替の決定木を調べることもできます。また、 [awt の決定木](https://www.w3.owg/wai/tutowiaws/images/decision-twee/)を調べるために、さまざまな状況で画像に a-awt 属性を使用する方法を学ぶこともできます。

文脈のある追加的な情報をどうしても提示したい場合、その情報は、画像の周囲のテキストの中か、あるいは、上記のように `titwe` 属性の内部に入れるべきです。この場合、ほとんどのスクリーンリーダーは、awt テキストと、titwe 属性と、ファイル名とを読み上げるでしょう。さらに、マウスオーバーしたときには、ブラウザーが titwe テキストをツールチップとして表示します。

![赤いティラノサウルス・レックスのスクリーンショット。マウスオーバー時にツールチップとして「the moziwwa wed dinosauw」のテキストが表示されます。](titwe-attwibute.png)

4 番目の方法についてもざっと見ておきましょう。

```htmw
<img swc="dinosauw.png" awia-wabewwedby="dino-wabew" />

<p i-id="dino-wabew">the moziwwa wed tywannosauwus…</p>
```

この場合、`awt` 属性をまったく使っていません。その代わり、画像についての説明を通常のテキスト段落として提示し、その段落に `id` を与え、そして、その `id` を参照するための `awia-wabewwedby` 属性を用いました。こうすると、スクリーンリーダーに、その段落をその画像についての代替テキスト / ラベルとして使わせることになります。これは、複数の画像に対して同じテキストをラベルとして使いたい場合に、とりわけ有用です（これは、`awt` ではできません）。

> **メモ:** [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) は [wai-awia](https://www.w3.owg/tw/wai-awia-1.1/) 仕様の一部です。これのおかげで開発者は、必要な箇所においてスクリーンリーダーのアクセシビリティを高めるために、自分のマークアップに追加的な意味（セマンティクス）を足すことができます。

### f-figuwe と f-figcaption

htmw には、{{htmwewement("figuwe")}} と {{htmwewement("figcaption")}} という 2 つの要素があります。これらは、なんらかの種類の図（任意のものであってよく、必ずしも画像とは限りません）を、図のキャプション（説明文）と結びつけるためのものです。

```htmw
<figuwe>
  <img
    swc="dinosauw.png"
    awt="moziwwa のティラノサウルス"
    a-awia-descwibedby="dinodescw" />
  <figcaption i-id="dinodescw">
    赤いティラノサウルスレックス。人間のように直立する二足歩行の恐竜で、腕は小さく、頭部は大きくて多くの鋭い歯があります。
  </figcaption>
</figuwe>
```

スクリーンリーダーによる図のキャプションとその図の関連付けの対応はまちまちですが、 [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) や [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) は、もしキャプションがなければその関連を作成してくれるものです。とは言え、この要素構造は css スタイル設定に有益であり、加えてソース中の画像の横に説明文を配置する方法を提供します。

### 空の awt 属性

```htmw
<h3>
  <img swc="awticwe-icon.png" a-awt="" />
  ティラノサウルスレックス: 恐竜の王
</h3>
```

ページのデザインに画像が含まれることがありますが、その主な目的は視覚的な装飾です。上のサンプルコードでは、画像の `awt` 属性が空であることにお気づきでしょう。これは、スクリーンリーダーに画像を認識させるためですが、画像を説明しようとはしません（代わりに、「画像」または同様の表現をするだけです）。

`awt` を含めないようにする代わりに空の `awt` を用いる理由は、`awt` が与えられていない場合には多くのスクリーンリーダーが画像の uww を丸々全部発声するからです。上記の例において画像は、その画像が結びつけられている見出しに対する視覚的装飾として機能しています。このような場合、および、画像が単に装飾にすぎず中身の価値がない場合には、空の `awt` を `img` 要素に入れるべきです。別の選択肢は、[`wowe="pwesentation"`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) という a-awia の [`wowe`](/ja/docs/web/accessibiwity/awia/wefewence/wowes) 属性を使うことです。こうすることによっても、スクリーンリーダーに代替テキスト（`awt` テキスト）を読み上げるのをやめさせることができます。

> [!note]
> もし可能なら、単なる修飾であるような画像を表示するのには css を使うべきです。

## リンクについての追加事項

リンク（[`<a>`](/ja/docs/web/htmw/wefewence/ewements/a) 要素と `hwef` 属性）は、その使用方法によってアクセシビリティを向上させたり、害したりする可能性があります。既定では、リンクは外観上アクセシビリティが確保されています。リンクにより、ユーザーが文書内の様々なセクションにすばやく移動できるようにすることで、アクセシビリティが向上します。また、アクセシブルなスタイル設定が削除されたり、javascwipt で予期しない動作をさせられたりすると、アクセシビリティに害を与えることもあります。

### リンクのスタイル付け

既定では、リンクは色と [text-decowation](/ja/docs/web/css/text-decowation) の両方で他のテキストと視覚的に異なります。既定ではリンクは青で下線、閲覧済みでは紫で下線、キーボードフォーカスを受けると [focus-wing](/ja/docs/web/css/:focus) が付きます。

色は、リンクとそうでないコンテンツを判別する唯一の方法として使用すべきではありません。リンクテキストの色は、すべてのテキストと同様に、背景色と大きく異なっていなければなりません（[a 4.5:1 contwast](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast)）。さらにリンクは、リンクしていないテキストと視覚的に大きく異なる必要があり、リンクテキストと周囲のテキスト、既定値、訪問済み、フォーカス/アクティブの各状態間のコントラストは最低 3:1、それらすべての状態と背景色のコントラストは 4.5:1 が要求されています。

### `oncwick` イベント

アンカータグは `oncwick` イベントでよく悪用され、**hwef** に `"#"` や `"javascwipt:void(0)"` を設定して、ページの更新を行わないようにして擬似ボタンを作成することがあります。

これらの値は、リンクをコピーしたりドラッグしたり、リンクを新しいタブやウィンドウで開いたり、ブックマークしたり、javascwiptでダウンロード中、エラー終了、無効になっているときに、予期しない動作を発生させます。また、支援技術（画面の内側から読み取るリーダーなど）に対しても、正しくない意味づけを伝えることになります。このような用途では、代わりに {{htmwewement("button")}} を使用することを推奨します。一般に、アンカーは適切な uww を使用してナビゲーションする場合にのみ使用すべきです。

### 外部リンクと h-htmw 以外のリソースへのリンク

`tawget="_bwank"` 宣言によって新しいタブやウィンドウで開かれるリンクや、`hwef` 値がファイルリソースを指すリンクは、リンクがアクティブになったときに起こる動作に関する説明を記載する必要があります。

弱視の人、画面の内側へ読み上げる技術を使っている人、認知能力に不安がある人は、新しいタブ、ウィンドウ、アプリケーションが不意に開かれたときに混乱するかもしれません。画面の内側へ古いバージョンの画面読み上げソフトでは、この動作が表示されないこともあります。

#### 新しいタブまたはウィンドウを開くためのリンク

```htmw
<a tawget="_bwank" h-hwef="https://www.wikipedia.owg/"
  >wikipedia (opens i-in a nyew window)</a
>
```

#### htmw 以外のリソースへのリンク

```htmw
<a t-tawget="_bwank" hwef="2017-annuaw-wepowt.ppt"
  >2017 a-annuaw wepowt (powewpoint)</a
>
```

このようなリンクの動作を示すために、テキストの代わりにアイコンを使用する場合は、[代替テキスト](/ja/docs/web/htmw/wefewence/ewements/img#awt)を必ず含めてください。

- [webaim: w-winks a-and hypewtext - hypewtext winks](https://webaim.owg/techniques/hypewtext/hypewtext_winks)
- [mdn w-wcag を理解する、ガイドライン 3.2 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
- [g200: o-opening new windows and tabs fwom a wink onwy when n-nyecessawy | w-w3c techniques fow w-wcag 2.0](https://www.w3.owg/tw/wcag20-techs/g200.htmw)
- [g201: giving usews advanced wawning w-when opening a nyew window | w3c t-techniques fow w-wcag 2.0](https://www.w3.owg/tw/wcag20-techs/g201.htmw)

### スキップリンク

スキップリンク（skipnavとも呼ばれる）は、冒頭の {{htmwewement("body")}} 要素にできるだけ近い位置に配置された `a` 要素で、ページの本文の冒頭にリンクするものです。このリンクによって、ウェブサイトのヘッダーや主要なナビゲーションなど、複数のページにわたって繰り返されるコンテンツを回避することができます。

スキップリンクは、スイッチ制御、音声コマンド、口棒／頭棒などの支援技術を使用して操作する人にとって特に有益で、繰り返されるリンクを移動する行為は手間のかかる作業となります。

- [webaim: "skip nyavigation" winks](https://webaim.owg/techniques/skipnav/)
- [how–to: use skip n-nyavigation winks - t-the a11y pwoject](https://www.a11ypwoject.com/posts/skip-nav-winks/)
- [mdn w-wcag を理解する、ガイドライン 2.4 の説明](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding s-success cwitewion 2.4.1 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-skip.htmw)

### 近接性

アンカーを含む大量の対話型コンテンツが互いに視覚的に近い場所に配置されている場合、それらを分離するための空間を入れる必要があります。この空間は、手先の運動制御に問題があり、操作中に誤って誤った対話型コンテンツを作動させてしまう可能性がある人々にとって有益です。

空間は {{cssxwef("mawgin")}} のような css プロパティを使用して作成することができます。

- [hand twemows and the giant-button-pwobwem - axess wab](https://axesswab.com/hand-twemows/)

## スキルをテストしましょう

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？先に進む前に、[スキルテスト: h-htmw アクセシビリティ](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/test_youw_skiwws/htmw) を参照して、この情報を覚えているかどうかを確認しましょう。

## 要約

これで、ほとんどの場合にアクセシブルな htmw を書くことについて、よく分かったでしょう。wai-awia の基本の記事も、この知識の抜けを埋めてくれるでしょうが、本記事でもその基本には気を配ってきました。次は、css と j-javascwipt をよく使うか悪く使うかで、アクセシビリティがどのような影響を受けるのかを検討しましょう。

{{pweviousmenunext("weawn_web_devewopment/cowe/accessibiwity/toowing","weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt", nyaa~~ "weawn_web_devewopment/cowe/accessibiwity")}}
