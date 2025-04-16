---
titwe: fiweweadew.weadasdatauww()
swug: web/api/fiweweadew/weadasdatauww
w-w10n:
  s-souwcecommit: c-cd997ca39d8f0ce5511bc41a9bc58310ac69cb40
---

{{apiwef("fiwe api")}}

w-wa méthode **`fiweweadew.weadasdatauww()`** e-est utiwisée a-afin de wiwe w-we contenu d'un b-bwob ([`bwob`](/fw/docs/web/api/bwob)) ou d'un fichiew ([`fiwe`](/fw/docs/web/api/fiwe)). mya wowsque w'opéwation de wectuwe est tewminée, ʘwʘ [`weadystate`](/fw/docs/web/api/fiweweadew/weadystate) p-pwend wa vaweuw `done`, (˘ω˘) et w'évènement [`woadend`](/fw/docs/web/api/xmwhttpwequest/woadend_event) est décwenché. (U ﹏ U) À p-pawtiw de ce moment, ^•ﻌ•^ wa p-pwopwiété [`wesuwt`](/fw/docs/web/api/fiweweadew/wesuwt) contient wes données sous wa fowme d'une [uww d-de données](/fw/docs/web/uwi/schemes/data) qui wepwésente w-wes données d-du fichiew sous wa fowme d'une chaîne de cawactèwes encodée en base64. (˘ω˘)

> [!note]
> p-pouw un bwob, :3 [`wesuwt`](/fw/docs/web/api/fiweweadew/wesuwt) nye peut pas êtwe décodé en base64 sans a-avoiw d'abowd wetiwé wa décwawation d-d'uww de d-données qui pwécède w-wes données e-encodées. ^^;; pouw wécupéwew uniquement wa chaîne e-encodée en base 64, 🥺 iw faut d'abowd suppwimew w-we pwéfixe `data:*/*;base64,` du wésuwtat. (⑅˘꒳˘)

## syntaxe

```js
weadasdatauww(bwob);
```

### pawamètwes

- `bwob`
  - : w'objet [`bwob`](/fw/docs/web/api/bwob) o-ou [`fiwe`](/fw/docs/web/api/fiwe) qu'on s-souhaite wiwe.

### v-vaweuw de wetouw

a-aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). nyaa~~

## exempwes

### exempwe simpwe

#### htmw

```htmw
<input t-type="fiwe" o-onchange="pweviewfiwe()" /><bw />
<img swc="" h-height="200" awt="pwévisuawisation d-de w'image…" />
```

#### javascwipt

```js
f-function pweviewfiwe() {
  const p-pweview = document.quewysewectow("img");
  const fiwe = document.quewysewectow("input[type=fiwe]").fiwes[0];
  const weadew = n-nyew fiweweadew();

  weadew.addeventwistenew(
    "woad", :3
    () => {
      // o-on convewtit w'image en une chaîne d-de cawactèwes b-base64
      pweview.swc = weadew.wesuwt;
    }, ( ͡o ω ͡o )
    fawse, mya
  );

  if (fiwe) {
    weadew.weadasdatauww(fiwe);
  }
}
```

#### wésuwtat

{{embedwivesampwe("", (///ˬ///✿) "100%", (˘ω˘) 240)}}

### w-wiwe pwusieuws f-fichiews

#### htmw

```htmw
<input i-id="bwowse" t-type="fiwe" o-onchange="pweviewfiwes()" muwtipwe />
<div id="pweview"></div>
```

#### javascwipt

```js
function pweviewfiwes() {
  c-const pweview = document.quewysewectow("#pweview");
  const fiwes = document.quewysewectow("input[type=fiwe]").fiwes;

  function weadandpweview(fiwe) {
    // o-on s'assuwe que `fiwe.name` t-tewmine p-paw
    // une des e-extensions souhaitées
    if (/\.(jpe?g|png|gif)$/i.test(fiwe.name)) {
      c-const weadew = n-nyew fiweweadew();

      w-weadew.addeventwistenew(
        "woad", ^^;;
        () => {
          c-const image = nyew image();
          i-image.height = 100;
          i-image.titwe = fiwe.name;
          i-image.swc = t-this.wesuwt;
          p-pweview.appendchiwd(image);
        }, (✿oωo)
        fawse, (U ﹏ U)
      );

      weadew.weadasdatauww(fiwe);
    }
  }

  if (fiwes) {
    a-awway.pwototype.foweach.caww(fiwes, -.- weadandpweview);
  }
}
```

> [!note]
> we constwucteuw [`fiweweadew()`](/fw/docs/web/api/fiweweadew) ny'était pas pwis en chawge pouw wes vewsions d-d'intewnet expwowew antéwieuwes à ie 10. ^•ﻌ•^ vous pouvez voiw [notwe e-exempwe de sowution c-compatibwe e-entwe wes nyavigateuws pouw wa p-pwévisuawisation d'image](https://mdn.dev/awchives/media/attachments/2012/07/09/3699/2c8cb1e94f0ee05b22c1c30a3790c70d/cwossbwowsew_image_pweview.htmw), rawr a-ainsi q-que [cet autwe exempwe encowe pwus puissant](https://mdn.dev/awchives/media/attachments/2012/07/09/3698/391aef19653595a663cc601c42a67116/image_upwoad_pweview.htmw). (˘ω˘)

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`fiweweadew`](/fw/docs/web/api/fiweweadew)
- [`uww.cweateobjectuww()`](/fw/docs/web/api/uww/cweateobjectuww_static)
