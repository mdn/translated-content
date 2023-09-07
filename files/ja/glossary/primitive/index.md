---
title: Primitive (プリミティブ)
slug: Glossary/Primitive
l10n:
  sourceCommit: 72e6429af2f0ad138223623fb2c86087a008d4dd
---

{{Glossary("JavaScript")}} において、**プリミティブ** (primitive、プリミティブ値、プリミティブデータ型) は{{Glossary("object","オブジェクト")}}でなく、{{glossary("method","メソッド")}}を持たないデータのことです。 6 種類のプリミティブデータ型があります。

- {{Glossary("string","文字列")}}
- {{Glossary("number","数値")}}
- {{Glossary("bigint","長整数")}}
- {{Glossary("boolean","論理値")}}
- {{Glossary("undefined")}}
- [シンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- {{Glossary("null")}}

多くの場合、プリミティブ値は、その言語実装の最下層にて直接的に表現されます。

すべてのプリミティブ値は、**イミュータブル** (immutable) 、つまり変更できません。変数には新しい値を再割り当てすることができますが、既存の値については、オブジェクト、配列、関数が変更できるのに対して、プリミティブ値は変更することができません。この言語では、プリミティブな値を変更するユーティリティは提供されていません。

プリミティブにはメソッドがありませんが、あたかもメソッドがあるかのように振る舞います。プリミティブのプロパティにアクセスするとき、JavaScript で自動ボックス値をラッパーオブジェクトに格納し、代わりにそのオブジェクトのプロパティにアクセスします。例えば、 `"foo".includes("f")` は暗黙のうちに [`String`](/ja/docs/Web/JavaScript/Reference/Global_Objects/String) ラッパーオブジェクトを作成して、そのオブジェクトに対して `String.prototype.includes()` を呼び出します。この自動ボックス化の動作は JavaScript コードでは監視できませんが、様々な動作の良いメンタルモデルになります。例えば、プリミティブの「変更」ができない理由（`str.foo = 1` は `str` 自身のプロパティ `foo` に割り当てられるのではなく、一時的なラッパーオブジェクトに割り当てられるため）などが分かります。

## 関連情報

- [JavaScript のデータ型](/ja/docs/Web/JavaScript/Data_structures)
- Wikipedia の [プリミティブ型](https://ja.wikipedia.org/wiki/プリミティブ型) の記事
- [用語集](/ja/docs/Glossary)

  - {{Glossary("JavaScript")}}
  - {{Glossary("string", "文字列")}}
  - {{Glossary("number")}}
  - {{Glossary("bigint")}}
  - {{Glossary("boolean")}}
  - {{Glossary("null")}}
  - {{Glossary("undefined")}}
  - [symbol](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
