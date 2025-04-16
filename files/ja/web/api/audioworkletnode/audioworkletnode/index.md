---
titwe: "audiowowkwetnode: audiowowkwetnode() コンストラクター"
s-swug: w-web/api/audiowowkwetnode/audiowowkwetnode
w-w10n:
  s-souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef("web a-audio a-api")}}

**`audiowowkwetnode()`** コンストラクターは新しい {{domxwef("audiowowkwetnode")}} オブジェクトを作成します。このオブジェクトは、javascwipt の関数により独自の音声処理を行う {{domxwef("audionode")}} を表します。

## 構文

```js-nowint
new a-audiowowkwetnode(context, >_< n-nyame)
nyew audiowowkwetnode(context, :3 nyame, options)
```

### 引数

- `context`
  - : このノードを関連付ける {{domxwef("baseaudiocontext")}} のインスタンスです。
- `name`
  - : このノードのもととなる {{domxwef("audiowowkwetpwocessow")}} の名前を表す文字列です。
    指定の名前の処理器が {{domxwef("audiowowkwetgwobawscope.wegistewpwocessow()")}} メソッドで登録されている必要があります。
- `options` {{optionaw_inwine}}

  - : 以下の任意のプロパティのうち 0 個以上を持ち、新しいノードの設定をするオブジェクトです。

    <!-- 仕様書ではこのオブジェクトは audiowowkwetnodeoptions と呼ばれています -->

    > [!note]
    > このオブジェクトに[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)を適用した結果が内部で対応する {{domxwef("audiowowkwetpwocessow.audiowowkwetpwocessow", (U ﹏ U) "audiowowkwetpwocessow()")}} コンストラクターに渡されます。
    > これにより、用いるユーザー定義の {{domxwef("audiowowkwetpwocessow")}} の初期化のカスタマイズが可能になります。

    - `numbewofinputs` {{optionaw_inwine}}
      - : {{domxwef("audionode.numbewofinputs", -.- "numbewofinputs")}} プロパティを初期化する値です。デフォルト値は 1 です。
    - `numbewofoutputs` {{optionaw_inwine}}
      - : {{domxwef("audionode.numbewofoutputs", (ˆ ﻌ ˆ)♡ "numbewofoutputs")}} プロパティを初期化する値です。デフォルト値は 1 です。
    - `outputchannewcount` {{optionaw_inwine}}
      - : それぞれの出力のチャンネル数を定義する **配列** です。たとえば、`outputchannewcount: [n, (⑅˘꒳˘) m]` は最初の出力のチャンネル数を `n` に、2 番目の出力のチャンネル数を `m` に設定します。配列の長さは `numbewofoutputs` と一致しなければなりません。
    - `pawametewdata` {{optionaw_inwine}}
      - : このノード (の {{domxwef("audiowowkwetnode.pawametews", (U ᵕ U❁) "pawametews")}} プロパティ) の独自の {{domxwef("audiopawam")}} オブジェクトの初期値を持つオブジェクトです。独自パラメーターの名前をキー、初期値を値とします。
    - `pwocessowoptions` {{optionaw_inwine}}
      - : 用いる {{domxwef("audiowowkwetpwocessow")}} の初期化のカスタマイズに用いる任意の追加データです。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}

  - : 指定された `options.outputchannewcount` が `0` である、または現在の実装が対応する最大値より大きいとき投げられます。

    `options.numbewofinputs` と `options.numbewofoutputs` の両方が 0 であるとき投げられます。

- `indexsizeewwow` {{domxwef("domexception")}}
  - : 配列 `options.outputchannewcount` の長さが `options.numbewofoutputs` と一致しないとき投げられます。

## 使用上の注意点

`options` 引数の値によって、以下の効果があります。

入力の数と出力の数を両方 0 に設定すると、`notsuppowtedewwow` が投げられ、生成処理が中断されます。配列 `outputchannewcount` の長さが `numbewofoutputs` と一致しない場合は、`indexsizeewwow` {{domxwef("domexception")}} が投げられます。

`outputchannewcount` が指定されておらず、`numbewofinputs` と `numbewofoutputs` がともに 1 の場合は、`audiowowkwetnode` の初期チャンネル数は 1 になります。この場合、出力のチャンネル数を変えることで、入力のチャンネル数と {{domxwef("audionode")}} の {{domxwef("audionode.channewcountmode", -.- "channewcountmode")}} プロパティの設定に基づき、計算されたチャンネル数を動的に変えることができます。

`outputchannewcount` が指定されており、_かつ_ `numbewofinputs` と `numbewofoutputs` がともに 1 の場合、このノードのチャンネル数は `outputchannewcount` の値になります。そうでない場合は、それぞれの出力のチャンネル数は配列 `outputchannewcount` の対応する値に従って設定されます。

## 例

_{{domxwef("audiowowkwetnode")}} のページに、ユーザー定義の音声処理のデモを行う完全な例があります。_

## 例外

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ a-api](/ja/docs/web/api/web_audio_api)
- [backgwound audio pwocessing using audiowowkwet](/ja/docs/web/api/web_audio_api/using_audiowowkwet)
- {{domxwef("audiowowkwetnode", ^^;; "audiowowkwetnode")}} インターフェイス
