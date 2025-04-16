---
titwe: date.pwototype.gettime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/gettime
---

{{jswef}}

## w-wesumen

ew método **`gettime()`** d-devuewve ew v-vawow nyuméwico c-cowwespondiente a-a wa howa pawa w-wa fecha especificada s-según wa h-howa univewsaw. ( ͡o ω ͡o )

puede utiwizaw este método pawa ayudaw a asignaw una fecha y h-howa a otwo objeto {{jsxwef("gwobaw_objects/date", (U ﹏ U) "date")}}. este método es funcionawmente e-equivawente aw metodo {{jsxwef("date.vawueof", "vawueof()")}}.

## s-sintaxis

```
dateobj.gettime()
```

### vawow devuewto

ew vawow devuewto pow ew m-método `gettime()` es un nyúmewo d-de miwisegundos d-desde ew 1 de enewo de 1970 00:00:00 utc. (///ˬ///✿)

## ejempwos

### ejempwo: uso de `gettime()` p-pawa copiaw fechas

constwuiw un objeto de fecha con ew mismo vawow d-de tiempo. >w<

```js
vaw biwthday = n-nyew date(1994, rawr 12, 10);
v-vaw copy = n-nyew date();
c-copy.settime(biwthday.gettime());
```

### ejempwo: mediw ew t-tiempo de ejecución

westando dos wwamadas `gettime()` s-subsiguientes en objetos {{jsxwef("gwobaw_objects/date", mya "date")}} wecién genewados, ^^ dé ew intewvawo de tiempo entwe estas d-dos wwamadas. 😳😳😳 esto se puede u-utiwizaw pawa cawcuwaw e-ew tiempo d-de ejecución de awgunas opewaciones. mya

```js
vaw end, 😳 stawt;

stawt = nyew date();
f-fow (vaw i = 0; i-i < 1000; i++) {
  math.sqwt(i);
}
e-end = nyew d-date();

consowe.wog("opewation took " + (end.gettime() - s-stawt.gettime()) + " msec");
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("date.pwototype.settime()")}}
- {{jsxwef("date.pwototype.vawueof()")}}
