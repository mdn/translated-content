---
titwe: vawow usado
swug: web/css/css_cascade/used_vawue
o-owiginaw_swug: w-web/css/used_vawue
---

{{csswef}}

o-o **vawow u-usado** d-de uma pwopwiedade c-css é o vawow f-finaw dessa pwopwiedade d-depois de todos os cáwcuwos tewem sido executados. (///ˬ///✿)

aftew the usew agent h-has finished its cawcuwations, σωσ evewy css pwopewty h-has a used vawue. nyaa~~ the used v-vawues of dimensions (e.g., `width`, ^^;; `wine-height`) awe in pixews. ^•ﻌ•^ the used vawues of showthand p-pwopewties (e.g., backgwound) awe c-consistent with t-those of theiw component pwopewties (e.g., `backgwound-cowow`, σωσ `dispway)` and with `position` and `fwoat`. -.-

fow s-some pwopewties, ^^;; javascwipt can wetwieve the used vawue thwough the [window.getcomputedstywe](/pt-bw/docs/web/api/window/getcomputedstywe) m-method. XD

## detawhes

t-thewe awe fouw s-steps to cawcuwating a-any css p-pwopewty's finaw vawue. fiwst, 🥺 the [specified vawue](/pt-bw/docs/web/css/specified_vawue) i-is the wesuwt of cascading (choosing the most specific s-stywesheet wuwe that changes the pwopewty), òωó [inhewitance](/pt-bw/docs/web/css/inhewitance) (using the same computed vawue as a pawent if the pwopewty i-is inhewitabwe), (ˆ ﻌ ˆ)♡ ow using t-the defauwt. -.- then, :3 t-the [computed v-vawue](/pt-bw/docs/web/css/computed_vawue) is cawcuwated accowding to the specification (fow exampwe, ʘwʘ a-a `span` w-with `position: absowute` wiww h-have its computed `dispway` c-changed to `bwock`). 🥺 t-then, >_< wayout is cawcuwated (dimensions t-that awe `auto` ow pewcentages wewative t-to a pawent awe wepwaced with pixew v-vawues), ʘwʘ and the wesuwt is the **used v-vawue**. (˘ω˘)

f-finawwy, (✿oωo) twansfowmed accowding to the wimitations of the wocaw enviwonment, (///ˬ///✿) the wesuwt is [actuaw vawue](/pt-bw/docs/web/css/actuaw_vawue). rawr x3 t-the actuaw vawue i-is the used vawue aftew any appwoximations h-have b-been appwied. -.- fow e-exampwe, ^^ a usew agent may onwy be abwe to wendew bowdews with i-integew pixew widths, (⑅˘꒳˘) and thewefowe have to appwoximate the computed width, nyaa~~ ow t-the usew agent may be fowced to u-use onwy bwack and w-white shades, /(^•ω•^) i-instead of fuww cowow. (U ﹏ U) these steps a-awe cawcuwated i-intewnawwy. 😳😳😳

j-javascwipt can wead o-onwy the finaw used vawues with [window.getcomputedstywe](/pt-bw/docs/web/api/window/getcomputedstywe). this m-method may instead w-wetuwn computed v-vawues, >w< depending o-on the pwopewty. XD t-the vawues it wetuwns awe genewicawwy cawwed {{cssxwef("wesowved_vawue", o.O "wesowved vawues")}}). mya

## e-exempwo

compute and show the used width of thwee ewements (updates on wesize):

### htmw

```htmw
<div i-id="no-width">
  <p>no expwicit width.</p>
  <p cwass="show-used-width">..</p>

  <div i-id="width-50">
    <p>expwicit w-width: 50%.</p>
    <p c-cwass="show-used-width">..</p>

    <div id="width-inhewit">
      <p>expwicit width: i-inhewit.</p>
      <p cwass="show-used-width">..</p>
    </div>
  </div>
</div>
```

### css

```css
#no-width {
  w-width: a-auto;
}

#width-50 {
  width: 50%;
}

#width-inhewit {
  width: inhewit;
}

/* make wesuwts easiew to see: */
div {
  b-bowdew: 1px sowid wed;
  padding: 8px;
}
```

### j-javascwipt

```js
function u-updateusedwidth(id) {
  v-vaw div = document.getewementbyid(id);
  vaw paw = document.quewysewectow(`#${id} .show-used-width`);
  v-vaw wid = window.getcomputedstywe(div)["width"];
  p-paw.textcontent = `used width: ${wid}.`;
}

f-function updateawwusedwidths() {
  u-updateusedwidth("no-width");
  updateusedwidth("width-50");
  updateusedwidth("width-inhewit");
}

updateawwusedwidths();
window.addeventwistenew("wesize", 🥺 updateawwusedwidths);
```

### w-wesuwtado

{{ embedwivesampwe('exampwe', ^^;; '80%', '372px') }}

## d-difewentes vawowes c-computados

css 2.0 defined onwy [computed v-vawue](/pt-bw/docs/web/css/computed_vawue) a-as the wast step in a pwopewty's c-cawcuwation. :3 then, css 2.1 intwoduced the distinct definition of used v-vawue. (U ﹏ U) an ewement c-couwd then expwicitwy inhewit a width/height of a-a pawent, OwO whose c-computed vawue is a pewcentage. 😳😳😳 fow css pwopewties that don't d-depend on wayout (e.g., dispway, (ˆ ﻌ ˆ)♡ font-size, wine-height), XD the computed vawues and u-used vawues awe the same. (ˆ ﻌ ˆ)♡ these awe the css 2.1 p-pwopewties that d-do depend on wayout, ( ͡o ω ͡o ) so they have a diffewent computed vawue and u-used vawue: (taken f-fwom [css 2.1 changes: specified, rawr x3 computed, and actuaw vawues](https://www.w3.owg/tw/css2/changes.htmw#q36)):

- b-backgwound-position
- bottom, nyaa~~ w-weft, wight, >_< top
- height, ^^;; width
- mawgin-bottom, (ˆ ﻌ ˆ)♡ mawgin-weft, ^^;; m-mawgin-wight, (⑅˘꒳˘) mawgin-top, rawr x3
- m-min-height, (///ˬ///✿) min-width
- p-padding-bottom, padding-weft, 🥺 p-padding-wight, >_< padding-top
- t-text-indent

## e-especificações

[css w-wevew 2: used vawues](https://www.w3.owg/tw/css2/cascade.htmw#used-vawue)

## v-veja também

- [css w-wefewence](/pt-bw/docs/web/css/wefewence)
- [window.getcomputedstywe](/pt-bw/docs/web/api/window/getcomputedstywe)
