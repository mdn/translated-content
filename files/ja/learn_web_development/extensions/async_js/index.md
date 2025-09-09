---
title: 非同期 JavaScript
slug: Learn_web_development/Extensions/Async_JS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions")}}

このモジュールでは{{Glossary("asynchronous", "非同期")}} {{Glossary("JavaScript")}} に触れ、なぜそれが重要なのか、そして、潜在的なブロッキング処理（例えばサーバーからリソースを取得する）に効果的に対処するためにどうやって使うのかを見ていきます。

## 前提条件

非同期 JavaScript はとても高度なトピックなので、事前に [JavaScript による動的スクリプティング](/ja/docs/Learn_web_development/Core/Scripting)モジュールに取り組んでおくことをおすすめします。

> [!NOTE]
> ファイルを作成する手段のないコンピューター・タブレット・その他の端末をお使いの場合、（ほとんどの）コード例は [JS Bin](https://jsbin.com/) や [Glitch](https://glitch.com) などのオンラインエディターでも試すことができます。

## ガイド

- [非同期 JavaScript 入門](/ja/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - : この記事では**同期**プログラミングと**非同期**プログラミングとは何か、なぜ頻繁に非同期のテクニックを使う必要があるのか、歴史的に非同期関数は JavaScript でどのように実装されてきたのか、そしてその問題点が何だったのかを見ていきます。
- [プロミスの使い方](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises)
  - : ここではプロミスを紹介し、プロミスベースの API の使い方をお見せします。`async` と `await` キーワードの紹介もここで行います。
- [プロミスベースの API の実装](/ja/docs/Learn_web_development/Extensions/Async_JS/Implementing_a_promise-based_API)
  - : この記事では独自のプロミスベースの API を実装する方法を概説します。
- [ワーカー入門](/ja/docs/Learn_web_development/Extensions/Async_JS/Introducing_workers)
  - : ワーカーを使用すると、特定のタスクを別のスレッドで実行し、メインコードの応答性を維持することができます。この記事では、長時間実行される同期的な関数をワーカーを使用して書き直します。
- [アニメーションを順番に再生する](/ja/docs/Learn_web_development/Extensions/Async_JS/Sequencing_animations)
  - : この評価ではプロミスを使用して一連のアニメーションを特定の順序で再生してください。

## 関連情報

- [Asynchronous Programming](https://eloquentjavascript.net/11_async.html) (Marijn Haverbeke 氏の非常に優れたオンライン書籍 [Eloquent JavaScript](https://eloquentjavascript.net/) より)

{{NextMenu("Learn_web_development/Extensions/Async_JS/Introducing", "Learn_web_development/Extensions")}}
