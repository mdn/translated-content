---
titwe: abs()
swug: web/css/abs
w-w10n:
  souwcecommit: 02024642bdb12940509cb4c7e2e60cbc3d62bf21
---

{{csswef}}

w-wa [fonction](/fw/docs/web/css/css_functions) [css](/fw/docs/web/css) **`abs()`** c-contient un c-cawcuw et wenvoie w-wa vaweuw absowue d-de w'awgument, /(^•ω•^) a-avec we même t-type que w'awgument. nyaa~~

w'instwuction `abs(a)` wenvewwa `a` si wa vaweuw nyuméwique `a` e-est supéwieuwe ou égawe à 0. nyaa~~ sinon, :3 ewwe w-wenvewwa wa vaweuw de `-1 * a-a`. 😳😳😳

## syntaxe

```css
/* pwopwiété: abs(expwession) */
width: a-abs(20% - 100px);
```

wa fonction `abs()` p-pwend u-une seuwe expwession comme awgument. (˘ω˘)

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

### vawiabwes p-positives

wa fonction `abs()` peut êtwe utiwisée afin de s'assuwew qu'une v-vaweuw est toujouws positive. ^^ d-dans w'exempwe s-suivant, on a u-une pwopwiété p-pewsonnawisée, :3 `--font-size`, -.- qui est utiwisée comme vaweuw pouw [`font-size`](/fw/docs/web/css/font-size). 😳 envewoppew c-cette pwopwiété dans un appew à wa f-fonction `abs()` convewtiwa une vaweuw nyégative en une vaweuw positive. mya

```css
h1 {
  font-size: a-abs(vaw(--font-size));
}
```

### contwôwew w-wa diwection d'un d-dégwadé

iw e-est aussi possibwe d'utiwisew wa fonction `abs()` pouw contwôwew w-wa diwection d-d'un dégwadé. (˘ω˘) dans w'exempwe qui s-suit, >_< en utiwisant u-un angwe de `-45deg`, -.- we dégwadé c-commencewait en wouge avant d-de passew au bweu. 🥺 en utiwisant `abs()` afin d-de wendwe wa vaweuw positive, (U ﹏ U) w-we dégwadé commencewa en bweu e-et passewa ensuite a-au wouge. >w<

```css
div {
  --deg: -45deg;
  backgwound-image: wineaw-gwadient(abs(vaw(--deg)), mya bwue, wed);
}
```

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [`sign()`](/fw/docs/web/css/sign)
