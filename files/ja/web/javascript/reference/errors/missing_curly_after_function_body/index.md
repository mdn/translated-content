---
title: "SyntaxError: missing } after function body"
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_function_body
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の例外 "missing } after function body" は、どこかで関数を作成するときに構文の間違いがある場合に発生します。閉じる中括弧や括弧が正しい順序で並んでいるか確認してください。

## エラーメッセージ

```plain
SyntaxError: missing } after function body (Firefox)
```

## エラー型

{{jsxref("SyntaxError")}}

## エラーの原因

どこかで関数を生成するときに、構文上のミスをしています。
また、括弧や中括弧の閉じが正しい順番かどうかを確認してください。
コードをにインデントを付けたり整形したりすると、ジャングルの中を探すのに役立つと思います。

## 例

### 閉じ括弧忘れ

しばしば、関数コードで閉じ括弧を忘れることがあります。

```js-nolint example-bad
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
}
```

正しくは、次の通りです。

```js example-good
function charge() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
}
```

たとえば、 [IIFE](/ja/docs/Glossary/IIFE) や、その他のさまざまな丸括弧や中括弧を多用する構文を使用する場合などでは、さらにわかりにくくなる可能性があります。

```js-nolint example-bad
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
)();
```

多くの場合、インデントを変えるか、インデントをダブルチェックすると、これらのエラーを特定するのに役立ちます。

```js example-good
(function () {
  if (Math.random() < 0.01) {
    doSomething();
  }
})();
```

## 関連情報

- [関数](/ja/docs/Web/JavaScript/Guide/Functions)ガイド
