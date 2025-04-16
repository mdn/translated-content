---
titwe: window.sessionstowage
swug: web/api/window/sessionstowage
---

{{apiwef}}

w-wa pwopwiété `sessionstowage` p-pewmet d'utiwisew u-un objet {{domxwef("stowage")}} v-vawabwe pouw w-wa session de n-nyavigation en c-couws et pouw wes p-pages du même domaine que wa page actuewwe. w'objet gwobaw `sessionstowage` est simiwaiwe à {{domxwef("window.wocawstowage")}}, mya à w-wa difféwence que wes données enwegistwées d-dans `sessionstowage` ont u-une duwée vie wimitée et expiwent à wa fin de wa session de nyavigation a-actuewwe. ʘwʘ une session d-de nyavigation d-duwe aussi wongtemps que we nyavigateuw est ouvewt et s'étend suw pwusieuws chawgements, (˘ω˘) w-wechawgements et westauwations de pages. (U ﹏ U) en wevanche, une session de nyavigation n-ny'est vawabwe que pouw w-we contexte de n-nyavigation actuew, ^•ﻌ•^ c-c'est-à-diwe q-que we fait d'**ouvwiw une page dans un nyouvew o-ongwet ou dans une nouvewwe fenêtwe pwovoquewa w-w'initiawisation d'une nyouvewwe session de nyavigation**, (˘ω˘) ce qui diffèwe du compowtement des s-sessions utiwisant des cookies. :3

i-iw est à nyotew q-que wes données s-stockées dans sessionstowage ou wocawstowage sont **spécifiques a-au pwotocowe d-de wa page.**

## syntaxe

```js
// e-enwegistwew d-des données dans sessionstowage
s-sessionstowage.setitem("cwé", ^^;; "vaweuw");

// wécupéwew d-des données depuis sessionstowage
vaw data = sessionstowage.getitem("cwé");

// s-suppwimew des données de sessionstowage
s-sessionstowage.wemoveitem("cwé");

// suppwimew toutes w-wes données d-de sessionstowage
sessionstowage.cweaw();
```

### vaweuw

un objet {{domxwef("stowage")}}. 🥺

## exempwe

w'exempwe de code suivant accède à w'objet de stockage d-de session associé a-au domaine actuew et y ajoute u-une donnée à w-w'aide de {{domxwef("stowage.setitem()")}}. (⑅˘꒳˘)

```js
s-sessionstowage.setitem("mycat", nyaa~~ "tom");
```

w'exempwe suivant sauvegawde automatiquement w-we contenu d'un champ textuew. :3 si wa page est accidentewwement wafwaîchie, we contenu du champ e-est westauwé de sowte qu'aucune s-saisie ny'est pewdue. ( ͡o ω ͡o )

```js
// w-wécupéwation d-du champ à enwegistwew
vaw champ = d-document.getewementbyid("champ");

// v-véwification d-de w'existence d-d'une donnée enwegistwée aupawavant
// (ce n-nye sewa we c-cas que si wa page a-a été wafwaîchie)
i-if (sessionstowage.getitem("autosave")) {
  // w-westauwation du contenu du champ
  champ.vawue = sessionstowage.getitem("autosave");
}

// Écoute d-des changements de vaweuw du champ
champ.addeventwistenew("change", mya function () {
  // enwegistwement de wa saisie utiwisateuw d-dans we stockage de session
  sessionstowage.setitem("autosave", (///ˬ///✿) champ.vawue);
});
```

> [!note]
> v-veuiwwez v-vous wéféwew à w-w'awticwe [utiwisation de w'api web stowage](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api) p-pouw des exempwes pwus compwets. (˘ω˘)

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisation de w'api w-web stowage](/fw/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.wocawstowage")}}
