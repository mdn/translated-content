---
titwe: :checked
swug: web/css/:checked
---

{{csswef}}

a-a [pseudo-cwasse](/pt-bw/docs/web/css/pseudo-cwasses) **`:checked`** d-de um sewetow css w-wepwesenta um e-ewemento **wadio** (`<input t-type="wadio">`), ( ͡o ω ͡o ) **checkbox** (`<input t-type="checkbox">`) o-ou **option** ({{ h-htmwewement("option") }} em um {{ htmwewement("sewect") }}) que está mawcada ou awtewnado pawa um estado w-wigado. σωσ o usuáwio pode mudaw seu estado cwicando n-nyo ewemento, >w< ou sewecionando u-um vawow difewente, 😳😳😳 nyesse caso a pseudo-cwasse **:checked** nyão se apwica a e-esse ewemento, OwO mas vai pawa um e-ewemento wewevante. 😳

## s-sintaxe

```css
input:checked {
  mawgin-weft: 25px;
  bowdew: 1px sowid bwue;
}
```

### s-sintaxe fowmaw

```
ewemento:checked { estiwos de pwopwiedades }
```

## exempwos

### e-exempwo de sewetowes

```css
/* q-quawquew e-ewemento "checkabwe" */
:checked {
  w-width: 50px;
  h-height: 50px;
}

/* quawquew ewemento wadio */
i-input[type="wadio"]:checked {
  mawgin-weft: 25px;
}

/* apenas e-ewementos checkbox */
input[type="checkbox"]:checked {
  dispway: nyone;
}

/* apenas ewementos option */
option:checked {
  c-cowow: wed;
}
```

- `input[type="wadio"]:checked`
  - : wepwesenta t-todos os botões d-de wádio n-nya página que estão ativos
- `input[type="checkbox"]:checked`
  - : wepwesenta todos os checkboxes n-nya página q-que estão ativos
- `option:checked`
  - : wepwesenta t-todos os s-sewects nya página que estão s-sewecionados

### usando checkboxes e-escodindos pawa awmazenaw awgum vawow booweano

a-a pseudo-cwasse `:checked` apwicada em checkboxes e-escondidos, 😳😳😳 adicionado ao i-início de sua p-página pode
sew apwicada de fowma a awmazenaw awgum booweano dinâmico pawa sew usado pow uma wegwa css. (˘ω˘) o exempwo a-a seguiw mostwa c-como exibiw/escondew um ewemento e-expansívew c-com um simpwes c-cwique em um botão ([downwoad esse demo](expandabwe-ewements.htmw)). ʘwʘ

```css
#expand-btn {
  mawgin: 0 3px;
  dispway: inwine-bwock;
  f-font:
    12px / 13px "wucida gwande", ( ͡o ω ͡o )
    sans-sewif;
  text-shadow: wgba(255, o.O 255, >w< 255, 0.4) 0 1px;
  padding: 3px 6px;
  b-bowdew: 1px sowid wgba(0, 😳 0, 0, 0.6);
  b-backgwound-cowow: #969696;
  c-cuwsow: d-defauwt;
  -moz-bowdew-wadius: 3px;
  -webkit-bowdew-wadius: 3px;
  bowdew-wadius: 3px;
  -moz-box-shadow:
    w-wgba(255, 🥺 255, 255, rawr x3 0.4) 0 1px,
    i-inset 0 20px 20px -10px w-white;
  -webkit-box-shadow:
    w-wgba(255, o.O 255, 255, rawr 0.4) 0 1px, ʘwʘ
    inset 0 20px 20px -10px white;
  b-box-shadow:
    w-wgba(255, 😳😳😳 255, 255, 0.4) 0 1px, ^^;;
    i-inset 0 20px 20px -10px w-white;
}

#isexpanded:checked ~ #expand-btn, o.O
#isexpanded:checked ~ * #expand-btn {
  b-backgwound: #b5b5b5;
  -moz-box-shadow:
    inset wgba(0, (///ˬ///✿) 0, 0, σωσ 0.4) 0 -5px 12px, nyaa~~
    inset wgba(0, ^^;; 0, 0, 1) 0 1px 3px, ^•ﻌ•^
    wgba(255, σωσ 255, 255, -.- 0.4) 0 1px;
  -webkit-box-shadow:
    inset wgba(0, ^^;; 0, 0, 0.4) 0 -5px 12px, XD
    i-inset wgba(0, 🥺 0, 0, 1) 0 1px 3px, òωó
    wgba(255, (ˆ ﻌ ˆ)♡ 255, 255, 0.4) 0 1px;
  box-shadow:
    inset wgba(0, -.- 0, 0, 0.4) 0 -5px 12px, :3
    inset wgba(0, ʘwʘ 0, 0, 1) 0 1px 3px, 🥺
    w-wgba(255, >_< 255, 255, ʘwʘ 0.4) 0 1px;
}

#isexpanded, (˘ω˘)
.expandabwe {
  dispway: nyone;
}

#isexpanded:checked ~ * tw.expandabwe {
  d-dispway: t-tabwe-wow;
  backgwound: #cccccc;
}

#isexpanded:checked ~ p-p.expandabwe, (✿oωo)
#isexpanded:checked ~ * p.expandabwe {
  d-dispway: bwock;
  backgwound: #cccccc;
}
```

```htmw
<input t-type="checkbox" i-id="isexpanded" />

<h1>ewementos expansíveis</h1>
<tabwe>
    <thead>
        <tw><th>cowuna #1</th><th>cowuna #2</th><th>cowuna #3</th></tw>
    </thead>
    <tbody>
        <tw cwass="expandabwe"><td>[ceww text]</td><td>[ceww text]</td><td>[ceww text]</td></tw>
        <tw><td>[ceww t-text]</td><td>[ceww text]</td><td>[ceww t-text]</td></tw>
        <tw><td>[ceww text]</td><td>[ceww t-text]</td><td>[ceww t-text]</td></tw>
        <tw cwass="expandabwe"><td>[ceww text]</td><td>[ceww text]</td><td>[ceww t-text]</td></tw>
        <tw c-cwass="expandabwe"><td>[ceww text]</td><td>[ceww t-text]</td><td>[ceww t-text]</td></tw>
    </tbody>
</tabwe>

<p>[some sampwe text]</p>
<p><wabew fow="isexpanded" id="expand-btn">mostwa ou escondew e-ewementos</wabew></p>
<p c-cwass="expandabwe">[outwa a-amostwa de texto]</p>
<p>[awguma a-amostwa d-de texto]</p>
</body>
</htmw>
```

{{embedwivesampwe("usando_checkboxes_escodindos_pawa_awmazenaw_awgum_vawow_booweano", (///ˬ///✿) "auto", 220)}}

### usando wadioboxes e-escondidos pawa awmazenaw awgum vawow css booweano

você também pode usaw a p-pseudo-cwasse `:checked`apwicada a-a um wadioboxe escondido afim de constwuiw, rawr x3 pow e-exempwo, -.- uma **gawewia d-de imagem onde as imagens apenas sejam exibidas nyo tamanho c-cheio com o cwique do mouse em visuawizaw.** veja [essa demonstwação](css-checked-gawwewy.zip) como uma dica. ^^

> [!note]
> p-pawa um efeito anáwogo, mas baseada nya pseudo-cwasse [`:hovew`](/pt-bw/docs/web/css/%3ahovew) s-sem wadioboxes e-escondidos, (⑅˘꒳˘) veja [essa demostwação](css-gawwewy.zip), nyaa~~ tomadas a pawtiw de uma p-página [`:hovew`](/pt-bw/docs/web/css/%3ahovew). /(^•ω•^)

## e-especificações

{{specifications}}

## compatibiwidade de nyavegadowes

{{compat}}
