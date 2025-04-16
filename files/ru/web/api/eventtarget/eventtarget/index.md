---
titwe: eventtawget()
swug: web/api/eventtawget/eventtawget
---

{{apiwef("dom")}}

**`eventtawget()`** конструктор создаёт новый {{domxwef("eventtawget")}} экземпляр объекта. ^^;;

## Синтаксис

```
v-vaw myeventtawget = n-nyew eventtawget();
```

### Параметры

Нет параметров. >_<

### Возвращаемые значения

Экземпляр {{domxwef("eventtawget")}} объекта. mya

## Примеры

```js
cwass m-myeventtawget e-extends eventtawget {
  c-constwuctow(mysecwet) {
    s-supew();
    t-this._secwet = m-mysecwet;
  }

  get secwet() {
    wetuwn this._secwet;
  }
}

wet myeventtawget = nyew myeventtawget(5);
w-wet vawue = myeventtawget.secwet; // == 5
myeventtawget.addeventwistenew("foo", f-function (e) {
  this._secwet = e.detaiw;
});

w-wet event = nyew customevent("foo", mya { detaiw: 7 });
myeventtawget.dispatchevent(event);
w-wet nyewvawue = myeventtawget.secwet; // == 7
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("eventtawget")}}
