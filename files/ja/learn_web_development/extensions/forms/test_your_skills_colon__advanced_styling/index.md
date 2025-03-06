---
title: "スキルテスト: 高度なスタイル設定"
slug: Learn_web_development/Extensions/Forms/Test_your_skills:_Advanced_styling
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{learnsidebar}}

このスキルテストの目的は、あなたが[フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)および [UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)の記事を理解したかどうかを評価することです。

> [!NOTE]
> このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## フォームの高度なスタイル設定 1

最初の高度なスタイル設定では、検索入力フィールドをブラウザー間で可能な限り一貫性のあるものにします。

基本的なリセットはすでに指定されています。

1. 最初のすべて、検索ボックスの幅、高さ、パディング、協会の色をブラウザー間で統一してみてください。
2. フォーム要素の高さについて、ブラウザーによっては動作しないことが分かるでしょう。これはOSのネイティブスタイル設定を使用している用途があるためです。このネイティブスタイル設定はどのように除去すればよいでしょうか。
3. ネイティブのスタイル設定を除去したら、元々指定されたものと同じ見てくれを保つために、提供していた機能の一つを追加する必要があります。これはどのように行いますか。
4. ブラウザー間で（ここでは具体的な Safari を見て）一貫性がないことのひとつに、標準の青いフォーカスの輪郭線の位置があります。これを除去するにはどうすればよいでしょうか。
5. 青いフォーカスの輪郭線を取るするだけでは大きな問題があります。それは何でしょうか。検索ボックスがホバーされているとき、またはフォーカスされているときにユーザーが指示できるように、何らかのスタイル設定を追加することはできますか。
6. 検索ボックスを表すもう一つのこととして、虫眼鏡のアイコンがあります。HTML ファイルと同じディレクトリーで利用できるようにしました。 [search-24px.png](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/search-24px.png) を参照してください。また、検索入力の後に `<div>` 要素を追加して、必要であれば添付できるようにしました。また、CSS を使用して検索ボックスの右側に配置し、縦に並べることができますか。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling1.html", '100%', 700)}}

> [!CALLOUT]
>
> [この課題の出発点をダウンロード](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling1-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## フォームの高度なスタイル設定 2

次の課題では、3 つのラジオボタンを設定します。これらに独自のスタイル設定を施してください。

基本的なリセットはすでに指定されています。

1. まずすべて、既定のスタイル設定を取り除きます。
2. 次に、ラジオボタンに合理的な基本スタイル（ページが最初に読み込まれたときに保有するスタイル）を与えます。これは何らかのスタイルにすることができますが、おそらく幅と高さ（約 18 ピクセルから 24ピクセルの間）、および微妙な境界線や背景色を設定したいと思うでしょう。
3. これで、ラジオボタンが選択されたときのために、異なるスタイルを与えます。
4. ラジオボタンをラベルとうまく配置します。

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("learning-area/html/forms/tasks/advanced-styling/advanced-styling2.html", '100%', 700)}}

> [!CALLOUT]
>
> [この課題の出発点をダウンロード](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling2-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## フォームの高度なスタイル設定 3

この評価シリーズの最後の課題では、すでにきれいなスタイル設定のフィードバックフォームを提供します。[UI 擬似クラス](/ja/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes) の記事を読み終えていれば、同じようなものをすでに見ているでしょう。

あなたにしてほしいことは、いくつかの高度な擬似クラスを使用して、有効性の有益な指標を提供することです。

1. まずすべて、どの入力が入力されなければならないかを視覚的に示すために、固有のスタイル設定を提供してください。
2. 2 つ目は、各入力に指定されたデータが有効かどうかを視覚的に示す有益なインジケーターを提供することです。

> [!CALLOUT]
>
> [この課題の出発点をダウンロード](https://github.com/mdn/learning-area/blob/main/html/forms/tasks/advanced-styling/advanced-styling3-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
