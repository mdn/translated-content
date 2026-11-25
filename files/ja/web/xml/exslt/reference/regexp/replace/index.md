---
title: regexp:replace()
slug: Web/XML/EXSLT/Reference/regexp/replace
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

`regexp:replace()` は、指定された正規表現に一致する文字列の部分を、別の文字列の内容で置き換えます。

## 構文

```plain
regexp:replace(originalString, regExpString, flagsString, replaceString)
```

### 引数

- `originalString`
  - : 検索と置換を行う対象の文字列です。
- `regExpString`
  - : 評価する JavaScript 形式の正規表現です。
- `flagsString`
  - : 文字フラグを含む文字列です。
- `replaceString`
  - : 一致した部分文字列を置き換える文字列です。

使用できるフラグ文字は次のとおりです。

- `g` - グローバル置換
  - : このフラグを指定すると、`originalString` 内で正規表現に一致するすべての箇所を置き換えます。指定しない場合は、最初に一致した箇所のみを置き換えます。
- `i` - 大文字と小文字を区別しない照合
  - : このフラグを指定すると、大文字と小文字を区別せずに照合します。

### 返値

変更後の文字列です。

## 仕様書

[EXSLT - REGEXP:REPLACE](https://exslt.github.io/regexp/functions/replace/index.html)
