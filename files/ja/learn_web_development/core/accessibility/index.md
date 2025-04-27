---
title: ウェブのアクセシビリティ
short-title: アクセシビリティ
slug: Learn_web_development/Core/Accessibility
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Core/Accessibility/What_is_accessibility", "Learn_web_development/Core")}}

公共サービス、教育、 e コマースサイト、エンターテイメントなどのウェブコンテンツにアクセスすることは、人間として正しい行為です。障碍、人種、地理的条件、または他にも人間としての特性を理由に、誰一人として排除されるべきではありません。 このモジュールでは、ウェブサイトを可能な限りアクセシビリティの高いものにするために学ぶべき最善の手法やテクニックについて解説します。

## 前提知識

このモジュールを始める前に、 [HTML](/ja/docs/Learn_web_development/Core/Structuring_content), [CSS](/ja/docs/Learn_web_development/Core/Styling_basics), [JavaScript](/ja/docs/Learn_web_development/Core/Scripting) を理解しておいてください。

> [!NOTE]
> 自分のファイルを作れない コンピューター/タブレット/その他の端末で作業する場合、コードの実例の大半を [JSBin](https://jsbin.com/) や [Glitch](https://glitch.com/) などのオンラインコーディングプログラム内で試すことができます。

## チュートリアルと課題

- [アクセシビリティとは](/ja/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
  - : この記事では実際アクセシビリティとは何かについてよく観察するモジュールから開始します — これには考慮が必要な人のグループや、いろいろな人がウェブとやり取りするのになぜ、どんなツールを使うのかや、アクセシビリティをウェブ開発の作業フローに取り組む方法が含まれます。
- [アクセシビリティツールと支援技術](/ja/docs/Learn_web_development/Core/Accessibility/Tooling)
  - : 次に、アクセシビリティツールに目を向け、アクセシビリティの課題解決を手伝っていただくために使用できるツールの種類や、ウェブを閲覧する際に障碍者が使用する支援技術に関する情報を指定します。 これらのツールは、次の記事でも使用します。
- [HTML: アクセシビリティの良き基本](/ja/docs/Learn_web_development/Core/Accessibility/HTML)
  - : ウェブコンテンツをアクセシビリティ高くすることの多くの部分は、どんなときも正しい HTML 要素を正しい目的で使うことです。 この記事ではアクセシビリティを最大化するためにどう HTML が使われるかの詳細を見ていきます。
- [CSS と JavaScript のアクセシビリティのベストプラクティス](/ja/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript)
  - : CSS と JavaScript も、適切に使うと、アクセシビリティの高いウェブ体験を可能にする力を持っていますが、誤用されると目立ってアクセシビリティを害することもあります。この記事では、複雑なコンテンツでもなるべくアクセシビリティ高める CSS と JavaScript のいくつかの成功事例をざっと見ます。
- [WAI-ARIA の基本](/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)
  - : 前の記事に続いて、複雑な UI に非セマンティックな HTML や動的な JavaScript-更新コンテンツを作ることは難しいかもしれません。WAI-ARIA は、そうした問題をブラウザーと補助技術が認識できるセマンティクスを追加することで補助し、ユーザーに何が起きているのかを知らせるのに使うテクノロジーです。ここではアクセシビリティを改善する基本レベルの使用方法を示します。
- [アクセシブルなマルチメディア](/ja/docs/Learn_web_development/Core/Accessibility/Multimedia)
  - : アクセシビリティの問題を起こす可能性がある他のカテゴリーは、マルチメディアです。ビデオ、オーディオ、およびイメージのコンテンツには、補助技術とユーザーが理解できるような、適切な代替テキストを付与する必要があります。どのように表示されるべきか分かるように。
- [モバイルのアクセシビリティ](/ja/docs/Learn_web_development/Core/Accessibility/Mobile)
  - : モバイル端末でのウェブへのアクセスが増えるとともに、アクセシビリティのツールが本格的に提供されている iOS や Android のような一般的なプラットフォームが普及しています。これらのプラットフォームでのあなたのウェブコンテンツのアクセシビリティを考えることが重要です。モバイル特有のアクセシビリティについて検討しましょう。
- [アクセシビリティのトラブルシューティング](/ja/docs/Learn_web_development/Core/Accessibility/Accessibility_troubleshooting)
  - : このモジュールの評価では、分析と修正が必要な多くのアクセシビリティの問題があるシンプルなサイトを紹介します。

## 関連情報

- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today)
  - : Marcy Sutton によるすばらしい動画チュートリアル。
- [Deque University resources](https://dequeuniversity.com/resources/)
  - : コードサンプルやスクリーンリーダーリファレンスやその他の役立つリソースを含む。
- [WebAIM resources](https://webaim.org/resources/)
  - : ガイド、チェックリスト、ツールなどを含む。
- [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)
  - : ウェブアクセシビリティ評価ツールの一覧を含む。
- [Learn Accessible Web Design](https://v2.scrimba.com/learn-accessible-web-design-c031?via=mdn) <sup>_MDN カリキュラムパートナー_</sup>
  - : [Scrimba](https://scrimba.com?via=mdn) の _Learn Accessible Web Design_ コースでは、対話型のコーディング課題を解き、現実のウェブサイトを修正することで、アクセシビリティの高い HTML の書き方を学びます。

{{NextMenu("Learn_web_development/Core/Accessibility/What_is_accessibility", "Learn_web_development/Core")}}
