---
title: 基礎的なレイアウトの理解
slug: Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

このモジュールを乗り越えてきたならば、今日 CSS レイアウトを行うために知っておくべきことや、より古い CSS を使って作業するために必要なことの基本についてはすでに説明しているはずです。 このタスクでは、さまざまなテクニックを使用して簡単なウェブページレイアウトを作成することによって、あなたの知識の一部をテストします。

| 前提知識: | この評価を試みる前に、このモジュールのすべての記事を読んでおくべきです。     |
| --------- | ---------------------------------------------------------------------------- |
| 学習目標: | このモジュールで説明してきた基本的なレイアウトスキルの理解をテストすること。 |

## プロジェクトの概要

生の HTML、基本的な CSS、そして画像が提供されています — これで、次の画像にそっくりなデザインのレイアウトを作成する必要があります。

![](layout-task-complete.png)

### 基本設定

HTML、CSS、および 6 枚の画像を[ここからダウンロード](https://github.com/mdn/learning-area/tree/master/css/css-layout/fundamental-layout-comprehension)できます。

HTML ドキュメントとスタイルシートをコンピュータ上のディレクトリーに保存し、画像を `images` という名前のフォルダに追加します。 ブラウザーで `index.html` ファイルを開くと、次の画像のような基本的なスタイルは設定されているがレイアウトが設定されていないページが表示されます。

この出発点には、通常フローでブラウザーに表示されるレイアウトのすべての内容が含まれています。

![](layout-task-start.png)

### あなたのタスク

あなたは今レイアウトを実装する必要があります。 達成する必要があるタスクは次のとおりです。

1. ナビゲーション項目を、項目間に等間隔のスペースを置いて、1 行に並べて表示します。
2. ナビゲーションバーはコンテンツと一緒にスクロールし、ビューポートの上部に到達するとそこに固定されるべきです。
3. 記事の中にある画像は、それを囲むテキストを持つべきです。
4. {{htmlelement("article")}} 要素と {{htmlelement("aside")}} 要素は、2 列のレイアウトとして表示するべきです。 ブラウザーウィンドウが小さくなると列が狭くなるように、列は柔軟なサイズにするべきです。
5. 写真は、画像間に 1 ピクセルの間隔を空けて 2 列のグリッドとして表示するべきです。

このレイアウトを実現するために HTML を編集する必要はなく、使用するべきテクニックは次のとおりです。

- 位置指定
- フロート
- フレックスボックス
- CSS グリッドレイアウト

これらのタスクのいくつかを達成することができるいくつかの方法があり、物事を行うための唯一の正しい方法も間違った方法も、多くの場合ありません。 いくつかの異なる方法を試して、どれが最もうまくいくかを確かめてください。 実験しながらメモを取ってください。 この演習のディスカッションスレッドまたは [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで、自分のアプローチについて常に議論することができます。

## 評価

組織的コースの一環としてこの評価に従っている場合は、採点のために作品を教師や指導者に渡すことができるはずです。 自己学習をしている場合は、[この演習についてのディスカッションスレッド](https://discourse.mozilla.org/t/fundamental-layout-comprehension-assessment/29982)や [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、かなり簡単に採点の手引きを得ることができます。 まず演習を試してみてください — 不正行為によって得られるものは何もありません！

{{PreviousMenu("Learn/CSS/CSS_layout/Supporting_Older_Browsers", "Learn/CSS/CSS_layout")}}

## このモジュール内の文書

- [CSS レイアウト入門](/ja/docs/Learn/CSS/CSS_layout/Introduction)
- [通常フロー](/ja/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [フレックスボックス](/ja/docs/Learn/CSS/CSS_layout/Flexbox)
- [グリッド](/ja/docs/Learn/CSS/CSS_layout/Grids)
- [フロート](/ja/docs/Learn/CSS/CSS_layout/Floats)
- [位置指定](/ja/docs/Learn/CSS/CSS_layout/Positioning)
- [段組みレイアウト](/ja/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [レスポンシブデザイン](/ja/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [メディアクエリーの初心者向けガイド](/ja/docs/Learn/CSS/CSS_layout/Media_queries)
- [過去のレイアウト方法](/ja/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [古いブラウザーのサポート](/ja/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [基礎的なレイアウトの理解](/ja/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
