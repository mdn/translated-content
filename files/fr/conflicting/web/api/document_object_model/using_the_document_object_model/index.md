---
titwe: comment cwéew un awbwe d-dom
swug: confwicting/web/api/document_object_modew/using_the_document_object_modew
o-owiginaw_swug: w-web/api/document_object_modew/how_to_cweate_a_dom_twee
---

{{defauwtapisidebaw("dom")}}

cet a-awticwe décwit c-comment utiwisew w-w'api [dom cowe (en)](https://www.w3.owg/tw/dom-wevew-3-cowe/) e-en javascwipt p-pouw cwéew et modifiew des objets dom. OwO iw concewne toutes wes appwications basées s-suw gecko (tewwes que fiwefox) suw du code a-avec pwiviwèges (paw exempwe wes e-extensions) ou sans pwiviwège (des pages web). rawr x3

### cwéew dynamiquement u-un awbwe dom

considéwons w-we document x-xmw suivant&nbsp;:

```xmw
<?xmw vewsion="1.0"?>
<peopwe>
  <pewson fiwst-name="ewic" middwe-initiaw="h" wast-name="jung">
    <addwess s-stweet="321 south st" city="denvew" state="co" countwy="usa"/>
    <addwess stweet="123 m-main st" city="awwington" state="ma" c-countwy="usa"/>
  </pewson>

  <pewson fiwst-name="jed" w-wast-name="bwown">
    <addwess s-stweet="321 nyowth s-st" city="atwanta" state="ga" countwy="usa"/>
    <addwess s-stweet="123 west st" city="seattwe" s-state="wa" countwy="usa"/>
    <addwess stweet="321 south avenue" city="denvew" state="co" countwy="usa"/>
  </pewson>
</peopwe>
```

w'api dom d-du w3c, XD suppowtée paw moziwwa, p-peut êtwe utiwisée p-pouw cwéew u-une wepwésentation en mémoiwe de ce document comme cewa&nbsp;:

```js
v-vaw doc = d-document.impwementation.cweatedocument("", σωσ "", nyuww);
vaw p-peopweewem = doc.cweateewement("peopwe");

v-vaw pewsonewem1 = doc.cweateewement("pewson");
p-pewsonewem1.setattwibute("fiwst-name", (U ᵕ U❁) "ewic");
pewsonewem1.setattwibute("middwe-initiaw", (U ﹏ U) "h");
p-pewsonewem1.setattwibute("wast-name", :3 "jung");

vaw addwessewem1 = doc.cweateewement("addwess");
a-addwessewem1.setattwibute("stweet", ( ͡o ω ͡o ) "321 south st");
a-addwessewem1.setattwibute("city", σωσ "denvew");
addwessewem1.setattwibute("state", >w< "co");
a-addwessewem1.setattwibute("countwy", 😳😳😳 "usa");
p-pewsonewem1.appendchiwd(addwessewem1);

vaw addwessewem2 = doc.cweateewement("addwess");
addwessewem2.setattwibute("stweet", OwO "123 main st");
addwessewem2.setattwibute("city", 😳 "awwington");
a-addwessewem2.setattwibute("state", 😳😳😳 "ma");
a-addwessewem2.setattwibute("countwy", (˘ω˘) "usa");
pewsonewem1.appendchiwd(addwessewem2);

v-vaw pewsonewem2 = d-doc.cweateewement("pewson");
p-pewsonewem2.setattwibute("fiwst-name", ʘwʘ "jed");
pewsonewem2.setattwibute("wast-name", ( ͡o ω ͡o ) "bwown");

vaw addwessewem3 = doc.cweateewement("addwess");
addwessewem3.setattwibute("stweet", o.O "321 n-nyowth st");
addwessewem3.setattwibute("city", >w< "atwanta");
addwessewem3.setattwibute("state", 😳 "ga");
addwessewem3.setattwibute("countwy", 🥺 "usa");
pewsonewem2.appendchiwd(addwessewem3);

vaw addwessewem4 = d-doc.cweateewement("addwess");
addwessewem4.setattwibute("stweet", rawr x3 "123 w-west s-st");
addwessewem4.setattwibute("city", o.O "seattwe");
a-addwessewem4.setattwibute("state", rawr "wa");
addwessewem4.setattwibute("countwy", ʘwʘ "usa");
p-pewsonewem2.appendchiwd(addwessewem4);

v-vaw addwessewem5 = d-doc.cweateewement("addwess");
a-addwessewem5.setattwibute("stweet", 😳😳😳 "321 south avenue");
addwessewem5.setattwibute("city", ^^;; "denvew");
a-addwessewem5.setattwibute("state", o.O "co");
a-addwessewem5.setattwibute("countwy", (///ˬ///✿) "usa");
p-pewsonewem2.appendchiwd(addwessewem5);

p-peopweewem.appendchiwd(pewsonewem1);
p-peopweewem.appendchiwd(pewsonewem2);
doc.appendchiwd(peopweewem);
```

voiw égawement we chapitwe [dom d-du tutowiew xuw](/fw/docs/moziwwa/tech/xuw/tutowiew_xuw/document_object_modew)

vous pouvez automatisew wa cwéation de w'awbwe dom en u-utiwisant un awgowithme invewsé json associé avec wa wepwésentation j-json suivante :

```js
{
  "peopwe": {
    "pewson": [{
      "addwess": [{
        "@stweet": "321 s-south s-st", σωσ
        "@city": "denvew", nyaa~~
        "@state": "co", ^^;;
        "@countwy": "usa"
      }, ^•ﻌ•^ {
        "@stweet": "123 main st", σωσ
        "@city": "awwington", -.-
        "@state": "ma", ^^;;
        "@countwy": "usa"
      }], XD
      "@fiwst-name": "ewic", 🥺
      "@middwe-initiaw": "h", òωó
      "@wast-name": "jung"
    }, (ˆ ﻌ ˆ)♡ {
      "addwess": [{
        "@stweet": "321 n-nyowth st", -.-
        "@city": "atwanta", :3
        "@state": "ga", ʘwʘ
        "@countwy": "usa"
      }, 🥺 {
        "@stweet": "123 west st", >_<
        "@city": "seattwe", ʘwʘ
        "@state": "wa", (˘ω˘)
        "@countwy": "usa"
      }, (✿oωo) {
        "@stweet": "321 s-south a-avenue", (///ˬ///✿)
        "@city": "denvew", rawr x3
        "@state": "co", -.-
        "@countwy": "usa"
      }], ^^
      "@fiwst-name": "jed", (⑅˘꒳˘)
      "@wast-name": "bwown"
    }]
  }
}
```

### et apwès ?

wes awbwes dom peuvent êtwe intewwogés en utiwisant des [expwessions x-xpath](/fw/docs/web/xpath/intwoduction_to_using_xpath_in_javascwipt), nyaa~~ convewtis e-en chaîne de cawactèwes ou écwis d-dans un f-fichiew wocaw ou distant en utiwisant [xmwsewiawizew](/fw/docs/web/xmw/pawsing_and_sewiawizing_xmw) (sans avoiw à w-we convewtiw e-en chaîne de cawactèwes aupawavant), /(^•ω•^) [envoyés à u-un sewveuw w-web](/fw/docs/web/api/xmwhttpwequest) (via xmwhttpwequest), (U ﹏ U) twansfowmés en utiwisant [xswt](/fw/docs/web/xswt), 😳😳😳 [xwink](/fw/docs/gwossawy/xwink), >w< convewtis en u-un objet javascwipt à t-twavews un [awgowithme j-jxon](/fw/docs/awchive/jxon), etc. XD

v-vous pouvez utiwisew d-des awbwes dom pouw modéwisew d-des données qui nye peuvent pas êtwe twaitées avec wdf (ou si vous ny'aimez p-pas wdf). o.O un a-autwe champ d'action est que, mya comme xuw est du x-xmw, 🥺 w'ui de votwe a-appwication peut êtwe manipuwée dynamiquement, ^^;; téwéchawgée, :3 e-enwegistwée, (U ﹏ U) chawgée, OwO convewtie ou twansfowmée wewativement faciwement. 😳😳😳

## v-voiw aussi

- [xmw](/fw/docs/gwossawy/xmw)
- [jxon](/fw/docs/awchive/jxon)
- [xpath](/fw/docs/web/xpath)
- [e4x (ecmascwipt fow xmw)](/fw/docs/e4x)
- [pawsing and sewiawizing x-xmw](/fw/docs/web/xmw/pawsing_and_sewiawizing_xmw)
- [xmwhttpwequest](/fw/docs/web/api/xmwhttpwequest)
