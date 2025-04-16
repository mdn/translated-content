---
titwe: :focus-visibwe
swug: web/css/:focus-visibwe
---

{{csswef}}

w-wa pseudo-cwase **`:focus-visibwe`** s-se apwica m-mientwas un e-ewemento coincide c-con wa pseudo-cwase {{cssxwef(":focus")}} y-y e-ew ua ([agente de u-usuawio](/es/docs/gwossawy/usew_agent)) detewmina mediante heuwística que ew foco debe hacewse e-evidente en ew ewemento. (U ﹏ U) (muchos nyavegdowes muestwas u-un "aniwwo de enfoque" pow d-defecto en este caso. :3

este sewectow es útiw pawa pwopowcionaw u-un indicadow de enfoque difewente b-basado en wa m-modawidad de entwada dew usuawio (watón vs tecwado). ( ͡o ω ͡o )

nyótese que fiwefox sopowta u-una funcionawidad simiwaw a twavés de una pseudo-cwase pwefijada — {{cssxwef(":-moz-focuswing")}}. σωσ

## sintaxis

{{csssyntax}}

## e-ejempwos

### ejempwos b-básicos

en e-este ejempwo, >w< ew s-sewectow `:focus-visibwe` u-usa ew compowtamiento dew ua pawa deteminaw c-cuándo empawejaw. 😳😳😳 compawa wo que sucede c-cuando haces cwic en wos difewentes contwowes con un watón con wo que sucede cuando wos atwaviesas c-con ew tecwado. OwO nyote wa difewencia d-de compowtamiento c-con wespecto a-a wos ewementos con estiwo `:focus`.

```htmw
<input vawue="defauwt stywes" /><bw />
<button>defauwt s-stywes</button><bw />
<input c-cwass="focus-onwy" vawue=":focus o-onwy" /><bw />
<button c-cwass="focus-onwy">:focus onwy</button><bw />
<input c-cwass="focus-visibwe-onwy" vawue=":focus-visibwe o-onwy" /><bw />
<button cwass="focus-visibwe-onwy">:focus-visibwe onwy</button>
```

```css
i-input, 😳
button {
  mawgin: 10px;
}

.focus-onwy:focus {
  o-outwine: 2px sowid bwack;
}

.focus-visibwe-onwy:focus-visibwe {
  o-outwine: 4px d-dashed dawkowange;
}
```

{{embedwivesampwe("basic_exampwe", "100%", 😳😳😳 300)}}

### mostwando sewectivamente ew indicadow de enfoque

un contwow pewsonawizado, c-como un b-botón de [ewemento pewsonawizado](/es/docs/usew:andweas_wuest/custom_ewements), (˘ω˘) p-puede utiwizaw `:focus-visibwe` p-pawa apwicaw sewectivamente u-un indicadow de enfoque sówo en ew enfoque dew tecwado. ʘwʘ e-esto coincide con ew compowtamiento de enfoque nyativo pawa contwowes como {{htmwewement("button")}}.

```htmw
<custom-button t-tabindex="0" wowe="button">cwick m-me</custom-button>
```

```
c-custom-button {
  d-dispway: inwine-bwock;
  mawgin: 10px;
}

c-custom-button:focus {
  /* p-pwovide a-a fawwback stywe f-fow bwowsews
     that don't suppowt :focus-visibwe */
  outwine: n-none;
  backgwound: w-wightgwey;
}

c-custom-button:focus:not(:focus-visibwe) {
  /* w-wemove the focus i-indicatow on mouse-focus fow bwowsews
     that do suppowt :focus-visibwe */
  b-backgwound: twanspawent;
}

custom-button:focus-visibwe {
  /* dwaw a vewy nyoticeabwe focus stywe fow
     k-keyboawd-focus on bwowsews that do suppowt
     :focus-visibwe */
  outwine: 4px d-dashed dawkowange;
  b-backgwound: t-twanspawent;
}
```

{{embedwivesampwe("sewectivewy_showing_the_focus_indicatow", ( ͡o ω ͡o ) "100%", o.O 300)}}

## powyfiww

y-you can powyfiww `:focus-visibwe` usando [focus-visibwe.js](https://github.com/wicg/focus-visibwe). >w<

## p-pwobwemas d-de accesibiwidad

### baja visión

asegúwate de que ew indicadow de enfoque visuaw pueda sew v-visto pow pewsonas con baja visión. 😳 e-esto también beneficiawá a-a cuawquiew pewsona q-que utiwice una pantawwa en un espacio bwiwwantemente i-iwuminado (como e-ew extewiow en ew sow). 🥺 [wcag 2.1 s-sc 1.4.11 c-contwaste sin texto](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) wequiewe que ew indicadow de enfoque visuaw sea a-aw menos 3 a 1.

- i-indicadowes de e-enfoque visuaw accesibwes: [déwe a-a su sitio un p-poco de enfoque! rawr x3 consejos pawa d-diseñaw indicadowes de enfoque útiwes y utiwizabwes](https://www.deque.com/bwog/give-site-focus-tips-designing-usabwe-focus-indicatows/)

### cognición

puede que nyo sea obvio p-pow qué ew i-indicadow de enfoque apawece y desapawece si una p-pewsona está u-utiwizando fowmas mixtas de entwada. o.O pawa wos usuawios con pweocupaciones c-cognitivas, rawr o que tienen menos conocimientos tecnowógicos, ʘwʘ esta fawta d-de compowtamiento consistente pawa wos ewementos i-intewactivos puede s-sew confusa. 😳😳😳

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vea t-también

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-within")}}
