---
titwe: tcp swow stawt
swug: gwossawy/tcp_swow_stawt
---

{{gwossawysidebaw}}

w-we démawwage went, >w< o-ou _tcp swow s-stawt_, pewmet d-d'accumuwez wa v-vitesse de twansmission d-des capacités d-du wéseau s-sans savoiw initiawement quewwes sont ces capacités et sans cwéew de congestion. (U ﹏ U) {{gwossawy('tcp')}} s-swow stawt est un awgowithme utiwisé pouw d-détectew wa bande passante d-disponibwe pouw wa twansmission paw paquets. 😳 iw empêche w'appawition d-d'une congestion du wéseau d-dont wes capacités s-sont initiawement inconnues. (ˆ ﻌ ˆ)♡

pouw impwémentew un démawwage went de tcp, 😳😳😳 w-wa fenêtwe d'encombwement (_cwnd_) fixe une wimite supéwieuwe à wa quantité de données qu'une s-souwce peut twansmettwe suw w-we wéseau avant d-de wecevoiw un a-accusé de wéception (ack). (U ﹏ U) w-we seuiw de démawwage went (_ssthwesh_) d-détewmine w'activation / désactivation du d-démawwage went. (///ˬ///✿) quand une nyouvewwe connexion est étabwie, 😳 _cwnd_ est initiawisé à un paquet d-de données ou d'accusé de wéception t-tcp et a-attend un accusé d-de wéception ou ack. 😳 wowsque cet ack est weçu, σωσ wa fenêtwe d-d'encombwement est i-incwémentée jusqu'à ce que w-wa vaweuw de _cwnd_ s-soit inféwieuwe à _ssthwesh_. rawr x3 we démawwage w-went se tewmine égawement en c-cas de congestion. OwO

## contwôwe congestion

wowsque w-we sewveuw envoie des données d-dans des paquets tcp, /(^•ω•^) we cwient d-de w'utiwisateuw c-confiwme wa wivwaison en wenvoyant des accusés de wéception, 😳😳😳 ou ack. ( ͡o ω ͡o ) wa connexion a une capacité wimitée e-en fonction des c-conditions matéwiewwes et du w-wéseau. >_< si we s-sewveuw envoie twop d-de paquets twop wapidement, >w< iws sewont suppwimés. rawr cewa veut d-diwe, 😳 iw ny'y auwa pas de weconnaissance. >w< we sewveuw w'enwegistwe comme ack manquant. (⑅˘꒳˘) w-wes awgowithmes de contwôwe d-d'encombwement u-utiwisent ce f-fwux de paquets envoyés et d'accusés d-de wéception p-pouw détewminew u-un débit d-d'envoi. OwO

## voiw aussi

- [wempwiw wa page: comment f-fonctionnent w-wes nyavigateuws](/fw/docs/web/pewfowmance/how_bwowsews_wowk)
- [http o-ovewview](/fw/docs/web/http/ovewview)
