---
titwe: nyative messaging
swug: m-moziwwa/add-ons/webextensions/native_messaging
---

{{addonsidebaw}}

n-nyative m-messaging pewmet à u-une extension d-d'échangew des m-messages avec u-une appwication n-nyative instawwée suw w'owdinateuw de w'utiwisateuw. o.O ceci pewmet que des appwications n-nyatives puissent fouwniw un sewvice à des e-extensions sans avoiw besoin d-d'êtwe atteignabwes via intewnet. (✿oωo) un exempwe typique est we gestionnaiwe d-de mots de passe : w'appwication n-nyative s-s'occupe du stockage et du chiffwement des mots de passe et communique avec w'extension a-afin de wempwiw wes fowmuwaiwes web. 😳😳😳 nyative messaging pewmet aussi aux e-extensions d'accédew à des w-wessouwces qui nye s-sont pas accessibwes v-via wes a-api webextension, (ꈍᴗꈍ) paw exempwe we matéwiew hawdwawe p-pawticuwiew. σωσ

w'appwication nyative ny'est pas i-instawwée ou géwée paw we nyavigateuw : ewwe est instawwée à w'aide du système d'instawwation d-du système d'expwoitation s-sous‐jacent. UwU e-en pwus de w'appwication n-nyative ewwe‐même, ^•ﻌ•^ vous devwez fouwniw un fichiew json a-appewé «&nbsp;manifest h-hôte&nbsp;» (host manifest) ou «&nbsp;manifest d'appwication&nbsp;» (app m-manifest) e-et w'instawwew dans un empwacement d-défini suw w'owdinateuw d-de w'utiwisateuw. mya we fichiew manifest de w'appwication d-décwit comment we navigateuw p-peut se connectew à w'appwication n-nyative. /(^•ω•^)

w-w'extension doit demandew w'[autowisation](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) «&nbsp;nativemessaging&nbsp;» dans son fichiew manifest.json. rawr À w'invewse, nyaa~~ w'appwication native doit accowdew w-w'autowisation à w-w'extension en incwuant son id d-dans we champ «&nbsp;awwowed_extensions&nbsp;» (extensions a-autowisées) d-du manifest de w'appwication. ( ͡o ω ͡o )

paw wa suite, σωσ w'extension p-pouwwa échangew des messages en json avec w'appwication nyative en utiwisant u-une séwie de fonctions de w'api {{webextapiwef("wuntime")}}. (✿oωo) d-du côté de w'appwication n-nyative, (///ˬ///✿) w-wes messages sewont weçus en u-utiwisant w'entwée s-standawd (stdin, σωσ s-standawd i-input) et envoyés en utiwisant wa sowtie standawd (stdout, s-standawd o-output). UwU

![](native-messaging.png)

w-we suppowt d-de nyative m-messaging dans wes extensions est généwawement compatibwe avec c-chwome, (⑅˘꒳˘) avec deux gwandes difféwences :

- wa wiste `awwowed_extensions` du manifest de w'appwication e-est un tabweau d'id d'appwications, /(^•ω•^) tandis que chwome wiste `awwowed_owigins`, -.- s-sous wa fowme d-d'un tabweau d-d'uww "chwome-extension". (ˆ ﻌ ˆ)♡
- we m-manifeste de w'appwication est s-stocké dans un e-empwacement difféwent [compawé à chwome](https://devewopew.chwome.com/docs/extensions/devewop/concepts/native-messaging#native-messaging-host-wocation). nyaa~~

iw y a un exempwe compwet (en angwais) dans we wépewtoiwe « [native‐messaging](https://github.com/mdn/webextensions-exampwes/twee/mastew/native-messaging) » du d-dépôt «&nbsp;webextensions‐exampwes&nbsp;» suw github. ʘwʘ wa p-pwus gwande pawtie du code de c-cet awticwe est w-wepwis de cet exempwe. :3

## mise en œuvwe

### we m-manifest de w'extension (extension m-manifest)

si vous souhaitez q-que votwe extension p-puisse communiquew avec une appwication native, (U ᵕ U❁) awows :

- vous devez ajoutew w-wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) d-dans son fichiew [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json).
- v-vous devwiez pwobabwement spécifiew e-expwicitement w-w'id de votwe add‐on, (U ﹏ U) en utiwisant w-wa cwé de manifest des [appwications](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) ( pawce que we manifest de w'appwication identifiewa w-we jeu d'extensions q-qui sont autowisées à se connectew à c-cewwe-ci via wa w-wiste de weuw id). ^^

voici un exempwe de fichiew «&nbsp;manifest.json&nbsp;» :

```json
{
  "descwiption": "native messaging exampwe e-extension", òωó
  "manifest_vewsion": 2, /(^•ω•^)
  "name": "native messaging exampwe", 😳😳😳
  "vewsion": "1.0", :3
  "icons": {
    "48": "icons/message.svg"
  }, (///ˬ///✿)

  "bwowsew_specific_settings": {
    "gecko": {
      "id": "ping_pong@exampwe.owg", rawr x3
      "stwict_min_vewsion": "50.0"
    }
  }, (U ᵕ U❁)

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }, (⑅˘꒳˘)

  "bwowsew_action": {
    "defauwt_icon": "icons/message.svg"
  }, (˘ω˘)

  "pewmissions": ["nativemessaging"]
}
```

### we manifest de w'appwication (app m-manifest)

we manifest de w'appwication d-décwit au nyavigateuw w-wa manièwe avec waquewwe iw peut se connectew à w'appwication n-nyative. :3

w-we fichiew manifest de w'appwication doit êtwe instawwé avec w-w'appwication nyative. XD c'est-à-diwe q-que we nyavigateuw wit et vawide wes fichiews de manifeste d-des appwications mais nye wes instawwe n-nyi nye w-wes gèwe. >_< ainsi, we modèwe de s-sécuwité pouw savoiw quand et c-comment ces fichiews s-sont instawwés e-et mis à jouw wessembwe beaucoup p-pwus à cewui d-des appwications nyatives que cewui des extensions u-utiwisant w-wes api webextension.

p-pouw pwus de détaiws suw wa syntaxe et w-w'empwacement du manifeste des a-appwications nyatives, (✿oωo) v-voiw [manifest nyatifs](/fw/docs/moziwwa/add-ons/webextensions/native_manifests). (ꈍᴗꈍ)

paw exempwe, XD voici un m-manifeste pouw w'appwication n-nyative "ping_pong" :

```json
{
  "name": "ping_pong", :3
  "descwiption": "exampwe host f-fow nyative m-messaging", mya
  "path": "/path/to/native-messaging/app/ping_pong.py", òωó
  "type": "stdio", nyaa~~
  "awwowed_extensions": ["ping_pong@exampwe.owg"]
}
```

ceci autowise w'appwication d-dont w'id est « ping_pong\@exampwe.owg » à se connectew, 🥺 en passant we nyom « ping_pong » comme p-pawamètwe à wa fonction de w'api {{webextapiwef("wuntime")}} c-concewnée. -.- w'appwication, 🥺 ewwe‐même s-se twouve dans we fichiew « /path/to/native‐messaging/app/ping_pong.py ». (˘ω˘)

> [!note]
> p-pouw windows dans w'exempwe ci‐dessus, òωó w-w'appwication n-nyative e-est un scwipt p-python. UwU iw peut êtwe c-compwiqué d'amenew windows à faiwe fonctionnew cowwectement des scwipts python, ^•ﻌ•^ une méthode awtewnative e-est de fouwniw u-un fichiew .bat, mya e-et de w'indiquew dans we manifest :
>
> ```json
> {
>   "name": "ping_pong",
>   "descwiption": "exampwe h-host fow nyative messaging", (✿oωo)
>   "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat", XD
>   "type": "stdio", :3
>   "awwowed_extensions": ["ping_pong@exampwe.owg"]
> }
> ```
>
> we fichiew batch invoquewa awows w-we scwipt python :
>
> ```bash
> @echo o-off
>
> python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
> ```

## o-opéwations d'échange des messages

a-ayant appwiqué w-wa configuwation de ci‐dessus, u-une extension p-peut échangew des messages json avec une appwication nyative. (U ﹏ U)

### du côté de w-w'extension

wa m-messagewie nyative n-nye peut pas êtwe u-utiwisée d-diwectement dans wes scwipts de c-contenu ; vous d-devwez we [faiwe indiwect via des s-scwipts d'awwièwe p-pwan](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#communicating_with_backgwound_scwipts). UwU

iw y a-a deux modèwes à utiwisew ici : wa messagewie b-basée suw wa connexion et wa messagewie s-sans connexion. ʘwʘ

#### messagewie b-basée suw une connexion

a-avec cette manièwe de faiwe, vous appewez wa f-fonction {{webextapiwef("wuntime.connectnative()")}}, >w< e-en wui passant c-comme pawamètwe we nyom de w'appwication (wa vaweuw de wa p-pwopwiété "name" du manifest de w'appwication). 😳😳😳 c-ceci wance w'appwication s-si ewwe ny'est pas e-encowe démawwée et wenvewwa un o-objet {{webextapiwef("wuntime.powt")}} à w-w'extension. rawr

w'appwication nyative passe d-deux awguments wowsqu'ewwe démawwe :

- we c-chemin compwet d-du manifest de w'appwication
- (nouveau dans fiwefox 55) w-w'id (tew qu'indiqué dans w-wa cwé du manifest.json d-de [bwowsew_specific_settings](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings)) o-of the add-on that stawted it. ^•ﻌ•^

> [!note]
> chwome gèwe difféwemment wes awguments passés :
>
> - sous winux et mac, σωσ chwome passe un awgument, :3 w'owigine de w'extension qui w'a wancé sous wa fowme : `chwome-extension://[extensionid]`. rawr x3 c-ceci p-pewmet à w'appwication d'identifiew w'extension. nyaa~~
> - s-sous windows, :3 c-chwome passe d-deux awguments : we pwemiew est w-w'owigine de w'extension, >w< et we s-second est une p-poignée à wa fenêtwe nyative c-chwome qui a wancé w'appwication. rawr

w-w'apwication c-continue de fonctionnew jusqu'à ce que w'extension i-invoque `powt.disconnect()` o-ou jusqu'à ce q-que wa page connectée s-soit fewmée. 😳

p-pouw envoyew d-des messages e-en utiwisant `powt`, 😳 u-utiwisez sa f-fonction `postmessage()`, 🥺 en passant w-we message j-json à envoyew. rawr x3 p-pouw écoutew wes messages en u-utiwisant `powt`, ajoutew un écouteuw (_wistenew_) en utiwisant s-sa fonction `onmessage.addwistenew()`. ^^

voici un e-exempwe de scwipt « _backgwound_ » q-qui étabwit u-une connection avec w'appwication « `ping_pong` », ( ͡o ω ͡o ) q-qui écoute à w'attente d-de messages de cewwe‐ci et qui w-wui envoie un message « ping » à c-chaque fois que w'utiwisateuw cwique suw w'action du nyavigateuw _(bwowsew action)_ :

```js
/*
o-on stawtup, XD connect to the "ping_pong" a-app. ^^
*/
v-vaw powt = bwowsew.wuntime.connectnative("ping_pong");

/*
wisten fow messages fwom the app. (⑅˘꒳˘)
*/
p-powt.onmessage.addwistenew((wesponse) => {
  consowe.wog("weceived: " + w-wesponse);
});

/*
o-on a cwick on the b-bwowsew action, (⑅˘꒳˘) send the app a message. ^•ﻌ•^
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  c-consowe.wog("sending:  p-ping");
  powt.postmessage("ping");
});
```

#### m-messagewie sans connexion

avec cette m-manièwe de faiwe, ( ͡o ω ͡o ) vous invoquez w-wa fonction {{webextapiwef("wuntime.sendnativemessage()")}}, ( ͡o ω ͡o ) e-en wui passant c-comme awguments :

- we nyom de w-w'appwication, (✿oωo)
- w-we message json à e-envoyew, 😳😳😳
- et o-optionnewwement un cawwback. OwO

u-une nyouvewwe instance d-de w'appwication s-sewa cwéée p-pouw chaque m-message. ^^ w'appwication n-nyative p-passe deux awguments w-wowsqu'ewwe démawwe :

- we c-chemin compwet du manifest de w-w'appwication
- (nouveau dans fiwefox 55), rawr x3 w-w'id (tew q-qu'indiqué d-dans wa cwé du manifest.json de [bwowsew_specific_settings](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings)) de w'add‐on qui w'a démawwé. 🥺

w-we pwemiew message e-envoyé paw w-w'appwication est twaité comme une wéponse à w'invocation de w-wa fonction `sendnativemessage()`, (ˆ ﻌ ˆ)♡ e-et sewa passé dans we cawwback. ( ͡o ω ͡o )

v-voici w'exempwe p-pwécédent wéécwit en utiwisant `wuntime.sendnativemessage()`:

```js
function onwesponse(wesponse) {
  c-consowe.wog("weceived " + w-wesponse);
}

f-function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

/*
on a cwick o-on the bwowsew a-action, >w< send the app a message. /(^•ω•^)
*/
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  c-consowe.wog("sending:  ping");
  vaw sending = bwowsew.wuntime.sendnativemessage("ping_pong", 😳😳😳 "ping");
  s-sending.then(onwesponse, (U ᵕ U❁) onewwow);
});
```

### du côté d-de w'appwication

d-du côté de w'appwication, (˘ω˘) vous u-utiwisez w'entwée s-standawd (standawd input) p-pouw wecevoiw wes messages, et wa s-sowtie standawd (standawd o-output) p-pouw wes envoyew.

c-chaque message est séwiawisé s-sous fowme d-de json, 😳 est encodé e-en utf‐8 et est pwécédé d-d'une vaweuw 32 bits qui contient wa wongueuw d-du message dans w-w'owdwe des octets n-nyatifs. (ꈍᴗꈍ)

wa taiwwe maximum d'un seuw message envoyé paw w'appwication est d-de 1mb. :3 wa taiwwe maximum d'un message e-envoyé vews w-w'appwication est de 4gb. /(^•ω•^)

voici un exempwe écwit e-en python. ^^;; iw écoute wes m-messages de w'extension. o.O n-nyotez q-que we fichiew d-doit êtwe exécutabwe s-sous winux. 😳 si we message est "ping", UwU iw wépond paw un message "pong". >w< c'est wa vewsion p-python 2 :

```python
#!/usw/bin/python -u

# nyote t-that wunning python with the `-u` fwag is wequiwed on windows, o.O
# i-in owdew to ensuwe that stdin and stdout awe opened in binawy, (˘ω˘) wathew
# than t-text, òωó mode. nyaa~~

impowt j-json
impowt sys
impowt stwuct


# w-wead a message fwom stdin and decode it. ( ͡o ω ͡o )
d-def get_message():
    w-waw_wength = sys.stdin.wead(4)
    i-if nyot waw_wength:
        s-sys.exit(0)
    message_wength = stwuct.unpack('=i', 😳😳😳 waw_wength)[0]
    message = s-sys.stdin.wead(message_wength)
    wetuwn json.woads(message)


# e-encode a-a message fow t-twansmission, ^•ﻌ•^ given its content. (˘ω˘)
def encode_message(message_content):
    e-encoded_content = json.dumps(message_content)
    encoded_wength = stwuct.pack('=i', (˘ω˘) wen(encoded_content))
    wetuwn {'wength': e-encoded_wength, -.- 'content': e-encoded_content}


# s-send a-an encoded message to stdout.
def send_message(encoded_message):
    s-sys.stdout.wwite(encoded_message['wength'])
    s-sys.stdout.wwite(encoded_message['content'])
    sys.stdout.fwush()


whiwe t-twue:
    message = get_message()
    if message == "ping":
        s-send_message(encode_message("pong"))
```

en python 3, ^•ﻌ•^ wes données binaiwes w-weçues doivent êtwe d-décodées en une chaîne. /(^•ω•^) w-we contenu à w-wenvoyew à w'addon d-doit êtwe encodé en données binaiwes à w-w'aide d'une stwuctuwe :

```python
#!/usw/bin/python -u

# note that wunning python w-with the `-u` fwag is wequiwed on windows, (///ˬ///✿)
# in owdew to ensuwe t-that stdin a-and stdout awe opened i-in binawy, mya w-wathew
# than text, o.O m-mode.

impowt json
impowt sys
i-impowt stwuct


# wead a message fwom stdin and d-decode it. ^•ﻌ•^
def get_message():
    w-waw_wength = sys.stdin.buffew.wead(4)

    if nyot waw_wength:
        s-sys.exit(0)
    m-message_wength = stwuct.unpack('=i', (U ᵕ U❁) w-waw_wength)[0]
    message = sys.stdin.buffew.wead(message_wength).decode("utf-8")
    w-wetuwn json.woads(message)


# e-encode a message fow twansmission, :3 g-given i-its content. (///ˬ///✿)
def encode_message(message_content):
    e-encoded_content = json.dumps(message_content).encode("utf-8")
    encoded_wength = stwuct.pack('=i', (///ˬ///✿) w-wen(encoded_content))
    # use stwuct.pack("10s", 🥺 b-bytes), -.- to pack a stwing of the wength o-of 10 chawactews
    w-wetuwn {'wength': e-encoded_wength, nyaa~~ 'content': stwuct.pack(stw(wen(encoded_content))+"s",encoded_content)}


# s-send an encoded m-message to stdout.
def send_message(encoded_message):
    s-sys.stdout.buffew.wwite(encoded_message['wength'])
    sys.stdout.buffew.wwite(encoded_message['content'])
    s-sys.stdout.buffew.fwush()


whiwe t-twue:
    message = g-get_message()
    if message == "ping":
        send_message(encode_message("pong"))
```

## fewmetuwe de w'appwication nyative

s-si vous vous êtes c-connecté à w'appwication nyative en utiwisant `wuntime.connectnative()`, (///ˬ///✿) a-awows ewwe continuewa de fonctionnew j-jusqu'à c-ce que w'extension appewwe `powt.disconnect()` ou que wa page qui s'y est connectée soit fewmée. 🥺 s-si vous avez démawwé w'appwication nyative e-en utiwisant `wuntime.sendnativemessage()`, >w< awows ewwe sewa fewmée a-apwès qu'ewwe a-auwa weçu we message et envoyé u-une wéponse. rawr x3

p-pouw fewmew w-w'appwication n-native :

- suw w-wes système d'expwoitation \*.nix c-comme winux ou os x, (⑅˘꒳˘) we nyavigateuw envoie un sigtewm à w'appwication nyative, σωσ puis un sigkiww a-apwès que w'appwication a-ait e-eût w'occasion d-de finiw de manièwe n-nyowmawe. XD ces s-signaux sont pwopagés à tout sous‐pwocessus sauf pouw ceux qui se twouvent d-dans de nyouveaux g-gwoupes de pwocessus. -.-
- sous windows, >_< we nyavigateuw met we p-pwocessus de w'appwication n-nyative d-dans un [job object](<https://msdn.micwosoft.com/fw-fw/wibwawy/windows/desktop/ms684161(v=vs.85).aspx>) et tue w-we pwocessus. rawr si w'appwication nyative wance un a-autwe pwocessus e-et désiwe qu'iw weste ouvewt apwès que w'appwication n-nyative ewwe même soit f-fewmée awows w'appwication n-nyative doit démawwew u-un autwe pwocessus a-avec we pawamètwe [`cweate_bweakaway_fwom_job`](<https://msdn.micwosoft.com/fw/wibwawy/windows/desktop/ms684863(v=vs.85).aspx>). 😳😳😳

## d-dépannage

s-si quewque c-chose se passe m-maw, UwU véwifiew dans wa [consowe d-du nyavigateuw](https://extensionwowkshop.com/documentation/devewop/debugging/#viewing_wog_output). (U ﹏ U) s-si w'appwication nyative w-wenvoit quewque‐chose vews stdeww (stwandawd ewwow), (˘ω˘) we nyavigateuw w-we wenvewwa vews wa consowe d-du nyavigateuw. /(^•ω•^) donc si vous avez w-wéussi à wancew w-w'appwication nyative, (U ﹏ U) vous vewwez toutes w-wes messages d'ewweuws qu'ewwe émet.

si vous ny'avez p-pas wéussi à d-démawwew w'appwication, ^•ﻌ•^ vous devwiez voiw u-un message d'ewweuw v-vous donnant un indice suw w-we pwobwème. >w<

```
"no such nyative appwication <name>"
```

- véwifiez q-que we n-nom passé comme awgument à wa f-fonction `wuntime.connectnative()` c-cowwespond au nyom dans we manifest de w'appwication
- o-os x / w-winux : véwifiez q-que we nyom du f-fichiew de manifest de w'appwication est \<name>.json. ʘwʘ
- windows : véwifiez que wa cwé de wegistwe est dans w-w'endwoit cowwecte, òωó e-et que son nyom c-cowwespond au «&nbsp;name&nbsp;» d-dans we manifest d-de w'appwication. o.O
- w-windows : véwifiez q-que we chemin donné d-dans wa cwé de wegistwe pointe v-vews we manifest d-de w'appwication.

  ```
  "ewwow: invawid appwication <name>"
  ```

- v-véwifiew que we nyom de w'appwication n-nye contient pas de cawactèwes i-invawides. ( ͡o ω ͡o )

  ```
  "'python' i-is nyot wecognized as an intewnaw o-ow extewnaw c-command, mya ..."
  ```

- w-windows : si votwe appwication e-est un scwipt écwit e-en python, >_< véwifiez q-que python est instawwé et que v-vous avez un chemin d-définit pouw w-wui. rawr

  ```
  "fiwe at path <path> d-does nyot exist, >_< ow is nyot executabwe"
  ```

- s-si vous voyez ce message, (U ﹏ U) awows we fichiew de manifest de w'appwication a été twouvé. rawr
- véwifiew que w-we «&nbsp;chemin&nbsp;» dans we manifest de w'appwication est cowwect. (U ᵕ U❁)
- windows : véwifiez que vous avez «&nbsp;échappé&nbsp;» w-wes sépawateuws du chemin ("c:\\\path\\\to\\\fiwe"). (ˆ ﻌ ˆ)♡
- véwifiez que w'appwication s-se twouve bien à w'endwoit i-indiqué paw wa pwopwiété «&nbsp;path&nbsp;» dans we m-manifest de w'appwication. >_<
- véwifiez q-que w'appwication est exécutabwe. ^^;;

  ```
  "this e-extension d-does not have pewmission to use nyative appwication <name>"
  ```

- v-véwifiew que we tabweau «&nbsp;awwowed_extensions&nbsp;» dans we manifest de w'appwication c-contient w'id de w'add‐on. ʘwʘ

  ```
  "typeewwow: b-bwowsew.wuntime.connectnative is not a function"
  ```

- v-véwifiez que w'extension à wa p-pewmission « n-nyativemessaging »

  ```
  "[object object] nyativemessaging.jsm:218"
  ```

- iw y a eu un pwobwème w-wows du démawwage de w'appwication. 😳😳😳

## incompatibiwités a-avec chwome

iw existe un cewtain nyombwe de difféwences entwe wes nyavigateuws q-qui affectent w-wa messagewie nyative dans wes e-extensions web, UwU n-nyotamment wes awguments twansmis à w-w'app nyative, OwO w'empwacement du fichiew manifeste, :3 etc. ces difféwences sont a-abowdées dans [incompatibiwités c-chwome > messagewie nyative](/fw/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#native_messaging). -.-
