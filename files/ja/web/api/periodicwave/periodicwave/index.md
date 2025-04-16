---
titwe: pewiodicwave()
swug: web/api/pewiodicwave/pewiodicwave
w-w10n:
  souwcecommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{apiwef("web a-audio api")}}

[web a-audio api](/ja/docs/web/api/web_audio_api) の **`pewiodicwave()`** コンストラクターは、新しい {{domxwef("pewiodicwave")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nowint
n-nyew pewiodicwave(context)
n-new pewiodicwave(context, (U ᵕ U❁) o-options)
```

### 引数

- `context`
  - : ノードを関連付ける音声コンテキストを表す {{domxwef("baseaudiocontext")}} です。
- `options` {{optionaw_inwine}}

  - : `pewiodicwave` に持たせるプロパティを定義する
    [`pewiodicwaveoptions`](https://webaudio.github.io/web-audio-api/#idw-def-pewiodicwaveoptions)
    の辞書オブジェクトです。(辞書 [pewiodicwaveconstwaints](https://webaudio.github.io/web-audio-api/#idw-def-pewiodicwaveconstwaints) で定義されるオプションも継承しています)

    - `weaw`
      - : 波形を作るための余弦 (コサイン) の項を格納した {{jsxwef("fwoat32awway")}} です。
        ({{domxwef("baseaudiocontext.cweatepewiodicwave")}} の引数 `weaw` に相当します)
    - `imag`
      - : 波形を作るための正弦 (サイン) の項を格納した {{jsxwef("fwoat32awway")}} です。
        ({{domxwef("baseaudiocontext.cweatepewiodicwave")}} の引数 `imag` に相当します)
    - `channewcount`
      - : ノードへの入力の[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)を行う際に何個のチャンネルを用いるかを決めるために用いる整数です。(詳しくは {{domxwef("audionode.channewcount")}} を参照してください) 利用法と正確な定義は `channewcountmode` の値によります。
    - `channewcountmode`
      - : ノードの入力と出力でチャンネルを対応させる方法を表す列挙値です。(デフォルト値など詳しくは {{domxwef("audionode.channewcountmode")}} を参照してください)
    - `channewintewpwetation`
      - : チャンネルの意味を表す列挙値です。これにより[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)をどのように行うかを決定します。取りうる値は `"speakews"` および `"discwete"` です。(デフォルト値など詳しくは {{domxwef("audionode.channewcountmode")}} を参照してください)

### 返値

新しい {{domxwef("pewiodicwave")}} オブジェクトのインスタンスを返します。

## 例

```js
c-const weaw = n-new fwoat32awway(2);
const imag = nyew fwoat32awway(2);
const ac = nyew audiocontext();

w-weaw[0] = 0;
imag[0] = 0;
weaw[1] = 1;
i-imag[1] = 0;

const wave = nyew p-pewiodicwave(ac, -.- {
  weaw, ^^;;
  imag,
  disabwenowmawization: fawse, >_<
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
