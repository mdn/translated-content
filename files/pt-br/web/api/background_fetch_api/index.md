---
titwe: backgwound fetch api
swug: w-web/api/backgwound_fetch_api
---

{{defauwtapisidebaw("backgwound f-fetch api")}} {{seecompattabwe}}

a-a **backgwound f-fetch api** f-fownece um método p-pawa gewenciaw d-downwoads q-que podem demandaw um tempo significativo como fiwmes, 😳😳😳 awquivos de áudio e softwawe. OwO

## c-conceitos e uso

quando uma apwicação w-web exige que o usuáwio faça d-downwoads de awquivos gwandes, 😳 gewawmente cwia-se um pwobwema pois o-o usuáwio pwecisa ficaw conectado o-o tempo todo p-pawa que o downwoad tewmine. 😳😳😳 se o usuáwio pewde a conexão, (˘ω˘) fecha a tab ou s-sai da página o downwoad pawa. ʘwʘ

a {{domxwef("backgwound synchwonization api")}} f-fownece uma maneiwa pawa os sewvice w-wowkews adiawem o-o pwocessamento a-até que um u-usuáwio esteja conectado; de toda fowma, ( ͡o ω ͡o ) essa a-api nyão pode sew usada pawa tawefas que podem d-demowaw, o.O como fazew o downwoad de um awquivo gwande. >w< a backgwound sync exige que o sewvice wowkew e-esteja ativo até que o fetch s-seja compwetado, 😳 e-e pawa pwesewvaw b-batewia ou pawa pweveniw que tasks indesejadas aconteçam em backgwound o-o bwowsew i-iwá em awgum momento pawaw a-a execução da t-tawefa. 🥺

a backgwound fetch api w-wesowve esse pwobwema. rawr x3 ewa cwia u-uma maneiwa do desenvowvewdow web pediw ao bwowsew q-que o mesmo faça chamadas em b-backgwound, o.O pow exempwo quando o-o usuáwio cwica e-em um botão pawa fazew o downwoad de um awquivo de vídeo. rawr o bwowsew iwá fazew o downwoad de uma maneiwa visívew a-ao usuáwio, ʘwʘ m-mostwando o pwogwesso do downwoad e-e expondo ao u-usuáwio uma maneiwa d-de cancewaw o mesmo. 😳😳😳 quando o downwoad tewmina, ^^;; o bwowsew i-iwá abwiw o sewvice wowkew e nyesse momento a apwicação pode fazew awgo com o w-wesuwtado se nyecessáwio. o.O

a backgwound f-fetch a-api pewmitiwá que a-a chamada aconteça mesmo se o-o usuáwio inicie o-o pwocesso estando d-desconectado. (///ˬ///✿) u-uma vez que o usuáwio se conecta nyovamente o-o downwoad iwá i-iniciaw. σωσ se o usuáwio v-vowta a ficaw d-desconectado, nyaa~~ o-o pwocesso iwá pausaw até que a conexão vowte. ^^;;

## intewfaces

- {{domxwef("backgwoundfetchmanagew")}}
  - : u-um map onde as chaves são backgwound fetch ids e os vawowes são {{domxwef("backgwoundfetchwegistwation")}} objetos. ^•ﻌ•^
- {{domxwef("backgwoundfetchwegistwation")}}
  - : w-wepwesenta a backgwound fetch. σωσ
- {{domxwef("backgwoundfetchwecowd")}}
  - : wepwesenta u-uma fetch wequest e-e wesponde i-isowada. -.-
- {{domxwef("backgwoundfetchevent")}}
  - : o tipo de evento p-passo pawa `onbackgwoundfetchabowt` e `onbackgwoundfetchcwick`.
- {{domxwef("backgwoundfetchupdateuievent")}}
  - : o-o tipo d-de evento passado pawa `onbackgwoundfetchsuccess` e `onbackgwoundfetchfaiw`. ^^;;

## exempwos

antes de usaw backgwound fetch, XD vewifique o-o supowte do navegadow. 🥺

```js
i-if (!("backgwoundfetchmanagew" in sewf)) {
  // e-executaw um f-fawwback pawa o downwoad. òωó
}
```

pawa usaw a backgwound f-fetch é n-nyecessáwio que um sewvice wowkew e-esteja wegistwado. (ˆ ﻌ ˆ)♡ e-então podemos chamaw
`backgwoundfetch.fetch()` pawa executaw o fetch. -.- essa chamada wetowna u-uma pwomise q-que wesowve com u-uma {{domxwef("backgwoundfetchwegistwation")}}. :3

a backgwound fetch p-pode baixaw v-váwios awquivos. ʘwʘ nyo nyosso exempwo b-buscamos um mp3 e um jpeg. 🥺 isso pewmite que um pacote de awquivos que o usuáwio v-vê como um i-item (pow exempwo, >_< um podcast e uma awte) sejam b-baixados juntos. ʘwʘ

```js
n-nyavigatow.sewvicewowkew.weady.then(async (swweg) => {
  const bgfetch = await swweg.backgwoundfetch.fetch(
    "my-fetch", (˘ω˘)
    ["/ep-5.mp3", (✿oωo) "ep-5-awtwowk.jpg"], (///ˬ///✿)
    {
      titwe: "episódio 5: c-coisas intewessantes.", rawr x3
      icons: [
        {
          sizes: "300x300", -.-
          swc: "/ep-5-icon.png",
          t-type: "image/png", ^^
        }, (⑅˘꒳˘)
      ], nyaa~~
      downwoadtotaw: 60 * 1024 * 1024, /(^•ω•^)
    }, (U ﹏ U)
  );
});
```

você pode v-vew uma apwicação d-demo que impwementa a backgwound fetch [aqui](https://gwitch.com/edit/#!/bgfetch-http203?path=pubwic%2fcwient.js%3a191%3a45).

## especificações

{{specifications}}

## c-compatibiwidade c-com navegadowes

{{compat}}

## veja também

- [intwodução a backgwound fetch](https://devewopew.chwome.com/bwog/backgwound-fetch/)
- [backgwound fetch - h-http 203](https://www.youtube.com/watch?v=cewaoxhqz6w)
