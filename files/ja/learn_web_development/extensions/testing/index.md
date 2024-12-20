---
title: ブラウザー横断テスト
slug: Learn_web_development/Extensions/Testing
original_slug: Learn/Tools_and_testing/Cross_browser_testing
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

このモジュールでは、色々なウェブブラウザー間でウェブプロジェクトをテストすることに焦点を当てます。あなたのターゲット視聴者（例 どのユーザー、ブラウザー、デバイスに一番関心があるのか?）の特定や、テストをどう動かすかや、主な問題としてさまざまな種類のコードと対面してそれらを緩和する方法や、テストを楽にして問題を解決するのに最も役立つツールが何かや、自動化を利用してテストをスピードアップする方法を見て行きます。

## 前提条件

ここで述べるツールを使ってみる前に、基本的な [HTML](/ja/docs/Learn/HTML)、[CSS](/ja/docs/Learn/CSS)、[JavaScript](/ja/docs/Learn/JavaScript) 言語をよく理解しておく必要があります。

## ガイド

- [はじめてのブラウザー横断テスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : この記事ではブラウザー横断テストの概観を提供するところから始めます。その過程で「ブラウザーテストとは何か」「どんな種類の問題によく出くわすのか」「テストと、問題の特定・修正の主なアプローチは何か」といった疑問に答えたりします。
- [テスト実行のための戦略](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : 次に、テスト実行について掘り下げ、ターゲット視聴者（例、どのブラウザー、デバイス、その他のセグメントでテストを確実にするのか）を特定し、ローファイテスト戦略（ある範囲のデバイスと仮装マシンにて必要ならアドホックテストを行う）、高度なテスト戦略（専用テストアプリを使った自動化）、ユーザーグループを使ったテストまで見て行きます。
- [一般的な HTML と CSS の問題への対処](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : 場面を設定したところで、HTML と CSS のコードでよくあるブラウザー間の問題と、問題の発生を防いだり、発生した問題を修正したりするために使用することができます。これには、コードのリンティング、CSS 接頭辞の扱い、ブラウザーの開発ツールを使用した問題の追跡、ポリフィルを使用したブラウザーの対応追加、レスポンシブデザインの問題への対処などが含まれます。
- [よくある JavaScript の問題の扱い](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : これで、よくあるブラウザー間の JavaScript 問題と、それを修正する方法を見ていきます。この情報には、問題を追跡し修正するためにブラウザー開発ツールを使用すること、問題を回避するためにポリフィルやライブラリーを使用すること、現行の JavaScript 機能を古いブラウザーで動作させること、などが記載されています。
- [よくあるアクセシビリティの問題を扱う](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : 次にアクセシビリティに注目し、一般的な問題、単純なテストの方法、アクセシビリティの問題を探すための監査/自動化ツールの使用方法に関する情報を提供します。
- [機能検出の実装](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : 機能検出は、ブラウザーがあるコードブロックに対応しているかどうかを調べ、対応している（または対応していない）かどうかによって異なるコードを実行することで、さまざまなブラウザーでクラッシュしたりエラーになったりすることなく、常に快適な使用感を提供できるようにします。この記事では、自分自身で単純な機能検出を書く方法、実装を高速化するためにライブラリーを使用する方法、そして `@supports` のような機能検出のためのネイティブ機能について詳しく説明します。
- [自動テストの紹介](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : 複数のブラウザーや端末で、 1 日に何度もテストを手動で実行するのは、面倒で時間のかかる作業です。これを効率的に処理するためには、自動化ツールに慣れることです。この記事では、利用できるもの、タスクランナーの使い方、Sauce Labs や Browser Stack などの商用ブラウザーテスト自動化アプリを使用する方法の基本を見ていきます。
- [テスト自動化環境のセットアップ](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : この記事では、Selenium/WebDriver と selenium-webdriver for Node のようなテストライブラリーを使用して、自分自身で自動化環境をインストールし、テストを実行する方法を説明します。この記事では、前回説明したような商用アプリとローカルのテスト環境を統合する方法も見ていきます。
