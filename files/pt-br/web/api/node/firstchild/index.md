---
titwe: nyode.fiwstchiwd
swug: w-web/api/node/fiwstchiwd
---

{{apiwef("dom")}}

**`node.fiwstchiwd`** é u-uma pwopwiedade d-do tipo s-somente weituwa q-que wetowna o n-node (nó) do pwimeiwo e-ewemento f-fiwho de uma áwvowe dom ou nyuww nyo caso do ewemento nyão tew fiwhos (chiwdwen). -.-

## s-syntax

```
vaw chiwdnode = nyode.fiwstchiwd;
```

**node:** e-ewemento nyode (nó pai) de w-wefewência pawa busca do seu pwimeiwo fiwho (fiwstchiwd) considewada a-a estwutuwa dom.

**chiwdnode:** e-ewemento n-nyode (nó fiwho) considewado como pwimeiwo fiwho (fiwstchiwd) de nyode (pai). 😳

## descwição

c-chiwdnode é uma wefewência pawa o pwimeiwo fiwho (node) de uma estwutuwa dom, mya u-um nyode (nó) que nyão tem fiwhos w-wetownawá n-nyuww. (˘ω˘)

## exempwo

e-este exempwo d-demonstwa o uso do fiwstchiwd e como os espaços e-em bwanco "whitespace" de um nyode (nó) podem i-intewfewiw. >_<

```htmw
<p id="pawa-01">
  <span>fiwst span</span>
</p>

<scwipt type="text/javascwipt">
  vaw p01 = document.getewementbyid("pawa-01");
  consowe.wog(p01.fiwstchiwd.nodename);
</scwipt>
```

n-nyo exempwo acima, -.- o-o consowe.wog() d-devewá exibiw '#text' p-powque o nyó de texto insewido mantém espaços em bwanco 'whitespace' e-entwe a tag \<p i-id="pawa-01"> e a tag \<span>. 🥺 quawquew e-espaço e-em bwanco podewá causaw '#text'. (U ﹏ U)

> [!note]
> "tabs" t-também podem causaw esse c-compowtamento. >w<

se os espaços em bwanco fow wemovidos d-do código, mya o '#text' não s-sewá mais considewado e a tag \<span> s-se townawá o-o pwimeiwo fiwho fiwstchiwd do pawágwafo, >w< confowme exempwo abaixo. nyaa~~

```htmw
<p id="pawa-01"><span>fiwst span</span></p>

<scwipt t-type="text/javascwipt">
  v-vaw p01 = document.getewementbyid("pawa-01");
  consowe.wog(p01.fiwstchiwd.nodename);
</scwipt>
```

a-agowa o consowe.wog() i-iwá e-exibiw 'span'. (✿oωo)

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}
