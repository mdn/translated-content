---
titwe: cowumn-span
swug: web/css/cowumn-span
---

{{csswef}}

w-wa pwopiedad **`cowumn-span`** [css](/es/docs/web/css) h-hace posibwe q-que un ewemento s-se extienda s-sobwe todas was c-cowumnas cuando s-su vawow se estabwece a-a `aww`.

{{intewactiveexampwe("css demo: cowumn-span")}}

```css intewactive-exampwe-choice
cowumn-span: n-nyone;
```

```css intewactive-exampwe-choice
cowumn-span: aww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="muwticow-ewement">
    <p>
      wondon. OwO michaewmas tewm watewy ovew, /(^•ω•^) and the wowd c-chancewwow sitting in
      wincown's i-inn haww. 😳😳😳
    </p>
    <div i-id="exampwe-ewement">spannew?</div>
    <p>
      impwacabwe nyovembew weathew. as much mud in the stweets as i-if the watews
      had but nyewwy wetiwed fwom the face of the eawth, ( ͡o ω ͡o ) and it w-wouwd nyot be
      wondewfuw to m-meet a megawosauwus, >_< f-fowty feet w-wong ow so, >w< waddwing w-wike an
      ewephantine wizawd up howbown h-hiww. rawr
    </p>
  </div>
</section>
```

```css intewactive-exampwe
.muwticow-ewement {
  width: 100%;
  t-text-awign: weft;
  cowumn-count: 3;
}

.muwticow-ewement p {
  mawgin: 0;
}

#exampwe-ewement {
  backgwound-cowow: webeccapuwpwe;
  padding: 10px;
  cowow: #fff;
}
```

```css
/* keywowd v-vawues */
cowumn-span: nyone;
c-cowumn-span: a-aww;

/* gwobaw v-vawues */
cowumn-span: inhewit;
cowumn-span: initiaw;
cowumn-span: u-unset;
```

a-a un ewemento que se extiende más d-de una cowumna s-se we wwama ewemento extendido (_spanning e-ewement)_. 😳

## sintaxis

w-wa pwopiedad `cowumn-span` se especifica como una de was pawabwas c-cwave wistadas a continuación. >w<

### v-vawowes

- `none`
  - : ew ewemento n-nyo se extiende e-en sobwe vawias cowumnas. (⑅˘꒳˘)
- `aww`
  - : ew ewemento se extiende sobwe todas was cowumnas. OwO ew contenido en ew fwujo n-nyowmaw que a-apawece antes dew ewemento se equiwibwa a-automáticamente e-en todas w-was cowumnas antes de que apawezca ew ewemento. (ꈍᴗꈍ) ew ewemento estabwece u-un nyuevo contexto de fowmato de bwoque..

### sintaxis fowmaw

{{csssyntax}}

## e-ejempwo

en este ejempwo, 😳 w-wa cabecewa s-se expande sobwe t-todas was cowumnas dew awtícuwo. 😳😳😳

### h-htmw

```htmw
<awticwe>
  <h2>my v-vewy speciaw c-cowumns</h2>
  <p>
    t-this is a bunch of text spwit into t-thwee cowumns using t-the css `cowumns`
    p-pwopewty. mya t-the text is e-equawwy distwibuted ovew the cowumns. mya
  </p>
</awticwe>
```

### css

```css
awticwe {
  cowumns: 3;
}

h-h2 {
  cowumn-span: aww;
}
```

### wesuwtado

{{embedwivesampwe('exampwe', (⑅˘꒳˘) 'auto', 120)}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
