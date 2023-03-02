---
title: HTMLScriptElement.supports()
slug: Web/API/HTMLScriptElement/supports
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef}}

**`supports()`** は {{domxref("HTMLScriptElement")}} インターフェイスの静的メソッドで、ユーザーエージェントが対応しているスクリプトの種類を機能的に検出するための、単純で一貫したメソッドを提供します。

このメソッドは、ほとんどの現代のブラウザーが対応しているクラシックスクリプトとモジュールスクリプトに対して `true` を返すことが期待されています。

## 構文

```js-nolint
supports(type)
```

### 引数

- `type`

  - : 対応しているかどうかを調べるスクリプトの種類を示す文字列リテラルです。
    対応している値は、以下の通りで、大文字と小文字が区別されます。

    - `"classic"`
      - : クラシックスクリプトが対応しているかどうかをテストします。
        「クラシック」スクリプトとは、モジュールスクリプトより前の通常の、伝統的な JavaScript ファイルのことです。
    - `"module"`
      - : [モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)に対応しているかどうかをテストします。
    - `"importmap"`
      - : インポートマップに対応しているかどうかをテストします。
    - `"speculationrules"`
      - : 投機ルールが対応し、有効になっているかどうかをテストします。

    他の値であれば、このメソッドは `false` を返します。

### 返値

指定されたスクリプトに対応している場合は `true` を、そうでない場合は `false` を返す。

## 例

下記のコードは `HTMLScriptElement.supports()` が定義されているかどうかを調べ、定義されている場合はそれを使用して特定の種類のスクリプトに対応しているかどうかをテストする方法を示しています。

```html hidden
<textarea id="log" rows="5" cols="110"></textarea>
```

```js
if (typeof HTMLScriptElement.supports === 'undefined') {
  //Check if method is defined
  console.log("HTMLScriptElement.supports() method is not supported");
}
else
{
  //Returns true for the supported values
  console.log(`HTMLScriptElement.supports('module'): ${HTMLScriptElement.supports('module')}`);
  console.log(`HTMLScriptElement.supports('classic'): ${HTMLScriptElement.supports('classic')}`);
  console.log(`HTMLScriptElement.supports('importmap'): ${HTMLScriptElement.supports('importmap')}`);
  console.log(`HTMLScriptElement.supports('speculationrules'): ${HTMLScriptElement.supports('speculationrules')}`);

  //Returns false for any other values
  console.log(`HTMLScriptElement.supports('anything else'): ${HTMLScriptElement.supports('anything else')}`);
}
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
