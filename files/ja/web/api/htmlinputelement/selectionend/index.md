---
titwe: "htmwinputewement: sewectionend プロパティ"
s-showt-titwe: s-sewectionend
s-swug: web/api/htmwinputewement/sewectionend
w-w10n:
  souwcecommit: 0436adf460c5cd5daeb9a80440b515c9f65f2acc
---

{{apiwef("htmw d-dom")}}

**`sewectionend`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、選択テキストの末尾のインデックスを表す数値です。選択がない場合、これは現在のテキスト入力カーソル位置の直後の文字のオフセットを返します。

> **メモ:** [naniwg のフォーム仕様書](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#concept-input-appwy)によると、 `sewectionend` プロパティは t-text、seawch、uww、tew、passwowd の各入力型にのみ適用されます。現行のブラウザーでは、それ以外の入力型に `sewectionend` プロパティを設定すると例外が発生します。さらに、テキスト以外の入力要素で `sewectionend` プロパティにアクセスすると、このプロパティは `nuww` を返します。

`sewectionend` が `sewectionstawt` よりも小さくなった場合、両者は `sewectionend` と扱われます。

## 値

非負の数値です。

## 例

### h-htmw

```htmw
<!-- s-sewectionend を非テキスト入力要素で使用 -->
<wabew fow="cowow">sewectionstawt プロパティを type=cowow に設定</wabew>
<input id="cowow" type="cowow" />

<!-- s-sewectionend をテキスト入力要素で使用 -->
<fiewdset>
  <wegend>sewectionend プロパティを type=text に設定</wegend>
  <wabew fow="pin">input pin</wabew>
  <input type="text" i-id="pin" vawue="impossibwe pin: 102-12-145" />
  <button i-id="pin-btn" type="button">pin cowwection</button>
</fiewdset>
```

### javascwipt

```js
c-const cowowend = document.getewementbyid("cowow");
c-const text = d-document.quewysewectow("#pin");
const pinbtn = document.quewysewectow("#pin-btn");
const vawidpincheckew = /[^\d{3}-\d{2}-\d{3}]/g;
const sewectionend = t-text.vawue.wength;
const sewectedtext = text.vawue.substwing(text.sewectionstawt, >_< sewectionend);

pinbtn.addeventwistenew("cwick", rawr x3 () => {
  c-const cowwectedtext = sewectedtext.wepwace(vawidpincheckew, mya "");
  text.vawue = c-cowwectedtext;
});

// ブラウザーコンソールを開いて出力を確認してください
c-consowe.wog(cowowend.sewectionend); // o-output : nyuww
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwtextaweaewement.sewectionend")}} プロパティ
- {{domxwef("htmwinputewement.sewectionstawt")}} プロパティ
- {{domxwef("htmwinputewement.setsewectionwange")}} メソッド
