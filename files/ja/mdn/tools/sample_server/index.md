---
title: MDN のサンプルサーバー
slug: MDN/Tools/Sample_server
---

{{MDNSidebar}}

MDN は内蔵の[ライブサンプルシステム](/ja/docs/MDN/Writing_guidelines/Page_structures)を提供しており、単純な (時にはそう単純でない) コードのサンプルをその出力と共にページの中で表示する機能を提供していますが、サーバーへの通信を必要とするサンプルもあります。私たちは MDN サンプルサーバーを用意し、このような、またその他の問題も合わせて、解決することにしました。 この記事は、そのサンプルサーバーを利用するためのガイドです。

## 想定するユースケース

たいていのサンプルは組み込みの[ライブサンプルシステム](/ja/docs/MDN/Writing_guidelines/Page_structures)で表現できますが、例外もあります。サンプルサーバーの利用が必要となる理由は下記の通りです。

- サンプルにサーバー上で永続的に実行されるコードが必要、例えば WebSocket サーバーにはサーバーコンポーネントと、サンプルサーバー上のクライアントコンポーネントもあるなど。
- MDN wiki のコンテンツでは動かない技術を使ったサンプルや、読み手がコンテンツに集中する能力に影響するようなものは明らかに候補となります; これにはサウンド効果やメディアや大量のアニメーションを再生するものが含まれます。
- MDN でホストできないようなリソースにアクセスする必要があるサンプルはサンプルサーバーに置かれます。

## サンプルの参照

各サンプルのコードは [GitHub で管理されて](https://github.com/mdn/dom-examples)おり、そのすべてのサンプルの実行可能/使用可能なインストールアクセスを提供する[サーバーのインスタンス](https://mdn.github.io/dom-examples/)を持っています。

## 高度なサンプルに貢献する

[サンプルサーバー](https://mdn.github.io/dom-examples/)に置かれたサンプルに貢献するには、GitHub の [mdn/dom-examples リポジトリー](https://github.com/mdn/dom-examples)をフォークする必要があります。現在、すべてのサンプルは GitHub の同じリポジトリーにあります。

それぞれの API は、例えば [canvas](https://github.com/mdn/dom-examples/tree/master/canvas) のように、独自のディレクトリーを持っています。サンプルの作成は、その API のディレクトリーの下に、適切な名前のディレクトリーを追加して行います。例えば、「ファイルをドロップしてアップロードする機能」の使い方を示すサンプルであれば、 [drag-and-drop](https://github.com/mdn/dom-examples/tree/master/drag-and-drop) ディレクトリーにサンプルを置いてください。

### サンプルの投稿

サンプルを完成させてテストしたら、それを提出してテストを受け、最終的に本番のサンプルサーバーにインストールできるようにしましょう。この作業は、 Github の標準的な[プルリクエスト (PR)](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) プロセスを用いて行います。プルリクエストの投稿は[こちら](https://github.com/mdn/dom-examples/pulls)から行ってください。
