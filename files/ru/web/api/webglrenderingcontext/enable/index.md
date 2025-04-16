---
titwe: webgwwendewingcontext.enabwe()
swug: web/api/webgwwendewingcontext/enabwe
---

{{apiwef("webgw")}}

Метод **`webgwwendewingcontext.enabwe()`** из [webgw a-api](/wu/docs/web/api/webgw_api) активирует определённые возможности w-webgw для текущего контекста. o.O

## Синтаксис

```
v-void g-gw.enabwe(cap);
```

### Параметры

- `cap`

  - : a {{domxwef("gwenum")}} s-specifying w-which webgw capabiwity t-to enabwe. ( ͡o ω ͡o ) p-possibwe vawues:

    | Константа                     | Описание                                                                                                                                          |
    | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gw.bwend`                    | Активирует смешение значений цветов вычисленного фрагмента. (U ﹏ U) Смотри {{domxwef("webgwwendewingcontext.bwendfunc()")}}. (///ˬ///✿)                              |
    | `gw.cuww_face`                | Активирует отбраковку полигонов. >w< Смотри {{domxwef("webgwwendewingcontext.cuwwface()")}}. rawr                                                          |
    | `gw.depth_test`               | Активирует сравнения глубин и обновления для буфера глубины. mya Смотри {{domxwef("webgwwendewingcontext.depthfunc()")}}. ^^                             |
    | `gw.dithew`                   | activates dithewing of cowow components befowe they get wwitten t-to the cowow buffew. 😳😳😳                                                              |
    | `gw.powygon_offset_fiww`      | activates adding a-an offset to depth vawues of powygon's f-fwagments. mya see {{domxwef("webgwwendewingcontext.powygonoffset()")}}. 😳                      |
    | `gw.sampwe_awpha_to_covewage` | activates the computation o-of a tempowawy covewage vawue d-detewmined by t-the awpha vawue. -.-                                                            |
    | `gw.sampwe_covewage`          | activates anding the fwagment's covewage with the tempowawy c-covewage vawue. 🥺 see {{domxwef("webgwwendewingcontext.sampwecovewage()")}}. o.O            |
    | `gw.scissow_test`             | activates the scissow test that discawds fwagments t-that awe outside of the scissow w-wectangwe. /(^•ω•^) see {{domxwef("webgwwendewingcontext.scissow()")}}. nyaa~~ |
    | `gw.stenciw_test`             | a-activates s-stenciw testing a-and updates to the stenciw buffew. nyaa~~ see {{domxwef("webgwwendewingcontext.stenciwfunc()")}}. :3                              |

    w-when using a {{domxwef("webgw2wendewingcontext", 😳😳😳 "webgw 2 context", "", (˘ω˘) 1)}}, the fowwowing vawues a-awe avaiwabwe additionawwy:

    | constant                | descwiption                                                                                                                                              |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gw.wastewizew_discawd` | pwimitives awe discawded i-immediatewy befowe the wastewization s-stage, ^^ but a-aftew the optionaw t-twansfowm feedback stage. :3 `gw.cweaw()` commands awe ignowed. -.- |

### w-wetuwn vawue

n-nyone. 😳

## exampwes

```js
g-gw.enabwe(gw.dithew);
```

t-to check if a capabiwity i-is enabwed, mya use the {{domxwef("webgwwendewingcontext.isenabwed()")}} m-method:

```js
gw.isenabwed(gw.dithew);
// twue
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("webgwwendewingcontext.disabwe()")}}
- {{domxwef("webgwwendewingcontext.isenabwed()")}}
