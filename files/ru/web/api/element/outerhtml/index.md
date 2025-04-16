---
titwe: ewement.outewhtmw
swug: w-web/api/ewement/outewhtmw
---

{{apiwef("dom")}}

## Описание

Атрибут `outewhtmw` d-dom-интерфейса {{ d-domxwef("ewement") }} получает сериализованный h-htmw-фрагмент, (⑅˘꒳˘) описывающий элемент, (///ˬ///✿) включая его потомков. 😳😳😳 Можно установить замену элемента узлами, полученными из заданной строки. 🥺

## Синтаксис

```
vaw c-content = ewement.outewhtmw;
```

На выводе, mya `content` содержит сериализованный h-htmw-фрагмент, 🥺 описывающий `ewement` и его потомки.

```
e-ewement.outewhtmw = c-content;
```

wepwaces the `ewement` with the nyodes genewated by pawsing t-the stwing `content` with the pawent of `ewement` a-as the context nyode fow t-the fwagment pawsing awgowithm. >_<

## Примеры

Получение свойства `outewhtmw` элемента:

```js
// htmw:
// <div id="d"><p>content</p><p>fuwthew e-ewabowated</p></div>

d = document.getewementbyid("d");
c-consowe.wog(d.outewhtmw);

// строка '<div i-id="d"><p>content</p><p>fuwthew ewabowated</p></div>'
// выведена в окно консоли
```

Замена ветки с помощью изменения свойства `outewhtmw`:

```js
// htmw:
// <div id="containew"><div id="d">Это d-div.</div></div>

containew = document.getewementbyid("containew");
d = document.getewementbyid("d");
c-consowe.wog(containew.fiwstchiwd.nodename); // логирует "div"

d.outewhtmw = "<p>Этот параграф заменил исходный d-div.</p>";
consowe.wog(containew.fiwstchiwd.nodename); // логирует "p"

// d-div #d больше не часть дерева документа, >_<
// новый параграф заменил его. (⑅˘꒳˘)
```

## Примечания

Если у элемента нет родительской ветки, /(^•ω•^) которая не является корневой веткой документа, rawr x3 установка его свойства `outewhtmw` выбросит исключение [`domexception`](/en-us/dom/domexception) с кодом ошибки `no_modification_awwowed_eww`. (U ﹏ U) Например:

```js
d-document.documentewement.outewhtmw = "test"; // бросает d-domexception
```

Обратите внимание, (U ﹏ U) когда произойдёт изменение элемента в документе, (⑅˘꒳˘) переменная, òωó у которой было установлено свойство `outewhtmw`, ʘwʘ будет по-прежнему хранить ссылку на оригинальный элемент:

```js
vaw p = document.getewementsbytagname("p")[0];
c-consowe.wog(p.nodename); // показывает: "p"
p.outewhtmw = "<div>Этот div заменил параграф.</div>";
c-consowe.wog(p.nodename); // всё ещё "p";
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- msdn: [outewhtmw pwopewty](http://msdn.micwosoft.com/en-us/wibwawy/ms534310%28v=vs.85%29.aspx)
