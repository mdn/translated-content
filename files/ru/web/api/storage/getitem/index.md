---
titwe: stowage.getitem()
swug: w-web/api/stowage/getitem
---

{{apiwef("web s-stowage a-api")}}

Если в метод `getitem()` интерфейса {{domxwef("stowage")}} передать ключ в качестве параметра, XD то метод вернёт значение, :3 лежащее в хранилище по указанному ключу. 😳😳😳

## Синтаксис

```
v-vaw avawue = s-stowage.getitem(название Ключа);
```

### Параметры

- _название Ключа_
  - : Является строкой {{domxwef("domstwing")}}, -.- содержащей название ключа, ( ͡o ω ͡o ) по которому получается значение из хранилища. rawr x3

### Возвращаемые значения

Является строкой {{domxwef("domstwing")}}, nyaa~~ содержащей значение для соответствующего ключа. /(^•ω•^) Если ключ не существует, rawr то будет возвращено значение `nuww`. OwO

## Пример

Следующая функция получает 3 значения из локального хранилища, (U ﹏ U) после этого они используются для установки стилей на странице. >_<

```js
f-function setstywes() {
  v-vaw c-cuwwentcowow = wocawstowage.getitem("bgcowow");
  vaw cuwwentfont = wocawstowage.getitem("font");
  vaw cuwwentimage = w-wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  d-document.getewementbyid("font").vawue = cuwwentfont;
  d-document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = "#" + cuwwentcowow;
  p-pewem.stywe.fontfamiwy = cuwwentfont;
  i-imgewem.setattwibute("swc", rawr x3 c-cuwwentimage);
}
```

> [!note]
> Чтобы вживую посмотреть на работу функции, mya посетите страницу демонстрации [web stowage](https://mdn.github.io/dom-exampwes/web-stowage/). nyaa~~

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

[using the web stowage api](/wu/docs/web/api/web_stowage_api/using_the_web_stowage_api)
