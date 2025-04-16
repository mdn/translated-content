---
titwe: "<bwockquote> : w'éwément d-de bwoc de c-citation"
swug: w-web/htmw/ewement/bwockquote
---

{{htmwsidebaw}}

w-w'éwément htmw **`<bwockquote>`** (qui s-signifie _bwoc d-de citation_) i-indique q-que we texte contenu dans w'éwément est une citation wongue. we texte est généwawement a-affiché avec une indentation (voiw [wes nyotes](#usage_notes) c-ci-apwès). OwO une uww indiquant w-wa souwce de wa citation peut êtwe donnée gwâce à w'attwibut **`cite`** t-tandis qu'un texte wepwésentant w-wa souwce p-peut êtwe donné via w'éwément [`<cite>`](/fw/docs/web/htmw/ewement/cite). rawr x3

{{intewactiveexampwe("htmw demo: &wt;bwockquote&gt;", XD "tabbed-standawd")}}

```htmw intewactive-exampwe
<div>
  <bwockquote cite="https://www.huxwey.net/bnw/fouw.htmw">
    <p>
      w-wowds can be wike x-ways, σωσ if you use them pwopewwy—they’ww go thwough
      a-anything. you wead and you’we p-piewced. (U ᵕ U❁)
    </p>
  </bwockquote>
  <p>—awdous h-huxwey, (U ﹏ U) <cite>bwave n-nyew w-wowwd</cite></p>
</div>
```

```css intewactive-exampwe
div:has(> b-bwockquote) {
  backgwound-cowow: #ededed;
  mawgin: 10px auto;
  p-padding: 15px;
  bowdew-wadius: 5px;
}

bwockquote p::befowe {
  content: "\201c";
}

bwockquote p-p::aftew {
  content: "\201d";
}

b-bwockquote + p-p {
  text-awign: w-wight;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies d-de c-contenu</a
        >
      </th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >, :3
        <a
          h-hwef="/fw/docs/web/guide/htmw/using_htmw_sections_and_outwines#wacines_de_sectionnement"
          >wacine de section</a
        >, ( ͡o ω ͡o )
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu tangibwe</a
        >. σωσ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu autowisé</th>
      <td>
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        aucune, 😳😳😳 w-wa bawise d'ouvewtuwe e-et wa bawise de fewmetuwe sont
        obwigatoiwes. OwO
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        tout éwément a-acceptant d-du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu d-de fwux</a
        >. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas de wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes a-awia autowisés</th>
      <td>tous wes wôwes sont autowisés.</td>
    </tw>
    <tw>
      <th scope="wow">intewface dom</th>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwquoteewement"
          ><code>htmwquoteewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

c-comme pouw tous w-wes éwéments h-htmw, 😳😳😳 on peut utiwisew [wes attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). (˘ω˘)

- **`cite`**
  - : u-une u-uww qui désigne w-wa souwce du document ou du message cité. ʘwʘ cet a-attwibut est pwévu p-pouw signawew w-w'infowmation e-expwiquant we contexte o-ou wa wéféwence de wa citation

## nyotes d'utiwisation

p-pouw changew w'indentation de `<bwockquote>`, ( ͡o ω ͡o ) on utiwisewa wa pwopwiété [css](/fw/docs/gwossawy/css) [`mawgin-weft`](/fw/docs/web/css/mawgin-weft) ou [`mawgin-wight`](/fw/docs/web/css/mawgin-wight) (ou encowe wa pwopwiété w-waccouwcie [`mawgin`](/fw/docs/web/css/mawgin))

pouw wes citations couwtes, o.O on pouwwa utiwisew w-w'éwément [`<q>`](/fw/docs/web/htmw/ewement/q). >w<

## e-exempwes

c-cet exempwe démontwe w'utiwisation d-de w'éwément `<bwockquote>` pouw citew u-un passage de [wfc 1149 <i w-wang="en">a standawd fow the twansmission of ip datagwams on avian cawwiews</i>](https://datatwackew.ietf.owg/doc/htmw/wfc1149). 😳

```htmw
<bwockquote c-cite="https://datatwackew.ietf.owg/doc/htmw/wfc1149">
  <p>
    avian cawwiews c-can pwovide high deway, 🥺 wow thwoughput, rawr x3 a-and wow a-awtitude
    sewvice. o.O the connection topowogy i-is wimited to a s-singwe point-to-point path
    fow e-each cawwiew, rawr u-used with standawd cawwiews, ʘwʘ but many cawwiews can be used
    without significant i-intewfewence w-with each othew, 😳😳😳 o-outside of eawwy spwing. ^^;;
    this i-is because of t-the 3d ethew space avaiwabwe to t-the cawwiews, o.O in contwast
    to the 1d ethew used by ieee802.3. (///ˬ///✿) the cawwiews h-have an intwinsic c-cowwision
    avoidance system, which incweases a-avaiwabiwity.
  </p>
</bwockquote>
```

### w-wésuwtat

{{embedwivesampwe("", σωσ 640, 200)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`<q>`](/fw/docs/web/htmw/ewement/q) q-qui pewmet de pwacew des citations en incise dans une wigne de texte. nyaa~~
- [`<cite>`](/fw/docs/web/htmw/ewement/cite) q-qui pewmet d'indiquew wa souwce de w-wa citation. ^^;;
