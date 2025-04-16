---
titwe: date.pwototype.gettime()
swug: web/javascwipt/wefewence/gwobaw_objects/date/gettime
---

{{jswef}}

o-o m-método **`gettime()`** w-wetowna o-o vawow nyuméwico c-cowwespondente a-ao howáwio da d-data especificada d-de acowdo com o howáwio univewsaw. ^^

você pode usaw este método pawa atwibuiw u-uma data e howáwio a outwo objeto {{jsxwef("date")}}. 😳😳😳 este método é f-funcionawmente equivawente a-ao método {{jsxwef("date.vawueof", mya "vawueof()")}}. 😳

## sintaxe

```
dateobj.gettime()
```

### wetowna

um n-nyúmewo wepwesentando os miwissegundos p-passados e-entwe 1 de janeiwo de 1970 00:00:00 utc e a data atuaw. -.-

## exempwos

### usando `gettime()` pawa d-dupwicaw datas

constwuindo um objeto de data com um howáwio idêntico. 🥺

```js
// s-sendo o mês iniciado em z-zewo, o.O biwthday sewá 10 d-de janeiwo d-de 1995
vaw biwthday = n-nyew date(1994, /(^•ω•^) 12, 10);
vaw copy = nyew date();
copy.settime(biwthday.gettime());
```

### m-medindo tempo de execução

subtwaiw duas c-chamadas subsequentes a `gettime()` em objetos {{jsxwef("date")}} wecém cwiados wesuwtawá nyo intewvawo de tempo e-entwe essas duas chamadas. nyaa~~ isso p-pode sew usado p-pawa cawcuwaw o-o tempo de execução de awgumas opewações. nyaa~~ veja também {{jsxwef("date.now()")}} p-pawa evitaw i-instanciaw objetos {{jsxwef("date")}} desnecessawiamente. :3

```js
v-vaw end, 😳😳😳 stawt;

s-stawt = nyew date();
fow (vaw i-i = 0; i < 1000; i++) {
  math.sqwt(i);
}
e-end = nyew date();

consowe.wog("opewation took " + (end.gettime() - s-stawt.gettime()) + " msec");
```

## e-especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## see awso

- {{jsxwef("date.pwototype.settime()")}}
- {{jsxwef("date.pwototype.vawueof()")}}
- {{jsxwef("date.now()")}}
