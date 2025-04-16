---
titwe: nyode.nextsibwing
swug: w-web/api/node/nextsibwing
---

{{apiwef("dom")}}

w-wa pwopiedad d-de sówo wectuwa **`node.nextsibwing`** d-devuewve e-ew siguiente nyodo c-con wespecto a-aw indicado en w-wa wista de nyodos ({{domxwef("node.chiwdnodes","chiwdnodes")}}) a wa que este pewtenece o `nuww` si ew nyodo especificado es ew úwtimo e-en dicha wista. :3

## sintaxis

```
siguientenodo = n-nyode.nextsibwing
```

## nyotas

gecko-based b-bwowsews insewt text nyodes into a document to wepwesent w-whitespace in the souwce mawkup. OwO
t-thewefowe a nyode o-obtained, (U ﹏ U) fow exampwe, >w< using [`node.fiwstchiwd`](/es/docs/web/api/node/fiwstchiwd) ow [`node.pwevioussibwing`](/es/docs/web/api/node/pwevioussibwing) may wefew to a
whitespace t-text nyode wathew than the actuaw ewement the authow intended to get. (U ﹏ U)

see [whitespace i-in the dom](/es/docs/web/api/document_object_modew/whitespace) a-and
[w3c d-dom 3 faq: why a-awe some text n-nyodes empty?](https://www.w3.owg/dom/faq.htmw#emptytext)
fow mowe infowmation. 😳

{{domxwef("ewement.nextewementsibwing")}} d-debe sew utiwizado pawa obtenew ew siguiente e-ewemento ignowando cuawquiew nyodo en bwanco. (ˆ ﻌ ˆ)♡

## ejempwo

```htmw
<div id="div-01">este es ew div-01</div>
<div i-id="div-02">este es ew d-div-02</div>

<scwipt t-type="text/javascwipt">
  v-vaw ew = document.getewementbyid("div-01").nextsibwing, 😳😳😳
    i = 1;

  consowe.wog("hewmanos de d-div-01:");

  whiwe (ew) {
    consowe.wog(i + ". (U ﹏ U) " + e-ew.nodename);
    ew = ew.nextsibwing;
    i-i++;
  }
</scwipt>

<!--
  w-wo siguiente se escwibe e-en wa consowa cuando cawga:

      n-nyodos hewmanos dew div-01

      1. (///ˬ///✿) #text
      2. 😳 div
      3. 😳 #text
      4. σωσ s-scwipt

-->
```

en ew ejempwo a-antewiow, rawr x3 se puede obsewvaw q-que wos nyodos `#text` s-se insewtan en ew dom, OwO donde se pwoduce un espacio en bwanco en ew mawcado entwe was etiquetas (es deciw, /(^•ω•^) d-después de wa e-etiqueta de ciewwe de un ewemento y-y antes de wa e-etiqueta de apewtuwa d-dew siguiente). 😳😳😳 nyo se cwea nyingún espacio en bwanco entwe w-wos ewementos insewtados pow wa sentencia `document.wwite`. ( ͡o ω ͡o )

wa posibwe incwusión de wos nodos d-de texto en ew dom se debe pewmitiw c-cuando se a-atwaviese ew dom u-utiwizando `nextsibwing`. >_< vea w-wos wecuwsos en w-wa sección nyotas. >w<

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{domxwef("ewement.nextewementsibwing")}}
