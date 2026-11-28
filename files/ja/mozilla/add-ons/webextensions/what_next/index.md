---
title: 次にどうするのか？
slug: Mozilla/Add-ons/WebExtensions/What_next
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

ブラウザー拡張機能のアイデアを形にする準備ができました。開発に取りかかる前に、作業をスムーズに進めるために知っておくとよいことがいくつかあります。

このページで取り上げる多くの内容については、Firefox 用拡張機能の作成、テスト、公開、配布を支援するウェブサイト [Extension Workshop](https://extensionworkshop.com/)<sup>(英語)</sup> で詳しく学べます。

## 開発環境

拡張機能の作成に、特別な開発ツールやビルド環境は必要ありません。テキストエディターだけでも優れた拡張機能を作れます。ただし、ウェブ開発で使っているツールや環境を再利用したい場合は、いくつか注意点があります。

最終コードを提供するために圧縮ツールや難読化ツールを使う場合は、[AMO の審査プロセス](#レビュープロセス)にソースコードを提出する必要があります。また、圧縮、難読化、ビルド処理に使うツールは、オープンソースであるか、無期限に無料で使用でき、審査担当者のコンピューター (Windows、Mac、Linux) で実行できる必要があります。審査担当者は有料ツールやウェブベースのツールを使えません。

[Extension Workshop の開発ツールに関する詳細](https://extensionworkshop.com/documentation/develop/browser-extension-development-tools/)<sup>(英語)</sup>

## サードパーティライブラリー

サードパーティライブラリーを使うと、複雑な機能を拡張機能にすばやく追加できます。拡張機能を [AMO の審査プロセス](#レビュープロセス)に提出すると、使用しているサードパーティライブラリーも審査されます。審査を円滑に進めるため、ライブラリーは必ず公式ウェブサイトまたはリポジトリーからダウンロードしてください。ライブラリーが圧縮されている場合は、ソースコードへのリンクを提供してください。また、サードパーティライブラリーを変更してはいけません。

[Extension Workshop のソースコード提出に関する詳細](https://extensionworkshop.com/documentation/publish/source-code-submission/)<sup>(英語)</sup>

## Firefox アドオン配布同意事項

Firefox のリリース版またはベータ版に拡張機能をインストールするには、署名が必要です。署名は addons.mozilla.org (AMO) で行われ、Firefox アドオン配布同意事項の条件に従います。この同意事項は、Firefox の利用体験を向上させる、十分なサポートと品質を備えたアドオンを Firefox ユーザーが利用できるようにすることを目的としています。

[Extension Workshop で同意事項を読む](https://extensionworkshop.com/documentation/publish/firefox-add-on-distribution-agreement/)<sup>(英語)</sup>

[Extension Workshop の署名に関する詳細](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/)<sup>(英語)</sup>

## レビュープロセス

拡張機能の署名を申請すると、自動審査の対象になります。自動審査で必要と判断された場合は、手動審査も行われます。自動審査に合格するまでは AMO による署名は行われず、手動審査に不合格となると署名が取り消される場合があります。審査プロセスは厳格なガイドラインに従うため、審査で問題になりそうな点を確認し、回避しやすくなっています。

[Extension Workshop の審査ポリシーとガイドライン](https://extensionworkshop.com/documentation/publish/add-on-policies/)<sup>(英語)</sup>

## AMO のおすすめブラウザー拡張機能

拡張機能を AMO に掲載すると、AMO のウェブサイト、Firefox のアドオンマネージャー、または Mozilla のほかのウェブサイトで特集として紹介されることがあります。特集する拡張機能を選ぶためのガイドラインをまとめています。これらのガイドラインに従うと、拡張機能が特集される可能性を高められます。

[Extension Workshop のおすすめ拡張機能に関する詳細](https://extensionworkshop.com/documentation/publish/recommended-extensions/)<sup>(英語)</sup>

## 学習体験を続ける

これから先のことが分かったところで、拡張機能開発の詳細に進みましょう。次の内容を確認してください。

- ブラウザー拡張機能の基本概念。まずは [JavaScript API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) の使い方を学びます。
- 拡張機能で利用できる[ユーザーインターフェイスコンポーネント](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface)のガイド。
- 拡張機能で主要なタスクを実現する方法や、JavaScript API を使う方法を紹介するハウツーガイド集。
- [JavaScript API のリファレンス](/ja/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)。
- [マニフェストキーのリファレンス](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json)。

また、Firefox 用拡張機能の作成について必要な情報を得られる Extension Workshop もご覧ください。

- [Firefox 拡張機能の機能概要](https://extensionworkshop.com/#about)<sup>(英語)</sup>
- [開発とテストに使うツールや手順の詳細](https://extensionworkshop.com/documentation/develop/)<sup>(英語)</sup>
- [addons.mozilla.org で拡張機能を公開する方法、または自分で配布する方法](https://extensionworkshop.com/documentation/publish/)<sup>(英語)</sup>
- [公開済みの拡張機能を管理する方法](https://extensionworkshop.com/documentation/manage/)<sup>(英語)</sup>
- [拡張機能を開発、使用するためのエンタープライズ向けガイド](https://extensionworkshop.com/documentation/enterprise/)<sup>(英語)</sup>
- [Firefox のテーマを開発する方法](https://extensionworkshop.com/documentation/themes/)<sup>(英語)</sup>
- [Firefox 開発者コミュニティーの詳細](https://extensionworkshop.com/community/)<sup>(英語)</sup>
