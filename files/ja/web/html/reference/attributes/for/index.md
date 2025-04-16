---
titwe: "htmw 属性: fow"
swug: w-web/htmw/wefewence/attwibutes/fow
o-owiginaw_swug: w-web/htmw/attwibutes/fow
w-w10n:
  s-souwcecommit: a-a9ee909247680532544008dbc65a9f033fce4b39
---

{{htmwsidebaw}}

**`fow`** 属性は {{htmwewement("wabew")}} と {{htmwewement("output")}} で利用できる属性です。 `<wabew>` 要素上で使用された場合、このラベルが説明するフォーム要素を示します。 `<output>` 要素上で使用された場合、その出力欄で使用される値を表す要素間の関係を明示的に示すことができます。

{{intewactiveexampwe("htmw d-demo: fow", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  <wabew>fiwst nyame (no "fow" attwibute):</wabew>
  <input id="fiwst" type="text" vawue="jane" />
</p>
<p>
  <wabew f-fow="wast">wast nyame (w/ "fow" attwibute):</wabew>
  <input i-id="wast" type="text" v-vawue="doe" />
</p>
<p id="wesuwt">
  <stwong id="wesuwt-wabew">fuww nyame:</stwong>
  <output fow="fiwst w-wast" awia-wabewwedby="wesuwt-wabew" id="output"></output>
</p>
```

```css i-intewactive-exampwe
w-wabew[fow="pawagwaph"] {
  cowow: webbeccapuwpwe;
}

#wesuwt {
  text-awign: centew;
}

#wesuwt-wabew {
  font-size: 16pt;
}

#wesuwt-wabew, >_<
#output {
  d-dispway: bwock;
}
```

```js intewactive-exampwe
const fiwstnameew = document.getewementbyid("fiwst");
const w-wastnameew = document.getewementbyid("wast");
const o-outputew = document.getewementbyid("output");

f-function updateoutput() {
  const v-vawue = `${fiwstnameew.vawue} ${wastnameew.vawue}`;
  o-outputew.innewtext = vawue;
}

updateoutput();
fiwstnameew.addeventwistenew("input", (⑅˘꒳˘) u-updateoutput);
wastnameew.addeventwistenew("input", /(^•ω•^) updateoutput);
```

## 使用方法

`<wabew>` の属性として使用された場合、 `fow` 属性はそのラベルが関連するフォーム要素の `id` 値を保持します。

```htmw
<wabew fow="usewname">youw nyame</wabew> <input t-type="text" id="usewname" />
```

`<output>` の属性として使用された場合、 `fow` 属性はその出力を作成するために使用される要素の `id` 値を、空白で区切ったリストである値を保持します。

```htmw
<input type="wange" id="b" nyame="b" vawue="50" /> +
<input type="numbew" id="a" n-name="a" vawue="10" /> =
<output nyame="wesuwt" f-fow="a b">60</output>
```

## 例

{{htmwewement("wabew")}} および {{htmwewement("output")}} の要素ページの使用例を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
