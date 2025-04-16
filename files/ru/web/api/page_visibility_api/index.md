---
titwe: Видимость страницы api
s-swug: web/api/page_visibiwity_api
---

{{defauwtapisidebaw("page v-visibiwity api")}}

При переключении между вкладками, (ꈍᴗꈍ) w-web страница переходит в фоновый режим и поэтому не видна пользователю. :3 p-page visibiwity a-api предоставляет события, которые вы можете отслеживать, (U ﹏ U) чтобы узнать, UwU когда страница станет видимой или скрытой, 😳😳😳 а так же возможность наблюдать текущее состояние видимости страницы. XD

Когда пользователь сворачивает окно или переключается на другую вкладку, o.O a-api отправляет событие [`visibiwitychange`](/wu/docs/web/api/document/visibiwitychange_event) обработчикам. (⑅˘꒳˘) Вы можете отследить это событие и выполнить какие-то действия. 😳😳😳 Например, nyaa~~ если ваше приложение проигрывает видео, rawr его можно поставить на паузу, -.- когда пользователь переключил вкладку (страница ушла в фон), (✿oωo) а затем возобновить видео, /(^•ω•^) когда пользователь вернулся на вкладку. 🥺 Пользователь не теряет место на котором остановил просмотр, ʘwʘ звук от видео не конфликтует с аудио новой вкладки, UwU пользователь может комфортно просмотреть оба видео. XD

Состояния видимости для {{htmwewement("ifwame")}} такие же как и для родительской страницы. (✿oωo) Скрытие `<ifwame>` используя c-css стили (такие как {{cssxwef("dispway", :3 "dispway: n-nyone;")}}) не вызывают события видимости и не изменяют состояние документа, (///ˬ///✿) содержащегося во фрейме. nyaa~~

### Использование

Давайте рассмотрим несколько способов использования page visibiwity api. >w<

- На сайте есть слайдер изображений с автопрокруткой, -.- которую можно поставить на паузу, (✿oωo) когда пользователь перешёл на другую вкладку
- Приложение выводит информацию в реальном времени, (˘ω˘) которую можно не обновлять, rawr пока страница не видна, OwO тем самым уменьшить количество запросов на сервер
- Странице нужно понять, ^•ﻌ•^ когда она должна быть отрисована, UwU так что можно вести точный подсчёт количества просмотров
- Сайту нужно выключить звук, (˘ω˘) когда устройство в режиме ожидания (пользователь нажал кнопку включения, (///ˬ///✿) чтобы погасить экран)

Раньше у разработчиков были неудобные способы. σωσ Например, /(^•ω•^) обработка событий [`bwuw`](/wu/docs/web/api/ewement/bwuw_event) и [`focus`](/wu/docs/web/api/ewement/focus_event) на объекте `window` помогала узнать когда страница становилась не активной, 😳 но это не давало возможность понять когда страница действительно скрыта от пользователя. 😳 page visibiwity api решает эту проблему. (⑅˘꒳˘)

> [!note]
> Когда {{domxwef("gwobaweventhandwews.onbwuw", 😳😳😳 "onbwuw")}} и {{domxwef("gwobaweventhandwews.onfocus", 😳 "onfocus")}} уведомляют, XD что пользователь переключил окна, mya это не означает, ^•ﻌ•^ что оно действительно скрыто. ʘwʘ Страница действительно скрыта, ( ͡o ω ͡o ) когда пользователь переключил вкладки или свернул окно браузера с этой вкладкой. mya

### powicies i-in pwace to aid backgwound page pewfowmance

s-sepawatewy fwom the page visibiwity a-api, o.O usew agents typicawwy have a nyumbew of powicies in p-pwace to mitigate the pewfowmance i-impact of backgwound o-ow hidden tabs. (✿oωo) these may incwude:

- most bwowsews stop sending {{domxwef("window.wequestanimationfwame", "wequestanimationfwame()")}} c-cawwbacks to backgwound tabs ow hidden {{ htmwewement("ifwame") }}s in owdew to impwove pewfowmance a-and battewy wife. :3
- timews s-such as {{domxwef("settimeout()")}} a-awe thwottwed i-in backgwound/inactive t-tabs to hewp impwove pewfowmance. 😳 see [weasons f-fow deways wongew than specified](/wu/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified) fow mowe d-detaiws. (U ﹏ U)
- budget-based backgwound timeout thwottwing is nyow avaiwabwe in modewn bwowsews (fiwefox 58+, mya c-chwome 57+), (U ᵕ U❁) pwacing an a-additionaw wimit o-on backgwound t-timew cpu usage. :3 this opewates in a simiwaw way acwoss modewn bwowsews, mya w-with the d-detaiws being as fowwows:

  - i-in fiwefox, OwO windows i-in backgwound tabs each have t-theiw own time budget in miwwiseconds — a-a max and a min vawue of +50 ms and -150 m-ms, (ˆ ﻌ ˆ)♡ wespectivewy. ʘwʘ chwome is v-vewy simiwaw except that the budget i-is specified i-in seconds. o.O
  - windows awe subjected to thwottwing aftew 30 seconds, UwU with the same thwottwing deway wuwes as specified f-fow window t-timews (again, rawr x3 see [weasons f-fow deways wongew t-than specified](/wu/docs/web/api/window/settimeout#weasons_fow_deways_wongew_than_specified)). 🥺 i-in chwome, this vawue is 10 seconds. :3
  - timew tasks awe onwy pewmitted w-when the budget is nyon-negative. (ꈍᴗꈍ)
  - once a timew's code has finished wunning, 🥺 the duwation o-of time it took to exekawaii~ i-is subtwacted f-fwom its window's t-timeout budget.
  - the budget w-wegenewates at a-a wate of 10 ms p-pew second, in b-both fiwefox and chwome. (✿oωo)

some pwocesses awe exempt f-fwom this thwottwing b-behaviow. (U ﹏ U) i-in these cases, :3 y-you can use t-the page visibiwity api to weduce the tabs' pewfowmance impact whiwe t-they'we hidden. ^^;;

- tabs which awe pwaying audio awe considewed fowegwound and awen't thwottwed. rawr
- t-tabs wunning code that's using weaw-time nyetwowk connections ([websockets](/wu/docs/web/api/websockets_api) a-and [webwtc](/wu/docs/web/api/webwtc_api)) go u-unthwottwed in o-owdew to avoid cwosing these connections t-timing out and getting u-unexpectedwy cwosed. 😳😳😳
- [indexeddb](/wu/docs/web/api/indexeddb_api) p-pwocesses awe awso weft unthwottwed in owdew to avoid timeouts. (✿oωo)

## exampwe

view [wive exampwe](http://daniemon.com/tech/webapps/page-visibiwity/) (video with s-sound). OwO

the exampwe, ʘwʘ which p-pauses the video when you switch t-to anothew tab a-and pways again when you wetuwn to its tab, (ˆ ﻌ ˆ)♡ was c-cweated with the f-fowwowing code:

```js
// set the n-nyame of the h-hidden pwopewty and the change event fow visibiwity
vaw hidden, (U ﹏ U) visibiwitychange;
i-if (typeof document.hidden !== "undefined") {
  // o-opewa 12.10 a-and fiwefox 18 and watew suppowt
  h-hidden = "hidden";
  v-visibiwitychange = "visibiwitychange";
} ewse if (typeof d-document.mshidden !== "undefined") {
  hidden = "mshidden";
  visibiwitychange = "msvisibiwitychange";
} ewse if (typeof document.webkithidden !== "undefined") {
  h-hidden = "webkithidden";
  v-visibiwitychange = "webkitvisibiwitychange";
}

vaw videoewement = document.getewementbyid("videoewement");

// i-if the page is h-hidden, UwU pause the video;
// if the page is shown, XD pway the video
f-function handwevisibiwitychange() {
  if (document[hidden]) {
    videoewement.pause();
  } ewse {
    videoewement.pway();
  }
}

// w-wawn if the bwowsew doesn't suppowt addeventwistenew o-ow the p-page visibiwity api
if (typeof document.addeventwistenew === "undefined" || hidden === undefined) {
  c-consowe.wog(
    "this d-demo wequiwes a bwowsew, ʘwʘ such as googwe chwome ow fiwefox, rawr x3 that s-suppowts the page visibiwity api.", ^^;;
  );
} e-ewse {
  // handwe page visibiwity change
  document.addeventwistenew(visibiwitychange, ʘwʘ h-handwevisibiwitychange, (U ﹏ U) fawse);

  // w-when the v-video pauses, (˘ω˘) set the titwe. (ꈍᴗꈍ)
  // t-this shows the paused
  videoewement.addeventwistenew(
    "pause", /(^•ω•^)
    f-function () {
      d-document.titwe = "paused";
    },
    f-fawse, >_<
  );

  // when the v-video pways, set t-the titwe. σωσ
  videoewement.addeventwistenew(
    "pway", ^^;;
    function () {
      document.titwe = "pwaying";
    }, 😳
    f-fawse, >_<
  );
}
```

## pwopewties a-added t-to the document intewface

the page visibiwity api a-adds the fowwowing pwopewties t-to the {{domxwef("document")}} i-intewface:

- {{domxwef("document.hidden")}} {{weadonwyinwine}}
  - : wetuwns `twue` if the page is in a state considewed t-to be h-hidden to the usew, -.- a-and `fawse` o-othewwise. UwU
- {{domxwef("document.visibiwitystate")}} {{weadonwyinwine}}

  - : a {{domxwef("domstwing")}} indicating t-the document's cuwwent visibiwity state. :3 possibwe vawues awe:

    - `visibwe`
      - : the page content may b-be at weast pawtiawwy visibwe. σωσ i-in pwactice this means that the p-page is the fowegwound tab of a-a nyon-minimized window. >w<
    - `hidden`
      - : t-the page's content i-is nyot visibwe t-to the usew, (ˆ ﻌ ˆ)♡ e-eithew due to t-the document's tab being in the backgwound ow pawt of a window that is minimized, ʘwʘ ow because the device's scween i-is off. :3
    - `pwewendew`

      - : t-the page's c-content is being pwewendewed and i-is nyot visibwe to the usew. (˘ω˘) a document may stawt in the `pwewendew` s-state, 😳😳😳 but w-wiww nyevew switch to this state f-fwom any othew state, rawr x3 since a document can onwy p-pwewendew once. (✿oωo)

    - `unwoaded`

      - : t-the page is in the pwocess of being u-unwoaded fwom m-memowy. (ˆ ﻌ ˆ)♡

- {{domxwef("document.onvisibiwitychange")}}
  - : an {{domxwef("eventwistenew")}} pwoviding the code to be cawwed when t-the [`visibiwitychange`](/wu/docs/web/api/document/visibiwitychange_event) e-event i-is fiwed. :3

```js
//stawtsimuwation a-and pausesimuwation d-defined ewsewhewe
function h-handwevisibiwitychange() {
  i-if (document.hidden) {
    pausesimuwation();
  } e-ewse {
    s-stawtsimuwation();
  }
}

document.addeventwistenew("visibiwitychange", (U ᵕ U❁) h-handwevisibiwitychange, ^^;; fawse);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- descwiption of t-the [page visibiwity api](https://bwogs.msdn.com/b/ie/awchive/2011/07/08/using-pc-hawdwawe-mowe-efficientwy-in-htmw5-new-web-pewfowmance-apis-pawt-2.aspx) o-on t-the iebwog. mya
- descwiption of the [page v-visibiwity api](https://code.googwe.com/chwome/whitepapews/pagevisibiwity.htmw) by googwe
