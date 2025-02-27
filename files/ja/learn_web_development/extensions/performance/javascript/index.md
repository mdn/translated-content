---
title: JavaScript のパフォーマンス
slug: Learn_web_development/Extensions/Performance/JavaScript
original_slug: Learn/Performance/JavaScript
l10n:
  sourceCommit: 86ee5f62f401c9ded62a4ad95c633fec5be8c2c5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}

平均的なウェブサイトでダウンロードされるバイト数のうち、画像や動画がバイト単位で70％以上を占めているのに対し、JavaScript はパフォーマンスに与える悪影響が大きいと言われています。この記事では、スクリプトに起因するパフォーマンスの問題を紹介し、JavaScript をウェブパフォーマンスのために最適化するためのヒントとコツを紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >基本的なソフトウェアのインストール</a
        >、
        <a href="/ja/docs/Learn/Getting_started_with_the_web"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        JavaScript がパフォーマンス最適化に与える影響について、また、JavaScript のファイルサイズだけがウェブパフォーマンスに与える影響ではないことを学ぶ。
      </td>
    </tr>
  </tbody>
</table>

画像や動画と同様に、パフォーマンスを向上させる最善の方法は、実際には必要でないものを除外することです。しかし、ダウンロードするすべてのバイトが同じ影響を与えるわけではありません。JavaScript のバイトは、ダウンロードし、解釈し、実行する必要があります。JavaScript はダウンロードのパフォーマンスに影響を与えます。そのダウンロードする際の影響を最小限にするためのヒントやトリックに応じたものを紹介します。しかし、JavaScript はメインスレッド、CPU、バッテリーを消費することもあります。そのため、UI が反応しなくなったり、ジャンキーに感じられたりすることがあります。それを処理するための概念も紹介します。

## ダウンロードのインパクト

ウェブアプリケーションには、たくさんの JavaScript が含まれています。多くのアプリケーションは、JavaScript フレームワーク、または複数のフレームワークで構築され、さらにいくつかの依存関係があります。A/B テスト、トラッキングピクセル、地図や対応する機能など、サードパーティーのスクリプトや API が追加されることもよくあります。この JavaScript はすべてダウンロードする必要があります。いずれは。

パフォーマンスの最適化には、次のようなことを行う必要があります。

- **必要な JavaScript の量を縮小する。** 複雑な JavaScript を必要とするいくつかの機能は、数行の JavaScript で実行することができます。他にもライブラリーを必要とする機能は開発者の使い勝手を向上させるかもしれませんが、その JavaScript はすべて必要なのでしょうか？もっと軽量なものや自前で開発できるものはないのでしょうか？ある機能は必要ないかもしれませんし、追加することで華やかさは増すかもしれませんが、性能の面でその機能のコストは見合うものでしょうか？
- **使用しないコードを削除する。**
- **JavaScript を小さなファイルに分割する。** JavaScript を重要な部分とそうでない部分にコード分割します。webpack のようなモジュールバンドルはコード分割に対応しています。
- **これらの小さなファイルを最適化する。** [Minification](/ja/docs/Glossary/Minification) は、ファイルの文字数を縮小し、JavaScript のバイト数や重さを軽減します。[Gzipping](/ja/docs/Glossary/gzip_compression) は、さらにファイルを圧縮するもので、Minification を行わない場合でも使用する必要があります。[Brotli](/ja/docs/Glossary/Brotli_compression) は Gzip に似ていて、一般的に Gzip の圧縮より優れています。

## レンダリングの影響

ウェブアプリケーションには、たくさんの JavaScript が含まれています。多くのアプリケーションは、JavaScript フレームワーク、または複数のフレームワークで構築され、さらにいくつかの依存関係があります。A/B テスト、トラッキングピクセル、地図や対応する機能など、サードパーティーのスクリプトや API が追加されることもよくあります。

## バッテリーの影響

## まとめ

メディアファイルや スクリプトを最適化することで、ウェブパフォーマンスの最適化という点ではとても有利になりますが、ウェブページに触れるものすべてがパフォーマンスに影響します。次の記事では、パフォーマンスに影響を与える可能性のある HTML の機能（パフォーマンスを向上させるために特別に作成された属性を含む）を見ていきます。

{{PreviousMenuNext("Learn/Performance/video", "Learn/Performance/HTML", "Learn/Performance")}}
