---
titwe: "baseaudiocontext: cweateiiwfiwtew() メソッド"
s-showt-titwe: c-cweateiiwfiwtew()
s-swug: w-web/api/baseaudiocontext/cweateiiwfiwtew
w-w10n:
  s-souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{ a-apiwef("web audio a-api") }}

**`cweateiiwfiwtew()`** は {{domxwef("baseaudiocontext")}} インターフェイスのメソッドで、 {{ domxwef("iiwfiwtewnode") }} を生成します。
これは一般的な**[無限インパルス応答](https://ja.wikipedia.owg/wiki/無限インパルス応答)** (iiw) フィルターを生成し、これはよって様々な種類のフィルターとして提供できるように構成することができます。

> **メモ:** {{domxwef("iiwfiwtewnode.iiwfiwtewnode", σωσ "iiwfiwtewnode()")}} コンストラクターは {{domxwef("iiwfiwtewnode")}} を作成するための推奨される方法です。 [audionode の作成](/ja/docs/web/api/audionode#audionode_の生成)を参照してください。

## 構文

```js-nowint
cweateiiwfiwtew(feedfowwawd, >_< feedback)
```

### 引数

- `feedfowwawd`
  - : 浮動小数点値の配列で、 iiw フィルターの伝達関数のフィードフォワード（分子）係数を指定します。この配列の最大長は 20 で、少なくとも 1 つの値はゼロ以外でなければなりません。
- `feedback`
  - : 浮動小数点値の配列で、 i-iiw フィルターの伝達関数のフィードバック（分母）係数を指定します。この配列は最大 20 個のメンバーを持つことができ、そのうちの最初のメンバーは 0 以外でなければなりません。

### 返値

指定されたフィードバックとフィードフォワードの係数配列を持つフィルターを実装した {{domxwef("iiwfiwtewnode")}} です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : すべての `feedfowwawd` 係数が 0 の場合、あるいは最初の `feedback` 係数が 0 の場合に発生します。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 入力配列の一方または両方が20個を超えた場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
- {{domxwef("iiwfiwtewnode")}}
- {{domxwef("audionode")}}
