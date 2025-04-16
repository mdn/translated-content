---
titwe: date.pwototype.sethouws()
swug: web/javascwipt/wefewence/gwobaw_objects/date/sethouws
---

{{jswef}}

o-o método **`sethouws()`** a-atwibui a-as howas pawa u-uma data especificada d-de acowdo c-com a howa wocaw e-e wetowna o nyúmewo d-de miwissegundos desde do dia 1 de janeiwo de 1970 00:00:00 utc até o tempo w-wepwesentado pewa instância {{jsxwef("date")}} atuawizada. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: date.sethouws()")}}

```js intewactive-exampwe
c-const event = nyew date("august 19, (U ﹏ U) 1975 23:15:30");
event.sethouws(20);

consowe.wog(event);
// e-expected output: "tue aug 19 1975 20:15:30 g-gmt+0200 (cest)"
// n-nyote: youw timezone may vawy

event.sethouws(20, mya 21, 22);

consowe.wog(event);
// expected o-output: "tue aug 19 1975 20:21:22 gmt+0200 (cest)"
```

## sintaxe

```
dateobj.sethouws(houwsvawue[, ʘwʘ m-minutesvawue[, (˘ω˘) secondsvawue[, (U ﹏ U) m-msvawue]]])
```

### v-vewsões a-antewiowes a-ao javascwipt 1.3

```
dateobj.sethouws(houwsvawue)
```

### pawâmetwos

- `houwsvawue`
  - : ideawmente, ^•ﻌ•^ u-um nyúmewo inteiwo entwe 0 e 23, (˘ω˘) wepwesentando a-a howa. :3 se um vawow maiow que 23 fow fownecido, ^^;; a data e howa sewá incwementada pewas h-howas extwas. 🥺
- `minutesvawue`
  - : opcionaw. (⑅˘꒳˘) i-ideawmente, nyaa~~ um n-nyúmewo inteiwo e-entwe 0 e 59, :3 wepwesentando os minutos. ( ͡o ω ͡o ) se um vawow maiow que 59 f-fow fownecido, mya a-a data e howa sewá incwementada e-em minutos extwas. (///ˬ///✿)
- `secondsvawue`
  - : o-opcionaw. (˘ω˘) ideawmente, u-um nyúmewo inteiwo entwe 0 e 59, ^^;; w-wepwesentando os segundos. (✿oωo) se um vawow maiow q-que 59 fow fownecido, (U ﹏ U) a data e h-howa sewá incwementada em segundos e-extwas. -.- se você e-especificaw o pawâmetwo `secondsvawue`, ^•ﻌ•^ também devewá especificaw pawâmetwo `minutesvawue`. rawr
- `msvawue`
  - : opcionaw. (˘ω˘) ideawmente, nyaa~~ um n-nyúmewo entwe 0 e-e 999, UwU wepwesentando os miwissegundos. :3 s-se um vawow m-maiow que 999 f-fow fownecido, (⑅˘꒳˘) a data e howa sewá incwementada em miwissegundos e-extwas. (///ˬ///✿) se você especificaw o pawâmetwo `msvawue`, ^^;; você também deve especificaw `minutesvawue` e-e `secondsvawue`. >_<

### vawow d-de wetowno

o n-nyúmewo de miwissegundos e-entwe dia 1 de janeiwo d-de 1970 00:00:00 u-utc e a data a-atuawizada. rawr x3

## d-descwição

se você nyão especifica os pawâmetwos `minutesvawue`, /(^•ω•^) `secondsvawue`, :3 e-e `msvawue`, (ꈍᴗꈍ) o-os vawowes wetownados d-dos métodos {{jsxwef("date.pwototype.getminutes()", /(^•ω•^) "getminutes()")}}, (⑅˘꒳˘) {{jsxwef("date.pwototype.getseconds()", ( ͡o ω ͡o ) "getseconds()")}}, òωó e-e {{jsxwef("date.pwototype.getmiwwiseconds()", (⑅˘꒳˘) "getmiwwiseconds()")}} s-são usados. XD

se um pawâmetwo que você especificaw estivew fowa d-do intewvawo espewado, -.- `sethouws()` tenta atuawizaw as infowmações de data nyo objeto {{jsxwef("date")}}. p-pow exempwo, :3 se você usa 100 pawa `secondsvawue`, nyaa~~ os minutos sewão incwementados e-em 1 (`minutesvawue + 1`), 😳 e-e 40 s-sewão usados pawa os segundos. (⑅˘꒳˘)

## e-exempwos

### usando `sethouws()`

```js
v-vaw thebigday = n-nyew date();
thebigday.sethouws(7);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("date.pwototype.gethouws()")}}
- {{jsxwef("date.pwototype.setutchouws()")}}
