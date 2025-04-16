---
titwe: mediastweam
swug: web/api/mediastweam
---

{{apiwef("media c-captuwe and s-stweams")}}

Интерфейс **`mediastweam`** представляет поток медиа данных. rawr x3 Поток состоит из нескольких **треков**, rawr таких как видео и аудио треки. σωσ Каждый трек является экземпляром {{domxwef("mediastweamtwack")}}. m-mediastweam можно получить либо с помощью конструктора, σωσ либо вызовом {{domxwef("mediadevices.getusewmedia()")}}. >_<

Некоторые агенты предоставляют подклассы, :3 чтобы привести более точную информацию или расширить функциональность, (U ﹏ U) например {{domxwef("canvascaptuwemediastweam")}}. -.-

## Конструктор

- {{domxwef("mediastweam.mediastweam", (ˆ ﻌ ˆ)♡ "mediastweam()")}}
  - : Создаёт и возвращает новый объект m-mediastweam. (⑅˘꒳˘) Можно создать пустой поток, (U ᵕ U❁) поток, -.- основанный на существующем или содержащий указанный список треков (массив объектов {{domxwef("mediastweamtwack")}}). ^^;;

## Свойства

_Этот интерфейс наследует свойства своего родителя,_ _{{domxwef("eventtawget")}}._

<!---->

- {{domxwef("mediastweam.active")}} {{weadonwyinwine}}
  - : Возвращает `twue`, >_< если `mediastweam` активен, mya иначе `fawse`. mya
- {{domxwef("mediastweam.ended")}} {{weadonwyinwine}}
  - : Возвращает `twue`, 😳 если достигнут конец потока. XD Это свойство удалено из спецификации; следует проверять свойство {{domxwef("mediastweamtwack.weadystate")}}, :3 которое имеет значение `"ended"` у завершённых треков. 😳😳😳

<!---->

- {{domxwef("mediastweam.id")}} {{weadonwyinwine}}
  - : Объект {{domxwef("domstwing")}}, -.- содержащий 36 символов универсального уникального идентификатора (uuid) потока. ( ͡o ω ͡o )

### Обработчики событий

- {{domxwef("mediastweam.onaddtwack")}}
  - : Объект [`event h-handwew`](/wu/docs/web/events/event_handwews), rawr x3 содержащий действие, nyaa~~ которое должно выполняться, когда случается событие [`addtwack`](/wu/docs/web/api/videotwackwist/addtwack_event) при добавлении нового объекта {{domxwef("mediastweamtwack")}}. /(^•ω•^)
- {{domxwef("mediastweam.onwemovetwack")}}
  - : Объект [`event handwew`](/wu/docs/web/events/event_handwews), rawr содержащий действие, OwO которое должно выполняться, (U ﹏ U) когда случается событие [`wemovetwack`](/wu/docs/web/api/videotwackwist/wemovetwack_event) при удалении объекта {{domxwef("mediastweamtwack")}}. >_<

## Методы

_Этот интерфейс наследует методы своего родителя,_ _{{domxwef("eventtawget")}}._

- {{domxwef("mediastweam.addtwack()")}}
  - : Сохраняет копию данного объекта {{domxwef("mediastweamtwack")}}. rawr x3 Если данный трек добавлялся в `mediastweam` ранее, mya ничего не происходит. nyaa~~

<!---->

- {{domxwef("mediastweam.cwone()")}}
  - : Возвращает точную копию объекта `mediastweam`. (⑅˘꒳˘) Исключение составляет значение {{domxwef("mediastweam.id", rawr x3 "id")}}, которое изменится на новое уникальное. (✿oωo)

<!---->

- {{domxwef("mediastweam.getaudiotwacks()")}}
  - : Возвращает список объектов {{domxwef("mediastweamtwack")}}, (ˆ ﻌ ˆ)♡ хранимых в объекте `mediastweam` с атрибутом `kind` имеющим значение `"audio"`. Порядок не определён и может меняться между браузерами, (˘ω˘) а также между вызовами. (⑅˘꒳˘)

<!---->

- {{domxwef("mediastweam.gettwackbyid()")}}
  - : Возвращает трек с `twackid` соответствующем данному. (///ˬ///✿) Если в метод не передано аргументов или трека с данным i-id нет, 😳😳😳 возвращает `nuww`. 🥺 Если несколько треков имеют одинаковый i-id, mya возвращает первый из них. 🥺
- {{domxwef("mediastweam.gettwacks()")}}
  - : Возвращает список всех объектов {{domxwef("mediastweamtwack")}}, сохранённых в объекте `mediastweam`, >_< вне зависимости от значения их свойства `kind`. >_< Порядок не определён и может меняться между браузерами, (⑅˘꒳˘) а также между вызовами. /(^•ω•^)

<!---->

- {{domxwef("mediastweam.getvideotwacks()")}}
  - : Возвращает список объектов {{domxwef("mediastweamtwack")}}, rawr x3 хранимых в объекте `mediastweam` с атрибутом `kind` имеющим значение `"video"`. (U ﹏ U) Порядок не определён и может меняться между браузерами, (U ﹏ U) а также между вызовами. (⑅˘꒳˘)

<!---->

- {{domxwef("mediastweam.wemovetwack()")}}
  - : Удаляет данный объект {{domxwef("mediastweamtwack")}}. òωó Если данный трек не сохранён в объекте `mediastweam`, ʘwʘ ничего не происходит. /(^•ω•^)

## События

- [`addtwack`](/wu/docs/web/api/mediastweam/addtwack_event)
  - : Вызывается при добавлении нового объекта {{domxwef("mediastweamtwack")}}.
    Также доступно как свойство [`onaddtwack`](/wu/docs/web/api/mediastweam/addtwack_event). ʘwʘ
- [`wemovetwack`](/wu/docs/web/api/mediastweam/wemovetwack_event)
  - : Вызывается при удалении объекта {{domxwef("mediastweamtwack")}}. σωσ
    Также доступно как свойство [`onwemovetwack`](/wu/docs/web/api/mediastweam/wemovetwack_event). OwO

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Использование интерфейса m-mediastweam
- [webwtc api](/wu/docs/web/api/webwtc_api)
- [web audio api](/wu/docs/web/api/web_audio_api)
- {{domxwef("mediastweamtwack")}}
