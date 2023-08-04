---
title: CSS
slug: Web/API/CSS
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("CSSOM")}}

**`CSS`** インターフェイス は CSS に関連した便利なメソッドを持っています。このインターフェイスにはオブジェクトは実装されていません。静的メソッドのみがあり、実用的なインターフェイスになっています。

## プロパティ

_CSS インターフェイスはユーティリティインターフェイスです。この型のオブジェクトは作成できませんん。静的プロパティのみが定義されています。_

### 静的プロパティ

- {{DOMxRef("CSS.highlights_static", "CSS.highlights")}} {{Experimental_Inline}}
  - : `HighlightRegistry` へのアクセスを提供します。これは任意のテキスト範囲を {{domxref("css_custom_highlight_api", "CSS Custom Highlight API", "", "nocode")}} を使用してスタイル設定するために使用するものです。
- {{DOMxRef("CSS.paintWorklet_static", "CSS.paintWorklet")}} {{Experimental_Inline}} {{SecureContext_Inline}}
  - : 描画に関するすべてのクラスを担当するワークレットへのアクセスを提供します。

## メソッド

_CSS インターフェイスはユーティリティインターフェイスです。この型のオブジェクトは作成できません。静的メソッドのみが定義されています。_

### 静的メソッド

_継承している静的メソッドはありません。_

- {{DOMxRef("CSS.registerProperty_static", "CSS.registerProperty()")}}
  - : {{cssxref('--*', 'カスタムプロパティ')}}を登録し、プロパティ型のチェック、既定値、値の継承の有無を指定します。
- {{DOMxRef("CSS.supports_static", "CSS.supports()")}}
  - : 引数で与えられた*プロパティと値*の組や条件に対応しているかどうかを示す論理値を返します。
- {{DOMxRef("CSS.escape_static", "CSS.escape()")}}
  - : 主に CSS セレクターの一部として使用するための文字列をエスケープするのに使用できます。
- {{DOMxRef("CSS/factory_functions_static", 'CSS ファクトリー関数')}}

  - : 使用したファクトリー関数のメソッドの名前を単位としてパラメーターの数値の値を持つ新しい [`CSSUnitValue`](/ja/docs/Web/API/CSSUnitValue) を返すために使用できます。

    ```js
    CSS.em(3); // CSSUnitValue {value: 3, unit: "em"}
    ```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Components.utils.importGlobalProperties](/ja/docs/Components.utils.importGlobalProperties)
