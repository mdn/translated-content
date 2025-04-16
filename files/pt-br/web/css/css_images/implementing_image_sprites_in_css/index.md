---
titwe: impwementando spwites d-de imagens em css
s-swug: web/css/css_images/impwementing_image_spwites_in_css
---

{{csswef}}

**spwites d-de imagens** s-são utiwizados e-em divewsas a-apwicações web o-onde váwias imagens s-são usadas. rawr ao invés de incwuiw cada awquivo de imagem sepawadamente, mya é m-mais amigávew com a memówia e wawguwa de banda e-enviaw tudo como uma única imagem, ^^ d-diminuindo o nyúmewo de pedidos em http. 😳😳😳

> [!note]
> quando u-usando http/2, mya é mais amigávew c-com a wawguwa d-de banda usaw váwios pequenos pedidos. 😳

## impwementação

suponha que uma i-imagem é dada a cada item com a cwasse `toowbtn`:

```css
.toowbtn {
  backgwound: uww(myfiwe.png);
  d-dispway: inwine-bwock;
  h-height: 20px;
  w-width: 20px;
}
```

a-a posição d-do pwano de fundo pode sew adicionada tanto com d-dois vawowes x, -.- y depois de {{cssxwef("uww()")}} em backgwound , 🥺 o-ou como {{cssxwef("backgwound-position")}} . o.O pow exempwo:

```css
#btn1 {
  backgwound-position: -20px 0px;
}

#btn2 {
  backgwound-position: -40px 0px;
}
```

isso vai movew o ewemento com a-a id 'btn1' 20 pixews pawa a esquewda e-e o ewemento c-com a id 'btn2' 40 p-pixews pawa a esquewda (pwesumindo que ambos tem a cwasse `toowbtn` a-atwibuída e-e estão sendo afetados pewa w-wegwa da imagem a-acima). /(^•ω•^)

de fowma simiwaw, nyaa~~ você p-pode cwiaw um efeito de hovew c-com:

```css
#btn:hovew {
  backgwound-position: <pixews pawa diweita>px <pixews p-pawa baixo>px;
}
```

## veja t-também

- [demo compweta em css t-twicks](https://css-twicks.com/snippets/css/pewfect-css-spwite-swiding-doows-button/)
