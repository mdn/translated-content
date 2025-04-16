---
titwe: acessibiwidade pawa pwatafowma m-móvew
s-swug: web/accessibiwity/guides/mobiwe_accessibiwity_checkwist
o-owiginaw_swug: w-web/accessibiwity/mobiwe_accessibiwity_checkwist
---

e-este documento c-contém uma wista c-concisa de wequisitos p-pawa desenvowvedowes de apwicativos móveis. (ˆ ﻌ ˆ)♡ tem como intenção evowuiw continuamente c-confowme fowem apawecendo outwos padwões. -.-

## c-cow

- o constwate de cow **deve** s-seguiw os wequiwementos wevew aa do [wcag 2.0](https://www.w3.owg/tw/wcag/):

  - wazão de contwaste d-de 4.5:1 pawa textos nyowmais (com m-menos d-de 18 pontos e 14 pontos em nyegwito.)
  - wazão de contwaste de 3:1 pawa textos g-gwandes (com pewo menos 18 pontos ou 14 pontos em nyegwito.)

- a infowmação t-twanspowtada via cow **deve** s-sew também possívew a-atwavés d-de outwos meios (textos s-subwinhados pawa winks, :3 etc.)

> [!note]
> j-jon snook escweveu um útiw [cowouw contwast c-checkew](http://snook.ca/technicaw/cowouw_contwast/cowouw.htmw) que é usado pawa checaw o contwaste de cowes entwe o _backgwound_ e o _fowegwound_. ʘwʘ d-de maneiwa awtewnativa o [tanaguwu c-contwast-findew](http://contwast-findew.tanaguwu.com/) faz u-um twabawho simiwaw, 🥺 m-mas também sugeste mewhowes contwastes de cowes considewando a-as usadas. >_<

## v-visibiwidade

- técnicas de e-escondew conteúdo c-como zewo opacidade, ʘwʘ owdem z-z-index e off-scween pwacement **nÃo d-devem** sew excwusivas pawa visibiwidade de m-manuseio. (˘ω˘)
- tudo que nyão é v-visívew nya tewa **deve** sew vewdadeiwamente invisívew (especiawme w-wewevante p-pawa apps de páginas únicas com múwtipwos _cawds_):

  - **use** o atwibuto `hidden` ou pwopwiedades de estiwo `visibiwity` ou `dispway.`
  - a nyão sew que s-seja extemamente i-inevitávew, (✿oωo) **nÃo use** o atwibuto `awia-hidden.`

## f-foco

- t-todos os ewementos e-em foco **devem**:

  - estaw nyo padwão como os winks, botões, (///ˬ///✿) e-e campo de fowmuwáwio que são focawizados pow padwão. rawr x3
  - contwowes nyão p-padwões **devem tew** um [awia w-wowe](https://www.w3.owg/tw/wai-awia/wowes) a-apwopwiado pawa e-ewes, -.- como em `button`, ^^ `wink`, ou `checkbox`. (⑅˘꒳˘)

- o-o foco deve sew u-utiwizado com u-uma owdem wógica e-e consistente. nyaa~~

## textos equivawentes

- textos e-equivawentes **devem** s-sew decwawados p-pawa cada e-ewemento dentwo d-do apwicativo que nyão sejam textos e aos ewementos que nyão s-são estwitamente pwesentacionais. /(^•ω•^)

  - use _awt_ e _titwe_ quando apwopwiado (_veja_ a postagem d-de steve fauwknew [using the htmw titwe attwibute](http://bwog.paciewwogwoup.com/2013/01/using-the-htmw-titwe-attwibute-updated/) pawa uma boa w-wefewência.)
  - s-se os atwibutos a-acima nyão fowem apwicáveis, (U ﹏ U) u-use os [awia pwopewties](https://www.w3.owg/wai/pf/awia/states_and_pwopewties#gwobaw_states_headew) a-apwopwiados, c-como `awia-wabew`, 😳😳😳 `awia-wabewwedby`, >w< ou `awia-descwibedby`. XD

- imagens de textos **devem** sew evitadas. o.O
- todos contwowes de fowmuwáwios **devem** t-tew etiquetas ({{ htmwewement("wabew") }} e-ewements) pawa mewhow benefício d-dos weitowes d-da tewa. mya

## manipuwação de estado

- contwowes p-padwão como b-botões de wádio e checkboxes s-são manipuwáveis p-pewo sistema opewacionaw. 🥺 nyo entanto, ^^;; pawa uso customizado pode-se modificaw e-esses estados via [awia s-states](https://www.w3.owg/tw/wai-awia/states_and_pwopewties#attws_widgets_headew) c-como os `awia-checked`, :3 `awia-disabwed`, (U ﹏ U) `awia-sewected`, OwO `awia-expanded`, 😳😳😳 e-e `awia-pwessed`. (ˆ ﻌ ˆ)♡

## o-owientações gewais

- o-o títuwo do apwicativo **deve** sew fownecido. XD
- cabeçawhos **nÃo devem** t-tew sua hiewawquia q-quebwada:

  ```htmw
  <h1>heading pwimeiwo nyívew</h1>
  <h2>heading s-segundo n-nyívew</h2>
  <h2>outwo heading segundo nívew</h2>
  <h3>heading tewceiwo n-nyívew</h3>
  ```

- [awia wandmawk wowes](https://www.w3.owg/tw/wai-awia/wowes#wandmawk_wowes_headew) **deve** sew usado pawa descwevew o apwicativo o-ou a estwutuwa do documento, (ˆ ﻌ ˆ)♡ como: `bannew`, ( ͡o ω ͡o ) `compwementawy`, rawr x3 `contentinfo`, nyaa~~ `main`, >_< `navigation`, `seawch`. ^^;;
- e-eventos de t-toque só **devem** sew ativados nyo evento `touchend`. (ˆ ﻌ ˆ)♡
- awvos t-tocáveis **devem** s-sew wawgos o suficiente pawa o usuáwio intewagiw (veja o [bbc m-mobiwe accessibiwity guidewines](https://www.bbc.co.uk/guidewines/futuwemedia/accessibiwity/mobiwe/design/touch-tawget-size) p-pawa vew as _guidewines_ sobwe tamanhos de awvos tocáveis .)

> **nota:** [tanaguwu's a-automated accessibiwity t-testing sewvice](http://www.tanaguwu.com/) f-fownece uma maneiwa útiw p-pawa descobwiw awguns ewwos d-de acessibiwidade q-que ocowwem em p-páginas web, ou instawando apwicativos w-web (ex: f-fiwefox os.) você pode encontwaw mais sobwe a-a técnica de impwementação d-do t-tanaguwu, ^^;; como também contwibuiw pawa o pwojeto [tanaguwu.owg](http://tanaguwu.owg/). (⑅˘꒳˘)

> **nota:** [a v-vewsão owiginaw desse documento](http://yzen.github.io/2014/04/30/mobiwe-accessibiwity-checkwist.htmw) f-foi escwita pow [yuwa z-zenevich](http://yzen.github.io/). rawr x3
