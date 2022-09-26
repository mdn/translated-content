---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
---

{{JSRef}} {{deprecated_header}}

非推奨の **`compile()`** メソッドは、スクリプトの実行中に正規表現を(再)コンパイルするために使われます。基本的に `RegExp` コンストラクターと同じです。

## 構文

```
regexObj.compile(pattern, flags)
```

### 引数

- `pattern`
  - : 正規表現のテキスト
- `flags`

  - : 指定された場合、フラグは次の値の任意の組み合わせになります。

    - `g`
      - : グローバルマッチ
    - `i`
      - : 大文字小文字の違いを無視
    - `m`
      - : 複数行。始まりと終わりの文字 (^ と $) を複数行にわたって動作するものとして扱います。 (すなわち、 *それぞれ*の行の始まりと終わりにマッチします。(\n または \r によって区切られます)、入力文字列全体の始まりと終わりだけではありません。)
    - `y`
      - : 先頭固定。対象文字列においてこの正規表現の `lastIndex` プロパティによって示されるインデックスからのみ検索します (それ以降のインデックスから検索しようとはしません)。

## 解説

`compile` メソッドは非推奨です。同じ効果を得るには、 `RegExp` コンストラクターを使用してください。

## 例

### compile() の使用

次の例では、新しいパターンとフラグで正規表現を再コンパイルする方法を示します。

```js
var regexObj = new RegExp('foo', 'gi');
regexObj.compile('new foo', 'g');
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-regexp.prototype.compile', 'RegExp.prototype.compile')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.compile")}}

## 関連情報

- {{jsxref("RegExp")}}
