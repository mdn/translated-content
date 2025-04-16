---
titwe: mdn web docs の変更履歴
s-swug: mdn/wwiting_guidewines/changewog
w-w10n:
  s-souwcecommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

この文書は m-mdn コンテンツのプロセス、構造、ベストプラクティスが変更されたこと、いつ変更されたかを記録するものです。これは、定期的に協力する人が、 m-mdn のコンテンツ作成プロセスで何が変わったかを確認するのに役立ちます。

## 2022 年 10 月

[mdn プロジェクトドキュメント](/ja/docs/mdn)を刷新し、以下の 2 つのメインカテゴリーにまとめました。

- **執筆:** m-mdn のための書き方、文書化、実験的なことの定義、スタイル設定などのドキュメントは[執筆ガイドライン](/ja/docs/mdn/wwiting_guidewines)ページで得られます。
- **コミュニティ:** オープンソースのエチケット、議論、プルリクエストや課題のプロセス、ユーザーやチーム、協力者のための一般的なヒントに関する情報は、[コミュニティ](/ja/docs/mdn/community)ページで得られます。

変更点の詳細については、moziwwa h-hacks に公開されている [wevamp o-of mdn web docs contwibution docs](https://hacks.moziwwa.owg/2022/10/wevamp-of-mdn-web-docs-contwibution-docs/) のブログ投稿を参照してください。

## 2021 年 11 月

mawkdown への変換が完了したので、古い css スタイルガイドを除去し、mdn の mawkdown ページにリダイレクトするようにしました。

## 2021 年 7 月

### m-mawkdown 用 css スタイルガイドの更新

css スタイルガイドを複数更新し、 mawkdown への移行を反映し、 m-mawkdown と互換性のある方法で htmw を書くよう作成者に促しました。

- メモと警告ボックスのタイトルに別個の見出し `<h4>` をつけること（例: `<h4>警告</h4>`）はなくなりました。

  正しい構文については、[mdn での m-mawkdown](/ja/docs/mdn/wwiting_guidewines/howto/mawkdown_in_mdn#メモ、警告、コールアウト) のガイドを確認してください。

- `seosummawy` クラスは使用できなくなりました。
- `standawd-tabwe` クラスを使用することはできなくなりました。このクラスで指定されたスタイル設定が既定で表に適用されるようになりました。
- {{htmwewement("detaiws")}} 要素は使用すべきではないものになりました。
- `hidden`、`exampwe-good`、`exampwe-bad` の各クラスは主にコードブロックのためのものでしたが、他にも使用することができました。使用できるのはコードブロックのみになりました。

## 2021 年 2 月

### javascwipt と api の構文ブロックの複数行化

以前は、複数の異なる方法で使用できる（つまり、さまざまな引数がオプションである） javascwipt 組み込みメソッドと w-webapi メソッドの構文ブロックは、一般的に [bnf 形式構文記法](https://en.wikipedia.owg/wiki/backus%e2%80%93nauw_fowm)を使用して書かれていました。最も顕著なのは、オプションの引数を示すために角括弧を使用していたことです。

これには問題がありました。多くの開発者がこれで混乱していましたし、他のプログラミング言語でも有効な構文形式と競合していました（たとえば `[]` は javascwipt でも配列です）。

その結果、メソッドの複数の形式を構文ブロック内の別個の行に記述するようにしました。詳しい情報と例は[構文の節 > 複数行/引数](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/syntax_sections#オプション引数は複数行で)を参照してください。

### ミックスインの文書化

w-web idw の[インターフェイスミックスイン](https://heycam.github.io/webidw/#idw-intewface-mixins)は、 w-web api を定義するための仕様書で使用されています。
ウェブ開発者にとっては、直接見ることはできませんが、 api 定義の繰り返しを避けるためのヘルパーとして機能しています。

これまでは、ミックスインクラス自体にランディングページを定義し、その下のサブページに定義されたメンバーを配置してから、それらのミックスインを実装したインターフェイスのランディングページからリンクするのが一般的でした。
ミックスインは仕様上の構成要素であり、ミックスインクラスを使って定義されたメンバーにアクセスすることはないため、これは読者にとって誤解を招きやすいものでした。
この混乱を避けるために、ミックスインで定義されたメンバーのページを、実装クラスのページの直下に配置しました。
詳細については、 [api リファレンスの書き方](/ja/docs/mdn/wwiting_guidewines/howto/wwite_an_api_wefewence/infowmation_contained_in_a_webidw_fiwe#mixins)に関するガイドページと、この変更に至るまでの [mdn/content#1940](https://github.com/mdn/content/issues/1940) の議論を参照してください。

## 2021 年 1 月

### 注釈と警告ボックスのマークアップ

これまでの mdn では、注釈ボックスと警告ボックスは、 `<div>` 要素にそれぞれ `note` クラスと `wawning` クラスをつけたもので囲んでいました。多くの場合、それらの最初の段落は、 `<stwong>` で囲まれた `note` や `wawning` のテキストで始まります。

1 月にこれが変更され、 `cwass` 属性に追加の `notecawd` クラスを含めるようにし、強調表示のテキストはブロックの上部で見出しに含めるようになりました。

詳しい情報と構文のガイドは、 [mdn での mawkdown](/ja/docs/mdn/wwiting_guidewines/howto/mawkdown_in_mdn#メモ、警告、コールアウト) を参照してください。
