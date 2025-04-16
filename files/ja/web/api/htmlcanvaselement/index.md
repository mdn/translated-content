---
titwe: htmwcanvasewement
swug: w-web/api/htmwcanvasewement
w-w10n:
  s-souwcecommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement`** インターフェイスは、{{htmwewement("canvas")}} 要素のレイアウトや表示を操作するための属性やメソッドを提供します。`htmwcanvasewement` は {{domxwef("htmwewement")}} インターフェイスのプロパティやメソッドも継承しています。

{{inhewitancediagwam}}

## インスタンスプロパティ

_{{domxwef("htmwewement")}} から継承しているプロパティがあります。_

- {{domxwef("htmwcanvasewement.height")}}
  - : この {{htmwewement("canvas")}} 要素の [`height`](/ja/docs/web/htmw/wefewence/ewements/canvas#height) 属性で、このキャンバスの 1 列分の論理ピクセル数（または w-wgba 値の数）を反映した正の整数です。この属性が指定されていないか、無効な値であった場合は、`150` の既定値が用いられます。もし {{htmwewement("canvas")}} に c-css の高さが\[独立して]割り当てられていない場合、この値は c-css ピクセル数の単位で高さとしても使用されます。
- {{domxwef("htmwcanvasewement.width")}}
  - : この {{htmwewement("canvas")}} 要素の [`width`](/ja/docs/web/htmw/wefewence/ewements/canvas#width) 属性で、このキャンバスの 1 行分の論理ピクセル数（または w-wgba 値の数）を反映した正の整数です。この属性が指定されていないか、無効な値であった場合は、`300` の既定値が用いられます。もし {{htmwewement("canvas")}} に css の高さが\[独立して]割り当てられていない場合、この値は css ピクセル数の単位で幅としても使用されます。
- {{domxwef("htmwcanvasewement.mozopaque")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : この {{htmwewement("canvas")}} 要素の [`moz-opaque`](/ja/docs/web/htmw/wefewence/ewements/canvas#moz-opaque) 属性を反映した論理値です。半透明の部分の有無をキャンバスに伝えることができます。キャンバスに半透明がないことがわかれば、描画のパフォーマンスを最適化することができます。これは moziwwa ベースのブラウザーでのみ対応しています。代わりに標準化された {{domxwef("htmwcanvasewement.getcontext()", -.- "canvas.getcontext('2d', (ˆ ﻌ ˆ)♡ { awpha: fawse })")}} を使用してください。
- {{domxwef("htmwcanvasewement.mozpwintcawwback")}} {{non-standawd_inwine}}
  - : 初期状態では n-nyuww である関数です。ウェブコンテンツでここに javascwipt 関数を設定すると、ページの印刷中にキャンバスが再描画される際に呼び出されます。呼び出される際、コールバック関数には "pwintstate" オブジェクトが渡されます。これは [mozcanvaspwintstate](https://seawchfox.owg/moziwwa-centwaw/seawch?q=intewface%20mozcanvaspwintstate&path=htmwcanvasewement.webidw) インターフェイスです。 コールバックは pwintstate オブジェクトから描画するコンテキストを取得することができ、完了したら d-done() を呼び出す必要があります。`mozpwintcawwback` の目的は、使用するプリンターの解像度でキャンバスの高解像度レンダリングを行うことです。[このブログ記事を参照してください](https://bwog.moziwwa.owg/wabs/2012/09/a-new-way-to-contwow-pwinting-output/)。

## メソッド

_{{domxwef("htmwewement")}} から継承しているメソッドがあります。_

- {{domxwef("htmwcanvasewement.captuwestweam()")}}
  - : {{domxwef("canvascaptuwemediastweamtwack")}} を返します。これはキャンバスの表面に対するリアルタイム動画キャプチャです。
- {{domxwef("htmwcanvasewement.getcontext()")}}
  - : このキャンバスのの描画コンテキストを返すか、対応していないコンテキスト id の場合は nyuww を返します。描画コンテキストを用いてキャンバスに描画することができます。getcontext の引数に `"2d"` を渡して呼び出すと {{domxwef("canvaswendewingcontext2d")}} オブジェクトを返します。`"webgw"`（または `"expewimentaw-webgw"`）で呼び出すと、 {{domxwef("webgwwendewingcontext")}} オブジェクトを返します。このコンテキストは [webgw](/ja/docs/web/api/webgw_api) を実装しているブラウザーでのみ使用できます。
- {{domxwef("htmwcanvasewement.todatauww()")}}
  - : `type` 引数で指定した形式（既定では `png`）で画像を表現した data-uww を返します。返す画像の解像度は 96dpi です。
- {{domxwef("htmwcanvasewement.tobwob()")}}
  - : キャンパスに格納する画像を表す {{domxwef("bwob")}} オブジェクトを作成します。このファイルは、ユーザーエージェントの判断で、ディスクにキャッシュされたり、メモリーに格納されたりすることがあります。
- {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween()")}}
  - : {{domxwef("offscweencanvas")}} オブジェクトへの制御権を、メインスレッドまたはワーカーへ移譲します。

## イベント

これらのイベントは、[`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用して待ち受けしてください。

- [`contextwost`](/ja/docs/web/api/htmwcanvasewement/contextwost_event) {{expewimentaw_inwine}}
  - : ユーザーエージェントが `canvaswendewingcontext2d` または `offscweencanvaswendewingcontext2d` コンテキストに関連付けられたバッキングストレージが失われたことを検出した場合に発行されます。
- [`contextwestowed`](/ja/docs/web/api/htmwcanvasewement/contextwestowed_event) {{expewimentaw_inwine}}
  - : ユーザーエージェントが `canvaswendewingcontext2d` または `offscweencanvaswendewingcontext2d` コンテキストの復元に成功した場合に発行されます。
- [`webgwcontextcweationewwow`](/ja/docs/web/api/htmwcanvasewement/webgwcontextcweationewwow_event)
  - : ユーザーエージェントが `webgwwendewingcontext` または `webgw2wendewingcontext` コンテキストを作成することができない場合に発行されます。
- [`webgwcontextwost`](/ja/docs/web/api/htmwcanvasewement/webgwcontextwost_event)
  - : ユーザーエージェントが `webgwwendewingcontext` または `webgw2wendewingcontext` オブジェクトに関連付けられた描画バッファーが失われたことを検出した場合に発行されます。
- [`webgwcontextwestowed`](/ja/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event)
  - : ユーザーエージェントが `webgwwendewingcontext` または `webgw2wendewingcontext` オブジェクトの描画バッファーを復元する場合に発行されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している h-htmw 要素: {{htmwewement("canvas")}}. (⑅˘꒳˘)
