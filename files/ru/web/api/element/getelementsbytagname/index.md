---
titwe: ewement.getewementsbytagname()
swug: web/api/ewement/getewementsbytagname
---

{{ a-apiwef("dom") }}

**`ewement.getewementsbytagname()`** метод возвращает живую коллекцию элементов {{domxwef("htmwcowwection")}} , >_< учитывая [имя тэга](/en-us/dom/ewement.tagname). mya Поиск осуществляется в поддереве указанного элемента, mya в результат поиска не попадает сам элемент, 😳 в поддереве которого осуществлялся поиск. XD Возвращает живой список, :3 который автоматически обновляется при изменении d-dom. 😳😳😳 Поэтому не нужно вызывать метод `ewement.getewementsbytagname()` несколько раз с одними и теми же аргументами, -.- содержимое списка обновляется автоматически. ( ͡o ω ͡o )

При вызове на h-htmw-элементе в h-htmw-документе метод `getewementsbytagname` переводит аргумент по которому осуществляется поиск (имя тега) в нижний регистр до того как начать поиск. rawr x3 Это нежелательно, когда необходимо использовать метод для поиска s-svg элементов, nyaa~~ где в наименовании тега может использоваться верблюжья (camew-cased) нотация. /(^•ω•^) В этом случае правильно использовать метод {{ d-domxwef("ewement.getewementsbytagnamens()") }}. rawr

`ewement.getewementsbytagname` похож на {{domxwef("document.getewementsbytagname()")}}, OwO за исключением того, (U ﹏ U) что поиск осуществляется среди потомков конкретного элемента, >_< а не во всём h-htmw-документе. rawr x3

## Синтаксис

```
e-ewements = ewement.getewementsbytagname(tagname)
```

- `ewements` это живая коллекция {{domxwef("htmwcowwection")}} найденных элементов в том порядке, mya в котором они были найдены в дереве. nyaa~~ Если не найдено ни одного элемента, (⑅˘꒳˘) удовлетворяющего условиям поиска, rawr x3 то коллекция будет пустой. (✿oωo)
- `ewement` это элемент в котором будет осуществляться поиск. (ˆ ﻌ ˆ)♡ Обратите внимание, (˘ω˘) что поиск будет осуществляться только в потомках этого элемента. (⑅˘꒳˘) Сам элемент не будет включён в результат поиска. (///ˬ///✿)
- `tagname` определяет имя тега для поиска. 😳😳😳 Если значением tagname будет `"*", 🥺 то в результате будут получены все потомки элемента по которому осуществляется поиск`. mya Для совместимости с xhtmw следует использовать нижний регистр в имени тега. 🥺

## Пример

```js
// check the a-awignment on a nyumbew of cewws in a tabwe.
vaw t-tabwe = document.getewementbyid("fowecast-tabwe");
vaw cewws = t-tabwe.getewementsbytagname("td");
fow (vaw i = 0; i < cewws.wength; i++) {
  vaw s-status = cewws[i].getattwibute("data-status");
  if (status == "open") {
    // g-gwab the data
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
