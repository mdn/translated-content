---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
---

{{jsSidebar("Errors")}}

JavaScript の [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)専用の例外 "setting getter-only property" は、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)のみが定義されているプロパティに新しい値を設定しようとした時に発生します。

## エラーメッセージ

```js
TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Cannot set property "prop" of #<Object> which has only a getter (Chrome)
```

## エラーの種類

[strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ、{{jsxref("TypeError")}}。

## エラーの原因

[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)のみが定義されているプロパティに、新しい値を設定しようとしています。非 strict モードでは暗黙裡に無視されるだけですが、 [strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では {{jsxref("TypeError")}} が発生します。

## 例

### セッターのないプロパティ

下記の例では、プロパティのゲッターの設定方法を示しています。[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を指定していないため、 `temperature` プロパティに `30` を設定しようとすると、`TypeError` が発生します。詳細は {{jsxref("Object.defineProperty()")}} ページを見てください。

```js example-bad
"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

このエラーを修正するには、 temperature プロパティに値を設定しようとしている 16 行目を取り除くか、次のように[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を実装します。

```js example-good
"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## 関連項目

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
