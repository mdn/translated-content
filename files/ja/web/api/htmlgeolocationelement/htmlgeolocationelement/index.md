---
title: "HTMLGeolocationElement: HTMLGeolocationElement() コンストラクター"
short-title: HTMLGeolocationElement()
slug: Web/API/HTMLGeolocationElement/HTMLGeolocationElement
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{APIRef("HTML DOM")}}

**`HTMLGeolocationElement()`** コンストラクターは、新しい {{domxref("HTMLGeolocationElement")}} オブジェクトインスタンスを生成します。

## 構文

```js-nolint
new HTMLGeolocationElement()
```

### 引数

なし。

### 返値

ブラウザーから内部的に使用された場合は、新しい {{domxref("HTMLGeolocationElement")}} のオブジェクトインスタンス。

開発者は、`HTMLGeolocationElement()` コンストラクターを直接使用して新しい `HTMLGeolocationElement` インスタンスを作成することはできません。そうしようとすると、「不正なコンストラクター」エラーが発生します。

### 例

#### プログラムから新しい `HTMLGeolocationElement` インスタンスを作成

新しい `HTMLGeolocationElement` インスタンスをプログラムで作成するには、コンストラクタを直接使用しようとする代わりに、{{domxref("Document.createElement()")}} を使用して新しい {{htmlelement("geolocation")}} 要素インスタンスを作成します。

```js
const geo = document.createElement("geolocation");
```

その後、DOM に追加することで使用することができます。

```js
document.body.append(geo);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{htmlelement("geolocation")}} 要素
