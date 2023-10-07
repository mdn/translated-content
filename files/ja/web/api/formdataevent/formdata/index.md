---
title: "FormDataEvent: formData プロパティ"
short-title: formData
slug: Web/API/FormDataEvent/formData
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("DOM")}}

`formData` は {{domxref("FormDataEvent")}} インターフェイスの読み取り専用プロパティで、このイベントが発行された時点のフォームに含まれていたデータを表す {{domxref("FormData")}} オブジェクトが入っています。

### 返値

{{domxref("FormData")}} オブジェクトです。

## 例

```js
// フォームの参照を取得

const formElem = document.querySelector("form");

// submit ハンドラー

formElem.addEventListener("submit", (e) => {
  // フォームの送信時、既定の動作を抑止
  e.preventDefault();

  // FormData オブジェクトを構築、これにより formdata イベントが発行
  new FormData(formElem);
});

// データを取得するための formdata ハンドラー

formElem.addEventListener("formdata", (e) => {
  console.log("formdata fired");

  // イベントオブジェクトからのフォームデータの取得
  let data = e.formData;
  for (const value of data.values()) {
    console.log(value);
  }

  // XHR を介してデータを送信
  const request = new XMLHttpRequest();
  request.open("POST", "/formHandler");
  request.send(data);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("XMLHTTPRequest")}}
- [XMLHttpRequest の使用](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [FormData オブジェクトの使用](/ja/docs/Web/API/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
