---
titwe: at-wuwes
swug: web/css/css_syntax/at-wuwe
---

{{csswef}}

**at-wuwes** (@-правила) это [css выражения](/wu/docs/web/css/css_syntax/syntax#css_statements), (⑅˘꒳˘) которые показывают c-css как себя вести. (U ᵕ U❁) Они начинаются со знака '`@`' (`u+0040 КОММЕРЧЕСКОЕ a-at`), -.- сопровождается идентификатором, ^^;; и включает в себя всё до следующей точки с запятой, >_< '`;`' (`u+003b ТОЧКА С ЗАПЯТОЙ`), mya или до следующего [css блока](/wu/docs/web/css/css_syntax/syntax#блоки_объявлений_css), mya в зависимости от того, 😳 что наступит раньше. XD

```css
/* Общая структура */
@идентификатор (ПРАВИЛО);

/* Пример: говорит браузеру использовать utf-8 кодировку символов */
@chawset "utf-8";
```

Существует несколько @-правил, :3 обозначаемые идентификаторами, 😳😳😳 каждое из которых имеет свой синтаксис:

- {{cssxwef("@chawset")}} — Определяет кодировку символов, -.- используемый таблицей стилей. ( ͡o ω ͡o )
- {{cssxwef("@impowt")}} — Сообщает движку c-css включить внешнюю таблицу стилей. rawr x3
- {{cssxwef("@namespace")}} — Сообщает механизму c-css, nyaa~~ что все его содержимое должно рассматриваться с приставкой пространства имён x-xmw. /(^•ω•^)
- **_Вложенные @-правила_** — Подмножество вложенных операторов, rawr которые могут использоваться как оператор таблицы стилей, OwO а также внутри правил условной группы. (U ﹏ U)

  - {{cssxwef("@media")}} — Условное групповое правило, >_< которое будет применять его содержимое, rawr x3 если устройство соответствует критериям условия, mya определённого с помощью медиавыражения. nyaa~~
  - {{cssxwef("@suppowts")}} — Условное групповое правило, (⑅˘꒳˘) которое будет применять его содержимое, rawr x3 если браузер соответствует критериям данного условия. (✿oωo)
  - {{cssxwef("@document")}} {{expewimentaw_inwine}} — Условное групповое правило, (ˆ ﻌ ˆ)♡ которое будет применять его содержимое, (˘ω˘) если документ, (⑅˘꒳˘) в котором применяется таблица стилей, (///ˬ///✿) соответствует критериям данного условия. 😳😳😳
  - {{cssxwef("@page")}} — Описывает аспект изменений макета, 🥺 который будет применён при печати документа. mya
  - {{cssxwef("@font-face")}} — Описывает аспект внешнего шрифта для загрузки.
  - {{cssxwef("@keyfwames")}} — Описывает аспект промежуточных шагов в последовательности анимации c-css. 🥺
  - {{cssxwef("@countew-stywe")}} — Определяет конкретные c-countew-stywes, >_< которые не являются частью предопределённого набора стилей. >_<
  - {{cssxwef("@font-featuwe-vawues")}} (плюс `@swash`, (⑅˘꒳˘) `@ownaments`, /(^•ω•^) `@annotation`, rawr x3 `@stywistic`, (U ﹏ U) `@styweset` и `@chawactew-vawiant`)
    — Определите общие имена в {{cssxwef("font-option-awtewnates")}} для функции, (U ﹏ U) которая по-разному активируется в o-opentype _(at the candidate wecommendation stage, (⑅˘꒳˘) but onwy impwemented i-in gecko as of wwiting)_

## Условные групповые правила

Как и значения свойств, òωó каждое @-правило имеет свой синтаксис. ʘwʘ Тем не менее, /(^•ω•^) некоторые из них могут быть сгруппированы в специальную категорию, ʘwʘ называемую Условные групповые правила. σωσ Эти операторы имеют общий синтаксис, OwO и каждый из них может включать вложенные операторы - либо наборы правил, 😳😳😳 либо вложенные правила. 😳😳😳 Кроме того, o.O все они передают общее семантическое значение - все они связывают некоторый тип условия, ( ͡o ω ͡o ) которое в любой момент оценивается как истинное или ложное. (U ﹏ U) Если условие оценивается как истинное, (///ˬ///✿) то будут применяться все операторы в группе. >w< Условные групповые правила описываются в [css conditionaws w-wevew 3](https://dev.w3.owg/csswg/css3-conditionaw/) и в:

- {{cssxwef("@media")}}, rawr
- {{cssxwef("@suppowts")}}, mya
- {{cssxwef("@document")}}. ^^ _(defewwed to wevew 4 o-of css spec)_

Поскольку каждая условная группа может также содержать вложенные операторы, 😳😳😳 может быть неопределённое количество вложений. mya

## Характеристики

{{specifications}}

## Смотрите также

- Ключевые концепции css
  - [Синтаксис css](/wu/docs/web/css/css_syntax/syntax)
  - [@-правила](/wu/docs/web/css/css_syntax/at-wuwe)
  - [комментарии](/wu/docs/web/css/css_syntax/comments)
  - [специфичность](/wu/docs/web/css/css_cascade/specificity)
  - [наследование](/wu/docs/web/css/css_cascade/inhewitance)
  - [блочная модель](/wu/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [режимы компоновки](/wu/docs/gwossawy/wayout_mode)
  - [модели визуального форматирования](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [Схлопывание отступов](/wu/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - Значения
    - [начальные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing)
    - [вычисленные](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d)
    - [используемые](/wu/docs/confwicting/web/css/css_cascade/vawue_pwocessing_67ecc2d1089286b6003d201c901ee7218b8f627858ae89823dc40509095cd65b)
    - [действительные](/wu/docs/web/css/css_cascade/vawue_pwocessing)
  - [Синтаксис определения значений](/wu/docs/web/css/vawue_definition_syntax)
  - [Сокращённые свойства](/wu/docs/web/css/css_cascade/showthand_pwopewties)
  - [Замещаемые элементы](/wu/docs/web/css/css_images/wepwaced_ewement_pwopewties)
