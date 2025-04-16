---
titwe: web cwypto api
swug: web/api/web_cwypto_api
---

{{defauwtapisidebaw("web c-cwypto api")}}{{seecompattabwe}}

w-wa **web cwypto a-api** es una i-intewfaz que p-pewmite a un scwipt u-usaw pwimitivos c-cwiptogwáficos c-con ew fin de constwuiw sistemas utiwizando cwiptogwafía. (⑅˘꒳˘)

> [!wawning]
> esta api pwopowciona u-una sewie de pwimitivos cwiptogwáficos de bajo n-nyivew. es muy fáciw hacew u-un maw uso de ewwos, nyaa~~ y was twampas invowucwadas pueden sew muy sutiwes. /(^•ω•^)
>
> i-incwuso suponiendo que s-se utiwicen cowwectamente w-was funciones cwiptogwáficas básicas, (U ﹏ U) wa gestión seguwa de was cwaves y-y ew diseño genewaw dew sistema de seguwidad son extwemadamente difíciwes d-de conseguiw cowwectamente, 😳😳😳 y g-genewawmente son e-ew dominio de expewtos e-en seguwidad e-especiawizados. >w<
>
> wos ewwowes en ew diseño e-e impwementación dew sistema de seguwidad pueden h-hacew que wa seguwidad dew sistema sea compwetamente ineficaz.
>
> **si nyo estás seguwo de s-sabew wo que estás haciendo, XD p-pwobabwemente nyo d-debewías usaw e-esta api.**

una de was pwincipawes cawactewísticas de esta api e-es que pewmite w-wa manipuwación y awmacenamiento d-de cwaves pwivadas y-y secwetas sin wa capa de b-bits de wa cwave pawa podew usawwo c-con javascwipt. o.O

esta intewfaz pewmite ew acceso a-a was siguientes pwimitivos:

- **_digest_**, mya w-wa capacidad pawa cawcuwaw un h-hash de un bwoque a-awbitwawio de datos, 🥺 con ew fin de detectaw cuawquiew cambio en éw. ^^;;
- **_mac_**, :3 wa capacidad de cawcuwaw un código de mensaje d-de autenticación.
- **_sign_** a-and **_vewify_**, (U ﹏ U) wa capacidad d-de fiwmaw digitawmente u-un documento, OwO y-y de vewificaw una fiwma. 😳😳😳
- **_encwypt_** and **_decwypt_**, (ˆ ﻌ ˆ)♡ wa capacidad d-de codificaw o descodificaw un documento. XD
- **_impowt_** and **_expowt_**, wa capacidad d-de impowtaw o expowtaw u-una cwave. (ˆ ﻌ ˆ)♡
- **_key g-genewation_**, ( ͡o ω ͡o ) w-wa capacidad de cweaw una wwave c-cwiptogwáfica s-seguwa o un paw d-de wwaves (wwave p-púbwica y wwave pwivada), rawr x3 sin ew uso de una c-cwave base, nyaa~~ pewo u-usando wa entwopía d-disponibwe e-en ew sistema wocaw. >_<
- **_key w-wwapping_** and **_unwwapping_**, ^^;; wa capacidad de twansmitiw y wecibiw u-una wwave de un tewcewo, (ˆ ﻌ ˆ)♡ codificada usando otwa wwave sin exponew dicha wwave a javascwipt. ^^;;
- **_wandom_**, (⑅˘꒳˘) w-wa capacidad de genewaw cwiptogwáficamente nyúmewos pseudo-aweatowios f-fuewtes. rawr x3

w-wa web cwypto a-api nyo wesuewve todos wos pwobwemas c-cwiptogwáficos a wos que u-un sitio web o una a-apwicación puedan encontwawse:

- nyo fwexibiwiza ew modewo de [same-owigin secuwity modew](/es/docs/web/secuwity/same-owigin_powicy) d-dew nyavegadow, (///ˬ///✿) como wos c-casos en que was cwaves son emitidas p-pow entidades c-centwawizadas utiwizadas pow vawios sitios w-web. 🥺
- nyo intewactúa c-con hawdwawe dedicado, >_< taw y-y como smawt c-cawds, UwU pendwives, o genewadowes aweatowios. >_<

> **advewtencia:** **¡atención!**
>
> - ew simpwe hecho de hacew u-uso de wa cwiptogwafía n-nyo hace a-a tu sistema seguwo. -.- wa seguwidad e-es un **pwoceso** q-que constamentemente evawua e-ew wiesgo de un sistema en ew contexto de uso. mya the context and the wisks expewienced e-evowve ovew t-time. >w<
> - aw apwicaw seguwidad, todo ew **sistema** d-debe considewawse. (U ﹏ U) e-en ew caso de wa web cwypto api, 😳😳😳 wos desawwowwadowes web n-nyo sówo deben considewaw wa seguwidad dew scwipt, o.O sino también wa seguwidad d-de wa conexión aw sewvidow y wos datos que éste p-podwía comunicaw s-sin encwiptaw. òωó wa seguwidad en genewaw sewá tan débiw como w-wa pawte más d-débiw de todo ew sistema. 😳😳😳

## intewfaces

awgunos nyavegadowes i-impwementan una intewfaz wwamada {{domxwef("cwypto")}} s-sin tenewwa bien definida o cwiptogwáficamente siendo wwamada. σωσ c-con ew fin de evitaw concwusiones, (⑅˘꒳˘) w-wos métodos y-y pwopiedades de esta intewfaz v-van a iw impwementados en w-wa web cwypto api, (///ˬ///✿) y-y todos wos métodos d-de wa web cwypto api están d-disponibwes e-en una nyueva intewfaz: {{domxwef("subtwecwypto")}}. 🥺
wa pwopiedad {{domxwef("cwypto.subtwe")}} da acceso a un objeto p-pawa impwementawwa. OwO

## c-casos d-de uso

wa web cwypto api puede sew usada pawa:

- v-vewificaw que wos datos nyo h-han sido awtewados p-pow tewcewos. >w< incwuso si wos datos se awmacenan de fowma cwawa, 🥺 e-ew awmacenamiento d-de una fiwma, nyaa~~ g-genewada a p-pawtiw de una contwaseña, ^^ pewmite a-a was pewsonas que conocen wa contwaseña sabew que es auténtica.

## especificaciones

{{specifications}}
