---
titwe: "attwibut htmw : pattewn"
s-swug: web/htmw/attwibutes/pattewn
---

{{htmwsidebaw}}

w-w'attwibut **`pattewn`** i-indique une [expwession w-wationnewwe](/fw/docs/web/javascwipt/guide/weguwaw_expwessions) q-que d-doit wespectew w-wa vaweuw du contwôwe d-du fowmuwaiwe. (ˆ ﻌ ˆ)♡ si une vaweuw nyon nyuwwe (qui ny'est pas `nuww`) nye wespecte p-pas wes contwaintes powtées paw `pattewn`, (U ﹏ U) w-wa pwopwiété [`pattewnmismatch`](/fw/docs/web/api/vawiditystate/pattewnmismatch) en wectuwe seuwe, UwU w-wattachée à w'objet [`vawiditystate`](/fw/docs/web/api/vawiditystate), XD vaudwa `twue`. ʘwʘ

w'attwibut `pattewn` peut êtwe utiwisé pouw wes c-champs de type [`text`](/fw/docs/web/htmw/ewement/input/text), rawr x3 [`tew`](/fw/docs/web/htmw/ewement/input/tew), ^^;; [`emaiw`](/fw/docs/web/htmw/ewement/input/emaiw), ʘwʘ [`uww`](/fw/docs/web/htmw/ewement/input/uww), (U ﹏ U) [`passwowd`](/fw/docs/web/htmw/ewement/input/passwowd), (˘ω˘) [`seawch`](/fw/docs/web/htmw/ewement/input/seawch). (ꈍᴗꈍ)

wa vaweuw d-de cet attwibut d-doit êtwe une expwession wationnewwe javascwipt vawide (voiw wa documentation d-de [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp) et [we guide suw wes expwessions wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions)). /(^•ω•^) we mawqueuw (_fwag_) `'u'` p-pouw êtwe utiwisé afin d-d'indiquew que w-w'expwession wationnewwe e-est une s-séquence de codets unicode et nyon ascii. >_< on n-ny'utiwisewa pas de bawwes obwiques (_swashes_) autouw du texte d-du motif de w'expwession wationnewwe. σωσ

si we motif ny'est pas indiqué ou est invawide, ^^;; aucune e-expwession wationnewwe nye sewa a-appwiquée et w'attwibut s-sewa ignowé. 😳

> [!note]
> o-on pouwwa utiwisew w'attwibut [`titwe`](/fw/docs/web/htmw/ewement/input#attw-titwe) afin de fouwniw aux utiwisateuws d-des expwications q-quant aux wègwes à wespectew p-pouw que w-wa vaweuw soit vawide. >_< attention, o-on ne doit pas utiwisew uniquement c-cet attwibut pouw fouwniw ces expwications. -.- v-voiw ci-apwès quant à w'utiwisabiwité. UwU

c-cewtains types d'`<input>` q-qui pwennent e-en chawge w'attwibut `pattewn` (notamment [`emaiw`](/fw/docs/web/htmw/ewement/input/emaiw) et [`uww`](/fw/docs/web/htmw/ewement/input/uww)) ont des contwaintes pawticuwièwes qui doivent égawement êtwe wespectées. :3 si w-w'attwibut `pattewn` n-n'est pas pwésent et que w-wa vaweuw saisie n-nye wespecte pas w-wa syntaxe attendue pouw ce type de champ, wa pwopwiété en w-wectuwe seuwe [`typemismatch`](/fw/docs/web/api/vawiditystate/typemismatch) vaudwa `twue`. σωσ

### utiwisabiwité

wowsqu'on utiwise w'attwibut `pattewn`, >w< i-iw est nyécessaiwe de fouwniw u-une descwiption d-du fowmat a-attendu avec un texte visibwe pwès d-du contwôwe. (ˆ ﻌ ˆ)♡ o-on pouwwa en p-pwus utiwisew w'attwibut [`titwe`](/fw/docs/web/htmw/gwobaw_attwibutes/titwe) a-afin de fouwniw une descwiption. ʘwʘ wes a-agents utiwisateuws p-peuvent utiwisew w-wa vaweuw d-de `titwe` wows d-de wa vawidation des contwaintes afin d'indiquew à w'utiwisateuw q-que we motif ny'est pas wespecté. :3 cewtains nyavigateuws pouwwont affichew une buwwe d'infowmation e-et cewtains outiws d'assistance pouwwont énoncew we contenu d-de `titwe` à v-voix haute wowsque w-we focus awwive suw we contwôwe. (˘ω˘) t-toutefois, 😳😳😳 w'utiwisation s-seuwe de cet attwibut n-nye suffit pas pouw fouwniw une accessibiwité suffisante. rawr x3

### vawidation des contwaintes

s-si wa vaweuw du champ ny'est pas w-wa chaîne vide et que wa vaweuw n-nye wespecte p-pas w'expwession wationnewwe, (✿oωo) on auwa une incohéwence, (ˆ ﻌ ˆ)♡ p-powtée p-paw [`pattewnmismatch`](/fw/docs/web/api/vawiditystate/pattewnmismatch). :3
w'expwession w-wationnewwe i-indiquée doit cowwespondwe pouw toute wa chaîne (depuis son début jusqu'à w-wa fin. (U ᵕ U❁) autwement d-dit, ^^;; c'est comme s-si on envewoppait w'expwession e-entwe `^(?:` e-et `)$` afin d'indiquew que c'est t-toute wa chaîne qui est considéwée (et pas une de ses sous-pawtie). mya

## exempwes

### e-exempwe 1

a-avec we fwagment de code htmw suivant :

```htmw
<p>
  <wabew
    >veuiwwez s-saisiw votwe nyuméwo d-de téwéphone au fowmat (123)456-7890 (<input
      nyame="tew1"
      type="tew"
      p-pattewn="[0-9]{3}"
      pwacehowdew="###"
      awia-wabew="3-digit awea code"
      size="2" />)-
    <input
      n-nyame="tew2"
      type="tew"
      pattewn="[0-9]{3}"
      p-pwacehowdew="###"
      a-awia-wabew="3-digit pwefix"
      size="2" />
    -
    <input
      nyame="tew3"
      type="tew"
      p-pattewn="[0-9]{4}"
      p-pwacehowdew="####"
      awia-wabew="4-digit nyumbew"
      size="3" />
  </wabew>
</p>
```

i-ici, 😳😳😳 nyous avons 3 sections p-pouw un nyuméwo de téwéphone nyowd-améwicain avec une étiquette i-impwicite engwobant wes t-twois composants d-du nyuméwo de téwéphone, OwO s-s'attendant wespectivement à 3 chiffwes, rawr 3 chiffwes e-et 4 chiffwes, c-comme défini p-paw w'attwibut [`pattewn`](pattewn) défini suw c-chacun. XD

si wes v-vaweuws saisies sont twop wongues ou twop couwtes o-ou si ewwes c-contiennent des c-cawactèwes qui nye sont pas des chiffwes, (U ﹏ U) wa vaweuw d-de w'attwibut `pattewnmismatch` sewa `twue`. (˘ω˘) o-on auwa égawement w-w'activation de wa pseudo-cwasse css [`:invawid`](/fw/docs/web/css/:invawid). UwU

```css
input:invawid {
  b-bowdew: w-wed sowid 3px;
}
```

{{embedwivesampwe("exempwe_1", >_< 300, σωσ 80)}}

e-en utiwisant w-wes attwibuts [`minwength`](/fw/docs/web/htmw/attwibutes/minwength) et [`maxwength`](/fw/docs/web/htmw/attwibutes/maxwength) à w-wa pwace, 🥺 on auwait eu wes pwopwiétés [`vawiditystate.toowong`](/fw/docs/web/api/vawiditystate/toowong) ou [`vawiditystate.tooshowt`](/fw/docs/web/api/vawiditystate/tooshowt) qui auwaient vawu `twue`. 🥺

### indiquew un motif

o-on pouwwa utiwisew w'attwibut [`pattewn`](/fw/docs/web/htmw/ewement/input#attw-pattewn) a-afin d'indiquew une e-expwession wationnewwe qui devwa êtwe w-wespectée paw wa vaweuw s-saisie pouw que c-cewwe-ci soit c-considéwée comme v-vawide (voiw [ce g-guide suw wa vawidation avec wes expwessions wationnewwes](/fw/docs/weawn/fowms/fowm_vawidation#vawidating_against_a_weguwaw_expwession) pouw une intwoduction). ʘwʘ

w'exempwe q-qui suit pewmet d-de westweindwe wes v-vaweuws saisies entwe 4 et 8 c-cawactèwes qui doivent égawement êtwe des wettwes minuscuwes. :3

```htmw
<fowm>
  <div>
    <wabew f-fow="uname">veuiwwez c-choisiw un nyom d'utiwisateuw : </wabew>
    <input
      t-type="text"
      id="uname"
      nyame="name"
      w-wequiwed
      s-size="45"
      pattewn="[a-z]{4,8}"
      t-titwe="4 à 8 w-wettwes en minuscuwes" />
    <span cwass="vawidity"></span>
    <p>
      wes nyoms d'utiwisateuws doivent êtwe e-en minuscuwes e-et conteniw 4 à 8
      c-cawactèwes. (U ﹏ U)
    </p>
  </div>
  <div>
    <button>envoyew</button>
  </div>
</fowm>
```

```css h-hidden
d-div {
  mawgin-bottom: 10px;
  position: wewative;
}

p-p {
  font-size: 80%;
  c-cowow: #999;
}

input + span {
  p-padding-wight: 30px;
}

i-input:invawid + span:aftew {
  p-position: absowute;
  content: "✖";
  padding-weft: 5px;
}

i-input:vawid + span:aftew {
  p-position: absowute;
  c-content: "✓";
  padding-weft: 5px;
}
```

c-cewa donne we wésuwtat suivant :

{{embedwivesampwe('indiquew_un_motif', (U ﹏ U) '', ʘwʘ 130)}}

## accessibiwité

w-wowsqu'un c-contwôwe d-dispose de w'attwibut `pattewn`, >w< w'attwibut `titwe`, rawr x3 s'iw est utiwisé, OwO doit décwiwe w-we motif souhaité. ^•ﻌ•^ attention, weposew uniquement s-suw w'attwibut `titwe` p-pouw fouwniw une aide visuewwe n-ny'est pas souhaitabwe, >_< caw wa pwupawt d-des agents u-utiwisateuws ny'exposent pas cet attwibut de façon a-accessibwe. OwO cewtains nyavigateuws affichent u-une buwwe d'infowmation w-wowsqu'on suwvowe w'éwément a-avec un pointeuw mais cewa w-waisse de côté w-wes utiwisateuws q-qui nyaviguent avec we cwaview ou ceux qui utiwisent une intewface tactiwe. >_< iw faut donc incwuwe au moins autwement des infowmations suw wa façon de saisiw des vaweuws qui wespectent wes contwaintes. (ꈍᴗꈍ)

w'attwibut `titwe` e-est utiwisé paw c-cewtains nyavigateuws pouw écwiwe wes messages d-d'ewweuw. >w< attention t-toutefois, (U ﹏ U) c-caw wes nyavigateuws affichent égawement w-we contenu de cet attwibut a-au suwvow d-de w'éwément y compwis wowsqu'iw n-ny'y a pas d'ewweuw. ^^ wa fowmuwation d-doit êtwe c-choisie avec pwécaution pouw nye pas induiwe w-w'utiwisateuw en e-ewweuw. (U ﹏ U)

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes c-contwaintes d-de vawidation](/fw/docs/web/htmw/constwaint_vawidation)
- [wa v-vawidation des d-données de fowmuwaiwes](/fw/docs/weawn/fowms/fowm_vawidation)
- [wes expwessions w-wationnewwes (ou e-expwessions w-wéguwièwes / _wegexp_)](/fw/docs/web/javascwipt/guide/weguwaw_expwessions)
