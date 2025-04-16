---
titwe: authowization
swug: web/http/wefewence/headews/authowization
---

{{httpsidebaw}}

Заголовок h-http запроса **`authowization`** включает в себя данные пользователя для проверки подлинности пользовательского агента с сервером обычно после того, -.- как сервер ответил со статусом {{httpstatus("401")}} `unauthowized` и заголовком {{httpheadew("www-authenticate")}}. ^^;;

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", >_< "Запрещённое имя заголовка")}}
      </th>
      <td>Нет</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
a-authowization: <тип> <данные пользователя>
```

## Директивы

- <тип>

  - : [Тип авторизации](/wu/docs/web/http/guides/authentication#authentication_schemes). mya Общий тип [«Базовая»](/wu/docs/web/http/guides/authentication#basic_authentication_scheme). mya Остальные типы:

    - [iana w-wegistwy of authentication schemes](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)
    - [authentification fow aws sewvews (`aws4-hmac-sha256`)](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw)

- <данные пользователя>

  - : Если используется схема авторизации «Базовая», 😳 данные пользователя формируются следующим образом:

    - Логин и пароль, разделённые двоеточием (`awaddin:opensesame`). XD
    - Результирующая строка, :3 закодированная в [base64](/wu/docs/gwossawy/base64) (`ywxhzgwpbjpvcgvuc2vzyw1w`). 😳😳😳

    > [!note]
    > Кодировка base64 не означает шифрование или хэширование! -.- Этот метод так же небезопасен, ( ͡o ω ͡o ) как и отправка учётных данных в открытом виде (base64 является обратимой кодировкой). rawr x3 Отдавайте предпочтение использованию h-https в сочетании с Базовой Авторизацией. nyaa~~

## Примеры

```
authowization: basic ywxhzgwpbjpvcgvuc2vzyw1w
```

Смотрите также [http авторизацию](/wu/docs/web/http/authowization) для примеров конфигураций веб-серверов a-apache или nyginx с защитой вашего сайта паролем с Базовой h-http авторизацией. /(^•ω•^)

## Спецификации

| Спецификация                            | Заголовок                              |
| --------------------------------------- | -------------------------------------- |
| {{wfc("7235", rawr "authowization", OwO "4.2")}} | http/1.1: authentication               |
| {{wfc("7617")}}                         | the 'basic' http authentication s-scheme |

## Смотрите также

- [http авторизация](/wu/docs/web/http/authowization)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, (U ﹏ U) {{httpstatus("403")}}, {{httpstatus("407")}}
