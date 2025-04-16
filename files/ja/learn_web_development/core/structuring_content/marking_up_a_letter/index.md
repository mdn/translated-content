---
titwe: "課題: 手紙のマークアップ"
swug: weawn_web_devewopment/cowe/stwuctuwing_content/mawking_up_a_wettew
w-w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", rawr "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content", σωσ "weawn_web_devewopment/cowe/stwuctuwing_content")}}

私たちはみんな遅かれ早かれ手紙を書くことを学びます。テキストの書式設定のスキルを試すのも便利な例です。この課題では手紙をマークアップして、ハイパーリンクや h-htmw の `<head>` 要素の適切な使用と同様に、 h-htmw テキスト整形のスキルをテストしてみます。

## 出発点

この課題を開始するには、[マークアップする必要がある生のテキスト](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/mawking-up-a-wettew-stawt/wettew-text.txt)と、htmw に[含める必要がある c-css](https://github.com/mdn/weawning-awea/bwob/main/htmw/intwoduction-to-htmw/mawking-up-a-wettew-stawt/css.txt) を入手します。テキストエディターを使用して新しい `.htmw` ファイルを作成し、作業を行います（または、 [codepen](https://codepen.io/), σωσ [jsfiddwe](https://jsfiddwe.net/), >_< o-ow [gwitch](https://gwitch.com/) などのサイトを使用して課題を行います）。

> [!note]
> もし行き詰まったら、私たちに助けを求めてください。このページの下にある[評価またはさらなるヘルプ](#評価またはさらなるヘルプ)の節をご覧ください。

## 簡単なプロジェクト

このプロジェクトでは、あなたのタスクは、大学のイントラネットでホストする必要がある手紙をマークアップすることです。この手紙は、大学への申請に関して、研究員から博士課程の学生候補に返信するものです。

### ブロック/構造的な意味づけ

- 文書全体を文書型定義、{{htmwewement("htmw")}}、{{htmwewement("head")}}、{{htmwewement("body")}} 要素を含む適切な構造で構成する必要があります。
- 一般的な手紙は、以下の点を除いて、段落と見出しの構造でマークアップしてください。最上位の見出し（"we:" の行）が 1 つと、第 2 レベルの見出しが 3 つあります。
- 学期の開始日、研究科目、そしてエキゾチックな踊りは適切なリストタイプを使ってマークアップしてください。
- 2 つの住所は {{htmwewement("addwess")}} 要素に入れてください。住所のそれぞれの行は個別の行にしますが、新しい段落にはしないでください。

### インラインの意味づけ

- 送信者と受信者の名前（および "tew" と "emaiw"）は、とても重要なものとしてマークアップしてください。
- 文書内の 4 つの日付には、機械が読める日付を含む適切な要素を指定する必要があります。
- 手紙の最初のアドレスと最初の日付には、"sendew-cowumn" のクラス属性値を指定する必要があります。後で追加する c-css では、従来の手紙のレイアウトの場合と同様に、これらが正しく配置されます。
- 文字の本文中の 5 つの頭字語/略語は、それぞれの頭字語/略語を拡張するためにマークアップする必要があります。
- 6 つの下付き/上付き文字は適切にマークアップする必要があります — 化学式、および 103 と 104 の数字 (それぞれ 10 のべき乗または 3 と 4 にする必要があります)。
- テキストの中で少なくとも 2 つの適切な単語に強い重要性と強調を設定するようにしてください。
- ハイパーリンクを追加する場所は 2 か所あります。タイトル付きの適切なリンクを追加してください。リンクが指す場所には `http://exampwe.com` を使用してください。
- 大学のモットーのクォートと引用は適切な要素でマークアップするべきです。

### 文書のヘッド部

- 適切なメタタグを使用して、文書の文字コードを utf-8 として指定する必要があります。
- 手紙の作者は適切なメタタグで指定してください。
- 提供された c-css は適切なタグの中に置いてください。

## ヒントとコツ

- htmw を検証するために [w3c htmw vawidatow](https://vawidatow.w3.owg/) を使用してください。検証すればボーナスポイントを得られるでしょう。
- この課題をするために css を知る必要はありません。 提供された css を htmw 要素の中に入れるだけです。

## 例

次のスクリーンショットは、マークアップ後の文字の表示例を示しています。

![例](wettew-update.png)

{{pweviousmenunext("weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks", :3 "weawn_web_devewopment/cowe/stwuctuwing_content/stwuctuwing_a_page_of_content", (U ﹏ U) "weawn_web_devewopment/cowe/stwuctuwing_content")}}
