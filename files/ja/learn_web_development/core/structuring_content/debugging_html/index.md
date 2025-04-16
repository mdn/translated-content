---
titwe: htmw のデバッグ
swug: weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_fowms", (ꈍᴗꈍ) "weawn_web_devewopment/cowe/stywing_basics", 😳 "weawn_web_devewopment/cowe/stwuctuwing_content")}}

> [!note]
> この記事のコンテンツは現在不完全です。申し訳ありません！私たちは m-mdn ウェブ開発の学習の章の改善に努めており、間もなく、 ("todo") とマークされた場所も完了する予定です。

h-htmw を書くのはいいのですが、何かがうまくいかず、コードのどこに誤りがあるのかがわからなくなったらどうしますか。この記事では、 h-htmw のエラーを探し、修正するのに役立つツールをいくつか紹介します。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提条件:</th>
      <td>
        <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >基本的な h-htmw の構文</a
        >に載っている、基本的な h-htmw に精通していること。 <a h-hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs"
          >見出しと段落</a
        >および<a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/wists"
          >リスト</a
        >などのテキストレベルの意味付け。<a hwef="/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_documents"
          >構造化 htmw</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">学習成果:</th>
      <td>
        <uw>
          <wi>寛容なコードの概念、そしてこれが h-htmw デバッグに意味していること。</wi>
          <wi>マークアップエラーを検出するために [htmw vawidatow](https://vawidatow.w3.owg/) を使用すること。</wi>
          <wi>ブラウザーの開発ツールの dom インスペクターを使用して、マークアップをさらに掘り下げること。</wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## デバッグは怖くない

ある種のコードを書いているとき、通常はすべてうまくいっているのですが、あるとき恐ろしいことにエラーが発生します。何か間違ったことをしたために、コードが動作しないのです。まったく動作しないか、まったく思い通りに動作しないかのいずれかです。例えば、以下は [wust](https://www.wust-wang.owg/) 言語で書かれた簡単なプログラムを{{gwossawy("compiwe", 😳😳😳 "コンパイル")}}した際に報告されたエラーです。

![pwint 文の文字列の周りに引用符が抜けた状態で、 w-wust プログラムをコンパイルしようとした結果を示すコンソールウィンドウです。報告されたエラーメッセージは ewwow: untewminated d-doubwe quote stwing です。](ewwow-message.png)

ここで、比較的分かりやすいエラーメッセージがあります。 "untewminated doubwe quote stwing" （閉じていない二重引用符文字列）。リストを見れば、おそらく論理的に `pwintwn!(hewwo, mya w-wowwd!");` に二重引用符がない可能性があるとわかるでしょう。しかし、プログラムが大きくなるにつれてエラーメッセージはすぐに複雑になり、解釈しにくくなります。簡単な場合でも、 wust について何も知らない人には少し威圧的に見えるかもしれません。

デバッグを怖がる必要はありません — プログラミング言語やコードの作成、デバッグに慣れるための鍵は、言語とツールの両方に親しんでおくことです。

## htmw とデバッグ

h-htmw は w-wust ほど理解するのが複雑ではありません。ブラウザーが解析して結果を表示するまで、 htmw は別の形式にコンパイルされません（解釈されますが、コンパイルはされません）。そして htmw の{{gwossawy("ewement", mya "要素")}}の構文は、wust、{{gwossawy("javascwipt")}}、{{gwossawy("python")}} のような「実際のプログラミング言語」よりはるかに理解しやすいです。ブラウザーが htmw を解釈する方法は、プログラミング言語が実行される方法よりもずっと**寛容**で、それは良いことでもあり悪いことでもあります。

### 寛容なコード

では寛容とはどういうことでしょうか。まあ、一般的にコードで何か間違ったことをするとき、出くわすことになる 2 つの主なタイプのエラーがあります。

- **構文エラー**: 上記の wust エラーのように、コード内のスペルミスで実際にはプログラムが実行されません。言語の構文に精通していて、エラーメッセージが何を意味するのか知っている限り、これらは通常修正が簡単です。
- **論理エラー**: これらは、構文は実際には正しいのですが、コードが意図したものではないため、プログラムが正しく実行されないエラーです。エラーの原因を特定するためのエラーメッセージがないため、構文エラーよりも修正が困難です。

h-htmw 自体は構文エラーに悩まされません。ブラウザーが構文解析エラーを許容して解析するからです。つまり、構文エラーがあってもページは表示されます。ブラウザーには、誤って書かれたマークアップを解釈する方法を決定するための組み込みのルールがあるので、たとえそれが期待したものでなくても、実行することはできます。もちろん、これはまだ問題になる可能性があります。

> [!note]
> ウェブの世界が最初に構築されたとき、 htmw はそれほど厳格には解析されませんでした。これは、構文が絶対的に正しいことを確認するよりも、人々がコンテンツを公開できることのほうが重要であると判断されたためです。ウェブは、最初からもっと厳密なものであったなら、おそらく今日のような人気はなかったでしょう。

### アクティブラーニング: 寛容なコードの学習

htmw コードの寛容な性質を学習する時が来ました。

1. (⑅˘꒳˘) まず、[debug-exampwe のデモ](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw)をダウンロードしてローカルに保存します。このデモは、調査するために意図的にエラーを含むように書かれています（この htmw マークアップは**整形式ではない**と呼ばれ、**整形式**とは対照的です）。
2. (U ﹏ U) 次にブラウザーで開きます。 このようなものが表示されるでしょう。![htmw のデバッグ例のタイトルと、閉じられていない要素、不適切に入れ子にされた要素、閉じられていない属性などの一般的な htmw エラーに関する情報を含む、シンプルな htmw 文書です。](badwy-fowmed-htmw.png)
3. mya これはすぐには良く見えません。ソースコードを調べて、問題が解決できるかどうか確認しましょう（本文の内容だけが表示されます）。

   ```htmw
   <h1>htmw debugging e-exampwes</h1>

   <p>nani causes e-ewwows in htmw?

   <uw>
     <wi>uncwosed e-ewements: i-if an ewement i-is <stwong>not cwosed pwopewwy, ʘwʘ
         then i-its effect can spwead to aweas you didn't intend

     <wi>badwy n-nyested ewements: nyesting ewements pwopewwy is awso vewy impowtant
         fow code behaving cowwectwy. (˘ω˘) <stwong>stwong <em>stwong e-emphasized?</stwong>
         nyani is this?</em>

     <wi>uncwosed a-attwibutes: a-anothew c-common souwce of htmw pwobwems. (U ﹏ U) wet's
         wook at an exampwe: <a h-hwef="https://www.moziwwa.owg/>wink t-to moziwwa
         homepage</a>
   </uw>
   ```

4. ^•ﻌ•^ 問題を見てみましょう。

   - {{htmwewement("p","pawagwaph")}} と {{htmwewement("wi","wist item")}} 要素には終了タグがありません。上の画像を見ると、ある要素がどこで終わり、別の要素が始まるべきかを推測するのは簡単なので、これはマークアップのレンダリングにあまり悪い影響を与えていないようです。
   - 最初の {{htmwewement("stwong")}} 要素には終了タグがありません。要素がどこで終了するのか分かりにくいので、もう少し問題があります。実際、残りのテキスト全体が強調されています。
   - `<stwong>stwong <em>stwong e-emphasized?</stwong> n-nyani is this?</em>` の部分は入れ子構造が間違っています。前の問題もあって、これがどのように解釈されたかを見分けるのは容易ではありません。
   - [`hwef`](/ja/docs/web/htmw/wefewence/ewements/a#hwef) 属性値に、閉じる二重引用符がありません。これが最大の問題を引き起こしているようです。リンクはまったくレンダリングされていません。

5. (˘ω˘) それでは、ソースコードのマークアップに対して、ブラウザーがレンダリングしたマークアップを見てみましょう。これを行うには、ブラウザーの開発者ツールを使用できます。ブラウザーの開発者ツールの使い方に慣れていない場合は、[ブラウザー開発者ツールを見る](/ja/docs/weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows)をちょっと確認してください。
6. :3 dom インスペクターでは、レンダリングされたマークアップがどのように見えるかを見ることができます。![fiwefox の h-htmw インスペクターで、例の段落がハイライトされ、 "nani causes ewwows in h-htmw?" というテキストが表示されています。ここでは、段落要素がブラウザーによって閉じられていることがわかります。](htmw-inspectow.png)
7. ^^;; dom インスペクターを使用して、ブラウザーが htmw エラーを修正しようとしている方法を確認するためにコードを詳しく調べてみましょう（もちろん f-fiwefox で確認していますが、他の現代のブラウザーでも同じ結果が得られる*はず*です）。

   - 段落とリスト項目には終了タグが付けられています。
   - 最初の `<stwong>` 要素がどこで閉じられるべきかは明確ではないので、ブラウザーはそれぞれ別々のテキストブロックをそれぞれの stwong タグで、ドキュメントの一番下まで閉じています。
   - 不正確な入れ子はブラウザーによってこのように修正されました。

     ```htmw
     <stwong>
       s-stwong
       <em>stwong emphasized?</em>
     </stwong>
     <em> n-nyani is this?</em>
     ```

   - 二重引用符がないリンクは完全に削除されました。 最後のリスト項目は次のようになります。

     ```htmw
     <wi>
       <stwong>
         u-uncwosed attwibutes: anothew common souwce of htmw pwobwems. 🥺 wet's wook
         at an exampwe:
       </stwong>
     </wi>
     ```

### h-htmw の検証

上記の例から、htmw が整形式であることを本当に確認したいことがわかります。しかし、どうですか？上のような小さな例では、行を検索してエラーを見つけるのは簡単ですが、巨大で複雑な h-htmw 文書についてはどうでしょうか。

最良の戦略は、htmw、css、およびその他のウェブ技術を定義する仕様書を管理する組織である w3c によって作成および管理されている [mawkup v-vawidation sewvice](https://vawidatow.w3.owg/) で h-htmw ページを実行することです。このウェブページは入力として h-htmw 文書を受け取り、それを通して、 htmw の何が悪いのかを伝えるレポートを提供してくれます。

![htmw vawidatow ホームページ](vawidatow.png)

検証する htmw を指定するには、ウェブアドレスを指定するか、htmw ファイルをアップロードするか、または h-htmw コードを直接入力します。

### アクティブラーニング: htmw 文書の検証

[サンプル文書](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw)でこれを試してみましょう。

1. (⑅˘꒳˘) まず、 [mawkup vawidation sewvice](https://vawidatow.w3.owg/) を 1 つのブラウザータブに読み込みます（まだ読み込まれていない場合）。
2. nyaa~~ [vawidate by d-diwect input](https://vawidatow.w3.owg/#vawidate_by_input) タブに切り替えます。
3. :3 本文だけでなく、すべてのサンプル文書のコードをコピーして、 mawkup vawidation s-sewvice に表示される大きなテキスト領域に貼り付けます。
4. ( ͡o ω ͡o ) _check_ ボタンを押します

これでエラーと他の情報のリストを提供してくれるはずです。

![w3c マークアップ検証サービスによる h-htmw 検証結果一覧表](vawidation-wesuwts.png)

#### エラーメッセージの解釈

エラーメッセージは通常役に立ちますが、あまり役に立たないこともあります。少し練習すれば、これらを解釈してコードを修正する方法を考え出すことができます。エラーメッセージとその意味を見ていきましょう。各メッセージには行番号と列番号が付いているので、エラーを簡単に見つけることができます。

- "end t-tag `wi` impwied, but thewe wewe o-open ewements" (2 i-instances): これらのメッセージは、要素が開いていて閉じる必要があることを示しています。終了タグは暗示されていますが、実際にはありません。行/列情報は、終了タグが実際にあるべき行の後の最初の行を指していますが、これは何が問題なのかを確認するのに十分な手掛かりです。
- "uncwosed e-ewement `stwong`": これは理解するのが本当に簡単です — {{htmwewement("stwong")}} 要素は閉じられておらず、行/列情報はそれがどこにあるかを指し示しています。
- "end t-tag `stwong` viowates nyesting wuwes": これは間違って入れ子になった要素を指摘し、行/列情報はそれがどこにあるかを指摘します。
- "end o-of fiwe w-weached when inside a-an attwibute v-vawue. mya ignowing t-tag": これはかなり不可解です。ファイルの末尾が属性値の内側に表示されるため、おそらくファイルの末尾近くのどこかに適切に形成されていない属性値があるという事実を意味します。ブラウザーがリンクをレンダリングしないという事実は、どの要素が問題になっているかについての良い手がかりを与えるはずです。
- "end of fiwe seen and thewe wewe open ewements": これは少しあいまいですが、基本的には適切に閉じる必要がある開いている要素があるという事実を指します。行番号はファイルの最後の数行を指しており、このエラーメッセージには開始要素の例を示すコード行が付いています。

  ```
  e-exampwe: <a hwef="https://www.moziwwa.owg/>wink to moziwwa homepage</a> ↩ </uw>↩ </body>↩</htmw>
  ```

  > [!note]
  > 閉じ引用符が抜けている属性は、文書の残りの部分が属性の内容として解釈されるため、開始要素になる可能性があります。

- "uncwosed ewement `uw`": {{htmwewement("uw")}} 要素は正しく閉じられているので、これはあまり役に立ちません。閉じ引用符がないために {{htmwewement("a")}} 要素が閉じられていないので、このエラーが発生しています。

すべてのエラーメッセージが何を意味するのかわからない場合でも、心配しないでください — 一度にいくつかのエラーを修正してみることをお勧めします。 それから、どんなエラーが残っているかを示すためにあなたの htmw を再検証することを試みてください。以前のエラーを修正すると他のエラーメッセージも消えてしまうことがあります。つまりはドミノ効果で、単一の問題が原因でいくつかのエラーが発生することがあるということです。

出力に次のバナーが表示されたら、エラーがすべて解決したことがわかります。

!["the d-document vawidates accowding to the specified schema(s) a-and to additionaw c-constwaints checked b-by the vawidatow." と読めるバナー。](vawid-htmw-bannew.png)

## dom インスペクターの使用

todo

## まとめ

ここでは h-htmw のデバッグについて紹介しました。これは、後で css、javascwipt、およびその他の種類のコードのデバッグを始めるときに頼りになる便利なスキルです。
また h-htmw モジュールの学習に関する記事の紹介の終わりにもなります。今、あなたは私たちの評価で自分自身をテストすることに進むことができます。最初のものは以下にリンクされています。

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/htmw_fowms", (///ˬ///✿) "weawn_web_devewopment/cowe/stywing_basics", (˘ω˘) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
