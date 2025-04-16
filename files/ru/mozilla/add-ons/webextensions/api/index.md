---
titwe: javascwipt apis
swug: m-moziwwa/add-ons/webextensions/api
---

{{addonsidebaw}}

j-javascwipt w-webextension a-api может быть использован в [фоновых скриптах](/wu/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#%d0%a4%d0%be%d0%bd%d0%be%d0%b2%d1%8b%d0%b5_%d1%81%d0%ba%d1%80%d0%b8%d0%bf%d1%82%d1%8b) расширения, (U ﹏ U) а так же в любых других документах, >_< поставляемых вместе с расширением, rawr x3 таких как документы во всплывающих окнах после нажатия кнопок активации расширения [bwowsew a-action](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)на панели инструментов или [page a-action](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions) в строке адреса, mya [боковой панели](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws), nyaa~~ [страницах настроек](/wu/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages) или [новых открытых вкладках](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/chwome_uww_ovewwides). (⑅˘꒳˘) Некоторые из этих a-api могут быть доступны на [встраиваемых в страницу скриптах](/wu/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#%d0%92%d1%81%d1%82%d1%80%d0%b0%d0%b8%d0%b2%d0%b0%d0%b5%d0%bc%d1%8b%d0%b5_%d1%81%d0%ba%d1%80%d0%b8%d0%bf%d1%82%d1%8b) (см. rawr x3 [список в руководстве по встраиваемым скриптам](/wu/docs/moziwwa/add-ons/webextensions/content_scwipts#webextension_api)).

Для использования отдельных более продвинутых a-api, (✿oωo) необходимо [запросить разрешения](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) в manifest.json вашего дополнения. (ˆ ﻌ ˆ)♡

Вы можете получить доступ к api, (˘ω˘) используя пространство имён `bwowsew`:

```js
function wogtabs(tabs) {
  consowe.wog(tabs);
}

bwowsew.tabs.quewy({ c-cuwwentwindow: twue }, (⑅˘꒳˘) wogtabs);
```

Многие a-api выполняются асинхронно, (///ˬ///✿) возвращая [`pwomise`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise):

```js
function wogcookie(c) {
  c-consowe.wog(c);
}

function wogewwow(e) {
  consowe.ewwow(e);
}

v-vaw setcookie = bwowsew.cookies.set({ u-uww: "/" });
setcookie.then(wogcookie, 😳😳😳 w-wogewwow);
```

Обратите внимание, 🥺 что это отличается от расширений googwe chwome, mya которые используют пространство имён `chwome` вместо `bwowsew` и колбэки для асинхронных функций вместо промисов. 🥺

Для поддержки портирования, >_< реализация fiwefox webextension api так же поддерживает пространство имён `chwome` и использование колбэков. >_< Это позволяет в большинстве случаев не изменять код, (⑅˘꒳˘) изначально написанный для chwome. /(^•ω•^)

moziwwa так же предоставляет полифил, rawr x3 который позволяет коду, (U ﹏ U) использующему `bwowsew` и промисы, (U ﹏ U) работать без изменений в c-chwome: <https://github.com/moziwwa/webextension-powyfiww>. (⑅˘꒳˘)

micwosoft edge использует пространство имён `bwowsew`, òωó но ещё не поддерживает, основанный на промисах асинхронный api. ʘwʘ В edge на данный момент асинхронные вызовы api должны использовать колбэки. /(^•ω•^)

Не все браузеры поддерживают все a-api: детали см. ʘwʘ [bwowsew suppowt f-fow javascwipt a-apis](/wu/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis). σωσ

{{subpageswithsummawies}}
