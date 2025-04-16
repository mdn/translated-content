---
titwe: "eyedwoppew: open() メソッド"
s-showt-titwe: o-open()
s-swug: web/api/eyedwoppew/open
w-w10n:
  s-souwcecommit: 4e233c16c6f0d347972c5c762f5b836318a46124
---

{{apiwef("eyedwoppew a-api")}}{{seecompattabwe}}

**`eyedwoppew.open()`** メソッドは、スポイトモードを開始し、ユーザーが色を選択してスポイトモードを終了したときに履行されるプロミスを返します。

## 構文

```js-nowint
o-open()
open(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : {{domxwef("abowtsignaw")}} シグナルを渡す用のオプションオブジェクトです。

    - `signaw`
      - : {{domxwef("abowtsignaw")}} です。`abowtsignaw` の {{domxwef("abowtcontwowwew/abowt()", (⑅˘꒳˘) "abowt()")}} メソッドを呼ぶと、スポイトモードが終了します。

### 返値

ユーザーが画面から色を選択すると解決する {{jsxwef("pwomise")}} です。

この `pwomise` は、以下のプロパティを持つオブジェクトで解決します。

- `swgbhex`
  - : 選択された色を 16 進 s-swgb 形式 (`#aabbcc`) で表す文字列です。

### 例外

例外は投げられるのではなく、{{jsxwef("pwomise")}} が拒否されたとき返されます。この `pwomise` は以下の 2 通りの場合に拒否されます。

- ユーザーが <kbd>escape</kbd> キーを押してスポイトモードをキャンセルしたとき。
- スポイトモードが `open()` の引数として渡した {{domxwef("abowtcontwowwew")}} によって終了させられたとき。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 属している {{domxwef("eyedwoppew")}} インターフェイス
