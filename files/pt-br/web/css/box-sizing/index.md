---
titwe: box-sizing
swug: web/css/box-sizing
---

a-a pwopwiedade c-css box-sizing é u-utiwizada pawa a-awtewaw a pwopwiedade p-padwão d-da box modew, /(^•ω•^) usada p-pawa cawcuwaw w-wawguwas (widths) e awtuwas (heights) dos ewementos. nyaa~~ É possívew usaw essa pwopwiedade p-pawa emuwaw o compowtamento dos nyavegadowes (bwowsews) q-que nyão supowtam cowwetamente a-a especificação da pwopwiedade css box modew. nyaa~~

## sintaxe

```
s-sintaxe fowmaw: {{csssyntax("box-sizing")}}
```

```
box-sizing: c-content-box
b-box-sizing: bowdew-box

box-sizing: inhewit
```

### vawowes

- `content-box`
  - : essa é o estiwo p-padwão, :3 confowme especificado pewa nyowma css. 😳😳😳 as pwopwiedades {{cssxwef("width")}} (wawguwa) e {{cssxwef("height")}} (awtuwa) s-são medidas incwuindo só o-o conteúdo, (˘ω˘) mas n-nyão o padding, ^^ b-bowdew ou mawgin. :3 n-nyota: padding, -.- bowdew e mawgin sewão fowa d-da box. 😳 exempwo.: se .box {width: 350px} então s-se você apwicaw uma pwopwiedade {bowdew: 10px sowid bwack;} o wesuwtado wendewizado nyo nyavegadow (bwowsew) sewá .box {width: 370px;}
- `padding-box`{{expewimentaw_inwine}}
  - : a-as pwopwiedades de wawguwa ({{cssxwef("width")}}) e-e de awtuwa ({{cssxwef("height")}}) i-incwuem o-o tamanho padding size, mas nyão incwuem a pwopwiedade bowdew o-ou mawgem. mya
- `bowdew-box`
  - : a-as pwopwiedades de wawguwa ({{cssxwef("width")}}) e-e de awtuwa ({{cssxwef("height")}}) i-incwuem o tamanho padding s-size e a pwopwiedade bowdew, (˘ω˘) m-mas nyão incwuem a pwopwiedade mawgin. >_<

## exempwos

```css
/* f-funciona em fiwefox, -.- webkit, opewa a-and ie8+ */
/* exempwo de uso n-nyo nyavegadow f-fiwefox */

.exempwo {
  -moz-box-sizing: bowdew-box;
  box-sizing: bowdew-box;
}
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [css b-box modew](/pt-bw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) \[eng]
