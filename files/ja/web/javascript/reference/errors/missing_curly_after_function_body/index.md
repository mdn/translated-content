---
title: "SyntaxError: missing } after function body"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
---

{{jsSidebar("Errors")}}

JavaScript の例外 "missing } after function body" は、どこかで関数を作成するときに構文の間違いがある場合に発生します。閉じる中括弧や括弧が正しい順序で並んでいるか確認してください。

## エラーメッセージ

```js
SyntaxError: Expected '}' (Edge)
SyntaxError: missing } after function body (Firefox)
```

## エラータイプ

{{jsxref("SyntaxError")}}

## 何がうまくいかなかったのか？

どこかで関数を生成するときに、構文上のミスをしています。また、括弧や中括弧の閉じが正しい順番かどうかを確認してください。コードをフォーマットしたり、インデントしたりすると、ジャングルを探すのに役立つと思います。

## 例

### 閉じ括弧忘れ

しばしば、関数コードで閉じ括弧を忘れることがあります。

```js example-bad
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
};
```

正しくは、次の通りです。

```js example-good
var charge = function () {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
```

たとえば、 [IIFE](/ja/docs/Glossary/IIFE) や[クロージャ](/ja/docs/Web/JavaScript/Closures)、そのほかのたくさんの中括弧や括弧を使用する構造を使用しているときは、さらに分かりにくくなります。

```js example-bad
(function() { if (true) { return false; } );
```

多くの場合、インデントを変えるか、インデントをダブルチェックすると、これらのエラーを特定するのに役立ちます。

```js example-good
(function () {
  if (true) {
    return false;
  }
});
```

## 関連項目

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)
