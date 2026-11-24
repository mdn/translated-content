---
title: SanitizerConfig
slug: Web/API/SanitizerConfig
l10n:
  sourceCommit: 438ac3c8511239d9ef8f4b562980ffc57ea8b358
---

{{APIRef("HTML Sanitizer API")}}

**`SanitizerConfig`** 辞書は、[HTML 無害化 API](/ja/docs/Web/API/HTML_Sanitizer_API) の一部で、HTML の文字列を {{domxref("Element")}} または {{domxref("ShadowRoot")}} に挿入したり、HTML の文字列を {{domxref("Document")}} に解釈したりする際に、どの要素、属性、コメントを許可するか、または除去するかを指定します。

なお、通常は `SanitizerConfig` オブジェクトを直接使用するのではなく、{{domxref("Sanitizer")}} インスタンスが使用されます。インスタンスの方が、共有や変更を効率的に行えるためです。

## インスタンスプロパティ

- `elements`
  - : HTML の無害化時に許可する要素を示す配列です。任意で、許可または除去する属性も指定できます。

    各要素は、名前（文字列）または、以下のプロパティを持つオブジェクトとして指定できます。
    - `name`
      - : 要素名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 要素の名前空間を含む文字列です。
        デフォルトの名前空間は `"http://www.w3.org/1999/xhtml"` です。
    - `attributes` {{optional_inline}}
      - : HTML の無害化時に、この許可された要素で許可する属性を示す配列です。

        各属性は、名前（文字列）または、以下のプロパティを持つオブジェクトとして指定できます。
        - `name`
          - : 属性名を含む文字列です。
        - `namespace` {{optional_inline}}
          - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

    - `removeAttributes` {{optional_inline}}
      - : HTML の無害化時に、この許可された要素から除去する属性を示す配列です。

        各属性は、名前（文字列）または、以下のプロパティを持つオブジェクトとして指定できます。
        - `name`
          - : 属性名を含む文字列です。
        - `namespace` {{optional_inline}}
          - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

- `removeElements`
  - : HTML の無害化時に除去する要素を示す配列です。

    各要素は、名前（文字列）または、以下のプロパティを持つオブジェクトとして指定できます。
    - `name`
      - : 要素名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 要素の名前空間を含む文字列です。
        デフォルトの名前空間は `"http://www.w3.org/1999/xhtml"` です。

- `replaceWithChildrenElements`
  - : HTML の無害化時に、その内容に置き換える要素を示す配列です。
    このプロパティは主に、テキストからスタイルを除去するために使用します（例えば、`<b>一部のテキスト</b>` を `一部のテキスト` に変更する場合など）。

    各要素は、名前（文字列）または、以下のプロパティを持つオブジェクトとして指定できます。
    - `name`
      - : 要素名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 要素の名前空間を含む文字列です。
        デフォルトの名前空間は `"http://www.w3.org/1999/xhtml"` です。

- `attributes`
  - : HTML の無害化時に許可する属性を示す配列です。

    各属性は、名前（文字列）または、以下のプロパティを持つオブジェクトとして指定できます。
    - `name`
      - : 属性名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

- `removeAttributes`
  - : HTML の無害化時に要素から除去する属性を示す配列です。

    各属性は、名前（文字列）または、以下のプロパティを持つオブジェクトとして指定できます。
    - `name`
      - : 属性名を含む文字列です。
    - `namespace` {{optional_inline}}
      - : 属性の名前空間を含む文字列です。デフォルトは `null` です。

- `comments`
  - : コメントが許可される場合は `true`、除去される場合は `false` です。
- `dataAttributes`
  - : すべての `data-*` 属性を許可する場合は `true` です（この場合、`data-*` 属性を `attributes` 配列に記載してはいけません）。
    `false` の場合、許可する `data-*` 属性はすべて `attributes` 配列に記載しなければなりません。

## 解説

**`SanitizerConfig`** は、HTML の文字列を {{domxref("Element")}} または {{domxref("ShadowRoot")}} に挿入したり、HTML の文字列を {{domxref("Document")}} に解釈したりする際に、どの要素、属性、コメントを許可するか、または除去するかを指定します。

この型のインスタンスは、{{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} コンストラクターに渡して {{domxref("Sanitizer")}} を設定したり、{{domxref("Sanitizer.get()")}} が返したりすることができます。
[無害化メソッド](/ja/docs/Web/API/HTML_Sanitizer_API#無害化メソッド)を呼び出すときは、`option.sanitizer` 引数として渡すこともできます。

- {{domxref("Element")}} の {{domxref("Element/setHTML","setHTML()")}} または {{domxref("Element/setHTMLUnsafe","setHTMLUnsafe()")}}。
- {{domxref("ShadowRoot")}} の {{domxref("ShadowRoot/setHTML","setHTML()")}} または {{domxref("ShadowRoot/setHTMLUnsafe","setHTMLUnsafe()")}}。
- [`Document.parseHTML()`](/ja/docs/Web/API/Document/parseHTML_static) または [`Document.parseHTMLUnsafe()`](/ja/docs/Web/API/Document/parseHTMLUnsafe_static) 静的メソッド。

### 有効な設定

設定オブジェクトの構造では、要素を許可リストと除去リストの両方に指定したり、属性をリスト内で複数回指定したりするなど、矛盾したり重複したりするフィルターオプションを宣言できます。
曖昧さを避けるため、`SanitizerConfig` インスタンスを受け取るメソッドには、有効な設定オブジェクトを渡す必要があります。無効な設定を使用すると、{{jsxref("TypeError")}} が発生します。

有効なサニタイザー設定では、次の条件を満たす必要があります。

- `elements` 配列または `removeElements` 配列のいずれかを定義できますが、両方は定義できません。

  > [!NOTE]
  > `removeElements` 配列が定義されている場合、要素単位の属性を定義することはできません。これらの属性は `elements` 配列内の要素に追加されるためです。

- グローバルな `attributes` 配列または `removeAttributes` 配列のいずれかを定義できますが、両方は定義できません。
- `replaceWithChildrenElements` 配列を定義する場合、`elements` または `removeElements` と共通の要素を含んではいけません。
- 配列に重複する要素や属性を含めることはできません。
- グローバルな `attributes` 配列が定義されている場合:
  - 要素は `attributes` または `removeAttributes` を一方、両方、またはどちらも定義しない場合があります。
  - 要素の `attributes` は、グローバルな `attributes` 配列と共通の値を持つことはできません。
  - 要素の `removeAttributes` 配列に含めることができるのは、グローバルな `attributes` 配列にも存在する値のみです。
  - `dataAttributes` が `true` の場合、グローバルな属性配列と要素の属性配列に `data-*` 属性を含めることはできません（これらは自動的に許可されるため）。
- グローバルな `removeAttributes` 配列が定義されている場合:
  - 要素は `attributes` または `removeAttributes` のどちらか一方を指定できますが、両方は指定できません。
  - 定義されている要素の `attributes` 配列または `removeAttributes` 配列は、グローバルな `removeAttributes` 配列と共通の値を持つことはできません。
  - `dataAttributes` 論理値を定義してはいけません。

空のオブジェクト `{}` は有効な設定です。

> [!NOTE]
> 上記の条件はウェブ開発者の視点からのものです。
> [仕様で定義されている妥当性チェック](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-sanitizerconfig-valid)は、両方が欠けている場合に `removeElements` を追加したり、デフォルトの名前空間を追加したりするなど、設定の正規化後に実行されるため、少し異なります。

### 許可設定と除去設定

前の節の主な意味は、有効な設定では `elements` 配列または `removeElements` 配列（両方ではない）と、`attributes` 配列または `removeAttributes` 配列（両方ではない）を指定できるということです。

`elements` 配列、`attributes` 配列、またはその両方を持つ設定は、出力に存在できる値で無害化動作を定義するため、[許可設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可と除去の設定)と呼ばれます。
`removeElements` 配列、`removeAttributes` 配列、そのどちらかを持つ[除去設定](/ja/docs/Web/API/HTML_Sanitizer_API#許可と除去の設定)は、出力から除去される値で動作を定義します。

## 例

### 「許可」設定の作成

この例では、特定の要素と属性を許可し、{{htmlelement("b")}} 要素を子要素に置き換え、コメントを出力に含め、`data-*` 属性を含めるには `attributes` 配列に明示的に記載する必要がある、「許可」サニタイザー設定を作成する方法を示します。
設定オブジェクトは {{domxref("Sanitizer.Sanitizer", "Sanitizer()")}} コンストラクターに渡します。

```js
const sanitizer = new Sanitizer({
  elements: ["div", "p", "script"],
  attributes: ["id"],
  replaceWithChildrenElements: ["b"],
  comments: true,
  dataAttributes: false,
});
```

### 「除去」設定の作成

この例では、要素と属性の両方を除去する、「除去」サニタイザー設定を作成する方法を示します。

```js
const sanitizer = new Sanitizer({
  removeElements: ["span", "script"],
  removeAttributes: ["lang", "id"],
  comments: false,
});
```

### 要素を許可して属性を除去する設定

この例では、一部の要素を許可し、特定の属性を除去する「ハイブリッド」サニタイザー設定を作成する方法を示します。
同様に、要素を除去して属性を許可する設定も指定できます。

```js
const sanitizer = new Sanitizer({
  elements: ["span", "script"],
  removeAttributes: ["lang", "id"],
});
```

要素の許可配列と除去配列の両方、または属性の許可配列と除去配列の両方を指定することは、[有効な設定](#有効な設定)ではありません。その場合、`TypeError` が発生します。

### 無効な設定

この節では、いくつかの無効な設定を示します。
これらは `TypeError` を発生させます。

`elements` と `removeElements` の両方が定義されているため無効です。

```js
const sanitizer1 = new Sanitizer({
  elements: ["span", "script"],
  removeElements: ["div", "b"],
});
```

{{htmlelement("span")}} が `elements` と `replaceWithChildrenElements` の両方に含まれているため無効です。

```js
const sanitizer2 = new Sanitizer({
  elements: ["span", "div"],
  replaceWithChildrenElements: ["span"],
});
```

`dataAttributes` が `true` の場合に、冗長な属性 `"data-test"` が定義されているため無効です。

```js
const sanitizer3 = new Sanitizer({
  attributes: ["lang", "id", "data-test"],
  dataAttributes: true,
});
```

`removeAttributes` と `dataAttributes` が定義されているため無効です。

```js
const sanitizer4 = new Sanitizer({
  removeAttributes: ["lang", "id"],
  dataAttributes: true,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
