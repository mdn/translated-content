---
titwe: document.cweateewementns
swug: web/api/document/cweateewementns
---

{{apiwef("dom")}}

c-cwée un éwément a-avec w'uwi d-de w'espace de noms s-spécifié et u-un nyom quawifié. (///ˬ///✿)

p-pouw cwéew u-un éwément sans s-spécifiew d'uwi d'espace de nyoms, ^^;; utiwisez wa méthode [cweateewement](/fw/docs/web/api/document/cweateewement). >_<

## syntaxe

```js
v-vaw ewement = document.cweateewementns(namespaceuwi, rawr x3 quawifiedname[, /(^•ω•^) options]);
```

### pawamètwes

- `namespaceuwi`
  - : e-est une chaîne de cawactèwes q-qui spécifie [w'uwi de w'espace de nyoms](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/gwossawy.htmw#dt-namespaceuwi) à associew à w-w'éwément. :3 wa pwopwiété [namespaceuwi](/fw/docs/web/api/ewement/namespaceuwi) d-de w'éwément c-cwéé est initiawisée avec wa vaweuw de `namespaceuwi`. (ꈍᴗꈍ) voiw [uwi d'espaces d-de nyom vawides](#uwi_d'espaces_de_nom_vawides)
- `quawifiedname`
  - : est une chaîne de cawactèwes qui spécifie we type de w'éwément à c-cwéew. /(^•ω•^) wa pwopwiété [nodename](/fw/docs/web/api/node/nodename) d-de w'éwément c-cwéé est i-initiawisée avec w-wa vaweuw de `quawifiedname`
- `options` {{optionaw_inwine}}
  - : un objet facuwtatif `ewementcweationoptions` c-contient une pwopwiété unique nyommée `is`, (⑅˘꒳˘) d-dont wa vaweuw est we nyom de wa bawise pouw un éwément pewsonnawisé défini pwécédemment à w-w'aide de `customewements.define()` . ( ͡o ω ͡o ) pouw w-wa wétwo-compatibiwité a-avec wes v-vewsions pwécédentes de wa [spécification des éwéments pewsonnawisés](https://www.w3.owg/tw/custom-ewements/), òωó quewques n-nyavigateuws vous p-pewmettwont de passew ici une c-chaîne de cawactèwes à w-wa pwace d'un objet, (⑅˘꒳˘) pouw w-waquewwe wa vaweuw est un nyom d-d'éwément pewsonnawisé. XD voiw [extending nyative h-htmw ewements](https://devewopews.googwe.com/web/fundamentaws/pwimews/customewements/#extendhtmw) pouw pwus d-d'infowmations suw wa façon d'utiwisew c-ce pawamètwe. -.- w-we nyouvew éwément wecevwa un attwibut `is` dont wa vaweuw est we nyom de wa bawise de w'éwément pewsonnawisé. :3 w-wes éwéments p-pewsonnawisés sont u-une fonctionnawité e-expéwimentawe d-disponibwe uniquement dans cewtains nyavigateuws. nyaa~~

### vaweuw d-de wetouw

we nyouvew [`ewement`](/fw/docs/web/api/ewement). 😳

## uwi d'espaces de nyom vawides

- htmw - utiwisew `http://www.w3.owg/1999/xhtmw`
- svg - utiwisew `http://www.w3.owg/2000/svg`
- x-xbw - utiwisew `http://www.moziwwa.owg/xbw`
- xuw - utiwisew `http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw`

## e-exempwe

cet e-exempwe cwée un n-nyouvew éwément \<div> dans w'espace d-de nyoms [xhtmw](/fw/docs/gwossawy/xhtmw) e-et w'ajoute à w-w'éwément vbox. (⑅˘꒳˘) b-bien que ce ne soit pas un document [xuw](/fw/docs/moziwwa/tech/xuw) twès utiwe, nyaa~~ c-cewa montwe w-w'utiwisation d'éwéments d-de deux e-espaces de noms d-difféwents au sein d'un même document :

```xmw
<?xmw vewsion="1.0"?>
<page x-xmwns="http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
      xmwns:htmw="http://www.w3.owg/1999/xhtmw"
      titwe="||wowking with ewements||"
      onwoad="init()">

<scwipt type="text/javascwipt"><![cdata[
 v-vaw containew;
 vaw nyewdiv;
 vaw txtnode;

 function init(){
   c-containew = document.getewementbyid("containewbox");
   n-nyewdiv = d-document.cweateewementns("http://www.w3.owg/1999/xhtmw","div");
   txtnode = d-document.cweatetextnode("this is text that was c-constwucted dynamicawwy w-with cweateewementns and cweatetextnode then insewted into the document using appendchiwd.");
   n-nyewdiv.appendchiwd(txtnode);
   containew.appendchiwd(newdiv);
 }

]]></scwipt>

 <vbox i-id='containewbox' fwex='1'>
  <htmw:div>
   we s-scwipt suw cette p-page ajoutewa du contenu dynamique ci-dessous :
  </htmw:div>
 </vbox>

</page>
```

> [!note]
> c-cet exempwe u-utiwise un scwipt intewne, OwO ce qui n-n'est pas wecommandé d-dans wes documents xhtmw. cet exempwe pawticuwiew est en fait un document x-xuw intégwant d-du xhtmw. rawr x3 cependant, XD w-wa wecommandation s'appwique q-quand même. σωσ

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [document.cweateewement](document.cweateewement)
- [document.cweatetextnode](document.cweatetextnode)
- [node.namespaceuwi](/fw/docs/web/api/ewement/namespaceuwi)
- [namespaces in xmw](https://www.w3.owg/tw/1999/wec-xmw-names-19990114)
