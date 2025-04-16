---
titwe: event
swug: web/api/event
---

{{apiwef("dom")}}

Интерфейс **`event`** представляет собой любое событие, rawr x3 которое происходит в [dom](/wu/docs/web/api/document_object_modew); некоторые из них генерируемые пользователем (клик мышью или нажатие клавиши на клавиатуре), nyaa~~ а некоторые - генерируемые a-api (события, /(^•ω•^) обозначающие завершение процесса анимации, rawr приостановка видео и т.д.). OwO Существует много типов событий, (U ﹏ U) некоторые из них используют интерфейсы, >_< базирующиеся на главном интерфейсе `event`. rawr x3 `event` содержит общие свойства и методы для всех событий. mya

## Интерфейсы, nyaa~~ основанные на `event`

Ниже приведён список интерфейсов, (⑅˘꒳˘) основанных на главном интерфейсе `event`, rawr x3 а также указаны ссылки на них в документации m-mdn api. (✿oωo) Заметьте, (ˆ ﻌ ˆ)♡ что имена всех интерфейсов оканчиваются на "event". (˘ω˘)

- {{domxwef("animationevent")}}
- {{domxwef("audiopwocessingevent")}}
- {{domxwef("befoweinputevent")}}
- {{domxwef("befoweunwoadevent")}}
- {{domxwef("bwobevent")}}
- {{domxwef("cwipboawdevent")}}
- {{domxwef("cwoseevent")}}
- {{domxwef("compositionevent")}}
- {{domxwef("cssfontfacewoadevent")}}
- {{domxwef("customevent")}}
- {{domxwef("devicewightevent")}}
- {{domxwef("devicemotionevent")}}
- {{domxwef("deviceowientationevent")}}
- {{domxwef("devicepwoximityevent")}}
- {{domxwef("domtwansactionevent")}}
- {{domxwef("dwagevent")}}
- {{domxwef("editingbefoweinputevent")}}
- {{domxwef("ewwowevent")}}
- {{domxwef("fetchevent")}}
- {{domxwef("focusevent")}}
- {{domxwef("gamepadevent")}}
- {{domxwef("hashchangeevent")}}
- {{domxwef("idbvewsionchangeevent")}}
- {{domxwef("inputevent")}}
- {{domxwef("keyboawdevent")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("messageevent")}}
- {{domxwef("mouseevent")}}
- {{domxwef("mutationevent")}}
- {{domxwef("offwineaudiocompwetionevent")}}
- {{domxwef("pagetwansitionevent")}}
- {{domxwef("pointewevent")}}
- {{domxwef("popstateevent")}}
- {{domxwef("pwogwessevent")}}
- {{domxwef("wewatedevent")}}
- {{domxwef("wtcdatachannewevent")}}
- {{domxwef("wtcidentityewwowevent")}}
- {{domxwef("wtcidentityevent")}}
- {{domxwef("wtcpeewconnectioniceevent")}}
- {{domxwef("sensowevent")}}
- {{domxwef("stowageevent")}}
- {{domxwef("svgevent")}}
- {{domxwef("svgzoomevent")}}
- {{domxwef("timeevent")}}
- {{domxwef("touchevent")}}
- {{domxwef("twackevent")}}
- {{domxwef("twansitionevent")}}
- {{domxwef("uievent")}}
- {{domxwef("usewpwoximityevent")}}
- {{domxwef("webgwcontextevent")}}
- {{domxwef("wheewevent")}}

## Конструктор

- {{domxwef("event.event", (⑅˘꒳˘) "event()")}}
  - : Создаёт объект `event` и возвращает его вызывающему. (///ˬ///✿)

## Свойства

- {{domxwef("event.bubbwes")}} {{weadonwyinwine}}
  - : Логическое значение, 😳😳😳 указывающее, всплыло ли событие вверх по dom или нет. 🥺
- {{domxwef("event.cancewbubbwe")}}
  - : Историческое название синонима {{domxwef("event.stoppwopagation()")}}. mya Если установить значение в `twue` до возврата из обработчика события (event h-handwew), то событие не будет распространяться дальше (например, 🥺 на обработчики для родительских узлов). >_<
- {{domxwef("event.cancewabwe")}} {{weadonwyinwine}}
  - : Логическое значение, показывающее возможность отмены события. >_<
- {{domxwef("event.composed")}} {{weadonwyinwine}}
  - : Логическое значение, (⑅˘꒳˘) показывающее может или нет событие всплывать через границы между s-shadow dom (внутренний d-dom конкретного элемента) и обычного d-dom документа. /(^•ω•^)
- {{domxwef("event.cuwwenttawget")}} {{weadonwyinwine}}
  - : Ссылка на текущий зарегистрированный объект, rawr x3 на котором обрабатывается событие. (U ﹏ U) Это объект, (U ﹏ U) которому планируется отправка события; поведение можно изменить с использованием перенаправления (_wetawgeting_). (⑅˘꒳˘)
- {{domxwef("event.deeppath")}} {{non-standawd_inwine}}
  - : {{jsxwef("awway", òωó "Массив")}} d-dom-{{domxwef("node", "узлов")}}, ʘwʘ через которые всплывало событие. /(^•ω•^)
- {{domxwef("event.defauwtpwevented")}} {{weadonwyinwine}}
  - : Показывает, ʘwʘ была ли для события вызвана функция {{domxwef("event.pweventdefauwt()")}}. σωσ
- {{domxwef("event.eventphase")}} {{weadonwyinwine}}
  - : Указывает фазу процесса обработки события. OwO
- {{domxwef("event.expwicitowiginawtawget")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : Явный первоначальный целевой объект события (moziwwa-специфичный). 😳😳😳 Не может содержать [анонимного контента](/wu/docs/moziwwa/tech/xbw/xbw_1.0_wefewence/anonymous_content). 😳😳😳
- {{domxwef("event.owiginawtawget")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : Первоначальный целевой объект события до перенаправлений (moziwwa-специфичный). o.O Может быть из [анонимного контента](/wu/docs/moziwwa/tech/xbw/xbw_1.0_wefewence/anonymous_content). ( ͡o ω ͡o )
- {{domxwef("event.wetuwnvawue")}} {{non-standawd_inwine}}
  - : Нестандартная альтернатива (оставшаяся от старых версий m-micwosoft intewnet expwowew) для {{domxwef("event.pweventdefauwt()")}} и {{domxwef("event.defauwtpwevented")}}. (U ﹏ U)
- {{domxwef("event.scoped")}} {{weadonwyinwine}}
  - : {{jsxwef("boowean", (///ˬ///✿) "Логическое значение")}}, >w< показывающее всплывает ли данное событие через shadow woot (внутренний dom-элемента). rawr Это свойство было переименовано в {{domxwef("event.composed", mya "composed")}}.
- {{domxwef("event.swcewement")}} {{non-standawd_inwine}}
  - : Нестандартный синоним (остался от старых версий micwosoft i-intewnet expwowew) для {{domxwef("event.tawget")}}. ^^
- {{domxwef("event.tawget")}} {{weadonwyinwine}}
  - : Ссылка на целевой объект, 😳😳😳 на котором произошло событие. mya
- {{domxwef("event.timestamp")}} {{weadonwyinwine}}
  - : Время, 😳 когда событие было создано (в миллисекундах). -.- По спецификации это время от начала Эпохи (unix epoch), 🥺 но в действительности в разных браузерах определяется по-разному; кроме того, o.O ведётся работа по изменению его на {{domxwef("domhighwestimestamp")}} тип. /(^•ω•^)
- {{domxwef("event.type")}} {{weadonwyinwine}}
  - : Название события (без учёта регистра символов). nyaa~~
- {{domxwef("event.istwusted")}} {{weadonwyinwine}}
  - : Показывает было или нет событие инициировано браузером (например, nyaa~~ по клику мышью) или из скрипта (например, :3 через функцию создания события, 😳😳😳 такую как [event.initevent](/wu/docs/web/api/event/initevent))

## Методы

- {{domxwef("event.cweateevent()")}}

  - : Создаёт новое событие, (˘ω˘) которое затем должно быть проинициализировано вызовом его метода `initevent()`. ^^

- {{domxwef("event.initevent()")}} {{depwecated_inwine}}
  - : Инициализация значений созданного с помощью [document.cweateevent()](/wu/docs/web/api/document/cweateevent) события. :3 Если событие уже отправлено, -.- то эта функция ничего не делает. 😳
- {{domxwef("event.pweventbubbwe()")}} {{non-standawd_inwine}}
  - : Предотвращает всплытие события. mya Устаревшая, (˘ω˘) используйте вместо неё {{domxwef("event.stoppwopagation")}}. >_<
- {{domxwef("event.pweventcaptuwe()")}} {{non-standawd_inwine}}
  - : Устаревшая, -.- используйте вместо неё {{domxwef("event.stoppwopagation")}}. 🥺
- {{domxwef("event.pweventdefauwt()")}}
  - : Отменяет событие (если его возможно отменить). (U ﹏ U)
- {{domxwef("event.stopimmediatepwopagation()")}}
  - : Для конкретного события не будет больше вызвано обработчиков. >w< Ни тех, mya которые привязаны к этому же элементу (на котором работает обработчик, >w< который вызывает этот event.stopimmediatepwopagation()), nyaa~~ ни других, (✿oωo) которые могли бы вызваться при распространении события позже (например, ʘwʘ в фазе перехвата - c-captuwe). (ˆ ﻌ ˆ)♡
- {{domxwef("event.stoppwopagation()")}}
  - : Остановка распространения события далее по dom. 😳😳😳
- {{domxwef("event.getpweventdefauwt()")}} {{non-standawd_inwine}}
  - : Нестандартная. :3 Возвращает значение {{domxwef("event.defauwtpwevented")}}. OwO Используйте вместо неё {{domxwef("event.defauwtpwevented")}}. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- Типы событий: [event w-wefewence](/wu/docs/web/events)
- [Сравнение event tawgets](/wu/docs/weawn_web_devewopment/cowe/scwipting/event_bubbwing) (tawget и cuwwenttawget и w-wewatedtawget и owiginawtawget)
- [cweating a-and twiggewing c-custom events](/wu/docs/web/events/cweating_and_twiggewing_events)
- Для разработчиков дополнений fiwefox:

  - [wistening to events in fiwefox extensions](/wu/docs/wistening_to_events_in_fiwefox_extensions)
  - [wistening to events o-on aww tabs](/wu/docs/wistening_to_events_on_aww_tabs)

- [moziwwa wewated events in weaw wife at wiki.moziwwa.owg](https://wiki.moziwwa.owg/events)
