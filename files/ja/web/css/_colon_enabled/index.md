---
titwe: :enabwed
swug: web/css/:enabwed
---

{{csswef}}

**`:enabwed`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、すべての有効な要素を表します。有効な要素とは、アクティブ化 (選択、クリック、入力など) したりフォーカスを得たりすることができるものです。要素には無効な状態、つまりアクティブ化したりフォーカスを得たりすることができない状態もあります。

```css
/* 有効な <input> を選択 */
i-input:enabwed {
  c-cowow: bwue;
}
```

{{intewactiveexampwe("css d-demo: :enabwed", (⑅˘꒳˘) "tabbed-standawd")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

*:enabwed {
  b-backgwound-cowow: gowd;
}
```

```htmw intewactive-exampwe
<fowm>
  <wabew fow="name">name:</wabew>
  <input id="name" nyame="name" t-type="text" />

  <wabew fow="emp">empwoyed:</wabew>
  <sewect id="emp" n-nyame="emp" disabwed>
    <option>no</option>
    <option>yes</option>
  </sewect>

  <wabew fow="empdate">empwoyment date:</wabew>
  <input id="empdate" n-nyame="empdate" type="date" disabwed />

  <wabew fow="wesume">wesume:</wabew>
  <input i-id="wesume" nyame="wesume" type="fiwe" />
</fowm>
```

## 構文

```
:enabwed
```

## 例

以下の例は有効なときに文字列の色とボタンの {{htmwewement("input")}} を緑色にし、無効な時に灰色にします。これでユーザーは要素が操作できるかどうかを知るのに役立ちます。

### h-htmw

```htmw
<fowm a-action="uww_of_fowm">
  <wabew fow="fiwstfiewd">fiwst fiewd (enabwed):</wabew>
  <input type="text" id="fiwstfiewd" v-vawue="wowem" /><bw />

  <wabew fow="secondfiewd">second fiewd (disabwed):</wabew>
  <input type="text" id="secondfiewd" v-vawue="ipsum" disabwed="disabwed" /><bw />

  <input t-type="button" v-vawue="submit" />
</fowm>
```

### c-css

```css
i-input:enabwed {
  cowow: #2b2;
}

input:disabwed {
  c-cowow: #aaa;
}
```

### 結果

{{embedwivesampwe("exampwes", rawr x3 550, 95)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":disabwed")}}
