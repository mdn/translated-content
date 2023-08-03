---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
---

{{HTTPSidebar}}

Общий заголовок **`Cache-Control`** используется для задания инструкций кеширования как для запросов, так и для ответов. Инструкции кеширования однонаправленные: заданная инструкция в запросе не подразумевает, что такая же инструкция будет указана в ответе

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>нет</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>да</td>
    </tr>
  </tbody>
</table>

## Синтаксис

Инструкции не чувствительны к регистру и имеют необязательный аргумент, который может быть указан как в кавычках, так и без них. Несколько инструкций разделяются запятыми.

### Инструкции кеширования для запросов

Стандартные инструкции `Cache-Control`, которые могут задаваться клиентом для HTTP запроса.

```
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: only-if-cached
```

### Инструкции кеширования для ответов

Стандартные инструкции `Cache-Control`, которые могут задаваться сервером для HTTP ответа.

```
Cache-Control: must-revalidate
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: public
Cache-Control: private
Cache-Control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-Control: s-maxage=<seconds>
```

### Расширенные инструкции `Cache-Control`

Расширенные инструкции `Cache-Control` не являются частью базовых стандартов, описывающих кеширование в HTTP. В [таблице совместимости](#Browser_compatibility) указаны браузеры, которые поддерживают расширенные инструкции.

```
Cache-Control: immutable
Cache-Control: stale-while-revalidate=<seconds>
Cache-Control: stale-if-error=<seconds>
```

## Инструкции

### Управление кешированием

- `public`
  - : Указывает, что ответ может быть закеширован в любом кеше.
- `private`
  - : Указывает, что ответ предназначен для одного пользователя и не должен помещаться в разделяемый кеш. Частный кеш может хранить ресурс.
- `no-cache`
  - : Указывает на необходимость отправить запрос на сервер для валидации ресурса перед использованием закешированных данных.
- `only-if-cached`
  - : Указывает на необходимость использования только закешированных данных. Запрос на сервер не должен посылаться.

### Управление временем жизни

- `max-age=<seconds>`
  - : Задаёт максимальное время в течение которого ресурс будет считаться актуальным. В отличие от `Expires`, данная инструкция является относительной по отношению ко времени запроса.
- `s-maxage=<seconds>`
  - : Переопределяет `max-age` или заголовок `Expires`, но применяется только для разделяемых кешей (например, прокси) и игнорируется частными кешами.
- `max-stale[=<seconds>]`
  - : Указывает, что клиент хочет получить ответ, для которого было превышено время устаревания. Дополнительно может быть указано значение в секундах, указывающее, что ответ не должен быть просрочен более чем на указанное значение.
- `min-fresh=<seconds>`
  - : Указывает, что клиент хочет получить ответ, который будет актуален как минимум указанное количество секунд.
- `stale-while-revalidate=<seconds>` {{experimental_inline}}
  - : Указывает, что клиент хочет получить просроченный ответ, одновременно осуществляя фоновую проверку наличия свежих данных. Значение в секундах обозначает, какое время клиент желает получать просроченный ответ.
- `stale-if-error=<seconds>` {{experimental_inline}}
  - : ...

### Управление ревалидацией и перезагрузкой

- `must-revalidate`
  - : Кеш должен проверить статус устаревших ресурсов перед их использованием. Просроченные ресурсы не должны быть использованы.
- `proxy-revalidate`
  - : То же самое, что `must-revalidate`, но применимо только к разделяемым кешам (например, прокси) и игнорируется частными кешами.
- `immutable`
  - : Indicates that the response body will not change over time. The resource, if unexpired, is unchanged on the server and therefore the client should not send a conditional revalidation for it (e.g. `If-None-Match` or `If-Modified-Since`) to check for updates, even when the user explicitly refreshes the page. Clients that aren't aware of this extension must ignore them as per the HTTP specification. In Firefox, `immutable` is only honored on `https://` transactions. For more information, see also this [blog post](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html).

### Другие инструкции

- `no-store`
  - : Кеш не должен хранить никакую информацию о запросе и ответе
- `no-transform`
  - : Никакие преобразования не должны применяться к ресурсу. Заголовки `Content-Encoding`, `Content-Range`, `Content-Type` не должны изменяться прокси. Непрозрачный прокси может, например, конвертировать изображения из одного формата в другой для сохранения дискового пространства или уменьшения трафика. Инструкция `no-transform` запрещает это.

## Примеры

### Выключение кеширования

Для выключения кеширования возможно добавить следующий заголовок к ответу. Дополнительно см. заголовки `Expires` и `Pragma`.

```bash
Cache-Control: no-cache, no-store, must-revalidate
```

### Кеширование статического контента

Для файлов, которые не будут изменяться обычно возможно применить агрессивное кеширование, отослав ответ с заголовком ниже. Например, такой ответ может быть послан для изображений, файлов CSS и JavaScript. Дополнительно см. заголовок `Expires`.

```bash
Cache-Control: public, max-age=31536000
```

## Спецификация

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- [HTTP Caching FAQ](/ru/docs/Web/HTTP/Caching_FAQ)
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}
