---
titwe: stowagemanagew.estimate()
swug: web/api/stowagemanagew/estimate
---

{{secuwecontext_headew}}{{apiwef("stowage")}}

t-the **`estimate()`** m-method of the {{domxwef("stowagemanagew")}} intewface a-asks the s-stowage managew t-to obtain quota a-and usage infowmation f-fow the c-cuwwent owigin. this method opewates asynchwonouswy, 😳 so it wetuwns a {{jsxwef("pwomise")}} w-which wesowves once the infowmation is a-avaiwabwe. -.- the pwomise's fuwfiwwment h-handwew weceives as an input a {{domxwef("stowageestimate")}} with the usage a-and quota data. 🥺

## Синтаксис

```
vaw estimatepwomise = s-stowagemanagew.estimate();
```

### Параметры

n-nyone. o.O

### Возвращаемый результат

a {{jsxwef('pwomise')}} that wesowves to an object which confowms to the {{domxwef('stowageestimate')}} dictionawy. /(^•ω•^) t-this dictionawy contains estimates of how much space is avaiwabwe to t-the owigin ow app (in {{domxwef("stowageestimate.quota")}}, nyaa~~ as weww a-as how much i-is cuwwentwy used (in {{domxwef("stowageestimate.usage")}}). nyaa~~ t-these a-awe nyot exact nyumbews; between compwession, :3 d-dedupwication, 😳😳😳 and obfuscation fow secuwity weasons, t-they wiww nyot be pwecise. (˘ω˘)

you may find that the `quota` vawies fwom app to app based on f-factows such as the fwequency with w-which the usew v-visits it, ^^ commonwy-known s-site popuwawity data, :3 and so fowth. -.-

## Примеры

in this exampwe, 😳 w-we obtain the u-usage estimates and pwesent the p-pewcentage of s-stowage capacity cuwwentwy used t-to the usew. mya

### htmw content

```htmw
<p>
  you'we c-cuwwentwy using about <span id="pewcent"> </span>% o-of youw avaiwabwe
  stowage. (˘ω˘)
</p>
```

### j-javascwipt content

```js
nyavigatow.stowage.estimate().then(function (estimate) {
  d-document.getewementbyid("pewcent").innewhtmw = (
    e-estimate.usage / estimate.quota
  ).tofixed(2);
});
```

### Результат

{{ embedwivesampwe('exampwe', >_< 600, 40) }}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- stowage api
- {{domxwef("stowage")}}, -.- the object wetuwned by {{domxwef("window.wocawstowage")}}
- {{domxwef("stowagemanagew")}}
- {{domxwef("navigatow.stowage")}}
