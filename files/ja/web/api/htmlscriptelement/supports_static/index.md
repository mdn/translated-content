---
title: "HTMLScriptElement: supports() 静的メソッド"
short-title: supports()
slug: Web/API/HTMLScriptElement/supports_static
l10n:
  sourceCommit: 3bd335bf04ca78b7f4917ebc99e0f4f47f11d3de
---

{{APIRef("HTML DOM")}}

**`supports()`** は {{domxref("HTMLScriptElement")}} インターフェイスの静的メソッドで、ユーザーエージェントが対応しているスクリプトの種類を機能的に検出するための、単純で一貫したメソッドを提供します。

このメソッドは、ほとんどの現代のブラウザーが対応しているクラシックスクリプトとモジュールスクリプトに対して `true` を返すことが期待されています。

## 構文

```js-nolint
HTMLScriptElement.supports(type)
```

### 引数

- `type`

  - : 対応しているかどうかを調べるスクリプトの種類を示す文字列リテラルです。
    対応している値は以下の通りで、大文字と小文字が区別されます。

    - `"classic"`
      - : クラシックスクリプトに対応しているかどうかを検査します。
        「クラシック」スクリプトとは、モジュールスクリプトより前の通常の、伝統的な JavaScript ファイルのことです。
    - `"module"`
      - : [モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)に対応しているかどうかを検査します。
    - `"importmap"`
      - : インポートマップに対応しているかどうかを検査します。
    - `"speculationrules"`
      - : 投機ルールに対応し、有効になっているかどうかを検査します。

    他の値であれば、このメソッドは `false` を返します。

### 返値

指定されたスクリプトに対応している場合は `true` を、そうでない場合は `false` を返す。

## 例

下記のコードは `HTMLScriptElement.supports()` が定義されているかどうかを調べ、定義されている場合はそれを使用して特定の種類のスクリプトに対応しているかどうかを検査する方法を示しています。

```js
const log = document.getElementById("log");

function checkSupport(type) {
  const result = HTMLScriptElement.supports(type) ? "true" : "false";
  log.textContent += `HTMLScriptElement.supports('${type}') は ${result}\n`;
}

if (typeof HTMLScriptElement.supports === "undefined") {
  log.textContent = "HTMLScriptElement.supports() メソッドに対応していません";
} else {
  // 様々な種類のスクリプトに対応しているかどうかをチェック
  checkSupport("module");
  checkSupport("classic");
  checkSupport("importmap");
  checkSupport("speculationrules");
  // 他の値ならば、このメソッドは false を返す
  checkSupport("anything else");
}
```

```html hidden
<textarea id="log" rows="6" cols="80"></textarea>
```

{{ EmbedLiveSample('Examples') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement")}}
- {{HTMLElement("script")}}
- [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)
- {{domxref("Worker/Worker","Worker")}} コンストラクター
