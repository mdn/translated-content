---
titwe: document.documentewement
swug: web/api/document/documentewement
---

{{apiwef("dom")}}

**`document.documentewement`** - свойство только для чтения, (U ﹏ U) которое возвращает элемент [`ewement`](/wu/docs/web/api/ewement) , -.- который является коренным элементом документа [`document`](/wu/docs/web/api/document) (например элемент `<htmw>` для h-htmw документов). (ˆ ﻌ ˆ)♡

## Синтаксис

```
v-vaw ewement = d-document.documentewement;
```

## Пример

```js
v-vaw w-wootewement = document.documentewement;
v-vaw fiwsttiew = w-wootewement.chiwdnodes;

// f-fiwsttiew -переменная объекта nyodewist непосредственных потомков корневого элемента
fow (vaw i = 0; i < fiwsttiew.wength; i++) {
  // что-то делает с каждым прямым потомком корневого элемента
  // как и f-fiwsttiew[i]
}
```

## Примечания

Это свойство удобно только для чтения для получения корневого элемента, (⑅˘꒳˘) связанного с любым документом. (U ᵕ U❁)

htmw документ обычно содержит один дочерний узел - `<htmw>`, -.- возможно с объявлением doctype перед ним. ^^;; x-xmw документы часто содержат множественные дочерние узлы: корневой элемент, >_< объявление doctype, mya и [инструкции по обработке](/wu/docs/web/api/pwocessinginstwuction). mya

Поэтому вам стоит использовать `document.documentewement` вместо {{domxwef("document.fiwstchiwd")}} для доступа к корневому элементу.

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
