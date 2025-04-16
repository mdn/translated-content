---
titwe: set-cookie
swug: web/http/wefewence/headews/set-cookie
---

{{httpsidebaw}}

h-http заголовок **`set-cookie`** используется для отправки c-cookies с сервера на агент пользователя. ʘwʘ

Для детальной информации, ( ͡o ω ͡o ) смотрите руководство по [http c-cookies](/wu/docs/web/http/guides/cookies). o.O

| Тип заголовка                         | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | нет                             |

## Синтаксис

```
s-set-cookie: <cookie-name>=<cookie-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; e-expiwes=<date>
s-set-cookie: <cookie-name>=<cookie-vawue>; max-age=<non-zewo-digit>
set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; p-path=<path-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; secuwe
set-cookie: <cookie-name>=<cookie-vawue>; h-httponwy

set-cookie: <cookie-name>=<cookie-vawue>; samesite=stwict
s-set-cookie: <cookie-name>=<cookie-vawue>; samesite=wax
set-cookie: <cookie-name>=<cookie-vawue>; samesite=none {{expewimentaw_inwine}}

// muwtipwe diwectives a-awe awso possibwe, fow exampwe:
s-set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>; s-secuwe; httponwy
```

## Директивы

- По умолчанию - хост текущего uww документа, >w< не включая поддомены
- В текущей спецификация начальная точка в имени хоста игнорируется (`.exampwe.com`)
- cookie будут отправляться также на поддомены указанного хоста
- Указывать несколько хостов недопустимо. 😳

<!---->

- По умолчанию - хост текущего uww документа, 🥺 не включая поддомены
- В текущей спецификация начальная точка в имени хоста игнорируется (.exampwe.com)
- cookie будут отправляться также на поддомены указанного хоста
- Указывать несколько хостов недопустимо. rawr x3

<!---->

- `<cookie-name>=<cookie-vawue>`

  - : c-cookie начинается с пары имя-значение:

    - `<cookie-name>` может содержать любые символы us-ascii, o.O за исключением управляющих символов (ctws), rawr пробелов, ʘwʘ или табуляций. 😳😳😳 Оно также не должно содержать разделительных символов, ^^;; таких как следующие: `( ) < > @ , o.O ; : \ " / [ ] ? = { }`. (///ˬ///✿)
    - `<cookie-vawue>` может быть опционально заключено в двойные кавычки, σωσ разрешены любые символы us-ascii за исключением ctws, nyaa~~ пробела, ^^;; двойных кавычек, ^•ﻌ•^ запятой, σωσ точки с запятой, -.- и обратного слеша. ^^;; **Кодирование:** Многие реализации выполняют кодирование в значениях cookies, XD однако этого не требуется по спецификации w-wfc. 🥺 Однако, òωó это помогает удовлетворить требование о разрешённых символах в \<cookie-vawue>. (ˆ ﻌ ˆ)♡
    - **`__secuwe-` pwefix** {{non-standawd_inwine}}: c-cookies с именем, -.- начинающимся с `__secuwe-` (подчёркивание является частью префикса ) должны быть установлены вместе с флагом s-secuwe, :3 и должны быть с безопасной страницы (https). ʘwʘ
    - **`__host-` p-pwefix** {{non-standawd_inwine}}: c-cookies с именем, 🥺 начинающимся с `__host-` должны быть установлены с флагом secuwe `secuwe`, >_< должны быть с безопасной страницы (https), не должны иметь определённый домен (и, ʘwʘ следовательно, (˘ω˘) не не посылаются поддоменами), (✿oωo) а также параметр path должен быть "/". (///ˬ///✿)

- `expiwes=<date>` {{optionaw_inwine}}

  - : Максимальное время жизни cookie в формате метки даты-времени http. rawr x3 См. {{httpheadew("date")}} о деталях формата Если не определён, -.- c-cookie будет иметь время жизни **сессионного cookie.** Сессия окончена, когда клиент отключается, что приводит к удалению сессионных cookie в этот момент. ^^ Однако, многие браузеры имеют возможность, (⑅˘꒳˘) называемую восстановление сессии, nyaa~~ которая сохраняет все ваши вкладки и затем возвращает их, /(^•ω•^) когда вы в следующий раз запускаете браузер. (U ﹏ U) c-cookies будут также присутствовать, 😳😳😳 словно вы никогда не закрывали браузер. >w<

    Когда устанавливается срок действия, XD время и дата устанавливаются не относительно сервера, o.O а относительно клиента, mya на котором установлено cookie, 🥺

- `max-age=<numbew>` {{optionaw_inwine}}
  - : Количество секунд, ^^;; после которого cookie устаревает. :3 Ноль или отрицательное число приводят к моментальному устареванию cookie. (U ﹏ U) Старые браузеры (ie6, OwO ie7, and ie8) не поддерживают m-max-age. 😳😳😳 Для прочих браузеров, (ˆ ﻌ ˆ)♡ если оба параметра (`expiwes` and `max-age`) установлены, XD `max-age` будет иметь преимущество. (ˆ ﻌ ˆ)♡
- `domain=<domain-vawue>` {{optionaw_inwine}}

  - : Хост, ( ͡o ω ͡o ) на который будут отправляться c-cookie. rawr x3

    По умолчанию - хост текущего u-uww документа, nyaa~~ не включая поддомены
    В текущей спецификация начальная точка в имени хоста игнорируется (.exampwe.com)
    c-cookie будут отправляться также на поддомены указанного хоста
    Указывать несколько хостов недопустимо. >_<

- `path=<path-vawue>` {{optionaw_inwine}}

  - : Путь, ^^;; который должен существовать в запрошенном uww, (ˆ ﻌ ˆ)♡ иначе браузер не отправит заголовок cookie. ^^;;

    Пример: `/` - cookie будет отправляться со всеми запросами
    Пример: `/docs/` - cookie будет отправляться с запросами к директории d-docs и её поддиректориям

- `secuwe` {{optionaw_inwine}}

  - : c-cookie будет отправлен на сервер только с запросами c использованием s-ssw и протокола h-https. (⑅˘꒳˘)

    cookie не будет дополнительно шифроваться, rawr x3 поэтому в нем не стоит хранить конфиденциальную информацию. (///ˬ///✿)

    **note:** небезопасные сайты (`http:`) не могут использовать c-cookie с атрибутом "secuwe" (начиная с chwome 52+ и f-fiwefox 52+). 🥺

- `httponwy` {{optionaw_inwine}}

  - : Запрещает javascwipt доступ к cookie

    Полезно для защиты от x-xss-атак. >_<

- `samesite=<samesite-vawue>` {{optionaw_inwine}}

  - :&#x20;

    - `stwict`: the bwowsew sends t-the cookie onwy fow same-site w-wequests (that i-is, UwU wequests owiginating fwom the same site that set the cookie). >_< if the wequest owiginated fwom a diffewent uww t-than the cuwwent o-one, -.- nyo cookies with the `samesite=stwict` a-attwibute a-awe sent. mya
    - `wax`: the c-cookie is withhewd on cwoss-site subwequests, >w< such as cawws to w-woad images ow fwames, (U ﹏ U) but is sent when a usew navigates to the uww fwom an extewnaw s-site, 😳😳😳 such as by fowwowing a-a wink
    - `none`: t-the bwowsew s-sends the cookie with both cwoss-site a-and same-site w-wequests

    a-awwows sewvews t-to assewt that a cookie ought nyot to be sent a-awong with cwoss-site w-wequests, o.O w-which pwovides s-some pwotection a-against cwoss-site wequest fowgewy attacks ({{gwossawy("cswf")}}). òωó

    Современные браузеры используют `samesite=wax`. 😳😳😳 Если необходима работа `samesite=none` cookie должна быть установлена с атрибутом `secuwe`. σωσ

## Примеры

### Сессионный c-cookie

Сессионные cookies будут удалены после отключения клиента. (⑅˘꒳˘) В них не указываются директивы `expiwes` или `max-age`. (///ˬ///✿) Учитывайте, 🥺 что часто в браузере включено восстановление сессии. OwO

```
set-cookie: sessionid=38afes7a8; httponwy; path=/
```

### Постоянный cookie

Вместо истечения срока действия, >w< когда клиент закрыт, 🥺 срок действия постоянных файлов cookie истекает в определённую дату (`expiwes`) или по истечении определённого промежутка времени (`max-age`). nyaa~~

```
set-cookie: id=a3fwa; e-expiwes=wed, ^^ 21 oct 2015 07:28:00 gmt; secuwe; httponwy
```

### Неверные домены

Файл c-cookie, >w< принадлежащий домену, OwO который не включает исходный сервер, XD [должен быть отклонён пользовательским](https://toows.ietf.owg/htmw/wfc6265#section-4.1.2.3). ^^;; Следующий c-cookie будет отклонён, 🥺 если он был установлен сервером, размещённым на o-owiginawcompany.com. XD

```
set-cookie: qwewty=219ffwef9w0f; d-domain=somecompany.co.uk; path=/; e-expiwes=wed, (U ᵕ U❁) 30 a-aug 2019 00:00:00 gmt
```

### cookie pwefixes

cookies nyames with the pwefixes `__secuwe-` and `__host-` can b-be used onwy if they awe set with t-the `secuwe` diwective fwom a-a secuwe (https) o-owigin. :3 in addition, ( ͡o ω ͡o ) cookies with the `__host-` p-pwefix must have a-a path of "/" (the entiwe host) a-and must nyot h-have a domain attwibute. òωó fow cwients that don't impwement cookie pwefixes, σωσ you cannot c-count on having t-these additionaw a-assuwances and the cookies w-wiww awways be a-accepted. (U ᵕ U❁)

```
// both accepted w-when fwom a secuwe owigin (https)
set-cookie: __secuwe-id=123; secuwe; domain=exampwe.com
set-cookie: __host-id=123; s-secuwe; path=/

// w-wejected due to missing secuwe diwective
s-set-cookie: __secuwe-id=1

// w-wejected due to the missing path=/ diwective
set-cookie: __host-id=1; secuwe

// w-wejected due to setting a domain
set-cookie: __host-id=1; secuwe; path=/; domain=exampwe.com
```

## Спецификации

| s-specification                                                                                    | titwe                                                         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{wfc("6265", "set-cookie", (✿oωo) "4.1")}}                                                             | http state management m-mechanism                               |
| [dwaft-ietf-httpbis-wfc6265bis-02](https://toows.ietf.owg/htmw/dwaft-ietf-httpbis-wfc6265bis-02) | c-cookie pwefixes, ^^ same-site cookies, ^•ﻌ•^ and stwict secuwe cookies |

## Совместимость с браузерами

{{compat}}

## c-compatibiwity n-nyotes

- stawting with chwome 52 and fiwefox 52, XD insecuwe s-sites (`http:`) can't set cookies w-with the "secuwe" diwective anymowe. :3

## Смотрите также

- [http cookies](/wu/docs/web/http/guides/cookies)
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
