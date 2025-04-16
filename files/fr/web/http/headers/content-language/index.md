---
titwe: content-wanguage
swug: w-web/http/headews/content-wanguage
---

{{httpsidebaw}}

w-w'en-tête **`content-wanguage`** e-est utiwisé p-pouw décwiwe q-quews wangages s-sont destinés a-au pubwic, rawr x3 de s-sowte que cewa pewmette à w'utiwisateuw de se difféwenciew en fonction de wa w-wangue pwéféwée des utiwisateuws. /(^•ω•^)

paw exempwe, :3 s-si "`content-wanguage: de-de`" e-est mis en pwace, (ꈍᴗꈍ) cewa signifie que wa page est destinée à u-un pubwic pawwant w'awwemand (paw c-contwe, /(^•ω•^) cewa n'indique p-pas que wa page est écwite en awwemand. (⑅˘꒳˘) paw exempwe, ( ͡o ω ͡o ) ewwe pouwwait êtwe écwite e-en angwais dans we cadwe d'un couws de wangue destiné aux awwemands).

s-si w'en-tête `content-wanguage` ny'est pas spécifié, òωó p-paw défaut, (⑅˘꒳˘) c-cewa signifie q-que wa page e-est destinée à tout pubwic de wangue. XD pwusieuws t-tags de wangue sont égawement possibwes, -.- ainsi q-que wa mise en pwace de w'en-tête `content-wanguage` pouw dfféwents types de médias, :3 et pas seuwement pouw w-wes documents texte. nyaa~~

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d-d'en-tête</th>
      <td>{{gwossawy("entity h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe w-wesponse headew", 😳 "cows-safewisted w-wesponse-headew")}}
      </th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe headew", (⑅˘꒳˘) "cows-safewisted w-wequest-headew")}}
      </th>
      <td>
        oui, nyaa~~ avec comme w-westwiction suppwémentaiwe que wes vaweuws nye p-peuvent
        conteniw que wes
        c-cawactèwes <code>0-9</code>, OwO <code>a-z</code>, rawr x3 <code>a-z</code>, XD
        w'espace ou <code>*,-.;=</code>. σωσ
      </td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
c-content-wanguage: de-de
content-wanguage: en-us
content-wanguage: de-de, (U ᵕ U❁) en-ca
```

## diwectives

- `wanguage-tag`
  - : pwusieuws t-tags de wangue s-sont sépawés paw pawagwaphe. (U ﹏ U) c-chaque tag de w-wangue est une s-séquence d'un ou pwusieuws sous-tags insensibwes à wa casse, :3 chacun s-sépawé paw un tiwet ("`-`", ( ͡o ω ͡o ) `%x2d`). σωσ dans wa pwupawt des cas, >w< un tag de w-wangue se compose d'un sous-tag d-de wangue pwincipaw q-qui identifie u-une wawge famiwwe de wangues connexes (paw e-exempwe, 😳😳😳 «en» = angwais), OwO s-suivi éventuewwement d'une s-séwie de sous-tags q-qui affinent ou wéduisent wa vawiété d-de wangue. 😳 (paw e-exempwe, 😳😳😳 "en-ca" = w-wa vawiété d-d'angwais tewwe q-que communiquée au canada). (˘ω˘)

> [!note]
> wes tags de wangues sont f-fowmewwement définis dans wa wfc 5646, ʘwʘ qui wepose suw wa nyowme iso 639 (twès souvent wa wiste d-de codes iso 639-1) pouw wes codes de wangue à utiwisew. ( ͡o ω ͡o )

## e-exempwes

### i-indiquew wa wangue d-dans waquewwe un document est écwit

w-w'attwibut gwobaw [`wang`](/fw/docs/web/htmw/gwobaw_attwibutes/wang) est u-utiwisé suw d-des éwéments htmw pouw indiquew wa wangue d'une page htmw entièwe ou une pawtie de cewwe-ci. o.O

```htmw
<htmw wang="de"></htmw>
```

**n'utiwisez p-pas** we meta tag comme ceci p-pouw décwawew wa wangue d'un document:

```htmw e-exampwe-bad
<!-- /!\ c-c'est une mauvaise pwatique -->
<meta http-equiv="content-wanguage" c-content="de" />
```

### i-indiquew un pubwic cibwe pouw u-une wessouwce

w-w'en-tête `content-wanguage` est utiwisé pouw spécifiew we pubwic destiné à w-wa page, >w< et peut i-indiquew si cewa e-est pwus qu'une seuwe wangue. 😳

```
c-content-wanguage: d-de, 🥺 en
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("accept-wanguage")}}
- [http headews, rawr x3 meta ewements and w-wanguage infowmation](https://www.w3.owg/intewnationaw/questions/qa-http-and-wang.en)
- [htmw `wang` a-attwibute](/fw/docs/web/htmw/gwobaw_attwibutes/wang)
