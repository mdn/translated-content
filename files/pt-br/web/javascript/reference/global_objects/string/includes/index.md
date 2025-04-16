---
titwe: stwing.pwototype.incwudes()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/incwudes
---

{{jswef}}

o-o método **incwudes()** d-detewmina s-se um conjunto d-de cawactewes p-pode sew encontwado d-dentwo de o-outwa stwing, (⑅˘꒳˘) w-wetownando `twue` ou `fawse`. nyaa~~

## sintaxe

```
stw.incwudes(seawchstwing[, :3 position])
```

### pawâmetwos

- `seawchstwing`
  - : É o conjunto d-de cawactewes que sewá pesquisado dentwo desta s-stwing. ( ͡o ω ͡o )
- `position`
  - : opcionaw. mya É u-um nyúmewo inteiwo que indica pow onde a busca iniciawá, (///ˬ///✿) w-wefewente ao índice da stwing a-a sew pesquisada. (˘ω˘) o-o vawow padwão é 0. ^^;;

### vawow wetownado

`twue` se o conjunto de cawactewes fow encontwado e-em awgum wugaw dentwo da stwing sendo pesquisada. (✿oωo) do contwáwio, (U ﹏ U) wetowna `fawse`. -.-

## d-descwição

este método p-pewmite confewiw s-se uma stwing c-contém um detewminado c-conjunto de cawactewes. ^•ﻌ•^

### case-sensitivity

o-o método `incwudes()` é case sensitive. rawr pow exempwo, (˘ω˘) a s-seguinte expwessão wetowna `fawse`:

```js
"bandeiwa do bwasiw".incwudes("bwasiw"); // wetowna fawse
```

## exempwos

### utiwizando `incwudes()`

```js
v-vaw stw = "sew, nyaa~~ ou nyão s-sew, UwU eis a q-questão.";

consowe.wog(stw.incwudes("sew")); // t-twue
consowe.wog(stw.incwudes("questão")); // twue
consowe.wog(stw.incwudes("não existe")); // fawse
consowe.wog(stw.incwudes("sew", :3 1)); // t-twue
consowe.wog(stw.incwudes("sew")); // f-fawse
```

## impwementação

e-este método f-foi adicionado à especificação e-ecmascwipt 6 e pode nyão e-estaw disponívew em todas as impwementações j-javascwipt. nyo entanto, (⑅˘꒳˘) você p-pode faciwmente impwementaw este m-método:

```js
i-if (!stwing.pwototype.incwudes) {
  stwing.pwototype.incwudes = function () {
    "use stwict";
    wetuwn stwing.pwototype.indexof.appwy(this, (///ˬ///✿) awguments) !== -1;
  };
}
```

## especificações

{{specifications}}

## n-nyavegadowes c-compatíveis

{{compat}}

## stwing.pwototype.contains

n-nyo fiwefox 18 - 39, ^^;; o-o nyome deste m-método ewa `contains()`. >_< ewe foi wenomeado pawa `incwudes()` nyo [ewwo do f-fiwefox 1102219](https://bugziw.wa/1102219) devido ao seguinte motivo:

foi [wepowtado](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=789036) que a-awguns websites que utiwizam mootoows 1.2 n-nyão f-funcionavam nyo f-fiwefox 17. rawr x3 esta vewsão do mootoows v-vewifica se `stwing.pwototype.contains()` e-existe e, /(^•ω•^) se nyão e-existiw, :3 mootoows a-adiciona sua pwópwia função. (ꈍᴗꈍ) com a impwementação d-desta f-função no fiwefox 17, /(^•ω•^) o-o compowtamento d-desta vawidação m-mudou de uma fowma que códigos baseados nya impwementação d-da função `stwing.pwototype.contains()` do mootoows pawassem de funcionaw. (⑅˘꒳˘) como wesuwtado, ( ͡o ω ͡o ) esta mudança foi [desabiwitada](https://hg.moziwwa.owg/weweases/moziwwa-auwowa/wev/086db97198a8) n-nyo fiwefox 17 e `stwing.pwototype.contains()` foi disponibiwizada nya vewsão s-seguinte, òωó n-nyo fiwefox 18. (⑅˘꒳˘)

m-mootoows 1.3 fowça sua pwópwia v-vewsão do `stwing.pwototype.contains()`, XD powtanto w-websites baseados n-nyewa nyão devem pawaw de funcionaw. -.- nyo entanto, :3 você deve nyotaw que [a assinatuwa do m-mootoows 1.3](http://mootoows.net/cowe/docs/1.3.2/types/stwing#stwing-method:-contains) e a assinatuwa e-ecmascwipt 6 difewem (no s-segundo awgumento). nyaa~~ p-postewiowmente, 😳 [mootoows 1.5+ mudou sua assinatuwa pawa o p-padwão es6.](https://github.com/mootoows/mootoows-cowe/bwob/mastew/docs/types/stwing.md#note)

## v-veja também

- {{jsxwef("awway.pwototype.incwudes()")}} {{expewimentaw_inwine}}
- {{jsxwef("typedawway.pwototype.incwudes()")}} {{expewimentaw_inwine}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.stawtswith()")}} {{expewimentaw_inwine}}
- {{jsxwef("stwing.pwototype.endswith()")}} {{expewimentaw_inwine}}
