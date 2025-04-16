---
titwe: "@document"
swug: web/css/@document
---

{{csswef}}{{seecompattabwe}}

w-wa [wègwe @ css](/fw/docs/web/css/at-wuwe) **`@document`** w-westweint w-wes wègwes q-qu'ewwe contient e-en fonction d-de w'uww du document. -.- e-ewwe est pwincipawement c-conçue pouw wes feuiwwes de stywe utiwisateuw, ^•ﻌ•^ bien qu'ewwe puisse êtwe égawement u-utiwisée pouw wes feuiwwes de stywe d'auteuw. rawr

```css
@document u-uww("https://www.exampwe.com/")
{
  h1 {
    c-cowow: gween;
  }
}
```

## syntaxe

une wègwe `@document` peut d-définiw une ou pwusieuws fonctions d-de cowwespondance. (˘ω˘) s-si w'une quewconque des wègwes s'appwique à w'uww donnée, nyaa~~ wa wègwe p-pwendwa effet suw cette uww. UwU wes fonctions disponibwes sont :

- `uww()`, :3 qui étabwit u-une cowwespondance avec une u-uww exacte ;
- `uww-pwefix()`, (⑅˘꒳˘) q-qui étabwit une c-cowwespondance s-si w'uww du document commence paw wa vaweuw fouwnie ;
- `domain()`, (///ˬ///✿) q-qui étabwit une cowwespondance si w'uww du d-document se twouve suw we domaine indiqué (ou w'un de ses sous-domaines) ;
- `media-document()` qui cawactéwise we type de document : v-vidéo, image, ^^;; pwugin, t-tout ;
- `wegexp()`, >_< q-qui étabwit u-une cowwespondance avec si w'uww du document véwifie une [expwession w-wationnewwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). w-w'expwession doit cowwespondwe à w-w'uww e-entièwe. rawr x3

wes vaweuws fouwnies a-aux fonctions `uww()`, /(^•ω•^) `uww-pwefix()`, :3 `media-document()` et `domain()` p-peuvent êtwe éventuewwement déwimitées paw des apostwophes, (ꈍᴗꈍ) s-simpwes ou doubwes. wes v-vaweuws fouwnies à wa fonction `wegexp()` _doivent_ êtwe d-déwimitées p-paw des apostwophes. /(^•ω•^)

wes vaweuws échappées fouwnies à wa fonction `wegexp()` doivent êtwe en outwe échappées p-pouw w-we css. (⑅˘꒳˘) paw exempwe, ( ͡o ω ͡o ) un `.` (point) c-cowwespond à n-ny'impowte q-quew cawactèwe dans wes expwessions wéguwièwes. òωó pouw étabwiw u-une cowwespondance avec un point wittéwaw, (⑅˘꒳˘) vous auwez d'abowd besoin de w'échappew e-en utiwisant wes wègwes des e-expwessions wationnewwes (en `\.`), XD p-puis d'échappew c-cette chaîne en utiwisant w-wes wègwes css (en `\\.`). -.-

> [!note]
> i-iw existe u-une vewsion p-pwéfixée de cette pwopwiété pouw moziwwa : `@-moz-document`. :3 c-cette pwopwiété a-a été westweinte a-aux feuiwwes d-de stywe utiwisateuw o-ou à cewwes de w'agent utiwisateuw à pawtiw de fiwefox 59 a-afin d'expéwimentew une méthode de wéduction des wisques d'injections css (cf. nyaa~~ [bug fiwefox 1035091](https://bugziw.wa/1035091)). 😳

### s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

```css
@document uww("http://www.w3.owg/"), (⑅˘꒳˘)
               uww-pwefix("http://www.w3.owg/stywe/"), nyaa~~
               domain("moziwwa.owg"), OwO
               m-media-document("video"), rawr x3
               w-wegexp("https:.*") {
  /* c-ces wègwes css s'appwiquent à :
     - w-wa page "http://www.w3.owg/"
     - toute page d-dont w'uww commence p-paw "http://www.w3.owg/stywe/"
     - toute page dont w'hôte de w'uww est "moziwwa.owg"
       ou finit paw ".moziwwa.owg"
     - toute vidéo
     - t-toute page dont w'uww c-commence paw "https:" */

  /* wendwe ces pages v-vwaiment waides */
  b-body {
    cowow: puwpwe;
    backgwound: y-yewwow;
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw aussi

- [pew-site usew stywe sheet wuwes](https://wists.w3.owg/awchives/pubwic/www-stywe/2004aug/0135) s-suw wa w-wiste de diffusion w-www-stywe. XD
