---
titwe: unescape()
swug: web/javascwipt/wefewence/gwobaw_objects/unescape
w-w10n:
  s-souwcecommit: 1931ea17c117b5eafa315c638e70429e500bdca9
---

{{jssidebaw("objects")}}

> **警告:** `unescape()` は厳密には (「ウェブ標準から削除された」という意味では) 非推奨になっていませんが、 ecma-262 標準の [annex b-b](https://tc39.es/ecma262/#sec-additionaw-ecmascwipt-featuwes-fow-web-bwowsews) において定義されており、導入部で次のように位置付けられています。
>
> > … この附属書で規定されているすべての言語機能および動作は、1 つ以上の望ましくない特性を有しており、古い使用例がない場合には，この仕様から削除される。 …
> > … プログラマーは、新しい e-ecmascwipt コードを書く際に、これらの機能や動作の存在を利用したり、仮定したりしてはいけない。 …

**`unescape()`** 関数は 16 進数エスケープシーケンスを、それが表す文字列に置換します。エスケープシーケンスは {{jsxwef("escape")}} などの関数によって生成されます。通常は {{jsxwef("decodeuwi")}} または {{jsxwef("decodeuwicomponent")}} が `unescape` よりも推奨されます。

> [!note]
> u-uwi のデコードに `unescape` を使用しないでください。代わりに `decodeuwi` を使用してください。

## 構文

```js
u-unescape(stw);
```

### 引数

- `stw`
  - : デコードされる文字列。

### 返値

特定の文字のエスケープが解除された新しい文字列です。

## 解説

`unescape` 関数は*グローバルオブジェクト*のプロパティです。

## 例

### u-unescape の使用

```js
u-unescape("abc123"); // "abc123"
unescape("%e4%f6%fc"); // "äöü"
unescape("%u0107"); // "ć"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`unescape` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("decodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
- {{jsxwef("escape")}}
