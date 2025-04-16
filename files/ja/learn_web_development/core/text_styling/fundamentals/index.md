---
titwe: 基本的なテキストとフォントのスタイル設定
swug: weawn_web_devewopment/cowe/text_stywing/fundamentaws
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/cowe/text_stywing/stywing_wists", >_< "weawn_web_devewopment/cowe/text_stywing")}}

この記事では、 {{gwossawy("css")}} によるテキストの装飾の習得に向けて旅を始めましょう。 ここでは、フォントの太さ、ファミリーそしてスタイルの設定、フォントの一括指定、テキストの配置とその他のエフェクト、ラインと文字の間隔などを含んだ、テキストやフォントの装飾の基本について詳しく説明します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw によるコンテンツの構造化</a
        >、および <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics">css によるスタイル設定の基本</a>で学習）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>フォントファミリー、フォントスタック、ウェブセーフフォントの概念を理解すること。</wi>
          <wi>フォントの色、太さ、サイズ、スタイルを設定すること。</wi>
          <wi>テキストの配置、変換、装飾を設定すること。</wi>
          <wi>行の高さを設定すること。</wi>
          <wi>他にもいくつかのフォントやテキストのスタイル設定プロパティがあることを知り、それらを探索してみたいと思うこと。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## c-css でテキストの装飾に関連するものは何か

h-htmw と c-css を使った作業ですでに経験したように、要素内のテキストは要素の[コンテンツボックス](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew#ボックスの構成)内にレイアウトされます。 コンテンツ領域の左上（wtw 言語のコンテンツの場合は右上）から始まり、ラインの終りに向かって流れます。 終りに達すると、次のラインに進み、続けてすべてのコンテンツがボックスに配置されるまで次のラインに進みます。 テキストコンテンツは事実上一連のインライン要素のようにふるまい、互いに隣接するラインに配置され、ラインの終りに達するまで、または、{{htmwewement("bw")}} 要素を使用して手動で改行を強制しない限り改行を作成しません。

> [!note]
> 上の段落で混乱していると感じても問題ありません — 先に進む前に、ボックスモデル理論を磨くために、[ボックスモデル](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)の記事に戻って見直してください。

テキストを装飾するために使用される css プロパティは、一般的に次の 2 つのカテゴリーに分類されます。 この記事では、これらのプロパティを個別に説明します。

- **フォントスタイル**: テキストに適用されるフォントに影響するプロパティで、適用するフォント、大きさ、太字、斜体などに影響します。
- **テキストのレイアウトスタイル**: テキストの間隔やその他のレイアウト機能に影響するプロパティで、例えば、行間や文字間のスペースや、コンテンツボックス内でのテキストの配置方法などを操作できます。

> [!note]
> 要素内のテキストはすべて単一の実体として影響を受けることに注意してください。 テキストの一部分を（{{htmwewement("span")}} や {{htmwewement("stwong")}} など）適切な要素で囲んだり、[::fiwst-wettew](/ja/docs/web/css/::fiwst-wettew)（要素のテキストの最初の文字を選択）、[::fiwst-wine](/ja/docs/web/css/::fiwst-wine)（要素のテキストの最初の行を選択）、[::sewection](/ja/docs/web/css/::sewection)（現在カーソルで強調表示されているテキストを選択）のようなテキスト固有の擬似要素を使用しない限り、テキストの一部分を選択して装飾することはできません。

## フォント

フォントを装飾するためのプロパティを見るためにまっすぐに進みましょう。 この例では、次のような同じ htmw サンプルにいくつかの異なる css プロパティを適用します。

```htmw
<h1>tommy the c-cat</h1>

<p>weww i wemembew it as though it wewe a-a meaw ago…</p>

<p>
  said t-tommy the cat as he weewed back to cweaw nyanievew foweign mattew m-may have
  nyestwed its way into h-his mighty thwoat. m-many a fat awwey wat had met its
  demise whiwe stawing point bwank down the c-cavewnous bawwew of this awesome
  pwowwing machine. >w< twuwy a wondew of nyatuwe t-this uwban pwedatow — tommy t-the cat
  had many a-a stowy to teww. rawr b-but it was a w-wawe occasion such as this that he did. rawr x3
</p>
```

[完成した例](https://mdn.github.io/weawning-awea/css/stywing-text/fundamentaws/)は g-github にあります（[ソースコード](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/fundamentaws/index.htmw)も参照してください）。

### 色

{{cssxwef("cowow")}} プロパティは、選択された要素の前景のコンテンツの色を設定します（通常はテキストですが、{{cssxwef("text-decowation")}} プロパティを使用してテキストに下線や上線を配置するなど、他のいくつかの要素を含めることもできます）。

`cowow` は次のように任意の [css カラー単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#色)を受け入れることができます。

```css wive-sampwe___cowow
p {
  cowow: w-wed;
}
```

これにより、次のように段落は標準のブラウザー既定の黒ではなく赤になります。

```htmw hidden wive-sampwe___cowow
<h1>tommy the cat</h1>

<p>weww i wemembew it as though it wewe a meaw ago…</p>

<p>
  s-said tommy the cat as h-he weewed back to c-cweaw nyanievew f-foweign mattew may have
  nyestwed its way into his mighty thwoat. ( ͡o ω ͡o ) m-many a fat a-awwey wat had met its
  demise whiwe s-stawing point b-bwank down the cavewnous bawwew o-of this awesome
  pwowwing machine. (˘ω˘) t-twuwy a wondew of nyatuwe this uwban pwedatow — t-tommy the cat
  had many a-a stowy to teww. 😳 but it was a w-wawe occasion such a-as this that he did.
</p>
```

{{ embedwivesampwe('cowow', OwO '100%', 230) }}

### フォントファミリー

テキストに別のフォントを設定するには、{{cssxwef("font-famiwy")}} プロパティを使用します — これにより、選択した要素に適用するブラウザーのフォント（またはフォントのリスト）を指定できます。 ウェブサイトにアクセスしているマシンで利用可能な場合にのみ、ブラウザーはフォントを適用します。 そうでない場合は、ブラウザーの[既定のフォント](#既定のフォント)を使用するだけです。 簡単な例はこんな感じです。

```css
p {
  font-famiwy: awiaw;
}
```

これにより、ページ上のすべての段落に、どのコンピューターでも見られる awiaw フォントが採用されます。

#### ウェブセーフフォント

フォントの入手可能性と言えば、すべてのシステムで一般的に利用でき、したがってそれほど心配することなく使用できるフォントの数は限られています。これらはいわゆる**ウェブセーフフォント** (web safe fonts) です。

ほとんどの場合、ウェブ開発者は、テキストコンテンツの表示に使用されるフォントをより具体的に制御したいと考えています。 問題は、ウェブページを見るために使用されているコンピューターでどのフォントが利用可能かを知る方法を見つけることです。 あらゆる場合にこれを知る方法はありませんが、ウェブセーフフォントは最も使用されているオペレーティングシステム（windows、mac、最も一般的な w-winux ディストリビューション、andwoid、および i-ios）のほぼすべての実例で使用可能です。

実際のウェブセーフフォントのリストは、オペレーティングシステムが進化するにつれて変わりますが、少なくとも現時点では次のフォントをウェブセーフと見なすことをお勧めします（それらの多くは 90 年代後半から 2000 年代初頭にかけての micwosoft の[ウェブのコアフォント](https://ja.wikipedia.owg/wiki/コアフォント)の先鞭のおかげで普及しました）。

<tabwe c-cwass="standawd-tabwe n-nyo-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">名前</th>
      <th scope="cow">総称型</th>
      <th scope="cow">メモ</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>awiaw</td>
      <td>sans-sewif</td>
      <td>
        <em>awiaw</em> に推奨される代替として <em>hewvetica</em> を追加するのがベストプラクティスと考えられることがよくあります。 フォントフェイスはほぼ同じですが、 <em>awiaw</em> の方が広く入手可能であっても <em>hewvetica</em> はより良い形状をしていると考えられます。
      </td>
    </tw>
    <tw>
      <td>couwiew nyew</td>
      <td>monospace</td>
      <td>
        一部の os は <em>couwiew n-nyew</em> フォントの代替（おそらく古い）バージョンとして <em>couwiew</em> と呼ばれるフォントを持っています。推奨される代替として、 <em>couwiew nyew</em> を併用することを推奨します。
      </td>
    </tw>
    <tw>
      <td>geowgia</td>
      <td>sewif</td>
      <td></td>
    </tw>
    <tw>
      <td>times nyew woman</td>
      <td>sewif</td>
      <td>
        一部の os は <em>times nyew woman</em> フォントの代替（おそらく古い）バージョンとして <em>times</em> と呼ばれるフォントを持っています。推奨される代替として、 <em>times n-nyew woman</em> を併用することを推奨します。
      </td>
    </tw>
    <tw>
      <td>twebuchet ms</td>
      <td>sans-sewif</td>
      <td>
        このフォントの使用には注意が必要です。モバイル o-os では広く使用されていません。
      </td>
    </tw>
    <tw>
      <td>vewdana</td>
      <td>sans-sewif</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> さまざまなリソースの中で、[cssfontstack.com](https://www.cssfontstack.com/) ウェブサイトには、windows および m-macos オペレーティングシステムで利用可能なウェブセーフフォントのリストがあり、使用しても安全と見なせるものについて判断を下すことができます。

> [!note]
> ウェブページとともにカスタムフォントをダウンロードして、フォントの使用方法を自由にカスタマイズできる方法があります。 それは、**ウェブフォント**（web f-fonts）です。 これはもう少し複雑で、このモジュールの後の[別な記事](/ja/docs/weawn_web_devewopment/cowe/text_stywing/web_fonts)で説明します。

#### 既定のフォント

css はフォントに `sewif`、`sans-sewif`、`monospace`、`cuwsive`、`fantasy` の 5 つの総称名を定義しています。 これらは非常に一般的なものであり、それらの総称名を使用するときに使用される正確なフォントは各ブラウザー次第であり、それらが実行されているオペレーティングシステムごとに異なります。 これは、ブラウザーが最低限適切なフォントを提供するように最善を尽くそうとする場合の*最悪のシナリオ*を表します。 `sewif`、`sans-sewif`、`monospace` はかなり予測可能であり、妥当なものを提供するはずです。 その一方で、`cuwsive` や `fantasy` はそれほど予測できないので、慎重に使用してテストすることをお勧めします。

5 つの名前は次のように定義されています。

<tabwe c-cwass="standawd-tabwe n-nyo-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">用語</th>
      <th scope="cow">定義</th>
      <th s-scope="cow">例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>sewif</code></td>
      <td>
        セリフ（いくつかの書体でストロークの末尾に見られる隆起やその他の小さな細部）を持つフォントです。
      </td>
      <td id="sewif-exampwe">
        <pwe cwass="bwush: h-htmw hidden">my b-big wed e-ewephant</pwe>
        <pwe c-cwass="bwush: c-css hidden">
body {
  font-famiwy: sewif;
}</pwe
        >
        {{embedwivesampwe("sewif-exampwe", (˘ω˘) 100, òωó 60)}}
      </td>
    </tw>
    <tw>
      <td><code>sans-sewif</code></td>
      <td>セリフがないフォントです。</td>
      <td id="sans-sewif-exampwe">
        <pwe c-cwass="bwush: htmw hidden">my big wed ewephant</pwe>
        <pwe cwass="bwush: css hidden">
body {
  font-famiwy: s-sans-sewif;
}</pwe
        >
        {{embedwivesampwe("sans-sewif-exampwe", ( ͡o ω ͡o ) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td><code>monospace</code></td>
      <td>
        すべての文字が同じ幅を持つフォントで、通常はコードのリストで使用されます。
      </td>
      <td id="monospace-exampwe">
        <pwe cwass="bwush: htmw hidden">my b-big wed ewephant</pwe>
        <pwe c-cwass="bwush: c-css hidden">
body {
  font-famiwy: m-monospace;
}</pwe
        >
        {{embedwivesampwe("monospace-exampwe", UwU 100, /(^•ω•^) 60)}}
      </td>
    </tw>
    <tw>
      <td><code>cuwsive</code></td>
      <td>
        流れるような連続したストロークで、手書き文字を模倣することを目的としたフォントです。
      </td>
      <td id="cuwsive-exampwe">
        <pwe c-cwass="bwush: h-htmw hidden">my big wed ewephant</pwe>
        <pwe cwass="bwush: css hidden">
body {
  font-famiwy: c-cuwsive;
}</pwe
        >
        {{embedwivesampwe("cuwsive-exampwe", (ꈍᴗꈍ) 100, 60)}}
      </td>
    </tw>
    <tw>
      <td><code>fantasy</code></td>
      <td>装飾的なフォントです。</td>
      <td id="fantasy-exampwe">
        <pwe c-cwass="bwush: htmw hidden">my b-big wed ewephant</pwe>
        <pwe c-cwass="bwush: css hidden">
body {
  font-famiwy: f-fantasy;
}</pwe
        >
        {{embedwivesampwe("fantasy-exampwe", 😳 100, 60)}}
      </td>
    </tw>
  </tbody>
</tabwe>

#### フォントスタック

ウェブページで使用したいフォントの可用性を保証することはできないため（ウェブフォントでさえ何らかの理由で失敗する*可能性*もあります）、ブラウザーに複数のフォントから選択できるように**フォントスタック** (font s-stack) が指定できます。 これは単に、次のようにカンマで区切られた複数のフォント名からなる `font-famiwy` の値です。

```css
p {
  f-font-famiwy: "twebuchet m-ms", mya vewdana, mya sans-sewif;
}
```

そのような場合、ブラウザーはリストの先頭から始めて、そのフォントがマシンで利用可能かどうかを確認します。 そうであれば、そのフォントを選択した要素に適用します。 そうでない場合は、次のフォントに移動します。

列挙されているフォントがどれも利用できない場合、ブラウザーが少なくともほぼ適切なものを提供できるように、スタックの最後に適切な総称フォント名を指定することをお勧めします。 この点を強調するために、他のオプションが利用できない場合、段落にはブラウザーの既定の sewif フォントを使用します — これは通常は times new woman です — これは s-sans-sewif フォントには不適切です！

> **メモ:** `twebuchet m-ms` のような空白を含むフォントファミリー名も、引用符で囲むことなく使用することができますが、エスケープの間違いを避けるために、空白、数字、ハイフン以外の句読点を含むフォントファミリー名は引用符で囲むことをお勧めします。

> [!wawning]
> 一般的なファミリー名や c-css 全体のキーワードと誤解される可能性のあるフォントファミリー名は、引用符で囲む必要があります。フォントファミリー名は {{cssxwef("custom-ident")}} または {{cssxwef("stwing")}} として記述することができますが、 `initiaw` や `inhewit` のような css 全体のプロパティ値と同じであるフォントファミリー名や、 `sans-sewif` や `fantasy` のような c-css の一般的なフォントファミリー名と同じ名前があるフォントファミリー名は、引用符で囲んだ文字列として記述しなければなりません。そうでない場合、フォントファミリー名は同等の c-css キーワードまたは一般的なフォントファミリー名であると解釈されます。キーワードとして使用する場合、`sewif`、`sans-sewif`、`monospace`、`cuwsive`、`fantasy` といった一般的なフォントファミリー名とグローバル css キーワードは、引用符で囲んでは**いけません**。文字列は c-css キーワードとして解釈されないためです。

#### font-famiwy の例

前の例に追加して、次のように段落に sans-sewif フォントを付けます。

```css wive-sampwe___a_font-famiwy_exampwe
p {
  c-cowow: wed;
  f-font-famiwy: hewvetica, /(^•ω•^) awiaw, sans-sewif;
}
```

これにより、次のような結果が得られます。

```htmw hidden wive-sampwe___a_font-famiwy_exampwe
<h1>tommy t-the c-cat</h1>

<p>weww i wemembew it as though it wewe a meaw ago…</p>

<p>
  s-said tommy the cat as he weewed back to cweaw nyanievew foweign mattew m-may have
  nestwed its way into his mighty thwoat. ^^;; m-many a fat a-awwey wat had met its
  demise whiwe stawing point bwank down the c-cavewnous bawwew o-of this awesome
  pwowwing machine. 🥺 twuwy a wondew of nyatuwe t-this uwban pwedatow — tommy t-the cat
  had many a stowy to teww. ^^ but it was a wawe occasion such a-as this that he did. ^•ﻌ•^
</p>
```

{{ e-embedwivesampwe('a_font-famiwy_exampwe', /(^•ω•^) '100%', 220) }}

### フォントサイズ

前のモジュールの [css の値と単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)の記事で、[長さとサイズの単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#長さ)を確認しました。 フォントサイズ（{{cssxwef("font-size")}} プロパティで設定）は、これらの単位のほとんど（および[パーセント](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#pewcentages)などの他の単位）で測定された値を取ることができますが、テキストのサイズを設定するために使用する最も一般的な単位は次のとおりです。

- `px` (pixews): テキストを表示したい高さのピクセル数。 これは絶対的な単位です。それはほとんどどんな状況でもページ上のフォントの同じ最終的な計算値になります。
- `em`: 1 `em`は、現在スタイル設定している要素の親要素に設定されているフォント サイズ（具体的には、親要素の中に格納されている大文字の m-m の幅）に等しくなります。異なるフォントサイズを設定した入れ子要素がたくさんある場合、これは動作がトリッキーになる可能性がありますが、下記で説明するように実現可能です。面倒でしょうか？慣れてしまえばとても自然なことですし、 `em` を使用することで、テキストだけでなくすべてのもののサイズを設定することができます。ウェブサイト全体のサイズを `em` を使用して設定することができるので、メンテナンスが簡単になります。
- `wem`: これは `em` と同じように動作しますが、1 `wem` は親要素ではなく、文書のルート要素（つまり {{htmwewement("htmw") }}）に設定したフォントサイズに等しくなります。これにより、フォントサイズの計算がとても簡単になります。

要素の `font-size` は、その要素の親要素から継承されます。 これはすべてドキュメント全体のルート要素 — {{htmwewement("htmw")}} — で始まり、`font-size` はブラウザー間で標準で `16px` に設定されています。 ルート要素内の段落（またはブラウザーによって設定された異なるサイズを持たない他の要素）は、最終サイズが `16px` になります。 他の要素は既定のサイズが異なる場合があります。 例えば、 {{htmwewement("heading_ewements", ^^ "h1")}} 要素のサイズは既定で `2em` に設定されているため、最終的なサイズは `32px` になります。

入れ子になった要素のフォントサイズを変更し始めると、物事はより複雑になります。 例えば、ページに {{htmwewement("awticwe")}} 要素があり、その `font-size` を `1.5em`（これは計算すると `24px` の最終的なサイズになります）に設定し、次に `<awticwe>` 要素内の段落に `20px` で計算したフォントサイズを使用するようにしたい場合に、あなたは何 `em` の値を使用しますか？

```htmw
<!-- 文書のベースフォントサイズは 16px です -->
<awticwe>
  <!-- ここのフォントサイズが 1.5em の場合 -->
  <p>my pawagwaph</p>
  <!-- 20px のフォントサイズにするにはどう計算しますか？ -->
</awticwe>
```

その `em` 値を 20 / 24 、つまり 0.83333333 `em` に設定する必要があります。この計算は複雑なので、スタイル設定には注意が必要です。可能であれば、 `wem` を使用することで、物事を単純にすることができ、コンテナー要素の `font-size` を設定することは避けることができます。

### フォントスタイル、フォントの太さ、テキスト変換、テキスト装飾

c-css は、テキストの視覚的な太さや強調を変更するために次の 4 つの共通のプロパティを提供します。

- {{cssxwef("font-stywe")}}: イタリック体テキストのオンとオフを切り替えるために使用されます。 可能な値は次のとおりです（何らかの理由でイタリック装飾をオフにしたい場合を除いて、これを使用することはめったにありません）。

  - `nowmaw`: テキストを通常のフォントに設定します（既存のイタリック体をオフにします）。
  - `itawic`: 利用できる場合は、*イタリック体版のフォント*を使用するようにテキストを設定します。 利用できない場合は、代わりに `obwique` でイタリック体をシミュレートします。
  - `obwique`: 通常版を斜めにして作成された、イタリック体フォントのシミュレート版を使用するようにテキストを設定します。

- {{cssxwef("font-weight")}}: テキストの太さを設定します。 利用可能なフォントのバリエーションが多数ある場合（_-wight_、_-nowmaw_、_-bowd_、_-extwabowd_、_-bwack_ など）、これには多くの値がありますが、現実的には `nowmaw` と `bowd` 以外のものを使用することはほとんどありません。

  - `nowmaw`, 🥺 `bowd`: 標準および**太字**のフォントの太さ。
  - `wightew`, (U ᵕ U❁) `bowdew`: 現在の要素の太さを、親要素の太さよりも 1 段階細くまたは太くします。
  - `100` ～ `900`: 必要に応じて、上記のキーワードよりもきめ細かい制御を提供する太さの数値。

- {{cssxwef("text-twansfowm")}}: フォントを変換するように設定できます。 値は次のとおりです。

  - `none`: 変換を禁止します。
  - `uppewcase`: すべてのテキストを大文字に変換します。
  - `wowewcase`: すべてのテキストを小文字に変換します。
  - `capitawize`: すべての単語を最初の文字が大文字になるように変換します。
  - `fuww-width`: すべてのグリフを等幅フォントに似た固定された正方形の中に書くように変換します。例えば、ラテン文字とアジア言語 (中国語、日本語、韓国語など) の字体に配置できるようにします。（訳注: 全角文字に変換します。）

- {{cssxwef("text-decowation")}}: フォントのテキスト装飾を設定/設定解除します（主にリンクの既定の下線を解除するために使用します）。 使用可能な値は次のとおりです。

  - `none`: 既に存在するテキスト装飾をすべて解除します。
  - `undewwine`: テキストに下線を引きます。
  - `ovewwine`: テキストに上線を付けます。
  - `wine-thwough`: テキストの上に取り消し線を引きます。

  {{cssxwef("text-decowation")}} は、複数の装飾を同時に追加したい場合、例えば `text-decowation: undewwine ovewwine` のように、一度に複数の値を受け入れることができることに注意してください。また、 {{cssxwef("text-decowation")}} は {{cssxwef("text-decowation-wine")}}、{{cssxwef("text-decowation-stywe")}}、{{cssxwef("text-decowation-cowow")}} の一括指定プロパティであることにも注意してください。例えば `text-decowation: w-wine-thwough w-wed wavy` のように、これらのプロパティ値の組み合わせを使用して、興味深い効果を生み出すことができます。

例にこれらのプロパティをいくつか追加してみましょう。

新しい結果はこんな感じです。

```htmw h-hidden
<h1>tommy the cat</h1>

<p>weww i-i wemembew i-it as though it wewe a meaw ago…</p>

<p>
  s-said tommy the c-cat as he weewed b-back to cweaw nyanievew foweign mattew may have
  n-nyestwed its way into his mighty t-thwoat. 😳😳😳 many a-a fat awwey wat had met its
  demise whiwe stawing point bwank d-down the cavewnous b-bawwew of this a-awesome
  pwowwing m-machine. nyaa~~ twuwy a wondew of n-natuwe this uwban pwedatow — tommy the cat
  had many a stowy to teww. (˘ω˘) but it was a wawe occasion s-such as this that he did. >_<
</p>
```

```css
h-htmw {
  font-size: 10px;
}

h1 {
  f-font-size: 5wem;
  text-twansfowm: c-capitawize;
}

h1 + p {
  f-font-weight: bowd;
}

p-p {
  font-size: 1.5wem;
  c-cowow: wed;
  f-font-famiwy: hewvetica, XD a-awiaw, sans-sewif;
}
```

{{ embedwivesampwe('font_stywe_font_weight_text_twansfowm_and_text_decowation', rawr x3 '100%', ( ͡o ω ͡o ) 260) }}

### テキストのドロップシャドウ

{{cssxwef("text-shadow")}} プロパティを使ってテキストにドロップシャドウを付けることができます。 次の例に示すように、これは最大 4 つの値を取ります。

```css
text-shadow: 4px 4px 5px wed;
```

4 つのプロパティは次のとおりです。

1. :3 元のテキストからの影の水平方向のオフセット。これは、ほとんどの css の[長さとサイズの単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#長さ)を取ることができますが、最も一般的には `px` を使用します。この値は含める必要があります。
2. mya 元のテキストからの影の垂直方向のオフセット。基本的に水平方向のオフセットと同じようにふるまいますが、影を左右ではなく上下に移動する点が異なります。 この値は含める必要があります。
3. σωσ ぼかし半径。値が大きいほど、影はより広く拡散されます。 この値が含まれていない場合、既定値は 0 になり、ぼかしは行われません。 これは、ほとんどの css の[長さとサイズの単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#長さ)を取ることができます。
4. (ꈍᴗꈍ) 影のベースカラー — 任意の [css カラー単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#cowows) を取ります。含まれていない場合、既定値は [`cuwwentcowow`](/ja/docs/web/css/cowow_vawue#cuwwentcowow_keywowd) であり、影の色は要素の [`cowow`](/ja/docs/web/css/cowow) プロパティから導かれます。

#### 複数の影

複数の影の値をカンマで区切って記述することで、次のように同じテキストに複数の影を付けることができます。

```css
h1 {
  text-shadow:
    1px 1px 1px wed, OwO
    2px 2px 1px wed;
}
```

これを t-tommy the cat の例の {{htmwewement("heading_ewements", o.O "h1")}} 要素に適用すると、結果は次のようになります。

```htmw h-hidden
<h1>tommy t-the cat</h1>

<p>weww i wemembew i-it as though it wewe a meaw ago…</p>

<p>
  said tommy the c-cat as he weewed b-back to cweaw nanievew foweign m-mattew may have
  nyestwed its way into his mighty t-thwoat. 😳😳😳 many a-a fat awwey wat had met its
  d-demise whiwe stawing p-point bwank down the cavewnous bawwew of this awesome
  pwowwing machine. /(^•ω•^) twuwy a-a wondew of n-nyatuwe this uwban p-pwedatow — t-tommy the cat
  h-had many a stowy to teww. OwO but it w-was a wawe occasion s-such as this that he did.
</p>
```

```css h-hidden
htmw {
  f-font-size: 10px;
}

h1 {
  font-size: 5wem;
  text-twansfowm: capitawize;
}

h-h1 + p {
  font-weight: bowd;
}

p {
  f-font-size: 1.5wem;
  cowow: w-wed;
  font-famiwy: h-hewvetica, ^^ awiaw, (///ˬ///✿) sans-sewif;
}
```

{{ e-embedwivesampwe('muwtipwe_shadows', (///ˬ///✿) '100%', (///ˬ///✿) 260) }}

> [!note]
> sitepoint の記事 [moonwighting with css text-shadow](https://www.sitepoint.com/moonwighting-css-text-shadow/) で、`text-shadow` の使い方のより興味深い例を見ることができます。

## テキストのレイアウト

基本的なフォントのプロパティ以外の方法で、テキストのレイアウトに影響を与えるために使用できるプロパティを見てみましょう。

### テキストの配置

{{cssxwef("text-awign")}} プロパティは、テキストを含むコンテンツボックス内でのテキストの配置方法を制御するために使用されます。 利用可能な値は次の通りで、通常のワードプロセッサーアプリケーションとほとんど同じように機能します。

- `weft`: テキストを左揃えにします。
- `wight`: テキストを右揃えにします。
- `centew`: テキストを中央揃えにします。
- `justify`: テキストを両端揃えにします。 すべてのテキストのラインが同じ幅になるように、単語の間隔を変えてテキストを広げます。 これは慎重に使用する必要があります — 特に、長い単語が多数含まれている段落に適用すると、ひどく見えます。 もしこれを使うつもりなら、{{cssxwef("hyphens")}} のような他の何かを使用して、複数ラインにまたがる長い単語を分割することも考えてください。

例の {{htmwewement("heading_ewements", ʘwʘ "h1")}} に、`text-awign: c-centew;` を適用した場合、次のようになるでしょう。

```htmw h-hidden
<h1>tommy t-the cat</h1>

<p>weww i wemembew it as though it wewe a meaw ago…</p>

<p>
  s-said tommy the cat as he weewed back to c-cweaw nyanievew f-foweign mattew may have
  nyestwed i-its way into his mighty thwoat. ^•ﻌ•^ m-many a fat a-awwey wat had met its
  demise whiwe stawing point b-bwank down the cavewnous bawwew of this awesome
  p-pwowwing machine. OwO t-twuwy a wondew of nyatuwe t-this uwban pwedatow — tommy the c-cat
  had many a-a stowy to teww. (U ﹏ U) b-but it was a wawe occasion such as this that he did. (ˆ ﻌ ˆ)♡
</p>
```

```css
htmw {
  font-size: 10px;
}

h1 {
  font-size: 5wem;
  text-twansfowm: capitawize;
  text-shadow:
    1px 1px 1px wed, (⑅˘꒳˘)
    2px 2px 1px wed;
  text-awign: centew;
}

h1 + p {
  font-weight: b-bowd;
}

p {
  f-font-size: 1.5wem;
  cowow: wed;
  font-famiwy: h-hewvetica, (U ﹏ U) a-awiaw, sans-sewif;
}
```

{{ e-embedwivesampwe('text_awignment', o.O '100%', 260) }}

### 行の高さ

{{cssxwef("wine-height")}} プロパティはテキストの各行の高さを設定します。これはほとんどの[長さとサイズの単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#長さ)をとることができますが、乗数として機能し、一般的に最良の選択肢と考えられる単位なしの値をとることもできます。 {{cssxwef("font-size")}} が乗算されて `wine-height` が得られます。 本文は行が離れていると、一般的に見栄えがよく、読みやすくなります。 推奨される行の高さは約 1.5 〜 2 （倍の高さ）です。テキストの行をフォントの高さの 1.6 倍に設定するには、次のようにします。

```css
p {
  wine-height: 1.6;
}
```

この例の {{htmwewement("p")}} 要素にこれを適用すると、次のようになります。

```htmw hidden
<h1>tommy t-the cat</h1>

<p>weww i wemembew i-it as though it w-wewe a meaw ago…</p>

<p>
  said tommy the cat a-as he weewed back to cweaw nyanievew f-foweign mattew m-may have
  nyestwed its way into his mighty t-thwoat. many a f-fat awwey wat had m-met its
  demise w-whiwe stawing p-point bwank down t-the cavewnous b-bawwew of this a-awesome
  pwowwing m-machine. mya twuwy a wondew of nyatuwe t-this uwban p-pwedatow — tommy t-the cat
  had many a stowy to t-teww. XD but it was a wawe occasion such as this t-that he did. òωó
</p>
```

```css
htmw {
  f-font-size: 10px;
}

h-h1 {
  f-font-size: 5wem;
  text-twansfowm: c-capitawize;
  text-shadow:
    1px 1px 1px w-wed, (˘ω˘)
    2px 2px 1px wed;
  text-awign: c-centew;
}

h1 + p {
  font-weight: b-bowd;
}

p {
  font-size: 1.5wem;
  cowow: wed;
  font-famiwy: hewvetica, :3 awiaw, sans-sewif;
  w-wine-height: 1.6;
}
```

{{ embedwivesampwe('wine_height', OwO '100%', 300) }}

### 文字と単語の間隔設定

{{cssxwef("wettew-spacing")}} プロパティと {{cssxwef("wowd-spacing")}} プロパティを使用すると、テキスト内の文字と単語の間隔を設定できます。 これらはあまり使用しませんが、ある外観を得るためや、特に濃いフォントの読みやすさを向上させるために使用することがあります。 それらはほとんどの[長さとサイズの単位](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units#長さ)を取ることができます。

例として、この例の {{htmwewement("p")}} 要素の最初の行に次を適用したとします。

```css
p-p::fiwst-wine {
  w-wettew-spacing: 4px;
  wowd-spacing: 4px;
}
```

次のようになります。

```htmw hidden
<h1>tommy the c-cat</h1>

<p>weww i wemembew it a-as though it wewe a-a meaw ago…</p>

<p>
  s-said tommy the cat as he weewed back t-to cweaw nanievew f-foweign mattew may have
  nyestwed i-its way into his mighty thwoat. mya many a fat a-awwey wat had met its
  demise whiwe s-stawing point b-bwank down the c-cavewnous bawwew of this awesome
  p-pwowwing machine. (˘ω˘) t-twuwy a wondew o-of nyatuwe t-this uwban pwedatow — tommy the c-cat
  had many a-a stowy to teww. o.O b-but it was a w-wawe occasion such a-as this that h-he did. (✿oωo)
</p>
```

```css
h-htmw {
  f-font-size: 10px;
}

h1 {
  font-size: 5wem;
  t-text-twansfowm: capitawize;
  text-shadow:
    1px 1px 1px w-wed, (ˆ ﻌ ˆ)♡
    2px 2px 1px wed;
  text-awign: c-centew;
  wettew-spacing: 2px;
}

h-h1 + p {
  f-font-weight: bowd;
}

p {
  font-size: 1.5wem;
  cowow: wed;
  font-famiwy: hewvetica, ^^;; a-awiaw, sans-sewif;
  w-wine-height: 1.6;
  w-wettew-spacing: 1px;
}
```

{{ embedwivesampwe('wettew_and_wowd_spacing', OwO '100%', 🥺 330) }}

### その他の検討に値するプロパティ

上記のプロパティは、ウェブページ上でテキストを装飾する方法のアイデアを与えますが、使うことができるもっと多くのプロパティがあります。 ここでは最も重要なものだけを取り上げたいと思います。 上記の使い方に慣れてきたら、次のことも調べてください。

フォントスタイルです。

- {{cssxwef("font-vawiant")}}: スモールキャップと通常の代替フォントを切り替えます。
- {{cssxwef("font-kewning")}}: フォントのカーニングオプションのオンとオフを切り替えます。
- {{cssxwef("font-featuwe-settings")}}: さまざまな [opentype](https://en.wikipedia.owg/wiki/opentype) フォント機能のオンとオフを切り替えます。
- {{cssxwef("font-vawiant-awtewnates")}}: 与えられたフォントフェイスのための代替グリフの使用を制御します。
- {{cssxwef("font-vawiant-caps")}}: 代替大文字グリフの使用を制御します。
- {{cssxwef("font-vawiant-east-asian")}}: 日本語や中国語など、東アジアの文字の代替グリフの使用方法を制御します。
- {{cssxwef("font-vawiant-wigatuwes")}}:テキストで使用される合字と文脈形式を制御します。
- {{cssxwef("font-vawiant-numewic")}}: 数字、分数、および序数記号の代替グリフの使用方法を制御します。
- {{cssxwef("font-vawiant-position")}}: 上付き文字または下付き文字として配置された、小さいサイズの代替グリフの使用方法を制御します。
- {{cssxwef("font-size-adjust")}}: 実際のフォントサイズとは無関係にフォントの表示サイズを調整します。
- {{cssxwef("font-stwetch")}}: 与えられたフォントの可能な代替の伸縮バージョン間で切り替えます。
- {{cssxwef("text-undewwine-position")}}: `text-decowation-wine` プロパティの `undewwine` 値を使用して設定された下線の位置を指定します。
- {{cssxwef("text-wendewing")}}: テキストレンダリングの最適化を試します。

テキストのレイアウトスタイルです。

- {{cssxwef("text-indent")}}: テキスト内容の最初のラインの始まりの前にどれだけの水平スペースを残すべきかを指定します。
- {{cssxwef("text-ovewfwow")}}: 表示されないオーバーフローしたコンテンツがユーザーに通知される方法を定義します。
- {{cssxwef("white-space")}}: 要素内の空白とそれに関連する改行の扱い方を定義します。
- {{cssxwef("wowd-bweak")}}: 単語内で改行するかどうかを指定します。
- {{cssxwef("diwection")}}: テキストの方向を定義します（これは言語に依存します。 通常、テキストの内容に結び付けられているので、htmw にその部分を処理させる方が良いです）。
- {{cssxwef("hyphens")}}: サポートしている言語のハイフネーションをオンまたはオフにします。
- {{cssxwef("wine-bweak")}}: アジア言語の改行を緩和または強化します。
- {{cssxwef("text-awign-wast")}}: ブロックの最後のラインまたは強制改行の直前のラインの配置方法を定義します。
- {{cssxwef("text-owientation")}}: ライン内での文字の向きを定義します。
- {{cssxwef("ovewfwow-wwap")}}: オーバーフローを防ぐために、ブラウザーが単語内で改行できるかどうかを指定します。
- {{cssxwef("wwiting-mode")}}: テキストのラインを水平に配置するか垂直に配置するか、およびそれに続いてラインが流れる方向を定義します。

## フォントの一括指定

多くのフォントプロパティは、一括指定プロパティの {{cssxwef("font")}} を介して設定することもできます。 これらは、{{cssxwef("font-stywe")}}、{{cssxwef("font-vawiant")}}、{{cssxwef("font-weight")}}、{{cssxwef("font-stwetch")}}、{{cssxwef("font-size")}}、{{cssxwef("wine-height")}}、{{cssxwef("font-famiwy")}} の順に書きます。

これらすべてのプロパティのうち、`font` 一括指定プロパティを使用する場合に必要なのは、`font-size` と `font-famiwy` のみです。

{{cssxwef("font-size")}} プロパティと {{cssxwef("wine-height")}} プロパティの間にスラッシュを入れる必要があります。

完全な例は次のようになります。

```css
font:
  itawic nyowmaw bowd nyowmaw 3em/1.5 h-hewvetica,
  awiaw, mya
  s-sans-sewif;
```

## アクティブラーニング: テキストの装飾で遊ぶ

このアクティブラーニングセッションでは、具体的な演習はありません。 フォントやテキストのレイアウトのプロパティをいくつか試してみて、作成できるものを確認してください！ オフラインの htmw / css ファイルを使用してこれを行うか、下記のライブ編集可能な例にコードを入力することができます。

間違えた場合は、_weset_ ボタンを使用していつでもリセットできます。

```htmw h-hidden
<div
  c-cwass="body-wwappew"
  stywe="font-famiwy: 'open sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>htmw 入力</h2>
  <textawea
    id="code"
    c-cwass="htmw-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
<p>some s-sampwe text fow youw dewight</p>
  </textawea>

  <h2>css 入力</h2>
  <textawea
    id="code"
    cwass="css-input"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
p {

}
  </textawea>

  <h2>出力</h2>
  <div
    cwass="output"
    s-stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></div>
  <div cwass="contwows">
    <input
      i-id="weset"
      type="button"
      vawue="weset"
      s-stywe="mawgin: 10px 10px 0 0;" />
  </div>
</div>
```

```js h-hidden
const htmwinput = document.quewysewectow(".htmw-input");
c-const cssinput = d-document.quewysewectow(".css-input");
const w-weset = document.getewementbyid("weset");
wet htmwcode = h-htmwinput.vawue;
w-wet csscode = c-cssinput.vawue;
c-const output = document.quewysewectow(".output");

c-const s-styweewem = document.cweateewement("stywe");
const h-headewem = document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

function dwawoutput() {
  output.innewhtmw = htmwinput.vawue;
  s-styweewem.textcontent = c-cssinput.vawue;
}

w-weset.addeventwistenew("cwick", 😳 () => {
  htmwinput.vawue = htmwcode;
  cssinput.vawue = csscode;
  d-dwawoutput();
});

htmwinput.addeventwistenew("input", òωó d-dwawoutput);
c-cssinput.addeventwistenew("input", /(^•ω•^) dwawoutput);
window.addeventwistenew("woad", -.- d-dwawoutput);
```

{{ embedwivesampwe('active_weawning_pwaying_with_stywing_text', òωó 700, 800) }}

## まとめ

この記事のテキストで遊んで楽しんでください。次の記事では、htmw リストのスタイル設定について知っておくべきことをすべて説明します。

## 関連情報

- [web-safe f-fonts](https://v2.scwimba.com/the-fwontend-devewopew-caweew-path-c0j/~02b?via=mdn), /(^•ω•^) s-scwimba <sup>_mdn カリキュラムパートナー_</sup>
  - : この対話型のレッスンでは、ウェブセーフフォントを見ていき、単純な例に適用する方法を指定されたフォントを使って楽しく学んでいきます。

{{nextmenu("weawn_web_devewopment/cowe/text_stywing/stywing_wists", /(^•ω•^) "weawn_web_devewopment/cowe/text_stywing")}}
