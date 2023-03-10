---
title: クロスブラウザーテスト
slug: Learn/Tools_and_testing/Cross_browser_testing
---

{{LearnSidebar}}

このモジュールでは、色々なウェブブラウザー間でウェブプロジェクトをテストすることに焦点を当てます。あなたのターゲット視聴者 (例 どのユーザー、ブラウザー、デバイスに一番関心があるのか?) の特定や、テストをどう動かすかや、主な問題としてさまざまな種類のコードと対面してそれらを緩和する方法や、テストを楽にして問題を解決するのに最も役立つツールが何かや、自動化を利用してテストをスピードアップする方法を見て行きます。

## 前提条件

ここで述べるツールを使ってみる前に、基本的な [HTML](/ja/docs/Learn/HTML)、[CSS](/ja/docs/Learn/CSS)、 [JavaScript](/ja/docs/Learn/JavaScript) 言語をよく理解しておきます。

## ガイド

- [はじめてのクロスブラウザーテスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : この記事ではクロスブラウザーテストの概観を提供し始めます。その過程で「ブラウザーテストとは何？」「どんな種類の問題によく出くわしますか？」「テストと、問題の特定・修正の主なアプローチは？」といった質問に答えたりします。
- [テスト実行戦略](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : 次に、テスト実行について掘り下げ、ターゲット視聴者(例、どのブラウザー、デバイス、その他のセグメントでテストを確実にするのか)を特定し、ローファイテスト戦略(ある範囲のデバイスと仮装マシンにて必要ならアドホックテストを行う)、高度なテスト戦略(専用テストアプリを使った自動化)、ユーザーグループを使ったテストまで見て行きます。
- [よくある HTML や CSS の問題を扱う](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : シーンがセットされたら、HTML と CSS コードの中でよく出くわすクロスブラウザー問題と、問題を防いだり、問題発生を修正するのに使えるツールを詳しく見ていきます。これにはコードの lint や、CSS プレフィックスを手渡したり、問題を監視するブラウザーの開発ツールを使ったり、ブラウザーサポート追加に polyfill を使ったり、レスポンシブデザインの問題に取り組んだり、といった事が含まれます
- [よくある JavaScript の問題を扱う](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : 今度はクロスブラウザー JavaScript の問題と、その修正方法を見て行きます。ここにはブラウザーの開発ツールを使って問題を突き止めて修正したり、問題を回避するのに pollyfill やライブラリーを使用したり、古いブラウザーの対応にモダン JavaScript の機能を掴んだり、といった事が含まれます。
- [よくあるアクセシビリティの問題を扱う](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : 次にアクセシビリティに注意を向けて、良くある問題の情報、簡単なテスト実施の方法、アクセシビリティの問題を見つけるための監査/自動化ツールの利用方法を提供します。
- [機能検出の実装](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : 機能検出はブラウザーがあるコードブロックをサポートしているか考えたり、サポートする/しないによって他のコードを実行したりして、いくつかのブラウザーでクラッシュ/エラー起こすことなく、常に動作の体験を提供できるようにすることです。この記事では簡単な機能検出を書く方法や、 `@supports` のようなネイティブ機能について詳しく記載します。
- [はじめての自動テスト](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : いくつかのブラウザーと端末で、一日に何度もテストを手動実行するのはつまらないし時間をつぶします。これを効率良く扱うには、自動化ツールに詳しくなるべきです。この記事では何を入手できるかや、タスクランナーの使い方や、Sauce Labs と Browser Stack のような商用ブラウザーテスト自動化ツールの使い方の基本を見て行きます。
- [テスト自動化環境をセットアップする](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : この記事では、Selenium/WebDriver や selenium-webdriver for Node のようなテストライブラリーを使って、自動化環境のインストールとテストを実行する方法を教えます。またあなたのローカルテスト環境と、以前の記事で見てきたような商用アプリとを統合する方法についても見て行きます。
