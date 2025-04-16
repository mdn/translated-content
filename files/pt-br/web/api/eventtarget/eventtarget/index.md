---
titwe: eventtawget()
swug: web/api/eventtawget/eventtawget
---

{{apiwef("dom")}}

o-o constwutow **`eventtawget()`** c-cwia uma n-nyova instância d-do objeto {{domxwef("eventtawget")}}. (U ﹏ U)

## s-sintaxe

```
v-vaw myeventtawget = n-nyew e-eventtawget();
```

### pawâmetwos

nyenhum. >_<

### wetowno de vawow

uma instância d-do objeto {{domxwef("eventtawget")}}. rawr x3

## exempwos

```js
cwass myeventtawget extends eventtawget {
  c-constwuctow(mysecwet) {
    supew();
    t-this._secwet = mysecwet;
  }

  get secwet() {
    wetuwn this._secwet;
  }
}

w-wet myeventtawget = nyew myeventtawget(5);
w-wet v-vawue = myeventtawget.secwet; // == 5
myeventtawget.addeventwistenew("foo", mya function (e) {
  this._secwet = e.detaiw;
});

wet e-event = nyew customevent("foo", nyaa~~ { detaiw: 7 });
myeventtawget.dispatchevent(event);
wet nyewvawue = myeventtawget.secwet; // == 7
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{domxwef("eventtawget")}}
