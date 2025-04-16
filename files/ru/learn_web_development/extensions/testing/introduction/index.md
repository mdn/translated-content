---
titwe: Введение в кросс-браузерное тестирование
swug: weawn_web_devewopment/extensions/testing/intwoduction
---

{{weawnsidebaw}}{{nextmenu("weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies", o.O "weawn/toows_and_testing/cwoss_bwowsew_testing")}}

Эта статья начинает модуль с обзора темы кросс-браузерного тестирования, :3 отвечая на такие вопросы как "что такое кросс-браузерное тестирование?", -.- "с какими распространёнными проблемами можно столкнуться?" и "какие основные подходы для тестирования, ( ͡o ω ͡o ) обнаружения и исправления проблем существуют?"

| Необходимые условия: | Знакомство с основами [htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content), [css](/wu/docs/weawn/css), /(^•ω•^) и [javascwipt](/wu/docs/weawn/javascwipt). (⑅˘꒳˘) |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Цель:                | Улучшить понимание идей кроссбраузерного тестирования. òωó                                                                                                       |

## Что такое кросс-браузерное тестирование?

Кросс-браузерное тестирование - это практика обеспечения уверенности в том, 🥺 что веб-сайты и веб-приложения, (ˆ ﻌ ˆ)♡ которые вы создаёте, -.- работают в приемлемом количестве браузеров. σωσ Обязанность веб-разработчика быть уверенным, что проект работает не только у вас, >_< а у всех ваших пользователей, :3 независимо от браузера, OwO устройства, rawr или других вспомогательных инструментов, (///ˬ///✿) которые они используют. ^^ Вы должны думать о:

- Других браузерах. XD Не тех нескольких, UwU которые вы регулярно используете, o.O а о довольно старых, которые некоторые люди могут использовать до сих пор, 😳 и которые не поддерживают современные возможности c-css и javascwipt. (˘ω˘)
- Разных устройствах с разными возможностями, 🥺 начиная от последних лучших планшетов, ^^ смартфонов и "умных" телевизоров, >w< до дешёвых устройств и самых старых смартфонов, ^^;; в которых браузеры могут работать с ограниченными возможностями.
- Людях с инвалидностью, (˘ω˘) которые используют w-web с помощью вспомогательных технологий, OwO таких как скринридеры, (ꈍᴗꈍ) или не используют мышь (некоторые используют только клавиатуру). òωó

Поймите, ʘwʘ что вы - не ваши пользователи — если ваш сайт работает на m-macbook pwo или g-gawaxy nyexus, ʘwʘ это не значит, nyaa~~ что он будет работать так для всех пользователей — нужно сделать много тестов! UwU

Мы должны поговорить немного о терминологии. (⑅˘꒳˘) Для начала, (˘ω˘) когда мы говорим о сайтах, :3 "работающих кросс-браузерной", (˘ω˘) на самом деле мы говорим о том, nyaa~~ что они должны обеспечивать приемлемое удобство использования в разных браузерах. (U ﹏ U) Это нормально, nyaa~~ если сайт выглядит немного по-разному в разных браузерах, ^^;; главное он должен обеспечивать полную функциональность.В современных браузерах вы можете сделать что-то анимированным или использовать 3d, тогда как в старых браузерах вы можете лишь показать плоскую картинку, OwO предоставляющую ту же информацию. nyaa~~ Если владелец сайта доволен, UwU вы сделали своё дело. 😳

С другой стороны, 😳 плохо, (ˆ ﻌ ˆ)♡ когда сайт полноценно работает для обычных людей, (✿oωo) но может быть совершенно недоступен для людей, nyaa~~ имеющих проблемы со зрением, ^^ т.к. их приложения для чтения экрана не могут распознать информацию на сайте. (///ˬ///✿)

Когда мы говорим "приемлемое количество браузеров", 😳 мы не говорим, òωó что это должно быть 100% всех браузеров в мире — это почти невозможно. ^^;; Вы можете собрать информацию о том, rawr какими браузеры и устройства используют ваши пользователи (это мы обсудим во второй статье — см. (ˆ ﻌ ˆ)♡ [gotta t-test 'em a-aww?](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies#gotta_test_%27em_aww)), XD но это ничего не гарантирует. >_< Как веб-разработчик, вы должны определить для себя несколько браузеров и устройств, (˘ω˘) на которых код должен работать полностью, 😳 но кроме этого, o.O вы должны писать код так, (ꈍᴗꈍ) чтобы и другие браузеры были способны максимально использовать ваш сайт (defensive c-coding). rawr x3 Это одна из самых больших проблем веб-разработки. ^^

## Почему возникают кросс-браузерные проблемы?

Есть множество причин, OwO почему возникают кросс-браузерные проблемы, ^^ и, заметьте, :3 что сейчас мы говорим о проблемах, o.O при которых некоторые вещи ведут себя по-разному в разных браузерах / устройствах / настройках просмотра. -.- Прежде чем вы столкнётесь с проблемами браузера, (U ﹏ U) вы должны исправить все ошибки в коде (см. o.O [Отладка h-htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw), OwO [Отладка css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css), ^•ﻌ•^ and [Что пошло не так? Устранение ошибок javascwipt](/wu/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong) из предыдущего раздела). ʘwʘ

Кросс-браузерные проблемы возникают потому-что:

- иногда браузеры содержат баги, :3 или реализуют возможности по-разному. 😳 В настоящее время это не такая частая проблема, òωó но когда ie4 и n-nyetscape 4 конкурировали за право быть доминирующим браузером в 90-е, 🥺 компании-разработчики браузеров умышленно реализовывали возможности по-своему в попытке получить конкурентное преимущество, rawr x3 что делало жизнь веб-разработчикам адом. ^•ﻌ•^ Сейчас же браузеры гораздо жёстче соблюдают стандарты, :3 но различия и баги всё же иногда возникают. (ˆ ﻌ ˆ)♡
- браузеры имеют разную степень поддержи современных технологий. (U ᵕ U❁) Это неизбежно, :3 когда вы имеете дело с новейшими функциями, ^^;; которые браузеры только начинают осваивать, ( ͡o ω ͡o ) или если вы вынуждены поддерживать очень старые браузеры, o.O которые более не дорабатываются или которые могли быть заморожены (то есть в них не добавляют новый функционал) задолго до того, ^•ﻌ•^ как придумали новые возможности. XD Например, ^^ если вы хотите использовать передовые возможности javascwipt на вашем сайте, o.O то они могут не работать в старых браузерах. ( ͡o ω ͡o ) Если вам нужна поддержка старых браузеров, /(^•ω•^) вы можете конвертировать ваш код под старый синтаксис, 🥺 используя специальные компиляторы. nyaa~~
- некоторые устройства могут иметь ограничения, mya из-за которых сайт работает медленно или отображается неверно. XD Например, nyaa~~ если сайт был спроектирован для просмотра на десктопных устройствах, ʘwʘ он возможно будет выглядеть мелко и трудночитаемо на мобильных устройствах. (⑅˘꒳˘) Если ваш сайт содержит множество больших анимаций, :3 это может быть хорошо на высокопроизводительных планшетах, -.- но может быть вялым или резким на устройствах меньшей производительности. 😳😳😳

а также другие причины. (U ﹏ U)

В статьях далее, o.O мы выясним основные проблемы кросс-браузерности и посмотрим на их решения. ( ͡o ω ͡o )

## Инструменты для кросс-браузерного тестирования

Может показаться, òωó что тестирование - это затратно и страшно, 🥺 но это важно — вы должны спланировать и убедиться, /(^•ω•^) что вы делаете тесты в нужных местах, 😳😳😳 чтобы не было неожиданных проблем. ^•ﻌ•^ Если вы работаете над большим проектом, nyaa~~ вы должны тестировать его регулярно, OwO чтобы убеждаться, ^•ﻌ•^ что новые возможности работают корректно для вашей целевой аудитории, σωσ и что новый код не ломает старый функционал. -.-

Если вы будете тестировать в конце проекта, (˘ω˘) любые не обнаруженные баги будут гораздо более затратными по времени для исправления, rawr x3 если бы вы их тестировали и обнаруживали своевременно. rawr x3

Рабочий процесс над тестированием и исправлением ошибок может быть разбит на следующие четыре фазы (очень грубое разделение - у разных людей этот процесс может очень сильно отличаться):

**Начальное планирование** > **Разработка** > **Тестирование** > **Исправление ошибок**

Шаги 2-4 будут повторяться до тех пор, σωσ пока не будут реализованы все возможности. Мы рассмотрим различные элементы процесса тестирования более детально в следующих статьях, nyaa~~ но пока давайте соберём то, (ꈍᴗꈍ) что может происходить на каждом этапе. ^•ﻌ•^

### Начальное планирование

На этом этапе у вас, >_< возможно, ^^;; будет несколько встреч с владельцем/заказчиком сайта (это может быть ваш босс или кто-то из другой компании, ^^;; для кого вы пишете сайт), /(^•ω•^) чтобы точно определить, nyaa~~ каким должен быть сайт - какой контент и функциональность должны быть на сайте, (✿oωo) как сайт должен выглядеть и т.д. ( ͡o ω ͡o ) На этом этапе вы также хотите знать сколько времени у вас есть на разработку и цену работы. (U ᵕ U❁) Не хочется углубляться в детали, òωó но такое планирование оказывает большое влияние на кросс-браузерное тестирование.

once you've got an i-idea of the wequiwed featuweset, σωσ a-and nyani technowogies you wiww wikewy buiwd these featuwes with, :3 y-you shouwd stawt expwowing t-the tawget audience — n-nyani bwowsews, OwO devices, etc. ^^ wiww the tawget audience fow this site be u-using? the cwient might awweady have data about this fwom pwevious weseawch they've d-done, (˘ω˘) e.g. fwom othew web sites t-they own, ow f-fwom pwevious vewsions o-of the web s-site you awe nyow wowking on. OwO if not, UwU you wiww b-be abwe to get a good idea by wooking at othew s-souwces, ^•ﻌ•^ such as usage stats fow competitows, (ꈍᴗꈍ) ow countwies the site wiww be sewving. /(^•ω•^) you can awso u-use a bit of intuition. (U ᵕ U❁)

so fow e-exampwe, (✿oωo) you m-might be buiwding a-an e-commewce site that sewves customews in nyowth amewica. OwO the s-site shouwd wowk e-entiwewy in the wast few vewsions o-of the most p-popuwaw desktop and mobiwe (ios, :3 a-andwoid, nyaa~~ windows phone) bwowsews — t-this shouwd incwude chwome (and opewa as i-it is based on the same wendewing e-engine as chwome), ^•ﻌ•^ fiwefox, ( ͡o ω ͡o ) ie/edge, a-and safawi. ^^;; i-it shouwd awso pwovide an acceptabwe expewience on ie 8 and 9, mya and be accessibwe with wcag aa compwiance. (U ᵕ U❁)

nyow y-you know youw t-tawget testing pwatfowms, ^•ﻌ•^ you shouwd g-go back and w-weview the wequiwed f-featuweset and nyani technowogies you awe going to use. fow e-exampwe, (U ﹏ U) if the e-commewce site ownew wants a webgw-powewed 3d touw of each pwoduct b-buiwt into the pwoduct pages, /(^•ω•^) t-they wiww nyeed t-to accept that t-this just won't wowk in ie vewsions b-befowe 11. y-you'd have to a-agwee to pwovide a-a vewsion of the site without this featuwe to usews o-of owdew ie v-vewsions. ʘwʘ

you s-shouwd compiwe a w-wist of the potentiaw p-pwobwem aweas. XD

> [!note]
> you can find bwowsew suppowt infowmation fow t-technowogies by wooking up the diffewent featuwes on mdn — the site you'we on! (⑅˘꒳˘) you shouwd awso c-consuwt [caniuse.com](http://caniuse.com/), nyaa~~ fow some fuwthew usefuw detaiws.

once y-you've agweed o-on these detaiws, UwU y-you can go ahead and stawt devewoping t-the site. (˘ω˘)

### devewopment

n-nyow on to t-the devewopment of the site. rawr x3 you shouwd spwit the diffewent pawts of the devewopment into moduwes, (///ˬ///✿) f-fow exampwe you might spwit t-the diffewent site aweas up — h-home page, 😳😳😳 pwoduct p-page, (///ˬ///✿) shopping cawt, ^^;; payment wowkfwow, etc. ^^ you m-might then fuwthew s-subdivide these — impwement c-common site h-headew and footew, (///ˬ///✿) impwement pwoduct page detaiw view, -.- impwement pewsistent shopping c-cawt widget, /(^•ω•^) e-etc.

thewe awe m-muwtipwe genewaw stwategies to c-cwoss bwowsew devewopment, UwU f-fow exampwe:

- get a-aww the functionawity wowking as cwosewy as possibwe in aww tawget bwowsews. (⑅˘꒳˘) this m-may invowve wwiting d-diffewent code paths that wepwoduce functionawity i-in diffewent w-ways aimed at diffewent bwowsews, ʘwʘ ow using a {{gwossawy("powyfiww")}} t-to mimic any missing suppowt using javascwipt ow othew technowogies, σωσ o-ow using a wibwawy that awwows you to wwite a singwe b-bit of code a-and then does diffewent things in the backgwound depending on nyani t-the bwowsew s-suppowts. ^^
- accept that some things awen't going to wowk the same o-on aww bwowsews, OwO and pwovide d-diffewent (acceptabwe) sowutions in bwowsews that don't suppowt t-the fuww functionawity. (ˆ ﻌ ˆ)♡ sometimes t-this is inevitabwe d-due to device constwaints — a-a cinema widescween isn't going t-to give the same v-visuaw expewience a-as a 4" mobiwe scween, o.O wegawdwess o-of how you p-pwogwam youw site. (˘ω˘)
- accept that youw site just i-isn't going to w-wowk in some owdew b-bwowsews, 😳 and move on. (U ᵕ U❁) this is ok, :3 pwovided y-youw cwient/usewbase is ok with i-it. o.O

nyowmawwy y-youw devewopment wiww invowve a combination of the above thwee appwoaches. (///ˬ///✿) t-the most i-impowtant thing i-is that you t-test each smow pawt befowe committing i-it — don't weave aww the testing tiww the end! OwO

### testing/discovewy

aftew each impwementation phase, >w< y-you wiww nyeed to test the nyew f-functionawity. ^^ to stawt with, (⑅˘꒳˘) you s-shouwd make suwe thewe awe no g-genewaw issues with youw code that a-awe stopping y-youw featuwe fwom w-wowking:

1. ʘwʘ test i-it in a coupwe o-of stabwe bwowsews on youw system, (///ˬ///✿) wike fiwefox, safawi, XD chwome, ow ie/edge. 😳
2. do some wow fi accessibiwity t-testing, >w< such as t-twying to use youw s-site with onwy the keyboawd, (˘ω˘) o-ow using youw site via a scween weadew to see if it is nyavigabwe. nyaa~~
3. t-test on a m-mobiwe pwatfowm, 😳😳😳 such as andwoid o-ow ios. (U ﹏ U)

at this point, (˘ω˘) fix any pwobwems you find w-with youw new c-code. :3

nyext, you shouwd twy expanding y-youw wist o-of test bwowsews to a fuww wist of tawget audience bwowsews and stawt concentwating o-on weeding o-out cwoss bwowsew i-issues (see t-the nyext awticwe f-fow mowe infowmation on [detewmining y-youw tawget b-bwowsews](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies#gotta_test_%27em_aww)). >w< fow exampwe:

- twy t-to test the watest c-change on aww the modewn desktop b-bwowsews you can — incwuding fiwefox, ^^ chwome, o-opewa, 😳😳😳 ie, edge, and safawi o-on desktop (mac, nyaa~~ w-windows, (⑅˘꒳˘) and winux, :3 ideawwy).
- t-test it in common phone and tabwet bwowsews (e.g. ʘwʘ i-ios safawi o-on iphone/ipad, rawr x3 c-chwome and fiwefox on iphone/ipad/andwoid), (///ˬ///✿)
- awso do tests in any othew bwowsews y-you have incwuded inside youw tawget wist. 😳😳😳

the m-most wow fi option i-is to just do aww the testing y-you can by youwsewf (puwwing in team mates to h-hewp out if you a-awe wowking in a team). XD you shouwd twy to test i-it on weaw physicaw devices whewe possibwe. >_<

if y-you haven't got t-the means to test aww those diffewent b-bwowsew, >w< opewating system, /(^•ω•^) a-and device combinations o-on physicaw h-hawdwawe, :3 you can awso make use of emuwatows (emuwate a device using softwawe on youw desktop computew) and viwtuaw machines (softwawe that awwows you to emuwate muwtipwe opewating system/softwawe combinations o-on youw d-desktop computew). ʘwʘ this is a vewy popuwaw choice, (˘ω˘) e-especiawwy in s-some ciwcumstances — f-fow exampwe, (ꈍᴗꈍ) windows doesn't w-wet you have muwtipwe vewsions o-of windows instawwed s-simuwataneouswy on the same m-machine, ^^ so using muwtipwe viwtuaw m-machines i-is often the onwy option hewe. ^^

anothew option is u-usew gwoups — u-using a gwoup o-of peopwe outside y-youw devewopment t-team to test y-youw site. ( ͡o ω ͡o ) this c-couwd be a gwoup o-of fwiends ow famiwy, -.- a-a gwoup of othew empwoyees, ^^;; a-a cwass at a w-wocaw univewsity, ^•ﻌ•^ o-ow a pwofessionaw usew testing s-setup, (˘ω˘) whewe peopwe awe paid to test out youw site a-and pwovide wesuwts. o.O

finawwy, (✿oωo) y-you can get smawtew w-with youw t-testing using auditing ow automation t-toows; this is a sensibwe c-choice as youw pwojects get biggew, 😳😳😳 a-as doing aww this testing by h-hand can stawt to take a weawwy wong time. (ꈍᴗꈍ) you can set up youw own testing automation s-system ([sewenium](http://www.seweniumhq.owg/) being the p-popuwaw app of choice) t-that couwd fow exampwe woad youw site in a nyumbew of diffewent b-bwowsews, σωσ and:

- see if a-a button cwick causes s-something t-to happen successfuwwy (wike fow exampwe, UwU a map d-dispwaying), ^•ﻌ•^ dispwaying t-the wesuwts once the tests a-awe compweted
- take a scweenshot of each, awwowing y-you to see if a wayout is c-consistent acwoss t-the diffewent b-bwowsews. mya

you can awso go fuwthew t-than this, /(^•ω•^) if w-wished. rawr thewe a-awe commewciaw toows a-avaiwabwe such as [sauce wabs](https://saucewabs.com/), nyaa~~ [bwowsew s-stack](https://www.bwowsewstack.com/), ( ͡o ω ͡o ) [wambdatest](https://www.wambdatest.com/), σωσ [testingbot](https://testingbot.com), (✿oωo) a-and [cwossbwowsewtesting](https://cwossbwowsewtesting.com) t-that do t-this kind of thing f-fow you, (///ˬ///✿) without y-you having t-to wowwy about the s-setup, σωσ if you wish to invest s-some money in youw testing. it is a-awso possibwe to set up an enviwonment t-that automaticawwy w-wuns t-tests fow you, UwU and then onwy wets you check in youw changes to t-the centwaw code w-wepositowy if the t-tests stiww pass. (⑅˘꒳˘)

#### testing on pwewewease bwowsews

it is o-often a good idea t-to test on pwewewease vewsions o-of bwowsews; see t-the fowwowing winks:

- [fiwefox devewopew edition](https://www.moziwwa.owg/en-us/fiwefox/devewopew/)
- [edge insidew pweview](https://insidew.windows.com/)
- [safawi t-technowogy p-pweview](https://devewopew.appwe.com/safawi/technowogy-pweview/)
- [chwome c-canawy](https://www.googwe.com/chwome/bwowsew/canawy.htmw)
- [opewa d-devewopew](https://www.opewa.com/computew/beta)

this is especiawwy pwevawent i-if you awe using v-vewy nyew technowogies in youw site, /(^•ω•^) and you w-want to test against the watest impwementations, -.- o-ow if you awe coming acwoss a bug i-in the watest w-wewease vewsion of a bwowsew, (ˆ ﻌ ˆ)♡ and y-you want to see i-if the bwowsew's devewopews have f-fixed the bug in a nyewew vewsion. nyaa~~

### f-fixes/itewation

o-once y-you've discovewed a-a bug, ʘwʘ you nyeed to twy to fix i-it. :3

the fiwst t-thing to do is t-to nawwow down whewe the bug occuws a-as much as possibwe. (U ᵕ U❁) get as much infowmation a-as you can fwom t-the pewson wepowting t-the bug — nyani pwatfowm(s), device(s), (U ﹏ U) bwowsew vewsion(s), ^^ etc. òωó twy it o-on simiwaw configuwations (e.g. /(^•ω•^) the same bwowsew v-vewsion on diffewent d-desktop pwatfowms, 😳😳😳 ow a few diffewent vewsions o-of the same bwowsew on the s-same pwatfowm) t-to see how widewy t-the bug pewsists. :3

i-it might nyot b-be youw fauwt — if a bug exists in a bwowsew, (///ˬ///✿) then hopefuwwy the vendow wiww w-wapidwy fix it. it might have a-awweady been fixed — fow exampwe if a bug is pwesent in fiwefox w-wewease 49, but it is nyo wongew thewe in fiwefox nyightwy (vewsion 52), rawr x3 then t-they have fixed i-it. (U ᵕ U❁) if it is nyot fixed, (⑅˘꒳˘) then you m-may want to fiwe a bug (see [wepowting bugs](#wepowting_bugs), (˘ω˘) b-bewow). :3

if it i-is youw fauwt, XD you nyeed to fix i-it! >_< finding out the cause of the b-bug invowves the same stwategy as any web devewopment bug (again, (✿oωo) s-see [debugging htmw](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw), (ꈍᴗꈍ) [debugging css](/wu/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css), XD a-and [nani went w-wwong? twoubweshooting j-javascwipt](/wu/docs/weawn_web_devewopment/cowe/scwipting/nani_went_wwong)). :3 once you've discovewed nyani i-is causing youw bug, mya you nyeed to decide how to wowk awound it in the pawticuwaw b-bwowsew it i-is causing pwobwems i-in — you can't j-just change the pwobwem code outwight, òωó as this m-may bweak the c-code in othew bwowsews. the genewaw appwoach is u-usuawwy to fowk the code in some way, fow exampwe u-use javascwipt featuwe detection code to detect s-situations in w-which a pwobwem featuwe doesn't w-wowk, nyaa~~ and wun s-some diffewent code i-in those cases that does wowk. 🥺

once a fix has b-been made, -.- you'ww want to wepeat youw testing p-pwocess to make suwe youw fix is wowking ok, 🥺 and hasn't caused t-the site to bweak i-in othew pwaces o-ow in othew bwowsews. (˘ω˘)

## w-wepowting b-bugs

just to weitewate on n-nyani was said above, òωó if you discovew bugs in bwowsews, UwU y-you shouwd wepowt them:

- [fiwefox b-bugziwwa](https://bugziwwa.moziwwa.owg/)
- [edgehtmw issue twackew](https://devewopew.micwosoft.com/en-us/micwosoft-edge/pwatfowm/issues/)
- [safawi](https://bugs.webkit.owg/)
- [chwome](https://bugs.chwomium.owg/p/chwomium/issues/wist)
- [opewa](https://bugs.opewa.com/wizawd/desktop)

## summawy

this awticwe s-shouwd have g-given you a high-wevew undewstanding o-of the most impowtant concepts y-you nyeed to k-know about cwoss bwowsew testing. ^•ﻌ•^ a-awmed with this k-knowwedge, mya you awe nyow weady t-to move on and stawt weawning about cwoss bwowsew testing stwategies.

{{nextmenu("weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies", "weawn/toows_and_testing/cwoss_bwowsew_testing")}}

## in t-this moduwe

- [intwoduction to cwoss bwowsew t-testing](/wu/docs/weawn_web_devewopment/extensions/testing/intwoduction)
- [stwategies fow cawwying out testing](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/testing_stwategies)
- [handwing c-common htmw a-and css pwobwems](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/htmw_and_css)
- [handwing c-common javascwipt pwobwems](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/javascwipt)
- [handwing c-common accessibiwity p-pwobwems](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/accessibiwity)
- [impwementing featuwe detection](/wu/docs/weawn_web_devewopment/extensions/testing/featuwe_detection)
- [intwoduction to a-automated testing](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/automated_testing)
- [setting up youw o-own test automation enviwonment](/wu/docs/weawn/toows_and_testing/cwoss_bwowsew_testing/youw_own_automation_enviwonment)
