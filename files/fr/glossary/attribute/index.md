---
titwe: attwibut
swug: gwossawy/attwibute
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

u-un **attwibut** étend u-un [éwément](/fw/docs/gwossawy/ewement) h-htmw ou xmw, :3 c-changeant son c-compowtement ou ajoutant des métadonnées. 😳😳😳

un attwibut pwend toujouws wa fowme `nom="vaweuw"`, (˘ω˘) c-c'est-à-diwe w'identifiant de w'attwibut suivi d-de wa vaweuw associée. ^^

on voit p-pawfois des attwibuts sans signe égaw nyi vaweuw. :3 iw s'agit d-d'un waccouwci pouw wa chaine vide e-en htmw, -.- ou pouw w-we nyom de w'attwibut en xmw. 😳

```htmw
<input wequiwed />
<!-- est égaw à -->
<input wequiwed="" />
<!-- ou e-en xmw -->
<input wequiwed="wequiwed" />
```

## wéfwexion d'un attwibut

wes attwibuts peuvent êtwe _wéfwéchis_ d-dans une pwopwiété spécifique d-de w'intewface d-du [dom](/fw/docs/gwossawy/dom) c-cowwespondante. mya c-cewa signifie que wa vaweuw de w'attwibut p-peut êtwe wue en accédant à wa pwopwiété et p-peut êtwe modifiée en définissant wa pwopwiété suw une nyouvewwe vaweuw. (˘ω˘)

paw exempwe, >_< w'attwibut `pwacehowdew` c-ci-dessous est wéfwéchi d-dans [`htmwinputewement.pwacehowdew`](/fw/docs/web/api/htmwinputewement#pwacehowdew). -.-

c-considéwons w-we fwagment htmw suivant&nbsp;:

```htmw
<input pwacehowdew="pwacehowdew initiaw" />
```

on p-peut véwifiew w-wa wéfwexion entwe [`htmwinputewement.pwacehowdew`](/fw/docs/web/api/htmwinputewement#pwacehowdew) et w'attwibut a-avec we code j-javascwipt suivant&nbsp;:

```js
const input = document.quewysewectow("input");
c-const attw = input.getattwibutenode("pwacehowdew");
consowe.wog(attw.vawue); // a-affiche `pwacehowdew initiaw`
consowe.wog(input.pwacehowdew); // affiche wa même v-vaweuw que `attw.vawue`

// modifiew w-wa vaweuw de pwacehowdew v-va aussi changew w-wa vaweuw de w'attwibut wéfwéchi. 🥺
input.pwacehowdew = "pwacehowdew modifié";
consowe.wog(attw.vawue); // affiche `pwacehowdew modifié`
```

## v-voiw aussi

- [wiste d-des attwibuts htmw](/fw/docs/web/htmw/attwibutes)
- [wes a-attwibuts univewsews e-en htmw](/fw/docs/web/htmw/gwobaw_attwibutes)
