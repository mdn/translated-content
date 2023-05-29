---
title: TextEncoder
slug: Web/API/TextEncoder
l10n:
  sourceCommit: d414c502f3cc1c08d2fb043e98cda4a65621ff08
---

{{APIRef("Encoding API")}}

**`TextEncoder`** はコードポイントのストリームを入力として受け取り、 UTF-8 のバイトストリームを出力します。

{{AvailableInWorkers}}

## コンストラクター

- {{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : 新たに生成した `TextEncoder` を返します。これは、 UTF-8 エンコーディングのバイトストリームを生成します。

## インスタンスプロパティ

_`TextEncoder` インターフェイスは、何もプロパティを継承していません。_

- {{DOMxRef("TextEncoder.prototype.encoding")}} {{ReadOnlyInline}}
  - : 常に `utf-8` を返します。

## インスタンスメソッド

_`TextEncoder` インターフェイスは、何もメソッドを継承していません。_

- {{DOMxRef("TextEncoder.encode()")}}
  - : 入力として文字列を取り、 UTF-8 でエンコードされたテキストを含む {{jsxref("Uint8Array")}} を返します。
- {{DOMxRef("TextEncoder.encodeInto()")}}
  - : エンコードする文字列と、 UTF-8 でエンコードされたテキストをが入る宛先の {{jsxref("Uint8Array")}} を取り、エンコーディングの進捗を示す辞書オブジェクトを返します。これは `encode()` よりも新しく、より性能が高くなる可能性があります。

## 例

```js
const encoder = new TextEncoder();
const view = encoder.encode("€");
console.log(view); // Uint8Array(3) [226, 130, 172]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 逆の操作を表す {{DOMxRef("TextDecoder")}} インターフェイス。
- [Node.js supports global export from v11.0.0](https://nodejs.org/api/util.html#util_class_util_textencoder)
