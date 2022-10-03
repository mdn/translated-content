---
title: 'HTMLFormElement: formdata イベント'
slug: Web/API/HTMLFormElement/formdata_event
l10n:
  sourceCommit: 277e5969c63b97cfb55ab4a0e612e8040810f49b
---

{{APIRef}}

**`formdata`** イベントは、フォームのデータを表す項目リストが構築された後に発行されます。このイベントは、フォームが送信されたときに発行されますが、 {{domxref("FormData.FormData", "FormData()")}} コンストラクターが呼び出されたときにも発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等のメソッドで使用するか、イベントハンドラープロパティを使用するかしてください。

```js
addEventListener('formdata', (event) => {});

onformdata = (event) => { };
```

## イベント型

{{domxref("FormDataEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("FormDataEvent")}}

## イベントプロパティ

_親インターフェイスである {{domxref("Event")}} から継承したプロパティがあります。_

- {{domxref("FormDataEvent.formData")}}
  - : イベントが発行されたときにフォームに含まれていたデータを表す {{domxref("FormData")}} オブジェクトが格納されています。

## 例

```js
// フォームの参照を得る

const formElem = document.querySelector('form');

// submit ハンドラー

formElem.addEventListener('submit', (e) => {
  // フォームの送信時、既定の動作を抑止
  e.preventDefault();

  console.log(formElem.querySelector('input[name="field1"]')); // FOO
  console.log(formElem.querySelector('input[name="field2"]')); // BAR

  // FormData オブジェクトを構築し、 formdata イベントが発行される
  const formData = new FormData(formElem);
  // formdata は formdata イベントで変更されます。
  console.log(formData.get('field1')); // foo
  console.log(formData.get('field2')); // bar
});

// データを受け取るための formdata ハンドラー

formElem.addEventListener('formdata', (e) => {
  console.log('formdata fired');

  // イベントオブジェクトからフォームデータを取得する
  const formData = e.formData;
  //  formdata イベントでフォームデータを変更する
  formData.set('field1', formData.get('field1').toLowerCase());
  formData.set('field2', formData.get('field2').toLowerCase());
});
```

`onformdata` 版はこのようになります。

```js
formElem.onformdata = (e) => {
  console.log('formdata fired');

  // フォームデータを変更
  const formData = e.formData;
  formData.set('field1', formData.get('field1').toLowerCase());
  formData.set('field2', formData.get('field2').toLowerCase());
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の {{htmlElement("form")}} 要素
- {{domxref("FormDataEvent")}}
