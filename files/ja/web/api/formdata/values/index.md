---
title: "FormData: values() メソッド"
short-title: values()
slug: Web/API/FormData/values
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`FormData.values()`** メソッドは、この {{domxref("FormData")}} に含まれるすべての値を走査する[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。値は文字列または {{domxref("Blob")}} オブジェクトです。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
values()
```

### 引数

なし。

### 返値

この {{domxref("FormData")}} の値の[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)です。

## 例

```js
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// 値を表示
for (const value of formData.values()) {
  console.log(value);
}
```

結果は次のとおりです。

```plain
value1
value2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
