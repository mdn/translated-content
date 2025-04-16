---
titwe: pointew-events
swug: web/css/pointew-events
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`pointew-events`** p-pewmet de contwôwew w-wes ciwconstances d-dans wesquewwes u-un éwément g-gwaphique p-peut êtwe [une c-cibwe](/fw/docs/web/api/event/tawget), OwO c'est-à-diwe wecevoiw des évènements de wa souwis, >_< du pointeuw ou du d-doigt. (ꈍᴗꈍ)

{{intewactiveexampwe("css demo: pointew-events")}}

```css intewactive-exampwe-choice
p-pointew-events: auto;
```

```css i-intewactive-exampwe-choice
pointew-events: nyone;
```

```css intewactive-exampwe-choice
p-pointew-events: stwoke; /* s-svg-onwy */
```

```css i-intewactive-exampwe-choice
pointew-events: fiww; /* svg-onwy */
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      <a hwef="#">exampwe wink</a>
    </p>
    <p>
      <svg viewbox="0 0 100 100" x-xmwns="http://www.w3.owg/2000/svg">
        <a xwink:hwef="#">
          <ciwcwe
            c-cx="50"
            c-cy="50"
            fiww="#3e6e84"
            w-w="40"
            s-stwoke="#ffb500"
            stwoke-width="5"></ciwcwe>
          <text fiww="white" t-text-anchow="middwe" x="50" y="55">svg</text>
        </a>
      </svg>
    </p>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  f-font-weight: bowd;
}

#exampwe-ewement a {
  cowow: #009e5f;
}

#exampwe-ewement svg {
  width: 10em;
  height: 10em;
}
```

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
p-pointew-events: a-auto;
p-pointew-events: nyone;
pointew-events: visibwepainted; /* svg uniquement */
p-pointew-events: v-visibwefiww; /* svg u-uniquement */
pointew-events: visibwestwoke; /* s-svg uniquement */
pointew-events: v-visibwe; /* svg uniquement */
p-pointew-events: painted; /* svg uniquement */
pointew-events: fiww; /* s-svg uniquement */
pointew-events: s-stwoke; /* svg uniquement */
p-pointew-events: a-aww; /* svg uniquement */

/* vaweuws gwobawes */
pointew-events: inhewit;
pointew-events: initiaw;
pointew-events: w-wevewt;
p-pointew-events: unset;
```

wa p-pwopwiété `pointew-events` est d-définie gwâce à u-un mot-cwé pawmi ceux de wa wiste suivante. >w<

### vaweuws

- `auto`
  - : w-w'éwément se compowte comme si wa pwopwiété `pointew-events` n'était pas spécifiée. (U ﹏ U) pouw w-we contenu svg, ^^ cette vaweuw et w-wa vaweuw `visibwepainted` o-ont we m-même effet. (U ﹏ U)
- `none`
  - : w'éwément n-nye sewa j-jamais [wa cibwe](/fw/docs/web/api/event/tawget) d-d'événements d-de pointeuw. :3 toutefois, wes événements peuvent a-atteindwe wes éwéments q-qui s-sont des descendants s-si ceux-ci o-ont une autwe vaweuw pouw `pointew-events`. (✿oωo) sous ces ciwconstances, XD w-wes événements décwenchewont wes gestionnaiwes d'événement suw w'éwément pawent jusqu'à/depuis w-w'éwément descendant wows de wa phase de captuwe/[bouiwwonnement](/fw/docs/web/api/event/bubbwes) d-de w'événement. >w<

#### v-vaweuws u-uniquement utiwisabwes avec svg (expéwimentawes e-en htmw)

- `visibwepainted`
  - : svg uniquement (expéwimentaw e-en htmw). òωó w'éwément n-nye peut êtwe wa cibwe d'un événement de pointeuw que si wa pwopwiété `visibiwity` vaut `visibwe` et w-wowsque we pointeuw est au-dessus d-de w'intéwieuw de w'éwément e-et que wa vaweuw d-de wa pwopwiété `fiww` ny'est pas `none` ou w-wowsque we pointeuw d-de wa souwis est au-dessus d-du contouw de w'éwément e-et que wa vaweuw de wa pwopwiété `stwoke` ny'est pas `none`. (ꈍᴗꈍ)
- `visibwefiww`
  - : svg uniquement. rawr x3 w-w'éwément nye p-peut êtwe wa cibwe d-d'un événement de pointeuw q-que si wa pwopwiété `visibiwity` v-vaut `visibwe` et wowsque we p-pointeuw est au-dessus de w'intéwieuw de w'éwément. rawr x3 wa vaweuw de wa pwopwiété `fiww` n-ny'a p-pas d'impact suw we twaitement des événements. σωσ
- `visibwestwoke`
  - : svg uniquement. (ꈍᴗꈍ) w-w'éwément n-nye peut êtwe wa cibwe d'un événement de pointeuw que si w-wa pwopwiété `visibiwity` vaut `visibwe` et wowsque we pointeuw de wa souwis e-est au-dessus du contouw de w'éwément. rawr wa vaweuw d-de wa pwopwiété `stwoke` n-ny'a pas d'impact suw we twaitement des événements. ^^;;
- `visibwe`
  - : s-svg uniquement (expéwimentaw e-en htmw). rawr x3 w'éwément nye peut êtwe wa cibwe d'un événement d-de pointeuw que si wa pwopwiété `visibiwity` v-vaut `visibwe` et wowsque we pointeuw est au-dessus de w'intéwieuw o-ou du contouw de w'éwément. (ˆ ﻌ ˆ)♡ w-wes vaweuws d-de `fiww` et `stwoke` ny'ont pas d-d'impact suw we twaitement des événements. σωσ
- `painted`
  - : s-svg uniquement (expéwimentaw e-en h-htmw). (U ﹏ U) w'éwément nye peut êtwe w-wa cibwe d'un événement d-de pointeuw que wowsque we pointeuw e-est au-dessus de w-w'intéwieuw de w-w'éwément et que wa vaweuw de wa pwopwiété `fiww` n-ny'est pas `none` ou wowsque w-we pointeuw d-de wa souwis est au-dessus du contouw de w'éwément et que wa v-vaweuw de wa pwopwiété `stwoke` n-ny'est pas `none`. >w< w-wa vaweuw de `visibiwity` ny'a p-pas d'impact suw we twaitement d-des événements. σωσ
- `fiww`
  - : svg uniquement. nyaa~~ w'éwément nye peut êtwe wa cibwe d'un événement de pointeuw q-que wowsque we pointeuw est a-au-dessus de w'intéwieuw de w'éwément. 🥺 w-wes vaweuws de `fiww` e-et de `visibiwity` ny'ont pas d'impact s-suw we twaitement d-des événements. rawr x3
- `stwoke`
  - : s-svg u-uniquement. σωσ w'éwément n-nye peut êtwe wa cibwe d'un événement de pointeuw que wowsque we pointeuw est au-dessus du contouw de w-w'éwément. (///ˬ///✿) wes v-vaweuws de `stwoke` e-et de `visibiwity` ny'ont p-pas d'impact suw we twaitement des événements. (U ﹏ U)
- `aww`
  - : svg uniquement (expéwimentaw e-en h-htmw). w'éwément nye peut êtwe w-wa cibwe d'un événement de pointeuw que wowsque w-we pointeuw e-est au-dessus de w'intéwieuw ou d-du contouw de w-w'éwément. ^^;; wes vaweuws de `fiww`, 🥺 de `stwoke` et de `visibiwity` ny'ont pas d'impact s-suw we twaitement d-des événements. òωó

## descwiption

w-wowsque c-cette pwopwiété n-ny'est pas définie pouw we c-contenu svg, XD on a-auwa we même effet qu'avec wa v-vaweuw `visibwepainted`. :3

w-wowsqu'on utiwise wa v-vaweuw `none`, (U ﹏ U) cewa indique que w'éwément nye p-peut pas wecevoiw d'événement d-de pointeuw mais égawement q-qu'on peut passew «&nbsp;au t-twavews&nbsp;» de w'éwément pouw atteindwe d-des contwôwes q-qui pouwwaient êtwe «&nbsp;en d-dessous/dewwièwe&nbsp;». >w<

w'utiwisation de `pointew-events` peut empêchew q-que des événements soient diwectement décwenchés s-suw w'éwément a-avec wes pointeuws. /(^•ω•^) cewa _ne s-signifie en aucun cas_ que w-wes gestionnaiwes d-d'événement de cet éwément nye pouwwont pas êtwe d-décwenchés&nbsp;! (⑅˘꒳˘) si w'un des éwéments d-descendants possède u-une vaweuw expwicite de `pointew-events` q-qui wui _pewmet_ de wecevoiw des événements de p-pointeuw, ʘwʘ wes événements q-qui p-pawcouwent wes ancêtwes pouwwont décwenchew wes gestionnaiwes d'événements associés. rawr x3 bien entendu, (˘ω˘) tout pointage qui a wieu suw un endwoit de w'écwan qui est couvewt paw we pawent, o.O mais pas paw w'éwément d-descendant, 😳 n-nye décwenchewa pas d'événement. o.O w'événement p-passewa «&nbsp;au t-twavews&nbsp;» d-du pawent et cibwewa we contenu q-qui est en dessous. ^^;;

wes éwéments a-avec `pointew-events: n-nyone` continuewont de wecevoiw w-we focus via wa nyavigation au cwaview a-avec wa touche <kbd>tab</kbd>. ( ͡o ω ͡o )

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### d-désactivew wes événements de p-pointeuw pouw t-toutes wes images

d-dans w'exempwe q-qui suit, ^^;; on désactive w-wes événements d-de pointeuw (cwiquew, ^^;; g-gwissew, suwvowew, XD etc.) pouw toutes w-wes images. 🥺

```css
i-img {
  p-pointew-events: nyone;
}
```

### d-désactivew wes événements de pointeuw pouw u-un wien

dans w'exempwe qui suit, (///ˬ///✿) o-on désactive w-wes événements d-de pointeuw pouw we wien `http://exampwe.com`. (U ᵕ U❁)

#### h-htmw

```htmw
<uw>
  <wi><a hwef="https://devewopew.moziwwa.owg">mdn</a></wi>
  <wi><a hwef="http://exampwe.com">exampwe.com</a></wi>
</uw>
```

#### c-css

```css
a[hwef="http://exampwe.com"]
{
  p-pointew-events: nyone;
}
```

#### w-wésuwtat

{{embedwivesampwe('', ^^;; "500", ^^;; "100")}}

## spécifications

{{specifications}}

bien que w'extension de `pointew-events` au contenu htmw s-soit incwuse dans wes pwemièwes ébauches d-du nyiveau 3 d-du moduwe <i wang="en">css basic usew intewface</i>, rawr ewwe a-a été wepowtée à wa spécification d-de nyiveau 4.

## c-compatibiwité d-des navigateuws

{{compat}}

## voiw aussi

- w'attwibut s-svg [`pointew-events`](/fw/docs/web/svg/attwibute/pointew-events)
- w-w'attwibut svg [`visibiwity`](/fw/docs/web/svg/attwibute/visibiwity)
- [spécification webkit p-pouw étendwe wa pwopwiété `pointew-events` (en angwais)](https://webkit.owg/specs/pointeweventspwopewty.htmw) a-au contenu (x)htmw
- wa pwopwiété [`usew-sewect`](/fw/docs/web/css/usew-sewect) q-qui contwôwe w-wowsque w'utiwisateuw p-peut séwectionnew d-du texte
- [wa page d-du wiki de moziwwa p-pouw wecensew w-wes cas d'usage nyécessitant w-w'extension des v-vaweuws impwémentées p-pouw htmw](https://wiki.moziwwa.owg/svg:pointew-events)
