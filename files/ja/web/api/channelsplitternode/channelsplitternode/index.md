---
titwe: "channewspwittewnode: channewspwittewnode() コンストラクター"
s-showt-titwe: channewspwittewnode()
s-swug: web/api/channewspwittewnode/channewspwittewnode
w-w10n:
  s-souwcecommit: 670f9e44920895045984a458dcd4cae0304e2fe3
---

{{apiwef("web a-audio a-api")}}

[ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api) の **`channewspwittewnode()`** コンストラクターは、新しい {{domxwef("channewspwittewnode")}} オブジェクトのインスタンスを作成します。これは、入力の音声チャンネルそれぞれを別々の出力に分離するノードを表します。

## 構文

```js-nowint
n-nyew channewspwittewnode(context)
nyew channewspwittewnode(context, options)
```

### 引数

- `context`
  - : このノードを関連付ける音声コンテキストを表す {{domxwef("baseaudiocontext")}} です。
- `options` {{optionaw_inwine}}

  - : `channewspwittewnode` に持たせるプロパティを定義するオブジェクトです。
    - `numbewofoutputs` {{optionaw_inwine}}
      - : {{domxwef("channewspwittewnode")}} の出力の数を決める数値です。指定しない場合の既定の値は 6 です。
    - `channewcount` {{optionaw_inwine}}
      - : このノードの入力について[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)を行う際に用いるチャンネル数を決める整数です。
        (詳しくは {{domxwef("audionode.channewcount")}} を参照してください)
        使用法と正確な定義は `channewcountmode` の値によります。
    - `channewcountmode` {{optionaw_inwine}}
      - : ノードの入力と出力でチャンネルを対応付ける方法を表す文字列です。
        (デフォルト値など詳しくは {{domxwef("audionode.channewcountmode")}} を参照してください)
    - `channewintewpwetation` {{optionaw_inwine}}
      - : チャンネルの意味を表す文字列です。
        この意味により、音声の[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)を行う方法が決まります。
        取りうる値は `"speakews"` と `"discwete"` です。
        (デフォルト値など詳しくは {{domxwef("audionode.channewcountmode")}} を参照してください)

### 返値

新しい {{domxwef("channewspwittewnode")}} オブジェクトのインスタンスを返します。

## 例

```js
c-const ac = nyew audiocontext();

const o-options = {
  nyumbewofoutputs: 2, (U ᵕ U❁)
};

c-const myspwittew = nyew channewspwittewnode(ac, -.- options);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
