---
title: かっこいいボックス
slug: Learn/CSS/Building_blocks/A_cool_looking_box
---

{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}

この評価では、人目を引くボックスを作成しようとすることで、かっこいいボックスを作成する方法をさらに習得できます。

| 前提知識: | この評価を試みる前に、このモジュールのすべての記事を読んでおくべきです。             |
| --------- | ------------------------------------------------------------------------------------ |
| 学習目標: | CSS ボックスモデルと、境界線や背景などの他のボックス関連機能の理解をテストすること。 |

## 出発点

この評価を開始するには、次のことが必要です。

- [HTML](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/cool-information-box-start/index.html) と [CSS](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/cool-information-box-start/style.css) のローカルコピーを作成します — それらを `index.html` と `style.css` として新しいディレクトリーに保存します。

> **メモ:** あるいは、[JSBin](https://jsbin.com/) や [Thimble](https://thimble.mozilla.org/) などのサイトを使って評価することもできます。 HTML を貼り付けて CSS をこれらのオンラインエディタのいずれかに入力できます。 使用しているオンラインエディタに別の CSS パネルがない場合は、それをドキュメントの先頭の `<style>` 要素に自由に配置してください。

## プロジェクトの概要

あなたの仕事は、かっこよくて装飾的な箱を作り、私たちが CSS で持つことができる楽しみを探ることです。

### 一般的なタスク

- CSS を HTML に適用します。

### ボックスの装飾

提供された {{htmlelement("p")}} に次のように装飾を設定してください。

- およそ 200 ピクセルくらいの、大きなボタンに適した幅。
- 過程でテキストを垂直方向に中央揃えする、大きなボタンに適した高さ。
- 中央揃えのテキスト。
- フォントサイズがわずかに増加し、計算したスタイルはおおよそ 17 から 18 ピクセルになりました。 rem を使用してください。 どのように値を導いたかについてのコメントを書いてください。
- デザインの基本色。 この色を背景色としてボックスに付けます。
- テキストの色は同じで、黒いテキストの影を使って読みやすくします。
- かなり微妙な境界線の半径。
- 基本色に似た色で、やや暗い色合いの 1 ピクセルの実線の境界線。
- 右下隅に向かう半透明の黒の線形グラデーション。 最初は完全に透明にし、それに沿って 30% ずつ不透明度を約 0.2 に段階的に調整し、最後まで同じ色のままにします。
- 複数のボックスの影。 ボックスがページから少し浮き上がって見えるようにするには、標準のボックスの影を 1 つ指定します。 他の 2 つは、ボックスの内側の影であるべきです — 左上近くの半透明の白い影と右下近くの半透明の黒い影 — ボックスの素敵な浮いた 3D の外観に追加する。

## 例

次のスクリーンショットは、完成したデザインがどのように見えるかの例を示しています。

![](fancy-box.png)

## 評価

組織的コースの一環としてこの評価に従っている場合は、採点のために作品を教師や指導者に渡すことができるはずです。 自己学習をしている場合は、[この演習についてのディスカッションスレッド](https://discourse.mozilla.org/t/a-cool-looking-box-assessment/24685)や [Mozilla IRC](https://wiki.mozilla.org/IRC) の [#mdn](irc://irc.mozilla.org/mdn) IRC チャンネルで尋ねることで、かなり簡単に採点の手引きを得ることができます。 まず演習を試してみてください — 不正行為によって得られるものは何もありません！

{{PreviousMenu("Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper", "Learn/CSS/Styling_boxes")}}
