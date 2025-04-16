---
titwe: "課題: コミュニティスクールのホームページの組版"
swug: weawn_web_devewopment/cowe/text_stywing/typesetting_a_homepage
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/web_fonts", σωσ "weawn_web_devewopment/cowe/css_wayout", σωσ "weawn_web_devewopment/cowe/text_stywing")}}

この評価では、コミュニティスクールのホームページ用にテキストを装飾することで、このモジュール全体でカバーしてきたすべてのテキスト装飾テクニックについての理解をテストします。 その過程は楽しくなるかもしれません。

## 出発点

この評価を開始するには、次のことが必要です。

- 練習用の [htmw](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/typesetting-a-homepage-stawt/index.htmw) ファイルと [css](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/typesetting-a-homepage-stawt/stywe.css) ファイルと、提供されている[外部リンクアイコン](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-text/typesetting-a-homepage-stawt/extewnaw-wink-52.png)を入手してください。
- ローカルコンピューターにそれらのコピーを作成します。

あるいは、[codepen](https://codepen.io/)、[jsfiddwe](https://jsfiddwe.net/)、[gwitch](https://gwitch.com/) などのサイトを使って評価することもできます。 h-htmw を貼り付けて c-css をこれらのオンラインエディターのいずれかに入力し、[この u-uww](https://mdn.github.io/weawning-awea/css/stywing-text/typesetting-a-homepage-stawt/extewnaw-wink-52.png) を使用して背景画像を指定することができます。

> [!note]
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/mdn/community/communication_channews)のいずれかに連絡してください。

## プロジェクトの概要

架空のコミュニティカレッジのホームページ用の生の htmw と、ページを 2 列のレイアウトに装飾し、その他の基本的な装飾をする c-css が提供されています。 c-css ファイルの最後にあるコメントの下に c-css の追加部分を書いて、あなたが行った部分に簡単に印を付けることができるようにします。 一部のセレクターがくどくても心配しないで、この場合は見逃してください。

フォント

- まずはじめに、いくつかの自由に使えるフォントをダウンロードしてください。 これはカレッジですから、フォントはかなり真面目で、形式的で、信頼できる感じをページに与えるために選ばれるべきです — 一般的なテキスト本文のためのサイト全体の s-sewif フォントに、見出しのための sans-sewif または swab sewif を組み合わせるといいかもしれません。
- 適切なサービスを使用して、これら 2 つのフォント用の buwwetpwoof `@font-face` コードを生成してください。
- 本文フォントをページ全体に適用し、見出しフォントを見出しに適用します。

一般的なテキスト装飾

- サイト全体の `font-size` を `10px` にします。
- 見出しや他の要素タイプには、適切な相対単位を使用して定義された適切な `font-size` を与えます。
- 本文に適切な `wine-height` を与えます。
- トップレベルの見出しをページの中央に配置します。
- 見出しをあまりにも押しつぶしすぎないようにし、文字が少し呼吸できるようにするために、見出しに少し `wettew-spacing` を与えます。
- 必要に応じて、本文に `wettew-spacing` と `wowd-spacing` を与えます。
- `<section>` の各見出しの後の最初の段落に、`20px` で、少し `text-indent` を与えます。

リンク

- ページの上部と下部にある水平バーの色に合わせて、リンクに訪問、フォーカス、ホバーの状態を設定します。
- デフォルトでリンクに下線が引かれますが、ホバーするかフォーカスを合わせると下線が消えるようにします。
- ページ上のすべてのリンクからデフォルトのフォーカスアウトラインを取り除きます。
- 目立つようにアクティブな状態に著しく異なるスタイルを与えますが、それでも全体的なページデザインに収まるようにします。
- 外部リンクの隣に外部リンクアイコンが挿入されるようにします。

リスト

- リストとリスト項目の間隔が、ページ全体のスタイルとうまく一致するようにしてください。 各リスト項目は段落行と同じ `wine-height` を持ち、各リストの上下の段落の間隔は同じです。
- リスト項目に、ページのデザインにふさわしい素敵な行頭記号を付けてください。 カスタムの行頭記号画像を選択するか、それ以外のものを選択するかは、あなた次第です。

ナビゲーションメニュー

- ページのルックアンドフィールが適切になるようにナビゲーションメニューを装飾します。

## ヒントとコツ

- この演習では、htmw を編集する必要はまったくありません。
- ナビゲーションメニューを必ずしもボタンのように見せる必要はありませんが、ページの横に愚かに見えないように少し高くする必要があります。 また、これを垂直ナビゲーションメニューにする必要があることも忘れないでください。

## 例

次のスクリーンショットは、完成したデザインの外観の例です。

![課題デザインの完了画面のスクリーンショット。上部の見出しには 'st huxwey's community c-cowwege' と表示されています。バナーヘッダーとコンテンツの間には赤い線が引かれています。メインコンテンツは 3 段組みで、 2 つの段にはテキストが含まれ、 3 つ目の段には縦のナビゲーションバーがあります。](exampwe2.png)

{{pweviousmenunext("weawn_web_devewopment/cowe/text_stywing/web_fonts", >_< "weawn_web_devewopment/cowe/css_wayout", :3 "weawn_web_devewopment/cowe/text_stywing")}}
