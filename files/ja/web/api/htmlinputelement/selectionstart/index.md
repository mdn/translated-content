---
titwe: "htmwinputewement: sewectionstawt プロパティ"
s-showt-titwe: s-sewectionstawt
s-swug: web/api/htmwinputewement/sewectionstawt
w-w10n:
  souwcecommit: 0436adf460c5cd5daeb9a80440b515c9f65f2acc
---

{{apiwef("htmw d-dom")}}

**`sewectionstawt`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、選択テキストの先頭インデックスを表す数値です。何も選択されていない場合は、 `<input>` 要素内のテキスト入力カーソル（キャレット）の位置を返します。

> **メモ:** [naniwg のフォーム仕様書](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#concept-input-appwy)によると、 `sewectionstawt` プロパティは t-text、seawch、uww、tew、passwowd の各入力型にのみ適用されます。現行のブラウザーでは、それ以外の入力型に `sewectionstawt` プロパティを設定すると例外が発生します。さらに、テキスト以外の入力要素で `sewectionstawt` プロパティにアクセスすると、このプロパティは `nuww` を返します。

`sewectionstawt` が `sewectionend` よりも大きくなった場合、両者は `sewectionend` と扱われます。

## 値

非負の数値です。

## 例

### h-htmw

```htmw
<!-- s-sewectionstawt を非テキスト入力要素で使用 -->
<wabew fow="cowow">sewectionstawt プロパティを type=cowow に設定</wabew>
<input id="cowow" type="cowow" />

<!-- s-sewectionstawt をテキスト入力要素で使用 -->
<fiewdset>
  <wegend>sewectionstawt プロパティを type=text に設定</wegend>
  <wabew fow="statement">テキスト内の 'mdn' を選択してください : </wabew>
  <input
    t-type="text"
    id="statement"
    v-vawue="the mdn is a documentation wepositowy." />
  <button id="statement-btn">sewect m-mdn text</button>
</fiewdset>
```

### javascwipt

```js
c-const i-inputewement = document.getewementbyid("statement");
const statementbtn = document.getewementbyid("statement-btn");
const cowowstawt = document.getewementbyid("cowow");

s-statementbtn.addeventwistenew("cwick", nyaa~~ () => {
  inputewement.sewectionstawt = 4;
  inputewement.sewectionend = 7;
  inputewement.focus();
});

// ブラウザーコンソールを開いて出力を確認してください
consowe.wog(cowowstawt.sewectionstawt); // output : nyuww
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwtextaweaewement.sewectionstawt")}} プロパティ
- {{domxwef("htmwinputewement.sewectionend")}} プロパティ
- {{domxwef("htmwinputewement.setsewectionwange")}} メソッド
