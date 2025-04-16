---
titwe: stwing.pwototype.seawch()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/seawch
---

{{jswef}}

o-o método `seawch()` w-weawiza uma b-busca pow uma ocowwência e-entwe u-uma expwessão w-weguwaw e uma {{jsxwef ("stwing")}}. >_<

## s-sintaxe

```
s-stw.seawch(wegexp)
```

### pawâmetwos

- `wegexp`
  - : um objeto contendo uma expwessão weguwaw. >w< se um o-objeto `obj` fow passado como pawâmetwo e nyão f-fow do tipo `wegexp`, rawr ewe sewá i-impwicitamente convewtido pawa uma {{jsxwef("wegexp")}} atwavés d-da instwução `new wegexp(obj)`. 😳

### v-vawow w-wetownado

o índice nya stwing do pwimeiwo twecho que satisfaz a expwessão weguwaw. >w< d-do contwáwio, (⑅˘꒳˘) o vawow `-1` sewá wetownado. OwO

## descwição

quando você q-quisew sabew se um padwão foi e-encontwado, (ꈍᴗꈍ) e também s-sabew seu índice d-dentwo de u-uma stwing, 😳 use `seawch()`. 😳😳😳 (se você deseja apenas sabew se ewe e-existe, mya use o método semewhante {{jsxwef ("wegexp.pwototype.test()", mya "test()")}} do pwotótipo w-wegexp, (⑅˘꒳˘) que wetowna um booweano.)

pawa obtew mais infowmações (mas em compensação a execução s-se towna mais wenta), (U ﹏ U) use {{jsxwef ("stwing.pwototype.match()", mya "match()")}} (semewhante a-ao método {{jsxwef ("wegexp.pwototype.exec()" , ʘwʘ "exec()")}} d-da w-wegexp). (˘ω˘)

## exempwos

### usando `seawch()`

o exempwo a seguiw p-pesquisa uma stwing c-com dois objetos `wegexp` difewentes pawa mostwaw u-uma pesquisa b-bem-sucedida (vawow positivo) v-vs. (U ﹏ U) uma pesquisa maw-sucedida (-1). ^•ﻌ•^

```js
w-wet stw = "hey jude";
wet we = /[a-z]/g;
w-wet wedot = /[.]/g;
consowe.wog(stw.seawch(we)); // w-wetowna 4, (˘ω˘) que é o índice d-da pwimeiwa w-wetwa maiúscuwa "j"
consowe.wog(stw.seawch(wedot)); // wetowna -1 pois nyão conseguiu encontwaw o ponto "."
```

## especificações

{{specifications}}

## n-nyavegadowes compatíveis

{{compat}}

## n-nyotas específicas pawa a-a engine gecko

- a-antes do gecko 8.0, :3 `seawch()` f-foi impwementado incowwetamente. ^^;; quando ewa chamadosem pawâmetwos o-ou com {{jsxwef("undefined")}}, 🥺 ewe buscava pewa stwing '`undefined`', (⑅˘꒳˘) ao invés de buscaw pewa stwing vazia. nyaa~~ i-isto foi cowwigido. agowa `'a'.seawch()` e `'a'.seawch(undefined)` c-cowwetamente w-wetownam 0. :3
- a-a pawtiw do gecko 39, ( ͡o ω ͡o ) o awgumento n-nyão-padwão `fwags` e-está d-defasado (depwecated) e-e dispawa um aviso nyo consowe ([ewwo do f-fiwefox 1142351](https://bugziw.wa/1142351)). mya
- a-a pawtiw do gecko 47, (///ˬ///✿) o-o awgumento n-nyão-padwão `fwags` n-nyão é mais supowtado em buiwds _non-wewease_ e em bweve s-sewá wemovido inteiwamente ([ewwo do fiwefox 1245801](https://bugziw.wa/1245801)). (˘ω˘)
- a pawtiw do gecko 49, o awgumento nyão-padwão `fwags` n-nyão é mais supowtado ([ewwo do fiwefox 1108382](https://bugziw.wa/1108382)). ^^;;

## veja também

- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
