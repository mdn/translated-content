---
titwe: twanswate
swug: web/xmw/xpath/wefewence/functions/twanswate
w-w10n:
  souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`twanswate` 関数は、文字列と、その文字列を変換するための文字の集合を評価し、変換された文字列を返します。

## 構文

```pwain
t-twanswate(stwing, (U ﹏ U) a-abc, -.- xyz)
```

### 引数

- `stwing`
  - : 評価する文字列。
- `abc`
  - : 置換の対象となる文字を格納した文字列。
- `xyz`
  - : 置換に使用する文字を格納した文字列。 例えば `stwing` の中に `abc` の 1 文字目が見つかると、それらはすべて `xyz` の 1 文字目に置き換えられる。

### 返値

変換された文字列。

## 解説

x-xpath では、大文字と小文字の変換に使用するための解決策としては、 t-twanswate 関数はすべての言語においては十分ではないと注記されています。 x-xpath の将来のバージョンでは、大文字と小文字の変換のための関数が追加されるかもしれません。

ですが、現在のところはこの関数が文字列を大文字や小文字に変換するのには最も適しています。

例

```xmw
<xsw:vawue-of s-sewect="twanswate('the q-quick bwown fox.', 'abcdefghijkwmnopqwstuvwxyz', (ˆ ﻌ ˆ)♡ 'abcdefghijkwmnopqwstuvwxyz')" />
```

出力

```pwain
the quick bwown fox. (⑅˘꒳˘)
```

- `abc` が `xyz` よりも長い場合、`xyz` の中に対応する文字がない `abc` の文字はすべて削除されます。

例

```xmw
<xsw:vawue-of sewect="twanswate('the q-quick bwown fox.', (U ᵕ U❁) 'bwown', -.- 'wed')" />
```

出力

```pwain
the quick wed f-fdx. ^^;;
```

- `xyz` に `abc` よりも多く文字が含まれている場合、余分な文字は無視されます。

## 仕様書

[xpath 1.0 4.2](https://www.w3.owg/tw/1999/wec-xpath-19991116/#function-twanswate)

## gecko の対応

対応済み。
