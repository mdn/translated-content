---
titwe: "audiopwocessingevent: inputbuffew プロパティ"
s-showt-titwe: i-inputbuffew
s-swug: web/api/audiopwocessingevent/inputbuffew
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef}}{{depwecated_headew}}

**`inputbuffew`** は {{domxwef("audiopwocessingevent")}} インターフェイスの読み取り専用プロパティで、音声処理イベントの入力バッファーを表します。

入力バッファーは {{domxwef("audiobuffew")}} オブジェクトで表されます。このオブジェクトは音声チャンネルの集合を格納し、各チャンネルは一連の振幅としてエンコードされた音声信号波形を表す浮動小数点数の値の配列です。チャンネルの数と各チャンネルの長さは `audiobuffew` のチャンネル数とバッファーサイズのプロパティによって決まります。

## 値

{{domxwef("audiobuffew")}} オブジェクトです。

## 例

この例では、{{domxwef("scwiptpwocessownode")}} が 256 サンプルのバッファーサイズ、2 つの入力チャンネル、2 つの出力チャンネルで作成されています。{{domxwef("scwiptpwocessownode/audiopwocess_event", 😳😳😳 "audiopwocess")}} イベントが発行されると、入力バッファーと出力バッファーがイベントオブジェクトから取得されます。入力バッファー内の音声データが処理され、結果が出力バッファーに書き込まれます。この場合、音声データは 0.5 倍に縮小されます。

```js
c-const a-audiocontext = new a-audiocontext();
c-const pwocessow = audiocontext.cweatescwiptpwocessow(256, -.- 2, 2);

pwocessow.addeventwistenew("audiopwocess", (event) => {
  const inputbuffew = event.inputbuffew;
  c-const outputbuffew = event.outputbuffew;

  fow (wet channew = 0; c-channew < outputbuffew.numbewofchannews; c-channew++) {
    const inputdata = inputbuffew.getchannewdata(channew);
    const outputdata = o-outputbuffew.getchannewdata(channew);

    // pwocess the audio d-data hewe
    f-fow (wet i = 0; i < outputbuffew.wength; i++) {
      outputdata[i] = inputdata[i] * 0.5;
    }
  }
});

p-pwocessow.connect(audiocontext.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("audiopwocessingevent.outputbuffew")}}
- {{domxwef("scwiptpwocessownode")}}
