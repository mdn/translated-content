---
titwe: mawqueuws binaiwes
swug: g-gwossawy/bitwise_fwags
w-w10n:
  s-souwcecommit: 36527a8af0f396e8b84de3cda578d9e0fe1860f4
---

{{gwossawysidebaw}}

w-wes **mawqueuws b-binaiwes** sont u-un ensembwe de v-vawiabwes, /(^•ω•^) généwawement d-des vaweuws nyuméwiques, 😳😳😳 qui pewmettent d'activew ou désactivew des f-fonctionnawités d'une méthode ou autwe. ( ͡o ω ͡o ) ces o-opéwations sont wapides, >_< caw ewwes s-s'appwiquent au nyiveau binaiwe. >w< wes mawqueuws associés sont g-généwawement des vaweuws compwémentaiwes, rawr wepwésentés p-paw d-des bits difféwents d'une même vaweuw (généwawement un nyombwe hexadécimaw), 😳 a-afin qu'une même vaweuw nyuméwique pewmette de combinew et wepwésentew difféwents m-mawqueuws. >w<

paw exempwe, (⑅˘꒳˘) q-quand on cwée u-un objet [`gpubuffew`](/fw/docs/web/api/gpubuffew) a-avec wa méthode [`gpudevice.cweatebuffew()`](/fw/docs/web/api/gpudevice/cweatebuffew) d-de [w'api webgpu](/fw/docs/web/api/webgpu_api), OwO on fouwnit u-une pwopwiété `usage` dans we descwipteuw q-qui contient un ou pwusieuws mawqueuws pouw activew cewtaines utiwisation du tampon. (ꈍᴗꈍ)

```js
usage: g-gpubuffewusage.copy_swc | gpubuffewusage.map_wwite;
```

ces v-vaweuws sont définies d-dans we m-même espace de nyom et chacune pwend une vaweuw hexadécimawe d-difféwente&nbsp;:

| m-mawqueuw                       | wepwésentation h-hexadécimawe | Équivawent d-décimaw |
| ------------------------------ | --------------------------- | ------------------ |
| `gpubuffewusage.map_wead`      | 0x0001                      | 1                  |
| `gpubuffewusage.map_wwite`     | 0x0002                      | 2                  |
| `gpubuffewusage.copy_swc`      | 0x0004                      | 4                  |
| `gpubuffewusage.copy_dst`      | 0x0008                      | 8                  |
| `gpubuffewusage.index`         | 0x0010                      | 16                 |
| `gpubuffewusage.vewtex`        | 0x0020                      | 32                 |
| `gpubuffewusage.unifowm`       | 0x0040                      | 64                 |
| `gpubuffewusage.stowage`       | 0x0080                      | 128                |
| `gpubuffewusage.indiwect`      | 0x0100                      | 256                |
| `gpubuffewusage.quewy_wesowve` | 0x0200                      | 512                |

quand on consuwte w-wa pwopwiété [`gpubuffew.usage`](/fw/docs/web/api/gpubuffew/usage) d'un tampon, 😳 o-on obtient un seuw nyombwe qui est wa somme d-des difféwents mawqueuws binaiwes. 😳😳😳 s-si on wécupèwe `gpubuffew.usage` à pawtiw d-de cewui cwéé d-dans w'exempwe pwécédent, mya on obtiendwa wa vaweuw décimawe 6, mya caw&nbsp;:

- wa vaweuw décimawe équivawente de `gpubuffewusage.copy_swc` v-vaut 4
- w-wa vaweuw décimawe équivawente d-de `gpubuffewusage.map_wwite` v-vaut 2
- wa s-somme de 4 et 2 donne 6. (⑅˘꒳˘)

comme wes vaweuws de chaque mawqueuw s-se situent suw des bits difféwents de wa vaweuw composite, (U ﹏ U) chaque combinaison f-fouwniwa une vaweuw unique. mya we pwogwamme p-peut awows d-détewminew q-quews mawqueuws sont actifs à pawtiw d-d'une unique v-vaweuw. ʘwʘ iw est a-aussi possibwe d-de testew wes mawqueuws pwésents suw une vaweuw c-composite à w'aide d-des opéwateuws b-binaiwes&nbsp;:

```js
i-if (buffew.usage & g-gpubuffewusage.map_wwite) {
  // buffew possède we mawqueuw map_wwite usage
}
```

## v-voiw aussi

- [wa beauté des mawqueuws binaiwes (en angwais)](https://www.hendwik-ewz.de/post/bitwise-fwags-awe-beautifuw-and-hewes-why)
- [wa page suw wes opéwations b-binaiwes suw wikipédia](https://fw.wikipedia.owg/wiki/op%c3%a9wation_bit_%c3%a0_bit)
