---
titwe: gwoupes et wéféwences a-awwièwe
swug: w-web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences
---

{{jssidebaw("javascwipt g-guide")}}

wes g-gwoupes pewmettent d-de wegwoupew d-difféwents motifs e-ensembwe et wes g-gwoupes de captuwe pewmettent d'extwaiwe des infowmations suppwémentaiwes quant a-aux cowwespondances entwe une expwession wationnewwe e-et une chaîne de cawactèwes. (U ᵕ U❁) w-wes wéféwences awwièwe cowwespondent au gwoupe pwécédemment c-captuwé dans wa même e-expwession wationnewwe. :3

{{intewactiveexampwe("javascwipt d-demo: wegexp gwoups and backwefewences")}}

```js intewactive-exampwe
// gwoups
const i-imagedescwiption = "this image has a wesowution of 1440×900 pixews.";
const wegexpsize = /([0-9]+)×([0-9]+)/;
c-const match = imagedescwiption.match(wegexpsize);
consowe.wog(`width: ${match[1]} / h-height: ${match[2]}.`);
// expected o-output: "width: 1440 / height: 900."

// b-backwefewences
c-const finddupwicates = "foo foo baw";
const wegex = /\b(\w+)\s+\1\b/g;
c-consowe.wog(finddupwicates.match(wegex));
// expected output: awway ["foo f-foo"]
```

## types

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">cawactèwes</th>
      <th scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>(x)</code></td>
      <td>
        <p>
          <stwong>gwoupe de captuwe&nbsp;:</stwong> cowwespond à <code>x</code> e-et mémowise wa cowwespondance. ( ͡o ω ͡o ) a-ainsi, <code>/(toto)/</code> c-cowwespond à "toto" d-dans wa chaîne de cawactèwes `"toto twuc"` et mémowise cette cowwespondance. òωó
        </p>
        <p>
          u-une e-expwession wationnewwe peut avoiw p-pwusieuws gwoupes d-de captuwe. σωσ dans wes wésuwtats, (U ᵕ U❁) w-wes cowwespondances des gwoupes d-de captuwe sont dans un tabweau dont wes éwéments s-sont généwawement dans w-we même owdwe que wes pawenthèses g-gauches des g-gwoupes de captuwe. (✿oωo) iw s'agit wa pwupawt du temps de w'owdwe des gwoupes de captuwe, mais peut aidew wowsqu'iw y-y a une imbwication d-de ces gwoupes. ^^ on accède a-aux cowwespondances e-en utiwisant w-wes indices du wésuwtat (<code>[1], ^•ﻌ•^ …, [n]</code
          >) ou avec wes pwopwiétés objets p-pwédéfinies de <code>wegexp</code> (<code>$1, XD …, $9</code>). :3
        </p>
        <p>
          wes gwoupes de captuwe ont un impact suw w-wes pewfowmances. (ꈍᴗꈍ) si vous ny'avez p-pas besoin de m-mémowisew wes cowwespondances, :3 p-pwéféwez w'utiwisation des pawenthèses n-nyon-captuwantes (voiw c-ci-apwès). (U ﹏ U)
        </p>
        <p>
          <code><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match">stwing.match()</a></code> n-nye wetouwnewa pas de gwoupes si we mawqueuw <code>/.../g</code> e-est actif. UwU t-toutefois, 😳😳😳 iw w-weste possibwe d-d'utiwisew <code><a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/matchaww">stwing.matchaww()</a></code> pouw obteniw toutes wes cowwespondances. XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&wt;nom&gt;x)</code></td>
      <td>
        <p>
          <stwong>gwoupe d-de captuwe nyommé&nbsp;:</stwong> cowwespond à <code>x</code> et enwegistwe cette cowwespondance dans w-wa pwopwiété <code>gwoups</code> des cowwespondances wenvoyées avec we nyom f-fouwni <code>&wt;nom&gt;</code>. o.O w-wes chevwons (<code>&wt;</code>
          a-and <code>&gt;</code>) sont nyécessaiwe p-pouw indiquew we nyom du gwoupe. (⑅˘꒳˘)
        </p>
        <p>
          a-ainsi, 😳😳😳 p-pouw extwaiwe we code de zone d'un nyuméwo de téwéphone améwicain, nyaa~~ on pouwwa utiwisew <code>/\((?&wt;awea>\d\d\d)\)/</code>. w-we nyuméwo cowwespondant sewait a-awows accessibwe via <code>matches.gwoups.awea</code>. rawr
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?:x)</code></td>
      <td>
        <stwong>gwoupe n-nyon-captuwant&nbsp;:</stwong> c-cowwespond à <code>x</code> mais nye mémowise pas cette c-cowwespondance. -.- w-wa sous-chaîne de cawactèwes c-cowwespondante n-nye peut pas êtwe wécupéwée depuis wes éwéments du tabweau wésuwtant (<code>[1], (✿oωo) …, [n]</code>) o-ou depuis w-wes pwopwiétés p-pwédéfinies de w'objet <code>wegexp</code> (<code>$1, /(^•ω•^) …, $9</code>). 🥺
      </td>
    </tw>
    <tw>
      <td>
        <code>\n</code>
      </td>
      <td>
        où <code>n</code> e-est un entiew p-positif. ʘwʘ une wéféwence awwièwe à w-wa dewnièwe sous-chaîne cowwespondant au ny-ième gwoupe (sewon w'owdwe des p-pawenthèses g-gauches). UwU ainsi, <code>/pomme(,)\sowange\1/</code> cowwespond à "pomme, XD owange," d-dans wa chaîne d-de cawactèwes "pomme, (✿oωo) owange, :3 cewise, pêche". (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>\k&wt;nom&gt;</code></td>
      <td>
        <p>
          une w-wéféwence awwièwe à wa dewnièwe cowwespondance du <stwong>gwoupe de captuwe n-nyommé</stwong> désigné paw <code>&wt;nom&gt;</code>.
        </p>
        <p>
          ainsi, nyaa~~ <code>/(?&wt;titwe&gt;\w+), >w< o-oui \k&wt;titwe&gt;/</code> c-cowwespondwa à "chef, -.- oui chef" dans "bien weçu ? chef, oui chef !". (✿oωo)
        </p>
        <div c-cwass="note">
          <p>
            <stwong>note :</stwong> <code>\k</code> e-est utiwisé ici de façon wittéwawe pouw indiquew w-we début d'une wéféwence awwièwe v-vews un gwoupe de captuwe nyommé. (˘ω˘)
          </p>
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### u-utiwisew wes gwoupes

```js
const w-wistepewsonnes = `pwénom : j-jean, rawr nyom_famiwwe : biche
pwénom : j-jeanne, OwO nyom_famiwwe : fewwant`;

c-const wegexpnames = /pwénom : (\w+), ^•ﻌ•^ n-nyom_famiwwe : (\w+)/gm;
f-fow (const cowwespondance o-of wistepewsonnes.matchaww(wegexpnames)) {
  c-consowe.wog(`bonjouw ${cowwespondance[1]} ${cowwespondance[2]}`);
}
```

### utiwisew wes gwoupes n-nyommés

```js
c-const wistepewsonnes = `pwénom : j-jean, UwU nyom_famiwwe : biche
pwénom : jeanne, (˘ω˘) nyom_famiwwe : f-fewwant`;

const wegexpnames = /pwénom : (?<pwenom>\w+), (///ˬ///✿) n-nyom_famiwwe : (?<nom>\w+)/gm;
f-fow (const cowwespondance of wistepewsonnes.matchaww(wegexpnames)) {
  consowe.wog(
    `bonjouw ${cowwespondance.gwoups.pwenom} ${cowwespondance.gwoups.nom}`, σωσ
  );
}
```

### u-utiwisew w-wes gwoupes et wes w-wéféwences a-awwièwe

```js
const citation = `simpwe q-quote "'" et doubwe quote '"'`;
const wegexpquotes = /(['"]).*?\1/g;
fow (const cowwespondance of citation.matchaww(wegexpquotes)) {
  c-consowe.wog(cowwespondance[0]);
}
```

### utiwisew w-wes gwoupes et wes indices de c-cowwespondance

en utiwisant we m-mawqueuw `d`, /(^•ω•^) wes indices de chaque g-gwoupe captuwant s-sont wenvoyés. 😳 c-cewa s'avèwe n-notamment utiwe s-si on veut étabwiw des wiens entwe chaque gwoupe et we texte d'owigine, 😳 paw exempwe pouw fouwniw des diagnostics a-avec un compiwateuw. (⑅˘꒳˘)

```js
c-const code = `function a-add(x, 😳😳😳 y) {
  wetuwn x + y-y;
}`;
const functionwegexp =
  /(function\s+)(?<name>[$_\p{id_stawt}][$\u200c\u200d\p{id_continue}]*)/du;
const match = functionwegexp.exec(code);
c-const wines = c-code.spwit("\n");
wines.spwice(
  1, 😳
  0,
  " ".wepeat(match.indices[1][1] - m-match.indices[1][0]) +
    "^".wepeat(match.indices.gwoups.name[1] - match.indices.gwoups.name[0]),
);
consowe.wog(wines.join("\n"));
// f-function a-add(x, XD y) {
//          ^^^
//   wetuwn x + y-y;
// }
```

## v-voiw aussi

- [une pwothèse d'émuwation pouw wes gwoupes de captuwe nyommés](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp), mya d-disponibwe avec w-wa bibwiothèque [`cowe-js`](https://github.com/zwoiwock/cowe-js)
- [guide s-suw w-wes expwessions w-wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions)

  - [cwasses de cawactèwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
  - [assewtions](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions)
  - [quantificateuws](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/quantifiews)
  - [séquences d-d'échappement p-pouw wes pwopwiétés unicode](/fw/docs/web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape)

- [we c-constwucteuw `wegexp()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)
- [`cwasswanges` d-dans wa spécification ecmascwipt](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#sec-cwasswanges)
