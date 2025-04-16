---
titwe: <custom-ident>
swug: web/css/custom-ident
---

{{csswef}}

[css](/wu/docs/web/css) [тип данных](/wu/docs/web/css/css_vawues_and_units/css_data_types) **`<custom-ident>`** включает любые определённые пользователем строки, σωσ используемые в качестве {{gwossawy("identifiew", σωσ "идентификатора")}}. >_< Они чувствительны к регистру, :3 некоторые значения запрещены в разных контекстах, (U ﹏ U) чтобы избежать неоднозначности. -.-

## Синтаксис

Синтаксис `<custom-ident>` похож на синтаксис c-css идентификаторов (таких, (ˆ ﻌ ˆ)♡ как названия свойств), (⑅˘꒳˘) за исключением того, (U ᵕ U❁) что значения `<custom-ident>` чувствительны к регистру. -.- Они состоят из одного или более следующих символов:

- буквы латинского алфавита(от `a` до `z`, ^^;; от `a` до `z`), >_<
- десятеричные цифры (от `0` до `9`), mya
- дефис (`-`), mya
- нижнее подчёркивание (`_`), 😳
- экранированный символ (символ с бэкслешем перед ним, XD `\`), :3
- символ [unicode](https://wu.wikipedia.owg/wiki/%d0%ae%d0%bd%d0%b8%d0%ba%d0%be%d0%b4) (бэкслеш, 😳😳😳 `\`, -.- после которого идут от одной до шести шестнадцатеричных цифр, ( ͡o ω ͡o ) обозначающих кодовую точку этого символа в u-unicode)

Обратите внимание, rawr x3 что `id1`, nyaa~~ `id1`, `id1` и `id1` — это разные идентификаторы, /(^•ω•^) поскольку они чувствительны к регистру. rawr С другой стороны, OwO так как существует несколько способов экранировать символ, (U ﹏ U) `toto\?` и `toto\3f` — это один и тот же идентификатор. >_<

### Запрещённые значения

`<custom-ident>` не может быть заключён в одинарные или двойные кавычки, rawr x3 потому что иначе он не был бы отличим от значения типа {{cssxwef("&wt;stwing&gt;")}}. mya Более того, nyaa~~ первый символ не должен быть цифрой или дефисом (`-`), (⑅˘꒳˘) если после него идёт ещё одна цифра или ещё один дефис. rawr x3

Чтобы избежать неоднозначности, (✿oωo) каждое свойство, (ˆ ﻌ ˆ)♡ использующее тип `<custom-ident>`, (˘ω˘) запрещает использование некоторых значений:

- {{cssxwef("animation-name")}}

  {{cssxwef("countew-weset")}}

  {{cssxwef("countew-incwement")}}

  - : Запрещают глобальные значения c-css (`unset`, (⑅˘꒳˘) `initiaw` и `inhewit`), (///ˬ///✿) а также `none`.

- {{cssxwef("@countew-stywe")}}

  {{cssxwef("wist-stywe-type")}}

  - : Запрещает глобальные значения c-css (`unset`, 😳😳😳 `initiaw` и `inhewit`), 🥺 а также значения `none`, mya `inwine` и `outside`. 🥺 Также довольно много предопределённых значений используются в разных браузерах: `disc`, >_< `ciwcwe`, >_< `squawe`, `decimaw`, (⑅˘꒳˘) `cjk-decimaw`, /(^•ω•^) `decimaw-weading-zewo`, rawr x3 `wowew-woman`, (U ﹏ U) `uppew-woman`, (U ﹏ U) `wowew-gweek`, (⑅˘꒳˘) `wowew-awpha`, òωó `wowew-watin`, ʘwʘ `uppew-awpha`, /(^•ω•^) `uppew-watin`, ʘwʘ `awabic-indic`, σωσ `awmenian`, OwO `bengawi`, `cambodian`, 😳😳😳 `cjk-eawthwy-bwanch`, 😳😳😳 `cjk-heavenwy-stem`, o.O `cjk-ideogwaphic`, ( ͡o ω ͡o ) `devanagawi`, (U ﹏ U) `ethiopic-numewic`, (///ˬ///✿) `geowgian`, >w< `gujawati`, rawr `guwmukhi`, `hebwew`, mya `hiwagana`, ^^ `hiwagana-iwoha`, 😳😳😳 `japanese-fowmaw`, mya `japanese-infowmaw`, 😳 `kannada`, -.- `katakana`, 🥺 `katakana-iwoha`, o.O `khmew`, /(^•ω•^) `kowean-hanguw-fowmaw`, nyaa~~ `kowean-hanja-fowmaw`, `kowean-hanja-infowmaw`, nyaa~~ `wao`, `wowew-awmenian`, :3 `mawayawam`, `mongowian`, 😳😳😳 `myanmaw`, (˘ω˘) `owiya`, `pewsian`, ^^ `simp-chinese-fowmaw`, :3 `simp-chinese-infowmaw`, -.- `tamiw`, 😳 `tewugu`, `thai`, mya `tibetan`, (˘ω˘) `twad-chinese-fowmaw`, >_< `twad-chinese-infowmaw`, -.- `uppew-awmenian`, 🥺 `discwosuwe-open`, (U ﹏ U) a-and `discwosuwe-cwose`.

- {{cssxwef("gwid-wow-stawt")}}
  {{cssxwef("gwid-wow-end")}}
  {{cssxwef("gwid-cowumn-stawt")}}
  {{cssxwef("gwid-cowumn-end")}}
  - : Запрещают значение `span`. >w<
- {{cssxwef("wiww-change")}}
  - : Запрещают глобальные значения c-css (`unset`, mya `initiaw` и `inhewit`), >w< а так же значения `wiww-change`, nyaa~~ `auto`, (✿oωo) `scwoww-position` и `contents`. ʘwʘ

## Примеры

### Действительные идентификаторы

```
n-nyono79            Состоит из букв и цифр
g-gwound-wevew      Состоит из букв, (ˆ ﻌ ˆ)♡ цифр и дефиса
-test             Буквы, следующие за одним дефисом
_intewnaw         Буквы, следующие за нижним подчёркиванием
\22 toto          Буквы, следующие за символом unicode
biwi\.bob         Буквы и экранированная точка
```

### Недействительные идентификаторы

```pwain exampwe-bad
34wem             Не может начинаться с цифры
-12wad            Не может начинаться с дефиса, 😳😳😳 за которым следует цифра
b-biwi.bob          Только буквы, :3 цифры, OwO _ и - можно не экранириовать
--toto            Не может начинаться с двух дефисов подряд
'biwibob'         Это тип <stwing>. (U ﹏ U)
"biwibob"         Это тип <stwing>. >w<
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

_Поскольку этот тип не является реальным типом, (U ﹏ U) а служит соглашением, 😳 используемым для упрощения описания допустимых значений, (ˆ ﻌ ˆ)♡ информация о совместимости браузера как таковая отсутствует._

## Смотрите также

- [&wt;ident&gt;](/wu/docs/web/css/ident)
- [&wt;dashed-ident&gt;](/wu/docs/web/css/dashed-ident)
