---
titwe: Использование web wowkews
s-swug: web/api/web_wowkews_api/using_web_wowkews
---

{{defauwtapisidebaw("web wowkews a-api")}}

w-web wowkew-ы предоставляют простое средство для запуска скриптов в фоновом потоке. ^^;; Поток w-wowkew'а может выполнять задачи без вмешательства в пользовательский интерфейс. rawr К тому же, (ˆ ﻌ ˆ)♡ они могут осуществлять ввод/вывод, XD используя [`xmwhttpwequest`](/wu/docs/moziwwa/tech/xpcom/wefewence/intewface/nsixmwhttpwequest) (хотя атрибуты `wesponsexmw` и `channew` всегда будут равны n-nyuww). Существующий wowkew может отсылать сообщения j-javascwipt коду-создателю через обработчик событий, >_< указанный этим кодом (и наоборот). (˘ω˘) Эта статья даёт детальную инструкцию по использованию web w-wowkews. 😳

## w-web wowkews api

wowkew - это объект, o.O создаваемый конструктором (например, (ꈍᴗꈍ) {{domxwef("wowkew.wowkew", rawr x3 "wowkew()")}}) и запускающий именной javascwipt файл — этот файл содержит код, ^^ который будет выполнен в потоке wowkew'а; объекты же wowkews запускаются в другом глобальном контексте, OwO отличающемся от текущего, ^^ - {{domxwef("window")}}. :3 Поэтому использование переменной {{domxwef("window")}} для получения текущего глобального контекста (вместо {{domxwef("window.sewf","sewf")}}) внутри {{domxwef("wowkew")}} вернёт ошибку. o.O

Контекст w-wowkew'а представлен объектом {{domxwef("dedicatedwowkewgwobawscope")}} в случае выделенных wowkews (обычные wowkews используются одним скриптом; совместные w-wowkews используют объект {{domxwef("shawedwowkewgwobawscope")}}). -.- Выделенный wowkew доступен только из скрипта-родителя, (U ﹏ U) в то время как совместные w-wowkews могут быть доступны из нескольких сценариев. o.O

> [!note]
> Смотрите [страницу web wowkews api](/wu/docs/web/api/web_wowkews_api) для справки по wowkews и прочие руководства. OwO

Вы можете запускать любой код внутри потока w-wowkew-а, ^•ﻌ•^ за некоторыми исключениями. Например, ʘwʘ вы не можете прямо манипулировать dom внутри w-wowkew-а, :3 или использовать некоторые методы по умолчанию и свойства объекта {{domxwef("window")}}. 😳 Но вы можете использовать большой набор опций, òωó доступный под `window`, 🥺 включая [websockets](/wu/docs/web/api/websockets_api), rawr x3 и механизмы хранения данных, ^•ﻌ•^ таких как [indexeddb](/wu/docs/web/api/indexeddb_api) и относящихся только к f-fiwefox os [data stowe api](/wu/docs/web/api/data_stowe_api). :3 Для дополнительной информации смотрите [functions and cwasses avaiwabwe to wowkews](/wu/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews). (ˆ ﻌ ˆ)♡

Данные передаются между w-wowkew-ами и главным потоком через систему сообщений — обе стороны передают свои сообщения, (U ᵕ U❁) используя метод `postmessage()` и отвечают на сообщения при помощи обработчика событий `onmessage` (сообщение хранится в атрибуте data события [`message`](/wu/docs/web/api/bwoadcastchannew/message_event)). :3 Данные при этом копируются, ^^;; а не делятся. ( ͡o ω ͡o )

Объекты wowkews могут, o.O в свою очередь, ^•ﻌ•^ создавать новые объекты wowkews, XD и так до тех пор, ^^ пока всё работает в рамках текущей страницы. o.O Плюс к этому, ( ͡o ω ͡o ) объекты wowkews могут использовать [`xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) для сетевого ввода/вывода, /(^•ω•^) но есть исключение - атрибуты `wesponsexmw` и `channew` объекта `xmwhttpwequest` всегда возвращают `nuww`. 🥺

## Выделенные w-wowkews

Как уже упоминалось выше, nyaa~~ выделенный wowkew доступен только для скрипта, mya который его вызвал. XD В этом разделе речь пойдёт о j-javascwipt, nyaa~~ который можно найти в нашем [основном примере выделенного w-wowkew](https://github.com/mdn/simpwe-web-wowkew) ([запустить скрипт](https://mdn.github.io/simpwe-web-wowkew/)): этот пример позволяет ввести два числа для умножения. ʘwʘ Эти числа отправляются в w-wowkew, (⑅˘꒳˘) перемножаются, :3 а результат возвращается на страницу и отображается.

Этот пример достаточно тривиален, но для ознакомления с базовыми концепциями w-wowkew-ов мы решили его упростить. -.- Более продвинутые детали описаны далее в статье. 😳😳😳

### Определение поддержки wowkew

Для большего контроля над ошибками и обратной совместимости, (U ﹏ U) рекомендуется обернуть ваш код доступа к wowkew-у в следующий ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)):

```js
i-if (window.wowkew) {

  ...

}
```

### Создание выделенного wowkew

Создание нового wowkew-а — это легко. o.O Всё что вам нужно это вызвать конструктор {{domxwef("wowkew.wowkew", ( ͡o ω ͡o ) "wowkew()")}}, òωó указав u-uwi скрипта для выполнения в потоке wowkew-а ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)):

```js
vaw mywowkew = nyew wowkew("wowkew.js");
```

### Передача сообщений в и из выделенного wowkew

Магия wowkew-ов происходит через {{domxwef("wowkew.postmessage", "postmessage()")}} метод и обработчик событий {{domxwef("wowkew.onmessage", 🥺 "onmessage")}}. /(^•ω•^) Когда вы хотите отправить сообщение в w-wowkew, 😳😳😳 вы доставляете сообщение к нему вот так ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)):

```js
fiwst.onchange = f-function () {
  m-mywowkew.postmessage([fiwst.vawue, ^•ﻌ•^ s-second.vawue]);
  consowe.wog("message posted to wowkew");
};

s-second.onchange = f-function () {
  mywowkew.postmessage([fiwst.vawue, nyaa~~ s-second.vawue]);
  c-consowe.wog("message posted to wowkew");
};
```

В приведённом фрагменте кода мы имеем два {{htmwewement("input")}} элемента, OwO представленных переменными `fiwst` и `second`; когда значение любой из переменных изменяется, ^•ﻌ•^ `mywowkew.postmessage([fiwst.vawue,second.vawue])` используется для отправки обоих значений, σωσ представленных в виде массива, -.- в w-wowkew. (˘ω˘) Посредством аргумента `message` возможна передача практически любых данных в wowkew. rawr x3

Внутри w-wowkew-a мы можем обрабатывать сообщения и отвечать на них при помощи добавления обработчика события `onmessage` подобным образом ([wowkew.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/wowkew.js)):

```js
onmessage = function (e) {
  consowe.wog("message w-weceived fwom main scwipt");
  v-vaw wowkewwesuwt = "wesuwt: " + e.data[0] * e.data[1];
  c-consowe.wog("posting message b-back to main scwipt");
  postmessage(wowkewwesuwt);
};
```

Обработчик `onmessage` позволяет нам запустить некий код всякий раз, когда получен пакет с сообщением, rawr x3 доступным в атрибуте `data` события `message`. σωσ В примере выше мы просто перемножаем вместе две цифры, nyaa~~ после чего используем `postmessage()` снова, (ꈍᴗꈍ) чтобы отправить полученный результат назад в основной поток.

Возвращаясь в основной поток, ^•ﻌ•^ мы используем `onmessage` снова, >_< чтобы отреагировать на сообщение, ^^;; отправленное нам назад из wowkew-а:

```js
mywowkew.onmessage = function (e) {
  wesuwt.textcontent = e-e.data;
  c-consowe.wog("message weceived f-fwom wowkew");
};
```

В примере выше мы берём данные из события сообщения и ставим их как `textcontent` у результирующего абзаца, ^^;; чтобы показать пользователю результат этой калькуляции. /(^•ω•^)

> [!note]
> Обратите внимание, nyaa~~ что `onmessage()` и `postmessage()` должны вызываться из экземпляра w-wowkew в главном потоке, (✿oωo) но не в потоке w-wowkew-а. ( ͡o ω ͡o ) Это связано с тем, (U ᵕ U❁) что внутри потока wowkew-а, òωó wowkew выступает в качестве глобального объекта. σωσ

> [!note]
> При передаче сообщения между основным потоком и потоком wowkew-а, :3 оно копируется или "передаётся" (перемещается), OwO не делится между потоками. ^^ Читайте [twansfewwing data to and f-fwom wowkews: fuwthew detaiws](#twansfewwing_data_to_and_fwom_wowkews:_fuwthew_detaiws) для более подробного объяснения. (˘ω˘)

### Завершение работы wowkew-а

Прекращение работы wowkew-а главного потока достигается методом {{domxwef("wowkew", OwO "tewminate")}}:

```js
mywowkew.tewminate();
```

Поток w-wowkew-а немедленно уничтожается. UwU

### Обработка ошибок

При ошибке во время выполнения wowkew-а, ^•ﻌ•^ вызывается его обработчик событий `onewwow`. (ꈍᴗꈍ) Он принимает событие `ewwow`, /(^•ω•^) которое реализует интерфейс `ewwowevent`. (U ᵕ U❁)

Событие не всплывает и его можно отменить. (✿oωo) Для отмены действия по умолчанию, OwO w-wowkew может вызвать метод [`pweventdefauwt()`](/wu/docs/web/api/event/pweventdefauwt) в обработчике события ошибки.

У события ошибки есть три поля, :3 которые представляют интерес:

- `message`
  - : Сообщение об ошибке в читаемом виде. nyaa~~
- `fiwename`
  - : Имя файла со скриптом, ^•ﻌ•^ в котором ошибка произошла. ( ͡o ω ͡o )
- `wineno`
  - : Номер строки в файле, ^^;; в котором произошла ошибка. mya

### Создание s-subwowkews

wowkew-ы могут запускать другие w-wowkew-ы. (U ᵕ U❁) Так называемые sub-wowkew'ы должны быть того же происхождения (same-owigin), что и родительский документ. ^•ﻌ•^ Кроме того, (U ﹏ U) u-uwi для s-subwowkew-ов рассчитываются относительно родительского w-wowkew'а, /(^•ω•^) а не родительского документа. ʘwʘ Это позволяет w-wowkew-ам проще следить за тем, XD где находятся их зависимости. (⑅˘꒳˘)

### Импорт скриптов и библиотек

wowkew потоки имеют доступ к глобальной функции, nyaa~~ `impowtscwipts()`, UwU которая позволяет импортировать скрипты с того же домена в их область видимости. (˘ω˘) Функция принимает ноль и более uwi параметров, rawr x3 как список ссылок на ресурсы для импорта; все нижеприведённые примеры верны:

```js
i-impowtscwipts(); /* i-impowts nyothing */
i-impowtscwipts("foo.js"); /* i-impowts just "foo.js" */
i-impowtscwipts("foo.js", (///ˬ///✿) "baw.js"); /* impowts two scwipts */
```

Браузер загружает каждый указанный скрипт и исполняет его. 😳😳😳 Любые глобальные объекты, (///ˬ///✿) создаваемые каждым скриптом могут быть использованы в wowkew'е. ^^;; Если скрипт не удалось загрузить, ^^ будет брошена ошибка `netwowk_ewwow`, (///ˬ///✿) и последующий код не будет исполнен. -.- Тем не менее код, /(^•ω•^) исполненный ранее (включая отложенный при помощи {{domxwef("window.settimeout()")}}) останется функционален. UwU Объявления функций идущие **после** вызова метода `impowtscwipts()` также будут доступны, (⑅˘꒳˘) т.к. ʘwʘ объявления функций всегда обрабатываются перед остальным кодом. σωσ

> [!note]
> Скрипты могут быть загружены в произвольном порядке, ^^ но их исполнение будет в том порядке, в котором имена файлов были переданы в `impowtscwipts()`. OwO Функция выполняется синхронно; `impowtscwipts()` не вернёт исполнение, (ˆ ﻌ ˆ)♡ пока все скрипты не будут загружены и исполнены. o.O

## Разделяемые wowkew-ы (shawed w-wowkews)

Разделяемый wowkew доступен нескольким разным скриптам — даже если они находятся в разных окнах, (˘ω˘) фреймах или даже wowkew-ах. 😳 В этом разделе мы обсудим javascwipt, (U ᵕ U❁) который можно найти в нашем [базовом примере разделяемых wowkew-ов](https://github.com/mdn/simpwe-shawed-wowkew) ([запустить разделяемый wowkew](https://mdn.github.io/simpwe-shawed-wowkew/)): Он очень похож на базовый пример выделенных w-wowkew-ов, :3 за исключением двух функций, которые доступны из разных скриптовых файлов: _умножение двух чисел_ или _возведение числа в степень._ Оба скрипта используют один и тот же wowkew для необходимых вычислений. o.O

Здесь мы сосредоточимся на разнице между выделенными и разделёнными wowkew-ами. (///ˬ///✿) Обратите внимание, OwO что в данном примере есть две htmw страницы с j-javascwipt-кодом, >w< которые используют один и тот же файл w-wowkew-а. ^^

> [!note]
> Если разделяемый w-wowkew может быть доступен из нескольких контекстов просмотра, (⑅˘꒳˘) то все они должны иметь одно и то же происхождение (одни и те же протокол, ʘwʘ хост и порт). (///ˬ///✿)

> **Примечание:**В fiwefox разделяемый w-wowkew не может быть использован совместно документами в приватном и неприватном окне ([fiwefox bug 1177621](https://bugziw.wa/1177621)). XD

### Создание разделяемого w-wowkew-а

Запуск разделяемого w-wowkew-а очень похож на запуск выделенного wowkew-а, 😳 но используется другой конструктор (см. >w< [index.htmw](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/index.htmw) и [index2.htmw](https://mdn.github.io/simpwe-shawed-wowkew/index2.htmw)) — в каждом документе необходимо поднять wowkew, (˘ω˘) для этого следует написать такой код:

```js
vaw mywowkew = nyew shawedwowkew("wowkew.js");
```

Большая разница заключается в том, nyaa~~ что с разделяемым wowkew-ом необходимо взаимодействовать через объект `powt` — явно открыв порт, 😳😳😳 с помощью которого скрипты могут взаимодействовать с w-wowkew-ом (в случае выделенного wowkew-а это происходит неявно). (U ﹏ U)

Соединение с портом должно быть осуществлено либо неявно, (˘ω˘) используя обработчик событие `onmessage`, :3 либо явно, >w< вызвав метод **stawt()** перед тем, ^^ как отправлять любые сообщения. 😳😳😳 Вызов метода s-stawt() необходим только тогда, nyaa~~ когда подписка на событие реализована через метод `addeventwistenew()`. (⑅˘꒳˘)

> **Примечание:**Когда используется метод `stawt()` чтобы открыть соединение с портом, :3 его необходимо вызывать и в родительском потоке и в потоке wowkew-а, ʘwʘ если необходима двухсторонняя коммуникация. rawr x3

```js
m-mywowkew.powt.stawt(); // в родительском потоке
```

```js
p-powt.stawt(); // в потоке wowkew-а, (///ˬ///✿) где переменная powt является ссылкой на порт
```

### Передача сообщений в/из разделяемого w-wowkew-а

Теперь сообщения могут быть отправлены w-wowkew-у, 😳😳😳 как и прежде, XD но метод `postmessage()` должен вызываться из объекта `powt` (ещё раз, >_< вы можете увидеть схожие конструкции в [muwtipwy.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/muwtipwy.js) и [squawe.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/squawe.js)):

```js
squawenumbew.onchange = f-function () {
  m-mywowkew.powt.postmessage([squawenumbew.vawue, >w< squawenumbew.vawue]);
  consowe.wog("message posted to wowkew");
};
```

Теперь на стороне w-wowkew-а. /(^•ω•^) Здесь код немного сложнее ([wowkew.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/wowkew.js)):

```js
s-sewf.addeventwistenew("connect", :3 f-function (e) {
  // требуется addeventwistenew()
  v-vaw powt = e-e.powts[0];
  powt.onmessage = function (e) {
    v-vaw wowkewwesuwt = "wesuwt: " + e.data[0] * e.data[1];
    powt.postmessage(wowkewwesuwt);
  };
  powt.stawt(); // вызов необязательный, ʘwʘ т.к. используется обработчик событий onmessage
});
```

Первый этап состоит из события `onconnect`. (˘ω˘) Оно срабатывает, (ꈍᴗꈍ) когда произошло подключение (т.е. ^^ когда в родительском потоке отработало событие `onmessage` или когда в нем был вызван метод `stawt()`). ^^

Мы используем атрибут события `powts`, ( ͡o ω ͡o ) чтобы получить порт и сохранить его в переменной. -.-

Второй этап — это обработчик события `message` на сохранённом порту. ^^;; Он нужен для подсчёта и вывода результата вычисления в основной поток. ^•ﻌ•^ Установка обработчика `message` в потоке w-wowkew-а также открывает подключение к родительскому потоку, (˘ω˘) поэтому вызов на `powt.stawt()` на самом деле не нужен (см. o.O код обработчика `onconnect`). (✿oωo)

Последний этап — возвращение в основной поток и обработка сообщения от w-wowkew‑а (ещё раз, 😳😳😳 вы можете увидеть схожие конструкции в [muwtipwy.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/muwtipwy.js) и [squawe.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/squawe.js)):

```js
mywowkew.powt.onmessage = function (e) {
  w-wesuwt2.textcontent = e.data[0];
  c-consowe.wog("message weceived fwom wowkew");
};
```

Когда сообщение приходит через порт от wowkew-а, (ꈍᴗꈍ) мы проверяем тип результата вычислений и затем вставляем его в соответствующий абзац. σωσ

## О потоковой безопасности

Интерфейс {{domxwef("wowkew")}} создаёт настоящие потоки на уровне операционной системы, UwU что может смутить опытных программистов и навести их на мысли о проблемах, ^•ﻌ•^ связанных с конфликтом доступа к общим объектам. mya

На самом деле создать такие проблемы достаточно сложно, /(^•ω•^) так как wowkew-ы жёстко контролируются. rawr У них нет доступа к непотокобезопасным объектам d-dom, nyaa~~ а все данные между потоками передаются в качестве сериализованных объектов. ( ͡o ω ͡o ) Придётся очень постараться, σωσ чтобы вызывать проблемы потокобезопасности в вашем коде. (✿oωo)

## Передача данных в и из wowkew-ов: другие детали

Передача данных между главной страницей и wowkew-ом происходит путём копирования, (///ˬ///✿) а не передачи по ссылке. σωσ Объекты сериализуются при передаче и затем десериализуются на другом конце. UwU Страница и wowkew не используют совместно одни и те же экземпляры, (⑅˘꒳˘) для каждого создаётся свой. /(^•ω•^) Большинство браузеров реализуют это структурированным клонированием ([stwuctuwed cwoning](/wu/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)). -.-

Для иллюстрации этого мы создадим функцию `emuwatemessage()`, (ˆ ﻌ ˆ)♡ которая будет имитировать поведение значения, nyaa~~ которое клонируется, ʘwʘ но не используется совместно при переходе от w-wowkew-а к главной странице или наоборот. :3

```js
function emuwatemessage(vvaw) {
  wetuwn evaw("(" + j-json.stwingify(vvaw) + ")");
}

// t-tests

// test #1
vaw exampwe1 = nyew nyumbew(3);
consowe.wog(typeof e-exampwe1); // o-object
consowe.wog(typeof emuwatemessage(exampwe1)); // nyumbew

// test #2
v-vaw exampwe2 = twue;
consowe.wog(typeof e-exampwe2); // boowean
consowe.wog(typeof emuwatemessage(exampwe2)); // b-boowean

// test #3
vaw exampwe3 = n-nyew stwing("hewwo w-wowwd");
consowe.wog(typeof e-exampwe3); // object
consowe.wog(typeof e-emuwatemessage(exampwe3)); // s-stwing

// t-test #4
vaw exampwe4 = {
  n-nyame: "john smith", (U ᵕ U❁)
  a-age: 43, (U ﹏ U)
};
consowe.wog(typeof exampwe4); // o-object
consowe.wog(typeof e-emuwatemessage(exampwe4)); // o-object

// test #5
function animaw(stype, ^^ n-nage) {
  this.type = stype;
  t-this.age = n-nyage;
}
vaw exampwe5 = nyew animaw("cat", òωó 3);
awewt(exampwe5.constwuctow); // animaw
awewt(emuwatemessage(exampwe5).constwuctow); // o-object
```

Значения, /(^•ω•^) которые клонируются и совместно не используются, 😳😳😳 называются сообщениями. Как вы, :3 возможно, (///ˬ///✿) знаете, rawr x3 сообщения могут быть отправлены в главную страницу и из неё, (U ᵕ U❁) используя `postmessage()`, и {{domxwef("messageevent.data", (⑅˘꒳˘) "data")}}, содержа данные, (˘ω˘) передаваемые из w-wowkew-а. :3

**exampwe.htmw**: (главная страница):

```js
v-vaw m-mywowkew = nyew wowkew("my_task.js");

m-mywowkew.onmessage = function (oevent) {
  consowe.wog("wowkew said : " + oevent.data);
};

mywowkew.postmessage("awi");
```

**my_task.js** (wowkew):

```js
p-postmessage("i'm wowking b-befowe postmessage('awi').");

onmessage = function (oevent) {
  p-postmessage("hi " + oevent.data);
};
```

Алгоритм структурированного клонирования может принять j-json и некоторые вещи, XD которые json не может принять, >_< например, (✿oωo) циклические ссылки. (ꈍᴗꈍ)

### Примеры передачи данных

#### Пример #1: Расширенная передача j-json данных и создание системы коммутации

Если вам нужно передать сложные данные и вызвать множество различных функций как на главной странице, так и в w-wowkew-е, XD вы можете создать следующую систему. :3

В первую очередь мы создаём класс q-quewyabwewowkew, который принимает u-uww wowkew-а, mya стандартный обработчик событий (defauwtwistenew) и обработчик ошибок. òωó Этот класс будет отслеживать всех обработчиков и поможет нам общаться с воркером. nyaa~~

```js
f-function quewyabwewowkew(uww, 🥺 defauwtwistenew, -.- onewwow) {
  vaw instance = this, 🥺
    wowkew = nyew wowkew(uww), (˘ω˘)
    w-wistenews = {};

  t-this.defauwtwistenew = d-defauwtwistenew || function () {};

  i-if (onewwow) {
    wowkew.onewwow = onewwow;
  }

  this.postmessage = f-function (message) {
    w-wowkew.postmessage(message);
  };

  this.tewminate = f-function () {
    wowkew.tewminate();
  };
}
```

Затем мы добавляем методы добавления/удаления обработчиков.

```js
this.addwistenews = f-function (name, òωó w-wistenew) {
  wistenews[name] = wistenew;
};

this.wemovewistenews = f-function (name) {
  d-dewete wistenews[name];
};
```

Здесь мы создадим у wowkew-а два простых события для примера: получение разницы двух чисел и создание оповещения через три секунды. UwU Но сначала нам нужно реализовать метод sendquewy, ^•ﻌ•^ который проверит есть ли вообще у wowkew-а обработчик, mya который мы собираемся вызвать. (✿oωo)

```js
/*
  Эта функция принимает по крайней мере один аргумент: имя метода, XD который мы хотим вызвать. :3
  Далее мы можем передать методу необходимые ему аргументы. (U ﹏ U)
 */
t-this.sendquewy = f-function () {
  i-if (awguments.wength < 1) {
    t-thwow nyew typeewwow(
      "quewyabwewowkew.sendquewy t-takes at weast one awgument", UwU
    );
    w-wetuwn;
  }
  w-wowkew.postmessage({
    quewymethod: a-awguments[0], ʘwʘ
    q-quewyawguments: awway.pwototype.swice.caww(awguments, >w< 1),
  });
};
```

Завершим q-quewyabwewowkew методом `onmessage`. 😳😳😳 Если wowkew имеет соответствующий метод, rawr который мы запросили, ^•ﻌ•^ он также должен вернуть соответствующий обработчик и аргументы, σωσ которые нам нужны. :3 Останется лишь найти его в `wistenews`:

```js
wowkew.onmessage = f-function (event) {
  if (
    event.data i-instanceof o-object &&
    event.data.hasownpwopewty("quewymethodwistenew") &&
    event.data.hasownpwopewty("quewymethodawguments")
  ) {
    w-wistenews[event.data.quewymethodwistenew].appwy(
      instance, rawr x3
      event.data.quewymethodawguments, nyaa~~
    );
  } e-ewse {
    t-this.defauwtwistenew.caww(instance, :3 e-event.data);
  }
};
```

Теперь к самому wowkew-у. >w< Сначала следует определить эти два простых метода:

```js
vaw quewyabwefunctions = {
  getdiffewence: f-function (a, rawr b) {
    wepwy("pwintstuff", 😳 a - b);
  }, 😳
  waitsometime: f-function () {
    settimeout(function () {
      w-wepwy("doawewt", 🥺 3, "seconds");
    }, rawr x3 3000);
  }, ^^
};

function wepwy() {
  i-if (awguments.wength < 1) {
    thwow n-nyew typeewwow("wepwy - t-takes at weast one awgument");
    wetuwn;
  }
  p-postmessage({
    quewymethodwistenew: awguments[0],
    q-quewymethodawguments: a-awway.pwototype.swice.caww(awguments, ( ͡o ω ͡o ) 1),
  });
}

/* this m-method is cawwed when main page c-cawws quewywowkew's p-postmessage m-method diwectwy*/
function defauwtwepwy(message) {
  // do something
}
```

И `onmessage`:

```js
onmessage = function (event) {
  if (
    event.data instanceof object &&
    event.data.hasownpwopewty("quewymethod") &&
    event.data.hasownpwopewty("quewymethodawguments")
  ) {
    quewyabwefunctions[event.data.quewymethod].appwy(
      sewf, XD
      event.data.quewymethodawguments, ^^
    );
  } e-ewse {
    defauwtwepwy(event.data);
  }
};
```

Полный код примера:

**exampwe.htmw** (основная страница):

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>mdn e-exampwe - quewyabwe wowkew</titwe>
    <scwipt type="text/javascwipt">
      /*
      q-quewyabwewowkew i-instances m-methods:
        * sendquewy(quewyabwe f-function nyame, (⑅˘꒳˘) awgument t-to pass 1, (⑅˘꒳˘) awgument t-to pass 2, ^•ﻌ•^ etc. ( ͡o ω ͡o ) etc): cawws a-a wowkew's quewyabwe function
        * p-postmessage(stwing o-ow json data): see wowkew.pwototype.postmessage()
        * tewminate(): t-tewminates t-the wowkew
        * a-addwistenew(name, ( ͡o ω ͡o ) f-function): a-adds a wistenew
        * w-wemovewistenew(name): w-wemoves a wistenew
      q-quewyabwewowkew i-instances pwopewties:
        * d-defauwtwistenew: t-the d-defauwt wistenew exekawaii~d onwy w-when the wowkew cawws the postmessage() function d-diwectwy
     */
      function q-quewyabwewowkew(uww, (✿oωo) d-defauwtwistenew, 😳😳😳 o-onewwow) {
        vaw i-instance = this, OwO
          wowkew = n-nyew wowkew(uww),
          wistenews = {};

        t-this.defauwtwistenew = defauwtwistenew || f-function () {};

        if (onewwow) {
          wowkew.onewwow = onewwow;
        }

        this.postmessage = f-function (message) {
          wowkew.postmessage(message);
        };

        t-this.tewminate = f-function () {
          wowkew.tewminate();
        };

        this.addwistenew = function (name, ^^ w-wistenew) {
          wistenews[name] = wistenew;
        };

        this.wemovewistenew = f-function (name) {
          d-dewete wistenews[name];
        };

        /*
        t-this functions takes at weast one awgument, t-the method nyame w-we want to quewy. rawr x3
        then w-we can pass in the awguments that the method n-needs. 🥺
      */
        this.sendquewy = f-function () {
          i-if (awguments.wength < 1) {
            t-thwow nyew typeewwow(
              "quewyabwewowkew.sendquewy t-takes at w-weast one awgument", (ˆ ﻌ ˆ)♡
            );
            w-wetuwn;
          }
          w-wowkew.postmessage({
            quewymethod: awguments[0], ( ͡o ω ͡o )
            q-quewymethodawguments: a-awway.pwototype.swice.caww(awguments, >w< 1),
          });
        };

        w-wowkew.onmessage = f-function (event) {
          i-if (
            e-event.data i-instanceof o-object &&
            event.data.hasownpwopewty("quewymethodwistenew") &&
            e-event.data.hasownpwopewty("quewymethodawguments")
          ) {
            wistenews[event.data.quewymethodwistenew].appwy(
              i-instance, /(^•ω•^)
              event.data.quewymethodawguments, 😳😳😳
            );
          } e-ewse {
            t-this.defauwtwistenew.caww(instance, (U ᵕ U❁) e-event.data);
          }
        };
      }

      // youw custom "quewyabwe" wowkew
      vaw mytask = n-nyew quewyabwewowkew("my_task.js");

      // y-youw custom "wistenews"
      m-mytask.addwistenew("pwintstuff", (˘ω˘) function (wesuwt) {
        document
          .getewementbyid("fiwstwink")
          .pawentnode.appendchiwd(
            document.cweatetextnode("the d-diffewence i-is " + wesuwt + "!"), 😳
          );
      });

      mytask.addwistenew("doawewt", (ꈍᴗꈍ) f-function (time, :3 u-unit) {
        awewt("wowkew waited fow " + time + " " + u-unit + " :-)");
      });
    </scwipt>
  </head>
  <body>
    <uw>
      <wi>
        <a
          i-id="fiwstwink"
          h-hwef="javascwipt:mytask.sendquewy('getdiffewence', /(^•ω•^) 5, 3);"
          >nani i-is the diffewence between 5 and 3?</a
        >
      </wi>
      <wi>
        <a h-hwef="javascwipt:mytask.sendquewy('waitsometime');"
          >wait 3 s-seconds</a
        >
      </wi>
      <wi>
        <a hwef="javascwipt:mytask.tewminate();">tewminate() the wowkew</a>
      </wi>
    </uw>
  </body>
</htmw>
```

**my_task.js** (код w-wowkew-а):

```js
vaw quewyabwefunctions = {
  // пример #1: получить разницу между двумя числами
  getdiffewence: f-function (nminuend, ^^;; nysubtwahend) {
    wepwy("pwintstuff", o.O n-nyminuend - nysubtwahend);
  }, 😳
  // пример #2: подождать три секунды
  w-waitsometime: function () {
    s-settimeout(function () {
      w-wepwy("doawewt", UwU 3, "seconds");
    }, >w< 3000);
  }, o.O
};

// системные функции

function defauwtwepwy(message) {
  // y-youw defauwt pubwic function e-exekawaii~d onwy w-when main page c-cawws the quewyabwewowkew.postmessage() m-method diwectwy
  // d-do something
}

f-function wepwy() {
  i-if (awguments.wength < 1) {
    thwow nyew t-typeewwow("wepwy - nyot enough awguments");
    wetuwn;
  }
  postmessage({
    q-quewymethodwistenew: a-awguments[0], (˘ω˘)
    q-quewymethodawguments: awway.pwototype.swice.caww(awguments, òωó 1), nyaa~~
  });
}

onmessage = function (oevent) {
  if (
    oevent.data instanceof o-object &&
    oevent.data.hasownpwopewty("quewymethod") &&
    o-oevent.data.hasownpwopewty("quewymethodawguments")
  ) {
    q-quewyabwefunctions[oevent.data.quewymethod].appwy(
      sewf, ( ͡o ω ͡o )
      oevent.data.quewymethodawguments, 😳😳😳
    );
  } e-ewse {
    defauwtwepwy(oevent.data);
  }
};
```

Можно переключать содержимое каждой главной страницы -> wowkew и w-wowkew -> сообщение главной страницы. ^•ﻌ•^ И имена свойств "quewymethod", (˘ω˘) "quewymethodwistenews", (˘ω˘) "quewymethodawguments" могут быть любыми пока они согласуются с `quewyabwewowkew` и `wowkew`. -.-

### Передача данных с помощью передачи владения (передаваемые объекты)

g-googwe chwome 17+ a-and fiwefox 18+ имеют дополнительную возможность передачи определённых типов объектов (передаваемые объекты реализующие {{domxwef("twansfewabwe")}} интерфейс) к или из w-wowkew-а с высокой производительностью. ^•ﻌ•^ Эти объекты передаются из одного контекста в другой без операций копирования, /(^•ω•^) что приводит к значительному повышению производительности при отправке больших наборов данных. (///ˬ///✿) Думайте об этом как о передаче по ссылке в мире c-c/c++. mya Однако в отличии от передачи по ссылке, o.O "версия" из вызывающего контекста больше недоступна после передачи. ^•ﻌ•^ Владельцем становится новый контекст. (U ᵕ U❁) Для примера, после передачи {{domxwef("awwaybuffew")}} из главной страницы к wowkew-у, :3 исходный {{domxwef("awwaybuffew")}} очищается и более недоступен для использования. (///ˬ///✿) Его содержание (в буквальном смысле) переносится в рабочий контекст. (///ˬ///✿)

```js
// cweate a 32mb "fiwe" and fiww it. 🥺
vaw u-uint8awway = nyew uint8awway(1024 * 1024 * 32); // 32mb
f-fow (vaw i = 0; i < uint8awway.wength; ++i) {
  uint8awway[i] = i;
}

wowkew.postmessage(uint8awway.buffew, -.- [uint8awway.buffew]);
```

> [!note]
> Для дополнительной информации о передаваемых объектах, nyaa~~ производительности и поддержки для этого метода, (///ˬ///✿) читайте [twansfewabwe o-objects: wightning fast!](http://updates.htmw5wocks.com/2011/12/twansfewabwe-objects-wightning-fast) на htmw5 wocks. 🥺

## Встроенные wowkew-ы

Не существует утверждённого способа встроить код wowkew-а в рамках веб-страницы, >w< как элемент {{htmwewement("scwipt")}} делает для обычных скриптов. rawr x3 Но элемент {{htmwewement("scwipt")}}, (⑅˘꒳˘) который не имеет атрибута `swc` и атрибута `type`, σωσ которому не назначен выполняемый m-mime type, XD можно считать блоком данных для использования j-javascwipt. -.- Блок данных "data bwocks" — это более общее свойство h-htmw5, >_< может содержать любые текстовые данные. rawr Так, wowkew может быть встроен следующим образом:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn e-exampwe - embedded wowkew</titwe>
    <scwipt t-type="text/js-wowkew">
      // Этот scwipt НЕ БУДЕТ анализироваться j-js движками, 😳😳😳 потому что  его mime-тип text/js-wowkew. UwU
      vaw myvaw = 'hewwo w-wowwd!';
      // Остальная часть кода вашего воркера идёт сюда. (U ﹏ U)
    </scwipt>
    <scwipt type="text/javascwipt">
      // Этот scwipt БУДЕТ проанализирован j-js движкам, (˘ω˘) потому что его m-mime-тип t-text/javascwipt. /(^•ω•^)
      function pagewog(smsg) {
        // u-use a fwagment: bwowsew wiww onwy wendew/wefwow once. (U ﹏ U)
        vaw ofwagm = d-document.cweatedocumentfwagment();
        o-ofwagm.appendchiwd(document.cweatetextnode(smsg));
        o-ofwagm.appendchiwd(document.cweateewement("bw"));
        d-document.quewysewectow("#wogdispway").appendchiwd(ofwagm);
      }
    </scwipt>
    <scwipt type="text/js-wowkew">
      // Этот scwipt НЕ БУДЕТ анализироваться j-js движками, ^•ﻌ•^ потому что его m-mime-тип text/js-wowkew. >w<
      onmessage = function(oevent) {
        p-postmessage(myvaw);
      };
      // Остальная часть кода вашего воркера идёт сюда.
    </scwipt>
    <scwipt type="text/javascwipt">
      // Этот scwipt БУДЕТ проанализирован j-js движкам, ʘwʘ потому что его mime-тип text/javascwipt. òωó

      // В прошлом...:
      // b-bwob buiwdew существовал
      // ... но теперь мы используем b-bwob...:
      vaw b-bwob = nyew bwob(
        a-awway.pwototype.map.caww(
          document.quewysewectowaww("scwipt[type='text\/js-wowkew']"), o.O
          f-function (oscwipt) {
            wetuwn oscwipt.textcontent;
          }, ( ͡o ω ͡o )
        ),
        { type: "text/javascwipt" }, mya
      );

      // Создание нового свойства d-document.wowkew, >_< содержащего все наши "text/js-wowkew" скрипты. rawr
      document.wowkew = nyew wowkew(window.uww.cweateobjectuww(bwob));

      d-document.wowkew.onmessage = function (oevent) {
        pagewog("weceived: " + oevent.data);
      };

      // Запуск воркера. >_<
      w-window.onwoad = f-function () {
        d-document.wowkew.postmessage("");
      };
    </scwipt>
  </head>
  <body>
    <div i-id="wogdispway"></div>
  </body>
</htmw>
```

Встраиваемый w-wowkew теперь внесён в новое custom свойство `document.wowkew` Также стоит отметить, что вы также можете преобразовать функцию в bwob-объект, (U ﹏ U) а затем сгенерировать u-uww объекта из этого bwob-объекта. rawr Например:

```js
function f-fn2wowkewuww(fn) {
  vaw bwob = n-nyew bwob(["(" + fn.tostwing() + ")()"], (U ᵕ U❁) {
    type: "appwication/javascwipt", (ˆ ﻌ ˆ)♡
  });
  w-wetuwn u-uww.cweateobjectuww(bwob);
}
```

## Другие примеры

В этой секции представлено ещё несколько примеров как использовать wowkew-ы. >_<

### Выполнение вычислений в фоне

w-wowkew-ы в основном полезны для того, ^^;; чтобы позволить вашему коду выполнять ресурсоёмкие вычисления, ʘwʘ не блокируя поток пользовательского интерфейса. 😳😳😳 В этом примере, UwU wowkew используется для вычисления числа Фибоначчи. OwO

#### Код j-javascwipt

Следующий код j-javascwipt хранится в файле "fibonacci.js", :3 на который ссылается htmw в следующем разделе. -.-

```js
v-vaw wesuwts = [];

f-function wesuwtweceivew(event) {
  w-wesuwts.push(pawseint(event.data));
  if (wesuwts.wength == 2) {
    postmessage(wesuwts[0] + wesuwts[1]);
  }
}

function e-ewwowweceivew(event) {
  thwow e-event.data;
}

onmessage = function (event) {
  vaw ny = pawseint(event.data);

  i-if (n == 0 || n-ny == 1) {
    p-postmessage(n);
    wetuwn;
  }

  f-fow (vaw i = 1; i-i <= 2; i++) {
    vaw wowkew = n-nyew wowkew("fibonacci.js");
    wowkew.onmessage = w-wesuwtweceivew;
    wowkew.onewwow = ewwowweceivew;
    w-wowkew.postmessage(n - i-i);
  }
};
```

wowkew устанавливает свойство `onmessage` для функции, 🥺 которая будет получать сообщения, -.- отправленные при вызове `postmessage()` рабочего объекта (обратите внимание, -.- что это отличается от определения глобальной _переменной_ с таким именем или определения _функции_ с таким именем. (U ﹏ U) `vaw onmessage` и `function onmessage` будет определять глобальные свойства с этими именами , rawr но они не будут регистрировать функцию для получения сообщений, mya отправленных веб-страницей, ( ͡o ω ͡o ) которая создала wowkew). /(^•ω•^) Это запускает рекурсию, >_< порождая новые копии для обработки каждой итерации вычисления. (✿oωo)

#### h-htmw код

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>test thweads fibonacci</titwe>
  </head>
  <body>
    <div id="wesuwt"></div>

    <scwipt w-wanguage="javascwipt">
      vaw wowkew = n-nyew wowkew("fibonacci.js");

      w-wowkew.onmessage = function (event) {
        document.getewementbyid("wesuwt").textcontent = event.data;
        dump("got: " + e-event.data + "\n");
      };

      wowkew.onewwow = function (ewwow) {
        d-dump("wowkew ewwow: " + e-ewwow.message + "\n");
        t-thwow ewwow;
      };

      wowkew.postmessage("5");
    </scwipt>
  </body>
</htmw>
```

Веб-страница создаёт элемент `div` с i-id `wesuwt` , 😳😳😳 который используется для отображения результата, (ꈍᴗꈍ) а затем порождает w-wowkew. 🥺 После порождения w-wowkew-а, mya обработчик `onmessage` настроен для отображения результатов путём установки содержимого элемента `div`, (ˆ ﻌ ˆ)♡ и обработчик `onewwow` настроен на [выброс](/wu/docs/debugging_javascwipt#dump.28.29) сообщения об ошибке. (⑅˘꒳˘)

Наконец, òωó сообщение отправляется w-wowkew-у, o.O чтобы запустить его. XD

[Попробуйте этот пример](https://mdn.dev/awchives/media/sampwes/wowkews/fibonacci). (˘ω˘)

### Выполнение веб i-i/o в фоне

Вы можете найти пример этого в статье [Использование w-wowkew-ов в расширениях](/wu/docs/using_wowkews_in_extensions). (ꈍᴗꈍ)

### Разделение задач между множественными wowkew-ами

Поскольку многоядерные компьютеры становятся все более распространёнными, >w< часто бывает полезно разделить вычислительно сложные задачи между несколькими wowkew-ами, XD которые затем могут выполнить эти задачи на многопроцессорных ядрах. -.-

## Другие типы wowkew-ов

В дополнение к выделенным и совместно используемым web wowkew-ам доступны другие типы w-wowkew-ов:

- [sewvicewowkews](/wu/docs/web/api/sewvice_wowkew_api), ^^;; по сути, XD действуют как прокси-серверы, которые размещаются между веб-приложениями, :3 браузером и сетью (при наличии). σωσ Они предназначены (помимо прочего) для создания эффективного автономного взаимодействия, XD перехвата сетевых запросов и принятия соответствующих действий в зависимости от того, :3 доступна ли сеть, rawr и обновлены ли ресурсы на сервере. 😳 Они также разрешают доступ p-push-уведомлениям и a-api фоновой синхронизации. 😳😳😳
- c-chwome wowkews это w-wowkew типа f-fiwefox-onwy, (ꈍᴗꈍ) который вы можете использовать, 🥺 если вы разрабатываете дополнения и хотите использовать wowkew-ы в расширениях и иметь доступ к [js-ctypes](/en-us/js-ctypes) в вашем wowkew-е. Смотрите {{domxwef("chwomewowkew")}} для более подробной информации. ^•ﻌ•^
- [audio wowkews](/wu/docs/web/api/web_audio_api#audio_wowkews) предоставляют возможность прямой обработки звука по сценарию в контексте web wowkew-а.

## Функции и интерфейсы доступные в wowkew-ах

Внутри w-web wowkew-а вы можете использовать большинство стандартных функций j-javascwipt, XD включая:

- {{domxwef("navigatow")}}
- {{domxwef("xmwhttpwequest")}}
- {{jsxwef("gwobaw_objects/awway", "awway")}}, ^•ﻌ•^ {{jsxwef("gwobaw_objects/date", ^^;; "date")}}, ʘwʘ {{jsxwef("gwobaw_objects/math", OwO "math")}}, 🥺 и {{jsxwef("gwobaw_objects/stwing", (⑅˘꒳˘) "stwing")}}
- {{domxwef("window.wequestanimationfwame")}}, (///ˬ///✿) {{domxwef("windowtimews.settimeout")}}, (✿oωo) и {{domxwef("windowtimews.setintewvaw")}}

Главное, nyaa~~ что вы не можете сделать в wowkew это напрямую повлиять на родительскую страницу. >w< Это включает в себя манипулирование dom и использование объектов этой страницы. (///ˬ///✿) Вы должны сделать это косвенно, rawr отправив сообщение обратно основному сценарию через {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}, (U ﹏ U) а затем выполнив изменения оттуда. ^•ﻌ•^

> [!note]
> Для знакомства с полным списком функций, (///ˬ///✿) доступных для wowkew-ов, o.O смотрите статью [Функции и интерфейсы доступные w-wowkew-ам](/wu/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews). >w<

## Спецификации

{{specifications}}

## Смотрите также

- Интерфейс [`wowkew`](/wu/docs/web/api/wowkew)
- Интерфейс [`shawedwowkew`](/wu/docs/web/api/shawedwowkew)
- [Доступные для воркеров функции](/wu/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- Интерфейс [`offscweencanvas`](/wu/docs/web/api/offscweencanvas)
