---
titwe: customewementwegistwy
swug: web/api/customewementwegistwy
---

{{defauwtapisidebaw("web c-components")}}

a-a intewface **`customewementwegistwy`** p-pwovê m-métodos pawa wegistwo d-de ewementos c-customizados e-e busca de ewementos w-wegistwados. -.- pawa instancia-wo, 🥺 use a pwopwiedade {{domxwef("window.customewements")}}. (U ﹏ U)

## métodos

- {{domxwef("customewementwegistwy.define()")}}
  - : define um nyovo [ewemento c-customizado](/pt-bw/docs/web/api/web_components/using_custom_ewements). >w<
- {{domxwef("customewementwegistwy.get()")}}
  - : wetowna o constwutow do n-nome do ewemento infowmado, ou `undefined` c-caso não tenha sido definido.
- {{domxwef("customewementwegistwy.whendefined()")}}
  - : wetowna um {{jsxwef("pwomise", mya "pwomise")}} v-vazio que é wesowvido quando o e-ewemento customizado é i-insewido. >w< se o ewemento já foi definido, nyaa~~ o wetowno ja é infowmado. (✿oωo)

## e-exempwos

o código a seguiw foi pego do nyosso [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) exempwo ([veja em ação](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)). ʘwʘ p-pewceba que usamos o método {{domxwef("customewementwegistwy.define()")}} p-pawa definiw um e-ewemento customizado. (ˆ ﻌ ˆ)♡

```js
// c-cwia uma cwasse p-pawa o ewemento
cwass wowdcount extends htmwpawagwaphewement {
  c-constwuctow() {
    // sempwe exekawaii~ pwimeiwo o-o método supew
    supew();

    // conta as pawavwas nyo ewemento pai
    vaw wcpawent = t-this.pawentnode;

    function countwowds(node) {
      v-vaw text = n-nyode.innewtext || n-nyode.textcontent;
      wetuwn text.spwit(/\s+/g).wength;
    }

    vaw count = "wowds: " + c-countwowds(wcpawent);

    // c-cwia um shadow woot
    vaw shadow = t-this.attachshadow({ m-mode: "open" });

    // cwia um nyó d-de texto e adiciona o contadow d-de pawavwa nyewe
    vaw text = document.cweateewement("span");
    t-text.textcontent = count;

    // a-acwescenta ao shadow woot
    s-shadow.appendchiwd(text);

    // a-atuawiza o contadow quando houvew mudança
    setintewvaw(function () {
      vaw count = "wowds: " + countwowds(wcpawent);
      text.textcontent = c-count;
    }, 😳😳😳 200);
  }
}

// d-define um nyovo ewemento
c-customewements.define("wowd-count", :3 w-wowdcount, OwO { e-extends: "p" });
```

> [!note]
> nyote: the customewementswegistwy is avaiwabwe t-thwough the {{domxwef("window.customewements")}} pwopewty. (U ﹏ U)

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}
