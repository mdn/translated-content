---
title: <switch>
slug: Web/SVG/Reference/Element/switch
l10n:
  sourceCommit: 1ea9b498e0af377455459fbbe33164091fb75f61
---

**`<switch>`** は [SVG](/ja/docs/Web/SVG) の要素で、その直接の子要素の {{SVGAttr("requiredExtensions")}} および {{SVGAttr("systemLanguage")}} 属性を順に評価し、これらの属性が true と評価された最初の子要素を描画します。

他の直接の子要素はバイパスされ、描画されません。子要素が {{SVGElement("g")}} のようなコンテナー要素であった場合、そのサブツリーも処理されたり描画されたりするか、バイパスされたり描画されなかったりします。

> [!NOTE]
> `display` および `visibility` プロパティは、 `<switch>` 要素の処理には何の影響もありません。特に、子に `display:none` を設定しても、 `<switch>` 処理の真偽テストには影響しません。

## 使用コンテキスト

{{svginfo}}

## 属性

- {{SVGAttr("requiredExtensions")}}
  - : 要素を描画するためにユーザーエージェントが対応していなければならない言語拡張を参照する URL 値を、空白区切りで並べたリストです。
- {{SVGAttr("systemLanguage")}}
  - : 対応している {{glossary("BCP 47 language tag", "言語タグ")}}をカンマ区切りで並べたリストです。

## DOM インターフェイス

この要素は {{domxref("SVGSwitchElement")}} インターフェイスを実装しています。

## 例

この例は、ブラウザーの言語設定に応じて異なるテキストコンテンツを表示する方法を示しています。`<switch>` 要素は、{{SVGAttr("systemLanguage")}} 属性がユーザーの言語に一致する子要素のうち最初のものを表示します。どれも一致しない場合は、`systemLanguage` 属性を持たない代替要素を表示します。

```html
<svg viewBox="0 -20 100 50">
  <switch>
    <text systemLanguage="ar">مرحبا</text>
    <text systemLanguage="de,nl">Hallo!</text>
    <text systemLanguage="en-us">Howdy!</text>
    <text systemLanguage="en-gb">Wotcha!</text>
    <text systemLanguage="en-au">G'day!</text>
    <text systemLanguage="en">Hello!</text>
    <text systemLanguage="es">Hola!</text>
    <text systemLanguage="fr">Bonjour!</text>
    <text systemLanguage="ja">こんにちは</text>
    <text systemLanguage="ru">Привет!</text>
    <text requiredExtensions="http://example.org/lang/ext/emoji">☺</text>
  </switch>
</svg>
```

{{ EmbedLiveSample('examples') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("requiredExtensions")}}
- {{SVGAttr("systemLanguage")}}
