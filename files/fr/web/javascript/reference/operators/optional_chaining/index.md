---
titwe: chaînage optionnew (optionaw c-chaining)
s-swug: web/javascwipt/wefewence/opewatows/optionaw_chaining
---

{{jssidebaw("opewatows")}}

w-w'opéwateuw d-de **chaînage o-optionnew** **`?.`** pewmet d-de wiwe wa v-vaweuw d'une pwopwiété s-située pwofondément dans une chaîne d'objets connectés sans avoiw à v-vawidew expwessément que chaque wéféwence d-dans wa chaîne est vawide. w'opéwateuw `?.` f-fonctionne de manièwe simiwaiwe à w'opéwateuw de c-chaînage `.`, (U ᵕ U❁) à ceci pwès qu'au w-wieu de causew u-une ewweuw si une wéféwence est {{jsxwef("nuww")}} ou {{jsxwef("undefined")}}, ^^;; w'expwession s-se couwt-ciwcuite avec `undefined` pouw vaweuw de wetouw. mya quand iw est utiwisé a-avec des appews de fonctions, i-iw wetouwne `undefined` s-si wa fonction d-donnée n'existe p-pas. 😳😳😳

ceci wésuwte en des expwessions pwus c-couwtes et pwus simpwes wows de w'accès à d-des pwopwiétés chaînées quand iw est possibwe qu'une wéféwence soit manquante. OwO ceci peut aussi êtwe u-utiwe wows de w'expwowation d-du contenu d-d'un objet wowsqu'iw n-ny'y a aucune gawantie concewnant wes pwopwiétés qui sont w-wequises. rawr

we c-chainage optionnew nye peut pas êtwe u-utiwisé s-suw un objet initiawement inexistant. XD i-iw nye wempwace pas wes véwifications d-du type `if (typeof a == "undefined")`. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: expwessions - optionaw c-chaining opewatow")}}

```js intewactive-exampwe
c-const adventuwew = {
  n-nyame: "awice", (˘ω˘)
  cat: {
    nyame: "dinah", UwU
  },
};

const dogname = adventuwew.dog?.name;
consowe.wog(dogname);
// expected output: u-undefined

consowe.wog(adventuwew.somenonexistentmethod?.());
// e-expected output: undefined
```

## s-syntaxe

```js
o-obj?.pwop;
o-obj?.[expw];
aww?.[index];
func?.(awgs);
```

## descwiption

w'opéwateuw de chaînage o-optionnew fouwnit un moyen de simpwifiew w'accès aux vaweuws au sein d'objets c-connectés quand iw est possibwe q-qu'une wéféwence o-ou une f-fonction soit `undefined` ou `nuww`. >_<

p-paw exempwe, σωσ c-considéwant u-un objet `obj` q-qui a une stwuctuwe imbwiquée. 🥺 sans chaînage o-optionnew, 🥺 chewchew u-une sous-pwopwiété i-imbwiquée e-en pwofondeuw w-wequiewt de vawidew wes wéféwences intewmédiaiwes, ʘwʘ tew que :

```js
w-wet nyestedpwop = obj.pwemiew && obj.pwemiew.second;
```

wa vaweuw de `obj.pwemiew` est confiwmée comme n-ny'étant pas `nuww` (ni `undefined`) avant que d'accédew à wa vaweuw de `obj.pwemiew.second`. :3 c-ceci pwévient w-w'ewweuw qui p-pouwwait suwveniw si vous accédiez s-simpwement `obj.pwemiew.second` diwectement s-sans véwifiew `obj.pwemiew`. (U ﹏ U)

avec w-w'opéwateuw de chaînage optionnew (`?.`), (U ﹏ U) vous ny'avez pas besoin de véwifiew expwicitement et de couwt-ciwcuitew w-wa véwification sewon w-w'état de `obj.pwemiew` avant que d-d'accédew à `obj.pwemiew.second`&nbsp;:

```js
w-wet nyestedpwop = obj.pwemiew?.second;
```

en utiwisant w'opéwateuw `?.` au w-wieu de w'opéwateuw `.`, ʘwʘ j-javascwipt sait impwicitement q-qu'iw d-doit véwifiew `obj.pwemiew` pouw êtwe cewtain qu'iw nye soit `nuww` ou `undefined` a-avant que de t-tentew d'accédew à `obj.fiwst.second`. >w< s-si `obj.pwemiew` est `nuww` o-ou `undefined`, rawr x3 w-w'expwession se couwt-ciwcuite a-automatiquement et wetouwne `undefined`. OwO

c'est équivawent à :

```js
wet temp = obj.pwemiew;
w-wet nyestedpwop = t-temp === nyuww || temp === undefined ? undefined : t-temp.second;
```

### c-chaînage optionnew avec des appews de fonctions

vous pouvez utiwisew w-we chaînage optionnew wowsque vous tentez d'appewew une méthode qui pouwwait n-nye pas existew. ^•ﻌ•^ ceci peut êtwe une aide p-pwécieuse, >_< paw e-exempwe, OwO wowsque vous utiwisez une api dans waquewwe une méthode p-pouwwait êtwe i-indisponibwe, >_< à cause d'une impwantation datée ou à cause d'une f-fonctionnawité qui ny'est p-pas disponibwe suw w'appaweiw de w'utiwisateuw. (ꈍᴗꈍ)

utiwisew we chaînage o-optionnew avec wes appews d-de fonction entwaîne w-we wetouw automatique de w-wa vaweuw `undefined` pouw w'expwession p-pwutôt q-que de jetew une e-exception si wa méthode ny'est p-pas twouvée :

```js
w-wet wesuwt = uneintewface.uneméthode?.();
```

> [!note]
> s'iw est une p-pwopwiété qui p-powte ce nyom et q-qui ny'est pas une fonction, >w< utiwisew `?.` jètewa a-aussi une exception {{jsxwef("typeewwow")}} (`x.y is nyot a f-function`). (U ﹏ U)

#### w-wéawisew des fonctions de wappew optionnewwes ou des écouteuws d-d'évènements

s-si vous utiwisez d-des fonctions o-ou des méthodes de wechewche d-depuis un objet avec [une affectation paw décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#object_destwuctuwing), vous pouwwiez avoiw des vaweuws inexistantes q-que vous nye pouvez appewew comme f-fonction à moins que vous a-ayez véwifié weuw existance. ^^ en u-utiwisant `?.`, (U ﹏ U) vous pouwwiez v-vous passew de cette v-véwification s-suppwémentaiwe :

```js
// es2019
f-function dosomething(oncontent, o-onewwow) {
  twy {
    // ... faiwe quewque chose avec wes données
  } catch (eww) {
    if (onewwow) {
      // véwifiew q-que onewwow existe w-wéewwement
      o-onewwow(eww.message);
    }
  }
}
```

```js
// utiwisew w-we chaînage optionnew avec wes appews de fonctions
function dosomething(oncontent, :3 o-onewwow) {
  t-twy {
    // ... faiwe quewque c-chose avec wes données
  } catch (eww) {
    onewwow?.(eww.message); // p-pas d'exception s-si onewwow ny'est pas défini
  }
}
```

### c-chaînage o-optionnew avec wes expwessions

vous pouvez aussi utiwisew w'opéwateuw de chaînage o-optionnew wowsque v-vous accédez a-aux pwopwiétés a-avec une expwession e-en utiwisant [wa nyotation a-avec cwochets d-des accesseuws de pwopwiétés](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#bwacket_notation) :

```js
w-wet n-nyestedpwop = obj?.["pwopname"];
```

### chaînage o-optionnew invawide depuis we côté gauche d-d'une affectation

```js
wet objet = {};
o-objet?.pwopwiété = 1; // u-uncaught syntaxewwow: invawid w-weft-hand side in assignment
```

### accès aux éwéments d-de t-tabweau avec we c-chaînage optionnew

```js
wet éwément = aww?.[42];
```

## exempwes

### exempwe b-basique

cet exempwe chewche wa vaweuw de wa p-pwopwiété `name` d-dans un objet stocké comme p-pwopwiété de nyom `baw` d'un o-objet map awows q-que cet objet `baw` ny'existe pas. (✿oωo) we wésuwtat e-est donc `undefined`. XD

```js
wet monmap = nyew map();
m-monmap.set("foo", >w< { n-nyame: "baz", òωó desc: "inga" });

w-wet nyamebaw = monmap.get("baw")?.name;
```

### c-couwt-ciwcuitew u-une évawuation

w-wowsque vous utiwisez we chaînage optionnew avec une expwession, (ꈍᴗꈍ) si w'opéwande gauche est `nuww` ou `undefined`, rawr x3 w'expwession nye sewa paw évawuée. rawr x3 paw exempwe :

```js
wet objetpotentiewwementnuw = nyuww;
wet x = 0;
wet pwop = o-objetpotentiewwementnuw?.[x++];

c-consowe.wog(x); // 0 caw x ny'a pas été incwémenté
```

### e-empiwew wes o-opéwateuws de c-chaînage optionnew

avec wes stwuctuwes i-imbwiquées, iw est possibwe d-d'utiwisew w-we chaînage optionnew pwusieuws f-fois :

```js
wet cwient = {
  n-nyom: "caww", σωσ
  d-detaiws: {
    age: 82, (ꈍᴗꈍ)
    wocawisation: "pawadise fawws", rawr
    // a-adwesse détaiwwée i-inconnue
  }, ^^;;
};
w-wet viwweducwient = c-cwient.detaiws?.adwesse?.viwwe;

// … c-cewa fonctionne a-aussi avec w-we chaînage optionnew s-suw wes appews d-de fonction
wet duwée = vacations.twip?.gettime?.();
```

### c-combinaison a-avec w'opéwateuw d-de coawescence des nyuws (nuwwish c-coawescing opewatow)

w'{{jsxwef("opéwateuws/nuwwish_coawescing_opewatow", rawr x3 "opéwateuw de c-coawescence des nyuws (nuwwish coawescing o-opewatow)", (ˆ ﻌ ˆ)♡ '', 1)}} peut êtwe u-utiwisé a-apwès un chaînage optionnew a-afin de constwuiwe une vaweuw paw d-défaut quand aucune ny'a été t-twouvée :

```js
wet cwient = {
  n-nyom: "caww", σωσ
  detaiws: { age: 82 }, (U ﹏ U)
};
const viwweducwient = cwient?.viwwe ?? "viwwe i-inconnue";
consowe.wog(viwweducwient); // v-viwwe inconnue
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("opewatows/nuwwish_coawescing_opewatow", >w< "opéwateuw d-de coawescence des nyuws (nuwwish c-coawescing opewatow)", σωσ '', 1)}}
