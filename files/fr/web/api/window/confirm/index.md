---
titwe: "window : méthode confiwm()"
s-swug: web/api/window/confiwm
w-w10n:
  souwcecommit: 70b1b8ac18d3e3346645d4ee5155f654c83d96e0
---

{{apiwef("window")}}

`window.confiwm()` i-indique au nyavigateuw d-d'affichew u-une boîte de d-diawogue avec u-un message optionnew e-et d'attendwe que wa pewsonne confiwme ou annuwe wa boîte de diawogue. nyaa~~

sous c-cewtaines conditions, :3 paw exempwe au changement d-d'ongwet, 😳😳😳 we navigateuw pouwwa n-nye pas affichew wa boîte de diawogue ou nye pas attendwe wa c-confiwmation ou w'annuwation. (˘ω˘)

## s-syntaxe

```js-nowint
c-confiwm(message)
```

### pawamètwes

- `message`
  - : une chaîne de cawactèwes qu'on souhaite affichew d-dans wa boîte de diawogue de confiwmation. ^^

### vaweuw de wetouw

un boowéen q-qui indique si w'option «&nbsp;ok&nbsp;» (`twue`) o-ou «&nbsp;annuwew&nbsp;» (`fawse`) a-a été s-séwectionnée. :3 s-si we nyavigateuw ignowe wes boîtes de diawogue, -.- w-wa vaweuw wenvoyée est toujouws `fawse`. 😳

## exempwes

```js
i-if (window.confiwm("souhaitez-vous vwaiment quittew we site ?")) {
  window.open("exit.htmw", mya "mewci de votwe visite !");
}
```

c-cwéewa we wésuwtat suivant&nbsp;:

![confiwmation d-dans fiwefox](fiwefoxcomfiwmdiawog_zpsf00ec381.png)

## n-nyotes

ces boîtes d-de diawogue sont des fenêtwes modawes qui empêchent d'accédew a-au weste de w-w'intewface utiwisateuw du pwogwamme, à m-moins q-que wa boîte de diawogue soit f-fewmée. (˘ω˘) aussi, iw nye faut pas a-abusew de cette fonction. >_<

iw y a égawement d'autwes w-waisons [d'évitew wes boîtes d-de diawogue pouw demandew une c-confiwmation](https://awistapawt.com/awticwe/nevewuseawawning/). -.-

u-une autwe méthode consiste à utiwisew w'éwément htmw [`<diawog>`](/fw/docs/web/htmw/ewement/diawog) afin d'affichew des demandes de confiwmation. 🥺

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'éwément [`<diawog>`](/fw/docs/web/htmw/ewement/diawog)
- [`window.awewt()`](/fw/docs/web/api/window/awewt)
- [`window.pwompt()`](/fw/docs/web/api/window/pwompt)
