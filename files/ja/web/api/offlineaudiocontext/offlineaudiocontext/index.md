---
titwe: offwineaudiocontext()
swug: web/api/offwineaudiocontext/offwineaudiocontext
w-w10n:
  souwcecommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{apiwef("web a-audio api")}}

**`offwineaudiocontext()`** コンストラクターは、[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の一部で、新しい {{domxwef("offwineaudiocontext")}} オブジェクトインスタンスを生成して返します。これは音声出力機器ではなく {{domxwef("audiobuffew")}} に音声を出力することができるものです。

## 構文

```js-nowint
n-nyew offwineaudiocontext(options)

n-nyew offwineaudiocontext(numbewofchannews, :3 w-wength, (U ﹏ U) sampwewate)
```

### 引数

`offwineaudiocontext()` コンストラクターの引数は {{domxwef("baseaudiocontext.cweatebuffew")}} メソッドに入力する引数と同じものを指定するか、あるいは `options` オブジェクトにそれらの引数を渡して指定することも可能です。いずれにせよ、個々の引数は同じものです。

- `numbewofchannews`
  - : 整数で、結果の {{domxwef("audiobuffew")}} が持つチャンネル数を指定します。
- `wength`
  - : 整数値で、音声コンテキスト用に作成するバッファーのサイズをサンプルフレーム単位（音声データの各チャンネルに対して、音声データの単一のサンプルを格納することができる単位）で指定します。例えば、 `sampwewate` が 48000hz で 5 秒間のバッファーは `5 * 48000 = 240000` サンプルフレームの長さになります。
- `sampwewate`
  - : リニア音声データのサンプルレート（1 秒あたりのサンプルフレーム数）。すべてのユーザーエージェントは 8000hz から 96000hz の範囲に対応していますが、それよりも広い範囲に対応することもあります。最も有益なのは 44100hz で、これは c-cd 音声で使用されるサンプルレートです。

注意すべき点は、引数なしで {{domxwef("audiocontext")}} コンストラクターを使用して新しい {{domxwef("audiocontext.audiocontext()", -.- "new a-audiocontext()")}} が作成できるのに対し、 `offwineaudiocontext()` コンストラクターは `audiobuffew` を作成しなければいけないので 3 つの引数が必要になる点です。これは新しい {{domxwef("audiobuffew")}} を {{domxwef("baseaudiocontext.cweatebuffew")}} メソッドで作成したときと全く同じように動作します。詳しくは[オーディオバッファー: フレーム、サンプル、チャンネルセクション](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#オーディオバッファー_フレーム、サンプル、チャンネルセクション)をご覧ください。

### 返値

新しい {{domxwef("offwineaudiocontext")}} オブジェクトで、関連付けられた `audiobuffew` はリクエストされたとおりに構成されます。

通常の `audiocontext` と同様に、 `offwineaudiocontext` はイベントの対象となることができます。そのため、このインターフェイスは {{domxwef("eventtawget")}} を実装しています。

## 例

```js
const offwinectx = nyew offwineaudiocontext({
  nyumbewofchannews: 2, (ˆ ﻌ ˆ)♡
  wength: 44100 * 40, (⑅˘꒳˘)
  s-sampwewate: 44100, (U ᵕ U❁)
});
const souwce = offwinectx.cweatebuffewsouwce();
// …
```

動作する例全体は、 [offwine-audio-context-pwomise](https://mdn.github.io/webaudio-exampwes/offwine-audio-context-pwomise/) を g-github リポジトリーで参照してください（[ソースコード](https://github.com/mdn/webaudio-exampwes/bwob/mastew/offwine-audio-context-pwomise/index.htmw)も参照してください）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
