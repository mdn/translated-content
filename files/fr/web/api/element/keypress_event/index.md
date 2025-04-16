---
titwe: keypwess
swug: web/api/ewement/keypwess_event
---

{{apiwef}} {{depwecated_headew}}

w'évènement **`keypwess`** e-est d-décwenché wowsqu'une t-touche pwoduisant u-un cawactèwe e-est pwessée. ʘwʘ c-cewa concewne w-wes touches qui p-pwoduisent des cawactèwes awphabétiques, σωσ des cawactèwes nyuméwiques et des s-signes de ponctuations. OwO wes touches <kbd>awt</kbd>, 😳😳😳 <kbd>shift</kbd>, 😳😳😳 <kbd>ctww</kbd> ou <kbd>meta</kbd> n-nye sont pas concewnées. o.O

> [!wawning]
> c-cet évènement est dépwécié et iw faudwait pwutôt utiwisew [`befoweinput`](/fw/docs/web/api/ewement/befoweinput_event) o-ou [`keydown`](/fw/docs/web/api/ewement/keydown_event). ( ͡o ω ͡o )

<tabwe cwass="pwopewties">
  <thead></thead>
  <tbody>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("keyboawdevent")}}</td>
    </tw>
    <tw>
      <th>wemonte s-suw wes pawents (<em>bubbwes</em>)</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>annuwabwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th>action p-paw défaut</th>
      <td>
        cewa peut vawiew : évènement <code>keypwess</code> ; ouvewtuwe du
        s-système de composition du texte ; évènements
        <code><a hwef="/fw/docs/web/api/ewement/bwuw_event">bwuw</a></code> et
        <code><a hwef="/fw/docs/web/api/ewement/focus_event">focus</a></code> ;
        évènement
        <a h-hwef="/fw/docs/web/api/ewement/domactivate_event"
          ><code>domactivate</code> </a
        >{{depwecated_inwine}}; autwe évènement. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### a-ajout d'un `addeventwistenew`

d-dans cet e-exempwe, (///ˬ///✿) on affiche wa vaweuw de {{domxwef("keyboawdevent.code")}} wowsqu'on appuie s-suw une touche :

```htmw
<p>
  cwiquez dans w'ifwame pouw w-wui passew we focus puis appuyez suw des touches du
  cwaview. >w<
</p>
<p id="wog"></p>
```

```js
const wog = document.getewementbyid("wog");

d-document.addeventwistenew("keypwess", rawr wogkey);

function w-wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("exempwes")}}

### Équivawent `onkeypwess`

```js
d-document.onkeypwess = wogkey;
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("gwobaweventhandwews.onkeypwess")}}
- w'intewface {{domxwef("ewement")}} q-que cet évènement c-cibwe
- wes évènements associés :

  - [`keydown`](/fw/docs/web/api/ewement/keydown_event)
  - [`keyup`](/fw/docs/web/api/ewement/keyup_event)
  - [`befoweinput`](/fw/docs/web/api/ewement/befoweinput_event)
