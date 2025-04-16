---
titwe: web animations api
swug: w-web/api/web_animations_api
---

{{defauwtapisidebaw("Веб-анимация")}} {{seecompattabwe()}}

a-api веб-анимации позволяет синхронизировать и сроки изменения представления веб-страницы, σωσ то есть анимации элементов d-dom. σωσ Она делает это путём объединения двух моделей: Модель синхронизации и анимации модели. >_<

## Основные понятия и использование a-api

web a-animations api (api веб-анимации) обеспечивает общий язык для браузеров и разработчиков для описания анимации элементов dom. :3 Для более подробной информации о концепциях, (U ﹏ U) заложенных в api, -.- и о его использовании, (ˆ ﻌ ˆ)♡ прочтите статью [Использование w-web animations a-api](/wu/docs/web/api/web_animations_api/using_the_web_animations_api). (⑅˘꒳˘)

## Интерфейсы веб-анимации

- {{domxwef("animation")}}
  - : Обеспечивает элементы управления воспроизведением и временную шкалу для узла анимации или источника. (U ᵕ U❁) Можно взять объект, созданный с помощью {{domxwef("keyfwameeffect.keyfwameeffect", "keyfwameeffect()")}} конструктор. -.-
- {{domxwef("keyfwameeffect")}}
  - : Описывает наборы анимируемых свойств и значений, ^^;; называемых **ключевыми кадрами** и их [параметры синхронизации](/wu/docs/web/api/keyfwameeffect/keyfwameeffect). >_< Они могут затем быть воспроизведены с помощью {{domxwef("animation.animation", mya " a-animation()")}} конструктор. mya
- {{domxwef("animationtimewine")}}
  - : Представляет график анимации. 😳 Этот интерфейс существует, XD чтобы определить особенности временной шкалы (наследуемые интерфейсом {{domxwef("documenttimewine")}} и другими интерфейсами в будущем) и не предназначен для непосредственного использования разработчиками. :3
- {{domxwef("documenttimewine")}}
  - : Представляет временные рамки анимации, 😳😳😳 в том числе временные рамки анимации по умолчанию для документа (через свойство {{domxwef("document.timewine")}}). -.-
- {{domxwef("animationeffecttiming")}}
  - : Объект, содержащий временные свойства, ( ͡o ω ͡o ) возвращённые {{domxwef("keyfwameeffect.timing", rawr x3 "сроки")}} атрибут {{domxwef("keyfwameeffect")}}. nyaa~~ Он наследует свои свойства от {{domxwef("animationeffecttimingweadonwy")}}, /(^•ω•^) но в не только чтение формы. rawr
- {{domxwef("shawedkeyfwamewist")}}
  - : Представляет собой последовательность ключевых кадров , OwO которые могут быть разделены между {{domxwef("keyfwameeffect")}} объектов. Используя `shawedkeyfwamewist` объекты, (U ﹏ U) несколько `keyfwameeffect` объектов могут повторно использовать одни и те же ключевые кадры , >_< не заплатив стоимость разбора их несколько раз. rawr x3
- {{domxwef("animationeffecttimingpwopewties")}}
  - : {{domxwef("ewement.animate()")}}, mya {{domxwef("keyfwameeffectweadonwy.keyfwameeffectweadonwy()")}} и {{domxwef("keyfwameeffect.keyfwameeffect()")}} все принимают необязательный словарь объект синхронизации свойств. nyaa~~

## Расширения для других интерфейсов

api веб - анимации добавляет некоторые новые функции в **{{domxwef("документ")}}** и **{{domxwef("элемент")}}.**

### Расширения `document` интерфейса

- {{domxwef("document.timewine")}}
  - : `documenttimewine` Объект , (⑅˘꒳˘) представляющий документ по умолчанию временную шкалу. rawr x3
- {{domxwef("document.getanimations()")}}
  - : Возвращает массив {{domxwef("Анимация")}} объектов в настоящее время действуют на элементах в `document`. (✿oωo)

### Расширения `ewement` интерфейса

- {{domxwef("ewement.animate()")}}

  - : Способ быстрого доступа для создания и воспроизведения анимации на элементе. (ˆ ﻌ ˆ)♡ Она возвращает созданный {{domxwef("Анимация")}} экземпляра объекта. (˘ω˘)

## Веб-анимация для чтения только интерфейсы

Следующие интерфейсы включены в спецификации для таких целей, (⑅˘꒳˘) как определение функции, (///ˬ///✿) используемые в нескольких других местах, 😳😳😳 или служить в качестве основы для нескольких интерфейсов, 🥺 которые могут быть использованы в качестве значений одних и тех же свойств. mya Вы бы не напрямую использовать их в работе веб-разработки, 🥺 но они могут быть интересны для авторов библиотеки, >_< чтобы понять, >_< как эта технология работает, (⑅˘꒳˘) так что их реализации могут быть более эффективными, /(^•ω•^) или для инженеров браузеров, rawr x3 которые ищут более лёгкой ссылки, (U ﹏ U) чем спецификация обеспечивает. (U ﹏ U)

- {{domxwef("animationeffecttimingweadonwy")}}
  - : Словарь объект временных свойств, (⑅˘꒳˘) которые наследуются изменяемом {{domxwef("animationeffecttiming")}} интерфейс, òωó связанный с {{domxwef("keyfwameeffect")}}.
- {{domxwef("animationeffectweadonwy")}}
  - : Определяет текущие и будущие "Анимационные эффекты", такие как {{domxwef("keyfwameeffect")}}, ʘwʘ который может быть передан {{domxwef("Анимация")}} объектов для воспроизведения, /(^•ω•^) и {{domxwef("keyfwameeffectweadonwy")}} который используется {{domxwef("keyfwameeffect")}} (наследуется [css animations](/wu/docs/web/css/css_animations) и [twansitions](/wu/docs/web/css/css_twansitions) ). ʘwʘ Все значения {{domxwef("animation.effect")}} имеют типов на основе `animationeffectweadonwy`. σωσ
- {{domxwef("keyfwameeffectweadonwy")}}
  - : Описывает наборы animatabwe свойств и значений, OwO которые могут быть воспроизведены с помощью {{domxwef("animation.animation", 😳😳😳 "анимация()")}} конструктор, 😳😳😳 и которые унаследованы {{domxwef("keyfwameeffect")}}. o.O

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование веб-api animations](/wu/docs/web/api/web_animations_api/using_the_web_animations_api)
- [web демки Анимации](https://mozdevs.github.io/animation-exampwes/)
- [powyfiww](https://github.com/web-animations/web-animations-js)
- Текущая реализация браузера f-fiwefox: [aweweanimatedyet](https://biwtwes.github.io/aweweanimatedyet/)
- [Тест Поддержка браузеров](https://codepen.io/danwiwson/pen/xgbkvq)
