---
title: テスト
slug: Learn_web_development/Extensions/Testing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}

一定の複雑さを超えるコードベースには、新しいコードを追加する際に、そのコードベースが引き続き正しく、かつ高いパフォーマンスで機能し、ユーザーのニーズを満たし続けることを確認するために、関連付けられた検査システムが存在する必要があります。 これには、まず着手すべき基本事項を掲載しています。

> [!NOTE]
> このモジュールは元々は完全にブラウザー横断テストに専念していましたが、現在、テスト全般をカバーするよう再編成中です。 時間を見つけて、素材を更新し、一般的なテストの基礎、関数および互換性テスト、ユーザビリティテストをカバーする予定です。

## 前提条件

ここで述べるツールを使ってみる前に、基本的な [HTML](/ja/docs/Learn_web_development/Core/Structuring_content)、[CSS](/ja/docs/Learn_web_development/Core/Styling_basics)、[JavaScript](/ja/docs/Learn_web_development/Core/Scripting) 言語をよく理解しておく必要があります。

## チュートリアル

- [はじめてのブラウザー横断テスト](/ja/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : この記事ではブラウザー横断テストの概観を提供するところから始めます。その過程で「ブラウザーテストとは何か」「どんな種類の問題によく出くわすのか」「テストと、問題の特定・修正の主なアプローチは何か」といった疑問に答えたりします。
- [テスト実行のための戦略](/ja/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : 次に、テスト実行について掘り下げ、ターゲット視聴者（例、どのブラウザー、デバイス、その他のセグメントでテストを確実にするのか）を特定し、ローファイテスト戦略（ある範囲のデバイスと仮装マシンにて必要ならアドホックテストを行う）、高度なテスト戦略（専用テストアプリを使った自動化）、ユーザーグループを使ったテストまで見て行きます。
- [一般的な HTML と CSS の問題への対処](/ja/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : 場面を設定したところで、HTML と CSS のコードでよくあるブラウザー間の問題と、問題の発生を防いだり、発生した問題を修正したりするために使用することができます。これには、コードのリンティング、CSS 接頭辞の扱い、ブラウザーの開発ツールを使用した問題の追跡、ポリフィルを使用したブラウザーの対応追加、レスポンシブデザインの問題への対処などが含まれます。
- [機能検出の実装](/ja/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : 機能検出は、ブラウザーがあるコードブロックに対応しているかどうかを調べ、対応している（または対応していない）かどうかによって異なるコードを実行することで、さまざまなブラウザーでクラッシュしたりエラーになったりすることなく、常に快適な使用感を提供できるようにします。この記事では、自分自身で単純な機能検出を書く方法、実装を高速化するためにライブラリーを使用する方法、そして `@supports` のような機能検出のためのネイティブ機能について詳しく説明します。
- [自動テストの紹介](/ja/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : 複数のブラウザーや端末で、 1 日に何度もテストを手動で実行するのは、面倒で時間のかかる作業です。これを効率的に処理するためには、自動化ツールに慣れることです。この記事では、利用できるもの、タスクランナーの使い方、Sauce Labs や Browser Stack などの商用ブラウザーテスト自動化アプリを使用する方法の基本を見ていきます。
- [テスト自動化環境のセットアップ](/ja/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : この記事では、Selenium/WebDriver と selenium-webdriver for Node のようなテストライブラリーを使用して、自分自身で自動化環境をインストールし、テストを実行する方法を説明します。この記事では、前回説明したような商用アプリとローカルのテスト環境を統合する方法も見ていきます。

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}
