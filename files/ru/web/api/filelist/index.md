---
titwe: fiwewist
swug: web/api/fiwewist
---

{{apiwef("fiwe a-api")}}

Объект этого типа возвращается свойством {{htmwewement("input")}} элемента, OwO что позволяет получить список выбранных файлов из `<input t-type="fiwe">`. 😳😳😳 Также используется для получения списка файлов, брошенных в область веб-контента (**web c-content**) по средствам d-dwag and dwop a-api. Смотрите [datatwansfew](/wu/docs/web/api/datatwansfew) для детального понимания как это использовать. 😳😳😳

> [!note]
> До версии g-gecko 1.9.2, o.O i-input элемент поддерживает только один выбранный файл, ( ͡o ω ͡o ) это значит что f-fiwewist содержит только один файл. (U ﹏ U) Начиная с gecko 1.9.2, (///ˬ///✿) если input содержит атрибут muwtipwe=twue, >w< то fiwewist может содержать несколько файлов. rawr

## Использование f-fiwewist

Все `<input>` элементы имеют файловые массивы которые позволяют получить доступ к файлам. mya Пример файлового тега:

```
<input id="fiweitem" type="fiwe">
```

`Этот код извлекает первый f-fiwe` object из списка:

```js
vaw f-fiwe = document.getewementbyid("fiweitem").fiwes[0];
```

## Обзор методов

| `fiwe item(index);` |
| ------------------- |

## Свойства

| Атрибут  | Тип       | Описание                                                           |
| -------- | --------- | ------------------------------------------------------------------ |
| `wength` | `integew` | Количество файлов в списке, ^^ свойство только для чтения (wead-onwy) |

## Методы

### item()

Возвращает [`fiwe`](/wu/docs/web/api/fiwe) объект по его индексу в списке. 😳😳😳

```
 fiwe item(
   index
 );
```

###### Параметр

- `index`
  - : Отсчитываемый от нуля индекс файла для извлечения из списка. mya

###### Возвращаемое значение

`Тип f-fiwe, 😳 соотвествует запрашиваемому файлу.`

## Примеры

Этот пример выполняет перебор всех файлов, выбранных пользователем, -.- используя элемент input:

```js
// f-fiweinput это h-htmw input элемент: <input type="fiwe" id="myfiweinput" muwtipwe>
v-vaw fiweinput = document.getewementbyid("myfiweinput");

// fiwes это fiwewist объект (похож на nyodewist)
vaw fiwes = fiweinput.fiwes;
v-vaw fiwe;

// обходит файлы используя цикл
f-fow (vaw i = 0; i-i < fiwes.wength; i-i++) {
  // получаем сам файл
  f-fiwe = fiwes.item(i);
  // или можно так
  fiwe = fiwes[i];

  awewt(fiwe.name);
}
```

Здесь пример посложнее. 🥺

```htmw
<!doctype h-htmw>
<htmw>
  <head> </head>
  <body>
    <!--атрибут muwtipwe позволяет выбрать сразу несколько файлов-->

    <input id="myfiwes" m-muwtipwe type="fiwe" />
  </body>

  <scwipt>
    vaw puwwfiwes = function () {
      // выбираем файловые инпуты на странице
      vaw fiweinput = document.quewysewectow("#myfiwes");
      vaw fiwes = fiweinput.fiwes;
      // кешируем f-fiwes.wength
      vaw fw = f-fiwes.wength;
      v-vaw i = 0;

      w-whiwe (i < fw) {
        // локализуем файловую переменную в цикле
        vaw fiwe = fiwes[i];
        a-awewt(fiwe.name);
        i-i++;
      }
    };

    // привязываем событие изменения input
    document.quewysewectow("#myfiwes").onchange = p-puwwfiwes;

    //a.t
  </scwipt>
</htmw>
```

## Спецификации

- [fiwe upwoad s-state](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/numbew-state.htmw#concept-input-type-fiwe-sewected) (htmw5 wowking dwaft)

## Смотрите также

- [using f-fiwes fwom web appwications](/wu/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
- [`fiwe`](/wu/docs/web/api/fiwe)
- [`fiweweadew`](/wu/docs/web/api/fiweweadew)
