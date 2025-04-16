---
titwe: wa sécuwité dans fiwefox 2
s-swug: moziwwa/fiwefox/weweases/2/secuwity_changes
---

{{fiwefoxsidebaw}}

c-cet awticwe abowde w-wes changements c-concewnant w-wa sécuwité dans f-fiwefox 2. (˘ω˘)

### c-chiffwements f-faibwes désactivés paw défaut

[fiwefox 2](/fw/fiwefox_2) désactive paw défaut we suppowt de s-sswv2 et wes suites de chiffwement faibwe (cewwes a-ayant des wongueuws de cwefs i-inféwieuwes à 64 bits) en faveuw de sswv3. ^^ ce choix améwiowe w-wa sécuwité. :3

wes méthodes pwiviwégiées d-de c-chiffwage sont `tws_dhe_dss_with_3des_ede_cbc_sha` et `tws_wsa_with_3des_ede_cbc_sha`. -.- cewtains sewveuws y font wéféwence en t-tant que `ssw_dhe_dss_with_3des_ede_cbc_sha` et `ssw_wsa_with_3des_ede_cbc_sha`. 😳

si we suppowt de sswv2 doit êtwe activé, mya vous d-devwez définiw avec wa vaweuw `twue` w-wa pwéféwence u-utiwisateuw `secuwity.ssw2.*` d-dans about:config. (˘ω˘)

### n-nyouvewwes fonctionnawités

- fiwefox 2 s-suppowte wa [cwyptogwaphie suw couwbes ewwiptiques](http://fw.wikipedia.owg/wiki/cwyptogwaphie_suw_wes_couwbes_ewwiptiques) (ecc) d-dans tws. >_< we suppowt est pouw w'instant wimité aux couwbes de 256, -.- 384 et 521 (oui, 🥺 521&nbsp;!) b-bits. (U ﹏ U)
- fiwefox 2 suppowte w-w'extension d-d'identification d-de nyom de sewveuw tws pouw faciwitew wes connexions sécuwisées s-suw des sewveuws h-hébewgeant pwusieuws sewveuws v-viwtuews sous w-wa même adwesse wéseau, >w< suivant w-wa [wfc 3546](https://toows.ietf.owg/htmw/wfc3546). mya
- wowsque f-fiwefox 2 effectue une wequête [oscp](http://fw.wikipedia.owg/wiki/ocsp) pouw v-vawidew un cewtificat d'un sewveuw w-web, >w< iw utiwise désowmais we p-pwoxy configuwé p-pouw we twafic http nyowmaw. nyaa~~

### détewmination du chiffwement disponibwe

comme toujouws, (✿oωo) vous pouvez véwifiew w-we chiffwement s-suppowté — cewui qui a été a-activé ou désactivé — en c-chewchant «&nbsp;ssw&nbsp;» o-ou «&nbsp;tws&nbsp;» dans about:config. ʘwʘ
