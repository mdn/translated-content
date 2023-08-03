---
title: POST
slug: Web/HTTP/Methods/POST
---

{{HTTPSidebar}}

**HTTP-метод `POST`** предназначен для отправки данных на сервер. Тип тела запроса указывается в заголовке {{HTTPHeader("Content-Type")}}.

Разница между {{HTTPMethod("PUT")}} и `POST` состоит в том, что `PUT` является идемпотентным: повторное его применение даёт тот же результат, что и при первом применении (то есть у метода нет _побочных эффектов_), тогда как повторный вызов одного и того же метода `POST` может иметь такие эффекты, как например, оформление одного и того же заказа несколько раз.

Запрос `POST` обычно отправляется через форму HTML и приводит к изменению на сервере. element or the formenctype attribute of the \<input> or \<button> elements:">В этом случае тип содержимого выбирается путём размещения соответствующей строки в атрибуте [`enctype`](/ru/docs/Web/HTML/Element/form#enctype) элемента {{HTMLElement ("form")}} или [`formenctype`](/ru/docs/Web/HTML/Element/input#formenctype) атрибута элементов {{HTMLElement ("input")}} или {{HTMLElement ("button")}}:

- `application/x-www-form-urlencoded`: значения кодируются в кортежах с ключом, разделённых символом `'&'`, с `'='` между ключом и значением. Не буквенно-цифровые символы - {{glossary ("percent encoded")}}: это причина, по которой этот тип не подходит для использования с двоичными данными (вместо этого используйте `multipart/form-data`)
- `multipart/form-data`: каждое значение посылается как блок данных ("body part"), с заданными пользовательским клиентом разделителем ("boundary"), разделяющим каждую часть. Эти ключи даются в заголовки `Content-Disposition` каждой части
- `text/plain`

Когда запрос `POST` отправляется с помощью метода, отличного от HTML-формы, — например, через {{domxref ("XMLHttpRequest")}} — тело может принимать любой тип. Как описано в спецификации HTTP 1.1, `POST` предназначен для обеспечения единообразного метода для покрытия следующих функций:

- Аннотация существующих ресурсов
- Публикация сообщения на доске объявлений, в новостной группе, в списке рассылки или в аналогичной группе статей;
- Добавление нового пользователя посредством модальности регистрации;
- Предоставление блока данных, например, результата отправки формы, процессу обработки данных;
- Расширение базы данных с помощью операции добавления.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Запрос имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">Успешный ответ имеет тело</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Safe", "Безопасный")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Idempotent", "Идемпотентный")}}
      </th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cacheable", "Кешируемый")}}
      </th>
      <td>Только если включена информация о свежести сообщения</td>
    </tr>
    <tr>
      <th scope="row">
        Допускается в <a href="/ru/docs/Learn/HTML/Forms">HTML-формах</a>
      </th>
      <td>Да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
POST /index.html
```

## Пример

Простая форма запроса, используя стандартный `application/x-www-form-urlencoded` content type:

```http
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Форма запроса, используя `multipart/form-data` content type:

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
- [GET](/ru/docs/Web/HTTP/Methods/GET)
