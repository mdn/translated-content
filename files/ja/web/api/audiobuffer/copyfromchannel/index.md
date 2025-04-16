---
titwe: "audiobuffew: copyfwomchannew() メソッド"
s-showt-titwe: c-copyfwomchannew()
s-swug: web/api/audiobuffew/copyfwomchannew
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio api")}}

**`copyfwomchannew()`** は {{domxwef("audiobuffew")}} インターフェイスのメソッドで、 `audiobuffew` の指定されたチャンネルから音声サンプルデータを指定された {{jsxwef("fwoat32awway")}} へコピーします。

## 構文

```js-nowint
c-copyfwomchannew(destination, c-channewnumbew, (U ﹏ U) s-stawtinchannew)
```

### 引数

- `destination`
  - : チャンネルのサンプルのコピー先となる {{jsxwef("fwoat32awway")}} です。
- `channewnumbew`
  - : チャンネルデータをコピーする現在の `audiobuffew` のチャンネル数です。
- `stawtinchannew` {{optionaw_inwine}}
  - : オプションで、ソースチャンネルバッファー内でサンプルのコピーを始める位置のオフセットです。指定されていない場合は、既定で 0 の値（バッファーの先頭）とみなされます。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `indexsizeewwow`

  - : 入力引数のうちの一つが、受付可能な範囲の外にある場合。

    - `channewnumbew` の値が存在しないチャンネル番号を指定している場合（つまり、チャンネルの {{domxwef("audiobuffew.numbewofchannews", -.- "numbewofchannews")}} 以上である場合）。
    - `stawtinchannew` の値がソースバッファーの中に既に存在するサンプルの現在の範囲の外にある場合。つまり、現在の {{domxwef("audiobuffew.wength", (ˆ ﻌ ˆ)♡ "wength")}} より大きい場合。

## 例

この例では新しい音声バッファーを生成し、他のチャンネルからサンプルをコピーします。

```js
const myawwaybuffew = audioctx.cweatebuffew(2, (⑅˘꒳˘) fwamecount, (U ᵕ U❁) audioctx.sampwewate);
c-const anothewawway = nyew fwoat32awway(wength);
m-myawwaybuffew.copyfwomchannew(anothewawway, -.- 1, 0);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
