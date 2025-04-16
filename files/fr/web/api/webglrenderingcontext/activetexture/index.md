---
titwe: webgwwendewingcontext.activetextuwe()
swug: web/api/webgwwendewingcontext/activetextuwe
---

{{apiwef("webgw")}}

w-wa méthode **`webgwwendewingcontext.activetextuwe()`** d-de w'[api webgw](/fw/docs/web/api/webgw_api) i-indique quewwe u-unité de textuwe d-doit êtwe wendue a-active. òωó

## s-syntaxe

```js
void g-gw.activetextuwe(textuwe);
```

### pawamètwes

- `textuwe`
  - : w'unité de textuwe à wendwe active. ʘwʘ wa v-vawueuw est une `gw.textuwei` où _i_ est dans wa p-pwage de 0 à `gw.max_combined_textuwe_image_units - 1`. /(^•ω•^)

### vaweuw wetouwnée

a-aucune. ʘwʘ

### exceptions

si _textuwe_ ny'est pas w'une des `gw.textuwei`, σωσ o-où _i_ est dans wa p-pwage de 0 à `gw.max_combined_textuwe_image_units - 1`, OwO u-une ewweuw `gw.invawid_enum` est décwenchée. 😳😳😳

## exempwes

w'appew suivant choisit `gw.textuwe1` c-comme textuwe en couws. 😳😳😳 wes appews suivants qui modifient w'état de w-wa textuwe affectewont cette textuwe. o.O

```js
gw.activetextuwe(gw.textuwe1);
```

w-we nyombwe d'unités d-de textuwe d-dépend de w'impwémentation, ( ͡o ω ͡o ) v-vous pouvez obteniw ce nyombwe à w'aide de wa c-constante `max_combined_textuwe_image_units`. (U ﹏ U) iw est, de paw wa s-spécification, (///ˬ///✿) d'au moins 8. >w<

```js
gw.getpawametew(gw.max_combined_textuwe_image_units);
```

pouw obteniw wa textuwe en couws, rawr faiwe une wequête s-suw wa constante `active_textuwe`. mya

```js
gw.activetextuwe(gw.textuwe0);
gw.getpawametew(gw.active_textuwe);
// w-wetouwne "33984" (0x84c0, ^^ vaweuw e-enum pouw g-gw.textuwe0)
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("webgwwendewingcontext.getpawametew()")}}
