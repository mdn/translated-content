---
title: "論理和: |"
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
l10n:
  sourceCommit: 0ae85e77a55f1c32bb831b611a497dab7f6a03c7
---

{{JsSidebar}}

**論理和**は、複数の選択肢を指定します。いずれかの選択肢が入力に一致すると、その論理和全体が一致することになります。

## 構文

```regex
alternative1|alternative2
alternative1|alternative2|alternative3|…
```

### 引数

- `alternativeN`
  - : 1 つの選択肢のパターンで、[アトムとアサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions#assertions)の並びで構成されます。いずれかの選択肢に一致した場合は、論理和全体に一致したと見なされます。

## 解説

正規表現の演算子 `|` は、2 つ以上の「選択肢」を区切ります。パターンは最初の選択肢との照合を試み、失敗すると 2 つ目に照合を試みます。例えば、次の例は `"ab"` ではなく `"a"` に一致します。

```js
/a|ab/.exec("abc"); // ['a']
```

`|` 演算子は正規表現の中では最も低い優先度になります。より大きなパターンの一部として論理和を使用したい場合は、[グループ化](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)する必要があります。

グループ化された論理和の後にさらに別の表現がある場合、照合は最初の選択肢を選択し、正規表現の残りの部分と照合しようとすることから始まります。正規表現の残りの部分が一致しなかった場合、マッチャーは代わりに次の選択肢を試みます。例えば、次のようになります、

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', 'a', undefined, undefined, 'bc']
// Not ['abc', undefined, 'ab', 'c', undefined]
```

これは、最初の選択肢で `a` を選択することで、2 つ目の選択肢で `bc` を選択し、一致することが可能だからです。このプロセスは「バックトラッキング」と呼ばれ、マッチャーは最初に論理和を越え、その後の照合が失敗したときに論理和に戻ってくるからです。

また、一致しなかった選択肢の中に括弧を入れると、結果の配列に `undefined` が含まれることにも注意してください。

選択肢は空文字列であることもあり、その場合は空文字列に一致します（言い換えれば、常に一致します）。

選択肢は常に左から右に向けて試され、照合の方向には関係ありません（これは[後読み](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)で予約されています）。

## 例

### ファイル拡張子の照合

次の例は、[入力境界アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#ファイル拡張子の照合)の記事と同じコードを使用して、ファイル拡張子を照合します。

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [文字クラス](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [修飾子: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [文字クラス: `[...]`, `[^...]`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
