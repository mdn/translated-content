---
title: "課題: かっこいいボックス"
slug: Learn_web_development/Core/Styling_basics/Cool-looking_box
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

この評価では、人目を引くボックスを作成しようとすることで、かっこいいボックスを作成する方法をさらに習得できます。

## 出発点

この評価を開始するには、次のことが必要です。

- [HTML](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/index.html) と [CSS](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/cool-information-box-start/style.css) のローカルコピーを作成します — それらを `index.html` と `style.css` として新しいディレクトリーに保存します。

また、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターを使用することもできます。
これらのオンラインエディターのいずれかに HTML を貼り付けて CSS を入力してください。

> [!NOTE]
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## プロジェクトの概要

あなたの仕事は、かっこよくて装飾的な箱を作り、私たちが CSS で持つことができる楽しみを探ることです。

### 一般的なタスク

- CSS を HTML に適用します。

### ボックスの装飾

提供された {{htmlelement("div")}} に、次のように装飾を設定してください。

- およそ 200 ピクセルくらいの、大きなボックスに適した幅。
- 過程でテキストを垂直方向に中央揃えする、大きなボックスに適した高さ。
- ボックスを水平方向に中央揃えしてください。
- ボックス内でテキストを中央揃えしてください。
- フォントサイズがわずかに増加し、計算したスタイルはおおよそ 17 から 18 ピクセルになりました。 rem を使用してください。 どのように値を導いたかについてのコメントを書いてください。
- デザインの基本色。 この色を背景色としてボックスに付けます。
- テキストにはコントラストのある色を使い、テキストの影は黒にします。
- かなり微妙な境界線の半径。
- 基本色に似た色で、やや暗い色合いの 1 ピクセルの実線の境界線。
- 右下に向かう直線的な半透明の黒のグラデーション。始めるには完全に透明にし、 30% 進むにつれて 0.2 程度の透過率にグラデーションし、最後まで同じ色にしてください。
- 複数のボックスシャドウ。標準のボックスシャドウを 1 つ付けて、ボックスがページから少し浮き上がって見えるようにします。他にも、左上付近に半透明の白いシャドウ、右下付近に半透明の黒いシャドウの 2 種類を入れ、ボックスの立体感を追加してください。

## ヒントとコツ

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) を使って、 CSS の間違いを把握して修正しましょう。

## 例

次のスクリーンショットは、完成したデザインがどのように見えるかの例を示しています。

![角を丸めた大きな赤い箱。ドロップシャドウ付きの白いテキストには "This is a cool box" と書かれています。](fancy-box2.png)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Fancy_letterheaded_paper", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
