---
title: クロスブラウザテスト
slug: Learn/Tools_and_testing/Cross_browser_testing
tags:
  - Accessibility
  - Automation
  - Beginner
  - CSS
  - CodingScripting
  - HTML
  - JavaScript
  - Landing
  - Learn
  - Module
  - Testing
  - Tools
  - cross browser
translation_of: Learn/Tools_and_testing/Cross_browser_testing
---
<div>{{LearnSidebar}}</div>

<p class="summary">このモジュールでは、色々なウェブブラウザー間でウェブプロジェクトをテストすることに焦点を当てます。あなたのターゲット視聴者 (例 どのユーザー、ブラウザー、デバイスに一番関心があるのか?) の特定や、テストをどう動かすかや、主な問題としてさまざまな種類のコードと対面してそれらを緩和する方法や、テストを楽にして問題を解決するのに最も役立つツールが何かや、自動化を利用してテストをスピードアップする方法を見て行きます。</p>

<h2 id="前提条件">前提条件</h2>

<p>ここで述べるツールを使ってみる前に、基本的な <a href="/ja/docs/Learn/HTML">HTML</a>、<a href="/ja/docs/Learn/CSS">CSS</a>、 <a href="/ja/docs/Learn/JavaScript">JavaScript</a> 言語をよく理解しておきます。</p>

<h2 id="ガイド">ガイド</h2>

<dl>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">はじめてのクロスブラウザーテスト</a></dt>
 <dd>この記事ではクロスブラウザーテストの概観を提供し始めます。その過程で「ブラウザーテストとは何？」「どんな種類の問題によく出くわしますか？」「テストと、問題の特定・修正の主なアプローチは？」といった質問に答えたりします。</dd>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies">テスト実行戦略</a></dt>
 <dd>次に、テスト実行について掘り下げ、ターゲット視聴者(例、どのブラウザー、デバイス、その他のセグメントでテストを確実にするのか)を特定し、ローファイテスト戦略(ある範囲のデバイスと仮装マシンにて必要ならアドホックテストを行う)、高度なテスト戦略(専用テストアプリを使った自動化)、ユーザーグループを使ったテストまで見て行きます。</dd>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS">よくあるHTML や</a><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS"> CSS の問題を扱う</a></dt>
 <dd>シーンがセットされたら、HTMLとCSSコードの中でよく出くわすクロスブラウザー問題と、問題を防いだり、問題発生を修正するのに使えるツールを詳しく見ていきます。これにはコードの lint や、CSSプレフィックスを手渡したり、問題を監視するブラウザーの開発ツールを使ったり、ブラウザーサポート追加に polyfill を使ったり、レスポンシブデザインの問題に取り組んだり、といった事が含まれます</dd>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript">よくある JavaScript の問題を扱う</a></dt>
 <dd>今度はクロスブラウザー JavaScript の問題と、その修正方法を見て行きます。ここにはブラウザーの開発ツールを使って問題を突き止めて修正したり、問題を回避するのに pollyfill やライブラリーを使用したり、古いブラウザーの対応にモダン JavaScript の機能を掴んだり、といった事が含まれます。</dd>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility">よくあるアクセシビリティの問題を扱う</a></dt>
 <dd>次にアクセシビリティに注意を向けて、良くある問題の情報、簡単なテスト実施の方法、アクセシビリティの問題を見つけるための監査/自動化ツールの利用方法を提供します。</dd>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection">機能検出の実装</a></dt>
 <dd>機能検出はブラウザーがあるコードブロックをサポートしているか考えたり、サポートする/しないによって他のコードを実行したりして、いくつかのブラウザーでクラッシュ/エラー起こすことなく、常に動作の体験を提供できるようにすることです。この記事では簡単な機能検出を書く方法や、 <code>@supports</code> のようなネイティブ機能について詳しく記載します。</dd>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing">はじめての自動テスト</a></dt>
 <dd>いくつかのブラウザーと端末で、一日に何度もテストを手動実行するのはつまらないし時間をつぶします。これを効率良く扱うには、自動化ツールに詳しくなるべきです。この記事では何を入手できるかや、タスクランナーの使い方や、Sauce Labs と Browser Stack のような商用ブラウザーテスト自動化ツールの使い方の基本を見て行きます。</dd>
 <dt><a href="/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment">テスト自動化環境をセットアップする</a></dt>
 <dd>この記事では、Selenium/WebDriver や selenium-webdriver for Node のようなテストライブラリーを使って、自動化環境のインストールとテストを実行する方法を教えます。またあなたのローカルテスト環境と、以前の記事で見てきたような商用アプリとを統合する方法についても見て行きます。</dd>
</dl>
