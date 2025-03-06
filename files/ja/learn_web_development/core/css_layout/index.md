---
title: CSS のレイアウト
slug: Learn_web_development/Core/CSS_layout
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}

前回までのモジュールでは、コンテンツが収まるボックスのスタイルや操作方法について見てきました。 今回は、ボックスを互いに関連づけ、ブラウザーのビューポートに合わせて正しくレイアウトする方法について見ていきます。 このモジュールでは、浮動ボックス、位置指定、その他の最新のレイアウトツール、さまざまな端末、画面サイズ、解像度に適応するレスポンシブデザインの構築について見ていきます。

## 前提知識

このモジュールを始める前に、 [HTML](/ja/docs/Learn_web_development/Core/Structuring_content)、[CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)、[CSS によるテキストのスタイル設定](/ja/docs/Learn_web_development/Core/Text_styling)を理解しておいてください。

> [!NOTE]
> 使用しているコンピューター/タブレット/その他のデバイスで自分のファイルを作成できない場合は、[JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) などのオンラインコーディングプログラムで (ほとんどの) コードサンプルを試すことができます。

## チュートリアルと課題

- [CSS レイアウト入門](/ja/docs/Learn_web_development/Core/CSS_layout/Introduction)
  - : この記事では、以前のモジュールで既に触れた CSS レイアウト機能のいくつか（さまざまな {{cssxref("display")}} の値など）を要約し、このモジュール全体で取り上げるいくつかの概念を紹介します。
- [浮動ボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Floats)
  - : 元々は、テキストブロック内の画像を浮動させるためのものだった {{cssxref("float")}} プロパティは、ウェブページで複数の列のレイアウトを作成するために最もよく使用されるツールの 1 つになりました。フレックスボックスとグリッドの出現により、この記事で説明するように、これで元の目的に戻っています。
- [位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)
  - : 位置指定を使用すると、文書の通常のレイアウトフローから要素を取り出して異なるふるまいをさせることができます。 例えば、互いの上に重なったり、常にブラウザーのビューポート内の同じ場所に留まったりします。 この記事では、さまざまな {{cssxref("position")}} の値とその使い方について説明します。
- [フレックスボックス](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)
  - : [フレックスボックス](/ja/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)は、アイテムを行または列にレイアウトするための 1 次元のレイアウト方式です。アイテムは余った空間を埋めるために伸ばされたり、小さな空間に収まるために縮んだりします。この記事では、基本的なことをすべて説明しています。
- [CSS グリッドレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Grids)
  - : CSS グリッドレイアウトは、ウェブ用の 2 次元レイアウトシステムです。 これにより、コンテンツを行と列にレイアウトすることができ、複雑なレイアウトを簡単に構築できる多くの機能を備えています。この記事では、グリッドレイアウトを始めるために必要なすべてを説明します。
- [レスポンシブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
  - : ウェブ対応端末の画面サイズが多様化するにつれ、レスポンシブウェブデザイン (RWD) という概念が登場しました。ウェブページのレイアウトや外観を、さまざまな画面幅や解像度などに合わせて変更できるようにする一連の実践方法です。これは、多数の端末に対応するウェブのデザイン方法を大きく変える考え方であり、この記事では、この概念を習得するために知っておくべき主なテクニックについてご説明します。
- [メディアクエリーの初心者向けガイド](/ja/docs/Learn_web_development/Core/CSS_layout/Media_queries)
  - : **CSS メディアクエリー**は、ブラウザーや端末の環境が、指定したルールに合致した場合にのみ CSS を適用する方法です。メディアクエリーは、ビューポートの大きさに応じて異なるレイアウトを作成することができるため、レスポンシブウェブデザインの重要な要素となっています。このレッスンでは、まずメディアクエリーで使用される構文について学び、次にメディアクエリーを使用して、シンプルなデザインをどのようにレスポンシブにするかを示す実例を見ていきます。
- [基礎的なレイアウトの理解](/ja/docs/Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension)
  - : ウェブページをレイアウトすることによって、さまざまなレイアウト方法に関する知識をテストするための評価試験です。

## 追加のチュートリアル

以下のチュートリアルは学習コースの一部ではありませんが、興味深い内容です。メインのコア記事をすべて読み終えた後にオプションとして学習する、上級者向けの目標として考えてみてください。

- [段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
  - : 段組みレイアウトの仕様では、新聞に見られるような、コンテンツを複数の段にレイアウトする方法が提供されています。 この記事では、この機能の使い方について説明します。
- [過去のレイアウト方法](/ja/docs/Learn_web_development/Core/CSS_layout/Legacy_Layout_Methods)
  - : グリッドシステムは CSS レイアウトで使用される非常に一般的な機能で、**CSS グリッドレイアウト**以前は浮動レイアウトや他のレイアウト機能を使用して実装される傾向がありました。 レイアウトをいくつかの列（4 や 6 や 12）として想像し、そしてコンテンツの列をこれらの想像上の列の中に合わせます。 この記事では、古いプロジェクトで作業した場合に、それらがどう使われたかを理解するために、これらの古い方法がどのように機能するのかを説明します。
- [古いブラウザーの対応](/ja/docs/Learn_web_development/Core/CSS_layout/Supporting_Older_Browsers)
  - : このモジュールでは、フレックスボックスとグリッドをデザインの主なレイアウト方法として使用することをお勧めしています。 しかしながら、サイトへの訪問者には、古いブラウザーや、使用している方法に対応していないブラウザーを使用している人がいます。 これはウェブ上で常に当てはまります — 新しい機能が開発されると、ブラウザーによって異なるものが優先されます。 この記事では、古い技術のユーザーを締め出すことなく最新のウェブ技術を使用する方法について説明します。

## 関連情報

- [実用的な位置指定の例](/ja/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples)
  - : この記事では、位置指定でどのようなことができるかを説明するために、実際に使用されるいくつかの例を作成する方法を示します。
- [CSS レイアウト料理帳](/ja/docs/Web/CSS/Layout_cookbook)
  - : CSSレイアウトの料理帳は、一般的なレイアウトパターンのレシピをまとめることを目的としています。自分のプロジェクトの出発点として使用することができるコードを提供するだけでなく、これらのレシピは、レイアウト仕様を使用するさまざまな方法と、開発者として行うことができる選択を強調します。

{{NextMenu("Learn_web_development/Core/CSS_layout/Introduction", "Learn_web_development/Core")}}
