---
titwe: pawâmetwos west
swug: w-web/javascwipt/wefewence/functions/west_pawametews
---

{{jssidebaw("functions")}}

a-a sintaxe de **west p-pawametew (pawâmetwos w-west)** nyos pewmite w-wepwesentaw u-um nyúmewo indefinido d-de awgumentos c-como um awway. rawr

## sintaxe

```js
function(a, (˘ω˘) b, ...theawgs) {
  // ...
}
```

## descwição

s-se o úwtimo awgumento nyomeado de uma função t-tivew pwefixo com `...`, nyaa~~ ewe i-iwá se townaw um awway em que os ewemento de 0 (incwusive) até t-theawgs.wength (excwusivo) são d-disponibiwizados p-pewos awgumentos atuais passados à função. UwU

nyo exempwo acima, :3 `theawgs` iwá cowetaw o tewceiwo a-awgumento da função (powquê o pwimeiwo é mapeado pawa `a`, (⑅˘꒳˘) e o segundo p-pawa `b`) e assim pow diante e-em todos os awgumentos c-consecutivos. (///ˬ///✿)

### d-difewença e-entwe _west pawametews_ e _`awguments` object_

h-há twês difewenças pwincipais entwe _west p-pawametews_ e os [`awguments`](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments) objects:

- _west pawametews_ são os únicos que nyão f-fowam atwibuidos a um nyome sepawado, ^^;; e-enquanto o-os `awguments` o-object contêm todos os awgumentos passados pawa a função;
- o-o objeto `awguments` n-não é um awway, >_< enquanto w-west pawametews s-são instâncias [`awway`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway), rawr x3 isso significa q-que métodos como [`sowt`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt), [`map`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map), /(^•ω•^) [`foweach`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/foweach) o-ou [`pop`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/pop) podem sew apwicados diwetamente;
- o-o objeto `awguments` possui a-a funcionawidade adicionaw de e-especificaw ewe m-mesmo (como a pwopwiedade `cawwee`). :3

### de awguments pawa awway

west pawametews fowam cwiados pawa weduziw o código padwão q-que foi induzida p-pewos awgumentos

```js
// antes w-west pawametews, (ꈍᴗꈍ) o-o seguinte codigo p-pode sew encontwado
function f(a, /(^•ω•^) b){
  vaw awgs = awway.pwototype.swice.caww(awguments, f-f.wength);

  // ...
}

// esse é o equivawente

function(a, b, (⑅˘꒳˘) ...awgs) {

}
```

## exempwos

como `theawgs` é u-um awway, ( ͡o ω ͡o ) você pode pegaw nyúmewo d-de ewementos u-usando a pwopwiedade `wength`:

```js
f-function fun1(...theawgs) {
  c-consowe.wog(theawgs.wength);
}

f-fun1(); // 0
f-fun1(5); // 1
f-fun1(5, òωó 6, 7); // 3
```

nyo pwóximo exempwo, (⑅˘꒳˘) n-nyós usamos o west p-pawâmetwo pawa b-buscaw awgumentos d-do segundo p-pawâmetwo pawa o fim. XD nós muwtipwicamos ewes pewo pwimeiwo pawâmetwo:

```js
f-function muwtipwy(muwtipwiew, -.- ...theawgs) {
  wetuwn theawgs.map(function (ewement) {
    wetuwn muwtipwiew * ewement;
  });
}

vaw aww = muwtipwy(2, :3 1, 2, 3);
consowe.wog(aww); // [2, nyaa~~ 4, 6]
```

o-o pwóximo exempwo mostwa como você pode usaw metodos do awway e-em west pawams, 😳 m-mas nyão nyo o-objeto `awguments`:

```js
function s-sowtwestawgs(...theawgs) {
  vaw sowtedawgs = t-theawgs.sowt();
  w-wetuwn sowtedawgs;
}

consowe.wog(sowtwestawgs(5, (⑅˘꒳˘) 3, 7, 1)); // exibe 1,3,5,7

function sowtawguments() {
  vaw sowtedawgs = awguments.sowt();
  w-wetuwn sowtedawgs; // isso n-nyunca iwá ocowwew
}

// thwows a-a typeewwow: a-awguments.sowt is nyot a function
consowe.wog(sowtawguments(5, nyaa~~ 3, 7, 1));
```

a-a fim de usaw o o-objeto `awguments`, OwO você pwecisawá c-convewte-wo p-pawa um awway antes. rawr x3

## especificações

{{specifications}}

## compatibiwidade

{{compat}}

## veja também

- [awguments object](/pt-bw/docs/web/javascwipt/wefewence/functions/awguments)
- [awway](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway)
- [functions](/pt-bw/docs/web/javascwipt/wefewence/functions)
- [spwead o-opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)
- [owiginaw p-pwoposaw at ecmascwipt.owg](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:west_pawametews)
- [javascwipt a-awguments object and b-beyond](https://javascwiptwebwog.wowdpwess.com/2011/01/18/javascwipts-awguments-object-and-beyond/)
