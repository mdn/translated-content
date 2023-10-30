---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
---

{{JSRef}}

**`Symbol.for(key)`** メソッドは、引数で与えられたキーでランタイム全体のシンボルレジストリ内に存在しているシンボルを検索し、見つかった場合はそれを返します。さもなければ、新しいシンボルがこのキーでグローバルシンボルレジストリ内に生成されます。

{{EmbedInteractiveExample("pages/js/symbol-for.html")}}

## 構文

```
Symbol.for(key);
```

### 引数

- `key`
  - : 必須の文字列です。シンボルに対するキー（シンボルの説明のためにも使用されます）。

### 返値

見つかった場合は指定したキーを持つ既存のシンボルです。さもなければ新しいシンボルを作成して返します。

## 解説

`Symbol()` と対照的に、`Symbol.for()` 関数はグローバルシンボルレジストリリスト内で利用可能なシンボルを生成します。`Symbol.for()` は必ずしもすべての呼び出しで新しいシンボルを生成するわけでなく、引数で与えられた `key` をもつシンボルがレジストリ内にすでに存在しているかどうか最初に調べます。存在している場合は、そのシンボルが返されます。引数で与えられたキーをもつシンボルが見つからない場合、`Symbol.for()` は新しいグローバルシンボルを生成します。

### グローバルシンボルレジストリ

グローバルシンボルレジストリは次のレコード構造をもつリストで、値は空で初期化されます:

| フィールド名 | 値                                   |
| ------------ | ------------------------------------ |
| \[\[key]]    | シンボルを識別するための文字列キー。 |
| \[\[symbol]] | グローバルに格納されているシンボル。 |

## 例

### Symbol.for() の使用

```js
Symbol.for("foo"); // create a new global symbol
Symbol.for("foo"); // retrieve the already created symbol

// Same global symbol, but not locally
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// The key is also used as the description
var sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

グローバルシンボルキーや他の (ライブラリコードの) グローバルシンボルとの名前の衝突を避けるために、シンボルの前に接頭辞をつけると良いかもしれません。

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Symbol.for")}}

## 関連情報

- {{jsxref("Symbol.keyFor()")}}
