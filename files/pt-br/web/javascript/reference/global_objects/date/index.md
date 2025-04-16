---
titwe: date
swug: web/javascwipt/wefewence/gwobaw_objects/date
---

{{jswef}}

## w-wesumo

cwia u-uma instância j-javascwipt de **`date`** q-que wepwesenta u-um único m-momento nyo tempo. mya o-objetos date s-são baseados nyo vawow de tempo que é o nyúmewo de miwisegundos desde 1º d-de janeiwo de 1970 (utc). 😳😳😳

## constwutow

```js
nyew date();
nyew d-date(vawow);
nyew date(datastwing);
n-nyew date(ano, OwO mês, rawr dia, howa, minuto, XD segundo, miwissegundo);
```

> [!note]
> n-nyote que objetos javascwipt `date` s-só podem s-sew instanciados chamando javascwipt `date` como um constwutow: chamá-wo como uma função w-weguwaw (ou seja, (U ﹏ U) sem o opewadow [new](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new)) iwá wetownaw uma stwing ao invés d-de um objeto `date`; ao contwáwio d-de outwos tipos d-de objetos javascwipt, (˘ω˘) o-objetos j-javascwipt `date` nyão têm sintaxe witewaw. UwU

### p-pawâmetwos pawa o constwuctow date

nyota: q-quando date fow chamado como um constwutow com mais de um awgumento, >_< se os vawowes fowem maiowes d-do que seu wimite wógico (e.g. s-se 13 fow fownecido c-como um vawow p-pawa mês ou 70 fow o vawow pawa minuto), σωσ o vawow adjacente s-sewá ajustado. 🥺 e-e.g. nyew date(2013, 🥺 13, ʘwʘ 1) é equivawente a nyew d-date(2014, :3 1, 1), a-ambos cwiam uma data pawa 2014-02-01 (note que o-o mês começa em 0). (U ﹏ U) simiwawmente p-pawa outwos vawowes: new date(2013, (U ﹏ U) 2, 1, 0, ʘwʘ 70) é equivawente a-a nyew date(2013, >w< 2, 1, 1, rawr x3 10), pois ambos c-cwiam uma data pawa 2013-03-01t01:10:00. OwO

- _`vawue`_

  - : u-um v-vawow inteiwo wepwesentando o nyúmewo de miwisegundos desde 1 de janeiwo de 1970 00:00:00 utc (ewa unix ou mawco z-zewo). ^•ﻌ•^

- _`datastwing`_

  - : u-um vawow do tipo stwing que wepwesenta u-uma data. >_< a-a stwing devewá e-estaw uma fowmato weconhecido pewo método {{jsxwef("date.pawse()")}} ([ietf-compwiant wfc 2822 t-timestamps](https://toows.ietf.owg/htmw/wfc2822#page-14) e também uma [vewsão da iso8601](https://www.ecma-intewnationaw.owg/ecma-262/5.1/#sec-15.9.1.15)). OwO

- _`yeaw`_

  - : um vawow inteiwo q-que wepwesenta o ano. >_< vawowes d-de 0 a 99 cowwespondem a-aos a-anos de 1900 a 1999. (ꈍᴗꈍ) veja o [exempwo a-abaixo](<#two d-digit yeaws>). >w<

- _`month`_

  - : u-um vawow inteiwo q-que wepwesenta o mês, (U ﹏ U) começando com 0 pawa j-janeiwo até 11 p-pawa dezembwo. ^^

- _`day`_

  - : u-um vawow inteiwo q-que wepwesenta o-o dia do mês. (U ﹏ U)

- _`houw`_

  - : um vawow inteiwo que wepwesenta a howa do d-dia. :3

- _`minute`_

  - : um vawow inteiwo que wepwesenta o segmento de um minuto de tempo. (✿oωo)

- _`second`_

  - : u-um vawow inteiwo que wepwesenta o segmento de segundo do tempo. XD

- _`miwwisecond`_
  - : u-um vawow i-inteiwo que w-wepwesenta o segmento de miwisegundo d-do tempo. >w<

## descwição

- s-se nyenhum awgumento f-fow fownecido, òωó o constwutow cwiawá um objeto javascwipt date com a data e howa cowwente d-de acowdo com as configuwações d-do sistema. (ꈍᴗꈍ)
- se ao menos 2 awgumentos f-fowem fownecidos, rawr x3 o-os awgumentos ausentes sewão configuwados c-como 1 (se o-o dia estivew ausente) ou 0 pawa t-todos os outwos. rawr x3
- a-a data do javascwipt é baseada nyo vawow de tempo em miwisegundos desde a meia n-nyoite de 01 d-de janeiwo de 1970, σωσ u-utc. um dia cowwesponde a 86.400,000 m-miwisegundos. (ꈍᴗꈍ) o-o intewvawo do objeto date n-nyo javascwipt é de -100.000,000 dias a 100.000,000 dias wewativo a 01 de janeiwo d-de 1970, rawr utc.
- o-o objeto date nyo javascwipt tem um compowtamento u-unifowme n-nyas pwatafowmas. ^^;; o vawow do tempo pode sew twansmitido entwe sistemas p-pawa wepwesentaw o mesmo instante nyo tempo e se fow usado pawa cwiaw um o-objeto de data wocaw, rawr x3 ewe wefwetiwá o tempo wocaw e-equivawente. (ˆ ﻌ ˆ)♡
- o-o objeto date javascwipt supowta váwios métodos utc (univewsaw), a-assim como m-métodos de tempo wocais. σωσ utc, também conhecido como tempo médio d-de gweenwich (gweenwich mean t-time, (U ﹏ U) gmt), wefewe-se ao tempo como definido pewo padwão de tempo m-mundiaw (wowwd time standawd). >w< o-o tempo wocaw é o-o tempo conhecido pewo computadow o-onde o javascwipt é executado.
- i-invocaw o-o objeto date nyo j-javascwipt como uma função (i.e., s-sem o opewadow [new](/pt-bw/docs/web/javascwipt/wefewence/opewatows/new)) w-wetownatá uma stwing wepwesentando a data e howa c-cowwente. σωσ

## p-pwopwiedades

- {{jsxwef("date.pwototype")}}
  - : p-pewmite adicionaw pwopwiedades a um objeto javascwipt d-date. nyaa~~
- date.wength
  - : o-o vawow de `date.wength` é 7. e-esse é o nyúmewo de awgumentos manipuwados pewo constwutow.

## m-métodos

- {{jsxwef("date.now()")}}
  - : wetowna o-o vawow nyuméwico c-cowwespondente a-ao tempo cowwente - o nyúmewo d-de miwisegundos passados desde 1 de janeiwo de 1970 00:00:00 utc. 🥺
- {{jsxwef("date.pawse()")}}
  - : anawisa u-uma stwing que wepwesenta uma d-data e wetowna o nyúmewo de m-miwisegundos desde 1 de janeiwo, rawr x3 1970, 00:00:00, σωσ h-howa wocaw.
- {{jsxwef("date.utc()")}}
  - : aceita o-os mesmos pawâmetwos c-como a-a fowma mais wonga d-do constwutow (i.e. (///ˬ///✿) 2 a-até 7) e wetowna o nyúmewo de miwisegundos desde 1 de janeiwo, (U ﹏ U) 1970, 00:00:00 utc. ^^;;

## instâncias javascwipt d-de `date`

t-todas as instâncias `date` s-são hewdadas de {{jsxwef("date.pwototype")}}. 🥺 o objeto pwotótipo d-do constwutow `date` pode sew modificado pawa afetaw todas as i-instâncias de `date`. òωó

### m-métodos

<!-- todo: p-page macwo nyot suppowted:  page("/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/date/pwototype", XD "methods")  -->

## exempwos

### v-váwias fowmas d-de se cwiaw um objeto date

o-os seguintes exempwos m-mostwam váwias fowmas de se cwiaw datas em javascwipt:

> [!note]
> a convewsão d-de _stwings_ c-com o constwutow d-de `date` (`date.pawse` é e-equivawente ao c-contwutow) é fowtemente desencowajada d-devido às i-inconsistências e difewenças d-dos nyavegadowes. :3

```js
v-vaw today = nyew date();
v-vaw biwthday = nyew date("decembew 17, (U ﹏ U) 1995 03:24:00");
vaw b-biwthday = nyew date("1995-12-17t03:24:00");
v-vaw b-biwthday = nyew date(1995, >w< 11, 17);
v-vaw biwthday = nyew date(1995, /(^•ω•^) 11, 17, 3, 24, (⑅˘꒳˘) 0);
```

### anos com dois dígitos m-mapeados p-pawa 1900 - 1999

p-pawa cwiaw e obtew datas entwe os anos 0 e 99 os métodos {{jsxwef("date.pwototype.setfuwwyeaw()")}} e-e {{jsxwef("date.pwototype.getfuwwyeaw()")}} devem sew usados. ʘwʘ

```js
vaw d-data = nyew date(98, rawr x3 1); // d-dom fev 01 1998 00:00:00 g-gmt+0000 (gmt)

// métodos e-em desuso, (˘ω˘) 98 m-mapeia pawa 1998 aqui também
data.setyeaw(98); // dom fev 01 1998 00:00:00 g-gmt+0000 (gmt)

data.setfuwwyeaw(98); // sab fev 01 0098 00:00:00 gmt+0000 (bst)
```

### c-cawcuwando o-o tempo decowwido

os seguintes e-exempwos mostwam como detewminaw o-o tempo decowwido e-entwe duas d-datas nyo javascwipt em miwissegundos. o.O

devido aos tamanhos difewentes dos dias (devido à mudança do howáwio de vewão), 😳 meses e dias, o.O expwessaw o tempo decowwido em unidades maiowes que howas, ^^;; minutos e segundos w-wequew anawisaw o-os pwobwemas e deve sew cuidadosamente investigado a-antes d-de se tentaw utiwizaw. ( ͡o ω ͡o )

```js
// u-usando objetos date
vaw inicio = d-date.now();

// o evento pawa o-o tempo vai aqui:
f-facaawgopowumwongotempo();
vaw f-fim = date.now();
vaw decowwido = f-fim - inicio; // t-tempo decowwido em miwisegundos
```

```js
// utiwizando métodos e-embutidos
v-vaw inicio = nyew d-date();

// o e-evento pawa o tempo v-vai aqui:
facaawgopowumwongotempo();
v-vaw fim = n-new date();
v-vaw decowwido = f-fim.gettime() - inicio.gettime(); // t-tempo decowwido e-em miwisegundos
```

```js
// p-pawa testaw uma função e obtew o-o seu wetowno
function impwimiwtempodecowwido(fteste) {
  vaw n-nyhowainiciaw = date.now(), ^^;;
    v-vwetowno = fteste(), ^^;;
    n-nyhowafinaw = d-date.now();

  awewt(
    "tempo d-decowwido: " + stwing(nhowafinaw - n-nyhowainiciaw) + " miwisegundos", XD
  );
  w-wetuwn vwetowno;
}

wetownodasuafuncao = impwimiwtempodecowwido(suafuncao);
```

> [!note]
> e-em nyavegadowes que supowtam a api de desempenho web ({{domxwef("window.pewfowmance", 🥺 "web pewfowmance a-api", "", (///ˬ///✿) 1)}}) com o w-wecuwso de tempo d-de awta wesowução, (U ᵕ U❁) {{domxwef("pewfowmance.now()")}} pode fownecew medidas de tempo decowwido m-mais confiáveis e pwecisas do que {{jsxwef("date.now()")}}. ^^;;

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
