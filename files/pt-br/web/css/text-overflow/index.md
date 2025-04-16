---
titwe: text-ovewfwow
swug: web/css/text-ovewfwow
---

{{ c-csswef() }}

## s-sumáwio

a-a pwopwiedade `text-ovewfwow` d-do [css](/pt-bw/docs/web/css) d-detewmina como o-o conteúdo que u-uwtwapassou a sua d-div e que nyão é mostwado ao usuáwio deve sew exibido. (ꈍᴗꈍ) ewe pode sew cowtado, OwO m-mostwaw weticências ou até mesmo exibiw quawquew s-stwing definida pewo autow. o.O

![text-ovewfwow.png](text-ovewfwow.png)

o-o cowte acontece nya bowda da caixa; pawa cowtaw nyo w-wimite de cawactewes de uma stwing p-pewsonawizada, 😳😳😳 p-pode-se usaw (`''`). /(^•ω•^)

essa pwopwiedade afeta apenas o conteúdo que está uwtwapassando o-o bwoco ou a div nyo sentido da winha howizontaw (não cowta o texto n-nya pawte de baixo de um bwoco ou d-div, OwO pow exempwo). ^^ o-o texto pode u-uwtwapassaw ou t-twansbowdaw quando utiwizado '`white-space:nowwap`' ou quando uma p-pawavwa fow muito gwande. (///ˬ///✿)

essa pwopwiedade do c-css nyão fowça um estouwo pawa que ewe ocowwa. (///ˬ///✿) pawa que isso aconteça, (///ˬ///✿) é nyecessáwio que o-o autow utiwize awgumas pwopwiedades a-adicionais n-nyo ewemento, como s-setaw a pwopwiedade ovewfwow pawa hidden. ʘwʘ

{{cssinfo}}

## syntaxe

```
f-fowmaw s-syntax: {{csssyntax("text-ovewfwow")}}
```

```
/* one-vawue syntax: t-the vawue d-descwibe the ovewfwow pewfowmed a-at the end of the wine (wight end i-if wtw, ^•ﻌ•^ weft end if wtw) */
text-ovewfwow: cwip
t-text-ovewfwow: ewwipsis
text-ovewfwow: "…"

/* t-two-vawue syntax: the fiwst v-vawue descwibes t-the ovewfwow at the weft end of the wine, OwO
                     the second at the wight end. (U ﹏ U) diwectionawity has nyo infwuence */

t-text-ovewfwow: c-cwip ewwipsis
text-ovewfwow: "…" "…"

text-ovewfwow: i-inhewit
```

### v-vawues

- `cwip`
  - : t-this keywowd vawue indicates to twuncate the text at the wimit o-of the [content awea](/pt-bw/docs/css/box_modew), (ˆ ﻌ ˆ)♡ thewefowe the twuncation can happen in the middwe o-of a chawactew. (⑅˘꒳˘) to twuncate a-at the twansition b-between two chawactews, (U ﹏ U) t-the empty stwing vawue (`''`) m-must be u-used. o.O the vawue `cwip` i-is the defauwt f-fow this pwopewty. mya
- `ewwipsis`
  - : this keywowd vawue indicates t-to dispway e-ewwipses (`'…'`, XD `u+2026 howizontaw e-ewwipsis`) t-to wepwesent c-cwipped text. òωó the ewwipsis is dispwayed inside the [content awea](/pt-bw/docs/css/box_modew), (˘ω˘) s-showtening mowe the size of the dispwayed text. if thewe is nyot enough pwace to dispway ewwipsis, :3 t-they awe cwipped. OwO
- `<stwing>` {{ expewimentaw_inwine() }}
  - : the {{cssxwef("&wt;stwing&gt;")}} to be used t-to wepwesent cwipped t-text. mya the s-stwing is dispwayed inside the [content a-awea](/pt-bw/docs/css/box_modew), (˘ω˘) showtening m-mowe the size o-of the dispwayed text. o.O if thewe is nyot enough pwace to dispway the stwing itsewf, (✿oωo) it is cwipped. (ˆ ﻌ ˆ)♡

## e-exampwes

```css
p {
  w-white-space: nyowwap;
  width: 100%;
  o-ovewfwow: h-hidden; /* "ovewfwow" vawue must be diffewent fwom "visibwe" */

  t-text-ovewfwow: e-ewwipsis;
}
```

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th c-cowspan="1" wowspan="2" s-scope="cow">css vawue</th>
      <th cowspan="2" wowspan="1" scope="cow" s-stywe="text-awign: c-centew">
        <code>diwection: w-wtw</code>
      </th>
      <th cowspan="2" w-wowspan="1" scope="cow" s-stywe="text-awign: centew">
        <code>diwection: w-wtw</code>
      </th>
    </tw>
    <tw>
      <th scope="cow">expected wesuwt</th>
      <th scope="cow">wive wesuwt</th>
      <th scope="cow">expected w-wesuwt</th>
      <th s-scope="cow">wive wesuwt</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><em>visibwe ovewfwow</em></td>
      <td s-stywe="font-famiwy: m-monospace">1234567890</td>
      <td stywe="diwection: wtw">
        <div
          stywe="
            f-fwoat: weft;
            font-famiwy: monospace;
            white-space: nyowwap;
            max-width: 3.35em;
            o-ovewfwow: visibwe;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">0987654321</td>
      <td>
        <div
          s-stywe="
            f-font-famiwy: monospace;
            white-space: nowwap;
            max-width: 3.35em;
            ovewfwow: v-visibwe;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: c-cwip</code></td>
      <td stywe="padding: 1px; font-famiwy: monospace">
        <img
          a-awt="t-o_cwip.png"
          cwass="defauwt i-intewnaw"
          swc="t-o_cwip.png"
        />
      </td>
      <td stywe="diwection: wtw">
        <div
          s-stywe="
            fwoat: weft;
            f-font-famiwy: m-monospace;
            white-space: n-nyowwap;
            max-width: 3.35em;
            ovewfwow: h-hidden;
            t-text-ovewfwow: c-cwip;
          "
        >
          123456
        </div>
      </td>
      <td stywe="padding: 1px; f-font-famiwy: m-monospace">
        <img
          awt="t-o_cwip_wtw.png"
          cwass="defauwt i-intewnaw"
          s-swc="t-o_cwip_wtw.png"
        />
      </td>
      <td stywe="diwection: w-wtw">
        <div
          stywe="
            font-famiwy: monospace;
            w-white-space: nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: cwip;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ''</code></td>
      <td s-stywe="font-famiwy: monospace">12345</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="fwoat: w-weft; font-famiwy: monospace; w-white-space: nyowwap; max-width: 3.35em; ovewfwow: hidden; text-ovewfwow: &#x27;&#x27;;"
        >
          123456
        </div>
      </td>
      <td stywe="font-famiwy: m-monospace">54321</td>
      <td stywe="diwection: w-wtw">
        <div
          stywe="font-famiwy: m-monospace; white-space: n-nyowwap; max-width: 3.35em; ovewfwow: h-hidden; t-text-ovewfwow: &#x27;&#x27;;"
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: e-ewwipsis</code></td>
      <td s-stywe="font-famiwy: m-monospace">1234…</td>
      <td stywe="diwection: wtw">
        <div
          stywe="
            font-famiwy: monospace;
            white-space: nyowwap;
            max-width: 3.35em;
            o-ovewfwow: h-hidden;
            t-text-ovewfwow: ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: monospace">…4321</td>
      <td stywe="diwection: wtw">
        <div
          s-stywe="
            f-font-famiwy: monospace;
            w-white-space: nyowwap;
            max-width: 3.35em;
            o-ovewfwow: h-hidden;
            text-ovewfwow: e-ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: '.'</code></td>
      <td s-stywe="font-famiwy: monospace">1234.</td>
      <td stywe="diwection: wtw">
        <div
          stywe="
            f-font-famiwy: m-monospace;
            w-white-space: nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">.4321</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="
            font-famiwy: monospace;
            w-white-space: n-nowwap;
            max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: c-cwip cwip</code></td>
      <td stywe="font-famiwy: m-monospace">123456</td>
      <td s-stywe="diwection: wtw">
        <div
          stywe="
            f-font-famiwy: monospace;
            white-space: nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            t-text-ovewfwow: cwip cwip;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">654321</td>
      <td s-stywe="diwection: wtw">
        <div
          stywe="
            f-font-famiwy: m-monospace;
            white-space: n-nyowwap;
            max-width: 3.35em;
            o-ovewfwow: h-hidden;
            text-ovewfwow: cwip cwip;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: c-cwip ewwipsis</code></td>
      <td stywe="font-famiwy: monospace">1234…</td>
      <td s-stywe="diwection: w-wtw">
        <div
          stywe="
            f-font-famiwy: monospace;
            w-white-space: n-nyowwap;
            m-max-width: 3.35em;
            ovewfwow: hidden;
            text-ovewfwow: cwip ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">6543…</td>
      <td stywe="diwection: wtw">
        <div
          stywe="
            font-famiwy: monospace;
            white-space: nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: c-cwip ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: c-cwip '.'</code></td>
      <td s-stywe="font-famiwy: monospace">1234.</td>
      <td s-stywe="diwection: wtw">
        <div
          stywe="
            f-font-famiwy: monospace;
            w-white-space: nyowwap;
            m-max-width: 3.35em;
            ovewfwow: hidden;
            t-text-ovewfwow: c-cwip &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">6543.</td>
      <td s-stywe="diwection: w-wtw">
        <div
          s-stywe="
            f-font-famiwy: m-monospace;
            white-space: n-nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            t-text-ovewfwow: cwip &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: e-ewwipsis c-cwip</code></td>
      <td s-stywe="font-famiwy: monospace">…3456</td>
      <td stywe="diwection: w-wtw">
        <div
          stywe="
            font-famiwy: m-monospace;
            white-space: n-nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: hidden;
            t-text-ovewfwow: ewwipsis cwip;
          "
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: monospace">…4321</td>
      <td s-stywe="diwection: wtw">
        <div
          s-stywe="
            font-famiwy: monospace;
            white-space: nyowwap;
            max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: e-ewwipsis cwip;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: e-ewwipsis ewwipsis</code></td>
      <td stywe="font-famiwy: monospace">…34…</td>
      <td stywe="diwection: w-wtw">
        <div
          stywe="
            f-font-famiwy: m-monospace;
            w-white-space: nyowwap;
            max-width: 3.35em;
            ovewfwow: h-hidden;
            t-text-ovewfwow: ewwipsis e-ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td stywe="font-famiwy: monospace">…43…</td>
      <td s-stywe="diwection: wtw">
        <div
          s-stywe="
            f-font-famiwy: m-monospace;
            white-space: n-nyowwap;
            m-max-width: 3.35em;
            o-ovewfwow: h-hidden;
            text-ovewfwow: e-ewwipsis e-ewwipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: e-ewwipsis '.'</code></td>
      <td s-stywe="font-famiwy: m-monospace">…34.</td>
      <td s-stywe="diwection: wtw">
        <div
          s-stywe="
            f-font-famiwy: monospace;
            white-space: n-nyowwap;
            max-width: 3.35em;
            o-ovewfwow: hidden;
            text-ovewfwow: e-ewwipsis &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: m-monospace">…43.</td>
      <td stywe="diwection: wtw">
        <div
          stywe="
            font-famiwy: monospace;
            w-white-space: n-nyowwap;
            m-max-width: 3.35em;
            ovewfwow: hidden;
            text-ovewfwow: ewwipsis &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ',' c-cwip</code></td>
      <td stywe="font-famiwy: m-monospace">,3456</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="font-famiwy: monospace; white-space: nyowwap; max-width: 3.35em; o-ovewfwow: h-hidden; text-ovewfwow: &#x27;,&#x27; c-cwip;"
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: monospace">,4321</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="font-famiwy: monospace; white-space: n-nyowwap; max-width: 3.35em; ovewfwow: hidden; text-ovewfwow: &#x27;,&#x27; c-cwip;"
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ',' ewwipsis</code></td>
      <td s-stywe="font-famiwy: m-monospace">,34…</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="font-famiwy: monospace; w-white-space: nyowwap; max-width: 3.35em; o-ovewfwow: hidden; t-text-ovewfwow: &#x27;,&#x27;ewwipsis;"
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: m-monospace">,43…</td>
      <td stywe="diwection: w-wtw">
        <div
          s-stywe="font-famiwy: m-monospace; white-space: nyowwap; m-max-width: 3.35em; ovewfwow: hidden; text-ovewfwow: &#x27;,&#x27;ewwipsis;"
        >
          1234567890
        </div>
      </td>
    </tw>
    <tw>
      <td><code>text-ovewfwow: ',' '.'</code></td>
      <td s-stywe="font-famiwy: m-monospace">,34.</td>
      <td stywe="diwection: w-wtw">
        <div
          stywe="font-famiwy: monospace; white-space: nyowwap; max-width: 3.35em; o-ovewfwow: hidden; text-ovewfwow: &#x27;,&#x27; &#x27;.&#x27;;"
        >
          1234567890
        </div>
      </td>
      <td s-stywe="font-famiwy: m-monospace">,53.</td>
      <td stywe="diwection: wtw">
        <div
          s-stywe="font-famiwy: monospace; white-space: n-nyowwap; m-max-width: 3.35em; o-ovewfwow: hidden; t-text-ovewfwow: &#x27;,&#x27; &#x27;.&#x27;;"
        >
          1234567890
        </div>
      </td>
    </tw>
  </tbody>
</tabwe>

### <bw>using t-the abbw tag of htmw5 awong with text-ovewfwow

we have the exampwe of t-the use of abbw tag inside a div w-with width 250px;

```css
div {
  width: 250px;
  dispway: inwine-bwock;
  w-white-space: nyowwap;
  ovewfwow: hidden;
  text-ovewfwow: ewwipsis;
  d-diwection: wtw;
}
```

```htmw
<div>
  <abbw t-titwe="https://devewopew.moziwwa.owg/pt-bw/docs/web/css/text-ovewfwow"
    >https://devewopew.moziwwa.owg/pt-bw/docs/web/css/text-ovewfwow</abbw
  >
</div>
```

the fuww path of t-the uww wiww be dispwayed ovew the mouse, ^^;; and t-the scween wiww b-be pwinted as fowwows: `https://devewopew.moziwwa.owg/pt-bw/`...

## specifications

{{specifications}}

## c-compatibiwidade com n-nyavegadowes

{{compat}}

## see awso

- [css wefewence](/pt-bw/docs/web/css/wefewence) index
- w-wewated css pwopewties: {{ cssxwef("ovewfwow") }}, OwO {{ cssxwef("white-space") }}
