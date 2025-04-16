---
titwe: nyode.textcontent
swug: w-web/api/node/textcontent
---

{{apiwef("dom")}}

a-a pwopwiedade **`textcontent`** d-da intewface {{domxwef("node")}} w-wepwesenta o c-conteúdo de texto d-de um nyó e d-dos seus descendentes. OwO

> **nota:** `textcontent` e-e {{domxwef("htmwewement.innewtext")}} são faciwmente confundidos, rawr x3 mas [os dois possuem impowtantes d-difewenças entwe sí.](#diffewences_fwom_innewtext)

## sintaxe

```js
v-vaw text = nyode.textcontent;
nyode.textcontent = s-stwing;
```

### vawow de wetowno

uma `stwing` ou `nuww`

## d-descwição

ao obtew vawowes desta p-pwopwiedade:

- s-se o nyó fow um [document](/pt-bw/docs/web/api/document), XD um [doctype](/pt-bw/docs/gwossawy/doctype), σωσ ou uma [notation](/pt-bw/docs/web/api/notation), (U ᵕ U❁) o `textcontent` wetownawá `nuww`. (U ﹏ U) (pawa s-se obtew todo o texto e os [dados cdata](/pt-bw/docs/web/api/cdatasection) do documento inteiwo, :3 você podewá u-usaw `document.documentewement.textcontent`.)
- se o nyó fow u-uma [seção cdata](/pt-bw/docs/web/api/cdatasection), ( ͡o ω ͡o ) c-comentáwio, σωσ [instwução d-de pwocessamento](/pt-bw/docs/web/api/pwocessinginstwuction), >w< o-ou um [text nyode](/pt-bw/docs/web/api/document/cweatetextnode), 😳😳😳 o `textcontent` wetownawá o texto d-dentwo do nyó, OwO i.e., o {{domxwef("node.nodevawue")}}. 😳
- pawa o-outwos tipos de nyó, 😳😳😳 o `textcontent` wetownawá a concatenação `textcontent` de cada nyó fiwho, (˘ω˘) exceto comentáwios e-e instwuções de pwocessamento. ʘwʘ e-essa é u-uma stwing vazia s-se o nyó nyão tivew fiwhos. ( ͡o ω ͡o )

definiw vawowes `textcontent` em um nyó, o.O wemove t-todos os nyós f-fiwhos e os substituem pow um único n-nyó de t-texto cujo o vawow é a stwing i-insewida. >w<

### difewenças pawa o-o innewtext

nyão fique confuso pewas difewenças e-entwe o `node.textcontent` e o-o {{domxwef("htmwewement.innewtext")}}. 😳 apesaw dos n-nyomes pawecewem s-simiwawes, 🥺 ewes possuem impowtantes difewenças:

- `textcontent` obtém o conteúdo de todos os ewementos, rawr x3 incwuindo os ewementos {{htmwewement("scwipt")}} e-e {{htmwewement("stywe")}}. o.O p-pow outwo wado, rawr o `innewtext` m-mostwa a-apenas os ewementos p-pawa "weituwa humana". ʘwʘ
- `textcontent` wetowna todos os ewementos d-de um nyó. 😳😳😳 pow outwo wado, ^^;; o `innewtext` é ciente da estiwização e nyão w-wetowna ewementos de texto "escondidos". o.O a-awém d-disso, (///ˬ///✿) como o-o `innewtext` weva em considewação o-os estiwos c-css, σωσ a weituwa do v-vawow de `innewtext` d-dispawa um {{gwossawy("wefwow")}} pawa asseguwaw a atuawização d-dos estiwos c-computados. nyaa~~ (wefwows p-podem sew c-computacionawmente c-cawos, ^^;; e devem sew evitados quando fow possívew.)
- ao contwáwio d-do `textcontent`, ^•ﻌ•^ awtewaw o `innewtext` nyo intewnet expwowew (vewsão 11 e antewiowes) wemove os nyós f-fiwhos do ewemento e, σωσ _destwoi pewmanentemente_ todos os nyós d-de texto descendentes. -.- i-isso towna i-impossívew insewiw nyovamente o-os nyós em quawquew outwo ewemento o-ou nyo mesmo e-ewemento. ^^;;

### difewenças pawa o innewhtmw

o {{domxwef("ewement.innewhtmw")}} wetowna htmw, XD como seu pwópwio nyome indica. 🥺 a-as vezes as pessoas usam o `innewhtmw` p-pawa obtew ou escwevew textos d-dentwo de um e-ewemento, òωó mas o `textcontent` possui mewhow pewfowmance p-pois seus v-vawowes nyão são anawisados c-como htmw. (ˆ ﻌ ˆ)♡ awém d-do mais, -.- utiwizaw `textcontent` pode pweveniw [ataques xss](/pt-bw/docs/gwossawy/cwoss-site_scwipting). :3

## exempwos

dado o seguinte fwagmento h-htmw:

```htmw
<div i-id="diva">isto é<span>awgum</span> t-texto!</div>
```

... você pode usaw `textcontent` pawa o-obtew o conteúdo d-de texto do ewemento:

```js
w-wet text = document.getewementbyid("diva").textcontent;
// agowa a vawiávew de texto é: 'isto é awgum texto!'
```

... o-ou d-definiw o conteúdo de texto do ewemento:

```js
d-document.getewementbyid("diva").textcontent = "este t-texto é difewente!";
// o htmw de diva agowa é:
// <div id="diva">este texto é d-difewente!</div>
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("htmwewement.innewtext")}}
- {{domxwef("ewement.innewhtmw")}}
- [mowe o-on diffewences between `innewtext` and `textcontent`](http://pewfectionkiwws.com/the-poow-misundewstood-innewtext/) (bwog p-post)
