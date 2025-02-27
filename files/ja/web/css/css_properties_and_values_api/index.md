---
title: CSS プロパティと値 API
slug: Web/CSS/CSS_properties_and_values_API
l10n:
  sourceCommit: d74e7839bc166b9d652abc9cdcfe99de448efb2a
---

{{CSSRef}}

**CSS プロパティと値 API** (CSS properties and values API) モジュールは、モジュールは、新しい CSS プロパティを登録するための方法を定義し、プロパティのデータ型、継承動作、そしてオプションとして初期値を定義します。
この API は、 [CSS 変数のカスケードのためのカスタムプロパティ](/ja/docs/Web/CSS/CSS_cascading_variables)モジュールにおける、 CSS において[二重ダッシュ構文 (`--`)](/ja/docs/Web/CSS/--*) を使用したカスタムプロパティが定義できる機能をを拡張します。
CSS プロパティと値 API は API における [CSS Houdini](/ja/docs/Web/CSS/CSS_Houdini) の傘下にあります。

カスタムプロパティを使用すると、プロジェクト全体で値を再利用できるため、複雑なスタイルシートや繰り返しの多いスタイルシートを簡素化できます。
基本的なカスタムプロパティは、 [CSS 変数のカスケードのためのカスタムプロパティ](/ja/docs/Web/CSS/CSS_cascading_variables)モジュールで定義されています。
CSS プロパティと値 API はこのモジュールを拡張し、このモジュールを拡張し、 CSS で [`@property`](/ja/docs/Web/CSS/@property) アットルールを使用したり、 JavaScript で {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} メソッドを使用したりして、カスタムプロパティにメタデータを追加できるようにします。

登録が CSS であれ JavaScript であれ、カスタムプロパティにメタデータを設定することで、ブラウザーがコンテキストに応じて使用できる期待されるデータ型を提供し、初期値を定義し、継承を制御することができます。

CSS プロパティと値 API のカスタムプロパティの登録は、より基本的な CSS のカスケード変数によるカスタムプロパティ宣言よりも堅牢であり、特に値のトランジションやアニメーションに関しては、ブラウザーがこの種のカスタム値の間を補間することができるため、[二重ダッシュ構文(`--`)](/ja/docs/Web/CSS/--*) を使用するプロパティが文字列置換のように動作するのに比べて、より堅牢です。

## プロパティと値の API の動作

カスタムプロパティと値がAPI経由でどのように使用できるかを確認するには、下のボックスにカーソルを当ててください。

```js hidden
CSS.registerProperty({
  name: "--stop-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "cornflowerblue",
});
```

```css hidden
.box {
  padding: 1rem;
  width: 90%;
  height: 4rem;
  font-family: sans-serif;
  font-size: large;
  color: white;
  border-radius: 0.5rem;
}

.box {
  background: linear-gradient(to right, var(--stop-color), lavenderblush);
  transition: --stop-color 2s;
}

.box:hover {
  --stop-color: aquamarine;
}
```

```html hidden
<div class="box"><p>トランジション付きの線形グラデーション</p></div>
```

{{EmbedLiveSample("",600,120)}}

このボックスは[背景](/ja/docs/Web/CSS/background) が `--stop-color` （カスタムプロパティ）から [`lavenderblush`](/ja/docs/Web/CSS/named-color) までの[線形グラデーション](/ja/docs/Web/CSS/gradient/linear-gradient)で構成されています。
最初、 `--stop-color` の値は `cornflowerblue` に設定されていますが、ボックスにカーソルを合わせると、 2 秒かけて `--stop-color` の[トランジション](/ja/docs/Web/CSS/transition) が `aquamarine` まで遷移します（`linear-gradient(to right, aquamarine, lavenderblush)`）。

## リファレンス

### アットルール

- {{cssxref("@property")}}
  - [syntax](/ja/docs/Web/CSS/@property#descriptors) 記述子
    - [`+` and `#`](/ja/docs/Web/CSS/@property#descriptors) 量化子
    - [`|`](/ja/docs/Web/CSS/@property#descriptors) 結合子
  - [inherits](/ja/docs/Web/CSS/@property#descriptors) 記述子
  - [initial-value](/ja/docs/Web/CSS/@property#descriptors) 記述子

### インターフェイスと API

- {{domxref('CSSPropertyRule')}}
- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty()')}}

## ガイド

- [CSS プロパティと値 API の使用](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)

  - : CSS や JavaScript でカスタムプロパティを登録する方法について、未定義値や無効値の扱い方、代替、継承などのヒントを交えて解説しています。

- [CSS Houdini](/ja/docs/Web/API/Houdini_APIs)
  - : CSS Houdini とは何か、その利点について、利用可能な API とそのステータスの一覧とともに説明します。

## 関連概念

- {{cssxref("var")}}
- [CSSRule](/ja/docs/Web/API/CSSRule)
- [CSSStyleValue](/ja/docs/Web/API/CSSStyleValue)
- [CSS スコープ](/ja/docs/Web/CSS/CSS_scoping)
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS 型付きオブジェクトモデル API](/ja/docs/Web/API/CSS_Typed_OM_API)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [Worklet](/ja/docs/Web/API/Worklet)

## 仕様書

{{Specifications}}

## 関連情報

- [CSS カスケードと継承](/ja/docs/Web/CSS/CSS_cascade)
- [CSS スコープ](/ja/docs/Web/CSS/CSS_scoping)モジュール
- [シャドウ DOM の使用](/ja/docs/Web/API/Web_components/Using_shadow_DOM)
- [CSS 描画 API](/ja/docs/Web/API/CSS_Painting_API)
- [Worklet](/ja/docs/Web/API/Worklet) インターフェイス
- [CSS `env()`](/ja/docs/Web/CSS/env)
- [CSS 型付きオブジェクトモデル](/ja/docs/Web/API/CSS_Typed_OM_API)
