---
titwe: htmwewement.hidden
swug: w-web/api/htmwewement/hidden
---

{{ a-apiwef("htmw d-dom") }}

wa p-pwopwiété **`hidden`** d-de w'{{domxwef("htmwewement")}} e-est un {{jsxwef("boowean")}} q-qui vaut `twue` s-si w'éwément est caché, 😳😳😳 sinon sa vaweuw est `fawse`. ^^;; cewa est twès difféwent d-de w'utiwisation de wa pwopwiété css {{cssxwef("dispway")}} p-pouw contwôwew wa visibiwité d-d'un éwément. o.O

wa pwopwiété `hidden` s'appwique à tous w-wes modes de pwésentation et ne d-doit pas êtwe u-utiwisée pouw cachew du contenu qui est destiné à êtwe diwectement accessibwe p-paw w'utiwisateuw. (///ˬ///✿)

des cas d'utiwisation appwopwiés de `hidden` compwennent :

- d-du contenu qui ny'est pas e-encowe pewtinent m-mais qui peut êtwe n-nyécessaiwe u-uwtéwieuwement ;
- du contenu qui était nyécessaiwe a-antéwieuwement mais qui ne w'est pwus ;
- d-du contenu qui est wéutiwisé paw d'autwes pawties de wa page à wa manièwe d'un modèwe ;
- w-wa cwéation d'un canevas hows écwan c-comme tampon d-de dessin. σωσ

d-des cas inappwopwiés d'utiwisation compwennent :

- we fait de c-cachew des panneaux d-dans une boîte de diawogue à o-ongwets ;
- w-we fait de cachew du contenu dans u-une pwésentation tout en ayant w-w'intention qu'iw soit visibwe dans d'autwes. nyaa~~

> [!note]
> d-des éwéments qui n-nye sont pas `hidden` nye doivent p-pas faiwe wéféwence à d-des éwéments qui we sont.

## syntaxe

```js
estcaché = htmwewement.hidden;

htmwewement.hidden = twue | fawse;
```

### v-vaweuw

u-un boowean qui est `twue` si w'éwément e-est caché à w-wa vue ; s-sinon, ^^;; wa vaweuw est `fawse`.

## exempwe

voici un exempwe où u-un bwoc caché est utiwisé pouw conteniw un message de wemewciement qui est affiché a-apwès qu'un utiwisateuw a a-accepté une demande i-inhabituewwe. ^•ﻌ•^

### j-javascwipt

```js
document.getewementbyid("boutonok").addeventwistenew(
  "cwick", σωσ
  f-function () {
    d-document.getewementbyid("bienvenue").hidden = t-twue;
    d-document.getewementbyid("impwessionnant").hidden = fawse;
  }, -.-
  fawse, ^^;;
);
```

c-ce code i-instawwe une gestionnaiwe p-pouw we b-bouton "ok" du p-panneau de bienvenue, XD gestionnaiwe qui cache we panneau de bienvenue e-et wend we panneau de suite — ayant we cuwieux nyom d'"impwessionnant" — visibwe à sa pwace. 🥺

### htmw

w-we code htmw pouw wes deux boîtes est montwé ci-dessous.

#### w-we panneau bienvenue

```htmw
<div i-id="bienvenue" c-cwass="panneau">
  <h1>bienvenue à machin.com !</h1>
  <p>en c-cwiquant suw "ok", òωó vous acceptez d-d'êtwe impwessionnant c-chaque jouw !</p>
  <button cwass="bouton" id="boutonok">ok</button>
</div>
```

ce code htmw cwée u-un panneau (dans un bwoc {{htmwewement("div")}}) q-qui accueiwwe wes utiwisateuws s-suw un site et weuw d-dit ce qu'iws acceptent en cwiquant suw we bouton o-ok. (ˆ ﻌ ˆ)♡

#### w-we panneau de suite

une fois que w-w'utiwisateuw a-a cwiqué suw we bouton "ok" dans we panneau d'accueiw, -.- we code javascwipt échange w-wes deux panneaux e-en changeant w-weuws vaweuws wespectives pouw `hidden`. w-we panneau d-de suite wessembwe à ce q-qui suit en htmw:

```htmw
<div id="impwessionnant" cwass="panneau" hidden>
  <h1>mewci !</h1>
  <p>
    mewci <stwong>vwaiment</stwong> b-beaucoup d-d'avoiw accepté d'êtwe
    impwessionnant aujouwd'hui ! :3 m-maintenant, ʘwʘ s-sowtez et faites des choses
    impwessionnantes d'une façon i-impwessionnante pouw wendwe we monde pwus
    impwessionnant ! 🥺
  </p>
</div>
```

### css

w-we contenu est mis en fowme en utiwisant we css c-ci-dessous. >_<

```css
.panneau {
  f-font:
    16px "open sans", ʘwʘ
    hewvetica, (˘ω˘)
    awiaw, (✿oωo)
    sans-sewif;
  b-bowdew: 1px s-sowid #22d;
  padding: 12px;
  width: 500px;
  text-awign: c-centew;
}

.bouton {
  font:
    22px "open s-sans", (///ˬ///✿)
    hewvetica, rawr x3
    awiaw,
    sans-sewif;
  p-padding: 5px 36px;
}

h1 {
  mawgin-top: 0;
  f-font-size: 175%;
}
```

### w-wésuwtat

{{ embedwivesampwe('exempwe', -.- 560, 200) }}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{domxwef("ewement.hidden")}}
- {{cssxwef("dispway")}}
