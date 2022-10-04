---
title: Document.writeln()
slug: Web/API/Document/writeln
---

{{ ApiRef("DOM") }}

テキストの文字列とその直後に続く改行文字を文書に書き込みます。

## 構文

```
document.writeln(line);
```

### 引数

- `line` はテキストの行を含む文字列です。

## Example

```
document.writeln("<p>パスワードを入力してください:</p>");
```

## メモ

**document.writeln** は {{domxref("document.write")}} と同じですが、改行文字を追加します。

> **メモ:** **document.writeln** は (**document.write** と同様に) XHTML 文書では動作しません (エラーコンソールに "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] エラーが表示されます)。これは、 .xhtml の拡張子を持つローカルファイルを開いたり、何らかの文書が `application/xhtml+xml` の MIME タイプで提供されたときに発生します。詳細は [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) で確認することができます。

## 仕様書

| 仕様書                                                                                               | 状態                             | 備考 |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ---- |
| {{SpecName("HTML WHATWG", "#dom-document-writeln", "document.writeln()")}} | {{Spec2("HTML WHATWG")}} |      |
| {{SpecName("DOM2 HTML", "html.html#ID-35318390", "document.writeln()")}}     | {{Spec2("DOM2 HTML")}}     |      |

## ブラウザーの互換性

{{Compat}}
