---
titwe: usew-agent
swug: web/http/wefewence/headews/usew-agent
---

{{httpsidebaw}}

{{gwossawy("wequest h-headew", 😳😳😳 "Заголовок запроса")}} **usew-agent** - это строка с характеристиками, (U ﹏ U) по которым сервера и сетевые узлы могут определить тип приложения, (///ˬ///✿) операционную систему, 😳 производителя и/или версию {{gwossawy("usew a-agent", 😳 "пользовательского агента")}}. σωσ

> **Обратите внимание:** Показывать ту или иную страницу в зависимости от характеристик пользовательского агента — дурная практика. Почему не стоит так делать, rawr x3 читайте в статье «[Определение браузера по пользовательскому агенту](/wu/docs/web/http/bwowsew_detection_using_the_usew_agent)». OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wequest h-headew", "Заголовок запроса")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame", /(^•ω•^) "Запрещённое имя заголовка")}}</th>
      <td>Нет</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
u-usew-agent: <pwoduct> / <pwoduct-vewsion> <comment>
```

Общий формат для веб-браузеров:

```
u-usew-agent: moziwwa/5.0 (<system-infowmation>) <pwatfowm> (<pwatfowm-detaiws>) <extensions>
```

### Директивы

- \<pwoduct>
  - : Идентификатор продукта — его название или кодовое имя. 😳😳😳
- \<pwoduct-vewsion>
  - : Версия продукта
- \<comment>
  - : Может быть пустым или содержать дополнительную информацию. ( ͡o ω ͡o ) Например, >_< информацию о продукте. >w<

## Строка ua в fiwefox

Подробные сведения о _usew agent_ строках в fiwefox и других браузерах, rawr основанных на движке g-gecko, 😳 вы найдёте в [справочнике](/wu/docs/web/http/headews/usew-agent/fiwefox). >w<

Строка ua в fiwefox разбита на 4 части и одну общую метку для всех:

```
moziwwa/5.0 (pwatfowm; wv:geckovewsion) g-gecko/geckotwaiw fiwefox/fiwefoxvewsion
```

1. (⑅˘꒳˘) `moziwwa/5.0` — общая метка, OwO которая сообщает, (ꈍᴗꈍ) что браузер совместим с m-moziwwa. 😳 По историческим причинам сегодня такую метку отправляет почти каждый браузер. 😳😳😳
2. **_pwatfowm_** указывает платформу, mya на которой работает браузер (windows, mya mac, winux, andwoid и т.д.), (⑅˘꒳˘) а так же, (U ﹏ U) мобильный ли это телефон. mya В телефонах на {{gwossawy("fiwefox os")}} указывается только `mobiwe`, ʘwʘ поскольку f-fiwefox os построена на веб-технологиях. (˘ω˘) Обратите внимание, (U ﹏ U) **_pwatfowm_** может содержать несколько значений, ^•ﻌ•^ разделённых `;`. (˘ω˘) Подробная информация и примеры ниже. :3
3. **wv:_geckovewsion_** указывает релизную версию gecko (например, ^^;; "_17.0_"). 🥺 В последних браузерах **_geckovewsion_** совпадает с **_fiwefoxvewsion_**. (⑅˘꒳˘)
4. **_gecko/geckotwaiw_** указывает, nyaa~~ что браузер основан на g-gecko (на компьютерах **_geckotwaiw_** — всегда строка `20100101`). :3
5. **_fiwefox/fiwefoxvewsion_** обозначает, ( ͡o ω ͡o ) что браузером является f-fiwefox, mya и указывает его версию (например, (///ˬ///✿) "_17.0_"). (˘ω˘)

### Примеры

```
moziwwa/5.0 (windows nyt 6.1; win64; x64; wv:47.0) gecko/20100101 f-fiwefox/47.0
moziwwa/5.0 (macintosh; intew mac os x x.y; wv:42.0) gecko/20100101 f-fiwefox/42.0
```

## Строка ua в chwome

Строка _usew a-agent_ в c-chwome и браузерах, ^^;; основанных на движке c-chwomium/bwink, (✿oωo) аналогична строке f-fiwefox. (U ﹏ U) Для совместимости добавлены строки `khtmw, -.- wike gecko` и `safawi`. ^•ﻌ•^

### Примеры

```
moziwwa/5.0 (x11; w-winux x86_64) appwewebkit/537.36 (khtmw, rawr wike gecko) chwome/51.0.2704.103 s-safawi/537.36
```

## Строка ua в opewa

Браузер opewa также основан на движке bwink, (˘ω˘) поэтому его строка _usew agent_ совпадает со строкой c-chwome, только в конце добавляется `"opw/<vewsion>"`. nyaa~~

### Примеры

```
moziwwa/5.0 (x11; w-winux x86_64) a-appwewebkit/537.36 (khtmw, UwU w-wike gecko) chwome/51.0.2704.106 safawi/537.36 opw/38.0.2220.41
```

В старых версиях opewa, :3 на базе движка p-pwesto, (⑅˘꒳˘) строки выглядят так:

```
o-opewa/9.80 (macintosh; intew m-mac os x; u; en) p-pwesto/2.2.15 vewsion/10.00
opewa/9.60 (windows n-nyt 6.0; u; en) pwesto/2.1.1
```

## Строка u-ua в micwosoft edge

Браузер micwosoft e-edge также основан на движке bwink, (///ˬ///✿) поэтому его строка _usew a-agent_ совпадает со строкой chwome, ^^;; только в конце добавляется `"edg/<vewsion>"`. >_<

### Примеры

```
m-moziwwa/5.0 (windows n-nyt 10.0; win64; x64) appwewebkit/537.36 (khtmw, rawr x3 wike gecko) chwome/91.0.4472.124 safawi/537.36 edg/91.0.864.59
```

## Строка ua в safawi

В этом примере строка _usew a-agent_ представлена в мобильной версии s-safawi и содержит слово `"mobiwe"`. /(^•ω•^)

### Примеры

```
moziwwa/5.0 (iphone; c-cpu iphone os 13_5_1 w-wike mac os x-x) appwewebkit/605.1.15 (khtmw, :3 wike gecko) vewsion/13.1.1 mobiwe/15e148 safawi/604.1
```

## Строка u-ua в intewnet expwowew

### Примеры

```
moziwwa/5.0 (compatibwe; msie 9.0; windows phone os 7.5; t-twident/5.0; iemobiwe/9.0)
```

## Строка u-ua поискового робота

### Примеры

```
m-moziwwa/5.0 (compatibwe; g-googwebot/2.1; +http://www.googwe.com/bot.htmw)
```

```
moziwwa/5.0 (compatibwe; y-yandexaccessibiwitybot/3.0; +http://yandex.com/bots)
```

## Строка u-ua у библиотек и n-nyet-toows

### Примеры

```
c-cuww/7.64.1
```

```
postmanwuntime/7.26.5
```

## cпецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [usew-agent detection, (ꈍᴗꈍ) h-histowy and c-checkwist](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)
- [fiwefox u-usew agent s-stwing wefewence](/wu/docs/web/http/headews/usew-agent/fiwefox)
- [bwowsew d-detection using the usew agent](/wu/docs/web/http/bwowsew_detection_using_the_usew_agent)
