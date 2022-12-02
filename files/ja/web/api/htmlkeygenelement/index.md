---
title: HTMLKeygenElement
slug: Web/API/HTMLKeygenElement
---

{{ APIRef("HTML DOM") }}

> **メモ:** このページでは、仕様としての Keygen 要素インターフェースを説明しており、現在 Gecko に実装されているものではありません。詳細と状態については、{{Bug(101019)}} を見てください。

{{HTMLElement("keygen")}} 要素は、`keygen` 要素のレイアウトやプレゼンテーションを操作するための（継承によって使用できる通常の {{domxref("element")}} オブジェクトインターフェースを越えた）特殊なプロパティとメソッドを提供する **`HTMLKeygenElement`** インターフェースを公開します。

## プロパティ

| 名前                                                  | 型                                                                                                            | 説明                                                                                                                                                                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `autofocus`                                           | [`Boolean`](/ja/JavaScript/Reference/Global_Objects/Boolean) | {{ htmlattrxref("autofocus", "keygen") }} HTML 属性の反映です。ページがロードされたとき、フォームコントローが input にフォーカスされているべきことを表します。                                |
| `challenge`                                           | [`DOMString`](/ja/DOM/DOMString)                                                           | {{ htmlattrxref("challenge", "keygen") }} HTML 属性の繁栄です。送信されたキーにパッケージされた challenge 文字列を含みます。                                                                  |
| `disabled`                                            | [`Boolean`](/ja/JavaScript/Reference/Global_Objects/Boolean) | {{ htmlattrxref("disabled", "keygen") }} HTML 属性の繁栄です。コントロールが操作できないことを示します。                                                                                         |
| `form`                                                | `readonly HTMLFormElement`                                                                                    | コントロールの form オーナーを表します。定義されていた場合、 {{ htmlattrxref("form", "keygen") }} HTML 属性を反映します。                                                                        |
| `keytype`                                             | [`DOMString`](/ja/DOM/DOMString)                                                           | {{ htmlattrxref("keytype", "keygen") }} HTML 属性を反映します。使用されるキーの種類を含みます。                                                                                                 |
| `labels`{{ unimplemented_inline(556743) }} | `readonly NodeList`                                                                                           | keygen 要素に関連する label 要素のリストです。                                                                                                                                                               |
| `name`                                                | [`DOMString`](/ja/DOM/DOMString)                              | {{ htmlattrxref("name", "keygen") }} HTML 属性を反映します。フォームデータと送信されるコントロールの名前を含みます。                                                                             |
| `type`                                                | `readonly`[`DOMString`](/ja/DOM/DOMString)                                                | `keygen` の値です。                                                                                                                                                                                          |
| `validationMessage`                                   | `readonly`[`DOMString`](/ja/DOM/DOMString)                                                | （もしあれば） コントロールが満たさない制約検証を表示するためのローカライズされたメッセージです。コントロールが制約検証の対象ではない場合（**willValidate** が false）や制約を満たしている場合、空文字です。 |
| `validity`                                            | `readonly ValidityState`                                                                                      | この要素の有効性です。                                                                                                                                                                                       |
| `willValidate`                                        | [`Boolean`](/ja/JavaScript/Reference/Global_Objects/Boolean) | `keygen` オブジェクトは決して制約検証の候補にならないため、常に false を返します。                                                                                                                           |

## メソッド

| 名前と引数                              | 返値                                                                                                        | 説明                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `checkValidity()`                       | [`Boolean`](/ja/JavaScript/Reference/Global_Objects/Boolean) | `keygen` オブジェクトは決して制約検証の候補にならないため、常に true を返します。                                                      |
| `setCustomValidity(in DOMString error)` | `void`                                                                                                        | 要素にカスタム検証メッセージを設定します。このメッセージが空文字ではなく、要素がカスタム検証エラーを扱えない場合、検証は行われません。 |

## 仕様書

{{Specifications}}
