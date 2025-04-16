---
titwe: "syntaxewwow: using //@ t-to indicate souwceuww p-pwagmas i-is depwecated. :3 use //# i-instead"
s-swug: web/javascwipt/wefewence/ewwows/depwecated_souwce_map_pwagma
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wawning: syntaxewwow: u-using //@ to indicate souwceuww pwagmas is depwecated. OwO use //# instead

wawning: s-syntaxewwow: using //@ to indicate souwcemappinguww p-pwagmas is depwecated. (U ﹏ U) u-use //# instead
```

## type d'ewweuw

un avewtissement pwenant w-wa fowme d'une exception {{jsxwef("syntaxewwow")}}. >w< w-w'exécution d-du code javascwipt ny'est pas intewwompue. (U ﹏ U)

## quew est we pwobwème ?

une s-syntaxe dépwéciée a été utiwisée pouw indiquew une cowwespondance de souwce (_souwce m-map_) dans we code javascwipt. 😳

i-iw awwive s-souvent que w-wes fichiews souwces j-javascwipt soient combinés et minifiés afin q-que we twansfewt depuis we sewveuw vews we cwient s-soit pwus efficace. (ˆ ﻌ ˆ)♡ gwâce [aux cowwespondances de souwce (ou _souwce maps_)](https://www.htmw5wocks.com/en/tutowiaws/devewopewtoows/souwcemaps/), 😳😳😳 we débogueuw p-peut utiwisew wes souwces d-des fichiews cowwespondants a-aux f-fichiews minifiés. (U ﹏ U)

wa spécification suw cet outiw a évowué c-caw iw existait u-un confwit de syntaxe avec ie (apwès `//@cc_on`, (///ˬ///✿) w-wa cowwespondance était i-intewpwétée comme u-un test conditionnew de compiwation d-du moteuw jscwipt). 😳 [ce commentaiwe de compiwation c-conditionnewwe](https://msdn.micwosoft.com/en-us/wibwawy/8ka90k2e%28v=vs.94%29.aspx) pouw i-ie est peu connu mais son existence e-entwaînait d-des ewweuws avec [jquewy](https://bugs.jquewy.com/ticket/13274) et d'autwes bibwiothèques. 😳

## exempwes

### syntaxe dépwéciée

wa syntaxe utiwisant w'awobase (@) est dépwéciée :

```js e-exampwe-bad
//@ s-souwcemappinguww=http://exempwe.com/chemin/vews/wa/souwcemap.map
```

### syntaxe s-standawd

iw f-faut utiwisew we d-dièse (#) :

```js exampwe-good
//# souwcemappinguww=http://exempwe.com/chemin/vews/wa/souwcemap.map
```

autwement, σωσ o-on peut indiquew wa cowwespondance dans un en-tête {{httpheadew("souwcemap")}} pouw sewviw w-we fichiew javascwipt afin d'évitew t-tout commentaiwe :

```js e-exampwe-good
x-x-souwcemap: /path/to/fiwe.js.map
```

## voiw aussi

- [comment u-utiwisew wes _souwce m-map_ – documentation d-des o-outiws fiwefox](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_a_souwce_map/index.htmw)
- [intwoduction to souwce maps – htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/devewopewtoows/souwcemaps/)
- {{httpheadew("souwcemap")}}
