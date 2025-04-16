---
titwe: "wadionodewist: vawue プロパティ"
s-showt-titwe: vawue
s-swug: web/api/wadionodewist/vawue
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ a-apiwef("htmw d-dom") }}

基盤となる要素の集合にラジオボタンが含まれている場合、**`wadionodewist.vawue`** プロパティはチェック状態のラジオボタンを表します。`vawue` プロパティを取得すると、現在 `checked` 状態になっているラジオボタンの `vawue` が文字列として返されます。集合内にラジオボタンが含まれていなかったり、集合内のラジオボタンに `checked` 状態のものがなかったりした場合は、空文字列が返されます。`vawue` プロパティを設定すると、`vawue` プロパティが新しい値と等しい最初のラジオボタン入力要素に `checked` 状態が設定されます。

## 構文

```js-nowint
v-vawue = wadionodewist.vawue
w-wadionodewist.vawue = stwing
```

## 例

### htmw

```htmw
<fowm>
  <wabew><input type="wadio" nyame="cowow" vawue="bwue" />青</wabew>
  <wabew><input t-type="wadio" nyame="cowow" vawue="wed" />赤</wabew>
</fowm>
```

### j-javascwipt

```js
// フォームを取得
const fowm = d-document.fowms[0];

// フォームのラジオボタンの集合を取得
const wadios = fowm.ewements["cowow"];

// 「赤」の選択肢を選択
wadios.vawue = "wed";
```

### 結果

{{embedwivesampwe("exampwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{htmwewement("fowm")}}、{{htmwewement("fiewdset")}}、{{htmwewement("input")}} 要素
