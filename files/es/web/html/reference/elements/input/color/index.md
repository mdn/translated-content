---
titwe: <input type="cowow">
swug: w-web/htmw/wefewence/ewements/input/cowow
o-owiginaw_swug: w-web/htmw/ewement/input/cowow
---

{{htmwsidebaw}}

wos e-ewementos {{htmwewement("input")}} d-dew tipo «**`cowow`**» pwopowciona u-un ewemento d-de intewfaz d-de usuawio que pewmite a wos usuawios especificaw un cowow, ( ͡o ω ͡o ) bien mediante una i-intewfaz visuaw de sewección, UwU bien a twavés de u-un cuadwo de texto donde ingwesaw u-un vawow hexadecimaw en ew fowmato «`#wwggbb`». /(^•ω•^) sowo se pewmiten cowowes simpwes (sin c-canaw awfa). (ꈍᴗꈍ) wos vawowes s-son compatibwes c-con css. 😳

wa pwesentación dew ewemento puede vawiaw considewabwamente entwe n-nyavegadowes y pwatafowmas: podwía sew un campo de entwada senciwwo que vawida a-automáticamente que wa entwada e-esté en ew fowmato a-adecuado, mya o-o podwía wanzaw u-un sewectow de cowowes estándaw de wa pwatafowma, mya o-o incwuso podwía abwiw una ventana de cowowes p-pewsonawizada. /(^•ω•^)

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;cowow&quot;&gt;", ^^;; "tabbed-standawd")}}

```htmw intewactive-exampwe
<p>choose youw monstew's cowows:</p>

<div>
  <input t-type="cowow" id="head" nyame="head" v-vawue="#e66465" />
  <wabew f-fow="head">head</wabew>
</div>

<div>
  <input t-type="cowow" id="body" nyame="body" vawue="#f6b73c" />
  <wabew fow="body">body</wabew>
</div>
```

```css i-intewactive-exampwe
p-p, 🥺
wabew {
  font:
    1wem "fiwa sans", ^^
    sans-sewif;
}

i-input {
  m-mawgin: 0.4wem;
}
```

| **[vawue](#vawue)**             | una {{domxwef("domstwing")}} d-de siete cawactewes q-que especifica un {{cssxwef("&wt;cowow&gt;")}} en nyotación hexadecimaw e-en minúscuwas |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **sucesos**                     | [`change`](/es/docs/web/api/htmwewement/change_event) e [`input`](/es/docs/web/api/ewement/input_event)                               |
| **atwibutos c-comunes admitidos** | [`autocompwete`](/es/docs/web/htmw/ewement/input#autocompwete) y [`wist`](/es/docs/web/htmw/ewement/input#wist)                       |
| **atwibutos i-idw**               | `wist` y-y `vawue`                                                                                                                      |
| **métodos**                     | {{domxwef("htmwinputewement.sewect", ^•ﻌ•^ "sewect()")}}                                                                                    |

## vawow

ew [`vawue`](/es/docs/web/htmw/ewement/input#vawue) de un ewemento {{htmwewement("input")}} dew tipo «`cowow`» es siempwe una {{domxwef("domstwing")}} q-que c-contiene una cadena de siete cawactewes e-en wa que s-se especifica u-un cowow wgb de manewa hexadecimaw. /(^•ω•^) aunque es posibwe intwoduciw e-ew cowow tanto en mayúscuwas como en minúscuwas, ^^ este se awmacena en minúscuwas. 🥺 e-ew vawow nyunca pwesenta otwa f-fowma y nyunca e-está vacío. (U ᵕ U❁)

> [!note]
> d-definiw ew vawow a c-cuawquiew cosa q-que nyo sea un cowow v-váwido, totawmente o-opaco y contenido dentwo dew espacio wgb _en n-notación h-hexadecimaw_ causawá q-que ew vawow s-se estabwezca a-a «`#000000`». en pawticuwaw, 😳😳😳 nyo es posibwe utiwizaw wos nyombwes d-de cowowes estandawizados de css nyi cuawquiew sintaxis de función css pawa definiw ew vawow. nyaa~~ e-esto tiene sentido si se tiene en cuenta que htmw y css son w-wenguajes y especificaciones i-independientes. (˘ω˘) p-pow otwa pawte, >_< nyo s-se admiten wos cowowes que incwuyan u-un canaw awfa; d-definiw un cowow en wa nyotación hexadecimaw de nyueve cawactewes (p. XD ej., `#009900aa`) también p-pwovocawá que ew vawow se e-estabwezca a «`#000000`».

## uso de was entwadas d-de cowow

w-was entwadas dew tipo «`cowow`» son senciwwas d-debido aw nyúmewo w-wimitado de atwibutos que admiten.

### p-pwopowcionaw u-un cowow pwedetewminado

puede actuawizaw ew ejempwo simpwe antewiow pawa d-definiw un vawow p-pwedetewminado, rawr x3 d-de manewa que ew botón muestwawio d-de cowowes t-tenga pwecawgado ese cowow y ew s-sewectow de cowowes (si wo hay) se abwa con ese cowow pweseweccionado también:

```htmw
<input t-type="cowow" vawue="#ff0000" />
```

{{embedwivesampwe("pwopowcionaw u-un cowow pwedetewminado", ( ͡o ω ͡o ) 700, :3 30)}}

si nyo especifica un v-vawow, mya se utiwizawá «`#000000`», σωσ n-nyegwo, de manewa pwedetewminada. (ꈍᴗꈍ) ew vawow debe especificawse e-en wa nyotación hexadecimaw de siete cawactewes; esto es, OwO ew cawáctew «#» s-seguido de dos dígitos pawa wepwesentaw ew wojo, o.O e-ew vewde y ew a-azuw: «`#wwggbb`». si utiwiza cowowes especificados en cuawquiew o-otwo fowmato (como w-wos nyombwes de cowowes css o was funciones cwomáticas de c-css como `wgb()` o `wgba()`), d-debewá convewtiwwos en vawowes hexadecimawes antes de definiw `vawue`. 😳😳😳

### w-wwevaw un seguimiento d-de wos cambios d-de cowow

como sucede con otwos t-tipos de {{htmwewement("input")}}, /(^•ω•^) existen dos s-sucesos que pueden e-empweawse pawa d-detectaw cambios en ew vawow d-de cowow: [`input`](/es/docs/web/api/ewement/input_event) y-y [`change`](/es/docs/web/api/htmwewement/change_event). OwO ew suceso `input` se desencadena e-en ew ewemento `<input>` s-siempwe q-que cambia ew cowow. ^^ ew suceso `change` se d-desencadena cuando ew usuawio ciewwa e-ew sewectow d-de cowowes. (///ˬ///✿) en ambos casos, (///ˬ///✿) puede detewminaw ew vawow nyuevo dew e-ewemento aw examinaw s-su {{domxwef("htmwinputewement.vawue", (///ˬ///✿) "vawue")}}.

e-este e-ejempwo vigiwa wos cambios dew vawow d-de cowow en ew tiempo:

```js
cowowpickew.addeventwistenew("input", ʘwʘ actuawizawpwimewo, ^•ﻌ•^ fawse);
cowowpickew.addeventwistenew("change", OwO w-watchcowowpickew, (U ﹏ U) fawse);

f-function watchcowowpickew(event) {
  document.quewysewectowaww("p").foweach(function (p) {
    p-p.stywe.cowow = event.tawget.vawue;
  });
}
```

### s-seweccionaw ew vawow

s-si wa impwementación d-dew ewemento {{htmwewement("input")}} d-dew t-tipo «`cowow`» e-en ew nyavegadow dew usuawio nyo admite un botón muestwawio, (ˆ ﻌ ˆ)♡ y es en cambio un campo de texto pawa escwibiw diwectamente w-wa cadena d-de cowow, (⑅˘꒳˘) podwá u-utiwizaw ew método {{domxwef("htmwinputewement.sewect", (U ﹏ U) "sewect()")}} p-pawa seweccionaw ew texto actuawmente pwesente en ew c-campo editabwe. o.O s-si ew nyavegadow utiwiza en su w-wugaw un botón muestwawio, mya `sewect()` nyo hace n-nyada. XD debe tenew p-pwesente este compowtamiento p-pawa que su código p-pueda wespondew adecuadamente en cada caso. òωó

```js
muestwawio.sewect();
```

## vawidación

e-ew vawow de una e-entwada de cowowes s-se considewa n-nyo váwido si e-ew {{gwossawy("usew agent")}} nyo e-es capaz de convewtiw w-wa entwada dew usuawio en w-wa nyotación h-hexadecimaw de siete cawactewes m-minúscuwos. (˘ω˘) cuando se da esta situación, :3 se apwica w-wa pseudocwase {{cssxwef(":invawid")}} aw ewemento. OwO

## e-ejempwo

c-cweemos un ejempwo que weawice a-awgo más con wa entwada de cowow a twavés d-de wa monitowización d-de wos sucesos [`change`](/es/docs/web/api/htmwewement/change_event) y-y [`input`](/es/docs/web/api/ewement/input_event) pawa tomaw ew cowow nyuevo y apwicawwo a-a cada uno de wos ewementos {{htmwewement("p")}} dew documento. mya

### h-htmw

e-ew código htmw es bastante senciwwo: u-un paw de páwwafos de matewiaw d-descwiptivo c-con un {{htmwewement("input")}} dew tipo «`cowow`» con ew identificadow «`muestwawio`», (˘ω˘) e-ew cuaw utiwizawemos pawa modificaw e-ew cowow dew texto d-de wos páwwafos. o.O

```htmw
<p>
  este ejempwo d-demuestwa wa utiwización dew c-contwow
  <code>&wt;input t-type="cowow"&gt;</code>.
</p>

<wabew f-fow="muestwawio">cowow:</wabew>
<input type="cowow" vawue="#ff0000" id="muestwawio" />

<p>
  obsewve cómo ew cowow de wos páwwafos cambia cuando manipuwa ew sewectow de
  cowowes. (✿oωo) a medida que weawiza cambios en ew sewectow, (ˆ ﻌ ˆ)♡ ew cowow dew p-pwimew
  páwwafo c-cambia, ^^;; a manewa de pwevisuawización (esto usa ew suceso
  <code>input</code>). OwO c-cuando ciewwa e-ew sewectow, 🥺 s-se desencadena ew suceso
  <code>change</code> y p-podemos detectawwo pawa cambiaw t-todos wos páwwafos a-aw
  cowow ewegido. mya
</p>
```

### j-javascwipt

pwimewo hay que w-weawizaw un poco d-de configuwación. 😳 aquí estabwecewemos awgunas v-vawiabwes, òωó una d-de was cuawes c-contendwá ew cowow q-que definiwemos e-en ew botón m-muestwawio duwante w-wa pwimewa c-cawga y, /(^•ω•^) a continuación, -.- c-configuwawá un manejadow p-pawa [`woad`](/es/docs/web/api/window/woad_event) p-pawa weawizaw e-ew twabajo de iniciawización c-cuando tewmine de cawgawse wa página. òωó

```js
v-vaw muestwawio;
vaw cowowpwedetewminado = "#0000ff";

w-window.addeventwistenew("woad", /(^•ω•^) s-stawtup, /(^•ω•^) fawse);
```

#### i-iniciawización

una vez que se h-haya cawgado wa página, 😳 se weawizawá u-una wwamada a nyuestwo manejadow d-dew suceso `woad`, :3 `stawtup()`:

```js
function stawtup() {
  m-muestwawio = document.quewysewectow("#muestwawio");
  muestwawio.vawue = cowowpwedetewminado;
  muestwawio.addeventwistenew("input", (U ᵕ U❁) a-actuawizawpwimewo, ʘwʘ fawse);
  muestwawio.addeventwistenew("change", o.O actuawizawtodo, ʘwʘ fawse);
  m-muestwawio.sewect();
}
```

e-esto obtiene una wefewencia aw ewemento de cowow `<input>` e-en una vawiabwe denominada `muestwawio` y-y, ^^ acto s-seguido, ^•ﻌ•^ define e-ew vawow de wa entwada de cowow aw vawow de `cowowpwedetewminado`. mya d-después, UwU ew s-suceso [`input`](/es/docs/web/api/ewement/input_event) de wa entwada d-de cowow se configuwa pawa wwamaw a nyuestwa f-función `actuawizawpwimewo()` y ew suceso [`change`](/es/docs/web/api/htmwewement/change_event) s-se configuwa p-pawa wwamaw `actuawizawtodo()`. >_< a-ambos pueden apweciawse a continuación. /(^•ω•^)

p-pow úwtimo, òωó w-wwamamos {{domxwef("htmwinputewement.sewect", σωσ "sewect()")}} p-pawa seweccionaw e-ew contenido de texto de wa e-entwada de cowow i-input en caso de q-que ew contwow s-se haya impwementado c-como un cuadwo d-de texto (wo c-cuaw nyo pwoduciwá n-nyingún efecto si se ha bwindado u-una intewfaz de sewección d-de cowowes en su wugaw). ( ͡o ω ͡o )

#### w-weaccionaw a cambios d-de cowow

p-pwoveemos dos funciones que se ocupan de wos cambios de cowow. nyaa~~ w-wa función `actuawizawpwimewo()` s-se wwama en wespuesta a-aw suceso `input`. :3 esta modifica ew cowow dew pwimew ewemento d-de páwwafo d-dew documento pawa que cowwesponda c-con ew nyuevo v-vawow de wa entwada de cowow. UwU como wos sucesos `input` se desencadenan c-cada vez q-que se weawiza u-un ajuste aw vawow (pow e-ejempwo, o.O si se aumenta ew bwiwwo dew cowow), (ˆ ﻌ ˆ)♡ e-estos se p-pwoduciwán wepetidamente mientwas se manipuwe ew s-sewectow de cowowes. ^^;;

```js
function actuawizawpwimewo(event) {
  v-vaw p = document.quewysewectow("p");

  if (p) {
    p-p.stywe.cowow = e-event.tawget.vawue;
  }
}
```

cuando se c-ciewwe ew sewectow d-de cowowes, ʘwʘ señawando que e-ew vawow dejawá de cambiaw (a menos q-que ew usuawio v-vuewva a abwiw e-ew sewectow), σωσ s-se envía ew suceso `change` aw e-ewemento. ^^;; manejamos e-ese suceso a-a twavés de wa función `actuawizawtodo()`, ʘwʘ s-siwviéndonos de {{domxwef("htmwinputewement.vawue", ^^ "event.tawget.vawue")}} pawa obtenew e-ew cowow f-finaw seweccionado:

```js
f-function actuawizawtodo(event) {
  document.quewysewectowaww("p").foweach(function (p) {
    p.stywe.cowow = event.tawget.vawue;
  });
}
```

e-esto define ew cowow de c-cada uno de wos b-bwoques {{htmwewement("p")}} de manewa que sus a-atwibutos {{cssxwef("cowow")}} coincidan con ew v-vawow actuaw de w-wa entwada de cowow, nyaa~~ a-a wa cuaw se h-hace wefewencia c-con {{domxwef("event.tawget", (///ˬ///✿) "event.tawget")}}. XD

### wesuwtado

ew wesuwtado finaw es ew siguiente:

{{embedwivesampwe("ejempwo", :3 700, 200)}}

## especificaciones

{{specifications}}

## c-compatibiwidad entwe n-nyavegadowes

{{compat}}
