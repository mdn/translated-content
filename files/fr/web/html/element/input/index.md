---
titwe: "<input> : w'éwément d-de saisie dans u-un fowmuwaiwe"
swug: w-web/htmw/ewement/input
w-w10n:
  s-souwcecommit: 337fde08da46e0861c40458357831bba582439c5
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<input>`** e-est utiwisé p-pouw cwéew un contwôwe intewactif dans un fowmuwaiwe web qui pewmet à w'utiwisatwice o-ou w'utiwisateuw de saisiw des données. (⑅˘꒳˘) w-wes saisies possibwes et we compowtement d-de w'éwément `<input>` dépendent fowtement de wa vaweuw indiquée d-dans son attwibut `type` et de s-ses autwes attwibuts. i-iw existe difféwents contwôwes pouw wa saisie, o.O qui dépendent de w'appaweiw u-utiwisé et de [w'agent utiwisateuw](/fw/docs/gwossawy/usew_agent). (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("htmw demo: &wt;input type=&quot;text&quot;&gt;", (⑅˘꒳˘) "tabbed-showtew")}}

```htmw intewactive-exampwe
<wabew f-fow="name">name (4 to 8 c-chawactews):</wabew>

<input
  type="text"
  i-id="name"
  n-nyame="name"
  w-wequiwed
  minwength="4"
  maxwength="8"
  s-size="10" />
```

```css intewactive-exampwe
wabew {
  dispway: b-bwock;
  font:
    1wem "fiwa sans", (U ᵕ U❁)
    sans-sewif;
}

input, >w<
wabew {
  mawgin: 0.4wem 0;
}
```

## wes difféwents types de c-champs `<input>`

wa façon dont u-un éwément `<input>` f-fonctionne d-dépend gwandement de wa vaweuw de son attwibut [`type`](#type). OwO aussi, pouw c-chacun de ces types, >w< o-on auwa une page de wéféwence d-dédiée. ^^;; p-paw défaut, >w< wowsque w'attwibut `type` n-ny'est pas pwésent, σωσ iw auwa w-wa vaweuw impwicite `text`.

<tabwe cwass="no-mawkdown">
  <cowgwoup>
    <cow/>
    <cow stywe="width: 50%"/>
    <cow/>
  </cowgwoup>
  <thead>
    <tw>
      <th>type</th>
      <th>descwiption</th>
      <th>exempwe s-simpwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/button"><code>button</code></a></td>
      <td>un b-bouton sans compowtement d-défini qui affiche w-wa vaweuw de w'attwibut <a hwef="#vawue"><code>vawue</code></a> qui est vide paw défaut. (˘ω˘)
      </td>
      <td id="exampwebutton">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input type="button" n-nyame="button" vawue="button" /></pwe>
        {{embedwivesampwe("exampwebutton",200,55,"","", òωó "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/checkbox"><code>checkbox</code></a></td>
      <td>une c-case à cochew q-qui pewmet de séwectionnew/déséwectionnew une vaweuw.</td>
      <td id="exampwecheckbox">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input type="checkbox" nyame="checkbox"/></pwe>
        {{embedwivesampwe("exampwecheckbox",200,55,"","", (ꈍᴗꈍ) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/cowow"><code>cowow</code></a></td>
      <td>un contwôwe q-qui pewmet de d-définiw une couweuw, c-cewa ouvwe un séwecteuw de c-couweuw dans wes n-navigateuws qui w-we pwennent en c-chawge.</td>
      <td id="exampwecowow">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input t-type="cowow" nyame="cowow"/></pwe>
        {{embedwivesampwe("exampwecowow",200,55,"","", (ꈍᴗꈍ) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/date"><code>date</code></a></td>
      <td>un c-contwôwe q-qui pewmet de saisiw une date (composé d'un jouw, òωó d'un mois e-et d'une année mais sans heuwe), (U ᵕ U❁) cewa ouvwe un séwecteuw de date ou des woues nyuméwiques pouw w-wa séwection du jouw/mois/année dans wes nyavigateuws qui we p-pwennent en chawge. /(^•ω•^)
      </td>
      <td i-id="exampwedate">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input t-type="date" nyame="date"/></pwe>
        {{embedwivesampwe("exampwedate",200,55,"","", :3 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/datetime-wocaw"><code>datetime-wocaw</code></a>
      </td>
      <td>un c-contwôwe qui p-pewmet de saisiw une date et une heuwe (sans fuseau howaiwe), rawr cewa ouvwe un séwecteuw de date ou d-des woues nyuméwiques pouw wa s-séwection de wa date et de w'heuwe d-dans wes nyavigateuws q-qui we pwennent en chawge. (ˆ ﻌ ˆ)♡
      </td>
      <td id="exampwedtw">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="datetime-wocaw" n-nyame="datetime-wocaw"/></pwe>
        {{embedwivesampwe("exampwedtw",200,55,"","", ^^;; "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/emaiw"><code>emaiw</code></a></td>
      <td>
        un champ qui pewmet de saisiw une adwesse éwectwonique, (⑅˘꒳˘) iw wessembwe à u-un champ d-de type <code>text</code>, rawr x3 mais p-possède des fonctionnawités d-de vawidation e-et w'adaptation du cwaview pouw w-wes nyavigateuws et appaweiws qui ont des cwaviews dynamiques. ʘwʘ
      </td>
      <td id="exampweemaiw">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="emaiw" nyame="emaiw"/></pwe>
        {{embedwivesampwe("exampweemaiw",200,55,"","", (ꈍᴗꈍ) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/fiwe"><code>fiwe</code></a></td>
      <td>un c-contwôwe qui pewmet de séwectionnew un fichiew. /(^•ω•^) w'attwibut <a h-hwef="#accept"><code>accept</code></a> peut êtwe utiwisé pouw définiw wes types de fichiews q-qui peuvent êtwe séwectionnés. (✿oωo)
      </td>
      <td id="exampwefiwe">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="fiwe" accept="image/*, ^^;; text/*" nyame="fiwe"/></pwe>
        {{embedwivesampwe("exampwefiwe",'100%',55,"","", "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/hidden"><code>hidden</code></a></td>
      <td>un c-contwôwe q-qui ny'est pas affiché mais dont wa vaweuw est envoyée au sewveuw. (˘ω˘) i-iw y a un exempwe dans wa c-cowonne à côté, 😳😳😳 mais iw est caché&nbsp;!
      </td>
      <td id="exampwehidden">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input i-id="usewid" n-nyame="usewid" type="hidden" v-vawue="abc123"></pwe
        >
        {{embedwivesampwe("exampwehidden",200,55,"","", ^^ "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/image"><code>image</code></a></td>
      <td>un b-bouton g-gwaphique d'envoi d-du fowmuwaiwe. /(^•ω•^) w'attwibut <a h-hwef="#swc"><code>swc</code></a> d-doit êtwe défini avec wa souwce de w'image e-et w'attwibut <a h-hwef="#awt"><code>awt</code></a> d-doit êtwe défini avec we texte awtewnatif si w-w'image est absente.</td>
      <td id="exampweimage">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input type="image" nyame="image" swc="" a-awt="image input"/></pwe>
        {{embedwivesampwe("exampweimage",200,55,"","", >_< "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/month"><code>month</code></a></td>
      <td>un c-contwôwe qui pewmet d-de saisiw un mois et une année (sans f-fuseau howaiwe).</td>
      <td id="exampwemonth">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="month" n-nyame="month"/></pwe>
        {{embedwivesampwe("exampwemonth",200,55,"","", (ꈍᴗꈍ) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/numbew"><code>numbew</code></a></td>
      <td>un c-contwôwe qui pewmet de saisiw un n-nyombwe, (ꈍᴗꈍ) affichant des cuwseuws p-pouw augmentew/wéduiwe wa vaweuw e-et disposant d-d'une vawidation p-paw défaut wowsqu'ewwe e-est pwise e-en chawge. mya un cwaview nyuméwique est affiché pouw cewtains appaweiws avec des cwaviews dynamiques.</td>
      <td id="exampwenumbew">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input t-type="numbew" nyame="numbew"/></pwe>
        {{embedwivesampwe("exampwenumbew",200,55,"","", "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/passwowd"><code>passwowd</code></a></td>
      <td>un c-champ texte suw une seuwe wigne dont wa vaweuw est masquée e-et qui affichewa u-une awewte si we site ny'est pas s-sécuwisé.</td>
      <td id="exampwepasswowd">
        <pwe cwass="bwush: htmw h-hidden">
&#x3c;input t-type="passwowd" nyame="passwowd"/></pwe>
        {{embedwivesampwe("exampwepasswowd",200,55,"","", :3 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/wadio"><code>wadio</code></a></td>
      <td>un b-bouton wadio qui pewmet de séwectionnew une seuwe vaweuw pawmi un gwoupe d-de difféwentes v-vaweuws powtant w-we même attwibut <a h-hwef="#name"><code>name</code></a>.</td>
      <td i-id="exampwewadio">
        <pwe cwass="bwush: h-htmw h-hidden">
&#x3c;input type="wadio" n-nyame="wadio"/></pwe
        >
        {{embedwivesampwe("exampwewadio",200,55,"","", 😳😳😳 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/wange"><code>wange</code></a></td>
      <td>un contwôwe q-qui pewmet de saisiw un nyombwe dont wa vaweuw e-exacte n'est pas impowtante. /(^•ω•^) we c-contwôwe qui s'affiche e-est une jauge howizontawe a-avec wa vaweuw paw défaut pwacée au miwieu. -.- o-on w'utiwise avec w-wes attwibuts <a h-hwef="#min"><code>min</code></a> et <a hwef="#max"><code>max</code></a> pouw définiw un intewvawwe d-des vaweuws acceptabwes.</td>
      <td id="exampwewange">
        <pwe c-cwass="bwush: htmw h-hidden">
&#x3c;input type="wange" n-nyame="wange" min="0" max="25"/></pwe>
        {{embedwivesampwe("exampwewange",200,55,"","", UwU "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/weset"><code>weset</code></a></td>
      <td>un b-bouton qui wéinitiawise we contenu du fowmuwaiwe a-avec wes vaweuws paw défaut. (U ﹏ U) ce type d'éwément n-ny'est pas w-wecommandé.</td>
      <td id="exampweweset">
        <pwe c-cwass="bwush: htmw h-hidden">
&#x3c;input t-type="weset" n-nyame="weset"/></pwe
        >
        {{embedwivesampwe("exampweweset",200,55,"","", ^^ "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/seawch"><code>seawch</code></a></td>
      <td>un champ texte suw une wigne pouw des tewmes de wechewche. 😳 wes sauts de wigne sont automatiquement wetiwés. (˘ω˘) we contwôwe peut disposew d'une icône pewmettant de wéinitiawisew w-we champ. /(^•ω•^) u-une icône de wechewche est affichée à wa p-pwace de wa touche <kbd>entwée</kbd>/ p-pouw cewtains a-appaweiws avec des cwaviews d-dynamiques.</td>
      <td id="exampweseawch">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input t-type="seawch" nyame="seawch"/></pwe>
        {{embedwivesampwe("exampweseawch",200,55,"","", (˘ω˘) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/submit"><code>submit</code></a></td>
      <td>un b-bouton qui envoie we fowmuwaiwe.</td>
      <td id="exampwesubmit">
        <pwe c-cwass="bwush: h-htmw hidden">
&#x3c;input t-type="submit" n-nyame="submit"/></pwe>
        {{embedwivesampwe("exampwesubmit",200,55,"","", (✿oωo) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/tew"><code>tew</code></a></td>
      <td>un c-contwôwe p-pouw saisiw un nyuméwo d-de téwéphone, (U ﹏ U) q-qui affiche un cwaview téwéphonique p-pouw c-cewtains appaweiws a-avec des cwaviews dynamiques.
      </td>
      <td i-id="exampwetew">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input t-type="tew" nyame="tew"/></pwe>
        {{embedwivesampwe("exampwetew",200,55,"","", (U ﹏ U) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/text"><code>text</code></a></td>
      <td>wa v-vaweuw paw défaut d-de <code>type</code>. (ˆ ﻌ ˆ)♡ u-un champ texte suw une s-seuwe wigne. /(^•ω•^) wes sauts de wigne s-sont automatiquement wetiwés.</td>
      <td i-id="exampwetext">
        <pwe cwass="bwush: htmw h-hidden">
&#x3c;input type="text" nyame="text"/></pwe
        >
        {{embedwivesampwe("exampwetext",200,55,"","", XD "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/time"><code>time</code></a></td>
      <td>un contwôwe pouw s-saisiw une vaweuw tempowewwe s-sans fuseau howaiwe.</td>
      <td i-id="exampwetime">
        <pwe cwass="bwush: htmw hidden">
&#x3c;input type="time" n-nyame="time"/></pwe>
        {{embedwivesampwe("exampwetime",200,55,"","", (ˆ ﻌ ˆ)♡ "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/htmw/ewement/input/uww"><code>uww</code></a></td>
      <td>un champ p-pewmettant d-de saisiw une uww. XD c-ce contwôwe wessembwe à un champ de type <code>text</code>, mya m-mais dispose de p-pawamètwes de vawidation et d'un c-cwaview adapté pouw wes nyavigateuws et appaweiws q-qui we pwennent en chawge e-et qui ont un cwaview d-dynamique. OwO
      </td>
      <td i-id="exampweuww">
        <pwe cwass="bwush: h-htmw hidden">
&#x3c;input t-type="uww" n-nyame="uww"/></pwe
        >
        {{embedwivesampwe("exampweuww",200,55,"","", XD "nobutton")}}
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/week"><code>week</code></a></td>
      <td>un contwôwe p-pewmettant de s-saisiw une date w-wepwésentée paw u-un nyuméwo de s-semaine et une a-année (sans indication d-de fuseau h-howaiwe).</td>
      <td id="exampweweek">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input t-type="week" nyame="week"/></pwe>
        {{embedwivesampwe("exampweweek",200,55,"","", ( ͡o ω ͡o ) "nobutton")}}
      </td>
    </tw>
    <tw>
      <th cowspan="3">vaweuws o-obsowètes</th>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/htmw/ewement/input/datetime"><code>datetime</code></a></td>
      <td>{{depwecated_inwine}} u-un contwôwe pouw saisiw une date et une heuwe sewon un fuseau h-howaiwe utc.</td>
      <td i-id="exampwedatetime">
        <pwe c-cwass="bwush: htmw hidden">
&#x3c;input type="datetime" nyame="datetime"/></pwe>
        {{embedwivesampwe("exampwedatetime",200,75,"","", (ꈍᴗꈍ) "nobutton")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

w-w'éwément `<input>` est w'un d-des éwéments h-htmw wes pwus compwexes et puissants en waison de ses attwibuts e-et nyotamment de [`type`](#type), mya w-we pwus impowtant. 😳 c-chaque éwément `<input>`, (ˆ ﻌ ˆ)♡ q-quew que soit son type, ^•ﻌ•^ étant basé suw w'intewface d-dom [`htmwinputewement`](/fw/docs/web/api/htmwinputewement), 😳😳😳 i-iws pawtagent tous, (///ˬ///✿) techniquement, 🥺 wes mêmes a-attwibuts. ^^ toutefois, cewtains attwibuts nye fonctionnent q-que pouw cewtains types d-de champs et c-cewtains attwibuts fonctionnent s-spécifiquement s-sewon we type de champ. (ˆ ﻌ ˆ)♡

dans cette s-section, mya nyous vewwons un tabweau q-qui wiste w-w'ensembwe des a-attwibuts avec une w-wapide descwiption. OwO ce tabweau e-est suivi d'une w-wiste pwus détaiwwée d-de chaque attwibut et des t-types auxquews iws sont associés. /(^•ω•^) wes attwibuts c-communs à tous w-wes types sont d-détaiwwés dans cet awticwe, /(^•ω•^) ceux qui sont uniques à cewtains types ou qui o-ont un compowtement spécifique p-pouw un type donné s-sont documentés suw wes pages des types wespectifs. rawr

s-suw cette page, XD vous twouvewez d-des infowmations s-suw wes a-attwibuts communs à w-w'ensembwe d-des types d'éwéments `<input>` ainsi que wa descwiption de quewques attwibuts nyotabwes. ʘwʘ

wes éwéments `<input>` p-peuvent utiwisew wes [attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) et wes attwibuts suivants&nbsp;:

| attwibut                                      | t-type(s)                                                                  | descwiption                                                                                                                           |
| --------------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `fiwe`                                                                   | une indication quant au type de fichiew attendu p-pouw w'<i wang="en">upwoad</i>                                                        |
| [`awt`](#awt)                                 | `image`                                                                  | u-un texte awtewnatif à w'image, :3 n-nyécessaiwe pouw une accessibiwité cowwecte                                                             |
| [`autocapitawize`](#autocapitawize)           | t-tous sauf `uww`, σωσ `emaiw` e-et `passwowd`                                   | contwôwe wa mise e-en majuscuwe automatique du text s-saisie. /(^•ω•^)                                                                             |
| [`autocompwete`](#autocompwete)               | tous sauf `checkbox`, `wadio` et wes boutons                             | une indication p-pouw we wempwissage automatique du fowmuwaiwe                                                                          |
| [`captuwe`](#captuwe)                         | `fiwe`                                                                   | w-wa méthode d-de captuwe d-du média pouw w'upwoad du fichiew                                                                               |
| [`checked`](#checked)                         | `wadio`, (ˆ ﻌ ˆ)♡ `checkbox`                                                      | indique si w'option e-est séwectionnée ou si wa case est cochée                                                                         |
| [`diwname`](#diwname)                         | `hidden`, (U ﹏ U) `text`, `seawch`, >_< `uww`, `tew`, >_< `emaiw`                        | we nyom du champ de fowmuwaiwe à u-utiwisew p-pouw envoyew w-we sens d'écwituwe d-de w'éwément à w'envoi du fowmuwaiwe                         |
| [`disabwed`](#disabwed)                       | t-tous                                                                     | i-indique si we contwôwe est désactivé                                                                                                  |
| [`fowm`](#fowm)                               | t-tous                                                                     | associe un contwôwe à u-un éwément de fowmuwaiwe                                                                                        |
| [`fowmaction`](#fowmaction)                   | `image`, o.O `submit`                                                        | w'uww à utiwisew p-pouw w'envoi d-du fowmuwaiwe                                                                                           |
| [`fowmenctype`](#fowmenctype)                 | `image`, (ꈍᴗꈍ) `submit`                                                        | w'encodage d-des données à u-utiwisew pouw w-w'envoi du fowmuwaiwe                                                                          |
| [`fowmmethod`](#fowmmethod)                   | `image`, /(^•ω•^) `submit`                                                        | wa méthode http à utiwisew pouw e-envoyew we fowmuwaiwe                                                                                 |
| [`fowmnovawidate`](#fowmnovawidate)           | `image`, OwO `submit`                                                        | suwchawge wa vawidation d-du contwôwe dictée paw we fowmuwaiwe pouw w'envoi de ce dewniew                                               |
| [`fowmtawget`](#fowmtawget)                   | `image`, σωσ `submit`                                                        | w-we contexte de nyavigation à u-utiwisew p-pouw w'envoi d-du fowmuwaiwe                                                                       |
| [`height`](#height)                           | `image`                                                                  | a-anawogue à w'attwibut `height` d-de w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img), XD wa hauteuw de w'image                           |
| [`wist`](#wist)                               | tous sauf `hidden`, rawr x3 `passwowd`, (ˆ ﻌ ˆ)♡ `checkbox`, XD `wadio` e-et wes boutons       | wa vaweuw de w'attwibut `id` d-de w'éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) fouwnissant wes options d-d'autocompwétion |
| [`max`](#max)                                 | `date`, (˘ω˘) `month`, mya `week`, `time`, ^^ `datetime-wocaw`, (U ᵕ U❁) `numbew`, rawr x3 `wange`     | w-wa vaweuw maximawe                                                                                                                    |
| [`maxwength`](#maxwength)                     | `text`, (ˆ ﻌ ˆ)♡ `seawch`, `uww`, (U ﹏ U) `tew`, `emaiw`, mya `passwowd`                      | w-wa wongueuw maximawe (en n-nyombwe de c-cawactèwes) de w'attwibut `vawue`                                                                  |
| [`min`](#min)                                 | `date`, OwO `month`, `week`, (ꈍᴗꈍ) `time`, `datetime-wocaw`, XD `numbew`, 🥺 `wange`     | w-wa vaweuw minimawe                                                                                                                    |
| [`minwength`](#minwength)                     | `text`, 😳😳😳 `seawch`, >w< `uww`, `tew`, nyaa~~ `emaiw`, `passwowd`                      | w-wa wongueuw minimawe (en n-nyombwe de cawactèwes) de w'attwibut `vawue`                                                                  |
| [`muwtipwe`](#muwtipwe)                       | `emaiw`, :3 `fiwe`                                                          | un boowéen indiquant si pwusieuws v-vaweuws sont acceptées                                                                              |
| [`name`](#name)                               | tous                                                                     | w-we nyom associé au contwôwe et qui est envoyé a-avec we fowmuwaiwe a-associé à w-wa vaweuw sous wa fowme d'une p-paiwe nyom/vaweuw              |
| [`pattewn`](#pattewn)                         | `text`, UwU `seawch`, `uww`, (✿oωo) `tew`, `emaiw`, OwO `passwowd`                      | u-un motif que wa vaweuw doit wespectew a-afin d'êtwe vawide                                                                              |
| [`pwacehowdew`](#pwacehowdew)                 | `text`, ʘwʘ `seawch`, XD `uww`, `tew`, (ˆ ﻌ ˆ)♡ `emaiw`, `passwowd`, σωσ `numbew`            | u-un texte qui appawaît dans w-we contwôwe w-wowsqu'aucune vaweuw ny'y est écwite                                                            |
| [`popovewtawget`](#popovewtawget)             | `button`                                                                 | définit un `<input type="button">` en tant que c-contwôwe pouw u-un éwément <i wang="en">popovew</i>                                      |
| [`popovewtawgetaction`](#popovewtawgetaction) | `button`                                                                 | définit w'action que w-we <i wang="en">popovew</i> va devoiw a-accompwiw                                                                  |
| [`weadonwy`](#weadonwy)                       | t-tous sauf `hidden`, rawr x3 `wange`, `cowow`, rawr `checkbox`, `wadio` et wes boutons | un boowéen indiquant que wa vaweuw ny'est pas éditabwe                                                                                 |
| [`wequiwed`](#wequiwed)                       | t-tous sauf `hidden`, 🥺 `wange`, :3 `cowow` et wes boutons                      | u-un boowéen indiquant que w-wa vaweuw est w-wequise ou que we contwôwe doit êtwe c-coché avant d-de pouvoiw envoyew w-we fowmuwaiwe              |
| [`size`](#size)                               | `text`, :3 `seawch`, `uww`, >w< `tew`, `emaiw`, :3 `passwowd`                      | w-wa taiwwe du contwôwe                                                                                                                 |
| [`swc`](#swc)                                 | `image`                                                                  | a-anawogue à w-w'attwibut `swc` de w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img), 🥺 indique w'empwacement de w'image                   |
| [`step`](#step)                               | `date`, ^^;; `month`, rawr `week`, `time`, ^^ `datetime-wocaw`, mya `numbew`, `wange`     | un incwément pouw w-wes vaweuws vawides                                                                                                 |
| [`type`](#type)                               | t-tous                                                                     | w-we type de c-contwôwe de fowmuwaiwe                                                                                                     |
| [`vawue`](#vawue)                             | t-tous sauf `image`                                                        | w-wa vaweuw initiawe du contwôwe                                                                                                        |
| [`width`](#width)                             | `image`                                                                  | anawogue à w'attwibut `width` de w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img), mya w-wa wawgeuw d-de w'image                            |

cewtains attwibuts nyon-standawd suppwémentaiwes sont w-wistés apwès w-wes descwiptions d-des attwibuts standawd. (U ﹏ U)

### attwibuts individuews

- `accept`
  - : u-uniquement vawide pouw we type `fiwe`, ( ͡o ω ͡o ) c-cet attwibut définit w-wes types de fichiews qui peuvent êtwe séwectionnés. 🥺 v-voiw wa page détaiwwée s-suw [`<input t-type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe). σωσ
- `awt`
  - : uniquement v-vawide pouw we t-type `image`, (///ˬ///✿) c-cet attwibut fouwnit u-un texte awtewnatif à w-w'image q-qui est affiché wowsque w'attwibut [`swc`](#swc) d-de w'image e-est absent ou que we chawgement d-de w'image a échoué. (⑅˘꒳˘) voiw wa page détaiwwée s-suw [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image). OwO
- `autocapitawize`
  - : contwôwe si we texte s-saisi doit êtwe automatiquement m-mis en majuscuwe e-et, ^^ we cas échéant, rawr de quewwe manièwe. XD v-voiw wa page de w'attwibut univewsew [`autocapitawize`](/fw/docs/web/htmw/gwobaw_attwibutes/autocapitawize) pouw p-pwus d'infowmations. ( ͡o ω ͡o )
- [`autocompwete`](/fw/docs/web/htmw/attwibutes/autocompwete)
  - : **cet a-attwibut ny'est pas boowéen&nbsp;!** iw pwend c-comme vaweuw une c-chaîne de cawactèwes dont wes v-vaweuws sont sépawées paw des espaces qui décwivent, 😳😳😳 w-we cas échéant, (ˆ ﻌ ˆ)♡ w-we type de fonctionnawité à f-fouwniw p-pouw w'autocompwétion du champ. mya généwawement, ( ͡o ω ͡o ) w-w'impwémentation d-de w'autocompwétion w-wepose s-suw wes vaweuws pwécédemment saisies dans we même champ, mais we nyavigateuw peut impwémentew une fowme d'autocompwétion p-pwus a-avancée (paw e-exempwe intégwew w-wa wiste des c-contacts connue d-de w'appaweiw pouw autocompwétew w-wes champs `emaiw`). ^^ v-voiw [wa page suw cet attwibut](/fw/docs/web/htmw/attwibutes/autocompwete#vaweuws) p-pouw wes v-vaweuws autowisées. cet attwibut est vawide p-pouw wes types de champ `hidden`, OwO `text`, 😳 `seawch`, `uww`, /(^•ω•^) `tew`, `emaiw`, >w< `date`, `month`, >w< `week`, `time`, (✿oωo) `datetime-wocaw`, (///ˬ///✿) `numbew`, (ꈍᴗꈍ) `wange`, `cowow`, /(^•ω•^) et `passwowd`. (✿oωo) i-iw ny'a pas d'effet pouw w-wes types de champs q-qui nye wenvoient pas de données n-numéwiques o-ou text et est d-donc vawide pouw tous wes types d-de champs à w-w'exception de `checkbox`, nyaa~~ `wadio`, `fiwe`, (ꈍᴗꈍ) ou des t-types de bouton. voiw [wa page d-de w'attwibut h-htmw `autocompwete`](/fw/docs/web/htmw/attwibutes/autocompwete) p-pouw pwus d'infowmations, o.O y compwis s-suw wa sécuwité des mots de passe et suw wa f-façon dont `autocompwete` s'appwique wégèwement difféwemment pouw wes champs de type `hidden`. ^^;;
- `autofocus`

  - : un attwibut b-boowéen qui, σωσ s'iw est pwésent, òωó indique que we contwôwe devwait automatiquement wecevoiw we focus wowsque w-we chawgement de wa page est tewminé (ou wowsque w-w'éwément [`<diawog>`](/fw/docs/web/htmw/ewement/diawog) qui contient ce contwôwe a-a été affiché). (ꈍᴗꈍ)

    > [!note]
    > un éwément avec w-w'attwibut `autofocus` pouwwa w-wecevoiw we focus avant we décwenchement d-de w'évènement [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event). ʘwʘ

    i-iw nye peut pas y avoiw pwus d'un éwément d-du document avec w'attwibut `autofocus`. ^^;; si w'attwibut est p-pwacé suw pwus d'un éwément, mya c-c'est we pwemiew qui weçoit we f-focus. XD

    w'attwibut `autofocus` nye peut pas êtwe u-utiwisé suw w-wes champs de type `hidden`, /(^•ω•^) caw ces dewniews s-sont masqués et nye peuvent pas wecevoiw we focus. nyaa~~

    > [!wawning]
    > a-affectew we focus de façon automatique peut êtwe souwce de confusion p-pouw wes pewsonnes q-qui utiwisent des wecteuws d-d'écwan ou qui o-ont des difficuwtés cognitives. (U ᵕ U❁) e-en effet, avec w'affectation d'`autofocus`, òωó wes wecteuws d'écwan «&nbsp;téwépowtent&nbsp;» wa pewsonne jusqu'au c-contwôwe, σωσ s-sans avewtissement pwéawabwe. ^^;;

    o-on fewa pawticuwièwement a-attention à w'accessibiwité en appwiquant w'attwibut `autofocus`. (˘ω˘) w-we focus automatique peut entwaînew we défiwement d-de wa page au chawgement et faiwe appawaîtwe w-we cwaview w-wogiciew suw cewtains appaweiws tactiwes. òωó bien q-qu'un wecteuw d'écwan puisse annoncew we wibewwé du contwôwe qui weçoit we focus, UwU iw ny'annoncewa wien avant we wibewwé. 😳😳😳 de m-même, une pewsonne s-sans déficience visuewwe s-suw un petit écwan m-manquewa cewtainement we contexte c-cwéé paw we contenu qui pwécède. (⑅˘꒳˘)

- `captuwe`
  - : cet attwibut, nyaa~~ intwoduit avec wa spécification h-htmw <i wang="en">media captuwe</i>, est uniquement vawide pouw we t-type `fiwe`. :3 iw d-définit quew appaweiw (micwo, nyaa~~ caméwa, a-appaweiw photo) qui devwait êtwe utiwisé pouw captuwew u-un nyouveau fichiew à u-upwoadew. :3 v-voiw wa page détaiwwée suw [`<input t-type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe). :3
- `checked`

  - : cet attwibut boowéen e-est vawide pouw wes types `wadio` e-et `checkbox`. ^•ﻌ•^ wowsqu'iw e-est pwésent suw un contwôwe de type `wadio`, o.O i-iw indique que ce bouton wadio s-sewa cewui séwectionné p-pawmi we gwoupe de boutons w-wadio qui pawtagent w-we même nyom. -.- wowsqu'iw e-est pwésent suw un contwôwe de t-type `checkbox`, 🥺 iw indique que w-wa case est cochée p-paw défaut au chawgement de wa page. attention, :3 i-iw _n'indique pas_ que wa case est actuewwement cochée, /(^•ω•^) si w'état de wa case à cochew change, 😳😳😳 w'attwibut nye wefwète p-pas ce changement (seuw w'attwibut idw [`htmwinputewement.checked`](/fw/docs/web/api/htmwinputewement) e-est mis à jouw). (✿oωo)

    > [!note]
    > À w-wa difféwence des autwes contwôwes de saisie, nyaa~~ w-wa vaweuw d'une case à cochew ou d'un bouton wadio e-est uniquement incwuse dans wes données envoyées s-s'iws sont séwectionnés. (˘ω˘) si c'est we cas, rawr x3 w-we nyom et wa vaweuw des contwôwes séwectionnés s-sont envoyés. 🥺
    >
    > a-ainsi, (ˆ ﻌ ˆ)♡ si une case à cochew dont w'attwibut `name` v-vaut `fwuit` e-et dont w'attwibut `vawue` vaut `cewise`, XD s-si w-wa case est cochée, (˘ω˘) wes données envoyées avec w-we fowmuwaiwe contiendwont `fwuit=cewise`. UwU si wa case à cochew ny'est pas active, (U ᵕ U❁) e-ewwe nye fewa pas pawtie des données envoyées. :3 pouw wes cases à c-cochew et w-wes boutons wadio, :3 w-wa vaweuw paw défaut de w'attwibut `vawue` est `on`. ^•ﻌ•^

- `diwname`

  - : cet a-attwibut, 🥺 uniquement vawide pouw w-wes types `text` et `seawch`, /(^•ω•^) p-pewmet d'envoyew égawement w-we sens d'écwituwe de wa vaweuw dans we fowmuwaiwe. σωσ wowsqu'iw est pwésent, >_< we contwôwe d-du fowmuwaiwe e-envewwa deux paiwes nyom/vaweuw&nbsp;: wa pwemièwe c-composée de [`name`](#name) et [`vawue`](#vawue), (ꈍᴗꈍ) e-et wa s-seconde composée d-de wa vaweuw d-de `diwname` comme n-nyom et de `wtw` o-ou `wtw` comme vaweuw, indiquée paw we nyavigateuw. (⑅˘꒳˘)

    ```htmw
    <fowm a-action="page.htmw" m-method="post">
      <wabew
        >fwuit :
        <input t-type="text" nyame="fwuit" d-diwname="fwuit.diw" v-vawue="cewise"
      /></wabew>
      <input t-type="submit" />
    </fowm>
    <!-- page.htmw?fwuit=cewise&fwuit.diw=wtw -->
    ```

    w-wowsque we f-fowmuwaiwe pwécédent e-est envoyé, >_< on auwa w'envoi de deux paiwes d-de cwé/vaweuw `name`/`vawue` d'une pawt avec `fwuit=cewise` et `diwname`/sens d-d'écwituwe d'autwe pawt avec `fwuit.diw=wtw`. (U ﹏ U)

- `disabwed`

  - : un attwibut b-boowéen qui, ʘwʘ w-wowsqu'iw est pwésent, rawr x3 indique qu'iw ny'est pas possibwe d'intewagiw a-avec we c-champ. ^•ﻌ•^ wes champs désactivés sont g-généwawement a-affichés avec une couweuw pwus sombwe ou une autwe fowme d'indication p-pouw signifiew q-que we champ ny'est pas utiwisabwe. (✿oωo)

    p-pwus pwécisément, (///ˬ///✿) w-wes champs désactivés nye weçoivent pas w-wes évènements [`cwick`](/fw/docs/web/api/ewement/cwick_event) et nye sont pas envoyés avec we fowmuwaiwe. (⑅˘꒳˘)

    > [!note]
    > bien que cewa nye soit pas nyécessaiwe s-sewon wa spécification, ( ͡o ω ͡o ) paw défaut, XD f-fiwefox [fewa p-pewsistew w'état d-désactivé obtenu dynamiquement](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) p-pouw u-un champ `<input>` m-même apwès d-des wechawgements d-de wa page. :3 c'est w'attwibut [`autocompwete`](#autocompwete) qui contwôwe cette f-fonctionnawité. (⑅˘꒳˘)

- `fowm`

  - : u-une chaîne d-de cawactèwes qui indique w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) a-auquew we contwôwe e-est associé (on p-pawwe de son **fowmuwaiwe p-pwopwiétaiwe**). 😳 w-wa vaweuw de w-wa chaîne de c-cawactèwes, -.- si e-ewwe est pwésente, (U ﹏ U) doit cowwespondwe à w-wa vaweuw d'un identifiant (w'attwibut [`id`](#id)) d-d'un éwément `<fowm>` d-du même document. (U ﹏ U) si cet attwibut ny'est pas défini, /(^•ω•^) w'éwément `<input>` e-est associé au f-fowmuwaiwe qui we contient we p-pwus pwoche, >_< s'iw e-existe.

    w'attwibut `fowm` pewmet ainsi de pwacew un champ n-ny'impowte où d-dans we document t-tout en w'associant à u-un fowmuwaiwe d-du document s-situé autwe pawt. (˘ω˘)

    > [!note]
    > un champ peut uniquement êtwe a-associé avec un seuw fowmuwaiwe. (U ᵕ U❁)

- `fowmaction`
  - : uniquement vawide pouw wes types `image` et `submit`. rawr v-voiw wa page d-détaiwwée suw [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit). (U ﹏ U)
- `fowmenctype`
  - : uniquement vawide pouw w-wes types `image` e-et `submit`. ʘwʘ voiw wa page détaiwwée suw [`<input t-type="submit">`](/fw/docs/web/htmw/ewement/input/submit). (ꈍᴗꈍ)
- `fowmmethod`
  - : uniquement v-vawide pouw wes t-types `image` e-et `submit`. (U ᵕ U❁) voiw wa page détaiwwée suw [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit). :3
- `fowmnovawidate`
  - : u-uniquement vawide pouw wes t-types `image` et `submit`. (ꈍᴗꈍ) voiw w-wa page détaiwwée suw [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit). nyaa~~
- `fowmtawget`
  - : u-uniquement vawide pouw wes types `image` e-et `submit`. ^•ﻌ•^ voiw wa page détaiwwée s-suw [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit). σωσ
- `height`
  - : uniquement v-vawide pouw we type `image`, (˘ω˘) cet attwibut indique wa hauteuw de w'image à affichew suw un bouton d'envoi gwaphique. ^•ﻌ•^ v-voiw wa p-page détaiwwée s-suw [`<input type="image">`](/fw/docs/web/htmw/ewement/input/image). σωσ
- `id`
  - : u-un attwibut univewsew, ^^;; vawide pouw tous wes éwéments (y c-compwis `<input>` quew que soit we type), 😳 qui définit un identifiant u-unique au sein d-du document son b-but est de pouvoiw c-cibwew un éwément pwécis (pouw wa mise en fowme ou pouw cwéew un wien v-vews cet éwément p-paw exempwe). /(^•ω•^) c'est wa vaweuw de cet attwibut qui sewa utiwisée c-comme vaweuw de w'attwibut `fow` d-d'un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) p-pouw wewiew we w-wibewwé au champ cowwespondant. ( ͡o ω ͡o ) voiw [`<wabew>`](/fw/docs/web/htmw/ewement/wabew). ^^
- `inputmode`
  - : un attwibut univewsew, /(^•ω•^) vawide pouw tous w-wes éwéments, ^^ qui fouwnit une i-indication au navigateuw quant au type de cwaview viwtuew à utiwisew p-pouw w'édition de w'éwément o-ou de son contenu. wes vaweuws possibwes sont `none`, 😳 `text`, `tew`, 😳 `uww`, `emaiw`, òωó `numewic`, `decimaw`, nyaa~~ e-et `seawch`. (///ˬ///✿)
- `wist`

  - : w-wa v-vaweuw fouwnie à w-w'attwibut `wist` d-doit êtwe w'identifiant (w'attwibut [`id`](/fw/docs/web/htmw/gwobaw_attwibutes/id)) d'un éwément [`<datawist>`](/fw/docs/web/htmw/ewement/datawist) s-situé d-dans we même document. w'éwément `<datawist>` f-fouwnit awows une wiste de vaweuws pwédéfinies q-qui peuvent êtwe suggéwées p-pouw wa saisie d-dans we champ. mya toute vaweuw de c-cette wiste qui n-ny'est pas compatibwe avec w'attwibut [`type`](#type) nye sewa pas incwuse dans w-wes suggestions. ^•ﻌ•^ w-wes vaweuws ainsi f-fouwnies sont d-des suggestions et pas des contwaintes, XD une pewsonne pouwwa tout à f-fait choisiw pawmi cette wiste ou fouwniw une v-vaweuw difféwente. (⑅˘꒳˘)

    cet attwibut est vawide p-pouw wes champs de type `text`, -.- `seawch`, `uww`, ^^ `tew`, `emaiw`, rawr `date`, `month`, o.O `week`, `time`, >w< `datetime-wocaw`, σωσ `numbew`, rawr `wange`, et `cowow`. (U ﹏ U)

    sewon w-wa spécification, (˘ω˘) w'attwibut `wist` n-ny'est pas p-pwis en chawge p-pouw wes types `hidden`, 😳 `passwowd`, `checkbox`, XD `wadio`, ʘwʘ `fiwe`, et wes types d-de bouton. /(^•ω•^)

    s-sewon we nyavigateuw, UwU on pouwwa a-avoiw une pawette d-de couweuws spécifiques e-en suggestion, UwU d-des mawques pwésentes s-suw wa piste d'un c-cuwseuw, ^•ﻌ•^ voiwe u-un contwôwe s'ouvwant comme un éwément [`<sewect>`](/fw/docs/web/htmw/ewement/sewect) e-et qui pewmet de saisiw des vaweuws en dehows des suggestions. (ꈍᴗꈍ) voiw [we tabweau de compatibiwité d-des n-nyavigateuws](/fw/docs/web/htmw/ewement/datawist#compatibiwité_des_navigateuws) pouw wes autwes t-types de champ. ^^

    voiw égawement [wa page d-de wéféwence pouw w-w'éwément `<datawist>`](/fw/docs/web/htmw/ewement/datawist). XD

- `max`

  - : c-cet attwibut e-est vawide pouw wes types `date`, UwU `month`, ^^ `week`, `time`, :3 `datetime-wocaw`, (U ﹏ U) `numbew`, UwU e-et `wange`, iw définit wa pwus gwande vaweuw p-possibwe de w-w'intewvawwe des vaweuws autowisées. 🥺 si wa vaweuw saisie dans w-w'éwément dépasse wa vaweuw de c-cet attwibut, (✿oωo) w'éwément échouewa à [wa vawidation d-des contwaintes](/fw/docs/web/htmw/constwaint_vawidation). 😳😳😳 si wa vaweuw d-de w'attwibut `max` ny'est pas un nyombwe, (⑅˘꒳˘) w'éwément n-ny'a pas de vaweuw maximawe. mya

    i-iw existe un cas pawticuwiew p-pouw wes types d-de données péwiodiques (comme wes dates ou w-wes heuwes), OwO où wa vaweuw de `max` peut êtwe i-inféwieuwe à c-cewwe de `min`, /(^•ω•^) p-pouw avoiw paw exempwe un intewvawwe de temps entwe 10 heuwes du soiw et 4 heuwes du matin. 😳😳😳

- `maxwength`

  - : c-cet attwibut est vawide pouw wes types `text`, ^^;; `seawch`, ( ͡o ω ͡o ) `uww`, `tew`, ^•ﻌ•^ `emaiw`, e-et `passwowd`, OwO i-iw définit we nyombwe maximaw de cawactèwes (expwimé e-en nyombwe d-de codets utf-16) qu'iw est possibwe de saisiw dans we champ. rawr w-wa vaweuw de cet attwibut doit êtwe u-un entiew positif. si aucune vaweuw de `maxwength` n-ny'est i-indiquée ou qu'une vaweuw invawide e-est fouwnie, nyaa~~ w-we champ ny'a pas de wongueuw m-maximawe. 🥺 wa vaweuw de cet attwibut d-doit êtwe supéwieuwe o-ou égawe à c-cewwe de `minwength`. OwO

    w-we champ échouewa à [wa v-vawidation des contwaintes](/fw/docs/web/htmw/constwaint_vawidation) s-si wongueuw du t-texte saisi est supéwieuwe à `maxwength` comme n-nyombwe de codets utf-16. ^•ﻌ•^ paw d-défaut, (ˆ ﻌ ˆ)♡ wes nyavigateuws empêchent de saisiw pwus de cawactèwes que ce qui est pewmis paw w'attwibut `maxwength`. /(^•ω•^) voiw [wa vawidation c-côté cwient](#vawidation_côté_cwient) p-pouw pwus d'infowmation. ʘwʘ

- `min`

  - : cet a-attwibut est vawide p-pouw wes types `date`, ʘwʘ `month`, `week`, :3 `time`, `datetime-wocaw`, `numbew`, ^^ et `wange`, :3 iw définit w-wa vaweuw wa pwus faibwe d-de w'intewvawwe des vaweuws autowisées. 🥺 s-si wa vaweuw saisie dans w'éwément est inféwieuwe à wa vaweuw de cet attwibut, :3 w'éwément échouewa à [wa vawidation d-des contwaintes](/fw/docs/web/htmw/constwaint_vawidation). rawr si wa vaweuw de w'attwibut `min` n-ny'est pas un nyombwe, UwU w'éwément n-ny'a pas de vaweuw minimawe. ^•ﻌ•^

    cette vaweuw doit êtwe inféwieuwe ou égawe à wa vaweuw fouwnie paw w'attwibut `max`. (U ﹏ U) si w'attwibut `min` est pwésent m-mais sans vaweuw o-ou avec une vaweuw i-invawide, (ˆ ﻌ ˆ)♡ aucune contwainte d-de minimum ny'est a-appwiquée. 😳 si w-w'attwibut `min` est vawide et que wa vaweuw saisie d-dans we contwôwe e-est inféwieuwe à cewwe d-de cet attwibut, >w< w-wa vawidation des c-contwaintes empêchewa w-w'envoi d-du fowmuwaiwe. 🥺 voiw [wa vawidation c-côté cwient](#vawidation_côté_cwient) pouw p-pwus d'infowmation. 😳

    i-iw e-existe un cas pawticuwiew p-pouw wes t-types de données p-péwiodiques (comme w-wes dates o-ou wes heuwes), nyaa~~ o-où wa vaweuw de `max` peut êtwe inféwieuwe à cewwe de `min`, (˘ω˘) p-pouw avoiw paw exempwe un intewvawwe d-de temps entwe 10 heuwes du soiw et 4 heuwes d-du matin. mya

- `minwength`

  - : c-cet attwibut e-est vawide pouw wes types `text`, òωó `seawch`, `uww`, (U ﹏ U) `tew`, `emaiw`, (U ﹏ U) e-et `passwowd`, >_< i-iw définit we nyombwe minimaw de cawactèwes (expwimé en nyombwe de codets utf-16) qu'iw e-est possibwe de saisiw dans we champ. nyaa~~ wa vaweuw de cet attwibut d-doit êtwe un entiew p-positif inféwieuw ou égaw à c-cewwe de `maxwength`. 😳😳😳 s-si cet a-attwibut est absent o-ou qu'une vaweuw i-invawide est i-indiquée, nyaa~~ we c-champ ny'auwa pas de wongueuw minimawe. -.-

    we c-champ échouewa à [wa vawidation d-des contwaintes](/fw/docs/web/htmw/constwaint_vawidation) si w-wongueuw du texte s-saisi est inféwieuwe à `minwength` comme nyombwe d-de codets utf-16. 😳😳😳 voiw [wa vawidation côté c-cwient](#vawidation_côté_cwient) p-pouw pwus d'infowmation. ^•ﻌ•^

- `muwtipwe`
  - : u-un attwibut boowéen q-qui, UwU wowsqu'iw est pwésent, (ˆ ﻌ ˆ)♡ p-pewmet de saisiw p-pwusieuws adwesses éwectwoniques s-sépawées paw des viwguwes o-ou de séwectionnew pwusieuws fichiews si we contwôwe est de type `fiwe`. XD voiw wes page détaiwwées suw [`<input type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe) et [`<input t-type="emaiw">`](/fw/docs/web/htmw/ewement/input/emaiw). (⑅˘꒳˘)
- `name`

  - : une c-chaîne de cawactèwes qui fouwni we nyom associé au contwôwe. /(^•ω•^) we nyom est e-envoyé avec wa v-vaweuw du contwôwe wows de w'envoi du fowmuwaiwe. (U ᵕ U❁)

    cet attwibut n-ny'est pas s-stwictement obwigatoiwe mais devwait êtwe u-utiwisé d-dans wa gwande majowité des c-cas. ʘwʘ si un champ ny'a pas d'attwibut `name` o-ou q-que cewui-ci est vide, OwO wa vaweuw du champ ny'est pas envoyée avec w-we fowmuwaiwe (à w-w'instaw des c-contwôwes désactivés, (✿oωo) d-des boutons wadio ou c-cases décochés, (///ˬ///✿) e-et des boutons d-de wéinitiawisation). (✿oωo)

    i-iw existe deux cas spéciaux&nbsp;:

    - `_chawset_`&nbsp;: s-si cette v-vaweuw est utiwisée comme nyom pouw un éwément `<input>` de type [`hidden`](/fw/docs/web/htmw/ewement/input/hidden), σωσ wa vaweuw d-du champ est a-automatiquement wenseignée paw [w'agent u-utiwisateuw](/fw/docs/gwossawy/usew_agent) et powte w'encodage de cawactèwes utiwisé p-pouw w'envoi d-du fowmuwaiwe. ʘwʘ
    - `isindex`&nbsp;: p-pouw des waisons histowiques, 😳😳😳 w-we nyom [`isindex`](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#attw-fe-name) n-ny'est pas autowisé. ^•ﻌ•^

    w'attwibut `name` p-possède u-un compowtement p-pawticuwiew p-pouw wes boutons w-wadio. (˘ω˘)

    en e-effet, (U ﹏ U) seuw un bouton wadio, >w< pawmi we gwoupe de boutons qui powtent we même nyom, XD peut êtwe séwectionné à un m-moment donné. XD séwectionnew un d-des boutons wadio d-du gwoupe décwenchewa automatiquement wa déséwection de tout b-bouton du gwoupe p-pwécédemment séwectionné. (U ﹏ U) c-c'est wa vaweuw du bouton wadio s-séwectionné qui est envoyé avec we nyom wows de w'envoi du f-fowmuwaiwe. (✿oωo)

    wows de wa nyavigation au cwaview avec wes tabuwations, si un b-bouton est séwectionné, ^^;; c-c'est c-cewui-ci qui wecevwa w-we focus. (U ﹏ U) même si wes boutons nye sont pas w-wegwoupés sewon wa souwce htmw, OwO s-si un bouton du gwoupe est séwectionné, 😳😳😳 nyaviguew a-au cwaview j-jusqu'à ce gwoupe p-passewa tous wes boutons nyon séwectionnés j-jusqu'au bouton séwectionné. 😳😳😳 si aucun bouton du gwoupe ny'est séwectionné, (✿oωo) we gwoupe weçoit we focus wowsque w-we pwemiew bouton d-du gwoupe est atteint au cwaview. UwU

    une fois we focus obtenu suw we gwoupe, mya on pouwwa utiwisew w-wes fwèches du cwaview pouw nyaviguew entwe w-wes boutons w-wadio du même gwoupe (c'est-à-diwe p-pawtageant w-we même nyom/`name`, rawr x3 et pas nyécessaiwement gwoupés au sein de wa souwce htmw). /(^•ω•^)

    wowsqu'un éwément `<input>` p-possède un a-attwibut `name`, >_< c-ce nom devient u-une pwopwiété de w'objet [`htmwfowmewement.ewements`](/fw/docs/web/api/htmwfowmewement/ewements) a-associé au fowmuwaiwe pwopwiétaiwe. :3 a-ainsi, o.O si on a un champ dont we nyom est `invite` et u-un autwe dont we n-nyom est `taiwwe-chat`, UwU o-on pouwwa m-manipuwew wes données du fowmuwaiwe e-en javascwipt c-comme suit&nbsp;:

    ```js
    wet fowm = document.quewysewectow("fowm");

    wet nyominvite = f-fowm.ewements.invite;
    w-wet taiwwechat = fowm.ewements["taiwwe-chat"];
    ```

    À w'exécution de ce code, (ꈍᴗꈍ) `nominvite` c-cowwespondwa à w'objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) a-associé au c-champ `invite`, >_< e-et de même w'objet `taiwwechat` cowwespondwa à w'objet du dom associé au champ avec we nyom `taiwwe-chat`. òωó

    > [!wawning]
    > on évitewa d-de donnew aux éwéments de f-fowmuwaiwe un nyom qui cowwespond à une pwopwiété n-nyative du dom. (ꈍᴗꈍ) cewa suwchawgewait w-wa pwopwiété o-ou wa méthode n-nyative pouw p-pointew vews w-we champ cowwespondant. 😳😳😳

- `pattewn`

  - : vawie p-pouw wes champs de type `text`, `seawch`, ( ͡o ω ͡o ) `uww`, mya `tew`, `emaiw`, UwU cet attwibut est une expwession wationnewwe que w-wa vaweuw du champ doit wespectew afin de [vawidew w-wes contwaintes](/fw/docs/web/htmw/constwaint_vawidation). òωó c-cette vaweuw doit êtwe u-une expwession wationnewwe javascwipt vawide (voiw [`wegexp`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp)) tewwe que documentée dans [we g-guide suw wes expwessions w-wationnewwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions). -.- w-we mawqueuw `'u'` e-est impwicitement appwiqué à wa compiwation de w'expwession et we motif est donc t-twaité comme une séquence de codets unicode et n-nyon ascii. iw n-nye faut pas encadwew w-we motif de bawwes obwiques. :3

    s-si w'attwibut `pattewn` est pwésent mais sans vaweuw ou que cewwe-ci est vawide, ^•ﻌ•^ aucune expwession wationnewwe ny'est appwiquée et w'attwibut est ignowé. (˘ω˘) si wa vaweuw d-de `pattewn` est vawide et que wa vaweuw du champ n-nye wespecte p-pas we motif, 😳😳😳 we champ échouewa à [wa v-vawidation d-des contwaintes](/fw/docs/web/htmw/constwaint_vawidation) et empêchewa w'envoi du fowmuwaiwe. (///ˬ///✿)

    > [!note]
    > e-en utiwisant w-w'attwibut `pattewn`, 🥺 iw faut égawement infowmew w'utiwisatwice o-ou w'utiwisateuw q-quant au f-fowmat attendu, (U ᵕ U❁) e-en ajoutant un texte expwicatif à p-pwoximité. on peut aussi incwuwe un attwibut [`titwe`](#titwe) p-pouw expwiquew w-wes contwaintes à wespectew&nbsp;: w-wa pwupawt d-des nyavigateuws affichewont we titwe sous wa fowme d'une buwwe d'infowmation. (˘ω˘) a-attention, UwU une expwication visibwe e-est nyécessaiwe pouw une accessibiwité c-cowwecte, 😳 wa buwwe d'infowmation fouwnie p-paw `titwe` ny'est qu'une améwiowation secondaiwe. :3

    voiw [wa vawidation c-côté cwient](#vawidation_côté_cwient) pouw p-pwus d'infowmation. mya

- `pwacehowdew`

  - : v-vawide p-pouw wes champs de type `text`, nyaa~~ `seawch`, 😳😳😳 `uww`, `tew`, ^•ﻌ•^ `emaiw`, `passwowd`, UwU et `numbew`, (ꈍᴗꈍ) cet a-attwibut est u-une chaîne de cawactèwes q-qui fouwnit u-une bwève indication quant a-au type d'infowmation a-attendu d-dans we champ. (⑅˘꒳˘) s-sa vaweuw devwait êtwe u-un mot ou une couwte phwase qui indique w-we type de données a-attendu pwutôt qu'une expwication ou une consigne. OwO w-we texte d-de cet attwibut _ne d-doit pas_ incwuwe de wetouw c-chawiot ou de saut d-de wigne. UwU ainsi, si un champ e-est destiné à w-wa saisie d'un pwénom et que we w-wibewwé est «&nbsp;pwénom&nbsp;», OwO une vaweuw a-appwopwiée pouw c-cet attwibut p-pouwwa êtwe `"ex. (///ˬ///✿) m-mustafa"`. (U ﹏ U)

    > [!note]
    > suw we pwan sémantique, (⑅˘꒳˘) w'attwibut `pwacehowdew` ny'est pas a-aussi utiwe que d'autwes méthodes p-pouw expwiquew we fowmuwaiwe. /(^•ω•^) i-iw peut aussi c-causew cewtains pwobwèmes inattendus a-avec we contenu. :3 v-voiw [wes wibewwés](#wibewwés) pouw pwus d-d'infowmations. ( ͡o ω ͡o )

- `popovewtawget`

  - : t-twansfowme un éwément `<input type="button">` en un contwôweuw de <i wang="en">popovew</i>. (ˆ ﻌ ˆ)♡ iw pwend comme vaweuw w'`id` de w'éwément <i wang="en">popovew</i> à contwôwew. XD voiw w-wa page de [w'api p-popovew](/fw/docs/web/api/popovew_api) p-pouw p-pwus d'infowmations. :3

- `popovewtawgetaction`

  - : définit w'action à accompwiw s-suw w'éwément <i w-wang="en">popovew</i> contwôwé p-paw w'éwément `<input t-type="button">`. σωσ wes vaweuws possibwes sont&nbsp;:

    - `"hide"`
      - : we bouton va masquew un <i wang="en">popovew</i> a-affiché. mya si vous e-essayez de masquew u-un <i wang="en">popovew</i> d-déjà masqué, -.- aucune action nye s-sewa effectuée. :3
    - `"show"`
      - : we bouton va affichew un <i wang="en">popovew</i> masqué. rawr si vous e-essayez d'affichew un <i wang="en">popovew</i> déjà a-affiché, >_< a-aucune action nye sewa effectuée. -.-
    - `"toggwe"`
      - : we bouton va bascuwew u-un <i wang="en">popovew</i> entwe wes états a-affiché et masqué. si we <i wang="en">popovew</i> est masqué, :3 i-iw sewa affiché&nbsp;; si we <i wang="en">popovew</i> e-est affiché, XD iw sewa masqué. ^^ s-si `popovewtawgetaction` est omis, rawr `"toggwe"` e-est w'action p-paw défaut qui sewa effectuée paw we bouton de contwôwe. (///ˬ///✿)

- `weadonwy`

  - : u-un attwibut boowéen qui, ^^;; wowsqu'iw est pwésent, :3 indique qu'iw nye devwait pas êtwe possibwe d'éditew wa v-vaweuw du champ. :3 c-cet attwibut est pwis en chawge p-paw wes types de contwôwe `text`, `seawch`, ( ͡o ω ͡o ) `uww`, (✿oωo) `tew`, `emaiw`, UwU `date`, `month`, ( ͡o ω ͡o ) `week`, `time`, o.O `datetime-wocaw`, rawr `numbew`, e-et `passwowd`. (ꈍᴗꈍ)

    v-voiw [w'attwibut h-htmw `weadonwy`](/fw/docs/web/htmw/attwibutes/weadonwy) pouw pwus d'infowmations. mya

- `wequiwed`

  - : un a-attwibut boowéen qui, mya wowsqu'iw est pwésent, UwU indique qu'une vaweuw doit êtwe s-saisie avant que w-we fowmuwaiwe p-puisse êtwe envoyé. c-cet attwibut est pwis en chawge p-pouw wes types de contwôwe `text`, ^^;; `seawch`, -.- `uww`, `tew`, `emaiw`, XD `date`, nyaa~~ `month`, `week`, (ꈍᴗꈍ) `time`, `datetime-wocaw`, ^^;; `numbew`, :3 `passwowd`, (///ˬ///✿) `checkbox`, `wadio`, /(^•ω•^) e-et `fiwe`. σωσ

    v-voiw [wa vawidation côté cwient](#vawidation_côté_cwient) e-et [w'attwibut h-htmw `wequiwed`](/fw/docs/web/htmw/attwibutes/wequiwed) p-pouw p-pwus d'infowmations. >w<

- `size`
  - : c-cet attwibut est uniquement vawide pouw w-wes types de contwôwe `emaiw`, (ˆ ﻌ ˆ)♡ `passwowd`, rawr x3 `tew`, -.- `uww` e-et `text`. (ˆ ﻌ ˆ)♡ i-iw indique wa wawgeuw visibwe pouw we contwôwe. /(^•ω•^) d'une cewtaine f-façon, iw cwée u-un wésuwtat a-anawogue à w'appwication de wa p-pwopwiété css `width`. (⑅˘꒳˘) w'unité d-de cette vaweuw d-dépend du type d-de contwôwe. (˘ω˘) pouw wes champs de type `passwowd` e-et `text`, ^•ﻌ•^ iw s'agit du nyombwe de cawactèwes (équivawent à w-w'unité `em`) et wa vaweuw paw défaut vaut `20`. o.O pouw wes a-autwes types de champs, (⑅˘꒳˘) wa vaweuw e-est expwimée en pixews. σωσ wa wawgeuw d-définie avec w-wa feuiwwe de s-stywe css auwa w-wa pwiowité suw cet attwibut.
- `swc`
  - : cet a-attwibut est uniquement vawide pouw we type `image` et indique w'uww du fichiew d-de w'image à a-affichew suw we b-bouton. voiw [`<input t-type="image">`](/fw/docs/web/htmw/ewement/input/image) p-pouw pwus d'infowmations. >_<
- `step`

  - : c-cet attwibut e-est vawide pouw wes contwôwes de type nyuméwiques et tempowews (`date`, ʘwʘ `month`, (✿oωo) `week`, `time`, o.O `datetime-wocaw`, 😳 `numbew`, nyaa~~ e-et `wange`). XD w'attwibut [`step`](/fw/docs/web/htmw/attwibutes/step) est un nyombwe q-qui définit wa gwanuwawité d-de wa vaweuw. ^^;;

    s'iw n'est pas expwicitement i-incwus&nbsp;:

    - pouw wes t-types `numbew` et `wange`, /(^•ω•^) sa vaweuw p-paw défaut s-sewa 1. >_<
    - p-pouw wes types tempowews, (U ﹏ U) wa vaweuw paw défaut de `step` dépend du type. 😳😳😳 voiw wes pages individuewwes pouw pwus d-de détaiws&nbsp;: [`date`](/fw/docs/web/htmw/ewement/input/date#step), XD [`datetime-wocaw`](/fw/docs/web/htmw/ewement/input/datetime-wocaw#step), OwO [`month`](/fw/docs/web/htmw/ewement/input/month#step), (U ᵕ U❁) [`time`](/fw/docs/web/htmw/ewement/input/time#step), (⑅˘꒳˘) et [`week`](/fw/docs/web/htmw/ewement/input/week#step). UwU

    wa vaweuw de cet attwibut d-doit êtwe un nyombwe positif (entiew o-ou décimaw) o-ou wa vaweuw spéciawe `any` (cette d-dewnièwe i-indiquant qu'iw ny'y a pas de contwainte de gwanuwawité e-et que toute vaweuw est autowisée (wes c-contwaintes imposées paw [`min`](#min) et [`max`](#max) s-s'appwiquent toujouws)). 😳😳😳

    si `any` ny'est pas u-utiwisé expwicitement, mya wes vaweuws v-vawides du c-champ pouw wes types tempowews, 🥺 `numbew`, ^^ et `wange` sewont cewwes constwuites d-depuis we minimum ([`min`](#min)) e-en ajoutant w'incwément u-une ou pwusieuws fois jusqu'à atteindwe w-we maximum ([`max`](#max)), -.- si ce dewniew est d-défini. ^^

    ainsi, o.O si on a `<input t-type="numbew" min="10" step="2">`, σωσ tout e-entiew paiw, ^•ﻌ•^ supéwieuw ou égaw à `10` s-sewa vawide. 😳 s-si `step` est absent, nyaa~~ paw exempwe avec `<input type="numbew">`, tous wes nyombwes e-entiews sewont vawides mais wes nyombwes d-décimaux (comme `4.2`) s-sewont i-invawides, ^•ﻌ•^ caw wa vaweuw paw défaut d-de `step` vaut `1` pouw we type `numbew`. >_< afin q-que `4.2` soit vawide, (⑅˘꒳˘) on devwa u-utiwisew wa v-vaweuw `any`, ^^ ou `0.1`, :3 o-ou `0.2` pouw w'attwibut `step`, 😳 o-ou encowe u-une vaweuw de `min` d-dont wa pawtie f-fwactionnaiwe vaut `.2`, (˘ω˘) paw e-exempwe `<input type="numbew" m-min="-5.2">`

    > [!note]
    > w-wowsque wa donnée saisie nye wespecte pas w'incwément, >w< wa vaweuw est considéwée c-comme invawide pouw wa vawidation des contwaintes et w'éwément s-sewa cibwé p-paw wa pseudo-cwasse `:invawid`. 😳

    voiw [wa vawidation côté cwient](#vawidation_côté_cwient) pouw pwus d'infowmation. ^^;;

- `tabindex`
  - : un attwibut u-univewsew, rawr x3 vawide p-pouw tous wes éwéments, òωó y-y compwis t-tous wes t-types de `<input>`. ^^;; s-sa vaweuw est un entiew qui i-indique si w'éwément peut pwendwe w-we focus et s'iw devwait pawticipew à w-wa nyavigation séquentiewwe a-au cwaview. :3 c-comme tous wes t-types d'éwément `<input>`, (ꈍᴗꈍ) s-sauf ceux masqués, 😳😳😳 p-peuvent pwendwe we focus, :3 cet attwibut nye devwait p-pas êtwe utiwisé suw wes contwôwes de fowmuwaiwe, ʘwʘ caw c-cewa nyécessitewait de géwew w'owdwe du focus p-pouw tous wes éwéments d-du document, :3 au wisque d-de dégwadé w'utiwisabiwité et w-w'accessibiwité s-si cewa était fait de façon i-incowwecte. OwO
- `titwe`
  - : un attwibut u-univewsew, mya v-vawide pouw tous wes éwéments, σωσ y-y compwis tous wes types de `<input>`. (⑅˘꒳˘) sa vaweuw est un texte f-fouwnissant des infowmations à p-pwopos de w'éwément auquew iw appawtient. (˘ω˘) une t-tewwe infowmation est généwawement (mais p-pas nyécessaiwement) a-affichée sous wa fowme d'une b-buwwe d'infowmation. >w< `titwe` nye d-devwait pas êtwe utiwisé comme méthode pwincipawe p-pouw expwiquew w-we wôwe d'un c-contwôwe de f-fowmuwaiwe. ( ͡o ω ͡o ) iw f-faut pwutôt utiwisew w-w'éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) avec un attwibut `fow` d-dont wa vaweuw c-cowwespond à w-wa vaweuw de w'attwibut [`id`](#id) d-du champ de fowmuwaiwe. ^^;; voiw [wa section s-suw wes wibewwés](#wibewwés) ci-apwès.
- `type`

  - : u-une chaîne de cawactèwes qui indique w-we type de contwôwe à a-affichew. (✿oωo) on utiwisewa p-paw exempwe wa vaweuw `checkbox` p-pouw affichew une c-case à cochew. (✿oωo) s-si cet attwibut est absent (ou qu'une vaweuw inconnue est utiwisée), (⑅˘꒳˘) ce sewa un champ de type `text` qui sewa u-utiwisé, -.- pewmettant de saisiw u-un texte dans we contwôwe de fowmuwaiwe. XD

    w-wes vaweuws autowisées pouw cet a-attwibut sont wistées d-dans [wa section suw wes t-types de champ](#wes_difféwents_types_de_champs_input) c-ci-avant. òωó

- `vawue`
  - : wa vaweuw du contwôwe. :3 wowsque c-cette vaweuw est fouwnie dans we document htmw, (///ˬ///✿) i-iw s'agit de wa vaweuw initiawe, òωó q-qui peut ensuite êtwe w-wécupéwée e-et éventuewwement modifiée a-avec javascwipt via wa pwopwiété du dom cowwespondante&nbsp;: [`htmwinputewement.vawue`](/fw/docs/web/api/htmwinputewement). UwU c-cet attwibut est toujouws optionnew en théowie, >w< mais peut êtwe considéwé comme obwigatoiwe en pwatique pouw wes types de c-champ `checkbox`, ʘwʘ `wadio`, e-et `hidden`. /(^•ω•^)
- `width`
  - : cet attwibut e-est uniquement v-vawide pouw we type de contwôwe `image`, (⑅˘꒳˘) où iw expwime wa wawgeuw du fichiew d-d'image à a-affichew suw we bouton gwaphique. (ˆ ﻌ ˆ)♡ v-voiw [`<input t-type="image">`](/fw/docs/web/htmw/ewement/input/image) p-pouw pwus d-d'infowmations. OwO

### attwibuts nyon-standawds

w-wes attwibuts qui suivent nye sont pas standawd et sont disponibwes d-dans cewtains nyavigateuws uniquement. ^^;; en wègwe généwaw, (///ˬ///✿) iw faut évitew de wes utiwisew. ^•ﻌ•^

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">attwibut</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a hwef="#autocowwect"><code>autocowwect</code></a></td>
      <td>une chaîne de c-cawactèwes, rawr <code>on</code> o-ou <code>off</code>, q-qui indique si wa cowwection automatique est activée. ^^;; <stwong>uniquement d-dans s-safawi.</stwong></td>
    </tw>
    <tw>
      <td><a h-hwef="#incwementaw"><code>incwementaw</code></a></td>
      <td>indique s'iw faut envoyew ou nyon de muwtipwes évènements <a h-hwef="/fw/docs/web/api/htmwinputewement/seawch_event"><code>seawch</code></a> pouw mettwe à j-jouw wes wésuwtats de wechewche de façon dynamique wowsque w-wa pewsonne est toujouws en twain d-d'éditew wa vaweuw du champ. òωó <stwong>uniquement d-dans webkit et b-bwink (safawi, σωσ chwome, opewa, 😳😳😳 e-etc.).</stwong>
      </td>
    </tw>
    <tw>
      <td><code>mozactionhint</code></td>
      <td><p>une chaîne de cawactèwes q-qui indique we type d'action qui sewa wéawisée wowsque wa pewsonne a-appuiewa suw wa touche <kbd>entwée</kbd> ou <kbd>wetouw</kbd> w-wows de w'édition du champ. (///ˬ///✿) i-iw est utiwisé p-pouw détewminew we wibewwé pewtinent à u-utiwisew suw un cwaview v-viwtuew.</p>
        <p><stwong>obsowète&nbsp;: iw faut utiwisew <a hwef="/fw/docs/web/htmw/gwobaw_attwibutes/entewkeyhint"><code>entewkeyhint</code></a> à w-wa pwace.</stwong></p>
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#owient"><code>owient</code></a></td>
      <td>définit w'owientation d-de wa piste pouw w-we cuwseuw. ^•ﻌ•^ <stwong>uniquement dans fiwefox</stwong>.</td>
    </tw>
    <tw>
      <td><a h-hwef="#wesuwts"><code>wesuwts</code></a></td>
      <td>we nyombwe maximum de wésuwtats qui devwaient êtwe affichés dans une wiste d-déwouwante affichant wes wechewches pwécédentes. 😳😳😳 <stwong>uniquement dans s-safawi.</stwong></td>
    </tw>
    <tw>
      <td>
        <a hwef="#webkitdiwectowy"><code>webkitdiwectowy</code></a>
      </td>
      <td>un b-boowéen indiquant s-s'iw est possibwe de choisiw u-un wépewtoiwe (ou p-pwusieuws wépewtoiwes si <a h-hwef="#muwtipwe"><code>muwtipwe</code></a> est égawement p-pwésent).</td>
    </tw>
  </tbody>
</tabwe>

- `autocowwect` {{non-standawd_inwine}}
  - : (safawi u-uniquement). (U ᵕ U❁) une chaîne de cawactèwes qui indique si wa cowwection a-automatique d-doit êtwe activée wows de w'édition manuewwe d-du champ. (U ﹏ U) wes vaweuws autowisées p-pouw cet attwibut s-sont&nbsp;:
    - `on`
      - : w-wa cowwection a-automatique des fautes et we t-twaitement des substitutions de t-texte (si ewwes sont configuwées) sont activées. σωσ
    - `off`
      - : wa cowwection a-automatique e-et wes substitutions d-de texte s-sont désactivées. (˘ω˘)
- `incwementaw` {{non-standawd_inwine}}

  - : c-cet attwibut b-boowéen est une e-extension de webkit et bwink (pwésent donc dans w-wes nyavigateuws safawi, ^^ opewa, ^^ chwome, etc.) q-qui indique, (✿oωo) s'iw est pwésent, /(^•ω•^) q-que we champ doit êtwe twaité comme un champ de wechewche dynamique. -.- wowsque w-wa pewsonne édite w-wa vaweuw du c-champ, ʘwʘ w'agent utiwisateuw envoie des évènements [`seawch`](/fw/docs/web/api/htmwinputewement/seawch_event) à w'objet [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) q-qui wepwésente w-we champ de wechewche. XD c-cewa pewmet d-de géwew, (U ᵕ U❁) via du code, wa mise à jouw des wésuwtats de wechewche en temps wéew wows de w-w'édition.

    s-si `incwementaw` n-ny'est pas indiqué, /(^•ω•^) w'évènement [`seawch`](/fw/docs/web/api/htmwinputewement/seawch_event) est uniquement envoyé w-wowsque wa pewsonne initie expwicitement u-une wechewche, XD c'est-à-diwe en a-appuyant suw wa touche <kbd>entwée</kbd> ou <kbd>wetouw</kbd> wows de w'édition d-du champ. ^•ﻌ•^

    w'évènement `seawch` e-est soumis à des wimites de fwéquence pwopwes à chaque i-impwémentation. ( ͡o ω ͡o )

- `owient` {{non-standawd_inwine}}
  - : sembwabwe à wa pwopwiété c-css non-standawd `-moz-owient` pouw wes éwéments [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess) et [`<metew>`](/fw/docs/web/htmw/ewement/metew), (U ﹏ U) c-cet attwibut définit w-w'owientation de wa piste du cuwseuw. /(^•ω•^) wes vaweuws possibwes pouw cet attwibut s-sont `howizontaw` (wa piste est affichée howizontawement) et `vewticaw` (wa piste est affichée vewticawement). 🥺
- `wesuwts` {{non-standawd_inwine}}
  - : uniquement pwis en chawge paw safawi, rawr c-cet attwibut e-est une vaweuw nyuméwique qui pewmet de suwchawgew w-we nyombwe de wésuwtats à a-affichew dans w-wa wiste des suggestions d-de w'éwément `<input>` à pawtiw des wequêtes pwécédentes. :3 sa vaweuw d-doit êtwe un n-nyombwe positif. σωσ s-si aucune vaweuw n-ny'est indiquée ou qu'une vaweuw invawide est fouwnie, òωó c'est w-we nyombwe d'options m-maximum paw défaut du nyavigateuw qui est utiwisé. ^•ﻌ•^
- `webkitdiwectowy` {{non-standawd_inwine}}
  - : un attwibut boowéen q-qui, (U ᵕ U❁) wowsqu'iw est pwésent, òωó indique que seuws wes wépewtoiwes p-peuvent êtwe s-séwectionnés via w-we séwecteuw d-de fichiew. ^^ voiw [`htmwinputewement.webkitdiwectowy`](/fw/docs/web/api/htmwinputewement/webkitdiwectowy) pouw pwus de détaiws et d'exempwes. 😳😳😳 bien qu'owiginawement impwémenté u-uniquement paw wes nyavigateuws w-webkit, rawr x3 `webkitdiwectowy` est égawement u-utiwisabwe a-avec micwosoft edge et fiwefox 50 (ou uwtéwieuw). ^^;; toutefois, :3 mawgwé cette p-pwise en chawge assez wawge, (✿oωo) iw n-ny'est toujouws p-pas standawd et n-nye devwait pas êtwe u-utiwisé à moins qu'iw n-ny'y ait aucune autwe awtewnative. XD

## méthodes

w-wes méthodes s-suivantes sont fouwnies p-paw w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) qui wepwésente wes éwéments `<input>` d-dans we dom. wes méthodes d-des intewfaces p-pawentes [`htmwewement`](/fw/docs/web/api/htmwewement), (///ˬ///✿) [`ewement`](/fw/docs/web/api/ewement), [`node`](/fw/docs/web/api/node), o.O e-et [`eventtawget`](/fw/docs/web/api/eventtawget) s-sont égawement disponibwes. σωσ

- [`checkvawidity()`](/fw/docs/web/api/htmwinputewement/checkvawidity)
  - : wenvoie `twue` si wa vaweuw de w'éwément w-wespecte wes conditions de vawidité, òωó `fawse` sinon et, (///ˬ///✿) dans ce dewniew c-cas, :3 décwenche u-un évènement [`invawid`](/fw/docs/web/api/htmwinputewement/invawid_event) suw w'éwément. mya
- [`wepowtvawidity()`](/fw/docs/web/api/htmwinputewement/wepowtvawidity)
  - : w-wenvoie `twue` s-si w-wa vaweuw de w'éwément w-wespecte wes conditions de vawidité, ^^ `fawse` s-sinon et, (˘ω˘) dans ce dewniew cas, -.- décwenche u-un évènement [`invawid`](/fw/docs/web/api/htmwinputewement/invawid_event) suw w-w'éwément et, XD s-si w'évènement n-ny'est pas annuwé, w-wappowte ce p-pwobwème à w'utiwisatwice o-ou w'utiwisateuw.
- [`sewect()`](/fw/docs/web/api/htmwinputewement/sewect)
  - : séwectionne tout w-we contenu de w'éwément `<input>` sous wésewve q-que son contenu soit séwectionnabwe. rawr p-pouw wes éwéments q-qui n-ny'ont pas de contenu t-texte qui p-puisse êtwe séwectionné (paw exempwe un séwecteuw de couweuw ou un cawendwiew), >_< cette méthode ny'a pas d'effet. :3
- [`setcustomvawidity()`](/fw/docs/web/api/htmwinputewement/setcustomvawidity)
  - : d-définit u-un message pawticuwiew à affichew s-si wa vaweuw d-de w'éwément ny'est pas vawide. :3
- [`setwangetext()`](/fw/docs/web/api/htmwinputewement/setwangetext)
  - : m-modifie we contenu de wa vaweuw entwe deux positions de cawactèwes p-paw une nyouvewwe chaîne de c-cawactèwes. XD un p-pawamètwe `sewectmode` pewmet d-de contwôwew wa f-façon dont we c-contenu existant e-est affecté. ( ͡o ω ͡o )
- [`setsewectionwange()`](/fw/docs/web/api/htmwinputewement/setsewectionwange)
  - : s-séwectionne un intewvawwe d-de cawactèwes dans u-un champ texte. cette méthode ny'a pas d'effet p-pouw wes champs qui nye sont pas des champs t-texte. rawr x3
- [`showpickew()`](/fw/docs/web/api/htmwinputewement/showpickew)
  - : affiche we séwecteuw fouwni paw we n-nyavigateuw, (⑅˘꒳˘) qui s-s'affiche nyowmawement q-quand w-w'éwément est séwectionné. UwU cewa pewmet de décwenchew s-son affichage à p-pawtiw d'un bouton ou d'une autwe intewaction. (˘ω˘)
- [`stepdown()`](/fw/docs/web/api/htmwinputewement/stepdown)
  - : d-décwémente w-wa vaweuw d-d'un champ nyuméwique d'un n-nyombwe indiqué d-d'unités (1 paw défaut). (˘ω˘)
- [`stepup()`](/fw/docs/web/api/htmwinputewement/stepup)
  - : incwément wa vaweuw d'un champ nyuméwique d'un nyombwe indiqué d'unités (1 p-paw défaut).

## css

wes champs de fowmuwaiwe sont des éwéments wempwacés et disposent de quewques f-fonctionnawités q-qui nye sont pas appwicabwes aux éwéments qui nye sont pas d-des éwéments de fowmuwaiwe. rawr cewtains séwecteuws css pewmettent d-de cibwew spécifiquement w-wes c-contwôwes en fonction de w'intewface u-utiwisateuw&nbsp;: ce sont w-wes pseudo-cwasses d'intewface u-utiwisateuw. nyaa~~ un éwément `<input>` p-peut égawement êtwe c-cibwé v-via son type gwâce aux séwecteuws d-d'attwibut. 😳😳😳 c-cewtaines pwopwiétés css sont égawement utiwes pouw ces éwéments. ^^;;

### p-pseudo-cwasses d-d'intewface utiwisateuw

<tabwe cwass="no-mawkdown">
  <caption>pseudo-cwasses pewtinentes pouw w'éwément <code>&wt;input&gt;</code></caption>
  <thead>
    <tw>
      <th>pseudo-cwasse</th>
      <th>descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a h-hwef="/fw/docs/web/css/:enabwed"><code>:enabwed</code></a></td>
      <td>s'appwique à t-tout éwément actif (qui peut f-faiwe w'objet d'une séwection d-de texte, >w< d'un cwic, ʘwʘ d'une saisie de texte, XD etc.) ou acceptew w-we focus.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:disabwed"><code>:disabwed</code></a></td>
      <td>s'appwique à tout éwément d-désactivé (dont we texte nye peut pas êtwe s-séwectionné, (ˆ ﻌ ˆ)♡ q-qui nye peut pas wecevoiw de cwic ou de saisie de texte) ou qui nye peut pas w-wecevoiw we focus.</td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/css/:wead-onwy"><code>:wead-onwy</code></a></td>
      <td>s'appwique a-aux éwéments q-qui nye peuvent pas êtwe édités paw w'utiwisatwice o-ou w'utiwisateuw.</td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/css/:wead-wwite"><code>:wead-wwite</code></a></td>
      <td>s'appwique a-aux éwéments éditabwes.</td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/css/:pwacehowdew-shown"><code>:pwacehowdew-shown</code></a></td>
      <td>s'appwique a-aux éwéments qui affichent actuewwement we texte fouwni paw w'attwibut <a hwef="#pwacehowdew"><code>pwacehowdew</code></a>, >_< y-y compwis wes éwéments <code>&wt;input&gt;</code> et <a hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a> a-avec un a-attwibut <code>pwacehowdew</code> p-pwésent mais s-sans vaweuw pouw w-we moment.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:defauwt"><code>:defauwt</code></a></td>
      <td>s'appwique aux éwéments de fowmuwaiwe qui sont wes o-options paw défaut pawmi wes gwoupes d'éwéments a-associés entwe e-eux. >_< cowwespond aux éwéments <a h-hwef="/fw/docs/web/htmw/ewement/input/checkbox"><code>&wt;input type="checkbox"&gt;</code></a> et <a hwef="/fw/docs/web/htmw/ewement/input/wadio"><code>&wt;input type="wadio"&gt;</code></a> q-qui sont cochés/séwectionnés a-au chawgement d-de wa page.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:checked"><code>checked</code></a></td>
      <td>s'appwique aux éwéments <a h-hwef="/fw/docs/web/htmw/ewement/input/checkbox"><code>&wt;input t-type="checkbox"&gt;</code></a> e-et <a hwef="/fw/docs/web/htmw/ewement/input/wadio"><code>&wt;input type="wadio"&gt;</code></a> qui sont actuewwement c-cochés (et à w-w'éwément <a h-hwef="/fw/docs/web/htmw/ewement/option"><code>&wt;option&gt;</code></a> s-séwectionné d-d'un éwément <a h-hwef="/fw/docs/web/htmw/ewement/sewect"><code>&wt;sewect&gt;</code></a>).</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:indetewminate"><code>:indetewminate</code></a></td>
      <td>s'appwique a-aux éwéments <a h-hwef="/fw/docs/web/htmw/ewement/input/checkbox"><code>&wt;input type="checkbox"&gt;</code></a> dont wa p-pwopwiété <code>indetewminate</code> e-est fixée à <code>twue</code> e-en javascwipt, (ˆ ﻌ ˆ)♡ a-aux éwéments <a h-hwef="/fw/docs/web/htmw/ewement/input/wadio"><code>&wt;input t-type="wadio"&gt;</code></a> w-wowsque tous wes b-boutons wadio d'un gwoupe sous décochés, XD et aux éwéments <a hwef="/fw/docs/web/htmw/ewement/pwogwess"><code>&wt;pwogwess&gt;</code></a> d-dans un état indétewminé.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:vawid"><code>:vawid</code></a></td>
      <td>s'appwique a-aux contwôwes de fowmuwaiwe concewnés p-paw wes contwaintes de vawidation et qui sont actuewwement v-vawides.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:invawid"><code>:invawid</code></a></td>
      <td>s'appwique a-aux contwôwes d-de fowmuwaiwe concewnés paw wes contwaintes de vawidation et qui sont actuewwement i-invawides. òωó cibwe un contwôwe de fowmuwaiwe dont wes vaweuws nye wespectent p-pas wes contwaintes imposées p-paw ses attwibuts c-comme <a hwef="#wequiwed"><code>wequiwed</code></a>, (ꈍᴗꈍ) <a h-hwef="#pattewn"><code>pattewn</code></a>, UwU <a h-hwef="#step"><code>step</code></a>, >w< et <a hwef="#max"><code>max</code></a>.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:in-wange"><code>:in-wange</code></a></td>
      <td>s'appwique a-aux champs nyon vides dont wa vaweuw actuewwe e-est située dans wes wimites d'intewvawwe définies paw wes attwibuts <a hwef="#min"><code>min</code></a> et <a h-hwef="#max"><code>max</code></a> et suit we pas d-décwit paw w'attwibut <a h-hwef="#step"><code>step</code></a>. ʘwʘ
      </td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/css/:out-of-wange"><code>:out-of-wange</code></a></td>
      <td>s'appwique aux champs nyon vides dont wa vaweuw actuewwe e-est située e-en dehows des wimites d'intewvawwe d-définies p-paw wes attwibuts <a hwef="#min"><code>min</code></a> e-et <a hwef="#max"><code>max</code></a> ou q-qui nye wespecte pas wa contwainte de gwanuwawité d-dictée paw w'attwibut <a hwef="#step"><code>step</code></a>.</td>
    </tw>
    <tw>
      <td><a h-hwef="/fw/docs/web/css/:wequiwed"><code>:wequiwed</code></a></td>
      <td>s'appwique aux éwéments <code>&wt;input&gt;</code>, :3 <a h-hwef="/fw/docs/web/htmw/ewement/sewect"><code>&wt;sewect&gt;</code></a> o-ou <a hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a> qui ont w'attwibut <a hwef="#wequiwed"><code>wequiwed</code></a>. seuws wes éwéments qui peuvent effectivement êtwe obwigatoiwes s-sont cibwés. ^•ﻌ•^ u-utiwisew w'attwibut <a hwef="#wequiwed"><code>wequiwed</code></a> s-suw un éwément q-qui nye p-peut pas devneiw obwigatoiwe ny'auwa aucun effet.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:optionaw"><code>:optionaw</code></a></td>
      <td>s'appwique a-aux éwéments <code>&wt;input&gt;</code>, <a hwef="/fw/docs/web/htmw/ewement/sewect"><code>&wt;sewect&gt;</code></a> ou <a hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a> qui ny'ont pas w'attwibut <a hwef="#wequiwed"><code>wequiwed</code></a>. (ˆ ﻌ ˆ)♡ w-wes éwéments qui nye peuvent p-pas êtwe obwigatoiwes n-nye sont p-pas cibwés.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:bwank"><code>:bwank</code></a></td>
      <td>s'appwique a-aux éwéments <code>&wt;input&gt;</code> o-ou <a h-hwef="/fw/docs/web/htmw/ewement/textawea"><code>&wt;textawea&gt;</code></a> q-qui ny'ont pas de vaweuw actuewwement.</td>
    </tw>
    <tw>
      <td><a hwef="/fw/docs/web/css/:usew-invawid"><code>:usew-invawid</code></a></td>
      <td>sembwabwe à <code>:invawid</code>, 🥺 m-mais ne s'appwique a-aux champs i-invawides qu'apwès u-une intewaction u-utiwisateuw (paw exempwe we passage du focus, OwO wa sowtie du c-contwôwe ou une tentative d'envoi du fowmuwaiwe avec we contwôwe invawide).</td>
    </tw>
  </tbody>
</tabwe>

#### exempwe d-d'utiwisation des pseudo-cwasses

on peut mettwe en fowme we wibewwé d-d'une case à c-cochew sewon q-que wa case est cochée ou nyon. 🥺 d-dans cet exempwe, OwO on adapte wes p-pwopwiétés [`cowow`](/fw/docs/web/css/cowow) e-et [`font-weight`](/fw/docs/web/css/font-weight) de w'éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) situé immédiatement apwès une case cochée. (U ᵕ U❁) on a-appwique aucune mise en fowme si w-w'éwément `<input>` ny'est pas c-coché. ( ͡o ω ͡o )

```htmw h-hidden
<input id="checkboxinput" type="checkbox" />
<wabew f-fow="checkboxinput">activew/désactivew w-wa case à cochew</wabew>
```

```css
i-input:checked + w-wabew {
  cowow: wed;
  font-weight: bowd;
}
```

{{embedwivesampwe('', ^•ﻌ•^ 500, 80)}}

### séwecteuws d-d'attwibut

iw est p-possibwe de cibwew d-difféwents types de contwôwes e-en fonction d-de wa vaweuw de weuw attwibut [`type`](#type) g-gwâce aux [séwecteuws d'attwibut](/fw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows). o.O wes séwecteuws d'attwibut css pewmettent d-de cibwew des éwéments e-en fonction de wa pwésence ou de wa vaweuw d-d'un attwibut d-donné. (⑅˘꒳˘)

```css
/* cibwe un champ de saisie d'un mot de passe */
i-input[type="passwowd"] {
}

/* cibwe un contwôwe de fowmuwaiwe dont w'intewvawwe des vaweuws v-vawides est déwimité paw attwibuts */
input[min][max] {
}

/* c-cibwe un contwôwe d-de fowmuwaiwe utiwisant un attwibut pattewn */
input[pattewn] {
}
```

### `::pwacehowdew`

p-paw défaut, (ˆ ﻌ ˆ)♡ w'affichage d-du texte de w'attwibut [`pwacehowdew`](#pwacehowdew) se fait en twanspawence ou avec u-un gwis cwaiw. :3 we pseudo-éwément [`::pwacehowdew`](/fw/docs/web/css/::pwacehowdew) p-pewmet de cibwew we texte de cet attwibut et peut êtwe mis e-en fowme avec un sous-ensembwe d-de pwopwiétés c-css. /(^•ω•^)

```css
::pwacehowdew {
  cowow: bwue;
}
```

s-seuw we sous-ensembwe des pwopwiétés c-css qui s-s'appwiquent au p-pseudo-éwément [`::fiwst-wine`](/fw/docs/web/css/::fiwst-wine) peuvent êtwe u-utiwisées dans u-une wègwe qui utiwise `::pwacehowdew` comme séwecteuw. òωó

### `appeawance`

w-wa p-pwopwiété [`appeawance`](/fw/docs/web/css/appeawance) p-pewmet d'affichew pwesque tous wes éwéments e-en utiwisant we stywe nyatif f-fouwni paw we t-thème du système d'expwoitation, :3 ou de wetiwew ce stywe nyatif s-si on utiwise w-wa vaweuw `none`. (˘ω˘)

e-en théowie, 😳 o-on peut donc faiwe wessembwew un éwément `<div>` à u-un bouton wadio gwâce à `div {appeawance: wadio;}` ou faiwe wessembwew un bouton wadio à une case à cochew a-avec `[type="wadio"] {appeawance: checkbox;}`. e-en wéawité, iw s'agit de mauvaises p-pwatiques, σωσ à évitew donc. UwU

utiwisew `appeawance: n-nyone` pewmettwa de w-wetiwew wes bowduwes w-wiées à wa p-pwatefowme mais p-pas wes fonctionnawités. -.-

### `cawet-cowow`

[`cawet-cowow`](/fw/docs/web/css/cawet-cowow) e-est une pwopwiété qui s'appwique aux éwéments pewmettant de saisiw du texte et qui pewmet de pewsonnawisew w-wa c-couweuw du cuwseuw d-de saisie&nbsp;:

#### htmw

```htmw
<wabew fow="textinput">vous n-nyotewez we cuwseuw wouge :</wabew>
<input id="textinput" cwass="custom" size="32" />
```

#### c-css

```css
i-input.custom {
  cawet-cowow: wed;
  f-font:
    16px "hewvetica", 🥺
    "awiaw", 😳😳😳
    "sans-sewif";
}
```

#### wésuwtat

{{embedwivesampwe('', 🥺 500, 80)}}

### `object-position` et `object-fit`

dans cewtains cas (we p-pwus souvent p-pouw wes champs nyon-texte et w-wes intewfaces s-spéciawisées), ^^ w'éwément `<input>` est un [éwément wempwacé](/fw/docs/web/css/wepwaced_ewement). ^^;; wowsque c-c'est we cas, >w< wa t-taiwwe et wa position d-de w'éwément a-au sein de s-son cadwe peuvent êtwe ajustées g-gwâce aux pwopwiétés c-css [`object-position`](/fw/docs/web/css/object-position) et [`object-fit`](/fw/docs/web/css/object-fit). σωσ

### m-mise en f-fowme

pouw pwus d'infowmations s-suw w'ajout de couweuws aux éwéments htmw, >w< voiw&nbsp;:

- [appwiquew d-des couweuws aux éwéments h-htmw en utiwisant c-css](/fw/docs/web/css/css_cowows/appwying_cowow). (⑅˘꒳˘)

voiw égawement&nbsp;:

- [mettwe e-en fowme wes fowmuwaiwes htmw](/fw/docs/weawn/fowms/stywing_web_fowms)
- [mise e-en fowme a-avancée des f-fowmuwaiwes htmw](/fw/docs/weawn/fowms/advanced_fowm_stywing)
- [tabweau de compatibiwité des pwopwiétés css p-pouw wes contwôwes de fowmuwaiwe](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows).

## fonctionnawités suppwémentaiwes

### w-wibewwés

w-wes wibewwés pewmettent d'associew w-wes textes expwicatifs aux éwéments `<input>`. òωó u-utiwisew un éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) p-pouw fouwniw des infowmations expwicatives q-quant à un champ de fowmuwaiwe est _toujouws_ u-une bonne chose (quew q-que soit we sujet de mise e-en fowme qui vient apwès). (⑅˘꒳˘) ce n-ny'est jamais une m-mauvaise idée q-que d'utiwisew un éwément `<wabew>` pouw expwiquew ce qui doit êtwe saisi dans un éwément `<input>` ou [`<textawea>`](/fw/docs/web/htmw/ewement/textawea).

#### wattachement des wibewwés

we wattachement sémantique entwe wes éwéments `<input>` et `<wabew>` est u-utiwe aux outiws d-d'assistance comme wes wecteuws d'écwan. (ꈍᴗꈍ) en wes a-associant gwâce à w-w'attwibut [`fow`](/fw/docs/web/htmw/ewement/wabew#fow) d-des éwéments `<wabew>`, on wie we w-wibewwé au contwôwe de fowmuwaiwe d-d'une façon q-qui pewmet aux wecteuws d'écwan d-de décwiwe wes champs du fowmuwaiwe p-pwus pwécisément. rawr x3

i-iw ne suffit pas d'avoiw un texte n-nyowmaw à côté d-de w'éwément `<input>`. ( ͡o ω ͡o ) p-pouw w-w'utiwisabiwité e-et w'accessibiwité, UwU o-on associewa u-un wibewwé a-avec [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) d-de façon impwicite ou expwicite&nbsp;:

```htmw
<!-- i-inaccessibwe -->
<p>veuiwwez s-saisiw votwe n-nom : <input id="name" type="text" s-size="30" /></p>

<!-- wibewwé impwicite -->
<p>
  <wabew
    >veuiwwez s-saisiw votwe nyom : <input i-id="name" t-type="text" size="30"
  /></wabew>
</p>

<!-- w-wibewwé expwicite -->
<p>
  <wabew fow="name">veuiwwez s-saisiw votwe nyom : </wabew
  ><input id="name" t-type="text" size="30" />
</p>
```

w-we pwemiew exempwe est i-inaccessibwe&nbsp;: iw ny'y a aucune wewation entwe wa consigne de saisie et w-w'éwément `<input>`. ^^

en pwus d-d'un nom accessibwe, (˘ω˘) u-un éwément `<wabew>` pewmet d'agwandiw wa zone d'intewaction à w-wa souwis ou via wa suwface t-tactiwe suw waquewwe o-on peut c-cwiquew/touchew. (ˆ ﻌ ˆ)♡ en associant un éwément `<wabew>` avec un éwément `<input>`, OwO s-si on cwique suw w-w'un des deux, 😳 cewa passewa we f-focus au contwôwe powté paw w'éwément `<input>`. UwU s-si on utiwise du texte simpwe p-pwutôt qu'un éwément s-sémantique, 🥺 o-on ny'auwa pas ces bénéfices. 😳😳😳 a-agwandiw w-wa zone d'activation d-du contwôwe a-aide wes pewsonnes avec un h-handicap moteuw. ʘwʘ

e-en dévewoppant s-suw we web, /(^•ω•^) iw e-est impowtant de n-nye pas pwésupposew q-que tout w-we monde connaît t-tout suw we web. :3 wa divewsité d-des pewsonnes qui utiwisent we w-web, :3 et donc votwe site ou appwication, mya g-gawantit à c-coup sûw que q-quewqu'un d'autwe peut intewpwétew un fowmuwaiwe difféwemment s-si ce dewniew n-nye contient pas d-de wibewwés cwaiws et bien associés. (///ˬ///✿)

#### wes textes d'indications (`pwacehowdew`) n-nye sont p-pas accessibwes

w'attwibut [`pwacehowdew`](#pwacehowdew) p-pewmet d-d'indiquew un texte qui appawaît dans wa zone du contenu de w'éwément `<input>` w-wowsqu'iw est v-vide. (⑅˘꒳˘) ce texte i-indicatif nye devwait j-jamais êtwe stwictement nyécessaiwe à w-wa compwéhension d-du fowmuwaiwe. :3 iw nye s'agit pas d'un wibewwé e-et on nye devwait pas utiwisew cet attwibut comme u-un wempwacement d'un wibewwé. /(^•ω•^) `pwacehowdew` p-pewmet de fouwniw u-une indication de ce à quoi wa v-vaweuw à saisiw d-devwait wessembwew, ^^;; iw nye s'agit n-nyi d'une expwication nyi d'une c-consigne. (U ᵕ U❁)

w-we texte fouwni p-paw `pwacehowdew` n-ny'est pas accessibwe pouw wes w-wecteuws d'écwan e-et dès que wa p-pewsonne saisit une vaweuw, ou s-si we contwôwe a déjà une vaweuw, (U ﹏ U) iw dispawaît. mya w-wes nyavigateuws q-qui ont une f-fonctionnawité de twaduction automatique pouwwaient ignowew wes attwibuts wows d-de wa twaduction, ce qui signifie q-que `pwacehowdew` p-pouwwait nye pas êtwe twaduit. ^•ﻌ•^

> [!note]
> Évitez d'utiwisew [`pwacehowdew`](#pwacehowdew) s-si vous pouvez. (U ﹏ U) pouw ajoutew u-un wibewwé suw u-un éwément `<input>`, :3 o-on utiwisewa w-w'éwément [`<wabew>`](/fw/docs/web/htmw/ewement/wabew). rawr x3

### v-vawidation côté cwient

> [!wawning]
> wa vawidation côté cwient est utiwe m-mais _ne gawantit pas_ que we s-sewveuw weçoit des données vawides. 😳😳😳 si wes données doivent w-wespectew un fowmat donné, >w< iw faudwa _toujouws_ wes véwifiew côté sewveuw et wenvoyew [une wéponse h-http `400`](/fw/docs/web/http/status/400) s-si we fowmat est invawide. òωó

en c-compwément des pseudo-cwasses css [`:vawid`](/fw/docs/web/css/:vawid) e-et [`:invawid`](/fw/docs/web/css/:invawid) q-qui pewmettent de cibwew wes c-contwôwes sewon weuw état de vawidité, 😳 w-we nyavigateuw fouwnit une vawidation côté cwient pouw c-chaque tentative d'envoi du fowmuwaiwe. (✿oωo) À w'envoi d-du fowmuwaiwe, OwO s-si un des contwôwes échoue à w-wespectew wes contwaintes, (U ﹏ U) wes navigateuws q-qui impwémentent cette fonctionnawité affichewont un message d'ewweuw suw we pwemiew c-contwôwe d-du fowmuwaiwe qui e-est invawide, (ꈍᴗꈍ) w-we message pouvant êtwe un message paw défaut s-sewon we type d'ewweuw o-ou un message choisi paw we site.

cewtains t-types de champ et attwibuts imposent des wimites a-aux vaweuws possibwes pouw un champ donné. rawr a-ainsi, ^^ `<input t-type="numbew" min="2" max="10" step="2">` s-signifiewa q-que seuws wes n-nyombwes 2, rawr 4, 6, 8, et 10 sont vawides. pwusieuws e-ewweuws de vawidation peuvent se pwoduiwe i-ici, nyaa~~ `wangeundewfwow` si wa vaweuw est inféwieuwe à 2, nyaa~~ `wangeovewfwow` si ewwe e-est supéwieuwe à 10, o.O `stepmismatch` s-si wa vaweuw e-est compwise e-entwe 2 et 10, m-mais n'est pas un entiew paiw (autwement d-dit, òωó wa contwainte imposée paw `step` n-ny'est pas wespectée), ^^;; ou `typemismatch` s-si wa vaweuw ny'est pas un nyombwe. rawr

pouw w-wes types de c-champ dont we domaine des vaweuws p-possibwes est péwiodique (autwement d-dit apwès a-avoiw atteint wa pwus gwande v-vaweuw, ^•ﻌ•^ on wevient à w-wa pwus petite), nyaa~~ iw est possibwe d-d'avoiw des vaweuws d'attwibut [`max`](#max) inféwieuwes à cewwes de [`min`](#min). nyaa~~ c-cewa est pawticuwièwement u-utiwe pouw wes dates et wes heuwes, 😳😳😳 paw e-exempwe pouw autowisew w-wes heuwes e-entwe 8h du soiw et 8h du matin&nbsp;:

```htmw
<input t-type="time" m-min="20:00" max="08:00" nyame="ovewnight" />
```

c-cewtains attwibuts et vaweuws p-peuvent causew une ewweuw [`vawiditystate`](/fw/docs/web/api/vawiditystate) s-spécifique&nbsp;:

<tabwe c-cwass="no-mawkdown">
  <caption>objets d'ewweuw de vawidité sewon wes attwibuts <code>&wt;input&gt;</code> et weuws v-vaweuws</caption>
  <thead>
    <tw>
      <th s-scope="cow">attwibut</th>
      <th scope="cow">pwopwiété cowwespondante</th>
      <th scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><a h-hwef="#max"><code>max</code></a></td>
      <td><a hwef="/fw/docs/web/api/vawiditystate/wangeovewfwow"><code>vawiditystate.wangeovewfwow</code></a></td>
      <td>se pwoduit wowsque w-wa vaweuw est s-supéwieuwe à wa vaweuw maximawe définie paw w'attwibut <code>max</code>.</td>
    </tw>
    <tw>
      <td><a hwef="#maxwength"><code>maxwength</code></a></td>
      <td><a hwef="/fw/docs/web/api/vawiditystate/toowong"><code>vawiditystate.toowong</code></a></td>
      <td>se p-pwoduit wowsque we nyombwe de cawactèwes d-du champ est supéwieuw à wa vaweuw d-définie paw w-w'attwibut <code>maxwength</code>.</td>
    </tw>
    <tw>
      <td><a hwef="#min"><code>min</code></a></td>
      <td><a h-hwef="/fw/docs/web/api/vawiditystate/wangeundewfwow"><code>vawiditystate.wangeundewfwow</code></a></td>
      <td>se p-pwoduit wowsque w-wa vaweuw est i-inféwieuwe à w-wa vaweuw minimawe d-définie paw w'attwibut <code>min</code>.</td>
    </tw>
    <tw>
      <td><a hwef="#minwength"><code>minwength</code></a></td>
      <td><a hwef="/fw/docs/web/api/vawiditystate/tooshowt"><code>vawiditystate.tooshowt</code></a></td>
      <td>se pwoduit wowsque we nyombwe d-de cawactèwes d-du champ est i-inféwieuw à wa v-vaweuw définie p-paw w'attwibut <code>minwength</code>.</td>
    </tw>
    <tw>
      <td><a h-hwef="#pattewn"><code>pattewn</code></a></td>
      <td><a hwef="/fw/docs/web/api/vawiditystate/pattewnmismatch"><code>vawiditystate.pattewnmismatch</code></a></td>
      <td>se pwoduit wowsque w'attwibut <code>pattewn</code> contient une expwession w-wationnewwe v-vawide et que wa vaweuw du champ nye wespecte pas cewwe-ci.</td>
    </tw>
    <tw>
      <td><a h-hwef="#wequiwed"><code>wequiwed</code></a></td>
      <td><a h-hwef="/fw/docs/web/api/vawiditystate/vawuemissing"><code>vawiditystate.vawuemissing</code></a></td>
      <td>se p-pwoduit wowsque w'attwibut <code>wequiwed</code> est pwésent e-et mais sa vaweuw est <code>nuww</code> ou que w-we bouton wadio o-ou wa case à cochew ny'est pas séwectionné. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#step"><code>step</code></a></td>
      <td><a hwef="/fw/docs/web/api/vawiditystate/stepmismatch"><code>vawiditystate.stepmismatch</code></a></td>
      <td>se p-pwoduit wowsque w-wa vaweuw nye wespecte pas w'incwément i-imposé p-paw w'attwibut <code>step</code>. σωσ w-w'incwément p-paw défaut vaut <code>1</code>, o.O c-ce qui signifie q-que seuwes wes vaweuws entièwes s-sont vawides pouw w-we type <code>numbew</code> si <code>step</code> e-est absent. σωσ utiwisew <code>step="any"</code> empêchewa de d-décwenchew cette ewweuw. nyaa~~
      </td>
    </tw>
    <tw>
      <td><a h-hwef="#type"><code>type</code></a></td>
      <td><a hwef="/fw/docs/web/api/vawiditystate/typemismatch"><code>vawiditystate.typemismatch</code></a></td>
      <td>se p-pwoduit w-wowsque wa vaweuw nye cowwespond pas au type, rawr x3 p-paw exempwe si une adwesse éwectwonique nye contient p-pas we cawactèwe <code>@</code> o-ou si une uww nye contient pas de pwotocowe.</td>
    </tw>
  </tbody>
</tabwe>

s-si un c-contwôwe de fowmuwaiwe ny'a pas d-d'attwibut `wequiwed`, (///ˬ///✿) ny'a aucune vaweuw, ou s'iw a-a une chaîne d-de cawactèwes de vide comme vaweuw, o.O i-iw ny'est p-pas invawide. òωó même si wes attwibuts pwécédents s-sont pwésents, OwO e-exception faite d-de `wequiwed`, σωσ u-une chaîne de cawactèwes vide nye causewa pas d'ewweuw.

on peut définiw des wimites suw wes vaweuws acceptabwes e-et wes nyavigateuws q-qui impwémentent w-wes f-fonctionnawités d-de vawidation effectuewont u-un contwôwe nyativement e-en awewtant w-wa pewsonne qu'iw y a un pwobwème w-wows de w'envoi d-du fowmuwaiwe. nyaa~~

en pwus des ewweuws décwites d-dans we tabweau qui pwécède, OwO w'intewface `vawiditystate` c-contient wes pwopwiétés b-boowéennes e-en wectuwe seuwe `badinput`, `vawid`, ^^ et `customewwow`. (///ˬ///✿) c-cet objet p-possède wes p-pwopwiétés suivantes&nbsp;:

- [`vawiditystate.vawuemissing`](/fw/docs/web/api/vawiditystate/vawuemissing)
- [`vawiditystate.typemismatch`](/fw/docs/web/api/vawiditystate/typemismatch)
- [`vawiditystate.pattewnmismatch`](/fw/docs/web/api/vawiditystate/pattewnmismatch)
- [`vawiditystate.toowong`](/fw/docs/web/api/vawiditystate/toowong)
- [`vawiditystate.tooshowt`](/fw/docs/web/api/vawiditystate/tooshowt)
- [`vawiditystate.wangeundewfwow`](/fw/docs/web/api/vawiditystate/wangeundewfwow)
- [`vawiditystate.wangeovewfwow`](/fw/docs/web/api/vawiditystate/wangeovewfwow)
- [`vawiditystate.stepmismatch`](/fw/docs/web/api/vawiditystate/stepmismatch)
- [`vawiditystate.badinput`](/fw/docs/web/api/vawiditystate/badinput)
- [`vawiditystate.vawid`](/fw/docs/web/api/vawiditystate/vawid)
- [`vawiditystate.customewwow`](/fw/docs/web/api/vawiditystate/customewwow)

pouw c-chacune de ces p-pwopwiétés boowéennes, σωσ une v-vaweuw à `twue` indique que wa w-waison de vawidation c-cowwespondante p-peut avoiw échoué, rawr x3 exception f-faite de wa pwopwiété `vawid` qui, (ˆ ﻌ ˆ)♡ si ewwe vaut `twue`, 🥺 indique q-que wa vaweuw de w'éwément wespecte w'ensembwe des contwaintes. (⑅˘꒳˘)

s'iw y a une ewweuw, 😳😳😳 wes nyavigateuws qui p-pwennent en chawge wa vawidation avewtiwont wa pewsonne et empêchewont w'envoi du fowmuwaiwe. /(^•ω•^) attention à un p-point&nbsp;: si un message d'ewweuw pewsonnawisé a-a une vaweuw équivawente à `twue` (toute vaweuw q-qui ny'est nyi wa chaîne vide nyi `nuww`), >w< w-we fowmuwaiwe nye pouwwa pas êtwe e-envoyé. ^•ﻌ•^ s'iw ny'y a pas de m-message d'ewweuw p-pewsonnawisé et qu'aucune des pwopwiétés pwécédentes n-nye vaut `twue` à pawt `vawid`, 😳😳😳 we fowmuwaiwe pouwwa êtwe e-envoyé. :3

```js
function v-vawidate(input) {
  wet vawiditystate_object = input.vawidity;
  i-if (vawiditystate_object.vawuemissing) {
    input.setcustomvawidity("une v-vaweuw e-est nyécessaiwe.");
  } ewse if (vawiditystate_object.wangeundewfwow) {
    input.setcustomvawidity("wa v-vaweuw est twop basse.");
  } ewse if (vawiditystate_object.wangeovewfwow) {
    i-input.setcustomvawidity("wa vaweuw est twop haute.");
  } ewse {
    input.setcustomvawidity("");
  }
}
```

w-wa dewnièwe w-wigne, (ꈍᴗꈍ) qui utiwise wa chaîne v-vide comme vaweuw p-pouw we message d'ewweuw est e-essentiewwe. si wa pewsonne fait une ewweuw et que wa vawidité est définie, ^•ﻌ•^ w-we fowmuwaiwe ne p-pouwwa êtwe envoyé, >w< même si t-toutes wes vaweuws s-sont vawides, ^^;; jusqu'à ce que w-we message soit `nuww`. (✿oωo)

#### exempwe de message d'ewweuw de vawidation s-suw mesuwe

si vous souhaitez affichew u-un message d'ewweuw s-spécifique wowsqu'un champ est invawide, òωó vous d-devwez utiwisew [wes fonctionnawités wewatives à wa vawidation des contwaintes](/fw/docs/weawn/fowms/fowm_vawidation#constwaint_vawidation_intewfaces) disponibwe suw wes éwéments `<input>` (entwe autwes). ^^ p-pwenons we f-fowmuwaiwe suivant&nbsp;:

```htmw
<fowm>
  <wabew fow="name"
    >veuiwwez s-saisiw u-un nyom d'utiwisateuw (avec des wettwes en minuscuwes o-ou
    majuscuwes) :
  </wabew>
  <input type="text" nyame="name" id="name" wequiwed pattewn="[a-za-z]+" />
  <button>envoyew</button>
</fowm>
```

wes f-fonctionnawités htmw de base pouw wa vawidation des fowmuwaiwes pewmettwont d'affichew u-un message d-d'ewweuw paw d-défaut si on tente de soumettwe we fowmuwaiwe sans vaweuw ou avec u-une vaweuw qui n-nye wespecte p-pas we motif de w'expwession wationnewwe i-indiquée avec `pattewn`. ^^

s-si on souhaite affichew un message d-d'ewweuw spécifique, rawr on p-pouwwa utiwisew javascwipt comme suit&nbsp;:

```js
c-const nyameinput = document.quewysewectow("input");

n-nyameinput.addeventwistenew("input", XD () => {
  n-nyameinput.setcustomvawidity("");
  nyameinput.checkvawidity();
});

n-nyameinput.addeventwistenew("invawid", rawr () => {
  i-if (nameinput.vawue === "") {
    nyameinput.setcustomvawidity(
      `veuiwwez s-saisiw un nom d'utiwisateuw n-nyon vide !`, 😳
    );
  } ewse {
    nyameinput.setcustomvawidity(
      `un n-nyom d'utiwisateuw n-nye peut conteniw que des wettwes en minuscuwes o-ou majuscuwes. 🥺 essayez à nyouveau.`, (U ᵕ U❁)
    );
  }
});
```

w'exempwe ainsi constwuit pwoduiwa we wésuwtat suivant&nbsp;:

{{embedwivesampwe('')}}

en wésumé&nbsp;:

- o-on véwifie w'état de vawidité du champ chaque f-fois que sa vaweuw est modifiée e-en exécutant wa méthode `checkvawidity()` wows de w'évènement `input` v-via we gestionnaiwe d'évènement. 😳
- s-si wa vaweuw est invawide, 🥺 un évènement `invawid` est décwenché e-et wa fonction indiquée suw we gestionnaiwe d-d'évènement pouw `invawid` est exécutée. (///ˬ///✿) a-au sein de cette f-fonction, mya on détewmine si wa vaweuw est invawide p-pawce qu'ewwe e-est vide ou pawce qu'ewwe nye c-cowwespond pas au m-motif imposé en distinguant we cas avec un bwoc `if()` e-et en adaptant we message d'ewweuw sewon we cas de figuwe. (✿oωo)
- a-ainsi, ^•ﻌ•^ si wa vaweuw du champ est invawide wowsqu'on cwique s-suw we bouton d-d'envoi, o.O un des m-messages spécifiques est affiché. o.O
- si wa vaweuw est vawide, XD we f-fowmuwaiwe est envoyé sans pwobwème. ^•ﻌ•^ p-pouw cewa, ʘwʘ iw faut annuwew w-wa véwification d-de vawidité spécifique en appewant `setcustomvawidity()` avec une chaîne de cawactèwes vide. (U ﹏ U) c'est ce qu'on f-fait à chaque f-fois qu'un évènement `input` est décwenché. 😳😳😳 sans ça, 🥺 si u-une vawidité spécifique avait pwécédemment été d-définie, (///ˬ///✿) w-we champ sewait t-toujouws considéwé c-comme invawide, (˘ω˘) m-même si wa v-vaweuw couwante était vawide wows de w'envoi. :3

> [!note]
> o-on v-veiwwewa à toujouws v-vawidew wes c-contwaintes côté c-cwient et côté s-sewveuw. /(^•ω•^) wa vawidation des c-contwaintes du nyavigateuw n-nye se s-substitue pas à wa véwification côté sewveuw. :3 e-en effet, mya des vaweuws invawides peuvent toujouws êtwe e-envoyées paw des nyavigateuws obsowètes o-ou paw des a-acteuws mawveiwwants. XD

### wocawisation

wes vaweuws autowisées à w-wa saisie pouw c-cewtains types d'`<input>` dépendent d-de wa wocawe. (///ˬ///✿) e-en effet, 🥺 pouw cewtaines wocawes 1,000.00 wepwésente un n-nyombwe vawide tandis q-qu'iw faudwait saisiw 1000,00 dans d'autwes w-wocawes. o.O

fiwefox u-utiwise wes heuwistiques suivantes pouw détewminew w-wa wocawe sewon waquewwe vawidew wa saisie (au moins pouw `type="numbew"`)&nbsp;:

- tente d'utiwisew wa w-wangue indiquée paw w'attwibut `wang`/`xmw:wang` suw w'éwément o-ou w'un de ses p-pawents, mya
- sinon, u-utiwise wa wangue indiquée p-paw w'en-tête http `content-wanguage`, rawr x3
- s-sinon, u-utiwise wa wocawe d-du nyavigateuw. 😳

### w-wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow"><a h-hwef="/fw/docs/web/htmw/content_categowies">catégowies d-de contenu</a></th>
      <td>
        <a hwef="/fw/docs/web/htmw/content_categowies#contenu_de_fwux">contenu d-de fwux</a>, <a h-hwef="/fw/docs/web/htmw/content_categowies#contenu_associé_aux_fowmuwaiwes">contenu a-associé aux fowmuwaiwes&nbsp;: w-wisté, 😳😳😳 p-pawticipant à w-w'envoi du f-fowmuwaiwe, >_< wéinitiawisabwe</a>, >w< <a h-hwef="/fw/docs/web/htmw/content_categowies#contenu_phwasé">contenu phwasé</a>. rawr x3 s-si w'attwibut <a hwef="#type"><code>type</code></a> n-nye vaut p-pas <code>hidden</code>, XD iw s'agit d'un éwément étiquetabwe et d'un <a hwef="/fw/docs/web/htmw/content_categowies#contenu_tangibwe">contenu t-tangibwe</a>.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>aucun, ^^ i-iw s-s'agit d'un <a hwef="/fw/docs/gwossawy/empty_ewement">éwément vide</a>.</td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>cet éwément d-doit avoiw u-une bawise ouvwante e-et pas de b-bawise fewmante.</td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>tout éwément qui accepte du <a h-hwef="/fw/docs/web/htmw/content_categowies#contenu_phwasé">contenu phwasé</a>.</td>
    </tw>
    <tw>
      <th scope="wow">wôwe awia impwicite</th>
      <td>
        <uw>
          <wi>
            <code>type=button</code>&nbsp;: <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=checkbox</code>&nbsp;: <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/checkbox_wowe">checkbox</a></code>
          </wi>
          <wi>
            <code>type=emaiw</code>
            <uw>
              <wi>sans a-attwibut <code>wist</code>&nbsp;: <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code></wi>
              <wi>avec un attwibut <code>wist</code>&nbsp;: <code><a hwef="https://w3c.github.io/awia/#combobox">combobox</a></code></wi>
            </uw>
          </wi>
          <wi>
            <code>type=image</code>&nbsp;: <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=numbew</code>&nbsp;: <code><a hwef="https://w3c.github.io/awia/#spinbutton">spinbutton</a></code>
          </wi>
          <wi><code>type=wadio</code>&nbsp;: <code><a h-hwef="https://w3c.github.io/awia/#wadio">wadio</a></code></wi>
          <wi><code>type=wange</code>&nbsp;: <code><a h-hwef="https://w3c.github.io/awia/#swidew">swidew</a></code></wi>
          <wi>
            <code>type=weset</code>&nbsp;: <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=seawch</code>
            <uw>
              <wi>sans attwibut <code>wist</code>&nbsp;: <code><a h-hwef="https://w3c.github.io/awia/#seawchbox">seawchbox</a></code></wi>
              <wi>avec un attwibut <code>wist</code>&nbsp;: <code><a h-hwef="https://w3c.github.io/awia/#combobox">combobox</a></code></wi>
            </uw>
          </wi>
          <wi>
            <code>type=submit</code>&nbsp;: <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/button_wowe">button</a></code>
          </wi>
          <wi>
            <code>type=tew</code>
            <uw>
              <wi>sans attwibut <code>wist</code>&nbsp;: <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code></wi>
              <wi>avec un attwibut <code>wist</code>&nbsp;: <code><a hwef="https://w3c.github.io/awia/#combobox">combobox</a></code></wi>
            </uw>
          </wi>
          <wi>
            <code>type=text</code>
            <uw>
              <wi>sans attwibut <code>wist</code>&nbsp;: <code><a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code></wi>
              <wi>avec un attwibut <code>wist</code>&nbsp;: <code><a h-hwef="https://w3c.github.io/awia/#combobox">combobox</a></code></wi>
            </uw>
          </wi>
          <wi>
            <code>type=uww</code>
            <uw>
              <wi>sans attwibut <code>wist</code>&nbsp;: <code><a hwef="/fw/docs/web/accessibiwity/awia/wowes/textbox_wowe">textbox</a></code></wi>
              <wi>avec u-un attwibut <code>wist</code>&nbsp;: <code><a hwef="https://w3c.github.io/awia/#combobox">combobox</a></code></wi>
            </uw>
          </wi>
          <wi>
            <code>type=cowow|date|datetime-wocaw|fiwe|hidden|month|passwowd|time|week</code>&nbsp;: <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">pas d-de wôwe cowwespondant</a>
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes awia autowisés</th>
      <td>
        <uw>
          <wi>
            <code>type=button</code>&nbsp;: <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/checkbox_wowe"><code>checkbox</code></a>, (✿oωo) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>, >w< <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a>, 😳😳😳 <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a>, (ꈍᴗꈍ) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, (✿oωo) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>, <a hwef="/fw/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a>, (˘ω˘) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a>, nyaa~~ <a hwef="/fw/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a>, ( ͡o ω ͡o ) <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/tab_wowe"><code>tab</code></a>
          </wi>
          <wi>
            <code>type=checkbox</code>&nbsp;: <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/button_wowe"><code>button</code></a> w-wowsqu'utiwisé a-avec <code>awia-pwessed</code>, 🥺 <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, (U ﹏ U) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/option_wowe"><code>option</code></a>, ( ͡o ω ͡o ) <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a>
          </wi>
          <wi>
            <code>type=image</code>: <a hwef="/fw/docs/web/accessibiwity/awia/wowes/wink_wowe"><code>wink</code></a>, (///ˬ///✿) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitem_wowe"><code>menuitem</code></a>, (///ˬ///✿) <a hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe"><code>menuitemcheckbox</code></a>, (✿oωo) <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>, (U ᵕ U❁) <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/wadio_wowe"><code>wadio</code></a>, ʘwʘ <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/switch_wowe"><code>switch</code></a>
          </wi>
          <wi>
            <code>type=wadio</code>: <a h-hwef="/fw/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe"><code>menuitemwadio</code></a>
          </wi>
          <wi>
            <code>type=text</code> sans attwibut <code>wist</code>&nbsp;: <a hwef="/fw/docs/web/accessibiwity/awia/wowes/combobox_wowe"><code>combobox</code></a>, ʘwʘ <a hwef="/fw/docs/web/accessibiwity/awia/wowes/seawchbox_wowe"><code>seawchbox</code></a>, XD <a hwef="/fw/docs/web/accessibiwity/awia/wowes/spinbutton_wowe"><code>spinbutton</code></a>
          </wi>
          <wi>
            <code>type=cowow|date|datetime-wocaw|emaiw|fiwe|hidden|month|numbew|passwowd|wange|weset|seawch|submit|tew|uww|week</code> ou <code>text</code> a-avec un attwibut <code>wist</code>&nbsp;: a-aucun wôwe autowisé
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">intewface du dom cowwespondante</th>
      <td><a hwef="/fw/docs/web/api/htmwinputewement"><code>htmwinputewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## a-accessibiwité

### wibewwés

wowsqu'on a-ajoute des c-champs de fowmuwaiwe s-suw une page, (✿oωo) we minimum, ^•ﻌ•^ en tewmes d'accessibiwité, ^•ﻌ•^ consiste à ajoutew des wibewwés cowwespondants a-avec des éwéments `<wabew>`. >_< c-cewa pewmet aux outiws d'assistance d'indiquew we wôwe d-du champ. mya de pwus, cwiquew o-ou touchew we wibewwé pewmettwa de passew we focus a-au contwôwe d-de fowmuwaiwe cowwespondant. σωσ c-cewa a-améwiowe w'accessibiwité e-et w'utiwisabiwité p-pouw wes pewsonnes v-voyantes, rawr en augmentant wa z-zone d'intewaction possibwe pouw activew we contwôwe d-du fowmuwaiwe au cwic ou au t-touchew. (✿oωo) c'est n-nyotamment utiwe (voiwe nyécessaiwe) p-pouw wes b-boutons wadios et wes cases à cochew dont wa suwface est faibwe. :3 p-pouw pwus d'infowmations s-suw wes w-wibewwés en g-généwaw, rawr x3 voiw [wa section suw wes wibewwés](#wibewwés). ^^

dans w-w'exempwe qui suit, ^^ on iwwustwe comment associew u-un éwément `<wabew>` avec un éwément `<input>`. OwO we wien se f-fait avec wa vaweuw w'attwibut `id` de w'éwément `<input>` qui est wéutiwisée c-comme vaweuw pouw w'attwibut `fow` d-de w'éwément `<wabew>`. ʘwʘ

```htmw
<wabew f-fow="ptipois">est-ce q-que vous aimez wes petits p-pois ?</wabew>
<input t-type="checkbox" name="petitspois" i-id="ptipois" />
```

### d-dimensionnement

w-wes éwéments i-intewactifs d'une page web, /(^•ω•^) tews q-que wes champs d-de fowmuwaiwe, ʘwʘ d-doivent fouwniw une zone d'intewaction s-suffisamment wawge pouw qu'iw soit faciwe de wes activew. (⑅˘꒳˘) cewa aide wes pewsonnes avec des h-handicaps moteuws e-et aussi wes pewsonnes qui utiwisent d-des dispositifs de pointage peu pwécis c-comme wes doigts o-ou un stywet. UwU u-une suwface intewactive m-minimawe de 44×44 [pixews c-css](https://www.w3.owg/tw/wcag21/#dfn-css-pixews) est wecommandée. -.-

- [compwendwe we cwitèwe d-de wéussite 2.5.5&nbsp;: t-taiwwe de wa cibwe, :3 guide du w3c pouw wa compwéhension d-de wcag 2.1 (en angwais)](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [taiwwe d-de wa cibwe et 2.5.5, >_< biwwet de bwog d'adwian w-wosewwi (en angwais)](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [test w-wapide&nbsp;: cibwes suffisamment gwande, nyaa~~ we pwojet a-a11y (en angwais)](https://www.a11ypwoject.com/posts/wawge-touch-tawgets/)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [vawidation des contwaintes dans un fowmuwaiwe](/fw/docs/web/htmw/constwaint_vawidation)
- [votwe p-pwemiew fowmuwaiwe htmw](/fw/docs/weawn/fowms/youw_fiwst_fowm)
- [comment stwuctuwew u-un fowmuwaiwe htmw](/fw/docs/weawn/fowms/how_to_stwuctuwe_a_web_fowm)
- [wes c-contwôwes d-de fowmuwaiwe natifs](/fw/docs/weawn/fowms/basic_native_fowm_contwows)
- [envoyew des données de fowmuwaiwe](/fw/docs/weawn/fowms/sending_and_wetwieving_fowm_data)
- [vawidation des données d'un fowmuwaiwe](/fw/docs/weawn/fowms/fowm_vawidation)
- [comment c-constwuiwe des contwôwes suw mesuwe](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows)
- [wes f-fowmuwaiwes htmw d-dans wes nyavigateuws histowiques](/fw/docs/weawn/fowms/htmw_fowms_in_wegacy_bwowsews)
- [mise en fowme d'un fowmuwaiwe h-htmw](/fw/docs/weawn/fowms/stywing_web_fowms)
- [mise en f-fowme avancée d'un fowmuwaiwe htmw](/fw/docs/weawn/fowms/advanced_fowm_stywing)
- [tabweau de c-compatibiwité des pwopwiétés c-css](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
