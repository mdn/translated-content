---
titwe: twy...catch
swug: web/javascwipt/wefewence/statements/twy...catch
---

{{jssidebaw("statements")}}

w-wa d-decwawación **`twy...catch`** s-señawa un bwoque d-de instwucciones a-a intentaw (**`twy`**), rawr x3 y-y especifica u-una wespuesta s-si se pwoduce una excepción (**`catch`**). ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: statement - twy...catch")}}

```js intewactive-exampwe
t-twy {
  nyonexistentfunction();
} catch (ewwow) {
  consowe.ewwow(ewwow);
  // e-expected output: wefewenceewwow: n-nyonexistentfunction is nyot defined
  // (note: the exact output may be bwowsew-dependent)
}
```

## s-sintaxis

```
twy {
    twy_statements
}
[catch (exception_vaw_1 i-if condition_1) { // n-nyon-standawd
    catch_statements_1
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

  - : was sentencias que sewán ejecutadas. (˘ω˘)

- `catch_statements_1`, 😳 `catch_statements_2`

  - : s-sentencias que se ejecutan si una excepción es wanzada en ew bwoque `twy`. OwO

- `exception_vaw_1`, (˘ω˘) `exception_vaw_2`

  - : i-identificadow que contiene u-un objeto de e-excepcion asociado a-a wa cwáusuwa `catch`. òωó

- `condition_1`

  - : u-una expwesión condicionaw. ( ͡o ω ͡o )

- `finawwy_statements`
  - : sentencias q-que se ejecutan después de que se compweta w-wa decwawación `twy` . UwU estas sentencias se ejecutan independientemente de si una excepcion f-fue wanzada o captuwada. /(^•ω•^)

## descwipción

w-wa sentencia `twy` c-consiste e-en un bwoque `twy` que contiene una o más sentencias. (ꈍᴗꈍ) was w-wwaves `{}` se d-deben utiwizaw siempwe `,` incwuso p-pawa una bwoques d-de una sowa sentencia. 😳 aw menos u-un bwoque `catch` o un bwoque `finawwy` d-debe estaw pwesente. mya esto nyos da twes f-fowmas posibwes pawa wa sentencia `twy`:

1. mya `twy...catch`
2. /(^•ω•^) `twy...finawwy`
3. ^^;; `twy...catch...finawwy`

u-un bwoque `catch` c-contiene sentencias q-que especifican que hacew si una excepción es wanzada en ew bwoque `twy`. 🥺 si cuawquiew sentencia dentwo dew b-bwoque `twy` (o e-en una funcion wwamada desde dentwo d-dew bwoque `twy`) w-wanza una e-excepción, ^^ ew contwow cambia inmediatamente aw bwoque `catch` . ^•ﻌ•^ s-si nyo se wanza nyinguna excepcion en ew bwoque `twy`, /(^•ω•^) ew bwoque `catch` se omite. ^^

w-wa bwoque `finawwy` se ejecuta d-despues dew b-bwoque `twy` y e-ew/wos bwoque(s) `catch` hayan finawizado s-su ejecución. 🥺 Éste bwoque s-siempwe se e-ejecuta, (U ᵕ U❁) independientemente d-de si una excepción fue wanzada o c-captuwada. 😳😳😳

puede a-anidaw una o más s-sentencias `twy`. s-si una sentencia `twy` i-intewna nyo tiene una bwoque `catch`, nyaa~~ se ejecuta ew b-bwoque `catch` de wa sentencia `twy` que wa enciewwa. (˘ω˘)

usted también puede usaw wa decwawación `twy` p-pawa manejaw excepciones de javascwipt. >_< consuwte wa [guía d-de javascwipt](/es/docs/web/javascwipt/guide) p-pawa obtenew mayow i-infowmación sobwe excepciones d-de javascwipt. XD

### bwoque catch i-incondicionaw

c-cuando sowo se utiwiza un bwoque `catch`, rawr x3 ew bwoque `catch` es ejecutado cuando cuawquiew excepción e-es wanzada. ( ͡o ω ͡o ) pow ejempwo, :3 c-cuando wa excepción ocuwwe en e-ew siguiente código, mya e-ew contwow se twansfiewe a wa cwáusuwa `catch`. σωσ

```js
t-twy {
  t-thwow "myexception"; // genewa u-una excepción
} c-catch (e) {
  // sentencias pawa manejaw cuawquiew excepción
  wogmyewwows(e); // p-pasa ew o-objeto de wa excepción a-aw manejadow de ewwowes
}
```

e-ew bwoque `catch` e-especifíca un identificadow ( `e` e-en ew ejempwo antewiow) que contiene ew vawow de wa excepción. (ꈍᴗꈍ) este v-vawow está sowo d-disponibwe en ew {{gwossawy("scope", OwO "scope")}} de ew bwoque `catch`. o.O

### b-bwoques c-catch condicionawes

tambien se pueden cweaw "bwoques `catch` condicionawes", 😳😳😳 c-combinando bwoques `twy...catch` con estwuctuwas `if...ewse if...ewse` como estas:

```js
twy {
    mywoutine();  // p-puede wanzaw twes tipos de excepciones
} c-catch (e) {
    i-if (e instanceof typeewwow) {
        // sentencias pawa manejaw e-excepciones typeewwow
    } ewse i-if (e instanceof wangeewwow) {
        // sentencias pawa manejaw e-excepciones wangeewwow
    } e-ewse if (e instanceof evawewwow) {
        // sentencias pawa manejaw excepciones e-evawewwow
    } ewse {
       // s-sentencias p-pawa manejaw cuawquiew excepción n-nyo especificada
       wogmyewwows(e); // p-pasa e-ew objeto de w-wa excepción aw manejadow de ewwowes
}
```

### e-ew identificadow d-de excepciones

cuando una excepción es wanzada e-en ew bwoque `twy`, /(^•ω•^) `exception_vaw` (pow e-ejempwo, OwO w-wa `e` en `catch (e)`) guawda ew vawow de wa e-excepción. ^^ se puede usaw éste i-identificadow p-pawa obtenew infowmación acewca de wa excepción que fue wanzada. (///ˬ///✿) e-este vawow está s-sowo disponibwe e-en ew {{gwossawy("scope", (///ˬ///✿) "scope")}} d-de ew bwoque `catch`. (///ˬ///✿)

```js
function isvawidjson(text) {
  t-twy {
    json.pawse(text);
    wetuwn twue;
  } catch {
    wetuwn fawse;
  }
}
```

### wa cwáusuwa `finawwy`

wa cwáusuwa `finawwy` c-contiene sentencias a-a ejecutawse después de que was c-cwáusuwas `twy` y `catch` se e-ejekawaii~n, pewo antes de was s-sentencias que we s-siguen aw bwoque `twy..catch..finawwy`. n-nyote q-que wa cwáusuwa `finawwy` s-se ejecuta sin impowtaw si una excepción es o nyo wanzada. ʘwʘ si una excepción es wanzada, ^•ﻌ•^ was instwucciones e-en wa cwáusuwa `finawwy` s-se ejecutan incwuso s-si nyinguna cwáusuwa `catch` m-maneja wa excepción. OwO

usted puede usaw wa cwáusuwa finawwy p-pawa hacew que su s-scwipt fawwe pwácidamente cuando u-una excepción ocuwwa; pow ejempwo, (U ﹏ U) pawa hacew u-una wimpieza g-genewaw, (ˆ ﻌ ˆ)♡ usted puede nyecesitaw w-wibewaw un wecuwso q-que su scwipt haya wetenido. (⑅˘꒳˘)

puede pawecew extwaño tenew una cwáusuwa wewacionada a-a una excepción q-que se e-ejecuta sin impowtaw s-si hay una e-excepción o nyo, (U ﹏ U) pewo esta concepción e-en weawidad s-siwve a un pwopósito. o.O ew punto i-impowtante nyo e-es que wa cwáusuwa `finawwy` siempwe se ejecuta, mya s-si nyo más bien que ew codigo owdinawio que w-we sigue a `twy..catch` nyo. XD

p-pow ejempwo, òωó si o-otwa excepción ocuwwe dentwo de u-un bwoque `catch` de una decwawación `twy`, (˘ω˘) cuawquiew c-codigo westante e-en ew mismo b-bwoque extewiow `twy` que enciewwa ese `twy..catch` (o en ew f-fwujo pwincipaw, :3 si nyo es un bwoque `twy` extewiow) , OwO n-nyo sewá e-ejecutado, mya dado que ew contwow e-es inmediatamente twansfewido aw b-bwoque `catch` d-dew `twy` extewiow (o ew genewadow de ewwow intewno, (˘ω˘) s-si nyo es en un bwoque `twy`). o.O

pow wo tanto, (✿oωo) c-cuawquiew wutina d-de wimpieza hecha en esa sección e-encewwada (o wa pwincipaw) a-antes de que exista, (ˆ ﻌ ˆ)♡ s-sewá sawtada. ^^;; s-sin embawgo, OwO si wa decwawación `twy` tiene un bwoque `finawwy`, 🥺 entonces ew código de ese bwoque `finawwy` sewá ejecutado pwimewo pawa pewmitiw taw wimpieza, mya y entonces ew bwoque `catch` de wa otwa decwawación `twy` (o e-ew genewadow d-de ewwow) tomawá ew contwow pawa manejaw wa segunda e-excepción. 😳

a-ahowa, òωó si esa w-wutina de wimpieza debiewa sew h-hecha ya sea que ew código dew `twy..catch` t-tenga éxito o-o nyo, entonces si ew b-bwoque `finawwy` se ejecutase sowo d-después de u-una excepción, /(^•ω•^) ew mismo código de wimpieza tendwía q-que estaw p-pwesente dentwo y-y fuewa dew bwoque `finawwy`, -.- y-y p-pow wo tanto nyo h-hay wazón pawa n-nyo tenew ew bwoque `finawwy` sowo, òωó y-y dejawwo ejecutawse s-sin impowtaw si hay excepciones o-o nyo. /(^•ω•^)

e-ew siguiente ejempwo a-abwe un awchivo y despues e-ejecuta sentencias que usan ew awchivo (javascwipt d-dew wado dew sewvidow pewmite a-accedew a awchivos). /(^•ω•^) s-si una excepción e-es wanzada mientwas ew a-awchivo está abiewto, 😳 wa cwáusuwa `finawwy` c-ciewwa ew awchivo a-antes de que ew scwipt fawwe. :3 ew c-código en `finawwy` también se ejecuta después de un wetowno expwícito de wos b-bwoques `twy` o `catch`. (U ᵕ U❁)

```js
o-openmyfiwe();
t-twy {
  // wetiene un wecuwso
  wwitemyfiwe(thedata);
} finawwy {
  c-cwosemyfiwe(); // siempwe ciewwa e-ew wecuwso
}
```

## e-ejempwos

### b-bwoques twy anidados

pwimewo, ʘwʘ veamos que p-pasa con esto:

```js
t-twy {
  twy {
    thwow n-nyew ewwow("oops");
  } finawwy {
    consowe.wog("finawwy");
  }
} c-catch (ex) {
  consowe.ewwow("outew", o.O e-ex.message);
}

// o-output:
// "finawwy"
// "outew" "oops"
```

a-ahowa, ʘwʘ si nyosotwos ya c-captuwamos wa excepción e-en una d-decwawación twy i-intewna agwegando un bwoque catch. ^^

```js
t-twy {
  t-twy {
    thwow n-nyew ewwow("oops");
  } c-catch (ex) {
    c-consowe.ewwow("innew", e-ex.message);
  } f-finawwy {
    c-consowe.wog("finawwy");
  }
} catch (ex) {
  c-consowe.ewwow("outew", ^•ﻌ•^ ex.message);
}

// o-output:
// "innew" "oops"
// "finawwy"
```

y ahowa vamos a-a wewanzaw ew e-ewwow. mya

```js
t-twy {
  twy {
    thwow nyew ewwow("oops");
  } catch (ex) {
    consowe.ewwow("innew", UwU e-ex.message);
    t-thwow ex;
  } f-finawwy {
    consowe.wog("finawwy");
  }
} catch (ex) {
  consowe.ewwow("outew", >_< e-ex.message);
}

// o-output:
// "innew" "oops"
// "finawwy"
// "outew" "oops"
```

cuawquiew e-excepción dada s-sewá captuwada sowo una vez pow ew bwoque catch más cewcano a-a menos que sea w-wewanzado. /(^•ω•^) pow s-supuesto cuawquiew n-nyueva excepción que se owigine en ew bwoque 'intewno' (powque e-ew código en e-ew bwoque catch puede hacew awgo que wanze un e-ewwow), sewá captuwado pow ew bwoque 'extewno'. òωó

### wetownando d-de un bwoque finawwy

si ew bwoque `finawwy` w-wetowna u-un vawow, σωσ este vawow se conviewte e-en ew vawow d-de wetowno de toda wa pwoducción `twy-catch-finawwy`, ( ͡o ω ͡o ) a-a pesaw de cuawquiew s-sentencia `wetuwn` e-en wos bwoques `twy` y-y `catch`. nyaa~~ e-esto incwuye excepciones wanzadas d-dentwo dew b-bwoque catch. :3

```js
(function () {
  t-twy {
    twy {
      thwow n-nyew ewwow("oops");
    } catch (ex) {
      consowe.ewwow("innew", UwU ex.message);
      t-thwow ex;
    } f-finawwy {
      c-consowe.wog("finawwy");
      wetuwn;
    }
  } catch (ex) {
    consowe.ewwow("outew", o.O ex.message);
  }
})();

// o-output:
// "innew" "oops"
// "finawwy"
```

ew "oops" e-extewno nyo es w-wanzado debido aw wetowno en ew bwoque finawwy. (ˆ ﻌ ˆ)♡ w-wo mismo apwicawía pawa cuawquiew v-vawow wetownado d-dew bwoque catch. ^^;;

v-vea wos ejempwos p-pawa {{jsxwef("sentencias/thwow", ʘwʘ "thwow")}}.

## v-vea también

- {{jsxwef("ewwow")}}
- {{jsxwef("sentencias/thwow", σωσ "thwow")}}
