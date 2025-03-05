---
title: "HTMLElement: dataset プロパティ"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

**`dataset`** は {{DOMxRef("HTMLElement")}} インターフェイスの読み取り専用プロパティで、要素に設定されたすべての[カスタムデータ属性](/ja/docs/Web/HTML/Global_attributes/data-*) (`data-*`) への読み取り/書き込みアクセスを提供します。これは文字列のマップである ({{domxref("DOMStringMap")}}) で、それぞれの `data-*` 属性の項目です。

> **メモ:** `dataset` プロパティ自体は読み取ることができますが、直接書き込むことはできません。
> すべての書き込みは、個々の data 属性を表す `dataset` 内の個々のプロパティを表します。

また、 HTML の `data-*` 属性とそれに対応する DOM の `dataset.プロパティ` は同じ名前にはなりませんが、次のように常に近いものになります。

- HTML では
  - : 属性の名前は、 `data-` で始まります。文字、数字、ダッシュ (`-`)、ドット (`.`)、コロン (`:`)、アンダースコア (`_`) のみを入れることができます。{{Glossary("ASCII")}} 大文字の `A` から `Z` は小文字に変換されます。
- JavaScript では
  - : カスタムデータ属性のプロパティ名は、同じ HTML 属性の名前から `data-` の接頭辞を除いたものですが、そのプロパティの{{Glossary("camel_case", "キャメルケース")}}の名前であり、単一のダッシュ (`-`) を除いたものです。

以下の情報に加えて、[データ属性の使用](/ja/docs/Learn/HTML/Howto/Use_data_attributes)の記事に、HTML データ属性の使用方法に関するガイドがあります。

### 名前の変換

- ダッシュスタイルからキャメルケースへの変換

  - : カスタムデータ属性名は、次のルールに従って {{domxref("DOMStringMap") }} 項目のキーに変換されます。

    1. すべての ASCII の大文字 (`A` から `Z` まで) を小文字にします。
    2. 接頭辞の `data-` を（ダッシュを含め）削除します。
    3. ダッシュ (`U+002D`) に ASCII 小文字の `a` から `z` が続く場合、ダッシュを削除し、その文字を対応する大文字に変換します。
    4. 他の文字 (他のダッシュを含む) は変更しません。

- キャメルケースからダッシュスタイルへの変換

  - : キーを属性名にマッピングする逆の変換では、以下のように次のルールが使用されます。

    1. **制約事項:** 変換前に置いて、ダッシュの直後に ASCII 小文字 `a` から `z` を続けてはなりません。
    2. 接頭辞として `data-` が追加されます。
    3. ASCII 大文字の `A` から `Z` は、ダッシュと、その後に対応する小文字が続くものに変換されます。
    4. 他の文字は変更しません。

例えば、`data-abc-def` という名前の属性は、キー `abcDef` に対応します。

### 値へのアクセス

- 属性は dataset のオブジェクトプロパティのようにキャメルケース名（キー）を使用して、 `element.dataset.keyname` のように設定したり読み取ったりすることができます。
- 属性はブラケット構文を使用して、 `element.dataset['keyname']` のように設定したり読み取ったりすることもできます。
- [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)を `'keyname' in element.dataset` のように使用すると、特定の属性が存在するかどうかを確認できます。
  これは `dataset` の[プロトタイプチェーン](/ja/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)を走査することになり、プロトタイプチェーンを汚染する可能性のある外部コードを持っている場合には安全ではないことに注意してください。例えば {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}} や、単に `element.dataset.keyname !== undefined` かどうかを調べる方法などがあります。

### 値の設定

- 属性が設定されると、その値は常に文字列に変換されます。
  例えば、 `element.dataset.example = null` は `data-example="null"` に変換されます。

- 属性を削除する場合は、[`delete` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/delete)が使用できます。

### 値

{{domxref("DOMStringMap")}} です。

## 例

```html
<div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
  Carina Anand
</div>
```

```js
const el = document.querySelector("#user");

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'carinaanand'
// el.dataset.dateOfBirth === ''

// データ属性の設定
el.dataset.dateOfBirth = "1960-10-03";
// JS での結果: el.dataset.dateOfBirth === '1960-10-03'
// HTML での結果: <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth="1960-10-03">Carina Anand</div>

delete el.dataset.dateOfBirth;
// JS での結果: el.dataset.dateOfBirth === undefined
// HTML での結果: <div id="user" data-id="1234567890" data-user="carinaanand">Carina Anand</div>

if (el.dataset.someDataAttr === undefined) {
  el.dataset.someDataAttr = "mydata";
  // JS での結果: 'someDataAttr' in el.dataset === true
  // HTML での結果: <div id="user" data-id="1234567890" data-user="carinaanand" data-some-data-attr="mydata">Carina Anand</div>
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`data-*`](/ja/docs/Web/HTML/Global_attributes/data-*) クラスのグローバル属性
- [データ属性の使用](/ja/docs/Learn/HTML/Howto/Use_data_attributes)
- {{DOMxRef("Element.getAttribute()")}} および {{DOMxRef("Element.setAttribute()")}}
