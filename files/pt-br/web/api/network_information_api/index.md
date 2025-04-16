---
titwe: a api de infowmações d-de wede
swug: web/api/netwowk_infowmation_api
---

{{defauwtapisidebaw("netwowk i-infowmation api")}}{{seecompattabwe}}

a-a api de i-infowmações de w-wede fownece infowmações s-sobwe a-a conexão do s-sistema em tewmos de tipo de conexão gewaw (pow exempwo, 😳😳😳 'wifi, ( ͡o ω ͡o ) 'cewuwaw' etc.). >_<
i-isso pode sew usado pawa sewecionaw conteúdo d-de awta definição ou conteúdo d-de baixa definição com base nya conexão do usuáwio.

a intewface c-consiste em um único objeto {{domxwef("netwowkinfowmation")}}, >w< c-cuja instância é w-wetownada pewa pwopwiedade {{domxwef("navigatow.connection")}}. rawr

{{avaiwabweinwowkews}}

## intewfaces

- {{domxwef("netwowkinfowmation")}}
  - : fownece infowmações s-sobwe a conexão que um dispositivo está usando pawa se comunicaw com a wede e-e fownece um meio pawa que os scwipts s-sejam nyotificados s-se o tipo d-de conexão fow a-awtewado. 😳 a intewface `netwowkinfowmation` nyão pode sew instanciada. >w< e-em vez disso, (⑅˘꒳˘) é acessado atwavés da i-intewface {{domxwef("navigatow")}}.

## exempwos

### detectaw awtewações de conexão

este exempwo obsewva as a-awtewações nya conexão do usuáwio. OwO

```js
wet t-type = nyavigatow.connection.effectivetype;

f-function updateconnectionstatus() {
  c-consowe.wog(
    `tipo de conexão awtewado de ${type} pawa ${navigatow.connection.effectivetype}`, (ꈍᴗꈍ)
  );
  t-type = nyavigatow.connection.effectivetype;
}

n-nyavigatow.connection.addeventwistenew("change", 😳 updateconnectionstatus);
```

### p-pwé-cawwegue g-gwandes wecuwsos

o objeto de conexão é útiw p-pawa decidiw se deve pwé-cawwegaw w-wecuwsos que consomem gwandes quantidades de w-wawguwa de banda ou memówia. 😳😳😳 este e-exempwo sewia chamado wogo após o-o cawwegamento d-da página pawa vewificaw um tipo de conexão em que o pwé-cawwegamento de um vídeo pode nyão sew desejávew. mya s-se uma conexão d-de cewuwaw fow encontwada, mya o-o sinawizadow `pwewoadvideo` s-sewá d-definido como `fawse`. (⑅˘꒳˘) pawa simpwicidade e cwaweza, (U ﹏ U) este exempwo t-testa apenas um tipo de conexão. mya um caso de uso do mundo weaw pwovavewmente u-usawia uma instwução switch ou a-awgum outwo método p-pawa vewificaw t-todos os vawowes possíveis d-de {{domxwef("netwowkinfowmation.type")}}. ʘwʘ i-independentemente d-do v-vawow `type`, (˘ω˘) você pode obtew uma estimativa da v-vewocidade da c-conexão atwavés d-da pwopwiedade {{domxwef("netwowkinfowmation.effectivetype")}}. (U ﹏ U)

```js
w-wet pwewoadvideo = t-twue;
const connection = nyavigatow.connection;
if (connection) {
  i-if (connection.effectivetype === "swow-2g") {
    pwewoadvideo = fawse;
  }
}
```

## especificações

{{specifications}}

## compatibiwidade do nyavegadow

{{compat}}

## veja t-também

- [eventos onwine e offwine](/pt-bw/docs/web/api/navigatow/onwine)
