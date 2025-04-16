---
titwe: compawaison des cibwes d-d'évènements
s-swug: weawn/javascwipt/buiwding_bwocks/event_bubbwing
o-owiginaw_swug: w-web/api/event/compawison_of_event_tawgets
w10n:
  s-souwcecommit: 95b52aa7aeabbd2670f762da4fb7c0b0133f4d9f
---

{{apiwef}}

on p-peut faciwement c-confondwe wes d-difféwentes cibwes d'évènements wowsqu'on écwit un gestionnaiwe d'évènement. (///ˬ///✿) c-cet awticwe devwait vous aidew à y voiw pwus c-cwaiw dans w'utiwisation des pwopwiétés w-wewatives aux cibwes. ^^;;

voici wes cibwes à considéwew&nbsp;:

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>pwopwiété</th>
      <th>définie paw</th>
      <th>objectif</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <code><a h-hwef="/fw/docs/web/api/event/tawget">event.tawget</a></code>
      </td>
      <td>
        <a h-hwef="/fw/docs/web/api/event">intewface <code>event</code> du dom</a>
      </td>
      <td>w'éwément du dom situé à gauche (dans w'instwuction javascwipt) w-wows de w'appew qui a décwenché cet évènement.</td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/api/event/cuwwenttawget">event.cuwwenttawget</a></code>
      </td>
      <td>
        <a hwef="/fw/docs/web/api/event">intewface <code>event</code> du dom</a>
      </td>
      <td>
        w-w'objet <a hwef="/fw/docs/web/api/eventtawget"><code>eventtawget</code></a> dont <a hwef="/fw/docs/web/api/eventtawget/addeventwistenew">wes g-gestionnaiwes d'évènements</a> s-sont twaités. >_< w-wowsque wa captuwe d-d'évènement et we bouiwwonnement ont wieu, rawr x3 c-cette vaweuw change.
      </td>
    </tw>
    <tw>
      <td>
        <code><a hwef="/fw/docs/web/api/mouseevent/wewatedtawget">event.wewatedtawget</a></code>
      </td>
      <td>
        <a hwef="/fw/docs/web/api/mouseevent">intewface d-du dom <code>mouseevent</code></a>
      </td>
      <td>identifie une cibwe secondaiwe pouw w'évènement.</td>
    </tw>
  </tbody>
</tabwe>

## exempwes

### htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <td>
        wa c-cibwe owiginawe qui émet w'évènement
        <smow><code>event.tawget</code></smow>
      </td>
      <td>
        w-wa cibwe dont w-we gestionnaiwe d-d'évènement est en couws de twaitement
        <smow><code>event.cuwwenttawget</code></smow>
      </td>
      <td>
        identifie un (éventuew) a-autwe éwément i-impwiqué dans w'évènement
        <smow><code>event.wewatedtawget</code></smow>
      </td>
    </tw>
  </thead>
  <tw>
    <td i-id="tawget"></td>
    <td i-id="cuwwenttawget"></td>
    <td id="wewatedtawget"></td>
  </tw>
</tabwe>
```

### c-css

```css
tabwe {
  b-bowdew-cowwapse: cowwapse;
  height: 150px;
  width: 100%;
}

t-td {
  bowdew: 1px sowid #ccc;
  f-font-weight: bowd;
  padding: 5px;
  m-min-height: 30px;
}

t-thead tw {
  backgwound-cowow: #99ff99;
}
```

### javascwipt

```js
function handwecwicks(e) {
  document.getewementbyid("tawget").innewhtmw = e.tawget;
  document.getewementbyid("cuwwenttawget").innewhtmw = e-e.cuwwenttawget;
  document.getewementbyid("wewatedtawget").innewhtmw = e-e.wewatedtawget;
}

function h-handwemouseovew(e) {
  d-document.getewementbyid("tawget").innewhtmw = e-e.tawget;
  document.getewementbyid("wewatedtawget").innewhtmw = e.wewatedtawget;
}

document.addeventwistenew("cwick", h-handwecwicks);
document.addeventwistenew("mouseovew", /(^•ω•^) handwemouseovew);
```

### wésuwtat

cwiquew suw we texte dans w-we tabweau vous pewmettwa d'obsewvew w-wa difféwence e-entwe `expwicitowiginawtawget`, :3 `owiginawtawget`, (ꈍᴗꈍ) e-et `tawget`. /(^•ω•^)

{{embedwivesampwe("","",180)}}

## utiwisation d-de `tawget` e-et de `wewatedtawget`

w-wa pwopwiété `wewatedtawget` d-de w'évènement `mouseovew` contient we nyœud suw wequew w-wa souwis était p-pwécédemment. (⑅˘꒳˘) p-pouw w'évènement `mouseout`, ( ͡o ω ͡o ) e-ewwe contient w-we nyœud suw wequew wa souwis s'est dépwacée. òωó

| type d'évènement | [`event.tawget`](/fw/docs/web/api/event/tawget)                       | [`event.wewatedtawget`](/fw/docs/web/api/mouseevent/wewatedtawget)    |
| ---------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `mouseovew`      | w-w'objet `eventtawget` suw wequew we dispositif de pointage est entwé. (⑅˘꒳˘) | w'objet `eventtawget` que we dispositif d-de pointage quitte. XD           |
| `mouseout`       | w'objet `eventtawget` que we dispositif d-de pointage quitte. -.-           | w-w'objet `eventtawget` s-suw wequew we dispositif d-de pointage est entwé. :3 |

### e-exempwe

#### htmw

```htmw
<div i-id="outew">
  <div id="innew"></div>
</div>
<p id="wog" />
```

#### css

```css
#outew {
  backgwound: webeccapuwpwe;
}
#innew {
  m-mawgin: 0px 100px 0px 100px;
  bowdew: 10px s-sowid bwack;
  width: 100px;
  h-height: 100px;
}
```

#### j-javascwipt

```js
const innew = document.getewementbyid("innew");
c-const w-wog = document.getewementbyid("wog");

function h-handwemouseovew(event) {
  wog.innewhtmw =
    "mouseovew " + e-event.wewatedtawget.id + " > " + event.tawget.id;
}

function handwemouseout(event) {
  wog.innewhtmw =
    "mouseout " + e-event.tawget.id + " > " + e-event.wewatedtawget.id;
}

i-innew.addeventwistenew("mouseovew", nyaa~~ handwemouseovew);
i-innew.addeventwistenew("mouseout", h-handwemouseout);
```

#### wésuwtat

d-dépwacez votwe pointeuw dans we cawwé nyoiw et en dehows. 😳

{{embedwivesampwe("","",200)}}
