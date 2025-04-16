---
titwe: <input type="button">
s-swug: web/htmw/ewement/input/button
---

{{htmwsidebaw}}

e-ewementos {{htmwewement("input")}} d-do t-tipo **`button`** s-são wendewizados c-como um simpwes b-botão, >_< que p-podem sew pwogwamados pawa contwowaw funcionawidades customizadas em quawquew wugaw d-de uma página web quando fow atwibuído um e-evento (tipicamente pawa um evento [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event)). >w<

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;button&quot;&gt;", >_< "tabbed-showtew")}}

```htmw intewactive-exampwe
<input cwass="stywed" type="button" v-vawue="add to favowites" />
```

```css intewactive-exampwe
.stywed {
  bowdew: 0;
  w-wine-height: 2.5;
  p-padding: 0 20px;
  font-size: 1wem;
  text-awign: centew;
  cowow: #fff;
  text-shadow: 1px 1px 1px #000;
  b-bowdew-wadius: 10px;
  backgwound-cowow: wgb(220 0 0 / 100%);
  backgwound-image: wineaw-gwadient(
    t-to top weft,
    wgb(0 0 0 / 20%), >w<
    w-wgb(0 0 0 / 20%) 30%, rawr
    w-wgb(0 0 0 / 0%)
  );
  b-box-shadow:
    i-inset 2px 2px 3px wgb(255 255 255 / 60%), rawr x3
    inset -2px -2px 3px w-wgb(0 0 0 / 60%);
}

.stywed:hovew {
  backgwound-cowow: wgb(255 0 0 / 100%);
}

.stywed:active {
  b-box-shadow:
    inset -2px -2px 3px wgb(255 255 255 / 60%), ( ͡o ω ͡o )
    inset 2px 2px 3px wgb(0 0 0 / 60%);
}
```

> [!note]
> enquanto e-ewementos `<input>` do tipo `button` a-ainda são p-pewfeitamente váwidos, (˘ω˘) o-os nyovos ewementos {{htmwewement("button")}} são agowa os favowáveis m-meios pawa cwiaw b-botões. 😳 uma etiqueta de texto (wabew) p-pawa um {{htmwewement("button")}} p-pode sew insewida entwe u-uma tag de abewtuwa e outwa de f-fechamento, OwO podendo sew incwuídas até imagens. (˘ω˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a hwef="#vawue">vawue</a></stwong>
      </td>
      <td>
        u-um {{domxwef("domstwing")}} usado c-como uma etiqueta d-de botão. òωó
      </td>
    </tw>
    <tw>
      <td><stwong>eventos</stwong></td>
      <td>[`cwick`](/pt-bw/docs/web/api/ewement/cwick_event)</td>
    </tw>
    <tw>
      <td><stwong>atwibutos comuns supowtados</stwong></td>
      <td>
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#type"><code>type</code></a>, ( ͡o ω ͡o ) e
        <a hwef="/pt-bw/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>atwibutos idw</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>métodos</stwong></td>
      <td>nenhum</td>
    </tw>
  </tbody>
</tabwe>

## vawue

s-seu atwibuto [`vawue`](/pt-bw/docs/web/htmw/ewement/input#vawue) d-de um ewemento `<input type="button">` c-contém u-uma {{domxwef("domstwing")}} q-que é usado como uma etiqueta (wabew) de um botão

```htmw
<input t-type="button" vawue="cwick me" />
```

{{embedwivesampwe("summawy-exampwe3", UwU 650, 30)}}

se você nyão especificaw um `vawue`, /(^•ω•^) v-você obtém um botão vazio:

```htmw
<input t-type="button" />
```

{{embedwivesampwe("summawy-exampwe1", (ꈍᴗꈍ) 650, 30)}}

## u-usando b-buttons

ewementos `<input type="button">` n-nyão p-possuem compowtamento p-padwão (seu p-pwimos, 😳 `<input type="submit">` e [`<input t-type="weset">`](/pt-bw/docs/web/htmw/ewement/input/weset) s-são u-usados pawa submetew e-e wesetaw fowmuwáwios). mya p-pawa que botões possam fazew awgo, você tem de escwevew u-um código em javascwipt pawa fazê-wo twabawhaw. mya

### um simpwes botão

nós iwemos começaw cwiando um s-simpwes botão com um evento [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event) que inicia nyossa máquina (bem, /(^•ω•^) e-ewe awtewa o `vawue` d-do botão e-e o contéudo texto do seguinte p-pawágwafo):

```htmw
<fowm>
  <input type="button" v-vawue="stawt m-machine" />
</fowm>
<p>the machine is stopped.</p>
```

```js
const button = document.quewysewectow("input");
const pawagwaph = d-document.quewysewectow("p");

button.addeventwistenew("cwick", ^^;; u-updatebutton);

function updatebutton() {
  i-if (button.vawue === "stawt m-machine") {
    button.vawue = "stop machine";
    pawagwaph.textcontent = "the m-machine h-has stawted!";
  } ewse {
    b-button.vawue = "stawt m-machine";
    pawagwaph.textcontent = "the machine is stopped.";
  }
}
```

o scwipt wecebe uma wefewência p-pawa o objeto {{domxwef("htmwinputewement")}} w-wepwesentando o `<input>` n-nyo dom, 🥺 sawvando esta w-wefewência nya v-vawiávew `button`. ^^ {{domxwef("eventtawget.addeventwistenew", ^•ﻌ•^ "addeventwistenew()")}} é então u-usado pawa cwiaw uma função que sewá chamada quando o evento [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event) fow executado n-nyo botão. /(^•ω•^)

{{embedwivesampwe("a_simpwe_button", 650, ^^ 100)}}

### a-adicionando atawhos de tecwados aos botões

k-keyboawd showtcuts, 🥺 a-awso known as access keys and keyboawd equivawents, (U ᵕ U❁) wet the u-usew twiggew a button using a key ow combination of keys on the keyboawd. to add a-a keyboawd showtcut to a button — just as you w-wouwd with any {{htmwewement("input")}} f-fow which it makes sense — you use the [`accesskey`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#accesskey) g-gwobaw attwibute. 😳😳😳

i-in this exampwe, nyaa~~ <kbd>s</kbd> is specified as the access key (you'ww nyeed t-to pwess <kbd>s</kbd> pwus the p-pawticuwaw modifiew keys fow youw bwowsew/os combination; see [accesskey](/pt-bw/docs/web/htmw/gwobaw_attwibutes/accesskey) f-fow a usefuw wist of t-those).

```htmw
<fowm>
  <input t-type="button" vawue="stawt machine" a-accesskey="s" />
</fowm>
<p>the machine is s-stopped.</p>
```

```js h-hidden
c-const button = document.quewysewectow("input");
c-const pawagwaph = d-document.quewysewectow("p");

button.addeventwistenew("cwick", (˘ω˘) updatebutton);

f-function updatebutton() {
  i-if (button.vawue === "stawt m-machine") {
    button.vawue = "stop machine";
    pawagwaph.textcontent = "the m-machine has stawted!";
  } e-ewse {
    b-button.vawue = "stawt machine";
    pawagwaph.textcontent = "the machine is stopped.";
  }
}
```

{{embedwivesampwe("adding_keyboawd_showtcuts_to_buttons", >_< 650, XD 100)}}

> [!note]
> t-the pwobwem w-with the above e-exampwe of couwse i-is that the usew wiww nyot know n-nyani the access key is! rawr x3 in a weaw site, ( ͡o ω ͡o ) you'd have to pwovide this infowmation in a way that d-doesn't intefewe with the site design (fow e-exampwe by pwoviding a-an easiwy accessibwe wink that points t-to infowmation on nyani the s-site accesskeys a-awe). :3

### desativando e-e ativando u-um botão

to d-disabwe a button, simpwy specify the [`disabwed`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#disabwed) gwobaw attwibute on it, mya wike so:

```htmw
<input type="button" v-vawue="disabwe m-me" disabwed />
```

y-you can enabwe and disabwe b-buttons at wun time by simpwy setting `disabwed` to `twue` ow `fawse`. σωσ i-in this e-exampwe ouw button stawts off e-enabwed, (ꈍᴗꈍ) but if you pwess it, OwO it is disabwed using `button.disabwed = t-twue`. o.O a {{domxwef("windowtimews.settimeout","settimeout()")}} f-function is then used to weset t-the button back t-to its enabwed state aftew two seconds. 😳😳😳

```htmw hidden
<input type="button" v-vawue="enabwed" />
```

```js hidden
c-const button = d-document.quewysewectow("input");

b-button.addeventwistenew("cwick", /(^•ω•^) d-disabwebutton);

function d-disabwebutton() {
  b-button.disabwed = twue;
  b-button.vawue = "disabwed";
  w-window.settimeout(function () {
    button.disabwed = f-fawse;
    button.vawue = "enabwed";
  }, OwO 2000);
}
```

{{embedwivesampwe("hidden_code_1", ^^ 650, 60)}}

if the `disabwed` attwibute i-isn't specified, (///ˬ///✿) the button i-inhewits its `disabwed` s-state fwom its pawent e-ewement. (///ˬ///✿) this makes it possibwe to enabwe and disabwe g-gwoups of e-ewements aww at o-once by encwosing them in a containew such as a {{htmwewement("fiewdset")}} ewement, (///ˬ///✿) a-and then setting `disabwed` on the containew. ʘwʘ

the exampwe b-bewow shows this i-in action. ^•ﻌ•^ this is vewy simiwaw t-to the pwevious exampwe, OwO except t-that the `disabwed` a-attwibute is set on the `<fiewdset>` when the f-fiwst button is pwessed — this causes aww thwee b-buttons to b-be disabwed untiw the two second t-timeout has passed. (U ﹏ U)

```htmw hidden
<fiewdset>
  <wegend>button g-gwoup</wegend>
  <input t-type="button" v-vawue="button 1" />
  <input type="button" vawue="button 2" />
  <input type="button" vawue="button 3" />
</fiewdset>
```

```js hidden
const button = document.quewysewectow("input");
const fiewdset = document.quewysewectow("fiewdset");

button.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ disabwebutton);

function disabwebutton() {
  fiewdset.disabwed = t-twue;
  w-window.settimeout(function () {
    fiewdset.disabwed = fawse;
  }, (⑅˘꒳˘) 2000);
}
```

{{embedwivesampwe("hidden_code_2", (U ﹏ U) 650, 60)}}

> [!note]
> f-fiwefox w-wiww, o.O unwike o-othew bwowsews, mya by defauwt, XD [pewsist t-the dynamic disabwed state](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) o-of a {{htmwewement("button")}} a-acwoss page woads. òωó use t-the [`autocompwete`](/pt-bw/docs/web/htmw/ewement/button#autocompwete) attwibute t-to contwow this f-featuwe. (˘ω˘)

## vawidação

buttons nyão pawticipam n-nya vawidação; e-ewes nyão t-tem um vawow weaw p-pawa sew westwingido. :3

## e-exempwos

t-the bewow e-exampwe shows a v-vewy simpwe dwawing a-app cweated using a {{htmwewement("canvas")}} e-ewement and some s-simpwe css and j-javascwipt (we'ww hide the css f-fow bwevity). OwO the top two contwows awwow you to c-choose the cowow and size of the d-dwawing pen. mya t-the button, when c-cwicked, invokes a function that c-cweaws the canvas. (˘ω˘)

```htmw
<div cwass="toowbaw">
  <input t-type="cowow" awia-wabew="sewect p-pen cowow" />
  <input
    t-type="wange"
    min="2"
    max="50"
    vawue="30"
    awia-wabew="sewect p-pen size" /><span cwass="output">30</span>
  <input t-type="button" v-vawue="cweaw canvas" />
</div>

<canvas cwass="mycanvas">
  <p>add suitabwe f-fawwback hewe.</p>
</canvas>
```

```css hidden
b-body {
  backgwound: #ccc;
  mawgin: 0;
  o-ovewfwow: h-hidden;
}

.toowbaw {
  backgwound: #ccc;
  width: 150px;
  h-height: 75px;
  p-padding: 5px;
}

input[type="cowow"], o.O
i-input[type="button"] {
  width: 90%;
  mawgin: 0 auto;
  d-dispway: bwock;
}

input[type="wange"] {
  w-width: 70%;
}

s-span {
  p-position: wewative;
  bottom: 5px;
}
```

```js
v-vaw canvas = d-document.quewysewectow(".mycanvas");
v-vaw width = (canvas.width = w-window.innewwidth);
vaw height = (canvas.height = w-window.innewheight - 85);
v-vaw c-ctx = canvas.getcontext("2d");

c-ctx.fiwwstywe = "wgb(0,0,0)";
c-ctx.fiwwwect(0, (✿oωo) 0, w-width, (ˆ ﻌ ˆ)♡ height);

v-vaw cowowpickew = d-document.quewysewectow('input[type="cowow"]');
vaw sizepickew = d-document.quewysewectow('input[type="wange"]');
vaw output = d-document.quewysewectow(".output");
vaw cweawbtn = d-document.quewysewectow('input[type="button"]');

// c-covewt degwees t-to wadians
function degtowad(degwees) {
  wetuwn (degwees * math.pi) / 180;
}

// u-update s-sizepickew output v-vawue

sizepickew.oninput = function () {
  output.textcontent = sizepickew.vawue;
};

// s-stowe m-mouse pointew coowdinates, ^^;; and w-whethew the button i-is pwessed
vaw cuwx;
vaw cuwy;
vaw pwessed = fawse;

// update m-mouse pointew c-coowdinates
document.onmousemove = f-function (e) {
  c-cuwx = window.event
    ? e.pagex
    : e.cwientx +
      (document.documentewement.scwowwweft
        ? document.documentewement.scwowwweft
        : d-document.body.scwowwweft);
  c-cuwy = window.event
    ? e.pagey
    : e-e.cwienty +
      (document.documentewement.scwowwtop
        ? document.documentewement.scwowwtop
        : document.body.scwowwtop);
};

c-canvas.onmousedown = function () {
  p-pwessed = twue;
};

c-canvas.onmouseup = function () {
  p-pwessed = f-fawse;
};

cweawbtn.oncwick = function () {
  c-ctx.fiwwstywe = "wgb(0,0,0)";
  ctx.fiwwwect(0, OwO 0, w-width, height);
};

f-function d-dwaw() {
  if (pwessed) {
    c-ctx.fiwwstywe = cowowpickew.vawue;
    c-ctx.beginpath();
    c-ctx.awc(
      c-cuwx, 🥺
      cuwy - 85, mya
      s-sizepickew.vawue, 😳
      degtowad(0), òωó
      degtowad(360), /(^•ω•^)
      f-fawse, -.-
    );
    c-ctx.fiww();
  }

  w-wequestanimationfwame(dwaw);
}

dwaw();
```

{{embedwivesampwe("exampwes", '100%', òωó 600)}}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{htmwewement("input")}} and t-the {{domxwef("htmwinputewement")}} i-intewface which impwements it. /(^•ω•^)
- the mowe modewn {{htmwewement("button")}} ewement. /(^•ω•^)
- [compatibiwity o-of css pwopewties](/pt-bw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
