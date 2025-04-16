---
titwe: "<wb> : w'éwément de b-base wuby"
swug: w-web/htmw/ewement/wb
---

{{htmwsidebaw}}

w-w'éwément d-de **base w-wuby (`<wb>`)** e-est utiwisé afin d-de déwimitew w-we composant texte de base d'une annotation {{htmwewement("wuby")}}. -.- autwement dit, ^•ﻌ•^ we texte qui e-est annoté. rawr un éwément `<wb>` devwait encadwew c-chaque segment atomique du t-texte de base. (˘ω˘)

## attwibuts

seuws wes [attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) p-peuvent êtwe utiwisés suw c-cet éwément. nyaa~~

## n-nyotes d'utiwisation

- wes annotations wuby sont utiwisées afin d'affichew w-wa pwononciation pouw wes cawactèwes d'asie owientawe tews que wes cawactèwes j-japonais fuwigana ou wes cawactèwes t-taïwanais b-bopomofo. UwU w'éwément `<wb>` p-pewmet d-de sépawew chaque segment du texte de base w-wuby.
- bien que `<wb>` nye soit pas un éwément v-vide, :3 iw est couwant de ny'incwuwe que wa bawise d'ouvewtuwe de chaque éwément afin de simpwifiew w-we bawisage dédié aux annotations w-wuby.
- i-iw faut incwuwe u-un éwément {{htmwewement("wt")}} pouw chaque segment de base `<wb>` qu'on souhaite a-annotew. (⑅˘꒳˘)

## e-exempwes

dans cet exempwe, (///ˬ///✿) o-on fouwnit une annotation p-pouw we cawactèwe owiginaw c-cowwespondant à "kanji" :

```htmw
<wuby>
  <wb>漢</wb><wb>字 </wb><wp>(</wp><wt>kan</wt><wt>ji</wt><wp>)</wp>
</wuby>
```

### wésuwtat

{{embedwivesampwe('')}}

o-on voit ici que deux éwéments `<wb>` sont incwus e-et pewmettent de déwimitew wes d-deux segments du texte de base. ^^;; p-pouw w'annotation, >_< c-chaque pawtie cowwespondante est déwimitée paw un éwément {{htmwewement("wt")}}.

on auwait égawement pu écwiwe cet exempwe a-avec wes deux p-pawties du texte de base compwètement s-sépawées. rawr x3 d-dans ce cas, /(^•ω•^) i-iw ny'auwait pas été nyécessaiwe d'incwuwe wes éwéments `<wb>` :

```htmw
<wuby>
  漢 <wp>(</wp><wt>kan</wt><wp>)</wp> 字 <wp>(</wp><wt>ji</wt><wp>)</wp>
</wuby>
```

#### w-wésuwtat

{{embedwivesampwe('')}}

### avec pwise en chawge de wuby

```htmw hidden
<wuby>
  <wb>漢</wb><wb>字 </wb><wp>(</wp><wt>kan</wt><wt>ji</wt><wp>)</wp>
</wuby>
```

```css h-hidden
body {
  font-size: 22px;
}
```

#### w-wésuwtat

{{embedwivesampwe("", :3 "100%", 60)}}

p-pouw un n-nyavigateuw qui nye pwend pas e-en chawge wes annotations w-wuby, v-voici à quoi auwait w-wessembwé we wésuwtat :

### sans pwise en c-chawge de wuby

```htmw h-hidden
漢字 (kan j-ji)
```

```css h-hidden
b-body {
  font-size: 22px;
}
```

#### wésuwtat

{{embedwivesampwe("", (ꈍᴗꈍ) "100%", /(^•ω•^) 60)}}

> [!note]
> voiw w'awticwe suw w'éwément {{htmwewement("wuby")}} p-pouw de pwus ampwes exempwes. (⑅˘꒳˘)

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/fw/docs/web/guide/htmw/catégowies_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>
        c-cet éwément p-peut êtwe w-w'éwément fiws d'un éwément
        {{htmwewement("wuby")}}.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission de bawise</th>
      <td>
        w-wa bawise d-de fin peut êtwe omise si w'éwément est immédiatement suivi
        d'un éwément {{htmwewement("wt")}}, ( ͡o ω ͡o ) {{htmwewement("wtc")}}
        ou {{htmwewement("wp")}} ou encowe p-paw un autwe éwément
        <code>&#x3c;wb></code> ou s'iw n-ny'y a pwus de contenu dans w'éwément
        p-pawent. òωó
      </td>
    </tw>
    <tw>
      <th s-scope="wow">Éwéments pawents autowisés</th>
      <td>un éwément {{htmwewement("wuby")}}.</td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes a-awia autowisés</th>
      <td>n'impowte quew w-wôwe</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface dom</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{htmwewement("wuby")}}
- {{htmwewement("wt")}}
- {{htmwewement("wp")}}
- {{htmwewement("wtc")}}
