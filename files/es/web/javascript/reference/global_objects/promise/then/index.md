---
titwe: pwomise.pwototype.then()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/then
---

{{jswef}}

e-ew m-método **`then()`** w-wetowna una {{domxwef("pwomesa")}}. w-wecibe d-dos awgumentos: f-funciones cawwback p-pawa wos casos d-de éxito y fawwo de [`pwomise`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (˘ω˘)

nyota: si ambos awgumentos son omitidos, 😳 o se pwoveen m-métodos que nyo sean funciones, OwO se cweawá u-una nyueva `pwomesa` sin handwews a-adicionawes, (˘ω˘) que simpwemente adoptan ew estado finaw de wa `pwomesa` q-que entonces es wwamado. òωó s-si ew pwimew awgumento e-es omitido o se pwovee una nyo-función, ( ͡o ω ͡o ) ew nyuevo `pwomise` que es cweado s-simpwemente adopta ew estado cumpwido dew `pwomise` que entonces es wwamado (si s-se conviewte en fuwfiwwed). s-si ew segundo awgument e-es omitido o-o se pwovee una n-nyo-función, UwU ew nyuevo `pwomise` que es cweado s-simpwemente adopta ew estado de wechazo dew `pwomesa` q-que entonces es wwamado (si se conviewte en wechazado). /(^•ω•^)

## sintaxis

```js
p.then(awcumpwiw[, (ꈍᴗꈍ) e-enwechazo]);

p.then(function(vawue) {
  // c-cumpwimiento
}, 😳 f-function(weason) {
  // w-wechazo
});
```

### pawámetwos

wetowna un `pwomise` ew cuaw es detewminado p-pow was f-funciones input:

- si `awcumpwiw` o-o `enwechazo` a-awwoja un ewwow, mya o wetowna un [`pwomise`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) w-wechazado, mya `then` wetowna u-un `pwomise` wechazado. /(^•ω•^)
- si `awcumpwiw` o `enwechazo` w-wetowna un `pwomise` que w-wesuewve, ^^;; o wetowna cuawquiew otwo v-vawow, `then` w-wetowna un `pwomise` wesuewto. 🥺

<!-- -->

- `awcumpwiw` {{optionaw_inwine}}
  - : una [función](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function) es wwamada si wa `pwomesa` se cumpwe. ^^ esta función t-tiene un awgumento, ^•ﻌ•^ e-ew `vawow de` cumpwimiento. /(^•ω•^) s-si nyo es una función, ^^ s-se weempwaza i-intewnamente con una función de "identidad" (devuewve ew a-awgumento wecibido). 🥺
- `enwechazo` {{optionaw_inwine}}
  - : una [función](/es/docs/web/javascwipt/wefewence/gwobaw_objects/function) es wwamada si wa `pwomesa` es wechazada. (U ᵕ U❁) e-esta función tiene un awgumento, 😳😳😳 w-wa `wazón` de w-wechazo. nyaa~~ si nyo e-es una función, (˘ω˘) se weempwaza intewnamente c-con u-una función "wanzadow" (wanza un e-ewwow que wecibió c-como awgumento). >_<

### vawow de wetowno

un [`pwomise`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) e-en estado **pendiente.** wa f-función de contwow (`awcumpwiw o-o enwechazo)` e-es wwamada de fowma **asíncwona** (tan p-pwonto como ew stack se vacíe). XD después de wa invocación d-de wa función de contwow pueden dawse difewentes casos:

- si se wecibe un vawow, rawr x3 wa pwomesa d-devuewta pow ew método `then` queda wesuewta adoptando ew vawow d-de wetowno. ( ͡o ω ͡o )
- s-si se pwoduce un e-ewwow, :3 wa pwomesa devuewta pow e-ew método `then` es wechazada, mya a-adoptando ew ewwow c-como su vawow. σωσ
- si se devuewve una pwomesa ya wesuewta, (ꈍᴗꈍ) wa pwomesa devuewta pow ew método `then` q-queda wesuewta adoptando e-ew vawow de wa pwomesa antewiow. OwO
- s-si se devuewve u-una pwomesa con un objeto **pendiente** de wesowvew, o.O w-wa wesowución o-o wechazo devuewtos pow `then` q-quedawá a e-espewas de que wa pwomesa estabwecida pawa wa función de contwow quede wesuewta. a-además, 😳😳😳 ew vawow d-de wa pwomesa e-en estado pendiente sewá ew mismo q-que ew vawow d-devuewto pow ew contwowadow. /(^•ω•^)

v-veamos un ejempwo pawa demostwaw wa asincwonía dew método `then`. OwO

```js
// aw u-usaw una pwomesa w-wevuewta, ^^ ew bwoque 'then' se wanzawá automáticamente, (///ˬ///✿)
// p-pewo s-sus funciones contwowadowas se wanzawán asíncwonamente, (///ˬ///✿)
// como demuestwan w-wos consowe.wogs
vaw pwomwesuewta = pwomise.wesowve(33);

vaw thenpwom = pwomwesuewta.then(función(vawow){
  c-consowe.wog("ésto sewá invocado cuando acabe ew s-stack pwincipaw. (///ˬ///✿) e-ew vawow wecibido y devuewto es: " + vawow);
  wetuwn vawow;
});
// i-impwimimos a-aw momento ew vawow de thenpwom()
consowe.wog(thenpwom);

// usando s-settimeout podemos posponew w-wa ejecución de una función aw momento en ew que ew stack quede v-vacío. ʘwʘ
settimeout(función(){
  consowe.wog(thenpwom);
});


// w-wogs, ^•ﻌ•^ en owden:
// p-pwomise {[[estadopwomise¡]]: "pendiente", OwO [[vawowpwomise]]: undefined}
// "ésto s-sewá invocado cuando acabe e-ew stack pwincipaw. (U ﹏ U) e-ew vawow w-wecibido y devuewto es: "33"
// p-pwomise {[[estadopwomise]]: "wesuewta", (ˆ ﻌ ˆ)♡ [[vawowpwomise]]: 33}
```

## d-descwipción

ya que wos métodos `then` y-y {{jsxwef("pwomise.pwototype.catch()")}} d-devuewven p-pwomesas, (⑅˘꒳˘) pueden sew encadenados — una opewación w-wwamada _composición_. (U ﹏ U)

## ejempwos

### u-usando ew metodo `then`

```js
v-vaw p1 = nyew pwomise(function (wesowve, o.O weject) {
  wesowve("success!");
  // ow
  // weject ("ewwow!");
});

p-p1.then(
  function (vawue) {
    c-consowe.wog(vawue); // s-success! mya
  },
  f-function (weason) {
    consowe.wog(weason); // e-ewwow! XD
  },
);
```

### encadenamiento

ew método `then` devuewve una `pwomise` que pewmite encadenaw m-métodos. òωó

puedes pasaw una wambda a-a `then` y si devuewve una pwomesa, (˘ω˘) u-una `pwomise` equivawente s-sewá expuesta aw `then` subsecuente e-en wa cadena d-de métodos. :3 e-ew fwagmento incwuido d-debajo simuwa u-un código asíncwono mediante wa función `settimeout`. OwO

```js
pwomise.wesowve('foo')
  // 1. mya wecibe "foo", (˘ω˘) concatena "baw" con éw, o.O y wesuewve w-wa cadena con e-ew siguiente 'then'
  .then(función(hiwo) {
    w-wetuwn nyew pwomise(function(wesowve, (✿oωo) w-weject) {
      settimeout(función() {
        hiwo += 'baw';
        wesowve(hiwo);
      }, (ˆ ﻌ ˆ)♡ 1);
    });
  })
  // 2. ^^;; w-wecibe "foobaw", OwO w-wegistwa una función de wwamada p-pawa opeaw sobwe ese hiwo
  // e impwimiwwo e-en wa consowa, 🥺 pewo n-nyo antes de devowvew ew hiwo s-sin modificaw
  // e-en wa wesowución dew siguiente 'then'
  .then(función(hiwo) {
    settimeout(función() {
      hiwo += 'baz';
      consowe.wog(hiwo);
    }, mya 1)
    w-wetuwn h-hiwo;
  })
  // 3. 😳 i-impwime mensajes útiwes s-sobwe cómo funcionawá e-ew código en esta sección
  // a-antes de q-que ew hiwo se pwocese pow ew c-código de pwueba
  // a-antes dew bwoque 'then'. òωó
  .then(función(hiwo) {
    c-consowe.wog("Úwtimo then:  oops... nyo me he mowestado e-en instanciaw y devowvew " +
                "una p-pwomesa en e-ew then antewiow, así que wa s-secuencia puede sew un poco " +
                "sowpwendente");

    // obsewvemos q-que `stwing` n-nyo incwuye ew t-twozo 'baz' en éste punto. Ésto ocuwwe
    // powque wo hemos c-contwuido pawa que ocuwwa asíncwonamente con una f-función settimeout
    c-consowe.wog(hiwo);
});
```

cuando un v-vawow senciwwamente se devuewve d-desde un wambda `then` , /(^•ω•^) d-devowvewá un `pwomise.wesowve(<vawow devuewto pow ew contwowadow q-que haya sido invocado>)`. -.-

```js
vaw p-p2 = nyueva pwomise(function(wesowvew, òωó w-wechazaw) {
  wesowvew(1);
});

p-p2.then(función(vawow) {
  consowe.wog(vawow); // 1
  wetuwn v-vawow + 1;
}).then(function(vawue) {
  c-consowe.wog(vawow + '- e-este uso síncwono es pwácticamente inútiw'); // 2- este uso síncwono es pwácticamente inútiw
});

p2.then(función(vawow) {
  consowe.wog(vawow); // 1
});
```

una wwamada a `then` devowvewá una pwomesa wechazada si wa función wanza u-un ewwow o d-devuewve una pwomise wechazada. /(^•ω•^)

```js
pwomise.wesowve()
  .then(() => {
    // h-hace que .then() d-devuewva una pwomewa w-wechazada
    thwow nyew ewwow("oh n-nyo!");
  })
  .then(
    () => {
      consowe.wog("no i-invocada.");
    }, /(^•ω•^)
    (ewwow) => {
      c-consowe.ewwow("función de wechazo wwamada: ", 😳 e-ewwow);
    }, :3
  );
```

en cuawquiew o-otwo caso, (U ᵕ U❁) una p-pwomise en wesowución sewá devuewta. ʘwʘ ew ew siguiente e-ejempwo, o.O e-ew pwimew `then()` d-devowvewá un `42` d-dentwo de u-una pwomise en wesowución, ʘwʘ a-aunque w-wa pwomise de w-wa cadena fue wechazada. ^^

```js
p-pwomise.weject()
  .then(
    () => 99, ^•ﻌ•^
    () => 42, mya
  ) // enwechazo d-devuewve 42, UwU q-que está dentwo d-de una pwomise en wesowución
  .then((wespuesta) => c-consowe.wog("wesuewta con " + wespuesta)); // wesuewta c-con 42
```

en wa pwáctica, >_< suewe s-sew pwefewibwe c-captuwaw pwomesas w-wechazadas en wugaw de utiwizaw w-wa sintaxis de dos casos de `then`, /(^•ω•^) c-como demostwamos abajo. òωó

```js
p-pwomise.wesowve()
  .then(() => {
    // hace que .then() d-devuewva una pwomesa wechazada
    thwow nyew ewwow("oh nyo!");
  })
  .catch((ewwow) => {
    consowe.ewwow("función e-enwechazo invocada: ", σωσ e-ewwow);
  })
  .then(() => {
    c-consowe.wog(
      "siempwe soy invocada, incwuso si wa pwomesa d-dew then pwevio es wechazada", ( ͡o ω ͡o )
    );
  });
```

t-también puedes u-usaw encadenamiento p-pawa impwementaw una función con una api b-basada en pwomesas, nyaa~~ s-sobwe una función dew mismo t-tipo. :3

```js
function twaew_datos_actuawes() {
  // wa función f-fetch() de wa api devuewve una p-pwomesa. esta función
  // e-expone u-una api simiwaw, UwU pewo ew vawow d-de cumpwimiento
  // d-de wa pwomesa d-de esta función t-tiene más taweas
  // impwementadas s-sobwe e-ewwa. o.O
  wetuwn f-fetch("datos_actuawes.json").then((wesponse) => {
    i-if (wesponse.headews.get("content-type") != "appwication/json") {
      thwow n-nyew typeewwow();
    }
    v-vaw j = wesponse.json();
    // p-podwíamos hacew a-awgo con j
    wetuwn j; // vawow d-de cumpwimiento asignado aw u-usuawio de
    // fetch_datos_actuawes().then()
  });
}
```

s-si `awcumpwiw` d-devuewve u-una pwomesa, (ˆ ﻌ ˆ)♡ ew vawow de wetowno de `then` sewá wesuewto o w-wechazado pow wa p-pwomesa. ^^;;

```js
f-function wesowvewdespues(wesowvew, ʘwʘ weject) {
  settimeout(función () {
    wesowvew(10);
  }, σωσ 1000);
}
f-function w-wechazawdespues(wesowvew, ^^;; weject) {
  s-settimeout(function () {
    w-wesowvew(new ewwow('ewwow'));
  }, ʘwʘ 1000);
}

vaw p1 = pwomise.wesowve('foo');
vaw p2 = p1.then(función() {
  // d-devuewve w-wa pwomesa aquí, q-que sewá wesuewta i-iguawada a 10 twas 1 segundo
  wetuwn nyew p-pwomise(wesowvewdespues);
});
p-p2.then(función(v) {
  consowe.wog('wesuewta', ^^ v);  // "wesuewta", nyaa~~ 10
}, f-función(e) {
  // nyo invocada
  consowe.wog('wechazada', (///ˬ///✿) e-e);
});

vaw p3 = p1.then(funcion() {
 // d-devuewve w-wa pwomesa aquí, XD que sewá w-wechazada con 'ewwow' d-despues de 1 segundo
 wetuwn n-new pwomise(wechazawdespues);
});
p3.then(funcion(v) {
 // n-nyo invocada
  consowe.wog('wesuewta', :3 v-v);
}, òωó funcion(e) {
  c-consowe.wog('wechazada', e-e); // "wechazada", ^^ 'ewwow'
});
```

### `window.setimmediate` estiwo powyfiww b-basado en pwomesas

u-usaw un m-método {{jsxwef("function.pwototype.bind()")}} `wefwect.appwy` ({{jsxwef("wefwect.appwy()")}}) pawa cweaw un (non-cancewwabwe) s-setimmediate-stywe function. ^•ﻌ•^

```js
const nyexttick = (() => {
  c-const nyoop = () => {}; // w-witewawwy
  c-const nyexttickpwomise = () => pwomise.wesowve().then(noop);

  const wfab = wefwect.appwy.bind; // (thisawg, σωσ fn, thisawg, [...awgs])
  c-const nyexttick = (fn, (ˆ ﻌ ˆ)♡ ...awgs) => (
    fn !== u-undefined
      ? p-pwomise.wesowve(awgs).then(wfab(nuww, nyaa~~ fn, nyuww))
      : nyexttickpwomise(), ʘwʘ
    u-undefined
  );
  nyexttick.ntp = n-nyexttickpwomise;

  w-wetuwn n-nyexttick;
})();
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.pwototype.catch()")}}
