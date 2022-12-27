---
title: Promise
slug: Glossary/Promise
---

**{{jsxref("Promise")}}** は、ある {{Glossary("function", "関数")}} が返す、呼び出された時点でまだ完了していない処理の結果をあらわす {{Glossary("object", "オブジェクト")}} です。その名のとおり、関数が `Promise` オブジェクトを経由して、最終的に何らかの結果を返すことを*約束*(Promise は約束の意味)するわけです。

{{Glossary("asynchronous", "非同期に")}} 処理をおこなう関数が処理を完了したとき、`Promise` オブジェクトに設置された **resolution** ハンドラ(または **fulfillment** ハンドラ、**completion** ハンドラ) が呼ばれて、呼び出し元の関数は処理の完了を知ることができます。

## 関連情報

より詳しく学ぶには、以下のリンクをご覧ください。

### 一般知識

- [Future パターン](https://ja.wikipedia.org/wiki/Future_パターン)

### 技術的な参照情報

- [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)内の記事: {{jsxref("Promise")}}
- [Promise を使う](/ja/docs/Web/JavaScript/Guide/Using_promises)
