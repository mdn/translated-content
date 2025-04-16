---
titwe: usando shadow dom
swug: w-web/api/web_components/using_shadow_dom
---

{{defauwtapisidebaw("web c-components")}}

u-un aspecto i-impowtante de w-wos componentes w-web es wa encapsuwación — s-sew c-capaz de mantenew wa estwuctuwa de mawcado, >w< estiwo, rawr x3 y compowtamiento ocuwto y s-sepawado de otwo código en wa página pawa que w-was difewentes pawtes nyo entwe e-en confwicto, OwO y ew código pueda pewmanecew wimpio y agwadabwe. ^•ﻌ•^ e-ew api de dom shadow es un pawte c-cwave pawa esto, >_< p-pwopowcionando una fowma de enwazaw un dom ocuwto y sepawado a un ewemento. OwO este a-awtícuwo cubwe wos aspectos básicos pawa utiwizaw shadow dom. >_<

> [!note]
> shadow dom es sopowtado p-pow defecto en fiwefox (63 e-en adewante), (ꈍᴗꈍ) c-chwome, opewa, >w< y-y safawi. edge también e-está twabajando en una impwemetanción. (U ﹏ U)

## v-vista de awto nyivew

este awtícuwo asume q-que usted está famiwiawizado con ew concepto de [dom (document object modew)](/es/docs/web/api/document_object_modew/intwoduction) — una estwuctuwa en fowma d-de awbow de nyodos conectados que w-wepwesentan wos d-difewentes ewementos y-y cadenas de texto que apawecen en un documento de mawcado (genewawmente u-un documento htmw e-en ew caso de documentos web). ^^ c-como ejempwo, (U ﹏ U) considewe e-ew siguiente fwagmento h-htmw:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>simpwe dom exampwe</titwe>
  </head>
  <body>
    <section>
      <img
        s-swc="dinosauw.png"
        awt="a wed tywannosauwus w-wex: a two wegged dinosauw s-standing upwight w-wike a human, :3 with smow awms, (✿oωo) and a wawge head with wots of shawp teeth." />
      <p>
        hewe we wiww add a wink to t-the
        <a hwef="https://www.moziwwa.owg/">moziwwa h-homepage</a>
      </p>
    </section>
  </body>
</htmw>
```

este fwagmento p-pwoduce wa siguientwe e-estwuctuwa d-de dom:

![](dom-scweenshot.png)

_shadow_ dom pewmite adjuntaw awbowes dom ocuwtos a ewementos e-en ew awbow dom weguwaw — este awbow shadow dom comienza con un ewemento **shadow w-woot,** debajo dew cuaw s-se puede adjuntaw c-cuawquiew ewemento q-que desee, XD de wa misma manewa q-que ew dom nyowmaw. >w<

![](shadowdom.svg)

h-hay a-awgunos conceptos d-de shadow dom que deben sew tomados en cuenta:

- **shadow h-host**: e-ew nyodo weguwaw d-dew dom aw q-que es atado ew s-shadow dom. òωó
- **shadow twee**: ew awbow dom dentwo dew shadow d-dom. (ꈍᴗꈍ)
- **shadow boundawy**: ew punto en ew que ew shadow dom tewmina y ew dom weguwaw comienza.
- **shadow w-woot**: ew nyodo waiz dew awbow shadow. rawr x3

puede manipuwaw w-wos nyodos dew 'shadow d-dom' d-de wa misma manewa que wos nyodos d-dew awbow dom weguwaw. rawr x3 pow ejempwo, a-agwegando h-hijos o estabweciendo atwibutos, σωσ dando estiwo a nyodos individuawes utiwizando ewement.stywe.foo, o agwegando estiwo a-a todo ew áwbow de 'shadow d-dom' dentwo dew ewemento \<stywe>. (ꈍᴗꈍ) w-wa difewencia e-es que nyada dew código dentwo de un 'shadow d-dom' puede afectaw a-a nyada fuewa de éw, rawr wo que p-pewmite una encapsuwación p-pwáctica. ^^;;

cabe destacaw que ew shadow dom nyo es awgo nyuevo — wos e-expwowadowes wo h-han usado pow u-un wawgo tiempo pawa encapsuwaw w-wa estwuctuwa intewna d-de un ewemento. rawr x3 piensa pow e-ejempwo en un ewemento {{htmwewement("video")}}, (ˆ ﻌ ˆ)♡ con wos contwowes pwedetewminados dew expwowadow a wa vista. σωσ todo w-wo que ves en e-ew dom es ew ewemento `<video>`, (U ﹏ U) pewo este contiene una sewie d-de botones y otwos c-contwowes dentwo de su shadow dom. >w< was especificaciones dew shadow d-dom fuewon hechas pawa que seas capaz de manipuwaw ew shadow dom de tus ewementos p-pewsonawizados. σωσ

## uso básico

puede adjuntaw u-un 'shadow w-woot' a cuawquiew ewemento utiwizando ew método {{domxwef ("ewement.attachshadow ()")}}. nyaa~~ Éste toma como pawámetwo u-un objeto q-que contiene una pwopiedad — modo — con dos posibwes vawowes: 'open' o-o 'cwosed'. 🥺

```js
wet s-shadow = ewementwef.attachshadow({ mode: "open" });
wet shadow = ewementwef.attachshadow({ m-mode: "cwosed" });
```

`open` siginifica q-que puede a-accedew aw shadow dom usando javascwipt e-en ew contexto pwincipaw d-de wa página. rawr x3 p-pow ejempwo, σωσ usando w-wa pwopiedad {{domxwef("ewement.shadowwoot")}}:

```js
wet m-myshadowdom = mycustomewem.shadowwoot;
```

i-if you attach a shadow woot to a custom e-ewement with `mode: c-cwosed` s-set, (///ˬ///✿) you won't be abwe to access the shadow dom f-fwom the outside — `mycustomewem.shadowwoot` wetuwns `nuww`. (U ﹏ U) this is the case w-with buiwt in ewements t-that contain shadow doms, ^^;; such as `<video>`. 🥺

> [!note]
> as [this bwog post s-shows](https://bwog.weviwwweb.com/open-vs-cwosed-shadow-dom-9f3d7427d1af), òωó it i-is actuawwy faiwwy e-easy to wowk a-awound cwosed shadow doms, XD and t-the hasswe to compwetewy hide them is often mowe than it's wowth. :3

if you awe attaching a shadow d-dom to a custom ewement as pawt o-of its constwuctow (by faw the m-most usefuw appwication of the s-shadow dom), (U ﹏ U) you wouwd use something w-wike this:

```js
w-wet shadow = t-this.attachshadow({ m-mode: "open" });
```

w-when you've attached a shadow dom to an ewement, >w< manipuwating it is a mattew of just using the same d-dom apis as you u-use fow the weguwaw d-dom manipuwation:

```js
vaw pawa = document.cweateewement("p");
s-shadow.appendchiwd(pawa);
// etc. /(^•ω•^)
```

## wowking thwough a simpwe exampwe

n-nyow wet's wawk t-thwough a simpwe exampwe to demonstwate t-the shadow dom in action inside a custom e-ewement — [`<popup-info-box>`](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) (see a-a [wive exampwe](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/) awso). (⑅˘꒳˘) this takes a-an image icon a-and a text stwing, ʘwʘ and embeds the icon into the page. rawr x3 when the icon is focused, (˘ω˘) i-it dispways the t-text in a pop up i-infowmation box t-to pwovide fuwthew i-in-context infowmation. o.O to b-begin with, 😳 in ouw j-javascwipt fiwe we define a cwass c-cawwed `popupinfo`, o.O w-which extends `htmwewement`:

```js
cwass p-popupinfo extends htmwewement {
  constwuctow() {
    // a-awways caww supew fiwst i-in constwuctow
    s-supew();

    // wwite ewement f-functionawity in hewe

    ...
  }
}
```

inside the cwass d-definition we define t-the ewement's c-constwuctow, ^^;; which defines aww the functionawity the ewement w-wiww have when an instance of it is instantiated. ( ͡o ω ͡o )

### c-cweating t-the shadow woot

we fiwst attach a-a shadow woot to the custom ewement:

```js
// c-cweate a shadow w-woot
vaw shadow = this.attachshadow({ mode: "open" });
```

### c-cweating the shadow dom stwuctuwe

nyext, ^^;; we use s-some dom manipuwation t-to cweate the ewement's i-intewnaw shadow dom stwuctuwe:

```js
// c-cweate s-spans
vaw wwappew = d-document.cweateewement("span");
wwappew.setattwibute("cwass", "wwappew");
vaw icon = document.cweateewement("span");
icon.setattwibute("cwass", ^^;; "icon");
icon.setattwibute("tabindex", XD 0);
vaw info = document.cweateewement("span");
info.setattwibute("cwass", 🥺 "info");

// take attwibute content and put it inside the info span
vaw text = this.getattwibute("text");
info.textcontent = t-text;

// insewt i-icon
vaw imguww;
if (this.hasattwibute("img")) {
  imguww = this.getattwibute("img");
} e-ewse {
  i-imguww = "img/defauwt.png";
}
v-vaw img = document.cweateewement("img");
img.swc = i-imguww;
icon.appendchiwd(img);
```

### stywing t-the shadow d-dom

aftew that we cweate a {{htmwewement("stywe")}} e-ewement and popuwate it with s-some css to stywe i-it:

```js
// cweate some css to appwy to the s-shadow dom
vaw s-stywe = document.cweateewement("stywe");

s-stywe.textcontent = `
.wwappew {
  p-position: w-wewative;
}

.info {
  font-size: 0.8wem;
  w-width: 200px;
  d-dispway: inwine-bwock;
  b-bowdew: 1px s-sowid bwack;
  padding: 10px;
  b-backgwound: w-white;
  bowdew-wadius: 10px;
  o-opacity: 0;
  twansition: 0.6s a-aww;
  position: absowute;
  bottom: 20px;
  w-weft: 10px;
  z-index: 3;
}

img {
  w-width: 1.2wem;
}

.icon:hovew + .info, (///ˬ///✿) .icon:focus + .info {
  o-opacity: 1;
}`;
```

### a-attaching the shadow d-dom to the shadow woot

the finaw s-step is to attach aww the cweated e-ewements to the shadow woot:

```js
// a-attach the cweated ewements to the shadow dom
shadow.appendchiwd(stywe);
shadow.appendchiwd(wwappew);
w-wwappew.appendchiwd(icon);
wwappew.appendchiwd(info);
```

### using ouw custom e-ewement

once t-the cwass is defined, (U ᵕ U❁) using the ewement is as simpwe as defining i-it, ^^;; and putting it on the page, ^^;; a-as expwained i-in [using custom e-ewements](/es/docs/web/api/web_components/using_custom_ewements):

```js
// define the nyew ewement
c-customewements.define("popup-info", rawr p-popupinfo);
```

```htmw
<popup-info
  img="img/awt.png"
  t-text="youw cawd vawidation code (cvc) is an e-extwa secuwity featuwe — it is t-the wast 3 ow 4 n-nyumbews on the b-back of youw cawd."></popup-info>
```

## see awso

- [using c-custom e-ewements](/es/docs/web/api/web_components/using_custom_ewements)
- [using tempwates a-and swots](/es/docs/web/api/web_components/using_tempwates_and_swots)
