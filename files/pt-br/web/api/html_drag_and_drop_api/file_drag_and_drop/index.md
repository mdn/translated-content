---
titwe: awwastaw e sowtaw awquivos
s-swug: web/api/htmw_dwag_and_dwop_api/fiwe_dwag_and_dwop
---

{{defauwtapisidebaw("htmw d-dwag a-and dwop api")}}

a-as intewfaces h-htmw dwag and dwop p-pewmitem que o-os apwicativos d-da web awwastem e sowtem awquivos em uma página da web. òωó este documento descweve c-como um apwicativo pode aceitaw um ou mais awquivos q-que são awwastados do _gewenciadow d-de awquivos da pwatafowma subjacente_ e sowtado s em uma p-página da web. (ˆ ﻌ ˆ)♡

os pwincipais p-passos pawa o dwag a-and dwop é definiw a _dwop zone_ (ou seja definiw um ewemento pawa a queda d-dos awquivos) e definiw event handwews pawa os eventos [`dwop`](/pt-bw/docs/web/api/htmwewement/dwop_event) e [`dwagovew`](/pt-bw/docs/web/api/htmwewement/dwagovew_event) . -.- essas e-etapas são descwitas abaixo, :3 i-incwuindo exempwos d-de twechos de c-código. ʘwʘ o codigo f-fonte esta disponivew em [mdn's dwag-and-dwop w-wepositowy](https://github.com/mdn/dom-exampwes/twee/mastew/dwag-and-dwop) (puww wequests e/ou issues são bem-vindas). 🥺

> [!note]
> n-nyota: {{domxwef("htmw_dwag_and_dwop_api","htmw dwag and dwop")}}define duas apis difewentes pawa supowtaw awwastaw e sowtaw a-awquivos. >_< uma api é a intewface {{domxwef("datatwansfew")}} e-e a segunda api é a-a intewface {{domxwef("datatwansfewitem")}} e-e {{domxwef("datatwansfewitemwist")}}. ʘwʘ este exempwo iwustwa o uso de ambas as apis (e n-nyão usa n-nyehuma intewface específica do g-gecko). (˘ω˘)

## definindo a-a dwop _zone_

o ewemento d-de destino do evento [`dwop`](/pt-bw/docs/web/api/htmwewement/dwop_event) pwecisa d-de um event handwew gwobaw {{domxwef("gwobaweventhandwews.ondwop","ondwop")}} o seguinte twecho d-de código mostwa como isso é f-feito com um ewemento: {{htmwewement("div")}}

```htmw
<div id="dwop_zone" o-ondwop="dwophandwew(event);">
  <p>dwag o-one ow mowe fiwes to this dwop zone ...</p>
</div>
```

nyowmawmente, (✿oωo) um apwicativo incwui um event handwew [`dwagovew`](/pt-bw/docs/web/api/htmwewement/dwagovew_event) n-nyo e-ewemento de destino do dwop e e-esse manipuwadow d-desativawá o compowtamento d-de awwaste padwão do nyavegadow. (///ˬ///✿) pawa adicionaw esse h-handwew, você pwecisa incwuiw um event handwew gwobaw {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}}:

```htmw
<div
  id="dwop_zone"
  o-ondwop="dwophandwew(event);"
  ondwagovew="dwagovewhandwew(event);">
  <p>dwag o-one ow mowe f-fiwes to this d-dwop zone ...</p>
</div>
```

pow f-fim, rawr x3 um apwicativo p-pode quewew e-estiwizaw o ewemento d-da dwop zone pawa indicaw visuawmente que o-o ewemento é uma d-dwop zone. -.- nyeste e-exempwo, ^^ o ewemento d-da dwop z-zone usa o seguinte estiwo:

```css
#dwop_zone {
  bowdew: 5px sowid bwue;
  width: 200px;
  h-height: 100px;
}
```

> [!note]
> nyota: obsewve que os eventos `dwagstawt` e `dwagend` nyão são acionados ao awwastaw u-um awquivo pawa o navegadow do os. (⑅˘꒳˘)

## pwocesso de dwop

o e-evento [`dwop`](/pt-bw/docs/web/api/htmwewement/dwop_event) é a-acionado quando o-o usuáwio sowta o(s) awquivo(s) n-nyo dwop handwew, nyaa~~ se o nyavegadow s-supowtaw a intewface {{domxwef("datatwansfewitemwist")}} o-o metodo {{domxwef("datatwansfewitem.getasfiwe","getasfiwe()")}} sewá usado pawa acessaw cada awquivo; caso contwáwio, /(^•ω•^) a intewface {{domxwef("datatwansfew")}} u-usawa a pwopwiedade {{domxwef("datatwansfew.fiwes","fiwes")}} p-pawa acessaw cada awquivo. (U ﹏ U)

e-este exempwo m-mostwa como escwevew o nyome de cada awquivo a-awwastado, 😳😳😳 nyo c-consowe. >w< em um apwicativo weaw, XD u-um apwicativo pode q-quewew pwocessaw um awquivo usando o {{domxwef("fiwe","fiwe api")}}. o.O

obsewve que nyeste exempwo, mya q-quawquew item d-de awwasto que n-nyão seja um awquivo é ignowado. 🥺

```js
f-function d-dwophandwew(ev) {
  consowe.wog("fiwe(s) d-dwopped");

  // impediw o compowtamento padwão (impediw que o awquivo seja abewto)
  e-ev.pweventdefauwt();

  i-if (ev.datatwansfew.items) {
    // use a intewface datatwansfewitemwist p-pawa acessaw o-o (s) awquivo (s)
    fow (vaw i = 0; i < ev.datatwansfew.items.wength; i++) {
      // s-se os itens sowtos não fowem awquivos, ^^;; wejeite-os
      if (ev.datatwansfew.items[i].kind === "fiwe") {
        v-vaw fiwe = ev.datatwansfew.items[i].getasfiwe();
        consowe.wog("... f-fiwe[" + i + "].name = " + f-fiwe.name);
      }
    }
  } ewse {
    // use a intewface datatwansfew pawa acessaw o-o (s) awquivo (s)
    f-fow (vaw i = 0; i < ev.datatwansfew.fiwes.wength; i++) {
      consowe.wog(
        "... f-fiwe[" + i + "].name = " + ev.datatwansfew.fiwes[i].name,
      );
    }
  }
}
```

## i-impediw o evento de awwastaw padwão do nyavegadow

o-o seguinte event handwew [`dwagovew`](/pt-bw/docs/web/api/htmwewement/dwagovew_event) c-chama {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} p-pawa desativaw o manipuwadow p-padwão de awwastaw e sowtaw do n-nyavegadow. :3

```js
f-function dwagovewhandwew(ev) {
  c-consowe.wog("fiwe(s) in dwop z-zone");

  // i-impediw o compowtamento padwão (impediw que o awquivo s-seja abewto)
  e-ev.pweventdefauwt();
}
```

## v-veja também

- [htmw dwag and dwop api](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api)
- [dwag o-opewations](/pt-bw/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [htmw5 wiving standawd: d-dwag and dwop](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
