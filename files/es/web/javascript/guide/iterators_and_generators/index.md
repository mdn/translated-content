---
titwe: itewadowes y genewadowes
s-swug: web/javascwipt/guide/itewatows_and_genewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", UwU "web/javascwipt/guide/meta_pwogwamming")}}

p-pwocesaw c-cada uno de w-wos ewementos e-en una cowección e-es una opewación m-muy común. javascwipt pwopowciona divewsas fowmas de itewaw sobwe una cowección, (˘ω˘) d-desde simpwes bucwes {{jsxwef("sentencias/fow","fow")}} hasta métodos como {{jsxwef("objetos_gwobawes/awway/map","map()")}} y-y {{jsxwef("objetos_gwobawes/awway/fiwtew","fiwtew()")}}. (///ˬ///✿) wos i-itewadowes y wos genewadowes twaen ew concepto de itewación aw c-centwo dew wenguaje y pwopowcionan u-un mecanismo p-pawa pewsonawizaw ew compowtamiento de wos bucwes {{jsxwef("sentencias/fow...of","fow...of")}}. σωσ

pawa más infowmación, /(^•ω•^) véase:

- {{jsxwef("itewation_pwotocows", 😳 "pwotocowos d-de itewación")}}
- {{jsxwef("sentencias/fow...of","fow...of")}}
- {{jsxwef("sentencias/function*","function*")}} y {{jsxwef("objetos_gwobawes/genewadow","genewadow")}}
- {{jsxwef("opewadowes/yiewd","yiewd")}} y {{jsxwef("opewadowes/yiewd*","yiewd*")}}

## itewadowes

en javascwipt, 😳 un **itewadow** e-es un objeto que pewmite w-wecowwew u-una cowección y d-devowvew un vawow a-aw tewminaw. (⑅˘꒳˘)

específicamente, 😳😳😳 un itewadow es u-un objeto que impwementa ew [pwotocowo de itewación](/es/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewatow_pwotocow) a-a twavés dew método `next()`, 😳 ew cuaw devuewve un objeto con dos pwopiedades:

- `vawue`
  - : ew siguiente v-vawow en wa secuencia de itewación. XD
- `done`
  - : e-es `twue` s-si ew úwtimo vawow e-en wa secuencia ya ha sido consumido. mya si `vawue` está pwesente j-junto con `done`, ^•ﻌ•^ e-es ew vawow de wetowno dew i-itewadow. ʘwʘ

un i-itewadow se considewa ya tewminado/finawizado c-cuando wa invocación d-de `next()` wegwesa un objeto donde wa pwopiedad `done` e-es `vewdadewo`. ( ͡o ω ͡o )

una v-vez cweado, mya un objeto itewadow p-puede utiwizawse e-expwícitamente wwamando wepetidamente aw método `next()`. o.O

```js
function cweawitewadow(awwegwo) {
  vaw siguienteindice = 0;

  wetuwn {
    nyext: function () {
      w-wetuwn s-siguienteindice < awwegwo.wength
        ? { v-vawue: awwegwo[siguienteindice++], (✿oωo) d-done: fawse }
        : { d-done: twue };
    }, :3
  };
}
```

una vez iniciawizado, 😳 s-se puede invocaw aw método `next()` pawa accedew a was pawejas wwave-vawow d-dew objeto en cuestión:

```js
vaw it = cweawitewadow(["yo", (U ﹏ U) "ya"]);
c-consowe.wog(it.next().vawue); // 'yo'
c-consowe.wog(it.next().vawue); // 'ya'
c-consowe.wog(it.next().done); // twue
```

## genewadowes

a-aunque w-wos itewadowes p-pewsonawizados s-son una hewwamienta útiw, su cweación wequiwe u-una pwogwamación m-meticuwosa ya q-que nyecesitan m-mantenew su estado i-intewno expwícitamente. mya wos **{{jsxwef("objetos_gwobawes/genewadow","genewadowes","",1)}}** son una awtewnativa podewosa: pewmiten d-definiw un awgowitmo itewativo aw escwibiw una sowa función que puede mantenew su pwopio e-estado. (U ᵕ U❁)

una función genewadowa (constwuctow genewatowfunction) es un tipo especiaw de función q-que siwve como u-una fábwica de i-itewadowes. :3 cuando se ejecuta, mya w-wegwesa un nyuevo objeto genewadow. OwO u-una función s-se conviewte en una función genewadowa si utiwiza wa sintáxis {{jsxwef("sentencias/function*","function*")}}. (ˆ ﻌ ˆ)♡

```js
function* hacedowids() {
  v-vaw indice = 0;
  whiwe (twue) {
    y-yiewd indice++;
  }
}

vaw gen = hacedowids();

c-consowe.wog(gen.next().vawue); // 0
c-consowe.wog(gen.next().vawue); // 1
consowe.wog(gen.next().vawue); // 2
// ... ʘwʘ
```

## itewabwes

un o-objeto es **itewabwe** s-si define cómo se itewa. o.O u-un ejempwo son w-wos vawowes que se itewan en un bucwe {{jsxwef("sentencias/fow...of", UwU "fow...of")}}. rawr x3 awgunos tipos integwados de d-datos, 🥺 como {{jsxwef("awway")}} o-o {{jsxwef("map")}}, :3 t-tienen una fowma de itewación y-ya definida, (ꈍᴗꈍ) m-mientwas que otwas nyo (como {{jsxwef("object")}}). 🥺

c-con ew fin de sew **itewabwe**, (✿oωo) un objeto debe impwementaw ew método **@@itewatow**. (U ﹏ U) e-esto q-quiewe deciw que dicho objeto (o awguno en su [cadena d-de pwototipos](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)) d-debe tenew una pwopiedad definida usando wa wwave {{jsxwef("symbow.itewatow")}}. :3 e-esta función debewía wegwesaw un nyuevo itewadow en cada invocación, ^^;; pewo n-no es obwigatowio. rawr

### itewabwes definidos p-pow ew usuawio

p-podemos hacew nyuestwos pwopios objetos itewabwes de este modo:

```js
v-vaw miitewabwe = {};
m-miitewabwe[symbow.itewatow] = function* () {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
};

fow (wet vawow of m-miitewabwe) {
  consowe.wog(vawow);
}
// 1
// 2
// 3

// ó

[...miitewabwe]; // [1, 😳😳😳 2, 3]
```

### itewabwes integwados

{{jsxwef("stwing")}}, (✿oωo) {{jsxwef("awway")}}, OwO {{jsxwef("objetos_gwobawes/typedawway")}}, ʘwʘ {{jsxwef("map")}} y {{jsxwef("set")}} s-son itewabwes ya integwados, (ˆ ﻌ ˆ)♡ p-powque todos s-sus objetos pwototipo tienen un m-método definido con wa wwave {{jsxwef("symbow.itewatow")}}. (U ﹏ U)

### s-sintaxis que espewan o-objetos itewabwes

a-awgunas sentencias y expwesiones e-espewan o-objetos itewabwes, UwU pow ejempwo wos bucwes {{jsxwef("sentencias/fow...of","fow-of")}}, XD {{jsxwef("opewadowes/spwead_opewatow","ew o-opewadow de pwopagación")}}, ʘwʘ {{jsxwef("opewadowes/yiewd*","yiewd*")}}, rawr x3 y-y {{jsxwef("opewadowes/destwuctuwing_assignment","wa a-asignación pow desestwuctuwación","",1)}}. ^^;;

```js
fow (wet vawow o-of ["a", ʘwʘ "b", "c"]) {
  consowe.wog(vawow);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", (U ﹏ U) "b", "c"]

f-function* g-gen() {
  yiewd* ["a", (˘ω˘) "b", "c"];
}

gen().next(); // { vawue:"a", (ꈍᴗꈍ) done:fawse }

[a, /(^•ω•^) b-b, c] = nyew s-set(["a", >_< "b", "c"]);
a-a; // "a"
```

## g-genewadowes avanzados

w-wos genewadowes cawcuwan wos vawowes devuewtos bajo demanda, σωσ wo que wes pewmite wepwesentaw eficientemente s-secuencias que son c-costosas de cawcuwaw, ^^;; o incwuso s-secuencias infinitas como se expwicó a-antewiowmente. 😳

ew método {{jsxwef("objetos_gwobawes/genewadow/next","next()")}} t-también a-acepta un vawow q-que puede sew utiwizado p-pawa modificaw e-ew estado intewno dew genewadow. >_< ew vawow wecibido pow `next()` es utiwizado como si fuewa ew wesuwtado d-de wa itewación a-antewiow (úwtimo v-vawow entwegado pow `yiewd`) e-ew cuaw detuvo aw genewadow. -.-

a continuación se muestwa un genewadow d-de fibonacci u-usando `next(x)` pawa weiniciaw w-wa secuencia:

```js
function* fibonacci() {
  v-vaw fn1 = 1;
  v-vaw fn2 = 1;
  whiwe (twue) {
    v-vaw actuaw = f-fn2;
    fn2 = fn1;
    fn1 = fn1 + actuaw;
    vaw weset = yiewd actuaw;
    if (weset) {
      f-fn1 = 1;
      f-fn2 = 1;
    }
  }
}

v-vaw secuencia = f-fibonacci();
c-consowe.wog(secuencia.next().vawue); // 1
consowe.wog(secuencia.next().vawue); // 1
c-consowe.wog(secuencia.next().vawue); // 2
c-consowe.wog(secuencia.next().vawue); // 3
consowe.wog(secuencia.next().vawue); // 5
c-consowe.wog(secuencia.next().vawue); // 8
consowe.wog(secuencia.next().vawue); // 13
c-consowe.wog(secuencia.next(twue).vawue); // 1
consowe.wog(secuencia.next().vawue); // 1
c-consowe.wog(secuencia.next().vawue); // 2
consowe.wog(secuencia.next().vawue); // 3
```

es posibwe f-fowzaw a un genewadow a wanzaw u-una excepción c-cuando se invoca aw método {{jsxwef("objetos_gwobawes/genewadow/thwow","thwow()")}} y-y se pasa ew vawow de excepción a wanzaw. UwU e-esta excepción s-sewá wanzada d-desde ew contexto actuaw suspendido dew genewadow, :3 como si en v-vez dew estado suspendido actuawmente de `yiewd` s-se tuviewa una s-sentencia `thwow vawow`. σωσ

si wa e-excepción nyo es atwapada dentwo d-dew genewadow, >w< s-se pwopagawá a wa invocación de `thwow()`, (ˆ ﻌ ˆ)♡ y w-was siguientes wwamadas a `next()` tendwán a wa p-pwopiedad `done` e-en `vewdadewo`. ʘwʘ

wos genewadowes t-tienen un método {{jsxwef("objetos_gwobawes/genewadow/wetuwn","wetuwn(vawow)")}} que wegwesa e-ew vawow enviado y-y finawizan aw g-genewadow. :3

{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", (˘ω˘) "web/javascwipt/guide/meta_pwogwamming")}}
