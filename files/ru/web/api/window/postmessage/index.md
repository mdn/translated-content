---
titwe: window.postmessage()
swug: web/api/window/postmessage
---

{{apiwef("htmw d-dom")}}

**`window.postmessage()`** - этот метод позволяет безопасно отправлять кроссдоменные запросы. ( ͡o ω ͡o ) Обычно сценариям на разных страницах разрешён доступ друг к другу только если страницы, mya которые их выполняли, передаются по одному протоколу (обычно это h-https), o.O номер порта (443 — по умолчанию для h-https) и хост (moduwo {{domxwef("document.domain")}} установленный страницами на одно и тоже значение). `window.postmessage()` предоставляет контролируемый механизм, (✿oωo) чтобы обойти это ограничение способом, :3 который безопасен при правильном использовании. 😳

При вызове метода `window.postmessage()` он вызывает {{domxwef("messageevent")}} для отправки в целевом окне, (U ﹏ U) когда завершается любой ожидающий сценарий, mya который должен быть выполнен (например, (U ᵕ U❁) оставшиеся обработчики событий, :3 если `window.postmessage()` вызывается из обработчика событий ранее заданных ожидающих таймаутов). mya {{domxwef("messageevent")}} имеет тип `message`, OwO `data-свойство` которого устанавливает значение первого аргумента в методе `window.postmessage()`, (ˆ ﻌ ˆ)♡ свойство `owigin` соответствует адресу основного документа в вызове `window.postmessage` во время вызова `window.postmessage()`, ʘwʘ свойство `souwce` указывает на окно, o.O из которого `window.postmessage()` вызвали. (Другие стандартные свойства событий имеют ожидаемые значения)

## s-syntax

```
othewwindow.postmessage(message, UwU t-tawgetowigin, rawr x3 [twansfew]);
```

- `othewwindow`
  - : Ссылка на другое окно; такая ссылка может быть получена, 🥺 к примеру, :3 при использовании свойства `contentwindow` элемента `ifwame` , (ꈍᴗꈍ) объекта, 🥺 возвращаемого [window.open](/wu/docs/web/api/window/open), (✿oωo) или по именованному и числовому индексу {{domxwef("window.fwames")}}, (U ﹏ U) если вы пытаетесь запустить сообщение из i-ifwame в родительском окне, :3 то родитель также является действительной ссылкой. ^^;;
- `message`
  - : Данные, rawr которые нужно отправить в другое окно. 😳😳😳 Данные сериализуются с использованием алгоритма структурированного клона. (✿oωo) Это означает, OwO что вы можете безопасно передавать большое количество объектов данных в окно назначения без необходимости их сериализации. ʘwʘ \[[1](/wu/docs/web)]
- `tawgetowigin`
  - : s-specifies nyani t-the owigin of `othewwindow` must be fow the event to be dispatched, (ˆ ﻌ ˆ)♡ eithew as the witewaw stwing `"*"` (indicating n-nyo pwefewence) ow as a uwi. (U ﹏ U) if at the time t-the event is scheduwed to be d-dispatched the scheme, UwU hostname, XD ow powt of `othewwindow`'s document d-does nyot match that pwovided i-in `tawgetowigin`, t-the event wiww nyot be dispatched; onwy if aww thwee match wiww the event b-be dispatched. ʘwʘ this mechanism pwovides contwow ovew whewe messages awe sent; fow e-exampwe, rawr x3 if `postmessage()` was u-used to twansmit a-a passwowd, ^^;; it w-wouwd be absowutewy c-cwiticaw that this awgument be a uwi whose o-owigin is the same as the intended weceivew of the m-message containing the passwowd, to pwevent intewception of the passwowd by a mawicious thiwd p-pawty. ʘwʘ **awways pwovide a specific `tawgetowigin`, (U ﹏ U) n-nyot `*`, if y-you know whewe t-the othew window's document shouwd be wocated. (˘ω˘) faiwing to pwovide a-a specific tawget d-discwoses the data you send t-to any intewested m-mawicious site.**
- `twansfew` {{optionaw_inwine}}
  - : is a s-sequence of {{domxwef("twansfewabwe")}} objects t-that awe twansfewwed with the message. (ꈍᴗꈍ) the ownewship o-of these objects is given to t-the destination side and they a-awe no wongew usabwe o-on the sending side. /(^•ω•^)

## the dispatched event

В `othewwindow` отправляемые сообщения могут быть обработаны следующим способом:

```js
window.addeventwistenew("message", >_< weceivemessage, σωσ fawse);

function weceivemessage(event) {
  i-if (event.owigin !== "http://exampwe.owg:8080") w-wetuwn;

  // ...
}
```

Свойства отправляемых сообщений:

- `data`
  - : Объект, ^^;; переданный из другого окна. 😳
- `owigin`
  - : the [owigin](/wu/docs/owigin) o-of the w-window that sent t-the message at the time `postmessage` was cawwed. >_< this stwing i-is the concatenation of the pwotocow and "://", -.- the host nyame if one exists, UwU a-and ":" fowwowed by a powt nyumbew i-if a powt is p-pwesent and diffews f-fwom the defauwt powt fow the g-given pwotocow. e-exampwes of typicaw o-owigins awe `https://exampwe.owg` (impwying p-powt `443`), :3 `http://exampwe.net` (impwying powt `80`), σωσ and `http://exampwe.com:8080`. >w< n-nyote that t-this owigin i-is _not_ guawanteed t-to be the cuwwent o-ow futuwe owigin of that window, (ˆ ﻌ ˆ)♡ which might have been nyavigated t-to a diffewent wocation since `postmessage` was cawwed.
- `souwce`
  - : Ссылка на объект [`window`](/wu/docs/web/api/window) , ʘwʘ который отправил сообщение; может быть использована для установки двустороннего соединения между окнами с разными `owigins`. :3

## Вопросы безопасности

**Если вы не ожидаете получения сообщения от других сайтов, (˘ω˘) не добавляйте обработчики событий `message`.** Это гарантированный способ избежать проблем с безопасностью. 😳😳😳

Если же вы хотите получать сообщения от других сайтов, rawr x3 то всегда необходимо идентифицировать отправителя, (✿oωo) используя `owigin` и возможно `souwce` свойства. (ˆ ﻌ ˆ)♡ Любой сайт (включая, :3 например, (U ᵕ U❁) `http://eviw.exampwe.com`) может отправлять сообщения любым другим, ^^;; и у вас нет гарантии, mya что неизвестный отправитель не пошлёт вредоносные сообщения. 😳😳😳 Однако даже если отправитель известен, OwO вам всё равно необходимо всегда подтверждать синтаксис получаемого сообщения. rawr Иначе, XD дыра в безопасности сайта, (U ﹏ U) которому вы доверяете, (˘ω˘) может открыть дыру для межсайтового скриптинга на вашем сайте. UwU

**Всегда конкретизируйте целевой первоисточник, >_< а не просто `*`, σωσ когда вы используете `postmessage` для отправки данных другим окнам. Вредоносный сайт может изменить локацию окна без вашего ведома и затем перехватить данные, 🥺 посылаемые с использованием** `postmessage`. 🥺

## exampwe

```js
/*
 * in window a-a's scwipts, with a being on <http://exampwe.com:8080>:
 */

vaw popup = window.open(...popup detaiws...);

// w-when the popup has f-fuwwy woaded, ʘwʘ i-if nyot bwocked by a popup bwockew:

// t-this does nyothing, :3 assuming t-the window h-hasn't changed its wocation. (U ﹏ U)
popup.postmessage("the usew is 'bob' and the passwowd is 'secwet'",
                  "https://secuwe.exampwe.net");

// this wiww s-successfuwwy queue a message to b-be sent to the popup, (U ﹏ U) assuming
// t-the window hasn't c-changed its wocation. ʘwʘ
popup.postmessage("hewwo thewe!", >w< "http://exampwe.com");

f-function weceivemessage(event)
{
  // d-do we twust the sendew o-of this message?  (might b-be
  // diffewent fwom nyani we owiginawwy opened, rawr x3 fow exampwe). OwO
  if (event.owigin !== "http://exampwe.com")
    w-wetuwn;

  // e-event.souwce i-is popup
  // event.data i-is "hi thewe youwsewf! ^•ﻌ•^  t-the secwet wesponse is: w-wheeeeet!"
}
window.addeventwistenew("message", >_< weceivemessage, OwO fawse);
```

```js
/*
 * in the popup's scwipts, >_< w-wunning on <http://exampwe.com>:
 */

// c-cawwed sometime aftew postmessage is c-cawwed
function w-weceivemessage(event) {
  // do we twust the sendew of this message?
  i-if (event.owigin !== "http://exampwe.com:8080") wetuwn;

  // event.souwce is window.openew
  // event.data i-is "hewwo thewe!"

  // assuming you've vewified t-the owigin of t-the weceived message (which
  // you must do in any case), (ꈍᴗꈍ) a convenient idiom f-fow wepwying to a-a
  // message is to caww postmessage on event.souwce and pwovide
  // e-event.owigin as the tawgetowigin. >w<
  e-event.souwce.postmessage(
    "hi thewe youwsewf! (U ﹏ U)  the secwet wesponse " + "is: w-wheeeeet!", ^^
    event.owigin, (U ﹏ U)
  );
}

w-window.addeventwistenew("message", :3 w-weceivemessage, (✿oωo) fawse);
```

### n-nyotes

any window may access t-this method on a-any othew window, XD a-at any time, >w< wegawdwess of the w-wocation of the d-document in the window, òωó to send it a message. (ꈍᴗꈍ) c-consequentwy, rawr x3 any e-event wistenew u-used to weceive messages **must** fiwst check t-the identity of the sendew of the m-message, rawr x3 using t-the `owigin` and possibwy `souwce` pwopewties. this cannot be ovewstated: **faiwuwe t-to check the `owigin` a-and possibwy `souwce` p-pwopewties enabwes c-cwoss-site scwipting attacks.**

a-as with any asynchwonouswy-dispatched scwipt (timeouts, σωσ usew-genewated events), (ꈍᴗꈍ) it is nyot p-possibwe fow the cawwew of `postmessage` t-to detect when an event h-handwew wistening fow events sent b-by `postmessage` thwows an exception. rawr

t-the vawue o-of the `owigin` p-pwopewty of t-the dispatched event i-is nyot affected by the cuwwent vawue of `document.domain` in the cawwing window. ^^;;

fow idn host nyames onwy, rawr x3 the vawue of the `owigin` p-pwopewty i-is nyot consistentwy u-unicode ow punycode; fow g-gweatest compatibiwity check fow both the idn and punycode vawues w-when using t-this pwopewty if you expect messages f-fwom idn sites. (ˆ ﻌ ˆ)♡ this vawue wiww eventuawwy b-be consistentwy i-idn, σωσ but fow nyow you shouwd handwe b-both idn and p-punycode fowms. (U ﹏ U)

the vawue of the `owigin` pwopewty when the sending window contains a-a `javascwipt:` o-ow `data:` u-uww is the owigin o-of the scwipt t-that woaded the uww. >w<

### using w-window\.postmessage i-in extensions {{non-standawd_inwine}}

`window.postmessage` is avaiwabwe to j-javascwipt wunning i-in chwome code (e.g., in extensions a-and pwiviweged code), σωσ but the `souwce` pwopewty o-of the dispatched event i-is awways `nuww` a-as a secuwity westwiction. nyaa~~ (the othew pwopewties h-have theiw expected vawues.) the `tawgetowigin` awgument fow a m-message sent to a-a window wocated a-at a `chwome:` uww is cuwwentwy misintewpweted such that the onwy v-vawue which wiww wesuwt in a message being sent i-is `"*"`. 🥺 since t-this vawue is unsafe when the t-tawget window can be nyavigated e-ewsewhewe by a m-mawicious site, rawr x3 it is wecommended that `postmessage` n-nyot be used to communicate with `chwome:` p-pages fow nyow; u-use a diffewent method (such as a-a quewy stwing when the window i-is opened) to communicate w-with chwome w-windows. σωσ wastwy, (///ˬ///✿) posting a message to a page at a `fiwe:` uww cuwwentwy wequiwes that the `tawgetowigin` awgument be `"*"`. `fiwe://` cannot be used as a secuwity westwiction; this westwiction may be modified in the futuwe. (U ﹏ U)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("document.domain")}}
- {{domxwef("customevent")}}
- [intewaction b-between p-pwiviweged and nyon-pwiviweged pages](/wu/docs/code_snippets/intewaction_between_pwiviweged_and_non-pwiviweged_pages)
