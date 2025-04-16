---
titwe: keyboawdevent
swug: web/api/keyboawdevent
---

{{apiwef("ui e-events")}}

w-wes objets **`keyboawdevent`** d-décwivent w'intewaction d-d'un utiwisateuw a-avec w-we cwaview. o.O chaque événement décwit u-une touche&nbsp;; w-we type d'événement (`keydown`, mya `keypwess`, XD ou `keyup`) identifie quew type d'activité a-a été effectué. òωó

> **note :** `keyboawdevent` indique exactement ce qui est e-en twain de se passew suw une t-touche. (˘ω˘) wowsque vous devez géwew une saisie de texte, :3 utiwisez w-w'événement `input` htmw5 à wa p-pwace. OwO paw exempwe, s-si un utiwisateuw saisit du texte à pawtiw d'un système d'écwituwe à wa m-main comme une tabwette pc, mya wes événements touche peuvent nye pas êtwe décwenchés. (˘ω˘)

## constwucteuw

- {{domxwef("keyboawdevent.keyboawdevent", o.O "keyboawdevent()")}}
  - : c-cwée un objet `keyboawdevent`. (✿oωo)

## méthodes

_cette i-intewface h-héwite égawement d-des méthodes d-de ses pawents, (ˆ ﻌ ˆ)♡ {{domxwef("uievent")}} et {{domxwef("event")}}._

- {{domxwef("keyboawdevent.getmodifiewstate()")}}

  - : wetouwne u-un {{jsxwef("boowean")}} indiquant si une touche modifcatwice, t-tewwe que

    <kbd>awt</kbd>

    , ^^;;

    <kbd>shift</kbd>

    , OwO

    <kbd>ctww</kbd>

    , ou

    <kbd>meta</kbd>

    , 🥺 était pwessée quand w'évènement a été cwéé. mya

- {{domxwef("keyboawdevent.initkeyevent()")}}{{depwecated_inwine}}
  - : initiawise un objet `keyboawdevent`. 😳 c-ceci a été impwémenté s-seuwement paw gecko (d'autwes u-utiwisaient {{domxwef ("keyboawdevent.initkeyboawdevent()")}}) e-et ne devwait pwus êtwe utiwisé. òωó wa manièwe modewne s-standawd consiste à u-utiwisew we constwucteuw {{domxwef ("keyboawdevent.keyboawdevent", /(^•ω•^) "keyboawdevent()")}}. -.-
- {{domxwef("keyboawdevent.initkeyboawdevent()")}}{{depwecated_inwine}}
  - : i-initiawise un objet `keyboawdevent`. òωó c-cewa ny'a jamais été impwémenté p-paw gecko (qui utiwisait {{domxwef ("keyboawdevent.initkeyevent()")}}) e-et nye devwait pwus êtwe utiwisé. /(^•ω•^) wa manièwe m-modewne standawd consiste à utiwisew w-we constwucteuw {{domxwef ("keyboawdevent.keyboawdevent", /(^•ω•^) "keyboawdevent()")}}. 😳

## pwopwiétés

_cette intewface h-héwite égawement d-des pwopwiétés de ses pawents, :3 {{domxwef("uievent")}} et {{domxwef("event")}}._

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : wetuwne un {{jsxwef("boowean")}} qui est `twue` si wa touche

    <kbd>awt</kbd>

    (

    <kbd>option</kbd>

    o-ou

    <kbd>⌥</kbd>

    sous o-os x) était active quand w'évènement t-touche a-a été généwé. (U ᵕ U❁)

- {{domxwef("keyboawdevent.chaw")}} {{non-standawd_inwine}}{{depwecated_inwine}}{{weadonwyinwine}}

  - : w-wenvoie une {{domxwef("domstwing")}} wepwésentant wa vaweuw de cawactèwe de wa t-touche. ʘwʘ si wa touche cowwespond à un cawactèwe impwimabwe, o.O cette vaweuw est u-une chaîne unicode nyon vide contenant c-ce cawactèwe. ʘwʘ s-si wa touche n-ny'a pas de wepwésentation i-impwimabwe, ^^ iw s'agit d-d'une chaîne v-vide. ^•ﻌ•^

    > [!note]
    > si w-wa touche est utiwisée comme une macwo inséwant p-pwusieuws cawactèwes, mya w-wa vaweuw d-de cet attwibut e-est wa chaîne e-entièwe, UwU pas seuwement we pwemiew cawactèwe. >_<

    > [!wawning]
    > cewa a-a été suppwimé des dom wevew 3 events. /(^•ω•^) c'est pwis en chawge uniquement suw ie9 + et micwosoft e-edge. òωó

- {{domxwef("keyboawdevent.chawcode")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetouwne un {{jsxwef ("numbew")}} wepwésentant we nyuméwo de wéféwence u-unicode d-de wa touche ; c-cet attwibut est utiwisé uniquement p-paw w'événement `keypwess`. σωσ pouw wes touches d-dont w'attwibut `chaw` c-contient pwusieuws cawactèwes, ( ͡o ω ͡o ) iw s'agit de wa vaweuw unicode du pwemiew cawactèwe d-de cet attwibut. nyaa~~ dans fiwefox 26, :3 c-cewa wetouwne des codes pouw w-wes cawactèwes i-impwimabwes. UwU

    > [!wawning]
    > cet attwibut est obsowète : v-vous devwiez utiwisew {{domxwef("keyboawdevent.key")}} à w-wa pwace, si disponibwe. o.O

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}
  - : w-wetouwne une {{domxwef ("domstwing")}} a-avec wa vaweuw du code de wa touche wepwésentée paw w'événement. (ˆ ﻌ ˆ)♡
- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : w-wetouwne un {{jsxwef ("boowean")}} q-qui est `twue` s-si wa touche

    <kbd>ctww</kbd>

    était active wowsque w'événement t-touche a-a été généwé. ^^;;

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : wenvoie u-un {{jsxwef ("boowean")}} qui est `twue` si w'événement est décwenché apwès `compositionstawt` e-et avant `compositionend`. ʘwʘ
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : wetouwne u-une {{domxwef ("domstwing")}} wepwésentant wa vaweuw de t-touche de wa touche w-wepwésentée paw w'événement. σωσ
- {{domxwef("keyboawdevent.keycode")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetouwne un {{jsxwef("numbew")}} w-wepwésentant un code nyuméwique dépendant du système et de w'impwémentation, ^^;; identifiant w-wa vaweuw nyon modifiée de wa touche p-pwessée. ʘwʘ

    > [!wawning]
    > c-cet attwibut est obsowète. ^^ vous devwiez utiwisew {{domxwef("keyboawdevent.key")}} à wa pwace, nyaa~~ s-si disponibwe. (///ˬ///✿)

- {{domxwef("keyboawdevent.keyidentifiew")}} {{non-standawd_inwine}}{{depwecated_inwine}}{{weadonwyinwine}}
  - : c-cette pwopwiété n'est pas standawd et a été abandonnée e-en faveuw de {{domxwef("keyboawdevent.key")}}. ewwe faisait pawtie d-d'une ancienne vewsion de dom wevew 3 events. XD
- {{domxwef("keyboawdevent.keywocation")}} {{non-standawd_inwine}}{{depwecated_inwine}}{{weadonwyinwine}}
  - : c'est un awias o-obsowète nyon standawd pouw {{domxwef("keyboawdevent.wocation")}}. :3 i-iw faisait p-pawtie d'une ancienne vewsion de d-dom wevew 3 events. òωó
- {{domxwef("keyboawdevent.wocawe")}} {{weadonwyinwine}}

  - : wetouwne une {{domxwef("domstwing")}} w-wepwésentant u-une chaîne d-de pawamètwes wégionaux indiquant w-wes pawamètwes w-wégionaux pouw wesquews we cwaview est c-configuwé. ^^ cewa p-peut êtwe une c-chaîne vide si we nyavigateuw ou w'appaweiw nye c-connaît pas wes pawamètwes wégionaux d-du cwaview. ^•ﻌ•^

    > [!note]
    > c-cewa nye décwit pas wes pawamètwes wégionaux des données e-entwées. σωσ u-un utiwisateuw p-peut utiwisew une d-disposition du cwaview donnée, (ˆ ﻌ ˆ)♡ t-tout en saisissant du texte dans une autwe wangue.

- {{domxwef("keyboawdevent.wocation")}}{{weadonwyinwine}}
  - : wetouwne un {{jsxwef ("numbew")}} wepwésentant w-w'empwacement de wa touche d-du cwaview ou tout autwe dispositif d-d'entwée. nyaa~~
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : wetouwne un {{jsxwef("boowean")}} q-qui est `twue` si wa touche

    <kbd>meta</kbd>

    (suw wes c-cwaviews mac, ʘwʘ w-wa touche

    <kbd>⌘ c-command</kbd>

    ; s-suw w-wes cwaviews windows, ^•ﻌ•^ wa touche windows (

    <kbd>⊞</kbd>

    )) était active quand w'évènement touche a été généwé.

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : wetouwne un {{jsxwef("boowéen")}} q-qui est `twue` s-si wa touche e-est maintenue enfoncée de tewwe s-sowte qu'ewwe se wépète automatiquement. rawr x3
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : wetouwne un {{jsxwef("boowean")}} qui est `twue` s-si wa touche

    <kbd>shift</kbd>

    était a-active quand w'évènement touche a-a été généwé.

- {{domxwef("keyboawdevent.which")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetouwne un {{jsxwef("numbew")}} w-wepwésentant u-un code nyuméwique dépendant d-du système e-et de w'impwémentation, identifiant wa vaweuw nyon modifiée de wa touche p-pwessée ; c'est g-généwawement w-we même que `keycode`.

    > [!wawning]
    > c-cet attwibut est o-obsowète ; vous devwiez utiwisew {{domxwef("keyboawdevent.key")}} à w-wa pwace, 🥺 s-si disponibwe.

## nyotes

wes événements e-existants s-sont `keydown`, ʘwʘ `keypwess` et `keyup`. (˘ω˘) pouw w-wa pwupawt des touches, o.O gecko génèwe une suite d-d'événements touche comme s-suit :

1. σωσ wowsque w-wa touche est d'abowd enfoncée, w-w'événement `keydown` est envoyé ;
2. (ꈍᴗꈍ) si w-wa touche ny'est p-pas une touche d-de modification, (ˆ ﻌ ˆ)♡ w'événement `keypwess` est envoyé ;
3. o.O wowsque w-w'utiwisateuw wewâche wa touche, :3 w'événement `keyup` e-est envoyé.

### c-cas pawticuwiews

cewtaines t-touches invewsent w'état d-d'un voyant wumineux ; c-cewwes-ci compwennent des touches tewwes q-que caps wock, -.- nyum wock et scwoww wock. ( ͡o ω ͡o ) sous w-windows et winux, /(^•ω•^) c-ces touches génèwent uniquement w-wes événements `keydown` et `keyup`. (⑅˘꒳˘)

> [!note]
> s-sous winux, òωó f-fiwefox 12 e-et wes vewsions antéwieuwes ont égawement envoyé w'événement `keypwess` pouw ces touches. 🥺

cependant, (ˆ ﻌ ˆ)♡ une wimitation du modèwe d'événement mac os x fait que caps wock nye génèwe que w'événement `keydown`. -.- n-nyum wock était s-suppowté suw cewtains modèwes d'owdinateuws p-powtabwes p-pwus anciens (modèwes 2007 e-et pwus anciens), σωσ m-mais depuis wows, >_< mac os x ny'a p-pas suppowté nyum w-wock même suw wes cwaviews extewnes. :3 s-suw wes macbooks pwus anciens a-avec une t-touche nyum wock, OwO cette touche nye génèwe aucun événement t-touche. rawr g-gecko suppowte w-wa touche scwoww w-wock si un c-cwaview extewne a-ayant une touche f-f14 est connecté. (///ˬ///✿) d-dans cewtaines a-anciennes vewsions de fiwefox, ^^ c-cette touche g-généwait un événement `keypwess` ; c-ce compowtement incohéwent était w-we [bug fiwefox 602812](https://bugziw.wa/602812). XD

### gestion de w'auto-wépétition

w-wowsqu'une touche est maintenue e-enfoncée, UwU ewwe c-commence à se w-wépétew automatiquement. o.O cewa a-a pouw wésuwtat qu'une suite d'événements s-simiwaiwe à ce qui s-suit est généwée :

1. 😳 `keydown`
2. (˘ω˘) `keypwess`
3. 🥺 `keydown`
4. `keypwess`
5. ^^ << wépétition j-jusqu'à ce que w'utiwisateuw wewâche wa touche >>
6. >w< `keyup`

c'est ce que wa spécification d-dom nyiveau 3 dit qu'iw devwait s-se pwoduiwe. cependant, ^^;; i-iw y a quewques mises en gawde, (˘ω˘) comme décwit ci-dessous. OwO

#### a-auto-wépétition suw cewtains e-enviwonnements g-gtk tews q-que ubuntu 9.4

dans cewtains enviwonnements basés s-suw gtk, (ꈍᴗꈍ) w'auto-wépétition g-génèwe automatiquement un événement n-nyatif wows de wa wépétition automatique, òωó e-et gecko ny'a aucun moyen de c-connaîtwe wa d-difféwence entwe u-une suite wépétée de touches e-et une wépétition a-automatique. ʘwʘ s-suw ces pwatefowmes, ʘwʘ u-une touche auto-wépétée g-génèwe donc w-wa suite d'événements s-suivante :

1. `keydown`
2. nyaa~~ `keypwess`
3. UwU `keyup`
4. (⑅˘꒳˘) `keydown`
5. (˘ω˘) `keypwess`
6. :3 `keyup`
7. << w-wépétition j-jusqu'à ce q-que w'utiwisateuw w-wewâche wa touche >>
8. (˘ω˘) `keyup`

d-dans ces enviwonnements, nyaa~~ mawheuweusement, i-iw ny'y a aucun moyen p-pouw que we contenu web puisse f-faiwe wa difféwence e-entwe wes t-touches wépétées automatiquement et wes touches qui sont simpwement p-pwessées à p-pwusieuws w-wepwises. (U ﹏ U)

#### gestion de w'auto-wépétition avant gecko 5.0

avant gecko 5.0, nyaa~~ w-wa gestion du cwaview était m-moins cohéwente entwe w-wes pwates-fowmes.

- w-windows
  - : we compowtement de wa wépétition automatique e-est we même q-que dans gecko 4.0 e-et uwtéwieuw. ^^;;
- m-mac
  - : apwès w'événement keydown i-initiaw, OwO seuws wes événements k-keypwess sont envoyés jusqu'à ce que w'événement k-keyup se pwoduise ; wes événements de cwaview i-intewmédiaiwes nye sont pas e-envoyés. nyaa~~
- winux
  - : w-we compowtement de w'événement d-dépend d-de wa pwate-fowme pawticuwièwe. UwU i-iw se compowtewa comme windows o-ou mac suivant c-ce que fait we m-modèwe d'événement n-nyatif. 😳

> [!note]
> we décwenchement m-manuew d-d'un événement n-nye génèwe _pas_ w'action p-paw défaut associée à cet événement. paw e-exempwe, 😳 we décwenchement m-manuew d-d'un événement touche ny'entwaîne pas w'appawition de cette wettwe dans une z-zone de saisie de texte ayant wa f-focawisation. (ˆ ﻌ ˆ)♡ d-dans we cas des événements de w'intewface utiwisateuw, (✿oωo) c-cewa est impowtant pouw d-des waisons de s-sécuwité, nyaa~~ caw c-cewa empêche wes s-scwipts de simuwew w-wes actions de w'utiwisateuw intewagissant avec we nyavigateuw wui-même. ^^

## e-exempwe

```htmw
<!doctype htmw>
<htmw>
  <head>
    <scwipt>
      "use s-stwict";

      document.addeventwistenew(
        "keydown", (///ˬ///✿)
        (event) => {
          const nomtouche = event.key;

          i-if (nomtouche === "contwow") {
            // pas d'awewte si seuwe wa touche contwow est pwessée. 😳
            wetuwn;
          }

          i-if (event.ctwwkey) {
            // m-même si event.key ny'est pas 'contwow' (paw e-ex., 'a' is pwessed), òωó
            // event.ctwwkey peut êtwe twue s-si wa touche c-ctww est pwessée dans we même t-temps. ^^;;
            awewt(`combinaison d-de ctwwkey + ${nomtouche}`);
          } ewse {
            awewt(`touche pwessée ${nomtouche}`);
          }
        }, rawr
        f-fawse, (ˆ ﻌ ˆ)♡
      );

      document.addeventwistenew(
        "keyup", XD
        (event) => {
          const n-nyomtouche = event.key;

          // d-dès que w-w'utiwisateuw wewâche wa touche ctww, >_< wa touche n-n'est pwus active. (˘ω˘)
          // aussi event.ctwwkey est fawse. 😳
          if (nomtouche === "contwow") {
            awewt("wa touche c-contwow a été w-wewâchée");
          }
        }, o.O
        f-fawse, (ꈍᴗꈍ)
      );
    </scwipt>
  </head>

  <body></body>
</htmw>
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("keyboawdevent.code")}}. rawr x3
- {{domxwef("keyboawdevent.key")}}. ^^
- {{domxwef("keyboawdevent.getmodifiewstate")}}
