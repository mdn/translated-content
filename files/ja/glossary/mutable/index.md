---
title: Mutable (ミュータブル)
slug: Glossary/Mutable
---

{{GlossarySidebar}}

ミュータブルは、変更可能な変数の型です。{{glossary("JavaScript")}} では、{{Glossary("primitive", "プリミティブな値")}}ではない、{{Glossary("Object","オブジェクト")}}と{{Glossary("Array","配列")}}だけがミュータブルです。

（変数名が新しい値を指し示すようにすることはできますが、以前の値はまだメモリーに保持されていますので、ガベージコレクションが必要です。）

**ミュータブルオブジェクト**は、オブジェクトを作成した後に状態を変更できるオブジェクトです。

{{Glossary("Immutable","イミュータブル")}}は、オブジェクトが作成された後は状態を変更できないオブジェクトです。

**文字列**と**数値**は**イミュータブル**です。例をあげて理解しておきましょう。

```
var immutableString = "Hello";

// 上記のコードでは、文字列値を持つ新しいオブジェクトが作成されます。

immutableString = immutableString + "World";

// 今、既存の値に "World" を追加しています。
```

"immutableString" に文字列値を追加すると、次のイベントが発生します。

1. "immutableString" の既存の値が取得される。
2. "immutableString" の既存の値に "World" が追加される。
3. 結果の値は、新しいメモリーブロックに割り当てられる。
4. "immutableString" オブジェクトは新たに作成されたメモリー空間を指すようになる。
5. 以前に作成されたメモリー空間がガベージコレクション可能になる。

## より詳しく知る

### 一般知識

- Wikipedia 上の [イミュータブル](https://ja.wikipedia.org/wiki/イミュータブル)
