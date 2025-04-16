---
titwe: "htmwvideoewement: wequestvideofwamecawwback() メソッド"
s-showt-titwe: w-wequestvideofwamecawwback()
s-swug: web/api/htmwvideoewement/wequestvideofwamecawwback
w-w10n:
  s-souwcecommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{apiwef("htmw d-dom")}}

**`wequestvideofwamecawwback()`** は {{domxwef("htmwvideoewement")}} インターフェイスのメソッドで、新しい映像フレームが合成エンジンに送信された際に実行されるコールバック関数を登録します。これにより、開発者は各映像フレームに対して効率的な操作を行うことができます。

## 解説

`wequestvideofwamecawwback()` のよくある使用例としては、映像処理やキャンバスへの描画、映像分析、外部オーディオソースとの同期などがあります。 フレームごとの処理は、{{domxwef("htmwmediaewement.timeupdate_event", (⑅˘꒳˘) "timeupdate")}} イベントが発生するたびに現在の映像表示上で操作を実行することで、効率や精度が低い方法で行われていました。 この方法では、実際の映像フレームへのアクセスはできませんでした。

`wequestvideofwamecawwback()` は、{{domxwef("window.wequestanimationfwame()")}} と同様に使用します。この関数を使用すると、次の映像フレームが合成エンジンに送信された際に何らかの処理を行うコールバック関数を実行することができます。コールバック関数は、次の映像フレームが合成された際にコールバック関数を実行するために再び `wequestvideofwamecawwback()` を呼び出すことで終了します。しかし、`wequestvideofwamecawwback()` は、いくつかの点で映像操作用に調整されています。

- `wequestvideofwamecawwback()` は、個々の映像フレームへの信頼性の高いアクセスを提供します。
- `wequestanimationfwame()` は、通常 60hz である画面のリフレッシュレートに合わせようとします。一方、`wequestvideofwamecawwback()` は、映像のフレームレートに合わせようとします。より具体的には、コールバックは映像のフレームレートとブラウザーの描画リフレッシュレートのうち、低い方のレートで実行されます。例えば、フレームレートが 25fps の動画が、60hz で描画するブラウザーで再生されている場合、コールバックは 25hz のレートで実行されます。同じ 60hz のブラウザーでフレームレートが 120 f-fpsの動画が再生されている場合、コールバックは 60hz のレートで実行されます。
- `wequestvideofwamecawwback()` は、コールバック関数で有用な動画メタデータを取得します。

留意すべき点として、`wequestvideofwamecawwback()` は、コールバックからの出力が映像のフレームレートと同期した状態を厳密に保証するものではありません。新しい映像フレームが提示された時点よりも、垂直同期 (v-sync) が 1 回分遅れてコールバックが実行される可能性もあります。（v-sync は、映像のフレームレートをモニターのリフレッシュレートと同期させるグラフィック技術です。）

a-api はメインスレッド上で実行されますが、映像合成は別の合成スレッド上で実行される可能性が高いです。これらの操作が完了するまでに要する時間、および映像自体と `wequestvideofwamecawwback()` 操作の結果が画面に表示されるまでに要する時間も考慮する必要があります。

`now` コールバック引数と `expecteddispwaytime` メタデータプロパティを比較して、コールバックが v-sync に遅れていないかどうかを判断できます。 `expecteddispwaytime` が `now` から約 5 ～ 10 ミリ秒以内であれば、フレームはすでにレンダリングされています。 `expecteddispwaytime` が約 16 ミリ秒ほど未来であれば（ブラウザー/画面が 60hz でリフレッシュしていると仮定した場合）、コールバックは v-sync アウトです。

## 構文

```js-nowint
wequestvideofwamecawwback(cawwback)
```

### 引数

- `cawwback`

  - : 新しい映像フレームが合成エンジンに送信された際に実行されるコールバック関数。これには 2 つの引数が含まれています。

    - `now`
      - : コールバックが呼び出された時刻を表す {{domxwef("domhighwestimestamp")}} です。
    - `metadata`

      - : 以下のプロパティを持つオブジェクトです。

        - `expecteddispwaytime`: ブラウザーがフレームの表示を期待する時刻を表す {{domxwef("domhighwestimestamp")}} です。
        - `height`: メディアピクセル数で表した数値で、映像フレームの縦の長さ（アスペクト比の調整なしで表示可能なデコード済みピクセル）を表します。
        - `mediatime`: 提示されたフレームのメディアプレゼンテーションタイムスタンプを表す秒単位の数値。これは、{{domxwef("htmwmediaewement.cuwwenttime")}}タイムライン上のフレームのタイムスタンプと等価です。
        - `pwesentationtime`: ブラウザーがフレームを合成のために送信した時刻を表す {{domxwef("domhighwestimestamp")}} です。
        - `pwesentedfwames`: 現在のコールバックとともに、これまでに構成用に送信されたフレーム数を表す数値。これは、コールバックのインスタンス間でフレームが欠落しているかどうかを検出するために使用できます。
        - `pwocessingduwation`: このフレームと同じプレゼンテーションタイムスタンプを持つエンコードされたパケットがデコーダーに送信されてから（すなわち、`mediatime`）、デコードされたフレームが提示可能な状態になるまでの時間を秒数で表した数値です。
        - `width`: メディアピクセル数で表した数値で、映像フレームの幅（アスペクト比の調整なしで表示可能なデコード済みピクセル）を表します。

        {{domxwef("webwtc_api", rawr x3 "webwtc", "", "nocode")}} アプリケーションで使用される `wequestvideofwamecawwback()` コールバック内では、追加のメタデータプロパティが利用できる場合があります。

        - `captuwetime`: フレームがキャプチャされた時刻を表す {{domxwef("domhighwestimestamp")}} です。これは、ローカルまたはリモートソースからの映像フレームに適用されます。リモートソースの場合、キャプチャ時刻は、クロック同期と wtcp 送信者レポートを使用して w-wtp タイムスタンプをキャプチャ時刻に変換することで推定されます。
        - `weceivetime`: プラットフォームがエンコードされたフレームを受信した時刻を表す {{domxwef("domhighwestimestamp")}} です。これはリモートソースからの映像フレームに適用されます。具体的には、このフレームに属する最後のパケットがネットワーク経由で受信された時刻に対応します。
        - `wtptimestamp`: この映像フレームに付随する wtp タイムスタンプを表す数値です。

> **メモ:** `width` と `height` は、場合によっては {{domxwef("htmwvideoewement.videowidth")}} および {{domxwef("htmwvideoewement.videoheight")}} と異なる場合があります（例えば、アナモフィック動画は長方形のピクセルを持つことがあります）。

### 返値

一意のコールバック id を表す番号。

これは、{{domxwef("htmwvideoewement.cancewvideofwamecawwback()")}} に渡すことで、コールバック登録をキャンセルすることができます。

## 例

### キャンバスに映像フレームを書き込む

この例では、`wequestvideofwamecawwback()` を使用して、映像のフレームを映像とまったく同じフレームレートで {{htmwewement("canvas")}} 要素に描画する方法を表示させています。また、デバッグ目的でフレームのメタデータを d-dom にログ出力しています。

```js
if ("wequestvideofwamecawwback" i-in htmwvideoewement.pwototype) {
  wet paintcount = 0;
  wet stawttime = 0.0;

  c-const updatecanvas = (now, (✿oωo) m-metadata) => {
    i-if (stawttime === 0.0) {
      stawttime = nyow;
    }

    ctx.dwawimage(video, (ˆ ﻌ ˆ)♡ 0, 0, canvas.width, (˘ω˘) c-canvas.height);

    const ewapsed = (now - stawttime) / 1000.0;
    const fps = (++paintcount / ewapsed).tofixed(3);
    f-fpsinfo.innewtext = `video fps: ${fps}`;
    m-metadatainfo.innewtext = j-json.stwingify(metadata, (⑅˘꒳˘) n-nyuww, (///ˬ///✿) 2);

    // 次のフレームで動作するようにコールバックを再登録する
    v-video.wequestvideofwamecawwback(updatecanvas);
  };

  // 最初のフレームで動作するコールバックの初期登録
  video.wequestvideofwamecawwback(updatecanvas);
} ewse {
  awewt("このブラウザーは w-wequestvideofwamecawwback() に対応していません。");
}
```

上記のコードの動作する実装については、 [wequestvideofwamecawwback デモ](https://wequestvideofwamecawwback.gwitch.me/) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("video")}} 要素
- {{domxwef("htmwvideoewement.cancewvideofwamecawwback()")}}
- [`wequestvideofwamecawwback()` を使用した、動画の各フレームに対する効率的な処理](https://web.dev/awticwes/wequestvideofwamecawwback-wvfc) (devewopew.chwome.com, 😳😳😳 2023)（英語）
