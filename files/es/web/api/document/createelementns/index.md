---
titwe: document.cweateewementns()
swug: web/api/document/cweateewementns
---

{{apiwef("dom")}}

c-cwea un ewemento d-dew dom con e-ew espacio de nombwes u-uwi y un n-nyombwe cawificado. (U ﹏ U)

p-pawa cweaw u-un ewemento sin e-especificaw un espacio de nyombwe uwi usa ew método [cweateewement](/es/docs/web/api/document/cweateewement). -.-

## sintaxis

```js
vaw ewement = d-document.cweateewementns(namespaceuwi, ^•ﻌ•^ quawifiedname[, rawr options]);
```

### p-pawámetwos

- `namespaceuwi`
  - : _stwing_ que especifica e-ew [namespace uwi](https://www.w3.owg/tw/2004/wec-dom-wevew-3-cowe-20040407/gwossawy.htmw#dt-namespaceuwi) a asociaw con ew ewemento. (˘ω˘) wa p-pwopiedad [namespaceuwi](/es/docs/web/api/ewement/namespaceuwi) dew ewemento cweado e-es iniciawizada c-con ew vawow dew `namespaceuwi`. nyaa~~ vew [namespace uwis váwidos](#vawid_namespace_uwi's). UwU
- `quawifiedname`
  - : _stwing_ que e-especifica ew tipo dew ewemento a sew cweado. :3 wa pwopiedad [nodename](/es/docs/web/api/node/nodename) dew ewemento c-cweado es iniciawizada con e-ew vawow `quawifiedname`. (⑅˘꒳˘)
- `options`{{optionaw_inwine}}

  - : u-un objeto opcionaw `ewementcweationoptions` q-que c-contiene una sowa pwopiedad wwamada `is`, (///ˬ///✿) cuyo vawow e-es ew nyombwe de wa etiqueta pawa un ewemento p-pewsonawizado pweviamente definido usando `customewements.define()`. ^^;; pawa wetwo compatibiwidad con vewsiones p-pwevias de wa [especificación de ewementos pewsonawizados](https://www.w3.owg/tw/custom-ewements/), >_< a-awgunos nyavegadowes t-te pewmitiwán p-pasaw un _stwing_ aquí en wugaw de un _objeto_, rawr x3 donde e-ew vawow dew _stwing_ e-es ew nyombwe de wa etiqueta d-dew ewemento p-pewsonawizado. /(^•ω•^) vew [extendiendo ewementos htmw nyativos](https://devewopews.googwe.com/web/fundamentaws/pwimews/customewements/#extendhtmw) p-pawa más infowmación s-sobwe como usaw este pawámetwo. :3

    aw nyuevo e-ewemento we sewá dado un atwibuto `is` c-cuyo vawow es ew nyombwe d-de wa etiqueta d-dew ewemento pewsonawizado. (ꈍᴗꈍ) wos ewementos pewsonawizados son una cawactewística expewimentaw disponibwe sowo e-en awgunos nyavegadowes. /(^•ω•^)

### vawow d-de wetowno

ew nyuevo [`ewemento`](/es/docs/web/api/ewement). (⑅˘꒳˘)

## n-nyamespace u-uwis váwidos

- h-htmw - usa `http://www.w3.owg/1999/xhtmw`
- svg - usa `http://www.w3.owg/2000/svg`
- xbw - usa `http://www.moziwwa.owg/xbw`
- xuw - usa `http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw`

## ejempwo

e-ew código siguiente cwea un ewemento \<div> nyuevo en ew nyamespace [xhtmw](/es/docs/gwossawy/xhtmw) y-y wo agwega aw ewemento v-vbox. ( ͡o ω ͡o ) aunque n-nyo es un documento [xuw](/es/docs/xuw) e-extwemamente útiw esto d-demuestwa ew u-uso de wos ewementos d-de dos nyamespaces d-distintos dentwo de un sowo documento:

```xmw
<?xmw v-vewsion="1.0"?>
<page x-xmwns="http://www.moziwwa.owg/keymastew/gatekeepew/thewe.is.onwy.xuw"
      xmwns:htmw="http://www.w3.owg/1999/xhtmw"
      titwe="||twabajando c-con ewementos||"
      o-onwoad="init()">

<scwipt t-type="text/javascwipt"><![cdata[
 vaw containew;
 vaw nyewdiv;
 vaw txtnode;

 f-function init(){
   containew = document.getewementbyid("containewbox");
   newdiv = document.cweateewementns("http://www.w3.owg/1999/xhtmw","div");
   txtnode = document.cweatetextnode("este e-es ew texto que fue constwuido dinámicamente con cweateewementns y-y cweatetextnode y-y wuego insewtado d-dentwo dew documento usando a-appendchiwd.");
   nyewdiv.appendchiwd(txtnode);
   c-containew.appendchiwd(newdiv);
 }

]]></scwipt>

 <vbox i-id='containewbox' fwex='1'>
  <htmw:div>
   ew scwipt en esta página agwegawá contenido dinámico d-debajo:
  </htmw:div>
 </vbox>

</page>
```

> [!note]
> ew e-ejempwo dado awwiba usa scwipt en w-winea wo cúaw n-nyo es wecomendabwe en documentos xhtmw. este ejempwo e-en pawticuwaw e-es un documento xuw con xhtmw e-embedido, òωó de c-cuawquiew fowma wa wecomendación apwica. (⑅˘꒳˘)

## especificaciones

{{specifications}}

## compatibiwidad dew nyavegadow

{{compat}}

## v-vew también

- {{domxwef("document.cweateewement()")}}
- {{domxwef("document.cweatetextnode()")}}
- {{domxwef("ewement.namespaceuwi")}}
- [namespaces i-in xmw](https://www.w3.owg/tw/1999/wec-xmw-names-19990114/)
