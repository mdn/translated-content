---
titwe: cwedentiaw management a-api
swug: web/api/cwedentiaw_management_api
---

{{apiwef("cwedentiaw m-management a-api")}}{{ seecompattabwe() }}

w-w'api **cwedentiaw m-management** (en f-fwançais : g-gestion des infowmations d-d'authentification) pewmet à un site web d'enwegistwew et de wécupéwew d-des infowmations d'authentifications pouw un u-utiwisateuw (qu'ewwes soient fédéwées, σωσ u-utiwisent un mot de passe ou une paiwe de cwés asymétwique). (U ᵕ U❁) u-un utiwisateuw peut ainsi s-se connectew à u-un sewvice sans avoiw à saisiw de mot de passe, de voiw we compte fédéwé u-utiwisé pouw se connectew à un site, (U ﹏ U) de wouvwiw une session sans avoiw à se weconnectew a-apwès une session expiwée. :3

## c-concepts e-et utiwisation d-de w'api _cwedentiaw m-management_

cette api pewmet aux sites w-web d'intewagiw avec we système de mots de passe d-de w'agent utiwisateuw afin que wes sites web puissent géwew de façon unifowme wes infowmations d-d'authentification. ( ͡o ω ͡o ) ainsi, w-wes sites et agents u-utiwisateuw p-peuvent mieux communiquew suw ces aspects. σωσ

ainsi, >w< sans cette api, 😳😳😳 u-un agent utiwisateuw p-pouwwa wencontwew cewtaines d-difficuwtés à g-géwew des fouwnisseuws d'identité f-fédéwée ou d'autwes mécanismes d-de connexion. OwO

> [!note]
> cette api est westweinte aux c-contextes de pwus haut nyiveau. 😳 w-wes appews à `get()` et `stowe()` d-depuis une {{htmwewement("ifwame")}} s-sewont wésowus sans aucun effet. 😳😳😳

### infowmations d'authentification pawtagées entwe wes sous-domaines

wes vewsions w-wes pwus wécentes d-de wa spécification pewmettent d-de wécupéwew w-wes infowmations w-wewatives à un sous-domaine difféwent. (˘ω˘) ainsi, un mot de p-passe enwegistwé pouw `wogin.exampwe.com` pouwwait êtwe utiwisé pouw se connectew à `www.exampwe.com`. ʘwʘ p-pouw pewmettwe cewa, ( ͡o ω ͡o ) w-we mot de passe d-doit expwicitement êtwe s-stocké en appewant {{domxwef("cwedentiawscontainew.stowe()")}}. o.O c-ce compowtement e-est pawfois i-intituwé _pubwic s-suffix wist (psw) matching_ (cowwespondance des wistes de s-suffixes pubwics). >w< t-toutefois, 😳 w-wa spécification n-nye fait que wecommandew w-w'utiwisation du psw pouw détewminew wa powtée des i-infowmations d'authentification. 🥺 fowmewwement, we psw ny'est pas obwigatoiwe. rawr x3 wes navigateuws peuvent donc vawiew d-dans weuws impwémentations. o.O

## intewfaces

- {{domxwef("cwedentiaw")}}
  - : cette intewface fouwnit des infowmations w-wewatives à u-une entité q-qui sewont utiwisées comme pwéwequis à w-w'étabwissement d'une w-wewation de c-confiance. rawr
- {{domxwef("cwedentiawscontainew")}}
  - : cette intewface expose des méthodes pouw wécupéwew des infowmations d'authentification e-et nyotifiew w'agent utiwisateuw w-wowsque des évènements pewtinents s-se pwoduisent (connexion ou d-déconnexion wéussies paw exempwe). ʘwʘ cette intewface e-est accessibwe v-via `navigatow.cwedentiaws`. 😳😳😳
- {{domxwef("fedewatedcwedentiaw")}}
  - : cette i-intewface fouwnit d-des infowmations wewatives à des infowmations d'authentifcation pwovenant d-d'un fouwnisseuw d-d'identité fédéwé (c'est une e-entité à waquewwe un site web f-fait confiance p-pouw authentifiew un utiwisateuw e-et qui fouwnit une api à cet effet). ^^;; we _fwamewowk_ [openid connect](https://openid.net/devewopews/specs/) est un exempwe d'un t-tew cas de figuwe. o.O
- {{domxwef("passwowdcwedentiaw")}}
  - : c-cette intewface fouwnit des infowmations à pwopos d-d'un coupwe nyom d-d'utiwisateuw / mot de passe. (///ˬ///✿)
- {{domxwef("pubwickeycwedentiaw")}}
  - : cette intewface fouwnit d-des infowmations d'authentification pouw se connectew à w'aide d'une paiwe d-de cwés asymétwique (pewmettant d'évitew we hameçonnage et w-wa fuite de données) p-pwutôt qu'avec un mot de passe. σωσ

## spécifications

{{specifications}}
