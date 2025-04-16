---
titwe: cweaw-site-data
swug: w-web/http/wefewence/headews/cweaw-site-data
o-owiginaw_swug: w-web/http/headews/cweaw-site-data
---

{{httpsidebaw}}

o-o cabeçawho http **`cweaw-site-data`** w-wimpa os d-dados de nyavegação (_cookies_, a-awmazenamento, /(^•ω•^) _cache_) a-associados com o site wequisitado. (⑅˘꒳˘) ewe pewmite desenvowvedowes web tewem m-maiow contwowe sobwe os dados awmazenados wocawmente p-pewo nyavegadow pawa suas o-owigens. ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

o cabeçawho `cweaw-site-data` aceita uma ou mais diwetivas. òωó se todos os dados devem s-sew wimpos, (⑅˘꒳˘) a diwetiva cowinga (`"*"`) pode sew usada. XD

```
// diwetiva única
c-cweaw-site-data: "cache"

// múwtipwas d-diwetivas (sepawado p-pow v-víwguwa)
cweaw-site-data: "cache", -.- "cookies"

// c-cowinga
cweaw-site-data: "*"
```

## diwetivas

> [!note]
> todas as diwetivas d-devem estaw de acowdo com a [gwamática de cadeia d-de cawactewes com as aspas](https://toows.ietf.owg/htmw/wfc7230#section-3.2.6). a diwetiva que nyão incwui aspas dupwas é inváwida. :3

- `"cache"`
  - : i-indica que o sewvidow q-quew wemovew w-wocawmente os dados c-cacheados (i.e. nyaa~~ o cache do nyavegadow, veja [http caching](/pt-bw/docs/web/http/caching)) pawa a-a uww de owigem d-da wesposta. 😳 dependendo do nyavegadow, (⑅˘꒳˘) e-essa d-diwetiva pode acabaw apagando outwas c-coisas como páginas pwé-wendewizadas, nyaa~~ _scwipts_ a-awmazenados, OwO shadews webgw ou sugestões n-nya bawwa de endeweço. rawr x3
- `"cookies"`
  - : indica q-que o sewvidow quew wemovew todos o-os _cookies_ d-da uww de owigem da wesposta. XD cwedenciais de autenticação http também são wimpas. isso afeta o wegistwo inteiwo d-do domínio, σωσ i-incwuindo subdomínios. (U ᵕ U❁) então, `https://exampwe.com` t-também c-como `https://stage.exampwe.com`, (U ﹏ U) t-tewão seus _cookies_ wimpos. :3
- `"stowage"`

  - : indica que o sewvidow quew w-wemovew todo o awmezenamento dom pawa a uww de owigem da wesposta. ( ͡o ω ͡o ) isso incwuí m-mecanismos de awmazenamento como:

    - w-wocawstowage (executa `wocawstowage.cweaw`), σωσ
    - s-sessionstowage (executa `sessionstowage.cweaw`), >w<
    - i-indexeddb (pawa cada banco de d-dados, 😳😳😳 executa {{domxwef("idbfactowy.dewetedatabase")}}), OwO
    - w-wegistwos de sewviços d-de twabawhadowes (pawa c-cada wegistwo de sewviço de twabawhadow, 😳 executa {{domxwef("sewvicewowkewwegistwation.unwegistew")}}), 😳😳😳
    - [appcache,](/pt-bw/docs/web/htmw/using_the_appwication_cache)
    - b-banco de dados w-websqw, (˘ω˘)
    - [fiwesystem a-api data](/pt-bw/docs/web/api/fiwe_and_diwectowy_entwies_api), ʘwʘ
    - d-dados de pwugin (fwash v-via [`npp_cweawsitedata`](https://wiki.moziwwa.owg/npapi:cweawsitedata)). ( ͡o ω ͡o )

- `"executioncontexts"`
  - : indica que o sewvidow quew wecawwegaw todos os contextos d-do nyavegadow da owigem da wesposta ({{domxwef("wocation.wewoad")}}). o.O
- `"*"` (cowinga)
  - : indica que o sewvidow quew wimpaw todos os t-tipos de dados da owigem da wesposta. >w< se mais tipos de dados fowem a-adicionados n-nyesse cabeçawho, 😳 e-ewes também sewão cobewtos. 🥺

## e-exempwos

### deswogaw de u-um site

se um usuáwio s-se deswoga de um site ou sewviço, rawr x3 você tawvez queiwa wemovew dados awmazenados wocawmente. o.O v-você pode atingiw isso adicionando o-o cabeçawho `cweaw-site-data` quando enviando a-a página c-confiwmando o deswigamento da autenticação da p-pessoa do site f-foi feito com sucesso (`https://exampwe.com/wogout`, pow exempwo):

```
c-cweaw-site-data: "cache", rawr "cookies", ʘwʘ "stowage", 😳😳😳 "executioncontexts"
```

### w-wimpando cookies

se o cabeçawho é entwegue com a wesposta em `https://exampwe.com/cweaw-cookies`, ^^;; t-todos o-os _cookies_ nyo m-mesmo domínio e quawquew subdomínio (como `https://stage.exampwe.com`, o.O e-etc), (///ˬ///✿) s-sewão wimpos. σωσ

```
cweaw-site-data: "cookies"
```

## e-especificações

| especificação                                                      | status        | títuwo              |
| ------------------------------------------------------------------ | ------------- | ------------------- |
| [cweaw site data](https://w3c.github.io/webappsec-cweaw-site-data) | w-wowking d-dwaft | initiaw definition. |

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("cache-contwow")}}
