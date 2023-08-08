---
title: CSS Fonts
slug: Web/CSS/CSS_fonts
---

{{CSSRef}}

**CSS Fonts** - модуль в CSS, который определяет свойства связанные со шрифтами и как шрифтовые ресурсы загружаются. Модуль позволяет вам задать стиль шрифта, вроде font-family, font-size и font-weight, lineheight и варианты отображения знаков, когда для одного доступны сразу несколько

## Базовый пример

Следующий пример показывает простое использование шрифтовых свойств, стилизующих тэг \<p>.

```css
p {
  width: 600px;
  margin: 0 auto;
  font-family: "Helvetica Neue", "Arial", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-variant-ligatures: normal;
  font-size: 2rem;
  letter-spacing: 1px;
}
```

```html
<p>
  Three hundred years ago<br />
  I thought I might get some sleep<br />
  I stretched myself out onna antique bed<br />
  An' my spirit did a midnite creep
</p>
```

Вывод на экран будет следующим:

{{EmbedLiveSample('Базовый_пример', '100%', '200')}}

## Различные примеры шрифтов

Вы можете найти множество вариантов шрифтов на [v-fonts.com](https://v-fonts.com/) и [axis-praxis.org](https://www.axis-praxis.org/); так же смотрите наше руководство [Variable fonts](/ru/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) для большей информации по использованию.

## Отсылки

### Properties

- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("font-kerning")}}
- {{cssxref("font-language-override")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-variant-alternates")}}
- {{cssxref("font-variant-caps")}}
- {{cssxref("font-variant-east-asian")}}
- {{cssxref("font-variant-ligatures")}}
- {{cssxref("font-variant-numeric")}}
- {{cssxref("font-variant-position")}}
- {{cssxref("font-variation-settings")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}

### At-rules

- {{cssxref("@font-face")}}
  - : {{cssxref("@font-face/font-family", "font-family")}}
    - {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}
    - {{cssxref("@font-face/font-style", "font-style")}}
    - {{cssxref("@font-face/font-variant", "font-variant")}}
    - {{cssxref("@font-face/font-weight", "font-weight")}}
    - {{cssxref("@font-face/font-stretch", "font-stretch")}}
    - {{cssxref("@font-face/src", "src")}}
    - {{cssxref("@font-face/unicode-range", "unicode-range")}}
    - {{cssxref("@font-feature-values")}}

## Руководство

- [Fundamental text and font styling](/ru/docs/Learn/CSS/Styling_text/Fundamentals)
  - : В этой обучающей статье для новичков мы детально описываем основы стилизации текста/шрифта, включая определение жирности начертания, вида шрифта и стилей, рассматриваем сокращённую запись свойства font, декорации текста и другие эффекты, а так же межстрочные и межбуквенные интервалы.
- [OpenType font features guide](/ru/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide)
  - : Особенности шрифтов или их варианты ссылаются на различные стили символов или букв, содержащиеся в OpenType. Руководство описывает такие вещи как лигатура (специальные символы объединяющие буквы вроде 'fi' или 'ffl'), кернинг (то, как свободное место распределяется между различными символами) и другое. Всё перечисленное относится к особенностям OpenType и позволяет использовать в вебе специальные свойства и свойства контроля нижнего уровня {{cssxref("font-feature-settings")}}. В статье есть всё, что вам нужно знать об особенностях OpenType шрифтов в CSS.
- [Variable fonts guide](/ru/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide)
  - : **Variable fonts** are an evolution of the OpenType font specification that enables many different variations of a typeface to be incorporated into a single file, rather than having a separate font file for every width, weight, or style. This article will give you all you need to know to get you started using variable fonts.

## Specifications

| Specification                                           | Status                  | Comment                                                                                         |
| ------------------------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Fonts')}}                              | {{Spec2('CSS4 Fonts')}} | Adds `font-variation-settings` (and related higher-level properties) and `font-optical-sizing`. |
| {{SpecName('CSS3 Fonts')}}                              | {{Spec2('CSS3 Fonts')}} | Adds `font-feature-settings` (and related higher-level properties)                              |
| {{SpecName('CSS2.1', 'fonts.html#font-shorthand', '')}} | {{Spec2('CSS2.1')}}     |                                                                                                 |
| {{SpecName('CSS1', '#font', '')}}                       | {{Spec2('CSS1')}}       | Initial definition                                                                              |
