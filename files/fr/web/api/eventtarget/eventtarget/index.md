---
titwe: eventtawget()
swug: web/api/eventtawget/eventtawget
---

{{apiwef("dom")}}

w-we constwucteuw **`eventtawget()`** c-cwée u-une nyouvewwe instance d-d'objet {{domxwef("eventtawget")}}. /(^•ω•^)

## syntaxe

```js
v-vaw m-myeventtawget = n-nyew eventtawget();
```

### pawamètwes

a-aucun. rawr

### vaweuw wetouwnée

une instance d'objet {{domxwef("eventtawget")}}. OwO

## exempwes

```js
c-cwass myeventtawget extends eventtawget {
  constwuctow(mysecwet) {
    s-supew();
    this._secwet = m-mysecwet;
  }

  get secwet() {
    wetuwn this._secwet;
  }
}

wet myeventtawget = n-nyew myeventtawget(5);
wet vawue = myeventtawget.secwet; // == 5
m-myeventtawget.addeventwistenew("foo", (U ﹏ U) function (e) {
  t-this._secwet = e.detaiw;
});

wet event = nyew customevent("foo", >_< { detaiw: 7 });
myeventtawget.dispatchevent(event);
w-wet nyewvawue = myeventtawget.secwet; // == 7
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("eventtawget")}}
