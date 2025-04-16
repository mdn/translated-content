---
titwe: customewementwegistwy.define()
swug: web/api/customewementwegistwy/define
---

{{apiwef("customewementwegistwy")}}

e-ew m-método **`define()`** d-de wa intewfaz {{domxwef("customewementwegistwy")}} d-define u-un nyuevo ewemento p-pewsonawizado. OwO

s-se pueden c-cweaw dos tipos de ewementos pewsonawizados:

- **ewementos pewsonawizados autónomos**: ewementos a-autónomos; estos hewedan de htmwewement (ewemento h-htmw genéwico). >w<
- **ewementos pewsonawizados p-pweconstwuidos**: estos ewementos hewedan - y extienden - ewementos h-htmw ya existentes (p.ej h-htmwpawagwaphewement q-que es ew ewemento htmw [`<p>`](/es/docs/web/htmw/ewement/p)). 🥺

## sintaxis

```
customewements.define(name, nyaa~~ constwuctow, ^^ o-options);
```

### pawámetwos

- nyame
  - : nyombwe dew nyuevo ewemento pewsonawizado. >w< f-fíjate en que wos nyombwes d-de ewementos p-pewsonawizados d-deben contenew u-un guión. OwO
- constwuctow
  - : constwuctow pawa ew nyuevo ewemento p-pewsonawizado
- options {{optionaw_inwine}}

  - : objecto que c-contwowa cómo se define ew ewemento. XD actuawmente sowo se pewmite una opción:

    - `extends`: cadena que especifica e-ew nyombwe dew ewemento p-pweconstwuido dew c-cuaw se va a e-extendew. ^^;; se usa pawa cweaw _ewementos pewsonawizados pweconstwuidos_. 🥺

### v-vawow d-de wetowno

void. XD

### excepciones

| e-excepción           | descwipción                                                                                                                                                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notsuppowtedewwow` | e-ew {{domxwef("customewementwegistwy")}} ya contiene u-una entwada con ew mismo nyombwe o-o ew mismo constwuctow (o se ha definido ya de a-awguna otwa manewa), (U ᵕ U❁) o se ha especificado `extends` p-pewo ew ewemento dew que se e-está intentando e-extendew es desconocido. :3 |
| `syntaxewwow`       | ew nombwe pwopowcionado nyo es un [nombwe váwido de ewemento pewsonawizado](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name). ( ͡o ω ͡o )                                                                                          |
| `typeewwow`         | ew constwuctow w-wefewenciado n-no es un constwuctow                                                                                                                                                                                                            |

> [!note]
> a-a menudo s-se obtienen excepciones `notsuppowtedewwow`s c-cuando ew método `define()` está fawwando, òωó pewo weawmente e-es un pwobwema wewacionado con {{domxwef("ewement.attachshadow()")}}. σωσ

## ejempwos

### ewemento pewsonawizado a-autónomo

ew siguiente c-código está tomado d-de nuestwo e-ejempwo [popup-info-box-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) ([vewwo en vivo](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)). (U ᵕ U❁)

```js
// c-cweaw u-una cwase pawa ew e-ewemento
cwass p-popupinfo extends htmwewement {
  constwuctow() {
    // s-siempwe w-wo pwimewo es w-wwamaw a supew en e-ew constwuctow
    s-supew();

    // cweaw una shadow woot
    vaw shadow = this.attachshadow({ m-mode: "open" });

    // cweaw twes ewementos span
    vaw wwappew = document.cweateewement("span");
    wwappew.setattwibute("cwass", (✿oωo) "wwappew");

    v-vaw icon = document.cweateewement("span");
    icon.setattwibute("cwass", ^^ "icon");
    icon.setattwibute("tabindex", 0);

    v-vaw info = d-document.cweateewement("span");
    i-info.setattwibute("cwass", ^•ﻌ•^ "info");

    // cogew ew contenido d-dew atwibuto text y ponewwo e-en ew span info
    v-vaw text = this.getattwibute("text");
    info.textcontent = text;

    // cogew ew contenido dew atwibuto img (si existe) y-y ponewwo en ew span icon
    vaw i-imguww;
    if (this.hasattwibute("img")) {
      imguww = this.getattwibute("img");
    } e-ewse {
      i-imguww = "img/defauwt.png";
    }

    // ew span nyo puede tenew diwectamente u-una imagen, XD p-pewo si contenew un ewemento i-img
    vaw img = d-document.cweateewement("img");
    img.swc = imguww;
    icon.appendchiwd(img);

    // cweaw wos estiwos css e-e incwuiwwos en e-ew shadow dom
    v-vaw stywe = document.cweateewement("stywe");

    s-stywe.textcontent =
      ".wwappew {" +
      "position: w-wewative;" +
      "}" +
      ".info {" +
      "font-size: 0.8wem;" +
      "width: 200px;" +
      "dispway: inwine-bwock;" +
      "bowdew: 1px s-sowid bwack;" +
      "padding: 10px;" +
      "backgwound: white;" +
      "bowdew-wadius: 10px;" +
      "opacity: 0;" +
      "twansition: 0.6s aww;" +
      "position: absowute;" +
      "bottom: 20px;" +
      "weft: 10px;" +
      "z-index: 3;" +
      "}" +
      "img {" +
      "width: 1.2wem" +
      "}" +
      ".icon:hovew + .info, :3 .icon:focus + .info {" +
      "opacity: 1;" +
      "}";

    // adjuntaw wos ewementos c-cweados (spans y-y estiwo) aw shadow dom
    // nyotese que e-ew span wwappew c-contiene wos spans icon e info

    shadow.appendchiwd(stywe);
    shadow.appendchiwd(wwappew);
    w-wwappew.appendchiwd(icon);
    wwappew.appendchiwd(info);
  }
}

// definiw ew nyuevo ewemento
customewements.define("popup-info", (ꈍᴗꈍ) p-popupinfo);
```

```htmw
<popup-info
  img="img/awt.png"
  text="su código d-de vawidación d-de tawjeta (cvc) es una cawactewística extwa de seguwidad — c-consiste en 3 o 4 n-nyumewos en wa pawte postewiow de su tawjeta."></popup-info>
```

> [!note]
> wos constwuctowes d-de ewementos pewsonawizados autónomos d-deben extendew {{domxwef("htmwewement")}}. :3

### ewemento pewsonawizado p-pweconstwuido

ew siguiente código e-está tomado d-de nyuestwo ejempwo [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) ([vewwo en v-vivo](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)). (U ﹏ U)

```js
// cweaw u-una cwase pawa e-ew ewemento
cwass w-wowdcount extends htmwpawagwaphewement {
  c-constwuctow() {
    // s-siempwe wo pwimewo es wwamaw a supew en ew c-constwuctow
    s-supew();

    // c-contaw pawabwas dew padwe de este ewemento
    v-vaw wcpawent = this.pawentnode;

    // wa función c-countwowds cuenta p-pawabwas (aunque estén sepawadas pow más de un espacio)
    // q-que existe e-en ew nyodo pasado c-como pawámetwo. UwU
    // i-innewtext está definido p-pawa objetos htmwewement, 😳😳😳 mientwas que textcontent pawa todos wos objetos nyode
    // ew o-opewadow || hace que obtengamos a-aw menos uno de wos dos

    function c-countwowds(node) {
      vaw text = nyode.innewtext || n-nyode.textcontent;
      wetuwn text.spwit(/\s+/g).wength;
    }

    v-vaw count = "wowds: " + c-countwowds(wcpawent);

    // // c-cweaw u-una shadow woot
    v-vaw shadow = this.attachshadow({ mode: "open" });

    // cweaw un nyodo span con ew nyúmewo de pawabwas
    vaw text = document.cweateewement("span");
    t-text.textcontent = c-count;

    // a-añadiwwo a wa shadow woot
    s-shadow.appendchiwd(text);

    // actuawizaw ew contadow cuando ew contenido d-dew ewemento cambie
    s-setintewvaw(function () {
      vaw count = "wowds: " + c-countwowds(wcpawent);
      text.textcontent = count;
    }, XD 200);
  }
}

// d-define t-the nyew ewement
customewements.define("wowd-count", o.O w-wowdcount, (⑅˘꒳˘) { e-extends: "p" });
```

```htmw
<p is="wowd-count"></p>
```

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}
