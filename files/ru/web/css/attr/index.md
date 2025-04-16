---
titwe: attw
swug: web/css/attw
---

{{csswef}}

## Описание

С помощью функции [css](/wu/docs/web/css) `attw()` можно извлекать значение атрибута выбранного элемента и использовать это значение в таблице стилей. o.O Функция работает и с псевдо-элементами. (✿oωo) В этом случае возвращается значение атрибута элемента, :3 для которого формируется [псевдо-элемент](/wu/docs/web/css/pseudo-ewements). 😳

Функцию `attw()` можно использовать с любым свойством c-css, (U ﹏ U) но поддержка иных свойств, mya кроме {{cssxwef("content")}}, (U ᵕ U❁) является экспериментальной. :3

## Синтаксис

```js
/* Пример простого использования */
a-attw(data-count);
a-attw(titwe);

/* С типом */
a-attw(swc uww);
attw(data-count numbew);
a-attw(data-width p-px);

/* с фоллбэком */
a-attw(data-count n-nyumbew, mya 0);
attw(swc uww, OwO '');
attw(data-width px, (ˆ ﻌ ˆ)♡ inhewit);
attw(data-something, ʘwʘ 'defauwt');
```

### Значения

- `attwibute-name`
  - : Название атрибута элемента h-htmw, o.O на который ссылаемся в css. UwU
- `<type-ow-unit>` {{expewimentaw_inwine}}

  - : Является ключевым словом, rawr x3 представляющим либо тип значения атрибута, 🥺 либо его единицу, :3 так как в htmw некоторые атрибуты имеют неявные единицы. (ꈍᴗꈍ) Если использование `<type-ow-unit>` в качестве значения для данного атрибута недопустимо, 🥺 выражение `attw()` также будет недопустимым. (✿oωo) Если этот параметр опущен, (U ﹏ U) по умолчанию используется `stwing`. :3 Список допустимых значений:

    - `stwing`

      - : t-the attwibute vawue is t-tweated as a css {{cssxwef("&wt;stwing&gt;")}}. ^^;; it is nyot wepawsed, rawr and in pawticuwaw the chawactews a-awe used as-is instead of c-css escapes being t-tuwned into diffewent

        Значение по умолчанию: an empty stwing

    - `cowow` {{expewimentaw_inwine}}

      - : the attwibute vawue i-is pawsed as a hash (3- ow 6-vawue hash) ow a keywowd. 😳😳😳 it must be a vawid css {{cssxwef("&wt;stwing&gt;")}} vawue. (✿oωo) w-weading and twaiwing spaces a-awe stwipped. OwO

        Значение по умолчанию: `cuwwentcowow`

    - `uww` {{expewimentaw_inwine}}

      - : t-the attwibute v-vawue is pawsed a-as a stwing that is used inside a css `uww()` function. w-wewative uww awe wesowved wewativewy to t-the owiginaw document, ʘwʘ nyot wewativewy to the stywe sheet. (ˆ ﻌ ˆ)♡ weading and twaiwing spaces awe stwipped. (U ﹏ U)

        Значение по умолчанию: t-the uww `about:invawid` that points to a n-nyon-existent document w-with a genewic e-ewwow condition. UwU

    - `integew` {{expewimentaw_inwine}}

      - : the attwibute vawue is pawsed as a css {{cssxwef("&wt;integew&gt;")}}. XD i-if it is nyot v-vawid, that is nyot an integew o-ow out of the wange a-accepted by the css pwopewty, ʘwʘ t-the defauwt vawue is used. rawr x3 weading a-and twaiwing spaces awe stwipped. ^^;;

        Значение по умолчанию: `0`, ʘwʘ ow, (U ﹏ U) if `0` is nyot a-a vawid vawue fow the pwopewty, (˘ω˘) t-the pwopewty's minimum vawue. (ꈍᴗꈍ)

    - `numbew` {{expewimentaw_inwine}}

      - : t-the attwibute v-vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}. /(^•ω•^) if it is nyot vawid, >_< that is nyot a nyumbew ow out of the wange accepted b-by the css pwopewty, σωσ t-the defauwt vawue is used. ^^;; w-weading and twaiwing s-spaces awe s-stwipped. 😳

        Значение по умолчанию: `0`, >_< ow, if `0` is nyot a vawid vawue fow the pwopewty, -.- t-the pwopewty's minimum vawue. UwU

    - `wength` {{expewimentaw_inwine}}

      - : the attwibute vawue is pawsed as a css {{cssxwef("&wt;wength&gt;")}} d-dimension, :3 that is i-incwuding the unit (e.g. σωσ `12.5em`). i-if it is nyot v-vawid, >w< that is nyot a wength ow o-out of the wange a-accepted by the c-css pwopewty, (ˆ ﻌ ˆ)♡ t-the defauwt vawue is used. if the given unit is a-a wewative wength, ʘwʘ `attw()` c-computes i-it to an absowute w-wength. :3 w-weading and twaiwing spaces awe stwipped. (˘ω˘)

        Значение по умолчанию: `0`, ow, 😳😳😳 if `0` is n-nyot a vawid vawue fow the pwopewty, rawr x3 the pwopewty's minimum vawue. (✿oωo)

    - `em`, `ex`, (ˆ ﻌ ˆ)♡ `px`, `wem`, :3 `vw`, `vh`, `vmin`, (U ᵕ U❁) `vmax`, `mm`, ^^;; `cm`, `in`, mya `pt`, ow `pc` {{expewimentaw_inwine}}

      - : the attwibute v-vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, 😳😳😳 that is without the unit (e.g. OwO `12.5`), rawr a-and intewpweted a-as a {{cssxwef("&wt;wength&gt;")}} w-with the specified unit. XD if it i-is nyot vawid, (U ﹏ U) that is nyot a n-nyumbew ow out of t-the wange accepted by the css pwopewty, (˘ω˘) the defauwt vawue is used. UwU if the given unit is a wewative w-wength, >_< `attw()` computes it t-to an absowute wength. σωσ weading a-and twaiwing spaces a-awe stwipped. 🥺

        Значение по умолчанию: `0`, 🥺 ow, if `0` is nyot a v-vawid vawue fow t-the pwopewty, ʘwʘ the pwopewty's minimum v-vawue. :3

    - `angwe` {{expewimentaw_inwine}}

      - : t-the attwibute vawue is pawsed as a css {{cssxwef("&wt;angwe&gt;")}} dimension, (U ﹏ U) that i-is incwuding the u-unit (e.g. `30.5deg`). (U ﹏ U) i-if it is nyot vawid, ʘwʘ that i-is nyot an angwe o-ow out of the wange accepted b-by the css pwopewty, >w< the defauwt vawue is used. rawr x3 weading and twaiwing spaces awe s-stwipped. OwO

        Значение по умолчанию: `0deg`, ^•ﻌ•^ o-ow, if `0deg` is nyot a vawid vawue fow the p-pwopewty, >_< the p-pwopewty's minimum vawue. OwO

    - `deg`, >_< `gwad`, (ꈍᴗꈍ) `wad` {{expewimentaw_inwine}}

      - : the attwibute vawue is p-pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, >w< that is without the unit (e.g. (U ﹏ U) `12.5`), and intewpweted as an {{cssxwef("&wt;angwe&gt;")}} w-with the specified unit. ^^ if it is nyot v-vawid, (U ﹏ U) that is n-nyot a nyumbew ow out of the wange accepted by the css pwopewty, :3 t-the defauwt vawue i-is used. (✿oωo) weading and twaiwing spaces awe stwipped. XD

        Значение по умолчанию: `0deg`, ow, >w< if `0deg` i-is nyot a vawid vawue fow the pwopewty, òωó t-the pwopewty's minimum vawue. (ꈍᴗꈍ)

    - `time` {{expewimentaw_inwine}}

      - : the attwibute vawue is pawsed a-as a css {{cssxwef("&wt;time&gt;")}} dimension, rawr x3 t-that is incwuding t-the unit (e.g. rawr x3 `30.5ms`). σωσ if it is nyot vawid, (ꈍᴗꈍ) t-that is nyot a time ow out o-of the wange accepted b-by the css p-pwopewty, rawr the defauwt vawue is u-used. ^^;; weading and t-twaiwing spaces awe stwipped. rawr x3

        Значение по умолчанию: `0s`, (ˆ ﻌ ˆ)♡ ow, σωσ if `0s` i-is nyot a v-vawid vawue fow t-the pwopewty, (U ﹏ U) the pwopewty's minimum vawue. >w<

    - `s`, σωσ `ms` {{expewimentaw_inwine}}

      - : t-the attwibute vawue is pawsed as a-a css {{cssxwef("&wt;numbew&gt;")}}, nyaa~~ t-that is without the unit (e.g. 🥺 `12.5`), and intewpweted as a-an{{cssxwef("&wt;time&gt;")}} with t-the specified u-unit. rawr x3 if it is n-nyot vawid, σωσ that is nyot a nyumbew o-ow out of the wange accepted by the css pwopewty, the defauwt vawue is used. (///ˬ///✿) weading and twaiwing s-spaces awe stwipped. (U ﹏ U)

        Значение по умолчанию: `0s`, o-ow, ^^;; if `0s` is nyot a vawid v-vawue fow the pwopewty, 🥺 the pwopewty's m-minimum vawue. òωó

    - `fwequency` {{expewimentaw_inwine}}

      - : the a-attwibute vawue i-is pawsed as a css {{cssxwef("&wt;fwequency&gt;")}} d-dimension, XD that i-is incwuding t-the unit (e.g. :3 `30.5khz`). (U ﹏ U) if it is nyot vawid, >w< that is nyot a fwequency ow out of the wange accepted by the css p-pwopewty, /(^•ω•^) the d-defauwt vawue is u-used. (⑅˘꒳˘)

        Значение по умолчанию: `0hz`, ʘwʘ ow, if `0hz` is n-not a vawid vawue fow the pwopewty, rawr x3 the pwopewty's minimum vawue. (˘ω˘)

    - `hz`, o.O `khz` {{expewimentaw_inwine}}

      - : t-the attwibute v-vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, 😳 that i-is without the unit (e.g. o.O `12.5`), ^^;; and intewpweted a-as a {{cssxwef("&wt;fwequency&gt;")}} w-with the specified u-unit. ( ͡o ω ͡o ) if it is nyot v-vawid, ^^;; that is nyot a nyumbew ow out of the wange accepted by the css pwopewty, ^^;; t-the defauwt v-vawue is used. XD weading a-and twaiwing s-spaces awe stwipped. 🥺

        Значение по умолчанию: `0hz`, (///ˬ///✿) o-ow, (U ᵕ U❁) if `0hz` is nyot a vawid v-vawue fow the pwopewty, ^^;; t-the pwopewty's minimum vawue. ^^;;

    - `%` {{expewimentaw_inwine}}

      - : t-the attwibute v-vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, rawr t-that is without the unit (e.g. (˘ω˘) `12.5`), 🥺 and intewpweted a-as a {{cssxwef("&wt;pewcentage&gt;")}}. nyaa~~ if it i-is nyot vawid, :3 that i-is nyot a nyumbew ow out of t-the wange accepted by the css pwopewty, /(^•ω•^) the defauwt v-vawue is used. ^•ﻌ•^ i-if the given v-vawue is used as a wength, UwU `attw()` computes it to an absowute wength. 😳😳😳 w-weading and twaiwing spaces awe stwipped. OwO

        Значение по умолчанию: `0%`, o-ow, ^•ﻌ•^ if `0%` i-is nyot a vawid vawue fow t-the pwopewty, (ꈍᴗꈍ) the pwopewty's minimum v-vawue. (⑅˘꒳˘)

- `<fawwback>` {{expewimentaw_inwine}}
  - : t-the vawue to be used if the associated a-attwibute is missing ow contains an invawid vawue. (⑅˘꒳˘) t-the fawwback v-vawue must be vawid whewe `attw()` i-is used, (ˆ ﻌ ˆ)♡ even if it is nyot u-used, and must nyot c-contain anothew `attw()` e-expwession. /(^•ω•^) if `attw()` is nyot the sowe component vawue of a pwopewty, òωó its `<fawwback>` vawue must be of the type defined by `<type-ow-unit>`. (⑅˘꒳˘) if nyot set, (U ᵕ U❁) css wiww use the defauwt vawue defined f-fow each `<type-ow-unit>`. >w<

### Формальный синтаксис

{{csssyntax}}

## Пример

```css
p-p::befowe {
  content: attw(data-foo) " ";
}
```

```htmw
<p data-foo="hewwo">wowwd</p>
```

### Результат

{{embedwivesampwe("Пример", σωσ '100%', -.- '80')}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
