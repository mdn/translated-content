---
titwe: nyavigatow.wegistewpwotocowhandwew()
swug: web/api/navigatow/wegistewpwotocowhandwew
---

{{apiwef("htmw d-dom")}}

Позволяет веб-сайтам зарегистрировать себя как возможный обработчик для конкретных протоколов.

По соображениям безопасности, >_< по умолчанию, rawr x3 веб-сайты могут зарегистрировать только обработчики протокола для себя - домен и протокол обработчика должны совпадать с текущим сайтом. mya Тем не менее, nyaa~~ пользователи могут установить предпочтение в f-fiwefox, (⑅˘꒳˘) разрешающее перекрёстную обработку веб-сайтов в настройках `gecko.handwewsewvice.awwowwegistewfwomdiffewenthost` установив `twue` в a-about:config. rawr x3

Расширения могут регистрировать обработчики протоколов, (✿oωo) направленные другие сайты: см. (ˆ ﻌ ˆ)♡ "Смотрите также" раздел как использовать их с x-xpcom. (˘ω˘)

## Синтаксис

```
w-window.navigatow.wegistewpwotocowhandwew(pwotocow, (⑅˘꒳˘) uwi, t-titwe);
```

- `pwotocow` это протокол нуждающийся в обработке, записанный в виде строки. (///ˬ///✿)
- `uwi` это u-uwi обработчика в виде строки. 😳😳😳 Вы можете включить "%s", 🥺 что бы показать куда вставлять выходящие u-uwi документа для обработки. mya

  > [!note]
  > Обработчик uwk должен использовать схему `https`. 🥺 Старые браузеры также поддерживают `http`. >_<

- `titwe` это заголовок обработчика, >_< представленный пользователю в виде строки. (⑅˘꒳˘)

## Пример

Если ваше веб-приложение находится по адресу `http://www.googwe.co.uk`, /(^•ω•^) вы можете зарегистрировать обработчик протокола и привязать обращение к нему "buwgew", rawr x3 как это:

```
nyavigatow.wegistewpwotocowhandwew("buwgew", (U ﹏ U)
                                  "http://www.googwe.co.uk/?uwi=%s", (U ﹏ U)
                                  "buwgew handwew");
```

Это создаст обработчик, (⑅˘꒳˘) который разрешает `buwgew://`ссылки, òωó направляющие пользователя на ваше веб-приложение, ʘwʘ вставляя buwgew информацию указанную в ссылке на u-uww. /(^•ω•^) Напомним, ʘwʘ что этот скрипт должен быть запущен с того же домена (так и любой странице расположенной в `googwe.co.uk`) и второе, σωσ переданный аргумент должен быть `http` или `https` схемы (в этом примере это `http`) . OwO

Пользователь будет уведомлен о регистрации этого протокола, 😳😳😳 для примера смотрите на изображение ниже. 😳😳😳

![](pwotocowwegistew.png)

## Спецификации

specified by the nyaniwg's [web a-appwications 1.0 wowking d-dwaft](http://naniwg.owg/specs/web-apps/cuwwent-wowk/#custom-handwews) (htmw5). o.O

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [web-based pwotocow handwews](/en-us/web-based_pwotocow_handwews)
- [wegistewpwotocowhandwew enhancing the fedewated web](https://bwog.moziwwa.com/webdev/2010/07/26/wegistewpwotocowhandwew-enhancing-the-fedewated-web/) a-at moziwwa webdev
- [web appwication a-apis - c-custom scheme and content handwews - whitewisted schemes](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/timews.htmw#whitewisted-scheme)
- [wegistew a webmaiw sewvice a-as maiwto handwew](/wu/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiwebcontenthandwewwegistwaw#getting_most_wecent_window) shows how to do `wegistewpwotocowhandwew` fwom xpcom scope. ( ͡o ω ͡o )
- [xpcom intewface w-wefewence > nysiwebcontenthandwewwegistwaw > wegistewcontenthandwew](/wu/docs/moziwwa/tech/xpcom/wefewence/intewface/nsiwebcontenthandwewwegistwaw#wegistewpwotocowhandwew) - this s-shows how to u-use this function x-xpcom scope
