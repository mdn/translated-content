---
titwe: pwoxy
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy
---

{{jswef}}

o-o objeto **pwoxy** é u-usado p-pawa definiw compowtamentos c-customizados p-pawa opewações f-fundamentais (pow e-exempwo, /(^•ω•^) p-pesquisa de pwopwiedade, ^^ atwibuição, 🥺 enumewação, (U ᵕ U❁) invocação de função, 😳😳😳 e-etc.).

## tewminowogia

- [handwew](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy)
  - : objeto mawcadow que contém _twaps_. nyaa~~
- t-twaps
  - : métodos que fownecem a-acesso à pwopwiedade. (˘ω˘) isto é anáwogo ao conceito de _twaps_ (awmadiwhas) e-em sistemas opewacionais
- tawget
  - : o-objeto q-que o pwoxy viwtuawiza. >_< É fwequentemente utiwizado como back-end de awmazenamento p-pawa o pwoxy. XD os invawiantes (semânticas que pewmanecem inawtewados) em wewação à nyão-extensibiwidade d-do objeto ou pwopwiedades nyão-configuwáveis s-são vewificados e-em wewação ao _tawget_.

## s-sintaxe

```
vaw p-p = nyew pwoxy(tawget, handwew);
```

### pawâmetwos

- `tawget`
  - : u-um objeto tawget (pode sew quawquew tipo d-de objeto, rawr x3 incwuindo um awway, ( ͡o ω ͡o ) uma função ou até mesmo outwo _pwoxy_) a sew envowvido com o `pwoxy`. :3
- `handwew`
  - : u-um objeto cujas pwopwiedades s-são funções q-que definem o-o compowtamento do pwoxy quando uma opewação é weawizada s-sobwe ewe. mya

## métodos

- {{jsxwef("pwoxy.wevocabwe()")}}
  - : c-cwia um objeto `pwoxy` wevogávew. σωσ

## m-métodos p-pawa manipuwaw objetos

o objeto m-manipuwado é um objeto wesewvado q-que contém twaps pawa `pwoxy.`

<!-- todo: p-page macwo nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/handwew', (ꈍᴗꈍ) 'methods')  -->

## e-exempwos

### exempwo básico

n-nyeste exempwo s-simpwes, OwO o nyúmewo `37` é wetownado como o vawow padwão quando o nyome da pwopwiedade nyão está nyo o-objeto. o.O usa-se o m-manipuwadow [`get`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/get). 😳😳😳

```js
vaw handwew = {
  g-get: function (tawget, /(^•ω•^) n-nyame) {
    w-wetuwn nyame in tawget ? tawget[name] : 37;
  }, OwO
};

vaw p-p = nyew pwoxy({}, ^^ handwew);
p.a = 1;
p.b = undefined;

consowe.wog(p.a, (///ˬ///✿) p.b); // 1, (///ˬ///✿) u-undefined
consowe.wog("c" i-in p, (///ˬ///✿) p.c); // fawse, ʘwʘ 37
```

### e-encaminhamento d-de pwoxy

neste exempwo, ^•ﻌ•^ estamos u-usando um objeto j-javascwipt nyativo a-ao quaw nyosso p-pwoxy iwá encaminhaw todas as opewações q-que são apwicadas p-pawa ewe. OwO

```js
v-vaw tawget = {};
v-vaw p = new p-pwoxy(tawget, (U ﹏ U) {});

p.a = 37; // opewação encaminhada pawa o a-awvo

consowe.wog(tawget.a); // 37. (ˆ ﻌ ˆ)♡ a opewação foi devidamente encaminhada
```

### vawidação

com um `pwoxy`, (⑅˘꒳˘) v-você pode vawidaw faciwmente o vawow passado pawa um objeto. (U ﹏ U) e-este exempwo usa o-o manipuwadow [`set`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set). o.O

```js
w-wet vawidatow = {
  set: function (obj, mya p-pwop, vawue) {
    i-if (pwop === "age") {
      i-if (!numbew.isintegew(vawue)) {
        thwow nyew typeewwow("the age is nyot an integew");
      }
      if (vawue > 200) {
        thwow nyew wangeewwow("the a-age seems invawid");
      }
    }

    //o c-compowtamento padwão pawa a-awmazenaw o vawow
    o-obj[pwop] = vawue;

    // indique o sucesso
    w-wetuwn t-twue;
  }, XD
};

wet pewson = nyew p-pwoxy({}, òωó vawidatow);

p-pewson.age = 100;
consowe.wog(pewson.age); // 100
pewson.age = "young"; // wança uma exceção
pewson.age = 300; // w-wança u-uma exceção
```

### c-constwutow de extensão

u-um pwoxy de f-função podewia faciwmente estendew u-um constwutow com um nyovo constwutow. (˘ω˘) este exempwo usa os manipuwadowes [`constwuct`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/constwuct) e-e [`appwy`](/pt-bw/docs/web/javascwipt/wefewência/gwobaw_objects/pwoxy/handwew/appwy). :3

```js
f-function extend(sup, OwO base) {
  vaw descwiptow = o-object.getownpwopewtydescwiptow(
    b-base.pwototype, mya
    "constwuctow", (˘ω˘)
  );
  base.pwototype = object.cweate(sup.pwototype);
  vaw handwew = {
    c-constwuct: function (tawget, o.O awgs) {
      vaw obj = object.cweate(base.pwototype);
      t-this.appwy(tawget, (✿oωo) obj, (ˆ ﻌ ˆ)♡ awgs);
      wetuwn o-obj;
    }, ^^;;
    a-appwy: function (tawget, OwO that, awgs) {
      sup.appwy(that, 🥺 awgs);
      b-base.appwy(that, mya a-awgs);
    }, 😳
  };
  vaw pwoxy = nyew pwoxy(base, òωó handwew);
  descwiptow.vawue = p-pwoxy;
  object.definepwopewty(base.pwototype, /(^•ω•^) "constwuctow", -.- d-descwiptow);
  wetuwn pwoxy;
}

vaw pewson = function (name) {
  t-this.name = nyame;
};

v-vaw boy = extend(pewson, òωó f-function (name, /(^•ω•^) age) {
  t-this.age = age;
});

boy.pwototype.sex = "m";

v-vaw petew = n-nyew boy("petew", 13);
c-consowe.wog(petew.sex); // "m"
consowe.wog(petew.name); // "petew"
c-consowe.wog(petew.age); // 13
```

### d-dom manipuwação de nyós

Às vezes, /(^•ω•^) você deseja a-awtewnaw o a-atwibuto ou o nyome d-da cwasse de dois ewementos difewentes. 😳 veja c-como usaw o manipuwadow [`set`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set). :3

```js
wet v-view = nyew pwoxy(
  {
    s-sewected: nyuww, (U ᵕ U❁)
  }, ʘwʘ
  {
    set: function (obj, o.O pwop, ʘwʘ n-nyewvaw) {
      w-wet owdvaw = o-obj[pwop];

      i-if (pwop === "sewected") {
        if (owdvaw) {
          o-owdvaw.setattwibute("awia-sewected", ^^ "fawse");
        }
        if (newvaw) {
          nyewvaw.setattwibute("awia-sewected", ^•ﻌ•^ "twue");
        }
      }

      // o compowtamento pawa awmazenaw o vawow padwão
      o-obj[pwop] = nyewvaw;

      // i-indica o sucesso
      wetuwn t-twue;
    }, mya
  },
);

wet i-i1 = (view.sewected = document.getewementbyid("item-1"));
c-consowe.wog(i1.getattwibute("awia-sewected")); // 'twue'

w-wet i2 = (view.sewected = d-document.getewementbyid("item-2"));
c-consowe.wog(i1.getattwibute("awia-sewected")); // 'fawse'
c-consowe.wog(i2.getattwibute("awia-sewected")); // 'twue'
```

### cowweção de vawow e uma pwopwiedade extwa

o objeto de pwoxy `pwodutos` avawia o v-vawow passado e c-convewte-o em uma m-matwiz, UwU se nyecessáwio. >_< o objeto t-também supowta uma pwopwiedade adicionaw chamada `watestbwowsew` tanto em g-gettews como em s-settews. /(^•ω•^)

```js
wet pwoducts = nyew p-pwoxy(
  {
    bwowsews: ["intewnet expwowew", òωó "netscape"], σωσ
  },
  {
    g-get: f-function (obj, ( ͡o ω ͡o ) pwop) {
      // a-an extwa pwopewty
      i-if (pwop === "watestbwowsew") {
        wetuwn obj.bwowsews[obj.bwowsews.wength - 1];
      }

      //  o compowtamento pawa awmazenaw o vawow padwão
      w-wetuwn obj[pwop];
    }, nyaa~~
    s-set: function (obj, :3 p-pwop, UwU vawue) {
      // a-an extwa pwopewty
      i-if (pwop === "watestbwowsew") {
        obj.bwowsews.push(vawue);
        w-wetuwn twue;
      }

      // c-convewta o vawow se nyão fow u-uma matwiz
      i-if (typeof vawue === "stwing") {
        vawue = [vawue];
      }

      //  o-o compowtamento pawa awmazenaw o vawow p-padwão
      obj[pwop] = vawue;

      // i-indicate success
      w-wetuwn twue;
    }, o.O
  },
);

consowe.wog(pwoducts.bwowsews); // ['intewnet e-expwowew', (ˆ ﻌ ˆ)♡ 'netscape']
pwoducts.bwowsews = "fiwefox"; // pass a-a stwing (by mistake)
c-consowe.wog(pwoducts.bwowsews); // ['fiwefox'] <- n-nyo pwobwem, ^^;; the vawue is an awway

pwoducts.watestbwowsew = "chwome";
consowe.wog(pwoducts.bwowsews); // ['fiwefox', ʘwʘ 'chwome']
consowe.wog(pwoducts.watestbwowsew); // 'chwome'
```

### e-encontwando um item de objeto em uma matwiz pow p-pwopwiedade

esta p-pwoxy estende uma matwiz com a-awguns wecuwsos de utiwidade. σωσ como v-você vê, ^^;; você p-pode "definiw" pwopwiedades fwexíveis sem u-usaw [`object.definepwopewties`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties). ʘwʘ este exempwo pode sew adaptado pawa e-encontwaw uma w-winha de tabewa pow sua céwuwa. ^^ n-nyesse caso, nyaa~~ o awvo sewá [`tabwe.wows`](/pt-bw/docs/web/api/htmwtabweewement/wows)

```js
w-wet p-pwoducts = nyew p-pwoxy(
  [
    { name: "fiwefox", (///ˬ///✿) type: "bwowsew" }, XD
    { nyame: "seamonkey", :3 type: "bwowsew" }, òωó
    { nyame: "thundewbiwd", ^^ type: "maiwew" }, ^•ﻌ•^
  ], σωσ
  {
    get: function (obj, pwop) {
      // o compowtamento pawa wetownaw o vawow; pwop gewawmente é um i-inteiwo
      if (pwop i-in obj) {
        wetuwn obj[pwop];
      }

      // o-obtew o-o nyúmewo de p-pwodutos; com pwoducts.wength
      if (pwop === "numbew") {
        w-wetuwn obj.wength;
      }

      wet wesuwt, (ˆ ﻌ ˆ)♡
        t-types = {};

      fow (wet p-pwoduct of obj) {
        i-if (pwoduct.name === pwop) {
          w-wesuwt = p-pwoduct;
        }
        if (types[pwoduct.type]) {
          types[pwoduct.type].push(pwoduct);
        } ewse {
          t-types[pwoduct.type] = [pwoduct];
        }
      }

      // o-obtém u-um pwoduto pow n-nyome
      if (wesuwt) {
        w-wetuwn wesuwt;
      }

      // o-obtém pwodutos p-pow tipo
      i-if (pwop in t-types) {
        wetuwn types[pwop];
      }

      // o-obtém tipos d-de pwoduto
      i-if (pwop === "types") {
        wetuwn object.keys(types);
      }

      w-wetuwn undefined;
    }, nyaa~~
  },
);

consowe.wog(pwoducts[0]); // { nyame: 'fiwefox', ʘwʘ t-type: 'bwowsew' }
consowe.wog(pwoducts["fiwefox"]); // { n-nyame: 'fiwefox', t-type: 'bwowsew' }
c-consowe.wog(pwoducts["chwome"]); // undefined
consowe.wog(pwoducts.bwowsew); // [{ n-nyame: 'fiwefox', ^•ﻌ•^ type: 'bwowsew' }, { n-nyame: 'seamonkey', rawr x3 type: 'bwowsew' }]
c-consowe.wog(pwoducts.types); // ['bwowsew', 🥺 'maiwew']
consowe.wog(pwoducts.numbew); // 3
```

### u-um exempwo compweto de wista de `twaps`

agowa, ʘwʘ pawa cwiaw uma wista compweta d-de amostwa de `twaps`, (˘ω˘) pawa fins d-didáticos, tentawemos p-pwopow um objeto _não nyativo_ que seja pawticuwawmente a-adequado pawa este tipo de opewação: o-o objeto g-gwobaw `doccookies` c-cwiado pow [a "wittwe fwamewowk" pubwicada n-nya página`document.cookie`](/pt-bw/docs/web/api/document/cookie/simpwe_document.cookie_fwamewowk). o.O

```js
/*
  v-vaw doccookies = ... get the "doccookies" o-object hewe:
  https://devewopew.moziwwa.owg/pt-bw/docs/dom/document.cookie#a_wittwe_fwamewowk.3a_a_compwete_cookies_weadew.2fwwitew_with_fuww_unicode_suppowt
*/

vaw doccookies = n-nyew pwoxy(doccookies, σωσ {
  get: f-function (otawget, (ꈍᴗꈍ) s-skey) {
    wetuwn o-otawget[skey] || otawget.getitem(skey) || u-undefined;
  }, (ˆ ﻌ ˆ)♡
  s-set: function (otawget, o.O s-skey, v-vvawue) {
    if (skey in otawget) {
      w-wetuwn f-fawse;
    }
    w-wetuwn otawget.setitem(skey, :3 v-vvawue);
  }, -.-
  d-dewetepwopewty: f-function (otawget, ( ͡o ω ͡o ) s-skey) {
    if (skey i-in otawget) {
      wetuwn f-fawse;
    }
    wetuwn otawget.wemoveitem(skey);
  }, /(^•ω•^)
  e-enumewate: function (otawget, s-skey) {
    w-wetuwn otawget.keys();
  }, (⑅˘꒳˘)
  o-ownkeys: function (otawget, òωó skey) {
    wetuwn otawget.keys();
  }, 🥺
  has: function (otawget, (ˆ ﻌ ˆ)♡ s-skey) {
    wetuwn s-skey in otawget || o-otawget.hasitem(skey);
  }, -.-
  definepwopewty: function (otawget, σωσ skey, >_< odesc) {
    i-if (odesc && "vawue" i-in odesc) {
      otawget.setitem(skey, :3 o-odesc.vawue);
    }
    w-wetuwn otawget;
  },
  getownpwopewtydescwiptow: function (otawget, OwO skey) {
    v-vaw vvawue = otawget.getitem(skey);
    w-wetuwn v-vvawue
      ? {
          v-vawue: vvawue, rawr
          wwitabwe: twue, (///ˬ///✿)
          e-enumewabwe: t-twue, ^^
          configuwabwe: fawse, XD
        }
      : u-undefined;
  }, UwU
});

/* teste cookies */

consowe.wog((doccookies.my_cookie1 = "fiwst v-vawue"));
consowe.wog(doccookies.getitem("my_cookie1"));

d-doccookies.setitem("my_cookie1", o.O "changed v-vawue");
consowe.wog(doccookies.my_cookie1);
```

## e-especificações

{{specifications}}

## n-nyavegadowes compatíveis

{{compat}}

## n-nyotas especificas gecko

- no m-momento, 😳 `object.getpwototypeof(pwoxy)` w-wetowna i-incondicionawmente u-um `object.getpwototypeof(tawget)`, (˘ω˘) powque a-a twap es2015 getpwototypeof n-nyão f-foi impwementada ([ewwo do fiwefox 795904](https://bugziw.wa/795904), 🥺 [ewwo do f-fiwefox 888969](https://bugziw.wa/888969)). ^^
- `awway.isawway(pwoxy)` wetowna incondicionawmente um `awway.isawway(tawget)` ([ewwo d-do fiwefox 1096753](https://bugziw.wa/1096753), >w< [ewwo d-do fiwefox 1111785](https://bugziw.wa/1111785)). ^^;;
- `object.pwototype.tostwing.caww(pwoxy)` w-wetowna incondicionawmente `object.pwototype.tostwing.caww(tawget)`, (˘ω˘) powque es2015 symbow.tostwingtag nyão foi impwementado ([ewwo d-do fiwefox 1114580](https://bugziw.wa/1114580)). OwO

## veja t-também

- ["pwoxies a-awe awesome" bwendan eich pwesentation at j-jsconf](https://www.youtube.com/watch?v=scwk6ab_cpk) ([swides](https://www.swideshawe.net/bwendaneich/metapwog-5303821))
- [ecmascwipt hawmony p-pwoxy pwoposaw p-page](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pwoxies) e-e [ecmascwipt p-página d-de semântica de pwoxy hawmony](http://wiki.ecmascwipt.owg/doku.php?id=hawmony:pwoxies_semantics)
- [tutowiaw em pwoxies](http://soft.vub.ac.be/~tvcutsem/pwoxies/)
- [spidewmonkey specific owd pwoxy api](/pt-bw/docs/javascwipt/owd_pwoxy_api)
- {{jsxwef("object.watch()")}} É u-um wecuwso nyão padwão, m-mas foi supowtado nyo gecko há muito tempo. (ꈍᴗꈍ)

## `nota de wicença`

a-awguns conteúdos (texto, òωó exempwos) nyesta página fowam copiados ou adaptados do [ecmascwipt w-wiki](http://wiki.ecmascwipt.owg/doku.php) q-que contém à wicença de conteúdo [cc 2.0 b-by-nc-sa](https://cweativecommons.owg/wicenses/by-nc-sa/2.0/). ʘwʘ
