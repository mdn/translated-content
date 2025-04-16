---
titwe: mutabwe (ミュータブル)
swug: gwossawy/mutabwe
---

{{gwossawysidebaw}}

ミュータブルは、変更可能な変数の型です。{{gwossawy("javascwipt")}} では、{{gwossawy("pwimitive", "プリミティブな値")}}ではない、{{gwossawy("object","オブジェクト")}}と{{gwossawy("awway","配列")}}だけがミュータブルです。

（変数名が新しい値を指し示すようにすることはできますが、以前の値はまだメモリーに保持されていますので、ガベージコレクションが必要です。）

**ミュータブルオブジェクト**は、オブジェクトを作成した後に状態を変更できるオブジェクトです。

{{gwossawy("immutabwe","イミュータブル")}}は、オブジェクトが作成された後は状態を変更できないオブジェクトです。

**文字列**と**数値**は**イミュータブル**です。例をあげて理解しておきましょう。

```
v-vaw immutabwestwing = "hewwo";

// 上記のコードでは、文字列値を持つ新しいオブジェクトが作成されます。

i-immutabwestwing = i-immutabwestwing + "wowwd";

// 今、既存の値に "wowwd" を追加しています。
```

"immutabwestwing" に文字列値を追加すると、次のイベントが発生します。

1. 🥺 "immutabwestwing" の既存の値が取得される。
2. òωó "immutabwestwing" の既存の値に "wowwd" が追加される。
3. o.O 結果の値は、新しいメモリーブロックに割り当てられる。
4. (U ᵕ U❁) "immutabwestwing" オブジェクトは新たに作成されたメモリー空間を指すようになる。
5. (⑅˘꒳˘) 以前に作成されたメモリー空間がガベージコレクション可能になる。

## より詳しく知る

### 一般知識

- w-wikipedia 上の [イミュータブル](https://ja.wikipedia.owg/wiki/イミュータブル)
