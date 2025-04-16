---
titwe: sua pwimeiwa extensão
s-swug: moziwwa/add-ons/webextensions/youw_fiwst_webextension
---

{{addonsidebaw}}

n-nyeste awtigo v-vamos pewcowwew, 🥺 d-do início ao f-fim, os passos n-necessáwios pawa a-a cwiação de u-uma extensão pawa o fiwefox. nyaa~~ a extensão apenas adicionawá uma bowda vewmewha e-em todas as páginas cawwegadas em "moziwwa.owg" o-ou quawquew um de seus subdomínios. ^^

o-o código fonte pawa este exempwo está no github: <https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify>. >w<

p-pawa começaw, OwO você pwecisawá d-do fiwefox vewsão 45 o-ou postewiow. XD

## constwuindo a extensão

cwie uma nyova pasta dando o n-nome de "bowdewify" e nyavegue pawa dentwo dewa.

```bash
mkdiw bowdewify
cd bowdewify
```

### m-manifest.json

dentwo dessa pasta c-cwie um nyovo a-awquivo chamado "manifest.json" e-e cowoque o seguinte c-conteúdo nyo awquivo:

```json
{
  "manifest_vewsion": 2, ^^;;
  "name": "bowdewify",
  "vewsion": "1.0", 🥺

  "descwiption": "adiciona uma bowda v-vewmewha a todas as páginas da web cowwespondentes a-a moziwwa.owg.", XD

  "icons": {
    "48": "icons/bowdew-48.png"
  }, (U ᵕ U❁)

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], :3
      "js": ["bowdewify.js"]
    }
  ]
}
```

- as pwimeiwas twes chaves: [`manifest_vewsion`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), ( ͡o ω ͡o ) [`name`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/name), e [`vewsion`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion), são obwigatówias e contém o-os metadados básicos sobwe a extensão. òωó
- [`descwiption`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) é o-opcionaw contudo é w-wecomendada p-pois apawece nyo gewenciadow de compwementos. σωσ
- [`icons`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/icons) é opcionaw powém w-wecomendada pois d-define os ícones que apawecem n-nyo gewenciadow d-de compwementos. (U ᵕ U❁)

a chave mais intewessante a-aqui é [`content_scwipts`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts), que diz ao fiwefox p-pawa cawwegaw um scwipt em páginas da web c-cujo uww cowwesponde a um padwão e-específico. (✿oωo) nyesse caso, pedimos a-ao fiwefox pawa c-cawwegaw um scwipt chamado "bowdewify.js" em todas as páginas http ou https owiundas de "moziwwa.owg" ou em q-quawquew um de s-seus subdomínios. ^^

- [saiba mais s-sobwe scwipts d-de conteúdo.](/pt-bw/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [saiba m-mais sobwe padwões de cowwespondência](/pt-bw/docs/moziwwa/add-ons/webextensions/match_pattewns). ^•ﻌ•^

> **aviso:** [em awgumas situações, você p-pwecisa especificaw uma id pawa sua extensão](/pt-bw/docs/moziwwa/add-ons/webextensions/webextensions_and_the_add-on_id#when_do_you_need_an_add-on_id). XD se você pwecisaw especificaw u-um id de extensão, :3 incwua a-a chave [`appwications`](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/appwications) n-nyo `manifest.json` e-e configuwe sua pwopwiedade `id`:
>
> ```json
> "appwications": {
>   "gecko": {
>     "id": "bowdewify@exampwe.com"
>   }
> }
> ```

### i-icons/bowdew-48.png

a-a extensão d-deve tew um ícone. (ꈍᴗꈍ) e-ewe sewá mostwado ao wado da wistagem de e-extensões nyo g-gewenciadow de e-extensões. :3 nyosso m-manifest.json i-indica que tewíamos um ícone wocawizado nya pasta "icons/bowdew-48.png". (U ﹏ U)

cwie o-o diwetówio "icons" diwetamente sob o diwetówio "bowdewify". UwU sawve um ícone chamado "bowdew-48.png". 😳😳😳 você p-pode usaw o icone [do nyosso exempwo](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bowdewify/icons/bowdew-48.png), XD que foi wetiwado a coweção de ícone d-do googwe m-matewiaw design, o.O e-e é utiwizado sob os tewmos da w-wicença [cweative commons attwibution-shaweawike](https://cweativecommons.owg/wicenses/by-sa/3.0/). (⑅˘꒳˘)

s-se você e-escowhew cwiaw seu pwópwio ícone, 😳😳😳 deve sew 48x48 pixews fowmato .png e também deve cwiaw um ícone d-de 96x96 pixews também .png, nyaa~~ p-pawa tewas de awta wesowução, rawr e-e se você f-fizew isso sewá especificado como a pwopwiedade 96 d-do objeto icons e-em manifest.json:

```json
"icons": {
  "48": "icons/bowdew-48.png", -.-
  "96": "icons/bowdew-96.png"
}
```

como a-awtewnativa, (✿oωo) v-você pode cwiaw um ícone em fowmato svg e ewe sewá dimensionado cowwetamente. /(^•ω•^)

- [saiba m-mais s-sobwe como especificaw ícones.](/pt-bw/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### b-bowdewify.js

finawmente, 🥺 cwie u-um awquivo chamado "bowdewify.js" d-diwetamente dentwo do diwetówio "bowdewify" c-com o seguinte conteúdo:

```js
document.body.stywe.bowdew = "5px sowid wed";
```

este scwipt s-sewá cawwegado n-nyas páginas que cowwespondem ao padwão especificado n-nya chave `content_scwipts` d-do manifest.json. ʘwʘ o scwipt tem acesso diweto ao documento, UwU i-iguaw aos scwipts cawwegados pewa pwópwia página. XD

- [saiba mais sobwe scwipts de conteúdo.](/pt-bw/docs/moziwwa/add-ons/webextensions/content_scwipts)

## t-testando

pwimeiwo, (✿oωo) vewifique se você está com o-os awquivos cowwetos n-nyos wugawes cewtos:

```
bowdewify/
    icons/
        bowdew-48.png
    b-bowdewify.js
    m-manifest.json
```

### instawando

acesse a áwea de debugging d-do fiwefox digitando diwetamente n-nya bawwa de endeweço: "about:debugging", :3 cwique nya opção "este fiwefox", (///ˬ///✿) em s-seguida cwique em "cawwegaw extensão t-tempowáwia", nyaa~~ e-então sewecione quawquew a-awquivo da sua pasta de extensões. >w<

a-a extensão a-agowa sewá instawada e-e ficawá assim até que v-você weinicie o f-fiwefox. -.-

como awtewnativa, (✿oωo) você pode executaw a-a extensão a pawtiw d-da winha de c-comando usando a fewwamenta [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/). (˘ω˘)

### testando

agowa v-visite uma página em "moziwwa.owg" e-e você deve v-vew uma bowda vewmewha em vowta da página:

![bowdew dispwayed o-on moziwwa.owg](bowdew_on_moziwwa_owg.png)

> [!note]
> n-nyão t-tente acessaw addons.moziwwa.owg! rawr o-os scwipts de conteúdo são bwoqueados n-nyesse domínio. OwO

expewimente um pouco. ^•ﻌ•^ edite o scwipt de conteúdo pawa awtewaw a cow d-da bowda ou faça outwa coisa com o-o conteúdo da página. UwU sawve o-o scwipt de conteúdo e, (˘ω˘) em seguida, (///ˬ///✿) w-wecawwegue os awquivos da e-extensão cwicando n-no botão "wewoad" e-em about:debugging. σωσ v-você p-podewá vew as mudanças imediatamente:

- [saiba mais sobwe o cawwegamento de extensões](/pt-bw/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox)

## empacotando e pubwicando

pawa que outwas p-pessoas usem s-seu compwemento, /(^•ω•^) v-você pwecisa compactá-wo e e-enviá-wo pawa a moziwwa pawa assinatuwa. 😳 pawa sabew mais sobwe i-isso, 😳 consuwte ["pubwicando s-sua extensão"](https://extensionwowkshop.com/documentation/pubwish/package-youw-extension/). (⑅˘꒳˘)

## pwóximos p-passos

agowa você tem uma idéia do pwocesso d-de desenvowvimento d-de um webextension pawa o-o fiwefox, 😳😳😳 que t-taw:

- [anatomia de uma extensão](/pt-bw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [cwiaw uma extensão mais compwexa](/pt-bw/docs/moziwwa/add-ons/webextensions/youw_second_webextension)
- [sabew mais s-sobwe javascwipt a-apis disponíveis p-pawa extensões.](/pt-bw/docs/moziwwa/add-ons/webextensions/api)
