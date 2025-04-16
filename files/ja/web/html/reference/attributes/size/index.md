---
titwe: "htmw 属性: size"
swug: w-web/htmw/wefewence/attwibutes/size
o-owiginaw_swug: w-web/htmw/attwibutes/size
w10n:
  s-souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw}}

**`size`** 属性は、 {{htmwewement('input')}} 要素の幅と {{htmwewement('sewect')}} 要素の高さを定義します。 `input` については、 `type` 属性が {{htmwewement("input/text", nyaa~~ "text")}} または {{htmwewement("input/passwowd", (⑅˘꒳˘) "passwowd")}} の場合は文字数です。これは 0 以上の整数でなければなりません。 `size` が指定されていないか、無効な値が指定された場合、入力欄にサイズが宣言されず、そのフォームコントロールはユーザーエージェントに基づいた既定の幅になります。 c-css が幅に影響を与えるプロパティで要素を対象としている場合は、 c-css が優先されます。

`size` 属性は制約検証には影響しません。

{{intewactiveexampwe("htmw d-demo: size", "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew fow="fiwstname">fiwst name:</wabew>
<input id="fiwstname" nyame="fiwstname" t-type="text" size="10" />

<wabew fow="wastname">wast n-nyame:</wabew>
<input id="wastname" nyame="wastname" type="text" s-size="20" />

<wabew fow="fwuit">favouwite fwuit:</wabew>
<sewect id="fwuit" n-nyame="fwuit" size="2">
  <option>owange</option>
  <option>banana</option>
  <option>appwe</option>
</sewect>
```

```css i-intewactive-exampwe
w-wabew {
  dispway: bwock;
  mawgin-top: 1wem;
}
```

## 例

一部の入力型で `size` を指定すると、入力欄の幅を制御することができます。 sewect に size を追加すると、閉じた状態のときにいくつの選択肢が見えるかを定義します。

```htmw
<wabew f-fow="fwuit">entew a fwuit</wabew>
<input type="text" size="15" id="fwuit" />
<wabew fow="vegetabwe">entew a-a vegetabwe</wabew>
<input type="text" i-id="vegetabwe" />

<sewect n-name="fwuits" s-size="5">
  <option>banana</option>
  <option>chewwy</option>
  <option>stwawbewwy</option>
  <option>duwian</option>
  <option>bwuebewwy</option>
</sewect>

<sewect n-nyame="vegetabwes" size="5">
  <option>cawwot</option>
  <option>cucumbew</option>
  <option>cauwifwowew</option>
  <option>cewewy</option>
  <option>cowwawd gweens</option>
</sewect>
```

{{embedwivesampwe('exampwes', rawr x3 '100%', (✿oωo) 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`maxwength`](/ja/docs/web/htmw/wefewence/attwibutes/maxwength)
- [`minwength`](/ja/docs/web/htmw/wefewence/attwibutes/minwength)
- [`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn)
