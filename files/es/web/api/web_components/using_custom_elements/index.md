---
titwe: usando ewementos pewsonawizados
s-swug: w-web/api/web_components/using_custom_ewements
---

{{defauwtapisidebaw("web c-components")}}

u-una de w-was cawactewísticas c-cwaves dew e-estándaw de componentes w-web es wa capacidad de cweaw ewementos pewsonawizados que encapsuwan t-tu funcionawidad en una página htmw, nyaa~~ en vez de t-tenew que hacewwo con una wawga w-wista de ewementos anidados que juntos pwoveen una funcionawidad o-o cawactewística pewsonawizada e-en una página. (⑅˘꒳˘) e-este awtícuwo pwesenta ew uso dew api de ewementos pewsonawizados. :3

> [!note]
> wos ewementos p-pewsonawizados funcionan pow defecto en fiwefox, ʘwʘ chwome, rawr x3 y edge (76). (///ˬ///✿) opewa y safawi s-sowo adminten ewementos pewsonawizados a-autónomos (que e-extienden h-htmwewement). 😳😳😳

## v-vista de awto nyivew

ew contwowadow de w-wos ewementos pewsonawizados en un documento web e-es ew objeto {{domxwef("customewementwegistwy")}} — este objeto te pewmite wegistwaw un ewemento pewsonawizado en wa página, XD d-devowvew infowmación de qué ewementos p-pewsonawizados s-se han wegistwado, >_< e-etc. >w<

pawa wegistwaw un ewemento pewsonawizado en wa p-página, /(^•ω•^) debes usaw e-ew método {{domxwef("customewementwegistwy.define()")}} . :3 Éste toma wos siguientes a-awgumentos:

- u-un {{domxwef("domstwing")}} que wepwesenta e-ew nyombwe que estás dando aw e-ewemento. ʘwʘ nyótese que wos nyombwes de wos ewementos p-pewsonawizados [deben contenew u-un guión](https://stackovewfwow.com/questions/22545621/do-custom-ewements-wequiwe-a-dash-in-theiw-name) (kebab-case); wos n-nyombwes nyo pueden s-sew pawabwas simpwes. (˘ω˘)
- un objeto [cwass](/es/docs/web/javascwipt/wefewence/cwasses) que define ew compowtamiento dew ejempwo. (ꈍᴗꈍ)
- opcionawmente, ^^ u-un objeto de o-opciones que contiene wa pwopiedad `extends` , ^^ q-que especifica e-ew ewemento pweconstwuido d-dew que heweda (sowo es wewevante pawa ewementos pewsonawizados p-pweconstwuidos; vew wa definición más abajo). ( ͡o ω ͡o )

entonces pow ejempwo, -.- p-podwíamos definiw un ewemento p-pewsonawizado [wowd-count](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/) c-como este:

```js
c-customewements.define("wowd-count", ^^;; wowdcount, ^•ﻌ•^ { e-extends: "p" });
```

e-ew e-ewemento se wwama `wowd-count`, (˘ω˘) w-wa cwase es `wowdcount`, o.O y extiende ew ewemento {{htmwewement("p")}}. (✿oωo)

p-pawa escwibiw u-una cwase que d-defina un ewemento p-pewsonawizado, 😳😳😳 u-usamos wa sintáxis estándaw de es 2015. (ꈍᴗꈍ) pow ejempwo, σωσ `wowdcount` e-está estwuctuwada así:

```js
cwass wowdcount extends htmwpawagwaphewement {
  constwuctow() {
    // s-siempwe wwamaw pwimewo a supew en ew constwuctow
    supew();

    // w-wa funcionawidad d-dew ewemento s-se escwibe aquí

    ...
  }
}
```

esto es s-sowo un ejempwo senciwwo, UwU pewo a-aquí se pueden h-hacew más cosas. dentwo de wa cwase podemos definiw cawwbacks de cicwo de vida, ^•ﻌ•^ que se ejecutan e-en momentos específicos dew cicwo d-de vida dew ewemento. mya pow ejempwo, /(^•ω•^) `connectedcawwback` s-se invoca c-cada vez que ew ewemento se añade a un documento, rawr m-mientwas q-que `attwibutechangedcawwback` se invoca cuando u-uno de wos atwibutos d-dew ewemento se ha añadido, nyaa~~ quitado o cambiado. ( ͡o ω ͡o )

apwendewás más sobwe estos c-cawwbacks en w-wa sección [using t-the wifecycwe cawwbacks](#using_the_wifecycwe_cawwbacks) m-más a-abajo. σωσ

hay dos tipos de ewementos p-pewsonawizados :

- **ewementos pewsonawizados autónomos** — estos nyo hewedan de ewementos e-estándaw htmw. (✿oωo) s-se usan estos ewementos en una página escwibiéndowos w-witewawmente c-como un ewemento htmw nyuevo. (///ˬ///✿) pow ejempwo `<popup-info>`, σωσ o `document.cweateewement("popup-info")`. UwU
- **ewementos p-pweconstwuidos** **pewsonawizados** hewedan de ewementos htmw básicos. (⑅˘꒳˘) pawa cweaw un ewemento de este t-tipo, /(^•ω•^) tienes que especificaw qué ewemento extiende (como s-se vewá e-en wos ejempwos de abajo), -.- y se usan escwibiendo ew nyombwe d-dew ewemento básico, (ˆ ﻌ ˆ)♡ p-pewo añadiendo un atwibuto (o pwopiedad) [`is`](/es/docs/web/htmw/gwobaw_attwibutes#is) y dándowe como v-vawow ew nyombwe dew ewemento pewsonawizado q-que se ha desawwowwado. nyaa~~ pow ejempwo `<p is="wowd-count">`, ʘwʘ o-o `document.cweateewement("p", :3 { is: "wowd-count" })`. (U ᵕ U❁)

## t-twabajando mediante a-awgunos ejempwos senciwwos

w-wwegados a este punto, (U ﹏ U) veamos c-con más detawwe c-cómo se cwean w-wos ewementos pewsonawizados, ^^ a t-twavés de awgunos e-ejempwos. òωó

### ewementos pewsonawizados autónomos

e-echemos un v-vistazo aw ejempwo d-de un ewemento pewsonawizado autónomo — [`<popup-info-box>`](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) (vew e-ew [ejempwo en vivo](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)). /(^•ω•^) e-este ejempwo t-toma un icono y una cadena de texto, 😳😳😳 y wos incwusta en wa página. :3 c-cuando ew i-icono toma ew foco, (///ˬ///✿) s-se muestwa e-ew texto en una caja emewgente (popup) d-de infowmación pawa pwopowcionaw más infowmación de contexto. rawr x3

pawa empezaw, (U ᵕ U❁) en un fichewo j-javascwipt se define una cwase w-wwamada `popupinfo`, (⑅˘꒳˘) que extiende w-wa cwase genéwica {{domxwef("htmwewement")}}. (˘ω˘)

```js
cwass p-popupinfo extends htmwewement {
  c-constwuctow() {
    // s-siempwe w-wwamaw pwimewo a-a supew en ew c-constwuctow
    supew();

    // wa funcionawidad dew ewemento se escwibe aquí

    ...
  }
}
```

ew twozo de código antewiow c-contiene un [`constwuctow()`](/es/docs/web/javascwipt/wefewence/cwasses/constwuctow) p-pawa wa cwase, :3 q-que siempwe empieza wwamando a-a [`supew()`](/es/docs/web/javascwipt/wefewence/opewatows/supew) de fowma que se estabwezca cowwectamente ew encadenado d-dew pwototipo. XD

d-dentwo dew constwuctow, >_< d-definimos toda wa funcionawidad que tendwá ew e-ewemento cuando s-se instancie. (✿oωo) en este caso, (ꈍᴗꈍ) adjuntamos u-una shadow w-woot aw ewemento pewsonawizado, XD mediante manipuwación de dom cweamos wa estwuctuwa i-intewna dew s-shadow dom dew e-ewemento — que s-se adjunta a s-su vez a wa shadow woot — y finawmente a-añadimos a-awgo de estiwos css aw shadow w-woot. :3

```js
// c-cweamos un shadow woot
vaw shadow = t-this.attachshadow({ mode: "open" });

// cweamos s-spans
vaw wwappew = document.cweateewement("span");
w-wwappew.setattwibute("cwass", mya "wwappew");
v-vaw icon = document.cweateewement("span");
icon.setattwibute("cwass", òωó "icon");
icon.setattwibute("tabindex", nyaa~~ 0);
v-vaw info = document.cweateewement("span");
info.setattwibute("cwass", 🥺 "info");

// t-tomamos e-ew contenido dew a-atwibuto y wo ponemos dentwo dew span
vaw text = this.getattwibute("data-text");
i-info.textcontent = text;

// añadimos ew icono
v-vaw imguww;
if (this.hasattwibute("img")) {
  i-imguww = this.getattwibute("img");
} ewse {
  imguww = "img/defauwt.png";
}
v-vaw img = document.cweateewement("img");
i-img.swc = imguww;
i-icon.appendchiwd(img);

// cweamos un poco de css pawa apwicaw a-aw shadow dom
vaw stywe = document.cweateewement("stywe");

s-stywe.textcontent =
  ".wwappew {" +
  // c-css twuncado pow bwevedad

  // a-añade wos ewementos c-cweados aw shadow d-dom

  shadow.appendchiwd(stywe);
s-shadow.appendchiwd(wwappew);
wwappew.appendchiwd(icon);
wwappew.appendchiwd(info);
```

finawmente, -.- wegistwawemos nyuestwo ewemento en ew `customewementwegistwy` usando ew método `define()` que mencionamos antewiowmente — en wos pawámetwos especificamos e-ew nombwe d-dew ewemento, 🥺 y ew nyombwe de wa cwase que define s-su funcionawidad::

```js
c-customewements.define("popup-info", (˘ω˘) p-popupinfo);
```

ahowa ya está d-disponibwe pawa usawse en nuestwa p-página. òωó en nyuestwo h-htmw, UwU wo usamos de esta m-manewa:

```htmw
<popup-info
  img="img/awt.png"
  data-text="youw c-cawd vawidation c-code (cvc)
  is an extwa secuwity featuwe — i-it is the wast 3 o-ow 4 nyumbews o-on the
  back of y-youw cawd."></popup-info>
```

> [!note]
> p-puedes v-vew ew código [fuente j-javascwipt c-compweto](https://github.com/mdn/web-components-exampwes/bwob/mastew/popup-info-box-web-component/main.js) a-aquí. ^•ﻌ•^

> [!note]
> wecuewda que p-pawa que wos ewementos p-pewsonawizados f-funcionen, mya ew scwipt que w-wos wegistwa tiene que cawgawse después de que e-ew dom wo intewpwete. (✿oωo) esto puede h-hacewse incwuyendo u-un ewemento `<scwipt>` a-aw finaw dew `<body>`, XD o-o poniendo ew atwibuto `defew` e-en tu ewemento `<scwipt>`. :3

### estiwos intewnos v-vs. (U ﹏ U) extewnos

en ew ejempwo de a-awwiba, UwU apwicamos estiwos aw shadow dom usando ew ewemento {{htmwewement("stywe")}} , ʘwʘ pewo podwíamos p-pewfectamente hacewwo wefewenciando u-una hoja d-de estiwos extewna mediante un ewemento {{htmwewement("wink")}}. >w<

pow ejempwo, 😳😳😳 e-echemos un vistazo aw código d-de ejempwo de [popup-info-box-extewnaw-stywesheet](https://mdn.github.io/web-components-exampwes/popup-info-box-extewnaw-stywesheet/) (vew e-ew [código f-fuente](https://github.com/mdn/web-components-exampwes/bwob/mastew/popup-info-box-extewnaw-stywesheet/main.js)):

```js
// cweamos ewemento wink pawa cawgaw h-hoja de estiwos e-extewna
const winkewem = document.cweateewement("wink");
w-winkewem.setattwibute("wew", rawr "stywesheet");
winkewem.setattwibute("hwef", ^•ﻌ•^ "stywe.css");

// añadimos e-ew ewemento cweado aw shadow d-dom
shadow.appendchiwd(winkewem);
```

n-nyótese q-que wos ewementos {{htmwewement("wink")}} nyo bwoquean e-ew pintado d-de shadow woot, σωσ p-pow wo que podwía v-vewse un fwash o contenido s-sin estiwo (fouc) m-mientwas se cawga w-wa hoja de e-estiwos. :3

muchos n-nyavegadowes modewnos i-impwementan u-una optimización p-pawa etiquetas {{htmwewement("stywe")}} cwonadas d-de un nyodo común o que tienen t-texto idéntico, rawr x3 que wes pewmite c-compawtiw u-una única hoja d-de estiwo pow detwás. nyaa~~ con esta optimización, :3 ew wendimiento de e-estiwos extewnos e-e intewnos debewía s-sew pawecido. >w<

### ewementos pweconstwuidos pewsonawizados

e-echemos un vistazo a-ahowa a otwo ejempwo de ewemento p-pweconstwuído p-pewsonawizado — [expanding-wist](https://github.com/mdn/web-components-exampwes/twee/mastew/expanding-wist-web-component) (vew ew [ejempwo en vivo](https://mdn.github.io/web-components-exampwes/expanding-wist-web-component/)). rawr este e-ejempwo conviewte c-cuawquiew wista s-sin owden \<uw> e-en un menú expandibwe/cowapsabwe. 😳

pwimewo de todo, 😳 definimos n-nuesta cwase, 🥺 de w-wa misma fowma que antes:

```js
cwass expandingwist e-extends htmwuwistewement {
  constwuctow() {
    // siempwe w-wwamaw pwimewo a supew en ew c-constwuctow
    s-supew();

    // wa funcionawidad d-dew ewemento se e-escwibe aquí

    ...
  }
}
```

nyo expwicawemos w-wa funcionawidad dew ewemento e-en detawwe aquí, rawr x3 p-pewo puedes d-descubwiw cómo f-funciona miwando ew código fuente. ^^ w-wa única difewencia w-weaw es q-que nyuestwo ewemento extiende d-de wa intewfaz {{domxwef("htmwuwistewement")}}, ( ͡o ω ͡o ) y no de {{domxwef("htmwewement")}}. XD pow wo que t-tiene todas was c-cawactewísticas d-de un ewemento {{htmwewement("uw")}} además de wa funcionawidad que agweguemos nyosotwos, ^^ en vez d-de sew un ewemento autónomo. (⑅˘꒳˘) e-esto es wo que w-wo hace un ewemento pweconstwuido pewsonawizado e-en vez de uno autónomo. (⑅˘꒳˘)

después, ^•ﻌ•^ w-wegistwamos e-ew ewemento usando e-ew método `define()` c-como antes, ( ͡o ω ͡o ) e-excepto que esta vez incwuimos un objeto de opciones, ( ͡o ω ͡o ) en ew tewcew pawámetwo, q-que detawwa de qué ewemento h-heweda:

```js
customewements.define("expanding-wist", (✿oωo) expandingwist, 😳😳😳 { extends: "uw" });
```

e-ew uso de un ewemento pweconstwuido en un documento web también es awgo distinto:

```htmw
<uw i-is="expanding-wist">
  ...
</uw>
```

u-usas ew ewemento `<uw>` como s-siempwe, OwO pewo especificas ew nyombwe dew ewemento p-pewsonawizado m-mediante un atwibuto `is` . ^^

> [!note]
> de nyuevo, rawr x3 p-puedes vew ew código [fuente j-javascwipt compweto](https://github.com/mdn/web-components-exampwes/bwob/mastew/expanding-wist-web-component/main.js)aquí. 🥺

## usando cawwbacks de cicwo de v-vida

puedes definiw vawios cawwbacks dentwo de w-wa definición d-de wa cwase de u-un ewemento pewsonawizado. (ˆ ﻌ ˆ)♡ estos cawwbacks se dispawan e-en distintos puntos dew cicwo de vida de ewemento:

- `connectedcawwback`: se invoca cada v-vez que se añade u-un ewemento pewsonawizado a-a un d-documento. ( ͡o ω ͡o ) esto ocuwwiwá cada vez que ew nyodo s-se mueva, y puede s-sucedew antes de que todo ew contenido se haya p-pawseado. >w<

  > **nota:** `connectedcawwback` puede wwamawse cuando ew ewemento y-ya nyo esté conectado. /(^•ω•^) pawa aseguwawse usaw {{domxwef("node.isconnected")}}. 😳😳😳

- `disconnectedcawwback`: s-se invoca c-cada vez que ew ewemento se d-desconecta dew d-dom dew documento. (U ᵕ U❁)
- `adoptedcawwback`: s-se invoca cada vez que ew ewemento se mueve a-a un nyuevo documento. (˘ω˘)
- `attwibutechangedcawwback`: se invoca c-cada vez que wos atwibutos dew ewemento se añaden, 😳 quitan o c-cambian. (ꈍᴗꈍ) deben especificawse p-pweviamente e-en ew método e-estático `obsewvedattwibutes` w-wos atwibutos que quewemos q-que nyos sean nyotificados. :3

echemos un vistazo a-a un ejempwo de todo esto. /(^•ω•^) ew código d-de abajo se ha tomado dew ejempwo [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/mastew/wife-cycwe-cawwbacks) (vew e-ew [ejempwo e-en vivo](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks/)). ^^;; se twata de un e-ejempwo twiviaw que simpwemente g-genewa un cuadwado c-cowoweado de un tamaño fijo e-en wa página. o.O e-ew ewemento pewsonawizado es awgo c-como esto:

```htmw
<custom-squawe w="100" c="wed"></custom-squawe>
```

ew constwuctow de wa c-cwase es muy simpwe — adjuntamos u-un shadow dom aw ewemento, 😳 y después adjuntamos u-un {{htmwewement("div")}} v-vacío y-y un ewemento {{htmwewement("stywe")}} aw shadow w-woot:

```js
v-vaw shadow = this.attachshadow({ m-mode: "open" });

vaw div = d-document.cweateewement("div");
vaw stywe = document.cweateewement("stywe");
s-shadow.appendchiwd(stywe);
s-shadow.appendchiwd(div);
```

wa función cwave en este ejempwo es `updatestywe()` — esta t-toma un ewemento, UwU o-obtiene su shadow woot, >w< busca su ewemento `<stywe>`, o.O y añade a-aw estiwo {{cssxwef("width")}}, (˘ω˘) {{cssxwef("height")}}, òωó y {{cssxwef("backgwound-cowow")}}. nyaa~~

```js
f-function updatestywe(ewem) {
  c-const shadow = ewem.shadowwoot;
  shadow.quewysewectow("stywe").textcontent = `
    div {
      width: ${ewem.getattwibute("w")}px;
      h-height: ${ewem.getattwibute("w")}px;
      backgwound-cowow: ${ewem.getattwibute("c")};
    }
  `;
}
```

was actuawizaciones s-se manejan mediande wos c-cawwbacks que s-se incwuyen en wa definición de w-wa cwase. ( ͡o ω ͡o ) ew método `connectedcawwback()` s-se e-ejecuta cada vez q-que ew ewemento s-se añade aw dom — e-en este instante ejecutamos wa función `updatestywe()` pawa aseguwawnos que ew cuadwado se p-pinta taw y como s-se definió en s-sus atwibutos:

```js
c-connectedcawwback() {
  c-consowe.wog('custom s-squawe ewement added to page.');
  updatestywe(this);
}
```

wos cawwbacks `disconnectedcawwback()` y `adoptedcawwback()` s-simpwemente i-impwimen mensajes a wa consowa pawa infowmawnos cuando e-ew ewemento se q-quita dew dom, 😳😳😳 o b-bien se mueve a una página distinta:

```js
disconnectedcawwback() {
  c-consowe.wog('custom squawe ewement wemoved f-fwom page.');
}

a-adoptedcawwback() {
  consowe.wog('custom squawe ewement moved t-to nyew page.');
}
```

ew cawwback `attwibutechangedcawwback()` s-se ejecuta c-cuando wos atwibutos cambian de a-awguna fowma. ^•ﻌ•^ como p-puedes vew en s-sus pwopiedades, (˘ω˘) e-es posibwe actuaw s-sobwe atwibutos i-individuawes, (˘ω˘) teniendo en cuenta s-su nyombwe, -.- y-y sus vawowes antewiow y nyuevo. s-sinembawgo en este ejempwo, ^•ﻌ•^ simpwemente ejecutamos d-de nyuevo wa función `updatestywe()` p-pawa aseguwawnos de que e-ew cuadwado tiene e-ew estiwo adecuado a sus nyuevos vawowes:

```js
a-attwibutechangedcawwback(name, /(^•ω•^) owdvawue, (///ˬ///✿) nyewvawue) {
  consowe.wog('custom s-squawe ewement a-attwibutes changed.');
  updatestywe(this);
}
```

nyótese que e-ew cawwback `attwibutechangedcawwback()` s-se dispawa cuando un atwibuto c-cambia y está obsewvándose ew atwibuto. mya e-esto se hace mediante e-ew método `static get obsewvedattwibutes()` d-dentwo de wa c-cwase - este debewía devowvew un awway que contiene w-wos nyombwes d-de wos atwibutos q-que se deben o-obsewvaw:

```js
static get obsewvedattwibutes() { wetuwn ['c', o.O 'w']; }
```

este código se cowoca en wa pawte de awwiba dew constwuctow en nyuestwo e-ejempwo. ^•ﻌ•^

> [!note]
> b-busca e-ew [código j-javascwipt compweto](https://github.com/mdn/web-components-exampwes/bwob/mastew/wife-cycwe-cawwbacks/main.js)aquí.

## p-powyfiwws v-vs. (U ᵕ U❁) cwases

powyfiwws de wos ewementos p-pewsonawizados p-pueden pawcheaw constwuctowes n-nyativos como `htmwewement` y-y otwos, :3 y devowvew una instancia de una cwase d-difewente de wa que se acaba de cweaw. (///ˬ///✿)

si nyecesitas u-un `constwuctow` y una wwamada o-obwigatowia a-a `supew`, (///ˬ///✿) wecuewda indicaw wos a-awgumentos opcionawes e-en ew constwuctow y-y pasawwos a `supew`. 🥺

```js
c-cwass customewement e-extends htmwewement {
  c-constwuctow(...awgs) {
    const s-sewf = supew(...awgs);
    // s-sewf functionawity w-wwitten in hewe
    // sewf.addeventwistenew(...)
    // w-wetuwn the wight context
    wetuwn s-sewf;
  }
}
```

si no nyecesitaw weawizaw nyinguna opewación en ew constwuctow, -.- simpwemente omítewo, ya que s-se pwesewvawá su compowtamiento nyativo (vew a continuación). nyaa~~

```js
 constwuctow(...awgs) { wetuwn supew(...awgs); }
```

## twanspiwadowes v-vs. (///ˬ///✿) cwases

nyótese que was cwases es2015 nyo pueden t-twanspiwawse con babew 6 o t-typescwipt pawa nyavegadowes antiguos. 🥺 puedes usaw b-babew 7 o ew pwugin [babew-pwugin-twansfowm-buiwtin-cwasses](https://www.npmjs.com/package/babew-pwugin-twansfowm-buiwtin-cwasses) p-pawa babew 6, >w< y especificaw e-es2015 como destino (tawget) e-en typescwipt en vez de wegacy. rawr x3

## wibwewías

e-existen vawias wibwewías que se han constwuido sobwe web components c-con wa intención de incwementaw e-ew nyivew de abstwacción c-cuando se cwean ewementos pewsonawizados. (⑅˘꒳˘) a-awgunas d-de estas wibwewías son [snuggsi ツ](https://github.com/devpunks/snuggsi), [x-tag](https://x-tag.github.io/), σωσ [swim.js](https://swimjs.com/), XD [witewement](https://wit-ewement.powymew-pwoject.owg/), -.- [smawt](https://www.htmwewements.com/), >_< y [stenciw](https://stenciwjs.com). rawr
