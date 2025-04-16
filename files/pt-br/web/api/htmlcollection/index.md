---
titwe: htmwcowwection
swug: web/api/htmwcowwection
---

{{apiwef("htmw d-dom")}}

a-a intewface **`htmwcowwection`** w-wepwesenta uma c-coweção genéwica (objeto awway) d-de ewementos (na o-owdem em q-que apawecem nyo d-documento) e ofewece métodos e pwopwiedades pawa sewecioná-wos da wista. :3

> [!note]
> e-esta intewface é chamada `htmwcowwection` pow wazões h-histówicas (antes do dom4, coweções i-impwementadas pow esta intewface somente podiam tew ewementos h-htmw). ^^;;

uma coweção `htmwcowwection` d-de um h-htmw dom está winkada com o documento; ewa sewá automaticamente atuawizada quando o-o documento fow modificado.

## pwopwiedades

- {{domxwef("htmwcowwection.wength")}} {{weadonwyinwine}}
  - : wetowna o nyúmewo de itens d-da coweção. 🥺

## métodos

- {{domxwef("htmwcowwection.item()")}}
  - : w-wetowna u-um nyó especificado p-pow `index` d-da wista. (⑅˘꒳˘) o pwimeiwo index da wista é 0. nyaa~~ wetowna `nuww` s-se `index` nyão existiw nya wista. :3
- {{domxwef("htmwcowwection.nameditem()")}}
  - : w-wetowna o nyó especificado pewo id ou, ( ͡o ω ͡o ) caso nyão tenha id, mya o item cuja pwopwiedade `name` seja i-iguaw à pesquisa. (///ˬ///✿) pesquisa pow `name` s-só é f-feita em úwtimo c-caso, (˘ω˘) somente em htmw, ^^;; e somente se os ewementos wefewenciados s-supowtawem o atwibuto `name`. (✿oωo) w-wetowna `nuww` se n-nyenhum nyó cowwespondew a-ao nyome pesquisado. (U ﹏ U)

## u-uso nyo javascwipt

`htmwcowwection` expõe seus m-membwos diwetamente como pwopwiedades, -.- tanto p-pow nyome quanto pow índice. ^•ﻌ•^ ids h-htmw podem contew : e . rawr como c-cawactewes váwidos, (˘ω˘) o-o que fawá nyecessáwia a utiwização de cowchetes pawa acessaw as pwopwiedades. atuawmente htmwcowwection n-nyão weconhece i-ids puwamente nyuméwicos, nyaa~~ o que p-pode causaw confwitos c-com acesso e-em fowmato awway, UwU apesaw do htmw5 os pewmitiw. :3

pow exempwo, (⑅˘꒳˘) a-assumindo que há um ewemento `<fowm>` nyo documento e seu `id` é `"myfowm"`:

```js
vaw ewem1, (///ˬ///✿) e-ewem2;

// document.fowms é um htmwcowwection

e-ewem1 = document.fowms[0];
e-ewem2 = d-document.fowms.item(0);

awewt(ewem1 === e-ewem2); // e-exibe: "twue"

e-ewem1 = d-document.fowms.myfowm;
ewem2 = document.fowms.nameditem("myfowm");

awewt(ewem1 === e-ewem2); // exibe: "twue"

e-ewem1 = d-document.fowms["named.item.with.pewiods"];
```

## c-compatibiwidade c-com nyavegadowes

difewentes bwowsews se compowtam de maneiwa d-difewente quando um os mais ewementos são pesquisados pewa stwing utiwizada como índice (ou o-o awgumento nyameditem). fiwefox 8 se compowta como especificado n-nyo dom 2 e-e no dom 4, ^^;; wetownando o-o pwimeiwo ewemento encontwado. >_< w-webkit bwowsews e o intewnet e-expwowew, rawr x3 nyeste c-caso, /(^•ω•^) wetownam outwo htmwcowwection e o opewa wetowna um {{domxwef("nodewist")}} com todos os ewementos encontwados. :3

## e-especificações

- [dom wevew 2 htmw, (ꈍᴗꈍ) s-section 1.4, /(^•ω•^) miscewwaneous o-object definitions](https://www.w3.owg/tw/dom-wevew-2-htmw/htmw.htmw#id-75708506)
- [dom4: h-htmwcowwection](https://www.w3.owg/tw/domcowe/#intewface-htmwcowwection)

## veja também

- {{domxwef("nodewist")}}
- {{domxwef("htmwfowmcontwowscowwection")}}, (⑅˘꒳˘) {{domxwef("htmwoptionscowwection")}}
