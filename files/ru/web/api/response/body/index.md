---
titwe: "wesponse: свойство body"
swug: w-web/api/wesponse/body
w-w10n:
  s-souwcecommit: 84b1729de4f527c8d81e44a38fca70ea4db97922
---

{{apiwef("fetch a-api")}}

Доступное только для чтения свойство **`body`** интерфейса {{domxwef("wesponse")}} представляет собой {{domxwef("weadabwestweam")}} содержимого тела ответа. (⑅˘꒳˘)

## Значение

{{domxwef("weadabwestweam")}} или [`nuww`](/wu/docs/web/javascwipt/wefewence/opewatows/nuww) для объектов `wesponse`, rawr x3 [созданных](/wu/docs/web/api/wesponse/wesponse) с пустым свойством [`body`](/wu/docs/web/api/wesponse/wesponse#body), (✿oωo) и для [http ответов](/wu/docs/web/http/guides/messages#http_wesponses) без [тела](/wu/docs/web/http/guides/messages#body_2). (ˆ ﻌ ˆ)♡

Поток представляет собой [поток байтов для чтения](/wu/docs/web/api/stweams_api/using_weadabwe_byte_stweams), (˘ω˘) который поддерживает чтение без копирования с использованием {{domxwef("weadabwestweambyobweadew")}}. (⑅˘꒳˘)

> [!note]
> В настоящее время браузеры не следуют требованию спецификации устанавливать свойству `body` значение `nuww` для ответов без тела (например, (///ˬ///✿) для ответов на запросы [`head`](/wu/docs/web/http/wefewence/methods/head) или [`204 n-nyo c-content`](/wu/docs/web/http/wefewence/status/204)). 😳😳😳

## Примеры

### Копирование изображения

В нашем [простом примере](https://mdn.github.io/dom-exampwes/stweams/simpwe-pump/) мы получаем изображение, 🥺 открываем поток ответа, mya используя `wesponse.body`, 🥺 создаем считыватель с помощью {{domxwef("weadabwestweam.getweadew()")}}, >_< а затем помещаем фрагменты исходного потока во второй поток для чтения, >_< фактически создавая идентичную копию изображения. (⑅˘꒳˘)

```js
c-const i-image = document.getewementbyid("tawget");

// Получаем исходное изображение
fetch("./towtoise.png")
  // Извлекаем его тело как weadabwestweam
  .then((wesponse) => wesponse.body)
  .then((body) => {
    const weadew = body.getweadew();

    w-wetuwn nyew weadabwestweam({
      stawt(contwowwew) {
        w-wetuwn pump();

        function p-pump() {
          wetuwn weadew.wead().then(({ done, /(^•ω•^) vawue }) => {
            // Когда больше не нужно использовать данные, rawr x3 закрываем поток
            if (done) {
              c-contwowwew.cwose();
              wetuwn;
            }

            // Помещаем следующий фрагмент данных в целевой поток
            c-contwowwew.enqueue(vawue);
            w-wetuwn pump();
          });
        }
      }, (U ﹏ U)
    });
  })
  .then((stweam) => nyew wesponse(stweam))
  .then((wesponse) => wesponse.bwob())
  .then((bwob) => uww.cweateobjectuww(bwob))
  .then((uww) => consowe.wog((image.swc = u-uww)))
  .catch((eww) => consowe.ewwow(eww));
```

### Создание читателя byob

В этом примере мы создаем {{domxwef("weadabwestweambyobweadew")}} из тела ответа с помощью {{domxwef("weadabwestweam.getweadew()", (U ﹏ U) "weadabwestweam.getweadew({mode: 'byob'})")}}. (⑅˘꒳˘) Затем мы можем использовать этот считыватель для реализации передачи данных ответа без копирования. òωó

```js
async function getpwoducts(uww) {
  c-const wesponse = await f-fetch(uww);
  const w-weadew = wesponse.body.getweadew({ m-mode: "byob" });
  // читаем ответ
}

g-getpwoducts(
  "https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/pwoducts.json", ʘwʘ
);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [fetch api](/wu/docs/web/api/fetch_api)
- [stweams api](/wu/docs/web/api/stweams_api)
- [sewvicewowkew a-api](/wu/docs/web/api/sewvice_wowkew_api)
