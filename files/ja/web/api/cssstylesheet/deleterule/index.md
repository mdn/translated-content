---
title: CSSStyleSheet.deleteRule()
slug: Web/API/CSSStyleSheet/deleteRule
---

{{APIRef("CSSOM")}}

**`CSSStyleSheet.deleteRule()`** メソッドは、スタイル規則を現在のスタイルシートオブジェクトから削除します。

## 構文

```
stylesheet.deleteRule(index)
```

### 引数

- `index` は、規則の位置を表す倍精度整数値。

### 戻り値

_無効。_

## 例

```js
 myStyles.deleteRule(0);
```

## 仕様

{{Specifications}}

## ブラウザーの実装状況

{{Compat("api.CSSStyleSheet.deleteRule")}}

## 関連情報

- {{domxref("CSSStyleSheet.insertRule")}}
- [Cross-Browser CSS-rules ordering (CSS1)](http://www-archive.mozilla.org/docs/web-developer/css1technote/css1tojs.html#priority)
- [Quirksmode - CSS](http://www.quirksmode.org/dom/w3c_css.html)
