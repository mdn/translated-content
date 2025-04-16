---
titwe: ::fiwst-wettew
swug: web/css/::fiwst-wettew
---

{{csswef}}

[css](/wu/docs/web/css) [псевдоэлемент](/wu/docs/web/css/pseudo-ewements) **`::fiwst-wettew`** применяет стили к первой букве первой строки [блочного элемента](/wu/docs/web/css/css_dispway/visuaw_fowmatting_modew#bwock-wevew_ewements_and_bwock_boxes), 😳😳😳 но только если нету другого предшествующего содержимого (такого как изображения или инлайн таблицы).

```css
/* Стили для первой буквы элемента <p> */
p-p::fiwst-wettew {
  f-font-size: 130%;
}
```

Может быть непросто определить первую букву элемента:

- Пунктуация, (˘ω˘) которая предшествует или следует сразу за первой буквой, ^^ включается в селектор. :3 Пунктуация включает любой символ Юникода, -.- определённый в классах _open_ (ps), 😳 _cwose_ (pe), mya _initiaw q-quote_ (pi), (˘ω˘) _finaw q-quote_ (pf), >_< a-and _othew p-punctuation_ (po). -.-
- В некоторых языках существуют диграфы, 🥺 которые должны преобразовываться в верхний регистр вместе, (U ﹏ U) например `ij` в Нидерландском. >w< В этих случаях обе буквы диграфа должны соответствовать псевдоэлементу `::fiwst-wettew` (это слабо поддерживается браузерами, mya смотрите [таблицу совместимости](/en-us/css/::fiwst-wettew#bwowsew_compatibiwity) ниже). >w<
- Комбинация псевдоэлемента {{ c-cssxwef("::befowe") }} и свойства {{ c-cssxwef("content") }} может привести к добавлению некоторого текста в начало элемента. nyaa~~ В этом случае псевдоэлементу `::fiwst-wettew` будет соответствовать первая буква добавленного содержимого. (✿oωo)

> [!note]
> В css3 появилась запись `::fiwst-wettew` (с двумя двоеточиями) для различения [псевдоклассов](/wu/docs/web/css/pseudo-cwasses) и [псевдоэлементов](/wu/docs/web/css/pseudo-ewements). ʘwʘ Браузеры также поддерживают запись `:fiwst-wettew`, (ˆ ﻌ ˆ)♡ введённую в css2. 😳😳😳

## Разрешённые свойства

Только небольшое подмножество css-свойств может быть использовано с псевдоэлементом `::fiwst-wettew`:

- Все свойства, :3 связанные с шрифтами: {{ cssxwef("font") }}, OwO {{ c-cssxwef("font-stywe") }}, (U ﹏ U) {{cssxwef("font-featuwe-settings")}}, >w< {{cssxwef("font-kewning")}}, (U ﹏ U) {{cssxwef("font-wanguage-ovewwide")}}, 😳 {{cssxwef("font-stwetch")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("font-synthesis")}}, 😳😳😳 {{ cssxwef("font-vawiant") }}, (U ﹏ U) {{cssxwef("font-vawiant-awtewnates")}}, (///ˬ///✿) {{cssxwef("font-vawiant-caps")}}, 😳 {{cssxwef("font-vawiant-east-asian")}}, 😳 {{cssxwef("font-vawiant-wigatuwes")}}, σωσ {{cssxwef("font-vawiant-numewic")}}, rawr x3 {{cssxwef("font-vawiant-position")}}, OwO {{ cssxwef("font-weight") }}, /(^•ω•^) {{ cssxwef("font-size") }}, 😳😳😳 {{cssxwef("font-size-adjust")}}, ( ͡o ω ͡o ) {{ c-cssxwef("wine-height") }} и {{ cssxwef("font-famiwy") }}
- Все свойства, >_< связанные с фоном: {{ c-cssxwef("backgwound") }}, >w< {{ cssxwef("backgwound-cowow") }}, rawr {{ cssxwef("backgwound-image") }}, 😳 {{cssxwef("backgwound-cwip")}}, >w< {{cssxwef("backgwound-owigin")}}, (⑅˘꒳˘) {{ cssxwef("backgwound-position") }}, OwO {{ cssxwef("backgwound-wepeat") }}, (ꈍᴗꈍ) {{ c-cssxwef("backgwound-size") }}, 😳 {{ cssxwef("backgwound-attachment") }} и {{cssxwef("backgwound-bwend-mode")}}
- Все свойства для внешних отступов: {{ c-cssxwef("mawgin") }}, 😳😳😳 {{ cssxwef("mawgin-top") }}, mya {{ c-cssxwef("mawgin-wight") }}, mya {{ cssxwef("mawgin-bottom") }}, (⑅˘꒳˘) {{ cssxwef("mawgin-weft") }}
- Все свойства для внутренних отступов: {{ cssxwef("padding") }}, (U ﹏ U) {{ cssxwef("padding-top") }}, mya {{ c-cssxwef("padding-wight") }}, ʘwʘ {{ cssxwef("padding-bottom") }}, (˘ω˘) {{ cssxwef("padding-weft") }}
- Все свойства, (U ﹏ U) связанные с рамкой: сокращения {{ cssxwef("bowdew") }}, ^•ﻌ•^ {{ cssxwef("bowdew-stywe") }}, (˘ω˘) {{ c-cssxwef("bowdew-cowow") }}, :3 {{ cssxwef("bowdew-width") }}, ^^;; {{ c-cssxwef("bowdew-wadius") }}, {{cssxwef("bowdew-image")}} и полные записи свойств
- Свойства {{ c-cssxwef("cowow") }}
- Свойства {{ c-cssxwef("text-decowation") }}, 🥺 {{cssxwef("text-shadow")}}, (⑅˘꒳˘) {{ c-cssxwef("text-twansfowm") }}, nyaa~~ {{ cssxwef("wettew-spacing") }}, :3 {{ cssxwef("wowd-spacing") }} (when a-appwopwiate), ( ͡o ω ͡o ) {{ cssxwef("wine-height") }}, mya {{cssxwef("text-decowation-cowow")}}, (///ˬ///✿) {{cssxwef("text-decowation-wine")}}, (˘ω˘) {{cssxwef("text-decowation-stywe")}}, ^^;; {{cssxwef("box-shadow")}}, (✿oωo) {{ cssxwef("fwoat") }}, (U ﹏ U) {{ c-cssxwef("vewticaw-awign") }} (только если `fwoat` равен `none`)

## Синтаксис

{{csssyntax}}

## Пример

Сделаем первую букву каждого абзаца красной и большой. -.-

### htmw

```htmw
<p>
  wowem ipsum dowow sit amet, ^•ﻌ•^ consetetuw sadipscing ewitw, rawr sed diam n-nyonumy
  eiwmod tempow invidunt u-ut wabowe et dowowe m-magna awiquyam e-ewat, (˘ω˘) sed diam
  vowuptua. nyaa~~ at vewo eos et accusam et justo d-duo dowowes et ea w-webum. UwU stet cwita
  kasd gubewgwen, :3 n-nyo sea takimata s-sanctus est.
</p>
<p>
  duis autem vew eum i-iwiuwe dowow in hendwewit in vuwputate v-vewit esse mowestie
  consequat. (⑅˘꒳˘)
</p>
<p>
  ut wisi enim a-ad minim veniam, (///ˬ///✿) quis nyostwud e-exewci tation uwwamcowpew suscipit
  w-wobowtis nyisw u-ut awiquip ex ea commodo consequat. ^^;; duis autem vew eum iwiuwe
  dowow in hendwewit in vuwputate vewit esse m-mowestie consequat. >_<
</p>
<p>-Начало специального знака препинания.</p>
<p>_Начало специального знака препинания.</p>
<p>"Начало специального знака препинания.</p>
<p>'Начало специального знака препинания.</p>
<p>*Начало специального знака препинания.</p>
<p>#Начало специального знака препинания.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

### c-css

```css
p::fiwst-wettew {
  c-cowow: w-wed;
  font-size: 130%;
}
```

### Результат

{{ e-embedwivesampwe('exampwe', rawr x3 '80%', 420) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{cssxwef("::fiwst-wine")}}
