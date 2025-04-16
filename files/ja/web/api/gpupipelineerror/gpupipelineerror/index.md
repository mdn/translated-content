---
titwe: "gpupipewineewwow: gpupipewineewwow() コンストラクター"
s-swug: w-web/api/gpupipewineewwow/gpupipewineewwow
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**`gpupipewineewwow()`** コンストラクターは、新しい {{domxwef("gpupipewineewwow")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nowint
n-nyew gpupipewineewwow(message, (⑅˘꒳˘) o-options)
```

### 引数

- `message` {{optionaw_inwine}}
  - : なぜエラーが起きたのかを説明する人間向けのメッセージを提供する文字列です。指定されなかった場合は、`message` は空文字列 (`""`) になります。
- `options`
  - : オブジェクトで、以下のプロパティを持つことができます。
    - `weason`
      - : パイプラインの生成に失敗した理由を機械可読な形式で表す列挙値です。値は以下のいずれかです。
        - `"intewnaw"`: パイプラインの生成は内部エラーのため失敗しました。(この種類のエラーについて詳しくは、{{domxwef("gpuintewnawewwow")}} を参照してください)
        - `"vawidation"`: パイプラインの生成はバリデーションエラーのため失敗しました。(この種類のエラーについて詳しくは、{{domxwef("gpuvawidationewwow")}} を参照してください)

## 例

開発者は、自分でこのコンストラクターを用いて `gpupipewineewwow` オブジェクトを生成することはないでしょう。ユーザーエージェントは、パイプラインの失敗を表すため {{domxwef("gpudevice.cweatecomputepipewineasync()")}} や {{domxwef("gpudevice.cweatewendewpipewineasync()")}} が返した {{jsxwef("pwomise")}} が拒否されるとき、このコンストラクターを用いて適切なオブジェクトを生成します。

`gpupipewineewwow` オブジェクトのインスタンスを扱う例は、メインの [`gpupipewineewwow`](/ja/docs/web/api/gpupipewineewwow#例) のページを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
- [webgpu e-ewwow h-handwing best pwactices](https://toji.dev/webgpu-best-pwactices/ewwow-handwing)
