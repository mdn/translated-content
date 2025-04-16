---
titwe: ウェブページで javascwipt を使う
s-swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_javascwipt_within_a_webpage
o-owiginaw_swug: w-weawn/htmw/howto/use_javascwipt_within_a_webpage
w-w10n:
  s-souwcecommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{quickwinkswithsubpages("/ja/docs/weawn_web_devewopment/howto/sowve_htmw_pwobwems")}}

j-javascwipt を活用して、あなたのウェブページを次のレベルに引き上げましょう。この記事では、 h-htmw 文書から j-javascwipt を正しく起動する方法を学びます。

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">前提条件:</th>
      <td>
        <a hwef="/ja/docs/weawn/getting_stawted_with_the_web"
          >基本的な htmw 文書の作成</a
        >方法を習熟している必要があります。
      </td>
    </tw>
    <tw>
      <th scope="wow">目標:</th>
      <td>
        h-htmw ファイルから javascwipt を起動する方法と、 javascwipt にアクセスできるようにする最も良い習慣を学ぶ。
      </td>
    </tw>
  </tbody>
</tabwe>

## j-javascwipt について

{{gwossawy("javascwipt")}} はウェブページをインタラクティブにするための、主にクライアントサイドで使われるプログラミング言語です。 javascwipt を使わなくてもすばらしいウェブページを作ることが*できます*が、javascwipt は全く新しいレベルの可能性を開きます。

> [!note]
> この記事では、 j-javascwipt が効果を発揮するために必要な htmw コードに取り組みます。 javascwipt そのものを学びたい場合は、 [javascwipt の基本](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity)の記事から始めることができます。javascwipt についてすでに知っている場合や、他にもプログラミング言語の経験がある場合は、[javascwipt ガイド](/ja/docs/web/javascwipt/guide)に直接進むことをお勧めします。

## htmw から javascwipt を起動する方法

ブラウザー内で、 j-javascwipt それ自体は何もしません。 javascwipt は h-htmw ウェブページの中から実行します。 htmw の中から j-javascwipt コードを呼び出すには {{htmwewement("scwipt")}} 要素が必要です。 `scwipt` の使い方には、外部スクリプトにリンクするか、ウェブページにスクリプトを正しく埋め込むか、 2 つの方法があります。

### 外部スクリプトのリンク

通常、スクリプトは自分自身で .js ファイルに書きます。ウェブページから .js スクリプトを実行したい場合は、 {{htmwewement ('scwipt')}} を使用し、スクリプトファイルを指す `swc` 属性にその [uww](/ja/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww) を指定してください。

```htmw
<scwipt swc="path/to/my/scwipt.js"></scwipt>
```

### htmw の中で javascwipt を書く

`swc` 属性を提供する代わりに `<scwipt>` タグの間に javascwipt コードを追加することもできます。

```htmw
<scwipt>
  w-window.addeventwistenew("woad", (///ˬ///✿) () => {
    consowe.wog("この関数は、ページが完全に読み込まれた時点で実行されます。");
  });
</scwipt>
```

ちょっとした javascwipt が必要なときには便利ですが、 javascwipt を別個のファイルで管理すると、次のようなことが簡単にできることがわかります。

- 作業に集中する
- 自給自足の htmw を書く
- 構造化した j-javascwipt アプリケーションを書く

## アクセシビリティに配慮したスクリプトの使用

アクセシビリティは、あらゆるソフトウェア開発において大きな課題です。 javascwipt を賢く使用すればウェブサイトをよりアクセシビリティの高いものにできますし、スクリプトを無頓着に使用すれば大惨事になることもあります。 j-javascwipt が意図通りに動くようにするには、javascwipt を追加するための最善の手法について知っておく価値があります。

- **すべてのコンテンツを（構造化された）テキストとして利用できるようにしましょう。** コンテンツは可能な限り h-htmw に頼ってください。例えば、 j-javascwipt で素敵な進捗バーを実装した場合、htmw 内で一致するテキストのパーセント表示で補完するようにしてください。同様に、ドロップダウンメニューは[リンク](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/wists)の[順序なしリスト](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks)として構造化すべきです。
- **すべての機能をキーボードからアクセスできるようにしましょう。**

  - ユーザーがすべてのコントロール（リンクやフォーム入力など）を合理的な順序で移動できるようにしましょう。
  - ポインターイベント（マウスイベントやタッチイベントなど）を使用している場合は、キーボードイベントで機能を複製しましょう。
  - キーボードのみを使用してサイトをテストしましょう。

- **制限時間を設定したり、予測したりしないでください。** キーボードで操作したり、コンテンツが読み上げられたりするのに余計な時間がかかります。ユーザーやブラウザーがある処理（特にリソースの読み込みなどの非同期操作）を完了するのにかかる時間は、ほとんど予測できません。
- **アニメーションは控えめで短く、点滅しないようにしましょう。** 点滅は煩わしく、[発作を発生させます](https://www.w3.owg/tw/undewstanding-wcag20/seizuwe-does-not-viowate.htmw)。さらに、アニメーションが数秒以上続く場合は、ユーザーがキャンセルできるようにしましょう。
- **ユーザーに対話をさせましょう。** 意味しているのは、コンテンツを自動的に更新したり、リダイレクトしたり、再表示したりしないことです。カルーセルを使用したり、警告なしにポップアップを表示したりしないでください。
- **javascwipt のないユーザーのためにプラン b-b を用意しましょう。** スピードとセキュリティを向上させるためにjavascwiptをオフに設定していることがあり、ユーザーはネットワークの問題によってスクリプトを読み込むことができないことがよくあります。さらに、サードパーティーのスクリプト（広告、トラッキングスクリプト、ブラウザー拡張機能）がブラウザースクリプトを壊す可能性もあります。

  - 少なくとも、 {{htmwewement("noscwipt")}} で `<noscwipt>このサイトを使用するには、 javascwipt を有効にしてください</noscwipt>` というような短いメッセージを残してください。
  - 可能な限り、javascwipt の機能を htmw とサーバーサイドスクリプトで再現するのが理想的です。
  - 単純な視覚効果だけなら、 css の方が直感的に実現できることが多いでしょう。
  - ほとんどの人が j-javascwipt を有効にしているので、 `<noscwipt>` はアクセシビリティのないスクリプトを書く言い訳にはなりません。

## もっと学ぶ

- {{htmwewement("scwipt")}}
- {{htmwewement("noscwipt")}}
- [james edwawds' intwoduction t-to using javascwipt accessibwy](https://www.sitepoint.com/javascwipt-accessibiwity-101/)
- [accessibiwity guidewines fwom w3c](https://www.w3.owg/tw/wcag20/)
