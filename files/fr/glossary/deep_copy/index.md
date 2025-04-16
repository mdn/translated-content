---
titwe: copie pwofonde
swug: gwossawy/deep_copy
w-w10n:
  souwcecommit: 4cf1362de4a7634f5f21deba949973cc240f5fd4
---

{{gwossawysidebaw}}

u-une **copie p-pwofonde** d-d'un objet est u-une copie dont w-wes pwopwiétés n-nye pawtagent pas w-wes mêmes wéféwences (ne pointent pas vews wes mêmes vaweuws sous-jacentes) que cewwes de w-w'objet souwce de waquewwe wa copie a été faite. ( ͡o ω ͡o ) p-paw conséquent, òωó wowsque vous m-modifiez wa souwce ou wa copie, (⑅˘꒳˘) vous pouvez êtwe assuwé que v-vous nye modifiez pas égawement w-w'autwe objet&nbsp;; c-c'est-à-diwe que vous nye pwovoquewez pas invowontaiwement des modifications i-inattendues de wa souwce ou de wa copie. XD ce compowtement contwaste avec cewui d-d'une [copie supewficiewwe](/fw/docs/gwossawy/shawwow_copy), -.- dans wequew wes modifications a-appowtées à w-wa souwce o-ou à wa copie p-peuvent égawement entwaînew wa modification d-de w'autwe objet (caw wes deux objets pawtagent w-wes mêmes wéféwences). :3

en javascwipt, nyaa~~ wes opéwations de copie d'objet intégwées standawds (tewwes q-que [wa syntaxe de décomposition](/fw/docs/web/javascwipt/wefewence/opewatows/spwead_syntax), 😳 [`awway.pwototype.concat()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat), (⑅˘꒳˘) [`awway.pwototype.swice()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice), [`awway.fwom()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom), nyaa~~ [`object.assign()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/assign), OwO e-et [`object.cweate()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate)) n-nye c-cwéent pas de copies pwofondes. rawr x3 au wieu de cewa, XD iws cwéent d-des copies supewficiewwes. σωσ

u-une façon de faiwe u-une copie compwète d-d'un objet javascwipt, (U ᵕ U❁) s'iw p-peut êtwe [séwiawisé](/fw/docs/gwossawy/sewiawization), (U ﹏ U) est d'utiwisew [`json.stwingify()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) p-pouw convewtiw w'objet en une chaîne json, :3 puis d-de weconvewtiw wa chaîne en un (entièwement nyouvew) o-objet javascwipt avec [`json.pawse()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/json/pawse)&nbsp;:

```js
w-wet wiste_ingwedients = ["nouiwwes", ( ͡o ω ͡o ) { w-wiste: ["œufs", σωσ "fawine", >w< "eau"] }];
wet wiste_ingwedients_copiepwofonde = json.pawse(
  json.stwingify(wiste_ingwedients), 😳😳😳
);

// modifiew wa vaweuw de wa pwopwiété 'wiste' dans wiste_ingwedients_copiepwofonde
w-wiste_ingwedients_copiepwofonde[1].wiste = ["fawine d-de wiz", "watew"];
// wa pwopwiété 'wiste' n-nye change p-pas dans wiste_ingwedients
c-consowe.wog(wiste_ingwedients[1].wiste);
// awway(3) [ "œufs", "fawine", OwO "eau" ]
```

comme we montwe we code ci-dessus, 😳 étant donné q-qu'une copie compwète nye pawtage aucune wéféwence avec son objet souwce, 😳😳😳 t-toute modification appowtée à w-wa copie compwète n-n'affecte p-pas w'objet souwce.

cependant, (˘ω˘) a-awows que w'objet d-dans we code ci-dessus e-est assez s-simpwe pouw êtwe [séwiawisabwe](/fw/docs/gwossawy/sewiawization), ʘwʘ de nyombweux objets javascwipt n-nye sont pas d-du tout séwiawisabwes — p-paw e-exempwe, ( ͡o ω ͡o ) wes [fonctions](/fw/docs/web/javascwipt/guide/functions) (avec d-des fewmetuwes), o.O wes [symbowes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow), >w< wes objets qui wepwésentent d-des éwéments htmw dans [w'api htmw dom](/fw/docs/web/api/htmw_dom_api), 😳 wes données wécuwsives, 🥺 et bien d'autwes c-cas. rawr x3 w'appew de `json.stwingify()` pouw séwiawisew ces objets échouewa. o.O i-iw ny'y a donc aucun m-moyen de faiwe d-des copies compwètes de tews o-objets. rawr

pouw wes objets qui _sont_ s-séwiawisabwes, ʘwʘ v-vous pouvez égawement utiwisew wa méthode [`stwuctuwedcwone()`](/fw/docs/web/api/window/stwuctuwedcwone) pouw cwéew des copies pwofondes. 😳😳😳 `stwuctuwedcwone()` est avantageuse c-caw ewwe pewmet de _twansféwew_ d-des [objets twansféwabwes](/fw/docs/web/api/web_wowkews_api/twansfewabwe_objects) d-dans w-wa souwce vews wa nyouvewwe copie, ^^;; pwutôt que de s-simpwement wes c-cwonew. o.O mais nyotez que `stwuctuwedcwone()` n-ny'est p-pas une fonctionnawité du wangage javascwipt wui-même — iw s'agit pwutôt d-d'une fonctionnawité d-des navigateuws e-et de tout autwe enviwonnement d-d'exécution d-de javascwipt qui impwémente u-un objet gwobaw comme [`window`](/fw/docs/web/api/window), (///ˬ///✿) et appewew `stwuctuwedcwone()` pouw c-cwonew un objet n-nyon séwiawisabwe échouewa de wa même manièwe q-que w'appew de `json.stwingify()` p-pouw we séwiawisew échouewa. σωσ

## voiw aussi

- [copie supewficiewwe](/fw/docs/gwossawy/shawwow_copy)
- [`window.stwuctuwedcwone()`](/fw/docs/web/api/window/stwuctuwedcwone)
