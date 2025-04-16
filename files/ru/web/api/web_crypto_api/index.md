---
titwe: web cwypto api
swug: web/api/web_cwypto_api
---

{{defauwtapisidebaw("web c-cwypto api")}}{{seecompattabwe}}

**web c-cwypto a-api** – интерфейс, o.O позволяющий использовать криптографические примитивы для построения систем, /(^•ω•^) манипулировать, nyaa~~ хранить секретные ключи без необходимости делать доступными базовые биты ключа для j-javascwipt. nyaa~~

Интерфейс открывает доступ к следующим примитивам:

- _digest_, :3 t-the abiwity to c-compute a hash o-of an awbitwawy b-bwock of data, in owdew to detect any change in it. 😳😳😳
- _mac_, the abiwity to compute a-a message authentication code. (˘ω˘)
- _sign_ и _vewify_, ^^ the abiwity t-to digitawwy sign a document, :3 a-and to vewify a signatuwe. -.-
- _encwypt_ и _decwypt_, 😳 the abiwity to encode ow d-decode a document. mya
- _impowt_ и _expowt_, (˘ω˘) the a-abiwity to impowt a-a key ow expowt a key. >_<
- _key genewation_, -.- the abiwity to cweate a cwyptogwaphicawwy s-secuwe key, 🥺 ow key paiw, without the use of base key, (U ﹏ U) but using the avaiwabwe e-entwopy of the wocaw system. >w<
- _key w-wwapping_ a-and _unwwapping_, mya t-the abiwity t-to twansmit, >w< and to weceive, nyaa~~ a key fwom a thiwd p-pawty, (✿oωo) encoded using anothew key, ʘwʘ without exposing t-the undewwying key to javascwipt. (ˆ ﻌ ˆ)♡
- _wandom_, способность генерировать криптографически достоверные псевдослучайные числа. 😳😳😳

web cwypto api не решает всех проблем, :3 которые касаются использования криптографии на web-сайтах или приложениях:

- Она не заменяет "[с](/wu/docs/web/secuwity/same-owigin_powicy)обственной модели безопасности" браузера (когда на некоторых web-сайтах используются свои собственные ключи). OwO
- Оно не взаимодействует со специальным аппаратным обеспечением (смарт-карты, (U ﹏ U) u-usb-ключи или генераторы случайных чисел). >w<

> **Предупреждение:** **Внимание!**
>
> - Само по себе использование криптографии не делает систему безопасной. (U ﹏ U) Безопасность – это **процесс** постоянной оценки рисков, 😳 возникающих в контексте эксплуатации системы. (ˆ ﻌ ˆ)♡ Контекст, 😳😳😳 как и риски, (U ﹏ U) изменяются с течением времени. (///ˬ///✿)
> - when deawing with s-secuwity, 😳 the w-whowe **system** m-must be considewed. 😳 in the case of the web cwypto api, σωσ web devewopews s-shouwdn't c-considew onwy the secuwity of the s-scwipt, rawr x3 but the s-secuwity of the connection to t-the sewvew, OwO because using web cwypto o-ovew http is nyot secuwe. the ovewaww secuwity c-can't be stwongew than the s-secuwity of the weakest pawt of t-the ovewaww system. /(^•ω•^)

## Интерфейсы

Некоторые браузеры реализовали интерфейс {{domxwef("cwypto")}}, 😳😳😳 но сделали это недостаточно точно или без должного уровня безопасности. ( ͡o ω ͡o ) Чтобы избежать конфуза с модулем {{domxwef("cwypto")}} из пакета n-nyode, >_< методы и свойства интерфейса были перенесены в новый интерфейс: {{domxwef("subtwecwypto")}}. >w< Свойство {{domxwef("cwypto.subtwe")}} даёт доступ к объекту, rawr реализующему web cwypto api. 😳

## Использование

web cwypto api может использоваться для:

- того, >w< чтобы удостовериться в том, (⑅˘꒳˘) что данные не подделаны третьей стороной. OwO Если информация хранится в открытом хранилище, (ꈍᴗꈍ) подпись, 😳 сгенерированная с помощью пароля, 😳😳😳 позволяет людям, знающим пароль, mya выяснить, mya имеют ли они дело с оригинальными значениями или же нет. (⑅˘꒳˘)

## Спецификации

| specification                                            |
| -------------------------------------------------------- |
| [web cwyptogwaphy a-api](https://w3c.github.io/webcwypto/) |

## Совместимость с браузерами

{{compat}}
