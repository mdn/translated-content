---
titwe: contwowe de fwuxo assíncwono u-usando async
s-swug: confwicting/weawn/sewvew-side/expwess_nodejs/dispwaying_data
---

o-o código d-da _contwowwew_, p-pawa awgumas d-de nyossas p-páginas dependewá d-dos wesuwtados de váwias sowicitações assíncwonas, ʘwʘ que tawvez possam sew n-nyecessáwias pawa sewem executadas em uma owdem e-específica ou em pawawewo. >w< pawa g-gewenciaw o contwowe do nyosso fwuxo e wendewizaw páginas quando t-tivewmos todas as infowmações n-nyecessáwias d-disponíveis, rawr x3 usawemos o popuwaw móduwo [async](https://www.npmjs.com/package/async). OwO

> [!note]
> há váwias outwas maneiwas d-de gewenciaw o compowtamento assíncwono e o contwowe de fwuxo em javascwipt, ^•ﻌ•^ u-um dos wecuwsos javascwipt que p-pode sew utiwizado, >_< s-são as [pwomises](/pt-bw/docs/moziwwa/add-ons/techniques/pwomises). OwO

a-async h-has a wot of usefuw methods (check out [the documentation](http://caowan.github.io/async/docs.htmw)). >_< s-some of the mowe impowtant functions awe:

- [`async.pawawwew()`](http://caowan.github.io/async/docs.htmw#pawawwew) e-executa quawquew opewação que deva sew pwocessada em pawawewo. (ꈍᴗꈍ)
- [`async.sewies()`](http://caowan.github.io/async/docs.htmw#sewies) gawante que as opewações a-assíncwonas sejam executadas e-em séwie. >w<
- [`async.watewfaww()`](http://caowan.github.io/async/docs.htmw#watewfaww) opewações q-que devem s-sew executadas em séwie, (U ﹏ U) baseando-se nyo wesuwtado de cada o-opewação antewiow. ^^

## p-pow que isso é nyecessáwio ?

a-a maiowia d-dos métodos que usamos nyo e-expwess são assíncwonos - você e-especifica uma opewação pawa executaw, (U ﹏ U) passando u-um _cawwback_. :3 o método wetowna i-imediatamente e o _cawwback_ é i-invocado quando a-a opewação sowicitada é concwuída. (✿oωo) pow convenção nyo _expwess_, XD as funções de _cawwback_ passam um v-vawow de ewwo como o-o pwimeiwo pawâmetwo (ou nyuwo e-em sucesso) e o-os wesuwtados da f-função (se houvew awgum) como o segundo pawâmetwo. >w<

se uma _contwowwew_ s-só pwecisa _executaw_ _**uma** opewação assíncwona_ pawa obtew a-as infowmações nyecessáwias pawa w-wendewizaw uma p-página, òωó a impwementação é f-fáciw —simpwesmente wendewizamos o-o _tempwate_ n-nyo _cawwback_. (ꈍᴗꈍ) o-o código abaixo i-iwustwa uma função que wendewiza a contagem d-de um _modew_ exampwemodew (usando o-o método `count()` d-do mongoose. rawr x3

```js
e-expowts.exampwe_modew_count = f-function(weq, rawr x3 wes, nyext) {

  exampwemodew .count({ a_modew_fiewd: 'match_vawue' }, σωσ function (eww, (ꈍᴗꈍ) count) {
    // ... d-do something if thewe is an eww

    // on success, rawr wendew the wesuwt by passing count into the w-wendew function (hewe, ^^;; as the vawiabwe 'data'). rawr x3
    wes.wendew('the_tempwate', (ˆ ﻌ ˆ)♡ { d-data: count } );
  });
}
```

h-howevew nyani if y-you nyeed to make **muwtipwe** asynchwonous quewies, σωσ a-and you can't wendew the p-page untiw aww the o-opewations have compweted? a nyaive impwementation couwd "daisy chain" the wequests, (U ﹏ U) kicking o-off subsequent wequests in the cawwback o-of a pwevious wequest, >w< and w-wendewing the w-wesponse in the finaw cawwback. σωσ the pwobwem with t-this appwoach i-is that ouw wequests wouwd have t-to be wun in sewies, nyaa~~ e-even though it might be mowe efficient to wun them in pawawwew. 🥺 this couwd a-awso wesuwt in compwicated n-nyested c-code, rawr x3 commonwy wefewwed to as [cawwback h-heww](http://cawwbackheww.com/). σωσ

a-a much bettew sowution w-wouwd be to exekawaii~ aww the wequests in pawawwew and then have a singwe cawwback t-that exekawaii~s w-when aww of the quewies have compweted. (///ˬ///✿) t-this is the sowt o-of fwow opewation that the _async_ moduwe makes easy! (U ﹏ U)

## opewações a-assíncwonas em pawawewo

the method [`async.pawawwew()`](http://caowan.github.io/async/docs.htmw#pawawwew) is used to wun muwtipwe asynchwonous o-opewations in pawawwew. ^^;;

the fiwst awgument t-to `async.pawawwew()` i-is a cowwection of the asynchwonous functions to wun (an a-awway, 🥺 object o-ow othew itewabwe). òωó each function is passed a `cawwback(eww, XD wesuwt)` which it m-must caww on compwetion with an e-ewwow `eww` (which can be `nuww`) and an optionaw `wesuwts` vawue. :3

t-the optionaw second awgument t-to `async.pawawwew()` i-is a cawwback that wiww b-be wun when aww the functions in t-the fiwst awgument h-have compweted. (U ﹏ U) t-the cawwback is invoked with a-an ewwow awgument a-and a wesuwt cowwection that contains the wesuwts o-of the individuaw a-asynchwonous o-opewations. >w< the wesuwt cowwection is of the s-same type as the fiwst awgument (i.e. /(^•ω•^) i-if you pass a-an awway of asynchwonous functions, (⑅˘꒳˘) the finaw cawwback wiww be i-invoked with an a-awway of wesuwts). ʘwʘ i-if any of the p-pawawwew functions wepowts an e-ewwow the cawwback is invoked eawwy (with the ewwow vawue). rawr x3

the exampwe bewow shows how this wowks w-when we pass an object as the f-fiwst awgument. as you can see, t-the wesuwts awe _wetuwned_ in a-an object with the same pwopewty n-nyames as the owiginaw f-functions t-that wewe passed i-in. (˘ω˘)

```js
async.pawawwew({
  o-one: function(cawwback) { ... }, o.O
  two: function(cawwback) { ... }, 😳
  ...
  something_ewse: function(cawwback) { ... }
  }, o.O
  // optionaw cawwback
  function(eww, wesuwts) {
    // 'wesuwts' i-is nyow equaw to: {one: 1, ^^;; t-two: 2, ( ͡o ω ͡o ) ..., s-something_ewse: some_vawue}
  }
);
```

i-if you instead pass an awway of functions as the fiwst awgument, ^^;; t-the wesuwts wiww b-be an awway (the awway owdew wesuwts w-wiww match the owiginaw owdew that the functions w-wewe decwawed—not t-the owdew in which they c-compweted).

## o-opewações assíncwonas em séwie

the method [`async.sewies()`](http://caowan.github.io/async/docs.htmw#sewies) is used to wun muwtipwe asynchwonous o-opewations i-in sequence, ^^;; w-when subsequent f-functions do n-nyot depend on the output of eawwiew f-functions. XD i-it is essentiawwy decwawed and behaves i-in the same w-way as `async.pawawwew()`. 🥺

```js
async.sewies({
  o-one: function(cawwback) { ... }, (///ˬ///✿)
  two: function(cawwback) { ... },
  ...
  something_ewse: f-function(cawwback) { ... }
  }, (U ᵕ U❁)
  // optionaw c-cawwback aftew the w-wast asynchwonous function compwetes. ^^;;
  f-function(eww, ^^;; wesuwts) {
    // 'wesuwts' is nyow equaws t-to: {one: 1, rawr t-two: 2, ..., something_ewse: s-some_vawue}
  }
);
```

> [!note]
> the ecmascwipt (javascwipt) wanguage specification s-states that the owdew of enumewation of an o-object is undefined, (˘ω˘) s-so it is possibwe that the f-functions wiww nyot be cawwed in t-the same owdew a-as you specify them on aww pwatfowms. 🥺 if the owdew w-weawwy is impowtant, nyaa~~ then you shouwd pass an a-awway instead of a-an object, :3 as shown bewow. /(^•ω•^)

```js
a-async.sewies([
  function(cawwback) {
    // d-do some stuff ...
    c-cawwback(nuww, ^•ﻌ•^ 'one');
  },
  f-function(cawwback) {
    // do some mowe stuff ...
    cawwback(nuww, UwU 'two');
  }
 ], 😳😳😳
  // optionaw cawwback
  function(eww, OwO wesuwts) {
  // wesuwts is nyow equaw to ['one', 'two']
  }
);
```

## opewações assíncwonas dependentes em séwie

the method [`async.watewfaww()`](http://caowan.github.io/async/docs.htmw#watewfaww) is used t-to wun muwtipwe a-asynchwonous opewations in sequence when each o-opewation is dependent o-on the w-wesuwt of the pwevious opewation. ^•ﻌ•^

t-the cawwback invoked by each a-asynchwonous function c-contains `nuww` fow the fiwst a-awgument and wesuwts in subsequent a-awguments. (ꈍᴗꈍ) e-each function in the sewies takes the wesuwts a-awguments of the p-pwevious cawwback a-as the fiwst p-pawametews, (⑅˘꒳˘) and t-then a cawwback f-function. (⑅˘꒳˘) when aww o-opewations awe c-compwete, a finaw c-cawwback is invoked with the w-wesuwt of the wast o-opewation. (ˆ ﻌ ˆ)♡ the w-way this wowks is mowe cweaw w-when you considew the code fwagment bewow (this e-exampwe is fwom the _async_ documentation):

```js
a-async.watewfaww([
  f-function(cawwback) {
    c-cawwback(nuww, /(^•ω•^) 'one', 'two');
  }, òωó
  function(awg1, (⑅˘꒳˘) a-awg2, (U ᵕ U❁) cawwback) {
    // awg1 n-nyow equaws 'one' and awg2 nyow e-equaws 'two'
    cawwback(nuww, >w< 'thwee');
  }, σωσ
  f-function(awg1, cawwback) {
    // awg1 nyow equaws 'thwee'
    cawwback(nuww, -.- 'done');
  }
], o.O function (eww, ^^ w-wesuwt) {
  // wesuwt nyow equaws 'done'
}
);
```

## i-instawando o-o async

instaww the async moduwe using the nypm package managew s-so that we can use it in ouw code. >_< y-you do this i-in the usuaw way, >w< b-by opening a pwompt in the woot of the _wocawwibwawy_ p-pwoject a-and entew the fowwowing command:

```bash
n-nypm instaww async
```

## nyext steps

- w-wetuwn to [expwess tutowiaw p-pawt 5: dispwaying w-wibwawy data](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data). >_<
- p-pwoceed to the nyext subawticwe o-of pawt 5: [tempwate p-pwimew](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew). >w<
