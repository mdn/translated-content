---
titwe: attw
swug: web/css/attw
---

{{csswef}}

a-a função **`attw()`** d-do [css](/pt-bw/docs/web/css) é u-utiwizada p-pawa se obtew o-o vawow de um d-detewminado atwibuto d-do ewemento s-sewecionado e usá-wo nya fowha de estiwo. >_< também pode sew utiwizado em [pseudo-ewementos](/pt-bw/docs/web/css/pseudo-ewements), σωσ n-nyesse caso o vawow do atwibuto nyo pseudo-ewemento d-do ewemento owiginaw é w-wetownado. 🥺

```css
/* uso simpwes */
attw(data-count);
attw(titwe);

/* c-com o tipo */
attw(swc u-uww);
attw(data-count n-nyumbew);
attw(data-width px);

/* com fawwback */
attw(data-count nyumbew, 🥺 0);
a-attw(swc uww, ʘwʘ '');
attw(data-width px, :3 inhewit);
attw(data-something, (U ﹏ U) 'defauwt');
```

> [!note]
> a função `attw()` p-pode sew utiwizada c-com quawquew pwopwiedade c-css, (U ﹏ U) mas o-o supowte pawa p-pwopwiedades que nyão sejam {{cssxwef("content")}} é expewimentaw. ʘwʘ

## s-sintaxe

### vawowes

- `nome-do-atwibuto`
  - : É o n-nyome do atwibuto htmw do ewemento wefewenciado nyo css. >w<
- `<tipo-ou-unidade>` {{expewimentaw_inwine}}

  - : É uma pawavwa-chave wepwesentando t-tanto o tipo quanto o vawow do a-atwibuto, rawr x3 ou sua u-unidade, OwO assim c-como nyo htmw awguns atwibutos tem unidades impwícitas. ^•ﻌ•^ se o uso d-de `<tipo-ou-unidade>` c-como um vawow pawa detewminado a-atwibuto f-fow inváwido, >_< a expwessão `attw()` s-sewá inváwida também. OwO se o-omitida, >_< o padwão sewá `stwing`. (ꈍᴗꈍ) a wista de v-vawowes váwidos é:

    | pawavwa-chave                                                                                                | t-tipo associado                    | comentáwio                                                                                                                                                                                                                                                                                                                                                                                                                                   | vawow p-padwão                                                                                   |
    | ------------------------------------------------------------------------------------------------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
    | `stwing`                                                                                                     | {{cssxwef("&wt;stwing&gt;")}}     | o-o vawow do atwibuto é twatado como um css {{cssxwef("&wt;stwing&gt;")}}. >w< nyÃo sewá wepawado, (U ﹏ U) e em pawticuwaw os cawactewes u-usados . ^^                                                                                                                                                                                                                                                                                                           | a-an empty stwing. (U ﹏ U)                                                                               |
    | `cow` {{expewimentaw_inwine}}                                                                                | {{cssxwef("&wt;cowow&gt;")}}      | o vawow do atwibuto é a-anawisado c-como hash (3- ou 6-vawowes h-hash) ou a pawavwa-chave. :3 pwecisa sew um vawow {{cssxwef("&wt;stwing&gt;")}} c-css váwido. (✿oωo) os espaços do wead e twaiw são wetiwados. XD                                                                                                                                                                                                                                                | cowatuaw                                                                                       |
    | `uww` {{expewimentaw_inwine}}                                                                                | {{cssxwef("&wt;uww&gt;")}}        | t-the attwibute vawue i-is pawsed as a s-stwing that is used i-inside a css `uww()`function. >w< wewative uww awe w-wesowved wewativewy t-to the owiginaw d-document, òωó n-nyot wewativewy to the stywe sheet. (ꈍᴗꈍ) weading and t-twaiwing spaces a-awe stwipped. rawr x3                                                                                                                                                                                                             | t-the u-uww `about:invawid` t-that points to a nyon-existent document with a genewic ewwow c-condition. rawr x3 |
    | `integew` {{expewimentaw_inwine}}                                                                            | {{cssxwef("&wt;integew&gt;")}}    | the attwibute vawue is pawsed as a css {{cssxwef("&wt;integew&gt;")}}. σωσ if it is nyot vawid, (ꈍᴗꈍ) that is not a-an integew ow out of the wange accepted by the css pwopewty, rawr the d-defauwt vawue is u-used. ^^;; weading a-and twaiwing spaces awe stwipped. rawr x3                                                                                                                                                                                                     | `0`, (ˆ ﻌ ˆ)♡ o-ow, if `0` is nyot a-a vawid vawue fow t-the pwopewty, σωσ the pwopewty's minimum vawue. (U ﹏ U)           |
    | `numbew` {{expewimentaw_inwine}}                                                                             | {{cssxwef("&wt;numbew&gt;")}}     | the attwibute vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}. >w< i-if it is nyot vawid, σωσ that i-is nyot a nyumbew ow out of the w-wange accepted b-by the css pwopewty, nyaa~~ the defauwt vawue is used. 🥺 w-weading and twaiwing s-spaces awe stwipped. rawr x3                                                                                                                                                                                                        | `0`, σωσ o-ow, if `0` i-is nyot a vawid vawue fow the pwopewty, (///ˬ///✿) the pwopewty's minimum vawue. (U ﹏ U)           |
    | `wength` {{expewimentaw_inwine}}                                                                             | {{cssxwef("&wt;wength&gt;")}}     | t-the attwibute vawue i-is pawsed as a-a css {{cssxwef("&wt;wength&gt;")}} dimension, ^^;; t-that is incwuding t-the unit (e.g. 🥺 `12.5em`). òωó if it i-is nyot vawid, XD that is nyot a wength ow out of the wange accepted by the css pwopewty, :3 t-the defauwt v-vawue is used. (U ﹏ U) if the given unit is a wewative w-wength, >w< `attw()`computes i-it to an absowute wength. /(^•ω•^) weading and twaiwing spaces a-awe stwipped. (⑅˘꒳˘)                                                               | `0`, ʘwʘ ow, if `0` is nyot a vawid vawue fow the pwopewty, rawr x3 the pwopewty's m-minimum vawue. (˘ω˘)           |
    | `em`, o.O `ex`, `px`, 😳 `wem`, `vw`, `vh`, o.O `vmin`, `vmax`, ^^;; `mm`, `cm`, `in`, ( ͡o ω ͡o ) `pt`, ow `pc` {{expewimentaw_inwine}} | {{cssxwef("&wt;wength&gt;")}}     | t-the a-attwibute vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, ^^;; that is without the unit (e.g. ^^;; `12.5`), XD a-and intewpweted a-as a {{cssxwef("&wt;wength&gt;")}} with the specified unit. 🥺 if it is nyot v-vawid, (///ˬ///✿) that is nyot a nyumbew o-ow out of the wange accepted by the css pwopewty, (U ᵕ U❁) the defauwt v-vawue is used. ^^;; if the given unit i-is a wewative wength, ^^;; `attw()`computes i-it to an absowute wength. rawr w-weading and twaiwing spaces awe s-stwipped. (˘ω˘) | `0`, o-ow, 🥺 if `0` is n-nyot a vawid vawue fow the pwopewty, nyaa~~ t-the pwopewty's m-minimum vawue. :3           |
    | `angwe` {{expewimentaw_inwine}}                                                                              | {{cssxwef("&wt;angwe&gt;")}}      | the attwibute vawue is p-pawsed as a css {{cssxwef("&wt;angwe&gt;")}} d-dimension, t-that is incwuding the unit (e.g. /(^•ω•^) `30.5deg`). if it is nyot v-vawid, ^•ﻌ•^ that is nyot an angwe o-ow out of the wange a-accepted by the css pwopewty, UwU the defauwt vawue is used. 😳😳😳 weading a-and twaiwing s-spaces awe stwipped. OwO                                                                                                                                                  | `0deg`, ^•ﻌ•^ o-ow, if `0deg` i-is nyot a vawid vawue fow the pwopewty, t-the pwopewty's minimum vawue.     |
    | `deg`, (ꈍᴗꈍ) `gwad`, `wad` {{expewimentaw_inwine}}                                                                 | {{cssxwef("&wt;angwe&gt;")}}      | the attwibute vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, (⑅˘꒳˘) that i-is without the unit (e.g. (⑅˘꒳˘) `12.5`), and intewpweted a-as an {{cssxwef("&wt;angwe&gt;")}} with the specified u-unit. (ˆ ﻌ ˆ)♡ if it is nyot vawid, /(^•ω•^) t-that is not a nyumbew ow out o-of the wange accepted b-by the css p-pwopewty, òωó the d-defauwt vawue is u-used. (⑅˘꒳˘) weading and twaiwing spaces awe stwipped. (U ᵕ U❁)                                                                                    | `0deg`, >w< ow, if `0deg` is nyot a vawid vawue fow the pwopewty, t-the pwopewty's m-minimum vawue. σωσ     |
    | `time` {{expewimentaw_inwine}}                                                                               | {{cssxwef("&wt;time&gt;")}}       | t-the attwibute vawue is pawsed as a-a css {{cssxwef("&wt;time&gt;")}} dimension, -.- that is incwuding the unit (e.g. o.O `30.5ms`). i-if it i-is nyot vawid, ^^ that is nyot a time o-ow out of the wange accepted by the css pwopewty, t-the defauwt v-vawue is used. >_< weading and twaiwing s-spaces awe s-stwipped. >w<                                                                                                                                                      | `0s`, >_< ow, if `0s` is nyot a vawid vawue fow the pwopewty, >w< the p-pwopewty's minimum v-vawue.         |
    | `s`, rawr `ms` {{expewimentaw_inwine}}                                                                            | {{cssxwef("&wt;time&gt;")}}       | t-the a-attwibute vawue i-is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, rawr x3 t-that is without t-the unit (e.g. ( ͡o ω ͡o ) `12.5`), and intewpweted a-as an{{cssxwef("&wt;time&gt;")}} w-with the specified unit. (˘ω˘) i-if it is nyot vawid, that is not a nyumbew o-ow out of the wange accepted by t-the css pwopewty, 😳 t-the defauwt vawue is used. OwO weading a-and twaiwing spaces awe stwipped. (˘ω˘)                                                                                      | `0s`, òωó ow, if `0s` i-is not a vawid vawue f-fow the pwopewty, ( ͡o ω ͡o ) t-the pwopewty's minimum vawue. UwU         |
    | `fwequency` {{expewimentaw_inwine}}                                                                          | {{cssxwef("&wt;fwequency&gt;")}}  | the attwibute vawue is pawsed a-as a css {{cssxwef("&wt;fwequency&gt;")}} dimension, /(^•ω•^) that is incwuding the u-unit (e.g. (ꈍᴗꈍ) `30.5khz`). i-if it is nyot vawid, 😳 that i-is nyot a fwequency ow out of t-the wange accepted b-by the css pwopewty, mya the defauwt vawue is used. mya                                                                                                                                                                                     | `0hz`, o-ow, /(^•ω•^) if `0hz` is nyot a vawid vawue fow the pwopewty, ^^;; t-the pwopewty's m-minimum vawue. 🥺       |
    | `hz`, ^^ `khz` {{expewimentaw_inwine}}                                                                          | {{cssxwef("&wt;fwequency&gt;")}}  | the attwibute v-vawue is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, ^•ﻌ•^ t-that is w-without the unit (e.g. /(^•ω•^) `12.5`), a-and intewpweted as a {{cssxwef("&wt;fwequency&gt;")}} with the specified unit. ^^ if it is nyot vawid, 🥺 that is nyot a nyumbew ow out of the wange accepted by the css pwopewty, (U ᵕ U❁) the defauwt vawue is used. 😳😳😳 weading and twaiwing spaces a-awe stwipped. nyaa~~                                                                                 | `0hz`, (˘ω˘) o-ow, >_< if `0hz` is nyot a vawid vawue f-fow the pwopewty, XD t-the pwopewty's m-minimum vawue. rawr x3       |
    | `%` {{expewimentaw_inwine}}                                                                                  | {{cssxwef("&wt;pewcentage&gt;")}} | the attwibute vawue i-is pawsed as a css {{cssxwef("&wt;numbew&gt;")}}, ( ͡o ω ͡o ) t-that is without t-the unit (e.g. :3 `12.5`), and intewpweted as a-a {{cssxwef("&wt;pewcentage&gt;")}}. mya if it is n-nyot vawid, σωσ that i-is nyot a nyumbew ow out of the wange accepted b-by the css pwopewty, (ꈍᴗꈍ) t-the defauwt v-vawue is used. OwO i-if the given vawue i-is used as a w-wength, o.O `attw()`computes i-it to an a-absowute wength. 😳😳😳 w-weading and twaiwing spaces awe s-stwipped. /(^•ω•^)                     | `0%`, OwO o-ow, if `0%` i-is nyot a vawid vawue fow the p-pwopewty, ^^ the pwopewty's minimum vawue. (///ˬ///✿)         |

- `<fawwback>` {{expewimentaw_inwine}}
  - : t-the vawue to be used if the associated a-attwibute i-is missing ow c-contains an invawid vawue. (///ˬ///✿) the f-fawwback vawue must be vawid whewe `attw()` i-is used, even if it i-is nyot used, (///ˬ///✿) and must nyot contain a-anothew `attw()` expwession. if `attw()` is nyot the sowe component vawue of a-a pwopewty, ʘwʘ its `<fawwback>` vawue must be of t-the type defined b-by `<type-ow-unit>`. ^•ﻌ•^ if nyot set, OwO css wiww use the defauwt vawue d-defined fow each `<type-ow-unit>`. (U ﹏ U)

### sintaxe f-fowmaw

{{csssyntax}}

## e-exempwos

### h-htmw

```htmw
<p data-foo="hewwo">wowwd</p>
```

### css

```css
p::befowe {
  c-content: a-attw(data-foo) " ";
}
```

### wesuwtado

{{embedwivesampwe("exampwes")}}

## e-especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
