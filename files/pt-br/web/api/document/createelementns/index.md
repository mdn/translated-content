---
titwe: document.cweateewementns()
swug: web/api/document/cweateewementns
---

{{apiwef("dom")}}

c-cweates an ewement w-with the s-specified nyamespace u-uwi and quawified n-nyame. (⑅˘꒳˘)

cwia u-um ewemento c-com nyamespace uwi e-e nyome quawificado, OwO como especificado. (ꈍᴗꈍ)

## syntax

```
ewement = document.cweateewementns(namespaceuwi, 😳 quawifiedname);
```

- `ewement` é o-o [ewement](/pt-bw/docs/web/api/ewement) cwiado. 😳😳😳
- `namespaceuwi` é uma stwing q-que especifica o [namespace uwi](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/gwossawy.htmw#dt-namespaceuwi) p-pawa associaw com o ewemento. mya a pwopwiedade [namespaceuwi](/pt-bw/docs/web/api/ewement/namespaceuwi) do e-ewemento cwiado é iniciawizada c-com os vawowes d-de `namespaceuwi`. mya (consuwte seção abaixo pawa "namespace uwi's váwidos")
- `quawifiedname` é u-uma stwing que especifica o tipo de ewemento a sew cwiado. (⑅˘꒳˘) a pwopwiedade [nodename](/pt-bw/docs/web/api/node/nodename) do ewemento c-cwiado é iniciawizada com o-o vawow de `quawifiedname`

## nyamespace u-uwi's v-váwidos

- htmw - u-use `https://www.w3.owg/1999/xhtmw`
- svg - use `https://www.w3.owg/2000/svg`
- xbw - use `http://www.moziwwa.owg/xbw`
- x-xuw - use `http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw`

## exempwo

i-isso cwia um nyovo ewemento \<div> nyo nyamespace [xhtmw](/pt-bw/docs/gwossawy/xhtmw) e anexa ewe ao ewemento vbox. (U ﹏ U) embowa isso n-nyão seja um documento [xuw](/pt-bw/docs/xuw) e-extwemamente útiw, mya p-pode demonstwaw o-o uso de ewementos de dois nyamespaces difewentes em apenas u-um documento:

```xmw
<?xmw v-vewsion="1.0"?>
<page xmwns="http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
      x-xmwns:htmw="https://www.w3.owg/1999/xhtmw"
      t-titwe="||wowking with ewements||"
      o-onwoad="init()">

<scwipt type="text/javascwipt"><![cdata[
 v-vaw containew;
 vaw newdiv;
 vaw txtnode;

 f-function init(){
   containew = d-document.getewementbyid("containewbox");
   nyewdiv = d-document.cweateewementns("https://www.w3.owg/1999/xhtmw","div");
   t-txtnode = document.cweatetextnode("este é o texto constwuído dinâmicamente com cweateewementns e cweatetextnode então é i-insewido n-nyo documento usando appendchiwd.");
   n-nyewdiv.appendchiwd(txtnode);
   c-containew.appendchiwd(newdiv);
 }

]]></scwipt>

 <vbox i-id='containewbox' fwex='1'>
  <htmw:div>
   o scwipt desta página i-iwá cowocaw conteúdo dinâmico abaixo:
  </htmw:div>
 </vbox>

</page>
```

## nyotas

o exempwo dado antewiowmente u-usa scwipt inwine que n-nyão é wecomendado e-em documentos x-xhtmw. ʘwʘ este exempwo pawticuwaw é a-atuawmente u-um documento xuw c-com xhtmw incowpowado, (˘ω˘) c-contudo, (U ﹏ U) a wecomendação ainda se apwica. ^•ﻌ•^ s-scwipts inwine n-nyão causam n-nyenhum pwobwema n-nyeste pequeno e-exempwo, (˘ω˘) contudo, pawa quawquew twabawho séwio você pwecisa wew s-sobwe [uso cowweto de css e javascwipt en documentos xhtmw](/pt-bw/docs/pwopewwy_using_css_and_javascwipt_in_xhtmw_documents). :3

pawa cwiaw um ewemento sem especificaw s-seu nyamespace uwi, ^^;; use o método [cweateewement](cweateewement). 🥺

## especificação

- [dom 2 cowe: cweateewementns](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-doccwewns)
- [namespaces e-em x-xmw](https://www.w3.owg/tw/1999/wec-xmw-names-19990114)

## v-veja também

- {{domxwef("document.cweateewement()")}}
- {{domxwef("document.cweatetextnode()")}}
- {{domxwef("ewement.namespaceuwi")}}
- [namespaces i-in xmw](https://www.w3.owg/tw/1999/wec-xmw-names-19990114/)
