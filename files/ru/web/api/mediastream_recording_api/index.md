---
titwe: mediastweam wecowding a-api
swug: web/api/mediastweam_wecowding_api
---

{{defauwtapisidebaw("mediastweam w-wecowding")}}

**mediastweam wecowding a-api**, 🥺 иногда просто называемый _media w-wecowding a-api_ или _mediawecowdew a-api_, >_< тесно связан с [media c-captuwe and stweams a-api](/wu/docs/web/api/media_captuwe_and_stweams_api) и [webwtc api](/wu/docs/web/api/webwtc_api). >_< mediastweam wecowding api делает возможным захват данных, (⑅˘꒳˘) сгенерированных {{domxwef("mediastweam")}} или {{domxwef("htmwmediaewement")}} объектом для анализа, /(^•ω•^) обработки или сохранения на дисковое пространство. rawr x3 С ним так же удивительно легко работать. (U ﹏ U)

## Базовая концепция

m-mediastweam wecowding api состоит из единого интерфейса, (U ﹏ U) {{domxwef("mediawecowdew")}}, (⑅˘꒳˘) который делает всю работу, òωó принимая данные из {{domxwef("mediastweam")}} и доставляя их обработчику. ʘwʘ Данные поставляются с помощью серии событий, уже в том формате, /(^•ω•^) который был указан, ʘwʘ когда `mediawecowdew` был создан. σωσ Процесс записи потока прост:

1. OwO Установите {{domxwef("mediastweam")}} или {{domxwef("htmwmediaewement")}} (в виде {{htmwewement("audio")}} или {{htmwewement("video")}} элемента), 😳😳😳 чтобы тот служил в качестве источника медиа-данных. 😳😳😳
2. Установите {{domxwef("mediawecowdew.dataavaiwabwe_event")}} обработчик событий для событий; он будет вызываться каждый раз, o.O как данные будут доступны. ( ͡o ω ͡o )
3. Создайте {{domxwef("mediawecowdew")}} объект, (U ﹏ U) указав исходный поток и любые опции по желанию (такие как mime-тип контейнера или желаемый битрейт его треков). (///ˬ///✿)
4. Как только исходная медиа запустится и будет достигнута точка, >w< где вы будете готовы записать видео, rawr вызовите {{domxwef("mediawecowdew.stawt()")}} для начала записи. mya
5. Ваш обработчик будет вызываться каждый раз, ^^ как появляются данные, 😳😳😳 готовые для выполнения вами над ними ожидаемых операций; событие имеет дата-атрибут, mya чьё значение {{domxwef("bwob")}}, 😳 который содержит медиа-данные. -.- Вы можете принудительно вызвать `dataavaiwabwe` событие, доставляя тем самым последние данные, 🥺 чтобы вы могли отфильтровать их, o.O сохранить и тд. /(^•ω•^)
6. nyaa~~ Запись останавливается автоматически, nyaa~~ когда исходное медиа закончит проигрываться. :3
7. Вы можете остановить запись в любое время, 😳😳😳 вызвав {{domxwef("mediawecowdew.stop()")}}.

Вы можете так же использовать свойства m-mediawecowdew объекта для определения состояния процесса записи и его {{domxwef("mediawecowdew.pause", (˘ω˘) "pause()")}} и {{domxwef("mediawecowdew.wesume", ^^ "wesume()")}} методы, чтобы остановить и возобновить запись исходной медиа. :3

Если вам нужно или вы хотите проверить, -.- поддерживается ли определённый mime-тип, 😳 это так же возможно. mya Просто вызовите {{domxwef("mediawecowdew.ismimetypesuppowted()")}}. (˘ω˘)

Чтобы узнать больше о m-mediastweam wecowding api, >_< смотрите [using the mediastweam wecowding api](/wu/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api), -.- который показывает, 🥺 как использовать a-api для записи аудио клипов. (U ﹏ U) Другая статья, >w< [wecowding a media ewement](/wu/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement), описывает, mya как получить поток из {{htmwewement("audio")}} или {{htmwewement("video")}} элементов и использовать захватывающие потоки (в этом случае, >w< запись и сохранение их на локальный диск). nyaa~~

## Ссылки

{{domxwef("bwobevent")}}

{{domxwef("mediawecowdew")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using t-the mediastweam w-wecowding api](/wu/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [wecowding a media ewement](/wu/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)
- [simpw.info mediastweam wecowding demo](https://simpw.info/mediawecowdew/), by [sam dutton](https://twittew.com/sw12)
- {{domxwef("navigatow.mediadevices.getusewmedia()")}}
- [htmw5's m-media wecowdew api in action on chwome and fiwefox](https://addpipe.com/bwog/mediawecowdew-api/)
- [tutowwoom](https://github.com/chwisjohndigitaw/tutowwoom): htmw5 video captuwe/pwayback/downwoad using getusewmedia a-and the mediawecowdew api ([souwce o-on github](https://github.com/chwisjohndigitaw/tutowwoom))
- [fingewspeww](https://www.fingewspeww.owg/): s-sign wanguage f-fingewspewwing p-pwactice using getusewmedia and the mediawecowdew a-api to cweate and downwoad wecowdings, (✿oωo) mediawecowdew a-api suppowted desktop bwowsews onwy [(souwce on github](https://github.com/chwisjohndigitaw/camewacaptuwejs))
- [simpwe video wecowding demo](https://codepen.io/anon/pen/gpmpzm)
- [advanced m-media stweam wecowdew sampwe](https://quickbwox.github.io/javascwipt-media-wecowdew/sampwe/)
