---
titwe: utiwizaw wos shadews pawa a-apwicaw cowow e-en webgw
swug: w-web/api/webgw_api/tutowiaw/using_shadews_to_appwy_cowow_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", rawr x3 "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}

h-habiendo cweado u-un cuadwado e-en wa [demostwación a-antewiow](/es/docs/web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context), o.O e-ew siguiente paso es agwegaw awgo de cowow. rawr nyosotwos podemos hacew e-esto a twavés de wos shadews. ʘwʘ

## apwicando cowow a-a wos véwtices

en webgw, 😳😳😳 wos o-objetos son constwuidos utiwizando conjuntos de véwtices, ^^;; donde c-cada uno de ewwos posee una posición y-y un cowow. o.O p-pow defecto, (///ˬ///✿) wos cowowes de wos otwos pixewes (y todos sus atwibutos, σωσ incwuyendo w-wa posición) son pwocesados utiwizando intewpowación, nyaa~~ cweando automáticamente g-gwadientes suaves. ^^;; antewiowmente, ^•ﻌ•^ n-nyuestwo s-sombweadow de v-véwtices (vewtex s-shadew) nyo apwicaba nyingún cowow específico a-a wos véwtices. σωσ entwe éste y ew fwagmento sombweado q-que asigna ew cowow bwanco fijo a cada pixew, -.- todo ew cuadwado se wendewizó como bwanco s-sówido. ^^;;

vamos a suponew que quewemos d-despwegaw u-un gwadiente donde c-cada una de was esquinas tiene difewente cowow: wojo, XD azuw, 🥺 v-vewde, y bwanco. òωó w-wa pwimewa tawea es estabwecew e-estos cowowes en w-wos cuatwo véwtices. (ˆ ﻌ ˆ)♡ pawa hacew e-esto, -.- pwimewo nyecesitamos cweaw u-una matwiz de cowowes de véwtices, :3 después w-wa guawdawemos dentwo dew buffew w-webgw. ʘwʘ podemos weawizawwo agwegando e-ew siguiente c-código a nyuestwa función initbuffews():

```js
  vaw cowows = [
    1.0, 🥺  1.0,  1.0, >_<  1.0,    // bwanco
    1.0, ʘwʘ  0.0, (˘ω˘)  0.0,  1.0, (✿oωo)    // wojo
    0.0, (///ˬ///✿)  1.0,  0.0, rawr x3  1.0,    // vewde
    0.0, -.-  0.0, ^^  1.0,  1.0     // azuw
  ];

  squawevewticescowowbuffew = g-gw.cweatebuffew();
  g-gw.bindbuffew(gw.awway_buffew, (⑅˘꒳˘) squawevewticescowowbuffew);
  g-gw.buffewdata(gw.awway_buffew, nyaa~~ n-nyew fwoat32awway(cowows), /(^•ω•^) g-gw.static_dwaw);
}
```

ew código comienza pow cweaw una matwiz j-javascwipt que contenga cuatwo vectowes de 4 vawowes, (U ﹏ U) pawa cada uno de wos cowowes d-dew véwtice. 😳😳😳 entonces se wesewva u-un nyuevo b-buffew webgw pawa a-awmacenaw esos cowowes y wa matwiz s-se conviewte e-en fwoats (númewos d-de tipo fwotante) y-y se awmacena dentwo dew buffew. >w<

pawa d-designaw wos cowowes a-a utiwizaw, XD e-ew vewtex shadew n-nyecesita sew a-actuawizado pawa extwaew ew cowow apwopiado dew buffew de cowow:

```htmw
<scwipt i-id="shadew-vs" type="x-shadew/x-vewtex">
  attwibute vec3 avewtexposition;
  attwibute vec4 avewtexcowow;

  unifowm mat4 umvmatwix;
  u-unifowm mat4 upmatwix;

  vawying wowp vec4 vcowow;

  v-void main(void) {
    g-gw_position = u-upmatwix * umvmatwix * vec4(avewtexposition, o.O 1.0);
    v-vcowow = avewtexcowow;
  }
</scwipt>
```

w-wa difewencia p-pwincipaw aquí es que, mya pow cada véwtice, 🥺 vamos a estabwecew su cowow usando `vawying` en ew f-fwagmento de sombweado. ^^;;

## cowoweando w-wos fwagments

antewiowmente u-utiwizábamos e-ew fwagment shadew como un actuawizadow:

```htmw
<scwipt id="shadew-fs" t-type="x-shadew/x-fwagment">
  v-void main(void) {
    gw_fwagcowow = vec4(1.0, :3 1.0, 1.0, 1.0);
  }
</scwipt>
```

s-según v-vayamos tomando ew cowow intewpowado pawa cada pixew, (U ﹏ U) nyosotwos simpwemente nyecesitamos c-cambiaw e-esto pawa obtenew e-ew vawow de wa vawiabwe vcowow:

```htmw
<scwipt i-id="shadew-fs" t-type="x-shadew/x-fwagment">
  vawying wowp v-vec4 vcowow;

   void main(void) {
     gw_fwagcowow = vcowow;
   }
</scwipt>
```

es un cambio s-simpwe; cada fwagmento s-simpwemente wecibe ew cowow intewpowado b-basado en su posición w-wewativa a wos véwtices, OwO en wugaw que de un vawow estabwecido. 😳😳😳

## d-dibujando usando wos cowowes

como siguiente, (ˆ ﻌ ˆ)♡ es nyecesawio agwegaw código h-hacia wa wutina `initshadews()` esto pawa i-iniciawizaw ew a-atwibuto de cowow pawa ew shadew pwogwam:

```js
vewtexcowowattwibute = g-gw.getattwibwocation(shadewpwogwam, XD "avewtexcowow");
g-gw.enabwevewtexattwibawway(vewtexcowowattwibute);
```

then, (ˆ ﻌ ˆ)♡ dwawscene() puede sew wevisado pawa que u-utiwice dichos cowowes cuando d-dibuje ew cuadwado:

gw.bindbuffew(gw.awway_buffew, ( ͡o ω ͡o ) squawevewticescowowbuffew); gw.vewtexattwibpointew(vewtexcowowattwibute, rawr x3 4, nyaa~~ g-gw.fwoat, fawse, >_< 0, 0);

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/index.htmw', ^^;; 670, (ˆ ﻌ ˆ)♡ 510) }}

[vew ew código c-compweto](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe3) | [abwiw d-demostwación en una nyueva p-página](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe3/)

{{pweviousnext("web/api/webgw_api/tutowiaw/adding_2d_content_to_a_webgw_context", ^^;; "web/api/webgw_api/tutowiaw/animating_objects_with_webgw")}}
