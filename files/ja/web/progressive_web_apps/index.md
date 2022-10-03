---
title: プログレッシブウェブアプリ (PWA)
slug: Web/Progressive_web_apps
---

![PWA community logo](pwa.png)**プログレッシブウェブアプリ (Progressive web apps, PWA)** は、新しいウェブ API と伝統的なプログレッシブな拡張戦略を使用して、クロスプラットフォームのウェブアプリケーションにネイティブアプリと同様の使い勝手をもたらすウェブアプリのことです。プログレッシブウェブアプリは正式な標準ではありませんが、有用なデザインパターンです。 PWA は、特定のウェブ技術や技法の使用を含む、一連のアプリケーション属性を包含しているという点で AJAX や他の同様のパターンに似ていると考えることができます。この一連の文書では、これについて知るために必要なすべてをお伝えします。

ウェブアプリを PWA と呼ぶには、技術的に言えば、 [安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts) (**{{Glossary("HTTPS")}}**)、1 つ以上の[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)、[マニフェストファイル](/ja/docs/Web/Manifest)を持つべきです。

- [安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts) ({{Glossary("HTTPS")}})
  - : このウェブアプリケーションは、安全なネットワーク上で提供しなければなりません。安全なサイトにすることは、良い習慣であるだけでなく、特にユーザーが安全な取引を行う必要がある場合には、ウェブアプリケーションを信頼できるサイトとして確立することにもつながります。位置情報やサービスワーカーなどの PWA に関連する機能のほとんどは、アプリが HTTPS を使用して読み込まれた場合にのみ利用できます。
- [サービスワーカー](/ja/docs/Web/API/Service_Worker_API)
  - : サービスワーカーとは、ウェブブラウザーがネットワークのリクエストや資産のキャッシュに介入し、その方法を制御することができるスクリプトのことです。サービスワーカーを使用することで、ウェブ開発者は信頼できる高速なウェブページやオフライン操作を作成することができます。
- [マニフェストファイル](/ja/docs/Web/Manifest)
  - : アプリがユーザーにどのように表示されるかを制御し、プログレッシブウェブアプリを確実に発見できるようにする {{Glossary("JSON")}} ファイルです。アプリの名前、開始 URL、アイコン、その他ウェブサイトをアプリのような形式に変換するために必要なすべての詳細が記述されています。

## PWA の利点

PWA は発見でき、インストールでき、リンクでき、ネットワークに依存せず、プログレッシブで、再エンゲージでき、レスポンシブで、安全です。これらが何を意味するのかについては、[プログレッシブウェブアプリの利点](/ja/docs/Web/Progressive_web_apps/Introduction#advantages_of_web_applications)をお読みください。

PWA の実装方法については、 [PWA 開発者ガイド](/ja/docs/Web/Progressive_web_apps/Developer_guide)をお読みください。

## ドキュメント

**<-- 以下のものは一時的な自動生成リストで、すぐに置き換えられます -->**

{{LandingPageListSubpages}}

> **警告:** **ここから下は全て旧バージョンのままで、他のコンテンツの全面見直しに合わせて刷新していきます。**

## 基本的な PWA のガイド

以下のガイドは PWA を実装するのに必要なことを、単純な例を実行し、すべての部分がどのように動作するかを示します。

1. [プログレッシブウェブアプリの紹介](/ja/docs/Web/Progressive_web_apps/Introduction)
2. [プログレッシブウェブアプリの構造](/ja/docs/Web/Progressive_web_apps/App_structure)
3. [サービスワーカーで PWA をオフラインで動作するようにする](/ja/docs/Web/Progressive_web_apps/Offline_Service_workers)
4. [PWA をインストール可能にする方法](/ja/docs/Web/Progressive_web_apps/Installable_PWAs)
5. [通知とプッシュ通知を使用して PWA を再エンゲージ可能にする方法](/ja/docs/Web/Progressive_web_apps/Re-engageable_Notifications_Push)
6. [プログレッシブ読み込み](/ja/docs/Web/Progressive_web_apps/Loading)

## 技術ガイド

- [クライアント側ストレージ](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage) — ウェブストレージ, IndexedDB, サービスワーカーをいつ、どのように使うかを示すとても長いガイド。
- [サービスワーカーの使用](/ja/docs/Web/API/Service_Worker_API/Using_Service_Workers) — より詳しい Service Worker API のガイド。
- [IndexedDB の使用](/ja/docs/Web/API/IndexedDB_API/Using_IndexedDB) — IndexedDB の基礎、詳しく説明されている。
- [Web Storage API の使用](/ja/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) — ウェブストレージ API はシンプルにできている。
- [アプリケーションシェルアーキテクチャによるすばやいウェブアプリの読み込み](https://developers.google.com/web/updates/2015/11/app-shell) — App Shell コーディングパターンを使用して、すばやく読み込まれるアプリの作成のガイド。
- [Push API の使用](/ja/docs/Web/API/Push_API) — Web Push API の背景にある要点を学ぶ。
- [Notifications API の使用](/ja/docs/Web/API/Notifications_API/Using_the_Notifications_API) — ウェブ通知の簡単な説明。
- [レスポンシブデザインの構成要素](/ja/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) — モダンアプリレイアウトにとって重要なレスポンシブウェブデザインの基本を学ぶ。
- [モバイルファースト](/ja/docs/Web/Progressive_web_apps/Responsive/Mobile_first) — レスポンシブなアプリケーションを作る時によく、モバイルレイアウトを既定として作って、その上により広いレイアウトを作る意味がある。
- [ホーム画面追加のためのガイド](/ja/docs/Web/Progressive_web_apps/Add_to_home_screen) — アプリをホーム画面に追加 (A2HS) する利点を学ぶ。

## ツール

- [localForage](https://localforage.github.io/localForage/) — クライアントサイドのデータストレージを簡単に扱えるようにする素晴らしいシンプルな JavaScript ライブラリ、これは既定で IndexedDB を使用し、必要に応じて Web SQL/Web Storage にフォールバックする。
- [ServiceWorkerWare](https://github.com/fxos-components/serviceworkerware) — Service Worker の開発を簡単にする Express のようなマイクロフレームワーク。
- [oghliner](https://github.com/mozilla/oghliner) — テンプレートだけではなく、オフラインでウェブアプリケーションを Github Pages にデプロイするツール。
- [sw-precache](https://github.com/GoogleChrome/sw-precache) — 特定のリソースを事前にキャッシュする Service Worker のコードを生成する node のモジュール。
- [workbox](https://github.com/GoogleChrome/workbox) — 気持ち的には、より進んだキャッシングの手法と簡単なプリキャッシュを有する sw-precache の後継者。
- [upup](https://www.talater.com/upup/) — あなたのサイトが常にあなたのユーザーのために存在するようにする小さなスクリプト。
- [The service worker cookbook](https://serviceworke.rs/) — 一連の素晴らしい Service Worker/プッシュレシピ、オフラインアプリケーションの実装方法を紹介しているが、より多くの機能を持っている。
- [PWA VS Code extension](https://marketplace.visualstudio.com/items?itemName=mayeedwin.vscode-pwa) - VS Code 環境でプログレッシブウェブアプリを構築するために必要な、すべての重要なコードスニペットのコレクションです。

<!---->

- [Progressive web apps](https://developers.google.com/web/progressive-web-apps) on Google Developers
- Alex Russell による [Progressive Web Apps: Escaping Tabs Without Losing Our Soul](https://medium.com/@slightlylate/progressive-apps-escaping-tabs-without-losing-our-soul-3b93a8561955#.6czgj0myh)
- [Progressive Web Apps Check List](https://developers.google.com/web/progressive-web-apps/checklist)
- Google による [The Lighthouse Tool](https://developers.google.com/web/tools/lighthouse)
- [Tools for building progressive web apps with Angular](https://github.com/angular/mobile-toolkit).
- [Offline-capable Pokédex web site](https://pokedex.org/).
- [Hacker News readers as Progressive Web Apps](https://hnpwa.com/).
- [Progressive Web Apps: Everything You Need To Know](https://www.csschopper.com/blog/progressive-web-apps-everything-you-need-to-know/)
- [Collection of resources, codelabs and tools you need to build PWAs by the team at pwafire.org](https://pwafire.org)
- [Setting up your Progressive Web App Development environment](https://github.com/pwafire/pwadev-tips)

{{QuickLinksWithSubpages("/ja/docs/Web/Progressive_web_apps/")}}
