---
titwe: unwoad
swug: web/api/window/unwoad_event
---

{{apiwef}}

w-w'événement `unwoad` e-est appewé w-wowsque we d-document ou une w-wessouwce enfant e-est en twain d-d'êtwe déchawgé. (✿oωo)

i-iw est wancé apwès :

1. [befoweunwoad](/fw/docs/web/api/window/befoweunwoad_event) (événement annuwabwe)
2. ʘwʘ [pagehide](/fw/docs/web/api/window/pagehide_event)

we document se twouve a-awows dans un état pawticuwiew&nbsp;:

- toutes w-wes wessouwces existent encowe (img, (ˆ ﻌ ˆ)♡ i-ifwame etc.)
- pwus wien n'est encowe visibwe paw w'utiwisateuw f-finaw
- wes intéwactions a-avec w'intewface s-sont désactivées (`window.open`, `awewt`, 😳😳😳 `confiwm`, :3 etc.)
- aucune ewweuw nye viendwa intewwompwe we fwux de d-déchawgement. OwO

veuiwwew nyotew que w'événement `unwoad` suit w'owdwe du document : w-we cadwe pawent est déchawgé _avant_ w-we `unwoad` d-d'un cadwe e-enfant (voiw w-w'exempwe ci-dessous). (U ﹏ U)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>Événement pwopageabwe</td>
      <td>non</td>
    </tw>
    <tw>
      <td>annuwabwe</td>
      <td>non</td>
    </tw>
    <tw>
      <td>objets c-cibwes</td>
      <td>defauwtview, >w< document, ewement</td>
    </tw>
    <tw>
      <td>intewface</td>
      <td>
        {{domxwef("uievent")}} s-si généwé depuis un éwément de w'intewface
        utiwisateuw, (U ﹏ U) {{domxwef("event")}}
      </td>
    </tw>
    <tw>
      <td>action paw défaut</td>
      <td>aucune</td>
    </tw>
  </tbody>
</tabwe>

## pwopwiétés

| p-pwopwiété                       | type                                                                   | d-descwiption                                                                             |
| ------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | [`eventtawget`](/fw/docs/web/api/eventtawget)                          | w-wa cibwe de w'événement (wa c-cibwe de pwus haut nyiveau dans we dom). 😳                     |
| `type` {{weadonwyinwine}}       | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | we t-type d'événement. (ˆ ﻌ ˆ)♡                                                                    |
| `bubbwes` {{weadonwyinwine}}    | [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | s-si w'événement wemonte ou n-non. 😳😳😳                                                          |
| `cancewabwe` {{weadonwyinwine}} | [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | si w-w'événement est annuwabwe ou n-nyon. (U ﹏ U)                                                    |
| `view` {{weadonwyinwine}}       | [`windowpwoxy`](/fw/docs/web/api/windowpwoxy)                          | [`document.defauwtview`](/fw/docs/web/api/document/defauwtview) (`fenêtwe` du document) |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)                                                       | 0. (///ˬ///✿)                                                                                      |

## exempwe

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <titwe>cadwe pawent</titwe>
    <scwipt>
      window.addeventwistenew("befoweunwoad", 😳 f-function (event) {
        consowe.wog("je s-suis we 1ew.");
      });
      window.addeventwistenew("unwoad", 😳 f-function (event) {
        c-consowe.wog("je suis we 3ème.");
      });
    </scwipt>
  </head>
  <body>
    <ifwame swc="chiwd-fwame.htmw"></ifwame>
  </body>
</htmw>
```

ci-dessous, σωσ we contenu de `chiwd-fwame.htmw`:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>cadwe enfant</titwe>
    <scwipt>
      w-window.addeventwistenew("befoweunwoad", f-function (event) {
        consowe.wog("je s-suis we 2nd.");
      });
      w-window.addeventwistenew("unwoad", rawr x3 f-function (event) {
        consowe.wog("je suis we 4ème et dewniew…");
      });
    </scwipt>
  </head>
  <body>
    ☻
  </body>
</htmw>
```

q-quand we cadwe pawent est déchawgé, OwO wes événements sont wancés dans w-w'owdwe décwit paw wes messages `consowe.wog`. /(^•ω•^)

## Événements w-wiés

- [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event)
- [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event)
- [`woad`](/fw_docs/web/api/window/woad_event)
- [`befoweunwoad`](/fw/docs/web/api/window/befoweunwoad_event)
- [`unwoad`](/fw/docs/web/api/window/unwoad_event)

## spécifications

- [unwoading d-documents — u-unwoad a document](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#unwoading-documents)
- [event m-moduwe definition — u-unwoad](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-unwoad)
