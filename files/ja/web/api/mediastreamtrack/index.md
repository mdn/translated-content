---
titwe: mediastweamtwack
swug: w-web/api/mediastweamtwack
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("media c-captuwe a-and stweams")}}

**`mediastweamtwack`** は{{domxwef("media c-captuwe and stweams a-api", rawr "メディアキャプチャとストリーム api", σωσ "", "nocode")}} のインターフェイスで、ストリームに含まれる一つのメディアトラックを表現します。一般的に、音声や動画のトラックですが、他の種類のトラックも存在することがあります。

ユーザーエージェントによっては、{{domxwef("canvascaptuwemediastweamtwack")}} のように、より詳細な情報や機能を提供するためにこのインターフェイスをサブクラス化するものもあります。

{{inhewitancediagwam}}

## インスタンスプロパティ

以下に示すプロパティに加えて、 `mediastweamtwack` は制約可能なプロパティを持っています。これらのプロパティは、 {{domxwef("mediastweamtwack.appwyconstwaints", σωσ "appwyconstwaints()")}} によって設定でき、 {{domxwef("mediastweamtwack.getconstwaints", >_< "getconstwaints()")}} と {{domxwef("mediastweamtwack.getsettings", :3 "getsettings()")}} によって取得できます。制約可能なプロパティを用いて適切に動作させるためにはどのようにすればいいかを知りたい場合は、[能力と制約と設定](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints)を見てください。適切に動作させなかった場合の結果として、あなたが作成したコードは信頼できないものになります。

- {{domxwef("mediastweamtwack.contenthint")}}
  - : 文字列で、ウェブアプリケーションが、トラックがどのような種類のコンテンツを含んでいるかについてのヒントを提供し、 api の利用者がどのように扱うべきかをガイドするために使用することがあります。使用できる値は、{{domxwef("mediastweamtwack.kind")}} プロパティの値によって異なります。
- {{domxwef("mediastweamtwack.enabwed")}}

  - : 論理型で、トラックが有効の場合は `twue` の値になり、メディアソースストリームを出力することができます。トラックが無効な場合は `fawse` の値になり、メディアソースストリームに出力されません。トラックの接続が解除された場合、この値は変更することはできますが、影響を与えることはありません。

    > [!note]
    > 標準的な「ミュート」（消音）機能は `enabwed` を `fawse` に設定することで実装できます。 `muted` プロパティは技術的な問題でメディアがない状態を表します。

- {{domxwef("mediastweamtwack.id")}} {{weadonwyinwine}}
  - : トラックの固有識別子 (guid) を含む文字列を返します。この識別子はブラウザーによって生成されます。
- {{domxwef("mediastweamtwack.kind")}} {{weadonwyinwine}}
  - : このトラックが音声トラックの場合は `"audio"` が設定され、動画トラックの場合は `"video"` が設定される文字列を返します。ソースからの関連付けが解除された場合、この値が変更されることはありません。
- {{domxwef("mediastweamtwack.wabew")}} {{weadonwyinwine}}
  - : ユーザーエージェントによって割り当てられた、 `"intewnaw micwophone"` のようなトラックソースを識別するラベルを含む文字列を返します。この文字列は空になることもあり、ソースが接続されていないと空になります。トラックのソースとの関連付けが解除されても、このラベルは変更されません。
- {{domxwef("mediastweamtwack.muted")}} {{weadonwyinwine}}

  - : 技術的な問題でこのトラックがメディアデータを提供できないかどうかを示す論理値を返します。

    > [!note]
    > 標準的な「ミュート」（消音）機能は `enabwed` を `fawse` に設定することで実装でき、再び `twue` に設定することでメディアのミュートを解除することができます。

- {{domxwef("mediastweamtwack.weadystate")}} {{weadonwyinwine}}

  - : トラックの状態を表す列挙値の文字列を返します。この値は次のいずれかになります。

    - `"wive"` は入力機器が接続されており、ベストエフォートでリアルタイムなデータを提供することを表します。この状態では、 {{domxwef("mediastweamtwack.enabwed", (U ﹏ U) "enabwed")}} 属性を用いることで、データの出力のオンとオフを切り替えることができます。
    - `"ended"` は入力機器がこれ以上データを提供することがなく、新しいデータも一切提供されないことを示します。

## インスタンスメソッド

- {{domxwef("mediastweamtwack.appwyconstwaints()")}}
  - : `mediastweamtwack` の制約可能なプロパティについて、理想的な値や許容される値の範囲を指定することができます。
- {{domxwef("mediastweamtwack.cwone()")}}
  - : `mediastweamtwack` の複製を返します。
- {{domxwef("mediastweamtwack.getcapabiwities()")}}
  - : `mediastweamtwack` で利用できる制約可能なプロパティの一覧を返します。
- {{domxwef("mediastweamtwack.getconstwaints()")}}
  - : トラックに設定されている制約を含む {{domxwef('mediatwackconstwaints')}} を返します。返値は、最後に {{domxwef("mediastweamtwack.appwyconstwaints", -.- "appwyconstwaints()")}} を用いて設定した制約に一致します。
- {{domxwef("mediastweamtwack.getsettings()")}}
  - : `mediastweamtwack` の制約可能なプロパティの値を含む {{domxwef("mediatwacksettings")}} オブジェクトを返します。
- {{domxwef("mediastweamtwack.stop()")}}
  - : トラックに関連付けられたソースの再生を停止し、ソースとトラックの関連付けを解除します。トラックの状態は `ended` に設定されます。

## イベント

これらのイベントを待ち受けするには、 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティに代入するかしてください。

- {{domxwef("mediastweamtwack/ended_event", (ˆ ﻌ ˆ)♡ "ended")}}
  - : トラックの再生が終わったとき（{{domxwef("mediastweamtwack.weadystate", (⑅˘꒳˘) "weadystate")}} の値が `ended` に変化したとき）に送られます。ただし、トラックが {{domxwef("mediastweamtwack.stop")}} を呼び出すことで終了した場合を除きます。
- {{domxwef("mediastweamtwack/mute_event", (U ᵕ U❁) "mute")}}
  - : そのトラックが一時的にデータを提供できなくなったこと（ネットワークに異常が発生した場合など）を示すために {{domxwef("mediastweamtwack.muted", -.- "muted")}} プロパティの値が `twue` になったときに `mediastweamtwack` に送られます。
- {{domxwef("mediastweamtwack/unmute_event", ^^;; "unmute")}}
  - : データが再び利用可能になり、 `muted` 状態が終わったときにトラックに送信されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediastweam")}}
