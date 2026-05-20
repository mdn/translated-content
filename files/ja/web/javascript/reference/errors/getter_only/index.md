---
title: 'TypeError: setting getter-only property "x"'
slug: Web/JavaScript/Reference/Errors/Getter_only
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

JavaScript の[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)専用の例外 "setting getter-only property" は、[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)のみが定義されているプロパティに新しい値を設定しようとしたとき、または同様にゲッターのみが定義されている[プライベートアクセサープロパティ](/ja/docs/Web/JavaScript/Reference/Classes/Private_elements)に設定しようとしたときに発生します。

## エラーメッセージ

```plain
TypeError: Cannot set property x of #<Object> which has only a getter (V8-based)
TypeError: '#x' was defined without a setter (V8-based)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
TypeError: Trying to access an undefined private setter (Safari)
```

## エラーの種類

[厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)でのみ、{{jsxref("TypeError")}}。

## エラーの原因

[ゲッター](/ja/docs/Web/JavaScript/Reference/Functions/get)のみが定義されているプロパティに、新しい値を設定しようとしています。厳格モード以外では暗黙裡に無視されるだけですが、 [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)では {{jsxref("TypeError")}} が発生します。クラスは常に厳格モードで動作するため、ゲッターのみを持つプライベート要素に値を代入しようとすると、常にこのエラーが発生します。

## 例

### セッターのないプロパティ

下記の例では、プロパティのゲッターの設定方法を示しています。[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を指定していないため、 `temperature` プロパティに `30` を設定しようとすると、`TypeError` が発生します。詳細は {{jsxref("Object.defineProperty()")}} ページを見てください。

```js example-bad
"use strict";

function Archiver() {
  const temperature = null;
  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
  });
}

const arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting getter-only property "temperature"
```

このエラーを修正するには、 temperature プロパティに値を設定しようとしている 16 行目を取り除くか、次のように[セッター](/ja/docs/Web/JavaScript/Reference/Functions/set)を実装します。

```js example-good
"use strict";

function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

## 関連情報

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineProperties()")}}
