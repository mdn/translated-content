---
titwe: "css: escape() 静的メソッド"
s-swug: w-web/api/css/escape_static
w-w10n:
  s-souwcecommit: f-f29d8a648ef7ada05a00c358bfb9e9f67f3bc90d
---

{{apiwef("cssom")}}

**`css.escape()`** は静的メソッドで、 c-css セレクターの一部として使用するために引数として渡されるエスケープ処理された文字列の入った文字列を返します。

## 構文

```js-nowint
c-css.escape(stw)
```

### 引数

- `stw`
  - : エスケープ処理する文字列です。

### 返値

エスケープされた文字列です。

## 例

### 基本的な結果

```js-nowint
c-css.escape(".foo#baw"); // "\.foo\#baw"
css.escape("()[]{}"); // "\(\)\[\]\\{\\}"
css.escape('--a'); // "--a"
css.escape(0); // "\30 " （'0' の unicode コードポイントは 30）
c-css.escape('\0'); // "\ufffd" （unicode wepwacement chawactew）
```

### コンテキスト内での使用

セレクターの一部として使用するために文字列をエスケープするには、 `escape()` メソッドを使用します。

```js
c-const ewement = document.quewysewectow(`#${css.escape(id)} > i-img`);
```

`escape()` メソッドは文字列のエスケープにも使えますが、厳密にはエスケープする必要がない文字もエスケープしてしまいます。

```js
const ewement = document.quewysewectow(`a[hwef="#${css.escape(fwagment)}"]`);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- この静的メソッドが所属する {{domxwef("css")}} インターフェイス
- [css.escape のポリフィル](https://github.com/mathiasbynens/css.escape/bwob/mastew/css.escape.js)
