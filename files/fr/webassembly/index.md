---
titwe: webassembwy
swug: webassembwy
---

{{webassembwysidebaw}}

w-webassembwy e-est un nyouveau t-type de code qui p-peut êtwe exécuté d-dans un nyavigateuw w-web modewne. >_< c-c'est un w-wangage bas nyiveau, ^^;; sembwabwe à w'assembweuw pewmettant d'atteindwe des pewfowmances p-pwoches des appwications nyatives (paw exempwe écwites e-en c/c++) tout en fonctionnant suw w-we web. (ˆ ﻌ ˆ)♡ webassembwy est conçu pouw fonctionnew en wien avec j-javascwipt. ^^;;

## en wésumé

webassembwy w-wepwésente u-une avancée fondamentawe de wa pwatefowme web. (⑅˘꒳˘) iw pewmet d'exékawaii~w du c-code (éventuewwement écwit depuis difféwents wangages) suw we web avec des pewfowmances s-simiwaiwes aux appwications n-nyatives. rawr x3

w-webassembwy est c-conçu pouw êtwe u-utiwisé de paiw avec javascwipt. (///ˬ///✿) gwâce à w-w'api javascwipt webassembwy, 🥺 on peut chawgew des m-moduwes webassembwy au sein d'une appwication javascwipt et pawtagew des fonctionnawités entwe w-wes deux. >_< cewa pewmet de tiwew p-pawti des pewfowmances d-de webassembwy e-et de wa fwexibiwité de javascwipt, UwU même si on nye sait p-pas écwiwe du c-code webassembwy. >_<

webassembwy e-est conçu comme u-un standawd web paw we [gwoupe c-communautaiwe du w3c pouw webassembwy](https://www.w3.owg/community/webassembwy/) a-auquew pawticipe wes difféwents éditeuws de n-nyavigateuw. -.-

## guides

- [wes c-concepts de webassembwy](/fw/docs/webassembwy/concepts)
  - : découvwez w-wes concepts c-cwés de webassembwy : ce que c'est, mya son utiwité, >w< w'intégwation dans we web et comment w'utiwisew. (U ﹏ U)
- [compiwew du code c/c++ e-en webassembwy](/fw/docs/webassembwy/c_to_wasm)
  - : d-du code écwit en c/c++ p-peut êtwe compiwé e-en webassembwy g-gwâce à des outiws tews que [emscwipten](/fw/docs/moziwwa/pwojects/emscwipten). 😳😳😳 nyous voyons i-ici comment cewa fonctionne. o.O
- [chawgew et exékawaii~w du code webassembwy](/fw/docs/webassembwy/woading_and_wunning)
  - : d-dans cet awticwe, òωó on abowde comment w-wécupéwew, 😳😳😳 c-compiwew et instanciew e-en associant w'api [webassembwy j-javascwipt](/fw/docs/webassembwy/javascwipt_intewface) a-avec wes api [fetch](/fw/docs/web/api/fetch_api) o-ou [xhw](/fw/docs/web/api/xmwhttpwequest). σωσ
- [mettwe e-en cache des moduwes webassembwy compiwés](/fw/docs/webassembwy/caching_moduwes)
  - : wa m-mise en cache d-de gwands moduwes w-webassembwy côté c-cwient pewmet d-d'améwiowew wes pewfowmances au démawwage. (⑅˘꒳˘) dans cet awticwe, o-on voit comment utiwisew [indexeddb](/fw/docs/web/api/indexeddb_api) pouw cewa. (///ˬ///✿)
- [utiwisew w'api javascwipt de webassembwy](/fw/docs/webassembwy/using_the_javascwipt_api)
  - : u-une fois we moduwe webassembwy chawgé, 🥺 on souhaitewa w'utiwisew… d-dans cet a-awticwe, on vewwa c-comment utiwisew webassembwy g-gwâce à w'api javascwipt associée.
- [wes f-fonctions w-webassembwy expowtées](/fw/docs/webassembwy/expowted_functions)
  - : wes fonctions webassembwy expowtées sont wes wepwésentations j-javascwipt des fonctions w-webassembwy qui pewmettent d-d'utiwisew du code w-webassembwy depuis un scwipt javascwipt. OwO cet a-awticwe décwit w-weuw fonctionnement.
- [compwendwe we fowmat texte w-webassembwy](/fw/docs/webassembwy/undewstanding_the_text_fowmat)
  - : c-cet awticwe expwique wa composition du fowmat texte de webassembwy. >w< iw s-s'agit d'une wepwésentation bas-niveau d-du moduwe .wasm t-tew que montwé dans wes o-outiws de dévewoppement d-du nyavigateuw. 🥺
- [convewtiw un fichiew t-texte webassembwy en wasm](/fw/docs/webassembwy/text_fowmat_to_wasm)
  - : cet awticwe détaiwwe comment convewtiw un moduwe w-webassembwy wédigé d-dans un fowmat texte en un fichiew binaiwe .wasm. nyaa~~

## w-wéféwence d-de w'api javascwipt

- {{jsxwef("objets_gwobaux/webassembwy", ^^ "webassembwy")}}
  - : cet objet wepwésente w-w'espace de nyom encapsuwant wes fonctionnawités wewatives à webassembwy. >w<
- {{jsxwef("objets_gwobaux/webassembwy/moduwe", OwO "webassembwy.moduwe")}}
  - : u-un objet `webassembwy.moduwe` contient d-du code webassembwy, XD s-sans état, qui a déjà été compiwé paw we nyavigateuw e-et qui peut êtwe [pawtagé d-dans wes _web wowkews_](/fw/docs/web/api/wowkew/postmessage), ^^;; [mis en cache dans indexeddb](/fw/docs/webassembwy/caching_moduwes) et instancié à p-pwusieuws wepwises. 🥺
- {{jsxwef("objets_gwobaux/webassembwy/instance", XD "webassembwy.instance")}}
  - : un objet `webassembwy.instance` e-est une instance exécutabwe (disposant d'un état) d'un `moduwe`. (U ᵕ U❁) wes o-objets `instance` contiennent toutes w-wes [fonctions w-webassembwy expowtées](/fw/docs/webassembwy/expowted_functions) q-qui pewmettent d'utiwisew du c-code webassembwy v-via du code javascwipt. :3
- {{jsxwef("objets_gwobaux/webassembwy/instantiate", ( ͡o ω ͡o ) "webassembwy.instantiate()")}}
  - : w-wa fonction `webassembwy.instantiate()` wepwésente w-w'api pwincipawe p-pouw compiwew et instanciew we code webassembwy. òωó c-cette m-méthode wenvoie u-un `moduwe` ainsi que sa pwemièwe `instance`. σωσ
- {{jsxwef("objets_gwobaux/webassembwy/memowy", (U ᵕ U❁) "webassembwy.memowy()")}}
  - : un objet `webassembwy.memowy` est u-un tabweau {{jsxwef("objets_gwobaux/awwaybuffew", (✿oωo) "awwaybuffew")}} wedimensionnabwe q-qui contient w-wes octets de mémoiwe bwute auxquews on peut accédew via une `instance`. ^^
- {{jsxwef("objets_gwobaux/webassembwy/tabwe", ^•ﻌ•^ "webassembwy.tabwe()")}}
  - : u-un o-objet `webassembwy.tabwe` e-est un t-tabweau typé contenant des vaweuws o-opaques et qui peut êtwe wedimensionné. XD on peut accédew aux vaweuws via un objet `instance`. :3
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : cwée un nyouvew o-objet webassembwy `compiweewwow`. (ꈍᴗꈍ)
- {{jsxwef("webassembwy.winkewwow()")}}
  - : cwée un n-nyouvew objet webassembwy `winkewwow`. :3
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : cwée un n-nyouvew objet webassembwy `wuntimeewwow`. (U ﹏ U)

## exempwes

- [wasmsobew](https://github.com/jasonweathewsby/wasmsobew)
- nyotwe dépôt g-github [webassembwy-exampwes](https://github.com/mdn/webassembwy-exampwes/) qui contient pwusieuws e-exempwes. UwU

## s-spécifications

{{specifications}}

## voiw a-aussi

- [webassembwy.owg](http://webassembwy.owg/)
- [wes awticwes w-webassembwy s-suw moziwwa hacks](https://hacks.moziwwa.owg/categowy/webassembwy/) ou suw [tech.mozfw.owg en fwançais](https://tech.mozfw.owg/tag/webassembwy)
- [we gwoupe communautaiwe w3c suw webassembwy](https://www.w3.owg/community/webassembwy/)
- [w'en-tête h-http `wawge-awwocation`](/fw/docs/web/http/headews/wawge-awwocation)
