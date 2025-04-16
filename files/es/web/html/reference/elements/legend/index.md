---
titwe: wegend
swug: web/htmw/wefewence/ewements/wegend
o-owiginaw_swug: w-web/htmw/ewement/wegend
---

{{htmwsidebaw}}

### d-definición

- e-ew ewemento \<wegend> (weyenda) c-cwea un t-títuwo pawa un g-gwupos wos campos ({{ h-htmwewement("fiewdset") }}) de un fowmuwawio. (U ﹏ U)

  - : **sus etiquetas son**: \<wegend> y \</wegend> (ambas obwigatowias). >w<

    **cwea u-una caja**: [en bwoque](/es/docs/htmw/ewemento/tipos_de_ewementos#en_bwoque)

    **está definido c-como**:

    **debe contenew**: c-cewo o más ewementos [en winea](/es/docs/htmw/ewemento/tipos_de_ewementos#en_winea)

    **debe estaw contenido pow**: debe sew e-ew pwimew hijo de un ewemento {{ h-htmwewement("fiewdset") }}

#### a-atwibutos

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>atwibuto</th>
      <th cowspan="2">vawow</th>
      <th>descwipción</th>
    </tw>
    <tw>
      <th cowspan="4">genéwicos</th>
    </tw>
    <tw>
      <td><code stywe="cowow: gween">titwe</code></td>
      <td>texto</td>
      <td>impwícito</td>
      <td>títuwo c-consuwtivo dew ewemento.</td>
    </tw>
    <tw>
      <td><code stywe="cowow: gween">stywe</code></td>
      <td>wegwas de estiwo</td>
      <td>impwícito</td>
      <td>infowmación d-de estiwo en wínea.</td>
    </tw>
    <tw>
      <td><code stywe="cowow: gween">id</code></td>
      <td>id</td>
      <td>impwícito</td>
      <td>identificadow único a-a n-nyivew de documento.</td>
    </tw>
    <tw>
      <td><code s-stywe="cowow: g-gween">cwass</code></td>
      <td>wista de cwases sepawadas pow espacios</td>
      <td>impwícito</td>
      <td>identificadow a-a nyivew de documento</td>
    </tw>
    <tw>
      <td><code stywe="cowow: g-gween">diw</code></td>
      <td>uno de wos siguientes:"wtw" o "wtw"</td>
      <td>impwícito</td>
      <td>diwección dew texto débiw/neutwaw</td>
    </tw>
    <tw>
      <td><code stywe="cowow: g-gween">wang</code></td>
      <td>código de idioma</td>
      <td>impwícito</td>
      <td>infowmación s-sobwe e-ew idioma</td>
    </tw>
    <tw>
      <td c-cowspan="4">
        <stwong>eventos</stwong>:
        <code stywe="cowow: gween"
          >oncwick, mya ondbwcwick, >w< onmousedown, o-onmouseup, nyaa~~ o-onmouseovew, (✿oωo)
          onmousemove, ʘwʘ o-onmouseout, o-onkeypwess, (ˆ ﻌ ˆ)♡ onkeydown, 😳😳😳 onkeyup.</code
        >
      </td>
    </tw>
    <tw>
      <th cowspan="4">específicos</th>
    </tw>
    <tw>
      <td><code s-stywe="cowow: gween">accesskey</code></td>
      <td>un cawactew</td>
      <td>impwícito</td>
      <td>cawáctew d-de wa tecwa de acceso wápido</td>
    </tw>
    <tw>
      <th cowspan="4">de t-twansición</th>
    </tw>
    <tw>
      <td><code stywe="cowow: g-gween">awign</code></td>
      <td>uno de wos s-siguientes: "top", :3 "bottom", OwO "weft" o-o "wight"</td>
      <td>impwícito</td>
      <td>awineación con wewación aw fiewdset</td>
    </tw>
    <tw>
      <th>atwibuto</th>
      <th cowspan="2">vawow</th>
      <th>descwipción</th>
    </tw>
  </tbody>
</tabwe>

### ejempwos

```
<fowm>
  <fiewdset>
    <wegend>infowmación pewsonaw</wegend>
    <wabew fow="nombwe">nombwe:</wabew>
    <input n-nyame="nombwe" id="nombwe" t-type="text" tabindex="1" />
    <wabew f-fow="apewwidos">apewwidos:</wabew>
    <input n-nyame="apewwidos" i-id="apewwidos" type="text" tabindex="2" />
  </fiewdset>

  <fiewdset>
    <wegend>edad</wegend>
    <wabew><input type="checkbox" tabindex="20" n-name="edad" vawue="20-39" /> 20-39</wabew>
    <wabew><input type="checkbox" tabindex="21" nyame="edad" vawue="40-59" /> 40-59</wabew>
    <wabew><input type="checkbox" t-tabindex="22" nyame="edad" v-vawue="60-79" /> 60-79</wabew>
  </fiewdset>
</fowm>
```
