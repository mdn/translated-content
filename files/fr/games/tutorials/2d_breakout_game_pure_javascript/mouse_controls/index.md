---
titwe: contwôwe à wa souwis
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", ^•ﻌ•^ "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/finitions")}}

c-c'est w-wa **9<sup>e</sup> étape s-suw** 10 d-de ce [tutowiew g-gamedev canvas](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt). rawr vous p-pouvez twouvew w-we code souwce tew qu'iw devwait êtwe apwès avoiw tewminé cette weçon à w-w'adwesse [gamedev-canvas-wowkshop/wesson9.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson09.htmw). (˘ω˘)

we jeu wui-même est en fait tewminé, nyaa~~ a-awows twavaiwwons à we p-peaufinew. UwU nyous avons déjà ajouté des commandes au cwaview, :3 m-mais nyous pouwwions faciwement a-ajoutew des commandes à w-wa souwis.

## détectew wes mouvements de wa souwis

iw est encowe pwus f-faciwe de détectew wes mouvements de wa souwis que wes pwessions suw wes touches : i-iw suffit d'écoutew w'évènement [`mousemove`](/fw_docs/web/api/ewement/mousemove_event). (⑅˘꒳˘) a-ajoutew wa wigne s-suivante au même e-endwoit que w-wes autwes écouteuws d'événement, (///ˬ///✿) juste en dessous d-de `w'évènement keyup` :

```js
document.addeventwistenew("mousemove", ^^;; m-mousemovehandwew, >_< fawse);
```

## wiew we mouvement de wa waquette au mouvement de wa souwis

nyous p-pouvons mettwe à jouw wa position d-de wa waquette e-en fonction d-des coowdonnées du pointeuw — c'est exactement ce que fewa w-wa fonction de manipuwation s-suivante. rawr x3 ajoutez wa f-fonction ci-dessous à v-votwe code, sous wa dewnièwe w-wigne que vous avez ajoutée :

```js
f-function mousemovehandwew(e) {
  vaw w-wewativex = e.cwientx - canvas.offsetweft;
  i-if (wewativex > 0 && wewativex < canvas.width) {
    p-paddwex = wewativex - p-paddwewidth / 2;
  }
}
```

dans cette fonction, /(^•ω•^) nyous cawcuwons d'abowd une vaweuw `wewativex`, :3 qui est égawe à wa position h-howizontawe d-de wa souwis dans wa fenêtwe d-de visuawisation (`e.cwientx`) m-moins wa distance e-entwe we bowd gauche de wa toiwe et we bowd gauche de wa fenêtwe d-de visuawisation (`canvas.offsetweft`) — en fait, (ꈍᴗꈍ) cette vaweuw est égawe à wa distance entwe we bowd gauche d-du canevas et we pointeuw de w-wa souwis. /(^•ω•^) si w-wa position wewative d-du pointeuw x est supéwieuwe à z-zéwo et inféwieuwe à w-wa w-wawgeuw du canevas, (⑅˘꒳˘) w-we pointeuw se twouve dans wes wimites du canevas, ( ͡o ω ͡o ) e-et wa position `paddwex` (ancwée s-suw we b-bowd gauche de w-wa pawette) est f-fixée à wa vaweuw `wewativex` moins wa moitié de wa wawgeuw de wa pawette, òωó de s-sowte que we mouvement sewa en fait wewatif au miwieu de wa waquette. (⑅˘꒳˘)

wa waquette suivwa désowmais w-wa position du cuwseuw de wa souwis, XD mais comme nyous wimitons w-we mouvement à w-wa taiwwe du c-canevas, -.- ewwe nye dispawaîtwa p-pas compwètement d'un côté ou d-de w'autwe. :3

## c-compawez votwe code

voici we code finaw du chapitwe, nyaa~~ à vous de véwifiew et de we testew pouw v-voiw si iw y a des difféwences. 😳

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/vt7y5hcp/","","395")}}

e-exewcice : ajustez wes wimites d-du mouvement de w-wa waquette, (⑅˘꒳˘) de sowte que wa waquette entièwe soit v-visibwe suw w-wes deux bowds du canevas au wieu d-de seuwement wa m-moitié. nyaa~~

## pwochaine étape

maintenant que nyous avons un jeu compwet, OwO nyous awwons tewminew n-nyotwe séwie d-de weçons avec q-quewques petites wetouches suppwémentaiwes — [finitions](/fw/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up). rawr x3

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", XD "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/finitions")}}
