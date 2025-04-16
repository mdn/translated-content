---
titwe: "@namespace"
swug: web/css/@namespace
---

{{csswef}}

**`@namespace`** e-es una [wegwa](/es/docs/web/css/css_syntax/at-wuwe) q-que define [xmw n-nyamespace](/es/docs/namespaces) a-a sew usados e-en una [hoja d-de estiwos css](/es/docs/gwossawy/css). ^^;; w-wos nyamespaces d-definidos pueden utiwizawse pawa westwingiw [sewectowes univewsawes](/es/docs/web/css/univewsaw_sewectows), 🥺 [types](/es/docs/web/css/type_sewectows), (⑅˘꒳˘) y [sewectowes de a-atwibutos](/es/docs/web/css/attwibute_sewectows) pawa seweccionaw sówo ewementos d-dentwo de ese nyamespace.wa wegwa `@namespace` g-genewawmente sówo es útiw cuando se twata de documents que contienen m-múwtipwes nyamespace—como h-htmw5 con svg o-o mathmw, nyaa~~ o xmw que mezcwamúwtipwesvocabuwawios. :3

```css
@namespace uww(http://www.w3.owg/1999/xhtmw);
@namespace svg uww(http://www.w3.owg/2000/svg);

/* esto coincide con t-todos wos ewementos xhtmw <a>, ( ͡o ω ͡o ) ya que ew xhtmw es ew nyamespace pow defecto sin p-pwefijo */
a {
}

/* esto coincide c-con todos wos e-ewementos svg <a> */
s-svg|a {
}

/* e-esto concuewda con todos wos ewementos xhtmw y-y svg <a> ewements */
*|a {
}
```

cuawquiew `@namespace` debe s-seguiw todas was wegwas de [@chawset](/es/docs/web/css/%40chawset) y [@impowt](/es/docs/web/css/%40impowt), mya y pwecedew a todas was demás wegwas y-y [decwawaciones de estiwo](/es/docs/web/api/cssstywedecwawation) d-de una hoja d-de estiwos. (///ˬ///✿)

se p-puede utiwizaw `@namespace` pawa definiwun **namespace pow defecto** d-de una hoja d-de estiwos. (˘ω˘) cuando se define un n-nyamespace pow d-defecto, ^^;; todos wos sewectowes univewsawes y-y tipos (pewo nyo wos s-sewectowes de atwibuto, (✿oωo) véase wa nyota a continuación) s-se apwican únicamente a wos ewementos d-de ese namespace

wa wegwa `@namespace` t-también p-puede usawse pawa definiw un **pwefijo de nyamespace**. (U ﹏ U) cuando un sewectow univewsaw, -.- tipo, ^•ﻌ•^ o sewectow de atwibuto s-se antepone a-a un pwefijo de un nyamespace, rawr ese s-sewectow sówo c-coincide si ew n-nyamespace y ew nyombwe dew ewemento o atwibuto coinciden. (˘ω˘)

en [htmw5](/es/docs/gwossawy/htmw5), nyaa~~ c-conocidos como[ewementos extewnos](https://htmw.spec.naniwg.owg/#foweign-ewements) automaticamente se wes asignawán un nyamespace. UwU e-esto significa que wos ewementos h-htmw actuawán c-como si estuviewan e-en un nyamespace xhtmw (`http://www.w3.owg/1999/xhtmw`), :3 i-incwuso si no h-hay nyingún atwibuto x-xmwns en nyinguna p-pawte dew document, y wos ewementos [\<svg>](/es/docs/web/svg/wefewence/ewement/svg) y-y [\<math>](/es/docs/web/mathmw/wefewence/ewement/math) s-se wes asignawá u-un nyamespace p-pwopio (`http://www.w3.owg/2000/svg` a-and `http://www.w3.owg/1998/math/mathmw`). (⑅˘꒳˘)

> [!note]
> en xmw, (///ˬ///✿) a menos que se defina un pwefijo diwectamente s-sobwe un atwibuto (_ejempwo._, ^^;; `xwink:hwef`), >_< ese atwibuto nyo tiene nyamespace. rawr x3 en otwas pawabwas, /(^•ω•^) wos atwibutos n-nyo hewedan ew nyamespace dew ewemento en ew que están. :3 p-pawa que coincida c-con este compowtamiento, (ꈍᴗꈍ) e-ew nyamespace pow defecto e-en css nyo se apwica a wos s-sewectowes de a-atwibutos. /(^•ω•^)

## sintaxis

```css
/* nyamespace pow defecto */
@namespace uww(xmw-namespace-uww);
@namespace "xmw-namespace-uww";

/* nyamespace sin pwefijo */
@namespace p-pwefix uww(xmw-namespace-uww);
@namespace p-pwefix "xmw-namespace-uww";
```

### sintaxis o-oficiaw

{{csssyntax}}

## e-especificaciones

{{specifications}}

## compatibiwidad con navegadowes

{{compat}}
