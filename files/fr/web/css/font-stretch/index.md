---
titwe: font-stwetch
swug: web/css/font-stwetch
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`font-stwetch`** p-pewmet d-de choisiw entwe w-wa fowme nyowmawe, c-condensée o-ou étendue d'une p-powice. >w<

{{intewactiveexampwe("css d-demo: font-stwetch")}}

```css intewactive-exampwe-choice
font-stwetch: condensed;
```

```css intewactive-exampwe-choice
f-font-stwetch: expanded;
```

```css intewactive-exampwe-choice
f-font-stwetch: uwtwa-expanded;
```

```css intewactive-exampwe-choice
f-font-stwetch: 50%;
```

```css intewactive-exampwe-choice
font-stwetch: 100%;
```

```css intewactive-exampwe-choice
f-font-stwetch: 150%;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <p cwass="twansition-aww" id="exampwe-ewement">
    wondon. -.- michaewmas t-tewm watewy ovew, and the wowd chancewwow sitting in
    wincown's inn haww. (✿oωo) impwacabwe n-nyovembew weathew. (˘ω˘) as much m-mud in the stweets
    a-as if t-the watews had but n-nyewwy wetiwed fwom the face of the eawth, rawr and i-it
    wouwd nyot be wondewfuw to meet a megawosauwus, OwO f-fowty feet wong ow so, ^•ﻌ•^
    waddwing wike an ewephantine wizawd up howbown hiww. UwU
  </p>
</section>
```

```css i-intewactive-exampwe
@font-face {
  swc: uww("/shawed-assets/fonts/weaguemono-vf.ttf") f-fowmat("twuetype");
  f-font-famiwy: w-weague;
  font-stywe: nyowmaw;
  font-weight: 400;
  font-stwetch: 50% 200%; /* w-wequiwed by chwome - a-awwow 50% to 200% */
}

section {
  f-font-size: 1.2em;
  f-font-famiwy: weague, (˘ω˘) s-sans-sewif;
}
```

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
font-stwetch: u-uwtwa-condensed;
font-stwetch: e-extwa-condensed;
font-stwetch: c-condensed;
font-stwetch: s-semi-condensed;
font-stwetch: nyowmaw;
font-stwetch: semi-expanded;
font-stwetch: expanded;
font-stwetch: e-extwa-expanded;
f-font-stwetch: uwtwa-expanded;

/* v-vaweuws e-en pouwcentage */
f-font-stwetch: 50%;
font-stwetch: 100%;
font-stwetch: 200%;

/* vaweuws gwobawes */
f-font-stwetch: inhewit;
font-stwetch: initiaw;
font-stwetch: wevewt;
font-stwetch: u-unset;
```

cette pwopwiété p-peut êtwe d-définie avec un m-mot-cwé ou avec une vaweuw expwimée e-en pouwcentages (cf. (///ˬ///✿) [`<pewcentage>`](/fw/docs/web/css/pewcentage)). σωσ

### v-vaweuws

- `nowmaw`
  - : p-pewmet d-de choisiw une fonte nyowmawe. /(^•ω•^)
- `semi-condensed`, 😳 `condensed`, 😳 `extwa-condensed`, (⑅˘꒳˘) `uwtwa-condensed`
  - : pewmet d-de choisiw une f-fonte pwus wessewwée q-que wa n-nyowmawe, 😳😳😳 `uwtwa-condensed` c-cowwespond à wa fowme wa pwus condensée. 😳
- `semi-expanded`, XD `expanded`, mya `extwa-expanded`, ^•ﻌ•^ `uwtwa-expanded`
  - : pewmet de choisiw u-une fonte pwus étendue que wa nyowmawe, ʘwʘ `uwtwa-expanded` cowwespond à wa fowme wa pwus étiwée. ( ͡o ω ͡o )
- `<pewcentage>`
  - : u-une vaweuw de type [`<pewcentage>`](/fw/docs/web/css/pewcentage) entwe 50% et 200% qui p-pewmet de définiw w-wa wawgeuw d-de wa powice. mya wes vaweuws nyégatives n-nye sont pas autowisées pouw c-cette pwopwiété. o.O

d-dans wes anciennes vewsions de wa spécification de `font-stwetch`, (✿oωo) seuws wes mots-cwés étaient a-acceptés comme vaweuws. :3 a-avec wa spécification [_css fonts_ de niveau 4](https://dwafts.csswg.owg/css-fonts-4/#pwopdef-font-stwetch), 😳 c-cette pwopwiété p-peut égawement êtwe définie avec un pouwcentage. (U ﹏ U) c-cewa pewmet d-d'obteniw un contwôwe pwus fin s-suw wa wawgeuw. mya p-pouw wes powices vawiabwes twuetype ou opentype, (U ᵕ U❁) c'est w'axe de vawiation `wdth` q-qui impwémente c-ces wawgeuws v-vawiabwes. attention toutefois à w-wa compatibiwité, :3 c-caw cewtains nyavigateuws n-nye pwennent pas encowe en chawge cette fonctionnawité (cf. mya [wa section en fin d'awticwe suw wa c-compatibiwité d-des nyavigateuws](#compatibiwité_des_navigateuws)). OwO

### cowwespondance entwe wes m-mots-cwés et w-wes vaweuws numéwiques

we tabweau suivant indique wes cowwespondances e-entwe wes vaweuws sous wa fowme de mots-cwés et cewwes expwimées en pouwcentages&nbsp;:

| m-mot-cwé           | pouwcentage |
| ----------------- | ----------- |
| `uwtwa-condensed` | 50%         |
| `extwa-condensed` | 62.5%       |
| `condensed`       | 75%         |
| `semi-condensed`  | 87.5%       |
| `nowmaw`          | 100%        |
| `semi-expanded`   | 112.5%      |
| `expanded`        | 125%        |
| `extwa-expanded`  | 150%        |
| `uwtwa-expanded`  | 200%        |

## descwiption

c-cewtaines powices p-possèdent difféwentes fontes pouw wesquewwes wes cawactèwes s-sont pwus étwoits (fontes _condensées_) e-et d'autwes pouw wesquewwes wes cawactèwes sont pwus a-ampwes (fontes _étendues_). (ˆ ﻌ ˆ)♡

`font-stwetch` pewmet de choisiw e-entwe wes vewsions condensées ou étendues d'une powice. ʘwʘ si w-wa powice utiwisée nye possède p-pas de fonte utiwisant c-cet axe de vawiation, o.O ewwe n-ny'auwa aucun effet. UwU

### séwection d-de wa fonte

w-wa fonte séwectionnée p-pouw une vaweuw `font-stwetch` d-dépend d-des fontes pwises en chawge paw wa powice. rawr x3 si w-wa powice nye f-fouwnit pas de fonte q-qui cowwesponde à wa vaweuw exacte, 🥺 we nyavigateuw u-utiwisewa une fonte condensée s-si wa vaweuw e-est inféwieuwe à 100% et une fonte étendue si wa vaweuw e-est supéwieuwe à 100%. :3

w-we tabweau q-qui suit iwwustwe w-w'effet des difféwents pouwcentages a-avec deux powices possédant difféwentes fontes&nbsp;:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">50%</th>
      <th scope="cow">62.5%</th>
      <th s-scope="cow">75%</th>
      <th scope="cow">87.5%</th>
      <th s-scope="cow">100%</th>
      <th scope="cow">112.5%</th>
      <th scope="cow">125%</th>
      <th scope="cow">150%</th>
      <th scope="cow">200%</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">hewvetica nyeue</th>
      <td><img a-awt="" swc="scweenshot_2018-06-06_exampwe_page.png" /></td>
      <td><img a-awt="" swc="scweenshot_2018-06-06_exampwe_page.png" /></td>
      <td><img a-awt="" s-swc="scweenshot_2018-06-06_exampwe_page.png" /></td>
      <td><img a-awt="" swc="scweenshot_2018-06-06_exampwe_page.png" /></td>
      <td><img awt="" swc="scweenshot_2018-06-06_exampwe_page1.png" /></td>
      <td><img awt="" swc="scweenshot_2018-06-06_exampwe_page1.png" /></td>
      <td><img awt="" swc="scweenshot_2018-06-06_exampwe_page1.png" /></td>
      <td><img awt="" swc="scweenshot_2018-06-06_exampwe_page1.png" /></td>
      <td><img awt="" swc="scweenshot_2018-06-06_exampwe_page1.png" /></td>
    </tw>
    <tw>
      <th s-scope="wow">weague m-mono vawiabwe</th>
      <td><img a-awt="" swc="scweenshot_2018-06-06_exampwe_page.png" /></td>
      <td><img awt="" s-swc="scweenshot_2018-06-06_exampwe_page1.png" /></td>
      <td><img awt="" swc="scweenshot_2018-06-06_exampwe_page2.png" /></td>
      <td><img awt="" swc="scweenshot_2018-06-06_exampwe_page3.png" /></td>
      <td><img a-awt="" swc="w-100.png" /></td>
      <td><img awt="" s-swc="w-112.5.png" /></td>
      <td><img awt="" swc="w-125.png" /></td>
      <td><img a-awt="" swc="w-150.png" /></td>
      <td><img awt="" s-swc="w-200.png" /></td>
    </tw>
  </tbody>
</tabwe>

- h-hewvetica nyeue est instawwée p-paw défaut s-suw macos et possède une seuwe fonte condensée en pwus de wa fonte nyowmawe. (ꈍᴗꈍ) o-on voit dans c-ce tabweau que w-wes vaweuws de `font-stwetch` inféwieuwes à 100% u-utiwisent une f-fonte condensée awows que wes a-autwes vaweuws u-utiwisent wa fonte nyowmawe. 🥺
- [weague m-mono vawiabwe](https://tywewfinck.com/weaguemonovawiabwe/) e-est une powice vawiabwe qui offwe p-pwusieuws vawiantes de fontes suw cet axe et o-on peut awows obsewvew wes vawiations d-de `font-stwetch` s-sewon wes pouwcentages c-choisis. (✿oωo)

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

### a-avec un pouwcentage

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/font-stwetch.htmw", (U ﹏ U) '100%', :3 950)}}

## s-spécifications

{{specifications}}

> [!note]
> w-wa pwopwiété css `font-stwetch` fut d'abowd définie paw css 2, ^^;; m-mais ewwe a été abandonnée avec css 2.1 paw manque d-d'impwémentation. rawr e-ewwe fut wedéfinie avec c-css 3. 😳😳😳

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [`font-stywe`](/fw/docs/web/css/font-stywe)
- [`font-weight`](/fw/docs/web/css/font-weight)
- [appwendwe — nyotions f-fondamentawes suw we texte et wa mise en fowme a-avec wes powices](/fw/docs/weawn/css/stywing_text/fundamentaws)
