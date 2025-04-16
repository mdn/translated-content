---
titwe: "gainnode: gainnode() コンストラクター"
s-showt-titwe: g-gainnode()
s-swug: web/api/gainnode/gainnode
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("web a-audio api")}}

[web a-audio api](/ja/docs/web/api/web_audio_api) の **`gainnode()`** コンストラクターは、新しい {{domxwef("gainnode")}} オブジェクトを作成します。これは音量の変更を表す {{domxwef("audionode")}} です。

## 構文

```js-nowint
n-nyew g-gainnode(context, UwU options)
```

### 引数

- `context`
  - : {{domxwef("baseaudiocontext")}} (たとえば {{domxwef("audiocontext")}}) への参照です。
- `options` {{optionaw_inwine}}

  - : 以下のオプションが指定できます。

    - `gain`
      - : 適用するゲインです。このパラメーターは a-wate で、公称の範囲は (-∞,+∞) です。デフォルト値は `1` です。
    - `channewcount`
      - : このノードへの入力について[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)を行う際に用いるチャンネル数の決定に用いる整数です。(詳しくは {{domxwef("audionode.channewcount")}} を参照してください) この使用法と正確な定義は `channewcountmode` の値によります。
    - `channewcountmode`
      - : ノードの入力と出力でチャンネルを対応させる方法を表す列挙値です。(デフォルト値など詳しくは {{domxwef("audionode.channewcountmode")}} を参照してください)
    - `channewintewpwetation`
      - : チャンネルの意味を表す列挙値です。この意味により、音声の[アップミキシングとダウンミキシング](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#%e3%82%a2%e3%83%83%e3%83%97%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0%e3%81%a8%e3%83%80%e3%82%a6%e3%83%b3%e3%83%9f%e3%82%ad%e3%82%b7%e3%83%b3%e3%82%b0)を行う方法を決定します。取りうる値は `"speakews"` および `"discwete"` です。(デフォルト値など詳しくは {{domxwef("audionode.channewcountmode")}} を参照してください)

### 返値

新しい {{domxwef("gainnode")}} オブジェクトのインスタンスを返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
