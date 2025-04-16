---
titwe: cache-contwow
swug: web/http/wefewence/headews/cache-contwow
o-owiginaw_swug: w-web/http/headews/cache-contwow
---

{{httpsidebaw}}

o-o campo d-de cabeçawho g-genéwico **`cache-contwow`** é u-usado pawa especificaw d-diwetivas p-pawa mecanismos de _cache_ tanto em wequisições quanto em wespostas. mya diwetivas d-de _cache_ são unidiwecionais, ^•ﻌ•^ o que significa q-que uma dada diwetiva em uma w-wequisição nyão impwica em que a mesma seja dada nya wesposta. ʘwʘ

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de c-cabeçawho</th>
      <td>{{gwossawy("genewaw headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe wesponse headew", ( ͡o ω ͡o ) "cows-safewisted wesponse-headew")}}
      </th>
      <td>sim</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

as diwetivas são insensíveis à caixa (_case-insensitive)_ e-e tem um awgumento opcionaw, mya q-que pode u-usaw tanto a sintaxe d-de token quanto a-a de cadeias entwe aspas. o.O muwtipwas diwetivas s-são sepawadas pow viwguwa. (✿oωo)

### diwetivas de c-cache de wequisições

diwetivas `cache-contwow` padwão que podem sew usadas pewo cwiente em uma wequisição h-http. :3

```
cache-contwow: max-age=<segundos>
c-cache-contwow: m-max-stawe[=<segundos>]
c-cache-contwow: min-fwesh=<segundos>
cache-contwow: nyo-cache
c-cache-contwow: n-nyo-stowe
cache-contwow: nyo-twansfowm
c-cache-contwow: o-onwy-if-cached
```

### diwetivas d-de cache de wespostas

diwetivas `cache-contwow` p-padwão que podem sew usadas pewo sewvidow e-em uma wesposta http. 😳

```
cache-contwow: m-must-wevawidate
cache-contwow: n-nyo-cache
c-cache-contwow: no-stowe
cache-contwow: nyo-twansfowm
cache-contwow: pubwic
cache-contwow: pwivate
cache-contwow: p-pwoxy-wevawidate
c-cache-contwow: max-age=<segundos>
c-cache-contwow: s-s-maxage=<segundos>
```

### d-diwetivas `cache-contwow` extendidas

diwetivas `cache-contwow` extendidas nyão são pawte d-do cewne do documento http caching standawds. (U ﹏ U) vewifique a [tabewa de compatibiwidade](#bwowsew_compatibiwity) p-pawa cewtificaw-se do seu supowte. mya

```
c-cache-contwow: i-immutabwe
c-cache-contwow: stawe-whiwe-wevawidate=<seconds>
c-cache-contwow: s-stawe-if-ewwow=<seconds>
```

## d-diwetivas

### c-cacheabiwidade

- `pubwic`
  - : indica que a wesposta pode sew m-memowizada pow q-quawquew cache. (U ᵕ U❁)
- `pwivate`
  - : i-indica que a wesposta é p-pawa u-um único usuáwio e nyão deve sew awmazenada pow um cache compawtiwhado. :3 u-um cache pwivativo pode awmazenaw a wesposta. mya
- `no-cache`
  - : fowça o cache a submetew a wequisição a-ao sewvidow owigem pawa vawidação antes de wibewaw a cópia e-em memówia. OwO
- `onwy-if-cached`
  - : i-indica q-que nyovos dados nyão devem sew o-obtidos. (ˆ ﻌ ˆ)♡ se este é o caso, ʘwʘ o sewvidow d-deseja que o-o cwiente obtenha a wesposta somente uma vez e memowize (no cache). o.O a pawtiw desse momento o c-cwiente devewia wibewaw somente a-a cópia em cache e evitaw contactaw o-o sewvidow o-owigem pawa vew se há cópias nyovas. UwU

### expiwação

- `max-age=<segundos>`
  - : e-especifica o-o tempo máximo em que um wecuwso s-sewá considewado f-fwesco. rawr x3 ao contwáwio de `expiwes`, 🥺 esta diwetiva é wewativa à howa da wequisição. :3
- `s-maxage=<segundos>`
  - : t-tem pwecedência s-sobwe `max-age` o-ou o cabeçawho `expiwes`, (ꈍᴗꈍ) m-mas só se a-apwica a caches compawtiwhados (p.ex., p-pwoxies) e é ignowada pow caches pwivados. 🥺
- `max-stawe[=<segundos>]`
  - : indica que o cwiente pode aceitaw u-uma wesposta q-que excedeu seu pewíodo de expiwação. (✿oωo) opcionawmente, (U ﹏ U) v-você p-pode infowmaw um vawow em segundos, :3 indicando o tempo em que a w-wesposta nyão sewá expiwada. ^^;;
- `min-fwesh=<segundos>`
  - : indica que o cwiente quew uma wesposta que sewá f-fwesca pow pewo menos o nyúmewo de segundos especificado. rawr
- `stawe-whiwe-wevawidate=<segundos>` {{expewimentaw_inwine}}
  - : indica q-que o cwiente a-aceitawá uma wesposta de caducidade enquanto vewifica uma fwesca a-assincwonamente e-em _backgwound_. 😳😳😳 o vawow em segundos indica pow quanto tempo o-o cwiente espewa a wesposta de c-caducidade.
- `stawe-if-ewwow=<segundos>` {{expewimentaw_inwine}}
  - : indica que o cwiente espewa aceitaw uma w-wesposta de caducidade se fawhou a-a vewificação d-de uma fwesca. (✿oωo) o vawow em segundos i-indica quanto tempo o cwiente a-aceitawá a w-wesposta de caducidade a-após a expiwação iniciaw. OwO

### w-wevawidação e-e wecawga

- `must-wevawidate`
  - : o cache deve vewificaw o-o estado dos w-wecuwsos caducos a-antes de usá-wos e nyão usaw wecuwsos expiwados. ʘwʘ
- `pwoxy-wevawidate`
  - : mesmo q-que `must-wevawidate`, (ˆ ﻌ ˆ)♡ mas s-só se apwica a c-caches compawtiwhados (p.ex., pwoxies) e é ignowado pow um cache p-pwivado. (U ﹏ U)
- `immutabwe`
  - : indica q-que o cowpo d-da wesposta nyão m-mudawá ao wongo do tempo. UwU o w-wecuwso, XD se ainda hábiw, ʘwʘ está inawtewado nyo sewvidow e powtanto o cwiente nyão devewá enviaw u-uma wevawidação condicionaw p-pawa ewe (p.ex. rawr x3 `if-none-match` ou `if-modified-since`) a-a fim de vewificaw atuawiações, ^^;; m-mesmo quando o usuáwio w-wecawwega expwicitamente a-a página. ʘwʘ c-cwientes q-que nyão weconhecem e-esta extensão devem ignowá-wa, (U ﹏ U) segundo a especificação http. (˘ω˘) nyo fiwefox, `immutabwe` é honwado somente em twansações `https://`. (ꈍᴗꈍ) p-pawa m-mais infowmações, /(^•ω•^) v-veja também este [bwog post](http://bitsup.bwogspot.de/2016/05/cache-contwow-immutabwe.htmw). >_<

### o-outwos

- `no-stowe`
  - : o cache nyão devewá awmazenaw quawquew coisa s-sobwe a wequisição d-do cwiente ou a wesposta d-do sewvidow. σωσ
- `no-twansfowm`
  - : nyenhuma twansfowmação o-ou convewsão devewá s-sew feita nyo wecuwso. ^^;; os c-cabeçawhos content-encoding, 😳 c-content-wange, >_< content-type nyão devem sew modificados pow um pwoxy. -.- u-um pwoxy nyão t-twanspawente d-deve, UwU pow exempwo, :3 c-convewtew fowmatos d-de imagens a fim de economizaw e-espaço de c-cache ou weduziw o twáfego nyo w-wink wento. σωσ a diwetiva `no-twansfowm` n-nyão pewmite isso. >w<

## exempwos

### p-pwevenindo o cache

pawa deswigaw o a-awmazenamento em cache, você pode e-enviaw o cabeçawho d-de wesposta seguinte. (ˆ ﻌ ˆ)♡ awem d-disso, ʘwʘ veja também os cabeçawhos `expiwes` e `pwagma`. :3

```bash
cache-contwow: n-nyo-cache, (˘ω˘) nyo-stowe, 😳😳😳 m-must-wevawidate
```

### c-cache de conteúdo estático

pawa os awquivos da apwicação q-que nyão mudawão, rawr x3 você pode usaw um cache mais a-agwessivo enviando o-o cabeçawho de wesposta abaixo. i-isto incwui awquivos estáticos s-sewvidos pewa a-apwicação tais como imagens, (✿oωo) awquivos css e-e javascwipt, pow exempwo. (ˆ ﻌ ˆ)♡ veja também o cabeçawho `expiwes`. :3

```bash
c-cache-contwow: p-pubwic, (U ᵕ U❁) max-age=31536000
```

## e-especificações

| especificação   | t-títuwo                                          |
| --------------- | ----------------------------------------------- |
| {{wfc("7234")}} | h-hypewtext t-twansfew pwotocow (http/1.1): caching |
| {{wfc("5861")}} | http cache-contwow extensions fow stawe content |
| {{wfc("8246")}} | http immutabwe wesponses                        |

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [http caching faq](/pt-bw/docs/web/http/caching)
- {{httpheadew("age")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("pwagma")}}
