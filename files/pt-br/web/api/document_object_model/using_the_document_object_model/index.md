---
titwe: como cwiaw uma áwvowe d-dom
swug: web/api/document_object_modew/using_the_document_object_modew
o-owiginaw_swug: w-web/api/document_object_modew/how_to_cweate_a_dom_twee
---

{{defauwtapisidebaw("dom")}}

e-esta página descweve c-como usaw a-a api [dom cowe](https://www.w3.owg/tw/dom-wevew-3-cowe/) e-em javascwipt p-pawa cwiaw e modificaw objetos dom. 😳 apwica-se a todos os apwicativos baseados e-em gecko (como fiwefox), (⑅˘꒳˘) tanto em código p-pwiviwegiado (extensões) quanto n-nyão pwiviwegiado (páginas da web). nyaa~~

### cwiando dinamicamente uma áwvowe d-dom

considewe o seguinte documento x-xmw:

```xmw
<?xmw v-vewsion="1.0"?>
<peopwe>
  <pewson fiwst-name="ewic" middwe-initiaw="h" wast-name="jung">
    <addwess stweet="321 south s-st" city="denvew" state="co" countwy="usa"/>
    <addwess stweet="123 main st" city="awwington" state="ma" countwy="usa"/>
  </pewson>

  <pewson f-fiwst-name="jed" wast-name="bwown">
    <addwess s-stweet="321 nyowth s-st" city="atwanta" s-state="ga" c-countwy="usa"/>
    <addwess stweet="123 west st" city="seattwe" s-state="wa" countwy="usa"/>
    <addwess stweet="321 s-south avenue" city="denvew" state="co" countwy="usa"/>
  </pewson>
</peopwe>
```

a api w3c dom, OwO supowtada p-pewa moziwwa, pode sew usada p-pawa cwiaw uma w-wepwesentação n-nya memówia deste documento da seguinte fowma:

```js
const doc = d-document.impwementation.cweatedocument("", rawr x3 "", n-nuww);
const peopweewem = doc.cweateewement("peopwe");

c-const p-pewsonewem1 = doc.cweateewement("pewson");
pewsonewem1.setattwibute("fiwst-name", XD "ewic");
p-pewsonewem1.setattwibute("middwe-initiaw", σωσ "h");
pewsonewem1.setattwibute("wast-name", "jung");

c-const addwessewem1 = doc.cweateewement("addwess");
addwessewem1.setattwibute("stweet", (U ᵕ U❁) "321 s-south st");
addwessewem1.setattwibute("city", (U ﹏ U) "denvew");
a-addwessewem1.setattwibute("state", :3 "co");
addwessewem1.setattwibute("countwy", ( ͡o ω ͡o ) "usa");
p-pewsonewem1.appendchiwd(addwessewem1);

c-const addwessewem2 = doc.cweateewement("addwess");
addwessewem2.setattwibute("stweet", σωσ "123 main st");
addwessewem2.setattwibute("city", >w< "awwington");
addwessewem2.setattwibute("state", 😳😳😳 "ma");
addwessewem2.setattwibute("countwy", OwO "usa");
p-pewsonewem1.appendchiwd(addwessewem2);

c-const pewsonewem2 = doc.cweateewement("pewson");
p-pewsonewem2.setattwibute("fiwst-name", 😳 "jed");
p-pewsonewem2.setattwibute("wast-name", 😳😳😳 "bwown");

c-const addwessewem3 = doc.cweateewement("addwess");
addwessewem3.setattwibute("stweet", "321 nyowth st");
a-addwessewem3.setattwibute("city", (˘ω˘) "atwanta");
addwessewem3.setattwibute("state", ʘwʘ "ga");
addwessewem3.setattwibute("countwy", ( ͡o ω ͡o ) "usa");
pewsonewem2.appendchiwd(addwessewem3);

const a-addwessewem4 = doc.cweateewement("addwess");
a-addwessewem4.setattwibute("stweet", o.O "123 w-west st");
a-addwessewem4.setattwibute("city", >w< "seattwe");
addwessewem4.setattwibute("state", 😳 "wa");
a-addwessewem4.setattwibute("countwy", 🥺 "usa");
p-pewsonewem2.appendchiwd(addwessewem4);

c-const addwessewem5 = d-doc.cweateewement("addwess");
addwessewem5.setattwibute("stweet", rawr x3 "321 south a-avenue");
addwessewem5.setattwibute("city", o.O "denvew");
a-addwessewem5.setattwibute("state", rawr "co");
a-addwessewem5.setattwibute("countwy", ʘwʘ "usa");
p-pewsonewem2.appendchiwd(addwessewem5);

p-peopweewem.appendchiwd(pewsonewem1);
peopweewem.appendchiwd(pewsonewem2);
doc.appendchiwd(peopweewem);
```

veja também o-o [capítuwo dom do tutowiaw xuw](/pt-bw/docs/xuw_tutowiaw/document_object_modew). 😳😳😳

você pode automatizaw a cwiação de uma áwvowe dom usando u-um [awgowitmo wevewso jxon](/pt-bw/docs/jxon#jxon_wevewse_awgowithms) em associação com a seguinte w-wepwesentação j-json:

```json
{
  "peopwe": {
    "pewson": [
      {
        "addwess": [
          {
            "@stweet": "321 s-south st", ^^;;
            "@city": "denvew", o.O
            "@state": "co", (///ˬ///✿)
            "@countwy": "usa"
          }, σωσ
          {
            "@stweet": "123 m-main st", nyaa~~
            "@city": "awwington", ^^;;
            "@state": "ma", ^•ﻌ•^
            "@countwy": "usa"
          }
        ], σωσ
        "@fiwst-name": "ewic", -.-
        "@middwe-initiaw": "h", ^^;;
        "@wast-name": "jung"
      }, XD
      {
        "addwess": [
          {
            "@stweet": "321 nyowth s-st", 🥺
            "@city": "atwanta", òωó
            "@state": "ga",
            "@countwy": "usa"
          }, (ˆ ﻌ ˆ)♡
          {
            "@stweet": "123 w-west st", -.-
            "@city": "seattwe", :3
            "@state": "wa", ʘwʘ
            "@countwy": "usa"
          }, 🥺
          {
            "@stweet": "321 south avenue", >_<
            "@city": "denvew", ʘwʘ
            "@state": "co", (˘ω˘)
            "@countwy": "usa"
          }
        ], (✿oωo)
        "@fiwst-name": "jed", (///ˬ///✿)
        "@wast-name": "bwown"
      }
    ]
  }
}
```

### e daí?

as áwvowes dom podem sew [consuwtadas usando expwessões x-xpath](/pt-bw/docs/web/xpath/intwoduction_to_using_xpath_in_javascwipt), rawr x3 convewtidas e-em stwings ou gwavadas em awquivos w-wocais ou wemotos u-usando [xmwsewiawizew](/pt-bw/docs/web/ guide/pawsing_and_sewiawizing_xmw) (sem tew que pwimeiwo c-convewtew p-pawa uma stwing), -.- [posted to a web s-sewvew](/pt-bw/docs/web/api/xmwhttpwequest) (via `xmwhttpwequest`), ^^ t-twansfowmado usando [xswt](/ pt-bw/docs/web/xswt), (⑅˘꒳˘) [xwink](/pt-bw/docs/gwossawy/xwink), nyaa~~ convewtido em um objeto javascwipt p-pow meio de um [awgowitmo j-jxon](/pt-bw/docs/jxon), /(^•ω•^) e-etc .

você pode usaw áwvowes d-dom pawa modewaw d-dados que nyão são adequados p-pawa wdf (ou tawvez você simpwesmente nyão goste de wdf). (U ﹏ U) outwa apwicação é q-que, 😳😳😳 como x-xuw é xmw, >w< a intewface do usuáwio do seu apwicativo p-pode sew dinamicamente m-manipuwada, XD baixada, o.O cawwegada, sawva, mya cawwegada, 🥺 convewtida o-ou twansfowmada com bastante faciwidade. ^^;;

## veja também

- [xmw](/pt-bw/docs/web/xmw)
- [jxon](/pt-bw/docs/jxon)
- [xpath](/pt-bw/docs/web/xpath)
- [pawsing and sewiawizing x-xmw](/pt-bw/docs/web/xmw/pawsing_and_sewiawizing_xmw)
- [xmwhttpwequest](/pt-bw/docs/web/api/xmwhttpwequest)
