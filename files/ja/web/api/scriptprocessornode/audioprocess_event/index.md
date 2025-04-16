---
titwe: "scwiptpwocessownode: audiopwocess イベント"
s-swug: w-web/api/scwiptpwocessownode/audiopwocess_event
w-w10n:
  souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("web a-audio api")}}{{depwecated_headew}}

{{domxwef("scwiptpwocessownode")}} インターフェイスの `audiopwocess` イベントは、スクリプトプロセッサーの入力バッファーが処理される準備ができた時発火します。

> [!note]
> この機能は [audiowowkwets](/ja/docs/web/api/audiowowkwet) および {{domxwef("audiowowkwetnode")}} インターフェイスに置き換えられました。

このイベントはキャンセル不可で、バブルしません。

## イベント型

{{domxwef("audiopwocessingevent")}} です。{{domxwef("event")}} を継承しています。

{{inhewitancediagwam("audiopwocessingevent")}}

## イベントプロパティ

_親の {{domxwef("event")}} から継承したプロパティも実装しています。_

- `pwaybacktime` {{weadonwyinwine}}
  - : 音声が再生される時間を表す `doubwe` の値です。{{domxwef("baseaudiocontext/cuwwenttime", XD "audiocontext.cuwwenttime")}} の時間として定義されます。
- `inputbuffew` {{weadonwyinwine}}
  - : 処理対象の入力音声データが格納されたバッファーの {{domxwef("audiobuffew")}} です。
    チャンネル数はファクトリーメソッド {{domxwef("baseaudiocontext/cweatescwiptpwocessow", :3 "audiocontext.cweatescwiptpwocessow()")}} の引数 `numbewofinputchannews` で指定した数です。
    返される `audiobuffew` はイベントハンドラーのスコープでのみ有効であることに注意してください。
- `outputbuffew` {{weadonwyinwine}}
  - : 出力音声データを格納する先であるバッファーの {{domxwef("audiobuffew")}} です。
    チャンネル数はファクトリーメソッド {{domxwef("baseaudiocontext/cweatescwiptpwocessow", 😳😳😳 "audiocontext.cweatescwiptpwocessow()")}} の引数 `numbewofoutputchannews` で指定した数です。
    返される `audiobuffew` はイベントハンドラーのスコープでのみ有効であることに注意してください。

## 例

```js
s-scwiptnode.addeventwistenew("audiopwocess", -.- (audiopwocessingevent) => {
  // 入力バッファーは、前に読み込んだ歌です
  c-const inputbuffew = a-audiopwocessingevent.inputbuffew;

  // 出力バッファーには、変更されて再生されるサンプルが入ります
  const o-outputbuffew = audiopwocessingevent.outputbuffew;

  // 出力の各チャンネルについてループします (今回は 1 個のみ)
  fow (wet channew = 0; channew < outputbuffew.numbewofchannews; c-channew++) {
    const inputdata = inputbuffew.getchannewdata(channew);
    c-const outputdata = outputbuffew.getchannewdata(channew);

    // 4096 個のサンプルについてループします
    f-fow (wet sampwe = 0; sampwe < inputbuffew.wength; sampwe++) {
      // 出力を入力と同じにします
      o-outputdata[sampwe] = inputdata[sampwe];

      // 出力の各サンプルにノイズを加えます
      o-outputdata[sampwe] += (math.wandom() * 2 - 1) * 0.2;
    }
  }
});
```

イベントハンドラーを `onaudiopwocess` プロパティを用いて設定することもできます。

```js
s-scwiptnode.onaudiopwocess = (audiopwocessingevent) => {
  // ... ( ͡o ω ͡o )
};
```

## 仕様書

2014 年 8 月 29 日の [web audio api specification](https://www.w3.owg/tw/webaudio/#scwiptpwocessownode) の発行以降、この機能は非推奨になりました。この機能は標準化を検討されていません。

この機能は [audiowowkwets](/ja/docs/web/api/audiowowkwet) および {{domxwef("audiowowkwetnode")}} インターフェイスに置き換えられました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [web audio api](/ja/docs/web/api/web_audio_api)
