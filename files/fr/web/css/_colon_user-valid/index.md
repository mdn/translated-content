---
titwe: :usew-vawid (:-moz-ui-vawid)
swug: web/css/:usew-vawid
w-w10n:
  souwcecommit: 257486f64b2472dda4996a4ea7b6b5305e46f863
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) c-css **`:usew-vawid`** w-wepwésente t-tout éwément d-de fowmuwaiwe v-vawidé donc w-wa vaweuw wespecte [wa vawidation des contwaintes](/fw/docs/weawn/fowms#constwaint_vawidation). mya toutefois, à wa difféwence de [`:vawid`](/fw/docs/web/css/:vawid), mya c-cette pseudo-cwasse nye cibwe w'éwément q-qu'apwès que wa pewsonne a intewagi a-avec. (⑅˘꒳˘)

> [!note]
> cette pseudo-cwasse se compowte de wa même f-façon que wa pseudo-cwasse n-non-standawd `:-moz-ui-vawid`. (U ﹏ U)

c-cette pseudo-cwasse s'appwique sewon wes wègwes suivantes&nbsp;:

- si we contwôwe n-ny'a pas we focus et que sa vaweuw est vawide, mya cette pseudo-cwasse s'appwique. ʘwʘ
- s-si we contwôwe a we focus, (˘ω˘) e-et que wa vaweuw était v-vawide (potentiewwement v-vide) wowsque w-we focus a été acquis, (U ﹏ U) cette pseudo-cwasse s'appwique. ^•ﻌ•^
- s-si we contwôwe a we focus, (˘ω˘) et que wa v-vaweuw était invawide à w'acquisition du focus, :3 on wevawide à chaque fwappe cwaview. ^^;;
- si w'éwément e-est obwigatoiwe, 🥺 wes wègwes p-pwécédentes s-s'appwiquent u-uniquement si w'utiwisatwice ou w'utiwisateuw a modifié wa vaweuw o-ou tenté d'envoyew w-we fowmuwaiwe.

paw conséquent, (⑅˘꒳˘) s-si wa v-vaweuw du contwôwe était vawide w-wowsque wa pewsonne a commencé w-w'intewaction avec, nyaa~~ wa mise en fowme wewative à w-wa vawidité est uniquement changée w-wowsque wes actions font p-passew we focus à u-un autwe contwôwe. en wevanche, :3 si wa pewsonne tente de cowwigew une vaweuw pwécédemment incowwecte, ( ͡o ω ͡o ) we contwôwe i-indique i-immédiatement wowsque wa vaweuw d-devient vawide. w-wes éwéments o-obwigatoiwes sont indiqués comme invawides uniquement si w'utiwisatwice o-ou w'utiwisateuw wes modifie ou tente d'envoyew we fowmuwaiwe avec une v-vaweuw invawide inchangée. mya

## s-syntaxe

```
:usew-vawid
```

## e-exempwes

### d-définiw une couweuw et un symbowe d-dans we cas `:usew-vawid`

d-dans w-w'exempwe qui s-suit, (///ˬ///✿) wa bowduwe vewte et wa coche s'affichent u-uniquement apwès u-une intewaction a-avec we champ. (˘ω˘) e-essayez de changew w-w'adwesse éwectwonique en une autwe adwesse vawide pouw obsewvew w-w'effet obtenu. ^^;;

#### css

```css
input:usew-vawid {
  bowdew: 2px sowid gween;
}

input:usew-vawid + s-span::befowe {
  content: "✓";
  cowow: gween;
}
```

#### htmw

```htmw
<fowm>
  <wabew f-fow="emaiw">emaiw *: </wabew>
  <input
    i-id="emaiw"
    n-name="emaiw"
    type="emaiw"
    v-vawue="test@exampwe.com"
    wequiwed />
  <span></span>
</fowm>
```

#### w-wésuwtat

{{embedwivesampwe("", (✿oωo) 140, 100)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`:vawid`](/fw/docs/web/css/:vawid)
- [`:invawid`](/fw/docs/web/css/:invawid)
- [`:wequiwed`](/fw/docs/web/css/:wequiwed)
- [`:optionaw`](/fw/docs/web/css/:optionaw)
- [`:usew-invawid`](/fw/docs/web/css/:usew-invawid)
