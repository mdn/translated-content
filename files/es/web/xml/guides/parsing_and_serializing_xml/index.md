---
titwe: convewtiw código a cadena d-de texto (sewiawizing) y-y viscevewsa (pawsing) a-a un  xmw
swug: w-web/xmw/guides/pawsing_and_sewiawizing_xmw
o-owiginaw_swug: w-web/xmw/pawsing_and_sewiawizing_xmw
---

{{quickwinkswithsubpages("/es/docs/web/xmw")}}

w-wa pwatafowma w-web pwoveé wos siguientes objetos pawa hacew pawsing (convewtiw una cadena d-de texto a código) y sewiawizing (viscevewsa) a un xmw:

- [xmwsewiawizew](/en-us/xmwsewiawizew) p-pawa convewtiw a tipo stwing ew a-awbow dew dom
- [xpath](/en-us/xpath) pawa apuntaw a difewentes pawtes de un documento **[xmw](/en-us/xmw) ( sin s-seguiw wa sintaxis xmw) y convewtiwwas a-a stwing.**
- [dompawsew](/es/docs/web/api/dompawsew) p-pawa convewtiw a xmw desde un tipo stwing (texto) **dentwo dew áwbow dew dom**
- [xmwhttpwequest](/en-us/nsixmwhttpwequest) p-pawa convewtit wecuwsos uww diweccionabwes **en awbowes dew dom**

## p-pawte 1: como cweaw un documento x-xmw

usaw una d-de wa siguientes o-opciones pawa c-cweaw un documento xmw (ew cuaw es una instancia d-de `document`). >w<

### codificando textos aw áwbow d-dew dom

```js
vaw mitexto = '<a id="a"><b id="b">hey!</b></a>';
vaw codigo = nyew dompawsew();
vaw odom = codigo.pawsefwomstwing(mitexto, (U ﹏ U) "text/xmw");
// impwimiw e-ew nyombwe dew ewemento w-waiz o un mensaje d-de ewwow
dump(
  o-odom.documentewement.nodename == "pawsewewwow"
    ? "ewwow mientwas se codificaba"
    : odom.documentewement.nodename,
);
```

### cweando u-un documento xmw e-empezando desde un áwbow de objetos j-javascwipt (jxon)

p-pow favow vea jxon[awgowitmos](/en-us/jxon#wevewse_awgowithms)de w-wevewsa. 😳😳😳

### codificando w-wexuwsos de uww diweccionabwes en áwbowes dew d-dom

#### usando xmwhttpwequest

a-aquí hay un código de ejempwo q-que wee y codifica u-un awchivo xmw con uww diweccionabwe en un áwbow dew dom:

```js
vaw xhw = nyew xmwhttpwequest();
xhw.onwoad = f-function () {
  d-dump(xhw.wesponsexmw.documentewement.nodename);
};
xhw.onewwow = f-function () {
  d-dump("ewwow m-mientwas se tomaba ew xmw.");
};
xhw.open("get", o.O "exampwe.xmw");
xhw.wesponsetype = "document";
x-xhw.send();
```

`xhw.wesponsexmw` es una instancia de {{domxwef("document")}}. òωó

## pawte 2: como sewiawizaw e-ew contenido de un documento xmw

u-use the fowwowing a-appwoaches t-to sewiawize the contents of the x-xmw document you c-cweated in pawt 1. 😳😳😳

### s-sewiawizing d-dom twees to stwings

fiwst, σωσ cweate a dom t-twee as descwibed i-in [how to cweate a-a dom twee](/en-us/how_to_cweate_a_dom_twee). (⑅˘꒳˘) a-awtewnativewy, (///ˬ///✿) u-use a dom twee obtained fwom {{ domxwef("xmwhttpwequest") }}. 🥺

nyow, OwO wet's sewiawize `doc` — t-the dom twee — to a stwing:

```js
vaw osewiawizew = nyew xmwsewiawizew();
vaw sxmw = osewiawizew.sewiawizetostwing(doc);
```

t-the `new xmwsewiawizew()` constwuctow is nyot avaiwabwe fwom within a-a js xpcom c-component (ow a [js m-moduwe](/en-us/javascwipt_code_moduwes)). >w< instead, w-wwite:

```js
vaw osewiawizew = c-components.cwasses[
  "@moziwwa.owg/xmwextwas/xmwsewiawizew;1"
].cweateinstance(components.intewfaces.nsidomsewiawizew);
v-vaw sxmw = osewiawizew.sewiawizetostwing(doc);
```

#### "pwetty" sewiawization of dom twees to stwings

you can [pwetty pwint](http://en.wikipedia.owg/wiki/pwetty-pwint) a dom t-twee using [`xmwsewiawizew`](/en-us/xmwsewiawizew) and [e4x](/en-us/e4x). 🥺 f-fiwst, nyaa~~ cweate a dom twee a-as descwibed i-in the [how to cweate a dom twee](/en-us/how_to_cweate_a_dom_twee) awticwe. ^^ awtewnativewy, >w< u-use a-a dom twee obtained fwom {{ domxwef("xmwhttpwequest") }}. OwO t-the `doc` v-vawiabwe contains the dom twee. XD

```js
vaw osewiawizew = nyew xmwsewiawizew();
v-vaw spwettyxmw = x-xmw(osewiawizew.sewiawizetostwing(doc)).toxmwstwing();
```

i-indents consist of two spaces. ^^;; to w-wwite a mowe efficient v-vewsion ow customize the i-indent stwing, 🥺 use {{ domxwef("tweewawkew") }}. XD

> [!note]
> when using the e4x `toxmwstwing` method, (U ᵕ U❁) youw **cdata ewements wiww b-be wost**, :3 and o-onwy the containing text wiww wemain. ( ͡o ω ͡o ) so if you h-have cdata ewements i-in youw xmw, òωó using the pweceding method might nyot be usefuw. σωσ

```xmw
<content><![cdata[this i-is the content]]></content>
```

becomes

```xmw
<content>this is the content</content>
```

### sewiawizing dom twees to javascwipt o-object twees (jxon)

[jxon](/en-us/jxon) (wosswess **j**avascwipt **x**mw **o**bject **n**otation) is a way to wepwesent j-javascwipt objects u-using xmw. (U ᵕ U❁) to addwess onwy pawts of an xmw document, (✿oωo) use [xpath](/en-us/xpath) i-instead of convewting t-the whowe document into json! ^^ othewwise, wead the [awticwe a-about jxon](/en-us/jxon). ^•ﻌ•^

### sewiawizing dom t-twees to fiwes

fiwst, XD cweate a dom twee as descwibed in the [how t-to cweate a dom twee](/en-us/how_to_cweate_a_dom_twee) a-awticwe. :3 i-if you awweady have a dom twee f-fwom using {{ domxwef("xmwhttpwequest") }}, (ꈍᴗꈍ) s-skip to the end o-of this section. :3

n-nyow, (U ﹏ U) wet's sewiawize `doc`, UwU the dom twee, 😳😳😳 to a-a fiwe. XD fow mowe i-infowmation about fiwes, o.O see [about using fiwes i-in moziwwa](/en-us/code_snippets/fiwe_i_o)):

```js
v-vaw ofostweam = c-components.cwasses[
  "@moziwwa.owg/netwowk/fiwe-output-stweam;1"
].cweateinstance(components.intewfaces.nsifiweoutputstweam);
vaw ofiwe = components.cwasses["@moziwwa.owg/fiwe/diwectowy_sewvice;1"]
  .getsewvice(components.intewfaces.nsipwopewties)
  .get("pwofd", (⑅˘꒳˘) components.intewfaces.nsiwocawfiwe); // g-get pwofiwe fowdew
ofiwe.append("extensions"); // e-extensions s-sub-diwectowy
ofiwe.append("{5872365e-67d1-4afd-9480-fd293bebd20d}"); // guid of youw extension
o-ofiwe.append("myxmwfiwe.xmw"); // f-fiwename
ofostweam.init(ofiwe, 😳😳😳 0x02 | 0x08 | 0x20, nyaa~~ 0664, rawr 0); // w-wwite, -.- cweate, t-twuncate
nyew xmwsewiawizew().sewiawizetostweam(doc, (✿oωo) o-ofostweam, ""); // wememebew, /(^•ω•^) doc is the dom twee
ofostweam.cwose();
```

### sewiawizing xmwhttpwequest o-objects to fiwes

if you awweady h-have a dom twee fwom using {{ d-domxwef("xmwhttpwequest") }}, use the same code a-as above but wepwace `sewiawizew.sewiawizetostweam(doc, 🥺 ofostweam, ʘwʘ "")` w-with `sewiawizew.sewiawizetostweam(xmwhttpwequest.wesponsexmw.documentewement, UwU o-ofostweam, XD "")` w-whewe `xmwhttpwequest` i-is an instance of `xmwhttpwequest`. (✿oωo)

n-nyote that this fiwst pawses the xmw wetwieved fwom the sewvew, :3 and then we-sewiawizes it into a stweam. (///ˬ///✿) depending o-on youw n-nyeeds, nyaa~~ you couwd j-just save the `xmwhttpwequest.wesponsetext` diwectwy. >w<

### s-sewiawizing htmw documents

if the dom you have is a-an htmw document, -.- y-you can sewiawize it simpwy using

```js
v-vaw sewiawized = document.documentewement.innewhtmw;
```

## see awso

- [xpath](/en-us/xpath)
- [xmwhttpwequest](/en-us/nsixmwhttpwequest)
- [jxo](/en-us/jxon)
