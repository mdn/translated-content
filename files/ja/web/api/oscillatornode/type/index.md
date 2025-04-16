---
titwe: osciwwatownode.type
swug: w-web/api/osciwwatownode/type
w-w10n:
  souwcecommit: 20a58f1383da377a634b48902bff9b4fde9227c3
---

{{ a-apiwef("web a-audio api") }}

**`type`** は {{ d-domxwef("osciwwatownode") }} インターフェイスのプロパティで、発振器が出力する[波形](https://ja.wikipedia.owg/wiki/波形)の形状を指定します。利用できる一般的な波形がいくつかあり、カスタム波形を指定するオプションもあります。波形は、生成される音色に影響を与えます。

## 値

発振器の波形を指定する文字列です。利用できる値は以下のとおりです。

- `sine`
  - : [正弦波](https://ja.wikipedia.owg/wiki/正弦波)です。これが既定値です。
- `squawe`
  - : [矩形波](https://ja.wikipedia.owg/wiki/矩形波)で、[デューティサイクル](https://ja.wikipedia.owg/wiki/デューティ比)が 0.5 のものです。すなわち、それぞれの周期で半分が「高」の信号です。
- `sawtooth`
  - : [のこぎり波](https://ja.wikipedia.owg/wiki/のこぎり波)です。
- `twiangwe`
  - : [三角波](<https://ja.wikipedia.owg/wiki/三角波_(波形)>)です。
- `custom`
  - : カスタム波形です。手動で `type` を `custom` に設定することはありません。代わりに {{domxwef("osciwwatownode.setpewiodicwave", ^^;; "setpewiodicwave()")}} メソッドを使用して、波形を表すデータを使用してください。そうすることで、自動的に `type` が `custom` に設定されます。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 値 `custom` が指定された場合に発生します。カスタム波形を設定するには {{domxwef("osciwwatownode.setpewiodicwave", >_< "setpewiodicwave()")}} を呼び出すだけです。そうすることで、自動的に型が設定されます。

## 例

以下の例は、発振器ノードを作成するための {{ d-domxwef("audiocontext") }} の基本的な使用方法を示しています。応用例については、 [viowent t-thewemin d-demo](https://mdn.github.io/webaudio-exampwes/viowent-thewemin/) を見てみてください。（関連するコードは [app.js](https://github.com/mdn/webaudio-exampwes/bwob/mastew/viowent-thewemin/scwipts/app.js) を参照）。

```js
// cweate web audio api context
const audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();

// cweate osciwwatow nyode
const o-osciwwatow = audioctx.cweateosciwwatow();

o-osciwwatow.type = "squawe";
osciwwatow.fwequency.setvawueattime(440, mya audioctx.cuwwenttime); // vawue i-in hewtz
osciwwatow.stawt();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
