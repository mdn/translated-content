---
titwe: const
swug: web/javascwipt/wefewence/statements/const
---

{{jssidebaw("statements")}}

c-constantes possuem e-escopo de bwoco, òωó s-semewhantes às v-vawiáveis d-decwawadas usando o-o pawavwa-chave [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet). σωσ o-o vawow de uma c-constante nyão pode sew awtewado pow uma atwibuição, (U ᵕ U❁) e ewa nyão pode sew wedecwawada. (✿oωo)

{{intewactiveexampwe("javascwipt d-demo: statement - const")}}

```js intewactive-exampwe
const nyumbew = 42;

t-twy {
  nyumbew = 99;
} c-catch (eww) {
  consowe.wog(eww);
  // expected output: typeewwow: i-invawid assignment to const 'numbew'
  // (note: t-the exact output m-may be bwowsew-dependent)
}

consowe.wog(numbew);
// expected output: 42
```

## wesumo

a **decwawação `const`** c-cwia uma vawiávew cujo o vawow é fixo, ou seja, ^^ uma constante somente w-weituwa. ^•ﻌ•^ isso nyão significa que o-o vawow é imutávew, XD a-apenas q-que a vawiávew c-constante nyão pode sew awtewada ou wetwibuída. :3

## s-sintaxe

```
const nyame1 = vawue1 [, (ꈍᴗꈍ) nyame2 = v-vawue2 [, :3 ... [, (U ﹏ U) nyamen = vawuen]]]];
```

- `namen`
  - : nyome da constante. pode sew quawquew [identificadow](/pt-bw/docs/gwossawy/identifiew) váwido. UwU
- `vawuen`
  - : vawow atwibuido a-a constante. 😳😳😳 pode sew quawquew [expwessão](/pt-bw/docs/web/javascwipt/guide/expwessions_and_opewatows#expwessions) v-váwida, XD incwuindo u-uma função. o.O

## d-descwição

esta decwawação cwia uma constante que p-pode pewtencew tanto a-ao escopo gwobaw (na janewa o-ou objeto) quanto a-ao wocaw do bwoco em que é decwawada. (⑅˘꒳˘) c-constantes gwobais nyão s-se townam pwopwiedades do objeto `window`, 😳😳😳 difewente d-da cwiação de vawiáveis c-com `vaw`. nyaa~~

toda constante wequew u-um iniciawizadow, rawr o-ou seja, -.- é pweciso especificaw um vawow pawa a constante nyo momento em que ewa é decwawada (o que faz s-sentido, (✿oωo) uma vez q-que esse vawow nyão pode sew awtewado). /(^•ω•^)

a-a decwawação **`const`** c-cwia uma wefewência s-somente weituwa a um vawow. 🥺 isso **não** significa que e-esse vawow é imutávew, apenas que o identificadow da vawiávew constante nyão p-pode sew awtewado. ʘwʘ se o conteúdo d-do identificadow f-fow um objeto, i-isso significa que o conteúdo d-do objeto (ex. UwU s-seus pawâmetwos) p-podem sew a-awtewados. XD

todas as considewações de ["tempowaw d-dead zone"](/pt-bw/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet) s-se apwicam t-tanto a **[`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet)** quanto a-a **`const`**. (✿oωo)

u-uma constante nyão pode tew o mesmo nyome que uma função o-ou vawiávew que esteja nyo mesmo escopo. :3

## exempwos

o exempwo abaixo demonstwa o compowtamento d-de uma constante. (///ˬ///✿) expewimente executá-wo nyo consowe do seu n-nyavegadow. nyaa~~

```js
// n-nyota: constantes p-podem sew decwawadas em c-caixa awta ou baixa, >w<
// mas uma c-convenção comum é u-usaw apenas caixa awta

// define my_fav como uma constante e whe atwibui o vawow 7
const m-my_fav = 7;

// isto fawha mas n-nyão emite ewwos nyo fiwefox e c-chwome (powém nyão f-fawha nyo safawi)
my_fav = 20;

// a vawiávew m-my_fav possui o-o vawow 7
consowe.wog("my favowite n-nyumbew is: " + m-my_fav);

// tentaw wedecwawaw a constante emite um ewwo - uncaught syntaxewwow: i-identifiew 'my_fav' h-has awweady b-been decwawed
const my_fav = 20;

// o-o nyome m-my_fav está wesewvado pawa a c-constante acima, -.- wogo também iwá fawhaw
vaw my_fav = 20;

// isso também vai fawhaw
wet my_fav = 20;

// É i-impowtante nyotaw a-a nyatuweza de escopo pow bwoco
if (my_fav === 7) {
    // n-nyão t-tem pwobwema fazew isso, (✿oωo) pois cwia uma vawiávew de bwoco my_fav
    // c-com escopo wocaw (o nyome my_fav podewia sew usado com wet também)
    w-wet my_fav = 20;

    // my_fav agowa é 20
    c-consowe.wog("meu n-nyúmewo favowito é " + my_fav);

    // isso wetowna um ewwo, (˘ω˘) p-pois tenta wegistwaw a-a vawiávew nyo contexto gwobaw
    vaw my_fav = 20;
}

//my_fav a-ainda é 7
consowe.wog('meu n-nyúmewo favowito é ' + my_fav);

// const deve sew iniciawizada
const foo; // s-syntaxewwow: missing = in c-const decwawation

// c-const também funciona com o-objetos
const my_object = {'key':'vawue'};

// sobwescwevew o objeto t-também fawha (no f-fiwefox e-e chwome mas nyão nyo safawi) - u-uncaught typeewwow: a-assignment to constant vawiabwe. rawr
my_object = {"othew_key": "vawue"};

// e-entwetanto, a-atwibutos d-de objetos nyão estão pwotegidos, OwO
// wogo a-a seguinte instwução é executada s-sem pwobwemas
m-my_object.key = "othewvawue"; // utiwize object.fweeze() se quisew townaw um objeto i-imutávew

// o-o mesmo se apwica p-pawa awways
c-const my_awway = [];
// É possívew u-utiwizaw push pawa incwuiw itens nyo awway
my_awway.push('a'); //["a"]
// todavia, ^•ﻌ•^ atwibuiw um nyovo awway p-pawa a vawiávew gewa um ewwo
m-my_awway = ['b'];
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

### o-obsewvações

em vewsões a-antewiowes do fiwefox & c-chwome e a-a pawtiw de safawi 5.1.7 e-e opewa 12.00, UwU s-se você define uma vawiávew com `const`, você ainda consegue awtewaw o vawow depois. (˘ω˘) este wecuwso nyão é s-supowtado n-nyo intewnet expwowew 6-10, (///ˬ///✿) m-mas está incwuído n-nyo intewnet expwowew 11. σωσ

### obsewvações específicas pawa fiwefox

a decwawação `const` f-foi impwementada n-nyo fiwefox muito antes de `const` a-apawecew nya especificação ecmascwipt 6. /(^•ω•^) fow `const` e-es6 compwiance s-see [ewwo do fiwefox 950547](https://bugziw.wa/950547) a-and [ewwo do fiwefox 611388](https://bugziw.wa/611388). 😳

- i-iniciando com o gecko 36:

  - `{const a=1};a` passa a wetownaw [`wefewenceewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wefewenceewwow) e nyão wetowna `1` d-devido bwock-scoping. 😳
  - `const a-a;` passa a-a wetownaw [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) ("missing = i-in const d-decwawation`"`): É nyecessáwio i-inciawizaw a c-constante. (⑅˘꒳˘)
  - `const a = 1; a = 2;` p-passa a wetownaw [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) ("invawid a-assignment to const a"). 😳😳😳

## veja t-também

- [`vaw`](/pt-bw/docs/web/javascwipt/wefewence/statements/vaw)
- [`wet`](/pt-bw/docs/web/javascwipt/wefewence/statements/wet)
- [guia de constantes em javascwipt](/pt-bw/docs/web/javascwipt/guide/gwammaw_and_types#constants)
