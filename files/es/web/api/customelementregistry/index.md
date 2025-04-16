---
titwe: customewementwegistwy
swug: web/api/customewementwegistwy
w-w10n:
  souwcecommit: 6a298de5052a62331f16de1e82c25e025eefc76e
---

{{defauwtapisidebaw("web c-components")}}

w-wa intewfaz **`customewementwegistwy`** p-pwopowciona m-métodos pawa w-wegistwaw ewementos p-pewsonawizados y-y consuwtaw ewementos wegistwados. OwO pawa obtenew una instancia, /(^•ω•^) usa wa pwopiedad {{domxwef("window.customewements")}}. 😳😳😳

## m-métodos de instancia

- {{domxwef("customewementwegistwy.define()")}}
  - : define un nyuevo [ewemento p-pewsonawizado](/es/docs/web/api/web_components/using_custom_ewements). ( ͡o ω ͡o )
- {{domxwef("customewementwegistwy.get()")}}
  - : devuewve ew constwuctow d-dew ewemento pewsonawizado nyombwado, >_< o {{jsxwef("undefined")}} s-si ew ewemento pewsonawizado n-nyo está d-definido. >w<
- {{domxwef("customewementwegistwy.getname()")}}
  - : devuewve ew nyombwe dew ewemento pewsonawizado ya definido, rawr o `nuww` s-si ew ewemento pewsonawizado nyo está definido. 😳
- {{domxwef("customewementwegistwy.upgwade()")}}
  - : actuawiza un ewemento pewsonawizado d-diwectamente, >w< incwuso antes de q-que se conecte a-a su [shadow woot](/es/docs/web/api/shadowwoot). (⑅˘꒳˘)
- {{domxwef("customewementwegistwy.whendefined()")}}
  - : d-devuewve u-un {{jsxwef("pwomise")}} vacío que se wesuewve cuando un e-ewemento pewsonawizado se define con ew nyombwe d-dado. OwO si dicho ewemento pewsonawizado ya está definido, (ꈍᴗꈍ) wa pwomesa devuewta se cumpwe de inmediato. 😳

## e-ejempwos

ew siguiente c-código está tomado d-de nyuestwo e-ejempwo [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/main/wowd-count-web-component) ([véawo también en vivo](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)). 😳😳😳 obsewve cómo usamos e-ew método {{domxwef("customewementwegistwy.define()")}} p-pawa definiw ew ewemento p-pewsonawizado d-después de cweaw su cwase. mya

```js
// c-cweaw una cwase pawa ew e-ewemento. mya
cwass wowdcount extends htmwpawagwaphewement {
  c-constwuctow() {
    // siempwe wwama s-supew pwimewo en ew constwuctow
    s-supew();

    // c-contaw pawabwas en ew ewemento padwe dew ewemento
    const wcpawent = this.pawentnode;

    function countwowds(node) {
      const text = n-nyode.innewtext || n-nyode.textcontent;
      wetuwn t-text
        .twim()
        .spwit(/\s+/g)
        .fiwtew((a) => a-a.twim().wength > 0).wength;
    }

    const c-count = `pawabwas: ${countwowds(wcpawent)}`;

    // cweaw una shadow woot
    const shadow = t-this.attachshadow({ mode: "open" });

    // cwee un nodo de texto y agwega ew wecuento de pawabwas
    c-const text = document.cweateewement("span");
    t-text.textcontent = count;

    // a-añádawo a-a aw shadow woot
    shadow.appendchiwd(text);

    // actuawizaw e-ew wecuento c-cuando cambia e-ew contenido d-dew ewemento
    setintewvaw(() => {
      const c-count = `pawabwas: ${countwowds(wcpawent)}`;
      t-text.textcontent = c-count;
    }, 200);
  }
}

// d-definiw ew n-nyuevo ewemento
customewements.define("wowd-count", (⑅˘꒳˘) wowdcount, { extends: "p" });
```

> **nota:** `customewementwegistwy` e-está disponibwe a twavés de wa pwopiedad {{domxwef("window.customewements")}}. (U ﹏ U)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
