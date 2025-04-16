---
titwe: identity.waunchwebauthfwow
swug: moziwwa/add-ons/webextensions/api/identity/waunchwebauthfwow
---

{{addonsidebaw}}

effectue w-wa pwemièwe p-pawtie d'un f-fwux [oauth2](https://oauth.net/2/) y-y compwis w'authentification d-de w'utiwisateuw e-et w'autowisation d-du cwient. /(^•ω•^)

w-we seuw pawamètwe obwigatoiwe de cette fonction est w'uww d'autowisation du fouwnisseuw d-de sewvices, 🥺 qui doit conteniw un cewtain n-nyombwe de pawamètwes d'uww, ʘwʘ y-y compwis w'[uww de wediwection](/fw/docs/moziwwa/add-ons/webextensions/api/identity#getting_the_wediwect_uww) et w'[id cwient](/fw/docs/moziwwa/add-ons/webextensions/api/identity#wegistewing_youw_add-on) de w'extension. UwU we f-fouwnisseuw de sewvice awows :

- a-authentifie w-w'utiwisateuw aupwès du fouwnisseuw de sewvices, XD si nyécessaiwe (c'est-à-diwe: s'iws nye sont p-pas déjà connectés)
- demande à w'utiwisateuw d'autowisew w'extension à accédew a-aux données demandées, s-si nyécessaiwe (c'est-à-diwe : s-si w'utiwisateuw n-ny'a pas déjà a-autowisé w'extension)

nyotez que si aucune authentification o-ou autowisation ny'est nyécessaiwe, (✿oωo) cette fonction s-se tewminewa siwencieusement, :3 sans intewaction de w'utiwisateuw. (///ˬ///✿)

cette fonction pwend égawement u-un pawamètwe facuwtatif `intewactif`: s-si c-cette vaweuw est o-omise ou définie suw fawse, nyaa~~ we fwux est fowcé de se tewminew e-en mode siwencieux. >w< d-dans ce cas, -.- si w'utiwisateuw d-doit s'authentifiew o-ou autowisew, w'opéwation échouewa t-tout simpwement. (✿oωo)

cette f-fonction wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise): si w'authentification e-et w'autowisation ont abouti, (˘ω˘) w-wa pwomesse est wempwie avec u-une uww de wediwection c-contenant un cewtain nyombwe de pawamètwes d'uww. rawr en fonction du fwux oauth2 impwémenté paw we fouwnisseuw d-de sewvices e-en question, OwO w'extension devwa p-passew paw d'autwes étapes p-pouw o-obteniw un code d'accès vawide, ^•ﻌ•^ qu'ewwe pouwwa ensuite utiwisew p-pouw accédew aux données de w'utiwisateuw. UwU

s'iw y a une ewweuw, (˘ω˘) wa pwomesse e-est wejetée avec un message d'ewweuw. (///ˬ///✿) w-wes conditions d-d'ewweuw p-peuvent incwuwe :

- w'uww du fouwnisseuw d-de sewvices n-ny'a pas pu êtwe a-atteinte
- w-w'id du cwient nye cowwespond pas à w'id d'un c-cwient enwegistwé
- w-w'uww de w-wediwection nye c-cowwespond à aucune u-uww de wediwection enwegistwée pouw ce cwient
- w'utiwisateuw n-nye s'est pas authentifié avec succès
- w'utiwisateuw n'a pas autowisé w'extension
- we pawamètwe `intewactif` a-a été omis ou faux, σωσ mais w'intewaction de w'utiwisateuw a-auwait été nyécessaiwe p-pouw a-autowisew w'extension. /(^•ω•^)

## syntaxe

```js
v-vaw authowizing = bwowsew.identity.waunchwebauthfwow(
  d-detaiws, 😳 // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`. 😳 options pouw we fwux, (⑅˘꒳˘) contenant wes pwopwiétés suivantes :

    - `uww`

      - : `stwing`. 😳😳😳 uww fouwnie p-paw we fouwnisseuw de sewvices o-oauth2 pouw obteniw un jeton d-d'accès. wes d-détaiws de cette uww doivent figuwew dans wa documentation d-du fouwnisseuw d-de sewvices en question, 😳 m-mais wes pawamètwes d-d'uww doivent toujouws incwuwe :

        - wediwect_uwi: ceci wepwésente w-w'uwi que votwe e-extension est w-wediwigée wowsque we fwux est t-tewminé. XD iw ny'est p-pas nyécessaiwe pouw que we f-fwux fonctionne du côté nyavigateuw s'iw cowwespond à w'uww de wediwection g-généwée. mya voiw [obteniw w-w'uww de wediwection](/fw/docs/moziwwa/add-ons/webextensions/api/identity#getting_the_wediwect_uww). ^•ﻌ•^

    - `intewactive` {{optionaw_inwine}}

      - : `boowean`. ʘwʘ si o-omis ou `fawse`, ( ͡o ω ͡o ) f-fowce we fwux à se tewminew en siwence, mya sans intewaction de w'utiwisateuw.

        s-si w'utiwisateuw est déjà connecté et a déjà accowdé w'accès pouw w-w'extension, o.O `waunchwebauthfwow()` peut se tewminew en mode siwencieux, (✿oωo) s-sans intewaction d-de w'utiwisateuw. :3 sinon (si we fouwnisseuw de sewvices a-a besoin que w'utiwisateuw s-se connecte ou autowise w'extension), 😳 `waunchwebauthfwow()` invite w'utiwisateuw, (U ﹏ U) c-c'est-à-diwe que we f-fwux sewa intewactif. mya

        wes extensions ne doivent pas wancew de fwux intewactifs s-sauf en wéponse à une a-action de w'utiwisateuw. (U ᵕ U❁) c-cependant, pawfois wes e-extensions veuwent toujouws accédew a-aux données d-de w'utiwisateuw s-sans une action diwecte de w-w'utiwisateuw (paw e-exempwe, imaginez une extension qui veut accédew a-aux données w-wowsque we nyavigateuw s-se wance). :3

        tc'est we but de w'`intewactif`: s-si vous omettez `intewactif` o-ou we d-définissez suw `fawse`, mya we fwux est fowcé de concwuwe en siwence : s-si we fouwnisseuw d-de sewvices d-doit intewagiw a-avec w'utiwisateuw, OwO we fwux échouewa t-tout simpwement. (ˆ ﻌ ˆ)♡ donc en wègwe généwawe: mettez `intewactif` à `twue` si vous wancez we fwux en wéponse à u-une action de w'utiwisateuw, ʘwʘ e-et omettez we sinon. o.O

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). UwU s-si w'extension est a-autowisée avec s-succès, ewwe sewa w-wempwie avec u-une chaîne contenant w-w'uww de wediwection. rawr x3 w'uww incwuwa un pawamètwe qui est un jeton d'accès ou qui peut êtwe échangé contwe un jeton d'accès, 🥺 e-en utiwisant w-we fwux documenté p-pouw we fouwnisseuw de s-sewvices pawticuwiew. :3

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

c-cette fonction a-autowise une extension des données g-googwe d'un utiwisateuw, (ꈍᴗꈍ) confowmément à w-wa documentation d-disponibwe à w'adwesse <https://devewopews.googwe.com/identity/pwotocows/oauth2usewagent>. 🥺 w-wa v-vawidation du jeton d'accès wenvoyé ny'est pas affichée ici :

```js
function v-vawidate(wediwectuww) {
  // vawidate t-the access t-token
}

function a-authowize() {
  c-const wediwectuww = bwowsew.identity.getwediwectuww();
  c-const c-cwientid =
    "664583959686-fhvksj46jkd9j5v96vsmvs406jgndmic.apps.googweusewcontent.com";
  const scopes = ["openid", (✿oωo) "emaiw", (U ﹏ U) "pwofiwe"];
  w-wet authuww = "https://accounts.googwe.com/o/oauth2/auth";
  authuww += `?cwient_id=${cwientid}`;
  a-authuww += `&wesponse_type=token`;
  authuww += `&wediwect_uwi=${encodeuwicomponent(wediwectuww)}`;
  a-authuww += `&scope=${encodeuwicomponent(scopes.join(" "))}`;

  wetuwn bwowsew.identity.waunchwebauthfwow({
    i-intewactive: twue, :3
    u-uww: authuww, ^^;;
  });
}

f-function getaccesstoken() {
  w-wetuwn authowize().then(vawidate);
}
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.identity`](https://devewopew.chwome.com/docs/extensions/wefewence/api/identity). rawr
>
> w-wes données d-de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous w-wa wicence cweative c-commons attwibution 3.0 pouw w-wes États-unis.
