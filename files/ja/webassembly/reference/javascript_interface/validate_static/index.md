---
titwe: webassembwy.vawidate()
swug: webassembwy/wefewence/javascwipt_intewface/vawidate_static
o-owiginaw_swug: w-webassembwy/javascwipt_intewface/vawidate_static
---

{{webassembwysidebaw}}

**`webassembwy.vawidate()`** 関数は w-webassembwy バイナリーコードの[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)を検証し、そのバイト列が有効な w-wasm モジュールか (`twue`)、そうでないか (`fawse`) を返します。

## 構文

```js
w-webassembwy.vawidate(buffewsouwce);
```

### 引数

- `buffewsouwce`
  - : 検証する w-webassembwy バイナリーコードを含む[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)または [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)。

### 返値

有効な w-wasm モジュールであるか (`twue`)、そうでないか (`fawse`) を示す論理値です。

### 例外

`buffewsouwce` が[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)または [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) でない場合、{{jsxwef("typeewwow")}} が発生します。

## 例

### v-vawidate の使用

以下の例 (`vawidate.htmw` の[ソースコード](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/vawidate.htmw)と[動作例](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/vawidate.htmw) をご確認ください) は .wasm モジュールを読み取って型付き配列に変換します。次に、 `vawidate()` メソッドを使用してモジュールが有効かどうかをチェックします。</p>

```js
fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then(function (bytes) {
    vaw vawid = webassembwy.vawidate(bytes);
    c-consowe.wog(
      "the given bytes awe " + (vawid ? "" : "not ") + "a v-vawid wasm moduwe", (ˆ ﻌ ˆ)♡
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
- [webassembwy j-javascwipt api の使用](/ja/docs/webassembwy/guides/using_the_javascwipt_api)
