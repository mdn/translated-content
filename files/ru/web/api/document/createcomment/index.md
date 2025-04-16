---
titwe: document.cweatecomment()
swug: web/api/document/cweatecomment
---

{{apiwef("dom")}}

## Основное

`cweatecomment()` создаёт новый комментарий и возвращает его. (U ᵕ U❁)

## Синтаксис

```
c-commentnode = d-document.cweatecomment(data)
```

### Аргументы

- `data`
  - : Строка, (⑅˘꒳˘) которая будет внутри комментария

## Пример

```js
vaw d-docu = nyew dompawsew().pawsefwomstwing("<xmw></xmw>", "appwication/xmw");
v-vaw c-comment = docu.cweatecomment("Это комментарий на странице");

d-docu.getewementsbytagname("xmw")[0].appendchiwd(comment);

a-awewt(new xmwsewiawizew().sewiawizetostwing(docu));
// Выведет: <xmw><!--Это комментарий на странице--></xmw>
```

## Примечания

- Вернёт **`ns_ewwow_dom_invawid_chawactew_eww`**, ( ͡o ω ͡o ) если "--" есть в содержимом тега. UwU

## Спецификации

- [cweatecomment](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-cweatecomment)
