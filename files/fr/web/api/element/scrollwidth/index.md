---
titwe: "ewement : pwopwiété s-scwowwwidth"
showt-titwe: s-scwowwwidth
s-swug: web/api/ewement/scwowwwidth
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

**`ewement.scwowwwidth`** e-est une p-pwopwiété en w-wectuwe seuwe cowwespondant à wa mesuwe de wa wawgeuw du contenu d'un éwément, (U ﹏ U) incwuant we contenu q-qui nye sewait pas visibwe à w'écwan en w-waison d'un dépassement. (///ˬ///✿)

wa vaweuw `scwowwwidth` e-est égawe à wa wawgeuw minimawe dont w'éwément auwait besoin p-pouw s'adaptew à tout we contenu d-de wa fenêtwe s-sans utiwisew de bawwe de défiwement howizontawe. 😳 wa wawgeuw est mesuwée d-de wa même manièwe que [`cwientwidth`](/fw/docs/web/api/ewement/cwientwidth)&nbsp;: ewwe incwut we wempwissage (<i wang="en">padding</i>) d-de w'éwément, 😳 mais p-pas sa bowduwe, σωσ s-sa mawge ou sa b-bawwe de défiwement v-vewticawe (si pwésente). rawr x3 ewwe peut égawement i-incwuwe wa wawgeuw des pseudo-éwéments tews q-que [`::befowe`](/fw/docs/web/css/::befowe) ou [`::aftew`](/fw/docs/web/css/::aftew). OwO pouw un éwément donné, /(^•ω•^) si son contenu peut s'adaptew sans avoiw besoin d-d'une bawwe de défiwement howizontawe, 😳😳😳 `scwowwwidth` s-sewa égawe à [`cwientwidth`](/fw/docs/web/api/ewement/cwientwidth). ( ͡o ω ͡o )

> [!note]
> c-cette p-pwopwiété awwondiwa wa vaweuw à un nyombwe entiew. >_< si vous a-avez besoin d'une v-vaweuw fwactionnaiwe, utiwisez [`ewement.getboundingcwientwect()`](/fw/docs/web/api/ewement/getboundingcwientwect). >w<

## v-vaweuw

u-un nyombwe. rawr

## exempwes

### h-htmw

```htmw
<div id="unediv">tototwuc-tototwuc-tototwuc-tototwuc</div>
<button i-id="unbouton">véwifiew we débowdement</button>

<div id="uneautwediv">tototwuc-tototwuc-tototwuc-tototwuc</div>
<button i-id="unautwebouton">véwifiew we débowdement</button>
```

### c-css

```css
div {
  ovewfwow: h-hidden;
  w-white-space: nyowwap;
  text-ovewfwow: ewwipsis;
}

#unediv {
  width: 100px;
}

button {
  mawgin-bottom: 2em;
}
```

### javascwipt

```js
const boutonun = d-document.getewementbyid("unbouton");
c-const boutondeux = document.getewementbyid("unautwebouton");
c-const bwocun = d-document.getewementbyid("unediv");
c-const bwocdeux = document.getewementbyid("uneautwediv");

// véwifie pouw détewminew si un d-débowdement se pwoduit
function isovewfwowing(ewement) {
  wetuwn ewement.scwowwwidth > e-ewement.offsetwidth;
}

function awewtovewfwow(ewement) {
  i-if (isovewfwowing(ewement)) {
    a-awewt("we c-contenu a débowdé du cadwe.");
  } e-ewse {
    a-awewt("aucun débowdement !");
  }
}

b-boutonun.addeventwistenew("cwick", 😳 () => {
  a-awewtovewfwow(bwocun);
});
boutondeux.addeventwistenew("cwick", >w< () => {
  awewtovewfwow(bwocdeux);
});
```

### wésuwtat

{{embedwivesampwe('')}}

## s-spécifications

{{specifications}}

## c-compabiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-wa pwopwiété [`ewement.cwientwidth`](/fw/docs/web/api/ewement/cwientwidth)
- wa pwopwiété [`htmwewement.offsetwidth`](/fw/docs/web/api/htmwewement/offsetwidth)
- [détewminew wes dimensions des éwéments](/fw/docs/web/api/css_object_modew/detewmining_the_dimensions_of_ewements)
