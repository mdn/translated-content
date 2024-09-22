---
title: FormData
slug: Web/API/FormData
l10n:
  sourceCommit: 00a9eb81f3e6dfb9776d1eaa2aa731c6ef5b657b
---

{{APIRef("XMLHttpRequest API")}}

**`FormData`** インターフェイスは、フォームフィールドおよびそれらの値から表現されるキーと値のペアのセットを簡単に構築する手段を提供します。これは {{domxref("Window/fetch", "fetch()")}}、{{domxref("XMLHttpRequest.send()")}}、{{domxref("navigator.sendBeacon()")}} の各メソッドを用いることで送信が可能です。エンコーディング型を `"multipart/form-data"` に設定した場合にフォームが使用するものと同じ形式を使用します。

単純な `GET` の送信を用いる {{HTMLElement("form")}} が行うようなクエリー引数を生成したい場合は、{{domxref("URLSearchParams")}} コンストラクターに直接渡すことも可能です。

`FormData` を実装したオブジェクトは、{{domxref('FormData.entries()', 'entries()')}} の代わりに {{jsxref("Statements/for...of", "for...of")}} 構造の内部で直接使用できます。`for (const p of myFormData)` は `for (const p of myFormData.entries())` と等価です。

> [!NOTE]
> この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## コンストラクター

- {{domxref("FormData.FormData","FormData()")}}
  - : 新しい `FormData` オブジェクトを作成します。

## メソッド

- {{domxref("FormData.append()")}}
  - : `FormData` オブジェクト内の既存のキーに新たな値を追加するか、キーが存在しない場合はキーを追加します。
- {{domxref("FormData.delete()")}}
  - : `FormData` オブジェクトからキーと値のペアを削除します。
- {{domxref("FormData.entries()")}}
  - : この `FormData` に含まれているすべてのキーと値のペアを走査する[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。
- {{domxref("FormData.get()")}}
  - : `FormData` オブジェクトの中から、指定したキーに関連付けられた最初の値を返します。
- {{domxref("FormData.getAll()")}}
  - : `FormData` の中から、指定したキーに関連付けられたすべての値の配列を返します。
- {{domxref("FormData.has()")}}
  - : `FormData` オブジェクトがあるキーと値のペアを持っているかを示す論理値を返します。
- {{domxref("FormData.keys()")}}
  - : オブジェクト内に存在するキーと値のペアから、すべてのキーを走査できるようにするための[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。
- {{domxref("FormData.set()")}}
  - : `FormData` オブジェクト内の既存のキーに新たな値を設定するか、キーが存在しない場合はキーと値のペアを追加します。
- {{domxref("FormData.values()")}}
  - : オブジェクト内に存在するキーと値のペアから、すべての値を走査できるようにするための[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
