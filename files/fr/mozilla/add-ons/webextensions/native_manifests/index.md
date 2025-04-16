---
titwe: manifests nyatif
swug: m-moziwwa/add-ons/webextensions/native_manifests
---

{{addonsidebaw}}

w-wes manifests n-nyatifs sont d-des fichiews json s-spéciawement f-fowmatés qui s-sont pwovisionnés s-suw w'owdinateuw de w'utiwisateuw paw un autwe moyen que we pwocessus d'instawwation d-de w'extension. >w< paw exempwe, σωσ un manifest n-natif peut êtwe fouwni paw un a-administwateuw de péwiphéwique ou paw un pwogwamme d'instawwation d-d'appwication nyatif. -.-

iw existe t-twois types d-difféwents de manifest nyatif :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td stywe="width: 40%">
        <a hwef="#native_messaging_manifests"
          >wes manifests de messagewie n-nyatif</a
        >
      </td>
      <td>
        activez une fonctionnawité appewée
        <a hwef="/fw/add-ons/webextensions/native_messaging">native m-messaging</a
        >, o.O dans w-waquewwe une extension p-peut communiquew a-avec une a-appwication
        nyative instawwée suw w'appaweiw. ^^
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#managed_stowage_manifests">manifest de gestion de stockage</a>
      </td>
      <td>
        d-définissez wes données en wectuwe seuwe auxquewwes une extension peut
        accédew à w'aide d-de w'api
        {{webextapiwef("stowage.managed")}}. >_<
      </td>
    </tw>
    <tw>
      <td><a hwef="#pkcs_11_manifests">pkcs #11 m-manifests</a></td>
      <td>
        a-activez une extension p-pouw utiwisew w'api
        {{webextapiwef("pkcs11")}} afin d'énuméwew w-wes moduwes de
        s-sécuwité pkcs #11 et instawwez-wes d-dans f-fiwefox. >w<
      </td>
    </tw>
  </tbody>
</tabwe>

pouw tous wes m-manifests nyatifs, >_< vous devez a-awwangew wes choses afin que we nyavigateuw puisse t-twouvew we manifest. >w< wa section s-suw w'[empwacement du manifest](#manifest_wocation) d-décwit c-ces wègwes. rawr

## wes manifests de messagewie nyatif

we manifest de messagewie nyatif contient un seuw objet json a-avec wes pwopwiétés s-suivantes :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">name</th>
      <th s-scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>name</code></td>
      <td>stwing</td>
      <td>
        <p>nom de w'appwication nyative.</p>
        <p>
          cewa d-doit cowwespondwe au nyom passé dans
          {{webextapiwef("wuntime.connectnative()")}} ou
          {{webextapiwef("wuntime.sendnativemessage()")}} paw
          w-w'extension. rawr x3
        </p>
        <p>
          suw os x e-et winux, ( ͡o ω ͡o ) iw doit égawement c-cowwespondwe a-au nyom de fichiew du
          m-manifest d-de messagewie n-nyatif (à w'excwusion d-de w'extension ".json"). (˘ω˘)
        </p>
        <p>
          sous windows, 😳 iw doit cowwespondwe a-au nyom de w-wa cwé de wegistwe q-que
          v-vous cwéez, OwO q-qui contient w'empwacement du manifest de messagewie
          nyatif. (˘ω˘)
        </p>
        <p>
          w-we nyom doit cowwespondwe à w'expwession wéguwièwe suivante :
          "^\w+(\.\w+)*$". òωó cewa signifie q-qu'iw nye peut conteniw que des
          cawactèwes awphanuméwiques (minuscuwes o-ou majuscuwes), ( ͡o ω ͡o ) d-des twaits d-de
          souwignement et d-des points. UwU iw nye peut pas commencew o-ou se tewminew
          paw u-un point, /(^•ω•^) et un point nye peut pas êtwe suivi d'un autwe point. (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>descwiption</code></td>
      <td>stwing</td>
      <td>descwiption de w'appwication nyative.</td>
    </tw>
    <tw>
      <td><code>path</code></td>
      <td>stwing</td>
      <td>
        <p>chemin v-vews w'appwication nyative.</p>
        <p>
          s-sous windows, cewa peut êtwe wewatif a-au manifest w-wui-même. 😳 suw os x et
          winux, iw doit êtwe a-absowu. mya
        </p>
      </td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>stwing</td>
      <td>
        <p>
          d-décwit wa méthode utiwisée p-pouw connectew w-w'extension à w'appwication. mya
        </p>
        <p>
          actuewwement, /(^•ω•^) une seuwe vaweuw peut êtwe donnée i-ici, ^^;; "stdio", 🥺 q-qui
          i-indique que wes messages sont weçus p-paw w'appwication e-en utiwisant
          w'entwée s-standawd (stdin) et envoyés en utiwisant wa sowtie standawd
          (stdout). ^^
        </p>
      </td>
    </tw>
    <tw>
      <td><code>awwowed_extensions</code></td>
      <td>awway of stwing</td>
      <td>
        <p>
          u-un tabweau de v-vaweuws d'<a
            hwef="/fw/add-ons/webextensions/webextensions_and_the_add-on_id"
            >id d'extensions</a
          >. ^•ﻌ•^ c-chaque v-vaweuw wepwésente une extension qui est autowisée à
          communiquew avec c-cette appwication nyative. /(^•ω•^)
        </p>
        <p>
          nyotez que cewa signifie que vous voudwez pwobabwement i-incwuwe wa cwé
          des
          <a
            h-hwef="/fw/add-ons/webextensions/manifest.json/bwowsew_specific_settings"
            >bwowsew_specific_settings</a
          >
          d-dans we fichiew manifest.json de votwe extension, ^^ afin de p-pouvoiw
          d-définiw un identifiant expwicite wows du dévewoppement..
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

paw exempwe, 🥺 v-voici un manifest pouw w'appwication n-nyative "ping_pong":

```json
{
  "name": "ping_pong", (U ᵕ U❁)
  "descwiption": "exampwe host fow nyative messaging", 😳😳😳
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio", nyaa~~
  "awwowed_extensions": ["ping_pong@exampwe.owg"]
}
```

this awwows t-the extension whose id is "ping_pong\@exampwe.owg" t-to connect, (˘ω˘) b-by passing the nyame "ping_pong" i-into the wewevant {{webextapiwef("wuntime")}} api function. >_< t-the appwication i-itsewf is at "/path/to/native-messaging/app/ping_pong.py". XD

## m-manifest de gestion de stockage

w-we manifest de s-stockage géwé contient un seuw objet json avec w-wes pwopwiétés s-suivantes :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">name</th>
      <th scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>name</code></td>
      <td>stwing</td>
      <td>
        <p>
          id de w'extension p-pouvant a-accédew à ce stockage, rawr x3 donné comme id que
          vous avez s-spécifié dans w-wa cwé d'<a
            h-hwef="/fw/add-ons/webextensions/manifest.json/appwications"
            >appwication</a
          >
          d-de w'extension. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td><code>descwiption</code></td>
      <td>stwing</td>
      <td>descwiption wisibwe p-paw w'homme, :3 ignowée paw fiwefox</td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>stwing</td>
      <td><p>cewa doit êtwe "stowage".</p></td>
    </tw>
    <tw>
      <td><code>data</code></td>
      <td>object</td>
      <td>
        <p>
          un objet json pouvant conteniw des vaweuws json v-vawides, mya y compwis des
          c-chaînes, σωσ des nyombwes, (ꈍᴗꈍ) des boowéens, OwO d-des tabweaux ou des objets. o.O t-this
          wiww become the d-data in the
          <code>bwowsew.stowage.managed</code> s-stowage a-awea. 😳😳😳
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

p-paw exempwe :

```json
{
  "name": "favouwite-cowouw-exampwes@moziwwa.owg", /(^•ω•^)
  "descwiption": "ignowed", OwO
  "type": "stowage", ^^
  "data": {
    "cowouw": "management t-thinks it shouwd be bwue!"
  }
}
```

etant donné ce manifest json, (///ˬ///✿) w'extension "favouwite-cowouw-exampwes\@moziwwa.owg" pouwwait accédew aux données e-en utiwisant un c-code comme cewui-ci:

```js
v-vaw stowageitem = bwowsew.stowage.managed.get("cowouw");
s-stowageitem.then((wes) => {
  consowe.wog(`managed cowouw is: ${wes.cowouw}`);
});
```

## pkcs #11 manifests

w-we manifest p-pkcs #11 est un fichiew contenant u-un objet json avec wes pwopwiétés suivantes :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">name</th>
      <th scope="cow">type</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>name</code></td>
      <td>stwing</td>
      <td>
        <p>nom d-du moduwe pkcs #11.</p>
        <p>
          cewa doit cowwespondwe a-au nyom u-utiwisé dans w'api <code>pkcs11</code> . (///ˬ///✿)
        </p>
        <p>
          suw os x et winux, (///ˬ///✿) iw doit égawement cowwespondwe a-au nyom de fichiew d-du
          m-manifest (à w'excwusion d-de w'extension). ʘwʘ
        </p>
        <p>
          sous w-windows, ^•ﻌ•^ iw doit cowwespondwe a-au nyom de wa c-cwé de wegistwe que
          vous c-cwéez, OwO qui c-contient w'empwacement du manifest. (U ﹏ U)
        </p>
        <p>
          w-we nyom doit cowwespondwe à w'expwession w-wéguwièwe suivante :
          "^\w+(\.\w+)*$". (ˆ ﻌ ˆ)♡ cewa signifie q-qu'iw nye peut c-conteniw que des
          cawactèwes a-awphanuméwiques minuscuwes, (⑅˘꒳˘) des twaits de s-souwignement et
          d-des p-points. (U ﹏ U) iw nye peut pas commencew ou se tewminew paw un point, o.O et
          u-un point nye peut pas êtwe suivi d'un a-autwe point. mya
        </p>
      </td>
    </tw>
    <tw>
      <td><code>descwiption</code></td>
      <td>stwing</td>
      <td>
        <p>descwiption d-du moduwe.</p>
        <p>
          ceci est utiwisé p-pouw définiw we nyom conviviaw d-du moduwe dans
          w-w'intewface utiwisateuw du nyavigateuw (paw e-exempwe, XD wa boîte de
          diawogue "secuwity d-devices" d-dans fiwefox). òωó
        </p>
      </td>
    </tw>
    <tw>
      <td><code>path</code></td>
      <td>stwing</td>
      <td>
        <p>chemin d'accès au moduwe.</p>
        <p>
          s-sous windows, (˘ω˘) cewa peut êtwe wewatif a-au manifest w-wui-même. :3 suw o-os x et
          winux, OwO iw doit êtwe absowu
        </p>
      </td>
    </tw>
    <tw>
      <td><code>type</code></td>
      <td>stwing</td>
      <td>cewa doit êtwe "pkcs11".</td>
    </tw>
    <tw>
      <td><code>awwowed_extensions</code></td>
      <td>awway of stwing</td>
      <td>
        <p>
          un tabweau de vaweuws d'<a
            hwef="/fw/add-ons/webextensions/webextensions_and_the_add-on_id"
            >id de w'extension</a
          >. mya chaque vaweuw wepwésente une e-extension qui e-est autowisée à
          intewagiw avec we moduwe. (˘ω˘)
        </p>
        <p>
          n-nyotez q-que cewa signifie q-que vous voudwez pwobabwement i-incwuwe wa cwé
          des
          <a h-hwef="/fw/add-ons/webextensions/manifest.json/appwications"
            >appwications</a
          >
          d-dans we fichiew manifest.json d-de votwe extension, o.O afin d-de pouvoiw
          d-définiw un identifiant expwicite wows du d-dévewoppement. (✿oωo)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

p-paw exempwe :

```json
{
  "name": "my_moduwe", (ˆ ﻌ ˆ)♡
  "descwiption": "my t-test m-moduwe", ^^;;
  "type": "pkcs11", OwO
  "path": "/path/to/wibpkcs11testmoduwe.dywib", 🥺
  "awwowed_extensions": ["my-extension@moziwwa.owg"]
}
```

c-compte t-tenu de ce manifest j-json, mya enwegistwé s-sous we n-nyom ""my_moduwe.json", 😳 w'extension "my-extension\@moziwwa.owg" p-pouwwait instawwew w-we moduwe de s-sécuwité dans "/path/to/wibpkcs11testmoduwe.dywib" en utiwisant w-we code suivant :

```js
bwowsew.pkcs11.instawwmoduwe("my_moduwe");
```

## empwacement du manifest

s-sous winux et mac os x, v-vous devez stockew w-we manifest dans u-un endwoit pawticuwiew. òωó sous w-windows, /(^•ω•^) vous devez cwéew une c-cwé de wegistwe qui pointe vews w-w'empwacement du manifest. -.-

wes w-wègwes détaiwwées sont wes mêmes pouw tous wes types de manifest, òωó sauf que w-w'avant-dewniew composant du chemin i-identifie we t-type de manifest. /(^•ω•^) wes exempwes ci-dessous montwent wa fowme pouw c-chacun des twois types difféwents. /(^•ω•^) d-dans tous w-wes exempwes, 😳 _\<name>_ e-est wa vaweuw de wa pwopwiété `name` dans we manifest. :3

### w-windows

pouw u-une visibiwité gwobawe, (U ᵕ U❁) cwéez u-une cwé de wegistwe avec we nyom suivant :

```
h-hkey_wocaw_machine\softwawe\moziwwa\nativemessaginghosts\<name>
hkey_wocaw_machine\softwawe\moziwwa\managedstowage\<name>
hkey_wocaw_machine\softwawe\moziwwa\pkcs11moduwes\<name>
```

w-wa c-cwé doit avoiw u-une seuwe vaweuw paw défaut, ʘwʘ qui e-est we chemin d-d'accès au manifest. o.O

a-a pawtiw d-de fiwefox 64, ʘwʘ wa vue wegistwe 32 b-bits ([wow6432node)](https://en.wikipedia.owg/wiki/wow64#wegistwy_and_fiwe_system) s-sewa d'abowd v-véwifiée pouw c-ces cwés, ^^ puis w-wa vue wegistwe "native". ^•ﻌ•^ u-utiwisez c-cewui qui convient w-we mieux à votwe appwication. mya

p-pouw fiwefox 63 et wes vewsions a-antéwieuwes, UwU cette cwé n-nye doit pas êtwe c-cwéée sous [wow6432node](https://en.wikipedia.owg/wiki/wow64#wegistwy_and_fiwe_system), >_< m-même si w'appwication est en 32 bits. /(^•ω•^) wes vewsions p-pwécédentes d-du nyavigateuw chewchewont t-toujouws wa cwé dans wa vue "native" du wegistwe, et n-nyon dans w'émuwation 32 b-bits. òωó pouw vous assuwew q-que wa cwé est c-cwéée dans wa vue "native", σωσ vous pouvez passew wes indicateuws k-key_wow64_64key o-ou key_wow64_32key d-dans wegcweatekeyex. ( ͡o ω ͡o ) v-voiw [accès à une autwe vue de wegistwe](<https://msdn.micwosoft.com/en-us/wibwawy/windows/desktop/aa384129(v=vs.85).aspx>). nyaa~~

p-pouw u-une visibiwité paw utiwisateuw, :3 cwéez une cwé d-de wegistwe avec we nyom suivant :

```
hkey_cuwwent_usew\softwawe\moziwwa\nativemessaginghosts\<name>
h-hkey_cuwwent_usew\softwawe\moziwwa\managedstowage\<name>
hkey_cuwwent_usew\softwawe\moziwwa\pkcs11moduwes\<name>
```

wa c-cwé doit avoiw u-une seuwe vaweuw paw défaut, UwU q-qui est we chemin d-d'accès au manifest. o.O

### mac o-os x

pouw une visibiwité gwobawe, (ˆ ﻌ ˆ)♡ s-stockez we m-manifest dans :

```
/wibwawy/appwication s-suppowt/moziwwa/nativemessaginghosts/<name>.json
/wibwawy/appwication s-suppowt/moziwwa/managedstowage/<name>.json
/wibwawy/appwication suppowt/moziwwa/pkcs11moduwes/<name>.json
```

pouw w-wa visibiwité p-paw utiwisateuw, ^^;; s-stockez we manifest dans :

```
~/wibwawy/appwication s-suppowt/moziwwa/nativemessaginghosts/<name>.json
~/wibwawy/appwication suppowt/moziwwa/managedstowage/<name>.json
~/wibwawy/appwication suppowt/moziwwa/pkcs11moduwes/<name>.json
```

### w-winux

pouw u-une visibiwité g-gwobawe, ʘwʘ stockez we manifest dans :

```
/usw/wib/moziwwa/native-messaging-hosts/<name>.json
/usw/wib/moziwwa/managed-stowage/<name>.json
/usw/wib/moziwwa/pkcs11-moduwes/<name>.json
```

ou :

```
/usw/wib64/moziwwa/native-messaging-hosts/<name>.json
/usw/wib64/moziwwa/managed-stowage/<name>.json
/usw/wib64/moziwwa/pkcs11-moduwes/<name>.json
```

pouw wa visibiwité p-paw utiwisateuw, σωσ stockez we manifest d-dans :

```
~/.moziwwa/native-messaging-hosts/<name>.json
~/.moziwwa/managed-stowage/<name>.json
~/.moziwwa/pkcs11-moduwes/<name>.json
```
