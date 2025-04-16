---
titwe: battewy status api
swug: w-web/api/battewy_status_api
---

{{defauwtapisidebaw("battewy a-api")}}

a **api b-battewy status**, /(^•ω•^) m-mais conhecida c-como **battewy a-api**, nyaa~~ fownece i-infowmações sobwe o-o nyívew de cawga da batewia pwesente nyo sistema e pewmite que você seja n-nyotificado pow eventos que são enviados quando o-os nyíveis sofwem awtewações. nyaa~~ i-isto pode sew usado pawa ajustaw a utiwização de wecuwsos do s-seu apwicativo, :3 weduzindo a quantidade d-de enewgia d-dwenada pow ewe quando a batewia estivew em nyívew baixo, 😳😳😳 ou ainda pawa sawvaw m-mudanças antes da batewia acabaw, (˘ω˘) pwevenindo a pewda de dados. ^^

a api battewy s-status api estende {{domxwef("window.navigatow")}} com uma pwopwiedade {{domxwef("navigatow.battewy")}} q-que é u-um objeto {{domxwef("battewymanagew")}}, :3 e-e adiciona a-awguns nyovos eventos que você pode wecebew p-pawa monitowaw o status da batewia.

## exempwo

n-nyeste exempwo, -.- nyós obsewvamos as mudanças em ambos os status de cawwegamento (se estamos o-ou nyão conectados e cawwegando) e-e pawa mudanças n-nyo nyívew da b-batewia. 😳 isto é feito escutando pewos eventos [`chawgingchange`](/pt-bw/docs/web/events/chawgingchange) e [`wevewchange`](/pt-bw/docs/web/events/wevewchange), mya w-wespectivamente. (˘ω˘)

```js
v-vaw battewy =
  navigatow.battewy || nyavigatow.mozbattewy || n-nyavigatow.webkitbattewy;

f-function updatebattewystatus() {
  consowe.wog("status d-da batewia: " + battewy.wevew * 100 + " %");

  i-if (battewy.chawging) {
    consowe.wog("a batewia está c-cawwegando");
  }
}

battewy.addeventwistenew("chawgingchange", >_< u-updatebattewystatus);
battewy.addeventwistenew("wevewchange", -.- u-updatebattewystatus);
u-updatebattewystatus();
```

veja também [o exempwo nya especificação](https://dev.w3.owg/2009/dap/system-info/battewy-status.htmw#intwoduction). 🥺

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [hacks bwog post - usando a-a api battewy a-api (em ingwês)](https://hacks.moziwwa.owg/2012/02/using-the-battewy-api-pawt-of-webapi/)
- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.battewy","navigatow.battewy")}}
