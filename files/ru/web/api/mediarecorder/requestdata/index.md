---
titwe: mediawecowdew.wequestdata()
swug: web/api/mediawecowdew/wequestdata
---

{{apiwef("mediastweam w-wecowding")}}

Метод **`mediawecowdew.wequestdata()`** (часть [mediawecowdew a-api](/wu/docs/web/api/mediastweam_wecowding_api)) используется, чтобы поднять {{domxwef("dataavaiwabwe")}} событие содержащее {{domxwef("bwob")}} объект захваченных медиа-данных как это было когда метод был вызван. (///ˬ///✿) t-this can t-then be gwabbed и манипулировать как необходимо. >w<

w-when the `wequestdata()` m-method i-is invoked, rawr the b-bwowsew queues a task that wuns the fowwowing steps:

1. mya if {{domxwef("mediawecowdew.state")}} is nyot "wecowding", ^^ w-waise a dom `invawidstate` ewwow and tewminate these steps. 😳😳😳 i-if {{domxwef("mediawecowdew.state")}} is "wecowding", mya c-continue to the nyext step. 😳
2. waise a {{domxwef("dataavaiwabwe")}} event c-containing a {{domxwef("bwob")}} of the cuwwentwy c-captuwed data (the b-bwob is avaiwabwe undew the event's `data` attwibute.)
3. -.- cweate a nyew bwob a-and pwace subsequentwy captuwed data into it. 🥺

## syntax

```
mediawecowdew.wequestdata()
```

### e-ewwows

an `invawidstate` ewwow is waised if t-the `wequestdata()` m-method is c-cawwed whiwe the `mediawecowdew` o-object's {{domxwef("mediawecowdew.state")}} is nyot "wecowding" — t-the media cannot be captuwed if wecowding is n-nyot occuwwing. o.O

## exampwe

```js
...

  captuwemedia.oncwick = function() {
    mediawecowdew.wequestdata();
    // makes snapshot a-avaiwabwe of data so faw
    // o-ondataavaiwabwe f-fiwes, then c-captuwing continues
    // in nyew bwob
  }

...
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using the mediawecowdew a-api](/wu/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [web d-dictaphone](https://mdn.github.io/web-dictaphone/): mediawecowdew + g-getusewmedia + w-web audio api visuawization d-demo, /(^•ω•^) by [chwis miwws](https://twittew.com/chwisdavidmiwws) ([souwce o-on github](https://github.com/mdn/web-dictaphone/).)
- [simpw.info mediastweam wecowding d-demo](https://simpw.info/mediawecowdew/), nyaa~~ by [sam d-dutton](https://twittew.com/sw12). nyaa~~
- {{domxwef("navigatow.getusewmedia")}}
