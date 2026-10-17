---
title: Каскад и наследование CSS
short-title: Каскад и наследование
slug: Web/CSS/Guides/Cascade
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

{{CSSRef}}

Модуль **каскада и наследования CSS** определяет правила назначения значений свойствам посредством каскада и наследования. Этот модуль задаёт правила нахождения указанного значения для всех свойств всех элементов.

Один из фундаментальных принципов CSS — каскадирование правил. Оно позволяет нескольким таблицам стилей влиять на представление документа. Объявления «свойство-значение» в CSS определяют, как отображается документ. Несколько объявлений могут задавать разные значения для одного и того же сочетания элемента и свойства, но к каждому свойству CSS может быть применено только одно значение. Модуль каскада CSS определяет, как разрешаются такие конфликты.

Бывает и обратная ситуация: иногда нет ни одного объявления, задающего значение свойства. Модуль каскада CSS определяет, как такие отсутствующие значения устанавливаются — через наследование или из начального значения свойства.

> [!NOTE]
> Правила нахождения указанных значений в контексте страницы и её полей описаны в [модуле страничных медиа CSS](/ru/docs/Web/CSS/Guides/Paged_media).

## Справочник

### Свойства

- {{cssxref("all")}}

### Директивы и дескрипторы

- {{cssxref("@import")}}
- {{cssxref("@layer")}}

### Ключевые слова

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("revert")}}
- {{cssxref("revert-layer")}}
- {{cssxref("unset")}}
- Флаг {{cssxref("important", "!important")}}

### Интерфейсы

- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSRule")}}

### Термины и определения

- [Действительное значение](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Анонимный слой](/ru/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_block_at-rule_for_named_and_anonymous_layers)
- [Авторский источник стилей](/ru/docs/Web/CSS/Guides/Cascade/Introduction#author_stylesheets)
- [Каскад](/ru/docs/Web/CSS/Guides/Cascade/Introduction)
- [Вычисленное значение](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
- [Начальное значение](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
- [Именованный слой](/ru/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#the_layer_statement_at-rule_for_named_layers)
- [Разрешённое значение](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing#resolved_value)
- [Сокращённые свойства](/ru/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
- [Специфичность](/ru/docs/Web/CSS/Guides/Cascade/Specificity)
- [Указанное значение](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing#specified_value)
- {{glossary("style origin", "Источник стилей")}}
- [Используемое значение](/ru/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
- [Пользовательский источник стилей](/ru/docs/Web/CSS/Guides/Cascade/Introduction#user_stylesheets)
- [Источник стилей браузера (user-agent)](/ru/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets)

## Руководства

- [Введение в каскад CSS](/ru/docs/Web/CSS/Guides/Cascade/Introduction)
  - : Руководство по алгоритму каскада, который определяет, как браузеры объединяют значения свойств из разных источников.

- [Наследование в CSS](/ru/docs/Web/CSS/Guides/Cascade/Inheritance)
  - : Руководство по наследованию в CSS.

- [Изучение: Разрешение конфликтов](/ru/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
  - : Самые фундаментальные концепции CSS — каскад, специфичность и наследование, — которые управляют тем, как CSS применяется к HTML и как разрешаются конфликты.

- [Изучение: Каскадные слои](/ru/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
  - : Введение в [каскадные слои](/ru/docs/Web/CSS/Reference/At-rules/@layer) — более продвинутую возможность, основанную на фундаментальных концепциях [каскада CSS](/ru/docs/Web/CSS/Guides/Cascade/Introduction) и [специфичности CSS](/ru/docs/Web/CSS/Guides/Cascade/Specificity).

## Связанные концепции

- [Стили, привязанные к элементу](/ru/docs/Web/HTML/Reference/Global_attributes/style)
- [Встроенные стили и каскад](/ru/docs/Web/CSS/Guides/Cascade/Introduction#inline_styles)
- [Условные правила для @import](/ru/docs/Web/CSS/Reference/At-rules/@import#importing_css_rules_conditional_on_media_queries)
- [Синтаксис определения значений](/ru/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Спецификации

{{Specifications}}

## Смотрите также

- [Модуль селекторов CSS](/ru/docs/Web/CSS/Guides/Selectors)
- [Модуль псевдоэлементов CSS](/ru/docs/Web/CSS/Guides/Pseudo-elements)
- [Модуль страничных медиа CSS](/ru/docs/Web/CSS/Guides/Paged_media)
- [Модуль условных правил CSS](/ru/docs/Web/CSS/Guides/Conditional_rules)
- [Модуль вложенности CSS](/ru/docs/Web/CSS/Guides/Nesting)
- [Сокращённые свойства](/ru/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
