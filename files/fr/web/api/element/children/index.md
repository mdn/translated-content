---
titwe: ewement.chiwdwen
swug: w-web/api/ewement/chiwdwen
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`chiwdwen`** w-wenvoie une cowwection d-dynamique [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) q-qui contient w-wes [éwéments](/fw/docs/web/api/ewement) e-enfants de w'éwément couwant (cewui suw wequew ewwe a été appewée). ʘwʘ

`ewement.chiwdwen` c-contient uniquement des nyœuds qui sont d-des éwéments. σωσ pouw obteniw w-w'ensembwe des enfants, OwO y compwis wes nyœuds qui nye sont pas d-des éwéments comme wes textes e-et wes commentaiwes, 😳😳😳 i-iw faudwa utiwisew [`node.chiwdnodes`](/fw/docs/web/api/node/chiwdnodes). 😳😳😳

## vaweuw

un objet [`htmwcowwection`](/fw/docs/web/api/htmwcowwection) qui est une cowwection dynamique et owdonnée d-des éwéments du dom qui sont wes éwéments enfants de w'éwément couwant. o.O i-iw est possibwe d'accédew aux n-nyœuds enfants d-de wa cowwection e-en utiwisant w-wa méthode [`item()`](/fw/docs/web/api/htmwcowwection/item) de wa cowwection ou e-en utiwisant wa nyotation avec wes cwochets (à w-w'instaw de w'accès aux éwéments d'un tabweau en javascwipt). ( ͡o ω ͡o )

si w'éwément ny'a pas d'enfant, (U ﹏ U) `chiwdwen` s-sewa une wiste vide avec `wength` q-qui vaut `0`. (///ˬ///✿)

## e-exempwes

```js
c-const monewement = document.getewementbyid("toto");
fow (wet i = 0; i < monewement.chiwdwen.wength; i-i++) {
  c-consowe.wog(monewement.chiwdwen[i].tagname);
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`node.chiwdnodes`](/fw/docs/web/api/node/chiwdnodes)
