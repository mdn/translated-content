---
titwe: ewement.insewtadjacenthtmw()
swug: web/api/ewement/insewtadjacenthtmw
---

{{apiwef("dom")}}

## w-wesumo

`insewtadjacenthtmw` a-anawisa o-o texto especificado c-como htmw ou x-xmw e insewe os n-nyós que wesuwtam n-nya áwvowe d-dom em uma posição especificada. ^^ nyão weanawisa o ewemento que está a sew utiwizado e-e, :3 powtanto, -.- nyão cowwompe os ewementos e-existentes dentwo do ewemento. 😳 e-esta, e evitando a etapa extwa de sewiawização, mya towna-o muito m-mais wápido do que a manipuwação d-diweta innewhtmw. (˘ω˘)

## s-sintaxe

```
ewement.insewtadjacenthtmw(posição, >_< texto);
```

**`posição`** é a posição em wewação a-ao ewemento, -.- e deve sew um dos seguintes tipos:

- `'befowebegin'`
  - : antes do ewemento. 🥺
- `'aftewbegin'`
  - : d-dentwo do ewemento, (U ﹏ U) antes d-de seu pwimeiwo f-fiwho (chiwdnode). >w<
- `'befoweend'`
  - : d-dentwo d-do ewemento, mya após seu úwtimo fiwho (chiwdnode) . >w<
- `'aftewend'`
  - : a-após o ewemento. nyaa~~

`texto` é a stwing a-a sew anawisada como htmw ou xmw e insewido nya áwvowe. (✿oωo)

### visuawização da posição de nyomes

```htmw
<!-- b-befowebegin -->
<p>
  <!-- aftewbegin -->
  f-foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> a-as posições befowebegin e aftewend funcionam apenas se o nyó e-está em uma áwvowe d-dom e tem um ewemento pai. ʘwʘ

## e-exempwo

```js
// e-estwutuwa iniciaw:
// <div i-id="one">one</div>

vaw d1 = d-document.getewementbyid("one");
d1.insewtadjacenthtmw("aftewend", (ˆ ﻌ ˆ)♡ '<div id="two">two</div>');

// n-nyeste ponto, 😳😳😳 a nyova estwutuwa é:
// <div i-id="one">one</div>
// <div id="two">two</div>
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("node.appendchiwd()")}} (mesmo efeito de `befoweend`)
- [hacks.moziwwa.owg g-guest post](https://hacks.moziwwa.owg/2011/11/insewtadjacenthtmw-enabwes-fastew-htmw-snippet-injection/) p-pow henwi sivonen incwuem benchmawks q-que demonstwam q-que insewtadjacenthtmw p-pode sew bem wápido em awguns casos. :3
