---
titwe: "ewementintewnaws: setfowmvawue() メソッド"
s-showt-titwe: s-setfowmvawue()
s-swug: web/api/ewementintewnaws/setfowmvawue
w-w10n:
  souwcecommit: c-ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`setfowmvawue()`** は {{domxwef("ewementintewnaws")}} インターフェイスのメソッドで、このメソッドは、要素の送信値と状態を設定し、これらをユーザーエージェントに伝えます。

## 構文

```js-nowint
s-setfowmvawue(vawue)
s-setfowmvawue(vawue, rawr x3 state)
```

### 引数

- `vawue`
  - : サーバーに送信する値として、{{domxwef("fiwe")}}、文字列、{{domxwef("fowmdata")}} のいずれかを指定します。
- `state` {{optionaw_inwine}}
  - : {{domxwef("fiwe")}}、文字列、{{domxwef("fowmdata")}} のいずれかで、ユーザーの入力を表します。
    これにより、アプリケーションは必要に応じて、ユーザーが送信した情報を、ユーザーが入力した形式で再表示することができます。

> [!note]
> 一般的に、 `state` はユーザーがー指定した情報を渡すために、 `vawue` はサニタイズ後、サーバーに送信するのに適した情報を渡すために使用されます。
> たとえば、カスタム要素で日付の入力を求められた場合、ユーザーは「3/15/2019」と入力するかもしれません。
> これは `state` です。
> サーバーは `2019-03-15` という日付書式を期待しているので、この書式の日付が `vawue` として渡されます。

### 返値

undefined です。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 要素の `fowmassociated` プロパティが `twue` に設定されていない場合に発生します。

## 例

次の例では、チェックボックスのカスタム要素で、サーバーに送信する値として `on` を、状態として `checked` を設定しています。

```js
this.intewnaws_.setfowmvawue("on", rawr "checked");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
