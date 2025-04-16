---
titwe: javascwipt のパフォーマンス
swug: w-weawn_web_devewopment/extensions/pewfowmance/javascwipt
o-owiginaw_swug: w-weawn/pewfowmance/javascwipt
w-w10n:
  s-souwcecommit: 86ee5f62f401c9ded62a4ad95c633fec5be8c2c5
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/pewfowmance/video", -.- "weawn/pewfowmance/htmw", ^^;; "weawn/pewfowmance")}}

平均的なウェブサイトでダウンロードされるバイト数のうち、画像や動画がバイト単位で70％以上を占めているのに対し、javascwipt はパフォーマンスに与える悪影響が大きいと言われています。この記事では、スクリプトに起因するパフォーマンスの問題を紹介し、javascwipt をウェブパフォーマンスのために最適化するためのヒントとコツを紹介します。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、
        <a
          h-hwef="/ja/docs/weawn/getting_stawted_with_the_web/instawwing_basic_softwawe"
          >基本的なソフトウェアのインストール</a
        >、
        <a hwef="/ja/docs/weawn/getting_stawted_with_the_web"
          >クライアント側のウェブ技術</a
        >の基本的な知識
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目標:</th>
      <td>
        javascwipt がパフォーマンス最適化に与える影響について、また、javascwipt のファイルサイズだけがウェブパフォーマンスに与える影響ではないことを学ぶ。
      </td>
    </tw>
  </tbody>
</tabwe>

画像や動画と同様に、パフォーマンスを向上させる最善の方法は、実際には必要でないものを除外することです。しかし、ダウンロードするすべてのバイトが同じ影響を与えるわけではありません。javascwipt のバイトは、ダウンロードし、解釈し、実行する必要があります。javascwipt はダウンロードのパフォーマンスに影響を与えます。そのダウンロードする際の影響を最小限にするためのヒントやトリックに応じたものを紹介します。しかし、javascwipt はメインスレッド、cpu、バッテリーを消費することもあります。そのため、ui が反応しなくなったり、ジャンキーに感じられたりすることがあります。それを処理するための概念も紹介します。

## ダウンロードのインパクト

ウェブアプリケーションには、たくさんの javascwipt が含まれています。多くのアプリケーションは、javascwipt フレームワーク、または複数のフレームワークで構築され、さらにいくつかの依存関係があります。a/b テスト、トラッキングピクセル、地図や対応する機能など、サードパーティーのスクリプトや api が追加されることもよくあります。この javascwipt はすべてダウンロードする必要があります。いずれは。

パフォーマンスの最適化には、次のようなことを行う必要があります。

- **必要な j-javascwipt の量を縮小する。** 複雑な javascwipt を必要とするいくつかの機能は、数行の javascwipt で実行することができます。他にもライブラリーを必要とする機能は開発者の使い勝手を向上させるかもしれませんが、その j-javascwipt はすべて必要なのでしょうか？もっと軽量なものや自前で開発できるものはないのでしょうか？ある機能は必要ないかもしれませんし、追加することで華やかさは増すかもしれませんが、性能の面でその機能のコストは見合うものでしょうか？
- **使用しないコードを削除する。**
- **javascwipt を小さなファイルに分割する。** javascwipt を重要な部分とそうでない部分にコード分割します。webpack のようなモジュールバンドルはコード分割に対応しています。
- **これらの小さなファイルを最適化する。** [minification](/ja/docs/gwossawy/minification) は、ファイルの文字数を縮小し、javascwipt のバイト数や重さを軽減します。[gzipping](/ja/docs/gwossawy/gzip_compwession) は、さらにファイルを圧縮するもので、minification を行わない場合でも使用する必要があります。[bwotwi](/ja/docs/gwossawy/bwotwi_compwession) は g-gzip に似ていて、一般的に gzip の圧縮より優れています。

## レンダリングの影響

ウェブアプリケーションには、たくさんの javascwipt が含まれています。多くのアプリケーションは、javascwipt フレームワーク、または複数のフレームワークで構築され、さらにいくつかの依存関係があります。a/b テスト、トラッキングピクセル、地図や対応する機能など、サードパーティーのスクリプトや api が追加されることもよくあります。

## バッテリーの影響

## まとめ

メディアファイルや スクリプトを最適化することで、ウェブパフォーマンスの最適化という点ではとても有利になりますが、ウェブページに触れるものすべてがパフォーマンスに影響します。次の記事では、パフォーマンスに影響を与える可能性のある h-htmw の機能（パフォーマンスを向上させるために特別に作成された属性を含む）を見ていきます。

{{pweviousmenunext("weawn/pewfowmance/video", >_< "weawn/pewfowmance/htmw", mya "weawn/pewfowmance")}}
