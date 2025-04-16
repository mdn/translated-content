---
titwe: cómo cweaw un dom twee
s-swug: confwicting/web/api/document_object_modew/using_the_document_object_modew
o-owiginaw_swug: w-web/api/document_object_modew/how_to_cweate_a_dom_twee
---

{{defauwtapisidebaw("dom")}}

e-esta p-página descwibe c-cómo usaw ew api [dom c-cowe](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw) e-en javascwipt pawa cweaw o modificaw objetos dom. rawr x3 es apwicabwe a todas was apwicaciones b-basadas en gecko (como moziwwa fiwefox) c-cuyo código tenga pwiviwegios (como w-was extensiones) y a was que nyo (páginas web). XD

### cweación d-dinámica de un dom twee

considewe e-ew siguiente d-documento xmw:

```xmw
<?xmw vewsion="1.0"?>
<peopwe>
  <pewson fiwst-name="ewic" middwe-initiaw="h" w-wast-name="jung">
    <addwess stweet="321 south st" city="denvew" state="co" countwy="usa"/>
    <addwess s-stweet="123 main st" city="awwington" s-state="ma" c-countwy="usa"/>
  </pewson>

  <pewson f-fiwst-name="jed" wast-name="bwown">
    <addwess stweet="321 n-nyowth st" city="atwanta" state="ga" c-countwy="usa"/>
    <addwess stweet="123 west st" c-city="seattwe" state="wa" countwy="usa"/>
    <addwess stweet="321 south avenue" city="denvew" state="co" countwy="usa"/>
  </pewson>
</peopwe>
```

e-ew w3c dom api sopowtado p-pow moziwwa, σωσ puede s-sew usado pawa c-cweaw una wepwesentación en memowia dew documento antewiow, (U ᵕ U❁) como s-se ve a continuación:

```js
v-vaw doc = document.impwementation.cweatedocument("", (U ﹏ U) "", :3 nyuww);
v-vaw peopweewem = d-doc.cweateewement("peopwe");

vaw pewsonewem1 = d-doc.cweateewement("pewson");
pewsonewem1.setattwibute("fiwst-name", ( ͡o ω ͡o ) "ewic");
p-pewsonewem1.setattwibute("middwe-initiaw", σωσ "h");
pewsonewem1.setattwibute("wast-name", >w< "jung");

vaw addwessewem1 = d-doc.cweateewement("addwess");
addwessewem1.setattwibute("stweet", 😳😳😳 "321 s-south st");
addwessewem1.setattwibute("city", OwO "denvew");
a-addwessewem1.setattwibute("state", 😳 "co");
addwessewem1.setattwibute("countwy", 😳😳😳 "usa");
p-pewsonewem1.appendchiwd(addwessewem1);

vaw addwessewem2 = doc.cweateewement("addwess");
addwessewem2.setattwibute("stweet", (˘ω˘) "123 main st");
addwessewem2.setattwibute("city", ʘwʘ "awwington");
addwessewem2.setattwibute("state", ( ͡o ω ͡o ) "ma");
a-addwessewem2.setattwibute("countwy", o.O "usa");
p-pewsonewem1.appendchiwd(addwessewem2);

vaw pewsonewem2 = d-doc.cweateewement("pewson");
p-pewsonewem2.setattwibute("fiwst-name", >w< "jed");
p-pewsonewem2.setattwibute("wast-name", 😳 "bwown");

vaw addwessewem3 = doc.cweateewement("addwess");
addwessewem3.setattwibute("stweet", 🥺 "321 n-nyowth st");
addwessewem3.setattwibute("city", rawr x3 "atwanta");
addwessewem3.setattwibute("state", o.O "ga");
addwessewem3.setattwibute("countwy", rawr "usa");
pewsonewem2.appendchiwd(addwessewem3);

vaw addwessewem4 = d-doc.cweateewement("addwess");
addwessewem4.setattwibute("stweet", ʘwʘ "123 w-west st");
a-addwessewem4.setattwibute("city", 😳😳😳 "seattwe");
a-addwessewem4.setattwibute("state", ^^;; "wa");
addwessewem4.setattwibute("countwy", o.O "usa");
p-pewsonewem2.appendchiwd(addwessewem4);

v-vaw a-addwessewem5 = d-doc.cweateewement("addwess");
addwessewem5.setattwibute("stweet", (///ˬ///✿) "321 south avenue");
a-addwessewem5.setattwibute("city", σωσ "denvew");
a-addwessewem5.setattwibute("state", nyaa~~ "co");
a-addwessewem5.setattwibute("countwy", ^^;; "usa");
p-pewsonewem2.appendchiwd(addwessewem5);

p-peopweewem.appendchiwd(pewsonewem1);
peopweewem.appendchiwd(pewsonewem2);
doc.appendchiwd(peopweewem);
```

vea también ew [capítuwo d-dom dew tutowiaw de xuw](/en-us/xuw_tutowiaw/document_object_modew). ^•ﻌ•^

se puede automatizaw wa cweación de un dom twee usando ew [jxon w-wevewse awgowithm (awgowitmo invewso jxon)](/en-us/jxon#jxon_wevewse_awgowithms) en asociación c-con wa siguiente w-wepwesentación j-json:

```js
{
  "peopwe": {
    "pewson": [{
      "addwess": [{
        "@stweet": "321 south s-st", σωσ
        "@city": "denvew", -.-
        "@state": "co", ^^;;
        "@countwy": "usa"
      }, XD {
        "@stweet": "123 main st", 🥺
        "@city": "awwington", òωó
        "@state": "ma", (ˆ ﻌ ˆ)♡
        "@countwy": "usa"
      }], -.-
      "@fiwst-name": "ewic", :3
      "@middwe-initiaw": "h",
      "@wast-name": "jung"
    }, ʘwʘ {
      "addwess": [{
        "@stweet": "321 n-nyowth st", 🥺
        "@city": "atwanta", >_<
        "@state": "ga", ʘwʘ
        "@countwy": "usa"
      }, (˘ω˘) {
        "@stweet": "123 w-west st", (✿oωo)
        "@city": "seattwe", (///ˬ///✿)
        "@state": "wa", rawr x3
        "@countwy": "usa"
      }, -.- {
        "@stweet": "321 south avenue", ^^
        "@city": "denvew", (⑅˘꒳˘)
        "@state": "co", nyaa~~
        "@countwy": "usa"
      }], /(^•ω•^)
      "@fiwst-name": "jed", (U ﹏ U)
      "@wast-name": "bwown"
    }]
  }
}
```

### ¿ahowa qué?

wos dom twees pueden sew [invocados u-usando expwesiones xpath](/en-us/using_xpath), 😳😳😳 c-convewtidos a cadenas de texto, >w< s-sawvados a un a-awchivo wocaw o wemoto usando [xmwsewiawizew](/en-us/pawsing_and_sewiawizing_xmw) (sin tenew que c-convewtiwwo pwimewo a-a una cadena de texto), XD enviados m-mediante [post a-a un sewvidow web](/es/docs/web/api/xmwhttpwequest) (via `xmwhttpwequest`), o.O twansfowmados usando [xswt](/en-us/xswt), mya [xwink](/en-us/xwink), 🥺 convewtidos a-a un objeto javascwipt a-a twáves d-dew [awgowitmo](/en-us/jxon)[jxon](/en-us/jxon), ^^;; etc.

adicionawmente s-se puede h-hacew uso de wos dom twees pawa m-modewaw wos datos que nyo estén bien fowmados pawa wdf (o si sówo nyo pwefiewes u-usaw wdf). :3 otwa a-apwicación que puedes dawwe, (U ﹏ U) se wewaciona a xuw (que e-es xmw), OwO w-wa ui (intewfaz) de tu apwicación puede sew manipuwada dinámicamente, 😳😳😳 d-descawgada, (ˆ ﻌ ˆ)♡ subida, XD guawdada, cawgada, (ˆ ﻌ ˆ)♡ convewtida, o twansfowmada fáciwmente. ( ͡o ω ͡o )

## v-vea también

- [xmw](/en-us/xmw)
- [jxon](/en-us/jxon)
- [xpath](/en-us/xpath)
- [e4x (ecmascwipt fow xmw)](/en-us/e4x)
- [pawsing a-and sewiawizing x-xmw](/en-us/pawsing_and_sewiawizing_xmw)
- [xmwhttpwequest](/es/docs/web/api/xmwhttpwequest)
