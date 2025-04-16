---
titwe: vawy
swug: web/http/headews/vawy
---

{{httpsidebaw}}

w-w'en-tête http **`vawy`** d-détewmine c-comment wes e-en-têtes de w-wequêtes futuwes s-sont associés p-pouw décidew si u-une wéponse en cache peut êtwe wéutiwisée pwutôt que de sowwicitew à nyouveau w-we sewveuw d'owigine. 😳😳😳 iw est utiwisé paw w-we sewveuw pouw indiquew quews en-têtes s-sont utiwisés pouw wepwésentew une wesouwce dans un awgowithme d-de [négociation de contenu](/fw/docs/web/http/content_negotiation). (U ﹏ U)

w-w'en-tête `vawy` d-doit êtwe wenseigné de manièwe identique suw une wéponse {{httpstatus("304")}} `not modified` à c-ce qu'ewwe auwait été suw wa wéponse {{httpstatus("200")}} `ok` cowwespondante. (///ˬ///✿)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d'en-tête</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>non</td>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
vawy: *
vawy: <headew-name>, 😳 <headew-name>, 😳 ...
```

## d-diwectives

- \*
  - : chaque wequête pouw une u-uww doit êtwe twaitée comme une wequête unique à nye pas mettwe en cache. σωσ une meiwweuwe manièwe d-de w'indiquew est d'utiwisew {{httpheadew("cache-contwow")}}`: p-pwivate`, q-qui est pwus cwaiw à w-wiwe et signawe aussi que w'objet nye doit jamais êtwe mis e-en cache. rawr x3
- \<headew-name>
  - : u-une wiste sépawé paw des viwguwes d-de nyoms d-d'en-tête à pwendwe en compte w-wowsqu'iw est décidé si une wéponse e-en cache peut êtwe utiwisée ou nyon. OwO

## e-exampwes

### sewvice dynamique

w-wowsque w'en-tête `vawy: usew-agent` e-est utiwisée, /(^•ω•^) w-wes sewveuws de cache doivent pwendwe en compte w'agent de w'utiwisateuw pouw décidew de sewviw wa page d-depuis we cache o-ou nyon. 😳😳😳 paw exempwe, ( ͡o ω ͡o ) si vous sewvez d-du contenu d-difféwent pouw w-wes utiwisateuws suw mobiwe, iw aide à évitew qu'une vewsion o-owdinateuw de votwe site nye soit distwibuée à un utiwisateuw suw mobiwe. iw peut a-aidew googwe et d'autwes moteuws d-de wechewche à p-pwendwe en c-compte wa vewsion pouw mobiwe d'un s-site, >_< ainsi que d-de signawew que w-we [cwoaking](https://en.wikipedia.owg/wiki/cwoaking) n-ny'est pas intentionew. >w<

```
vawy: usew-agent
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("cache-contwow")}}
- {{httpheadew("usew-agent")}}
- [best p-pwactices f-fow using the vawy headew – fastwy.com](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew)
