---
title: RegExp.prototype.flags
slug: Web/JavaScript/Reference/Global_Objects/RegExp/flags
---

{{JSRef}}

**`flags`** プロパティは、現在の正規表現オブジェクトの[フラグ](/ja/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2)から成る文字列を返します。

{{EmbedInteractiveExample("pages/js/regexp-prototype-flags.html")}}

{{JS_Property_Attributes(0, 0, 1)}}

## 解説

`flags` プロパティのフラグはアルファベット順にソートされます(左から右へ 例えば、`"gimuy"`)。

## 例

### flags の使用

```js
/foo/ig.flags;   // "gi"
/bar/myu.flags;  // "muy"
```

## ポリフィル

```js
if (RegExp.prototype.flags === undefined) {
  Object.defineProperty(RegExp.prototype, 'flags', {
    configurable: true,
    get: function() {
      return this.toString().match(/[gimsuy]*$/)[0];
    }
  });
}
```

## 仕様書

| 仕様書                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------- |
| {{SpecName("ESDraft", "#sec-get-regexp.prototype.flags", "RegExp.prototype.flags")}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.RegExp.flags")}}

## 関連情報

- {{JSxRef("RegExp.prototype.source")}}
