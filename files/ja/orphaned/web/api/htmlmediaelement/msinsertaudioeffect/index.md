---
title: HTMLMediaElement.msInsertAudioEffect()
slug: orphaned/Web/API/HTMLMediaElement/msInsertAudioEffect
original_slug: Web/API/HTMLMediaElement/msInsertAudioEffect
---

{{APIRef("HTML DOM")}}{{Non-standard_Header}}

**`HTMLMediaElement.msInsertAudioEffect()`** メソッドは、指定された音響効果をメディアパイプラインに挿入するメソッドです。

この独自メソッドは、 Internet Explorer と Microsoft Edge に固有のものです。

## 構文

```js-nolint
msInsertAudioEffect(activatableClassId, effectRequired)
msInsertAudioEffect(activatableClassId, effectRequired, config)
```

### 引数

- `activatableClassId`
  - : 音響効果クラスを定義する文字列。
- `effectRequired`
  - : 論理値で、 _true_ に設定された場合、音響効果を定義する必要があります。
- `config` {{Optional_Inline}}
  - : 省略可能な {{JSxRef("Object")}} で、追加で必要な構成を定義します。

### 返値

なし ({{jsxref("undefined")}})。

## 関連情報

- {{DOMxRef("HTMLMediaElement")}}
- [Microsoft API 拡張](/ja/docs/Web/API/Microsoft_Extensions)
