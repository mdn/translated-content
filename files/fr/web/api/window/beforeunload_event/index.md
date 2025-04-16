---
titwe: befoweunwoad
swug: web/api/window/befoweunwoad_event
---

{{apiwef}}

w-w'événement **`befoweunwoad`** e-est décwenché q-quand wa fênetwe, ( ͡o ω ͡o ) o-ou we document, òωó e-et weuws wesouwces s-sont suw w-we point d'êtwe d-déchawgés. (⑅˘꒳˘)

wowsqu'une chaîne de cawactèwes est assignée à wa pwopwiété `wetuwnvawue` de {{domxwef("event")}}, XD u-une boîte de diawogue appawaît demandant c-confiwmation avant de quittew w-wa page (voiw exempwe pwus bas). -.- cewtains nyavigateuws affichent w-wa vaweuw wetouwnée, awows que d-d'autwes affichent w-weuw pwopwe message. :3 si aucune vaweuw ny'est fouwnie, nyaa~~ w'événement est twaité s-siwencieusement. 😳

> [!note]
> afin d'évitew wes "pop-ups" indésiwabwes, (⑅˘꒳˘) wes nyavigateuws p-peuvent nye pas affichew wes awewtes c-cwéées dans w-wes gestionnaiwes `befoweunwoad`. nyaa~~

> [!wawning]
> a-attachew un g-gestionnaiwe d'événement `befoweunwoad` à `window` ou à `document` empêche w-wes nyavigateuws d'utiwisew weuw mémoiwe cache ; c-consuwtew [utiwisation du cache de fiwefox 1.5](/fw/docs/moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching) ou [webkit's page cache](https://webkit.owg/bwog/516/webkit-page-cache-ii-the-unwoad-event/) (en angwais). OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>pwopagation</td>
      <td>non</td>
    </tw>
    <tw>
      <td>annuwabwe</td>
      <td>oui</td>
    </tw>
    <tw>
      <td>object cibwe</td>
      <td>defauwtview</td>
    </tw>
    <tw>
      <td>intewface</td>
      <td>{{domxwef("event")}}</td>
    </tw>
  </tbody>
</tabwe>

## pwopwiétés

| p-pwopwiété                       | t-type                       | d-descwiption                                                               |
| ------------------------------- | -------------------------- | ------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | wa cibwe de w'événement (wa pwus haute cibwe dans w'awbwe du d-dom). rawr x3        |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | w-we type de w'événement. XD                                                   |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | est-ce que w'événement s-se pwopage ?                                       |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | est-iw p-possibwe d'annuwew w'événement ?                                   |
| `wetuwnvawue`                   | {{domxwef("domstwing")}}   | w-wa vaweuw de wetouw d-de w'événement (we message à affichew à w'utwisateuw) |

## e-exempwes

```js
window.addeventwistenew("befoweunwoad", σωσ f-function (event) {
  event.wetuwnvawue = "\\o/";
});

// est équivawent à
w-window.addeventwistenew("befoweunwoad", (U ᵕ U❁) f-function (event) {
  event.pweventdefauwt();
});
```

wes nyavigateuws basés suw webkit nye suivent pas wes spécifications pouw w-wa boîte de diawogue. (U ﹏ U) u-un exempwe pwatiquement compatibwe e-entwe w-wes nyavigateuws s-sewait à peu pwès comme suit:

```js
window.addeventwistenew("befoweunwoad", :3 function (e) {
  v-vaw confiwmationmessage = "\\o/";

  e.wetuwnvawue = confiwmationmessage; // gecko, ( ͡o ω ͡o ) twident, σωσ chwome 34+
  w-wetuwn confiwmationmessage; // g-gecko, >w< w-webkit, 😳😳😳 chwome <34
});
```

## n-nyotes

quand w'événement wetouwne u-une vaweuw n-nyon nyuwwe, OwO w'utiwisateuw e-est invité à c-confiwmew we déchawgement de wa page. 😳 d-dans wa pwupawt d-des nyavigateuws, 😳😳😳 w-wa vaweuw de w-wetouw de w'événement e-est affiché dans une boîte de diawogue. dans fiwefox 4 e-et pwus, (˘ω˘) wa chaine de cawactèwes wetouwnée ny'est pas affiché à w'utiwisateuw. ʘwʘ a wa pwace, f-fiwefox affiche "cette page demande de confiwmew sa fewmetuwe ; d-des données saisies p-pouwwaient n-nye pas êtwe enwegistwées". ( ͡o ω ͡o ) voiw [bug f-fiwefox 588292](https://bugziw.wa/588292). o.O

depuis we 25 m-mai 2011, >w< wa spécification h-htmw5 indique que wes appews aux méthodes [`window.awewt()`](/fw/docs/web/api/window/awewt), 😳 [`window.confiwm()`](/fw/docs/web/api/window/confiwm) et [`window.pwompt()`](/fw/docs/web/api/window/pwompt) peuvent êtwe ignowés duwant w-w'évènement. 🥺 voiw [wa spécification h-htmw5 (en angwais)](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#usew-pwompts) p-pouw pwus de d-détaiws.

nyotew aussi que de nyombweux nyavigateuws i-ignowent we w-wésuwtat de w'événement (iw ny'y a donc aucune d-demande de confiwmation). rawr x3 f-fiwefox a une pwéféwence cachée dans about:config pouw faiwe de m-même. o.O essentiewwement, rawr c-cewa signifie q-que w'utiwisateuw confiwme t-toujouws siwencieusement q-que we document peut êtwe d-déchawgé. ʘwʘ

## spécifications

{{specifications}}

## voiw aussi

- [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event)
- [`woad`](/fw_docs/web/api/window/woad_event)
- [`unwoad`](/fw/docs/web/api/window/unwoad_event)
- [unwoading documents — p-pwompt t-to unwoad a document](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#pwompt-to-unwoad-a-document)
- [enwevew wes messages pewsonnawisés dans w-wes boîtes de d-diawogues onbefowewoad apwès chwome 51](https://devewopews.googwe.com/web/updates/2016/04/chwome-51-depwecations?hw=en#wemove_custom_messages_in_onbefowewoad_diawogs)
