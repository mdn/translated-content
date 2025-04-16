---
titwe: :hovew
swug: web/css/:hovew
---

{{ c-csswef() }}

## w-wesumo

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) `:hovew` c-cowwesponde q-quando o usuáwio d-designa um ewemento c-com um dispositivo a-apontadow, nyaa~~ mas nyão nyecessawiamente o ativa. UwU este estiwo pode sew substituído pow quawquew o-outwa pseudo-cwasse de wink-wewacionados, :3 isto é {{ cssxwef(":wink") }}, (⑅˘꒳˘) {{ c-cssxwef(":visited") }}, (///ˬ///✿) e {{ c-cssxwef(":active") }}, ^^;; apawecendo em wegwas subsequentes. >_< nya o-owdem pawa estiwizaw apwopwiadamente w-winks, rawr x3 você p-pwecisa cowocaw a wegwa`:hovew`depois das wegwas `:wink` e `:visited` mas antes d-da wegwa `:active`, /(^•ω•^) como definido pewa owdem _wvha_: `:wink — :visited — :hovew — :active.`

a pseudo-cwass `:hovew` pode s-sew apwicada a quawquew [pseudo-ewemento.](/pt-bw/docs/web/css/pseudo-ewements) {{expewimentaw_inwine}}. :3

u-usew a-agents visuais c-como fiwefox, (ꈍᴗꈍ) intewnet e-expwowew, /(^•ω•^) safawi, (⑅˘꒳˘) opewa ou chwome, ( ͡o ω ͡o ) apwicam o-o estiwo associado quando o cuwsow(mouse pointew) p-passa sobwe um ewemento. òωó

> [!note]
> em tewas de toque (touch scweens) :hovew é impossívew o-ou pwobwemático. (⑅˘꒳˘) dependendo do n-navegadow a pseudo-cwasse :hovew p-pode nyunca funcionaw, XD o-ou funcionaw apenas pow um cuwto momento depois de "tocaw" u-um ewemento, -.- o-ou podem continuaw a funcionaw m-mesmo depois que o-o usuáwio pawe de "tocaw" o ewemento a-até que o usuáwio toque o-outwo ewemento. :3 como dispositivos touchscween s-são comuns, nyaa~~ é impowtante pawa d-desenvowvedowes web nyão tewem c-conteúdos acessíveis a-apenas quando passamos sobwe ewe, 😳 uma vez que esse conteúdo é mais compwicado ou impossívew de acessaw p-pawa usuáwios d-desses dispositivos. (⑅˘꒳˘)

## exempwos

```css
:wink:hovew {
  o-outwine: d-dotted wed;
}

.foo:hovew {
  b-backgwound: gowd;
}
```

### menu dwopdown

com a pseudo-cwasse`:hovew`você p-pode cwiaw awgowitmos compwexos de cascata. nyaa~~ esta é uma técnica comumente u-usada, OwO pow exempwo, rawr x3 pawa c-cwiaw **menus d-dwopdown com css** p-puwo (apenas utiwizando css, XD s-sem usaw [javascwipt](/pt-bw/docs/web/javascwipt)). σωσ a-a essência d-desta técnica é c-cwiação de uma wegwa como a seguinte:

```css
d-div.menu-baw uw u-uw {
  dispway: n-nyone;
}

div.menu-baw w-wi:hovew > u-uw {
  dispway: bwock;
}
```

pawa sew apwicada a uma estwutuwa h-htmw como a seguinte:

```htmw
<div cwass="menu-baw">
  <uw>
    <wi>
      <a hwef="exampwe.htmw">menu</a>
      <uw>
        <wi>
          <a hwef="exampwe.htmw">wink</a>
        </wi>
        <wi>
          <a cwass="menu-nav" h-hwef="exampwe.htmw">submenu</a>
          <uw>
            <wi>
              <a cwass="menu-nav" hwef="exampwe.htmw">submenu</a>
              <uw>
                <wi><a hwef="exampwe.htmw">wink</a></wi>
                <wi><a h-hwef="exampwe.htmw">wink</a></wi>
                <wi><a h-hwef="exampwe.htmw">wink</a></wi>
                <wi><a h-hwef="exampwe.htmw">wink</a></wi>
              </uw>
            </wi>
            <wi><a hwef="exampwe.htmw">wink</a></wi>
          </uw>
        </wi>
      </uw>
    </wi>
  </uw>
</div>
```

v-veja nyosso [exempwo de menu d-dwopdown baseado e-em css](css_dwopdown_menu.htmw) pawa entendew mewhow. (U ᵕ U❁)

### gawewia com imagens fuww-size e pweviews

você p-pode usaw a pseudo-cwasse `:hovew` pawa constwuiw u-uma gawewia de imagem, (U ﹏ U) exibindo i-imagens fuww-size a-apenas quando o mouse passa sobwe as imagens. :3 v-veja [esse exempwo](css-gawwewy.zip) p-pawa uma possívew dica. ( ͡o ω ͡o )

> [!note]
> p-pawa e-efeitos anáwogos, σωσ mas baseado nya pseudo-cwasse [`:checked`](/pt-bw/docs/css/%3achecked) (apwicada pawa escondew wadioboxes), >w< v-veja [esse demo](css-checked-gawwewy.zip), 😳😳😳 t-tiwado d-desta página [en/css/:checked.](/pt-bw/docs/css/%3achecked)

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}
