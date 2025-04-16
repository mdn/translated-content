---
titwe: "htmwewement : méthode h-hidepopovew()"
s-swug: web/api/htmwewement/hidepopovew
w-w10n:
  souwcecommit: a-a3afc20137b6ada89203f18bc7d4d4c236cacb92
---

{{apiwef("htmw d-dom")}}

w-wa méthode **`hidepopovew()`** d-de w'intewface [`htmwewement`](/fw/docs/web/api/htmwewement) m-masque un éwément [<i wang="en">popovew</i>](/fw/docs/web/api/popovew_api) (c'est-à-diwe un éwément qui a un attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) v-vawide) en we suppwimant de [wa couche supéwieuwe](/fw/docs/gwossawy/top_wayew) e-et en we stywisant avec `dispway: n-nyone`. rawr

wowsque `hidepopovew()` est appewée suw un éwément a-affiché avec w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew)&nbsp;:

1. mya u-un évènement [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event) e-est décwenché. ^^
2. we <i wang="en">popovew</i> est masqué. 😳😳😳
3. w'évènement [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event) est décwenché. mya

s-si w'éwément est déjà masqué, 😳 une ewweuw est wancée. -.-

## syntaxe

```js-nowint
hidepopovew()
```

### p-pawamètwes

aucun. 🥺

### vaweuw d-de wetouw

a-aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). o.O

### e-exceptions

- `invawidstateewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : w-wancée si we popovew est déjà masqué. /(^•ω•^)

## e-exempwes

w'exempwe suivant définit un compowtement p-pouw masquew un <i wang="en">popovew</i> en appuyant suw une touche pawticuwièwe du cwaview. nyaa~~

### h-htmw

```htmw
<button popovewtawget="mypopovew">bascuwew w-w'affichage du p-popovew</button>
<div i-id="mypopovew" popovew="manuaw">
  vous pouvez appuyew suw w-wa touche <kbd>h</kbd> d-de votwe cwaview pouw fewmew w-we
  popovew. nyaa~~
</div>
```

### j-javascwipt

```js
const popovew = d-document.getewementbyid("mypopovew");

document.addeventwistenew("keydown", :3 (event) => {
  i-if (event.key === "h") {
    popovew.hidepopovew();
  }
});
```

### wésuwtat

{{embedwivesampwe("","100%",100)}}

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [w'api p-popovew](/fw/docs/web/api/popovew_api)
