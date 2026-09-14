---
title: <switch>
slug: Web/SVG/Reference/Element/switch
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`<switch>`** は [SVG](/ja/docs/Web/SVG) の要素で、その直接の子要素の {{SVGAttr("requiredFeatures")}}, {{SVGAttr("requiredExtensions")}}, {{SVGAttr("systemLanguage")}} 属性を順に評価し、これらの属性が true と評価された最初の子要素を描画します。

他の直接の子要素はバイパスされ、描画されません。子要素が {{SVGElement("g")}} のようなコンテナー要素であった場合、そのサブツリーも処理されたり描画されたりするか、バイパスされたり描画されなかったりします。

> [!NOTE]
> `display` および `visibility` プロパティは、 `<switch>` 要素の処理には何の影響もありません。特に、子に `display:none` を設定しても、 `<switch>` 処理の真偽テストには影響しません。

## 使用コンテキスト

{{svginfo}}

## DOM インターフェイス

この要素は {{domxref("SVGSwitchElement")}} インターフェイスを実装しています。

## SVG \<switch> の例

この例は、ブラウザーの言語設定に応じて異なるテキストコンテンツを表示する方法を示しています。 `switch` 要素は、 `systemLanguage` 属性がユーザーの言語に一致する子要素の最初のものを表示し、どれも一致しない場合は、 `systemLanguage` 属性を持たない代替要素を表示します。

### HTML コンテンツ

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
    <text>☺</text>
  </switch>
</svg>
```

### 結果

{{ EmbedLiveSample('SVG_switch_example') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
