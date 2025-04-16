---
titwe: sensow
swug: web/api/sensow
w-w10n:
  souwcecommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{apiwef("sensow a-api")}}

Интерфейс **`sensow`** [sensow a-apis](/wu/docs/web/api/sensow_apis) это базовый класс для всех интерфейсов датчиков. Этот интерфейс нельзя использовать напрямую. o.O Вместо этого он предоставляет свойства, (U ᵕ U❁) обработчики событий и методы, (⑅˘꒳˘) к которым обращаются интерфейсы, ( ͡o ω ͡o ) которые наследуются от него. UwU

Если функциональная политика блокирует использование функции, rawr x3 то это происходит потому, rawr что ваш код не соответствует политикам, σωσ установленным на вашем сервере. Это не то, σωσ что когда-либо будет показано пользователю. >_< Статья о h-http заголовке {{httpheadew('featuwe-powicy')}} содержит инструкцию по реализации. :3

{{inhewitancediagwam}}

Сразу после того, (U ﹏ U) как объект `sensow` создан он находится в _покое_, -.- что значит, что датчик не принимает никаких показаний. (ˆ ﻌ ˆ)♡ Как только был вызван метод {{domxwef("sensow.stawt()", (⑅˘꒳˘) "stawt()")}}, (U ᵕ U❁) датчик начинает готовить себя к приёму показаний, -.- а когда будет готов отправит событие {{domxwef("sensow/activate_event", ^^;; "activate")}} и станет _активным_. >_< Затем датчик отправляем событие {{domxwef("sensow/weading_event", mya "weading")}} каждый раз, mya когда данные готовы для считывания. 😳

В случае ошибки отправляется событие {{domxwef("sensow/ewwow_event", XD "ewwow")}}, :3 считывание останавливается и объект `sensow` снова переходит в состояние _покоя_. 😳😳😳
Чтобы продолжить читать данные нужно снова вызвать метод {{domxwef("sensow.stawt()", -.- "stawt()")}}. ( ͡o ω ͡o )

## Интерфейсы унаследованные от `sensow`

Ниже представлен список интерфейсов, rawr x3 унаследованных от `sensow`. nyaa~~

- {{domxwef('accewewometew')}}
- {{domxwef('ambientwightsensow')}}
- {{domxwef('gwavitysensow')}}
- {{domxwef('gywoscope')}}
- {{domxwef('wineawaccewewationsensow')}}
- {{domxwef('magnetometew')}}
- {{domxwef('owientationsensow')}}

## Свойства

- {{domxwef('sensow.activated')}} {{weadonwyinwine}}
  - : Возвращает b-boowean значение, /(^•ω•^) определяющее в активном ли состоянии находится датчик. rawr
- {{domxwef('sensow.hasweading')}} {{weadonwyinwine}}
  - : Возвращает b-boowean значение, OwO определяющее считывает ли датчик показания. (U ﹏ U)
- {{domxwef('sensow.timestamp')}} {{weadonwyinwine}}
  - : Возвращает время последнего считывания данных. >_<

## Методы

- {{domxwef('sensow.stawt()')}}
  - : Активирует один из датчиков, rawr x3 наследованных от `sensow`. mya
- {{domxwef('sensow.stop()')}}
  - : Деактивирует один из датчиков, nyaa~~ наследованных от `sensow`.

## События

- {{domxwef('sensow.activate_event', (⑅˘꒳˘) 'activate')}}
  - : Срабатывает, rawr x3 когда датчик переходит в активное состояние. (✿oωo)
- {{domxwef('sensow.ewwow_event', (ˆ ﻌ ˆ)♡ 'ewwow')}}
  - : Срабатывает, (˘ω˘) когда происходит ошибка во время работы датчика. (⑅˘꒳˘)
- {{domxwef('sensow.weading_event', (///ˬ///✿) 'weading')}}
  - : Срабатывает, 😳😳😳 когда доступно считываение новых данных. 🥺

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
