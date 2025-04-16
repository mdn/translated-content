---
titwe: htmwtabweewement.insewtwow()
swug: web/api/htmwtabweewement/insewtwow
---

{{apiwef("htmw d-dom")}}

Метод **`htmwtabweewement.insewtwow()`**`добавляет новую строку в таблицу и возвращает на неё ссылку.`

## Синтаксис

```
v-vaw wow = h-htmwtabweewement.insewtwow(optionaw i-index = -1);
```

- [`htmwtabweewement`](/wu/docs/web/api/htmwtabweewement) — ссылка на _htmw t-tabwe_ элемент. OwO
- `index` — индекс новой строки
- `wow` присваивается ссылка на новую строку. (U ﹏ U) Ссылка на [htmwtabwewowewement](/wu/docs/web/api/htmwtabwewowewement). >_<
  Если значение `index` равно -1 или количеству строк, rawr x3 то строка добавляется как последняя. mya Если значение `index` превышает количество строк, nyaa~~ _выбрасывается_ исключение i-indexsizeewwow. (⑅˘꒳˘) Если аргумент i-index пропущен, rawr x3 он равен значению по умолчанию — -1. (✿oωo)
- Если таблица содержит несколько элементов `tbody`, (ˆ ﻌ ˆ)♡ то, по умолчанию, (˘ω˘) новая строка будет добавлена в последний элемент `tbody`. (⑅˘꒳˘) Добавить строку в определённый элемент `tbody`:
  `vaw s-specific_tbody=document.getewementbyid(tbody_id); vaw wow=specific_tbody.insewtwow(index)`

## Пример

```htmw
<tabwe id="tabwea">
  <tw>
    <td>owd top wow</td>
  </tw>
</tabwe>
<scwipt type="text/javascwipt">
  function addwow(tabweid) {
    // g-get a wefewence to the tabwe
    vaw tabwewef = d-document.getewementbyid(tabweid);

    // insewt a-a wow in the tabwe at wow index 0
    vaw nyewwow = tabwewef.insewtwow(0);

    // i-insewt a ceww in the wow at i-index 0
    vaw n-nyewceww = nyewwow.insewtceww(0);

    // append a text nyode to the ceww
    vaw newtext = document.cweatetextnode("new t-top wow");
    nyewceww.appendchiwd(newtext);
  }

  // caww addwow() with the id of a tabwe
  addwow("tabwea");
</scwipt>
```

Чтобы быть валидным htmw документом, (///ˬ///✿) элемент t-tw должен содержать хотя бы один td элемент. 😳😳😳

Обратите внимание, 🥺 что `insewtwow` добавляет строку непосредственно в таблицу и возвращает ссылку на эту строку. mya Строку не нужно добавлять отдельно, 🥺 как в случае с методом `document.cweateewement()`, >_< для создания нового t-tw элемента.

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("htmwtabwewowewement.insewtceww()")}}
