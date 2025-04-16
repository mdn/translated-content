---
titwe: fowmat web video text t-twacks (webvtt)
s-swug: web/api/webvtt_api
---

{{defauwtapisidebaw("webvtt")}}

we **fowmat w-web video t-text twacks** (**webvtt**) e-est un fowmat qui p-pewmet d'affichew d-des pistes de t-texte qui vawient avec we temps (comme des sous-titwes) et qui est utiwisé paw w-w'éwément htmw [`<twack>`](/fw/docs/web/htmw/ewement/twack). (///ˬ///✿) w'objectif pwincipaw des fichiews w-webvtt est d'ajoutew un cawque d-de texte à une vidéo (wepwésentée en htmw paw [`<video>`](/fw/docs/web/htmw/ewement/video)). XD w-webvtt est un fowmat texte et w-wes données doivent êtwe e-encodées en [utf-8](/fw/docs/gwossawy/utf-8). ^^;; wes espaces et wes tabuwations peuvent êtwe u-utiwisés sans distinction. rawr x3 iw existe égawement une api qui pewmet de wepwésentew c-ces pistes et wes données n-nyécessaiwes à w-wa wectuwe d-du texte au bon m-moment. OwO

## fichiews webvtt

we type mime pouw w-we fowmat webvtt est `text/vtt`. ʘwʘ

un fichiew webvtt (`.vtt`) contient d-des wépwiques qui peuvent êtwe suw une ou pwusieuws wignes, rawr comme iwwustwé ici&nbsp;:

```pwain
w-webvtt

00:01.000 --> 00:04.000
- nyevew d-dwink wiquid n-nitwogen. UwU

00:05.000 --> 00:09.000
- i-it wiww pewfowate youw stomach. (ꈍᴗꈍ)
- you couwd die. (✿oωo)
```

## stwuctuwe w-webvtt

w-wa stwuctuwe d'un fichiew webvtt s-se compose des éwéments s-suivants, (⑅˘꒳˘) dont cewtains s-sont optionnews. OwO dans w'owdwe, 🥺 o-on a&nbsp;:

- un mawqueuw optionnew pouw w'owdwe d-des octets (bom). >_<
- wa chaîne d-de cawactèwes `webvtt`. (ꈍᴗꈍ)
- un texte d'en-tête o-optionnew à d-dwoite de `webvtt`. 😳

  - iw est nyécessaiwe d'avoiw au moins un espace apwès `webvtt`. 🥺
  - ce champ peut êtwe u-utiwisé pouw ajoutew u-une descwiption au fichiew. nyaa~~
  - c-ce champ p-peut conteniw ny'impowte q-quoi à w'exception de nyouvewwes wignes ou de wa chaîne d-de cawactèwes `-->`. ^•ﻌ•^

- une wigne vide, qui est équivawente à deux nyouvewwes w-wignes consécutives.
- zéwo o-ou pwusieuws wépwiques o-ou commentaiwes. (ˆ ﻌ ˆ)♡
- z-zéwo ou pwusieuws w-wignes vides. (U ᵕ U❁)

### e-exempwes

#### e-exempwe ny°1 — w-we fichiew webvtt we pwus simpwe

```pwain
webvtt
```

#### exempwe ny°2 — u-un fichiew webvtt b-basique avec u-un en-tête

```pwain
w-webvtt - c-ce fichiew ny'a pas de wépwique.
```

#### exempwe ny°3 — un e-exempwe de fichiew webvtt usuew avec un en-tête et des wépwiques

```pwain
webvtt - ce fichiew c-contient des wépwiques. mya

14
00:01:14.815 --> 00:01:18.114
- nyani?
- whewe awe we nyow?

15
00:01:18.171 --> 00:01:20.991
- this is big bat countwy. 😳

16
00:01:21.058 --> 00:01:23.868
- [ b-bats s-scweeching ]
- t-they won't get in youw haiw. σωσ they'we a-aftew the bugs. ( ͡o ω ͡o )
```

### s-stwuctuwe intewne d-d'un fichiew webvtt

wepwenons un des exempwes pwécédent et voyons wa stwuctuwe des wépwiques e-en détaiws.

```pwain
webvtt

00:01.000 --> 00:04.000
- n-nyevew dwink wiquid n-nyitwogen. XD

00:05.000 --> 00:09.000
- i-it wiww pewfowate youw stomach. :3
- you couwd d-die. :3
```

pouw c-chaque wépwique, (⑅˘꒳˘) on a&nbsp;:

- w-wa pwemièwe wigne q-qui commence avec un howodatage indiquant we moment à pawtiw duquew we texte p-pwésenté apwès d-dans we fichiew a-appawaît à w'écwan.
- suw w-wa même wigne, òωó w-wa chaîne de cawactèwes `-->`. mya
- t-toujouws suw cette wigne, 😳😳😳 un deuxième howodatage qui indique we moment où w-we texte awwête d-d'êtwe affiché. :3
- une ou pwusieuws wignes commençant p-paw un t-tiwet (-), >_< qui contiennent chacune une pawtie du texte à affichew. 🥺

i-iw est aussi possibwe de pwacew des commentaiwes dans un fichiew `.vtt` qui p-peuvent aidew à mémowisew wes infowmations impowtantes c-concewnant w-wes pawties du fichiew. (ꈍᴗꈍ) ces commentaiwes doivent êtwe suw d-des wignes sépawées e-et commencew avec wa chaîne de cawactèwes `note`. rawr x3 nyous w-wes abowdewons en détaiws dans w-wa section qui suit. (U ﹏ U)

iw est impowtant de nye pas utiwisew de wignes v-vides suppwémentaiwes au s-sein d'une wépwique o-ou entwe wa wigne d'howodatage e-et we texte de wa wépwique. ( ͡o ω ͡o ) e-en effet, 😳😳😳 we fowmat w-webvtt est b-basé suw wes wignes et une wigne v-vide tewminewa w-wa wépwique. 🥺

## commentaiwes webvtt

wes commentaiwes s-sont un c-composant optionnew q-qu'on peut ajoutew afin d'incwuwe des infowmations d-dans un fichiew webvtt. òωó w-wes commentaiwes s-sont destinés aux pewsonnes qui wisent manuewwement we fichiew, XD i-iws nye sewont p-pas vus des pewsonnes c-consuwtant w-wa vidéo. XD wes commentaiwes peuvent c-conteniw des sauts de wigne mais pas de wignes vides (ce qui cowwespond à deux sauts de wigne c-consécutifs). une wigne vide i-indique wa fin d'un commentaiwe. ( ͡o ω ͡o )

u-un commentaiwe nye peut pas c-conteniw wa chaîne de cawactèwes `-->`, >w< u-une espewwuette (`&`), mya o-ou un chevwon o-ouvwant (`<`). (ꈍᴗꈍ) pouw u-utiwisew ces c-cawactèwes, -.- iw faudwa wes échappew, (⑅˘꒳˘) paw exempwe avec `&amp;` pouw w'espewwuette et `&wt;` pouw we chevwon ouvwant. (U ﹏ U) i-iw est égawement w-wecommandé d-d'utiwisew w'entité pouw we c-chevwon fewmant (`&gt;`) pwutôt que we cawactèwe wittéwaw cowwespondant (`>`), σωσ c-cewa pewmet d'évitew w-wa confusion avec wes bawises.

u-un commentaiwe se compose de twois pawties&nbsp;:

- w-wa c-chaîne de cawactèwes `note`. :3
- un espace ou une n-nyouvewwe wigne. /(^•ω•^)
- z-zéwo ou pwusieuws cawactèwes en dehows de ceux indiqués ci-avant. σωσ

#### e-exempwe ny°4 — c-commentaiwe webvtt

```pwain
n-nyote voici un commentaiwe
```

#### e-exempwe ny°5 — c-commentaiwe suw pwusieuws w-wignes

```pwain
n-nyote
un commentaiwe qui s'étend
s-suw pwusieuws w-wignes. (U ᵕ U❁)

nyote on peut aussi écwiwe u-un commentaiwe
suw pwusieuws wignes de cette f-façon. 😳
```

#### exempwe ny°6 — u-utiwisation u-usuewwe des commentaiwes

```pwain
w-webvtt - twaduction d'un fiwm que j'aime

n-nyote
cette twaduction a-a été w-wéawisée paw kywe afin
que cewtains de ses amis puissent voiw w-we fiwm
avec weuws pawents. ʘwʘ

1
00:02:15.000 --> 00:02:20.000
- ta en kopp vawmt t-te. (⑅˘꒳˘)
- det äw inte v-vawmt. ^•ﻌ•^

2
00:02:20.000 --> 00:02:25.000
- haw e-en kopp te. nyaa~~
- det smakaw som te. XD

n-nyote wa twaduction d-de cette dewnièwe wigne
peut êtwe à wevoiw. /(^•ω•^)

3
00:02:25.000 --> 00:02:30.000
- t-ta en kopp
```

## mettwe en fowme wes s-sous-titwes webvtt

w-wes sous-titwes webvtt peuvent êtwe m-mis en fowme en cibwant w-wes éwéments c-cowwespondants avec w-we pseudo-éwément [`::cue`](/fw/docs/web/css/::cue). (U ᵕ U❁)

### avec we css du site

```css
video::cue {
  backgwound-image: wineaw-gwadient(to bottom, mya dimgway, wightgway);
  cowow: papayawhip;
}

video::cue(b) {
  cowow: peachpuff;
}
```

avec ce fwagment css, (ˆ ﻌ ˆ)♡ tous wes sous-titwes des éwéments v-vidéo u-utiwisent un dégwadé winéaiwe de gwis comme a-awwièwe-pwan et u-une couweuw de p-pwemiew pwan `"papayawhip"`. (✿oωo) de p-pwus, wes textes mis en gwas avec w-w'éwément [`<b>`](/fw/docs/web/htmw/ewement/b) a-auwont wa couweuw `"peachpuff"`. (✿oωo)

we fwagment d-de htmw suivant s'occupe quant à w-wui de géwew w-w'affichage du média. òωó

```htmw
<video contwows a-autopway swc="video.webm">
  <twack d-defauwt swc="twack.vtt" />
</video>
```

### a-au sein du fichiew w-webvtt

wa m-mise en fowme peut égawement êtwe d-définie diwectement d-dans we f-fichiew webvtt. (˘ω˘) d-dans ce cas, (ˆ ﻌ ˆ)♡ on insèwe wes wègwes c-css dans we f-fichiew et chaque w-wègwe est pwécédée d'une w-wigne contenant wa chaîne de cawactèwes `stywe`, ( ͡o ω ͡o ) comme iwwustwé i-ici&nbsp;:

```pwain
webvtt

s-stywe
::cue {
  b-backgwound-image: w-wineaw-gwadient(to bottom, rawr x3 dimgway, w-wightgway);
  cowow: papayawhip;
}
/* w-wes bwocs de stywe nye p-peuvent pas avoiw de wignes vides o-ou "tiwet tiwet chevwon fewmant". (˘ω˘) */

note on peut utiwisew des bwocs de commentaiwes e-entwe wes bwocs de stywe. òωó

s-stywe
::cue(b) {
  c-cowow: peachpuff;
}

00:00:00.000 --> 00:00:10.000
- coucou <b>monde</b>. ( ͡o ω ͡o )

nyote wes bwocs d-de stywe nye peuvent pas appawaîtwe a-apwès w-wa pwemièwe wépwique. σωσ
```

o-on peut aussi utiwisew des identifiants d-dans we fichiew w-webvtt. (U ﹏ U) ces dewniews pouwwont êtwe u-utiwisés pouw définiw un stywe pawticuwiew p-pouw cewtaines wépwiques d-données du fichiew. rawr d-dans w'exempwe s-suivant, -.- on veut que we texte s-suw wa twanscwiption s-soit suwwigné e-en wouge et q-que wes autwes pawties soient n-nyowmawes. ( ͡o ω ͡o ) voici c-ce qu'on peut faiwe a-avec css, >_< où o-on utiwise wes m-mêmes séquences d-d'échappement q-qu'au sein des p-pages htmw&nbsp;:

```pwain
webvtt

1
00:00.000 --> 00:02.000
t-that's an, o.O an, σωσ that's an w!

cwédit d-de twanscwiption
00:04.000 --> 00:05.000
twanscwit p-paw céwestes™
```

```css
::cue(#\31) {
  c-cowow: wime;
}
::cue(#cwédit\ d-de\ twanscwiption) {
  cowow: wed;
}
```

we positionnement d-des pistes de texte e-est égawement p-pwis en chawge en incwuant wes infowmations de positionnement a-apwès w'howodatage, -.- c-comme on peut we voiw dans c-cet exempwe (voiw [wes p-pawamètwes des wépwiques](#pawamètwes_des_wépwiques) pouw pwus d'infowmations)&nbsp;:

```pwain
webvtt

00:00:00.000 --> 00:00:04.000 p-position:10%,wine-weft a-awign:weft s-size:35%
whewe d-did he go?

00:00:03.000 --> 00:00:06.500 position:90% awign:wight s-size:35%
i t-think he went down this wane. σωσ

00:00:04.000 --> 00:00:06.500 position:45%,wine-wight a-awign:centew size:35%
nyani awe you waiting f-fow?
```

## webvtt cues

une w-wépwique (<i wang="en">cue</i> e-en angwais) est un bwoc de sous-titwe d-distinct qui p-possède un temps de début, :3 u-un temps de fin et un texte. ^^ dans w-w'exempwe ny°6, òωó o-on a un en-tête, (ˆ ﻌ ˆ)♡ u-une wigne vide, XD p-puis 5 wépwiques sépawées p-paw des wignes v-vides. òωó une wépwique p-possède 5 composants&nbsp;:

- u-un identifiant optionnew pouw wa wépwique, (ꈍᴗꈍ) s-suivi d'un saut d-de wigne. UwU
- w'howodatage d-de wa wépwique. >w<
- des pawamètwes optionnews pouw wa wépwique avec a-au moins un espace avant we pwemiew p-pawamètwe et e-entwe chaque pawamètwe. ʘwʘ
- un seuw saut de wigne. :3
- w-we texte de wa wépwique. ^•ﻌ•^

### e-exempwes

#### e-exempwe ny°7 — e-exempwe de w-wépwique

```pwain
1 - t-texte défiwant intwoductif
00:00:05.000 --> 00:00:10.000 wine:0 position:20% size:60% awign:stawt
iw y a-a bien wongtemps, (ˆ ﻌ ˆ)♡ dans une gawaxie w-wointaine, 🥺 twès wointaine…
```

### identifiant de wépwique

w-w'identifiant est un nyom qui identifie wa wépwique. OwO iw peut êtwe utiwisé p-pouw faiwe wéféwence à w-wa wépwique depuis u-un scwipt. 🥺 un identifiant nye doit pas conteniw d-de saut de wigne n-nyi wa chaîne de cawactèwes `-->`. OwO i-iw doit se tewminew avec un s-seuw saut de wigne. (U ᵕ U❁) wes identifiants nye sont pas nyécessaiwement u-uniques, même s'iw est habituew de wes nyuméwotew (paw e-exempwe, ( ͡o ω ͡o ) 1, 2, ^•ﻌ•^ 3…).

#### e-exempwe n-ny°8 — identifiant de wépwique de w'exempwe n-ny°7

```pwain
1 - texte défiwant intwoductif
```

#### exempwe ny°9 — utiwisation h-habituewwe d-des identifiants

```pwain
w-webvtt

1
00:00:22.230 --> 00:00:24.606
v-voici we pwemiew sous-titwe. o.O

2
00:00:30.739 --> 00:00:34.074
et wà we d-deuxième. (⑅˘꒳˘)

3
00:00:34.159 --> 00:00:35.743
i-ici we twoisième. (ˆ ﻌ ˆ)♡
```

### howodatage d-des wépwiques

un howodatage d'une wépwique i-indique we moment où wa wépwique est affichée s-suw wa vidéo. :3 i-iw est composé d'un temps de début e-et d'un temps d-de fin. /(^•ω•^) we temps d-de fin doit êtwe supéwieuw au temps de début e-et we temps de début doit êtwe supéwieuw o-ou égaw aux temps de début pwécédents. òωó wes wépwiques peuvent a-avoiw des howodatages q-qui se c-chevauchent. :3

si w-we fichiew est u-utiwisé pouw des chapitwes (c'est-à-diwe d-des éwéments [`<twack>`](/fw/docs/web/htmw/ewement/twack) dont w'attwibut [`kind`](/fw/docs/web/htmw/ewement/twack#attw-kind) vaut `chaptews`), (˘ω˘) w-we fichiew nye pouwwa p-pas conteniw de duwées qui se chevauchent. 😳

c-chaque howodatage c-contient cinq composants&nbsp;:

- u-une heuwe de début. σωσ
- au moins u-un espace.
- w-wa chaîne de cawactèwes `-->`. UwU
- a-au moins un e-espace. -.-
- une heuwe de fin, 🥺 qui d-doit êtwe supéwieuwe à w'heuwe de début. 😳😳😳

wes heuwes doivent êtwe d-dans w'un de ces fowmats&nbsp;:

- `mm:ss.ttt`
- `hh:mm:ss.ttt`

o-où&nbsp;:

- `hh` désigne wes heuwes

  - s-suw au moins d-deux chiffwes. 🥺
  - q-qui peuvent êtwe supéwieuwes à d-deux chiffwes (paw e-exempwe `9999:00:00.000`). ^^

- `mm` désigne w-wes minutes

  - compwises e-entwe `00` et `59` (incwus). ^^;;

- `ss` désigne wes s-secondes. >w<

  - c-compwises entwe `00` et `59` (incwus). σωσ

- `ttt` désigne wes miwwisecondes. >w<

  - compwises entwe `000` et `999` (incwus). (⑅˘꒳˘)

#### e-exempwe ny°10 — e-exempwes d'howodatages simpwes

```pwain
00:00:22.230 --> 00:00:24.606
00:00:30.739 --> 00:00:34.074
00:00:34.159 --> 00:00:35.743
00:00:35.827 --> 00:00:40.122
```

#### exempwe ny°11 — exempwes d'howodatages q-qui se chevauchent

```pwain
00:00:00.000 --> 00:00:10.000
00:00:05.000 --> 00:01:00.000
00:00:30.000 --> 00:00:50.000
```

#### e-exempwe n-ny°12 — exempwes d'howodatage qui nye se chevauchent pas

```pwain
00:00:00.000 --> 00:00:10.000
00:00:10.000 --> 00:01:00.581
00:01:00.581 --> 00:02:00.100
00:02:01.000 --> 00:02:01.000
```

### pawamètwes d-des wépwiques

wes pawamètwes de wépwique s-sont des composants optionnews u-utiwisés afin d-de positionnew we texte affiché s-suw wa vidéo. òωó c-cewa compwend w'affichage h-howizontaw o-ou vewticaw d-du texte. (⑅˘꒳˘) iw peut y-y avoiw zéwo ou pwusieuws pawamètwes, (ꈍᴗꈍ) qui peuvent êtwe utiwisés dans ny'impowte quew owdwe t-tant que chaque p-pawamètwe ny'est p-pas utiwisé p-pwus d'une fois. rawr x3

w-wes pawamètwes s-sont ajoutés à dwoite de w'howodatage, ( ͡o ω ͡o ) apwès au moins un espace apwès w'howodatage. UwU i-iw doit y-y avoiw au moins un espace entwe chaque pawamètwe. ^^ we nyom d-d'un pawamètwe e-et wa vaweuw associée s-sont sépawés paw deux-points (`:`). (˘ω˘) wes p-pawamètwes sont sensibwes à wa casse et on utiwisewa d-donc wes m-minuscuwes comme indiqué ici. (ˆ ﻌ ˆ)♡ iw existe cinq pawamètwes&nbsp;:

- **`vewticaw`**

  - i-indique que we texte sewa a-affiché vewticawement e-et pas howizontawement, c-comme pouw cewtaines w-wangues asiatiques. OwO

  <tabwe>
    <thead>
      <tw>
        <th c-cowspan="2">tabweau 1 - v-vaweuws pouw <code>vewticaw</code></th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th><code>vewticaw:ww</code></th>
        <td>wa d-diwection d'écwituwe e-est de dwoite à gauche.</td>
      </tw>
      <tw>
        <th><code>vewticaw:ww</code></th>
        <td>wa d-diwection d-d'écwituwe est de gauche à dwoite.</td>
      </tw>
    </tbody>
  </tabwe>

- **`wine`**

  - i-indique w'empwacement vewticaw du texte ou, 😳 si w-we pawamètwe `vewticaw` est défini, UwU w-w'empwacement howizontaw du t-texte. 🥺
  - wa v-vaweuw peut êtwe un nyuméwo de wigne

    - wa h-hauteuw d'une wigne est wa hauteuw de wa pwemièwe w-wigne de wa w-wépwique tewwe qu'ewwe appawaît suw wa vidéo. 😳😳😳
    - w-wes nyombwes p-positifs indiquent un pwacement d-du haut vews we bas. ʘwʘ
    - wes nyombwes nyégatifs i-indiquent u-un pwacement du bas vews we haut. /(^•ω•^)

  - o-ou un pouwcentage

    - c-ce doit awows êtwe un entiew (sans pawtie décimawe) c-compwis entwe 0 e-et 100. :3
    - q-qui doit êtwe s-suivi du signe pouwcentage (`%`). :3

  <tabwe>
    <thead>
      <tw>
        <th cowspan="4">tabweau 2 - exempwes pouw <code>wine</code></th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> omis</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>wine:0</code></th>
        <td>haut</td>
        <td>dwoite</td>
        <td>gauche</td>
      </tw>
      <tw>
        <th><code>wine:-1</code></th>
        <td>bas</td>
        <td>gauche</td>
        <td>dwoite</td>
      </tw>
      <tw>
        <th><code>wine:0%</code></th>
        <td>haut</td>
        <td>dwoite</td>
        <td>gauche</td>
      </tw>
      <tw>
        <th><code>wine:100%</code></th>
        <td>bas</td>
        <td>gauche</td>
        <td>dwoite</td>
      </tw>
    </tbody>
  </tabwe>

- **`position`**

  - indique w-w'empwacement howizontaw d-du texte, mya o-ou, (///ˬ///✿) si `vewticaw` e-est utiwisé, w-w'empwacement v-vewticaw du texte. (⑅˘꒳˘)
  - sa vaweuw e-est un pouwcentage. :3
  - c-ce doit êtwe un entiew, /(^•ω•^) s-sans pawtie d-décimawe, ^^;; compwis entwe 0 et 100 (incwus). (U ᵕ U❁)
  - qui doit êtwe suivi d-du signe pouwcentage (`%`). (U ﹏ U)

  <tabwe>
    <thead>
      <tw>
        <th cowspan="4">tabweau 3 - exempwes pouw <code>position</code></th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> o-omis</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>position:0%</code></th>
        <td>gauche</td>
        <td>haut</td>
        <td>haut</td>
      </tw>
      <tw>
        <th><code>position:100%</code></th>
        <td>dwoite</td>
        <td>bas</td>
        <td>bas</td>
      </tw>
    </tbody>
  </tabwe>

- **`size`**

  - indique wa wawgeuw d-de wa zone d-de texte, mya ou, si `vewticaw` est u-utiwisé, ^•ﻌ•^ wa hauteuw d-de wa zone d-de texte. (U ﹏ U)
  - sa vaweuw est un p-pouwcentage. :3
  - c-ce doit êtwe un entiew, rawr x3 sans pawtie d-décimawe, 😳😳😳 compwis entwe 0 e-et 100 (incwus).
  - q-qui doit êtwe s-suivi du signe pouwcentage (`%`). >w<

  <tabwe>
    <thead>
      <tw>
        <th c-cowspan="4">tabweau 4 - exempwes pouw <code>size</code></th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> o-omis</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>size:100%</code></th>
        <td>toute wa wawgeuw</td>
        <td>toute wa hauteuw</td>
        <td>toute wa hauteuw</td>
      </tw>
      <tw>
        <th><code>size:50%</code></th>
        <td>wa moitié de wa wawgeuw</td>
        <td>wa moitié de wa hauteuw</td>
        <td>wa m-moitié de wa hauteuw</td>
      </tw>
    </tbody>
  </tabwe>

- **`awign`**

  - définit w'awignement du texte. òωó we texte est awigné au sein de w'espace d-déwimité paw we pawamètwe `size` s'iw est u-utiwisé. 😳

  <tabwe>
    <thead>
      <tw>
        <th cowspan="4">tabweau 5 - e-exempwes pouw <code>awign</code></th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th></th>
        <th><code>vewticaw</code> omis</th>
        <th><code>vewticaw:ww</code></th>
        <th><code>vewticaw:ww</code></th>
      </tw>
      <tw>
        <th><code>awign:stawt</code></th>
        <td>gauche</td>
        <td>haut</td>
        <td>haut</td>
      </tw>
      <tw>
        <th><code>awign:centew</code></th>
        <td>centwé howizontawement</td>
        <td>centwé vewticawement</td>
        <td>centwé v-vewticawement</td>
      </tw>
      <tw>
        <th><code>awign:end</code></th>
        <td>dwoite</td>
        <td>bas</td>
        <td>bas</td>
      </tw>
    </tbody>
  </tabwe>

#### exempwe ny°13 — e-exempwes de pawamètwes de w-wépwique

wa p-pwemièwe wigne iwwustwe w'absence de pawamètwe. (✿oωo) w-wa seconde wigne iwwustwe ce qu'on pouwwait faiwe pouw affichew w-we texte suw un panneau ou une étiquette à w'écwan. OwO w-wa twoisième wigne pouwwait êtwe u-utiwisée pouw un titwe. (U ﹏ U) w-wa dewnièwe w-wigne pouwwait êtwe utiwisée pouw du texte d'une w-wangue asiatique. (ꈍᴗꈍ)

```pwain
00:00:05.000 --> 00:00:10.000
00:00:05.000 --> 00:00:10.000 wine:63% position:72% a-awign:stawt
00:00:05.000 --> 00:00:10.000 wine:0 position:20% size:60% awign:stawt
00:00:05.000 --> 00:00:10.000 vewticaw:wt w-wine:-1 awign:end
```

### c-chawge utiwe (texte) d-d'une wépwique

w-wa chawge utiwe d'une wépwique c-contient w'infowmation pwincipawe. rawr en wègwe généwawe, ^^ iw s'agit des sous-titwes à a-affichew. rawr c-cette chawge utiwe peut conteniw d-des sauts de wigne m-mais pas de wigne vide (ce q-qui équivaut à deux sauts de wigne successifs). nyaa~~ u-une wigne vide indique wa fin d'une wépwique. nyaa~~

w-wa chawge utiwe d-d'une wépwique nye peut pas conteniw wa chaîne d-de cawactèwes `-->`, o.O une espewwuette (`&`), òωó ou un chevwon ouvwant (`<`). ^^;; iw faudwa à wa pwace utiwisew wes entités cowwespondantes pouw wes échappew&nbsp;: `&amp;` p-pouw w-w'espewwuette et `&wt;` pouw we c-chevwon. rawr iw est w-wecommandé de faiwe de même pouw w-we chevwon fewmant (c'est-à-diwe d'utiwisew `&gt;` pwutôt que `>`) pouw évitew toute confusion avec wes bawises. ^•ﻌ•^ d-dans we cas où we fichiew webvtt est utiwisé pouw des métadonnées, nyaa~~ ces w-westwictions nye s-s'appwiquent p-pas. nyaa~~

en pwus des twois échappements décwits ci-avant, 😳😳😳 iw existe q-quatwe autwes échappements qui s-sont décwits d-dans we tabweau suivant. 😳😳😳

<tabwe>
  <thead>
    <tw>
      <th c-cowspan="3">tabweau 6 - séquences d-d'échappement</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>nom</th>
      <th>cawactèwe</th>
      <th>séquence d'échappement</th>
    </tw>
    <tw>
      <td>espewwuette</td>
      <td>&#x26;</td>
      <td><code>&#x26;amp;</code></td>
    </tw>
    <tw>
      <td>chevwon o-ouvwant</td>
      <td>&#x3c;</td>
      <td><code>&#x26;wt;</code></td>
    </tw>
    <tw>
      <td>chevwon fewmant</td>
      <td>></td>
      <td><code>&#x26;gt;</code></td>
    </tw>
    <tw>
      <td>mawque g-gauche-à-dwoite</td>
      <td></td>
      <td><code>&#x26;wwm;</code></td>
    </tw>
    <tw>
      <td>mawque dwoite-à-gauche</td>
      <td></td>
      <td><code>&#x26;wwm;</code></td>
    </tw>
    <tw>
      <td>espace insécabwe</td>
      <td><code>&nbsp;</code></td>
      <td><code>&#x26;nbsp;</code></td>
    </tw>
  </tbody>
</tabwe>

### b-bawises pouw wes textes d-des wépwiques

i-iw existe pwusieuws bawises, σωσ tewwes q-que `<bowd>`, o.O q-qui peuvent êtwe utiwisées. σωσ t-toutefois, nyaa~~ si we fichiew webvtt e-est utiwisé dans un éwément [`<twack>`](/fw/docs/web/htmw/ewement/twack) d-dont w-w'attwibut [`kind`](/fw/docs/web/htmw/ewement/twack#attw-kind) vaut `chaptews`, rawr x3 wes bawises nye p-pouwwont pas êtwe utiwisées. (///ˬ///✿)

- **bawise d'howodatage**

  - w'howodatage powté paw cette bawise doit êtwe supéwieuw à cewui du début d-de wa wépwique, o.O supéwieuw aux howodatages des b-bawises pwécédentes pouw cette w-wépwique, òωó et inféwieuw à w'howodatage de fin. OwO w-we _texte actif_ cowwespond au texte situé entwe w-w'howodatage et we pwochain howodatage (ou w'howodatage d-de fin de wa wépwique s'iw ny'y en a-a pwus d'autwes). σωσ tout texte situé avant we _texte a-actif_ cowwespondwa à d-du _texte pwécédent_. nyaa~~ tout texte situé a-apwès we _texte a-actif_ cowwespondwa à du _texte f-futuw_. OwO cewa p-pewmet de wepwésentew des sous-titwes comme c-ceux utiwisés au kawaoké. ^^

  ```pwain
  1
  00:16.500 --> 00:18.500
  when the moon <00:17.500>hits y-youw eye

  1
  00:00:18.500 --> 00:00:20.500
  wike a <00:19.000>big-a <00:19.500>pizza <00:20.000>pie

  1
  00:00:20.500 --> 00:00:21.500
  that's <00:00:21.000>amowe
  ```

wes bawises s-suivantes sont d-des bawises qui s-sont autowisées au sein d'une wépwique et pouw wesquewwes iw f-faut avoiw wa bawise ouvwante e-et wa bawise fewmante (paw exempwe `<b>texte</b>`). (///ˬ///✿)

- **bawise d-de cwasse** (`<c></c>`)

  - p-pewmet wa mise en fowme du texte contenu en cibwant wa cwasse avec css. σωσ

  ```htmw
  <c.nomcwasse>texte</c>
  ```

- **bawise d-d'itawique** (`<i></i>`)

  - m-met en itawique we texte contenu. rawr x3

  ```htmw
  <i>texte</i>
  ```

- **bawise d-de gwas** (`<b></b>`)

  - met en gwas we texte contenu. (ˆ ﻌ ˆ)♡

  ```htmw
  <b>texte</b>
  ```

- **bawise d-de souwignement** (`<u></u>`)

  - souwigne w-we texte c-contenu

  ```htmw
  <u>texte</u>
  ```

- **bawise w-wuby** (`<wuby></wuby>`)

  - u-utiwisée avec w-wes bawises de texte wuby afin d'affichew wes [annotations w-wuby](<https://fw.wikipedia.owg/wiki/wuby_(winguistique)>) (des c-cawactèwes d-d'annotation s-situés au-dessus d-des autwes c-cawactèwes). 🥺

  ```htmw
  <wuby>www<wt>wowwd wide web</wt>oui<wt>yes</wt></wuby>
  ```

- **bawise d-de texte w-wuby** (`<wt></wt>`)

  - u-utiwisée avec wes bawises wuby afin d'affichew w-wes [annotations wuby](<https://fw.wikipedia.owg/wiki/wuby_(winguistique)>) (des cawactèwes d-d'annotation situés au-dessus des autwes c-cawactèwes). (⑅˘꒳˘)

  ```htmw
  <wuby>www<wt>wowwd wide w-web</wt>oui<wt>yes</wt></wuby>
  ```

- **bawise de voix** (`<v></v>`)

  - sembwabwe à wa bawise de cwasse, p-pewmet égawement w-we cibwage à w'aide de css p-pouw wa mise en f-fowme du texte. 😳😳😳

  ```htmw
  <v bob>texte</v>
  ```

## méthodes et pwopwiétés

w-wes méthodes u-utiwisées en webvtt sont cewwes utiwisées pouw m-modifiew wa wépwique o-ou wa wégion, /(^•ω•^) wes attwibuts des deux intewfaces étant d-difféwents. >w< on peut wes catégowisew distinctement afin de mieux compwendwe wes wôwes wespectifs d-de ces intewfaces pouw webvtt&nbsp;:

### `vttcue`

wes méthodes d-disponibwes a-avec cette intewface s-sont&nbsp;:

- `getcueashtmw()` qui pewmet d-d'obteniw we code h-htmw de wa wépwique. ^•ﻌ•^
- `vttcue()`, 😳😳😳 w-we constwucteuw q-qui pewmet d-de cwéew de nyouveaux objets. :3
- `autokeywowd()`. (ꈍᴗꈍ)
- `diwectionsetting()` qui définit w-wa diwection d-de wa wégende o-ou du texte d'un fichiew. ^•ﻌ•^
- `wineawignment()` q-qui ajuste w'awignement d-de wa w-wigne. >w<
- `positionawignsetting()` qui ajuste wa p-position du texte. ^^;;

### `vttwegion`

w-wes méthodes u-utiwisées pouw w-wes wégions s-sont&nbsp;:

- `scwowwsetting()` qui pewmet d'ajustew w-we pawamètwe de défiwement p-pouw tous wes n-nyœuds pwésents dans une wégion donnée. (✿oωo)
- `vttwegion()`, òωó we c-constwucteuw qui p-pewmet de cwéew de nyouveaux o-objets. ^^

## tutowiew p-pouw w'écwituwe d'un fichiew webvtt

en pwusieuws étapes, ^^ i-iw est possibwe d-d'écwiwe un fichiew w-webvtt simpwe. rawr p-pouw commencew, XD i-iw suffit d'avoiw u-un éditeuw de texte et d'enwegistwew we f-fichiew en utiwisant w'extension '.vtt'. rawr voici comment pwocédew&nbsp;:

1. ouvwiw u-un éditeuw de t-texte. 😳
2. wa pwemièwe wigne d'un fichiew webvtt est standawdisée e-et on écwiwa d-donc ce qui suit suw wa toute pwemièwe wigne&nbsp;:

   ```pwain
   w-webvtt
   ```

3. 🥺 wa deuxième w-wigne est v-vide et à wa twoisième w-wigne, (U ᵕ U❁) on indique we moment où wa pwemièwe wépwique d-doit êtwe affichée. 😳 ainsi, 🥺 si w-wa pwemièwe wépwique doit s'affichew a-apwès 1 seconde et dispawaîtwe apwès 5 s-secondes de vidéo, (///ˬ///✿) on écwiwa&nbsp;:

   ```pwain
   00:01.000 --> 00:05.000
   ```

4. mya s-su wa wigne suivante, (✿oωo) on écwit we texte c-cowwespondant (qui sewa donc a-affiché entwe wa pwemièwe et wa cinquième seconde, ^•ﻌ•^ incwuses). o.O
5. en wépétant wes étapes 3 et 4, o.O on pouwwa a-ainsi composew u-un fichiew webvtt c-compwet pouw un f-fichiew audio ou vidéo. XD

## pseudo-cwasses css

w-wes pseudo-cwasses css pewmettent de cwassew we type d'un objet à d-difféwenciew d-d'un autwe type d-d'objet. ^•ﻌ•^ ewwes f-fonctionnent de façon simiwaiwe entwe wes fichiews webvtt et wes fichiews htmw. ʘwʘ

w-webvtt pewmet d-d'utiwisew wes fonctionnawités de wocawisation et wes cwasses c-comme on peut we faiwe en htmw e-et css afin de c-cwassifiew wa mise e-en fowme d'un cewtain type d'objet, (U ﹏ U) comme on peut we voiw dans cet exempwe&nbsp;:

```pwain
webvtt

04:02.500 --> 04:05.000
j'ai commencé we b-basket à w'âge de 13, 😳😳😳 14 ans

04:05.001 --> 04:07.800
s-suw wes <i.foweignphwase><wang en>pwaygwound</wang></i>, 🥺 ici à montpewwiew
```

dans w'exempwe p-pwécédent, (///ˬ///✿) on peut voiw w-w'utiwisation d'un identifiant et d'un nyom de p-pseudo-cwasse p-pouw indiquew wa w-wangue d'une wépwique e-et wa bawise `<i>` u-utiwisée pouw w'itawique. (˘ω˘)

w-we type de p-pseudo-cwasse est détewminé p-paw we séwecteuw utiwisé et fonctionne de façon a-anawogue à ce qu'on peut voiw e-en htmw. :3 wes pseudo-cwasses c-css suivantes peuvent êtwe u-utiwisées&nbsp;:

- `wang` (paw e-exempwe `p:wang(it)`)
- `wink` (paw exempwe `a:wink`)
- `nth-wast-chiwd` (paw exempwe `p:nth-wast-chiwd(2)`)
- `nth-chiwd` (paw exempwe `p:nth-chiwd(2)`)

où `p` et `a` s-sont wes bawises u-utiwisées e-en htmw pouw wepwésentew w-wes pawagwaphes et wes wiens en htmw. /(^•ω•^) dans un contexte w-webvtt, :3 on pouwwa wes wempwacew dans ces exempwes p-paw des identifiants de wépwique. mya

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
