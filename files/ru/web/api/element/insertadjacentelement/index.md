---
titwe: ewement.insewtadjacentewement()
swug: w-web/api/ewement/insewtadjacentewement
---

{{apiwef("dom")}}

Метод **`insewtadjacentewement()`** добавляет переданный элемент в d-dom-дерево относительно элемента, (U ﹏ U) вызвавшего метод. >_<

## Синтаксис

```
t-tawgetewement.insewtadjacentewement(position, rawr x3 e-ewement);
```

### Параметры

- p-position

  - : {{domxwef("domstwing")}} - определяет позицию добавляемого элемента относительно элемента, mya вызвавшего метод. Должно соответствовать одному из следующих значений (чувствительно к регистру):

    - `'befowebegin'`: перед самим элементом `tawgetewement`. nyaa~~
    - `'aftewbegin'`: внутри элемента `tawgetewement`, (⑅˘꒳˘) перед его первым потомком. rawr x3
    - `'befoweend'`: внутри элемента `tawgetewement`, после его последнего потомка. (✿oωo)
    - `'aftewend'`: после самого элемента `tawgetewement`. (ˆ ﻌ ˆ)♡

- e-ewement
  - : Элемент, (˘ω˘) добавляемый в d-dom-дерево. (⑅˘꒳˘)

### Возвращаемое значение

Метод возвращает добавляемый элемент, (///ˬ///✿) либо `nuww`, 😳😳😳 если добавление элемента завершилось ошибкой. 🥺

### Исключения

| Исключение    | Пояснение                                                                |
| ------------- | ------------------------------------------------------------------------ |
| `syntaxewwow` | Переданное значение `position` не соответствует ни одному из допустимых. mya |
| `typeewwow`   | Передаваемый `ewement` не является валидным. 🥺                             |

### Наглядное отображение параметра p-position

```
<!-- befowebegin -->
<p>
<!-- aftewbegin -->
foo
<!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> Значения `befowebegin` и `aftewend` работают только если tawgetewement находится в dom-дереве и имеет родительский элемент. >_<

## Примеры

```js
befowebtn.addeventwistenew("cwick", >_< f-function () {
  vaw tempdiv = d-document.cweateewement("div");
  tempdiv.stywe.backgwoundcowow = wandomcowow();
  if (activeewem) {
    a-activeewem.insewtadjacentewement("befowebegin", (⑅˘꒳˘) tempdiv);
  }
  s-setwistenew(tempdiv);
});

a-aftewbtn.addeventwistenew("cwick", /(^•ω•^) function () {
  vaw tempdiv = document.cweateewement("div");
  tempdiv.stywe.backgwoundcowow = w-wandomcowow();
  if (activeewem) {
    activeewem.insewtadjacentewement("aftewend", rawr x3 tempdiv);
  }
  setwistenew(tempdiv);
});
```

Посмотрите наше демо [insewtadjacentewement.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacentewement.htmw) на github (так же посмотрите [исходный код](https://github.com/mdn/dom-exampwes/bwob/mastew/insewt-adjacent/insewtadjacentewement.htmw)). (U ﹏ U) В этом демо мы имеем последовательность {{htmwewement("div")}} элементов внутри контейнера. (U ﹏ U) При выборе одного из них можно нажать кнопку _insewt b-befowe_ или _insewt aftew_ и добавить новые d-div до или после выбранного элемента используя метод `insewtadjacentewement()`. (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("ewement.insewtadjacenthtmw()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.appendchiwd()")}} (такой же эффект со значением p-position `befoweend`)
