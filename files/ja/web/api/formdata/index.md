---
title: FormData
slug: Web/API/FormData
---

{{APIRef("XMLHttpRequest")}}

**`FormData`** インターフェイスは、{{domxref("XMLHttpRequest.send()")}} メソッドを用いることで簡単に送信が可能な、フォームフィールドおよびそれらの値から表現されるキーと値のペアのセットを簡単に構築する手段を提供します。これは、エンコーディングタイプを `"multipart/form-data"` に設定した場合にフォームが使用するものと同じ形式を使用します。

`FormData` を実装したオブジェクトは、{{domxref('FormData.entries()', 'entries()')}} の代わりに {{jsxref("Statements/for...of", "for...of")}} 構造の内部で直接使用できます。`for (var p of myFormData)` は `for (var p of myFormData.entries())` と等価です。

> **メモ:** この機能は [Web Workers](/ja/docs/Web/API/Web_Workers_API) で使用できます。

## コンストラクタ

- {{domxref("FormData.FormData","FormData()")}}
  - : 新しい `FormData` オブジェクトを作成します。

## メソッド

- {{domxref("FormData.append()")}}
  - : `FormData` オブジェクト内の既存のキーに新たな値を追加するか、キーが存在しない場合はキーを追加します。
- {{domxref("FormData.delete()")}}
  - : `FormData` オブジェクトからキーと値のペアを削除します。
- {{domxref("FormData.entries()")}}
  - : オブジェクトに含まれているすべてのキーと値のペアを走査できるようにするため、{{jsxref("Iteration_protocols","iterator")}} を返します。
- {{domxref("FormData.get()")}}
  - : `FormData` オブジェクトから、指定したキーに関連付けられた最初の値を返します。
- {{domxref("FormData.getAll()")}}
  - : `FormData` から、指定したキーに関連付けられたすべての値の配列を返します。
- {{domxref("FormData.has()")}}
  - : `FormData` オブジェクトがあるキーと値のペアを持っているかを示す真偽値を返します。
- {{domxref("FormData.keys()")}}
  - : オブジェクト内に存在するキーと値のペアから、すべてのキーを走査できるようにするための {{jsxref("Iteration_protocols", "iterator")}} を返します。
- {{domxref("FormData.set()")}}
  - : `FormData` オブジェクト内の既存のキーに新たな値を設定するか、キーが存在しない場合はキーと値のペアを追加します。
- {{domxref("FormData.values()")}}
  - : オブジェクト内に存在するキーと値のペアから、すべての値を走査できるようにするための {{jsxref("Iteration_protocols", "iterator")}} を返します。

## 仕様

| 仕様書                                                                               | 策定状況                             | コメント                     |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ---------------------------- |
| {{SpecName('XMLHttpRequest','#interface-formdata','FormData')}} | {{Spec2('XMLHttpRequest')}} | XHR 仕様書で FormData を定義 |

## ブラウザ実装状況

{{Compat("api.FormData")}}

## 関連文書

- {{domxref("XMLHTTPRequest")}}
- [XMLHttpRequest の利用](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [FormData オブジェクトの利用](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Using_FormData_objects)
- {{HTMLElement("Form")}}
