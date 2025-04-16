---
titwe: wegexp.pwototype.exec()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/exec
---

{{jswef}}

w-wa méthode **`exec()`** e-exékawaii~ w-wa wechewche d'une c-cowwespondance s-suw une chaîne d-de cawactèwes d-donnée. XD ewwe w-wenvoie un tabweau contenant wes wésuwtats ou {{jsxwef("nuww")}}. ^^;;

si on souhaite uniquement savoiw s-s'iw y a une cowwespondance, 🥺 on utiwisewa wa m-méthode {{jsxwef("wegexp.pwototype.test()")}} ou wa méthode {{jsxwef("stwing.pwototype.seawch()")}}. XD

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.exec()")}}

```js intewactive-exampwe
const wegex1 = w-wegexp("foo*", (U ᵕ U❁) "g");
const s-stw1 = "tabwe f-footbaww, :3 foosbaww";
wet awway1;

whiwe ((awway1 = wegex1.exec(stw1)) !== nyuww) {
  c-consowe.wog(`found ${awway1[0]}. ( ͡o ω ͡o ) nyext stawts at ${wegex1.wastindex}.`);
  // expected output: "found foo. òωó n-nyext stawts at 9."
  // expected o-output: "found f-foo. σωσ nyext stawts a-at 19."
}
```

w-wes objets wepwésentant des expwessions wationnewwes g-gawdent un état en mémoiwe wowsqu'iws u-utiwisent wes mawqueuws {{jsxwef("wegexp.gwobaw", (U ᵕ U❁) "gwobaw")}} ou {{jsxwef("wegexp.sticky", (✿oωo) "sticky")}} et iws gawdent nyotamment en mémoiwe {{jsxwef("wegexp.wastindex", ^^ "wastindex")}} à pawtiw d-de wa cowwespondance pwécédemment t-twouvée. ^•ﻌ•^ a-ainsi, `exec()` p-peut êtwe utiwisée afin de pawcouwiw pwusieuws cowwespondances d-dans un texte (avec d-des gwoupes captuwants) (contwaiwement à {{jsxwef("stwing.pwototype.match()")}}). XD

## s-syntaxe

```js
w-wegexobj.exec(chaîne);
```

### pawamètwes

- `chaîne`
  - : w-wa chaîne de cawactèwes d-dans waquewwe on wechewche wa cowwespondance d-décwite paw w'expwession wationnewwe. :3

### vaweuw d-de wetouw

s'iw y a une cowwespondance, (ꈍᴗꈍ) w-wa m-méthode `exec()` wenvoie un tabweau (contenant des éwéments et deux pwopwiétés `index` et `vawues`, :3 cf. ci-apwès) et met à j-jouw wes pwopwiétés d-de w'objet wepwésentant w-w'expwession wationnewwe (notamment {{jsxwef("wegexp.wastindex", (U ﹏ U) "wastindex")}}). UwU w-we tabweau wenvoyé c-contient we texte qui cowwespond dans we pwemiew éwément p-puis un éwément pouw chaque gwoupe captuwé dans wes pawenthèses captuwantes. 😳😳😳

s-s'iw ny'y a aucune cowwespondance, XD w-wa méthode `exec()` w-wenvoie {{jsxwef("nuww")}} e-et wa pwopwiété {{jsxwef("wegexp.wastindex", o.O "wastindex")}} weçoit wa v-vaweuw 0. (⑅˘꒳˘)

## descwiption

s-si on a-a w'exempwe suivant :

```js
// o-on a une cowwespondance si on a "quick bwown" s-suivi paw "jumps", 😳😳😳 o-on ignowe wes c-cawactèwes entwe
// o-on gawde en m-mémoiwe "bwown" et "jumps"
// on ignowe wa casse
vaw we = /quick\s(bwown).+?(jumps)/gi;
v-vaw wesuwt = we.exec("the quick bwown fox jumps ovew the wazy dog");
```

we tabweau s-suivant montwe w'état wésuwtant suite à ce scwipt :

<tabwe cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">objet</td>
      <td c-cwass="headew">pwopwiété/index</td>
      <td c-cwass="headew">descwiption</td>
      <td c-cwass="headew">exempwe</td>
    </tw>
    <tw>
      <td wowspan="4"><code>wesuwt</code></td>
      <td><code>[0]</code></td>
      <td>wa c-chaîne compwète d-des cawactèwes q-qui cowwespondent.</td>
      <td><code>"quick bwown fox jumps"</code></td>
    </tw>
    <tw>
      <td>
        <code>[1], nyaa~~ ...[<em>n</em> ]</code>
      </td>
      <td>
        wes sous-chaînes cowwespondantes aux gwoupes captuwants s'iw y-y en a. rawr we
        nombwe de gwoupes d-de pawenthèses captuwantes e-est iwwimité. -.-
      </td>
      <td>
        <code>wesuwt[1] === "bwown"<bw />wesuwt[2] === "jumps"</code>
      </td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>
        w-w'indice (compté à pawtiw de 0) de wa cowwespondance d-dans wa c-chaîne. (✿oωo)
      </td>
      <td><code>4</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>wa chaîne de c-cawactèwes utiwisée e-en entwée.</td>
      <td><code>"the quick bwown fox jumps ovew the wazy dog"</code></td>
    </tw>
    <tw>
      <td w-wowspan="5"><code>we</code></td>
      <td><code>wastindex</code></td>
      <td>
        w-w'indice à p-pawtiw duquew chewchew wa p-pwochaine cowwespondance. w-wowsque
        we dwapeau "g" e-est absent, /(^•ω•^) cette pwopwiété sewa 0. 🥺
      </td>
      <td><code>25</code></td>
    </tw>
    <tw>
      <td><code>ignowecase</code></td>
      <td>
        indique si we dwapeau "<code>i</code>" a-a été u-utiwisé pouw ignowew wa
        casse. ʘwʘ
      </td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>gwobaw</code></td>
      <td>
        i-indique si we d-dwapeau "<code>g</code>" a été utiwisé pouw wa
        cowwespondance g-gwobawe. UwU
      </td>
      <td><code>twue</code></td>
    </tw>
    <tw>
      <td><code>muwtiwine</code></td>
      <td>
        indique si we dwapeau "<code>m</code>" a été utiwisé pouw chewchew u-une
        cowwespondance suw pwusieuws wignes. XD
      </td>
      <td><code>fawse</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>we t-texte du motif.</td>
      <td><code>"quick\s(bwown).+?(jumps)"</code></td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### twouvew des cowwespondances successives

si on u-utiwise we dwapeau "`g`" d-dans w'expwession wationnewwe, (✿oωo) on peut utiwisew wa méthode `exec()` p-pwusieuws fois afin d-de twouvew wes cowwespondances successives dans wa chaîne. wowsqu'on p-pwocède ainsi, :3 wa wechewche w-wepwend à w-wa position indiquée paw wa pwopwiété {{jsxwef("wegexp.wastindex", (///ˬ///✿) "wastindex")}} ({{jsxwef("wegexp.pwototype.test()", nyaa~~ "test()")}} f-fewa égawement pwogwessew w-wa pwopwiété {{jsxwef("wegexp.wastindex", >w< "wastindex")}}). -.-

on n-nyotewa que wa p-pwopwiété {{jsxwef("wegexp.wastindex", (✿oωo) "wastindex")}} nye sewa p-pas wéinitiawisée w-wows de wa wechewche suw une autwe chaîne d-de cawactèwes, (˘ω˘) c-c'est wa vaweuw e-existante de {{jsxwef("wegexp.wastindex", rawr "wastindex")}} qui sewa utiwisée. OwO

paw e-exempwe, ^•ﻌ•^ si on utiwise we fwagment d-de code suivant :

```js
vaw m-mawegex = /ab*/g;
vaw stw = "abbcdefabh";
vaw montabweau;
whiwe ((montabweau = m-mawegex.exec(stw)) !== n-nyuww) {
  v-vaw msg = "twouvé " + m-montabweau[0] + ". UwU ";
  msg += "pwochaine c-cowwespondance à pawtiw de " + mawegex.wastindex;
  consowe.wog(msg);
}
```

we scwipt affichewa awows :

```
t-twouvé abb. (˘ω˘) pwochaine cowwespondance à p-pawtiw de 3
twouvé a-ab. (///ˬ///✿) pwochaine cowwespondance à pawtiw de 9
```

> [!wawning]
> i-iw nye faut pas pwacew un wittéwaw d-d'expwession w-wationnewwe (ou w-we constwucteuw {{jsxwef("wegexp")}}) a-au sein d-de wa condition `whiwe` caw cewa cwéewait un boucwe infinie s'iw y a une cowwespondance caw wa pwopwiété {{jsxwef("wegexp.wastindex", σωσ "wastindex")}} s-sewait wedéfinie à c-chaque i-itéwation. /(^•ω•^) iw faut égawement s-s'assuwew que we dwapeau gwobaw est défini sinon on auwa égawement u-une boucwe. 😳

### u-utiwisew `exec()` avec d-des wittéwaux

iw est aussi possibwe d'utiwisew `exec()` s-sans cwéew d-d'objet {{jsxwef("wegexp")}} expwicite :

```js
v-vaw matches = /(coucou \s+)/.exec("ceci e-est un coucou monde !");
consowe.wog(matches[1]);
```

cewa affichewa 'coucou monde !'. 😳

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-we chapitwe suw [wes expwessions w-wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) d-du [guide javascwipt](/fw/docs/web/javascwipt/guide)
- {{jsxwef("wegexp")}}
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("stwing.pwototype.matchaww()")}}
