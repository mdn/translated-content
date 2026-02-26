---
title: Руководство по CSS
slug: Web/CSS/Reference
---

{{CSSRef}}

Данный _справочник по CSS_ перечисляет все стандартные свойства, [псевдоклассы](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-classes) и [псевдоэлементы](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-elements), [@-правила](/ru/docs/Web/CSS/Guides/Syntax/At-rules), единицы измерения и селекторы [CSS](/ru/docs/Web/CSS) в алфавитном порядке. Справочник позволит вам быстро найти подробную информацию о каждом из них. Он не только перечисляет свойства CSS 1 и CSS 2.1, но является и справочником по CSS3 со ссылками на описание каждого стандартизированного или уже стабилизированного свойства [CSS3](/ru/docs/Web/CSS/CSS3). Также включает в себя краткое руководство [DOM-CSS / CSSOM](#DOM_CSS).

Заметьте, что определения CSS-правил полностью (ASCII) [текста-ориентированы](https://www.w3.org/TR/css-syntax-3/#intro), в то время как определения правил DOM-CSS / CSSOM [объектно-ориентированы](https://www.w3.org/TR/cssom/#introduction).

Смотрите также [Mozilla CSS Extensions](/ru/docs/Web/CSS/Mozilla_Extensions) для Gecko-специфичных свойств с префиксом `-moz`; и [WebKit CSS Extensions](/ru/docs/Web/CSS/Webkit_Extensions) для WebKit-специфичных свойств. Смотрите [Обзор CSS-префиксов для разных браузеров от Peter Beverloo](https://peter.sh/experiments/vendor-prefixed-css-property-overview/) для всех свойств с префиксами.

## Базовый синтаксис правил

Имейте в виду, что любая синтаксическая ошибка в задании правил сделает некорректным всё правило.

### Стили

```
selectorlist { property: value; [more property:value; pairs] }
```

...где selectorlist: selector[:pseudo-class] [::pseudo-element] [, more selectorlists]

Смотрите списки селекторов, псевдоэлементов и псевдоклассов ниже.

#### Примеры

```css
strong {
  color: red;
}
div.menu-bar li:hover > ul {
  display: block;
}
```

Больше о примерах: [#1](/ru/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#information_selectors), [#2](/ru/docs/Learn_web_development/Core/Styling_basics/Basic_selectors#action_using_selectors_based_on_relationships_and_pseudo-classes)

### @-правила

Так как у них есть много различных структурных форматов, смотрите нужный синтаксис [@-правил](/ru/docs/Web/CSS/Guides/Syntax/At-rules).

## Справочный указатель

{{CSS_Ref}}

## Селекторы

- Базовые селекторы
  - [По тегу](/ru/docs/Web/CSS/Reference/Selectors/Type_selectors) `elementname`
  - [По классу](/ru/docs/Web/CSS/Reference/Selectors/Class_selectors) `.classname`
  - [По ID](/ru/docs/Web/CSS/Reference/Selectors/ID_selectors) `#idname`
  - [Универсальные](/ru/docs/Web/CSS/Reference/Selectors/Universal_selectors) `* ns|* *|*`
  - [По атрибутам](/ru/docs/Web/CSS/Reference/Selectors/Attribute_selectors) `[attr=value]`

- Комбинационные
  - [смежный селектор](/ru/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator) `A + B`
  - [следующего элемента](/ru/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) `A ~ B`
  - [дочерних элементов](/ru/docs/Web/CSS/Reference/Selectors/Child_combinator) `A > B`
  - [потомков](/ru/docs/Web/CSS/Reference/Selectors/Descendant_combinator) `A B`

- Псевдоэлементы [(больше информации)](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
  - {{ Cssxref("::after") }}
  - {{ Cssxref("::before") }}
  - {{ Cssxref("::first-letter") }}
  - {{ Cssxref("::first-line") }}
  - {{ Cssxref("::selection") }}
  - {{ Cssxref("::backdrop") }}
  - {{ Cssxref("::placeholder") }} {{experimental_inline}}
  - {{ Cssxref("::marker") }} {{experimental_inline}}
  - {{ Cssxref("::spelling-error") }} {{experimental_inline}}
  - {{ Cssxref("::grammar-error") }} {{experimental_inline}}

- Псевдоклассы [(больше информации)](/ru/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - {{ Cssxref(":active") }}
  - {{ cssxref(':any')}}
  - {{ Cssxref(":checked") }}
  - {{ Cssxref(":default") }}
  - {{ Cssxref(":dir", ":dir()")}}
  - {{ Cssxref(":disabled") }}
  - {{ Cssxref(":empty") }}
  - {{ Cssxref(":enabled") }}
  - {{ Cssxref(":first") }}
  - {{ Cssxref(":first-child") }}
  - {{ Cssxref(":first-of-type") }}
  - {{ Cssxref(":fullscreen") }}
  - {{ Cssxref(":focus") }}
  - {{ Cssxref(":hover") }}
  - {{ Cssxref(":indeterminate") }}
  - {{ Cssxref(":in-range") }}
  - {{ Cssxref(":invalid") }}
  - {{ Cssxref(":lang", ":lang()") }}
  - {{ Cssxref(":last-child") }}
  - {{ Cssxref(":last-of-type") }}
  - {{ Cssxref(":left") }}
  - {{ Cssxref(":link") }}
  - {{ Cssxref(":not", ":not()") }}
  - {{ Cssxref(":nth-child", ":nth-child()") }}
  - {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
  - {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
  - {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
  - {{ Cssxref(":only-child") }}
  - {{ Cssxref(":only-of-type") }}
  - {{ Cssxref(":optional") }}
  - {{ Cssxref(":out-of-range") }}
  - {{ Cssxref(":read-only") }}
  - {{ Cssxref(":read-write") }}
  - {{ Cssxref(":required") }}
  - {{ Cssxref(":right") }}
  - {{ Cssxref(":root") }}
  - {{ Cssxref(":scope") }}
  - {{ Cssxref(":target") }}
  - {{ Cssxref(":valid") }}
  - {{ Cssxref(":visited") }}

Полный [список селекторов](https://www.w3.org/TR/selectors/#selectors) в спецификации Selectors Level 3.

## Обучение CSS3

Эти маленькие страницы описывают технологии, появившиеся в CSS3 или CSS2.1, но с плохой поддержкой браузерами до недавнего времени:

- [Медиавыражения](/ru/docs/Web/CSS/Guides/Media_queries/Using)
- [Счётчики](/ru/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- [Градиенты](/ru/docs/Web/CSS/Guides/Images/Using_gradients)
- [Трансформации](/ru/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Анимации](/ru/docs/Web/CSS/Guides/Animations/Using)
- [Переходы](/ru/docs/Web/CSS/Guides/Transitions/Using)
- [Множественные фоны](/ru/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- [Flexbox](/ru/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Многоколоночные макеты](/ru/docs/Web/CSS/Guides/Multicol_layout/Using)

## Концепции

- [CSS синтаксис](/ru/docs/Web/CSS/Guides/Syntax/Introduction)
- [@-правила](/ru/docs/Web/CSS/Guides/Syntax/At-rules)
- [Комментарии](/ru/docs/Web/CSS/Guides/Syntax/Comments)
- [Специфичность](/ru/docs/Web/CSS/Guides/Cascade/Specificity)
- [Начальное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
- [Наследование](/ru/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Указанное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_8a702f25e61d14d8bd6ee6f7e88ca236512427b92b01a92c1d11f9edbb8f5fe1)
- [Высчитанное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
- [Используемое значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
- [Актуальное значение](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing)
- [Вычисленное значение](/ru/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4) (почти то же, что высчитанное)
- [Box-модель](/ru/docs/Web/CSS/Guides/Box_model/Introduction)
- [Замещаемый элемент](/ru/docs/Web/CSS/Guides/Images/Replaced_element_properties)
- [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
- [Сокращённые свойства](/ru/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Объединение отступов](/ru/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- [Модель визуального форматирования](/ru/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Слои](/ru/docs/Glossary/Layout_mode)

## DOM-CSS / CSSOM

Важнейшие типы объектов:

- document . [styleSheets](/ru/docs/Web/API/Document/styleSheets)
- styleSheets\[x] . [cssRules](/ru/docs/Web/API/CSSRuleList)
- cssRules\[x] . [cssText](/ru/docs/Web/API/CSSRule/cssText) (селекторы и стили)
- cssRules\[x] . [selectorText](/ru/docs/Web/API/CSSStyleRule/selectorText)
- elem . [style](/ru/docs/Web/API/HTMLElement/style)
- elem . style . [cssText](/ru/docs/Web/API/CSSStyleDeclaration/cssText) (только стили)
- elem . [className](/ru/docs/Web/API/Element/className)
- elem . [classList](/ru/docs/Web/API/Element/classList)

важные методы:

- {{domxref("CSSStyleSheet.insertRule")}}
- {{domxref("CSSStyleSheet.deleteRule")}}
