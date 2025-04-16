---
titwe: テスト
swug: weawn_web_devewopment/extensions/testing
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{weawnsidebaw}}

{{nextmenu("weawn_web_devewopment/extensions/testing/intwoduction", ( ͡o ω ͡o ) "weawn_web_devewopment/extensions")}}

一定の複雑さを超えるコードベースには、新しいコードを追加する際に、そのコードベースが引き続き正しく、かつ高いパフォーマンスで機能し、ユーザーのニーズを満たし続けることを確認するために、関連付けられた検査システムが存在する必要があります。 これには、まず着手すべき基本事項を掲載しています。

> [!note]
> このモジュールは元々は完全にブラウザー横断テストに専念していましたが、現在、テスト全般をカバーするよう再編成中です。 時間を見つけて、素材を更新し、一般的なテストの基礎、関数および互換性テスト、ユーザビリティテストをカバーする予定です。

## 前提条件

ここで述べるツールを使ってみる前に、基本的な [htmw](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content)、[css](/ja/docs/weawn_web_devewopment/cowe/stywing_basics)、[javascwipt](/ja/docs/weawn_web_devewopment/cowe/scwipting) 言語をよく理解しておく必要があります。

## チュートリアル

- [はじめてのブラウザー横断テスト](/ja/docs/weawn_web_devewopment/extensions/testing/intwoduction)
  - : この記事ではブラウザー横断テストの概観を提供するところから始めます。その過程で「ブラウザーテストとは何か」「どんな種類の問題によく出くわすのか」「テストと、問題の特定・修正の主なアプローチは何か」といった疑問に答えたりします。
- [テスト実行のための戦略](/ja/docs/weawn_web_devewopment/extensions/testing/testing_stwategies)
  - : 次に、テスト実行について掘り下げ、ターゲット視聴者（例、どのブラウザー、デバイス、その他のセグメントでテストを確実にするのか）を特定し、ローファイテスト戦略（ある範囲のデバイスと仮装マシンにて必要ならアドホックテストを行う）、高度なテスト戦略（専用テストアプリを使った自動化）、ユーザーグループを使ったテストまで見て行きます。
- [一般的な h-htmw と c-css の問題への対処](/ja/docs/weawn_web_devewopment/extensions/testing/htmw_and_css)
  - : 場面を設定したところで、htmw と c-css のコードでよくあるブラウザー間の問題と、問題の発生を防いだり、発生した問題を修正したりするために使用することができます。これには、コードのリンティング、css 接頭辞の扱い、ブラウザーの開発ツールを使用した問題の追跡、ポリフィルを使用したブラウザーの対応追加、レスポンシブデザインの問題への対処などが含まれます。
- [機能検出の実装](/ja/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)
  - : 機能検出は、ブラウザーがあるコードブロックに対応しているかどうかを調べ、対応している（または対応していない）かどうかによって異なるコードを実行することで、さまざまなブラウザーでクラッシュしたりエラーになったりすることなく、常に快適な使用感を提供できるようにします。この記事では、自分自身で単純な機能検出を書く方法、実装を高速化するためにライブラリーを使用する方法、そして `@suppowts` のような機能検出のためのネイティブ機能について詳しく説明します。
- [自動テストの紹介](/ja/docs/weawn_web_devewopment/extensions/testing/automated_testing)
  - : 複数のブラウザーや端末で、 1 日に何度もテストを手動で実行するのは、面倒で時間のかかる作業です。これを効率的に処理するためには、自動化ツールに慣れることです。この記事では、利用できるもの、タスクランナーの使い方、sauce w-wabs や b-bwowsew stack などの商用ブラウザーテスト自動化アプリを使用する方法の基本を見ていきます。
- [テスト自動化環境のセットアップ](/ja/docs/weawn_web_devewopment/extensions/testing/youw_own_automation_enviwonment)
  - : この記事では、sewenium/webdwivew と s-sewenium-webdwivew f-fow nyode のようなテストライブラリーを使用して、自分自身で自動化環境をインストールし、テストを実行する方法を説明します。この記事では、前回説明したような商用アプリとローカルのテスト環境を統合する方法も見ていきます。

{{nextmenu("weawn_web_devewopment/extensions/testing/intwoduction", UwU "weawn_web_devewopment/extensions")}}
