---
title: "Document: writeln() メソッド"
short-title: writeln()
slug: Web/API/Document/writeln
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ ApiRef("DOM") }}

> **警告:** `document.writeln()` メソッドの使用は固く避けるべきです。
>
> [HTML 仕様書自体で次のように警告しています](<https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document.write()>)。
>
> > このメソッドの挙動はとても特異です。場合によっては、このメソッドは構文解析の実行中に [HTML パーサー](https://html.spec.whatwg.org/multipage/parsing.html#html-parser)の状態に影響を与え、結果として文書のソースに対応しない DOM を生成することがあります（例えば、書き込まれた文字列が "`<plaintext>`" や "`<!--`" であった場合など）。他にも、[`document.open()`](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open) が呼び出されたかのように、最初に現在のページをクリアしてしまう場合もあります。さらに多くの場合、メソッドは単に無視されるか、例外が発生します。ユーザーエージェントは [このメソッドで挿入された `script` 要素の実行を回避することが明確に許可されています](https://html.spec.whatwg.org/multipage/parsing.html#document-written-scripts-intervention)。さらに悪いことに、このメソッドの正確な動作はネットワークの遅延に依存する場合があり、デバッグがとても難しい失敗につながる可能性があります。これらすべての理由から、このメソッドを使用することは固く推奨されません。
> > したがって、`document.writeln()` を使用するのはやめましょう。そして可能であれば、使用している既存のコードを更新しましょう。

テキストの文字列とその直後に続く改行文字を文書に書き込みます。

## 構文

```js-nolint
writeln(line)
```

### 引数

- `line` はテキストの行を含む文字列です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```
document.writeln("<p>パスワードを入力してください:</p>");
```

## メモ

**document.writeln** は {{domxref("document.write")}} と同じですが、改行文字を追加します。

> **メモ:** **document.writeln** は (**document.write** と同様に) XHTML 文書では動作しません (エラーコンソールに "Operation is not supported" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] エラーが表示されます)。これは、 .xhtml の拡張子を持つローカルファイルを開いたり、何らかの文書が `application/xhtml+xml` の MIME タイプで提供されたときに発生します。詳細は [W3C XHTML FAQ](https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite) で確認することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
