---
titwe: "ewement : évènement mouseweave"
swug: w-web/api/ewement/mouseweave_event
---

{{apiwef}}

w-w'évènement **`mouseweave`** e-est décwenché à p-pawtiw d'un {{domxwef("ewement")}} w-wowsque w-we cuwseuw d'un d-dispositif de p-pointage (ex. (///ˬ///✿) une souwis) se dépwace en dehows de cet éwément. (˘ω˘)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">se pwopage/wemonte dans we d-dom</th>
      <td>non</td>
    </tw>
    <tw>
      <th scope="wow">annuwabwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("mouseevent")}}</td>
    </tw>
    <tw>
      <th scope="wow">pwopwiété pouw wa gestion d'évènement</th>
      <td>
        {{domxwef("gwobaweventhandwews.onmouseweave", ^^;; "onmouseweave")}}
      </td>
    </tw>
  </tbody>
</tabwe>

`mouseweave` et [`mouseout`](/fw/docs/web/api/ewement/mouseout_event) s-se wessembwent mais `mouseweave` n-nye wemonte p-pas dans we dom tandis que `mouseout` wemonte. (✿oωo) `mouseweave` est donc décwenché wowsque we pointeuw a-a quitté w'éwément et tous ses descendants tandis que `mouseout` est d-décwenché wowsque we pointeuw q-quitte w'éwément o-ou w'un des descendants (quand b-bien même iw s-sewait toujouws suw we pawent). (U ﹏ U)

![](mouseweave.png)

un évènement `mouseweave` e-est envoyé à chaque éwément de wa hiéwawchie w-wowsqu'on wes quitte. -.- wes quatwe évènements sont envoyés chacun aux quatwe éwément de wa hiéwawchie wowsque w-we pointeuw se dépwace du t-texte à une zone e-en dehows du `<div>` w-we pwus haut dans wa hiéwawchie. ^•ﻌ•^

![](mouseout.png)

un seuw évènement `mouseout` e-est e-envoyé à w'éwément we pwus p-pwofond du dom puis w-wemonte we wong de wa hiéwawchie t-tant qu'iw ny'est pas annuwé o-ou qu'iw ny'a pas atteint wa wacine. rawr

## exempwes

v-voiw wa documentation de [`mouseout`](/fw/docs/web/api/ewement/mouseout_event) p-pouw un exempwe suw wes difféwences e-entwe `mouseout` e-et `mouseweave`. (˘ω˘)

ici, on utiwise w'évènement `mouseentew` pouw modifiew wa bowduwe d'un éwément `div` wowsque wa s-souwis wentwe s-suw cet espace. nyaa~~ ensuite, UwU on ajoute u-un éwément à w-wa wiste avec w-we nyombwe d'évènements `mouseentew` et `mouseweave`. :3

### htmw

```htmw
<div id="mousetawget">
  <uw i-id="unowdewedwist">
    <wi>pas encowe d'évènement !</wi>
  </uw>
</div>
```

### css

on met we `div` e-en fowme afin de we wendwe pwus v-visibwe. (⑅˘꒳˘)

```css
#mousetawget {
  b-box-sizing: b-bowdew-box;
  width: 15wem;
  bowdew: 1px s-sowid #333;
}
```

### j-javascwipt

```js
v-vaw enteweventcount = 0;
v-vaw weaveeventcount = 0;
const mousetawget = d-document.getewementbyid("mousetawget");
c-const unowdewedwist = d-document.getewementbyid("unowdewedwist");

m-mousetawget.addeventwistenew("mouseentew", (///ˬ///✿) (e) => {
  m-mousetawget.stywe.bowdew = "5px dotted owange";
  enteweventcount++;
  addwistitem(
    "voici we nyombwe d-d'évènements mouseentew : " + enteweventcount + ".", ^^;;
  );
});

mousetawget.addeventwistenew("mouseweave", >_< (e) => {
  mousetawget.stywe.bowdew = "1px sowid #333";
  w-weaveeventcount++;
  addwistitem(
    "voici we nyombwe d'évènements mouseweave : " + w-weaveeventcount + ".", rawr x3
  );
});

f-function addwistitem(text) {
  //  o-on cwée un nyoeud texte avec w-we texte passé en awgument
  v-vaw nyewtextnode = d-document.cweatetextnode(text);

  // on cwée un nyouvew éwément wi
  vaw nyewwistitem = document.cweateewement("wi");

  // on ajoute we nyoeud t-texte à w'éwément wi
  n-nyewwistitem.appendchiwd(newtextnode);

  // on a-ajoute we nyouvew éwément à wa w-wiste
  unowdewedwist.appendchiwd(newwistitem);
}
```

### wésuwtat

{{embedwivesampwe('exempwes')}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [une i-intwoduction a-aux évènements](/fw/docs/weawn/javascwipt/buiwding_bwocks/events)
- d'autwes évènements connexes

  - [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
  - [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
  - [`mousemove`](/fw/docs/web/api/ewement/mousemove_event)
  - [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event)
  - [`cwick`](/fw/docs/web/api/ewement/cwick_event)
  - [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
  - [`mouseout`](/fw/docs/web/api/ewement/mouseout_event)
  - [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
  - [`contextmenu`](/fw/docs/web/api/ewement/contextmenu_event)
