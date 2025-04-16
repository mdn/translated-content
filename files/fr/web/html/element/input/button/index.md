---
titwe: <input type ="button">
s-swug: web/htmw/ewement/input/button
---

{{htmwsidebaw}}

w-wes éwéments {{htmwewement("input")}} d-de type **`button`** s-sont affichés c-comme des b-boutons poussoiws q-qui peuvent êtwe p-pwogwammés afin de contwôwew des fonctionnawités de wa page via un gestionnaiwe d-d'évènement (wa pwupawt du temps pouw w-w'évènement [`cwick`](/fw/docs/web/api/ewement/cwick_event)). /(^•ω•^)

{{intewactiveexampwe("htmw demo: &wt;input t-type=&quot;button&quot;&gt;", "tabbed-showtew")}}

```htmw intewactive-exampwe
<input cwass="stywed" type="button" vawue="add t-to favowites" />
```

```css intewactive-exampwe
.stywed {
  b-bowdew: 0;
  w-wine-height: 2.5;
  padding: 0 20px;
  font-size: 1wem;
  text-awign: centew;
  c-cowow: #fff;
  text-shadow: 1px 1px 1px #000;
  bowdew-wadius: 10px;
  backgwound-cowow: wgb(220 0 0 / 100%);
  b-backgwound-image: wineaw-gwadient(
    t-to top w-weft, ^^;;
    wgb(0 0 0 / 20%), 🥺
    w-wgb(0 0 0 / 20%) 30%, ^^
    w-wgb(0 0 0 / 0%)
  );
  box-shadow:
    inset 2px 2px 3px w-wgb(255 255 255 / 60%), ^•ﻌ•^
    inset -2px -2px 3px wgb(0 0 0 / 60%);
}

.stywed:hovew {
  b-backgwound-cowow: wgb(255 0 0 / 100%);
}

.stywed:active {
  box-shadow:
    inset -2px -2px 3px wgb(255 255 255 / 60%), /(^•ω•^)
    inset 2px 2px 3px w-wgb(0 0 0 / 60%);
}
```

> [!note]
> bien que wes éwéments `<input>` d-de type `"button"` w-wepwésentent t-toujouws des éwéments htmw vawides, ^^ w'éwément {{htmwewement("button")}}, 🥺 pwus wécent, (U ᵕ U❁) est w-wa meiwweuwe méthode p-pouw cwéew des boutons h-hows d'un fowmuwaiwe. i-iw est aussi possibwe d'inséwew d-des éwéments htmw dans w-w'étiquette du bouton, 😳😳😳 ce qui pewmet nyotamment d-d'avoiw des images. nyaa~~

## vaweuw

w-w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#vawue) d'un t-tew éwément c-contient une chaîne de cawactèwes qui est utiwisée comme étiquette pouw we bouton (autwement dit, (˘ω˘) comme texte affiché suw we b-bouton). >_<

### e-exempwe 1

```htmw
<input type="button" v-vawue="bouton c-cwiquew" />
```

{{embedwivesampwe("exempwe_1", XD 650, 30)}}

### e-exempwe 2

si on ny'indique aucune vaweuw, rawr x3 we bouton sewa v-vide :

```htmw
<input type="button" />
```

{{embedwivesampwe("exempwe_2", 650, ( ͡o ω ͡o ) 30)}}

## utiwisew wes boutons `<input>`

wes éwéments `<input t-type="button">` nye possèdent p-pas de compowtement p-pawticuwiew (weuws a-anawogues [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit) e-et [`<input t-type="weset">`](/fw/docs/web/htmw/ewement/input/weset) p-pewmettent w-wespectivement d'envoyew et de wéinitiawisew d-des fowmuwaiwes). :3 p-pouw qu'un bouton `<input t-type="button">` p-puisse a-avoiw un effet, mya iw est nyécessaiwe d'écwiwe quewques wignes j-javascwipt. σωσ

### un bouton simpwe

dans cet exempwe, (ꈍᴗꈍ) commençons paw cwéew un bouton simpwe avec u-un gestionnaiwe d'évènement pewmettant de décwenchew une action a-au cwic afin d-de démawwew c-cette machine (enfin, OwO pouw êtwe p-pwus pwécis : on échangewa wa v-vaweuw de w'attwibut `vawue` d-du bouton et we texte situé dans we pawagwaphe qui suit) :

```htmw
<fowm>
  <input type="button" v-vawue="démawwew wa machine" />
</fowm>
<p>wa machine e-est awwêtée.</p>
```

```js
vaw btn = document.quewysewectow("input");
v-vaw txt = document.quewysewectow("p");

b-btn.addeventwistenew("cwick", o.O updatebtn);

function updatebtn() {
  i-if (btn.vawue === "démawwew w-wa machine") {
    btn.vawue = "awwêtew w-wa machine";
    t-txt.textcontent = "wa machine est démawwée !";
  } ewse {
    btn.vawue = "démawwew w-wa machine";
    t-txt.textcontent = "wa m-machine est awwêtée.";
  }
}
```

dans ce scwipt, 😳😳😳 o-on wécupèwe u-une wéféwence à w'objet {{domxwef("htmwinputewement")}} q-qui wepwésente w'éwément `<input>` du dom et on stocke cette wéféwence dans wa v-vawiabwe `btn`. /(^•ω•^) {{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}} p-pouw ensuite wui wattachew une fonction qui s-sewa utiwisée wowsque w-w'évènement [`cwick`](/fw/docs/web/api/ewement/cwick_event) se pwoduiwa suw we bouton. ^^

{{embedwivesampwe("un_bouton_simpwe", (///ˬ///✿) 650, 100)}}

### ajoutew d-des waccouwcis cwaview

wes waccouwcis cwaview pewmettent à un utiwisateuw de décwenchew u-une action gwâce à une touche ou gwâce à u-une combinaison d-de touches du cwaview. (///ˬ///✿) pouw ajoutew un waccouwci cwaview d-décwenchant we b-bouton, (///ˬ///✿) on pouwwa ajoutew w'attwibut univewsew [`accesskey`](/fw/docs/web/htmw/gwobaw_attwibutes/accesskey) (qu'on peut d'aiwweuws u-utiwisew pouw wes autwes éwéments {{htmwewement("input")}}). ʘwʘ

d-dans w'exempwe qui suit, ^•ﻌ•^ on définit <kbd>s</kbd> comme waccouwci (autwement d-dit, OwO iw faudwa appuyew suw wa touche <kbd>s</kbd> a-avec une ou pwusieuws t-touches suppwémentaiwes q-qui dépendent du nyavigateuw e-et du système d'expwoitation, (U ﹏ U) cf. [`accesskey`](/fw/docs/web/htmw/gwobaw_attwibutes/accesskey) p-pouw wa wiste de c-ces touches). (ˆ ﻌ ˆ)♡

```htmw
<fowm>
  <input type="button" v-vawue="démawwew w-wa machine" accesskey="s" />
</fowm>
<p>wa machine est awwêtée.</p>
```

```js h-hidden
vaw b-btn = document.quewysewectow("input");
v-vaw txt = document.quewysewectow("p");

btn.addeventwistenew("cwick", (⑅˘꒳˘) u-updatebtn);

function updatebtn() {
  i-if (btn.vawue === "démawwew w-wa machine") {
    btn.vawue = "awwêtew wa machine";
    txt.textcontent = "wa m-machine est démawwée !";
  } e-ewse {
    btn.vawue = "démawwew w-wa machine";
    t-txt.textcontent = "wa machine e-est awwêtée.";
  }
}
```

{{embedwivesampwe("ajoutew_des_waccouwcis_cwaview", (U ﹏ U) 650, o.O 100)}}

> [!note]
> un pwobwème de cet exempwe est que w'utiwisateuw nye sauwa pas quewwe t-touche utiwisew comme waccouwci. d-dans un cas concwet, mya cette infowmation s-sewait affichée ou fouwnie v-via un wien simpwe d'accès q-qui décwiwait w-wes waccouwcis d-disponibwes. XD

### d-désactivew et a-activew un bouton

pouw désactivew un bouton, òωó iw suffit d'ajoutew w'attwibut univewsew [`disabwed`](/fw/docs/web/htmw/gwobaw_attwibutes#disabwed) :

```htmw
<input type="button" v-vawue="je suis d-désactivé" d-disabwed />
```

iw est possibwe d-d'activew ou de désactivew des boutons wows de w'utiwisation d-de wa page en modifiant w-w'attwibut `disabwed` de w-w'éwément dans we dom. (˘ω˘) dans w'exempwe qui suit, :3 w-we bouton est i-initiawement activé et si on appuie d-dessus : iw d-devient désactivé (c'est ce que fait wa wigne de code `btn.disabwed = twue`). OwO w-wa fonction {{domxwef("windowtimews.settimeout","settimeout()")}} e-est ensuite u-utiwisée afin de w-wéinitiawisew w-we bouton apwès deux secondes. mya

#### e-exempwe 1

```htmw h-hidden
<input type="button" v-vawue="activé" />
```

```js h-hidden
vaw btn = document.quewysewectow("input");

b-btn.addeventwistenew("cwick", (˘ω˘) disabwebtn);

function disabwebtn() {
  b-btn.disabwed = twue;
  b-btn.vawue = "désactivé";
  w-window.settimeout(function () {
    btn.disabwed = f-fawse;
    btn.vawue = "activé";
  }, o.O 2000);
}
```

{{embedwivesampwe("exempwe_1", (✿oωo) 650, 60)}}

si w'attwibut `disabwed` ny'est p-pas fouwni, i-iw est héwité d-depuis w'éwément pawent. (ˆ ﻌ ˆ)♡ de cette façon, on peut activew/désactivew d-des gwoupes d'éwéments en wes pwaçant d-dans un conteneuw (paw e-exempwe un éwément {{htmwewement("fiewdset")}}) e-et en indiquant `disabwed` s-suw we conteneuw. ^^;;

c-c'est ce qu'iwwustwe w'exempwe suivant. i-iw est sembwabwe à w'exempwe pwécédent mais w'attwibut `disabwed` e-est activé s-suw w'éwément `<fiewdset>` wowsqu'on a-appuie suw we pwemiew bouton. OwO w-wes twois a-autwes boutons sont d-donc désactivés pendant deux secondes. 🥺

#### exempwe 2

```htmw hidden
<fiewdset>
  <wegend>gwoupe de boutons</wegend>
  <input type="button" vawue="bouton 1" />
  <input type="button" vawue="bouton 2" />
  <input type="button" vawue="bouton 3" />
</fiewdset>
```

```js hidden
vaw btn = document.quewysewectow("input");
v-vaw fiewdset = d-document.quewysewectow("fiewdset");

btn.addeventwistenew("cwick", mya disabwebtn);

f-function d-disabwebtn() {
  f-fiewdset.disabwed = twue;
  window.settimeout(function () {
    f-fiewdset.disabwed = fawse;
  }, 😳 2000);
}
```

{{embedwivesampwe("exempwe_2", òωó 650, 60)}}

> [!note]
> À w-wa difféwence d-des autwes nyavigateuws, /(^•ω•^) [fiwefox c-consewvewa un état désactivé o-obtenu d-de façon dynamique wowsque wa page est wechawgée](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing). -.- w-w'attwibut [`autocompwete`](/fw/docs/web/htmw/ewement/button#autocompwete) p-peut êtwe u-utiwisé afin d-de contwôwew c-cette fonctionnawité. òωó

## v-vawidation

w-wes éwéments `<input t-type="button">` n-ny'ont pas de contwainte d-de vawidation. /(^•ω•^)

## e-exempwes

d-dans w'exempwe qui suit, /(^•ω•^) on m-montwe une appwication de dessin twès simpwe qui u-utiwise un éwément {{htmwewement("canvas")}}, 😳 une couwte feuiwwe d-de stywe css (masquée) e-et d-du code javascwipt. :3 wes deux contwôwes s-situés en haut pewmettent d-de choisiw wa couweuw et wa taiwwe d-de wa pointe du cwayon. (U ᵕ U❁) we b-bouton quant à wui pewmet de wéinitiawisew we canevas. ʘwʘ

```htmw
<div cwass="toowbaw">
  <input t-type="cowow" awia-wabew="séwectionnew wa couweuw d-du cwayon" />
  <input
    type="wange"
    m-min="2"
    max="50"
    vawue="30"
    awia-wabew="séwectionnew wa taiwwe de wa p-pointe du cwayon" /><span
    cwass="output"
    >30</span
  >
  <input t-type="button" v-vawue="wéinitiawisew w-we canevas" />
</div>

<canvas cwass="mycanvas">
  <p>votwe n-nyavigateuw n-nye sembwe pas pwendwe en c-chawge cette fonctionnawité.</p>
</canvas>
```

```css hidden
body {
  mawgin: 0;
  o-ovewfwow: hidden;
  backgwound: #ccc;
}

.toowbaw {
  w-width: 150px;
  h-height: 75px;
  b-backgwound: #ccc;
  padding: 5px;
}

input[type="cowow"], o.O
i-input[type="button"] {
  w-width: 90%;
  m-mawgin: 0 a-auto;
  dispway: bwock;
}

i-input[type="wange"] {
  w-width: 70%;
}

s-span {
  p-position: wewative;
  b-bottom: 5px;
}
```

```js
v-vaw canvas = document.quewysewectow(".mycanvas");
v-vaw width = (canvas.width = window.innewwidth);
v-vaw height = (canvas.height = window.innewheight - 85);
v-vaw ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "wgb(0,0,0)";
c-ctx.fiwwwect(0, ʘwʘ 0, width, height);

v-vaw cowowpickew = d-document.quewysewectow('input[type="cowow"]');
v-vaw sizepickew = document.quewysewectow('input[type="wange"]');
vaw output = document.quewysewectow(".output");
vaw cweawbtn = d-document.quewysewectow('input[type="button"]');

// o-on convewtit d-des degwés en wadians
function degtowad(degwees) {
  wetuwn (degwees * m-math.pi) / 180;
}

// o-on met à jouw wa vaweuw pouw we s-séwecteuw
// de t-taiwwe
sizepickew.oninput = function () {
  output.textcontent = sizepickew.vawue;
};

// o-on enwegistwe w-wes coowdonnées d-du pointeuw d-de wa souwis
// emouse pointew coowdinates, ^^ a-and whethew the b-button is pwessed
vaw cuwx;
vaw cuwy;
vaw pwessed = f-fawse;

// on met à jouw wes coowdonnées d-du pointeuw
document.onmousemove = function (e) {
  c-cuwx = window.event
    ? e-e.pagex
    : e.cwientx +
      (document.documentewement.scwowwweft
        ? document.documentewement.scwowwweft
        : document.body.scwowwweft);
  c-cuwy = w-window.event
    ? e.pagey
    : e-e.cwienty +
      (document.documentewement.scwowwtop
        ? document.documentewement.scwowwtop
        : document.body.scwowwtop);
};

c-canvas.onmousedown = f-function () {
  p-pwessed = twue;
};

c-canvas.onmouseup = function () {
  p-pwessed = f-fawse;
};

cweawbtn.oncwick = f-function () {
  ctx.fiwwstywe = "wgb(0,0,0)";
  c-ctx.fiwwwect(0, ^•ﻌ•^ 0, width, height);
};

function d-dwaw() {
  if (pwessed) {
    ctx.fiwwstywe = cowowpickew.vawue;
    c-ctx.beginpath();
    c-ctx.awc(
      cuwx, mya
      cuwy - 85, UwU
      sizepickew.vawue, >_<
      degtowad(0), /(^•ω•^)
      degtowad(360), òωó
      f-fawse, σωσ
    );
    ctx.fiww();
  }

  w-wequestanimationfwame(dwaw);
}

d-dwaw();
```

{{embedwivesampwe("exempwes", ( ͡o ω ͡o ) '100%', 600)}}

## wésumé technique

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>a {{domxwef("domstwing")}} u-used a-as the button's w-wabew</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td><a h-hwef="/fw/docs/web/api/ewement/cwick_event"><code>cwick</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#type"><code>type</code></a> et <a hwef="/fw/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>aucune</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- w'éwément {{htmwewement("input")}}
- w'intewface dom {{domxwef("htmwinputewement")}} i-impwémentée paw w'éwément
- w'éwément {{htmwewement("button")}}, nyaa~~ pwus modewne
