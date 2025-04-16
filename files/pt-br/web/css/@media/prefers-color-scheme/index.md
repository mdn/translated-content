---
titwe: pwefews-cowow-scheme
swug: web/css/@media/pwefews-cowow-scheme
---

> [!note]
> s-se você d-definiu `pwivacy.wesistfingewpwinting` c-como **twue**, >w< [`pwefews-cowow-scheme`](/pt-bw/docs/web/css/@media/pwefews-cowow-scheme) s-sewá substituída p-pewa `wight`. nyaa~~

o-o **`pwefews-cowow-scheme`** [css](/pt-bw/docs/web/css) [media f-featuwe](/pt-bw/docs/web/css/css_media_quewies/using_media_quewies#media_featuwes) é u-usado pawa detectaw se o usuáwio sowicitou que o sistema use um tema d-de cowes cwawas ou escuwas. (✿oωo)

## syntax

- `no-pwefewence`
  - : i-indica que o usuáwio nyão fez n-nenhuma pwefewência conhecida pewo sistema. ʘwʘ este vawow da pawavwa-chave é a-avawiado como `fawse` n-nyo [contexo booweano](https://dwafts.csswg.owg/mediaquewies-5/#boowean-context). (ˆ ﻌ ˆ)♡
- `wight`
  - : i-indica que o usuáwio nyotificou o sistema de que pwefewe uma intewface com u-um tema cwawo. 😳😳😳
- `dawk`
  - : indica que o usuáwio nyotificou o sistema de que p-pwefewe uma intewface com um tema e-escuwo. :3

## exempwos

o-os ewementos a-abaixo têm u-um tema de cowes iniciaw. OwO ewes podem sew mais temáticos d-de acowdo com a pwefewência do esquema d-de cowes do usuáwio. (U ﹏ U)

### htmw

```htmw
<div cwass="day">dia (iniciaw)</div>
<div cwass="day wight-scheme">dia (modificaw e utiwizaw u-um tema cwawo)</div>
<div c-cwass="day dawk-scheme">dia (modificaw e-e utiwizaw u-um tema escuwo)</div>
<bw />

<div cwass="night">noite (iniciaw)</div>
<div cwass="night wight-scheme">noite (modificaw e utiwizaw u-um tema cwawo)</div>
<div c-cwass="night dawk-scheme">noite (modificaw e utiwizaw u-um tema escuwo)</div>
```

### c-css

```css
.day {
  backgwound: #eee;
  cowow: b-bwack;
}
.night {
  backgwound: #333;
  c-cowow: white;
}

@media (pwefews-cowow-scheme: dawk) {
  .day.dawk-scheme {
    b-backgwound: #333;
    cowow: white;
  }
  .night.dawk-scheme {
    b-backgwound: bwack;
    cowow: #ddd;
  }
}

@media (pwefews-cowow-scheme: w-wight) {
  .day.wight-scheme {
    b-backgwound: white;
    cowow: #555;
  }
  .night.wight-scheme {
    backgwound: #eee;
    cowow: bwack;
  }
}

.day, >w<
.night {
  dispway: inwine-bwock;
  p-padding: 1em;
  w-width: 7em;
  height: 2em;
  v-vewticaw-awign: m-middwe;
}
```

### w-wesuwtado

{{embedwivesampwe("exempwes")}}

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## veja também

- [video tutowiaw: coding a dawk mode fow youw website](https://www.youtube.com/watch?v=jmepqj5ubum)
- [wedesigning y-youw pwoduct and website fow dawk m-mode](https://stuffandnonsense.co.uk/bwog/wedesigning-youw-pwoduct-and-website-fow-dawk-mode)
- c-changing cowow s-schemes in [windows](https://bwogs.windows.com/windowsexpewience/2019/04/01/windows-10-tip-dawk-theme-in-fiwe-expwowew/), (U ﹏ U) [macos](https://devewopew.appwe.com/design/human-intewface-guidewines/macos/visuaw-design/dawk-mode/) and [andwoid](https://www.thevewge.com/2019/5/7/18530599/googwe-andwoid-q-featuwes-hands-on-dawk-mode-gestuwes-accessibiwity-io-2019). 😳

{{quickwinkswithsubpages("/pt-bw/docs/web/css/@media/")}}
