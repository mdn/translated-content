---
title: Baseline (互換性)
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: d14b5a927958ec1ab9737f2f9fce0761a4c95c75
---

{{GlossarySidebar}}

**Baseline** （ベースライン）は、ブラウザー間で動作するウェブプラットフォームの機能を確認します。
Baseline は、サイトの訪問者に互換性の問題を引き起こす可能性が低くなった時期を示すことで、その機能を使用するタイミングを決定するのに役立ちます。

API、一連の CSS プロパティ、JavaScript 構文などの Baseline 機能は、Chrome、Edge、Firefox、Safari など、デスクトップやモバイルで広く使われている有名なブラウザーで一貫して動作します。

Baseline 機能とは、現在の安定したブラウザーで新たに利用可能になったか、あるいは長期にわたる継続的なサポートにより広く利用可能になった機能のことを言います。

## バッジ

![チェックマークが付いた緑色のウィジェット：Baseline: Widely available. 4 つのブラウザーのロゴ、すべてチェックマーク付き。](high.png)

**Widely available** の Baseline バッジが表示されている場合、その機能は各 Baseline ブラウザーで一貫してサポートされてきた歴史があると信頼できます。_Widely available_ である機能とは、何年も前から複数のブラウザーでサポートされている機能です。まだ最新のブラウザーリリースに対応していないものであっても、多くのブラウザーやデバイスで動作します。

![チェックマークが付いた青色のウィジェット：Baseline 2022: Newly available. 4 つのブラウザーのロゴ、すべてチェックマーク付き。](limited.png)

**Newly available** の Baseline バッジが表示されている場合、その機能は少なくとも各 Baseline ブラウザーの最新の安定版で動作しており、多くの場合それ以上の動作が確認されています。_Newly available_ である機能は、最新のブラウザーでは動作しますが、古いブラウザーやデバイスでは動作しない可能性があります。_Newly available_ である機能を使用する前に、サイトの利用者をよく検討してください。

![バツマークが付いた灰色のウィジェット：Limited availability. 4 つのブラウザーのロゴ、2 つにチェックマーク、2 つにバツマーク。](low.png)

**Limited availability** バッジが表示されている場合、その機能は Baseline ではありません。その機能に依存する前に、あなたのサイトのユーザーを対象とした調査とテストを行うか、Baseline になるのを待ちましょう。

## ブラウザーセット

Baseline は、以下のブラウザーでの可用性を追跡します。

- Apple Safari (iOS)
- Apple Safari (macOS)
- Google Chrome (Android)
- Google Chrome (desktop)
- Microsoft Edge (desktop)
- Mozilla Firefox (Android)
- Mozilla Firefox (desktop)

## その他の注意事項

Baseline はサポートの概要であり、すべての状況をカバーしているわけではありません。もしあなたのサイトが、古いデバイスやブラウザーのリリース、または Baseline でカバーされていないブラウザーで動作する必要がある場合、あなた自身で調査やテストを行う必要があるかもしれません。Baseline があなたの状況をカバーしていない場合は、その機能を採用する前に MDN にあるブラウザーの互換性テーブルを読んだり [caniuse.com](https://caniuse.com/) を参照することを検討してください。

## 貢献するには

Baseline は W3C WebDX Community Group のコミュニティ活動であり、MDN のオープンソースブラウザー互換性データに依存しています。質問やフィードバックがある場合、または Baseline のステータスレポートがカバーする機能の更新や拡張に協力したい場合は、[web-platform-dx/web-features](https://github.com/web-platform-dx/web-features) にアクセスして参加してください。

## 関連情報

- [ブラウザー横断テスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/web-features repository](https://github.com/web-platform-dx/web-features)
- [W3C WebDX Community Group](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data repository](https://github.com/mdn/browser-compat-data)
