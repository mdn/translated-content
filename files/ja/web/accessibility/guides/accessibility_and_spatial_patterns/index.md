---
title: アクセシビリティと空間的パターン
short-title: 空間的パターン
slug: Web/Accessibility/Guides/Accessibility_and_Spatial_Patterns
l10n:
  sourceCommit: 7ba6358a0ff684cc67c60b76d6d972722bbf0d18
---

このドキュメントでは、光感受性てんかん、前庭障害、その他の知覚障害を持つ人々に身体的症状を引き起こす可能性のある視覚的パターンについて説明します。

## 空間的位置特定

NASA は色の知覚に関する研究を行い、色がどのように知覚されるかについては輝度コントラストが極めて重要であることを突き止めました。以下の 2 つの画像は、NASA の研究、具体的には [Designing With Blue](https://web.archive.org/web/20250216024807/https://colorusage.arc.nasa.gov/blue_2.php) という記事からのものです。

![黄色と赤色の空間的な位置の安定性の比較。どちらも背景とほぼ同等の輝度である。色付きバーと黒いバーのずれや隙間は、黄色と赤色で物理的には同じであるが、黄色の方が視覚的にははるかに目立ちにくい。](yellow_edge_3.gif) ![黄色と赤色の空間的な位置の安定性の比較。どちらも背景とほぼ同等の輝度である。色付きバーと黒いバーのずれや隙間は、黄色と赤色で物理的には同じであるが、黄色の方が視覚的にははるかに目立ちにくい。](yellow_edge_4.gif)

> **空間的位置特定。** 背景と同じ輝度を持つ記号は、輝度コントラストの高い記号に比べ、空間的・時間的な位置の認識が不安定になりがちである。こうした記号は、視覚的に「浮いて」見えたり、輝度コントラストの高い隣接する記号に「飲み込まれて」しまったりする傾向がある。この現象は、青チャンネルでのみ違いがある記号と背景の組み合わせにおいて、特に問題となるようだ。

## 縞の間隔

光過敏性発作は、アニメーションだけでなく静止画によっても引き起こされる可能性があります。そのメカニズムについてはまだ十分に解明されていませんが、脳内で生じる「ガンマ波」と関連があると考えられています。この脳内の振動は、光過敏性発作を引き起こすと考えられている他の種類の神経学的反応とは異なる反応です。

縞模様やパターンは、問題を引き起こしやすい典型的な画像の一種であり、中でも縞模様については最も詳細に研究されてきました。どのような向きであっても、明暗が交互に繰り返される縞模様が 5 組以上ある場合、危害を及ぼす可能性があります。縞模様は、平行、放射状、曲線、直線などさまざまな形状をとることができ、繰り返される要素の列によって形成される場合もあります。

2005年、アーノルド・ウィルキンス、ジョン・エメット、グラハム・ハーディングは、発作を誘発する可能性のあるパターン化された画像を特徴づけるためのガイドラインを評価しました。彼らはガイドラインを根本から見直し、驚くほど単純でありながら強力な[テスト](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)を考案し、それを論文 **[発作を誘発するパターン化された画像の特性評価と、それを予防するためのガイドラインの最適化](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)** の中で発表しました。

> [!NOTE]
> 材料を評価するために必要な手順は、以下のようになります。
>
> 画面をご覧ください。
>
> - 縞模様が5本以上ありますか？
> - ある場合、その持続時間は 0.5 秒を超えますか？
> - ある場合、その輝度は規定の限度を超えていますか？
> - ある場合、そのパターンの動きを分類してください。
> - ガイドラインに違反していますか？
>
> その場合は、明るさを下げてください。

## テキストとパディング

コントラストの知覚に関する WCAG 基準では、パディングの影響が考慮されていません。例えば、灰色の背景上の青いテキストは、白で囲まれている場合よりも、黒で「局所的に」囲まれている場合の方が認識しやすくなります。色に対する「局所的な」順応という現象が存在するのです。要するに、パディングは重要な要素なのです。

## 数学

空間的推論は数学の学習に影響を与えます。したがって、数学の提示方法における空間的な関係性は、認知に影響を及ぼします。ウェブ開発者は、数学の表示方法を通じて、この点に対して何らかの対策を講じることができます。この分野では、アニメーションが重要な役割を果たします。例えば、物体が回転した際の「見た目」、さまざまな角度からの見え方、断面がどのように見えるか、そして空間内で互いにどのように関係しているかといった要素はすべて、空間的な観点から数学を理解する能力に大きな影響を与えます。

## 点字

現代の技術により、専門家でなくても点字を印刷できるようになりました。例えば、Adobe Illustrator を使えば、印刷用の ADA 点字を組版することができます。

視覚障害者に正確に空間的なパターンを伝える能力は、アクセシビリティにとって極めて重要です。例えば、点字を知っているだけでは不十分です。点字の点々は、「人間」が読み取れるように、互いに空間的に間隔を空けて配置されなければなりません。人間の指先であれば、点字の点が互いに近すぎたり遠すぎたりしていることを容易に区別できます。

点字文字の周囲には余白が必要です。点字の利用者は、点字文字の「上」に指を置くのではなく、視覚障害のない人がページに書かれたテキスト上で目を動かすのと同じように、指を文字の上を滑らせるように動かさなければなりません。

余白の性質は、使用されている MIME タイプやそのバージョンによって異なる場合があります。例えば、SVG の境界線は、その寸法から内側および外側へと拡張されることもあれば、新しいバージョンの SVG では完全に外側へと拡張されることもあり、その結果、SVG 周囲の余白が縮小され、知覚が容易になります。

## 関連情報

### MDN

- [アクセシビリティ：ユーザーがより安全にウェブを閲覧するためにできること](/ja/docs/Web/Accessibility/Guides/Browsing_safely)
- [発作や身体的反応に対するウェブアクセシビリティ](/ja/docs/Web/Accessibility/Guides/Seizure_disorders)
- [ウェブアクセシビリティ：色と輝度の理解](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance)

### 点字

- [Part 3: A Step-by-Step Guide to Typesetting ADA Braille Correctly in Adobe Illustrator](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [Spatial Math in BrailleBlaster (4 of 5)](https://www.youtube.com/watch?v=yz9vefDsj1g)

### 数学

- [Spatial Reasoning: Why Math Talk is About More Than Numbers](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-is-about-more-than-numbers/)

### 科学文献

- [Color constancy in context: Roles for local adaptation and levels of reference](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [Gamma oscillations and photosensitive epilepsy](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [Characterizing the Patterned Images That Precipitate Seizures and Optimizing Guidelines To Prevent Them](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett, and Graham Harding
