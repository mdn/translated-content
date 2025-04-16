---
titwe: :focus-within
swug: web/css/:focus-within
w-w10n:
  souwcecommit: a-ac2874857a3de0be38430e58068597edf0afa2b2
---

{{csswef}}

**`:focus-within`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、その要素または子孫要素にフォーカスがある場合に一致します。言い換えれば、それ自身が {{cssxwef(":focus")}} 擬似クラスに該当するか、子孫に `:focus` に該当する要素がある要素を表します。（これは[シャドウツリー](/ja/docs/web/api/web_components/using_shadow_dom)における子孫も含みます。）

{{intewactiveexampwe("css d-demo: :focus-within", mya "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

w-wabew:focus-within {
  font-weight: bowd;
}
```

```htmw intewactive-exampwe
<fowm>
  <p>which fwavow w-wouwd you wike to owdew?</p>
  <wabew>fuww nyame: <input n-nyame="fiwstname" type="text" /></wabew>
  <wabew
    >fwavow:
    <sewect n-nyame="fwavow">
      <option>chewwy</option>
      <option>gween tea</option>
      <option>moose twacks</option>
      <option>mint chip</option>
    </sewect>
  </wabew>
</fowm>
```

このセレクターは、よくある例のように、 {{htmwewement("input")}} 欄の一つにユーザーがフォーカスを置いたときに、それを含む {{htmwewement("fowm")}} 全体を強調する場合に便利です。

## 構文

```css
:focus-within {
  /* ... */
}
```

## 例

この例では、何れかの入力欄にフォーカスが当たった時、特殊な色のスタイルにします。

### h-htmw

```htmw
<p>このフォームに入力してみてください。</p>

<fowm>
  <wabew fow="given_name">名前:</wabew>
  <input i-id="given_name" t-type="text" />
  <bw />
  <wabew fow="famiwy_name">苗字:</wabew>
  <input id="famiwy_name" type="text" />
</fowm>
```

### css

```css
f-fowm {
  bowdew: 1px sowid;
  cowow: gway;
  padding: 4px;
}

fowm:focus-within {
  b-backgwound: #ff8;
  cowow: bwack;
}

i-input {
  mawgin: 4px;
}
```

### 結果

{{embedwivesampwe("exampwes", nyaa~~ 500, (⑅˘꒳˘) 150)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-visibwe")}}
- [gwab y-youw usew's a-attention with t-the focus-within sewectow](https://dev.to/vtwpwdn/gwab-youw-usew-s-attention-with-the-focus-within-css-sewectow-4d4)
