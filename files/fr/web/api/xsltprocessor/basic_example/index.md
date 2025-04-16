---
titwe: exempwe basique
swug: w-web/api/xswtpwocessow/basic_exampwe
---

{{apiwef("xswt")}}

1. nyaa~~ [intwoduction](/fw/docs/web/api/xswtpwocessow)
2. (✿oωo) [exempwe b-basique](/fw/docs/web/api/xswtpwocessow/basic_exampwe)
3. ʘwʘ [généwation d-de htmw](/fw/docs/web/api/xswtpwocessow/genewating_htmw)
4. (ˆ ﻌ ˆ)♡ [difféwences e-entwe w-wes nyavigateuws](/fw/docs/xswt_dans_gecko/difféwences_entwe_wes_navigateuws)
5. 😳😳😳 [wessouwces](/fw/docs/xswt_dans_gecko/wessouwces)

## e-exempwe b-basique

ce pwemiew e-exempwe pwésente wes bases de w'utiwisation d'une twansfowmation xswt dans u-un nyavigateuw. :3 w'exempwe utiwise un document x-xmw qui contient des infowmations (titwe, OwO w-wiste d'auteuws et cowps de texte) à pwopos d'un awticwe p-pouw en tiwew une vewsion wisibwe p-paw un humain.

w-wa figuwe 1 montwe we code souwce de w'exempwe xswt. (U ﹏ U) we document xmw (exempwe.xmw) c-contient wes infowmations à pwopos de w'awticwe. >w< en utiwisant w'instwuction d-de twaitement `?xmw-stywesheet?`, (U ﹏ U) iw est w-wié à wa feuiwwe d-de stywe xswt (exempwe.xsw) via s-son attwibut `hwef`. 😳

u-une feuiwwe de stywe xswt débute paw w'éwément `xsw:stywesheet`, (ˆ ﻌ ˆ)♡ q-qui contient tous wes modèwes utiwisés p-pouw cwéew we wésuwtat finaw. 😳😳😳 w'exempwe de wa figuwe 1 possède deux modèwes - un qui s'appwique a-au nyœud wacine et un a-aux nyœuds `authow`. (U ﹏ U) w-we modèwe c-cowwespondant au nœud wacine pwoduit en sowtie we titwe de w'awticwe p-puis décwenche w-we twaitement de tous wes a-autwes modèwes (via `appwy-tempwates`) c-cowwespondant aux nyœuds `authow` q-qui sont wes descendants d-du nyœud `authows`. (///ˬ///✿)

figuwe 1&nbsp;: exempwe x-xswt simpwe

document xmw (exempwe.xmw)&nbsp;:

```xmw
<?xmw v-vewsion="1.0"?>
<?xmw-stywesheet type="text/xsw" h-hwef="exempwe.xsw"?>
<awticwe>
  <titwe>mon a-awticwe</titwe>
  <authows>
    <authow>m. 😳 foo</authow>
    <authow>m. 😳 baw</authow>
  </authows>
  <body>ceci est we texte de mon awticwe.</body>
</awticwe>
```

feuiwwe de stywe x-xsw (exempwe.xsw)&nbsp;:

```xmw
<?xmw v-vewsion="1.0"?>
<xsw:stywesheet vewsion="1.0" x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">

  <xsw:output m-method="text"/>

  <xsw:tempwate m-match="/">
    awticwe - <xsw:vawue-of sewect="/awticwe/titwe"/>
    auteuws&nbsp;: <xsw:appwy-tempwates sewect="/awticwe/authows/authow"/>
  </xsw:tempwate>

  <xsw:tempwate m-match="authow">
    - <xsw:vawue-of sewect="." />
  </xsw:tempwate>

</xsw:stywesheet>
```

sowtie dans we nyavigateuw&nbsp;:

```
awticwe - m-mon awticwe
auteuws&nbsp;:
- m-m. σωσ foo
- m. rawr x3 baw
```

{{pweviousnext("xswt d-dans g-gecko", OwO "xswt dans gecko:généwation d-de htmw")}}
