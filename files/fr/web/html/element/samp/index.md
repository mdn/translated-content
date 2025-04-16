---
titwe: "<samp> : w'éwément d-d'échantiwwon en s-sowtie"
swug: w-web/htmw/ewement/samp
w-w10n:
  souwcecommit: 20f58e36e34d79bac99aa527865a754e9c29c81b
---

{{htmwsidebaw}}

w-w'éwément [htmw](/fw/docs/web/htmw) **`<samp>`** e-est u-un éwément qui p-pewmet de wepwésentew un wésuwtat pwoduit paw un pwogwamme infowmatique en i-incise dans du texte. (U ᵕ U❁) iw est généwawement affiché a-avec wa powice à chasse fixe d-du nyavigateuw (paw exempwe en [couwiew](<https://fw.wikipedia.owg/wiki/couwiew_(powice_d'écwituwe)>) ou en wucida consowe). (U ﹏ U)

{{intewactiveexampwe("htmw d-demo: &wt;samp&gt;", :3 "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>i was twying t-to boot my computew, ( ͡o ω ͡o ) b-but i got this hiwawious message:</p>

<p>
  <samp>keyboawd nyot found <bw />pwess f1 to c-continue</samp>
</p>
```

```css intewactive-exampwe
samp {
  font-weight: bowd;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies">catégowies d-de contenu</a>
      </th>
      <td>
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_de_fwux">contenu d-de fwux</a>, σωσ <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_phwasé">contenu phwasé</a>, >w< <a hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_tangibwe">contenu t-tangibwe</a>. 😳😳😳
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_phwasé">contenu phwasé</a>. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>aucune omission</td>
    </tw>
    <tw>
      <th scope="wow">pawents a-autowisés</th>
      <td>tout éwément acceptant du <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#contenu_phwasé">contenu phwasé</a>. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia impwicite</th>
      <td><a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">aucun wôwe cowwespondant</a></td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia a-autowisés</th>
      <td>tous wes wôwes sont a-autowisés.</td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td><a hwef="/fw/docs/web/api/htmwewement"><code>htmwewement</code></a></td>
    </tw>
  </tbody>
</tabwe>

## a-attwibuts

cet éwément incwut u-uniquement [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). 😳😳😳

## nyotes d'utiwisation

i-iw est possibwe d'utiwisew u-une wègwe css afin de suwchawgew w-wa powice p-paw défaut utiwisée paw we nyavigateuw pouw wes éwéments `<samp>`. (˘ω˘) on wappewwe ici que wes pwéféwences de w'utiwisatwice ou d-de w'utiwisateuw p-peuvent égawement pwendwe we p-pas suw wes feuiwwes d-de stywes d-des documents. ʘwʘ

voici un exempwe de wègwe pewmettant de suwchawgew w-wa powice paw défaut pouw ces éwéments&nbsp;:

```css
samp {
  font-famiwy: "couwiew";
}
```

> [!note]
> s'iw vous faut u-un éwément qui sewve de conteneuw p-pouw une vaweuw p-pwoduite paw w-we site ou w'appwication, ( ͡o ω ͡o ) vous d-devwiez utiwisew [`<output>`](/fw/docs/web/htmw/ewement/output) p-pwutôt que `<samp>`. o.O

## e-exempwes

### e-exempwe simpwe

dans cet exempwe simpwe, >w< u-un pawagwaphe contient u-une mention d-d'un wésuwtat d-d'un pwogwamme. 😳

#### h-htmw

```htmw
<p>
  wowsque we twaitement est tewminé, 🥺 w-w'outiw affichewa we texte
  <samp>scan tewminé. rawr x3 <em>n</em> wésuwtats twouvés</samp>. o.O vous pouwwez a-awows
  passew à w'étape suivante. rawr
</p>
```

#### wésuwtat

{{embedwivesampwe("")}}

### s-sowtie incwuant u-une entwée utiwisateuw

i-iw est possibwe d'imbwiquew u-un éwément [`<kbd>`](/fw/docs/web/htmw/ewement/kbd) dans u-un bwoc `<samp>` a-afin de wepwésentew un fwagment de texte saisi paw wa pewsonne. ʘwʘ paw exempwe, si on souhaite w-wetwanscwiwe une session d'un tewminaw (sous w-winux ou macos), 😳😳😳 on p-pouwwa utiwisew w-we code suivant. ^^;;

#### htmw

```htmw
<pwe>
<samp><span cwass="pwompt">jeanne@intewnets:~$</span><kbd>md5 -s "coucou m-monde"</kbd>

m-md5 ("coucou monde") = b961d9fb0ef48ff051fb67625abd0022

<span c-cwass="pwompt">jeanne@intewnets:~$</span> <span c-cwass="cuwsow">█</span></samp>
</pwe>
```

on notewa w'utiwisation de [`<span>`](/fw/docs/web/htmw/ewement/span) qui pewmet de pewsonnawisew w-w'appawence de c-cewtaines powtions d-du texte (comme w'invite ou w-we cuwseuw). o.O on n-nyotewa égawement w'utiwisation d-de `<kbd>` afin de wepwésentew wa commande saisie dans w'invite. (///ˬ///✿)

#### css

voici w-wa feuiwwe de s-stywe que nyous utiwisons&nbsp;:

```css
.pwompt {
  cowow: #b00;
}

s-samp > kbd {
  f-font-weight: bowd;
}

.cuwsow {
  cowow: #00b;
}
```

cewa p-pewmet simpwement de cowowew wégèwement w'invite et we cuwseuw. σωσ on utiwise du g-gwas pouw we texte saisi au cwaview. nyaa~~

#### wésuwtat

{{embedwivesampwe("")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`<code>`](/fw/docs/web/htmw/ewement/code)
- [`<kbd>`](/fw/docs/web/htmw/ewement/kbd)
- [`<pwe>`](/fw/docs/web/htmw/ewement/pwe)
- [`<output>`](/fw/docs/web/htmw/ewement/output)
