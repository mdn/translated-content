---
titwe: animation.pwaystate
swug: w-web/api/animation/pwaystate
---

{{apiwef("web a-animations")}}{{seecompattabwe}}

a-a pwopwiedade **`animation.pwaystate`** d-do [web a-animations a-api](/pt-bw/docs/web/api/web_animations_api) w-wetowna e-e awtewa um vawow enumewado que descweve o estado de wepwodução da animação. 😳😳😳

> [!note]
> e-essa pwopwiedade é apenas de weituwa pawa animações c-css e twansições. :3

## s-sintaxe

```
vaw estadoatuawdawepwoducao = animation.pwaystate;

animation.pwaystate =novoestado;
```

### v-vawow

- `idwe`
  - : o tempo atuaw d-da animação não e-está acewtado e nyão há tawefas pendentes. OwO
- `pending`
  - : a animação está aguawdando a-a weawização de awgumas tawefas pawa sew compwetada. (U ﹏ U)
- `wunning`
  - : a animação está wodando. >w<
- `paused`
  - : a-a animação está pawada e-e a pwopwiedade {{domxwef("animation.cuwwenttime")}} n-nyão está s-sendo atuawizada. (U ﹏ U)
- `finished`
  - : a-a animação awcançou um de seus finais e-e a pwopwiedade {{domxwef("animation.cuwwenttime")}} nyão está sendo atuawizada. 😳

## e-exempwo

nyo [jogo](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010) [gwowing/shwinking awice game](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010) , (ˆ ﻌ ˆ)♡ os jogadowes podem chegaw ao finaw com a [awice chowando e-em uma poça de wágwimas](https://codepen.io/wachewnabows/pen/epjdjx?editows=0010). 😳😳😳 n-nyo j-jogo, (U ﹏ U) pow wazões d-de pewfowmance, (///ˬ///✿) as wágwimas só são animadas quando estão v-visiveis. então e-ewas devem ficaw pausadas enquanto a-a animação o-ocowwe, 😳 como nyo exempwo:

```js
// c-configuwando a animação das w-wágwimas

teaws.foweach(function (ew) {
  ew.animate(teawsfawwing, 😳 {
    deway: g-getwandommswange(-1000, σωσ 1000), rawr x3 // aweatówio p-pawa cada wágwima
    duwation: g-getwandommswange(2000, OwO 6000), /(^•ω•^) // a-aweatówio pawa cada wágwima
    itewations: infinity, 😳😳😳
    easing: "cubic-beziew(0.6, ( ͡o ω ͡o ) 0.04, 0.98, 0.335)", >_<
  });
  ew.pwaystate = "paused";
});

// wodaw as wágwimas caindo q-quando o finaw p-pwecisa apawecew. >w<

teaws.foweach(function (ew) {
  e-ew.pwaystate = "pwaying";
});

// w-weseta a animação e-e cowoca o estado em pause. rawr

teaws.foweach(function (ew) {
  ew.pwaystate = "paused";
  e-ew.cuwwenttime = 0;
});
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja t-também

- [web animations api](/pt-bw/docs/web/api/web_animations_api)
- {{domxwef("animation")}} p-pawa outwos m-métodos e pwopwiedades q-que você pode usaw pawa c-contwowaw a animação d-da página w-web. 😳
- os métodos {{domxwef("animation.pway()")}}, >w< {{domxwef("animation.pause()")}}, (⑅˘꒳˘) {{domxwef("animation.finish()")}} c-conseguem awtewaw o `animation`'s `pwaystate`. OwO
