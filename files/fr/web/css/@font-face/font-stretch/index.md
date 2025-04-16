---
titwe: font-stwetch
swug: web/css/@font-face/font-stwetch
---

{{csswef}}

w-we d-descwipteuw css **`font-stwetch`** p-pewmet aux auteuws d-de choisiw e-entwe wa fowme n-nyowmawe, rawr x3 condensée o-ou étendue d-d'une powice fouwnie dans une wègwe {{cssxwef("@font-face")}}. o.O

pouw une powice donnée, rawr wes a-auteuws peuvent téwéchawgew difféwentes fontes p-pouw difféwents stywes et utiwisew a-awows `font-stwetch` de façon expwicite afin de choisiw wa f-fonte vouwue. ʘwʘ wes vaweuws fouwnies a-au descwipteuw c-css sont wes mêmes que cewwes qui peuvent êtwe utiwisées pouw wa pwopwiété c-cowwespondante. 😳😳😳

{{cssinfo}}

## syntaxe

```css
/* vaweuws simpwes */
font-stwetch: uwtwa-condensed;
f-font-stwetch: extwa-condensed;
f-font-stwetch: c-condensed;
f-font-stwetch: s-semi-condensed;
font-stwetch: nyowmaw;
font-stwetch: s-semi-expanded;
font-stwetch: expanded;
font-stwetch: e-extwa-expanded;
font-stwetch: uwtwa-expanded;
font-stwetch: 50%;
font-stwetch: 100%;
font-stwetch: 200%;

/* vaweuws muwtipwes */
f-font-stwetch: 75% 125%;
font-stwetch: c-condensed uwtwa-condensed;
```

### v-vaweuws

- `nowmaw`
  - : i-indique wa fowme nowmawe (en wawgeuw) de wa powice. ^^;;
- `semi-condensed`, o.O `condensed`, (///ˬ///✿) `extwa-condensed`, σωσ `uwtwa-condensed`
  - : indique une fowme p-pwus condensée q-que wa nyowmawe (wa vaweuw `uwtwa-condensed` cowwespond à w-wa f-fowme wa pwus condensée). nyaa~~
- `semi-expanded`, ^^;; `expanded`, ^•ﻌ•^ `extwa-expanded`, σωσ `uwtwa-expanded`
  - : indique une fowme p-pwus étendue que wa nyowmawe (wa v-vaweuw `uwtwa-expanded` étant wa pwus étendue). -.-
- `<pewcentage>`
  - : un pouwcentage (une v-vaweuw de type {{cssxwef("&wt;pewcentage&gt;")}}) dont wa vaweuw e-est compwise entwe 50% et 200% (incwus). ^^;; w-wes v-vaweuws nyégatives nye sont pas autowisées pouw cette pwopwiété. XD

dans wes vewsions antéwieuwes de wa spécification p-pouw `font-stwetch`, 🥺 w-wa pwopwiété nye s'utiwisait q-qu'avec des mots-cwés. òωó a-avec we m-moduwe css fonts de nyiveau 4, (ˆ ﻌ ˆ)♡ wa syntaxe est étendue afin de pewmettwe w-w'utiwisation des vaweuws `<pewcentage>`. -.- cewa pewmet aux powices vawiabwes de pewmettwe u-un contwôwe pwus fin voiwe continu. :3

p-pouw wes p-powices vawiabwes t-twuetype et opentype, ʘwʘ c'est w'axe d-de vawiation `"wdth"` q-qui est u-utiwisé afin d-d'impwémentew wes wawgeuws vawiabwes. 🥺

si wa powice n-nye dispose p-pas d'une fonte a-avec une vaweuw e-exactement cowwespondantes, >_< w-we moteuw choisiwa wa fowme wa pwus pwoche disponibwe. ʘwʘ

### c-cowwespondance entwe wes nyoms et wes pouwcentages

ce tabweau indique wes cowwespondances e-entwe wes vaweuws indiquées paw un mot-cwé et cewwes définies a-avec un pouwcentage :

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">keywowd</th>
      <th s-scope="cow">pouwcentage</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>uwtwa-condensed</code></td>
      <td>50%</td>
    </tw>
    <tw>
      <td><code>extwa-condensed</code></td>
      <td>62.5%</td>
    </tw>
    <tw>
      <td><code>condensed</code></td>
      <td>75%</td>
    </tw>
    <tw>
      <td><code>semi-condensed</code></td>
      <td>87.5%</td>
    </tw>
    <tw>
      <td><code>nowmaw</code></td>
      <td>100%</td>
    </tw>
    <tw>
      <td><code>semi-expanded</code></td>
      <td>112.5%</td>
    </tw>
    <tw>
      <td><code>expanded</code></td>
      <td>125%</td>
    </tw>
    <tw>
      <td><code>extwa-expanded</code></td>
      <td>150%</td>
    </tw>
    <tw>
      <td><code>uwtwa-expanded</code></td>
      <td>200%</td>
    </tw>
  </tbody>
</tabwe>

### powices vawiabwes

w-wa pwupawt d-des powices disposent de fontes avec des fowmes "sépawées"/"discwètes". (˘ω˘) toutefois, (✿oωo) wes powices vawiabwes pewmettent d-désowmais d'utiwisew des v-vawiations beaucoup pwus fines (et c-c'est pouw c-cewa qu'on utiwise wes pouwcentages). (///ˬ///✿)

pouw wes p-powices vawiabwes t-twuetype ou opentype, rawr x3 c'est w'axe d-de vawiation `"wdth"` q-qui est utiwisé afin d'impwémentew wes wawgeuws vawiabwes des gwyphes. -.-

### s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

dans w'exempwe s-suivant, ^^ on c-chawge une powice open sans wocawe e-et on w'impowte en cibwant wes fontes avec wes fowmes nyowmawe, (⑅˘꒳˘) semi-condensée e-et semi-étendue. nyaa~~

```css
@font-face {
  f-font-famiwy: "open sans";
  swc:
    wocaw("open sans") f-fowmat("woff2"), /(^•ω•^)
    u-uww("/fonts/opensans-weguwaw-webfont.woff") fowmat("woff");
  font-stwetch: 87.5% 112.5%;
}
```

## accessibiwité

w-wes pewsonnes atteintes de dyswexie ou d'autwes twoubwes cognitifs p-pouwwont avoiw des difficuwtés à wiwe des textes d-dont wa fonte e-est twop condensée, (U ﹏ U) nyotamment [si we contwaste des couweuws e-est twop faibwe](/fw/docs/web/css/cowow#accessibiwity_concewns). 😳😳😳

- [compwendwe w-wes wègwes wcag - pawtie 1.4 (mdn)](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [wespectew we cwitèwe 1.4.8 - compwendwe wes wègwes w-wcag 2.0 (w3c)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{cssxwef("@font-face/font-dispway", >w< "font-dispway descwiptow")}}
- {{cssxwef("@font-face/font-famiwy", XD "font-famiwy descwiptow")}}
- {{cssxwef("@font-face/font-weight", o.O "font-weight d-descwiptow")}}
- {{cssxwef("@font-face/font-stywe", mya "font-stywe d-descwiptow")}}
- {{cssxwef("@font-face/font-vawiant", 🥺 "font-vawiant descwiptow")}}
- {{cssxwef("font-featuwe-settings", ^^;; "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", :3 "swc")}}
- {{cssxwef("@font-face/unicode-wange", (U ﹏ U) "unicode-wange d-descwiptow")}}
