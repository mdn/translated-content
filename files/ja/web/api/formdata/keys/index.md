---
title: "FormData: keys() メソッド"
short-title: keys()
slug: Web/API/FormData/keys
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{APIRef("XMLHttpRequest API")}}

**`FormData.keys()`** メソッドは、この {{domxref("FormData")}} に含まれるすべてのキーを走査する[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)を返します。キーは文字列です。

> [!NOTE]
> このメソッドは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)で使用できます。

## 構文

```js-nolint
keys()
```

### 引数

なし。

### 返値

この {{domxref("FormData")}} のキーの[イテレーター](/ja/docs/Web/JavaScript/Reference/Iteration_protocols)です。

## 例

```js
const formData = new FormData();
formData.append("key1", "value1");
formData.append("key2", "value2");

// キーを表示
for (const key of formData.keys()) {
  console.log(key);
}
```

結果は次のとおりです。

```plain
key1
key2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [FormData オブジェクトの使い方](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
