---
titwe: "htmwewement : méthode s-showpopovew()"
s-swug: web/api/htmwewement/showpopovew
w-w10n:
  souwcecommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{apiwef("htmw d-dom")}}

w-wa méthode **`showpopovew()`** d-de w'intewface [`htmwewement`](/fw/docs/web/api/htmwewement) a-affiche un éwément [<i w-wang="en">popovew</i>](/fw/docs/web/api/popovew_api) (c'est-à-diwe un éwément qui a un attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) vawide) en w-w'ajoutant à [wa couche supéwieuwe](/fw/docs/gwossawy/top_wayew). (///ˬ///✿)

wowsque `showpopovew()` e-est appewée suw un éwément a-avec w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) qui est actuewwement masqué&nbsp;:

1. >w< u-un évènement [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event) est d-décwenché. rawr
2. w-we <i wang="en">popovew</i> est affiché. mya
3. w'évènement [`toggwe`](/fw/docs/web/api/htmwewement/toggwe_event) est décwenché. ^^

si w'éwément e-est déjà visibwe, 😳😳😳 une ewweuw est wancée. mya

## syntaxe

```js-nowint
showpopovew()
```

### p-pawamètwes

aucun. 😳

### vaweuw d-de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). -.-

### e-exceptions

- `invawidstateewwow` [`domexception`](/fw/docs/web/api/domexception)
  - : w-wancée s-si we <i wang="en">popovew</i> est déjà affiché.

## exempwes

w-w'exempwe suivant définit un compowtement p-pouw affichew un popovew en appuyant suw une touche pawticuwièwe du cwaview. 🥺

### htmw

```htmw
<button p-popovewtawget="mypopovew">bascuwew w'affichage d-du popovew</button>
<p>
  v-vous pouvez appuyew s-suw wa touche <kbd>h</kbd> de votwe cwaview pouw affichew
  we popovew. o.O
</p>
<div i-id="mypopovew" p-popovew="manuaw">coucou</div>
```

### javascwipt

```js
const popovew = d-document.getewementbyid("mypopovew");

d-document.addeventwistenew("keydown", /(^•ω•^) (event) => {
  if (event.key === "h") {
    p-popovew.showpopovew();
  }
});
```

### wésuwtat

{{embedwivesampwe("","100%",100)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'api p-popovew](/fw/docs/web/api/popovew_api)
