---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
---

{{HTTPSidebar}}

HTTP заголовок **`Set-Cookie`** используется для отправки cookies с сервера на агент пользователя.

Для детальной информации, смотрите руководство по [HTTP cookies](/ru/docs/Web/HTTP/Cookies).

| Тип заголовка                         | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | нет                             |

## Синтаксис

```
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None {{experimental_inline}}

// Multiple directives are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## Директивы

- По умолчанию - хост текущего URL документа, не включая поддомены
- В текущей спецификация начальная точка в имени хоста игнорируется (`.example.com`)
- Cookie будут отправляться также на поддомены указанного хоста
- Указывать несколько хостов недопустимо.

<!---->

- По умолчанию - хост текущего URL документа, не включая поддомены
- В текущей спецификация начальная точка в имени хоста игнорируется (.example.com)
- Cookie будут отправляться также на поддомены указанного хоста
- Указывать несколько хостов недопустимо.

<!---->

- `<cookie-name>=<cookie-value>`

  - : Cookie начинается с пары имя-значение:

    - `<cookie-name>` может содержать любые символы US-ASCII, за исключением управляющих символов (CTLs), пробелов, или табуляций. Оно также не должно содержать разделительных символов, таких как следующие: `( ) < > @ , ; : \ " / [ ] ? = { }`.
    - `<cookie-value>` может быть опционально заключено в двойные кавычки, разрешены любые символы US-ASCII за исключением CTLs, пробела, двойных кавычек, запятой, точки с запятой, и обратного слеша. **Кодирование:** Многие реализации выполняют кодирование в значениях cookies, однако этого не требуется по спецификации RFC. Однако, это помогает удовлетворить требование о разрешённых символах в \<cookie-value>.
    - **`__Secure-` prefix** {{non-standard_inline}}: Cookies с именем, начинающимся с `__Secure-` (подчёркивание является частью префикса ) должны быть установлены вместе с флагом secure, и должны быть с безопасной страницы (HTTPS).
    - **`__Host-` prefix** {{non-standard_inline}}: Cookies с именем, начинающимся с `__Host-` должны быть установлены с флагом secure `secure`, должны быть с безопасной страницы (HTTPS), не должны иметь определённый домен (и, следовательно, не не посылаются поддоменами), а также параметр Path должен быть "/".

- `Expires=<date>` {{optional_inline}}

  - : Максимальное время жизни cookie в формате метки даты-времени HTTP. См. {{HTTPHeader("Date")}} о деталях формата Если не определён, cookie будет иметь время жизни **сессионного cookie.** Сессия окончена, когда клиент отключается, что приводит к удалению сессионных cookie в этот момент. Однако, многие браузеры имеют возможность, называемую восстановление сессии, которая сохраняет все ваши вкладки и затем возвращает их, когда вы в следующий раз запускаете браузер. Cookies будут также присутствовать, словно вы никогда не закрывали браузер.

    Когда устанавливается срок действия, время и дата устанавливаются не относительно сервера, а относительно клиента, на котором установлено cookie,

- `Max-Age=<number>` {{optional_inline}}
  - : Количество секунд, после которого cookie устаревает. Ноль или отрицательное число приводят к моментальному устареванию cookie. Старые браузеры (ie6, ie7, and ie8) не поддерживают Max-Age. Для прочих браузеров, если оба параметра (`Expires` and `Max-Age`) установлены, `Max-Age` будет иметь преимущество.
- `Domain=<domain-value>` {{optional_inline}}

  - : Хост, на который будут отправляться cookie.

    По умолчанию - хост текущего URL документа, не включая поддомены
    В текущей спецификация начальная точка в имени хоста игнорируется (.example.com)
    Cookie будут отправляться также на поддомены указанного хоста
    Указывать несколько хостов недопустимо.

- `Path=<path-value>` {{optional_inline}}

  - : Путь, который должен существовать в запрошенном URL, иначе браузер не отправит заголовок Cookie.

    Пример: `/` - cookie будет отправляться со всеми запросами
    Пример: `/docs/` - cookie будет отправляться с запросами к директории docs и её поддиректориям

- `Secure` {{optional_inline}}

  - : Cookie будет отправлен на сервер только с запросами c использованием SSL и протокола HTTPS.

    Cookie не будет дополнительно шифроваться, поэтому в нем не стоит хранить конфиденциальную информацию.

    **Note:** небезопасные сайты (`http:`) не могут использовать cookie с атрибутом "secure" (начиная с Chrome 52+ и Firefox 52+).

- `HttpOnly` {{optional_inline}}

  - : Запрещает JavaScript доступ к cookie

    Полезно для защиты от XSS-атак.

- `SameSite=<samesite-value>` {{optional_inline}}

  - :&#x20;

    - `Strict`: The browser sends the cookie only for same-site requests (that is, requests originating from the same site that set the cookie). If the request originated from a different URL than the current one, no cookies with the `SameSite=Strict` attribute are sent.
    - `Lax`: The cookie is withheld on cross-site subrequests, such as calls to load images or frames, but is sent when a user navigates to the URL from an external site, such as by following a link
    - `None`: The browser sends the cookie with both cross-site and same-site requests

    Allows servers to assert that a cookie ought not to be sent along with cross-site requests, which provides some protection against cross-site request forgery attacks ({{Glossary("CSRF")}}).

    Современные браузеры используют `SameSite=Lax`. Если необходима работа `SameSite=None` cookie должна быть установлена с атрибутом `Secure`.

## Примеры

### Сессионный cookie

Сессионные cookies будут удалены после отключения клиента. В них не указываются директивы `Expires` или `Max-Age`. Учитывайте, что часто в браузере включено восстановление сессии.

```
Set-Cookie: sessionid=38afes7a8; HttpOnly; Path=/
```

### Постоянный cookie

Вместо истечения срока действия, когда клиент закрыт, срок действия постоянных файлов cookie истекает в определённую дату (`Expires`) или по истечении определённого промежутка времени (`Max-Age`).

```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

### Неверные домены

Файл cookie, принадлежащий домену, который не включает исходный сервер, [должен быть отклонён пользовательским](https://tools.ietf.org/html/rfc6265#section-4.1.2.3). Следующий cookie будет отклонён, если он был установлен сервером, размещённым на originalcompany.com.

```
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk; Path=/; Expires=Wed, 30 Aug 2019 00:00:00 GMT
```

### Cookie prefixes

Cookies names with the prefixes `__Secure-` and `__Host-` can be used only if they are set with the `secure` directive from a secure (HTTPS) origin. In addition, cookies with the `__Host-` prefix must have a path of "/" (the entire host) and must not have a domain attribute. For clients that don't implement cookie prefixes, you cannot count on having these additional assurances and the cookies will always be accepted.

```
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejected due to missing Secure directive
Set-Cookie: __Secure-id=1

// Rejected due to the missing Path=/ directive
Set-Cookie: __Host-id=1; Secure

// Rejected due to setting a domain
Set-Cookie: __Host-id=1; Secure; Path=/; domain=example.com
```

## Specifications

| Specification                                                                                    | Title                                                         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("6265", "Set-Cookie", "4.1")}}                                                             | HTTP State Management Mechanism                               |
| [draft-ietf-httpbis-rfc6265bis-02](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-02) | Cookie Prefixes, Same-Site Cookies, and Strict Secure Cookies |

## Browser compatibility

{{Compat}}

## Compatibility notes

- Starting with Chrome 52 and Firefox 52, insecure sites (`http:`) can't set cookies with the "secure" directive anymore.

## See also

- [HTTP cookies](/ru/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
