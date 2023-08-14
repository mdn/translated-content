---
title: "非キャプチャグループ: (?:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Non-capturing_group
l10n:
  sourceCommit: 9cc03092b578e4ad871b1e0862b6120d0453e226
---

{{JsSidebar}}

**非キャプチャグループ**はサブパターンをグループ化し、グループ全体に[数量詞](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)を適用したり、グループ内で[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)を使用したりすることができます。これは JavaScript で発生した[グループ化演算子](/ja/docs/Web/JavaScript/Reference/Operators/Grouping)のように動作します。[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)とは異なり、一致したテキストを記憶しないため、パフォーマンスが向上し、パターンが有用なキャプチャグループを含む場合の混乱を避けることができます。

## 構文

```regex
(?:pattern)
```

### 引数

- `pattern`
  - : 正規表現リテラルで使用できるあらゆるものからなるパターンで、[論理和](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)も含まれます。

## 例

### サブパターンのグループ化と数量詞の適用

以下の例では、ファイルパスの末尾が `styles.css` か `styles.[a hex hash].css` かを検査します。`\.[\da-f]+` の部分全体はオプションであるため、これに `?` 量子化子を適用するには、これを新しいアトムにグループ化する必要があります。 非キャプチャグループを使用すると、必要のない余分な一致情報を生成しないため、パフォーマンスが向上します。

```js
function isStylesheet(path) {
  return /styles(?:\.[\da-f]+)?\.css$/.test(path);
}

isStylesheet("styles.css"); // true
isStylesheet("styles.1234.css"); // true
isStylesheet("styles.cafe.css"); // true
isStylesheet("styles.1234.min.css"); // false
```

### 論理和のグループ化

論理和は正規表現では最も優先順位が低くなります。 大きなパターンの一部として論理和を使いたい場合は、グループ化する必要があります。 論理和の一致したテキストに依存しない限り、非キャプチャグループを使うことをお勧めします。 次の例は、[入力境界アサーション](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#ファイル拡張子の照合)の記事と同じコードで、ファイルの拡張子に一致します。

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

### リファクタリング災害の防止

キャプチャグループはパターン内の位置によってアクセスされます。照合結果や[後方参照](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)からアクセスしている場合、キャプチャグループを追加または除去すると、他のキャプチャグループの位置も更新する必要があります。 特に、ほとんどのグループが純粋に構文上の目的（数量詞を適用するため、または論理和をグループ化するため）である場合、これはバグの原因となる可能性があります。 非キャプチャグループを使用することで、この問題を避けることができ、実際のキャプチャグループのインデックスを簡単に追跡することができます。

例えば、文字列中の `title='xxx'` というパターンと照合する関数があるとします（[キャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group#引用符のペアリング)から引用した例）。 引用符が確実に一致するように、後方参照を使って最初の引用符を参照しています。

```js
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
}

parseTitle('title="foo"'); // 'foo'
```

後で `name='xxx'` を `title=` の別名として追加することにした場合、別のグループに論理和をグループ化する必要があります。

```js example-bad
function parseTitle(metastring) {
  // おっと — 後方参照とインデックスアクセスが 1 つずつずれてしまいました
  return metastring.match(/(title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // null のプロパティが読めない (reading '2')
// \1 が "name" という文字列を指すようになったため、末尾が見つからない
```

キャプチャグループのインデックスを参照している場所をすべて探し出して 1 つ 1 つ更新するのではなく、キャプチャグループを使用しない方が良いでしょう。

```js example-good
function parseTitle(metastring) {
  // 値を使用しないので、title|name の論理和はキャプチャしない
  return metastring.match(/(?:title|name)=(["'])(.*?)\1/)[2];
}

parseTitle('name="foo"'); // 'foo'
```

[名前付きキャプチャグループ](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)はリファクタリング災害を避けるためのもう一つの方法です。これにより、他のキャプチャグループが追加または削除されても影響を受けない、独自の名前でキャプチャグループにアクセスできるようになります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [グループと後方参照](/ja/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences)
- [正規表現リファレンス](/ja/docs/Web/JavaScript/Reference/Regular_expressions)
- [キャプチャグループ: `(...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [名前付きキャプチャグループ: `(?<name>...)`](/ja/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
