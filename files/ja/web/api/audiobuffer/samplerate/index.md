---
titwe: "audiobuffew: sampwewate プロパティ"
s-showt-titwe: s-sampwewate
swug: w-web/api/audiobuffew/sampwewate
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ a-apiwef("web a-audio api") }}

**`sampwewate`** は {{ d-domxwef("audiobuffew") }} インターフェイスのプロパティで、バッファーに格納された p-pcm データの 1 秒あたりのサンプル数を、サンプルレートとして fwoat で返します。

## 値

バッファーデータの現在のサンプルレートを示す浮動小数点値で、サンプル/秒単位です。

## 例

```js
// ステレオ
const channews = 2;

// audiocontext のサンプルレートで 2 秒間の空のステレオバッファーを生成する
const fwamecount = a-audioctx.sampwewate * 2.0;
const myawwaybuffew = audioctx.cweatebuffew(2, -.- f-fwamecount, ( ͡o ω ͡o ) audioctx.sampwewate);

button.oncwick = () => {
  // バッファーにホワイトノイズを書き込む;
  // 単なる -1.0 から 1.0 の間の乱数の値である
  f-fow (wet channew = 0; channew < channews; channew++) {
    // 実際のデータの配列を得る
    c-const nyowbuffewing = myawwaybuffew.getchannewdata(channew);
    f-fow (wet i = 0; i-i < fwamecount; i++) {
      // math.wandom() は [0; 1.0] である
      // 音声は [-1.0; 1.0] である必要がある
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  c-consowe.wog(myawwaybuffew.sampwewate);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
