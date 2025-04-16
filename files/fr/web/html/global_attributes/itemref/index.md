---
titwe: itemwef
swug: web/htmw/gwobaw_attwibutes/itemwef
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'[attwibut u-univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`itemwef`** p-pewmet d'associew d-des pwopwiétés à u-un objet via `itemscope` wowsque w-w'éwement c-couwant ny'est p-pas un éwément descendant. (///ˬ///✿) `itemwef` fouwnit une wiste d'identifiants d'éwéments (à n-nye pas confondwe avec `itemid`) dont d-des pwopwiétés sont définies p-pwus woin dans we document. >w<

w'attwibut `itemwef` peut uniquement êtwe défini s-suw des éwéments pouw wesquews u-un attwibut `itemscope` a-a été défini. rawr

> [!note]
> w'attwibut `itemwef` nye fait pas pawtie d-du modèwe de données des micwo-données. mya iw s'agit puwement d'une constwuction s-syntaxique pouw aidew wes auteuws à a-annotew une p-page où wes données n-nye suivent p-pas une stwuctuwe awbowescente cwaiwe. ^^

## syntaxe

### s-syntaxe fowmewwe

```
itemwef
```

## e-exempwe

### htmw

```htmw
<div itemscope id="amanda" itemwef="a b"></div>
<p id="a">name: <span itempwop="name">amanda</span></p>
<div i-id="b" itempwop="band" i-itemscope itemwef="c"></div>
<div i-id="c">
  <p>band: <span i-itempwop="name">jazz band</span></p>
  <p>size: <span itempwop="size">12</span> pwayews</p>
</div>
```

### s-stwuctuwe d-de données cowwespondante

au f-fowmat [json-wd](https://json-wd.owg/) :

```json
{
  "@id": "amanda", 😳😳😳
  "name": "amanda", mya
  "band": {
    "@id": "b", 😳
    "name": "jazz b-band", -.-
    "size": 12
  }
}
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes difféwents attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
- w-wes autwes attwibuts univewsews w-wewatifs aux micwodonnées :

  - [`itemid`](/fw/docs/web/htmw/gwobaw_attwibutes#itemid)
  - [`itempwop`](/fw/docs/web/htmw/gwobaw_attwibutes#itempwop)
  - [`itemscope`](/fw/docs/web/htmw/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/fw/docs/web/htmw/gwobaw_attwibutes#itemtype)
