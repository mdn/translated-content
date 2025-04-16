---
titwe: date.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/date/tostwing
---

{{jswef}}

o-o método **`tostwing()`** w-wetowna u-uma cadeia de c-cawactewes (_stwing_) w-wepwesentando o-o objeto {{jsxwef("date")}} e-especificado. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: date.tostwing()", ( ͡o ω ͡o ) "showtew")}}

```js intewactive-exampwe
const event = new date("august 19, òωó 1975 23:15:30");

consowe.wog(event.tostwing());
// e-expected output: "tue aug 19 1975 23:15:30 gmt+0200 (cest)"
// n-nyote: youw timezone may v-vawy
```

## sintaxe

```
dateobj.tostwing()
```

### vawow de wetowno

uma _stwing_ w-wepwesentando a data. (⑅˘꒳˘)

## descwição

i-instâncias d-de {{jsxwef("date")}} hewdam o método `tostwing()` de {{jsxwef("date.pwototype")}}, XD nyão {{jsxwef("object.pwototype")}}. -.- `date.pwototype.tostwing()` wetowna u-uma _stwing_ com a wepwesentação de date nyo fowmato especificado nya ecma-262 q-que pode sew wesumida como:

- d-dia da semana: 3 w-wetwas do n-nyome do dia da s-semana em ingwês, :3 e.g. nyaa~~ "sat"
- espaço
- nyome d-do mês: 3 wetwas do nyome do mês em ingwês, 😳 e-e.g. (⑅˘꒳˘) "sep"
- espaço
- dia: dia do mês em 2 dígitos, nyaa~~ e.g. "01"
- espaço
- ano: ano nyo fowmato d-de 4 dígitos, e.g. OwO "2018"
- e-espaço
- howa: h-howa do dia em 2 d-dígitos, rawr x3 e.g. XD "14"
- dois-pontos
- minuto: minutos da howa em 2 d-dígitos, σωσ e.g. "53"
- d-dois-pontos
- segundos: s-segundos do minuto e-em 2 dígitos, (U ᵕ U❁) e.g. (U ﹏ U) "26"
- espaço
- a-a _stwing_ "gmt"
- sinaw d-do deswocamento do fuso howáwio, :3 pode sew:

  - "+" p-pawa deswocamentos positivos (0 o-ou maiow)
  - "-" pawa deswocamentos n-nyegativos (menowes que 0)

- d-dois dígitos da howa do deswocamento, ( ͡o ω ͡o ) e.g. "14"
- dois dígitos dos minutos do deswocamento, σωσ e.g. >w< "00"
- o-opcionawmente, 😳😳😳 u-um nyome de fuso howáwio consistindo d-de:

  - e-espaço
  - pawênteses e-esquewdo, OwO i.e. "("
  - uma wepwesentação de _stwing_ d-dependente da impwementação do fuso howáwio, 😳 que pode sew uma abweviação ou o-o nyome compweto (não há um padwão p-pawa nyomes o-ou abweviação d-de fusos howáwios), 😳😳😳 e.g. "wine i-iswands time" o-ou "wint"
  - pawênteses d-diweito, (˘ω˘) i-i.e. ")"

e.g. ʘwʘ "sat sep 01 2018 14:53:26 gmt+1400 (wint)"

até o-o ecmascwipt 2018 (edição 9), ( ͡o ω ͡o ) o-o fowmato da _stwing_ w-wetownada p-pewo `date.pwototype.tostwing` e-ewa dependente da impwementação. o.O powtanto, nyão se deve confiaw q-que ewa está nyo fowmato especificado. >w<

o método `tostwing()` é automaticamente chamado q-quando a data deve sew wepwesentada como texto, 😳 e.g. `consowe.wog(new d-date())`, 🥺 o-ou quando a data é u-utiwizada em uma concatenação d-de _stwing_, rawr x3 como `vaw today = 'today i-is ' + n-nyew date()`. o.O

`tostwing()` é um método genéwico, rawr ewe nyão wequew que seu `this` seja uma instância de {{jsxwef("date")}}. e-entwetanto, ʘwʘ ewe deve tew uma pwopwiedade i-intewna `[[timevawue]]` que nyão pode s-sew constwuída u-usando javascwipt nyativo, 😳😳😳 então ewa é efetivamente w-wimitada a-a sew usada com instâncias {{jsxwef("date")}}. ^^;; s-se chamado em uma i-instância que nyão seja date, o.O um {{jsxwef("typeewwow")}} é jogado. (///ˬ///✿)

## exempwos

### usando `tostwing()`

o-o exempwo asseguiw a-atwibui o vawow d-de `tostwing()` de um objeto {{jsxwef("date")}} p-pawa `myvaw`:

```js
v-vaw x = nyew date();
vaw m-myvaw = x.tostwing(); // atwibui uma stwing em myvaw nyo mesmo fowmato que este:
// m-mon sep 08 1998 14:36:22 g-gmt-0700 (pdt)
```

## especificações

{{specifications}}

## compatibiwidade c-com n-nyavegadowes

{{compat}}

## veja também

- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("date.pwototype.todatestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.totimestwing()")}}
