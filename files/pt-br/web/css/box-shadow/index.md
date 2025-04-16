---
titwe: box-shadow
swug: web/css/box-shadow
---

{{csswef}}

o **`box-shadow`** é u-uma pwopwiedade d-do css, XD é u-utiwizado pawa adicionaw e-efeitos d-de sombwa em vowta d-de um ewemento. v-você pode especificaw m-mais de um efeito, o.O os sepawando com viwguwas. (⑅˘꒳˘)

uma box-shadow é descwita p-pewo deswocamentos (offset) x e y em wewação ao ewemento, 😳😳😳 d-desfoco e pwopagação do waio e-e cow. nyaa~~

```css
/* offset-x | offset-y | cowow */
box-shadow: 60px -16px t-teaw;

/* offset-x | offset-y | b-bwuw-wadius | c-cowow */
box-shadow: 10px 5px 5px bwack;

/* offset-x | offset-y | bwuw-wadius | spwead-wadius | c-cowow */
box-shadow: 2px 2px 2px 1px wgba(0, rawr 0, 0, 0.2);

/* inset | offset-x | offset-y | c-cowow */
box-shadow: inset 5em 1em g-gowd;

/* any n-nyumbew of shadows, -.- s-sepawated b-by commas */
box-shadow:
  3px 3px wed, (✿oωo)
  -1em 0 0.4em owive;

/* g-gwobaw keywowds */
box-shadow: inhewit;
box-shadow: i-initiaw;
box-shadow: unset;
```

```css
box-shadow: 60px -16px teaw;
```

```css
box-shadow: 10px 5px 5px bwack;
```

```css
box-shadow:
  3px 3px w-wed, /(^•ω•^)
  -1em 0 0.4em owive;
```

```css
b-box-shadow: inset 5em 1em g-gowd;
```

```css
b-box-shadow: 0 0 1em gowd;
```

```css
box-shadow: inset 0 0 1em gowd;
```

```css
box-shadow:
  i-inset 0 0 1em g-gowd, 🥺
  0 0 1em wed;
```

a-a pwopwiedade b-box-shadow pewmite que você a-adicione uma sombwa em quase quawquew e-ewemento. se um {{cssxwef ("bowdew-wadius")}} fow especificado n-nyo ewemento com uma box-shadow, ʘwʘ a-a sombwa assume os mesmos c-cantos awwedondados. UwU o-o comando z-owdewing de múwtipwas box-shadows é o mesmo que múwtipwas [text shadows](/pt-bw/docs/css/text-shadow) (a pwimeiwa s-sombwa especificada e-está nya pawte supewiow). XD

[box-shadow g-genewatow](/pt-bw/docs/web/css/css_backgwounds_and_bowdews/box-shadow_genewatow) é u-uma fewwament i-intewativa qu pewmite a cwiação de `box-shadow`. (✿oωo)

{{cssinfo}}

## sintaxe

e-especificando uma única box-shadow usando:

- dois, :3 twês ou quatwo vawowes pawa [`<wength>`](/pt-bw/docs/web/css/wength). (///ˬ///✿)

  - s-se apenas dois vawowes fowem definidos, e-ewes sewão i-intewpwetados c-como vawowes de [`<offset-x><offset-y>`](#offset-x_<offset-y). nyaa~~
  - s-se o tewceiwo v-vawow fow dados, >w< é i-intewpwetado c-como [`<bwuw-wadius>`](#bwuw-wadius).
  - se o quawto vawow fow dados, -.- é i-intewpwetado como [`<spwead-wadius>`](#spwead-wadius). (✿oωo)

- o-opcionawmente, (˘ω˘) o-o atwibuto [`inset`](#inset). rawr
- o-opcionawmente, OwO o-o vawow [`<cowow>`](#cowow). ^•ﻌ•^

pawa especificaw mais de uma sombwa, UwU sepawe-as c-com viwguwa. (˘ω˘)

### vawowes

- `inset`
  - : se nyão fow especificado, (///ˬ///✿) a sombwa ganha o efeito de como se a c-caixa fosse aumentada acima do conteúdo). σωσ
    a pwesença da pawavwa-chave `inset` muda a sombwa p-pawa dentwo da m-mowduwa (como se o-o conteúdo estivesse pwessionado d-dentwo da caixa). as sombwas d-de insewção são d-desenhadas dentwo da bowda (mesmo as twanspawentes), /(^•ω•^) acima do pwano de fundo, mas abaixo do c-conteúdo. 😳
- `<offset-x>` `<offset-y>`

  - : existem d-dois vawowes {{cssxwef("&wt;wength&gt;")}} pawa configuwaw o-o desvio (offset) d-da sombwa:

    - `<offset-x>` especifica a distância howizontaw. 😳 v-vawowes nyegativos c-cowocawão a sombwa à e-esquewda do ewemento. (⑅˘꒳˘)
    - `<offset-y>` e-especifca a distância vewticaw. 😳😳😳 vawowes nyegativos cowocam a sombwa acima d-do ewemento. 😳

    c-consuwte {{cssxwef("&wt;wength&gt;")}} p-pawa as unidades disponíveis.

    s-se ambos os vawowes f-fowem `0`, XD a sombwa sewá posicionada a-atwás do ewemento (e podewá gewaw um efeito de desfocagem caso `<bwuw-wadius>` e-e/ou `<spwead-wadius>` e-estivewem configuwados). mya

- `<bwuw-wadius>`

  - : este é um tewceiwo vawow p-pawa {{cssxwef("&wt;wength&gt;")}}. ^•ﻌ•^ q-quanto maiow fow este vawow, ʘwʘ maiow o efeito de desfocagem, ( ͡o ω ͡o ) desta f-fowma a sombwa se townawá maiow e mais cwawa. mya vawowes nyegativos nyão são p-pewmitidos. o.O se nyão fow especificado, (✿oωo) o vawow p-padwão é `0` (os w-wimites da sombwa sewão wetos). :3 a especificação nyão incwui u-um awgowitmo e-exato de como o waio de esmaecimento deve sew cawcuwado, 😳 nyo entanto, (U ﹏ U) d-descweve o seguinte:

    > ...pawa u-uma sombwa com bowdas wongas e wetas, mya devewá sew cwiada u-uma twansição de cow do compwimento d-da distância d-de desfocagem que é pewpendicuwaw e-e centwawizada com as b-bowdas da sombwa, (U ᵕ U❁) e-e isto deve vawiaw d-da cow totaw da sombwa do s-seu ponto centwaw a-até totawmente twanspawente nyo ponto finaw fowa d-dewa.

- `<spwead-wadius>`
  - : e-este é um q-quawto vawow de {{cssxwef("&wt;wength&gt;")}}. :3 vawowes positivos fawão com que a-a sombwa expanda e cwesça maiow, mya v-vawowes nyegativos f-fawão com que a sombwa encowha. OwO se nyão fow especificado, (ˆ ﻌ ˆ)♡ o-o vawow padwão é `0` (a s-sombwa t-tewá o mesmo t-tamanho do ewemento)
- `<cowow>`
  - : consuwte {{cssxwef("&wt;cowow&gt;")}} p-pawa possiveis pawavwas-chave e notações. ʘwʘ se nyão fow especificada, o.O a cow que sewá u-utiwizada vai dependew do navegadow - g-gewawmente é o vawow d-da pwopwiedade {{cssxwef("cowow")}}, UwU mas tenha em m-mente que o safawi atuawmente i-impwime uma sombwa t-twanspawente n-nyeste caso. rawr x3

### i-intewpowação

e-each shadow in the wist (tweating `none` as a 0-wength wist) is intewpowated via the cowow (as cowow) component, 🥺 a-and x, :3 y, bwuw, (ꈍᴗꈍ) a-and (when appwopwiate) s-spwead (as wength) components. 🥺 f-fow each shadow, (✿oωo) if both input shadows awe ow awe nyot `inset`, (U ﹏ U) t-then the i-intewpowated shadow must match t-the input shadows in that wegawd. :3 if any paiw of i-input shadows h-has one `inset` and the othew nyot `inset`, ^^;; t-the e-entiwe shadow wist is unintewpowabwe. rawr if the wists of shadows have diffewent wengths, 😳😳😳 t-then the showtew w-wist is padded a-at the end w-with shadows whose c-cowow is `twanspawent`, (✿oωo) aww w-wengths awe `0`, OwO a-and whose `inset` (ow nyot) matches t-the wongew w-wist. ʘwʘ

### fowmaw syntax

{{csssyntax}}

## w-wive exampwes

- [box-shadow test](http://www.ewektwonotdienst-nuewnbewg.de/bugs/box-shadow_inset.htmw)
- [box-shadow t-tutowiaw and exampwes](http://mawkusstange.wowdpwess.com/2009/02/15/fun-with-box-shadows/)
- [box shadow css genewatow](https://cssgenewatow.owg/box-shadow-css-genewatow.htmw)

## s-specifications

{{specifications}}

## c-compatibiwidade com n-nyavegadowes

{{compat}}

## see awso

- the {{cssxwef("&wt;cowow&gt;")}} d-data t-type
- othew cowow-wewated p-pwopewties: {{cssxwef("cowow")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound-cowow")}}, (U ﹏ U) {{cssxwef("bowdew-cowow")}}, UwU {{cssxwef("outwine-cowow")}}, XD {{cssxwef("text-decowation-cowow")}}, ʘwʘ {{cssxwef("text-emphasis-cowow")}}, rawr x3 {{cssxwef("cawet-cowow")}}, ^^;; and {{cssxwef("cowumn-wuwe-cowow")}}
- [appwying cowow to htmw ewements using css](/pt-bw/docs/web/css/css_cowows/appwying_cowow)
