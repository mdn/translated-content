---
title: FormDataEvent
slug: Web/API/FormDataEvent
l10n:
  sourceCommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{APIRef("DOM")}}

**`FormDataEvent`** インターフェイスは [`formdata` イベント](/ja/docs/Web/API/HTMLFormElement/formdata_event)を表します。 — このようなイベントは {{domxref("HTMLFormElement")}} オブジェクトで、フォームデータを表すエントリーリストが構築された後に発行されます。これはフォームが送信されようとするときに発行されますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターの呼び出しでも発行させることができます。

これにより、 {{domxref("XMLHttpRequest")}} などのメソッドでフォームデータを送信する際に、自分で用意しなくても、 `formdata` イベントの発行に応じて、 {{domxref("FormData")}} オブジェクトをすばやく取得することができます（[FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)を参照）。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FormDataEvent.FormDataEvent","FormDataEvent()")}}
  - : 新しい `FormDataEvent` オブジェクトインスタンスを生成します。

## インスタンスプロパティ

_親インターフェイスである {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("FormDataEvent.formData")}}
  - : イベントが発行された時点のフォーム内に含まれるデータを表す {{domxref("FormData")}} オブジェクトです。

## インスタンスメソッド

_親インターフェイスである {{domxref("Event")}} から継承したメソッドがあります。_

## 例

```js
// フォームの参照を得る

const formElem = document.querySelector("form");

// submit ハンドラー

formElem.addEventListener("submit", (e) => {
  // フォーム送信時に、既定の動作を抑止
  e.preventDefault();

  console.log(form.querySelector('input[name="field1"]')); // FOO
  console.log(form.querySelector('input[name="field2"]')); // BAR

  // FormData オブジェクトを構築し、 formdata イベントを発行させる
  const formData = new FormData(formElem);
  // フォームデータがが formdata イベントによって変更される
  console.log(formData.get("field1")); // foo
  console.log(formData.get("field2")); // bar
});

// データを受け取るための formdata ハンドラー

formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // フォームデータを変更
  const formData = e.formData;
  formData.set("field1", formData.get("field1").toLowerCase());
  formData.set("field2", formData.get("field2").toLowerCase());
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHTTPRequest")}}
- {{domxref("FormData")}}
- [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
