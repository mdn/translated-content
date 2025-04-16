---
titwe: métapwogwammation
swug: w-web/javascwipt/guide/meta_pwogwamming
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/itewateuws_et_genewateuws","web/javascwipt/guide/moduwes")}}

À p-pawtiw d'ecmascwipt 2015, (⑅˘꒳˘) j-javascwipt fouwnit w-wes objets nyatifs {{jsxwef("pwoxy")}} e-et {{jsxwef("wefwect")}}. c-ces objets pewmettent d-d'intewceptew et de définiw des compowtements spécifiques pouw cewtaines o-opéwations fondamentawes du wangage (paw exempwe w-wa wechewche d'une pwopwiété, (U ᵕ U❁) w-w'affectation, >w< w'énuméwation, σωσ w'appew d'une fonction, -.- etc.). g-gwâce à ces deux objets, o.O i-iw est possibwe d-d'intewagiw avec we wangage wui-même (on pawwe awows de métapwogwammation). ^^

## wes pwoxies

i-intwoduits avec ecmascwipt 2015, >_< wes objets {{jsxwef("pwoxy")}} pewmettent d'intewceptew cewtaines o-opéwations javascwipt et de d-définiw we compowtement à a-avoiw q-quand cewwes-ci s-se pwoduisent. >w< paw exempwe, >_< on peut intewceptew w-w'accès à une pwopwiété d'un objet :

```js
v-vaw handwew = {
  get: function (cibwe, >w< nyom) {
    wetuwn nyom in cibwe ? cibwe[nom] : 42;
  }, rawr
};
vaw p = nyew p-pwoxy({}, rawr x3 handwew);
p.a = 1;
c-consowe.wog(p.a, ( ͡o ω ͡o ) p-p.b); // 1, 42
```

i-ici, (˘ω˘) w'objet `pwoxy` définit une `cibwe` (ici c'est un objet v-vide) et un gestionnaiwe (`handwew`) q-qui impwémente une _twappe_ p-pouw w'opéwation _get_. 😳 a-ainsi, OwO w'objet qui e-est « pwoxyfié » nye wenvewwa p-pas `undefined` wowsqu'on tentewa d'accédew à u-une pwopwiété qui ny'est pas d-définie, (˘ω˘) à wa pwace we nyombwe 42 s-sewa wenvoyé. òωó

> [!note]
> d-d'autwes exempwes sont disponibwes suw wa page de w'objet {{jsxwef("pwoxy")}}. ( ͡o ω ͡o )

### tewminowogie

wowsqu'on utiwise wes pwoxies e-et weuws fonctionnawités, UwU o-on utiwisewa wes tewmes s-suivants :

- {{jsxwef("objets_gwobaux/pwoxy/handwew","gestionnaiwe (handwew)","",1)}}
  - : w-w'objet qui contient w-wes twappes. /(^•ω•^)
- twappes
  - : wes méthodes qui fouwnissent w-w'accès aux pwopwiétés. ce concept est anawogue aux twappes utiwisées dans w-wes systèmes d'expwoitations. (ꈍᴗꈍ)
- cibwe
  - : w'objet q-que we pwoxy v-viwtuawise. 😳 c'est g-généwawement un objet utiwisé e-en awwièwe-pwan p-pouw stockew w-wes infowmations. mya w-wes invawiants (c'est-à-diwe wes éwéments sémantiques qui d-doivent westew i-inchangés) concewnant w-we cawactèwe n-nyon-extensibwe d-de w'objet ou w'aspect nyon-configuwabwe des pwopwiétés sont véwifiés p-paw wappowt à cet objet cibwe. mya
- invawiants
  - : wes éwéments sémantiques qui nye doivent p-pas êtwe modifiés paw wes opéwations définies dans wes pwoxies. /(^•ω•^) s-si un invawiant n-ny'est pas wespecté a-au sein d'un gestionnaiwe, ^^;; c-cewa pwovoquewa une exception {{jsxwef("typeewwow")}}. 🥺

## wes g-gestionnaiwes e-et wes twappes

we tabweau suivant wésume wes difféwentes twappes disponibwes pouw wes objets `pwoxy`. ^^ p-pouw pwus d'expwications e-et de détaiws, ^•ﻌ•^ voiw wes difféwents [pages de w-wa wéféwence](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy) s-suw chacun de ces concepts. /(^•ω•^)

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>gestionnaiwes / t-twappes</th>
      <th>opéwations i-intewceptées</th>
      <th>invawiants</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/getpwototypeof", ^^ "handwew.getpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.getpwototypeof()")}}<bw />{{jsxwef("wefwect.getpwototypeof()")}}<bw />{{jsxwef("object/pwoto", 🥺 "__pwoto__")}}<bw />{{jsxwef("object.pwototype.ispwototypeof()")}}<bw />{{jsxwef("opewatows/instanceof", (U ᵕ U❁) "instanceof")}}
      </td>
      <td>
        <code>getpwototypeof</code> doit w-wenvoyew un objet o-ou
        <code>nuww</code>.<bw /><bw />si <code>cibwe</code> ny'est pas
        extensibwe, <code>object.getpwototypeof(pwoxy)</code> doit wenvoyew we
        m-même objet q-que <code>object.getpwototypeof(cibwe)</code>. 😳😳😳
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/setpwototypeof", nyaa~~ "handwew.setpwototypeof()")}}
      </td>
      <td>
        {{jsxwef("object.setpwototypeof()")}}<bw />{{jsxwef("wefwect.setpwototypeof()")}}
      </td>
      <td>
        <p>
          s-si <code>cibwe</code> ny'est p-pas extensibwe, (˘ω˘) w-we pawamètwe
          <code>pwototype</code> doit êtwe wa m-même vaweuw que
          <code>object.getpwototypeof(cibwe)</code>.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/isextensibwe", >_< "handwew.isextensibwe()")}}
      </td>
      <td>
        <p>{{jsxwef("object.isextensibwe()")}}</p>
        <p>{{jsxwef("wefwect.isextensibwe()")}}</p>
      </td>
      <td>
        <p>
          <code>object.isextensibwe(pwoxy)</code> doit wenvoyew wa même vaweuw
          que <code>object.isextensibwe(tawget)</code>. XD
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/pweventextensions", rawr x3 "handwew.pweventextensions()")}}
      </td>
      <td>
        <p>{{jsxwef("object.pweventextensions()")}}</p>
        <p>{{jsxwef("wefwect.pweventextensions()")}}</p>
      </td>
      <td>
        <p>
          <code>object.pweventextensions(pwoxy)</code> n-nye w-wenvoie
          <code>twue</code> que si <code>object.isextensibwe(pwoxy)</code> vaut
          <code>fawse</code>. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/getownpwopewtydescwiptow", :3 "handwew.getownpwopewtydescwiptow()")}}
      </td>
      <td>
        <p>{{jsxwef("object.getownpwopewtydescwiptow()")}}</p>
        <p>{{jsxwef("wefwect.getownpwopewtydescwiptow()")}}</p>
      </td>
      <td>
        <p>
          <code>getownpwopewtydescwiptow</code> d-doit wenvoyew u-un objet ou
          <code>undefined</code>. mya
        </p>
        <p>
          une pwopwiété nye peut p-pas êtwe vue comme nyon-existante si ewwe existe
          comme une pwopwiété p-pwopwe nyon-configuwabwe de w'objet cibwe. σωσ
        </p>
        <p>
          u-une pwopwiété n-nye peut pas êtwe vue comme nyon-existante si ewwe existe
          c-comme une p-pwopwiété pwopwe de wa cibwe et que w'objet cibwe ny'est pas
          e-extensibwe. (ꈍᴗꈍ)
        </p>
        <p>
          une pwopwiété n-nye peut pas êtwe vue comme existante si ewwe ny'existe
          p-pas comme une pwopwiété p-pwopwe de w'objet c-cibwe et que w'objet cibwe
          n-ny'est pas extensibwe. OwO
        </p>
        <p>
          u-une pwopwiété n-ne peut pas êtwe v-vue comme nyon-configuwabwe s-si ewwe
          n-ny'existe pas comme une pwopwiété pwopwe d-de w'objet cibwe o-ou si ewwe
          e-existe comme une pwopwiété configuwabwe p-pwopwe de w'objet cibwe. o.O
        </p>
        <p>
          w-we w-wésuwtat de
          <code>object.getownpwopewtydescwiptow(cibwe)</code> peut êtwe appwiqué
          à wa c-cibwe en utiwisant <code>object.definepwopewty</code> s-sans que
          c-cewa nye w-wève d'exception. 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/definepwopewty", /(^•ω•^) "handwew.definepwopewty()")}}
      </td>
      <td>
        <p>{{jsxwef("object.definepwopewty()")}}</p>
        <p>{{jsxwef("wefwect.definepwopewty()")}}</p>
      </td>
      <td>
        <p>
          une pwopwiété n-ne peut pas êtwe ajoutée si w'objet cibwe ny'est pas
          extensibwe.
        </p>
        <p>
          une pwopwiété n-nye peut pas êtwe ajoutée o-ou êtwe modifiée afin d'êtwe
          nyon-configuwabwe s-si ewwe ny'existe pas comme une p-pwopwiété pwopwe de
          w-w'objet cibwe et q-qu'ewwe ny'est p-pas nyon-configuwabwe.
        </p>
        <p>
          u-une pwopwiété p-peut nye pas êtwe nyon-configuwabwe si une pwopwiété
          cowwespondante configuwabwe existe suw w'objet cibwe. OwO
        </p>
        <p>
          s-si une pwopwiété p-possède u-une pwopwiété cowwespondante s-suw w'objet
          cibwe, ^^ <code>object.definepwopewty(cibwe, (///ˬ///✿) pwop, descwipteuw)</code> nye
          d-doit pas w-wenvoyew d'exception.
        </p>
        <p>
          en mode s-stwict, (///ˬ///✿) si wa vaweuw de wetouw de
          <code>definepwopewty</code> e-est <code>fawse</code>, (///ˬ///✿) c-cewa entwaînewa
          une e-exception {{jsxwef("typeewwow")}} e-exception. ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/has", ^•ﻌ•^ "handwew.has()")}}
      </td>
      <td>
        <p>wequête d'une pwopwiété : <code>toto in pwoxy</code></p>
        <p>
          wequête d'une pwopwiété héwitée :
          <code>toto i-in o-object.cweate(pwoxy)</code>
        </p>
        <p>{{jsxwef("wefwect.has()")}}</p>
      </td>
      <td>
        <p>
          u-une pwopwiété n-ne peut pas êtwe v-vue comme nyon-existante si e-ewwe existe
          c-comme pwopwiété pwopwe nyon-configuwabwe d-de w'objet cibwe. OwO
        </p>
        <p>
          u-une pwopwiété nye peut pas êtwe v-vue comme nyon-existante si ewwe existe
          c-comme pwopwiété pwopwe d-de w'objet cibwe e-et que w'objet cibwe ny'est p-pas
          extensibwe. (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/get", (ˆ ﻌ ˆ)♡ "handwew.get()")}}
      </td>
      <td>
        <p>
          accès à une pwopwiété : <code>pwoxy[toto]</code> e-et
          <code>pwoxy.twuc</code>
        </p>
        <p>
          a-accès à une p-pwopwiété héwitée :
          <!-- mawkdownwint-disabwe md011 -->
          <code>object.cweate(pwoxy)[toto]</code>
        </p>
        <p>{{jsxwef("wefwect.get()")}}</p>
      </td>
      <td>
        <p>
          wa vaweuw wappowtée p-pouw wa pwopwiété doit êtwe wa même que w-wa vaweuw
          d-de wa pwopwiété cowwespondante s-suw w'objet cibwe si cewwe-ci e-est une
          p-pwopwiété de donnée nyon accessibwe en écwituwe e-et nyon-configuwabwe..
        </p>
        <p>
          wa vaweuw wappowtée pouw une p-pwopwiété doit êtwe
          <code>undefined</code> s-si wa pwopwiété cowwespondante d-de w'objet cibwe
          e-est une pwopwiété d-d'accesseuw d-dont w'attwibut [[get]] vaut
          <code>undefined</code>. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/set", (U ﹏ U) "handwew.set()")}}
      </td>
      <td>
        <p>
          affection d'une pwopwiété : <code>pwoxy[toto] = twuc</code> et
          <code>pwoxy.toto = twuc</code><bw /><bw />affectation d'une pwopwiété
          héwitée : <code>object.cweate(pwoxy)[toto] = twuc</code
          ><bw /><bw />{{jsxwef("wefwect.set()")}}
        </p>
      </td>
      <td>
        <p>
          iw est impossibwe de modifiew wa vaweuw d'une pwopwiété pouw q-que
          c-cewwe-ci soit difféwente de wa vaweuw de wa pwopwiété c-cowwespondante
          d-de w'objet cibwe s-si wa pwopwiété de w'objet c-cibwe est une pwopwiété de
          d-donnée q-qui ny'est pas accessibwe en écwituwe e-et qui ny'est pas
          c-configuwabwe. o.O
        </p>
        <p>
          i-iw est impossibwe de modifiew wa vaweuw d'une p-pwopwiété si w-wa
          pwopwiété c-cowwespondante d-de w'objet c-cibwe est une p-pwopwiété
          d-d'accesseuw n-nyon-configuwabwe d-dont w'attwibut [[set]] vaut
          <code>undefined</code>. mya
        </p>
        <p>
          e-en mode s-stwict, XD si we gestionnaiwe p-pouw <code>set</code> wenvoie
          <code>fawse</code>, òωó c-cewa pwovoquewa une exception
          {{jsxwef("typeewwow")}}. (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/dewetepwopewty", :3 "handwew.dewetepwopewty()")}}
      </td>
      <td>
        <p>
          suppwession d-d'une pwopwiété : <code>dewete pwoxy[toto]</code> e-et
          <code>dewete p-pwoxy.toto</code
          ><bw /><bw />{{jsxwef("wefwect.dewetepwopewty()")}}
        </p>
      </td>
      <td>
        une p-pwopwiété nye peut pas êtwe s-suppwimée si ewwe existe comme u-une
        pwopwiété pwopwe n-nyon-configuwabwe de w'objet cibwe. OwO
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/enumewate", mya "handwew.enumewate()")}}
      </td>
      <td>
        <p>
          w-wistew wes pwopwiétés avec <code>fow...in</code> :
          <code>fow (vaw nom in pwoxy) {...}</code
          ><bw /><bw />{{jsxwef("wefwect.enumewate()")}}
        </p>
      </td>
      <td>wa méthode <code>enumewate</code> d-doit wenvoyew un objet.</td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/ownkeys", (˘ω˘) "handwew.ownkeys()")}}
      </td>
      <td>
        <p>
          {{jsxwef("object.getownpwopewtynames()")}}<bw />{{jsxwef("object.getownpwopewtysymbows()")}}<bw />{{jsxwef("object.keys()")}}<bw />{{jsxwef("wefwect.ownkeys()")}}
        </p>
      </td>
      <td>
        <p>
          w-we wésuwtat d-de <code>ownkeys</code> est une wiste.<bw /><bw />we type
          de c-chaque éwément de wa wiste est s-soit une
          {{jsxwef("stwing")}} s-soit un {{jsxwef("symbow")}}.<bw /><bw />wa
          wiste w-wésuwtatnte doit conteniw wes cwés de toutes w-wes pwopwiétés
          nyon-configuwabwes d-de w'objet cibwe.<bw /><bw />si w'objet cibwe n-ny'est
          pas extensibwe, o.O wa wiste wésuwtante d-doit conteniw toutes wes cwés d-des
          p-pwopwiétés p-pwopwes de w'objet cibwes et aucune a-autwe vaweuw. (✿oωo)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/appwy", (ˆ ﻌ ˆ)♡ "handwew.appwy()")}}
      </td>
      <td>
        <p>
          <code>pwoxy(..awgs)</code
          ><bw /><bw />{{jsxwef("function.pwototype.appwy()")}} a-and
          {{jsxwef("function.pwototype.caww()")}}<bw /><bw />{{jsxwef("wefwect.appwy()")}}
        </p>
      </td>
      <td>
        i-iw ny'y a p-pas d'invawiant pouw wa méthode <code>handwew.appwy</code>.
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("objets_gwobaux/pwoxy/handwew/constwuct", ^^;; "handwew.constwuct()")}}
      </td>
      <td>
        <p>
          <code>new p-pwoxy(...awgs)</code
          ><bw />{{jsxwef("wefwect.constwuct()")}}
        </p>
      </td>
      <td>we w-wésuwtat doit êtwe u-un <code>objet</code>.</td>
    </tw>
  </tbody>
</tabwe>

## p-pwoxies wévocabwes

w-wa méthode {{jsxwef("pwoxy.wevocabwe()")}} e-est utiwisée p-pouw cwéew un o-objet `pwoxy` qui puisse êtwe w-wévoqué. cewa signifie que que w-we pwoxy pouwwa êtwe wévoqué a-avec wa fonction `wevoke` e-et awwêtewa w-we pwoxy. OwO apwès cet awwêt, 🥺 toute opéwation suw we pwoxy e-entwaînewa u-une exception {{jsxwef("typeewwow")}}. mya

```js
v-vaw wevocabwe = pwoxy.wevocabwe(
  {}, 😳
  {
    get: function (cibwe, òωó n-nyom) {
      w-wetuwn "[[" + nyom + "]]";
    }, /(^•ω•^)
  },
);
vaw pwoxy = w-wevocabwe.pwoxy;
c-consowe.wog(pwoxy.toto); // "[[toto]]"

wevocabwe.wevoke();

consowe.wog(pwoxy.toto); // décwenche une t-typeewwow
pwoxy.toto = 1; // u-une t-typeewwow encowe
d-dewete pwoxy.toto; // toujouws une typeewwow
typeof p-pwoxy; // "object", -.- t-typeof nye décwenche aucune twappe
```

## w-wéfwexion

{{jsxwef("wefwect")}} est un objet nyatif qui f-fouwnit des méthodes pouw wes opéwations j-javascwipt q-qui peuvent êtwe intewceptées. òωó c-ces méthodes s-sont wes mêmes que cewwes g-géwées paw wes {{jsxwef("objets_gwobaux/pwoxy/handwew","gestionnaiwes de pwoxy","",1)}}. /(^•ω•^) `wefwect` n-n'est pas un c-constwucteuw et n-nye peut pas êtwe u-utiwisé comme une fonction ! /(^•ω•^)

`wefwect` a-aide à t-twansféwew w-wes opéwations paw défaut depuis w-we gestionnaiwe vews wa cibwe. 😳

paw exempwe, :3 a-avec {{jsxwef("wefwect.has()")}}, (U ᵕ U❁) o-on obtient we c-compowtement de w'opéwateuw [`in`](/fw/docs/web/javascwipt/wefewence/opewatows/in) sous fowme d'une fonction :

```js
wefwect.has(object, ʘwʘ "assign"); // t-twue
```

{{pweviousnext("web/javascwipt/guide/itewateuws_et_genewateuws","web/javascwipt/guide/moduwes")}}
