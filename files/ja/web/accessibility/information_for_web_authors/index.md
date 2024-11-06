---
title: ウェブ制作者のためのアクセシビリティ情報
slug: Web/Accessibility/Information_for_Web_authors
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

## ガイドラインと規定

1. [<abbr>ARIA</abbr> Authoring Practices Guide (<abbr>APG</abbr>)](https://www.w3.org/WAI/ARIA/apg/)

   アクセシブルなウェブ体験を作成するための、 Accessible Rich Internet Application (<abbr>ARIA</abbr>) 仕様書で定義されたセマンティクスのガイド。一般的なデザインパターンとウィジェットにアクセシビリティセマンティクスを適用する方法を記述し、デザインパターンと機能例を提供しています。

2. [Web Content Accessibility Guidelines (<abbr>WCAG</abbr>)](https://www.w3.org/WAI/standards-guidelines/wcag/)

   W3C _Web Accessibility Initiative (<abbr>WAI</abbr>)_ からのもう一つの重要なガイドライン設定します。欧州連合 (EU) は、このガイドラインに基づいて、今後のアクセシビリティ規制を策定しようとしています。これらのガイドラインは、 [<abbr>WAI</abbr> interest group discussion list](https://www.w3.org/WAI/about/groups/waiig/#mailinglist) でディスカッションされています。

3. [このサイトの ARIA](/ja/docs/Web/Accessibility/ARIA)

   <abbr>MDN</abbr> はすべての [ARIA ロール](/ja/docs/Web/Accessibility/ARIA/Roles)と [ARIA プロパティ](/ja/docs/Web/Accessibility/ARIA/Attributes)のガイドで、最善の手法、関連のロールやプロパティ、例を記載しています。

## 方法論

1. [Accessibility for frontend developers](https://accessibility.digital.gov/front-end/getting-started/)

   アクセシビリティに関するいくつかのトピックと、「使用法」動画および関連する WCAG リファレンスへのリンクが掲載されています。

2. [Accessible Web Page Authoring](https://www.ibm.com/able/requirements/requirements/)

   IBM は、満たすべきアクセシビリティの要求事項を公開し、対話するようにしています。

### 自動化チェックと修復

ブラウザーによくあるエラーをすばやく調べるツールを使用しましょう。

- [HTML CodeSniffer](https://squizlabs.github.io/HTML_CodeSniffer/)
- [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
- [Lighthouse Accessibility Audit](https://developer.chrome.com/docs/lighthouse/overview/)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [<abbr>WAVE</abbr>](https://wave.webaim.org/extension/)

ビルドプロセスに統合し、アクセシビリティテストをプログラムで追加するツールにより、ウェブアプリケーションを開発する際にエラーを検出することができます。

- [axe-core](https://github.com/dequelabs/axe-core)
- [jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Lighthouse Audits](https://github.com/GoogleChrome/lighthouse/blob/master/docs/readme.md#using-programmatically)
- [AccessLint.js](https://github.com/accesslint/accesslint.js/tree/master)

GitHub のプルリクエストからアクセシビリティの課題を探す継続的インテグレーションツールです。

- [AccessLint](https://www.accesslint.com/)

ウェブアプリケーションは実際のユーザーでテストするのがベストですが、色覚異常、弱視、低コントラスト、ズームなどをシミュレーションすることができます。キーボードナビゲーションをテストするために、常にマウスとタッチを使用してサイトをテストする必要があります。また、音声コマンドを使用してサイトをテストすることもできます。マウスを無効にして、[ウェブ障碍シミュレーター](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla)のようなブラウザー拡張機能を使用してみてください。
