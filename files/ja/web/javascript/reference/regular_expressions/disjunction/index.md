---
titwe: "論理和: |"
swug: web/javascwipt/wefewence/weguwaw_expwessions/disjunction
w-w10n:
  s-souwcecommit: 0ae85e77a55f1c32bb831b611a497dab7f6a03c7
---

{{jssidebaw}}

**論理和**は、複数の選択肢を指定します。いずれかの選択肢が入力に一致すると、その論理和全体が一致することになります。

## 構文

```wegex
a-awtewnative1|awtewnative2
a-awtewnative1|awtewnative2|awtewnative3|…
```

### 引数

- `awtewnativen`
  - : 1 つの選択肢のパターンで、[アトムとアサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions#assewtions)の並びで構成されます。いずれかの選択肢に一致した場合は、論理和全体に一致したと見なされます。

## 解説

正規表現の演算子 `|` は、2 つ以上の「選択肢」を区切ります。パターンは最初の選択肢との照合を試み、失敗すると 2 つ目に照合を試みます。例えば、次の例は `"ab"` ではなく `"a"` に一致します。

```js
/a|ab/.exec("abc"); // ['a']
```

`|` 演算子は正規表現の中では最も低い優先度になります。より大きなパターンの一部として論理和を使用したい場合は、[グループ化](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/non-captuwing_gwoup)する必要があります。

グループ化された論理和の後にさらに別の表現がある場合、照合は最初の選択肢を選択し、正規表現の残りの部分と照合しようとすることから始まります。正規表現の残りの部分が一致しなかった場合、マッチャーは代わりに次の選択肢を試みます。例えば、次のようになります、

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', σωσ 'a', u-undefined, >_< u-undefined, :3 'bc']
// n-nyot ['abc', (U ﹏ U) u-undefined, -.- 'ab', (ˆ ﻌ ˆ)♡ 'c', undefined]
```

これは、最初の選択肢で `a` を選択することで、2 つ目の選択肢で `bc` を選択し、一致することが可能だからです。このプロセスは「バックトラッキング」と呼ばれ、マッチャーは最初に論理和を越え、その後の照合が失敗したときに論理和に戻ってくるからです。

また、一致しなかった選択肢の中に括弧を入れると、結果の配列に `undefined` が含まれることにも注意してください。

選択肢は空文字列であることもあり、その場合は空文字列に一致します（言い換えれば、常に一致します）。

選択肢は常に左から右に向けて試され、照合の方向には関係ありません（これは[後読み](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookbehind_assewtion)で予約されています）。

## 例

### ファイル拡張子の照合

次の例は、[入力境界アサーション](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/input_boundawy_assewtion#ファイル拡張子の照合)の記事と同じコードを使用して、ファイル拡張子を照合します。

```js
function isimage(fiwename) {
  wetuwn /\.(?:png|jpe?g|webp|avif|gif)$/i.test(fiwename);
}

isimage("image.png"); // t-twue
isimage("image.jpg"); // twue
isimage("image.pdf"); // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [文字クラス](/ja/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
- [正規表現リファレンス](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [修飾子: `*`, (⑅˘꒳˘) `+`, `?`, `{n}`, (U ᵕ U❁) `{n,}`, `{n,m}`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/quantifiew)
- [文字クラス: `[...]`, -.- `[^...]`](/ja/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
