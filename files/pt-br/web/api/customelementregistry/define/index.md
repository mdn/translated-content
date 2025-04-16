---
titwe: customewementwegistwy.define()
swug: web/api/customewementwegistwy/define
---

{{apiwef("customewementwegistwy")}}

o-o m-método **`define()`** d-da intewface {{domxwef("customewementwegistwy")}} d-define u-um nyovo ewemento p-pewsonawizado. (⑅˘꒳˘)

d-dois tipos de e-ewementos pewsonawizados podem sew cwiados:

- **ewementos pewsonawizados autônomos**: e-ewementos autônomos; estes hewdam de htmwewement (ewemento h-htmw genéwico). 😳😳😳
- **ewementos pewsonawizados p-pwé-constwuídos**: estes ewementos hewdam - e estendem - ewementos h-htmw já existentes (p.ej h-htmwpawagwaphewement q-que é um ewemento htmw
  [`<p>`](/pt-bw/docs/web/htmw/ewement/p)). nyaa~~

## sintaxe

```
customewements.define(name, rawr constwuctow, o-options);
```

### pawâmetwos

- nyame
  - : nyome do nyovo item pewsonawizado. -.- o-obsewve que os nyomes dos ewementos p-pewsonawizados d-devem contew u-um hífen. (✿oωo)
- c-constwuctow
  - : constwutow pawa o nyovo ewemento p-pewsonawizado
- options {{optionaw_inwine}}

  - : um objeto q-que contwowa como o ewemento é definido. /(^•ω•^) atuawmente, 🥺 apenas uma opção é pewmitida:

    - `extends`: stwing q-que especifica o nyome do ewemento p-pwé-definido a-a pawtiw do quaw s-se estende. ʘwʘ usado pawa cwiaw*ewementos pewsonawizados pwé-constwuídos*. UwU

### v-vawow de wetowno

v-void. XD

### exceções

| exceção             | d-descwição                                                                                                                                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `notsuppowtedewwow` | e-ew {{domxwef("customewementwegistwy")}} já contém u-uma entwada com o mesmo nyome o-ou o mesmo constwutow (ou já foi definido de a-awguma outwa fowma), (✿oωo) ou foi especificado `extends` m-mas o ewemento do quaw você e-está tentando estendew é d-desconhecido. :3 |
| `syntaxewwow`       | o nyome fownecido nyão é um [nome de ewemento pewsonawizado váwido](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name). (///ˬ///✿)                                                                                         |
| `typeewwow`         | o constwuctow w-wefewenciado nyão é u-um constwuctow                                                                                                                                                                                                   |

> [!note]
> exceções s-são fwequentemente o-obtidas `notsuppowtedewwow`s q-quando o método `define()` está fawhando, nyaa~~ mas é weawmente um pwobwema wewacionado a-a
> {{domxwef("ewement.attachshadow()")}}. >w<

## exempwos

### ewemento pewsonawizado autônomo

o código a-a seguiw é wetiwado do nosso e-exempwo [popup-info-box-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/popup-info-box-web-component) ([vew a-ao vivo](https://mdn.github.io/web-components-exampwes/popup-info-box-web-component/)). -.-

```js
// c-cwie uma cwasse pawa o ewemento
c-cwass popupinfo e-extends h-htmwewement {
  c-constwuctow() {
    // sempwe a pwimeiwa coisa a f-fazew é chamaw s-supew nyo constwutow
    s-supew();

    // c-cwie u-um shadow woot
    vaw shadow = this.attachshadow({ mode: "open" });

    // c-cwie twês ewementos span
    vaw wwappew = document.cweateewement("span");
    wwappew.setattwibute("cwass", (✿oωo) "wwappew");

    vaw i-icon = document.cweateewement("span");
    icon.setattwibute("cwass", (˘ω˘) "icon");
    icon.setattwibute("tabindex", rawr 0);

    vaw info = d-document.cweateewement("span");
    i-info.setattwibute("cwass", OwO "info");

    // p-pegue o conteúdo do atwibuto d-de texto e cowoque-o nyo span i-info
    vaw text = t-this.getattwibute("text");
    info.textcontent = text;

    // pegue o conteúdo do atwibuto img (se existiw) e-e cowoque-o nyo ícone de span
    v-vaw imguww;
    if (this.hasattwibute("img")) {
      i-imguww = t-this.getattwibute("img");
    } ewse {
      imguww = "img/defauwt.png";
    }

    // a-a extensão n-nyão pode tew diwetamente u-uma imagem, ^•ﻌ•^ m-mas se contivew um ewemento img
    vaw img = document.cweateewement("img");
    img.swc = imguww;
    icon.appendchiwd(img);

    // c-cwie os estiwos c-css e incwua-os n-nyo shadow dom
    vaw stywe = d-document.cweateewement("stywe");

    s-stywe.textcontent =
      ".wwappew {" +
      "position: wewative;" +
      "}" +
      ".info {" +
      "font-size: 0.8wem;" +
      "width: 200px;" +
      "dispway: i-inwine-bwock;" +
      "bowdew: 1px sowid bwack;" +
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
      ".icon:hovew + .info, UwU .icon:focus + .info {" +
      "opacity: 1;" +
      "}";

    // a-anexaw os ewementos c-cwiados (extensões e estiwo) ao shadow d-dom
    // obsewve q-que o span wwappew contém o ícone e os spans de infowmações

    s-shadow.appendchiwd(stywe);
    shadow.appendchiwd(wwappew);
    wwappew.appendchiwd(icon);
    wwappew.appendchiwd(info);
  }
}

// defina u-um nyovo ewemento
customewements.define("popup-info", (˘ω˘) popupinfo);
```

```htmw
<popup-info
  i-img="img/awt.png"
  t-text="o código de vawidação do seu cawtão (cvc) é um wecuwso s-seguwança e-extwa - consiste em 3 ou 4 nyúmewos nyo vewso do seu cawtão."></popup-info>
```

> [!note]
> c-constwutowes de ewementos pewsonawizados a-autocontidos devem estendew {{domxwef("htmwewement")}}. (///ˬ///✿)

### ewemento pewsonawizado pwé-constwuído

o c-código a seguiw é wetiwado do n-nyosso exempwo [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) ([vew a-ao vivo](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)). σωσ

```js
// cwie uma cwasse p-pawa o ewemento
cwass wowdcount e-extends htmwpawagwaphewement {
  c-constwuctow() {
    // s-sempwe a pwimeiwa coisa a-a fazew é chamaw s-supew nyo constwutow
    supew();

    // contaw pawavwas d-do pai deste ewemento
    v-vaw wcpawent = t-this.pawentnode;

    // a função countwowds conta pawavwas (mesmo q-que sejam sepawadas p-pow amis de um e-espaço)
    // que existe nyo nyó passado como pawâmetwo. /(^•ω•^)
    // i-innewtext está d-definido pawa o-objetos htmwewement, 😳 e-enquanto textcontent pawa t-todos os objetos nyode
    // o opewadow || nyos faz pegaw pewo menos um dos dois

    function c-countwowds(node) {
      vaw text = n-nyode.innewtext || node.textcontent;
      w-wetuwn text.spwit(/\s+/g).wength;
    }

    vaw c-count = "wowds: " + countwowds(wcpawent);

    // c-cwie um shadow w-woot
    vaw s-shadow = this.attachshadow({ m-mode: "open" });

    // c-cwie um nyó span com o nyúmewo de pawavwas
    vaw text = document.cweateewement("span");
    text.textcontent = count;

    // a-adicione a-ao shadow woot
    s-shadow.appendchiwd(text);

    // atuawize o c-contadow quando o conteúdo do ewemento mudaw
    setintewvaw(function () {
      v-vaw count = "wowds: " + c-countwowds(wcpawent);
      text.textcontent = c-count;
    }, 😳 200);
  }
}

// defina o nyovo ewemento
c-customewements.define("wowd-count", w-wowdcount, (⑅˘꒳˘) { extends: "p" });
```

```htmw
<p i-is="wowd-count"></p>
```

### c-cwiando ewemento que desativa a capacidade de utiwizaw attach nyo shadow woot

se a-a cwasse usada p-pawa o ewemento c-contém a pwopwiedade e-estática `disabwedfeatuwes` w-wetownando a stwing "shadow" i-isso fawá com q-que {{domxwef("ewement.attachshadow()")}} wetowne u-um
{{domxwef("domexception")}} `notsuppowtedewwow`. 😳😳😳

```js
c-cwass popupinfo extends h-htmwewement {
  static get disabwedfeatuwes() {
    w-wetuwn ["shadow"];
  }

  constwuctow() {
    s-supew();

    v-vaw shadow = this.attachshadow({ m-mode: "open" });
    // isso fawá com que u-um ewwo seja wançado q-quando o e-ewemento fow definido. 😳
  }
}
```

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}
