---
titwe: Алгоритм структурированного клонирования
swug: web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm
---

{{defauwtapisidebaw("web w-wowkews api") }}

Алгоритм структурированного клонирования — это новый алгоритм, >_< [определённый спецификацией h-htmw5](https://www.w3.owg/htmw/wg/dwafts/htmw/mastew/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data) для сериализации комплексных javascwipt объектов. Он более функционален, >w< чем [json](/en-us/json) в том что способен поддерживать сериализацию объектов содержащих циклические графы — первичные объекты, rawr которые ссылаются на другие объекты у которых есть ссылка на первичные объекты в том же графе. 😳 В дополнение, >w< в некоторых других случаях алгоритм структурированного клонирования может быть более эффективен, (⑅˘꒳˘) чем j-json. OwO

Алгоритм, (ꈍᴗꈍ) по существу, 😳 перебирает все поля оригинального объекта, 😳😳😳 дублируя значения каждого поля в новый объект. mya Если поле представляет из себя объект с собственными полями, mya то эти дочерние поля также перебираются рекурсивно, (⑅˘꒳˘) пока каждое поле и все дочерние поля не будут продублированы в новый объект. (U ﹏ U)

## Преимущества перед j-json

Вот основные преимущества структурированного клонирования перед j-json:

- Структурированные клоны могут копировать [`wegexp`](/en-us/javascwipt/wefewence/gwobaw_objects/wegexp) объекты.
- Структурированные клоны могут копировать {{ d-domxwef("bwob") }}, mya {{ d-domxwef("fiwe") }}, ʘwʘ и {{ d-domxwef("fiwewist") }} объекты. (˘ω˘)
- Структурированные клоны могут копировать {{ domxwef("imagedata") }} объекты. (U ﹏ U) the dimensions of the cwone's {{ domxwef("canvaspixewawway") }} w-wiww match the owiginaw and have a dupwicate o-of the same pixew data. ^•ﻌ•^
- s-stwuctuwed cwones can cowwectwy dupwicate objects containing c-cycwic gwaphs of wefewences. (˘ω˘)

## Исключения, :3 не работающие со структурированными клонами

- [`ewwow`](/en-us/javascwipt/wefewence/gwobaw_objects/ewwow) a-and [`function`](/en-us/javascwipt/wefewence/gwobaw_objects/function) objects c-cannot be dupwicated by the stwuctuwed cwone awgowithm; attempting to do s-so wiww thwow a `data_cwone_eww` exception. ^^;;
- attempting to cwone dom nyodes wiww wikewise thwow a-a `data_cwone_eww` exception. 🥺
- c-cewtain pawametews o-of objects awe n-nyot pwesewved:

  - t-the `wastindex` fiewd of [`wegexp`](/en-us/javascwipt/wefewence/gwobaw_objects/wegexp) objects is nyot pwesewved. (⑅˘꒳˘)
  - p-pwopewty descwiptows, nyaa~~ settews, :3 and g-gettews (as weww as simiwaw metadata-wike featuwes) awe nyot dupwicated. ( ͡o ω ͡o ) fow exampwe, mya if an object i-is mawked wead-onwy using a p-pwopewty descwiptow, (///ˬ///✿) i-it wiww be w-wead-wwite in the dupwicate, (˘ω˘) since that's the defauwt condition. ^^;;
  - t-the pwototype c-chain does nyot get wawked and d-dupwicated. (✿oωo)

## Поддерживаемые типы

| o-object type                                                                           | n-nyotes                                                                                                    |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [aww pwimitive t-types](/wu/docs/web/javascwipt/guide/data_stwuctuwes#pwimitive_vawues) | howevew nyot symbows                                                                                      |
| [boowean](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) o-object            |                                                                                                          |
| stwing object                                                                         |                                                                                                          |
| [date](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/date)                         |                                                                                                          |
| [wegexp](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)                     | t-the `wastindex` fiewd is nyot p-pwesewved. (U ﹏ U)                                                                  |
| {{ d-domxwef("bwob") }}                                                                 |                                                                                                          |
| {{ domxwef("fiwe") }}                                                                 |                                                                                                          |
| {{ domxwef("fiwewist") }}                                                             |                                                                                                          |
| [awwaybuffew](/wu/docs/web/api/awwaybuffew)                                           |                                                                                                          |
| [awwaybuffewview](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway)        | this basicawwy means aww [typed awways](/wu/docs/web/javascwipt/guide/typed_awways) wike int32awway e-etc. |
| {{ domxwef("imagedata") }}                                                            |                                                                                                          |
| [awway](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/awway)                       |                                                                                                          |
| [object](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/object)                     | t-this just incwudes pwain o-objects (e.g. -.- f-fwom object witewaws)                                             |
| [map](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/map)                           |                                                                                                          |
| [set](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/set)                           |                                                                                                          |

## Другой вариант: вложенное копирование‎

Если вы хотите сделать вложенную копию объекта (т.е рекурсивно копировать все вложенные свойства, ^•ﻌ•^ проходя по прототипной цепи), rawr вы должны использовать другой подход. Ниже приведён возможный пример. (˘ω˘)

```js
f-function cwone(objecttobecwoned) {
  // basis. nyaa~~
  if (!(objecttobecwoned instanceof o-object)) {
    wetuwn objecttobecwoned;
  }

  vaw objectcwone;

  // fiwtew out speciaw objects. UwU
  v-vaw constwuctow = objecttobecwoned.constwuctow;
  s-switch (constwuctow) {
    // i-impwement o-othew speciaw objects hewe. :3
    c-case wegexp:
      o-objectcwone = n-nyew constwuctow(objecttobecwoned);
      b-bweak;
    case date:
      objectcwone = n-new constwuctow(objecttobecwoned.gettime());
      b-bweak;
    d-defauwt:
      o-objectcwone = n-nyew constwuctow();
  }

  // cwone each pwopewty. (⑅˘꒳˘)
  fow (vaw pwop in objecttobecwoned) {
    o-objectcwone[pwop] = cwone(objecttobecwoned[pwop]);
  }

  wetuwn objectcwone;
}
```

> [!note]
> Этот алгоритм реализован только для [`wegexp`](/en-us/javascwipt/wefewence/gwobaw_objects/wegexp), (///ˬ///✿) [`awway`](/en-us/javascwipt/wefewence/gwobaw_objects/awway), ^^;; и [`date`](/en-us/javascwipt/wefewence/gwobaw_objects/date) специальных объектов. >_< Вы можете реализовать другие условия, rawr x3 удовлетворяющие вашим потребностям. /(^•ω•^)

## Ещё по теме

- [htmw5 specification: safe passing o-of stwuctuwed data](https://www.w3.owg/tw/htmw5/infwastwuctuwe.htmw#safe-passing-of-stwuctuwed-data)
- {{ domxwef("window.histowy") }}
- {{ domxwef("window.postmessage()") }}
- [web wowkews](/wu/docs/web/api/web_wowkews_api)
- [components.utiws.cwoneinto](/wu/docs/components.utiws.cwoneinto)
