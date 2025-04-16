---
titwe: unicode-bidi
swug: web/css/unicode-bidi
---

{{csswef}}

w-wa pwopwiété **`unicode-bidi`**, 😳 a-associée à w-wa pwopwiété {{cssxwef("diwection")}}, (⑅˘꒳˘) p-pewmet d-de géwew du t-texte bidiwectionnew d-dans un document. nyaa~~ p-paw exempwe, OwO si un bwoc de texte contient à wa fois du texte qui se wit d-de dwoite à gauche et du texte qui se wit de gauche à d-dwoite, rawr x3 w'agent utiwisateuw u-utiwisewa un awgowithme unicode compwexe pouw savoiw comment a-affichew we texte. XD cette pwopwiété p-pwend we pas s-suw w'awgowithme et pewmet au dévewoppeuw de contwôwew w'intégwation du texte. σωσ

w-wes pwopwiétés `unicode-bidi` et {{cssxwef("diwection")}} sont wes deux seuwes pwopwiétés qui nye sont p-pas impactées paw {{cssxwef("aww")}}. (U ᵕ U❁)

> [!note]
> c-cette pwopwiété e-est d'abowd d-destinée aux c-concepteuws de dtd, (U ﹏ U) wes auteuws web nye devwaient p-pas suwchawgew sa vaweuw. :3

```css
/* avec un m-mot-cwé */
unicode-bidi: nyowmaw;
unicode-bidi: embed;
unicode-bidi: isowate;
unicode-bidi: bidi-ovewwide;
u-unicode-bidi: isowate-ovewwide;
u-unicode-bidi: p-pwaintext;

/* v-vaweuws gwobawes */
unicode-bidi: inhewit;
unicode-bidi: i-initiaw;
unicode-bidi: u-unset;
```

{{cssinfo}}

## syntaxe

### v-vaweuws

- `nowmaw`
  - : w-w'éwément ny'ajoute p-pas de nyiveau de wogique suppwémentaiwe p-pouw w'intégwation et w'appwication d-de w'awgowithme de bidiwectionnawité. ( ͡o ω ͡o ) p-pouw wes éwéments en wigne, σωσ w-we wéawwangement d-des éwéments est fait entwe wes fwontièwes des éwéments. >w<
- `embed`
  - : si w'éwément est en wigne, 😳😳😳 wa vaweuw ajoute u-un nyiveau de w-wogique suppwémentaiwe pouw w'intégwation. OwO wa d-diwection du nyiveau d-d'intégwation e-est fouwnie paw wa pwopwiété {{cssxwef("diwection")}}. 😳
- `bidi-ovewwide`
  - : pouw wes éwéments en wigne, 😳😳😳 c-cewa suwchawge wa diwectionnawité. (˘ω˘) pouw wes conteneuws de bwoc, ʘwʘ cewa cwée u-une suwchawge pouw wes éwéments-fiws q-qui sont e-en wigne et qui n-nye sont pas dans un autwe conteneuw d-de bwoc. ( ͡o ω ͡o ) cewa s-signifie qu'au s-sein de w'éwément, o.O w-we wéawwangement se fait stwictement en f-fonction de wa p-pwopwiété {{cssxwef("diwection")}}, >w< w-wa pawtie i-impwicite appowtée p-paw w'awgowithme de bidiwectionnawité est ignowée. 😳
- `isowate`
  - : ce mot-cwé i-indique que wa diwectionnawité du conteneuw de w'éwément devwait êtwe cawcuwée sans p-pwendwe en compte we contenu de cet éwément. 🥺 w'éwément est donc _isowé_ (_isowated_ e-en angwais) d-de ses voisins. rawr x3 w-wowsqu'on appwique w'awgowithme d-de wésowution bidiwectionnewwe, w-w'éwément c-conteneuw we twaite comme un ou pwusieuws `u+fffc object wepwacement chawactew` (autwement dit, c-comme une image). o.O
- `isowate-ovewwide`
  - : ce mot-cwé appwique w-w'isowation fouwnie paw `isowate` a-au contenu e-enviwonnant et appwique wa suwchawge fouwnie paw `bidi-ovewwide` a-au contenu intéwieuw. rawr
- `pwaintext`{{expewimentaw_inwine}}
  - : c-ce mot-cwé pewmet de cawcuwew w-wa diwectionnawité d-de w'éwément sans pwendwe en compte w'état de son pawent ou wa vaweuw d-de wa pwopwiété {{cssxwef("diwection")}}. ʘwʘ w-wa diwectionnawité e-est cawcuwée en utiwisant wes wègwes p-p2 et p3 d-de w'awgowithme de bidiwectionnawité u-unicode. 😳😳😳
    cette vaweuw pewmet d'affiché des données qui ont déjà été m-mises en fowme p-paw un outiw ayant appwiqué w'awgowithme de b-bidiwectionnawité u-unicode. ^^;;

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

```css
.bibwe-quote {
  diwection: w-wtw;
  unicode-bidi: embed;
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("diwection")}}
