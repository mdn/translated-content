---
title: MDN Web Docs のリポジトリー
slug: MDN/Community/Contributing/Our_repositories
l10n:
  sourceCommit: db5093f0ffaecdf744b086751a56fc1ad591b00a
---

{{MDNSidebar}}

[MDN Web Docs](/) は、たくさんの変化する部分がある複雑なプロジェクトです。プロジェクトの様々なリポジトリーに慣れることはよい考えです。この文書は、MDN Web Docs プロジェクトの様々な部分に協力する際に必要となる、様々な形のリポジトリー (repos) を探す手助けをするためのものです。

## リポジトリーの階層

### 第 1 階層

これらのリポジトリーにあるコードは、MDN Web Docs プロジェクトの中核であり、Mozilla が所有するドメイン上で実行されます。

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

第 1 階層のプロジェクトは、少なくとも 3 名のメンバーを有し、そのうち少なくとも 2 名は管理者権限を有している必要があります。

### 第 2 階層

これらのリポジトリーは、主にコード例、MDN Web Docs 学習領域、ローカライズ、サンプルプロジェクトなどの対応するコンテンツに集約されています。例として次のようなものが挙げられます。

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

第 2 階層のプロジェクトは、少なくとも 2 名のメンバーを有し、その中には少なくとも 1 名の管理者権限を持つメンバーがいる必要があります。

### 第 3 階層

プロジェクトの計画、プロジェクト自体やコミュニティへの参加に関するドキュメント化です。例として次のようなものが挙げられます。

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects).

第 3 階層のプロジェクトは、 1 名の管理者が必要です。

## コアリポジトリー

- **コアコンテンツ**: <https://github.com/mdn/content>。 MDN Web Docs のコンテンツで最も重要なリポジトリーです。 — ここには、サイトの中核となる英語のコンテンツがすべて保存されており、ページコンテンツの標準的な変更はすべてここで行われます。
- **MDN Web Docs プラットフォーム**: <https://github.com/mdn/yari>。 これは、 MDN Web Docs プラットフォームが保存されている場所であり、高次元のページ構造やレンダリングの仕組みに変更を加えたい場合に行く場所です。
- **ブラウザー互換性データ**: <https://github.com/mdn/browser-compat-data>。ここには、リファレンスページに掲載されているブラウザーの互換性テーブルを生成するためのデータが保存されています ([例](/ja/docs/Web/HTML/Element/progress#browser_compatibility))。もしあなたがウェブ機能のブラウザーの互換性に関する情報を保有している、あるいは調査や実験をする意思と能力があるならば、MDN の[ブラウザー互換性データ](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md)の更新に協力することができます。
- **インタラクティブ例**: <https://github.com/mdn/interactive-examples>。このリポジトリーには、レンダリングコードとサンプルコードブロックが格納されています。これらは、多くのリファレンスページ ([例](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis)) の上部にある、編集やコピーが可能な素敵な例を生み出します。これらの例はその場で編集できます。
- **Bob** 別名 Builder of Bits: <https://github.com/mdn/bob>
  このリポジトリーは、私たちの多くのリファレンスページの先頭で得られる、編集可能でコピー可能な良い例を生成するレンダリングコードを格納されます ([例](/ja/docs/Web/JavaScript/Reference/Global_Objects/globalThis))。
- **翻訳コンテンツ**: <https://github.com/mdn/translated-content>。ここは、ローカライズされたコンテンツのための場所です。[活発にメンテナンスされているロケール](https://github.com/mdn/translated-content#locales)のいずれかにページを翻訳するのを協力したいなら、ここで行ってください。
- **ワークフロー**: <https://github.com/mdn/workflows>
  MDN Web Docs リポジトリーで使用するための再利用可能な GitHub Actions のコレクションが増え続けています。

## コード例

### コード例とデモ

[//]: # "TODO: UPDATE WITH REPO TRIAGE"

MDN Web Docs の GitHub org には、膨大な数の例のリポジトリーがあります。これらは一般に独立したコード例を格納し、よくページからリンクされますが、時折、`\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}` のようなマクロ呼び出しを使用してページにこれらの例の一つを見かけます。

指定されたページのコードを更新する場合は、対応する例のリポジトリーも更新する必要があることを常に覚えておいてください。

- [**dom-examples**](https://github.com/mdn/dom-examples)
- [**css-examples**](https://github.com/mdn/css-examples)
- [**webaudio-examples**](https://github.com/mdn/webaudio-examples)
- [**webassembly-examples**](https://github.com/mdn/webassembly-examples)
- [**indexeddb-examples**](https://github.com/mdn/indexeddb-examples)
- [**js-examples**](https://github.com/mdn/js-examples)
- [**html-examples**](https://github.com/mdn/html-examples)
- [**web-components-examples**](https://github.com/mdn/web-components-examples)
- [**webextension-examples**](https://github.com/mdn/webextensions-examples)
- [**pwa-examples**](https://github.com/mdn/pwa-examples)
- [**houdini-examples**](https://github.com/mdn/houdini-examples)
- [**headless-examples**](https://github.com/mdn/headless-examples)
- [**perf-examples**](https://github.com/mdn/perf-examples)
- [**devtools-examples**](https://github.com/mdn/devtools-examples)
