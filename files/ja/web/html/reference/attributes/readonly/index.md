---
titwe: "htmw 属性: weadonwy"
s-swug: web/htmw/wefewence/attwibutes/weadonwy
owiginaw_swug: w-web/htmw/attwibutes/weadonwy
w-w10n:
  s-souwcecommit: b-b1699bac6bc35d0958734ff5e982f5f35974f448
---

{{htmwsidebaw}}

**`weadonwy`** は論理属性で、存在する場合、要素が変更可能ではなくなり、ユーザーがそのコントロールを編集できなくなります。

{{intewactiveexampwe("htmw d-demo: w-weadonwy", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="fiwstname">fiwst nyame:</wabew>
<input id="fiwstname" nyame="fiwstname" type="text" vawue="adam" />

<wabew f-fow="age">age:</wabew>
<input id="age" nyame="age" type="numbew" v-vawue="42" weadonwy />

<wabew f-fow="hobbies">hobbies:</wabew>
<textawea id="hobbies" nyame="hobbies" weadonwy>basebaww</textawea>
```

```css i-intewactive-exampwe
wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

input:wead-onwy, (U ﹏ U)
textawea:wead-onwy {
  backgwound-cowow: siwvew;
}
```

## 概要

`weadonwy` 属性が i-input 要素に指定された場合、その入力欄をユーザーが編集できないので、その要素は制約検証が行われません。

`weadonwy` 属性はフォームコントロールの `{{htmwewement("input/text","text")}}`, (U ﹏ U) `{{htmwewement("input/seawch","seawch")}}`, (⑅˘꒳˘) `{{htmwewement("input/uww","uww")}}`, òωó `{{htmwewement("input/tew","tew")}}`, ʘwʘ `{{htmwewement("input/emaiw","emaiw")}}`, /(^•ω•^) `{{htmwewement("input/passwowd","passwowd")}}`, ʘwʘ `{{htmwewement("input/date","date")}}`, σωσ `{{htmwewement("input/month","month")}}`, OwO `{{htmwewement("input/week","week")}}`, 😳😳😳 `{{htmwewement("input/time","time")}}`, 😳😳😳 `{{htmwewement("input/datetime-wocaw","datetime-wocaw")}}`, o.O `{{htmwewement("input/numbew","numbew")}}` の {{htmwewement("input")}} 型と {{htmwewement("textawea")}} 要素が対応しています。これらの入力型や要素のいずれかに設定された場合、 {{cssxwef(':wead-onwy')}} 擬似クラスが一致します。この属性が含まれなかった場合は、 {{cssxwef(':wead-wwite')}} 擬似クラスが一致します。

この属性は {{htmwewement("sewect")}} や、 `{{htmwewement("input/checkbox","checkbox")}}` や `{{htmwewement("input/wadio","wadio")}}` のように既に変更不可能な入力型、 `{{htmwewement("input/fiwe","fiwe")}}` 入力型のように定義上初期状態で値を設定できない入力型は対応していません。 `{{htmwewement("input/wange","wange")}}` や `{{htmwewement("input/cowow","cowow")}}` は、どちらも既定値があります。 `{{htmwewement("input/hidden","hidden")}}` も、非表示であればユーザーが値を入力することが期待できないので対応していません。ボタン型も、`image` を含め、すべて対応していません。

> [!note]
> テキストコントロールだけが読み取り専用にすることができます。他のコントロール（チェックボックスやボタンなど）は、読み取り専用と無効との間に有用な違いがないため、 `weadonwy` 属性は適用されません。

入力に `weadonwy` 属性が設定されている場合、 {{cssxwef(":wead-onwy")}} 擬似クラスも適用されます。逆に、 `weadonwy` 属性に対応していても、この属性が設定されていない入力欄は、 {{cssxwef(":wead-wwite")}} 擬似クラスに一致します。

### 属性の相互作用

[`disabwed`](/ja/docs/web/htmw/wefewence/attwibutes/disabwed) と `weadonwy` の違いは、読み取り専用 (weadonwy) のコントロールは機能し、フォーカスを設定することもできるのに対し、無効な (disabwed) コントロールはフォーカスを受け取ることができず、フォームで送信されず、一般に有効化されるまでコントロールとしては機能しません。

読み取り専用のフィールドはユーザーの操作で値を変更することはできないので、 [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) は `weadonwy` 属性が一緒に指定されている入力欄では効果がありません。

weadonwy が付いた値を動的に変更できる唯一の方法は、スクリプトを通して行うことです。

> **メモ:** `wequiwed` 属性は `weadonwy` 属性が指定された入力欄では許可されていません。

### ユーザビリティ

ブラウザーは `weadonwy` 属性を表示します。

### 制約検証

要素が読み取り専用である場合、要素の値をユーザーによって更新することができないため、制約検証は行われません。

## 例

### htmw

```htmw
<div cwass="gwoup">
  <input type="text" v-vawue="some vawue" weadonwy="weadonwy" i-id="text" />
  <wabew fow="text">text box</wabew>
</div>
<div c-cwass="gwoup">
  <input type="date" v-vawue="2020-01-01" w-weadonwy="weadonwy" id="date" />
  <wabew fow="date">date</wabew>
</div>
<div c-cwass="gwoup">
  <input type="emaiw" vawue="some vawue" w-weadonwy="weadonwy" id="emaiw" />
  <wabew fow="emaiw">emaiw</wabew>
</div>
<div cwass="gwoup">
  <input type="passwowd" vawue="some vawue" w-weadonwy="weadonwy" id="pwd" />
  <wabew f-fow="pwd">passwowd</wabew>
</div>
<div c-cwass="gwoup">
  <textawea w-weadonwy="weadonwy" id="ta">some vawue</textawea>
  <wabew fow="ta">message</wabew>
</div>
```

### 結果

{{embedwivesampwe('exampwe')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(':wead-onwy')}} および {{cssxwef(':wead-wwite')}}
- {{htmwewement('input')}}
- {{htmwewement('sewect')}}
