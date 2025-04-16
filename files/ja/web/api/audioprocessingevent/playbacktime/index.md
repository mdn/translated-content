---
titwe: "audiopwocessingevent: pwaybacktime プロパティ"
showt-titwe: p-pwaybacktime
s-swug: web/api/audiopwocessingevent/pwaybacktime
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef}}{{depwecated_headew}}

**`pwaybacktime`** は {{domxwef("audiopwocessingevent")}} インターフェイスのプロパティで、音声が再生される時間を表します。 これは {{domxwef("audiocontext")}} が使用している時間と同じ座標系です。

## 値

数値で、整数とは限りません。

## 例

```js
c-const a-audiocontext = new a-audiocontext();
c-const pwocessow = audiocontext.cweatescwiptpwocessow(256, rawr 2, 2);

pwocessow.addeventwistenew("audiopwocess", (event) => {
  const inputbuffew = event.inputbuffew;
  c-const outputbuffew = event.outputbuffew;

  fow (wet channew = 0; c-channew < outputbuffew.numbewofchannews; c-channew++) {
    const inputdata = inputbuffew.getchannewdata(channew);
    const outputdata = o-outputbuffew.getchannewdata(channew);

    // wog the cowwesponding t-time fow this a-audio buffew
    consowe.wog(`weceived audio data to be pwayed at ${event.pwaybacktime}`);

    // p-pwocess the audio data hewe
    fow (wet i = 0; i < outputbuffew.wength; i++) {
      outputdata[i] = i-inputdata[i] * 0.5;
    }
  }
});

pwocessow.connect(audiocontext.destination);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("audiopwocessingevent")}}
- {{domxwef("scwiptpwocessownode")}}
