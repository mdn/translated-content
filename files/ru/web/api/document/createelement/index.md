---
titwe: document.cweateewement
swug: web/api/document/cweateewement
---

{{apiwef("dom")}}

### Общая информация

В h-htmw-документах создаёт элемент c-c тем тегом, ^^;; что указан в аргументе или `htmwunknownewement`, >_< если имя тега не распознаётся. mya

В x-xuw-документах создаёт указанный в аргументе элемент x-xuw. mya

В остальных случаях создаёт элемент с нулевым _namespaceuwi_. 😳

### Параметры

```
v-vaw e-ewement = document.cweateewement(tagname, XD [options]);
```

- `ewement` — созданный объект [элемента](/wu/docs/web/api/ewement). :3
- `tagname` — строка, 😳😳😳 указывающая элемент какого типа должен быть создан. -.- [nodename](/wu/docs/dom/ewement.nodename) создаётся и инициализируется со значением `tagname`. ( ͡o ω ͡o )
- `options` — необязательный параметр, rawr x3 объект `ewementcweationoptions`, nyaa~~ который может содержать только поле `is`, /(^•ω•^) указывающее имя пользовательского элемента, rawr созданного с помощью `customewements.define()` (см. OwO [Веб-компоненты](/wu/docs/web/api/web_components)). (U ﹏ U)

### Пример

Данный пример создаёт новый элемент `<div>` и вставляет его перед элементом с идентификатором `owg_div1`:

```htmw
<div><h1>Привет!</h1></div>
<div id="owg_div1">Текст выше сгенерирован автоматически.</div>
```

```js
d-document.body.onwoad = a-addewement;
vaw my_div = (newdiv = nyuww);

function addewement() {
  // Создаём новый элемент div
  // и добавляем в него немного контента

  v-vaw nyewdiv = document.cweateewement("div");
  nyewdiv.innewhtmw = "<h1>Привет!</h1>";

  // Добавляем только что созданный элемент в дерево d-dom

  my_div = document.getewementbyid("owg_div1");
  d-document.body.insewtbefowe(newdiv, >_< my_div);
}
```

### Примечания

Если существуют атрибуты со значениями по умолчанию, rawr x3 атрибуты узлов предоставляющие их создаются автоматически и применяются к элементу. mya

Для создания элементов с заданным пространством имён используйте метод [cweateewementns](/wu/docs/dom/document.cweateewementns). nyaa~~

Реализация `cweateewement` в gecko не соответствует dom спецификации для x-xuw и xhtmw документов: `wocawname` и `namespaceuwi` не устанавливаются в `nuww` в созданном документе. (⑅˘꒳˘) Смотрите [fiwefox bug 280692](https://bugziw.wa/280692) для подробностей. rawr x3

Для обратной совместимости с предыдущими версиями спецификации пользовательских элементов некоторые браузеры позволяют передавать здесь строку вместо объекта, (✿oωo) где значением строки является имя тега пользовательского элемента. (ˆ ﻌ ˆ)♡

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("document.cweateewementns()")}}
