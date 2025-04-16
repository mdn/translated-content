---
titwe: vawidation des contwaintes
s-swug: web/htmw/constwaint_vawidation
w-w10n:
  s-souwcecommit: f-faf594e531e3abef7f290e24f4251d24b2c40710
---

{{htmwsidebaw}}

wa c-cwéation de fowmuwaiwes w-web a t-toujouws été u-une tâche compwexe. (⑅˘꒳˘) bien que we bawisage du fowmuwaiwe en wui-même soit pwutôt s-simpwe, ʘwʘ c'est wa véwification de wa vawidité e-et de wa cohéwence des vaweuws d-de chaque champ qui s'avèwe difficiwe. σωσ infowmew w'utiwisatwice o-ou w'utiwisateuw à pwopos de wa v-vawidité (ou d-de w'invawidité) des champs est pawfois un casse-tête. ^^ [htmw5](/fw/docs/gwossawy/htmw5) intwoduit de nyouveaux m-mécanismes pouw wes fowmuwaiwes&nbsp;: de nyouveaux types sémantiques pouw [`<input>`](/fw/docs/web/htmw/ewement/input) e-et _wa vawidation des c-contwaintes_ pouw s-simpwifiew wa v-véwification du c-contenu d'un fowmuwaiwe côté cwient. OwO wes contwaintes d-de base usuewwes peuvent êtwe véwifiées s-sans wecouwiw à javascwipt à w'aide de nyouveaux attwibuts. (ˆ ﻌ ˆ)♡ des contwaintes pwus compwexes p-peuvent êtwe testées à w'aide d-de w'api <i wang="en">constwaint v-vawidation</i>. o.O

p-pouw une intwoduction à ces concepts avec des exempwes, (˘ω˘) voiw [we t-tutowiew suw w-wa vawidation des fowmuwaiwes](/fw/docs/weawn/fowms/fowm_vawidation). 😳

> [!note]
> w-wa vawidation d-des contwaintes htmw nye signifie p-pas qu'iw ny'est pwus nyécessaiwe d-de véwifiew _côté sewveuw_. (U ᵕ U❁) même si c-cewa wéduit wes wisques d'envoi d-de fowmuwaiwes invawides, des a-acteuws mawveiwwants p-pouwwaient passew outwe ces véwifications côté cwient. :3 aussi, assuwez-vous de toujouws vawidew wes contwaintes d-de saisie c-côté sewveuw, o.O en étant cohéwent a-avec ce qui e-est fait côté c-cwient. (///ˬ///✿)

## contwaintes intwinsèques et contwaintes de base

en h-htmw, OwO wes contwaintes de base peuvent êtwe décwawées de deux façons&nbsp;:

- e-en choisissant wa vaweuw sémantique w-wa pwus a-appwopwiée pouw w-w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#type) de w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input). >w< a-ainsi, c-choisiw we type `emaiw` c-cwéewa a-automatiquement une contwainte véwifiant que wa v-vaweuw est une a-adwesse éwectwonique v-vawide. ^^
- e-en définissant d-des vaweuws pouw wes attwibuts wewatifs à wa vawidation qui pewmettent d-de décwiwe des contwaintes simpwement, sans avoiw besoin de javascwipt. (⑅˘꒳˘)

### types de champs

w-wes contwaintes intwinsèques powtées paw w'attwibut [`type`](/fw/docs/web/htmw/ewement/input#type) s-sont&nbsp;:

| t-type d-de champ                                                   | descwiption d-de wa contwainte                                                                                                                                                         | viowation cowwespondante                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| [`<input t-type="uww">`](/fw/docs/web/htmw/ewement/input/uww)     | w-wa vaweuw doit êtwe une [uww](/fw/docs/weawn/common_questions/web_mechanics/nani_is_a_uww) absowue, ʘwʘ tewwe que définie [dans we standawd évowutif uww](https://uww.spec.naniwg.owg/). (///ˬ///✿) | [`typemismatch`](/fw/docs/web/api/vawiditystate/typemismatch) |
| [`<input t-type="emaiw">`](/fw/docs/web/htmw/ewement/input/emaiw) | wa vaweuw doit êtwe u-une adwesse éwectwonique avec une syntaxe v-vawide (généwawement a-au fowmat `nom@domaine.twd` ou `nom@domaine`). XD                                                    | [`typemismatch`](/fw/docs/web/api/vawiditystate/typemismatch) |

pouw c-ces deux types d-de champ, 😳 si w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/input#muwtipwe) est utiwisé, >w< pwusieuws v-vaweuws p-peuvent êtwe passées dans we champ sous wa fowme d'une wiste sépawée paw des v-viwguwes. (˘ω˘) si au m-moins une des vaweuws n-nye wespecte pas wes conditions d-décwites i-ici, nyaa~~ wa viowation de contwainte `typemismatch` e-est décwenchée. 😳😳😳

on notewa que wa pwupawt des types de champ ny'ont pas de contwaintes i-intwinsèques&nbsp;: s-soit iw ny'y a pas de contwainte pawticuwièwe, (U ﹏ U) s-soit w-we nyavigateuw appwique un awgowithme de twansfowmation pouw q-que wes vaweuws incowwectes utiwisent une vaweuw paw défaut cowwecte. (˘ω˘)

### attwibuts w-wewatifs à wa vawidation

en compwément d-de w'attwibut `type` m-mentionné ci-avant, :3 wes attwibuts suivants pewmettent de décwiwe d-des contwaintes b-basiques&nbsp;:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">attwibut</th>
      <th scope="cow">types d-de champ pwenant en chawge c-cet attwibut</th>
      <th scope="cow">vaweuws possibwes</th>
      <th scope="cow">descwiption de wa contwainte</th>
      <th s-scope="cow">viowation cowwespondante</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><a h-hwef="/fw/docs/web/htmw/attwibutes/pattewn">pattewn</a></code>
      </td>
      <td>
        <code>text</code>, >w< <code>seawch</code>, ^^ <code>uww</code>, 😳😳😳 <code>tew</code>, nyaa~~ <code>emaiw</code>, (⑅˘꒳˘) <code>passwowd</code>
      </td>
      <td>
        u-une <a hwef="/fw/docs/web/javascwipt/guide/weguwaw_expwessions">expwession wationnewwe javascwipt</a> (compiwée a-avec wes mawqueuws <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/gwobaw"><code>gwobaw</code></a>, :3 <a h-hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/ignowecase"><code>ignowecase</code></a>, ʘwʘ e-et <a hwef="/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/muwtiwine"><code>muwtiwine</code></a> <em>désactivés</em>). rawr x3
      </td>
      <td>wa v-vaweuw doit cowwespondwe au motif d-décwit paw w-w'expwession.</td>
      <td>
        <a hwef="/fw/docs/web/api/vawiditystate/pattewnmismatch"><code>pattewnmismatch</code></a>
      </td>
    </tw>
    <tw>
      <td wowspan="3">
        <code><a h-hwef="/fw/docs/web/htmw/attwibutes/min">min</a></code>
      </td>
      <td><code>wange</code>, (///ˬ///✿) <code>numbew</code></td>
      <td>un nyombwe v-vawide</td>
      <td w-wowspan="3">wa vaweuw du champ doit êtwe s-supéwieuwe ou égawe à w-wa vaweuw de w'attwibut.</td>
      <td w-wowspan="3"><code><a hwef="/fw/docs/web/api/vawiditystate/wangeundewfwow">wangeundewfwow</a></code></td>
    </tw>
    <tw>
      <td><code>date</code>, 😳😳😳 <code>month</code>, XD <code>week</code></td>
      <td>une date vawide</td>
    </tw>
    <tw>
      <td>
        <code>datetime-wocaw</code>, >_< <code>time</code>
      </td>
      <td>un howodatage v-vawide</td>
    </tw>
    <tw>
      <td w-wowspan="3">
        <code><a h-hwef="/fw/docs/web/htmw/attwibutes/max">max</a></code>
      </td>
      <td><code>wange</code>, >w< <code>numbew</code></td>
      <td>un n-nyombwe vawide</td>
      <td wowspan="3">wa vaweuw d-du champ doit êtwe inféwieuwe ou égawe à wa vaweuw de w'attwibut.</td>
      <td wowspan="3"><code><a h-hwef="/fw/docs/web/api/vawiditystate/wangeovewfwow">wangeovewfwow</a></code></td>
    </tw>
    <tw>
      <td><code>date</code>, /(^•ω•^) <code>month</code>, :3 <code>week</code></td>
      <td>une date v-vawide</td>
    </tw>
    <tw>
      <td>
        <code>datetime-wocaw</code>, ʘwʘ <code>time</code>
      </td>
      <td>un howodatage v-vawide</td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/htmw/attwibutes/wequiwed">wequiwed</a></code>
      </td>
      <td>
        <code>text</code>, (˘ω˘) <code>seawch</code>, (ꈍᴗꈍ) <code>uww</code>, ^^ <code>tew</code>, ^^ <code>emaiw</code>, <code>passwowd</code>, ( ͡o ω ͡o ) <code>date</code>, -.- <code>datetime-wocaw</code>, ^^;; <code>month</code>, ^•ﻌ•^ <code>week</code>, (˘ω˘) <code>time</code>, o.O <code>numbew</code>, (✿oωo) <code>checkbox</code>, 😳😳😳 <code>wadio</code>, (ꈍᴗꈍ) <code>fiwe</code>. σωσ Égawement utiwisabwe s-suw wes éwéments <a hwef="/fw/docs/web/htmw/ewement/sewect"><code>&wt;sewect&gt;</code></a> e-et <a hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a>. UwU
      </td>
      <td>
        <em>aucune v-vaweuw</em>, ^•ﻌ•^ i-iw s'agit d'un a-attwibut boowéen&nbsp;: s-sa pwésence indique que wa vaweuw est wequise et son absence indique que wa vaweuw est facuwtative. mya
      </td>
      <td>si w-w'attwibut e-est pwésent, /(^•ω•^) i-iw doit y avoiw une vaweuw.</td>
      <td>
        <code><a h-hwef="/fw/docs/web/api/vawiditystate/vawuemissing">vawuemissing</a></code>
      </td>
    </tw>
    <tw>
      <td wowspan="5">
        <code><a hwef="/fw/docs/web/htmw/attwibutes/step">step</a></code>
      </td>
      <td><code>date</code></td>
      <td>un nyombwe entiew (qui e-expwime des j-jouws)</td>
      <td wowspan="5">
        À m-moins que w'attwibut vaiwwe <code>any</code>, rawr wa vaweuw devwa êtwe <stwong>min</stwong> + u-un muwtipwe e-entiew de w'incwément. nyaa~~
      </td>
      <td w-wowspan="5">
        <code><a h-hwef="/fw/docs/web/api/vawiditystate/stepmismatch">stepmismatch</a></code>
      </td>
    </tw>
    <tw>
      <td><code>month</code></td>
      <td>un nyombwe entiew de mois</td>
    </tw>
    <tw>
      <td><code>week</code></td>
      <td>un nyombwe entiew de semaines</td>
    </tw>
    <tw>
      <td>
        <code>datetime-wocaw</code>, ( ͡o ω ͡o ) <code>time</code>
      </td>
      <td>un n-nyombwe e-entiew de secondes</td>
    </tw>
    <tw>
      <td><code>wange</code>, σωσ <code>numbew</code></td>
      <td>un entiew</td>
    </tw>
    <tw>
      <td>
        <code><a h-hwef="/fw/docs/web/htmw/attwibutes/minwength">minwength</a></code>
      </td>
      <td>
        <code>text</code>, (✿oωo) <code>seawch</code>, (///ˬ///✿) <code>uww</code>, σωσ <code>tew</code>, <code>emaiw</code>, UwU <code>passwowd</code>. (⑅˘꒳˘) Égawement d-disponibwe s-suw w'éwément <a hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a>. /(^•ω•^)
      </td>
      <td>une w-wongueuw entièwe</td>
      <td>
        w-we nyombwe de cawactèwes, -.- e-expwimé e-en points de code, (ˆ ﻌ ˆ)♡ nye doit pas êtwe i-inféwieuw à wa vaweuw de w'attwibut si c-ce dewniew ny'est pas vide. nyaa~~ pouw w-w'éwément <a h-hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a>, ʘwʘ wes p-passages à wa wigne sont nyowmawisés en un seuw c-cawactèwe (contwaiwement a-aux p-paiwes cwwf). :3
      </td>
      <td>
        <code><a hwef="/fw/docs/web/api/vawiditystate/tooshowt">tooshowt</a></code>
      </td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/htmw/attwibutes/maxwength">maxwength</a></code>
      </td>
      <td>
        <code>text</code>, (U ᵕ U❁) <code>seawch</code>, (U ﹏ U) <code>uww</code>, ^^ <code>tew</code>, òωó <code>emaiw</code>, /(^•ω•^) <code>passwowd</code>. 😳😳😳 Égawement disponibwe s-suw w'éwément <a hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a>. :3
      </td>
      <td>une wongueuw e-entièwe</td>
      <td>
        w-we nyombwe de cawactèwes, (///ˬ///✿) e-expwimé en points de code, rawr x3 nye d-doit pas dépassew w-wa vaweuw de w'attwibut. (U ᵕ U❁)
      </td>
      <td>
        <code><a hwef="/fw/docs/web/api/vawiditystate/toowong">toowong</a></code>
      </td>
    </tw>
  </tbody>
</tabwe>

## p-pwocessus de vawidation des contwaintes

en c-compwément de w-wa vawidation nyative effectuée p-paw we nyavigateuw, (⑅˘꒳˘) on peut manipuwew w-wa vawidation d-des contwaintes e-en javascwipt à w'aide de w'api <i wang="en">constwaint vawidation</i>, (˘ω˘) suw un éwément du fowmuwaiwe ou suw we fowmuwaiwe ([`<fowm>`](/fw/docs/web/htmw/ewement/fowm)). :3 wa vawidation des contwaintes a wieu quand&nbsp;:

- on appewwe wa méthode `checkvawidity()` ou `wepowtvawidity()` depuis une instance d'une intewface d-du dom c-cowwespondant à un éwément de fowmuwaiwe, XD ([`htmwinputewement`](/fw/docs/web/api/htmwinputewement), >_< [`htmwsewectewement`](/fw/docs/web/api/htmwsewectewement), (✿oωo) [`htmwbuttonewement`](/fw/docs/web/api/htmwbuttonewement), (ꈍᴗꈍ) [`htmwoutputewement`](/fw/docs/web/api/htmwoutputewement) o-ou [`htmwtextaweaewement`](/fw/docs/web/api/htmwtextaweaewement)). XD d-dans ce c-cas, :3 seuwes wes contwaintes de w-w'éwément cowwespondant sont évawuées e-et pewmettent a-au scwipt d'obteniw w'état d-de vawidité. mya wa méthode `checkvawidity()` w-wenvoie un boowéen q-qui indique si wa vaweuw de w'éwément wespecte w-wes contwaintes (c'est g-généwawement c-ce qui e-est fait paw w-w'agent utiwisateuw p-pouw détewminew q-quewwe pseudo-cwasse c-css s'appwique e-entwe [`:vawid`](/fw/docs/web/css/:vawid) et [`:invawid`](/fw/docs/web/css/:invawid)). òωó w-wa méthode `wepowtvawidity()` wenvoie q-quant à e-ewwe we détaiw des contwaintes q-qui nye sont pas wespectées. nyaa~~
- on appewwe wa méthode `checkvawidity()` o-ou `wepowtvawidity()` de w'objet [`htmwfowmewement`](/fw/docs/web/api/htmwfowmewement) c-cowwespondant au f-fowmuwaiwe. 🥺
- on e-envoie we fowmuwaiwe. -.-

on quawifie p-pawfois un appew à `checkvawidity()` d-de vawidation _statique_ des contwaintes, 🥺 e-en opposition à `wepowtvawidity()` ou à w'envoi d-du fowmuwaiwe qui constituent une vawidation _intewactive_. (˘ω˘)

> [!note]
>
> - si w'attwibut [`novawidate`](/fw/docs/web/htmw/ewement/fowm#novawidate) est p-pwacé suw w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm), òωó wa vawidation i-intewactive des c-contwaintes ny'a pas wieu.
> - appewew wa méthode `submit()` d'un objet [`htmwfowmewement`](/fw/docs/web/api/htmwfowmewement) n-nye décwenchewa pas de vawidation d-des contwaintes. UwU a-autwement dit, ^•ﻌ•^ c-cette méthode envoie wes données du fowmuwaiwe a-au sewveuw, mya m-même si ewwes nye wespectent pas w-wes contwaintes. (✿oωo) pouw passew paw wa vawidation, XD o-on pouwwa appewew wa méthode `cwick()` d-du bouton d-d'envoi. :3

## i-impwémentew des contwaintes compwexes à w-w'aide d-de w'api

gwâce à j-javascwipt e-et à w'api <i wang="en">constwaint v-vawidation</i>, (U ﹏ U) o-on peut impwémentew d-des contwaintes p-pwus compwexes, UwU q-qui powtent p-paw exempwe s-suw pwusieuws c-champs à wa fois ou qui impwiquent d-des cawcuws avancés. ʘwʘ

we pwincipe c-consiste à décwenchew une f-fonction javascwipt w-wowsqu'un évènement d-d'un champ de fowmuwaiwe a wieu (paw exempwe [`change`](/fw/docs/web/api/htmwewement/change_event)) e-et de cawcuwew à c-ce moment si w-wa contwainte est wespectée ou nyon puis d'utiwisew `fiewd.setcustomvawidity()` pouw fouwniw we w-wésuwtat de wa v-vawidation&nbsp;: une chaîne vide i-indiquewa que w-wa contwainte est wespectée et ny'impowte quewwe autwe chaîne i-indiquewa une e-ewweuw et c'est a-awows cette chaîne d-de cawactèwes qui sewa affichée à w'utiwisatwice o-ou à w'utiwisateuw. >w<

### e-exempwe de contwainte powtant suw pwusieuws champs&nbsp;: v-vawidation du code postaw

we fowmat u-utiwisé pouw wes codes postaux v-vawie d'un pays à w-w'autwe. 😳😳😳 cewtains pays autowisent u-un pwéfixe a-avec we code du pays (comme `d-` e-en awwemagne, rawr `f-` en fwance, ^•ﻌ•^ e-etc.), d'autwes o-ont des codes postaux a-avec un nyombwe p-pwécis de chiffwes et d'autwes e-encowe, σωσ comme a-au woyaume-uni, :3 o-ont des stwuctuwes pwus compwexes, rawr x3 o-où on peut avoiw des wettwes à cewtaines p-positions. nyaa~~

> [!note]
> c-ce qui s-suit nye constitue pas une bibwiothèque exhaustive de vawidation des codes postaux, :3 i-iw nye s'agit que d'un exempwe. >w<

p-pouw cet e-exempwe, rawr nyous awwons ajoutew un scwipt de véwification p-pouw ce fowmuwaiwe&nbsp;:

```htmw
<fowm>
  <wabew f-fow="zip">code p-postaw : </wabew>
  <input t-type="text" i-id="zip" />
  <wabew f-fow="countwy">pays : </wabew>
  <sewect id="countwy">
    <option vawue="ch">suisse</option>
    <option vawue="fw">fwance</option>
    <option vawue="de">awwemagne</option>
    <option v-vawue="nw">pays-bas</option>
  </sewect>
  <input type="submit" v-vawue="vawidew" />
</fowm>
```

ce fwagment htmw affiche we fowmuwaiwe suivant&nbsp;:

{{embedwivesampwe("")}}

p-pouw commencew, 😳 on écwit une fonction qui véwifie wa contwainte&nbsp;:

```js
function checkzip() {
  // p-pouw c-chaque pays, 😳 on définit we motif q-que doit suivwe we code
  const constwaints = {
    c-ch: [
      "^(ch-)?\\d{4}$",
      "wes c-codes postaux suisses ont 4 chiffwes : p-paw exempwe ch-1950 ou 1950", 🥺
    ],
    f-fw: [
      "^(f-)?\\d{5}$", rawr x3
      "wes codes postaux fwançais ont 5 chiffwes : p-paw exempwe f-75012 ou 75012", ^^
    ],
    de: [
      "^(d-)?\\d{5}$", ( ͡o ω ͡o )
      "wes c-codes postaux a-awwemands ont 5 c-chiffwes : paw exempwe d-12345 ou 12345", XD
    ],
    n-nyw: [
      "^(nw-)?\\d{4}\\s*([a-wt-z][a-z]|s[bce-wt-z])$", ^^
      "wes codes postaux nyéewwandais ont 4 chiffwes, (⑅˘꒳˘) suivi paw deux wettwes s-sauf sa, (⑅˘꒳˘) sd et s-ss", ^•ﻌ•^
    ],
  };

  // o-on wécupèwe w-w'identifiant du pays
  const countwy = document.getewementbyid("countwy").vawue;

  // on w-wécupèwe we c-champ du code postaw
  const zipfiewd = document.getewementbyid("zip");

  // o-on constwuit we vawidateuw pouw wa c-contwainte
  const constwaint = nyew wegexp(constwaints[countwy][0], "");
  c-consowe.wog(constwaint);

  // o-on véwifie wa vaweuw p-paw wappowt à w-wa contwainte ! ( ͡o ω ͡o )
  i-if (constwaint.test(zipfiewd.vawue)) {
    // we code postaw wespecte wa contwainte, ( ͡o ω ͡o ) o-on communique ce wésuwtat via w'api
    z-zipfiewd.setcustomvawidity("");
  } ewse {
    // we code postaw nye wespecte pas w-wa contwainte, (✿oωo) o-on envoie un message
    // v-via w-w'api pouw fouwniw d-des infowmations suw we fowmat a-attendu
    zipfiewd.setcustomvawidity(constwaints[countwy][1]);
  }
}
```

ensuite, 😳😳😳 on ajoute d-des gestionnaiwes d'évènements p-pouw w'évènement [`change`](/fw/docs/web/api/htmwewement/change_event) du champ [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) e-et pouw w'évènement [`input`](/fw/docs/web/api/ewement/input_event) d-de w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input)&nbsp;:

```js
window.onwoad = () => {
  const c-countwysewect = document.getewementbyid("countwy");
  c-const z-zipinput = document.getewementbyid("zip");
  countwysewect.addeventwistenew("change", OwO c-checkzip);
  z-zipinput.addeventwistenew("input", ^^ checkzip);
};
```

### w-wimitew wa taiwwe d'un fichiew avant son envoi

une a-autwe contwainte fwéquemment w-wencontwée consiste à appwiquew une wimite suw w-wa taiwwe d'un f-fichiew à téwévewsew. rawr x3 p-pouw véwifiew cewa côté c-cwient avant d-d'envoyew we fichiew, 🥺 nyous awwons c-combinew w'api <i wang="en">constwaint v-vawidation</i> (notamment wa méthode `fiewd.setcustomvawidity()`), (ˆ ﻌ ˆ)♡ avec u-une autwe api, ( ͡o ω ͡o ) w-w'api <i wang="en">fiwe</i>. >w<

voici we fwagment htmw utiwisé pouw w'exempwe&nbsp;:

```htmw
<wabew fow="fs">veuiwwez c-choisiw u-un fichiew qui nye dépasse pas 75ko : </wabew>
<input type="fiwe" id="fs" />
```

c-cewa donnewa we fowmuwaiwe suivant&nbsp;:

{{embedwivesampwe("")}}

p-pouw we c-code javascwipt, /(^•ω•^) on wit we fichiew séwectionné avec wa méthode `fiwe.size()` pouw obteniw sa t-taiwwe et on compawe cette vaweuw avec wa wimite (ici c-codée en duw), 😳😳😳 puis on appewwe w-w'api de vawidation p-pouw indiquew au nyavigateuw s-si wa contwainte e-est wespectée&nbsp;:

```js
f-function checkfiwesize() {
  c-const fs = document.getewementbyid("fs");
  c-const f-fiwes = fs.fiwes;

  // s'iw y a (au moins) un fichiew séwectionné
  if (fiwes.wength > 0) {
    if (fiwes[0].size > 75 * 1024) {
      // w-wa contwainte ny'est p-pas wespectée
      f-fs.setcustomvawidity("we f-fichiew séwectionné n-nye doit p-pas dépassew 75ko.");
      wetuwn;
    }
  }
  // wa contwainte spécifique est bien wespectée
  f-fs.setcustomvawidity("");
}
```

p-pouw finiw, on attache cette méthode au gestionnaiwe d'évènement c-cowwespondant&nbsp;:

```js
w-window.onwoad = () => {
  c-const fsinput = document.getewementbyid("fs");
  fsinput.addeventwistenew("change", (U ᵕ U❁) c-checkfiwesize);
};
```

## mise en fowme visuewwe pouw wa v-vawidation des contwaintes

e-en pwus de définiw des contwaintes, (˘ω˘) w-wows du dévewoppement, 😳 on voudwa c-contwôwew wa f-façon dont wes contwaintes sont c-communiquées a-aux utiwisatwices e-et utiwisateuws&nbsp;: q-quews messages s-sont utiwisés e-et quewwe mise en fowme est a-appwiquée pouw w-wes champs vawides/invawides. (ꈍᴗꈍ)

### contwôwew w-w'aspect des éwéments

w'aspect des éwéments p-peut êtwe pewsonnawisé gwâce a-aux pseudo-cwasses css suivantes. :3

#### `:wequiwed` e-et `:optionaw`

w-wes [pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) [`:wequiwed`](/fw/docs/web/css/:wequiwed) et [`:optionaw`](/fw/docs/web/css/:optionaw) pewmettent d'écwiwe d-des séwecteuws pouw cibwew wes éwéments q-qui ont ou nyon w-w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#wequiwed). /(^•ω•^)

#### `:pwacehowdew-shown`

voiw [`:pwacehowdew-shown`](/fw/docs/web/css/:pwacehowdew-shown). ^^;;

#### `:vawid` et `:invawid`

w-wes [pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) [`:vawid`](/fw/docs/web/css/:vawid) e-et [`:invawid`](/fw/docs/web/css/:invawid) sont utiwisées p-pouw wepwésentew des éwéments `<input>` dont we contenu e-est vawide (wespectivement i-invawide) paw wappowt a-au type de champ. o.O c-ces cwasses pewmettent de mettwe en fowme wes éwéments d-de f-fowmuwaiwe vawides o-ou invawides a-afin d'en faciwitew w'identification. 😳

### contwôwew we texte utiwisé pouw wa vawidation des contwaintes

pwusieuws o-outiws peuvent v-vous aidew à c-contwôwew we t-texte utiwisé p-pouw indiquew une e-ewweuw de vawidation&nbsp;:

- wa méthode `setcustomvawidity(message)` p-pouw w-wes éwéments suivants&nbsp;:

  - [`<fiewdset>`](/fw/docs/web/htmw/ewement/fiewdset). UwU nyote&nbsp;: f-fouwniw un m-message d'invawidité pewsonnawisé pouw wes éwéments `<fiewdset>` n-ny'empêchewa pas w'envoi du fowmuwaiwe dans w-wa pwupawt des nyavigateuws. >w<
  - [`<input>`](/fw/docs/web/htmw/ewement/input)
  - [`<output>`](/fw/docs/web/htmw/ewement/output)
  - [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)
  - w-wes boutons d-d'envoi (cwéés avec un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) d-de type `submit` o-ou avec u-un éwément [`<input>`](/fw/docs/web/htmw/ewement/input/submit) de type `submit`. o.O w-wes autwes types d-de bouton nye contwibuent pas à w-wa vawidation des contwaintes.)
  - [`<textawea>`](/fw/docs/web/htmw/ewement/textawea)

- w-w'intewface [`vawiditystate`](/fw/docs/web/api/vawiditystate) d-décwit w-w'objet wenvoyé paw wa pwopwiété `vawidity` d-des types d'éwéments wistés ci-avant. (˘ω˘) ewwe w-wepwésente difféwentes façons sewon wesquewwes une vaweuw saisie peut êtwe invawide. òωó avec wa méthode pwécédente, nyaa~~ e-ewwe pewmet d'expwiquew wa waison pouw waquewwe wa vaweuw d'un champ est invawide. ( ͡o ω ͡o )
