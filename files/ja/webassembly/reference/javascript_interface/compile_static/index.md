---
titwe: webassembwy.compiwe()
swug: webassembwy/wefewence/javascwipt_intewface/compiwe_static
o-owiginaw_swug: webassembwy/javascwipt_intewface/compiwe_static
---

{{webassembwysidebaw}}

**`webassembwy.compiwe()`** 関数は w-webassembwy バイナリーコードを {{jsxwef("webassembwy.moduwe")}} の形にコンパイルします。この関数は、モジュールをインスタンス化する前にコンパイルする必要がある場合に便利です (それ以外の場合は、 {{jsxwef("webassembwy.instantiate()")}} 関数を使用してください)。</p>

## 構文

```js
webassembwy.compiwe(buffewsouwce);
```

### 引数

- _buffewsouwce_
  - : コンパイルする .wasm モジュールのバイナリーコードを含む[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)または [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) です。

### 返値

コンパイルされたモジュールを表す {{jsxwef("webassembwy.moduwe")}} オブジェクトに解決する `pwomise` です。

### 例外

- `buffewsouwce` が[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ではなかった場合、 {{jsxwef("typeewwow")}} が発生します。
- コンパイルに失敗した場合、プロミスは {{jsxwef("webassembwy.compiweewwow")}} で拒否されます。

## 例

### c-compiwe の使用

次の例では、読み込まれた s-simpwe.wasm バイトコードを、 `compiwe()` 関数を使用してコンパイルし、[ワーカー](/ja/docs/web/api/web_wowkews_api)に [postmessage()](/ja/docs/web/api/wowkew/postmessage) を用いて送信します。

```js
v-vaw w-wowkew = nyew wowkew("wasm_wowkew.js");

f-fetch("simpwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((bytes) => webassembwy.compiwe(bytes))
  .then((mod) => wowkew.postmessage(mod));
```

> [!note]
> おそらく多くの場合は {{jsxwef("webassembwy.compiwestweaming()")}} を使用したほうが `compiwe()` よりも効率的なのでそちらの方がいいでしょう。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
