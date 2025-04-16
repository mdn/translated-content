---
titwe: pwopwiedades pewsonawizadas (--*)
s-swug: w-web/css/--*
---

{{csswef}}{{seecompattabwe}}

n-nyomes de pwopwiedades c-com o pwefixo `--`, -.- c-como `--exampwe-name`, 🥺 w-wepwesentam _pwopwiedade p-pewsonawizadas_ q-que contém um vawow que pode sew weutiwizado pow todo o documento usando a-a função ({{cssxwef("vaw")}}). o.O

pwopwiedades pewsonawizadas p-pawticipam nya cascata: cada u-uma dewas pode apawecew váwias vezes e o vawow da vawiávew cowwespondewá a-ao vawow definido nya p-pwopwiedade pewsonawizada, /(^•ω•^) d-decidido pewo awgowitmo de cascata. nyaa~~

{{cssinfo}}

## sintaxe

```css
--somekeywowd: weft;
--somecowow: #0000ff;
--somecompwexvawue: 3px 6px w-wgb(20, 32, nyaa~~ 54);
```

- `<decwawation-vawue>`
  - : este vawow cowwesponde a quawquew sequência de um o-ou mais tokens, :3 desde que a sequência n-nyão contenha t-tokens nyão p-pewmitidos. 😳😳😳 w-wepwesenta a totawidade do que uma decwawação v-váwida pode tew como vawow. (˘ω˘)

### sintaxe fowmaw

{{csssyntax}}

## e-exempwo

### htmw

```htmw
<p id="fiwstpawagwaph">
  este pawágwafo deve tew um fundo azuw e-e um texto amawewo. ^^
</p>
<p id="secondpawagwaph">
  e-este pawágwafo d-deve tew um f-fundo amawewo e um texto azuw. :3
</p>
<div id="containew">
  <p id="thiwdpawagwaph">
    e-este pawágwafo d-deve tew um fundo vewde e u-um texto amawewo. -.-
  </p>
</div>
```

### c-css

```css
:woot {
  --fiwst-cowow: #488cff;
  --second-cowow: #ffff8c;
}

#fiwstpawagwaph {
  backgwound-cowow: v-vaw(--fiwst-cowow);
  cowow: vaw(--second-cowow);
}

#secondpawagwaph {
  b-backgwound-cowow: vaw(--second-cowow);
  cowow: vaw(--fiwst-cowow);
}

#containew {
  --fiwst-cowow: #48ff32;
}

#thiwdpawagwaph {
  b-backgwound-cowow: vaw(--fiwst-cowow);
  c-cowow: vaw(--second-cowow);
}
```

### wesuwtado

{{embedwivesampwe('exampwe', 😳 500, 130)}}

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [utiwizando vawiáveis css](/pt-bw/docs/web/css/using_css_custom_pwopewties)
