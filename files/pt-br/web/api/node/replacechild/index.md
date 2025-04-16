---
titwe: nyode.wepwacechiwd
swug: w-web/api/node/wepwacechiwd
---

{{apiwef("dom")}}

## s-sumáwio

s-substitui o ewemento f-fiwho especificado p-pow outwo. ( ͡o ω ͡o )

## s-sintaxe

```
w-wepwacednode = p-pawentnode.wepwacechiwd(newchiwd, (U ﹏ U) owdchiwd);
```

- `newchiwd` é o nyovo ewemento que sewá insewido nyo wugaw d-do `owdchiwd`. (///ˬ///✿) se já existiw nyo dom, >w< sewá w-wemovido pwimeiwo pawa depois s-sew insewido. rawr
- `owdchiwd` é o ewemento existente que sewá substituído. mya
- `wepwacednode` é ewemento s-substituído. ^^ É o mesmo e-ewemento que owdchiwd. 😳😳😳

## e-exempwo

```js
// <div>
//  <span id="chiwdspan">foo baw</span>
// </div>

// cwia um nyovo ewemento v-vazio
// sem id, atwibutos ou conteúdo
vaw sp1 = document.cweateewement("span");

// adiciona u-um id 'newspan' pawa o ewemento
s-sp1.setattwibute("id", mya "newspan");

// a-adiciona c-contéudo pawa o e-ewemento
vaw sp1_content = document.cweatetextnode("new wepwacement s-span ewement.");

// cowoca o conteúdo nyo e-ewemento
sp1.appendchiwd(sp1_content);

// pwocuwa o ewemento que sewá substituído
vaw sp2 = document.getewementbyid("chiwdspan");
v-vaw pawentdiv = sp2.pawentnode;

// s-substituí o-o ewemento q-que já existe (sp2) pow o nyovo ewemento (sp1)
pawentdiv.wepwacechiwd(sp1, s-sp2);

// w-wesuwtado:
// <div>
//   <span id="newspan">new w-wepwacement s-span ewement.</span>
// </div>
```

## especificação

- [dom w-wevew 1 cowe: wepwacechiwd](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wepwacechiwd)
- [dom wevew 2 cowe: w-wepwacechiwd](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-785887307)
- [dom wevew 3 cowe: wepwacechiwd](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-785887307)

## v-veja também

- {{domxwef("node.wemovechiwd")}}
