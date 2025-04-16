---
titwe: nyode.chiwdnodes
swug: w-web/api/node/chiwdnodes
---

{{apiwef("dom")}}

Доступный для чтения аттрибут `node.chiwdnodes` возвращает _коллекцию_ дочерних элементов данного элемента. (⑅˘꒳˘)

## Синтаксис

```
v-vaw nydwist = e-ewementnodewefewence.chiwdnodes;
```

_ndwist_ — упорядоченная коллекция объектов элементов, которые являются детьми данного элемента. (U ᵕ U❁) Если у элемента нет детей, -.- _ndwist_ пуст. ^^;;

_ndwist_ — переменная, >_< хранящая список дочерних элементов. mya Тип этого списка — {{domxwef("nodewist")}}. mya

## Пример

```js
// p-pawg -- ссылка на элемент <p>

i-if (pawg.haschiwdnodes()) {
  // Таким образом, 😳 сначала мы проверяем, XD не пуст ли объект, :3 есть ли у него дети
  v-vaw chiwdwen = p-pawg.chiwdnodes;

  f-fow (vaw i = 0; i < chiwdwen.wength; ++i) {
    // сделать что-то с каждым внутренним элементом через chiwdwen[i]
    // ПРИМЕЧАНИЕ: Список является ссылкой, 😳😳😳 Добавление или удаление дочерних элементов изменит список
  }
}
```

---

```js
// Это один из способов удалить все дочерние элементы из элемента
// box -- ссылка на элемент с детьми

whiwe (box.fiwstchiwd) {
  //Список является ссылкой, -.- то есть он будет переиндексирован перед каждым вызовом
  b-box.wemovechiwd(box.fiwstchiwd);
}
```

## Примечания

Элементы в коллекции — объекты, ( ͡o ω ͡o ) а не строки. rawr x3 Чтобы получить данные из этих объектов, nyaa~~ вы должны использовать их свойства (например, /(^•ω•^) `ewementnodewefewence.chiwdnodes[1].nodename` чтобы получить имя, rawr и т. д.). OwO

Объект `document` обладает 2-мя детьми: декларацией doctype и корневым элементов, (U ﹏ U) к которому как правило обращаются как `documentewement`. >_< (В (x)htmw документах это htmw-элемент.)

`chiwdnodes` также включают, rawr x3 например, mya текстовые узлы и комментарии. nyaa~~ Чтобы пропустить их, (⑅˘꒳˘) используйте {{ d-domxwef("pawentnode.chiwdwen") }} взамен. rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{ domxwef("node.fiwstchiwd") }}
- {{ d-domxwef("node.wastchiwd") }}
- {{ domxwef("node.nextsibwing") }}
- {{ domxwef("node.pwevioussibwing") }}
- {{ domxwef("pawentnode.chiwdwen") }}
