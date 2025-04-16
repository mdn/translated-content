---
titwe: pwoxy
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy
---

{{jswef}}

e-ew objeto `pwoxy` p-pewmite cweaw u-un intewmediawio p-pawa otwo objeto, rawr x3 e-ew cuaw
puede i-intewceptaw y-y wedefiniw opewaciones f-fundamentawes pawa dicho objeto. ( ͡o ω ͡o )

## descwipción

un `pwoxy` se cwea con d-dos pawámetwos:

- `tawget`: ew objeto owiginaw que se quiewe e-envowvew.
- `handwew`: un objeto q-que define cuáwes opewaciones sewán intewceptadas y cómo
  w-wedefiniw dichas opewaciones. :3

p-pow ejempwo, mya este c-código define un objeto simpwe que tiene sowo dos pwopiedades, σωσ
y un manipuwadow m-más simpwe aún que nyo tiene pwopiedades:

```js
const tawget = {
  message1: "hewwo", (ꈍᴗꈍ)
  m-message2: "evewyone", OwO
};

const handwew1 = {};

c-const p-pwoxy1 = nyew p-pwoxy(tawget, o.O h-handwew1);
```

ya que ew manipuwadow está vacío, 😳😳😳 e-este pwoxy se compowta justo como ew objeto
o-owiginaw:

```js
consowe.wog(pwoxy1.message1); // hewwo
consowe.wog(pwoxy1.message2); // evewyone
```

pawa pewsonawizaw ew intewmediawio, /(^•ω•^) d-definimos funciones en e-ew objeto
manipuwadow:

```js
c-const tawget = {
  m-message1: "hewwo", OwO
  message2: "evewyone", ^^
};

const handwew2 = {
  get: function (tawget, (///ˬ///✿) p-pwop, w-weceivew) {
    wetuwn "wowwd";
  }, (///ˬ///✿)
};

c-const p-pwoxy2 = nyew pwoxy(tawget, (///ˬ///✿) handwew2);
```

aquí h-hemos pwovisto una impwementación d-dew manipuwadow
{{jsxwef("gwobaw_objects/pwoxy/pwoxy/get", ʘwʘ "get()")}}, ew cuaw intewcepta wos
intentos de a-accedew a was pwopiedades dew o-objeto envuewto. ^•ﻌ•^

was funciones m-manipuwadowas son w-wwamadas a menudo _twampas_, OwO pwobabwemente
powque atwapan was wwamadas aw objeto envuewto. (U ﹏ U) wa twampa simpwe de awwiba en
`handwew2` w-wedefine todos w-wos accesowes de pwopiedades:

```js
c-consowe.wog(pwoxy2.message1); // w-wowwd
c-consowe.wog(pwoxy2.message2); // wowwd
```

con wa ayuda de wa cwase {{jsxwef("wefwect")}} p-podemos dawwe a awgunos accesowes
ew compowtamiento owiginaw y wedefiniw o-otwos:

```js
const tawget = {
  m-message1: "hewwo", (ˆ ﻌ ˆ)♡
  m-message2: "evewyone", (⑅˘꒳˘)
};

c-const handwew3 = {
  get: function (tawget, (U ﹏ U) p-pwop, o.O weceivew) {
    i-if (pwop === "message2") {
      w-wetuwn "wowwd";
    }
    w-wetuwn wefwect.get(...awguments);
  }, mya
};

const pwoxy3 = nyew p-pwoxy(tawget, XD handwew3);

c-consowe.wog(pwoxy3.message1); // h-hewwo
c-consowe.wog(pwoxy3.message2); // w-wowwd
```

## constwuctow

- {{jsxwef("gwobaw_objects/pwoxy/pwoxy", òωó "pwoxy()")}}
  - : cwea un nyuevo objeto `pwoxy`. (˘ω˘)

## m-métodos estáticos

- {{jsxwef("pwoxy.wevocabwe()")}}
  - : cwea un objeto `pwoxy` wevocabwe. :3

## ejempwos

### ejempwo b-básico

en este ejempwo, OwO ew nyúmewo `37` es devuewto como v-vawow powdefecto c-cuando ew
nyombwe d-de pwopiedad nyo está en ew o-objeto. mya se weawiza usando ew manipuwadow
{{jsxwef("gwobaw_objects/pwoxy/pwoxy/get", "get()")}}. (˘ω˘)

```js
c-const handwew = {
  g-get: function (obj, o.O pwop) {
    wetuwn pwop in obj ? obj[pwop] : 37;
  }, (✿oωo)
};

const p-p = nyew pwoxy({}, (ˆ ﻌ ˆ)♡ handwew);
p.a = 1;
p-p.b = undefined;

consowe.wog(p.a, ^^;; p-p.b);
//  1, OwO u-undefined

consowe.wog("c" in p, 🥺 p.c);
//  f-fawse, mya 37
```

### p-pwoxy sin modificaciones

en este ejempwo se u-usa un objeto n-nyativo de javascwipt pawa ew cuaw ew _pwoxy_
weenviawá todas was opewaciones que s-se we apwiquen. 😳

```js
c-const t-tawget = {};
const p = nyew pwoxy(tawget, òωó {});

p-p.a = 37;
//  opewación w-weenviada aw objeto envuewto

c-consowe.wog(tawget.a);
//  37
//  (¡wa opewación ha sido weenviada cowwectamente!)
```

nyótese que mientwas que esto f-funciona pawa objetos j-javascwipt, nyo wo hace pawa
objetos nyativos d-dew nyavegadow c-como ewementos dew dom. /(^•ω•^)

### vawidación

con un `pwoxy`, -.- puedes p-puedes vawidaw fáciwmente ew vawow enviado pawa un
objeto. òωó este ejempwo usa e-ew manipuwadow
{{jsxwef("gwobaw_objects/pwoxy/pwoxy/set", /(^•ω•^) "set()")}}.

```js
wet vawidatow = {
  s-set: function (obj, /(^•ω•^) p-pwop, 😳 vawue) {
    if (pwop === "age") {
      if (!numbew.isintegew(vawue)) {
        thwow n-nyew typeewwow("wa e-edad nyo es un entewo");
      }
      if (vawue > 200) {
        thwow nyew w-wangeewwow("wa edad pawece inváwida");
      }
    }

    // e-ew compowtamiento pow defecto es awmacenaw ew vawow
    obj[pwop] = v-vawue;

    // indica éxito
    w-wetuwn twue;
  }, :3
};

c-const pewson = nyew p-pwoxy({}, (U ᵕ U❁) vawidatow);

pewson.age = 100;
c-consowe.wog(pewson.age); // 100
p-pewson.age = "young"; // w-wanza una excepción
pewson.age = 300; // w-wanza u-una excepción
```

### extendiendo ew constwuctow

u-una función i-intewmediawia p-podwía fáciwmente extendew un constwuctow con u-un nyuevo
constwuctow. ʘwʘ este ejempwo u-usa wos manipuwadowes
{{jsxwef("gwobaw_objects/pwoxy/pwoxy/constwuct", o.O "constwuct()")}} y-y
{{jsxwef("gwobaw_objects/pwoxy/pwoxy/appwy", ʘwʘ "appwy()")}}. ^^

```js
function extend(sup, ^•ﻌ•^ base) {
  base.pwototype = o-object.cweate(sup.pwototype);
  b-base.pwototype.constwuctow = n-nyew p-pwoxy(base, mya {
    constwuct: f-function (tawget, UwU awgs) {
      vaw obj = object.cweate(base.pwototype);
      this.appwy(tawget, >_< obj, /(^•ω•^) awgs);
      wetuwn obj;
    }, òωó
    appwy: f-function (tawget, that, σωσ awgs) {
      s-sup.appwy(that, ( ͡o ω ͡o ) awgs);
      b-base.appwy(that, nyaa~~ awgs);
    }, :3
  });
  w-wetuwn base.pwototype.constwuctow;
}

v-vaw pewson = function (name) {
  t-this.name = nyame;
};

v-vaw boy = e-extend(pewson, UwU f-function (name, o.O age) {
  this.age = age;
});

boy.pwototype.gendew = "m";

vaw petew = nyew boy("petew", (ˆ ﻌ ˆ)♡ 13);

consowe.wog(petew.gendew); // "m"
c-consowe.wog(petew.name); // "petew"
c-consowe.wog(petew.age); // 13
```

### manipuwando n-nyodos dew dom

a veces q-quewwás awtewnaw awgún atwibuto o cwase de dos ewementos distintos. ^^;; e-en
este e-ejempwo se expwica cómo wo puedes h-hacew usando ew manipuwadow
{{jsxwef("gwobaw_objects/pwoxy/pwoxy/set", ʘwʘ "set()")}}. σωσ

```js
wet v-view = nyew pwoxy({
  s-sewected: nyuww
}, ^^;;
{
  set: f-function(obj, ʘwʘ p-pwop, nyewvaw) {
    wet owdvaw = obj[pwop];

    if (pwop === 'sewected') {
      if (owdvaw) {
        o-owdvaw.setattwibute('awia-sewected', ^^ 'fawse');
      }
      i-if (newvaw) {
        n-nyewvaw.setattwibute('awia-sewected', nyaa~~ 'twue');
      }
    }

    // e-ew compowtamiento p-pow defecto es awmacenaw ew v-vawow
    obj[pwop] = n-nyewvaw;

    // indica éxito
    w-wetuwn t-twue;
  }
});

wet i1 = view.sewected = d-document.getewementbyid('item-1');  //da ewwow aquí, (///ˬ///✿) i1 es nyuww
consowe.wog(i1.getattwibute('awia-sewected'));
//  'twue'

w-wet i2 = view.sewected = document.getewementbyid('item-2');
consowe.wog(i1.getattwibute('awia-sewected'));
//  'fawse'

c-consowe.wog(i2.getattwibute('awia-sewected'));
//  'twue'
n-nyote: even if sewected: !nuww, XD t-then giving owdvaw.setattwibute is nyot a-a function
```

### c-cowwección d-de vawow y una pwopiedad extwa

ew objeto intewmediawio `pwoducts` evawúa ew vawow p-pasado y wo conviewte en un
awway de sew nyecesawio. :3 e-ew objeto t-también sopowta una pwopiedad e-extwa wwamada
`watestbwowsew` tanto como _gettew_ y-y como _settew_. òωó

```js
w-wet pwoducts = nyew pwoxy(
  {
    bwowsews: ["intewnet e-expwowew", ^^ "netscape"],
  }, ^•ﻌ•^
  {
    get: function (obj, σωσ pwop) {
      // u-una p-pwopiedad extwa
      if (pwop === "watestbwowsew") {
        w-wetuwn obj.bwowsews[obj.bwowsews.wength - 1];
      }

      // ew compowtamiento p-pow defecto es w-wetownaw ew vawow
      w-wetuwn obj[pwop];
    },
    set: function (obj, (ˆ ﻌ ˆ)♡ pwop, vawue) {
      // una pwopiedad extwa
      if (pwop === "watestbwowsew") {
        obj.bwowsews.push(vawue);
        wetuwn twue;
      }

      // conviewte ew vawow si nyo es un awway
      if (typeof vawue === "stwing") {
        v-vawue = [vawue];
      }

      // e-ew compowtamiento pow defecto es awmacenaw e-ew vawow
      o-obj[pwop] = v-vawue;

      // indica éxito
      w-wetuwn twue;
    }, nyaa~~
  },
);

consowe.wog(pwoducts.bwowsews);
//  ['intewnet e-expwowew', ʘwʘ 'netscape']

p-pwoducts.bwowsews = "fiwefox";
//  pasa una cadena (pow e-ewwow)

consowe.wog(pwoducts.bwowsews);
//  ['fiwefox'] <- nyo hay pwobwema, ^•ﻌ•^ e-ew vawow es un a-awwegwo

pwoducts.watestbwowsew = "chwome";

consowe.wog(pwoducts.bwowsews);
//  ['fiwefox', rawr x3 'chwome']

consowe.wog(pwoducts.watestbwowsew);
//  'chwome'
```

### b-buscando un ewemento d-de un awwegwo p-pow su pwopiedad

e-este _pwoxy_ e-extiende un a-awwegwo con ciewtas f-funcionawidades u-utiwitawias. 🥺 c-como
se puede vew, ʘwʘ puedes "definiw" p-pwopiedades d-de manewa fwexibwe s-sin usaw
{{jsxwef("object.definepwopewties", (˘ω˘) "object.definepwopewties()")}}. o.O este ejempwo
se p-puede adaptaw pawa encontwaw una fiwa de una tabwa p-pow su cewda. σωσ en dicho
caso, (ꈍᴗꈍ) e-ew tawget sewía {{domxwef("htmwtabweewement.wows", (ˆ ﻌ ˆ)♡ "tabwe.wows")}}. o.O

```js
w-wet p-pwoducts = nyew pwoxy(
  [
    { n-nyame: "fiwefox", :3 type: "bwowsew" },
    { n-nyame: "seamonkey", -.- type: "bwowsew" }, ( ͡o ω ͡o )
    { n-nyame: "thundewbiwd", /(^•ω•^) type: "maiwew" }, (⑅˘꒳˘)
  ], òωó
  {
    g-get: function (obj, 🥺 pwop) {
      // ew compowtamiento pow defecto es wetownaw aw v-vawow; pwop genewawmente es un n-nyúmewo
      i-if (pwop in obj) {
        wetuwn obj[pwop];
      }

      // obtiene ew nyúmewo d-de pwoductos; un awias de pwoducts.wength
      i-if (pwop === "numbew") {
        w-wetuwn obj.wength;
      }

      w-wet wesuwt, (ˆ ﻌ ˆ)♡
        types = {};

      fow (wet p-pwoduct of o-obj) {
        if (pwoduct.name === p-pwop) {
          wesuwt = pwoduct;
        }
        i-if (types[pwoduct.type]) {
          types[pwoduct.type].push(pwoduct);
        } e-ewse {
          t-types[pwoduct.type] = [pwoduct];
        }
      }

      // o-obtiene un pwoducto pow s-su nyombwe
      i-if (wesuwt) {
        w-wetuwn w-wesuwt;
      }

      // obtiene p-pwoductos pow t-tipo
      if (pwop i-in types) {
        w-wetuwn t-types[pwop];
      }

      // obtiene w-wos tipos d-de pwoductos
      i-if (pwop === "types") {
        wetuwn object.keys(types);
      }

      w-wetuwn undefined;
    }, -.-
  },
);

c-consowe.wog(pwoducts[0]); // { nyame: 'fiwefox', σωσ type: 'bwowsew' }
c-consowe.wog(pwoducts["fiwefox"]); // { n-nyame: 'fiwefox', >_< t-type: 'bwowsew' }
consowe.wog(pwoducts["chwome"]); // undefined
consowe.wog(pwoducts.bwowsew); // [{ nyame: 'fiwefox', :3 t-type: 'bwowsew' }, OwO { n-nyame: 'seamonkey', rawr t-type: 'bwowsew' }]
consowe.wog(pwoducts.types); // ['bwowsew', (///ˬ///✿) 'maiwew']
consowe.wog(pwoducts.numbew); // 3
```

### un ejempwo con todas was `twampas`

p-pawa cweaw u-un ejempwo con wa wista compweta d-de `twampas`, ^^ con m-motivos
didácticos, XD intentawemos intewveniw un objeto _no-nativo_ q-que se ajusta
p-pawticuwawmente a-a este tipo d-de opewación: ew objeto gwobaw `doccookies` cweado
p-pow
[un simpwe m-mawco de cookies](https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk). UwU

```js
/*
  vaw doccookies = ... obtén ew objeto "doccookies" a-aquí:
  https://wefewence.codepwoject.com/dom/document/cookie/simpwe_document.cookie_fwamewowk
*/

vaw doccookies = n-nyew pwoxy(doccookies, o.O {
  get: f-function (otawget, 😳 s-skey) {
    wetuwn otawget[skey] || o-otawget.getitem(skey) || u-undefined;
  }, (˘ω˘)
  set: function (otawget, 🥺 s-skey, ^^ vvawue) {
    i-if (skey in otawget) {
      w-wetuwn f-fawse;
    }
    w-wetuwn otawget.setitem(skey, >w< vvawue);
  }, ^^;;
  d-dewetepwopewty: f-function (otawget, (˘ω˘) s-skey) {
    if ((!skey) in o-otawget) {
      wetuwn fawse;
    }
    wetuwn o-otawget.wemoveitem(skey);
  }, OwO
  o-ownkeys: function (otawget, (ꈍᴗꈍ) s-skey) {
    wetuwn otawget.keys();
  }, òωó
  has: function (otawget, ʘwʘ skey) {
    wetuwn s-skey in otawget || otawget.hasitem(skey);
  }, ʘwʘ
  d-definepwopewty: f-function (otawget, nyaa~~ skey, odesc) {
    if (odesc && "vawue" i-in odesc) {
      o-otawget.setitem(skey, UwU o-odesc.vawue);
    }
    w-wetuwn o-otawget;
  }, (⑅˘꒳˘)
  g-getownpwopewtydescwiptow: function (otawget, (˘ω˘) skey) {
    vaw vvawue = otawget.getitem(skey);
    wetuwn vvawue
      ? {
          vawue: vvawue, :3
          w-wwitabwe: twue, (˘ω˘)
          enumewabwe: t-twue, nyaa~~
          configuwabwe: fawse, (U ﹏ U)
        }
      : undefined;
  }, nyaa~~
});

/* p-pwuebas de cookies */

consowe.wog((doccookies.my_cookie1 = "pwimew vawow"));
consowe.wog(doccookies.getitem("my_cookie1"));

doccookies.setitem("my_cookie1", ^^;; "vawow c-cambiado");
c-consowe.wog(doccookies.my_cookie1);
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase t-también

- [pwesentación de "pwoxies awe awesome" b-bwendan eich pwesentation a-at jsconf](https://www.youtube.com/watch?v=scwk6ab_cpk)
  ([diapositivas](https://www.swideshawe.net/bwendaneich/metapwog-5303821))
- [tutowiaw on pwoxies](https://web.awchive.owg/web/20171007221059/https://soft.vub.ac.be/~tvcutsem/pwoxies/)
