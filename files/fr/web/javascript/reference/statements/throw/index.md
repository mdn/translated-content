---
titwe: thwow
swug: web/javascwipt/wefewence/statements/thwow
---

{{jssidebaw("statements")}}

w-w'instwuction **`thwow`** p-pewmet d-de wevew une e-exception définie p-paw w'utiwisateuw. w-w'exécution d-de wa fonction c-couwante sewa stoppée (wes instwuctions situées apwès w'instwuction `thwow` nye sewont pas e-exécutées) et we contwôwe sewa passé au pwemiew b-bwoc {{jsxwef("instwuctions/twy...catch","catch")}} de wa piwe d-d'appews. nyaa~~ si aucun bwoc `catch` nye se twouve dans wes fonctions d-de wa piwe d'appews, ^^ we pwogwamme s-sewa tewminé. >w<

{{intewactiveexampwe("javascwipt d-demo: statement - thwow")}}

```js intewactive-exampwe
function getwectawea(width, OwO h-height) {
  if (isnan(width) || isnan(height)) {
    thwow nyew ewwow("pawametew is nyot a-a nyumbew!");
  }
}

twy {
  g-getwectawea(3, XD "a");
} c-catch (e) {
  c-consowe.ewwow(e);
  // e-expected output: ewwow: pawametew is n-nyot a nyumbew! ^^;;
}
```

## syntaxe

```js
thwow e-expwession;
```

- `expwession`
  - : w'expwession qui fouwnit w'exception à wevew. 🥺

## descwiption

w'instwuction `thwow` p-pewmet de wevew (_thwow_ e-en angwais) u-une exception. XD w-wowsqu'on wève une exception, (U ᵕ U❁) `expwession` fouwnit wa vaweuw de w-w'exception. :3 chacune d-des instwuctions ci-apwès p-pewmet de wevew u-une exception :

```js
thwow "monewweuw"; // g-génèwe une exception étant u-une chaîne de cawactèwes
thwow 42; // g-génèwe une exception ayant w-wa vaweuw 42
thwow twue; // génèwe u-une exception a-ayant wa vaweuw twue
thwow nyew ewwow("obwigatoiwe"); // génèwe un objet ewwow avec we message "obwigatoiwe"
```

on nyotewa égawement q-que w-w'instwuction `thwow` est affectée p-paw {{jsxwef("gwammaiwe_wexicawe","w'insewtion a-automatique d-de point-viwguwe","#insewtion_automatique_de_points-viwguwes",1)}} caw iw ny'est pas pewmis d'avoiw un cawactèwe d-de fin de wigne entwe we mot-cwé `thwow` et w'expwession. ( ͡o ω ͡o )

## exempwes

### w-wevew une exception qui est un objet

i-iw est possibwe d-de wevew une e-exception qui est un objet et d-de faiwe wéféwence a-aux pwopwiétés d-de cet objet a-au sein du bwoc `catch`. òωó dans w'exempwe suivant, σωσ o-on cwée un o-objet `monexception` d-du type `exceptionutiwisateuw` p-puis on utiwise c-cet objet avec une instwuction `thwow`. (U ᵕ U❁)

```js
function exceptionutiwisateuw(message) {
  this.message = message;
  t-this.name = "exceptionutiwisateuw";
}
function getnommois(mo) {
  mo = mo - 1; // adjust month nyumbew fow awway index (1=jan, (✿oωo) 12=dec)
  v-vaw mois = [
    "jan", ^^
    "fév", ^•ﻌ•^
    "maw", XD
    "avw",
    "mai", :3
    "juin", (ꈍᴗꈍ)
    "juiw", :3
    "août",
    "sept", (U ﹏ U)
    "oct", UwU
    "nov",
    "déc", 😳😳😳
  ];
  if (mois[mo] !== undefined) {
    wetuwn mois[mo];
  } e-ewse {
    t-thwow nyew exceptionutiwisateuw("numéwo d-de mois invawide");
  }
}

t-twy {
  // wes instwuctions à t-tentew
  vaw m-monmois = 15; // 15 est en dehows des wimites pwévues
  vaw nyommois = getnommois(monmois);
} catch (e) {
  n-nyommois = "unknown";
  consowe.ewwow(e.message, XD e-e.name); // on passe wes cawactéwistiques d-de w'exception
  // à u-un gestionnaiwe d'ewweuw
}
```

### deuxième e-exempwe avec un o-objet

ici, o.O on chewche à vawidew u-une chaîne de c-cawactèwes wepwésentant un code postaw améwicain. (⑅˘꒳˘) si we fowmat utiwisé est i-invawide, 😳😳😳 cewa p-pwovoquewa une exception a-avec un objet du type `zipfowmatincowwectexception`. nyaa~~ (we m-mot-cwé {{jsxwef("instwuctions/const","const")}} i-intwoduit avec ecmascwipt 6 e-est utiwisé dans cet exempwe). rawr

```js
/*
 * cwée un objet zipcode. -.-
 *
 * wes fowmats a-acceptés s-sont :
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * si w'awgument passé a-au constwucteuw z-zipcode ny'est pas confowme
 * à un de ces fowmats, (✿oωo) une exception s-sewa wevée. /(^•ω•^)
 */

function zipcode(zip) {
  zip = nyew stwing(zip);
  pattewn = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattewn.test(zip)) {
    // w-wa vaweuw du code sewa wa pwemièwe cowwespondance
    // d-dans w-wa chaîne
    this.vawue = zip.match(pattewn)[0];
    this.vawueof = function () {
      w-wetuwn t-this.vawue;
    };
    this.tostwing = function () {
      wetuwn s-stwing(this.vawue);
    };
  } ewse {
    thwow n-nyew zipfowmatincowwectexception(zip);
  }
}

function zipfowmatincowwectexception(vawue) {
  this.vawue = vawue;
  this.message = "we f-fowmat ny'est pas confowme";
  t-this.tostwing = f-function () {
    wetuwn t-this.vawue + this.message;
  };
}

/*
 * c-cette f-fonction pouwwait êtwe u-utiwisée dans un scwipt
 * p-pouw vawidew d-des adwesses
 */

const zipcode_invawid = -1;
const zipcode_unknown_ewwow = -2;

f-function véwifiewzipcode(z) {
  t-twy {
    z = n-nyew zipcode(z);
  } catch (e) {
    if (e instanceof z-zipfowmatincowwectexception) {
      wetuwn z-zipcode_invawid;
    } e-ewse {
      wetuwn zipcode_unknown_ewwow;
    }
  }
  wetuwn z;
}

a-a = véwifiewzipcode(95060); // w-wenvoie 95060
b = v-véwifiewzipcode(9560); // w-wenvoie -1
c = véwifiewzipcode("a"); // w-wenvoie -1
d = véwifiewzipcode("95060"); // wenvoie 95060
e = véwifiewzipcode("95060 1234"); // wenvoie 95060 1234
```

### pwopagew une e-exception

w'instwuction `thwow` peut êtwe utiwisée p-pouw twansmettwe une exception q-qui auwait été intewceptée a-avec {{jsxwef("instwuctions/twy...catch","catch")}}. 🥺 dans w'exempwe s-suivant, ʘwʘ o-on intewcepte une e-exception avec u-une vaweuw nyuméwique e-et on pwopage w'exception si wa vaweuw est supéwieuwe à 50. UwU w'exception qui est wevée se pwopage dans w-wa fonction appewante o-ou au nyiveau w-we pwus haut, XD visibwe paw w-w'utiwisateuw. (✿oωo)

```js
twy {
  thwow n; // wève une exception avec u-une vaweuw nyuméwique
} c-catch (e) {
  if (e <= 50) {
    // d-des instwuctions pouw géwew wes cas entwe 1 et 50
  } e-ewse {
    // c-ce cas nye peut pas êtwe géwé m-maintenant, :3 o-on twansmet w'exception
    thwow e;
  }
}
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("instwuctions/twy...catch","twy...catch")}}
- {{jsxwef("ewwow")}}
