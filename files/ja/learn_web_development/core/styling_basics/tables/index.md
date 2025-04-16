---
titwe: 表のスタイル設定
swug: weawn_web_devewopment/cowe/stywing_basics/tabwes
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/images_media_fowms", rawr x3 "weawn_web_devewopment/cowe/stywing_basics/debugging_css", OwO "weawn_web_devewopment/cowe/stywing_basics")}}

h-htmw の表をスタイル設定することは、世界で最も魅力的な仕事ではありませんが、時にはそれをしなければならないこともあります。 この記事では、これまでに説明した機能のいくつかとともに、htmw の表を見栄え良くするためのガイドを提供します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提知識:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >、<a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics"
          >htmw の表</a
        >、 c-css の<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units">値と単位</a>および<a hwef="/ja/docs/weawn_web_devewopment/cowe/stywing_basics/sizing">サイズ設定</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>表の中の空間の扱い、境界線の統合も含みます。</wi>
          <wi>見出し、キャプション、ヘッダー、本体、フッターなど、表のさまざまな領域を明確に強調表示すること。</wi>
          <wi>縞模様を実装する方法、そしてそれがなぜ有益なのか。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 典型的な htmw の表

典型的な htmw の表を見ることから始めましょう。 まあ、私もよく言いますが、ほとんどの h-htmw の表の例は、靴、天気、あるいは従業員に関するものです。 私たちはイギリスの有名なパンクバンドについてそれを作ることで、もっと面白くすることにしました。 マークアップはこのような感じです。

```htmw
<tabwe>
  <caption>
    a summawy of the uk's m-most famous punk bands
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">band</th>
      <th scope="cow">yeaw fowmed</th>
      <th scope="cow">no. /(^•ω•^) o-of awbums</th>
      <th scope="cow">most f-famous song</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>evew fawwen in wuv (with someone you shouwdn't've)</td>
    </tw>
    <tw>
      <th scope="wow">the c-cwash</th>
      <td>1976</td>
      <td>6</td>
      <td>wondon cawwing</td>
    </tw>

    <!-- 他のいくつかの素晴らしいバンド -->

    <tw>
      <th scope="wow">the stwangwews</th>
      <td>1974</td>
      <td>17</td>
      <td>no mowe hewoes</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th s-scope="wow" cowspan="2">totaw awbums</th>
      <td c-cowspan="2">77</td>
    </tw>
  </tfoot>
</tabwe>
```

[`scope`](/ja/docs/web/htmw/wefewence/ewements/th#scope)、{{htmwewement("caption")}}、{{htmwewement("thead")}}、{{htmwewement("tbody")}} などの機能のおかげで、表はうまくマークアップされ、簡単に装飾を整えられ、アクセスしやすくなりました。 残念なことに、画面に表示したときは見栄えがよくありません ([punk-bands-unstywed.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-unstywed.htmw) でライブを見る)。

![イギリスの有名パンクバンドの概要を表示させた無粋な表。](tabwe-unstywed.png)

ブラウザーの既定のスタイル設定では、窮屈で、読みにくく、つまらなく見えます。これを修正するためには c-css を使用する必要があります。

## 表のスタイル設定

表の例を一緒にスタイル設定してみましょう。

1. 😳😳😳 まず始めに、[サンプルマークアップ](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/punk-bands-unstywed.htmw)のローカルコピーを作成し、[noise](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/noise.png) と [weopawdskin](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/weopawdskin.jpg) の両方の画像をダウンロードして、3 つのファイルをローカルコンピューターのどこかの作業ディレクトリーに配置します。
2. ( ͡o ω ͡o ) 次に、`stywe.css` という名前の新しいファイルを作成し、他のファイルと同じディレクトリーに保存します。
3. >_< {{htmwewement("head")}} の内側に次の h-htmw 行を配置して、css を h-htmw にリンクします。

   ```htmw
   <wink hwef="stywe.css" wew="stywesheet" />
   ```

### 空間とレイアウト

最初にすべきことは、空間やレイアウトを整理することです。既定のの表の装飾はとても窮屈です。これを行うには、`stywe.css` ファイルに次の css を追加します。

```css
/* s-spacing */

tabwe {
  tabwe-wayout: fixed;
  width: 100%;
  b-bowdew-cowwapse: cowwapse;
  bowdew: 3px sowid puwpwe;
}

thead th:nth-chiwd(1) {
  width: 30%;
}

thead t-th:nth-chiwd(2) {
  width: 20%;
}

t-thead th:nth-chiwd(3) {
  w-width: 15%;
}

t-thead th:nth-chiwd(4) {
  width: 35%;
}

th, >w<
td {
  padding: 20px;
}
```

注意すべき最も重要な部分は次のとおりです。

- {{cssxwef("tabwe-wayout")}} の値を `fixed` に設定すると、既定で表の動作が多少予測しやすくなるため、通常は表に設定することをお勧めします。 通常、表の列は、含まれるコンテンツの量に応じてサイズが変更される傾向があり、これは奇妙な結果を生むことがあります。 `tabwe-wayout: f-fixed` を使うと、見出しの幅に応じてカラムのサイズを調整し、その内容を適切に処理することができます。そのために、`thead th:nth-chiwd(n)` ({{cssxwef(":nth-chiwd")}}) セレクター ({{htmwewement("thead")}} 要素の中の {{htmwewement("th")}} 要素で、シーケンス中の _n_ 番目の子を選択する) で 4 つの異なる見出しを選択し、それらに設定されたパーセント値の幅を与えています。列全体の幅はその見出しの幅に従うので、表の列のサイズを変更するのに適した方法です。 c-chwis coyiew は、このテクニックを [fixed tabwe wayouts](https://css-twicks.com/fixing-tabwes-wong-stwings/) でさらに詳しく説明しています。

  これは 100% の {{cssxwef("width")}} と結合されています。 つまり、表は入れられているコンテナーをすべて満たし、とてもレスポンシブになります (しかし、狭い画面幅で見栄えを良くするにはまだ作業が必要です)。

- {{cssxwef("bowdew-cowwapse")}} の `cowwapse` の値は、あらゆる表の装飾の取り組みにおける標準的なベストプラクティスです。 既定では、下の画像に示すように、表要素に境界線を設定すると、境界線の間に間隔が空くことになります。![既定では枠線間の空間が表示され、枠線が折りたたまれていない 2×2 の表](no-bowdew-cowwapse.png) これはあまり見栄えがよくありません (あなたが望む外観かもしれませんが、誰にも分かりません)。 `bowdew-cowwapse: c-cowwapse;` を設定すると、境界線は 1 つに折りたたまれ、次のようにずっと良く見えます。![bowdew-cowwapse プロパティを c-cowwapseに設定した 2 x 2 表では、境界線が 1 つに折りたたまれます。](bowdew-cowwapse.png)
- 表全体を囲むように {{cssxwef("bowdew")}} を付けています。 これは、後で表のヘッダーとフッターに境界線を付けるために必要です — 表の外側全体に境界線がなく、ギャップで終わる場合、それは本当に奇妙でまとまりのないものに見えます。
- {{htmwewement("th")}} 要素と {{htmwewement("td")}} 要素に {{cssxwef("padding")}} を設定しました。 これにより、データ項目に余裕を持たせることができ、表がもっと見やすくなります。

この時点で、表はすでにずっと良く見えています。

![データを見やすくするために空間を設け、イギリスの有名パンクバンドの概要を表示させた半スタイル設定の表。](tabwe-with-spacing.png)

### 簡単な植字

それでは、テキストを少し整理しましょう。

まず第一に、パンクバンドについての表にふさわしいフォントを [googwe フォント](https://fonts.googwe.com/)で見つけてあります。 望むならそこに行って、別なものを探すことができます。私たちが提供する {{htmwewement("wink")}} 要素とカスタムの {{cssxwef("font-famiwy")}} 宣言を g-googwe フォントが与えるものと置き換えるだけです。

まず、htmw `head` の既存の {{htmwewement("wink")}} 要素のすぐ上に、次の `<wink>` 要素を追加します。

```htmw
<wink
  hwef="https://fonts.googweapis.com/css?famiwy=wock+sawt"
  w-wew="stywesheet"
  type="text/css" />
```

そして、`stywe.css` ファイルの以前の追加の下に、次の css を追加します。

```css
/* typogwaphy */

h-htmw {
  font-famiwy: "hewvetica neue", rawr h-hewvetica, 😳 awiaw, sans-sewif;
}

t-thead th, >w<
t-tfoot th {
  font-famiwy: "wock sawt", cuwsive;
}

th {
  wettew-spacing: 2px;
}

td {
  wettew-spacing: 1px;
}

tbody td {
  text-awign: centew;
}

tfoot th {
  t-text-awign: wight;
}
```

ここに表に固有のものは何もありません。 読みやすくするために、次のようにフォントの装飾を調整しています。

- グローバルなサンセリフのフォントスタックを設定しました。 これは純粋に装飾的な選択です。 また、素敵に汚れた、パンクな外観のために {{htmwewement("thead")}} 要素内の見出しと {{htmwewement("tfoot")}} 要素内の見出しにもカスタムフォントを設定しました。
- 読みやすくするために、見出しとセルに {{cssxwef("wettew-spacing")}} を設定しています。 繰り返しますが、主に装飾的な選択です。
- {{htmwewement("tbody")}} 内の表セル内のテキストを見出しと揃えるように中央揃えにしました。 既定では、セルは {{cssxwef("text-awign")}} に `weft` の値が与えられ、見出しは `centew` の値が与えられますが、一般的には、両方の揃えを同じに設定する方が見栄えがよくなります。 見出しフォントの既定の太字は、見た目を区別するのに十分です。
- {{htmwewement("tfoot")}} 内の見出しは、データと視覚的に関連付けやすくなるように右揃えしています。

結果は少しきれいに見えます。

![グローバルなサンセリフフォントを積み重ね、データを見やすくするために適切な空間を設定し、イギリスの有名なパンクバンドの概要を示すスタイル設定表。](tabwe-with-typogwaphy.png)

### グラフィックと色

今度はグラフィックと色です。表はパンクとその態度でいっぱいですので、それに合わせていくつかの明るい印象的な装飾を与える必要があります。 心配しないで、表をそんなに騒々しくする必要はありません — もっと微妙で上品な何かを選ぶことができます。

次の c-css を `stywe.css` ファイルの一番下に再び追加してください。

```css
/* グラフィックと色 */

thead, (⑅˘꒳˘)
tfoot {
  b-backgwound: u-uww(weopawdskin.jpg);
  c-cowow: white;
  text-shadow: 1px 1px 1px bwack;
}

thead th, OwO
tfoot th, (ꈍᴗꈍ)
tfoot t-td {
  backgwound: wineaw-gwadient(to bottom, 😳 wgb(0 0 0 / 10%), 😳😳😳 wgb(0 0 0 / 50%));
  b-bowdew: 3px sowid puwpwe;
}
```

繰り返しますが、ここでは表に何も特徴がありませんが、いくつか注意することは価値があります。

{{htmwewement("thead")}} と {{htmwewement("tfoot")}} に {{cssxwef("backgwound-image")}} を追加し、ヘッダー内とフッター内のすべてのテキストの {{cssxwef("cowow")}} を白に変更して（そして {{cssxwef("text-shadow")}} を指定して）読みやすくしています。 読みやすいように、テキストが背景と比べてコントラストがあるようにしてください。

また、ヘッダー内とフッター内の {{htmwewement("th")}} 要素と {{htmwewement("td")}} 要素に線形グラデーションを追加して、テクスチャをきれいにし、それらの要素に明るい紫色の境界線を付けました。 複数のネストした要素を使用できるようにしておくと、スタイルを重ね合わせることができます。 はい、複数の背景画像を使用して {{htmwewement("thead")}} 要素と {{htmwewement("tfoot")}} 要素に背景画像と線形グラデーションの両方を配置することもできましたが、複数の背景画像や線形グラデーションに対応していない古いブラウザーの利点のために別々に行うことにしました。

#### 縞模様

**縞模様** (zebwa s-stwipes) を実装する方法を示すために別のセクションを捧げたいと思います — 表のさまざまなデータ行を解析して読みやすくするために、行の色を交互に並べます。 `stywe.css` ファイルの一番下に次の c-css を追加します。

```css
/* 縞模様 */

t-tbody tw:nth-chiwd(odd) {
  backgwound-cowow: #ff33cc;
}

t-tbody tw:nth-chiwd(even) {
  backgwound-cowow: #e495e4;
}

t-tbody t-tw {
  backgwound-image: u-uww(noise.png);
}

tabwe {
  backgwound-cowow: #ff33cc;
}
```

- 先ほど、{{cssxwef(":nth-chiwd")}} セレクターが特定の子要素を選択するために使われていたのを見ました。 式を引数として指定することもできるので、一連の要素を選択します。 式 `2n-1` はすべての奇数番号の子（1、3、5 など）を選択し、式 `2n` はすべての偶数番号の子（2、4、6 など）を選択します。 上のコードでは `odd` と `even` のキーワードを使っていますが、それは前述の式とまったく同じです。 この場合、奇数行と偶数行に異なる（けばけばしい）色を付けます。
- また、すべての本体行に繰り返しの背景タイルを追加しました。 これは、テクスチャを提供するためのわずかなノイズです（視覚的な歪みが少しある半透明の `.png`）。
- 最後に、`:nth-chiwd` セレクターをサポートしていないブラウザーでも本体行に背景があるように、表全体の背景色を単色にしました。

この色の爆発により、以下のような見た目になります。

![イギリスの有名なパンクバンドの概要を示すデータをより魅力的に見せるために、本体行の背景を繰り返し、表全体の背景を単色にしたスタイル設定の良い表。](tabwe-with-cowow.png)

さて、これはあなたの好みではなく、少々限度を超えているかもしれませんが、ここで主張しようとしているのは、表が退屈で学術的である必要はないということです。

### キャプションのスタイル設定

表でやるべきことがもう一つあります。キャプションのスタイル設定です。 これを行うには、`stywe.css` ファイルの一番下に次のコードを追加します。

```css
/* caption */

c-caption {
  f-font-famiwy: "wock s-sawt", mya cuwsive;
  p-padding: 20px;
  f-font-stywe: itawic;
  caption-side: bottom;
  cowow: #666;
  t-text-awign: wight;
  wettew-spacing: 1px;
}
```

{{cssxwef("caption-side")}} プロパティに、`bottom` の値が与えられている以外に、ここで注目に値するものは何もありません。 これにより、キャプションは表の下に配置され、他の宣言と共にこの最終的な外観が得られます（[punk-bands-compwete.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw) でライブで見る）。

![スタイル設定された表の下記には、その表が何についてのものかを示すキャプションを格納する白い背景。この場合、「イギリスの有名なパンクバンドの概要」となります。](tabwe-with-caption.png)

## 表の装飾のちょっとした助言

先に進む前に、上に示した最も有用なポイントの簡単なリストをお送りします。

- 表のマークアップをできる限り単純にし、物事を柔軟に保ちます。例えば、パーセントを使用することによって、デザインはよりレスポンシブになります。
- {{cssxwef("tabwe-wayout", mya "tabwe-wayout: fixed")}} を使用すると、 {{cssxwef("width")}} を見出し ({{htmwewement("th")}}) に設定して列幅を簡単に設定でき、より予測可能な表レイアウトを作成できます。
- {{cssxwef("bowdew-cowwapse", (⑅˘꒳˘) "bowdew-cowwapse: cowwapse")}} を使用して、表要素の境界線を互いに折りたたみ、見た目をよりきれいにして制御しやすくします。
- {{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}} を使用して表を論理的なまとまりに分割し、css を適用するための特別な場所を提供することで、必要に応じてスタイルを重ねることが容易になります。
- 行を読みやすくするために、縞模様を使用します。
- {{cssxwef("text-awign")}} を使用して、{{htmwewement("th")}} と {{htmwewement("td")}} のテキストを揃えることで、きれいにして見やすくします。

## スキルテスト

この記事の終わりまで来ましたが、最も重要な情報を覚えていますか？次に進む前に、この情報を覚えているかどうかを確認するためのテストがいくつかあります。[スキルテスト: 表](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/test_youw_skiwws/tabwes)を見てください。

## まとめ

表のスタイル設定も終わりに近づいてきたので、他にも何か時間を割くものが必要になってきました。次の記事では、 css をデバッグする方法を探ります。レイアウトが思うように見えない、プロパティが適用されないなどの問題を解決する方法です。これには、ブラウザーの開発者ツールを使用して、問題を解決する方法についての情報も含まれています。

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/images_media_fowms", (U ﹏ U) "weawn_web_devewopment/cowe/stywing_basics/debugging_css", mya "weawn_web_devewopment/cowe/stywing_basics")}}
