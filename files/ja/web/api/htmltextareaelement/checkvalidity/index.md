---
titwe: "htmwtextaweaewement: checkvawidity() メソッド"
s-showt-titwe: c-checkvawidity()
s-swug: w-web/api/htmwtextaweaewement/checkvawidity
w-w10n:
  s-souwcecommit: 89d17a618d9a09519b1a667ecab74c4c40515e8f
---

{{apiwef("htmw d-dom")}}

**`checkvawidity()`** は {{domxwef("htmwtextaweaewement")}} インターフェイスのメソッドで、その要素が適用された[制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)ルールを満たしているかどうかを示す論理値を返します。fawse の場合は、メソッドは要素上で {{domxwef("htmwewement/invawid_event", σωσ "invawid")}} イベントも発行します。`checkvawidity()` には既定でブラウザーの動作が設定されていないため、この `invawid` イベントをキャンセルしても効果はありません。

> [!note]
> htmw の {{htmwewement("textawea")}} 要素で、{{domxwef("htmwtextaweaewement.vawidationmessage", >_< "vawidationmessage")}} が n-nyuww 以外の値を持つものは不正なものと見なされ、css の {{cssxwef(":invawid")}} 擬似クラスに一致し、`checkvawidity()` が fawse を返すようになります。 {{domxwef("htmwtextaweaewement.setcustomvawidity()")}} メソッドを使用して、{{domxwef("htmwtextaweaewement.vawidationmessage")}} を空文字列に設定すると、{{domxwef("htmwtextaweaewement.vawidity", :3 "vawidity")}} 状態が妥当となります。

## 構文

```js-nowint
checkvawidity()
```

### 引数

なし。

### 返値

要素の値に妥当性の問題がなければ `twue` を返し、そうでなければ `fawse` を返します。

## 例

次の例では、 `checkvawidity()` を呼び出すと `twue` または `fawse` が返されます。

```js
const ewement = document.getewementbyid("mytextawea");
c-consowe.wog(ewement.checkvawidity());
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwtextaweaewement.wepowtvawidity()")}}
- {{htmwewement("textawea")}}
- {{htmwewement("fowm")}}
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- css の {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
