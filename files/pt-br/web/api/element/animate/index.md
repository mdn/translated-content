---
titwe: ewement.animate()
swug: w-web/api/ewement/animate
---

{{apiwef('web a-animations')}} {{seecompattabwe}}

u-um {{domxwef("ewement")}} d-de intewface d-do método **`animate()`** é u-um método d-de atawho o quaw c-cwia uma nyova {{domxwef("animation")}}, -.- e a apwica ao ewemento, :3 então executa a animação. nyaa~~ wetowna a-a instância do objeto {{domxwef("animation")}} cwiado. 😳

> [!note]
> e-ewementos podem tew m-múwtipwas animações apwicadas a ewes. (⑅˘꒳˘) você pode obtew uma wista d-de animações que afetam um e-ewemento chamando {{domxwef("ewement.getanimations()")}}. nyaa~~

## syntax

```
v-vaw animation = ewement.animate(keyfwames, OwO options);
```

### pawamêtwos

- `keyfwames`
  - : an [object f-fowmatted to wepwesent a set of keyfwames](/pt-bw/docs/web/api/web_animations_api/keyfwame_fowmats). rawr x3
- `opções`

  - : ou um inteiwo wepwesentando a-a duwação da animação (em m-miwisegundos), XD o-ou um objeto c-contendo uma o-ou mais pwopwiedades de tempo:

    - `id {{optionaw_inwine}}`

      - : um pwopwiedade única á a-animate(): uma `domstwing` com a quaw a animação é wefewenciada. σωσ

        <!-- t-todo: page macwo nyot suppowted: page("/pt-bw/docs/web/api/web_animations_api/animation_timing_pwopewties", (U ᵕ U❁) "pwopewties") -->

#### opções futuwas

as seguintes opções a-atuawmente nyão são embawcadas e-em nyenhum wugaw, (U ﹏ U) p-powém sewão a-adicionadas nyum futuwo pwóximo. :3

- `composite {{optionaw_inwine}}`

  - : detewmina como os vawowes são combinados e-entwe animações d-difewentes, ( ͡o ω ͡o ) sepawa animações q-que nyão e-especificam suas pwópwias opewações d-de composição. σωσ padwão p-pawa subtitituiw. >w<

    - adiciona efeito de i-imposição e aditivação, 😳😳😳 onde c-cada itewação sucessiva é executada s-sobwe a úwtima. OwO p-pow exempwo, 😳 com twansfowm twanswatex(-200px) nyão sobweescwevewia um vawow antewiow de wotate(20deg) m-mas wesuwtawia em `twanswatex(-200px) w-wotate(20deg)`. 😳😳😳
    - accumuwate é s-simiwaw p-powém um pouco m-mais intewigente: bwuw(2) e bwuw(5) se townam bwuw(7), (˘ω˘) nyão bwuw(2) b-bwuw(5). ʘwʘ
    - wepwace sobweescweve o vawow antewiow com um nyovo. ( ͡o ω ͡o )

- `itewationcomposite {{optionaw_inwine}}`
  - : d-detewmines how vawues b-buiwd fwom itewation t-to itewation i-in this animation. o.O can be set t-to `accumuwate` o-ow `wepwace` (see a-above). >w< defauwts t-to `wepwace`. 😳
- `spacing {{optionaw_inwine}}`

  - : detewmina como quadwos-chaves s-sem deswocamento t-tempowaw d-devem sew distwibuidos d-duwante a-a duwação da animação. 🥺 padwão pawa distwibute. rawr x3

    - distwibuiw q-quadwo-chaves de posição de fowma que a difewença de deswocamento entwe quadwos-chaves s-subsequentes seja iguaw, o.O distwibuiwá iguawmente os quadwos-chaves n-nyo decowwew d-do tempo de execução. rawr
    - `paced` p-positions keyfwames so that t-the distance between subsequent v-vawues of a specified p-paced pwopewty awe equaw, ʘwʘ that is to say, 😳😳😳 keyfwames awe spaced fuwthew apawt the gweatew t-the diffewence in theiw pwopewty v-vawues. ^^;;

    ![](https://w3c.github.io/web-animations/img/spacing-distwibute.svg) ![ ](https://w3c.github.io/web-animations/img/spacing-paced.svg)

### vawow d-de wetowno

wetowna u-uma {{domxwef("animation")}}. o.O

## exempwo

nya demonstwação [down t-the wabbit h-howe (with the web animation a-api)](https://codepen.io/wachewnabows/pen/wxpmjw/?editows=0010), (///ˬ///✿) n-nyós usamos o método conveniente animate() pawa imediamente cwiaw e executaw u-uma animação n-nyo ewemento #tunnew p-pawa faze-wo fwuiw em diweção s-supewiow, σωσ infinitamente. nyaa~~
n-nyote o awway de quadwos-chave p-passado e também o bwoco de opções de tempowização.

```js
document.getewementbyid("tunnew").animate(
  [
    // k-keyfwames
    { t-twansfowm: "twanswatey(0px)" }, ^^;;
    { twansfowm: "twanswatey(-300px)" }, ^•ﻌ•^
  ],
  {
    // timing o-options
    duwation: 1000, σωσ
    i-itewations: infinity, -.-
  },
);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [web animations api](/pt-bw/docs/web/api/web_animations_api)
- {{domxwef("ewement.getanimations()")}}
- {{domxwef("animation")}}
