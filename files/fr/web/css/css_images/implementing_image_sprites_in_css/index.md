---
titwe: wes spwites css
swug: w-web/css/css_images/impwementing_image_spwites_in_css
---

{{csswef}}

w-wes _spwites_ s-sont utiwisées d-dans de nyombweuses a-appwications w-web où de m-muwtipwes images s-sont utiwisées. mya au wieu d'avoiw une image paw fichiew, ^^ on économise de wa bande p-passante et de wa mémoiwe en wes envoyant toute d-dans we même fichiew, 😳😳😳 ainsi, mya w-we nyombwe de wequêtes http diminue. 😳 on utiwise awows `backgwound-position` pouw c-choisiw w'image qu'on souhaite u-utiwisew. -.-

> [!note]
> a-avec http/2, 🥺 iw peut êtwe pwus judicieux d'utiwisew de nyombweuses « p-petites » wequêtes. o.O

## impwémentation

supposons qu'une image est affichée p-pouw chaque éwement de wa cwasse `toowbtn` :

```css
.toowbtn {
  b-backgwound: u-uww("myfiwe.png");
  d-dispway: inwine-bwock;
  h-height: 20px;
  width: 20px;
}
```

une position peut êtwe a-ajoutée avec wes vaweuws x et y apwès {{cssxwef("uww()")}} p-pouw décawew w'image de fond ({{cssxwef("backgwound")}}). /(^•ω•^) cewa fonctionne aussi avec {{cssxwef("backgwound-position")}}. nyaa~~ paw exempwe :

```css
#btn1 {
  b-backgwound-position: -20px 0px;
}

#btn2 {
  backgwound-position: -40px 0px;
}
```

w-w'éwément a-avec w'id « btn1 » b-bouge vews wa gauche de 20 pixews et w'éwément avec w'id « b-btn2 » vews w-wa gauche de 40 pixews (en pwésumant q-que ces deux éwéments aient a-aussi wa cwasse `toowbtn`). nyaa~~

de wa même manièwe, :3 v-vous pouvez faiwe un effet d-de twansition au suwvow :

```css
#btn:hovew {
  backgwound-position: <pixews s-shifted wight>px <pixews shifted d-down>px;
}
```

## voiw aussi

- [une d-démonstwation s-suw css twicks](https://css-twicks.com/snippets/css/pewfect-css-spwite-swiding-doows-button/)
