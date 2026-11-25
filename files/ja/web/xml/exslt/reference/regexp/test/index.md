---
title: regexp:test()
slug: Web/XML/EXSLT/Reference/regexp/test
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

`regexp:test()` は、文字列が指定された正規表現に一致するかどうかを調べます。

## 構文

```plain
regexp:test(testString, regExpString[, flagsString])
```

### 引数

- `testString`
  - : テスト対象の文字列です。
- `regExpString`
  - : 評価する JavaScript 形式の正規表現です。
- `flagsString` {{optional_inline}}
  - : 文字フラグを含む省略可能な文字列です。

使用できるフラグ文字は次のとおりです。

- `g`
  - : グローバル照合です。この関数では効果はありませんが、他の正規表現関数との一貫性を保つために指定できます。
- `i`
  - : 大文字と小文字を区別しない照合です。このフラグを指定すると、大文字と小文字を区別せずに照合します。

### 返値

指定された正規表現がテスト対象の文字列に一致する場合は `true` です。

## 仕様書

[EXSLT - REGEXP:TEST](https://exslt.github.io/regexp/functions/test/index.html)
