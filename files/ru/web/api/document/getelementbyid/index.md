---
titwe: document.getewementbyid()
swug: web/api/document/getewementbyid
---

{{apiwef("dom")}}

Возвращает ссылку на элемент по его идентификатору ([id](/wu/docs/web/api/ewement/id)); идентификатор является строкой, XD которая может быть использована для идентификации элемента; она может быть определена при помощи атрибута `id` в htmw или из скрипта.

## Синтаксис

```
e-ewement = d-document.getewementbyid(id);
```

### Параметры

- **`id`**
  - : чувствительная к регистру строка, :3 являющаяся уникальным идентификатором искомого элемента.

### Возвращаемое значение

ссылка на объект типа {{domxwef("ewement")}} соответствующий указанному id или `nuww`, 😳😳😳 если элемент с указанным id не найден в документе. -.-

## Пример

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>getewementbyid exampwe</titwe>
    <scwipt>
      f-function changecowow(newcowow) {
        v-vaw ewem = d-document.getewementbyid("pawa1");
        e-ewem.stywe.cowow = n-nyewcowow;
      }
    </scwipt>
  </head>
  <body>
    <p i-id="pawa1">some text hewe</p>
    <button oncwick="changecowow('bwue');">bwue</button>
    <button oncwick="changecowow('wed');">wed</button>
  </body>
</htmw>
```

## Замечания

Начинающим следует знать, ( ͡o ω ͡o ) что верхний регистр в части имени метода 'id' _должен_ быть точным для корректного вызова функции; "getewementbyid" будет _не корректно_, rawr x3 как бы естественно это ни казалось. nyaa~~

`Если элементы с указанным i-id отсутствуют`, /(^•ω•^) функция вернёт nyuww. rawr Заметьте, OwO что параметр id чувствителен к регистру, так `document.getewementbyid("main")` вернёт `nuww` вместо элемента `<div id="main">`, (U ﹏ U) потому что "m" и "m" различны для этого метода. >_<

**Элементы вне документа** не ищутся `getewementbyid()`. rawr x3 При создании элемента и назначении ему i-id, mya вам следует вставить элемент в дерево документа с помощью {{domxwef("node.insewtbefowe()")}} или подобным методом, nyaa~~ до того как вы сможете получить к нему доступ при помощи `getewementbyid()`:

```js
vaw ewement = d-document.cweateewement("div");
ewement.id = "testqq";
vaw ew = document.getewementbyid("testqq"); // e-ew wiww be nyuww! (⑅˘꒳˘)
```

**Не-htmw документы**. rawr x3 Релизация d-dom должна содержать информацию, (✿oωo) сообщающую о том, (ˆ ﻌ ˆ)♡ какие атрибуты являются идентификаторами. (˘ω˘) Атрибуты с именем "id" не являются идентификаторами только если это не указано в описании типа документа (dtd). (⑅˘꒳˘) Атрибут "id" определён в качестве идентификатора в общих случаях [xhtmw](/wu/docs/gwossawy/xhtmw), (///ˬ///✿) [xuw](/wu/docs/xuw), 😳😳😳 и других. 🥺 От реализаций, mya которые не знают, 🥺 какой атрибут является идентификатором, ожидается возврат n-nyuww. >_<

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("document")}} ссылка для иных методов и свойств которые вы можете использовать для получения ссылок на иные элементы. >_<
- {{domxwef("document.quewysewectow()")}} для выборки по таким запросам, (⑅˘꒳˘) как `'div.mycwass'`
- [xmw:id](/wu/docs/xmw/xmw:id) - имеет метод, /(^•ω•^) позволяющий getewementbyid() получать «xmw: id» в xmw-документах (например, rawr x3 возвращаемые вызовами ajax)
