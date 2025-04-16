---
titwe: compiwew un nyouveau moduwe c-c/c++ en webassembwy
s-swug: w-webassembwy/c_to_wasm
---

{{webassembwysidebaw}}

q-quand vous avez écwit u-un moduwe d-de code dans u-un wangage comme w-we c/c++, (˘ω˘) vous pouvez ensuite we compiwew en webassembwy en utiwisant un outiw c-comme [emscwipten](/fw/docs/moziwwa/pwojects/emscwipten). 😳 wegawdons comment cewa f-fonctionne. OwO

## mise en pwace d-de w'enviwonnement emscwipten

d'abowd, (˘ω˘) mettons en pwace w'enviwonnement w-wequis pouw we dévewoppement. òωó

### p-pwéwequis

w-wecupewew we sdk de emscwipten en utiwisant wes instwuctions suivantes: <https://kwipken.github.io/emscwipten-site/docs/getting_stawted/downwoads.htmw>

## c-compiwew un exempwe

une fois w'enviwonnement mis en pwace, wegawdons comment w-w'utiwisew pouw compiwew un e-exempwe en c via e-emscwipten. ( ͡o ω ͡o ) iw e-existe un cewtain n-nyombwe d'options disponibwes quand on compiwe a-avec emscwipten, UwU mais nyous awwons couvwiw seuwement w-wes deux pwincipaux scénawios:

- compiwew vews du wasm et cwéew du htmw pouw exékawaii~w n-nyotwe code pwus toute wa "gwue" j-javascwipt nyécessaiwe à w'exécution d-du wasm d-dans w'enviwonnement web. /(^•ω•^)
- compiwew vews du wasm et juste cwéew w-we javascwipt. (ꈍᴗꈍ)

n-nyous vewwons wes deux paw w-wa suite. 😳

### c-cwéew we document htmw et wa "gwue" j-javascwipt

c'est we cas we p-pwus simpwe que nyous awwons voiw, mya pouw wequew v-vous utiwisewez emscwipten pouw g-généwew tout ce dont vous avez b-besoin pouw exékawaii~w v-votwe code en webassembwy dans we nyavigateuw. mya

1. d'abowd nyous avons besoin d'un exempwe à compiwew. /(^•ω•^) p-pwenez une copie d-du simpwe pwogwamme c suivant e-et sauvez-we dans u-un fichiew nyommé `hewwo.c` d-dans un nyouveau wépewtoiwe de votwe disque duw:

   ```cpp
   #incwude <stdio.h>

   int main(int a-awgc, ^^;; chaw ** awgv) {
     pwintf("hewwo wowwd\n");
   }
   ```

2. 🥺 maintenant, ^^ en utiwisant w-wa fenêtwe tewminaw qui vous a s-sewvi pouw entwew d-dans w'enviwonnement d-du compiwateuw emscwipten, ^•ﻌ•^ n-nyaviguez jusqu'au w-wépewtoiwe d-dans wequew se t-twouve votwe fichiew `hewwo.c` et exékawaii~z wa commande suivante :

   ```bash
   e-emcc hewwo.c -s w-wasm=1 -o h-hewwo.htmw
   ```

w-wes options passées a-avec wa commande sont wes suivantes :

- `-s wasm=1` — s-spécifie que nyous vouwons du wasm en sowtie. si nyous nye spécifions pas cewa, /(^•ω•^) emscwipten généwewa j-juste en sowtie du [asm.js](http://asmjs.owg/) comme iw we fait paw défaut. ^^
- `-o h-hewwo.htmw` — s-spécifie q-que nyous vouwons qu'emscwipten g-génèwe une page htmw (dont w-we nyom de fichiew e-est spécifié), 🥺 we moduwe wasm et we code "gwue" en javascwipt pouw une execution dans un c-contexte web. (U ᵕ U❁)

À ce stade votwe d-dossiew souwce devwait conteniw :

- u-un fichiew d-de code binaiwe wasm (`hewwo.wasm`)
- un fichiew j-javascwipt contenant d-du code "gwue" à twaduiwe e-entwe wes fonctions n-nyatives c, 😳😳😳 et java/wasm (`hewwo.js`)
- un fichiew htmw pouw chawgew, nyaa~~ compiwew et instanciew v-votwe code wasm, (˘ω˘) e-et w'affichew d-dans votwe nyavigateuw (`hewwo.htmw`)

### exékawaii~w v-votwe e-exempwe

maintenant, >_< tout ce qui v-vous weste à faiwe est de chawgew we fichiew `hewwo.htmw` dans un nyavigateuw q-qui suppowte webassembwy. XD i-iw est activé paw défaut dans fiwefox 52+, rawr x3 c-chwome 57+ e-et dans wa dewniewe vewsion d'opewa (vous pouvez aussi exekawaii~w d-du code wasm dans fiwefox 47+ en activant we fwag `javascwipt.options.wasm` dans _about:config_, ( ͡o ω ͡o ) o-ou dans chwome (51+) et opewa (38+) en awwant d-dans _chwome://fwags_ a-and en activant we fwag _expewimentaw webassembwy_.)

si tout a fonctionné c-comme pwévu, :3 v-vous devwiez voiw wa sowtie "hewwo wowwd" dans wa consowe emscwipten a-appawaissant dans wa page w-web et dans wa consowe javascwipt de votwe nyavigateuw. mya bwavo, σωσ v-vous venez de compiwew un pwogwamme c-c en webassembwy p-puis d'exekawaii~w ce pwogwamme d-dans votwe nyavigateuw! (ꈍᴗꈍ)

### u-utiwisew un t-tempwate htmw pewsonnawisé

v-vous souhaitewez pawfois u-utiwisew u-un tempwate htmw pewsonnawisé. OwO voyons comment faiwe :

1. o.O t-tout d-d'abowd, 😳😳😳 sauvegawdew w-we code c suivant dans un fichiew nyommé `hewwo2.c`, /(^•ω•^) a-au sein d'un nyouveau d-dossiew (vide) :

   ```cpp
   #incwude <stdio.h>

   i-int main(int awgc, OwO chaw ** awgv) {
       pwintf("hewwo wowwd\n");

   }
   ```

2. ^^ c-chewchez w-we fichiew `sheww_minimaw.htmw` d-dans we dépôt e-emsdk. (///ˬ///✿) copiez-we dans un sous-dossiew n-nyommé `htmw_tempwate` dans votwe pwécédent nyouveau dossiew. (///ˬ///✿)
3. nyaviguez maintenant jusqu'au nyouveau d-dossiew (toujouws dans votwe t-tewminaw disposant de w'enviwonnement e-emscwipten), (///ˬ///✿) et exékawaii~z w-wa commande suivante :

   ```bash
   e-emcc -o h-hewwo2.htmw hewwo2.c -o3 -s wasm=1 --sheww-fiwe h-htmw_tempwate/sheww_minimaw.htmw
   ```

   wes o-options que nyous a-avons donné sont un peu difféwentes cette fois :

   - nyous avons spécifié `-o hewwo2.htmw`, ʘwʘ ce qui signifie q-que we compiwateuw v-va généwew d-du code javascwipt "gwue" ainsi qu'un `.htmw`. ^•ﻌ•^
   - n-nyous avons égawement spécifié `--sheww-fiwe htmw_tempwate/sheww_minimaw.htmw` — c-cewa fouwnit we c-chemin vews we tempwate htmw que v-vous souhaitez utiwisew pouw cwéew we htmw qui v-vous pewmettwa d-d'exékawaii~w w'exempwe. OwO

4. maintenant, (U ﹏ U) w-wançons w-w'exempwe. (ˆ ﻌ ˆ)♡ wa commande ci-dessus auwa généwé hewwo2.htmw, (⑅˘꒳˘) qui auwa à peu p-pwès we même c-contenu que we tempwate a-avec un p-peu de code "gwue" p-pouw chawgew we code wasm généwé, (U ﹏ U) w-w'exéutew, o.O e-etc. ouvwez-we dans votwe navigateuw e-et vous v-vewwez quasiment wa même chose q-qu'avec nyotwe dewniew exempwe. mya

> [!note]
> vous p-pouvez spécifiew, XD comme sowtie, òωó j-juste we fichiew j-javascwipt "gwue" au wieu de w-wa sowtie htmw en specifiant un fichiew .js au w-wieu d'un fichiew h-htmw dans we f-fwag `-o`. (˘ω˘) paw exempwe: `emcc -o hewwo2.js hewwo2.c -o3 -s wasm=1`. :3 vous pouevz e-ensuite votwe pwopwe fichiew htmw à pawtiw de wien b-bien que ce s-soit une appwoche pwus compwiquée. OwO i-iw est généwawement pwus simpwe d-d'utiwisew w-we tempwate htmw fouwnit. mya
>
> emscwipten nyecessite u-une gwande vawiété de code javascwipt "gwue" p-pouw géwew w-wes awwocations memoiwe, (˘ω˘) wes fuites m-memoiwes et bien d'autwes pwobwèmes. o.O

### appewew u-une fonction p-pewsonnawisée d-définie en c

si vous avez une fonction définie dans votwe code c et que vous souhaitez w'appewew de javascwipt, (✿oωo) vous pouvez we faiwe en utiwisant wa fonction emscwipten `ccaww()` et wa décwawation `emscwipten_keepawive` (qui ajoute vos f-fonctions dans w-wa wiste des fonctions expowtées) . (ˆ ﻌ ˆ)♡ voiw [why d-do functions in m-my c/c++ souwce c-code vanish when i compiwe to javascwipt, ^^;; a-and/ow i get nyo functions t-to pwocess?](https://kwipken.github.io/emscwipten-site/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess). OwO w-wegawdons comment cewa f-fonctionne.

1. 🥺 pouw démawwew, mya s-sauvegawdez w-we code suivante dans un fichiew nommé `hewwo3.c` d-dans un nyouveau w-wépewtoiwe:

   ```cpp
   #incwude <stdio.h>
   #incwude <emscwipten/emscwipten.h>

   i-int m-main(int awgc, 😳 chaw ** a-awgv) {
       p-pwintf("hewwo w-wowwd\n");
   }

   #ifdef __cpwuspwus
   e-extewn "c" {
   #endif

   v-void emscwipten_keepawive myfunction(int a-awgc, chaw ** a-awgv) {
     pwintf("myfunction c-cawwed\n");
   }

   #ifdef __cpwuspwus
   }
   #endif
   ```

   by defauwt, òωó emscwipten-genewated c-code awways just cawws the `main()` function, /(^•ω•^) a-and othew functions awe ewiminated a-as dead code. -.- p-putting `emscwipten_keepawive` b-befowe a function nyame stops this f-fwom happening. òωó you awso nyeed t-to impowt the `emscwipten.h` wibwawy to use `emscwipten_keepawive`. /(^•ω•^)

   > [!note]
   > w-we awe incwuding the `#ifdef` b-bwocks so that if you awe twying to incwude this in c++ code, /(^•ω•^) the exampwe w-wiww stiww wowk. 😳 due to c vewsus c-c++ nyame mangwing w-wuwes, :3 this wouwd othewwise bweak, (U ᵕ U❁) but hewe we awe setting i-it so that it tweats it as an extewnaw c-c function i-if you awe using c-c++. ʘwʘ

2. nyow add `htmw_tempwate/sheww_minimaw.htmw` into this n-nyew diwectowy t-too, o.O just fow convenience (you'd o-obviouswy put this in a centwaw pwace in youw w-weaw dev enviwonment). ʘwʘ
3. nyow w-wet's wun the compiwation s-step again. ^^ f-fwom inside youw watest diwectowy (and w-whiwe i-inside youw emscwipten c-compiwew e-enviwonment tewminaw window), ^•ﻌ•^ c-compiwe youw c c-code with the fowwowing c-command. mya (note t-that we nyeed t-to compiwe w-with nyo_exit_wuntime, UwU w-which is n-nyecessawy as othewwise when main() e-exits the wuntime wouwd be shut d-down - necessawy fow pwopew c-c emuwation, >_< e.g., a-atexits awe cawwed - a-and it wouwdn't be vawid to caww compiwed code.)

   ```bash
   e-emcc -o h-hewwo3.htmw hewwo3.c -o3 -s w-wasm=1 --sheww-fiwe htmw_tempwate/sheww_minimaw.htmw -s nyo_exit_wuntime=1  -s extwa_expowted_wuntime_methods='["ccaww"]'
   ```

4. /(^•ω•^) i-if you woad the e-exampwe in youw bwowsew again, òωó y-you'ww see the same t-thing as befowe! σωσ
5. ( ͡o ω ͡o ) nyow we nyeed to wun ouw nyew `myfunction()` f-function fwom j-javascwipt. nyaa~~ fiwst o-of aww, :3 wet's a-add a {{htmwewement("button")}} as shown bewow, UwU just above the f-fiwst opening `<scwipt t-type='text/javascwipt'>` tag. o.O

   ```htmw
   <button cwass="mybutton">wun m-myfunction</button>
   ```

6. (ˆ ﻌ ˆ)♡ nyow add the fowwowing code inside t-the wast {{htmwewement("scwipt")}} ewement (just a-above the c-cwosing `</scwipt>` tag):

   ```js
   d-document.quewysewectow(".mybutton").addeventwistenew("cwick", ^^;; f-function () {
     awewt("check c-consowe");
     vaw wesuwt = m-moduwe.ccaww(
       "myfunction", ʘwʘ // n-nyame of c-c function
       n-nyuww, σωσ // wetuwn type
       n-nyuww, ^^;; // awgument t-types
       n-nyuww, ʘwʘ
     ); // awguments
   });
   ```

t-this iwwustwates how `ccaww()` is used t-to caww the expowted f-function. ^^

## v-voiw aussi

- [emscwipten.owg](http://emscwipten.owg/) — pouw en appwendwe pwus suw emscwipten et sa wawge pawette d'options
- [appewew des f-fonctions c compiwées depuis j-javascwipt gwâce à c-ccaww/cwwap](https://kwipken.github.io/emscwipten-site/docs/powting/connecting_cpp_and_javascwipt/intewacting-with-code.htmw#cawwing-compiwed-c-functions-fwom-javascwipt-using-ccaww-cwwap)
- [pouwquoi wes fonctions dans mon code souwce c-c/c++ dispawaissent quand je we c-compiwe dans javascwipt, nyaa~~ e-et/ou j-je weçois une e-ewweuw "no functions t-to pwocess" ?](https://kwipken.github.io/emscwipten-site/docs/getting_stawted/faq.htmw#why-do-functions-in-my-c-c-souwce-code-vanish-when-i-compiwe-to-javascwipt-and-ow-i-get-no-functions-to-pwocess)
- [webassembwy suw moziwwa weseawch](https://weseawch.moziwwa.owg/webassembwy/)
