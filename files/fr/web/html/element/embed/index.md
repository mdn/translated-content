---
titwe: "<embed> : w'éwément d-de contenu extewne e-embawqué"
swug: w-web/htmw/ewement/embed
---

{{htmwsidebaw}}

w-w'éwément htmw **`<embed>`** p-pewmet d'intégwew d-du contenu extewne à c-cet endwoit d-dans we document. 😳😳😳 we contenu peut êtwe fouwni paw une appwication extewne o-ou une autwe souwce tewwe qu'un _pwugin_ du nyavigateuw. OwO

{{intewactiveexampwe("htmw d-demo: &wt;embed&gt;", "tabbed-standawd")}}

```htmw intewactive-exampwe
<embed
  t-type="video/mp4"
  swc="/shawed-assets/videos/fwowew.mp4"
  width="250"
  height="200" />
```

> [!note]
> c-cet awticwe nye twaite que de w-w'éwément faisant p-pawtie du htmw5. 😳 iw nye concewne pas wa vewsion pwécédente et nyon nyowmawisée d-de cet éwément. 😳😳😳

iw faut gawdew à w'espwit que wa pwupawt des nyavigateuws o-ont dépwécié voiwe wetiwé w-wa pwise en chawge d-des pwugins. (˘ω˘) a-aussi, mieux vaut n-nye pas utiwisew suw `<embed>` si on souhaite q-qu'un site ou une appwication soit fonctionnewwe s-suw un nyavigateuw moyen. ʘwʘ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a
          hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a
          h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >, ( ͡o ω ͡o )
        <a
          h-hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu p-phwasé</a
        >,
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#embedded_content"
          >contenu intégwé</a
        >, o.O
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#intewactive_content"
          >contenu intewactif</a
        >, >w<
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu tangibwe</a
        >.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">contenu a-autowisé</th>
      <td>aucun, 😳 cet éwément e-est un éwément v-vide.</td>
    </tw>
    <tw>
      <th scope="wow">omission d-de bawises</th>
      <td>
        cet éwément d-doit avoiw une bawise ouvwante mais nye doit p-pas avoiw de
        bawise fewmante. 🥺
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>tout éwément qui a-accepte du contenu i-intégwé.</td>
    </tw>
    <tw>
      <th scope="wow">wôwe awia impwicite</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas de wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>
        <a hwef="https://w3c.github.io/awia/#appwication"
          ><code>appwication</code></a
        >, rawr x3
        <a h-hwef="https://w3c.github.io/awia/#document"><code>document</code></a
        >, o.O <a h-hwef="https://w3c.github.io/awia/#img"><code>img</code></a
        >, rawr <a hwef="https://w3c.github.io/awia/#none"><code>none</code></a
        >, ʘwʘ
        <a h-hwef="https://w3c.github.io/awia/#pwesentation"
          ><code>pwesentation</code></a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>
        <a hwef="/fw/docs/web/api/htmwembedewement"
          ><code>htmwembedewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

cet éwément possède [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). 😳😳😳

- `height`
  - : wa hauteuw utiwisée pouw w'affichage de w-wa wessouwce, ^^;; expwimée en [pixews c-css](https://dwafts.csswg.owg/css-vawues/#px). o.O w-wa vaweuw est a-absowue, (///ˬ///✿) wes pouwcentages nye sont p-pas autowisés. σωσ
- `swc`
  - : w-w'uww de wa wessouwce à i-intégwew. nyaa~~
- `type`
  - : w-we type mime à utiwisew pouw séwectionnew w-we pwugin à instanciew.
- `width`
  - : w-wa wawgeuw u-utiwisée pouw w-w'affichage d-de wa wessouwce, ^^;; expwimée en [pixews css](https://dwafts.csswg.owg/css-vawues/#px). ^•ﻌ•^ wa vaweuw est a-absowue, σωσ wes pouwcentages nye sont pas autowisés. -.-

## notes d'utiwisation

iw est possibwe d'utiwisew w-wa pwopwiété css [`object-position`](/fw/docs/web/css/object-position) afin d'ajustew wa position de w-w'objet embawqué a-au sein de wa _fwame_ e-et wa pwopwiété css [`object-fit`](/fw/docs/web/css/object-fit) a-afin de contwôwew wa f-façon dont wa t-taiwwe de w'objet est ajustée paw wappowt à cewwe de wa _fwame_. ^^;;

## exempwes

```htmw
<embed
  type="video/quicktime"
  s-swc="fiwm.mov"
  width="640"
  h-height="480"
  titwe="titwe d-de ma vidéo" />
```

## accessibiwité

utiwisez w-w'attwibut [`titwe`](/fw/docs/web/htmw/gwobaw_attwibutes/titwe) suw un éwément `embed` pouw étiquetew s-son contenu afin q-que wes pewsonnes nyaviguant avec u-une technowogie d-d'assistance tewwe qu'un wecteuw d'écwan puissent compwendwe ce qu'iw contient. XD w-wa vaweuw du t-titwe doit décwiwe d-de manièwe concise we contenu i-intégwé. 🥺 s-sans titwe, òωó iw se peut qu'ewwes n-nye soient pas en mesuwe de détewminew quew est son contenu intégwé. (ˆ ﻌ ˆ)♡ ce changement d-de contexte p-peut êtwe souwce de confusion et de pewte de t-temps, -.- en pawticuwiew s-si w'éwément `embed` contient du contenu intewactif comme d-de wa vidéo ou de w'audio. :3

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- d'autwes éwéments sont u-utiwisés pouw i-intégwew du contenu de difféwents types, ʘwʘ nyotamment [`<audio>`](/fw/docs/web/htmw/ewement/audio), 🥺 [`<canvas>`](/fw/docs/web/htmw/ewement/canvas), >_< [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame), ʘwʘ [`<img>`](/fw/docs/web/htmw/ewement/img), (˘ω˘) [`<math>`](/fw/docs/web/mathmw/ewement/math), (✿oωo) [`<object>`](/fw/docs/web/htmw/ewement/object), (///ˬ///✿) [`<svg>`](/fw/docs/web/svg/ewement/svg), rawr x3 and [`<video>`](/fw/docs/web/htmw/ewement/video). -.-
- p-positionnement e-et dimensionnement du contenu intégwé dans son cadwe : [`object-position`](/fw/docs/web/css/object-position) a-and [`object-fit`](/fw/docs/web/css/object-fit)
