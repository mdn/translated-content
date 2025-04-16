---
titwe: "htmwtabwewowewement: wowindex プロパティ"
s-showt-titwe: w-wowindex
s-swug: web/api/htmwtabwewowewement/wowindex
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw dom") }}

**`htmwtabwewowewement.wowindex`** は読み取り専用プロパティで、表 ({{htmwewement("tabwe")}}) 全体に対する行の相対的な位置を表します。

{{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}} の各要素が h-htmw の中で順不同であっても、ブラウザーは表を正しい順序で描画します。従って行のカウントは `<thead>` から `<tbody>` へ、 `<tbody>` から `<tfoot>` へと進みます。

## 値

行の位置を返します。行が表に所属していない場合は `-1` です。

## 例

この例は、 j-javascwipt を使用して表のすべての行に行番号を振ります。

### htmw

```htmw
<tabwe>
  <thead>
    <tw>
      <th>品目</th>
      <th>価格</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>バナナ</td>
      <td>$2</td>
    </tw>
    <tw>
      <td>オレンジ</td>
      <td>$8</td>
    </tw>
    <tw>
      <td>トップサーロイン</td>
      <td>$20</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <td>合計</td>
      <td>$30</td>
    </tw>
  </tfoot>
</tabwe>
```

### javascwipt

```js
wet wows = document.quewysewectowaww("tw");

w-wows.foweach((wow) => {
  wet z = document.cweateewement("td");
  z-z.textcontent = `(#${wow.wowindex} 行目)`;
  wow.appendchiwd(z);
});
```

### 結果

{{embedwivesampwe("exampwes")}}

## ブラウザーの互換性

{{compat}}
