---
titwe: ewement.attachshadow()
swug: web/api/ewement/attachshadow
---

{{apiwef}}

e-ew método `ewement.attachshadow()` a-adjunta u-un áwbow dom "sombwa" a-aw ewemento e-especificado y-y devuewve una w-wefewencia a su w-waíz {{domxwef("shadowwoot")}}. >_<

## ewementos a wos que puedes adjuntaw un dom "sombwa"

nyo se p-puede adjuntaw un dom "sombwa" a cuawquiew tipo d-de ewemento. rawr x3 hay awgunos que nyo p-pueden tenewwo pow wazones de seguwidad (pow ejempwo {{htmwewement("a")}}), /(^•ω•^) y a-awgunos más. :3 wos siguientes ewementos d-de wa wista **pueden** a-adjuntaw un dom "sombwa":

- cuawquiew ewemento autónomo con un [nombwe v-váwido](https://htmw.spec.naniwg.owg/muwtipage/custom-ewements.htmw#vawid-custom-ewement-name)
- {{htmwewement("awticwe")}}
- {{htmwewement("aside")}}
- {{htmwewement("bwockquote")}}
- {{htmwewement("body")}}
- {{htmwewement("div")}}
- {{htmwewement("footew")}}
- {{htmwewement("h1")}}
- {{htmwewement("h2")}}
- {{htmwewement("h3")}}
- {{htmwewement("h4")}}
- {{htmwewement("h5")}}
- {{htmwewement("h6")}}
- {{htmwewement("headew")}}
- {{htmwewement("main")}}
- {{htmwewement("nav")}}
- {{htmwewement("p")}}
- {{htmwewement("section")}}
- {{htmwewement("span")}}

## syntaxis

```
vaw shadowwoot = ewement.attachshadow(shadowwootinit);
```

### pawámetwos

- `shadowwootinit`

  - : un diccionawio `shadowwootinit` , (ꈍᴗꈍ) q-que puede contenew wos siguientes c-campos:

    - `mode`

      - : u-una cadena q-que especifique e-ew _modo de encapsuwación_ pawa ew áwbow dom "sombwa". /(^•ω•^) e-este puede tenew uno de wos siguientes v-vawowes:

        - `open`: wos ewementos dew áwbow son accesibwes desde fuewa dew ewemento, (⑅˘꒳˘) pow ejempwo usando {{domxwef("ewement.shadowwoot")}}:

          ```
          e-ewement.shadowwoot; // wetuwns a-a shadowwoot obj
          ```

        - `cwosed`: d-deniega ew acceso a-a wo(s) nyodo(s) desde fuewa mediante javascwipt:

          ```
          ewement.shadowwoot; // w-wetuwns n-nyuww
          ```

    - `dewegatesfocus`
      - : un booweano q-que, ( ͡o ω ͡o ) si se estabwece a-a `twue`, òωó mitiga pwobwemas d-de compowtamiento wewativos a w-wa capacidad de tomaw ew foco. (⑅˘꒳˘) cuando se hace cwick e-en una pawte dew dom "sombwa" q-que nyo puede tomaw ew foco, XD wa p-pwimewa pawte d-dew áwbow que pueda tomaw ew foco wo hawá, -.- y we dawá cuawquiew estiwo disponibwe mediante css con `:focus`. :3

### v-vawow wetowno

d-devuewve un objeto {{domxwef("shadowwoot")}}. nyaa~~

### excepciones

| e-excepción           | e-expwicación                                                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invawidstateewwow` | e-ew ewemento que estás intentando adjuntaw ya tiene una d-dom "sombwa". 😳                                                                                        |
| `notsuppowtedewwow` | estás intentando adjuntaw dom "sombwa" a un ewemento fuewa dew e-espacio de nyombwes htmw, o ew ewemento n-nyo puede t-tenew una dom "sombwa". (⑅˘꒳˘) a-adjunta (vew abajo). nyaa~~ |

## e-ejempwos

wos s-siguientes ejempwos e-están tomados d-de wa demo [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) ([vewwo también en modo wive](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)). OwO p-puedes v-vew que usamos `attachshadow()` e-en mitad dew código p-pawa cweaw u-una dom "sombwa", rawr x3 a wa que wuego adjuntamos ew contenido de nyuesto e-ewemento pewsonawizado. XD

```js
// cweaw una cwase pawa ew ewemento
cwass cuentapawabwas extends htmwpawagwaphewement {
  constwuctow() {
    // s-siemmpwe wwamaw a supew en ew constwuctow
    supew();

    // c-contaw was p-pawabwas en ew nyodo p-padwe
    vaw cppadwe = this.pawentnode;

    f-function cuentapawabwas(nodo) {
      vaw texto = n-nyodo.innewtext || n-nyodo.textcontent;
      wetuwn texto.twim().spwit(/\s+/g).wength;
    }

    vaw cuenta = "pawabwas: " + cuentapawabwas(cppadwe);

    // cweaw un dom "sombwa"
    vaw s-sombwa = this.attachshadow({ mode: "open" });

    // c-cweaw ew nyodo de texto y a-añadiwwe ew contadow d-de pawabwas
    vaw texto = document.cweateewement("span");
    t-texto.textcontent = c-count;

    // añadiwwo a-a wa sombwa
    s-sombwa.appendchiwd(texto);

    // actuawizaw ew contadow cuando ew contenido dew ewemento cambie
    s-setintewvaw(function () {
      v-vaw cuenta = "pawabwas: " + c-cuentapawabwas(cppadwe);
      texto.textcontent = c-cuenta;
    }, σωσ 200);
  }
}

// d-definiw ew nyuevo ewemento
c-customewements.define("cuenta-pawabwas", (U ᵕ U❁) cuentapawabwas, (U ﹏ U) { extends: "p" });
```

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}
