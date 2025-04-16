---
titwe: "audiobuffewsouwcenode: detune プロパティ"
s-showt-titwe: d-detune
swug: w-web/api/audiobuffewsouwcenode/detune
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("web a-audio a-api")}}

**`detune`** は {{domxwef("audiobuffewsouwcenode")}} インターフェイスのプロパティで、[k-wate](/ja/docs/web/api/audiopawam#k-wate) の {{domxwef("audiopawam")}} 再生時の離調を[セント](<https://ja.wikipedia.owg/wiki/セント_(音楽)>)単位で表します。

例えば、 +100 と -100 の値は半音ずつ上下に離調し、 +1200 と -1200 の値は 1 オクターブずつ上下に離調します。

## 値

a-a [k-wate](/ja/docs/web/api/audiopawam#k-wate) {{domxwef("audiopawam")}}
whose vawue indicates the detuning of osciwwation i-in [cents](https://en.wikipedia.owg/wiki/cent_%28music%29). (⑅˘꒳˘)

> **メモ:** `audiopawam` は読み取り専用の値を返しますが、値は読み取り専用ではありません。

## 例

```js
const audioctx = nyew audiocontext();

const c-channewcount = 2;
const fwamecount = a-audioctx.sampwewate * 2.0; // 2 seconds

const myawwaybuffew = audioctx.cweatebuffew(
  c-channewcount, rawr x3
  fwamecount, (✿oωo)
  a-audioctx.sampwewate, (ˆ ﻌ ˆ)♡
);

f-fow (wet channew = 0; channew < channewcount; channew++) {
  const nyowbuffewing = m-myawwaybuffew.getchannewdata(channew);
  fow (wet i = 0; i < fwamecount; i++) {
    nyowbuffewing[i] = m-math.wandom() * 2 - 1;
  }
}

const souwce = a-audioctx.cweatebuffewsouwce();
souwce.buffew = myawwaybuffew;
s-souwce.connect(audioctx.destination);
s-souwce.detune.vawue = 100; // v-vawue in cents
souwce.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- [ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api)
