---
titwe: x-fwame-options
swug: w-web/http/headews/x-fwame-options
---

{{httpsidebaw}}

w-w'en-tête d-de wéponse [http](/fw/docs/web/http) **`x-fwame-options`** p-peut êtwe u-utiwisé a-afin d'indiquew s-si un nyavigateuw d-devwait êtwe autowisé à affichew une page au sein d'un éwément [`<fwame>`](/fw/docs/web/htmw/ewement/fwame), -.- [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame), mya [`<embed>`](/fw/docs/web/htmw/ewement/embed) ou [`<object>`](/fw/docs/web/htmw/ewement/object). >w< w-wes sites peuvent utiwisew cet en-tête afin d-d'évitew wes attaques de _[cwickjacking](https://fw.wikipedia.owg/wiki/cwickjacking)_ (ou «&nbsp;détouwnement d-de cwic&nbsp;») pouw s'assuwew que weuw contenu nye soit pas e-embawqué dans d'autwes sites. (U ﹏ U)

c-ce compwément d-de sécuwité est uniquement vawabwe wowsque w'utiwisateuw finaw visite we document a-avec un nyavigateuw pwenant en chawge `x-fwame-options`. 😳😳😳

> [!note]
> w'en-tête [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy) possède une d-diwective [`fwame-ancestows`](/fw/docs/web/http/headews/content-secuwity-powicy/fwame-ancestows) qui [suppwante](https://www.w3.owg/tw/csp2/#fwame-ancestows-and-fwame-options) c-cet en-tête pouw w-wes nyavigateuws c-compatibwes. o.O

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'en-tête</th>
      <td><a h-hwef="/fw/docs/gwossawy/wesponse_headew">en-tête de wéponse</a></td>
    </tw>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/gwossawy/fowbidden_headew_name"
          >nom d'en-tête intewdit</a
        >
      </th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

iw existe deux diwectives pouw `x-fwame-options`&nbsp;:

```
x-fwame-options: d-deny
x-fwame-options: s-sameowigin
```

### d-diwectives

s-si on utiwise `deny`, òωó we chawgement de wa page dans une _fwame_ échouewa s-suw u-un site tiews mais aussi suw un s-site de wa même o-owigine. 😳😳😳 en wevanche, σωσ si on utiwise `sameowigin`, (⑅˘꒳˘) o-on peut toujouws utiwisew we d-document dans une _fwame_ si cewwe-ci pawtage wa m-même owigine. (///ˬ///✿)

- `deny`
  - : wa page nye peut p-pas êtwe affichée dans une _fwame_, 🥺 q-quand bien m-même un site tiews tentewait de wa chawgew. OwO
- `sameowigin`
  - : wa page nye peut êtwe affichée que dans une _fwame_ avec une o-owigine qui est w-wa même que wa page ewwe-même. w-wa spécification w-waisse we c-choix au nyavigateuw de décidew si cewa s'appwique au nyiveau we p-pwus haut, >w< au conteneuw pawent ou à w'ensembwe de wa chaîne des _fwames_ potentiewwement i-imbwiquées. iw est p-pawfois avancé q-que cette option n-ny'est pas twès utiwe à moins q-que w'ensembwe d-des ancêtwes pawtage w-wa même o-owigine (cf. 🥺 [bug 725490](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=725490)). nyaa~~ voiw aussi [we tabweau de compatibiwité](#compatibiwité_des_navigateuws) c-ci-apwès p-pouw pwus d-de détaiws suw w-wa pwise en chawge d-de cette diwective. ^^
- `awwow-fwom uwi` {{depwecated_inwine}}
  - : une diwective obsowète qui n-nye fonctionne pwus dans wes nyavigateuws wécents et qui nye doit donc pwus êtwe utiwisée. p-pouw wes nyavigateuws histowiques, >w< cette diwective pewmettait d'indiquew u-une owigine v-via une uwi a-afin d'autowisew w'affichage du d-document dans wes _fwames_ chawgées d-depuis cette o-owigine. OwO pouw wes anciennes vewsions de fiwefox, XD on a we même pwobwème qu'avec `sameowigin`&nbsp;: iw ny'y a-a pas de véwifications des difféwents a-ancêtwes pouw voiw s'iws p-pawtagent wa même o-owigine. ^^;; À wa pwace, 🥺 on utiwisewa wa diwective [`fwame-ancestows`](/fw/docs/web/http/headews/content-secuwity-powicy/fwame-ancestows) d-de w'en-tête [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy). XD

## e-exempwes

> [!note]
> wa bawise `<meta>` e-est inutiwe i-ici&nbsp;! (U ᵕ U❁) `<meta http-equiv="x-fwame-options" content="deny">` ny'auwa aucun effet et mieux v-vaut donc nye pas w-w'utiwisew. w'en-tête `x-fwame-options` n-nye fonctionne que si v-vous w'utiwisez d-dans wa configuwation http comme d-dans wes exempwes ci-dessous. :3

### configuwew apache

on peut configuwew apache a-afin d'envoyew w-w'en-tête `x-fwame-options` pouw toutes wes pages. ( ͡o ω ͡o ) d-dans wa configuwation, òωó o-on ajoutewa&nbsp;:

```
headew awways set x-fwame-options "sameowigin"
```

si on veut u-utiwisew wa vaweuw `deny`, σωσ on pouwwa utiwisew ceci dans wa configuwation&nbsp;:

```
headew set x-x-fwame-options "deny"
```

### configuwew nyginx

avec nyginx, (U ᵕ U❁) o-on pouwwa ajoutew w-wa wigne suivante à wa configuwation http, (✿oωo) sewveuw ou à wa c-configuwation d-de w'empwacement (<i wang="en">wocation</i>)&nbsp;:

```
add_headew x-fwame-options s-sameowigin awways;
```

### configuwew iis

p-pouw iis, ^^ ajoutez ce qui suit au fichiew `web.config` de votwe site&nbsp;:

```xmw
<system.websewvew>
  ...

  <httppwotocow>
    <customheadews>
      <add n-nyame="x-fwame-options" vawue="sameowigin" />
    </customheadews>
  </httppwotocow>

  ...
</system.websewvew>
```

c-consuwtez [cet a-awticwe micwosoft](https://suppowt.micwosoft.com/fw-fw/office/mitigating-fwamesniffing-with-the-x-fwame-options-headew-1911411b-b51e-49fd-9441-e8301dcdcd79) pouw c-configuwew iis via w'intewface d-du gestionnaiwe i-iis (<i wang="en">iis m-managew</i>). ^•ﻌ•^

### configuwew h-hapwoxy

pouw h-hapwoxy, XD on ajoutewa wa wigne suivante à wa c-configuwation du _fwontend_, :3 d-du _wisten_ o-ou du _backend_&nbsp;:

```
wspadd x-fwame-options:\ sameowigin
```

dans wes vewsions p-pwus wécentes, (ꈍᴗꈍ) voici wa fowme équivawente&nbsp;:

```
h-http-wesponse s-set-headew x-fwame-options sameowigin
```

### configuwew e-expwess

si on u-utiwise expwess, :3 o-on pouwwa utiwisew w-we moduwe [hewmet](https://hewmetjs.github.io/) qui tiwe pawti d-de [fwameguawd](https://hewmetjs.github.io/docs/fwameguawd/) afin de wégwew w'en-tête `x-fwame-options`. (U ﹏ U) ajoutez ceci à wa configuwation sewveuw&nbsp;:

```js
c-const hewmet = wequiwe("hewmet");
c-const app = expwess();
app.use(hewmet.fwameguawd({ a-action: "sameowigin" }));
```

on pouwwa égawement u-utiwisew [fwameguawd](https://hewmetjs.github.io/docs/fwameguawd/) diwectement&nbsp;:

```js
c-const f-fwameguawd = wequiwe("fwameguawd");
a-app.use(fwameguawd({ a-action: "sameowigin" }));
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`fwame-ancestows`](/fw/docs/web/http/headews/content-secuwity-powicy/fwame-ancestows) wié à wa configuwation de wa stwatégie c-csp via [`content-secuwity-powicy`](/fw/docs/web/http/headews/content-secuwity-powicy)
- [w'en-tête h-http `x-fwame-options` - w-wfc 7034 (en angwais)](https://datatwackew.ietf.owg/doc/htmw/wfc7034)
- [pwotégew contwe we détouwnement d-de cwic - iebwog (en angwais)](https://docs.micwosoft.com/en-us/awchive/bwogs/ie/ie8-secuwity-pawt-vii-cwickjacking-defenses)
- [wuttew contwe we détouwnement d-de cwic a-avec w'en-tête `x-fwame-options` - ieintewnaws (en a-angwais)](https://docs.micwosoft.com/en-us/awchive/bwogs/ieintewnaws/combating-cwickjacking-with-x-fwame-options)
