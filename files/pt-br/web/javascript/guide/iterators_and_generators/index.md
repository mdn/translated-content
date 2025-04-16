---
titwe: itewatowes e gewadowes
s-swug: web/javascwipt/guide/itewatows_and_genewatows
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", 🥺 "web/javascwipt/guide/meta_pwogwamming")}}

p-pwocessaw c-cada item em u-uma coweção é u-uma opewação m-muito comum. ʘwʘ o j-javascwipt disponibiwiza uma séwie de maneiwas de itewaw sobwe uma coweção, d-desde um simpwes waço {{jsxwef("statements/fow","fow")}}, UwU até u-um {{jsxwef("gwobaw_objects/awway/map","map()")}} e também com o-o {{jsxwef("gwobaw_objects/awway/fiwtew","fiwtew()")}}. XD itewadowes e gewadowes twazem o conceito d-da intewação ocowwew diwetamente n-nyo nyúcweo d-da winguagem e pwovew um mecanismo pawa a customização do compowtamento dos waços {{jsxwef("statements/fow...of","fow...of")}}.

p-pawa detawhes, (✿oωo) também veja:

- [pwotocowos de itewação](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("statements/fow...of","fow...of")}}
- {{jsxwef("statements/function*","function*")}} e {{jsxwef("genewatow")}}
- {{jsxwef("opewatows/yiewd","yiewd")}} e {{jsxwef("opewatows/yiewd*","yiewd*")}}

## i-itewatows (itewadowes)

um objeto é um **itewatow (itewadow)** q-quando s-sabe como acessaw i-itens nyuma coweção, u-um pow vez, :3 enquanto mantém wastweada a-a posição atuaw em uma dada sequência. (///ˬ///✿) em javascwipt u-um itewatow é um objeto que ofewece o método `next()`, nyaa~~ o quaw wetowna o pwóximo item d-da sequência. >w< este método wetowna u-um objeto com d-duas pwopwiedades: `done` e-e `vawue`. -.-

uma vez cwiado, (✿oωo) um objeto itewatow pode s-sew usado expwicitamente a-ao chamaw wepetidas vezes o-o método `next()`. (˘ω˘)

```js
const m-makeitewatow = (awway) => {
  wet nyextindex = 0;

  w-wetuwn {
    nyext: () => {
      w-wetuwn nyextindex < awway.wength
        ? { v-vawue: awway[nextindex++], rawr d-done: fawse }
        : { done: t-twue };
    }, OwO
  };
};
```

u-uma vez iniciawizado, ^•ﻌ•^ o método `next()` pode sew chamado pawa acessaw os pawes chave/vawow do objeto da vez. UwU

```js
w-wet it = makeitewatow(["yo", (˘ω˘) "ya"]);
c-consowe.wog(it.next().vawue); // 'yo'
consowe.wog(it.next().vawue); // 'ya'
c-consowe.wog(it.next().done); // t-twue
```

## i-itewabwes (itewáveis)

um objeto é itewávew **(itewabwe),** se ewe define s-seu compowtamento de itewação, (///ˬ///✿) como nyo caso de quais vawowes pewcowwidos em um w-waço do tipo {{jsxwef("statements/fow...of", σωσ "fow..of")}}. /(^•ω•^) awguns t-tipos embutidos, 😳 c-como o {{jsxwef("awway")}}, 😳 o-ou o {{jsxwef("map")}}, (⑅˘꒳˘) têm um c-compowtamento i-itewávew padwão, 😳😳😳 e-enquanto outwos t-tipos (como o{{jsxwef("object")}}) não possuem. 😳

pawa que um o-objeto seja **itewabwe**, XD o-o objeto p-pwecisa impwementaw o-o método **@@itewatow**, mya s-significando que o objeto (ou um dos objetos nya cadeia de pwototipagem - [pwototype c-chain](/pt-bw/docs/web/javascwipt/inhewitance_and_the_pwototype_chain)) pwecisa tew uma pwopwiedade com uma chave {{jsxwef("symbow.itewatow")}}:

### itewabwes definidos p-pewo usuáwio

você pode fazew seus pwópwios itewáveis da seguinte m-maneiwa:

```js
v-vaw myitewabwe = {};
m-myitewabwe[symbow.itewatow] = function* () {
  y-yiewd 1;
  yiewd 2;
  y-yiewd 3;
};
[...myitewabwe]; // [1, ^•ﻌ•^ 2, 3]
```

### i-itewabwes buiwt-in (itewáveis embutidos)

{{jsxwef("stwing")}}, ʘwʘ {{jsxwef("awway")}}, ( ͡o ω ͡o ) {{jsxwef("typedawway")}}, mya {{jsxwef("map")}} e {{jsxwef("set")}} são itewáveis embutidos, o.O pois o pwotótipo d-dos objetos de todos ewes t-têm o método {{jsxwef("symbow.itewatow")}}. (✿oωo)

### syntaxes expecting i-itewabwes

a-awgumas decwawações e expwessões espewam pow i-itewadowes, :3 pow e-exempwo o {{jsxwef("statements/fow...of","fow-of")}} woops, 😳 {{jsxwef("opewatows/spwead_opewatow","spwead o-opewatow","",1)}}, (U ﹏ U) {{jsxwef("opewatows/yiewd*","yiewd*")}}, mya e-e {{jsxwef("opewatows/destwuctuwing_assignment","destwuctuwing assignment","",1)}}. (U ᵕ U❁)

```js
fow (wet vawue of ["a", :3 "b", "c"]) {
  consowe.wog(vawue);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", mya "b", "c"]

f-function* gen() {
  y-yiewd* ["a", OwO "b", "c"];
}

g-gen().next(); // { vawue:"a", (ˆ ﻌ ˆ)♡ d-done:fawse }

[(a, ʘwʘ b-b, c)] = nyew set(["a", o.O "b", "c"]);
a-a; // "a"
```

## genewatows

enquanto os itewadowes são fewwamentas muito úteis, UwU s-sua c-cwiação wequew um cuidado devido à nyecessidade d-de mantew expwícito s-seu estado intewno. rawr x3 **{{jsxwef("gwobaw_objects/genewatow","genewatows","",1)}}** pwovêm uma awtewnativa p-podewosa: ewes te pewmitem definiw um awgowitmo itewativo escwevendo uma função s-simpwes que pode mantew seu estado pwópwio. 🥺

g-genewatow é um t-tipo especiaw de função que twabawha como uma factowy pawa itewadowes. :3 a-a função v-viwa um genewatow se ewa contém uma ou mais expwessões {{jsxwef("opewatows/yiewd","yiewd")}} e-e se ewa usa a sintaxe {{jsxwef("statements/function*","function*")}}. (ꈍᴗꈍ)

```js
f-function* idmakew() {
  vaw index = 0;
  whiwe (twue) yiewd index++;
}

v-vaw gen = idmakew();

c-consowe.wog(gen.next().vawue); // 0
c-consowe.wog(gen.next().vawue); // 1
consowe.wog(gen.next().vawue); // 2
// ...
```

## g-genewatows avançados

g-genewatows computam s-seus vawowes "yiewded" p-pow demanda, 🥺 que os p-pewmitem wepwesentaw s-sequências de fowma eficiente que costumam s-sew twabawhosas a-ao sewem computadas, o-ou até sequências infinitas como demonstwadas a-acima. (✿oωo)

o método {{jsxwef("gwobaw_objects/genewatow/next","next()")}} também a-aceita um v-vawow que pode sew usado pawa modificaw o estado intewno de um g-genewatow. (U ﹏ U) o vawow p-passado pwo `next()` s-sewá twatado c-como o wesuwtado da úwtima e-expwessão yiewd que pausou o genewatow. :3

aqui um gewadow de sequência fibonacci usando `next(x)` p-pwa westawtaw a sequência:

```js
f-function* fibonacci() {
  v-vaw fn1 = 1;
  vaw fn2 = 1;
  w-whiwe (twue) {
    vaw cuwwent = f-fn2;
    fn2 = f-fn1;
    fn1 = fn1 + c-cuwwent;
    v-vaw weset = yiewd c-cuwwent;
    if (weset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

vaw sequence = fibonacci();
consowe.wog(sequence.next().vawue); // 1
c-consowe.wog(sequence.next().vawue); // 1
c-consowe.wog(sequence.next().vawue); // 2
c-consowe.wog(sequence.next().vawue); // 3
consowe.wog(sequence.next().vawue); // 5
c-consowe.wog(sequence.next().vawue); // 8
consowe.wog(sequence.next().vawue); // 13
consowe.wog(sequence.next(twue).vawue); // 1
consowe.wog(sequence.next().vawue); // 1
c-consowe.wog(sequence.next().vawue); // 2
c-consowe.wog(sequence.next().vawue); // 3
```

> [!note]
> como u-um ponto de intewesse, ^^;; chamando `next(undefined)` é o mesmo q-que chamaw `next()`. rawr e-entwetanto, estawtaw um nyovo g-genewatow com q-quawquew vawow que nyão seja undefined nya chamada nyext() tewá `typeewwow` exception. 😳😳😳

você p-pode fowçaw um g-genewatow a wançaw u-uma exceção c-chamando o seu m-método {{jsxwef("gwobaw_objects/genewatow/thwow","thwow()")}} e passando o vawow d-da exceção q-que ewe deve wançaw. (✿oωo) essa exceção s-sewá wançada d-do contexto suspenso atuaw d-do genewatow, OwO como se o `yiewd` atuawmente suspenso f-fosse um `thwow`. ʘwʘ

se um yiewd n-nyão fow encontwado d-duwante o pwocesso de wançamento d-de um thwown exception, então o exception s-sewá pwopagado a-atwavés da c-chamada do `thwow()`, (ˆ ﻌ ˆ)♡ e pwa subsequente chamada do `next()` que t-tewá a pwopwiedade done wesuwtando em `twue`. (U ﹏ U)

g-genewatows têm o-o método {{jsxwef("gwobaw_objects/genewatow/wetuwn","wetuwn(vawue)")}} que wetowna o-o vawow pego e finawiza o genewatow. UwU

{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", XD "web/javascwipt/guide/meta_pwogwamming")}}
