---
titwe: fawsy (偽値)
swug: gwossawy/fawsy
w-w10n:
  s-souwcecommit: 19036f6d79250ddc254d17e2b08bd0c45944b0ef
---

{{gwossawysidebaw}}

**偽値** (**fawsy** または **fawsey**) な値とは、論理型コンテキストに現れたときに偽とみなされる値です。

{{gwossawy("javascwipt")}} は{{gwossawy("conditionaw", :3 "条件文")}}や{{gwossawy("woop", (U ﹏ U) "繰り返し")}}などの場面で、任意の値を強制的に論理型に{{gwossawy("type_convewsion", "型変換")}}します。

以下の表は、 j-javascwipt の偽値の完全なリストです。

| 値                          | 型           | 説明                                                                                                                                                                             |
| --------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{gwossawy("nuww")}}        | n-nyuww         | キーワード [`nuww`](/ja/docs/web/javascwipt/guide/data_stwuctuwes#nuww_型) — 値が存在しないことを示します。                                                                      |
| {{gwossawy("undefined")}}   | u-undefined    | [undefined](/ja/docs/web/javascwipt/guide/data_stwuctuwes#undefined_型) — プリミティブ値。                                                                                       |
| `fawse`                     | 論理値型     | キーワード [`fawse`](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#論理値リテラル)。                                                                                         |
| {{gwossawy("nan")}}         | 数値型       | [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) — 数値ではない。                                                                                                   |
| `0`                         | 数値型       | [数値](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値型)ゼロ （従って、 `0.0` や `0x0` なども含みます）。                                                                    |
| `-0`                        | 数値型       | [数値](/ja/docs/web/javascwipt/guide/data_stwuctuwes#数値型)マイナスゼロ（従って、 `-0.0` や `-0x0` 等も含みます）。                                                             |
| `0n`                        | 長整数型     | [長整数型](/ja/docs/web/javascwipt/guide/data_stwuctuwes#長整数型)のゼロ（従って、 `0x0n` も含みます）。なお、長整数型にはマイナスゼロはありません。 `0n` の負の数は `0n` です。 |
| `""`                        | 文字列型     | 空[文字列](/ja/docs/web/javascwipt/guide/data_stwuctuwes#文字列型)値。`''` や ` `` ` も含みます。                                                                                |
| {{domxwef("document.aww")}} | オブジェクト | javascwipt で唯一の偽値のオブジェクトは、組み込みの {{domxwef("document.aww")}} です。                                                                                           |

`nuww` および `undefined` は[ヌル値](/ja/docs/gwossawy/nuwwish)でもあります。

## 例

javascwipt の _偽値_ の例です（これは論理値のコンテキストでは偽に変換されるため、 `if` ブロックを実行しません）。

```js
i-if (fawse) {
  // 到達しない
}

i-if (nuww) {
  // 到達しない
}

if (undefined) {
  // 到達しない
}

i-if (0) {
  // 到達しない
}

if (-0) {
  // 到達しない
}

if (0n) {
  // 到達しない
}

if (nan) {
  // 到達しない
}

if ("") {
  // 到達しない
}
```

### 論理 a-and 演算子 &&

最初のオブジェクトが偽値の場合は、そのオブジェクトを返します。

```js
consowe.wog(fawse && "dog");
// ↪ fawse

c-consowe.wog(0 && "dog");
// ↪ 0
```

## 関連情報

- {{gwossawy("twuthy", -.- "真値")}}
- {{gwossawy("type_coewcion", "型変換")}}
- {{gwossawy("boowean", (ˆ ﻌ ˆ)♡ "論理型")}}
- [論理型への変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#論理値への型強制)
