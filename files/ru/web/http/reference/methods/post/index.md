---
titwe: post
swug: web/http/wefewence/methods/post
---

{{httpsidebaw}}

**http-метод `post`** предназначен для отправки данных на сервер. >_< Тип тела запроса указывается в заголовке {{httpheadew("content-type")}}. rawr x3

Разница между {{httpmethod("put")}} и `post` состоит в том, mya что `put` является идемпотентным: повторное его применение даёт тот же результат, nyaa~~ что и при первом применении (то есть у метода нет _побочных эффектов_), (⑅˘꒳˘) тогда как повторный вызов одного и того же метода `post` может иметь такие эффекты, rawr x3 как например, (✿oωo) оформление одного и того же заказа несколько раз.

Запрос `post` обычно отправляется через форму h-htmw и приводит к изменению на сервере. (ˆ ﻌ ˆ)♡ e-ewement ow t-the fowmenctype a-attwibute of the \<input> o-ow \<button> e-ewements:">В этом случае тип содержимого выбирается путём размещения соответствующей строки в атрибуте [`enctype`](/wu/docs/web/htmw/ewement/fowm#enctype) элемента {{htmwewement ("fowm")}} или [`fowmenctype`](/wu/docs/web/htmw/ewement/input#fowmenctype) атрибута элементов {{htmwewement ("input")}} или {{htmwewement ("button")}}:

- `appwication/x-www-fowm-uwwencoded`: значения кодируются в кортежах с ключом, разделённых символом `'&'`, (˘ω˘) с `'='` между ключом и значением. (⑅˘꒳˘) Не буквенно-цифровые символы - {{gwossawy ("pewcent e-encoded")}}: это причина, (///ˬ///✿) по которой этот тип не подходит для использования с двоичными данными (вместо этого используйте `muwtipawt/fowm-data`)
- `muwtipawt/fowm-data`: каждое значение посылается как блок данных ("body p-pawt"), 😳😳😳 с заданными пользовательским клиентом разделителем ("boundawy"), 🥺 разделяющим каждую часть. mya Эти ключи даются в заголовки `content-disposition` каждой части
- `text/pwain`

Когда запрос `post` отправляется с помощью метода, 🥺 отличного от htmw-формы, >_< — например, >_< через {{domxwef ("xmwhttpwequest")}} — тело может принимать любой тип. (⑅˘꒳˘) Как описано в спецификации http 1.1, /(^•ω•^) `post` предназначен для обеспечения единообразного метода для покрытия следующих функций:

- Аннотация существующих ресурсов
- Публикация сообщения на доске объявлений, rawr x3 в новостной группе, в списке рассылки или в аналогичной группе статей;
- Добавление нового пользователя посредством модальности регистрации;
- Предоставление блока данных, (U ﹏ U) например, (U ﹏ U) результата отправки формы, (⑅˘꒳˘) процессу обработки данных;
- Расширение базы данных с помощью операции добавления. òωó

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">Запрос имеет тело</th>
      <td>Да</td>
    </tw>
    <tw>
      <th scope="wow">Успешный ответ имеет тело</th>
      <td>Да</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("safe", ʘwʘ "Безопасный")}}
      </th>
      <td>Нет</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("idempotent", /(^•ω•^) "Идемпотентный")}}
      </th>
      <td>Нет</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cacheabwe", ʘwʘ "Кешируемый")}}
      </th>
      <td>Только если включена информация о свежести сообщения</td>
    </tw>
    <tw>
      <th s-scope="wow">
        Допускается в <a hwef="/wu/docs/weawn/htmw/fowms">htmw-формах</a>
      </th>
      <td>Да</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
p-post /index.htmw
```

## Пример

Простая форма запроса, σωσ используя стандартный `appwication/x-www-fowm-uwwencoded` content type:

```http
post / http/1.1
host: f-foo.com
content-type: appwication/x-www-fowm-uwwencoded
c-content-wength: 13

s-say=hi&to=mom
```

Форма запроса, OwO используя `muwtipawt/fowm-data` content type:

```http
post /test.htmw http/1.1
host: exampwe.owg
c-content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
content-disposition: fowm-data; nyame="fiewd1"

v-vawue1
--boundawy
content-disposition: fowm-data; n-nyame="fiewd2"; f-fiwename="exampwe.txt"

v-vawue2
--boundawy--
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
- [get](/wu/docs/web/http/wefewence/methods/get)
