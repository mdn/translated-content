---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: 7eff4df25ad857f65577930903797127ebabf991
---

{{APIRef("CSSOM")}}

Интерфейс **`CSSRule`** представляет одно CSS-правило. Существует несколько типов правил, которые наследуют свойства от `CSSRule`.

- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSFontPaletteValuesRule")}}
- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSPropertyRule")}}

## Свойства экземпляра

Интерфейс `CSSRule` определяет общие свойства, общие для всех правил. Свойства, уникальные для определенных типов правил, указываются в более специализированных интерфейсах для соответствующих типов этих правил.

- {{domxref("CSSRule.cssText")}}
  - : Текстовое представление правила (например, «`h1,h2 { font-size: 16pt }`» или «`@import 'url'`»). Для доступа или изменения части правила (например, значения «font-size» из примера выше) следует использовать свойства специализированных интерфейсов.
- {{domxref("CSSRule.parentRule")}} {{ReadOnlyInline}}
  - : Возвращает содержащее правило или `null`. Например, если это правило стиля внутри блока {{cssxref("@media")}}, то родительским правилом будет {{domxref("CSSMediaRule")}}.
- {{domxref("CSSRule.parentStyleSheet")}} {{ReadOnlyInline}}
  - : Возвращает объект {{domxref("CSSStyleSheet")}} таблицы стилей, содержащей это правило.
- {{domxref("CSSRule.type")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Возвращает тип правила.

## Примеры

Ссылки на `CSSRule` можно получить из списка `cssRules` в {{domxref("CSSStyleSheet")}}.

```js
let myRules = document.styleSheets[0].cssRules; // Вернёт CSSRuleList
console.log(myRules);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Использование динамической информации о стилях](/ru/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
