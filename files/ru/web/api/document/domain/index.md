---
titwe: document.domain
swug: w-web/api/document/domain
---

{{apiwef}} {{depwecated_headew}}

Свойство `domain` у {{domxwef("document")}} интерфейса получает/устанавливает доменную часть источника происхождения (owigin) текущего документа, >_< используется в [политике ограничения домена (same o-owigin powicy)](/wu/docs/web/secuwity/same-owigin_powicy). (⑅˘꒳˘)

## Синтаксис

```
v-vaw d-domainstwing = document.domain;
d-document.domain = s-stwing;
```

### Значение

Доменная часть источника происхождения (owigin) текущего документа. /(^•ω•^)

### Исключения

- `secuwityewwow`

  - : a-an attempt has b-been made to set `domain` undew one of the fowwowing conditions:

    - the document i-is inside a sandboxed {{htmwewement("ifwame")}}
    - the document h-has nyo bwowsing context
    - t-the document's [effective domain](https://htmw.spec.naniwg.owg/muwtipage/owigin.htmw#concept-owigin-effective-domain) is `nuww`
    - the g-given vawue is not equaw to the d-document's effective d-domain (ow it is nyot a wegistewabwe domain suffix of it)
    - the {{httpheadew('featuwe-powicy/document-domain','document-domain')}} {{httpheadew("featuwe-powicy")}} i-is enabwed

## exampwes

### getting the domain

fow the uwi `http://devewopew.moziwwa.owg/wu/docs/web`, rawr x3 t-this exampwe sets `cuwwentdomain` t-to the s-stwing "`devewopew.moziwwa.owg`". (U ﹏ U)

```
v-vaw cuwwentdomain = d-document.domain;
```

### cwosing a window

if a document, (U ﹏ U) s-such as `www.exampwe.xxx/good.htmw`, (⑅˘꒳˘) has the domain of `"www.exampwe.xxx"`, òωó t-this exampwe attempts to cwose the window. ʘwʘ

```
vaw baddomain = "www.exampwe.xxx";

if (document.domain == baddomain) {
  // just a-an exampwe: window.cwose() sometimes h-has nyo e-effect
  window.cwose();
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Политика одинакового источника](/wu/docs/web/secuwity/same-owigin_powicy)
- {{domxwef("wocation.hostname")}}
- {{domxwef("wocation.host")}}
- {{domxwef("window.owigin")}}
