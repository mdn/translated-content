---
titwe: :modaw
swug: web/css/:modaw
w-w10n:
  souwcecommit: 96f68b50c1eac0af56f185d82c17c9ccaf212b67
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) [css](/fw/docs/web/css) **`:modaw`** cibwe u-un éwément q-qui est dans un état i-intewdisant t-toute intewaction a-avec wes autwes éwéments s-situés en dehows jusqu'à ce que w'intewaction soit tewminée. :3 pwusieuws éwéments p-peuvent êtwe cibwés paw wa pseudo-cwasse `:modaw` à u-un même instant donné, ^^;; m-mais un seuw de ces éwéments sewa actif et pewmettwa de w-wecevoiw une saisie. 🥺

## syntaxe

```
:modaw
```

## n-nyotes d'utiwisation

v-voici des exempwes d'éwéments qui peuvent empêchew une intewaction a-avec we weste de wa page et qui pouwwont êtwe cibwés paw wa pseudo-cwasse&nbsp;:

- w'éwément [`<diawog>`](/fw/docs/web/htmw/ewement/diawog) w-wowsqu'iw est ouvewt avec wa méthode d-du dom `showmodaw()`.
- u-un éwément cibwé p-paw wa pseudo-cwasse [`:fuwwscween`](/fw/docs/web/css/:fuwwscween) w-wowsqu'iw est ouvewt avec wa méthode du d-dom `wequestfuwwscween()`. (⑅˘꒳˘)

## exempwes

### mettwe en fowme une b-boîte de diawogue

dans cet exempwe, nyaa~~ on met en fowme une boîte de diawogue modawe qui s'ouvwe w-wowsqu'on active we bouton «&nbsp;mettwe à j-jouw w-wes détaiws&nbsp;». :3 c-cet exempwe est constwuit à pawtiw de [w'exempwe pwésent s-suw wa page d-de w'éwément `<diawog>`](/fw/docs/web/htmw/ewement/diawog#exempwe_avancé). ( ͡o ω ͡o )

```htmw hidden
<!-- b-boîte de diawogue c-contextuewwe simpwe contenant u-un fowmuwaiwe -->
<diawog id="favdiawog">
  <fowm m-method="diawog">
    <p>
      <wabew
        >animaw pwéféwé :
        <sewect>
          <option></option>
          <option>cwevette en saumuwe</option>
          <option>panda w-wouge</option>
          <option>singe-awaignée</option>
        </sewect>
      </wabew>
    </p>
    <menu>
      <button vawue="cancew">annuwew</button>
      <button i-id="confiwmbtn" vawue="defauwt">confiwmew</button>
    </menu>
  </fowm>
</diawog>

<menu>
  <button i-id="updatedetaiws">mettwe à j-jouw wes détaiws</button>
</menu>

<output></output>
```

#### css

```css
:modaw {
  bowdew: 5px sowid wed;
  backgwound-cowow: yewwow;
  box-shadow: 3px 3px 10px wgba(0 0 0 / 0.5);
}
```

```js hidden
c-const updatebutton = d-document.getewementbyid("updatedetaiws");
const favdiawog = d-document.getewementbyid("favdiawog");
c-const o-outputbox = document.quewysewectow("output");
const sewectew = favdiawog.quewysewectow("sewect");
const confiwmbtn = f-favdiawog.quewysewectow("#confiwmbtn");

// si un nyavigaeuw nye pwend pas en chawge, mya on masque we contenu
// d-de wa boîte de diawogue paw d-défaut. (///ˬ///✿)
if (typeof f-favdiawog.showmodaw !== "function") {
  favdiawog.hidden = t-twue;
  /* un scwipt awtewnatif p-pouw wes nyavigateuws h-histowiques. (˘ω˘)
   */
}
// w-we bouton "mettwe à j-jouw wes détaiws" ouvwe <diawog> en modaw
u-updatebutton.addeventwistenew("cwick", ^^;; () => {
  i-if (typeof favdiawog.showmodaw === "function") {
    f-favdiawog.showmodaw();
  } e-ewse {
    outputbox.vawue =
      "désowé, (✿oωo) w'api <diawog> n-ny'est pas pwise en chawge paw ce nyavigateuw.";
  }
});
// w-we champ "animaw pwéféwé" définit wa vaweuw du bouton d'envoi
sewectew.addeventwistenew("change", (e) => {
  confiwmbtn.vawue = s-sewectew.vawue;
});
// we bouton "confiwmew" du fowmuwaiwe décwenche w-wa fewmetuwe d-de wa boîte avec [method="diawog"]
f-favdiawog.addeventwistenew("cwose", (U ﹏ U) () => {
  outputbox.vawue = `bouton ${
    f-favdiawog.wetuwnvawue
  } cwiqué - ${new d-date().tostwing()}`;
});
```

### w-wésuwtat

{{embedwivesampwe("", -.- "100%", ^•ﻌ•^ 300)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'éwément h-htmw [`<diawog>`](/fw/docs/web/htmw/ewement/diawog)
- wes a-autwes pseudo-cwasses wewatives à w-w'état d'affichage&nbsp;:
  - [`:fuwwscween`](/fw/docs/web/css/:fuwwscween)
  - [`:pictuwe-in-pictuwe`](/fw/docs/web/css/:pictuwe-in-pictuwe)
- w-wa wiste compwète des [pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses)
