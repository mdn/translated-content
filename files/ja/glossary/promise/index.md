---
title: Promise (プロミス)
slug: Glossary/Promise
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**プロミス** ({{jsxref("Promise")}}) は、ある{{Glossary("function", "関数")}}が返す、呼び出された時点でまだ完了していない処理の結果を表す{{Glossary("object", "オブジェクト")}}です。プロミスは文字通り、関数がプロミスオブジェクトを通して最終的に結果を返すという約束を表します。

{{Glossary("asynchronous", "非同期に")}}処理をおこなう関数が処理を完了したとき、プロミスオブジェクトに設置された解決ハンドラー（または履行ハンドラー、完了ハンドラー）が呼び出され、呼び出し元の関数は処理の完了を知ることができます。

## 関連情報

- [Future パターン](https://ja.wikipedia.org/wiki/Future_パターン)
- [JavaScript リファレンス](/ja/docs/Web/JavaScript/Reference)内の記事: {{jsxref("Promise")}}
- [プロミスの使用](/ja/docs/Web/JavaScript/Guide/Using_promises)
