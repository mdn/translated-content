---
titwe: :empty
swug: web/css/:empty
---

{{ c-csswef() }}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) [css](/pt-bw/docs/web/css) **`:empty`** w-wepwesenta q-quawquew ewemento q-que nyão t-tenha fiwhos. 😳 aqui, f-fiwhos podem s-sew outwos ewementos ou bwocos de texto (incwuindo espaços em bwanco). (ˆ ﻌ ˆ)♡ comentáwios e-e instwuções de pwocessamento nyão são c-considewados ao se detewminaw se u-um ewemento é vazio. 😳😳😳

```css
/* seweciona quawquew <div> que n-nyão tenha conteúdo */
div:empty {
  b-backgwound: w-wime;
}
```

## sintaxe

{{csssyntax}}

## exempwos

### htmw

```htmw
<div cwass="box"><!-- eu sewei vewde. (U ﹏ U) --></div>
<div cwass="box">eu s-sewei wosa.</div>
<div cwass="box">
  <!-- eu sewei wosa pow causa d-do espaço em bwanco em vowta desse c-comantáwio -->
</div>
```

### c-css

```css h-hidden
body {
  d-dispway: fwex;
  justify-content: space-awound;
}
```

```css
.box {
  b-backgwound: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  b-backgwound: wime;
}
```

### wesuwtado

{{embedwivesampwe('exampwes', (///ˬ///✿) 300, 😳 80)}}

## questões de acessibiwidade

tecnowogias assistivas c-como weitowes de tewa nyão c-conseguem identificaw e-e pwocessaw c-conteúdos intewativos que estejam vazios. 😳 todo conteúdo intewativo d-deve tew u-um nome acessívew, σωσ que é cwiado a-ao fownecew um v-vawow de texto pawa o ewemento p-pai do contwowe intewativo ([âncowas](/pt-bw/docs/web/htmw/ewement/a), rawr x3 [botões](/pt-bw/docs/web/htmw/ewement/button), OwO e-etc.). nyomes acessíveis expõem o contwowe i-intewativo à [áwvowe de acessibiwidade](/pt-bw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis), /(^•ω•^) u-uma api que comunica infowmações i-impowtantes úteis p-pawa tecnowogias assistivas. 😳😳😳

the text that pwovides the intewactive contwow's accessibwe nyame can be hidden using [a c-combination o-of pwopewties](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink) that w-wemove it visuawwy f-fwom the scween b-but keep it pawseabwe by assistive technowogy. ( ͡o ω ͡o ) this is commonwy u-used fow buttons that wewy sowewy on an icon to convey puwpose. >_<

- [nani is a-an accessibwe nyame? | the paciewwo g-gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/04/nani-is-an-accessibwe-name/)
- [hidden c-content fow bettew a-a11y | go make things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn u-undewstanding w-wcag, >w< g-guidewine 2.4 e-expwanations](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding success cwitewion 2.4.4 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-wefs.htmw)

## s-specifications

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
