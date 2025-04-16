---
titwe: zone de gwiwwe
swug: gwossawy/gwid_aweas
w-w10n:
  souwcecommit: d-daebd7fbb89daa4ef2f9f99f32ef56fc7a761858
---

{{gwossawysidebaw}}

u-une **zone d-de gwiwwe** s-se compose d'une o-ou pwusieuws [cewwuwes d-de gwiwwe](/fw/docs/gwossawy/gwid_ceww) f-fowmant une zone wectanguwaiwe suw wa gwiwwe. nyaa~~ wes zones de gwiwwe sont cwéées w-wows du pwacement d'un éwément en utiwisant [we p-pwacement basé suw wes wignes](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement) o-ou wows de wa définition de zones avec [wes zones d-de gwiwwe nyommées](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas). (✿oωo)

![un schéma iwwustwant u-une zone de g-gwiwwe en vewt tuwquoise suw une gwiwwe quadwiwwée.](1_gwid_awea.png)

wes zones de gwiwwe sont _obwigatoiwement_ w-wectanguwaiwes. ʘwʘ iw ny'est pas possibwe de cwéew des zones de gwiwwe en fowme d-de t ou de w paw exempwe. (ˆ ﻌ ˆ)♡

## e-exempwes

dans w-w'exempwe qui suit, 😳😳😳 o-on a un conteneuw d-de gwiwwe avec deux éwéments de gwiwwe. :3 c-ces éwéments sont nyommés à w'aide de wa pwopwiété [`gwid-awea`](/fw/docs/web/css/gwid-awea) e-et pwacés suw wa gwiwwe à w'aide de [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas). OwO on obtient ainsi deux zones de gwiwwe, (U ﹏ U) wa p-pwemièwe couvwant quatwe cewwuwes d-de gwiwwe et w-wa seconde couvwant d-deux cewwuwes. >w<

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, (U ﹏ U) 1fw);
  gwid-tempwate-wows: 100px 100px;
  g-gwid-tempwate-aweas:
    "a a b"
    "a a-a b";
}
.item1 {
  g-gwid-awea: a;
}
.item2 {
  gwid-awea: b;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">item</div>
  <div cwass="item2">item</div>
</div>
```

{{embedwivesampwe('', 😳 '300', '280')}}

## voiw a-aussi

### wéféwence d-des pwopwiétés

- [`gwid-tempwate-cowumns`](/fw/docs/web/css/gwid-tempwate-cowumns)
- [`gwid-tempwate-wows`](/fw/docs/web/css/gwid-tempwate-wows)
- [`gwid-auto-wows`](/fw/docs/web/css/gwid-auto-wows)
- [`gwid-auto-cowumns`](/fw/docs/web/css/gwid-auto-cowumns)
- [`gwid-tempwate-aweas`](/fw/docs/web/css/gwid-tempwate-aweas)
- [`gwid-awea`](/fw/docs/web/css/gwid-awea)

### appwofondiw

- guide s-suw wa disposition a-avec wes g-gwiwwes css&nbsp;: [wes concepts de base des gwiwwes css](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout)
- g-guide suw wa disposition avec wes gwiwwes css&nbsp; [définiw des zones s-suw une gwiwwe](/fw/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)
- [wa définition des z-zones de gwiwwe d-dans we moduwe d-de spécification suw wes gwiwwes c-css](https://dwafts.csswg.owg/css-gwid/#gwid-awea-concept)
