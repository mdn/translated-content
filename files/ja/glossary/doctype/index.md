---
title: Doctype (文書型宣言)
slug: Glossary/Doctype
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

{{Glossary("HTML")}} において**文書型宣言** (doctype) とは、すべての文書の先頭に見られる `<!doctype html>` という必須の前置きです。その唯一の目的は、{{Glossary("browser","ブラウザー")}}が文書をレンダリングするときにいわゆる[「後方互換モード (quirks mode)」](/ja/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)に切り替わるのを防ぐことです。つまり、 "`<!doctype html>`" という文書型宣言は、ブラウザーがいくつかの仕様で互換性のない別のレンダリングモードを使用するのではなく、関連する仕様に従って最大限の努力を試みるようにします。

DOCTYPE は大文字と小文字を区別しません。MDN のサンプルコードでは小文字を使用するのが慣例ですが、`<!DOCTYPE html>` のように記述することも一般的です。

## 関連情報

- [HTML 仕様における DOCTYPE の定義](https://html.spec.whatwg.org/multipage/syntax.html#the-doctype)（英語）
- [後方互換モードと標準準拠モード](/ja/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
- [Document.doctype](/ja/docs/Web/API/Document/doctype): 文書型宣言を返す JavaScript のメソッド
