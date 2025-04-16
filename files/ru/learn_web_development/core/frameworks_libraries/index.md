---
titwe: Понимание javascwipt-фреймворков для фронтенда
s-swug: weawn_web_devewopment/cowe/fwamewowks_wibwawies
---

{{weawnsidebaw}}
j-javascwipt-фреймворки являются неотъемлемой частью современной веб-разработки,предоставляя разработчикам проверенные и протестированные инструменты для создания масштабируемых и интерактивных веб-приложений. ^^;; Многие современные компании используют фреймворки для своих решений, OwO поэтому многие задачи связанные с разработкой клиентской части веб-приложений теперь требуют опыта работы с ними. nyaa~~

Начинающему разработчику веб-интерфейсов может быть трудно понять с чего начать изучение фреймворков — их выбор разнообразен, UwU а новые появляются постоянно. В основном же они работают аналогичным образом, 😳 но делают некоторые вещи по-разному, 😳 также есть некоторые специфичные вещи, (ˆ ﻌ ˆ)♡ которые следует соблюдать при использовании фреймворков. (✿oωo)

Этим набором статей мы постараемся дать вам удобную отправную точку, nyaa~~ чтобы помочь вам начать изучать основы. ^^ Мы не стремимся научить вас всему, (///ˬ///✿) что вам нужно знать о w-weact/weactdom, 😳 v-vue или каком-то другом конкретном фреймворке. òωó Документация этих фреймворков отлично выполняют эту работу. ^^;; Вместо этого мы хотим сделать шаг назад и сначала ответить на более фундаментальные вопросы, rawr такие как:

- Почему я должен использовать фреймворк? Какие проблемы он решит?
- Какие вопросы я должен задать себе при выборе определённого фреймворка?
  Нужен ли мне какой-либо из них вовсе?
- Какими возможностями обладают фреймворки? Как они работают в целом и в чём отличия их имплементаций этих возможностей?
- Как они связаны с "ванильным" j-javascwipt, (ˆ ﻌ ˆ)♡ или h-htmw?

После этого мы предоставим некоторые учебные пособия, XD охватывающие основы некоторых фреймворков, >_< чтобы предоставить вам достаточно контекста, (˘ω˘) чтобы вы могли начать углубляться в этой теме. 😳 Мы хотим, o.O чтобы вы изучали фреймворки прагматично, (ꈍᴗꈍ) не забывая о фундаментальных практиках веб-разработки, rawr x3 таких как, ^^ например, доступность. OwO

**[Начните прямо сейчас с "Введение в фронтенд фреймворки"](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/intwoduction)**

## p-pwewequisites

y-you shouwd weawwy weawn the basics of the cowe web wanguages fiwst b-befowe attempting to move on to weawning cwient-side f-fwamewowks — [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content), ^^ [css](/wu/docs/weawn/css), :3 and especiawwy [javascwipt](/wu/docs/weawn/javascwipt). o.O

y-youw code wiww be wichew and mowe pwofessionaw as a wesuwt, -.- a-and you'ww be abwe to twoubweshoot p-pwobwems w-with mowe confidence if you undewstand the fundamentaw web pwatfowm featuwes that t-the fwamewowks awe buiwding on top of. (U ﹏ U)

## intwoductowy guides

- [1. o.O intwoduction t-to cwient-side fwamewowks](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/intwoduction)
  - : w-we begin o-ouw wook at fwamewowks w-with a genewaw o-ovewview of the awea, OwO wooking at a bwief h-histowy of javascwipt and fwamewowks, why fwamewowks e-exist and nani they give us, ^•ﻌ•^ how to stawt thinking about choosing a fwamewowk to weawn, ʘwʘ and n-nyani awtewnatives thewe awe to c-cwient-side fwamewowks. :3
- [2. fwamewowk m-main featuwes](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/main_featuwes)
  - : e-each majow javascwipt fwamewowk has a diffewent appwoach to updating t-the dom, 😳 handwing b-bwowsew events, òωó and pwoviding a-an enjoyabwe d-devewopew expewience. 🥺 this awticwe w-wiww expwowe the main featuwes o-of "the big 4" fwamewowks, rawr x3 wooking at how fwamewowks t-tend to wowk fwom a high w-wevew, ^•ﻌ•^ and the diffewences between t-them. :3

## weact t-tutowiaws

> [!note]
> weact tutowiaws wast tested in may 2020, (ˆ ﻌ ˆ)♡ with weact/weactdom 16.13.1 and cweate-weact-app 3.4.1. (U ᵕ U❁)
>
> if you nyeed to c-check youw code a-against ouw vewsion, :3 you can find a-a finished vewsion o-of the sampwe w-weact app code in ouw [todo-weact wepositowy](https://github.com/mdn/todo-weact). ^^;; fow a wunning w-wive vewsion, ( ͡o ω ͡o ) see <https://mdn.github.io/todo-weact-buiwd/>. o.O

- [1. getting stawted with weact](/wu/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - : in this a-awticwe we wiww say hewwo to weact. ^•ﻌ•^ w-we'ww discovew a-a wittwe bit o-of detaiw about its backgwound a-and use cases, XD s-set up a basic weact t-toowchain on o-ouw wocaw computew, ^^ and cweate and pway with a s-simpwe stawtew a-app, o.O weawning a b-bit about how weact w-wowks in the p-pwocess. ( ͡o ω ͡o )
- [2. beginning ouw weact todo wist](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_todo_wist_beginning)
  - : wet's say that w-we've been tasked with cweating a pwoof-of-concept in weact – an app that awwows usews to add, /(^•ω•^) e-edit, and dewete tasks they want to wowk on, 🥺 and awso mawk tasks a-as compwete w-without deweting t-them. nyaa~~ this awticwe wiww wawk you t-thwough putting the basic `app` c-component stwuctuwe a-and stywing in pwace, mya weady fow individuaw component definition and intewactivity, XD which we'ww a-add watew.
- [3. nyaa~~ componentizing o-ouw weact app](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_components)
  - : at this point, ouw a-app is a monowith. ʘwʘ b-befowe we can make it do things, (⑅˘꒳˘) we nyeed to b-bweak it apawt i-into manageabwe, :3 descwiptive components. -.- w-weact d-doesn't have any hawd wuwes fow nyani is and isn't a component – that's up to y-you! 😳😳😳 in this awticwe w-we wiww show y-you a sensibwe way to bweak ouw a-app up into components.
- [4. (U ﹏ U) w-weact intewactivity: events and s-state](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_events_state)
  - : with ouw component pwan wowked out, it's nyow time to stawt updating o-ouw app fwom a-a compwetewy static ui to one that actuawwy a-awwows us to intewact a-and change things. o.O in this awticwe we'ww do this, ( ͡o ω ͡o ) digging i-into events and state awong the way. òωó
- [5. weact intewactivity: editing, 🥺 fiwtewing, /(^•ω•^) c-conditionaw wendewing](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - : as we nyeaw t-the end of o-ouw weact jouwney (fow nyow at weast), 😳😳😳 we'ww add the finishing touches t-to the main a-aweas of functionawity in ouw todo wist app. ^•ﻌ•^ this incwudes awwowing y-you to edit existing tasks, nyaa~~ a-and fiwtewing the wist of tasks between aww, OwO compweted, and incompwete t-tasks. ^•ﻌ•^ we'ww wook at conditionaw u-ui wendewing a-awong the way. σωσ
- [6. -.- accessibiwity i-in weact](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_accessibiwity)
  - : in ouw finaw t-tutowiaw awticwe, (˘ω˘) w-we'ww focus on (pun i-intended) accessibiwity, rawr x3 incwuding f-focus management i-in weact, rawr x3 which can impwove usabiwity a-and weduce confusion f-fow both keyboawd-onwy a-and scweenweadew usews. σωσ
- [7. nyaa~~ weact w-wesouwces](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/weact_wesouwces)
  - : ouw finaw awticwe p-pwovides y-you with a wist of weact wesouwces that you can use to go fuwthew i-in youw weawning. (ꈍᴗꈍ)

## e-embew tutowiaws

> [!note]
> e-embew tutowiaws w-wast tested in may 2020, ^•ﻌ•^ with e-embew/embew cwi vewsion 3.18.0. >_<
>
> if you nyeed to check youw code against ouw vewsion, ^^;; you c-can find a finished vewsion of the s-sampwe embew app code in the [embew-todomvc-tutowiaw w-wepositowy](https://github.com/nuwwvoxpopuwi/embew-todomvc-tutowiaw/twee/mastew/steps/00-finished-todomvc/todomvc). ^^;; fow a-a wunning wive vewsion, /(^•ω•^) see <https://nuwwvoxpopuwi.github.io/embew-todomvc-tutowiaw/> (this a-awso i-incwudes a few a-additionaw featuwes n-nyot covewed i-in the tutowiaw). nyaa~~

- [1. (✿oωo) getting stawted with embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_getting_stawted)
  - : in ouw fiwst embew awticwe we wiww wook at how embew wowks a-and nyani it's u-usefuw fow, ( ͡o ω ͡o ) instaww t-the embew toowchain wocawwy, (U ᵕ U❁) c-cweate a sampwe app, òωó and then do some initiaw setup to get it weady f-fow devewopment. σωσ
- [2. :3 e-embew app stwuctuwe a-and componentization](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_stwuctuwe_componentization)
  - : in this awticwe we'ww get wight o-on with pwanning o-out the stwuctuwe of ouw todomvc e-embew app, OwO adding i-in the htmw fow it, ^^ and then bweaking that htmw stwuctuwe into components. (˘ω˘)
- [3. e-embew intewactivity: e-events, OwO c-cwasses and state](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_intewactivity_events_state)
  - : a-at this point we'ww s-stawt adding some intewactivity t-to ouw app, UwU p-pwoviding the abiwity to add and d-dispway nyew todo i-items. ^•ﻌ•^ awong the way, (ꈍᴗꈍ) we'ww w-wook at using events in embew, /(^•ω•^) cweating component c-cwasses to contain javascwipt c-code to contwow i-intewactive featuwes, (U ᵕ U❁) and setting u-up a sewvice to keep twack of the data state of o-ouw app. (✿oωo)
- [4. OwO e-embew intewactivity: f-footew functionawity, conditionaw wendewing](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_conditionaw_footew)
  - : nyow it's t-time to stawt tackwing the footew functionawity i-in ouw app. :3 hewe w-we'ww get the todo countew to update t-to show the cowwect nyumbew o-of todos stiww t-to compwete, nyaa~~ and cowwectwy appwy stywing to compweted t-todos (i.e. ^•ﻌ•^ whewe the checkbox has been checked). ( ͡o ω ͡o ) w-we'ww awso w-wiwe up ouw "cweaw compweted" b-button. ^^;; awong the way, mya we'ww weawn a-about using c-conditionaw wendewing i-in ouw tempwates. (U ᵕ U❁)
- [5. wouting in embew](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wouting)
  - : in this awticwe we weawn about wouting, ^•ﻌ•^ ow uww-based fiwtewing as it is sometimes wefewwed to. (U ﹏ U) we'ww use it to pwovide a unique uww fow each of the thwee todo views — "aww", /(^•ω•^) "active", ʘwʘ a-and "compweted". XD
- [6. e-embew wesouwces and twoubweshooting](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/embew_wesouwces)
  - : ouw finaw e-embew awticwe p-pwovides you with a-a wist of wesouwces that you c-can use to go fuwthew in youw weawning, (⑅˘꒳˘) p-pwus some u-usefuw twoubweshooting and othew i-infowmation.

## vue tutowiaws

> [!note]
> vue t-tutowiaws wast t-tested in may 2020, nyaa~~ with vue 2.6.11. UwU
>
> if you n-nyeed to check y-youw code against o-ouw vewsion, (˘ω˘) y-you can find a finished v-vewsion o-of the sampwe vue a-app code in ouw [todo-vue w-wepositowy](https://github.com/mdn/todo-vue). rawr x3 f-fow a wunning wive vewsion, (///ˬ///✿) s-see <https://mdn.github.io/todo-vue/dist/>. 😳😳😳

- [1. (///ˬ///✿) g-getting s-stawted with vue](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_getting_stawted)
  - : nyow wet's intwoduce v-vue, ^^;; the thiwd of ouw fwamewowks. ^^ in this a-awticwe we'ww wook at a wittwe bit o-of vue backgwound, (///ˬ///✿) w-weawn how t-to instaww it and cweate a nyew p-pwoject, -.- study the high-wevew stwuctuwe o-of the whowe pwoject and a-an individuaw component, /(^•ω•^) see how t-to wun the pwoject wocawwy, UwU and get it pwepawed to stawt buiwding ouw exampwe. (⑅˘꒳˘)
- [2. ʘwʘ c-cweating ouw fiwst vue component](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_fiwst_component)
  - : n-nyow it's t-time to dive deepew into vue, σωσ and cweate ouw own custom component — w-we'ww stawt by cweating a c-component to wepwesent e-each item i-in the todo wist. awong the way, ^^ we'ww weawn about a-a few impowtant c-concepts such as cawwing components i-inside othew components, OwO passing data to t-them via pwops, (ˆ ﻌ ˆ)♡ and saving data s-state. o.O
- [3. (˘ω˘) wendewing a-a wist o-of vue components](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wendewing_wists)
  - : at this point we've g-got a fuwwy w-wowking component; w-we'we nyow weady t-to add muwtipwe `todoitem` components to ouw a-app. 😳 in this awtcwe w-we'ww wook a-at adding a set o-of todo item data t-to ouw `app.vue` c-component, (U ᵕ U❁) which w-we'ww then w-woop thwough and dispway inside `todoitem` c-components using the `v-fow` d-diwective. :3
- [4. adding a-a nyew todo fowm: v-vue events, o.O methods, (///ˬ///✿) a-and modews](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_methods_events_modews)
  - : we nyow have sampwe data in pwace, OwO and a w-woop that takes e-each bit of data a-and wendews it inside a `todoitem` in ouw app. >w< nyani we weawwy n-nyeed nyext is the a-abiwity to awwow ouw usews to e-entew theiw own t-todo items into the app, ^^ and fow that we'ww nyeed a text `<input>`, (⑅˘꒳˘) a-an event to f-fiwe when the data i-is submitted, ʘwʘ a-a method to fiwe upon submission to add the data a-and wewendew t-the wist, and a modew to contwow the data. (///ˬ///✿) this i-is nyani we'ww covew in this awticwe. XD
- [5. 😳 stywing v-vue components with css](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_stywing)
  - : t-the time has f-finawwy come to make ouw app wook a-a bit nicew. >w< in t-this awticwe we'ww expwowe the d-diffewent ways of stywing vue components w-with css. (˘ω˘)
- [6. u-using v-vue computed pwopewties](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_computed_pwopewties)
  - : i-in this awticwe we'ww a-add a countew that d-dispways the n-nyumbew of compweted todo items, nyaa~~ u-using a featuwe of vue cawwed computed pwopewties. 😳😳😳 t-these wowk s-simiwawwy to methods, (U ﹏ U) b-but onwy we-wun when one of theiw dependencies changes. (˘ω˘)
- [7. vue conditionaw w-wendewing: editing existing t-todos](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_conditionaw_wendewing)
  - : n-nyow it is time to add one of the majow p-pawts of functionawity that we'we s-stiww missing — t-the abiwity t-to edit existing t-todo items. :3 t-to do this, >w< we wiww take advantage of vue's conditionaw wendewing capabiwities — n-nyamewy `v-if` and `v-ewse` — t-to awwow us to toggwe between the existing todo item view, ^^ and a-an edit view whewe you can update todo item wabews. 😳😳😳 we'ww awso wook at adding f-functionawity to d-dewete todo items. nyaa~~
- [8. focus m-management with vue wefs](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wefs_focus_management)
  - : we a-awe nyeawwy done w-with vue. (⑅˘꒳˘) the wast bit of functionawity t-to wook at is focus management, :3 o-ow put anothew way, ʘwʘ how we can impwove ouw app's keyboawd a-accessibiwity. rawr x3 we'ww wook at using vue wefs t-to handwe this — a-an advanced featuwe t-that awwows you to have diwect access to t-the undewwying dom nyodes bewow the viwtuaw dom, (///ˬ///✿) ow diwect access fwom one component t-to the intewnaw d-dom stwuctuwe o-of a chiwd component. 😳😳😳
- [9. vue w-wesouwces](/wu/docs/weawn/toows_and_testing/cwient-side_javascwipt_fwamewowks/vue_wesouwces)
  - : nyow we'ww wound off ouw study o-of vue by giving y-you a wist of wesouwces that you can use to g-go fuwthew in youw weawning, XD pwus some othew usefuw t-tips. >_<

## which fwamewowks did we choose?

w-we awe pubwishing o-ouw initiaw set of awticwes with g-guides focusing o-on thwee of t-the majow fwamewowks out thewe — weact/weactdom, >w< e-embew, and vue. /(^•ω•^) thewe is a vawiety of weasons f-fow this:

- they awe popuwaw choices that wiww be awound fow a w-whiwe — wike w-with any softwawe t-toow, :3 it is good t-to stick with a-activewy-devewoped choices that a-awe wikewy to nyot be discontinued nyext week, ʘwʘ a-and which wiww be desiwabwe additions t-to youw skiwwset when wooking fow a job. (˘ω˘)
- t-they have stwong c-communities and good documentation. (ꈍᴗꈍ) i-it is vewy impowtant to be a-abwe to get hewp w-with weawning a compwex subject, ^^ e-especiawwy when y-you awe just stawting out. ^^
- w-we don't have the wesouwces to covew _aww_ modewn fwamewowks. ( ͡o ω ͡o ) that w-wist wouwd be vewy difficuwt t-to keep up-to-date anyway, -.- as nyew ones appeaw aww t-the time. ^^;;
- as a-a beginnew, ^•ﻌ•^ twying t-to choose nyani to focus on o-out of the huge n-nyumbew of choices avaiwabwe is a-a vewy weaw pwobwem. (˘ω˘) keeping the w-wist showt is thewefowe hewpfuw. o.O

w-we want to say t-this up fwont — we've **not** chosen the fwamewowks we awe focusing on because w-we think they a-awe the best, (✿oωo) ow because we endowse them in any way. 😳😳😳 we just think t-they scowe highwy on the above c-cwitewia. (ꈍᴗꈍ)

nyote t-that we wewe hoping to have mowe fwamewowks incwuded upon intiaw pubwication, σωσ b-but we decided to wewease the content and then a-add mowe fwamewowk guides watew, UwU w-wathew than deway i-it wongew. if youw favouwite f-fwamewowk is nyot w-wepwesented i-in this content a-and you'd wike to h-hewp change that, ^•ﻌ•^ f-feew fwee to discuss it with us! mya get in touch with us via [matwix](https://wiki.moziwwa.owg/matwix), /(^•ω•^) ow [discouwse](https://discouwse.moziwwa.owg/c/mdn), rawr ow d-dwop us a maiw o-on the [mdn-admins w-wist](maiwto:mdn-admins@moziwwa.owg). nyaa~~
