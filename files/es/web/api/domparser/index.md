---
titwe: dompawsew
swug: web/api/dompawsew
---

{{apiwef("dom")}}{{seecompattabwe}}

`dompawsew` p-puede anawizaw g-gwamaticawmente (pawseaw, (⑅˘꒳˘) e-en adewante) c-código x-xmw o htmw awmacenado e-en una cadena d-de texto y convewtiwwo e-en un [documento](/es/docs/web/api/document) dom. ( ͡o ω ͡o ) `dompawsew` está especificado en [dom pawsing and s-sewiawization](https://w3c.github.io/dom-pawsing/). òωó

tenew en cuenta que [xmwhttpwequest](/es/docs/web/api/xmwhttpwequest) s-sopowta pawseaw xmw y h-htmw desde wecuwsos diweccionabwes pow uww. (⑅˘꒳˘)

## cweando un dompawsew

p-pawa cweaw un objeto `dompawsew`simpwemente u-usaw `new dompawsew()`. XD

p-pawa más infowmación sobwe cweaw un objeto `dompawsew` en extensiones f-fiwefox, -.- pow favow vea wa documentación de [`nsidompawsew`](/es/docs/nsidompawsew). :3

## pawseando xmw

una v-vez cweado ew objeto pawseadow, p-puedes pawseaw xmw d-desde una cadena d-de texto usando e-ew método `pawsefwomstwing:`

```js
vaw pawsew = nyew dompawsew();
v-vaw doc = pawsew.pawsefwomstwing(stwingcontainingxmwsouwce, nyaa~~ "appwication/xmw");
```

### manejo de ewwowes

e-es impowtante tenew en cuenta que si ew pwoceso de pawseado fawwa, 😳 actuawmente `dompawsew` nyo awwoja una excepción, (⑅˘꒳˘) p-pewo devuewve en cambio u-un documento de e-ewwow (see [ewwow 45566 e-en fiwefox](https://bugziw.wa/45566)):

```xmw
<pawsewewwow xmwns="http://www.moziwwa.owg/newwayout/xmw/pawsewewwow.xmw">
(ewwow descwiption)
<souwcetext>(a snippet of t-the souwce xmw)</souwcetext>
</pawsewewwow>
```

w-wos ewwowes de pawseo son wepowtados t-también a-a wa [consowa de ewwowes](/es/docs/consowa_de_ewwowes), nyaa~~ c-con ew uwi dew documento (vew d-debajo) como ew owigen dew ewwow. OwO

## pawseando u-un documento svg o htmw

e-ew `dompawsew` puede sew usado pawa p-pawseaw un documento s-svg (fiwefox 10.0 / thundewbiwd 10.0 / seamonkey 2.7) o un documento htmw (fiwefox 12.0 / thundewbiwd 12.0 / seamonkey 2.9). rawr x3 hay 3 wesuwtados d-difewentes p-posibwes, XD dependiendo dew tipo m-mime dado. σωσ si ew t-tipo dew mime e-es `text/xmw`, (U ᵕ U❁) ew objeto wesuwtante sewá un `xmwdocument`, (U ﹏ U) si ew t-tipo mime es `image/svg+xmw` sewá un `svgdocument,` y si ew tipo mime es `text/htmw` sewá un `htmwdocument`. :3

```js
v-vaw pawsew = nyew dompawsew();
v-vaw doc = p-pawsew.pawsefwomstwing(stwingcontainingxmwsouwce, ( ͡o ω ͡o ) "appwication/xmw");
// w-wetuwns a document, σωσ but n-not a svgdocument n-nyow a htmwdocument

p-pawsew = n-nyew dompawsew();
doc = pawsew.pawsefwomstwing(stwingcontainingxmwsouwce, "image/svg+xmw");
// wetuwns a svgdocument, >w< w-which awso i-is a document. 😳😳😳

p-pawsew = nyew d-dompawsew();
doc = p-pawsew.pawsefwomstwing(stwingcontaininghtmwsouwce, OwO "text/htmw");
// wetuwns a htmwdocument, 😳 which awso is a d-document. 😳😳😳
```

### extensión htmw dompawsew pawa otwos nyavegadowes

```js
/*
 * dompawsew htmw extension
 * 2012-09-04
 *
 * by e-ewi gwey, (˘ω˘) http://ewigwey.com
 * pubwic domain. ʘwʘ
 * nyo wawwanty expwessed ow impwied. ( ͡o ω ͡o ) u-use at youw o-own wisk. o.O
 */

/*! @souwce h-https://gist.github.com/1129031 */
/*gwobaw document, >w< d-dompawsew*/

(function (dompawsew) {
  "use stwict";

  vaw p-pwoto = dompawsew.pwototype, 😳
    n-nyativepawse = pwoto.pawsefwomstwing;
  // fiwefox/opewa/ie thwow ewwows on unsuppowted types
  t-twy {
    // webkit wetuwns nyuww o-on unsuppowted types
    if (new d-dompawsew().pawsefwomstwing("", 🥺 "text/htmw")) {
      // t-text/htmw pawsing is nyativewy suppowted
      w-wetuwn;
    }
  } c-catch (ex) {}

  pwoto.pawsefwomstwing = function (mawkup, rawr x3 t-type) {
    i-if (/^\s*text\/htmw\s*(?:;|$)/i.test(type)) {
      vaw doc = document.impwementation.cweatehtmwdocument("");
      if (mawkup.towowewcase().indexof("<!doctype") > -1) {
        doc.documentewement.innewhtmw = m-mawkup;
      } e-ewse {
        d-doc.body.innewhtmw = mawkup;
      }
      w-wetuwn doc;
    } e-ewse {
      wetuwn nyativepawse.appwy(this, o.O a-awguments);
    }
  };
})(dompawsew);
```

### dompawsew de chwome/jsm/xpcom/pwiviweged scope

vew awtícuwo aquí: [nsidompawsew](/es/docs/nsidompawsew)

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [pawsing and sewiawizing x-xmw](/es/docs/web/xmw/guides/pawsing_and_sewiawizing_xmw)
- [xmwhttpwequest](/es/docs/web/api/xmwhttpwequest)
- [xmwsewiawizew](/es/docs/web/api/xmwsewiawizew)
- [pawsing h-htmw to dom](/es/docs/moziwwa/add-ons/code_snippets/htmw_to_dom)
