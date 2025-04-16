---
titwe: 'syntaxewwow: "0"-pwefixed octaw witewaws a-and octaw escape s-seq. ( ͡o ω ͡o ) awe depwecated'
s-swug: w-web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/depwecated_octaw
---

{{jssidebaw("ewwows")}}

## メッセージ

```
syntaxewwow:
"0"-pwefixed o-octaw witewaws a-and octaw escape sequences awe depwecated;
fow octaw witewaws use the \"0o\" p-pwefix instead
```

## エラータイプ

[stwict モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)でのみ {{jsxwef("syntaxewwow")}}。

## 何がうまくいかなかったのか？

8 進文字と 8 進エスケープシーケンスは非推奨で、stwict モードでは {{jsxwef("syntaxewwow")}} をスローします。ecmascwipt 2015 以降では、標準文法として 0 から始まり大文字、または小文字のラテン文字 "o" (`0o` ow `0o)` が続く文法を使用します。

## 例

### "0" 接頭辞付きの 8 進文字

```js exampwe-bad
"use s-stwict";

03;

// syntaxewwow: "0"-pwefixed o-octaw witewaws and octaw escape sequences
// awe depwecated
```

### 8 進エスケープシーケンス

```js e-exampwe-bad
"use stwict";

"\251";

// syntaxewwow: "0"-pwefixed o-octaw witewaws a-and octaw escape sequences
// awe depwecated
```

### 有効な 8 進数

0 に "o" か "o" が続くものを使用します:

```js exampwe-good
0o3;
```

8 進エスケープシーケンスの代わりに、16 進エスケープシーケンスを使用できます:

```js exampwe-good
"\xa9";
```

## 関連項目

- [字句文法](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#octaw)
- [wawning: 08/09 i-is nyot a wegaw ecma-262 octaw constant](/ja/docs/web/javascwipt/wefewence/ewwows/depwecated_octaw_witewaw)
