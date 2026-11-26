---
title: "HTMLElement: dataset プロパティ"
short-title: dataset
slug: Web/API/HTMLElement/dataset
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("HTML DOM")}}

**`dataset`** は {{DOMxRef("HTMLElement")}} インターフェイスの読み取り専用プロパティで、要素に設定されたすべての[カスタムデータ属性](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) への読み取り/書き込みアクセスを提供します。このプロパティは、各 `data-*` 属性に対応する項目を持つ文字列のマップ ({{domxref("DOMStringMap")}}) を公開します。

> [!NOTE]
> `dataset` プロパティ自体は読み取ることができますが、直接書き込むことはできません。
> 代わりに、データ属性を表す `dataset` 内の個々のプロパティに書き込む必要があります。

## 値

{{domxref("DOMStringMap")}} です。

HTML の `data-*` 属性名と、それに対応する DOM の `dataset.プロパティ名` は、読み書きされる環境に応じて変換されます。

- HTML では
  - : 属性の名前は、 `data-` で始まります。文字、数字、ダッシュ (`-`)、ドット (`.`)、コロン (`:`)、アンダースコア (`_`) のみを入れることができます。{{Glossary("ASCII")}} 大文字の `A` から `Z` は小文字に変換されます。
- JavaScript では
  - : カスタムデータ属性のプロパティ名は、HTML 属性名から `data-` 接頭辞を除いたものです。単一のダッシュ (`-`) は削除され、その次にある ASCII 文字は大文字に変換されて、プロパティ名はキャメルケースになります。

HTML と JavaScript の形式を変換する詳細や例は、次の節で説明します。

以下の情報に加えて、[データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)の記事に、HTML データ属性の使用方法に関するガイドがあります。

### 名前の変換

- ダッシュスタイルからキャメルケースへの変換
  - : カスタムデータ属性名は、次のルールに従って {{domxref("DOMStringMap")}} の項目のキーに変換されます。
    1. すべての ASCII の大文字 (`A` から `Z` まで) を小文字にします。
    2. 接頭辞の `data-` を（ダッシュを含め）削除します。
    3. ダッシュ (`U+002D`) に ASCII 小文字の `a` から `z` が続く場合、ダッシュを削除し、その文字を対応する大文字に変換します。
    4. 他の文字 (他のダッシュを含む) は変更しません。

- キャメルケースからダッシュスタイルへの変換
  - : キーを属性名にマッピングする逆の変換では、以下のように次のルールが使用されます。
    1. **制約事項:** 変換前のキーでは、ダッシュの直後に ASCII 小文字の `a` から `z` があってはなりません。
    2. 接頭辞として `data-` が追加されます。
    3. ASCII 大文字の `A` から `Z` の前にダッシュを追加し、その文字を小文字にします。
    4. 他の文字は変更しません。

例えば、`data-abc-def` という名前の属性は、`dataset.abcDef` に対応します。

### 値へのアクセス

- 属性は dataset のオブジェクトプロパティのようにキャメルケース名（キー）を使用して、 `element.dataset.keyname` のように設定したり読み取ったりすることができます。
- 属性はブラケット構文を使用して、 `element.dataset['keyname']` のように設定したり読み取ったりすることもできます。
- [`in` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/in)を `'keyname' in element.dataset` のように使用すると、特定の属性が存在するかどうかを確認できます。
  これは `dataset` の[プロトタイプチェーン](/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)を走査することになり、プロトタイプチェーンを汚染する可能性のある外部コードを持っている場合には安全ではないことに注意してください。例えば {{jsxref("Object/hasOwn", "Object.hasOwn(element.dataset, 'keyname')")}} や、単に `element.dataset.keyname !== undefined` かどうかを調べる方法などがあります。

### 値の設定

- 属性が設定されると、その値は常に文字列に変換されます。
  例えば、 `element.dataset.example = null` は `data-example="null"` に変換されます。

- 属性を削除するには、[`delete` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/delete)を使用できます: `delete element.dataset.keyname`。

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

- HTML の [`data-*`](/ja/docs/Web/HTML/Reference/Global_attributes/data-*) クラスのグローバル属性
- [データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)
- {{DOMxRef("Element.getAttribute()")}} および {{DOMxRef("Element.setAttribute()")}}
