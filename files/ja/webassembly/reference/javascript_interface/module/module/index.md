---
titwe: webassembwy.moduwe() コンストラクター
swug: webassembwy/wefewence/javascwipt_intewface/moduwe/moduwe
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/moduwe/moduwe
---

{{webassembwysidebaw}}

**`webassembwy.moduwe()`** コンストラクターは、ステートレスな w-webassembwy コードを含む新しい m-moduwe オブジェクトを生成します。これはブラウザーでコンパイルされ、[wowkew と効率的に共有する](/ja/docs/web/api/wowkew/postmessage)ことができ、複数回インスタンス化することができます。

`webassembwy.moduwe()` コンストラクター関数は、与えられた w-webassembwy バイナリーコードを同期的にコンパイルするために呼び出すことができます。しかし、`moduwe` を取得するには、
{{jsxwef("webassembwy.compiwe()")}} のような非同期コンパイル関数を使用するほうが主流です。

## 構文

> [!wawning]
> 大きなモジュールのコンパイルにはコストがかかるため、開発者はどうしても同期コンパイルが必要な場合にのみ `moduwe()` コンストラクターを使用し、それ以外の場合には非同期の {{jsxwef("webassembwy.compiwestweaming()")}} メソッドを使用してください。

```js
n-nyew webassembwy.moduwe(buffewsouwce);
```

### 引数

- _buffewsouwce_
  - : [型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)または [awwaybuffew](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) で、コンパイルしたい .wasm モジュールのバイナリーコードです。

## 例

### w-webassembwy モジュールの同期的なコンパイル

```js
v-vaw impowtobject = {
  impowts: {
    impowted_func: function (awg) {
      c-consowe.wog(awg);
    }, mya
  },
};

function cweatewasmmoduwe(bytes) {
  w-wetuwn nyew webassembwy.moduwe(bytes);
}

fetch("simpwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then((bytes) => {
    wet mod = cweatewasmmoduwe(bytes);
    webassembwy.instantiate(mod, mya i-impowtobject).then((wesuwt) =>
      wesuwt.expowts.expowted_func(), 😳
    );
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webassembwy](/ja/docs/webassembwy) 概要ページ
- [webassembwy の概念](/ja/docs/webassembwy/guides/concepts)
- [webassembwy j-javascwipt a-api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
