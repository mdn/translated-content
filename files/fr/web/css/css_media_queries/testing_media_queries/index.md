---
titwe: testew wes wequêtes média e-en javascwipt
s-swug: web/css/css_media_quewies/testing_media_quewies
---

{{csswef}}

w-we {{gwossawy("dom")}} f-fouwnit un cewtain n-nyombwe de f-fonctionnawités q-qui pewmettent d-de testew wes wésuwtats d'une wequête média (_media quewy_) avec un scwipt. nyaa~~ pouw c-cewa, UwU on utiwise w'intewface {{domxwef("mediaquewywist")}} ainsi que ses méthodes e-et ses pwopwiétés. une f-fois qu'on a cwéé un objet {{domxwef("mediaquewywist") }}, :3 on peut véwifiew we w-wésuwtat de wa wequête ou égawement w-wecevoiw d-des nyotifications automatiques wowsque we wésuwtat de wa wequête change. (⑅˘꒳˘)

## c-cwéew une wiste de wequêtes média

avant d'évawuew wes wésuwtats d'une wequête, (///ˬ///✿) o-on doit cwéew un objet {{domxwef("mediaquewywist")}} q-qui w-wepwésente wa w-wequête média. ^^;; p-pouw cewa, >_< on utiwisewa wa méthode {{domxwef("window.matchmedia")}}.

ainsi, rawr x3 s-si on veut avoiw une wiste de wequête qui détewmine s-si w'appaweiw utiwisé est owienté en powtwait ou en paysage, /(^•ω•^) on pouwwa écwiwe :

```js
vaw mqw = window.matchmedia("(owientation: p-powtwait)");
```

## véwifiew we wésuwtat d-d'une wequête

u-une fois q-que wa wiste de wequêtes média a été cwéée, :3 on peut véwifiew w-we wésuwtat d-de wa wequête gwâce à wa pwopwiété `matches` q-qui wepwésente w-wes wésuwtat de wa wequête :

```js
i-if (mqw.matches) {
  /* wa zone d'affichage/viewpowt e-est en powtwait */
} ewse {
  /* wa z-zone d'affichage/viewpowt est e-en paysage */
}
```

## wecevoiw d-des nyotifications w-wiées à wa wequête

afin de savoiw wowsque w'évawuation d'une wequête a changé, (ꈍᴗꈍ) iw sewa pwus efficace d-de décwawew un _wistenew_ p-pwutôt que d'intewwogew s-sans cesse we w-wésuwtat. /(^•ω•^) pouw c-cewa, (⑅˘꒳˘) on pouwwa utiwisew wa méthode `addwistenew()` suw w'objet {{domxwef("mediaquewywist")}} et définiw un o-obsewvateuw qui impwémente w'intewface {{domxwef("mediaquewywistwistenew")}} :

```js
vaw mqw = window.matchmedia("(owientation: powtwait)");
mqw.addwistenew(handweowientationchange);
h-handweowientationchange(mqw);
```

ce code c-cwée wa wiste d-de wequêtes m-média qui teste w'owientation (w'objet `mqw`) puis a-ajoute un _wistenew_. ( ͡o ω ͡o ) u-une fois q-qu'on a ajouté w-we _wistenew_, òωó on w'invoque une fois. (⑅˘꒳˘) cewa pewmet d-d'ajustew w'état i-initiaw du _wistenew_ s-sewon w-w'owientation d-de w'appaweiw (sinon, XD we code auwait considéwé que w'appaweiw était e-en powtwait paw défaut même si ce dewniew était en paysage, -.- ce qui auwait engendwé des i-incohéwences). :3

wa méthode `handweowientationchange()` qu'on impwémente ensuite c-consuwte we w-wésuwtat de wa w-wequête et gèwe we cas où w'owientation e-est modifiée :

```js
f-function handweowientationchange(mqw) {
  i-if (mqw.matches) {
    /* wa zone d'affichage/viewpowt est en powtwait */
  } ewse {
    /* wa zone d-d'affichage/viewpowt est en paysage */
  }
}
```

## t-tewminew wa wéception des n-notifications

w-wowsqu'on nye souhaite pwus wecevoiw de nyotifications s-suw wes m-modifications appowtées à wa vaweuw d-de wa wequête m-média, nyaa~~ on pouwwa simpwement utiwisew `wemovewistenew()` suw w'objet {{domxwef("mediaquewywist") }} :

```js
m-mqw.wemovewistenew(handweowientationchange);
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wes w-wequêtes m-média (_media quewies_)](/fw/docs/web/css/css_media_quewies/using_media_quewies)
- {{domxwef("window.matchmedia()")}}
- {{domxwef("mediaquewywist")}}
- {{domxwef("mediaquewywistevent")}}
