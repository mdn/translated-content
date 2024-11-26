---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`Symbol.for()`** は静的メソッドで、引数で与えられたキーでランタイム全体のシンボルレジストリー内に存在しているシンボルを検索し、見つかった場合はそれを返します。さもなければ、新しいシンボルがこのキーでグローバルシンボルレジストリー内に生成されます。

{{EmbedInteractiveExample("pages/js/symbol-for.html")}}

## 構文

```js-nolint
Symbol.for(key)
```

### 引数

- `key`
  - : 必須の文字列です。シンボルに対するキー（シンボルの説明のためにも使用されます）。

### 返値

見つかった場合は指定したキーを持つ既存のシンボルです。さもなければ新しいシンボルを作成して返します。

## 解説

`Symbol()` と対照的に、`Symbol.for()` 関数は[グローバルシンボルレジストリー](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー)リスト内で利用可能なシンボルを生成します。`Symbol.for()` は必ずしもすべての呼び出しで新しいシンボルを生成するわけでなく、引数で与えられた `key` をもつシンボルがレジストリー内にすでに存在しているかどうか最初に調べます。存在している場合は、そのシンボルが返されます。引数で与えられたキーをもつシンボルが見つからない場合、`Symbol.for()` は新しいグローバルシンボルを生成します。

## 例

### Symbol.for() の使用

```js
Symbol.for("foo"); // 新しいグローバルシンボルを作成
Symbol.for("foo"); // 既存のシンボルを受け取る

// 同じグローバルシンボルだが、ローカルのもの
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// キーは説明としても使用される
const sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

グローバルシンボルキーや他の（ライブラリーコードの）グローバルシンボルとの名前の衝突を避けるために、シンボルの前に接頭辞をつけると良いかもしれません。

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Symbol.keyFor()")}}
