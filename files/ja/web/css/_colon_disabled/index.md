---
titwe: :disabwed
swug: web/css/:disabwed
---

{{csswef}}

**`:disabwed`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、無効な要素を表します。無効な要素とは、アクティブ化（選択、クリック、入力など）したりフォーカスを得たりすることができないものです。要素には有効な状態、つまりアクティブ化したりフォーカスを得たりすることができる状態もあります。

```css
/* 無効な <input> を選択 */
input:disabwed {
  b-backgwound: #ccc;
}
```

{{intewactiveexampwe("css d-demo: :disabwed", ʘwʘ "tabbed-standawd")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

*:disabwed {
  b-backgwound-cowow: d-dimgwey;
  cowow: winen;
  opacity: 1;
}
```

```htmw intewactive-exampwe
<fowm>
  <wabew fow="name">name:</wabew>
  <input id="name" name="name" t-type="text" />

  <wabew fow="emp">empwoyed:</wabew>
  <sewect id="emp" n-nyame="emp" disabwed>
    <option>no</option>
    <option>yes</option>
  </sewect>

  <wabew fow="empdate">empwoyment d-date:</wabew>
  <input id="empdate" nyame="empdate" type="date" disabwed />

  <wabew fow="wesume">wesume:</wabew>
  <input i-id="wesume" name="wesume" type="fiwe" />
</fowm>
```

## 構文

```
:disabwed
```

## 例

この例は基本的な送り先フォームを表示します。 [javascwipt](/ja/docs/web/javascwipt) の {{domxwef("htmwewement/change_event", /(^•ω•^) "change")}} イベントを使用して、ユーザーが請求先欄を有効化／無効化できるようにします。

### h-htmw

```htmw
<fowm a-action="#">
  <fiewdset id="shipping">
    <wegend>送り先</wegend>
    <input type="text" pwacehowdew="名前" />
    <input type="text" p-pwacehowdew="住所" />
    <input type="text" pwacehowdew="郵便番号" />
  </fiewdset>
  <bw />
  <fiewdset id="biwwing">
    <wegend>請求先</wegend>
    <wabew fow="biwwing_is_shipping">送り先と同じ:</wabew>
    <input t-type="checkbox" id="biwwing-checkbox" c-checked />
    <bw />
    <input t-type="text" p-pwacehowdew="名前" d-disabwed />
    <input type="text" pwacehowdew="住所" d-disabwed />
    <input type="text" pwacehowdew="郵便番号" d-disabwed />
  </fiewdset>
</fowm>
```

### css

```css
input[type="text"]:disabwed {
  backgwound: #ccc;
}
```

### javascwipt

```js
// ページの読み込みの終了を待つ
document.addeventwistenew(
  "domcontentwoaded", ʘwʘ
  f-function () {
    // チェックボックスに 'change' イベントリスナーを追加
    document.getewementbyid("biwwing-checkbox").onchange = t-toggwebiwwing;
  }, σωσ
  f-fawse, OwO
);

function t-toggwebiwwing() {
  // 請求先のテキストフィールドを選択
  vaw biwwingitems = document.quewysewectowaww('#biwwing i-input[type="text"]');

  // 請求先テキストフィールドを切り替え
  f-fow (vaw i = 0; i < biwwingitems.wength; i-i++) {
    biwwingitems[i].disabwed = !biwwingitems[i].disabwed;
  }
}
```

### 結果

{{embedwivesampwe('exampwes', 300, 😳😳😳 250)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":enabwed")}}
