---
title: Baseline (compatibility)
slug: Glossary/Baseline/Compatibility
l10n:
  sourceCommit: bb6092c4230b69c2eceae6910af68c73955cae1c
---

**ベースライン**は、広くサポートされているウェブプラットフォームの機能を確認します。ウェブ開発者は、ベースラインの機能が最新のブラウザーで動作することを期待できます。

ベースラインの機能（API、CSS プロパティ、JavaScript 構文など）は、有名なブラウザ（Chrome, Edge, Firefox, Safari）の現在および以前のメジャーバージョンで安定して動作することが知られています。

## バッジ

<!-- TODO: Show Baseline indicator itself, once it has been merged -->

🟢 緑色のベースラインバッジが表示されていれば、その機能がブラウザの最新および以前のメジャーリリースで動作することが信頼できます。

<!-- TODO: Show the non-Baseline indicator itself, once it has been merged -->

🟡 もし、ある機能がまだベースラインでないことを示す黄色いバッジが表示されている場合は、その機能に依存する前に、サイトのユーザーに対してより多くの調査とテストを行うか、ベースラインになるのを待つ必要があります。

## その他の注意事項

ベースラインはサポートに関する要約ガイドであり、すべての状況をカバーしているわけではありません。もしあなたのサイトが、ブラウザの長期サポートリリース、古いデバイスやブラウザのリリース、またはベースラインレポートがカバーしていないブラウザで動作する必要がある場合、あなた自身で調査やテストを行う必要があるかもしれません。ベースラインでカバーできない場合は、その機能を採用する前に MDN にあるブラウザの互換性テーブルを読んだり [caniuse.com](https://caniuse.com/) にアクセスすることをお勧めします。

## 貢献するには

ベースラインは W3C WebDX Community Group のコミュニティ活動であり、MDN のオープンソースのブラウザー互換性データに依存しています。質問、フィードバックがある場合、またはベースラインのステータスレポートがカバーする機能の更新や拡張に協力したい場合は、[web-platform-dx/feature-set](https://github.com/web-platform-dx/feature-set) にアクセスして参加することができます。

## 関連情報

- [クロスブラウザーテスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing)
- [web-platform-dx/feature-set repository](https://github.com/web-platform-dx/feature-set)
- [W3C WebDX Community Group](https://www.w3.org/community/webdx/)
- [mdn/browser-compat-data repository](https://github.com/mdn/browser-compat-data)
