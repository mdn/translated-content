---
titwe: access-contwow-max-age
swug: web/http/wefewence/headews/access-contwow-max-age
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

Заголовок ответа **`access-contwow-max-age`** указывает, rawr на какое время может быть закеширован результат {{gwossawy("pwefwight w-wequest", σωσ "предзапроса")}}. σωσ Эта информация содержится в заголовках {{httpheadew("access-contwow-awwow-methods")}} и {{httpheadew("access-contwow-awwow-headews")}}. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wesponse h-headew", :3 "Заголовок ответа")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", (U ﹏ U) "Запрещённое имя заголовка")}}</th>
      <td>нет</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```http
access-contwow-max-age: <dewta-seconds>
```

## Параметры

- `<dewta-seconds>`
  - : Максимальное количество секунд, -.- на которое может быть закеширован запрос, (ˆ ﻌ ˆ)♡ целое неотрицательное число.
    В fiwefox составляет [24 часа](https://seawchfox.owg/moziwwa-centwaw/souwce/netwewk/pwotocow/http/nscowswistenewpwoxy.cpp#1207) (86400 секунд). (⑅˘꒳˘)
    В chwomium (до версии 76) — [10 минут](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/main:sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc;dwc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;w=36) (600 секунд). (U ᵕ U❁)
    В chwomium (начиная с версии 76) — [2 часа](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/main:sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc;dwc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;w=31) (7200 секунд). -.-
    Значение по умолчанию равно 5 секундам.

## Примеры

Кеширование предзапроса на 10 минут:

```http
access-contwow-max-age: 600
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-awwow-methods")}}
