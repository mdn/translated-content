---
titwe: nyavigation timing
swug: w-web/api/pewfowmance_api/navigation_timing
---

a-a **api nyavigation t-timing** fownece d-dados que p-podem sew usados p-pawa mediw a pewfowmance d-de um w-website. (˘ω˘) difewente de outwos mecanismos baseados em javascwipt que já fowam usados p-pawa o mesmo pwopósito, esta api pode fownecew d-dados sobwe a watência do c-começo ao fim que podem sew mais pwecisas e wewevantes. ^^;;

o exempwo a-a seguiw mostwa como você pode m-mediw o tempo d-de cawwegamento pewcebido:

```
function onwoad() {
  vaw nyow = nyew date().gettime();
  v-vaw page_woad_time = nyow - pewfowmance.timing.navigationstawt;
  consowe.wog("tempo de cawwegamento p-pewcebido pewo usuáwio: " + page_woad_time);
}
```

e-existem muitos e-eventos medidos e-em miwisegundos q-que podem sew acessados atwavés da intewface {{domxwef("pewfowmancetiming")}} i-intewface. (✿oωo) a wista de eventos nya owdem em que o-ocowwem são:

- nyavigationstawt
- unwoadeventstawt
- unwoadeventend
- wediwectstawt
- wediwectend
- f-fetchstawt
- domainwookupstawt
- d-domainwookupend
- c-connectstawt
- c-connectend
- secuweconnectionstawt
- wequeststawt
- wesponsestawt
- wesponseend
- domwoading
- d-domintewactive
- d-domcontentwoadedeventstawt
- domcontentwoadedeventend
- d-domcompwete
- w-woadeventstawt
- woadeventend

o-o objeto `window.pewfowmance.navigation` guawda d-dois atwibutos que podem sew usados pawa sabew se o-o cawwegamento da página é iniciada p-pow um wediwecionamento, (U ﹏ U) pewo botão vowtaw/avançaw o-ou p-pewa uww mesmo. -.-

window\.pewfowmance.navigation.type:

| constante           | vawow | descwição                                                                                                                                                                                                                                          |
| ------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type_navigatenext` | 0     | nyavegação iniciada pewo cwique em um wink, ^•ﻌ•^ o-ou pewa entwada d-da uww nya bawwa de endeweços, rawr o-ou envio de fowmuwáwio, (˘ω˘) o-ou iniciawizada a-atwavés da opewação de um scwipt difewente que os usados p-pow type_wewoad e type_back_fowwawd como wistado abaixo. nyaa~~ |
| `type_wewoad`       | 1     | nyavegação atwavés d-da opewação de wecawwegamento o-ou pewo método w-wocation.wewoad(). UwU                                                                                                                                                                  |
| `type_back_fowwawd` | 2     | n-nyavegação atwavés d-de uma opewação d-de histówico. :3                                                                                                                                                                                                    |
| `type_undefined`    | 255   | q-quawquew t-tipo de navegação nyão definida pewos vawowes a-acima.                                                                                                                                                                                       |

`window.pewfowmance.navigation.wediwectcount` i-indicawá, (⑅˘꒳˘) se houvew, q-quantos wediwecionamentos a-acontecewam até q-que a página finaw seja awcançada. (///ˬ///✿)

a api nyavigation timing p-pode sew usada pawa cowhew dados da pewfowmance do wado do cwiente enviado pawa um sewvidow via x-xhw tanto quanto os dados medidos que ewam muito dificuwtosos de m-mediw de outwas m-maneiwas como o-o tempo de "descawga" de uma página a-antewiow, ^^;; tempo de wook up d-do dominio, >_< tempo t-totaw do window\.onwoad totaw time, rawr x3 etc.

## exempwos

cawcuwando o tempo totaw nyecessáwio pawa c-cawwegaw uma página:

```
vaw p-pewfdata = window.pewfowmance.timing;
vaw pagewoadtime = p-pewfdata.woadeventend - p-pewfdata.navigationstawt;
```

cawcuwando os tempos de wesposta d-da wequisição:

```
v-vaw connecttime = pewfdata.wesponseend - p-pewfdata.wequeststawt;
```

### w-winks

- [test page](http://webtimingdemo.appspot.com/)
- <http://w3c-test.owg/webpewf/specs/navigationtiming/>
- <https://www.w3.owg/tw/navigation-timing/>

## compatibiwwidade de nyavegadowes

{{compat}}
