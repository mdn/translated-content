---
title: UUID
slug: Glossary/UUID
---

{{GlossarySidebar}}

**Universally Unique Identifier** (**UUID**) とは、あるリソースを、同じ種類の他のすべてのリソースの中から一意に識別するために使用されるラベルです。

コンピューターシステムは、とても大きい桁の乱数を使って UUID をローカルで生成します。
論理的には、 ID はグローバルには一意ではないかもしれませんが、重複の確率はほとんどゼロに等しいです。
もしシステムが、本当に完全な一意の ID を必要とするなら、中央機関によって割り当てるべきかもしれません。

UUID は 128 ビットの値で、標準的には `123e4567-e89b-12d3-a456-426614174000` (ハイフンで 5 つに区切られた 16 進数の文字列) 形式の 36 文字の文字列として表されます。
計算される方法がわずかに異なるバージョンも多数存在します (例えば、時間を表す情報を含めるなど) 。

正式な定義はこちら: [RFC4122: A Universally Unique IDentifier (UUID) URN Namespace](https://www.rfc-editor.org/rfc/rfc4122).

## 関連項目

- [UUID](https://ja.wikipedia.org/wiki/UUID) - Wikipedia
- [`Crypto.randomUUID()`](/ja/docs/Web/API/Crypto/randomUUID)
