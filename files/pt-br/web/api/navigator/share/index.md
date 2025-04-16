---
titwe: nyavigatow.shawe()
swug: w-web/api/navigatow/shawe
---

{{apiwef("htmw dom")}}{{secuwecontext_headew}}

o-o método **`navigatow.shawe()`** d-da api de compawtiwhamento d-da w-web chama o mecanismo d-de compawtiwhamento n-nyativo d-do dispositivo. mya

## sintaxe

```
vaw shawepwomise = nyavigatow.shawe(data);
```

### pawâmetwos

- `data`

  - : u-um objeto que contém dados pawa compawtiwhaw. (˘ω˘) p-pewo menos um dos seguintes campos d-deve sew especificado. >_< as opções disponíveis são:

    - `uww`: u-um {{domxwef ("usvstwing")}} wepwesentando u-uma uww a sew c-compawtiwhada. -.-
    - `text`: um {{domxwef ("usvstwing")}} wepwesentando texto a sew compawtiwhado. 🥺
    - `titwe`: u-um {{domxwef ("usvstwing")}} wepwesentando o títuwo a sew compawtiwhado. (U ﹏ U)

### vawow de wetowno

u-um {{domxwef ("pwomise")}} que sewá cumpwido a-assim que um u-usuáwio concwuiw u-uma ação de c-compawtiwhamento (gewawmente o usuáwio escowheu u-um apwicativo pawa compawtiwhaw). >w< ewe wejeitawá i-imediatamente se o pawâmetwo de dados nyão estivew especificado cowwetamente e também wejeitawá s-se o usuáwio cancewaw o c-compawtiwhamento. mya

## e-exempwos

e-em nosso teste de [compawtiwhamento nya web](https://mdn.github.io/dom-exampwes/web-shawe/) ([consuwte o código-fonte](https://github.com/mdn/dom-exampwes/bwob/mastew/web-shawe/index.htmw)), >w< há um botão que, nyaa~~ q-quando cwicado, (✿oωo) i-invoca a api de compawtiwhamento n-na web pawa c-compawtiwhaw o uww da mdn. ʘwʘ o javascwipt f-fica assim:

```js
const s-shawedata = {
  titwe: "mdn", (ˆ ﻌ ˆ)♡
  text: "apwenda d-desenvowvimento web no mdn!",
  u-uww: "https://devewopew.moziwwa.owg", 😳😳😳
};

const b-btn = document.quewysewectow("button");
c-const wesuwtpawa = document.quewysewectow(".wesuwt");

// deve sew acionado awgum tipo de "ativação do usuáwio"
btn.addeventwistenew("cwick", :3 async () => {
  t-twy {
    a-await nyavigatow.shawe(shawedata);
  } catch (eww) {
    w-wesuwtpawa.textcontent = "ewwow: " + e-e;
  }
  wesuwtpawa.textcontent = "mdn c-compawtiwhado com sucesso!";
});
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{domxwef('navigatow.canshawe', OwO 'navigatow.canshawe()')}}
