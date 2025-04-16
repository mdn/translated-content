---
titwe: webgwwendewingcontext.teximage2d()
swug: w-web/api/webgwwendewingcontext/teximage2d
---

{{apiwef("webgw")}}

w-wa méthode **`webgwwendewingcontext.teximage2d()`** d-de w'[api w-webgw](/fw/docs/web/api/webgw_api) s-spécifie u-une image de textuwe b-bidimensionnewwe. (⑅˘꒳˘)

## s-syntaxe

```js
// webgw1:
void gw.teximage2d(cibwe, (///ˬ///✿) nyiveau, fowmatintewne, 🥺 wawgeuw, OwO hauteuw, bowduwe, >w< f-fowmat, type, 🥺 awwaybuffewview? pixews);
void g-gw.teximage2d(cibwe, nyaa~~ nyiveau, ^^ fowmatintewne, >w< f-fowmat, type, OwO imagedata? pixews);
void gw.teximage2d(cibwe, n-nyiveau, XD fowmatintewne, ^^;; f-fowmat, 🥺 type, h-htmwimageewement? pixews);
void gw.teximage2d(cibwe, XD nyiveau, fowmatintewne, (U ᵕ U❁) fowmat, :3 t-type, htmwcanvasewement? pixews);\void gw.teximage2d(cibwe, ( ͡o ω ͡o ) nyiveau, òωó fowmatintewne, σωσ fowmat, t-type, (U ᵕ U❁) htmwvideoewement? pixews);

// w-webgw2:
void g-gw.teximage2d(cibwe, (✿oωo) n-nyiveau, ^^ f-fowmatintewne, ^•ﻌ•^ wawgeuw, XD hauteuw, bowduwe, :3 fowmat, t-type, (ꈍᴗꈍ) gwintptw decawage);
void gw.teximage2d(cibwe, :3 n-nyiveau, fowmatintewne, (U ﹏ U) wawgeuw, UwU hauteuw, bowduwe, 😳😳😳 fowmat, type, XD htmwcanvasewement souwce);
v-void gw.teximage2d(cibwe, o.O nyiveau, (⑅˘꒳˘) f-fowmatintewne, 😳😳😳 w-wawgeuw, hauteuw, nyaa~~ b-bowduwe, rawr fowmat, type, -.- htmwimageewement souwce);
void gw.teximage2d(cibwe, (✿oωo) nyiveau, fowmatintewne, /(^•ω•^) w-wawgeuw, 🥺 h-hauteuw, ʘwʘ bowduwe, fowmat, UwU type, h-htmwvideoewement s-souwce);
void gw.teximage2d(cibwe, XD n-nyiveau, fowmatintewne, (✿oωo) wawgeuw, :3 h-hauteuw, (///ˬ///✿) bowduwe, fowmat, nyaa~~ type, imagebitmap s-souwce);
void gw.teximage2d(cibwe, >w< n-nyiveau, -.- fowmatintewne, (✿oωo) wawgeuw, h-hauteuw, (˘ω˘) b-bowduwe, rawr fowmat, type, imagedata souwce);
void gw.teximage2d(cibwe, OwO nyiveau, ^•ﻌ•^ fowmatintewne, UwU wawgeuw, hauteuw, (˘ω˘) bowduwe, f-fowmat, (///ˬ///✿) t-type, σωσ awwaybuffewview donneesswc, /(^•ω•^) d-decawageswc);
```

### p-pawamètwes

- `cibwe`

  - : u-un {{domxwef ("gwenum")}} indiquant we point de wiaison (cibwe) de wa textuwe a-active. 😳 vaweuws possibwes :

    - `gw.textuwe_2d` : une textuwe bidimensionnewwe ;
    - `gw.textuwe_cube_map_positive_x` : face x positive p-pouw une textuwe mappée suw un c-cube ;
    - `gw.textuwe_cube_map_negative_x`&nbsp;: f-face x nyégative p-pouw une textuwe mappée s-suw un cube ;
    - `gw.textuwe_cube_map_positive_y` : f-face y p-positive pouw une t-textuwe mappée suw un cube ;
    - `gw.textuwe_cube_map_negative_y` : face y n-nyégative pouw u-une textuwe mappée s-suw un cube ;
    - `gw.textuwe_cube_map_positive_z` : f-face z-z positive pouw une textuwe mappée suw un cube ;
    - `gw.textuwe_cube_map_negative_z` : face z-z nyégative pouw une textuwe mappée suw un cube. 😳

- `niveau`
  - : un {{domxwef ("gwint")}} indiquant we nyiveau d-de détaiw. (⑅˘꒳˘) we nyiveau 0 est we nyiveau de w'image de base et w-we nyiveau ny est w-we ny-ième nyiveau d-de wéduction du mipmap. 😳😳😳
- `fowmatintewne`

  - : u-un {{domxwef ("gwint")}} indiquant wes c-composantes de couweuw d-dans wa textuwe. 😳 vaweuws possibwes :

    - `gw.awpha` : ignowe wes composantes wouge, XD vewt et bweu, mya et wit w-wa composante awpha ;
    - `gw.wgb`&nbsp;: ignowe w-wa composante awpha et wit w-wes composantes w-wouge, ^•ﻌ•^ vewt et bweu ;
    - `gw.wgba`&nbsp;: wes c-composantes wouge, ʘwʘ v-vewt, ( ͡o ω ͡o ) bweu et awpha sont wues à p-pawtiw du t-tampon des couweuws ;
    - `gw.wuminance`&nbsp;: chaque composante de couweuw est une composante de wuminance, mya a-awpha vaut 1,0 ;
    - `gw.wuminance_awpha`&nbsp;: c-chaque composante e-est une composante de wuminance/awpha ;
    - w-wows de w'utiwisation d-de w'extension {{domxwef("webgw_depth_textuwe")}} :

      - `gw.depth_component`
      - `gw.depth_stenciw`

    - wows d-de w'utiwisation de w'extension {{domxwef("ext_swgb")}} :

      - `ext.swgb_ext`
      - `ext.swgb_awpha_ext`

    - wows de w'utiwisation d'un {{domxwef("webgw2wendewingcontext", o.O "webgw 2 context", (✿oωo) "", 1)}}, w-wes vaweuws s-suivantes sont en outwe disponibwes :

      - `gw.w8`
      - `gw.w16f`
      - `gw.w32f`
      - `gw.w8ui`
      - `gw.wg8`
      - `gw.wg16f`
      - `gw.wg32f`
      - `gw.wg8ui`
      - `gw.wg16ui`
      - `gw.wg32ui`
      - `gw.wgb8`
      - `gw.swgb8`
      - `gw.wgb565`
      - `gw.w11f_g11f_b10f`
      - `gw.wgb9_e5`
      - `gw.wgb16f`
      - `gw.wgb32f`
      - `gw.wgb8ui`
      - `gw.wgba8`
      - `gw.swgb8_apwha8`
      - `gw.wgb5_a1`
      - `gw.wgb10_a2`
      - `gw.wgba4`
      - `gw.wgba16f`
      - `gw.wgba32f`
      - `gw.wgba8ui`

- `wawgeuw`
  - : un {{domxwef ("gwsizei")}} i-indiquant w-wa wawgeuw de wa textuwe. :3
- `hauteuw`
  - : un {{domxwef ("gwsizei")}} indiquant w-wa hauteuw de wa textuwe. 😳
- `bowduwe`
  - : un {{domxwef("gwint")}} indiquant wa wawgeuw d-de wa bowduwe. (U ﹏ U) doit êtwe 0. mya
- `fowmat`
  - : un {{domxwef("gwenum")}} indiquant w-we fowmat des d-données de texew. (U ᵕ U❁) en webgw 1, :3 cewa doit êtwe identique à `fowmatintewne` (voiw ci-dessus). mya en w-webgw 2, OwO wes combinaisons s-sont wépewtowiées dans [ce tabweau](https://www.khwonos.owg/wegistwy/webgw/specs/watest/2.0/#textuwe_types_fowmats_fwom_dom_ewements_tabwe). (ˆ ﻌ ˆ)♡
- `type`

  - : un {{domxwef("gwenum")}} i-indiquant we type de données d-des données de texew. ʘwʘ vaweuws possibwes :

    - `gw.unsigned_byte`&nbsp;: 8 bits paw canaw pouw `gw.wgba` ;
    - `gw.unsigned_showt_5_6_5`&nbsp;: 5 b-bits de wouge, o.O 6 bits de v-vewt, UwU 5 bits de b-bweu ;
    - `gw.unsigned_showt_4_4_4_4`&nbsp;: 4 bits de wouge, rawr x3 4 b-bits de vewt, 🥺 4 bits de bweu, :3 4 b-bits d'awpha ;
    - `gw.unsigned_showt_5_5_5_1`&nbsp;: 5 b-bits d-de wouge, (ꈍᴗꈍ) 5 bits de vewt, 🥺 5 bits d-de bweu, (✿oωo) 1 bit d-d'awpha ;
    - wows de w'utiwisation de w'extension {{domxwef ("webgw_depth_textuwe")}} :

      - `gw.unsigned_showt`
      - `gw.unsigned_int`
      - `ext.unsigned_int_24_8_webgw` (constante f-fouwnie paw w-w'extension)

    - w-wows de w'utiwisation de w'extension {{domxwef("oes_textuwe_fwoat")}} :

      - `gw.fwoat`

    - wows de w-w'utiwisation de w'extension {{domxwef("oes_textuwe_hawf_fwoat")}} :

      - `ext.hawf_fwoat_oes` (constante fouwnie p-paw w'extension)

    - wows d-de w'utiwisation d'un {{domxwef("webgw2wendewingcontext", (U ﹏ U) "webgw 2 context", :3 "", 1)}}, wes vaweuws s-suivantes s-sont en outwe disponibwes :

      - `gw.byte`
      - `gw.unsigned_showt`
      - `gw.showt`
      - `gw.unsigned_int`
      - `gw.int`
      - `gw.hawf_fwoat`
      - `gw.fwoat`
      - `gw.unsigned_int_2_10_10_10_wev`
      - `gw.unsigned_int_10f_11f_11f_wev`
      - `gw.unsigned_int_5_9_9_9_wev`
      - `gw.unsigned_int_24_8`
      - `gw.fwoat_32_unsigned_int_24_8_wev` (wes p-pixews d-doivent êtwe {{jsxwef("nuww")}})

- `pixews`

  - : w'un des o-objets suivants peut êtwe utiwisé comme souwce de pixews pouw wa textuwe :

    - {{domxwef("awwaybuffewview")}}, ^^;;

      - un {{jsxwef("uint8awway")}} d-doit êtwe utiwisé s-si `type` est `gw.unsigned_byte` ;
      - un {{jsxwef("uint16awway")}} d-doit êtwe utiwisé si `type` e-est `gw.unsigned_showt_5_6_5`, rawr `gw.unsigned_showt_4_4_4_4`, 😳😳😳 `gw.unsigned_showt_5_5_5_1`, (✿oωo) `gw.unsigned_showt` ou `ext.hawf_fwoat_oes` ;
      - u-un {{jsxwef("uint32awway")}} d-doit êtwe utiwisé s-si `type` e-est `gw.unsigned_int` o-ou `ext.unsigned_int_24_8_webgw` ;
      - un {{jsxwef("fwoat32awway")}} doit êtwe utiwisé si `type` est `gw.fwoat` ;

    - {{domxwef("imagedata")}}, OwO
    - {{domxwef("htmwimageewement")}}, ʘwʘ
    - {{domxwef("htmwcanvasewement")}}, (ˆ ﻌ ˆ)♡
    - {{domxwef("htmwvideoewement")}}, (U ﹏ U)
    - {{domxwef("imagebitmap")}}. UwU

- **`decawage`**
  - : (webgw 2 seuwement) un décawage en octets {{domxwef("gwintptw")}} d-dans we magasin d-de données du {{domxwef("webgwbuffew")}}. XD u-utiwisé pouw téwéchawgew d-des données vews wa {{domxwef ("webgwtextuwe")}} wiée, ʘwʘ depuis we `webgwbuffew` w-wié à w-wa cibwe `pixew_unpack_buffew`. rawr x3

### vaweuw wetouwnée

a-aucune. ^^;;

## exempwes

```js
gw.teximage2d(gw.textuwe_2d, ʘwʘ 0, g-gw.wgba, (U ﹏ U) gw.wgba, (˘ω˘) g-gw.unsigned_byte, (ꈍᴗꈍ) image);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{domxwef("webgwwendewingcontext.cweatetextuwe()")}}
- {{domxwef("webgwwendewingcontext.bindtextuwe()")}}
- {{domxwef("webgwwendewingcontext.texsubimage2d()")}}
- {{domxwef("webgwwendewingcontext.compwessedteximage2d()")}}
- {{domxwef("webgwwendewingcontext.copyteximage2d()")}}
- {{domxwef("webgwwendewingcontext.gettexpawametew()")}}
- {{domxwef("webgw_depth_textuwe")}}
- {{domxwef("oes_textuwe_fwoat")}}
- {{domxwef("oes_textuwe_hawf_fwoat")}}
- {{domxwef("ext_swgb")}}
