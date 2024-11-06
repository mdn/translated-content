---
title: <custom-ident>
slug: Web/CSS/custom-ident
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [тип данных](/ru/docs/Web/CSS/CSS_Types) **`<custom-ident>`** включает любые определённые пользователем строки, используемые в качестве {{glossary("identifier", "идентификатора")}}. Они чувствительны к регистру, некоторые значения запрещены в разных контекстах, чтобы избежать неоднозначности.

## Синтаксис

Синтаксис `<custom-ident>` похож на синтаксис CSS идентификаторов (таких, как названия свойств), за исключением того, что значения `<custom-ident>` чувствительны к регистру. Они состоят из одного или более следующих символов:

- буквы латинского алфавита(от `A` до `Z`, от `a` до `z`),
- десятеричные цифры (от `0` до `9`),
- дефис (`-`),
- нижнее подчёркивание (`_`),
- экранированный символ (символ с бэкслешем перед ним, `\`),
- символ [Unicode](https://ru.wikipedia.org/wiki/%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4) (бэкслеш, `\`, после которого идут от одной до шести шестнадцатеричных цифр, обозначающих кодовую точку этого символа в Unicode)

Обратите внимание, что `id1`, `Id1`, `iD1` и `ID1` — это разные идентификаторы, поскольку они чувствительны к регистру. С другой стороны, так как существует несколько способов экранировать символ, `toto\?` и `toto\3F` — это один и тот же идентификатор.

### Запрещённые значения

`<custom-ident>` не может быть заключён в одинарные или двойные кавычки, потому что иначе он не был бы отличим от значения типа {{CSSxRef("&lt;string&gt;")}}. Более того, первый символ не должен быть цифрой или дефисом (`-`), если после него идёт ещё одна цифра или ещё один дефис.

Чтобы избежать неоднозначности, каждое свойство, использующее тип `<custom-ident>`, запрещает использование некоторых значений:

- {{CSSxRef("animation-name")}}

  {{CSSxRef("counter-reset")}}

  {{CSSxRef("counter-increment")}}

  - : Запрещают глобальные значения CSS (`unset`, `initial` и `inherit`), а также `none`.

- {{CSSxRef("@counter-style")}}

  {{CSSxRef("list-style-type")}}

  - : Запрещает глобальные значения CSS (`unset`, `initial` и `inherit`), а также значения `none`, `inline` и `outside`. Также довольно много предопределённых значений используются в разных браузерах: `disc`, `circle`, `square`, `decimal`, `cjk-decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `lower-greek`, `lower-alpha`, `lower-latin`, `upper-alpha`, `upper-latin`, `arabic-indic`, `armenian`, `bengali`, `cambodian`, `cjk-earthly-branch`, `cjk-heavenly-stem`, `cjk-ideographic`, `devanagari`, `ethiopic-numeric`, `georgian`, `gujarati`, `gurmukhi`, `hebrew`, `hiragana`, `hiragana-iroha`, `japanese-formal`, `japanese-informal`, `kannada`, `katakana`, `katakana-iroha`, `khmer`, `korean-hangul-formal`, `korean-hanja-formal`, `korean-hanja-informal`, `lao`, `lower-armenian`, `malayalam`, `mongolian`, `myanmar`, `oriya`, `persian`, `simp-chinese-formal`, `simp-chinese-informal`, `tamil`, `telugu`, `thai`, `tibetan`, `trad-chinese-formal`, `trad-chinese-informal`, `upper-armenian`, `disclosure-open`, and `disclosure-close`.

- {{CSSxRef("grid-row-start")}}
  {{CSSxRef("grid-row-end")}}
  {{CSSxRef("grid-column-start")}}
  {{CSSxRef("grid-column-end")}}
  - : Запрещают значение `span`.
- {{CSSxRef("will-change")}}
  - : Запрещают глобальные значения CSS (`unset`, `initial` и `inherit`), а так же значения `will-change`, `auto`, `scroll-position` и `contents`.

## Примеры

### Действительные идентификаторы

```
nono79            Состоит из букв и цифр
ground-level      Состоит из букв, цифр и дефиса
-test             Буквы, следующие за одним дефисом
_internal         Буквы, следующие за нижним подчёркиванием
\22 toto          Буквы, следующие за символом Unicode
bili\.bob         Буквы и экранированная точка
```

### Недействительные идентификаторы

```plain example-bad
34rem             Не может начинаться с цифры
-12rad            Не может начинаться с дефиса, за которым следует цифра
bili.bob          Только буквы, цифры, _ и - можно не экранириовать
--toto            Не может начинаться с двух дефисов подряд
'bilibob'         Это тип <string>.
"bilibob"         Это тип <string>.
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

_Поскольку этот тип не является реальным типом, а служит соглашением, используемым для упрощения описания допустимых значений, информация о совместимости браузера как таковая отсутствует._

## Смотрите также

- [&lt;ident&gt;](/ru/docs/Web/CSS/ident)
- [&lt;dashed-ident&gt;](/ru/docs/Web/CSS/dashed-ident)
