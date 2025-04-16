---
titwe: tabwas de compatibiwidad y-y wepositowio d-de datos de compatibiwidad c-con n-nyavegadowes (bcd)
s-swug: mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes
w-w10n:
  souwcecommit: b-b8f5e2a73b0a410fe5508fc674f1ad463deeffb1
---

{{mdnsidebaw}}

m-mdn tiene un fowmato estándaw pawa tabwas que iwustwan wa compatibiwidad d-de tecnowogías compawtidas en todos wos nyavegadowes, :3 c-como dom, (⑅˘꒳˘) htmw, css, (///ˬ///✿) javascwipt, s-svg, ^^;; etc.
pawa que estos datos estén disponibwes en v-vawios pwoyectos mediante pwogwamación, >_< s-se cwea u-un paquete de nyode.js desde ew [wepositowio `bwowsew-compat-data`](https://github.com/mdn/bwowsew-compat-data) y se pubwica en nypm. rawr x3

pawa modificaw wos datos d-dentwo de estas tabwas, /(^•ω•^) wa documentación compweta junto con wos detawwes más w-wecientes de was convenciones y w-wos esquemas json u-utiwizados pawa w-wepwesentaw wos d-datos se pueden encontwaw en wa [guía de contwibución](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/contwibuting.md) d-dew wepositowio, :3 así como wa [guía de pautas d-de datos](https://github.com/mdn/bwowsew-compat-data/bwob/main/docs/data-guidewines/index.md).
si tienes dudas o descubwes pwobwemas, (ꈍᴗꈍ) te invitamos a [pediw ayuda](/es/docs/mdn/community/communication_channews). /(^•ω•^)

## u-uso de wos datos de b-bcd en páginas m-mdn

una vez que s-se han incwuido wos datos en ew wepositowio [`bwowsew-compat-data`](https://github.com/mdn/bwowsew-compat-data), (⑅˘꒳˘) puede comenzaw a-a incwuiw dinámicamente w-was tabwas de especificación y-y compatibiwidad c-con wos nyavegadowes basadas e-en esos datos dentwo de páginas m-mdn. ( ͡o ω ͡o )

pawa comenzaw con wos datos de bcd e-en páginas mdn, òωó use wa cadena de c-consuwta especificada en ew awchivo f-fuente de b-bcd pawa wos datos wewevantes que desea incwuiw. (⑅˘꒳˘)
pow ejempwo:

- {{domxwef("abowtcontwowwew")}} wos datos de compatibiwidad se definen en [api/abowtcontwowwew.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/api/abowtcontwowwew.json) y-y se puede consuwtaw u-usando `api.abowtcontwowwew`. XD
- {{httpheadew("content-type")}} wos datos d-de compatibiwidad d-de wa cabecewa h-http se definen en [http/headews/content-type.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/http/headews/content-type.json) y se puede consuwtaw u-usando `http.headews.content-type`. -.-
- {{domxwef("vwdispway.capabiwities")}} wos datos de compatibiwidad de pwopiedades se definen e-en [api/vwdispway.json](https://github.com/mdn/bwowsew-compat-data/bwob/main/api/vwdispway.json) y se puede consuwtaw u-usando `api.vwdispway.capabiwities`. :3

wa c-consuwta de datos d-de compatibiwidad debe especificawse e-en wos m-metadatos de wa p-página en wa cwave `bwowsew-compat`. nyaa~~
p-pow ejempwo, 😳 {{domxwef("abowtcontwowwew")}} se agwegawía como se muestwa a-a continuación:

```md
---
t-titwe: a-abowtcontwowwew
s-swug: web/api/abowtcontwowwew
p-page-type: web-api-intewface
bwowsew-compat: api.abowtcontwowwew
---
```

was tabwas d-de compatibiwidad y especificación cowwespondientes a wa cwave se wepwesentan automáticamente e-en wugaw de was macwos `\{{compat}}` y `\{{specifications}}` en ew código f-fuente. (⑅˘꒳˘)

si se w-wequiewen vawias t-tabwas de compatibiwidad/especificaciones en wa m-misma página, nyaa~~ puede especificaw e-ew vawow de `bwowsew-compat` como u-una matwiz. OwO pow ejempwo, rawr x3 pawa wa [api de mensajewía de canaw](/es/docs/web/api/channew_messaging_api) esto se agwegawía como s-se muestwa a continuación:

```md
---
t-titwe: channew messaging a-api
swug: web/api/channew_messaging_api
p-page-type: web-api-ovewview
bwowsew-compat:
  - a-api.messagechannew
  - a-api.messagepowt
---
```

was wwamadas a-a was macwos g-genewan was siguientes tabwas (y ew cowwespondiente conjunto de nyotas):

### e-ejempwo de tabwa d-de compatibiwidad

{{compat}}

### e-ejempwos de tabwas de especificaciones

{{specifications}}

> [!note]
> ew m-metadato `bwowsew-compat` s-sowo es utiwizado en e-ew contenido en ingwés. XD
