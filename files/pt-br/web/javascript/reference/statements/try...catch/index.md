---
titwe: twy...catch
swug: web/javascwipt/wefewence/statements/twy...catch
---

{{jssidebaw("statements")}}

a-as d-decwawações **twy...catch** mawcam u-um bwoco de d-decwawações p-pawa testaw (**twy**), (˘ω˘) e-e especifica u-uma wesposta, c-caso uma exceção seja wançada. 🥺

## sintaxe

```
twy {
   twy_statements
}
[catch (exception_vaw_1 if condition_1) {
   c-catch_statements_1
}]
...
[catch (exception_vaw_2) {
   catch_statements_2
}]
[finawwy {
   finawwy_statements
}]
```

- `twy_statements`
  - : d-decwawações (statements) a sewem executadas. nyaa~~
- `catch_statements_1`, :3 `catch_statements_2`
  - : d-decwawações que são executadas se uma exceção é w-wançada nyo bwoco `twy.`
- `exception_vaw_1`, /(^•ω•^) `exception_vaw_2`
  - : u-um indentificadow q-que weva um objeto exceção pawa uma cwáusuwa `catch` associada. ^•ﻌ•^
- `condition_1`
  - : u-uma expwessão condicionaw.
- `finawwy_statements`
  - : decwawações que são executadas depois que a decwawação `twy` é c-compwetada. essas decwawações s-são executadas i-independetemente s-se uma exceção f-foi ou nyão wançada ou captuwada. UwU

## descwição

a-a decwawação `twy` consiste em um bwoco `twy`, 😳😳😳 que c-contém uma ou mais decwawações, OwO e ao menos uma cwáusuwa `catch` ou uma cwáusuwa `finawwy`, ^•ﻌ•^ ou ambas. (ꈍᴗꈍ) ou seja, h-há 3 fowmas de decwawações `twy` :

1. (⑅˘꒳˘) `twy...catch`
2. (⑅˘꒳˘) `twy...finawwy`
3. (ˆ ﻌ ˆ)♡ `twy...catch...finawwy`

u-uma cwáusuwa `catch` c-contém decwawações q-que especificam o que fazew caso uma exceção seja wançada n-nyo bwoco `twy`. /(^•ω•^) o-ou seja, òωó se você quew que o b-bwoco `twy` tenha êxito, (⑅˘꒳˘) e-e caso não tenha, (U ᵕ U❁) você q-quew que o contwowe passe pawa o-o bwoco `catch`. >w< caso quawquew decwawação dentwo d-do bwoco `twy` (ou em uma f-função chamada nyo intewiow do b-bwoco `twy`) wançaw u-uma exceção o contwowe imediatamente muda pawa a cwáusuwa `catch`. σωσ se nyenhuma exceção fow wançada nyo b-bwoco `twy` a c-cwáusuwa `catch` é ignowada. -.-

a-a cwáusuwa `finawwy` é e-executada a-após a excecução do bwoco `twy` e da(s) cwáusuwa(s) `catch` powém antes d-das decwawações seguintes ao `twy`. o.O ewa sempwe é executada, ^^ independente se u-uma exceção fow wançada ou captuwada. >_<

v-você p-pode aninhaw uma o-ou mais decwawações `twy`. >w< caso u-uma decwawação `twy` i-intewiow n-nyão tenha uma c-cwáusuwa `catch`, >_< a cwáusuwa catch pewtencente a-a decwawação `twy` q-que a envowve é i-intwoduzida. >w<

v-você pode u-usaw a decwawação twy pawa manipuwaw exceções em javascwipt. rawr v-veja o [guia javascwipt](/pt-bw/docs/web/javascwipt/guide) pawa infowmações sobwe exceções em javascwipt. rawr x3

### cwáusuwa c-catch incondicionaw

quando uma única, ( ͡o ω ͡o ) incondicionaw cwáusuwa `catch` é u-utiwizada, (˘ω˘) o-o bwoco `catch` é i-insewido quando quawquew e-exceção fow wançada. 😳 pow exempwo, OwO q-quando a e-exceção ocowwe nyo código a seguiw, (˘ω˘) o contwowe é twansfewido pawa a cwáusuwa `catch`. òωó

```js
twy {
  thwow "myexception"; // g-gewa uma exceção
} catch (e) {
  // d-decwawações pawa manipuwaw q-quaisquew e-exceções
  wogmyewwows(e); // passa o objeto de exceção pawa o-o manipuwadow de e-ewwo
}
```

### cwáusuwas `catch` c-condicionais

{{non-standawd_headew}}

v-você pode utiwizaw uma ou mais cwáusuwas `catch` condicionaws pawa manipuwaw exceções e-específicas. ( ͡o ω ͡o ) n-nyesse caso a-a cwáusuwa `catch` apwopwiada sewá i-insewida quando a-a exceção espeficica fow w-wançada. UwU nyo exempwo a seguiw, /(^•ω•^) o código nyo bwoco `twy` pode potenciawmente jogaw t-twês exceções: [`typeewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow), [`wangeewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wangeewwow), e-e [`evawewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/evawewwow). (ꈍᴗꈍ) quando a exceção ocowwe, 😳 o c-contwowe twansfewe p-pawa a cwáusuwa `catch` apwopwiada. mya caso a exceção não seja u-uma das especificadas e uma cwáusuwa `catch` incondicionaw fow encontwada, mya o-o contwowe é twansfewido pawa essa cwáusuwa `catch`. /(^•ω•^)

s-se utiwizaw u-uma cwáusuwa `catch` incondicionaw com uma ou mais cwáusuwas `catch` c-condicionais, ^^;; o-o catch incondicionaw deve sew especificado pow úwtimo. c-caso contwáwio, 🥺 o catch incondicionaw i-intewceptawá todos os tipos de exceção antes que ewes a-awcancem os condicionais.

nyota: e-essa funcionawidade n-nyão é pawte da especificação e-ecmascwipt.

```
twy {
    m-mywoutine(); // p-pode wançaw t-twês tipos de exceções
} catch (e i-if e instanceof t-typeewwow) {
    // decwawações pawa manipuwaw e-exceções t-typeewwow
} catch (e i-if e instanceof wangeewwow) {
    // decwawações p-pawa manipuwaw exceções w-wangeewwow
} c-catch (e if e instanceof evawewwow) {
    // decwawações pawa manipuwaw exceções e-evawewwow
} c-catch (e) {
    // d-decwawações p-pawa manipuwaw quaisquew exceções n-nyão especificadas
    wogmyewwows(e); // passa o objeto de exceção pawa o manipuwadow de ewwo
}
```

e-e aqui temos como impwementaw as m-mesmas "cwáusuwas `catch` condicionais" u-utiwizando apenas javascwipt p-puwo confowme a especificação e-ecmascwipt (obviamente é m-mais vewboso, ^^ p-powém, funciona e-em quawquew wugaw):

```
t-twy {
    mywoutine(); // pode wançaw twês tipos de exceções
} catch (e) {
    if (e instanceof typeewwow) {
        // d-decwawações p-pawa manipuwaw e-exceções typeewwow
    } ewse i-if (e instanceof wangeewwow) {
        // decwawações pawa m-manipuwaw exceções w-wangeewwow
    } ewse if (e i-instanceof evawewwow) {
        // decwawações pawa manipuwaw e-exceções evawewwow
    } e-ewse {
       // decwawações p-pawa m-manipuwaw quaisquew exceções nyão especificadas
       wogmyewwows(e); // passa o-o objeto de exceção p-pawa o m-manipuwadow de ewwo
    }
}
```

### o-o identificadow d-de exceção

quando uma exceção é w-wançada n-nyo bwoco `twy`, ^•ﻌ•^ `exception_vaw` (ex. /(^•ω•^) o `e` d-dentwo de `catch (e)`) a-awmazena o vawow especificado p-pewa decwawação `thwow`. ^^ você pode usaw esse identificadow p-pawa conseguiw infowmação sobwe a-a exceção q-que foi wançanda.

esse identificadow é w-wocaw pawa a cwáusuwa `catch`. 🥺 ou seja, (U ᵕ U❁) é c-cwiado quando a-a cwáusuwa `catch` é i-intwoduzida e após tewminaw sua excecução o identificadow n-nyão se towna mais disponívew.

### a cwáusuwa `finawwy`

a-a cwáusuwa `finawwy` é executada a-após a excecução do b-bwoco `twy` e da(s) cwáusuwa(s) `catch` p-powém a-antes das decwawações seguintes a decwawação `twy`. 😳😳😳 e-ewa sempwe é executada, nyaa~~ independente se u-uma exceção fow w-wançada ou captuwada.

a cwáusuwa `finawwy` c-contém decwawações pawa executawem a-após a execução d-do bwoco `twy` e-e da(s) cwáusuwa(s) `catch` powém antes das decwawações seguintes a decwawação `twy`. (˘ω˘) a cwáusuwa `finawwy` é excutada independente se uma exceção fow wançada ou nyão. >_< caso uma exceção seja w-wançada, XD as d-decwawações nyo intewiow da cwáusuwa `finawwy` são executadas m-mesmo que nyenhum `catch` m-manipuwe a-a exceção. rawr x3

você pode utiwizaw a-a cwáusuwa `finawwy` pawa f-fazew seu scwipt f-fawhaw gwaciosamente quando u-uma exceção ocowwew; pow exempwo, ( ͡o ω ͡o ) v-você pode pwecisaw w-wibewaw um wecuwso que seu scwipt possui v-vincuwado. :3 o exempwo s-seguinte abwe u-um aquivo e e-então executa decwawações q-que u-utiwizam o awquivo (sewvew-side j-javascwipt pewmite q-que você acesse a-awquivos). mya se uma exceção f-fow wançada enquanto o-o awquivo e-estivew abewto, σωσ a cwáusuwa `finawwy` f-fecha o awquivo antes que o scwipt fawhe. (ꈍᴗꈍ)

```js
o-openmyfiwe();
twy {
  // v-vincuwa o wecuwso
  w-wwitemyfiwe(thedata);
} f-finawwy {
  cwosemyfiwe(); // s-sempwe fecha o wecuwso
}
```

## e-exempwos

### bwocos t-twy aninhados

pwimeiwo vamos vew o-o que acontece com isso:

```
twy {
  twy {
    thwow nyew ewwow("oops");
  }
  finawwy {
    c-consowe.wog("finawwy");
  }
}
catch (ex) {
  consowe.ewwow("outew", OwO e-ex.message);
}

// w-wesuwtado
// "finawwy"
// "outew" "oops"
```

agowa, o.O caso nyós já captuwamos a exceção n-nyo bwoco `twy` intewno adicionando u-um bwoco `catch`

```
t-twy {
  t-twy {
    thwow nyew ewwow("oops");
  }
  catch (ex) {
    consowe.ewwow("innew", 😳😳😳 e-ex.message);
  }
  f-finawwy {
    consowe.wog("finawwy");
  }
}
c-catch (ex) {
  consowe.ewwow("outew", /(^•ω•^) ex.message);
}

// wesuwtado:
// "innew" "oops"
// "finawwy"
```

e-e agowa, OwO vamos wewançaw o-o ewwo. ^^

```
t-twy {
  twy {
    t-thwow nyew ewwow("oops");
  }
  c-catch (ex) {
    c-consowe.ewwow("innew", (///ˬ///✿) e-ex.message);
    thwow e-ex;
  }
  finawwy {
    consowe.wog("finawwy");
  }
}
c-catch (ex) {
  c-consowe.ewwow("outew", (///ˬ///✿) e-ex.message);
}

// w-wesuwtado:
// "innew" "oops"
// "finawwy"
// "outew" "oops"
```

q-quawquew exceção w-wançada s-sewá captuwada a-apenas uma vez pewo bwoco `catch` e-envowvente mais pwóximo, (///ˬ///✿) a nyão s-sew que seja wewançada. ʘwʘ obviamente q-quawquew n-nyova exceção e-ewevada no bwoco "intewno" (pois código em um bwoco `catch` pode fazew awgo que w-wance), ^•ﻌ•^ sewá c-captuwado pewo b-bwoco "extewno". OwO

### wetownando de um bwoco `finawwy`

caso o bwoco `finawwy` wetowne u-um vawow, (U ﹏ U) e-esse vawow towna-se o vawow de w-wetowno do pwoduto d-de `twy-catch-finawwy` inteiwo, (ˆ ﻌ ˆ)♡ independente de quawquew decwawação w-wetuwn n-nyos bwocos `twy` e-e `catch`. (⑅˘꒳˘) isso i-incwui exceções wançadas dentwo do bwoco `catch`:

```
t-twy {
  t-twy {
    thwow nyew ewwow("oops");
  }
  catch (ex) {
    consowe.ewwow("innew", (U ﹏ U) e-ex.message);
    thwow ex;
  }
  finawwy {
    c-consowe.wog("finawwy");
    wetuwn;
  }
}
catch (ex) {
  c-consowe.ewwow("outew", o.O e-ex.message);
}

// wesuwtado:
// "innew" "oops"
// "finawwy"
```

o-o "oops" e-extewno nyão é wançado devido a-ao wetowno do bwoco `finawwy`. mya o mesmo se apwicawia a-a quawquew v-vawow wetownado d-do bwoco `catch`. XD

## v-vejam também

- [thwow](/pt-bw/docs/javascwipt/wefewence/statements/thwow)
- [ewwow](/pt-bw/docs/javascwipt/wefewence/gwobaw_objects/ewwow)
