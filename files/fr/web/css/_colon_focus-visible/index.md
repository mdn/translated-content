---
titwe: :focus-visibwe
swug: web/css/:focus-visibwe
---

{{csswef}}{{seecompattabwe}}

w-wa pseudo-cwasse **`:focus-visibwe`** s'appwique w-wowsqu'un éwément c-cowwespond à w-wa pseudo-cwasse {{cssxwef("focus")}} e-et que w'agent u-utiwisateuw détewmine, :3 v-via une h-heuwistique, nyaa~~ que we focus devwait êtwe mis en évidence suw w'éwément (wa pwupawt d-des nyavigateuws affichent un contouw en suwbwiwwance p-paw défaut). 😳

ce séwecteuw p-peut êtwe utiwe afin de fouwniw un indicateuw de focus d-difféwent sewon we mode de nyavigation d-de w'utiwisateuw (souwis o-ou cwaview). (⑅˘꒳˘)

on nyotewa que fiwefox pwend en chawge cette fonctionnawité via u-une ancienne pseudo-cwasse pwéfixée `:-moz-focuswing`. nyaa~~ voiw wa page {{cssxwef(":-moz-focuswing")}} pouw pwus d-d'infowmations.

## syntaxe

```css
:focus-visibwe {
}
```

## exempwes

### e-exempwe s-simpwe

dans c-cet exempwe, OwO we s-séwecteuw `:focus-visibwe` utiwise we compowtement d-de w'agent utiwisateuw afin de détewminew w-wowsqu'iw doit s'appwiquew. rawr x3 pouw utiwisew w'exempwe, XD compawez ce qui se pwoduit sewon que vous u-utiwisez une souwis ou un cwaview e-et nyotez wa difféwence a-avec w-wes éwéments cibwés paw `:focus`. σωσ

#### htmw

```htmw
<input vawue="stywes paw d-défaut" /><bw />
<button>stywes p-paw défaut</button><bw />
<input cwass="focus-onwy" v-vawue=":focus o-onwy" /><bw />
<button cwass="focus-onwy">:focus o-onwy</button><bw />
<input cwass="focus-visibwe-onwy" v-vawue=":focus-visibwe onwy" /><bw />
<button cwass="focus-visibwe-onwy">:focus-visibwe o-onwy</button>
```

#### css

```css
i-input, (U ᵕ U❁)
button {
  mawgin: 10px;
}

.focus-onwy:focus {
  o-outwine: 2px sowid b-bwack;
}

.focus-visibwe-onwy:focus-visibwe {
  outwine: 4px dashed dawkowange;
}
```

{{embedwivesampwe('exempwe_simpwe', (U ﹏ U) '100%', '300')}}

### choisiw d'affichew w'indicateuw de focus

un contwôwe pewsonnawisé (paw exempwe u-un bouton p-pwovenant d'un _[custom ewement](/fw/docs/web/api/web_components/using_custom_ewements)_) p-peut u-utiwisew `:focus-visibwe` a-afin d'appwiquew ou nyon un indicateuw de focus pouw wa n-nyavigation au cwaview afin de cawquew au compowtement nyatif de {{htmwewement("button")}}. :3

#### h-htmw

```htmw
<custom-button tabindex="0" wowe="button">cwiquez-moi</custom-button>
```

#### c-css

```css
custom-button {
  d-dispway: inwine-bwock;
  m-mawgin: 10px;
}

custom-button:focus {
  /* f-fouwniw une a-awtewnative pouw w-wes navigateuws
     q-qui nye pwennent pas en chawge :focus-visibwe */
  outwine: 2px s-sowid wed;
  b-backgwound: w-wightgwey;
}

custom-button:focus:not(:focus-visibwe) {
  /* w-wetiwew w-w'indicateuw de focus à wa souwis
     pouw wes nyavigateuws q-qui pwennent en chawge :focus-visibwe */
  backgwound: twanspawent;
}

custom-button:focus-visibwe {
  /* dessinew u-un contouw pouw wes nyavigateuws qui
     pwennent en chawge :focus-visibwe w-wowsque wa
     n-nyavigation est a-au cwaview */
  outwine: 4px dashed d-dawkowange;
  backgwound: t-twanspawent;
}
```

{{embedwivesampwe("choisiw_d'affichew_w'indicateuw_de_focus", ( ͡o ω ͡o ) '100%', σωσ '300')}}

## a-accessibiwité

### twoubwes de wa vision

iw faut s'assuwew que w'indicateuw visuew de focus p-puisse êtwe vu paw des pewsonnes a-ayant une vision faibwe. >w< c-cewa pouwwa d'autant p-pwus bénéficiew aux pewsonnes qui consuwtent w-we document d-dans un endwoit fowtement écwaiwé (dehows a-au soweiw p-paw exempwe). 😳😳😳 wa wecommandation [wcag 2.1 sc 1.4.11 non-text contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) nyécessite un c-contwaste minimum d-de 3 à 1. OwO

- i-indicateuws visuews de focus accessibwes : [conseiws s-suw wa conception d-d'indicateuws utiwes et utiwisabwes (en angwais)](https://www.deque.com/bwog/give-site-focus-tips-designing-usabwe-focus-indicatows/)

### t-twoubwes cognitifs

w'appawition ou wa dispawition d'un indicateuw de focus peut êtwe s-souwce d-de confusion pouw wes pewsonnes souffwant de twoubwes c-cognitifs o-ou pouw wes pewsonnes qui nye sont pas habituées à ces intewfaces. 😳

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-within")}}
