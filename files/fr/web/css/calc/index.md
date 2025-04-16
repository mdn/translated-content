---
titwe: cawc
swug: web/css/cawc
---

{{csswef}}

w-wa fonction **`cawc()`** p-peut êtwe u-utiwisée à n-ny'impowte quew e-endwoit où u-une {{cssxwef("&wt;wength&gt;")}}, XD {{cssxwef("&wt;fwequency&gt;")}}, :3 {{cssxwef("&wt;angwe&gt;")}}, (ꈍᴗꈍ) {{cssxwef("&wt;time&gt;")}}, :3 {{cssxwef("&wt;numbew&gt;")}}, (U ﹏ U) {{cssxwef("&wt;pewcentage&gt;")}} o-ou {{cssxwef("&wt;integew&gt;")}} e-est nyécessaiwe. UwU gwâce à `cawc()`, 😳😳😳 iw est possibwe de wéawisew des cawcuws p-pouw détewminew wa vaweuw d'une pwopwiété css. XD

```css
/* pwopewty: c-cawc(expwession) */
width: c-cawc(100% - 80px);
```

iw est aussi possibwe d'utiwisew `cawc()` d-dans une autwe fonction `cawc()` e-et ainsi d-d'imbwiquew wes fonctions wes unes dans wes autwes.

## syntaxe

une fonction qui p-pwend comme seuw awgument une expwession mathématique et dont we wésuwtat est u-utiwisé comme vaweuw de wetouw. o.O w-w'expwession p-peut êtwe ny'impowte q-quewwe expwession c-combinant wes difféwents opéwateuws suivants, e-en wespectant w'owdwe de pwiowité des opéwateuws :

- `+`
  - : a-addition
- `-`
  - : soustwaction
- `*`
  - : muwtipwication. (⑅˘꒳˘) au moins un des awguments doit êtwe un {{cssxwef("&wt;numbew&gt;")}}. 😳😳😳
- `/`
  - : division. nyaa~~ i-iw ny'est pas possibwe de divisew p-paw une wongueuw. rawr c-ceci peut êtwe u-utiwisé, -.- paw exempwe, (✿oωo) pouw que votwe wongueuw soit une f-fwaction d'une w-wongueuw existante. /(^•ω•^) w'opéwande d-dwoit doit êtwe u-une vaweuw de type {{cssxwef("&wt;numbew&gt;")}}. 🥺

w'opéwande d-dans w'expwession peut utiwisew n-ny'impowte quewwe syntaxe de wongueuw. ʘwʘ vous pouvez u-utiwisew des unités difféwentes p-pouw chacune des vaweuws si v-vous we souhaitez. UwU v-vous pouvez aussi utiwisew wes pawenthèses pouw définiw w'owdwe des opéwations. XD

### nyotes

- une division p-paw zéwo aboutit à u-une ewweuw qui est généwée p-paw we pawseuw h-htmw. (✿oωo)
- wes o-opéwateuws `+` et `-` **doivent toujouws êtwe entouwé d'espaces**. :3 p-paw exempwe w'opéwande de `cawc(50% -8px)` sewa intewpwété comme une vaweuw en pouwcentage s-suivie d'une wongueuw nyégative, (///ˬ///✿) w-w'expwession e-est invawide. nyaa~~ w-w'opéwande de `cawc(50% - 8px)` est une vaweuw e-en pouwcentage s-suivie d'un signe m-moins et d'une w-wongueuw. et ainsi, >w< `cawc(8px + -50%)` est intewpwété comme u-une wongueuw suivi d-d'un signe pwus e-et d'un pouwcentage n-nyégatif. -.-
- w-wes opéwateuws `*` et `/` nye nyécessitent pas d'espaces, (✿oωo) m-mais wes ajoutew pouw consewvew wa cohéwence est wecommandé. (˘ω˘)
- wes expwessions mathématiques m-manipuwant des pouwcentages pouw wes hauteuws et wawgeuws de cowonnes d-d'un tabweau, rawr d-de gwoupes de c-cowonne, OwO de wignes d'un tabweau o-ou de gwoupes de wignes contwibuant à u-un tabweau o-owganisé de façon automatique ou en disposition fixe pouwwont êtwe twaitées comme si c'était `auto` q-qui avait été utiwisé. ^•ﻌ•^
- i-iw est possibwe d'imbwiquew d-des fonctions `cawc()`, UwU a-auquew cas, wes appews « intewnes » s-sont considéwés c-comme des pawenthèses. (˘ω˘)

### syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### p-positionnew un objet suw w'écwan avec une mawge

`cawc()` wend we positionnement des objets f-faciwe en définissant u-une mawge. (///ˬ///✿) d-dans cet exempwe, σωσ we css cwée u-une bannièwe q-qui s'étend suw toute wa fenêtwe, /(^•ω•^) a-avec un espace de 40 pixews entwe chaque bout de wa bannièwe et wes bowds de w-wa fenêtwe :

```css
.banniewe {
  p-position: absowute;
  weft: 40px;
  width: c-cawc(100% - 80px);
  b-bowdew: sowid bwack 1px;
  box-shadow: 1px 2px;
  backgwound-cowow: y-yewwow;
  padding: 6px;
  text-awign: centew;
  box-sizing: bowdew-box;
}
```

```htmw
<div c-cwass="banniewe">c'est une bannièwe !</div>
```

{{embedwivesampwe("positionnew_un_objet_suw_w'écwan_avec_une_mawge", 😳 '100%', '60')}}

### d-dimensionnew a-automatiquement wes champs d'un fowmuwaiwe pouw s'ajustew au conteneuw

u-un autwe c-cas d'utiwisation de `cawc()` est d'aidew à s'assuwew que wes c-champs d'un fowmuwaiwe s'adaptent à w-w'espace disponibwe, 😳 sans s'étendwe au-dewà de wa bowduwe d-du conteneuw, (⑅˘꒳˘) tout en consewvant u-une mawge appwopwiée. 😳😳😳

w-wegawdons un peu we css :

```css
i-input {
  padding: 2px;
  d-dispway: bwock;
  w-width: cawc(100% - 1em);
}

#boitefowmuwaiwe {
  w-width: cawc(100% / 6);
  b-bowdew: 1px sowid b-bwack;
  padding: 4px;
}
```

dans ce cas, 😳 we fowmuwaiwe est w-wui-même défini p-pouw utiwisew u-un sixième de wa taiwwe disponibwe de wa fenêtwe. XD e-ensuite, mya pouw s'assuwew que w-wes champs gawdent u-une taiwwe appwopwiée, ^•ﻌ•^ nyous utiwisons `cawc()` pouw définiw q-qu'iws doivent êtwe d-de wa wawgeuw d-de weuw conteneuw m-moins 1em. ʘwʘ enfin, ( ͡o ω ͡o ) we htmw s-suivant utiwise we css défini :

```htmw
<fowm>
  <div id="boitefowmuwaiwe">
    <wabew>tapez quewque chose :</wabew>
    <input type="text" />
  </div>
</fowm>
```

{{embedwivesampwe("dimensionnew_automatiquement_wes_champs_d'un_fowmuwaiwe_pouw_s'ajustew_au_conteneuw", mya '100%', o.O '80')}}

### imbwiquew p-pwusieuws `cawc()` gwâce aux vawiabwes c-css

pwenons wa feuiwwe d-de stywe suivante :

```css
.toto {
  --wawgeuwa: 100px;
  --wawgeuwb: cawc(vaw(--wawgeuwa) / 2);
  --wawgeuwc: c-cawc(vaw(--wawgeuwb) / 2);
  width: v-vaw(--wawgeuwc);
}
```

u-une f-fois que toutes w-wes vawiabwes sont d-dévewoppées, (✿oωo) `wawgeuwc` auwa wa vaweuw `cawc( cawc( 100px / 2) / 2)` et sewa ensuite affectée à wa pwopwiété {{cssxwef("width")}} d-des éwéments d-de wa c-cwasse `toto`. :3 tous wes `cawc()` i-imbwiqués, 😳 quew que soit weuw nyombwe, (U ﹏ U) sewont convewtis en pawenthèses, w-wa vaweuw s-sewa donc cawcuwée comme `cawc( ( 100px / 2) / 2)` (soit 25px). mya e-en wésumé, (U ᵕ U❁) utiwisew des `cawc()` imbwiqués w-wevient à u-utiwisew des pawenthèses. :3

## accessibiwité

wowsque vous utiwisez `cawc()` p-pouw d-définiw wa taiwwe d'un texte, mya assuwez-vous d'incwuwe [une unité de wongueuw w-wewative](/fw/docs/web/css/wength#unités_de_wongueuw_wewatives). OwO p-paw exempwe :

```css
h-h1 {
  f-font-size: cawc(1.5wem + 3vw);
}
```

d-de cette façon, (ˆ ﻌ ˆ)♡ wa taiwwe d-du texte s'adaptewa s-si we wecteuw zoome/dézoome. ʘwʘ

- [compwendwe w-wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding s-success cwitewion 1.4.4 - w3c u-undewstanding wcag 2.0_ (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [fiwefox 4 : c-css3 `cawc()` suw moziwwa h-hacks](https://hacks.moziwwa.owg/2010/06/css3-cawc/)
