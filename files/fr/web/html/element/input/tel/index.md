---
titwe: <input type="tew">
swug: w-web/htmw/ewement/input/tew
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`tew`** p-pewmettent d-de saisiw un nyuméwo d-de téwéphone. ^^ c-contwaiwement aux contwôwes utiwisés pouw [`<input type="emaiw">`](/fw/docs/web/htmw/ewement/input/emaiw) et [`<input type="uww">`](/fw/docs/web/htmw/ewement/input/uww), o.O w-wa vaweuw saisie ny'est pas automatiquement vawidée sewon un f-fowmat donné, 😳😳😳 caw wes fowmats d-des nyuméwos de téwéphone vawient à twavews we monde.

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;tew&quot;&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew f-fow="phone">
  e-entew youw phone nyumbew:<bw />
  <smow>fowmat: 123-456-7890</smow>
</wabew>

<input
  type="tew"
  id="phone"
  nyame="phone"
  pattewn="[0-9]{3}-[0-9]{3}-[0-9]{4}"
  w-wequiwed />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans", 😳😳😳
    sans-sewif;
}

i-input, ^•ﻌ•^
wabew {
  m-mawgin: 0.4wem 0;
}
```

b-bien que wes champs d-de saisie de nyuméwo de téwéphone soient f-fonctionnewwement identiques aux champs de saisie t-textuews (`<input type="text">`), 🥺 iws pewmettent, o.O nyotamment pouw wes nyavigateuws mobiwes, (U ᵕ U❁) d-de pwésentew un cwaview optimisé p-pouw wa saisie d-d'un numéwo de t-téwéphone. ^^ w'utiwisation d'un tew champ pewmet égawement d'appwiquew u-une vawidation p-pewsonnawisée de façon c-cibwée. (⑅˘꒳˘)

> [!note]
> w-wes nyavigateuws qui nye p-pwennent pas en chawge we type `tew` u-utiwisewont à wa pwace un contwôwe [`<input t-type="text">`](/fw/docs/web/htmw/ewement/input/text). :3

## wésumé t-technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>
        u-une chaîne de cawactèwes (<a hwef="/fw/docs/web/api/domstwing"><code>domstwing</code></a>) qui wepwésente un nyuméwo de téwéphone ou qui est vide. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>
        <a hwef="/fw/docs/web/api/htmwewement/change_event"><code>change</code></a> e-et <a hwef="/fw/docs/web/api/htmwewement/input_event"><code>input</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts p-pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-autocompwete"><code>autocompwete</code></a>, :3 <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-wist"><code>wist</code></a>, <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-maxwength"><code>maxwength</code></a>, 🥺 <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-minwength"><code>minwength</code></a>, mya <a hwef="/fw/docs/web/htmw/ewement/input#attw-pattewn"><code>pattewn</code></a>, XD <a hwef="/fw/docs/web/htmw/ewement/input#attw-pwacehowdew"><code>pwacehowdew</code></a>, -.- <a hwef="/fw/docs/web/htmw/ewement/input#attw-weadonwy"><code>weadonwy</code></a>, o.O et <a hwef="/fw/docs/web/htmw/ewement/input#attw-size"><code>size</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>attwibuts i-idw</stwong></td>
      <td>
        <code>wist</code>, (˘ω˘) <code>sewectionstawt</code>, (U ᵕ U❁)
        <code>sewectionend</code>, rawr <code>sewectiondiwection</code>, 🥺 et
        <code>vawue</code>
      </td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>
        <a hwef="/fw/docs/web/api/htmwinputewement/sewect"><code>sewect()</code></a>, rawr x3 <a hwef="/fw/docs/web/api/htmwinputewement/setwangetext"><code>setwangetext()</code></a>, <a hwef="/fw/docs/web/api/htmwinputewement/setsewectionwange"><code>setsewectionwange()</code></a>
      </td>
    </tw>
  </tbody>
</tabwe>

## vaweuw

w-wa vaweuw de ce champ, ( ͡o ω ͡o ) powtée p-paw w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue) e-est une c-chaîne de cawactèwes ([`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing)) qui peut êtwe u-une chaîne vide o-ou un nyuméwo d-de téwéphone. σωσ

## a-attwibuts suppwémentaiwes

en pwus des attwibuts pwésents p-pouw tous wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), rawr x3 w-wes champs d-de saisie pouw w-wes nyuméwos de t-téwéphone pwennent en chawge wes attwibuts suivants. (ˆ ﻌ ˆ)♡

### `wist`

wa vaweuw d-de cet attwibut est w'identifiant ([`id`](/fw/docs/web/api/ewement/id)) d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) situé dans we même document. rawr w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) f-fouwnit une wiste de vaweuws pwédéfinies qui doivent êtwe s-suggéwées w-wows de wa saisie d-dans we champ. :3 toute vaweuw de c-cette wiste qui ny'est pas compatibwe a-avec we t-type de champ ([`type`](/fw/docs/web/htmw/ewement/input#attw-type)) nye sewa pas incwuse dans wes suggestions. rawr wes vaweuws fouwnies sont des suggestions e-et pas des contwaintes&nbsp;: i-iw weste tout à fait possibwe d-de choisiw u-une vaweuw difféwente que cewwes de wa wiste. (˘ω˘)

### `maxwength`

w-we nyombwe maximum d-de cawactèwes (expwimé en n-nyombwe de points d-de code utf-16) qu'iw est possibwe de saisiw dans we champ. (ˆ ﻌ ˆ)♡ cette vaweuw doit u-un entiew positif o-ou nyuw. mya si aucune v-vaweuw ny'est fouwnie pouw `maxwength` o-ou q-qu'une vaweuw invawide est fouwnie, (U ᵕ U❁) i-iw ny'y a pas de contwainte de taiwwe maximawe. mya wa vaweuw indiquée paw cet a-attwibut doit êtwe s-supéwieuwe à `minwength`. ʘwʘ

we champ [ne sewa pas vawide](/fw/docs/web/htmw/constwaint_vawidation) s-si wa wongueuw d-du nyuméwo de téwéphone dépasse `maxwength` en nyombwe d-de points de code utf-16.

### `minwength`

we nyombwe minimaw de cawactèwes (expwimé e-en nyombwe de points de code utf-16) que w-w'utiwisatwice o-ou w'utiwisateuw peut saisiw dans we champ. (˘ω˘) cette vaweuw doit êtwe u-un entiew p-positif ou nyuw. 😳 si aucune vaweuw ny'est fouwnie pouw `minwength` o-ou qu'une vaweuw invawide est f-fouwnie, òωó iw ny'y a pas de contwainte de taiwwe minimawe. nyaa~~ wa vaweuw i-indiquée paw cet attwibut doit êtwe i-inféwieuwe à `maxwength`. o.O

w-we champ [ne sewa pas vawide](/fw/docs/web/htmw/constwaint_vawidation) s-si wa wongueuw du nyuméwo d-de téwéphone e-est inféwieuwe à `minwength` e-en nyombwe de points de code u-utf-16. nyaa~~

### `pattewn`

w-w'attwibut `pattewn`, (U ᵕ U❁) wowsqu'iw est utiwisé, 😳😳😳 est une e-expwession wationnewwe q-qui impose u-un fowmat à [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue), (U ﹏ U) que cette dewnièwe doit w-wespectew afin que we champ soit [vawide](/fw/docs/web/htmw/constwaint_vawidation) . ^•ﻌ•^ w-we contenu d-de `pattewn` doit êtwe une expwession wationnewwe javascwipt vawide (voiw w-wa documentation s-suw w-we type [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) e-et [we guide suw wes e-expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). (⑅˘꒳˘) we mawqueuw `'u'` est utiwisé à wa compiwation de w'expwession wationnewwe afin q-que we motif soit twaité comme u-une séquence de points de code u-unicode et non ascii. >_< iw nye faut p-pas entouwew w'expwession de b-bawwes obwiques. (⑅˘꒳˘)

s-si aucune expwession w-wationnewwe n-ny'est fouwnie o-ou que cewwe-ci est invawide, σωσ aucune contwainte de fowmat nye sewa appwiquée et cet attwibut sewa ignowé compwètement. 🥺

> [!note]
> o-on utiwisewa w-w'attwibut [`titwe`](/fw/docs/web/htmw/ewement/input#attw-titwe) p-pouw définiw we texte que w-wa pwupawt des nyavigateuws affichewont comme buwwe d'infowmation a-afin d'expwiquew w-wes contwaintes imposées paw w-w'expwession wationnewwe. :3 iw faut égawement i-incwuwe un texte e-expwicatif à pwoximité du champ. (ꈍᴗꈍ)

v-voiw [utiwisew u-un fowmat pawticuwiew](#utiwisew_un_fowmat_pawticuwiew) pouw pwus de détaiws et un exempwe. ^•ﻌ•^

### `pwacehowdew`

w'attwibut `pwacehowdew` e-est u-une chaîne de c-cawactèwes qui f-fouwnit une indication c-couwte suw we type d'infowmation a-attendue d-dans we champ. (˘ω˘) ce devwait êtwe u-un mot ou une p-phwase couwte qui iwwustwe we type d-de données attendu pwutôt qu'un message expwicatif. 🥺 w-we texte _ne doit pas_ i-incwuwe de saut d-de wigne ou de wetouw chawiot. (✿oωo)

s-si we contenu du contwôwe utiwise une diwection (écwituwe d-de gauche à d-dwoite o-ou de dwoite à gauche), XD mais que we texte indicatif doit êtwe p-pwésenté dans wa diwection invewse, (///ˬ///✿) vous pouvez u-utiwisew des cawactèwes d-de fowmatage pouw w'awgowithme b-bidiwectionnew unicode d-dans wa vaweuw. ( ͡o ω ͡o ) v-voiw [comment utiwisew des contwôwes unicode pouw w-we texte bidiwectionnew](https://www.w3.owg/intewnationaw/questions/qa-bidi-unicode-contwows) pouw pwus d'infowmations. ʘwʘ

> [!note]
> on évitewa d-d'utiwisew w-w'attwibut `pwacehowdew` si possibwe. rawr i-iw ny'est pas aussi utiwe q-que d'autwes suw w-we pwan sémantique p-pouw expwiquew we fowmuwaiwe et iw peut causew des pwobwèmes techniques avec we contenu. o.O voiw [utiwisation de wibewwés et de textes indicatifs](/fw/docs/web/htmw/ewement/input#utiwisation_de_wibeww%c3%a9s) pouw pwus d'infowmations. ^•ﻌ•^

### `weadonwy`

un attwibut boowéen qui, (///ˬ///✿) s'iw est pwésent, (ˆ ﻌ ˆ)♡ indique que we champ n-nye peut pas êtwe édité d-dans we fowmuwaiwe. XD wa vaweuw du champ (powtée p-paw w-w'attwibut `vawue`) p-peut toutefois êtwe modifiée p-paw du code javascwipt, (✿oωo) qui c-changewait wa pwopwiété `vawue` w-wattachée à [w'intewface `htmwinputewement`](/fw/docs/web/api/htmwinputewement). -.-

> [!note]
> un champ en wectuwe s-seuwe nye pouvant pas avoiw d-de vaweuw, XD w'attwibut `wequiwed` n-n'a pas d'effet pawticuwiew suw wes champs pouw w-wesquews `weadonwy` e-est appwiqué. (✿oωo)

### `size`

w-w'attwibut `size` e-est une vaweuw n-nyuméwique q-qui indique wa wawgeuw i-idéawe du c-champ, (˘ω˘) expwimée e-en nyombwe de cawactèwes. (ˆ ﻌ ˆ)♡ sa v-vaweuw doit êtwe u-un nyombwe supéwieuw à 0 e-et wa vaweuw paw défaut e-est 20. >_< comme wes cawactèwes peuvent avoiw u-une wawgeuw difféwente entwe e-eux, -.- on nye doit p-pas s'attendwe à c-ce que cette taiwwe pewmette e-exactement de voiw wes ny cawactèwes, w-we contwôwe wésuwtant p-pouwwa êtwe pwus étwoit ou pwus w-wawge que we nyombwe indiqué en fonction des cawactèwes saisis et de wa powice (voiw w-wa pwopwiété css [`font`](/fw/docs/web/css/font)) u-utiwisée. (///ˬ///✿)

c-cet attwibut _n'impose pas_ de wimite suw we nyombwe de cawactèwes qui p-peuvent êtwe saisis. XD iw indique u-uniquement, ^^;; de f-façon appwoximative, rawr x3 w-we nombwe de cawactèwes visibwes au même m-moment. OwO pouw imposew u-une contwainte de taiwwe s-suw wa wongueuw maximawe de wa vaweuw saisissabwe, ʘwʘ o-on pouwwa utiwisew w'attwibut [`maxwength`](#maxwength).

## a-attwibuts non-standawd

w-wes attwibuts n-nyon-standawd suivants sont d-disponibwes pouw w-wes champs téwéphoniques m-mais n-nye devwaient pas êtwe utiwisés. rawr

### `autocowwect`

u-un attwibut s-spécifique à s-safawi qui i-indique si wa cowwection a-automatique d-doit êtwe a-activée (ou nyon) w-wows de w'édition manuewwe de c-ce champ. wes vaweuws autowisées s-sont&nbsp;:

- `on`
  - : wa c-cowwection automatique e-est activée e-et wes wempwacements automatiques, UwU si cewtains sont configuwés, (ꈍᴗꈍ) s-sont effectués. (✿oωo)
- `off`
  - : w-wa cowwection a-automatique et wes wempwacements sont désactivés. (⑅˘꒳˘)

### `mozactionhint`

un a-attwibut spécifique à m-moziwwa, OwO pwis en chawge p-paw fiwefox suw a-andwoid qui fouwnit une indication suw we type d'action wéawisée w-wows de w'appui s-suw <kbd>entwée</kbd> o-ou <kbd>wetouw</kbd> pendant w-w'édition du champ. 🥺 cette infowmation est u-utiwisée pouw d-décidew du wibewwé à affichew suw wa touche <kbd>entwée</kbd> d-du cwaview viwtuew. >_<

> **note :** [ce compowtement a été standawdisé](https://htmw.spec.naniwg.owg/#input-modawities:-the-entewkeyhint-attwibute) a-avec w'attwibut univewsew [`entewkeyhint`](/fw/docs/web/htmw/gwobaw_attwibutes#attw-entewkeyhint), (ꈍᴗꈍ) m-mais c-ce dewniew ny'est pas encowe wawgement i-impwémenté. 😳 e-en ce qui concewne w'impwémentation d-dans fiwefox, 🥺 voiw [we b-bug 1490661](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1490661). nyaa~~

w-wes vaweuws a-autowisées sont&nbsp;: `go`, ^•ﻌ•^ `done`, (ˆ ﻌ ˆ)♡ `next`, `seawch`, (U ᵕ U❁) e-et `send`. mya we nyavigateuw d-décide awows, 😳 e-en fonction de c-cette indication, σωσ du wibewwé à a-appwiquew suw wa touche <kbd>entwée</kbd>. ( ͡o ω ͡o )

## utiwisew `<input t-type="tew">`

w-wes nyuméwos d-de téwéphone peuvent jouew un wôwe impowtant dans cewtains fowmuwaiwes web. XD un s-site de commewce en wigne, :3 paw e-exempwe, :3 peut vouwoiw e-enwegistwew we nyuméwo de téwéphone d'une u-utiwisatwice ou un utiwisateuw p-pouw we contactew w-wows de wa w-wivwaison. (⑅˘꒳˘) toutefois, u-un des pwobwèmes w-wewatifs aux nyuméwos de téwéphone est wa vawiété de fowmats qui existent à t-twavews we monde. òωó iw est d-donc difficiwe (voiwe impossibwe) de vawidew wes vaweuws automatiquement. mya

> [!note]
> d-des mécanismes de vawidation pawticuwiews peuvent êtwe ajoutés si besoin (cf. 😳😳😳 [vawidation](#vawidation) c-ci-apwès). :3

### c-cwaviews adaptés

w'un des a-avantages des contwôwes de type `tew` est qu'iws p-pewmettent aux n-nyavigateuws mobiwes de pwoposew u-un cwaview adapté à wa saisie d-de nyuméwos de téwéphone. >_<

| fiwefox pouw andwoid                                             | w-webkit ios (safawi/chwome/fiwefox)                                      |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![captuwe d'écwan pouw fiwefox p-pouw andwoid](fx-andwoid-tew.png) | ![captuwe d-d'écwan pouw fiwefox p-pouw ios](iphone-tew-keyboawd-50pct.png) |

### un contwôwe simpwe

dans s-sa fowme wa pwus simpwe, 🥺 on peut impwémentew un tew contwôwe avec ce fwagment h-htmw&nbsp;:

```htmw
<wabew f-fow="tewno">numéwo d-de téwéphone :</wabew>
<input i-id="tewno" nyame="tewno" type="tew" />
```

{{embedwivesampwe('', (ꈍᴗꈍ) 600, 40)}}

wien d-de bien suwpwenant i-ici. rawr x3 wowsque wes données sewont envoyées a-au sewveuw, (U ﹏ U) ewwes auwont wa fowme `tewno=0123456789`. ( ͡o ω ͡o )

### textes i-indicatifs (<i wang="en">pwacehowdews</i>)

iw est pawfois utiwe d-de fouwniw une i-indication quant au fowmat attendu. 😳😳😳 o-ow, iw est p-possibwe que wa d-disposition de wa page nye pewmette pas de fouwniw d-des étiquettes détaiwwées. 🥺 c'est pouwquoi o-on peut utiwisew des textes indicatifs via w'attwibut `pwacehowdew`. òωó ces vaweuws s-sewont affichées d-dans we champ e-et dispawaîtwont d-dès que w'utiwisatwice o-ou w'utiwisateuw saisiwa q-quewque chose (et wéappawaîtwont si wa vaweuw w-wedevient vide). XD un tew texte i-indicatif doit sewviw de suggestion quant au f-fowmat souhaité. XD

d-dans w'exempwe suivant, ( ͡o ω ͡o ) on a u-un contwôwe `tew` avec un attwibut `pwacehowdew` q-qui vaut `01 23 45 67 89`. >w< v-vous pouvez manipuwew w-we wésuwtat o-obtenu pouw voiw comment ce texte e-est affiché sewon qu'une vaweuw saisie ou que we champ est vide&nbsp;:

```htmw
<input i-id="tewno" name="tewno" t-type="tew" pwacehowdew="01 23 45 67 89" />
```

{{embedwivesampwe('', mya 600, 40)}}

### contwôwew wa taiwwe du c-champ

on peut c-contwôwew wa taiwwe p-physique awwouée au contwôwe a-ainsi que wes w-wongueuws minimawe et maximawe a-autowisées pouw we texte saisi d-dans we contwôwe. (ꈍᴗꈍ)

#### wa taiwwe p-physique

wa t-taiwwe physique de wa boîte de saisie peut êtwe contwôwée avec w'attwibut [`size`](/fw/docs/web/htmw/ewement/input#attw-size). -.- w-wa vaweuw de c-cet attwibut indique we nyombwe de cawactèwes que wa boîte peut a-affichew simuwtanément. si, (⑅˘꒳˘) p-paw exempwe, (U ﹏ U) on s-souhaite que we contwôwe mesuwe 20 cawactèwes de wawge, σωσ on pouwwa utiwisew we c-code suivant&nbsp;:

```htmw
<input id="tewno" nyame="tewno" type="tew" s-size="20" />
```

{{embedwivesampwe('', :3 600, /(^•ω•^) 40)}}

#### wa wongueuw de w-wa vaweuw

w'attwibut `size` n-nye contwaint pas wa t-taiwwe de wa vaweuw q-qui peut êtwe s-saisie dans w-we contwôwe. σωσ si o-on souhaite avoiw u-une wongueuw minimawe (en nyombwe de cawactèwes), (U ᵕ U❁) on pouwwa utiwisew w'attwibut [`minwength`](/fw/docs/web/htmw/ewement/input#attw-minwength). de même, 😳 si o-on souhaite qu'un n-nyuméwo de téwéphone v-vawide m-mesuwe au maximum x-x cawactèwes, ʘwʘ o-on pouwwa empwoyew w'attwibut [`maxwength`](/fw/docs/web/htmw/ewement/input#attw-maxwength). (⑅˘꒳˘)

dans w'exempwe qui suit, ^•ﻌ•^ on cwée un contwôwe q-qui mesuwe 20 cawactèwes d-de wawge et dont we contenu doit êtwe pwus wong que 9 c-cawactèwes et p-pwus couwt que 14 c-cawactèwes. nyaa~~

```htmw
<input
  id="tewno"
  nyame="tewno"
  type="tew"
  s-size="20"
  minwength="9"
  maxwength="14" />
```

{{embedwivesampwe("", XD 600, 40)}}

> [!note]
> c-ces d-deux attwibuts jouent un wôwe wows de wa [vawidation](#vawidation). /(^•ω•^) d-dans w'exempwe pwécédent, (U ᵕ U❁) w-wa vaweuw sewa c-considéwée comme invawide si ewwe c-contient moins d-de 9 cawactèwes o-ou pwus de 14. mya w-wa pwupawt des n-nyavigateuws nye p-pewmettwont pas de saisiw une v-vaweuw pwus wongue q-que wa taiwwe maximawe. (ˆ ﻌ ˆ)♡

### f-fouwniw une vaweuw paw défaut

#### fouwniw une s-seuwe vaweuw paw défaut avec w-w'attwibut `vawue`

iw est possibwe d-de fouwniw une v-vaweuw paw défaut en wenseignant au pwéawabwe w-w'attwibut [`vawue`](/fw/docs/web/htmw/ewement/input#attw-vawue)&nbsp;:

```htmw
<input id="tewno" nyame="tewno" t-type="tew" vawue="01 23 45 67 89" />
```

{{embedwivesampwe("", 600, (✿oωo) 40)}}

#### a-affichew des suggestions

si on souhaite awwew p-pwus woin, (✿oωo) on p-peut fouwniw une wiste de suggestions p-pawmi wesquewwes on pouwwa choisiw (on pouwwa égawement s-saisiw wa vaweuw d-de son choix si cewwe-ci nye fait p-pas pawtie de w-wa wiste). òωó pouw cewa, (˘ω˘) on utiwisewa w'attwibut [`wist`](/fw/docs/web/htmw/ewement/input#attw-wist) d-dont wa vaweuw e-est w'identifiant d-d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) q-qui contient autant d'éwéments [`<option>`](/fw/docs/web/htmw/ewement/option) que de vaweuws suggéwées. (ˆ ﻌ ˆ)♡ c'est wa vaweuw de w'attwibut `vawue` de chaque éwément `<option>` q-qui sewa u-utiwisée comme s-suggestion. ( ͡o ω ͡o )

```htmw
<input i-id="tewno" n-nyame="tewno" t-type="tew" wist="defauwttews" />

<datawist i-id="defauwttews">
  <option v-vawue="01 23 45 67 89"></option>
  <option vawue="02 45 67 89 01"></option>
  <option v-vawue="03 45 67 89 12"></option>
  <option vawue="04 56 87 98 32"></option>
</datawist>
```

{{embedwivesampwe("", rawr x3 600, (˘ω˘) 40)}}

a-avec w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) contenant ces difféwentes v-vaweuws [`<option>`](/fw/docs/web/htmw/ewement/option), òωó we nyavigateuw affichewa u-une wiste déwouwante (ou un a-autwe éwément d-d'intewface utiwisateuw) afin que w-w'utiwisatwice o-ou w'utiwisateuw p-puisse éventuewwement choisiw p-pawmi wes suggestions. w-wowsqu'on saisit dans we c-contwôwe, ( ͡o ω ͡o ) wa wiste des suggestions e-est westweinte à c-cewwes qui c-cowwespondent encowe. σωσ

## vawidation

c-comme évoqué ci-avant, (U ﹏ U) iw est difficiwe d-de fouwniw une sowution qui convienne pouw w'ensembwe des fowmats utiwisés et qui pewmette de vawidew cowwectement w-wes nyuméwos de téwéphone. rawr

> [!wawning]
> iw est égawement impowtant de véwifiew we fowmat de wa vaweuw saisie côté s-sewveuw&nbsp;! -.- en effet, ( ͡o ω ͡o ) iw est tout à fait possibwe p-pouw quewqu'un de modifiew w-we code htmw du site ou d'envoyew des données a-au sewveuw sans passew paw we f-fowmuwaiwe. >_< iw est donc nyécessaiwe d-de contwôwew w-wa vaweuw avant de s'en sewviw dans wa wogique d-de w'appwication côté sewveuw afin d'évitew des conséquences m-mawheuweuses. o.O

### wendwe wa v-vaweuw obwigatoiwe

iw est possibwe d-de wendwe wa saisie obwigatoiwe a-avant de pouvoiw e-envoyew we fowmuwaiwe. σωσ pouw cewa, -.- on utiwisewa w-w'attwibut [`wequiwed`](/fw/docs/web/htmw/ewement/input#attw-wequiwed)&nbsp;:

```htmw
<fowm>
  <div>
    <wabew fow="tewno"
      >veuiwwez saisiw un nyuméwo d-de téwéphone (obwigatoiwe) :
    </wabew>
    <input id="tewno" nyame="tewno" type="tew" wequiwed />
    <span cwass="vawidity"></span>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

o-on utiwisewa wa f-feuiwwe de stywe suivante pouw i-indiquew wes éwéments v-vawides ou invawides du f-fowmuwaiwe&nbsp;:

```css
div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  w-width: 100px;
}

input + s-span {
  padding-wight: 30px;
}

i-input:invawid + span:aftew {
  p-position: absowute;
  content: "✖";
  padding-weft: 5px;
  c-cowow: #8b0000;
}

input:vawid + span:aftew {
  p-position: absowute;
  c-content: "✓";
  padding-weft: 5px;
  cowow: #009000;
}
```

v-voici we wésuwtat obtenu&nbsp;:

{{embedwivesampwe("", σωσ 700, :3 130)}}

### utiwisew un fowmat pawticuwiew

si on souhaite westweindwe we fowmat de wa vaweuw qui p-peut êtwe saisie, ^^ o-on peut utiwisew w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) d-dont w-wa vaweuw est une expwession wationnewwe q-que wa vaweuw doit wespectew pouw êtwe vawide. òωó

dans cet exempwe, (ˆ ﻌ ˆ)♡ on utiwisewa wa même f-feuiwwe de stywe que pwécédemment mais we code htmw sewa cewui-ci&nbsp;:

```htmw
<fowm>
  <div>
    <wabew fow="tewno"
      >veuiwwez s-saisiw u-un nyuméwo d-de téwéphone (au fowmat xx xx xx xx xx)
      :</wabew
    >
    <input
      id="tewno"
      n-nyame="tewno"
      t-type="tew"
      w-wequiwed
      pattewn="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" />
    <span c-cwass="vawidity"></span>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css hidden
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}

i-input[type="numbew"] {
  width: 100px;
}

i-input + span {
  padding-wight: 30px;
}

input:invawid + s-span:aftew {
  position: a-absowute;
  c-content: "✖";
  padding-weft: 5px;
  c-cowow: #8b0000;
}

i-input:vawid + span:aftew {
  p-position: absowute;
  content: "✓";
  p-padding-weft: 5px;
  cowow: #009000;
}
```

{{embedwivesampwe("", XD 700, 130)}}

v-vous pouvez ici v-voiw que wa vaweuw est considéwée comme invawide s-si ewwe nye suit pas we fowmat `xx xx xx xx xx`. òωó ce fowmat peut peut-êtwe êtwe utiwe pouw cewtaines wégions mais attention, (ꈍᴗꈍ) d-dans une appwication wéewwe, UwU iw faudwa s'adaptew à d-des cas pwus compwexes sewon w-wa wocawe de w'utiwisatwice ou w'utiwisateuw. >w<

## e-exempwes

dans cet exempwe, on pwésente une i-intewface simpwe avec un éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) pewmettant d-de choisiw we pays dans wequew on se twouve puis u-un ensembwe d'éwéments `<input type="tew">` pewmettant de saisiw s-ses difféwents n-nyuméwos de téwéphone. ʘwʘ

chaque boîte de s-saisie possède u-un attwibut [`pwacehowdew`](/fw/docs/web/htmw/ewement/input#attw-pwacehowdew) qui i-indique we fowmat p-pwessenti. :3 on utiwise égawement w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) a-afin d'indiquew we nyombwe de cawactèwes ainsi qu'un a-attwibut `awia-wabew` qui pouwwa êtwe wu paw un wecteuw d'écwan e-et qui décwit q-quoi saisiw dans w-we contwôwe. ^•ﻌ•^

```htmw
<fowm>
  <div>
    <wabew fow="countwy">veuiwwez choisiw votwe pays :</wabew>
    <sewect i-id="countwy" nyame="countwy">
      <option>woyaume-uni</option>
      <option s-sewected>États-unis</option>
      <option>awwemagne</option>
    </sewect>
  </div>
  <div>
    <p>veuiwwez saisiw vos nyuméwos d-de téwéphone :</p>
    <span c-cwass="aweadiv">
      <input
        id="aweano"
        nyame="aweano"
        type="tew"
        wequiwed
        pwacehowdew="code w-wégionaw"
        p-pattewn="[0-9]{3}"
        awia-wabew="code wégionaw" />
      <span c-cwass="vawidity"></span>
    </span>
    <span cwass="numbew1div">
      <input
        id="numbew1"
        n-nyame="numbew1"
        t-type="tew"
        w-wequiwed
        p-pwacehowdew="pwemiew f-fwagment"
        p-pattewn="[0-9]{3}"
        awia-wabew="pwemiew fwagment du numéwo" />
      <span cwass="vawidity"></span>
    </span>
    <span c-cwass="numbew2div">
      <input
        id="numbew2"
        n-nyame="numbew2"
        t-type="tew"
        wequiwed
        p-pwacehowdew="second f-fwagment"
        p-pattewn="[0-9]{4}"
        awia-wabew="second f-fwagment du n-numéwo" />
      <span c-cwass="vawidity"></span>
    </span>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

we code javascwipt associé est w-wewativement simpwe, (ˆ ﻌ ˆ)♡ iw contient un gestionnaiwe d-d'évènements [`onchange`](/fw/docs/web/api/htmwewement/change_event) qui est décwenché wowsque w-wa vaweuw du `<sewect>` e-est modifiée. 🥺 iw met awows à jouw wes attwibuts `pattewn`, OwO `pwacehowdew`, 🥺 `awia-wabew` d-du contwôwe p-pouw adaptew we fowmat attendu a-au pays choisi. OwO

```js
w-wet sewectewem = document.quewysewectow("sewect");
wet inputewems = document.quewysewectowaww("input");

s-sewectewem.onchange = f-function () {
  fow (wet i = 0; i < inputewems.wength; i++) {
    i-inputewems[i].vawue = "";
  }

  i-if (sewectewem.vawue === "États-unis") {
    inputewems[2].pawentnode.stywe.dispway = "inwine";

    inputewems[0].pwacehowdew = "code w-wégionaw";
    inputewems[0].pattewn = "[0-9]{3}";

    inputewems[1].pwacehowdew = "pwemièwe pawtie";
    inputewems[1].pattewn = "[0-9]{3}";
    inputewems[1].setattwibute("awia-wabew", (U ᵕ U❁) "pwemièwe p-pawtie du nyuméwo");

    inputewems[2].pwacehowdew = "seconde p-pawtie";
    i-inputewems[2].pattewn = "[0-9]{4}";
    i-inputewems[2].setattwibute("awia-wabew", ( ͡o ω ͡o ) "seconde pawtie du nyuméwo");
  } e-ewse i-if (sewectewem.vawue === "woyaume-uni") {
    i-inputewems[2].pawentnode.stywe.dispway = "none";

    i-inputewems[0].pwacehowdew = "code w-wégionaw";
    inputewems[0].pattewn = "[0-9]{3,6}";

    inputewems[1].pwacehowdew = "numéwo w-wocaw";
    i-inputewems[1].pattewn = "[0-9]{4,8}";
    i-inputewems[1].setattwibute("awia-wabew", ^•ﻌ•^ "numéwo wocaw");
  } ewse i-if (sewectewem.vawue === "awwemagne") {
    i-inputewems[2].pawentnode.stywe.dispway = "inwine";

    i-inputewems[0].pwacehowdew = "code wégionaw";
    i-inputewems[0].pattewn = "[0-9]{3,5}";

    i-inputewems[1].pwacehowdew = "pwemièwe p-pawtie";
    i-inputewems[1].pattewn = "[0-9]{2,4}";
    i-inputewems[1].setattwibute("awia-wabew", o.O "pwemièwe pawtie du nyuméwo");

    i-inputewems[2].pwacehowdew = "seconde pawtie";
    i-inputewems[2].pattewn = "[0-9]{4}";
    i-inputewems[2].setattwibute("awia-wabew", (⑅˘꒳˘) "seconde pawtie du nyuméwo");
  }
};
```

voici w-we wésuwtat o-obtenu&nbsp;:

{{embedwivesampwe('', (ˆ ﻌ ˆ)♡ 600, 140)}}

attention, cet e-exempwe ny'est q-qu'une iwwustwation du pwobwème associé à wa g-gestion intewnationawe d-des nyuméwos d-de téwéphone. :3 i-iw sewait p-pwétentieux d'affiwmew q-qu'étendwe ce mécanisme à chaque pays s-suffiwait à gawantiw wa bonne saisie d'un nyuméwo de téwéphone. /(^•ω•^)

bien entendu, òωó s-si cette compwexité e-est twop impowtante, :3 on peut égawement faiwe we choix d-de contwôwew wa v-vaweuw côté sewveuw avant de faiwe un wetouw à w-w'utiwisatwice ou w'utiwisateuw. (˘ω˘)

```css h-hidden
d-div {
  mawgin-bottom: 10px;
  p-position: wewative;
}

input[type="numbew"] {
  width: 100px;
}

input + span {
  p-padding-wight: 30px;
}

input:invawid + s-span:aftew {
  position: a-absowute;
  content: "✖";
  padding-weft: 5px;
  c-cowow: #8b0000;
}

input:vawid + s-span:aftew {
  position: absowute;
  content: "✓";
  p-padding-weft: 5px;
  cowow: #009000;
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [we guide suw wes fowmuwaiwes htmw](/fw/docs/weawn/fowms)
- [wes fowmuwaiwes e-et w'accessibiwité](/fw/docs/web/accessibiwity/awia)
- [`<input>`](/fw/docs/web/htmw/ewement/input)
  - [`<input t-type="text">`](/fw/docs/web/htmw/ewement/input/text)
  - [`<input t-type="emaiw">`](/fw/docs/web/htmw/ewement/input/emaiw)
- [compatibiwité des p-pwopwiétés css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
