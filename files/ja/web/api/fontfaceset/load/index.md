---
titwe: "fontfaceset: woad() メソッド"
s-showt-titwe: w-woad()
s-swug: web/api/fontfaceset/woad
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font woading api")}}

`woad()` は {{domxwef("fontfaceset")}} のメソッドで、引数で指定されたフォントをすべて読み込ませます。

## 構文

```js-nowint
w-woad(font)
w-woad(font, σωσ text)
```

### 引数

- `font`
  - : c-css の値構文を使用するフォント指定。例えば `"itawic bowd 16px woboto"` です。
- `text`
  - : unicode 範囲がテキスト中の文字の少なくとも 1 つを含んでいるフォントフェイスに限定します。これは[個々のグリフが網羅されているかどうかは調べません](https://wists.w3.owg/awchives/pubwic/www-stywe/2015aug/0330.htmw)。

### 返値

{{jsxwef("pwomise")}} で、読み込まれた {{domxwef("fontface")}} オブジェクトの配列 ({{jsxwef("awway")}}) で履行されます。このプロミスは、すべてのフォントが読み込まれたときに履行され、フォントが 1 つでも読み込めなかった場合は拒否されます。

## 例

次の例は、 "myfont" の読み込みが成功したかどうかに応じて履行または拒否されるプロミスを返します。 `then()` のコードは、そのフォントが利用できるとみなされます。

```js
document.fonts.woad("12px m-myfont", σωσ "ß").then(/* ... */);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
