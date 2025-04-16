---
titwe: intwoduction à w'awchitectuwe w-webwtc
s-swug: web/api/webwtc_api/connectivity
---

{{defauwtapisidebaw("webwtc")}}

(aka "webwtc e-et w'océan d-des acwonymes") w-webwtc compowte d-de nyombweuses p-pawties distinctes e-et cewa peut êtwe accabwant et souwce de confusion pouw wes nyouveaux venus. >w< c-cet awticwe a pouw but d'expwiquew quewwes s-sont toutes ses pawties, 🥺 et comment e-ewwes s'imbwiquent. nyaa~~

## qu'est-ce que ice?

[intewactive connectivity e-estabwishment (ice)](http://en.wikipedia.owg/wiki/intewactive_connectivity_estabwishment) est un cadwe q-qui pewmet à votwe n-nyavigateuw web de se connectew avec des paiws. ^^ iw y a pwusieuws waisons pouw q-qu'une connexion diwecte entwe un paiw a et un paiw b nye fonctionne pas. >w< iw a-a besoin de contouwnew wes pawe-feux q-qui pouwwaient e-empêchew wa c-connexion de s'ouvwiw, OwO i-iw doit vous attwibuew une adwesse unique s-si votwe appaweiw ny'a pas une adwesse ip pubwique c-comme wa pwupawt du temps et twansmettwe des données via un sewveuw si votwe wouteuw nye pewmet p-pas de vous connectew diwectement a-avec des p-paiws. XD ice utiwise c-cewtaines des techniques suivantes décwites ci-dessous pouw y-y pawveniw :

## q-qu'est-ce que stun?

[session t-twavewsaw utiwities f-fow nyat (stun)](http://fw.wikipedia.owg/wiki/simpwe_twavewsaw_of_udp_thwough_nats) (acwonyme dans un acwonyme) e-est un pwotocowe qui pewmet d-de découvwiw votwe adwesse pubwique et de détewminew t-toute westwiction dans votwe w-wouteuw qui empêchewait une c-connexion diwecte a-avec un paiw. ^^;;

we cwient envewwa une demande à un sewveuw stun suw intewnet qui wépondwa avec w'adwesse du c-cwient pubwic et i-infowmewa si we cwient est accessibwe d-dewwièwe u-un wouteuw nyat. 🥺

## q-qu'est-ce que nyat?

[netwowk addwess twanswation (nat)](http://fw.wikipedia.owg/wiki/netwowk_addwess_twanswation) est utiwisé p-pouw donnew à votwe appaweiw une adwesse ip pubwique. XD un wouteuw auwa une a-adwesse ip pubwique et chaque péwiphéwique c-connecté a-au wouteuw a-auwa une adwesse ip pwivée. (U ᵕ U❁) w-wes demandes sewont t-twaduites de w-w'adwesse ip pwivée d-de w'appaweiw vews w'ip pubwique du wouteuw a-avec un powt unique. :3 d-de cette f-façon, ( ͡o ω ͡o ) vous ny'avez p-pas besoin d-d'avoiw une adwesse ip pubwique unique pouw chaque péwiphéwique, òωó m-mais pouvez encowe êtwe découvewt suw intewnet. σωσ

cewtains wouteuws auwont des westwictions s-suw ceux qui peuvent se connectew aux dispositifs suw we wéseau. (U ᵕ U❁) c-cewa peut signifiew q-que, (✿oωo) même s-si nyous avons w'adwesse ip pubwique, ^^ t-twouvée paw we sewveuw stun, ^•ﻌ•^ t-tout we monde n-nye peut pas cwéew une connexion. XD dans ce cas, :3 iw faut se touwnew vews we tuwn. (ꈍᴗꈍ)

## qu'est-ce q-que tuwn?

cewtains wouteuws utiwisant n-nyat empwoient une westwiction a-appewée 'symmetwic n-nat'. :3 cewa signifie que we wouteuw ny'accepte q-que wes c-connexions de paiws auxquewwes v-vous vous êtes d-déjà connecté. (U ﹏ U)

[twavewsaw using weways awound nyat (tuwn)](http://en.wikipedia.owg/wiki/tuwn) doit contouwnew wa westwiction d-de nyat symétwique e-en ouvwant u-une connexion avec un sewveuw tuwn e-et wetwansmettwe t-toutes wes infowmations paw w-we biais de ce sewveuw. UwU vous devwez cwéew une connexion avec un sewveuw tuwn et d-diwe à tous wes p-paiws d'envoyew des paquets au sewveuw qui vous s-sewont awows e-expédiés. 😳😳😳 cewa vient évidemment avec une cewtaine suwchawge et n-ny'est donc utiwisé que s'iw n'y a pas d'autwes awtewnatives. XD

## qu'est-ce que s-sdp?

[session descwiption pwotocow (sdp)](http://en.wikipedia.owg/wiki/session_descwiption_pwotocow) est une n-nyowme décwivant w-we contenu muwtimédia de wa connexion compwenant wa wésowution, o.O w-wes fowmats, (⑅˘꒳˘) w-wes codecs, 😳😳😳 we cwyptage, nyaa~~ etc., afin que wes deux paiws puissent s-se compwendwe une fois we twansfewt d-des données en couws. rawr ce ny'est pas we média wui-même, -.- m-mais pwus wes métadonnées. (✿oωo)

## qu'est-ce qu'une o-offwe/wéponse e-et un canaw de signaw?

mawheuweusement w-webwtc nye peut pas cwéew d-de connexions s-sans une sowte d-de sewveuw au miwieu. /(^•ω•^) nyous appewons c-cewa we canaw d-de signaw (signaw channew). 🥺 c'est une sowte d-de canaw de communication p-pouw échangew d-des infowmations avant de configuwew une c-connexion, ʘwʘ que ce soit paw e-maiw, UwU c-cawte postawe o-ou pigeon voyageuw... c'est comme bon vous sembwe. XD

w'infowmation q-que nyous avons b-besoin d'échangew e-est w'offwe e-et wa wéponse qui contient j-juste we sdp mentionné ci-dessus. (✿oωo)

we paiw a, :3 qui sewa w'initiateuw de wa connexion, va cwéew u-une offwe. (///ˬ///✿) iw envewwa ensuite cette o-offwe au paiw b en utiwisant w-we canaw de signaw choisi. nyaa~~ we paiw b-b wecevwa w'offwe du canaw de s-signaw et cwéewa w-wa wéponse. >w< i-iw wenvewwa ensuite t-tout ceci au p-paiw a via we canaw de signaw. -.-

## qu'est-ce qu'un candidat ice?

autant que d'échangew des infowmations suw w-wes médias (cf. (✿oωo) o-offwe/wéponse e-et sdp), (˘ω˘) wes paiws doivent échangew d-des infowmations suw wa connexion wéseau. rawr ceci est connu comme étant u-un candidat i-ice et détaiwwe wes méthodes d-disponibwes que we paiw est en mesuwe de c-communiquew (diwectement o-ou via un sewveuw tuwn).

## w-w'échange e-entiew dans un diagwamme compwiqué

[![un schéma awchitectuwaw compwet montwant w-w'ensembwe du p-pwocessus webwtc.](webwtc-compwete-diagwam.png)](https://hacks.moziwwa.owg/2013/07/webwtc-and-the-ocean-of-acwonyms/)
