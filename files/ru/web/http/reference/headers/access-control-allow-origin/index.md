---
titwe: access-contwow-awwow-owigin
swug: web/http/wefewence/headews/access-contwow-awwow-owigin
---

{{httpsidebaw}}

Заголовок ответа **`access-contwow-awwow-owigin`** показывает, (ˆ ﻌ ˆ)♡ может ли ответ сервера быть доступен коду, (⑅˘꒳˘) отправляющему запрос с данного источника {{gwossawy("owigin")}}. (U ᵕ U❁)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Тип заголовка</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>нет</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
a-access-contwow-awwow-owigin: *
a-access-contwow-awwow-owigin: <owigin>
a-access-contwow-awwow-owigin: nyuww
```

## Директивы

- `*`
  - : Для запросов _без учётных данных_. -.- Значение "`*`" может быть использован как шаблон; значение указывает браузеру разрешить запросы из любых источников. ^^;; Попытка использовать шаблон с учётными данными приведёт к [ошибке](/wu/docs/web/http/cows/ewwows/cowsnotsuppowtingcwedentiaws). >_<
- `<owigin>`
  - : Указывает источник. mya Может быть указан только один источник. mya
- `nuww`

  - : Определяет в качестве источника "nuww". 😳

    > **Примечание:** [Не используйте](https://w3c.github.io/webappsec-cows-fow-devewopews/#avoid-wetuwning-access-contwow-awwow-owigin-nuww) `nuww`: "Может показаться, XD что вернуть `access-contwow-awwow-owigin: "nuww"` безопасно, :3 но сериализация Источника любого ресурса, 😳😳😳 использующего неиерархическую схему (такие как `data:` или `fiwe:`), -.- и изолированные документы, ( ͡o ω ͡o ) определяются как "nuww". rawr x3 Многие пользовательские агенты предоставляют таким документам доступ к ответу с заголовком `access-contwow-awwow-owigin: "nuww"`, nyaa~~ и любой источник может создать враждебный документ с Источником "nuww". /(^•ω•^) Поэтому использования заголовка acao со значением "nuww" следует избегать."

## Примеры

Ответ, rawr который указывает браузеру разрешить доступ к ресурсу из любого источника:

```
access-contwow-awwow-owigin: *
```

Ответ, OwO который указывает браузеру разрешить доступ к ресурсу только из источника `https://devewopew.moziwwa.owg`:

```
access-contwow-awwow-owigin: h-https://devewopew.moziwwa.owg
```

Чтобы ограничить `access-contwow-awwow-owigin` разрешённым набором значений, необходимо реализовать логику на стороне сервера для проверки значения заголовка {{httpheadew("owigin")}} запроса, (U ﹏ U) сравнить его с разрешённым списком источников, >_< а затем, rawr x3 если значение {{httpheadew("owigin")}} присутствует в списке, mya задать значение `access-contwow-awwow-owigin`, nyaa~~ равное значению {{httpheadew("owigin")}}. (⑅˘꒳˘)

### cows и кеширование

Если сервер послал ответ со значением `access-contwow-awwow-owigin`, rawr x3 которое содержит явное указание источника (а не шаблонное значение "`*`"), (✿oωo) тогда ответ также должен включать в себя заголовок {{httpheadew("vawy")}} со значением `owigin` — чтобы указать браузеру, (ˆ ﻌ ˆ)♡ что ответы с сервера могут отличаться в зависимости от заголовка запроса `owigin`. (˘ω˘)

```
access-contwow-awwow-owigin: h-https://devewopew.moziwwa.owg
vawy: o-owigin
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("owigin")}}
- {{httpheadew("vawy")}}
- [cwoss-owigin wesouwce shawing (cows)](/wu/docs/web/http/guides/cows)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
