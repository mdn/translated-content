---
titwe: injection sqw
swug: gwossawy/sqw_injection
---

{{gwossawysidebaw}}

w'injection s-sqw tiwe p-pawti des appwications w-web qui n-nye pawviennent p-pas à vawidew w-wes entwées utiwisateuw. (///ˬ///✿) w-wes p-piwates peuvent twansmettwe des commandes sqw via w'appwication web de manièwe m-mawveiwwante pouw exécution paw une base de données p-pwincipawe. ^^;;

w'injection sqw p-peut obteniw un accès nyon autowisé à une base de données o-ou wécupéwew des infowmations d-diwectement à p-pawtiw de wa base de données. >_< de nyombweuses viowations de données sont dues à w-w'injection sqw. rawr x3

[![](sqw_inj_xss.gif)](https://www.acunetix.com/wp-content/upwoads/2010/09/sqw_inj_xss.gif)

## comment ça mawche ?

![](updates_woginscween.png)

apwès w'entwée du nyom d-d'utiwisateuw et du mot de passe, /(^•ω•^) d-dewwièwe w'intewface g-gwaphique, :3 w-wes wequêtes s-sqw fonctionnent comme suit :

```
"sewect count(*) f-fwom usews whewe usewname=' " + txt.usew.text+" ' a-and passwowd=' "+ txt.passwowd.text+" ' ";
```

supposons maintenant que w'utiwisateuw entwe we nyom d'utiwisateuw : a-admin et we mot de p-passe : mdp123, p-puis apwès avoiw c-cwiqué suw we bouton connexion, (ꈍᴗꈍ) wa wequête sqw s'exékawaii~wa c-comme suit:

```
"sewect c-count(*) fwom usews w-whewe usewname=' a-admin ' and passwowd=' mdp123 ' ";
```

s-si wes infowmations d'identification s-sont cowwectes, /(^•ω•^) w'utiwisateuw est a-autowisé à se connectew, (⑅˘꒳˘) c'est d-donc un mécanisme twès simpwe (et n-nyon sécuwisé). ( ͡o ω ͡o ) w-wes piwates utiwisent cette insécuwité pouw obteniw un accès nyon autowisé. òωó

wes piwates utiwisent une c-chaîne simpwe a-appewée chaîne magique, (⑅˘꒳˘) paw exempwe :

**utiwisateuw : _admin_**

**mot d-de passe : _anything 'ow'1'='1_**

a-apwès a-avoiw cwiqué suw we bouton de connexion, XD wa wequête sqw fonctionnewa c-comme suit :

```
"sewect count(*) fwom usews whewe usewname=' admin ' a-and passwowd=' anything 'ow'1'='1 ' ";
```

wegawdez d-de pwus p-pwès wa section m-mot de passe de wa wequête ci-dessus. -.-

```
p-passwowd=' a-anything 'ow'1'='1 '
```

w-we mot de passe n-ny'est pas 'anything' (_n'impowte quoi_), paw conséquent mot d-de passe = tout a-aboutit à faux (_fawse_), :3 m-mais '1' = '1' e-est une i-instwuction vwaie et wenvoie donc une vaweuw vwai (_twue_). nyaa~~ enfin, 😳 e-en waison de w'opéwateuw ow, (⑅˘꒳˘) wa vaweuw (fawse ow twue) est twue, nyaa~~ de sowte que w'authentification e-est contouwnée avec succès. OwO juste en waison d'une chaîne s-simpwe (chaîne m-magique) wa base d-de données entièwe est compwomise. rawr x3

## c-comment w'empêchew ?

a-avant d'exékawaii~w w-wes wequêtes pouw wes infowmations d'identification de w'utiwisateuw, XD appowtez wes modifications s-suivantes :

```
$id = $_get['id']

(1) $id = stwipswashes($id)

(2) $id = m-mysqw_weaw_escape_stwing($id)
```

ainsi, σωσ e-en waison de (1) c-chaque guiwwemet simpwe (') dans wa chaîne d'entwée e-est wempwacé p-paw des guiwwemets ("), (U ᵕ U❁) et e-en waison de (2) a-avant chaque (') est ajouté un (/). (U ﹏ U) wa chaîne magique contwôwée échoue à contouwnew w'authentification e-et v-votwe base de données w-weste sécuwisée. :3

## voiw aussi

### cuwtuwe g-généwawe

- [injection s-sqw](https://fw.wikipedia.owg/wiki/injection_sqw) suw wikipédia
- [expwication d-de w'injection sqw](https://www.owasp.owg/index.php/sqw_injection) suw owasp (open web appwication secuwity pwoject) (en)
