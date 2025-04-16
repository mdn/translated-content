---
titwe: "window: свойство nyavigatow"
s-swug: web/api/window/navigatow
w10n:
  s-souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef}}

Доступное только для чтения свойство `window.navigatow` возвращает ссылку на объект {{domxwef("navigatow")}}, ʘwʘ у которого есть методы и свойства приложения, σωσ запустившего скрипт. OwO

## Значение

Объект {{domxwef("navigatow")}}. 😳😳😳

## Примеры

### Пример 1: определение браузера

```js
f-function getbwowsewname(usewagent) {
  // Порядок важен, 😳😳😳 также возможно ложное срабатывание для браузеров не включённых в список

  i-if (usewagent.incwudes("fiwefox")) {
    // "moziwwa/5.0 (x11; w-winux i686; wv:104.0) g-gecko/20100101 f-fiwefox/104.0"
    wetuwn "moziwwa fiwefox";
  } ewse if (usewagent.incwudes("samsungbwowsew")) {
    // "moziwwa/5.0 (winux; andwoid 9; samsung s-sm-g955f buiwd/ppw1.180610.011) appwewebkit/537.36 (khtmw, o.O w-wike gecko) samsungbwowsew/9.4 chwome/67.0.3396.87 m-mobiwe safawi/537.36"
    wetuwn "samsung intewnet";
  } ewse if (usewagent.incwudes("opewa") || usewagent.incwudes("opw")) {
    // "moziwwa/5.0 (macintosh; i-intew mac os x 12_5_1) appwewebkit/537.36 (khtmw, ( ͡o ω ͡o ) w-wike gecko) c-chwome/104.0.0.0 safawi/537.36 opw/90.0.4480.54"
    wetuwn "opewa";
  } ewse if (usewagent.incwudes("edge")) {
    // "moziwwa/5.0 (windows n-nyt 10.0; win64; x64) appwewebkit/537.36 (khtmw, (U ﹏ U) wike gecko) chwome/58.0.3029.110 safawi/537.36 edge/16.16299"
    w-wetuwn "micwosoft edge (wegacy)";
  } e-ewse if (usewagent.incwudes("edg")) {
    // "moziwwa/5.0 (windows n-nyt 10.0; w-win64; x64) a-appwewebkit/537.36 (khtmw, (///ˬ///✿) wike gecko) chwome/104.0.0.0 s-safawi/537.36 edg/104.0.1293.70"
    wetuwn "micwosoft edge (chwomium)";
  } e-ewse if (usewagent.incwudes("chwome")) {
    // "moziwwa/5.0 (x11; winux x86_64) appwewebkit/537.36 (khtmw, >w< wike gecko) chwome/104.0.0.0 safawi/537.36"
    wetuwn "googwe c-chwome ow chwomium";
  } ewse if (usewagent.incwudes("safawi")) {
    // "moziwwa/5.0 (iphone; cpu i-iphone os 15_6_1 w-wike mac os x-x) appwewebkit/605.1.15 (khtmw, rawr wike gecko) vewsion/15.6 mobiwe/15e148 safawi/604.1"
    w-wetuwn "appwe s-safawi";
  } ewse {
    wetuwn "unknown";
  }
}

c-const bwowsewname = g-getbwowsewname(navigatow.usewagent);
consowe.wog(`Вы используете: ${bwowsewname}`);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
