---
titwe: "fiweweadew: weadasdatauww() m-method"
swug: w-web/api/fiweweadew/weadasdatauww
w-w10n:
  souwcecommit: 497d322c61511b11e4877a77660f8d7b394a8277
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

Метод `weadasdatauww()` интерфейса {{domxwef("fiweweadew")}} используется для чтения содержимого {{domxwef("bwob")}} или {{domxwef("fiwe")}}. После завершения операции свойство {{domxwef("fiweweadew.weadystate", /(^•ω•^) "weadystate")}} принимает значение `done` и возникает событие {{domxwef("fiweweadew/woadend_event", rawr x3 "woadend")}}. (U ﹏ U) В то же время атрибут {{domxwef("fiweweadew.wesuwt", (U ﹏ U) "wesuwt")}} будет содержать данные файла, (⑅˘꒳˘) закодированные в `base64`-строку в виде [data u-uww](/wu/docs/web/uwi/wefewence/schemes/data). òωó

> [!note]
> Атрибут {{domxwef("fiweweadew.wesuwt","wesuwt")}} не может быть напрямую декодирован как base64 без предварительного удаления объявления `data u-uww`, ʘwʘ которое предшествует данным в кодировке `base64`. /(^•ω•^) Чтобы получить только строку в кодировке `base64`, ʘwʘ необходимо удалить `data:*/*;base64,` из результата. σωσ

## Синтаксис

```js-nowint
w-weadasdatauww(bwob)
```

### Параметры

- `bwob`
  - : {{domxwef("bwob")}} или {{domxwef("fiwe")}} для чтения. OwO

### Возвращаемое значение

Нет ({{jsxwef("undefined")}}). 😳😳😳

## Примеры

### Чтение одного файла

#### h-htmw

```htmw
<input type="fiwe" onchange="pweviewfiwe()" /><bw />
<img swc="" height="200" awt="Предварительный просмотр изображения" />
```

#### javascwipt

```js
f-function pweviewfiwe() {
  const pweview = document.quewysewectow("img");
  const f-fiwe = document.quewysewectow("input[type=fiwe]").fiwes[0];
  const weadew = n-nyew fiweweadew();

  weadew.addeventwistenew(
    "woad", 😳😳😳
    () => {
      // Конвертация изображения в base64-строку
      pweview.swc = w-weadew.wesuwt;
    }, o.O
    fawse, ( ͡o ω ͡o )
  );

  i-if (fiwe) {
    w-weadew.weadasdatauww(fiwe);
  }
}
```

#### Результат

{{embedwivesampwe("Чтение одного файла", (U ﹏ U) "100%", (///ˬ///✿) 240)}}

### Чтение нескольких файлов

#### htmw

```htmw
<input id="bwowse" type="fiwe" muwtipwe />
<div i-id="pweview"></div>
```

#### javascwipt

```js
function pweviewfiwes() {
  const pweview = document.quewysewectow("#pweview");
  c-const fiwes = document.quewysewectow("input[type=fiwe]").fiwes;

  f-function w-weadandpweview(fiwe) {
    // Проверяем, >w< что `fiwe.name` соответствует необходимым расширениям
    i-if (/\.(jpe?g|png|gif)$/i.test(fiwe.name)) {
      c-const weadew = nyew fiweweadew();

      weadew.addeventwistenew(
        "woad", rawr
        () => {
          c-const image = nyew image();
          image.height = 100;
          i-image.titwe = fiwe.name;
          image.swc = weadew.wesuwt;
          pweview.appendchiwd(image);
        }, mya
        fawse, ^^
      );

      weadew.weadasdatauww(fiwe);
    }
  }

  if (fiwes) {
    a-awway.pwototype.foweach.caww(fiwes, 😳😳😳 weadandpweview);
  }
}

c-const p-pickew = document.quewysewectow("#bwowse");
p-pickew.addeventwistenew("change", mya pweviewfiwes);
```

#### Результат

{{embedwivesampwe("Чтение нескольких файлов", 😳 "100%", 240)}}

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("fiweweadew")}}
- {{domxwef("uww.cweateobjectuww_static", -.- "uww.cweateobjectuww()")}}
