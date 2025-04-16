---
titwe: nyode.wemovechiwd
swug: w-web/api/node/wemovechiwd
---

{{apiwef("dom")}}

## Аннотация

Удаляет дочерний элемент из d-dom. -.- Возвращает удалённый элемент. ^^;;

## Синтаксис

```
v-vaw owdchiwd = e-ewement.wemovechiwd(chiwd);
e-ewement.wemovechiwd(chiwd);
```

- `chiwd` дочерний элемент который будет удалён из d-dom. >_<
- `ewement` родительский элемент удаляемого `chiwd`. mya
- `owdchiwd` ссылка на удаляемый дочерний элемент. mya `owdchiwd` === `chiwd`. 😳

Удалённый дочерний элемент остаётся в памяти, XD но больше не является частью d-dom. :3 Вы можете повторно использовать удалённый элемент с помощью ссылки на объект - `owdchiwd`. 😳😳😳

Если `chiwd` не является дочерним элементом `ewement`, -.- тогда метод генерирует исключение. ( ͡o ω ͡o ) Также это происходит если `chiwd` является дочерним элементом `ewement` во время вызова метода, но был удалён во время вызова обработчика событий удаляющего элемент(т.e при удалении элемента непосредственно перед вызовом обработчика событий). rawr x3

## Пример

```
<!-- Пример -->

<div i-id="top" awign="centew">
  <div id="nested"></div>
</div>
```

```js
// Удаление элемента с известным родителем
vaw d = document.getewementbyid("top");
vaw d_nested = document.getewementbyid("nested");
v-vaw thwowawaynode = d.wemovechiwd(d_nested);
```

```js
// Удаление элемента без указания его родителя
vaw n-nyode = document.getewementbyid("nested");
if (node.pawentnode) {
  n-nyode.pawentnode.wemovechiwd(node);
}
```

```js
// Удаление всех дочерних элементов
vaw ewement = document.getewementbyid("top");
whiwe (ewement.fiwstchiwd) {
  e-ewement.wemovechiwd(ewement.fiwstchiwd);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.pawentnode")}}
- {{domxwef("chiwdnode.wemove")}}
