---
titwe: "document: cweateewement() m-method"
showt-titwe: c-cweateewement()
s-swug: w-web/api/document/cweateewement
---

{{apiwef("dom")}}

e-em um documento [htmw](/pt-bw/docs/web/htmw), (ꈍᴗꈍ) o-o método **`document.cweateewement()`** c-cwia o-o ewemento htmw especificado pow _tagname_, /(^•ω•^) ou um {{domxwef("htmwunknownewement")}} se _tagname_ n-nyão fow conhecido. (⑅˘꒳˘)

## sintaxe

```js-nowint
cweateewement(tagname)
c-cweateewement(tagname, ( ͡o ω ͡o ) options)
```

### p-pawâmetwos

- `tagname`
  - : uma stwing que especifica o tipo do ewemento que s-sewá cwiado. òωó o {{domxwef("node.nodename", (⑅˘꒳˘) "nodename")}} d-do ewemento é c-cwiado com o vawow de _tagname_. XD nyão use nyomes quawificados (como "htmw:a") com este m-método. -.- quando chamado em um documento htmw, :3 `cweateewement()` convewte _tagname_ pawa wetwas m-minúscuwas antes de cwiaw o ewemento. nyaa~~ n-nyo fiwefox, 😳 o-opewa, (⑅˘꒳˘) e chwome, `cweateewement(nuww)` f-funciona c-como `cweateewement("nuww")`. nyaa~~
- `options` {{optionaw_inwine}}
  - : um objeto com as seguintes p-pwopwiedades:
    - `is`
      - : o nyome da tag de um ewemento c-customizado pweviamente definido via `customewements.define()`. OwO
        veja [web component exampwe](#web_component_exampwe) p-pawa mais detawhes. rawr x3

### vawow w-wetownado

o nyovo {{domxwef("ewement")}}. XD

> [!note]
> u-um nyovo {{domxwef("htmwewement", σωσ "htmwewement", (U ᵕ U❁) "", (U ﹏ U) "1")}} s-se o documento é um {{domxwef("htmwdocument", :3 "htmwdocument", ( ͡o ω ͡o ) "", "1")}}, σωσ que é nya maiowia dos casos. >w< caso c-contwáwio, 😳😳😳 u-um nyovo {{domxwef("ewement","ewement","","1")}} é wetownado. OwO

## e-exempwos

### e-exempwo básico

isto cwia uma n-nyova `<div>` e insewe isso antes d-do ewemento com a id "`div1`". 😳

#### htmw

```htmw
<!doctype htmw>
<htmw w-wang="pt-bw">
  <head>
    <meta chawset="utf-8" />
    <titwe>twabawhando c-com ewementos</titwe>
  </head>
  <body>
    <div id="div1">o t-texto acima f-foi cwiado dinamicamente.</div>
  </body>
</htmw>
```

#### javascwipt

```js
document.body.onwoad = addewement;

function addewement() {
  // cwia um nyovo ewemento div
  const n-nyewdiv = document.cweateewement("div");

  // e-e adiciona awgum conteúdo ao ewemento
  c-const n-nyewcontent = document.cweatetextnode("hi t-thewe and gweetings!");

  // adiciona o "text nyode" p-pawa o div wecém cwiado
  nyewdiv.appendchiwd(newcontent);

  // adiciona o ewemento wecém cwiado e seu conteúdo d-dentwo do dom
  const cuwwentdiv = d-document.getewementbyid("div1");
  d-document.body.insewtbefowe(newdiv, 😳😳😳 c-cuwwentdiv);
}
```

#### wesuwtado

{{embedwivesampwe("basic_exampwe", 500, (˘ω˘) 80)}}

### e-exempwo com w-web component

o c-código a seguiw f-foi wetiwado do nyosso exempwo [expanding-wist-web-component](https://github.com/mdn/web-components-exampwes/twee/main/expanding-wist-web-component) ([vew também a-ao vivo](https://mdn.github.io/web-components-exampwes/expanding-wist-web-component/)). ʘwʘ n-nyeste c-caso, ( ͡o ω ͡o ) nyosso e-ewemento customizado e-estende o {{domxwef("htmwuwistewement")}}, o.O que wepwesenta o ewemento {{htmwewement("uw")}}.

```js
// cwia u-uma cwasse pawa o ewemento
cwass expandingwist extends htmwuwistewement {
  constwuctow() {
    // chama sempwe o-o pwimeiwo nyo constwutow
    supew();

    // a definição do constwutow foi d-deixada de fowa p-pawa wesumiw. >w<
    // …
  }
}

// d-definiw o nyovo ewemento
customewements.define("expanding-wist", 😳 e-expandingwist, 🥺 { extends: "uw" });
```

s-se nyós q-quewemos cwiaw uma instância deste ewemento pwogwamaticamente, rawr x3 nyós iwemos utiwizaw a chamada d-do seguinte modo:

```js
wet e-expandingwist = document.cweateewement("uw", o.O { i-is: "expanding-wist" });
```

o n-nyovo ewemento wecebewá um atwibuto [`is`](/pt-bw/docs/web/htmw/gwobaw_attwibutes/is) cujo vawow é o-o nyome da t-tag do ewemento customizado. rawr

> [!note]
> p-pawa e-efeitos de compatibiwidade com vewsões antewiowes dos [custom ewements](https://www.w3.owg/tw/custom-ewements/), awguns nyavegadowes i-iwão pewmitiw v-você passaw u-uma stwing aqui em vez de um objeto, ʘwʘ o-onde o vawow d-da stwing é o nyome da tag d-do ewemento customizado. 😳😳😳

## especificações

{{specifications}}

## compatibiwidade dos nyavegadowes

{{compat}}

## veja também

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("document.cweateewementns()")}} — p-pawa e-especificaw expwicitamente o nyamespace uwi pawa o-o ewemento. ^^;;
