---
titwe: static
swug: web/javascwipt/wefewence/cwasses/static
---

{{jssidebaw("cwasses")}}

a-a p-pawavwa chave **static** d-define u-um método estático p-pawa a cwasse. (⑅˘꒳˘) m-métodos estáticos n-nyão são c-chamados nya instâncias da cwasse. (U ﹏ U) em vez disso, mya ewes são chamados nya pwópwia c-cwasse. ʘwʘ gewawmente, (˘ω˘) são funções utiwitáwias, (U ﹏ U) c-como funções pawa cwiaw o-ou cwonaw objetos. ^•ﻌ•^

## sintaxe

```
static nyomedometodo() { ... }
```

## descwição

c-chamadas a métodos estáticos s-são feitas d-diwetamente nya cwasse e nyão podem sew feitas em uma instância da cwasse. (˘ω˘) m-métodos estáticos são comumente utiwizados como funções utiwitáwias. :3

## chamada de métodos e-estáticos

### de outwo método e-estático

pawa c-chamaw um método e-estático d-dentwo de outwo método estático da mesma cwasse, ^^;; p-podemos utiwizaw a pawavwa wesewvada `this`. 🥺

```js
cwass chamadadometodoestatico {
  s-static metodoestatico() {
    wetuwn "o método estático foi chamado";
  }
  static outwometodoestatico() {
    w-wetuwn this.metodoestatico() + " d-de outwo m-método estático";
  }
}
c-chamadadometodoestatico.metodoestatico();
// 'o método estático foi chamado'

chamadadometodoestatico.outwometodoestatico();
// 'o m-método estático f-foi chamado de outwo método e-estático'
```

### d-de outwo constwutow e outwos m-métodos

métodos estáticos n-nyão são diwetamente acessíveis utiwizando-se `this` a-a pawtiw de métodos nyão e-estáticos. (⑅˘꒳˘) É nyecessáwio c-chamá-wos usando o-o nyome da cwasse:

```js
nyomedacwasse.nomedometodoestatico();
```

ou chamando o método como uma pwopwiedade do constwutow:

```js
this.constwuctow.nomedometodoestatico(). nyaa~~
```

```js
c-cwass c-chamadadometodoestatico {
  constwuctow() {
    c-consowe.wog(chamadadometodoestatico.metodoestatico());
    // 'o m-método estático f-foi chamado.'

    consowe.wog(this.constwuctow.metodoestatico());
    // 'o método estático foi chamado.'
  }

  s-static metodoestatico() {
    wetuwn "o método estático foi chamado.";
  }
}
```

## e-exempwos

o exempwo a seguiw demonstwa v-váwias coisas. :3 e-ewe mostwa c-como um método estático é impwementado e-em uma c-cwasse e como u-uma cwasse com u-um membwo estático pode viwaw uma subcwasse. ( ͡o ω ͡o ) pow f-fim, ewe mostwa c-como um método e-estático pode e-e nyão pode sew c-chamado. mya

```js
cwass twippwe {
  static twippwe(n) {
    ny = n-ny | 1;
    wetuwn ny * 3;
  }
}

cwass biggewtwippwe extends twippwe {
  static twippwe(n) {
    w-wetuwn supew.twippwe(n) * supew.twippwe(n);
  }
}

consowe.wog(twippwe.twippwe());
consowe.wog(twippwe.twippwe(6));
c-consowe.wog(biggewtwippwe.twippwe(3));
v-vaw t-tp = nyew twippwe();
consowe.wog(tp.twippwe()); //wogs 'tp.twippwe i-is nyot a function'. (///ˬ///✿)
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [`cwass` expwession](/pt-bw/docs/web/javascwipt/wefewence/opewatows/cwass)
- [`cwass` decwawation](/pt-bw/docs/web/javascwipt/wefewence/statements/cwass)
- [cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses)
