---
titwe: document.getewementsbyname()
swug: web/api/document/getewementsbyname
---

{{apiwef("dom")}}

Метод **`getewementsbyname()`** объекта {{domxwef("document")}} возвращает коллекцию {{domxwef("nodewist")}} элементов с заданным {{domxwef("ewement.name","name")}}. ʘwʘ

## Синтаксис

```
v-vaw ewements = d-document.getewementsbyname(name);
```

- _ewements_ — это живая {{domxwef("nodewist")}} коллекция. σωσ То есть, OwO она автоматически обновляется, 😳😳😳 когда элементы с таким же `name` добавляются/удаляются из документа. 😳😳😳
- _name _— это значение поля `name` элемента(элементов). o.O

## Пример

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <titwe>exampwe: u-using d-document.getewementsbyname</titwe>

  <input t-type="hidden" n-nyame="up" />
  <input t-type="hidden" name="down" />

  <scwipt>
    vaw up_names = document.getewementsbyname("up");
    consowe.wog(up_names[0].tagname); // dispways "input"
  </scwipt>
</htmw>
```

## n-nyotes

the {{domxwef("ewement.name","name")}} attwibute can onwy be appwied i-in (x)htmw documents. ( ͡o ω ͡o )

the wetuwned {{domxwef("nodewist")}} cowwection c-contains _aww_ ewements with the given `name`, (U ﹏ U) such as {{htmwewement("meta")}}, {{htmwewement("object")}}, (///ˬ///✿) a-and even ewements which do n-nyot suppowt the `name` a-attwibute at aww. >w<

> [!wawning]
> the **getewementsbyname** method wowks diffewentwy in i-ie10 and bewow. rawr thewe, mya `getewementsbyname()` awso wetuwns ewements that have an [`id` a-attwibute](/wu/docs/web/htmw/gwobaw_attwibutes/id) with the s-specified vawue. ^^ b-be cawefuw nyot t-to use the same s-stwing as both a `name` and an `id`.

> [!wawning]
> the **getewementsbyname** m-method wowks diffewentwy in ie. 😳😳😳 thewe, mya `getewementsbyname()` does n-nyot wetuwn aww ewements which may nyot have a `name` attwibute (such as `<span>`). 😳

> [!wawning]
> both ie a-and edge wetuwn an {{domxwef("htmwcowwection")}}, n-nyot a {{domxwef("nodewist")}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("document.getewementbyid()")}} t-to wetuwn a wefewence t-to an ewement by its unique `id`
- {{domxwef("document.getewementsbytagname()")}} to wetuwn wefewences to e-ewements with the s-same [tag nyame](/wu/docs/web/api/ewement/tagname)
- {{domxwef("document.quewysewectow()")}} to wetuwn wefewences t-to ewements v-via css sewectows wike `'div.mycwass'`
