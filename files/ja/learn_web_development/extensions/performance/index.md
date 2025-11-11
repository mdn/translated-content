---
title: ウェブパフォーマンス
slug: Learn_web_development/Extensions/Performance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}

ウェブサイトを構築するには、HTML、CSS、JavaScript が必要です。人々が使いたいと思うウェブサイトやアプリケーションを構築し、ユーザーを惹きつけ、維持するためには、優れた使い勝手を実現する必要があります。優れた使い勝手の一部は、コンテンツの読み込みが速く、ユーザーの操作に反応することです。これは**ウェブパフォーマンス**と呼ばれています。このモジュールでは、パフォーマンスの高いウェブサイトを作成するための基礎知識を学びます。

初心者向けの教材では、パフォーマンスや[アクセシビリティ](/ja/docs/Learn_web_development/Core/Accessibility)などのウェブのベストプラクティスをできるだけ忠実に再現するようにしていましたが、このようなテーマにも特に焦点を当てて、よく理解しておくとよいでしょう。

## 前提知識

多くのウェブパフォーマンスの改善提案を実施するためには、HTML、CSS、JavaScript の知識が必要ですが、ウェブパフォーマンスを理解し測定するためには、アプリケーションの構築方法を知っていることは必須条件ではありません。ただし、このモジュールに取り組む前に、少なくとも[初めてのウェブサイト](/ja/docs/Learn_web_development/Getting_started/Your_first_website)モジュールを使ってウェブ開発の基本的な知識を身につけておくことをお勧めします。

また、以下のようなモジュールを使って、これらのトピックをもう少し深く掘り下げてみるのもよいでしょう。

- [HTML によるコンテンツの構造化](/ja/docs/Learn_web_development/Core/Structuring_content)
- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
- [JavaScript による動的スクリプティング](/ja/docs/Learn_web_development/Core/Scripting)

## ガイド

- [ウェブパフォーマンスの「なぜ」](/ja/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : この記事では、ウェブパフォーマンスがなぜアクセシビリティ、ユーザーエクスペリエンス、ビジネスの目的に重要であるかを解説します。
- [ウェブパフォーマンスとは](/ja/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : ウェブパフォーマンスが重要であることは分かりましたが、ウェブパフォーマンスとは何でしょうか？この記事では、ウェブページの読み込みとレンダリングから、コンテンツがどのようにユーザーのブラウザーに表示されるかを含め、パフォーマンスの構成要素を紹介します。
- [ユーザーはパフォーマンスをどう知覚するのか](/ja/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : ユーザーがサイトの速さをどのように知覚するかということは、ウェブサイトの速さをミリ秒単位で示すことよりも重要です。 この認識は、実際のページの読み込みロード時間、アイドリング、ユーザー操作への応答性、スクロールやその他のアニメーションのスムーズさに影響されます。この記事では、様々な読み込みの指標、アニメーション、応答性の指標と、実際の時間よりもユーザーの認識を改善するためのベストプラクティスについて説明します。
- [パフォーマンスの計測](/ja/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : パフォーマンス指標のいくつかを理解したところで、パフォーマンスツール、指標、API について深く掘り下げ、パフォーマンスをウェブ開発のワークフローの一部にする方法を考えてみます。
- [マルチメディア: 画像](/ja/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : ウェブパフォーマンスの中で最も身近な位置にあるのは、メディアの最適化です。ユーザーエージェントの能力、大きさ、ピクセル密度に応じて、異なるメディアファイルを提供することが可能です。この記事では、画像がパフォーマンスに与える影響と、画像ごとに送信されるバイト数を削減する方法について説明します。
- [マルチメディア: 動画](/ja/docs/Learn_web_development/Extensions/Performance/video)
  - : ウェブパフォーマンスの中で最も身近な位置にあるのは、メディアの最適化です。この記事では、動画コンテンツがパフォーマンスに与える影響について説明し、バックグラウンドの動画からオーディオトラックの削除など、パフォーマンスを向上させるためのヒントを紹介します。
- [JavaScript パフォーマンスのベストプラクティス](/ja/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript は、適切に使用すれば、インタラクティブで没入感のあるウェブ体験を実現できますが、ダウンロード時間、レンダリング時間、アプリ内のパフォーマンス、バッテリー寿命、ユーザー体験を大きく損なう可能性があります。この記事では、複雑なコンテンツであっても可能な限りパフォーマンスを向上させるために考慮すべき、 JavaScript のベストプラクティスを紹介します。
- [HTML のパフォーマンスの最適化](/ja/docs/Learn_web_development/Extensions/Performance/HTML)
  - : マークアップの属性やソースの順序によっては、ウェブサイトのパフォーマンスに影響を与えることがあります。 DOM ノードの数を最小限に抑え、スタイル、スクリプト、メディア、サードパーティのスクリプトなどのコンテンツを最適な順序と属性を使用して含めることで、ユーザーエクスペリエンスを劇的に向上させることができます。この記事では、最大限のパフォーマンスを確保するために HTML をどのように使用すればよいかを詳しく見ていきます。
- [CSS のパフォーマンスの最適化](/ja/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS は、パフォーマンス向上のための最適化の焦点としてはあまり重要ではないかもしれませんが、パフォーマンスに影響を与える CSS の特性がいくつかあります。この記事では、パフォーマンスに影響を与えるいくつかの CSS プロパティと、パフォーマンスに悪影響を与えないためのスタイルの処理方法を提案します。
- [ウェブパフォーマンスのためのビジネスケース](/ja/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : パフォーマンスを向上させるために開発者ができることは数多くありますが、どれくらいの速度があれば十分なのでしょうか。このような努力の重要性を権限を持った人に納得させるにはどうすればよいでしょうか。最適化した後、肥大化したパフォーマンスが戻らないようにするにはどうすればよいでしょうか。この記事では、経営陣の説得、パフォーマンス文化とパフォーマンス予算の策定、コードベースにリグレッションが潜り込まないようにする方法を紹介します。

## 関連情報

- [ウェブパフォーマンスのリソース](/ja/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : HTML、CSS、JavaScript、メディアファイルなどのフロントエンドの構成物に加えて、アプリケーションを遅くする機能と、主観的・客観的にアプリケーションを速くする機能があります。ウェブパフォーマンスに関連する API、開発者ツール、ベストプラクティス、バッドプラクティスは数多くあります。ここでは、これらの機能の多くを基本的なレベルで紹介し、それぞれのトピックについて、パフォーマンスを向上させるためのより深い考察へのリンクを提供します。
- [レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)
  - : この記事では、画面サイズや解像度などが大きく異なる端末でも動作する画像、すなわちレスポンシブ画像の概念を学び、それを実現するために HTML が提供するツールを紹介します。これにより、異なる端末間でのパフォーマンスを向上させることができます。レスポンシブ画像は、[レスポンシブデザイン](/ja/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)の一部であり、今後の CSS のテーマとなります。
- [MDN のウェブパフォーマンスの章](/ja/docs/Web/Performance)
  - : ウェブパフォーマンスの章 — ここでは、パフォーマンス API の概要、テストと分析ツール、パフォーマンスのボトルネックの問題など、ウェブパフォーマンスに関するより詳細な情報をご覧いただけます。

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}
