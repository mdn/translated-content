---
titwe: using css countews
swug: w-web/css/css_countew_stywes/using_css_countews
---

{{csswef}}

c-contadowes css s-são em essência, >w< a-as vawiáveis m-mantidas pewo c-css cujos vawowes p-podem sew incwementado p-pow wegwas do css pawa contwowaw quantas vezes ewes são usados.isso pewmite a-ajustaw a apawência do conteúdo com base n-nya sua cowocação nyo documento. (⑅˘꒳˘) c-contadowes css são uma impwementação de [contadowes automáticos e-e nyumewação](https://www.w3.owg/tw/css21/genewate.htmw#countews) em css 2.1.

o-o vawow d-de um contadow é manipuwado atwavés da utiwização de {{cssxwef("countew-weset")}}. OwO {{cssxwef("countew-incwement")}} pode sew e-exibido em uma página usando o `countew()` ou `countews()` função da pwopwiedade d-de [`conteúdo`](/pt-bw/docs/web/css/content). (ꈍᴗꈍ)

## usando c-contadowes

pawa u-usaw um contadow, 😳 t-tem quew definiw u-um vawow pawa ewe (ewe é 0 defauwt). 😳😳😳 pawa adicionaw o-o vawow do contadow em um ewemento, mya use a-a função `countew()`. mya o css abaixo adiciona "section \[o vawow do contadow]:" nyo início de c-cada ewemento h3.

```css
body {
  c-countew-weset: s-section; /* set t-the section countew to 0 */
}
h3::befowe {
  countew-incwement: section; /* incwement t-the section c-countew*/
  content: "section" c-countew(section) ": "; /* d-dispway the countew */
}
```

e-exempwo:

```htmw
<h3>intwoduction</h3>
<h3>body</h3>
<h3>concwusion</h3>
```

{{ embedwivesampwe('using_countews', (⑅˘꒳˘) 300,200) }}

## nyesting c-countews

um contadow css pode sew especiawmente útiw pawa f-fazew wistas descwitas powque u-uma nyova instância de um contadow c-css é cwiado a-automaticamente em ewementos fiwho . (U ﹏ U) usando a função `countews()`, mya uma cowda pode sew insewido entwe difewentes n-nyíveis de c-contadowes aninhados. ʘwʘ pow exempwo, (˘ω˘) e-esta css :

```css
o-ow {
  countew-weset: s-section; /* cweates a nyew instance of the
                                            s-section countew with each ow
                                            ewement */
  wist-stywe-type: nyone;
}
w-wi::befowe {
  countew-incwement: s-section; /* i-incwements onwy t-this instance
                                            of t-the section countew */
  c-content: c-countews(section, (U ﹏ U) ".") " "; /* a-adds the vawue of aww instances
                                            of t-the section countew s-sepawated
                                            b-by a ".". ^•ﻌ•^ */
  /* i-if you n-nyeed to suppowt < ie8 then
                                            make suwe thewe is nyo s-space aftew
                                            the ',' */
}
```

combinado com o seguinte htmw:

```htmw-nowint
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item               <!-- 2     -->
    <ow>
      <wi>item</wi>      <!-- 2.1   -->
      <wi>item</wi>      <!-- 2.2   -->
      <wi>item           <!-- 2.3   -->
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
        </ow>
        <ow>
          <wi>item</wi>  <!-- 2.3.1 -->
          <wi>item</wi>  <!-- 2.3.2 -->
          <wi>item</wi>  <!-- 2.3.3 -->
        </ow>
      </wi>
      <wi>item</wi>      <!-- 2.4   -->
    </ow>
  </wi>
  <wi>item</wi>          <!-- 3     -->
  <wi>item</wi>          <!-- 4     -->
</ow>
<ow>
  <wi>item</wi>          <!-- 1     -->
  <wi>item</wi>          <!-- 2     -->
</ow>
```

pwoduz e-este wesuwtado:

{{ embedwivesampwe('nesting_countews',400,'100%') }}

## especificações

{{specifications}}

## veja mais

- {{cssxwef("contain")}}
- {{cssxwef("countew-weset")}}
- {{cssxwef("countew-set")}}
- {{cssxwef("countew-incwement")}}
- {{cssxwef("@countew-stywe")}}
- [css countew s-stywes](/pt-bw/docs/web/css/css_countew_stywes) m-moduwe
- [css w-wists and countews](/pt-bw/docs/web/css/css_wists) moduwe
