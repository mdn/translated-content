---
title: Руководство по CSS
slug: Web/CSS/Reference
---

{{CSSRef}}

Данный _справочник по CSS_ перечисляет все стандартные свойства, [псевдоклассы](/ru/docs/Web/CSS/Pseudo-classes) и [псевдоэлементы](/ru/docs/Web/CSS/Pseudo-elements), [@-правила](/ru/docs/Web/CSS/At-rule), единицы измерения и селекторы [CSS](/ru/docs/Web/CSS) в алфавитном порядке. Справочник позволит вам быстро найти подробную информацию о каждом из них. Он не только перечисляет свойства CSS 1 и CSS 2.1, но является и справочником по CSS3 со ссылками на описание каждого стандартизированного или уже стабилизированного свойства [CSS3](/ru/docs/Web/CSS/CSS3). Также включает в себя краткое руководство [DOM-CSS / CSSOM](#DOM_CSS).

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

Больше о примерах: [#1](/ru/docs/Learn/CSS/Building_blocks/Selectors#information_selectors), [#2](/ru/docs/Learn/CSS/Building_blocks/Selectors#action_using_selectors_based_on_relationships_and_pseudo-classes)

### @-правила

Так как у них есть много различных структурных форматов, смотрите нужный синтаксис [@-правил](/ru/docs/Web/CSS/At-rule).

## Справочный указатель

{{CSS_Ref}}

## Селекторы

- Базовые селекторы

  - [По тегу](/ru/docs/Web/CSS/Type_selectors) `elementname`
  - [По классу](/ru/docs/Web/CSS/Class_selectors) `.classname`
  - [По ID](/ru/docs/Web/CSS/ID_selectors) `#idname`
  - [Универсальные](/ru/docs/Web/CSS/Universal_selectors) `* ns|* *|*`
  - [По атрибутам](/ru/docs/Web/CSS/Attribute_selectors) `[attr=value]`

- Комбинационные

  - [смежный селектор](/ru/docs/Web/CSS/Next-sibling_combinator) `A + B`
  - [следующего элемента](/ru/docs/Web/CSS/Subsequent-sibling_combinator) `A ~ B`
  - [дочерних элементов](/ru/docs/Web/CSS/Child_combinator) `A > B`
  - [потомков](/ru/docs/Web/CSS/Descendant_combinator) `A B`

- Псевдоэлементы [(больше информации)](/ru/docs/Web/CSS/Pseudo-elements)

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

- Псевдоклассы [(больше информации)](/ru/docs/Web/CSS/Pseudo-classes)

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

- [Медиавыражения](/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Счётчики](/ru/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- [Градиенты](/ru/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [Трансформации](/ru/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- [Анимации](/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [Переходы](/ru/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [Множественные фоны](/ru/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- [Flexbox](/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Многоколоночные макеты](/ru/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts)

## Концепции

- [CSS синтаксис](/ru/docs/Web/CSS/Syntax)
- [@-правила](/ru/docs/Web/CSS/At-rule)
- [Комментарии](/ru/docs/Web/CSS/Comments)
- [Специфичность](/ru/docs/Web/CSS/Specificity)
- [Начальное значение](/ru/docs/Web/CSS/initial_value)
- [Наследование](/ru/docs/Web/CSS/Inheritance)
- [Указанное значение](/ru/docs/Web/CSS/specified_value)
- [Высчитанное значение](/ru/docs/Web/CSS/computed_value)
- [Используемое значение](/ru/docs/Web/CSS/used_value)
- [Актуальное значение](/ru/docs/Web/CSS/actual_value)
- [Вычисленное значение](/ru/docs/Web/CSS/resolved_value) (почти то же, что высчитанное)
- [Box-модель](/ru/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Замещаемый элемент](/ru/docs/Web/CSS/Replaced_element)
- [Синтаксис определения значений](/ru/docs/Web/CSS/Value_definition_syntax)
- [Сокращённые свойства](/ru/docs/Web/CSS/Shorthand_properties)
- [Объединение отступов](/ru/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Модель визуального форматирования](/ru/docs/Web/CSS/Visual_formatting_model)
- [Слои](/ru/docs/Web/CSS/Layout_mode)

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
