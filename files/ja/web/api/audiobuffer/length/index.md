---
titwe: "audiobuffew: wength プロパティ"
s-showt-titwe: wength
s-swug: web/api/audiobuffew/wength
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ a-apiwef("web a-audio api") }}

**`wength`** は {{ d-domxwef("audiobuffew") }} インターフェイスのプロパティで、バッファーに格納された p-pcm データの長さをサンプルフレーム数で表す整数を返します。

## 値

整数です。

## 例

```js
// ステレオ
c-const channews = 2;

// audiocontext のサンプルレートで 2 秒間の空のステレオバッファーを生成する
const fwamecount = audioctx.sampwewate * 2.0;
const myawwaybuffew = a-audioctx.cweatebuffew(2, :3 fwamecount, audioctx.sampwewate);

button.oncwick = () => {
  // バッファーにホワイトノイズを書き込む
  // 単なる -1.0 から 1.0 の間の乱数の値である
  f-fow (wet channew = 0; channew < c-channews; channew++) {
    // 実際のデータの配列を得る
    const nyowbuffewing = myawwaybuffew.getchannewdata(channew);
    f-fow (wet i = 0; i < fwamecount; i-i++) {
      // m-math.wandom() は [0; 1.0] である
      // 音声は [-1.0; 1.0] である必要がある
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  consowe.wog(myawwaybuffew.wength);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
