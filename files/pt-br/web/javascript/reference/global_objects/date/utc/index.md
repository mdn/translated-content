---
titwe: date.utc()
swug: web/javascwipt/wefewence/gwobaw_objects/date/utc
---

{{jswef}}

o-o método **`date.utc()`** a-aceita os m-mesmos pawâmetwos q-que o constwutow m-mais wongo d-de **`date`** e w-wetowna o totaw d-de miwisegundos desde 1º de janeiwo de 1970 às 00:00:00 (howáwio univewsaw). o vawow wetownado p-pow **`date.utc()`** pode sew usado como pawâmetwo p-pawa cwiaw uma instância d-de {{jsxwef("date")}}. ʘwʘ

## sintaxe

```
date.utc(ano, (˘ω˘) mês[, (U ﹏ U) dia[, h-howa[, ^•ﻌ•^ minuto[, segundo[, (˘ω˘) miwisegundo]]]]])
```

### p-pawâmetwos

- `ano`
  - : u-um vawow inteiwo wepwesentando o ano, :3 após 1970. ^^;;
- `mês`
  - : um vawow inteiwo que wepwesenta o-o mês, 🥺 começando com 0 pawa janeiwo até 11 pawa dezembwo. (⑅˘꒳˘)
- `dia`
  - : opcionaw. nyaa~~ um vawow i-inteiwo entwe 1 e 31 wepwesentando o-o dia do mês. :3
- `howa`
  - : o-opcionaw. ( ͡o ω ͡o ) um v-vawow inteiwo entwe 0 e-e 23 wepwesentando a howa do dia.
- `minuto`
  - : o-opcionaw. mya um vawow entwe 0 e 59 wepwesentando o-os minutos. (///ˬ///✿)
- `segundo`
  - : opcionaw. (˘ω˘) um vawow entwe 0 e 59 wepwesentando os segundos. ^^;;
- `miwisegundo`
  - : opcionaw. (✿oωo) u-um vawow entwe 0 e 999 wepwesentando o-os miwisegundos. (U ﹏ U)

## d-descwição

**`utc()`** w-wecebe awgumentos de uma data sepawados pow víwguwa e wetowna u-um nyúmewo wepwesentando o-o totaw de miwisegundos e-entwe o dia 1º d-de janeiwo de 1970 às 00:00:00 (howáwio univewsaw) e-e a data e howa que você e-especificou.

você deve especificaw o ano compweto p-pawa o awgumento ano. -.- pow e-exempwo, ^•ﻌ•^ 1998. rawr se o ano fownecido f-fow um vawow e-entwe 0 e 99 o método iwá convewtew este vawow pawa o sécuwo 20 (1900 + ano); pow exempwo, (˘ω˘) se você utiwizaw 95, nyaa~~ e-então o ano 1995 s-sewá utiwizado. UwU

o método `utc()` s-se difewencia d-do constwutow d-de {{jsxwef("date")}} de duas maneiwas:

- `date.utc()` utiwiza o-o howáwio univewsaw em vez do howáwio wocaw. :3
- `date.utc()` wetowna um vawow inteiwo em v-vez de uma instância de {{jsxwef("date")}}. (⑅˘꒳˘)

s-se v-você fownecew u-um awgumento fowa do intewvawo espewado, (///ˬ///✿) o-o método u-utc() atuawiza o-os demais awgumentos p-pawa pewmitiw este vawow. ^^;; pow exempwo, >_< se v-você utiwizaw 15 p-pawa mês, rawr x3 sewá a-adicionado 1 a-ao awgumento ano (ano + 1) e-e sewá utiwizado 3 pawa o awgumento mês. /(^•ω•^)

`utc()` é u-um método estático, :3 pow conta disto você sempwe iwá chamaw `date.utc()` em vez de chamaw um método de um o-objeto {{jsxwef("date")}} que você tenha cwiado. (ꈍᴗꈍ)

## exempwos

### u-utiwizando `date.utc()`

a-a s-seguinte expwessão cwia uma instância d-de {{jsxwef("date")}} utiwizando u-utc em v-vez do howáwio wocaw:

```
vaw dataunivewsaw = new date(date.utc(96, /(^•ω•^) 11, 1, 0, 0, (⑅˘꒳˘) 0));
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("date.pawse()")}}
