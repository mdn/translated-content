---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
---

{{CSSRef}}

**CSS Houdini** は、 CSS エンジンの一部を公開する一連の API です。これにより、開発者は CSS の拡張機能を簡単に作成することができます。これらの拡張機能は、ブラウザーでまだ利用できない機能を代替したり、レイアウトの新しい方法を試したり、クリエイティブな境界線やその他の効果を追加したりするものです。

多くの Houdini の例では、 API の創造的な可能性が紹介されていますが、実用的な使用例もたくさんあります。例えば、 Houdini を使って、型のチェックや既定値を持つ高度なカスタムプロパティを作成することができます。

## 基本的な例

通常の [CSS カスタムプロパティ](/ja/docs/Web/CSS/--*)は、プロパティの名前と値から成ります。したがって、 `--background-color` というカスタムプロパティを生成し、色の値を取るようにするとします。この値は、 CSS 内で色の値であるかのように扱われます。

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

しかし、上記の例では、このプロパティに他の値を使用したり、長さを設定することを止めることはできません。そうすると、 `background-color: 12px` は有効ではないので、このプロパティが使用されている場所には背景色が設定されません。ブラウザーは、有効でないと認識した CSS に出会うと、その行を捨ててしまうからです。

しかし {{cssxref("@property")}} を使用すると、 {{CSSxRef("@property/syntax","syntax")}} に `<color>` を指定してカスタムプロパティを設定することができます。これは、このプロパティが有効な色である値を持つ必要があることを示します。

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini ワークレット

Houdini の機能の一つにワークレット ({{domxref("Worklet")}}) があります。ワークレットとは JavaScript で書かれたモジュールで、 Houdini の API の一つを使って CSS を拡張するものです。ワークレットの例は {{domxref("PaintWorklet.registerPaint()")}} のページで見ることができます。いったんワークレットが登録されると、他の値と同様に CSS で使用することができます。つまり、 JavaScript の開発者でなくても、他の人が作成したワークレットを使って Houdini API にアクセスすることができます。

[Houdini.how](https://houdini.how/) のウェブサイトには、自分のサイトで試すことができるたくさんのワークレットがあります。

## リファレンス

### CSS アット規則と記述子

{{CSSxRef("@property")}} アット規則で高度なカスタムプロパティを登録することができます。

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","inherits")}}
- {{CSSxRef("@property/initial-value","initial-value")}}
- {{CSSxRef("@property/syntax","syntax")}}

### Houdini API リファレンス

- {{domxref("CSS_Properties_and_Values_API")}}
- {{domxref("CSS_Typed_OM_API")}}
- {{domxref("CSS_Painting_API")}}
- {{domxref("Worklet")}} のリファレンス

### Houdini ガイド

- [プロパティと値 API ガイド](/ja/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [型付き OM API ガイド](/ja/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Painting API の使用](/ja/docs/Web/API/CSS_Painting_API/Guide)

## 外部リソース

- [Interactive introduction to Houdini](http://houdini.glitch.me/)
- [A Practical Overview of CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Smarter custom properties with Houdini's new API](https://web.dev/css-props-and-vals/)
