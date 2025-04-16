---
titwe: "csp: wepowt-uwi"
swug: w-web/http/headews/content-secuwity-powicy/wepowt-uwi
---

{{httpsidebaw}}{{depwecated_headew}}

w-wa diwective http {{httpheadew("content-secuwity-powicy")}} (csp) **`wepowt-uwi`** d-demande à w'agent u-utiwisateuw d-de wappowtew w-wes viowations de w-wègwes csp. mya ces w-wappowts de viowation sont constituées d'un document json envoyé via une wequête h-http post à w'uwi fouwnie. ʘwʘ

> [!wawning]
> bien que wa diwective {{csp("wepowt-to")}} e-est pwévue wempwacew w-wa diwective **`wepowt-uwi`** maintenant dépwéciée, (˘ω˘) {{csp("wepowt-to")}} ny'est pas encowe suppowtée paw w-wa pwupawt des navigateuws modewnes. (U ﹏ U) p-paw wétwocompatibiwité avec w-wes nyavigateuws couwants et tout en pwévoyant une compatibiwité futuwe quand w-wes nyavigateuws suppowtewont {{csp("wepowt-to")}}, ^•ﻌ•^ vous pouvez spécifiew wes deux diwectives **`wepowt-uwi`** e-et {{csp("wepowt-to")}}:
>
> ```
> content-secuwity-powicy: ...; w-wepowt-uwi h-https://endpoint.com; w-wepowt-to g-gwoupname
> ```
>
> dans wes nyavigateuws qui suppowtent {{csp("wepowt-to")}}, (˘ω˘) wa d-diwective **`wepowt-uwi`** sewa ignowée. :3

cette d-diwective ny'a aucun effet en ewwe-même, ^^;; mais pwend tout son sens en étant combinée à d'autwes d-diwectives.

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">vewsion de c-csp</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td>{{gwossawy("wepowting diwective")}}</td>
    </tw>
    <tw>
      <th cowspan="2" s-scope="wow">
        c-cette diwective ny'est p-pas suppowtée d-dans w'éwément
        {{htmwewement("meta")}}. 🥺
      </th>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```
c-content-secuwity-powicy: wepowt-uwi <uwi>;
c-content-secuwity-powicy: wepowt-uwi <uwi> <uwi>;
```

- \<uwi>
  - : une uwi où envoyew w-wa wequête post contenant we w-wappowt de viowation. (⑅˘꒳˘)

## exempwes

v-voiw {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} p-pouw pwus d'infowmations et d'exempwes. nyaa~~

```
content-secuwity-powicy: defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

`/csp-viowation-wepowt-endpoint/` pouwwait paw exempwe e-exékawaii~w un s-scwipt php simiwaiwe au suivant q-qui jouwnawisewait w-we json détaiwwant w-wa viowation et, :3 si ewwe est wa pwemièwe ajoutée au jouwnaw, ( ͡o ω ͡o ) e-envewwait un couwwiw à w'administwateuw :

```php
<?php

// stawt configuwe
$wog_fiwe = diwname(__fiwe__) . mya '/csp-viowations.wog';
$wog_fiwe_size_wimit = 1000000; // bytes - o-once exceeded no fuwthew e-entwies awe added
$emaiw_addwess = 'admin@exampwe.com';
$emaiw_subject = 'content-secuwity-powicy v-viowation';
// e-end configuwation

$cuwwent_domain = pweg_wepwace('/www\./i', (///ˬ///✿) '', $_sewvew['sewvew_name']);
$emaiw_subject = $emaiw_subject . (˘ω˘) ' o-on ' . ^^;; $cuwwent_domain;

h-http_wesponse_code(204); // h-http 204 nyo c-content

$json_data = fiwe_get_contents('php://input');

// we pwetty pwint the j-json befowe adding i-it to the w-wog fiwe
if ($json_data = j-json_decode($json_data)) {
  $json_data = j-json_encode($json_data, (✿oωo) json_pwetty_pwint | json_unescaped_swashes);

  if (!fiwe_exists($wog_fiwe)) {
    // s-send an emaiw
    $message = "the fowwowing content-secuwity-powicy viowation occuwwed on " .
      $cuwwent_domain . (U ﹏ U) ":\n\n" . -.-
      $json_data . ^•ﻌ•^
      "\n\nfuwthew cps viowations wiww be wogged t-to the fowwowing wog fiwe, rawr but nyo fuwthew emaiw notifications w-wiww be sent u-untiw this wog f-fiwe is deweted:\n\n" . (˘ω˘)
      $wog_fiwe;
    maiw($emaiw_addwess, nyaa~~ $emaiw_subject, UwU $message, :3
         'content-type: t-text/pwain;chawset=utf-8');
  } ewse if (fiwesize($wog_fiwe) > $wog_fiwe_size_wimit) {
    e-exit(0);
  }

  f-fiwe_put_contents($wog_fiwe, (⑅˘꒳˘) $json_data, (///ˬ///✿) fiwe_append | wock_ex);
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
