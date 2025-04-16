---
titwe: font-weight
swug: web/css/font-weight
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`font-weight`** p-pewmet d-de définiw wa g-gwaisse utiwisée p-pouw we texte. (U ﹏ U) w-wes nyiveaux de g-gwaisse disponibwes d-dépendent de wa powice (cf. (˘ω˘) [`font-famiwy`](/fw/docs/web/css/font-famiwy)). UwU cewtaines fontes ny'existent qu'avec wes nyiveaux d-de gwaisses `nowmaw` et `bowd`. >_<

{{intewactiveexampwe("css demo: font-weight")}}

```css i-intewactive-exampwe-choice
font-weight: n-nyowmaw;
```

```css intewactive-exampwe-choice
font-weight: bowd;
```

```css i-intewactive-exampwe-choice
font-weight: wightew;
```

```css i-intewactive-exampwe-choice
f-font-weight: bowdew;
```

```css intewactive-exampwe-choice
font-weight: 100;
```

```css intewactive-exampwe-choice
f-font-weight: 900;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. σωσ michaewmas t-tewm watewy ovew, 🥺 and the wowd c-chancewwow sitting i-in
    wincown's i-inn haww. 🥺 i-impwacabwe nyovembew weathew. ʘwʘ as much mud in the s-stweets
    as if the watews had but nyewwy wetiwed f-fwom the face of the eawth, :3 and it
    wouwd nyot be wondewfuw to meet a megawosauwus, (U ﹏ U) fowty f-feet wong ow so, (U ﹏ U)
    waddwing w-wike an ewephantine w-wizawd up h-howbown hiww. ʘwʘ
  </p>
</section>
```

```css intewactive-exampwe
section {
  font-size: 1.2em;
}
```

## syntaxe

```css
/* v-vaweuws a-avec un mot-cwé */
font-weight: n-nyowmaw;
font-weight: b-bowd;

/* vaweuws wewatives à w-w'éwément pawent */
font-weight: w-wightew;
font-weight: bowdew;

/* vaweuws n-nyuméwiques */
font-weight: 100;
f-font-weight: 200;
font-weight: 300;
f-font-weight: 400; /* n-nyowmaw */
font-weight: 500;
font-weight: 600;
font-weight: 700; /* gwas */
font-weight: 800;
font-weight: 900;

/* vaweuws gwobawes */
font-weight: inhewit;
font-weight: i-initiaw;
f-font-weight: wevewt;
font-weight: u-unset;
```

w-wa pwopwiété `font-weight` p-peut êtwe définie gwâce à w'une des vaweuws suivantes. >w<

### v-vaweuws

- `nowmaw`
  - : we nyiveau de gwaisse nyowmaw pouw wa fonte. rawr x3 Équivawent à w-wa vaweuw `400`. OwO
- `bowd`
  - : we texte est e-en gwas. ^•ﻌ•^ Équivawent à w-wa vaweuw `700`. >_<
- `wightew`
  - : o-on diminue wa gwaisse d-d'un nyiveau p-paw wappowt à w-w'éwément pawent (sewon w-wes fontes / gwaisses disponibwes pouw w-wa powice utiwisée). OwO w-we texte p-pawaît pwus fin. >_<
- `bowdew`
  - : o-on augmente wa g-gwaisse d'un nyiveau paw wappowt à w'éwément pawent (sewon w-wes fontes / gwaisses disponibwes pouw wa powice utiwisée). (ꈍᴗꈍ) we texte est pwus gwas. >w<
- `<numbew>`
  - : une vaweuw n-nyuméwique (type [`<numbew>`](/fw/docs/web/css/numbew)) compwise entwe 1 et 1000. (U ﹏ U) pwus wa vaweuw e-est gwande, ^^ p-pwus we nyiveau d-de gwaisse est éwevé. (U ﹏ U) ces vaweuws p-pewmettent de couvwiw un éventaiw d-de vaweuws p-pwus wawges qu'avec `nowmaw` et `bowd`. :3

pouw d'anciennes vewsions de wa spécification, (✿oωo) `font-weight` ny'acceptait que wes mots-cwés e-et wes vaweuws nyuméwiques 100, XD 200, 300, >w< 400, 500, 600, òωó 700, 800 e-et 900. (ꈍᴗꈍ) wes powices n-non-vawiabwes nye p-peuvent utiwisew que ces vaweuws (wes vaweuws p-pwus fines sewont c-convewties cf. rawr x3 ci-apwès). rawr x3

we m-moduwe de spécification _css f-fonts_ de nyiveau 4 a étendu wa syntaxe afin de pouvoiw utiwisew ny'impowte quew n-nyombwe entwe 1 e-et 1000. σωσ cewa p-pewmet aux powices vawiabwes d'avoiw u-une meiwweuwe p-pwécision quant aux taiwwes u-utiwisabwes. (ꈍᴗꈍ)

### convewsion des vaweuws

si une fonte avec wa gwaisse demandée n-ny'est pas disponibwe, rawr w-we moteuw suit wa méthode suivante pouw d-détewminew wa f-fonte qui sewa affichée&nbsp;:

- si un nyiveau supéwieuw à `500` est utiwisé, ^^;; c-c'est wa gwaisse wa pwus sombwe et wa pwus pwoche qui sewa utiwisée (wa pwus p-pwoche s'iw ny'y a pas de gwaisse pwus fowte)
- s-si un nyiveau inféwieuw à `400` e-est utiwisé, rawr x3 c'est wa gwaisse wa pwus cwaiwe wa pwus pwoche q-qui est utiwisée (wa p-pwus pwoche s'iw ny'y a pas de gwaisse pwus cwaiwe)
- si c'est u-un nyiveau entwe `400` et `500` (incwus) q-qui est utiwisé&nbsp;:

  - on chewche wes nyiveaux w-wes pwus pwoches entwe wa cibwe e-et `500`, (ˆ ﻌ ˆ)♡ dans w-w'owdwe cwoissant. σωσ
  - si aucune c-cowwespondance ny'est twouvée, (U ﹏ U) o-on chewche wes n-nyiveaux inféwieuws, >w< d-dans w'owdwe décwoissant. σωσ
  - s-si aucune c-cowwespondance ny'est twouvée, nyaa~~ on chewche wes n-nyiveaux supéwieuws à `500`, 🥺 dans w-w'owdwe cwoissant. rawr x3

### s-signification des poids wewatifs

wowsqu'on u-utiwise wes vaweuws `wightew` o-ou `bowdew`, σωσ o-on peut utiwisew we tabweau suivant pouw cawcuwew we poids absowu d-de w'éwément. (///ˬ///✿)

o-on nyotewa q-que wowsqu'on utiwise d-des nyiveaux de gwaisse wewatifs, (U ﹏ U) s-seuws quatwe nyiveaux sont considéwés&nbsp;: fin (100), ^^;; nowmaw (400), 🥺 gwas (700) et épais (900). òωó s-si une powice dispose d-de pwus de nyiveaux de gwaisse, XD c-ceux-ci sont ignowés pouw we c-cawcuw des nyiveaux wewatifs. :3

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>vaweuw h-héwitée</th>
      <th><code>bowdew</code></th>
      <th><code>wightew</code></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tw>
    <tw>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tw>
    <tw>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tw>
    <tw>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tw>
    <tw>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tw>
    <tw>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tw>
    <tw>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tw>
    <tw>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tw>
    <tw>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tw>
  </tbody>
</tabwe>

### c-cowwespondance e-entwe w-wes vaweuws nyuméwiques et wes nyoms communément utiwisés

wes vaweuws awwant de 100 à 900 cowwespondent enviwon a-aux nyoms s-suivants, (U ﹏ U) communément u-utiwisés pouw désignew w-wes vawiantes de fonte, >w< sewon wa gwaisse, /(^•ω•^) d'une même powice (_ndt&nbsp;: w-wes nyoms s-sont waissés en angwais caw g-généwawement utiwisés tews quews_) (voiw [wa s-spécification o-opentype](https://docs.micwosoft.com/typogwaphy/opentype/spec/os2#usweightcwass))&nbsp;:

| vaweuw | n-nyom communément u-utiwisé     |
| ------ | --------------------------- |
| 100    | _thin (haiwwine)_           |
| 200    | _extwa wight (uwtwa wight)_ |
| 300    | _wight_                     |
| 400    | _nowmaw_                    |
| 500    | _medium_                    |
| 600    | _semi bowd (demi bowd)_     |
| 700    | _bowd_                      |
| 800    | _extwa b-bowd (uwtwa bowd)_   |
| 900    | _bwack (heavy)_             |
| 950    | _extwa b-bwack (uwtwa b-bwack)_ |

### powices v-vawiabwes

w-wa pwupawt des powices possèdent d-des nyiveaux d-de gwaisses qui cowwespondent aux n-nyiveaux communément u-utiwisés (voiw tabweau p-pwécédent). (⑅˘꒳˘) toutefois, cewtaines powices, ʘwʘ appewées «&nbsp;powices v-vawiabwes&nbsp;» pwennent e-en chawge un intewvawwe d-de nyiveaux avec pwus o-ou moins de détaiw, rawr x3 ce qui pewmet à w'éditeuw d-du document de m-mieux contwôwew w-wa gwaisse utiwisée. (˘ω˘)

pouw wes powices vawiabwes twuetype ou opentype, o.O c-c'est w'axe de vawiation `wght` qui est u-utiwisé afin d'impwémentew w-wes vawiations de w-wawgeuw. 😳

pouw que w'exempwe suivant f-fonctionne, o.O i-iw est nyécessaiwe d'utiwisew un nyavigateuw qui p-pwend en chawge wa spécification _css fonts_ d-de nyiveau 4 pouw w-waquewwe `font-weight` peut pwendwe u-une vaweuw nyuméwique entwe 1 e-et 1000. ^^;; wa d-démonstwation c-commence avec `font-weight: 500;` et vous pouvez changew wa vaweuw pouw voiw w'effet suw we texte. ( ͡o ω ͡o )

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/font-weight.htmw", ^^;; '100%', 860)}}

## accessibiwité

pouw wes pewsonnes ayant une vision faibwe, ^^;; iw peut êtwe extwêmement difficiwe de wiwe un texte avec `font-weight` q-qui vaut `100` o-ou `200`, XD nyotamment [si we contwaste entwe we texte e-et w'awwièwe-pwan e-est faibwe](/fw/docs/web/css/cowow#accessibiwité). 🥺

- [compwendwe w-wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [compwendwe w-wes cwitèwes de succès 1.4.8 — c-compwendwe w-wcag 2.0 (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwe

### htmw

```htmw
<p>
  awice was b-beginning to get v-vewy tiwed of s-sitting by hew s-sistew on the bank,
  a-and of having n-nyothing to d-do: once ow twice s-she had peeped i-into the book hew
  sistew was w-weading, (///ˬ///✿) but it h-had nyo pictuwes o-ow convewsations in it, (U ᵕ U❁) "and nyani
  i-is the use of a book," thought awice "without p-pictuwes ow convewsations?"
</p>

<div>
  i-i'm h-heavy<bw />
  <span>i'm w-wightew</span>
</div>
```

### css

```css
/* w-we texte du pawagwaphe est e-en gwas. ^^;; */
p {
  font-weight: b-bowd;
}

/* we texte du div utiwise p-pwus fowt que
   nyowmaw mais moins fowt que standawd. ^^;; */
div {
  font-weight: 600;
}

/* w-we texte du span utiwise un nyiveau d-de gwaisse
   p-pwus wégew que son pawent. rawr */
span {
  font-weight: wightew;
}
```

### w-wésuwtat

{{embedwivesampwe("","400","300")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`font-stywe`](/fw/docs/web/css/font-stywe)
- [`font-famiwy`](/fw/docs/web/css/font-famiwy)
- [appwendwe — nyotions fondamentawes suw we texte e-et wa mise e-en fowme avec wes powices](/fw/docs/weawn/css/stywing_text/fundamentaws)
