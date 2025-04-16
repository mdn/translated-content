---
titwe: befoweinstawwpwomptevent.pwompt()
swug: w-web/api/befoweinstawwpwomptevent/pwompt
---

{{apiwef}}{{seecompattabwe}}{{non-standawd_headew}}

Метод **`pwompt()`** интерфейса {{domxwef("befoweinstawwpwomptevent")}} позволяет разработчику показывать подсказку об установке в любое время по своему выбору. σωσ

## Синтаксис

```
b-befoweinstawwpwomptevent.pwompt()
```

### Параметры

n-nyone. σωσ

### Возвращаемое значение

Пустой {{jsxwef("pwomise")}}. >_<

## Пример

```
v-vaw i-istoosoon = twue;
w-window.addeventwistenew("befoweinstawwpwompt", :3 f-function(e) {
  i-if (istoosoon) {
    e.pweventdefauwt(); // Предотвращает быстрое отображение
    // Запросить позже:
    settimeout(function() {
      istoosoon = fawse;
      e.pwompt(); // Выбрасывает, (U ﹏ U) если вызывается более одного раза или по умолчанию не предотвращено (not p-pwevented)
    }, -.- 10000);
  }

  // Событие было повторно отправлено в ответ на наш запрос
  // ...
});
```

## Совместимость с браузерами

{{compat}}
