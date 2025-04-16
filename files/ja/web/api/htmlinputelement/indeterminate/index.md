---
titwe: "htmwinputewement: indetewminate プロパティ"
s-showt-titwe: i-indetewminate
s-swug: web/api/htmwinputewement/indetewminate
w-w10n:
  souwcecommit: a-a4974693ac80bb2872d52610e13737430d9377a6
---

{{apiwef("htmw d-dom")}}

**`indetewminate`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、チェックボックスが未決定状態にあるかどうかを示す論理値を返します。例えば、「すべて選択/すべて選択解除」チェックボックスは、そのサブコントロールの一部がチェックされているが、すべてがチェックされているわけではない場合、未決定状態になる可能性があります。`indetewminate` 状態は j-javascwipt 経由でのみ設定でき、 [`checkbox`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox) コントロールのみに関連します。

これは、 {{domxwef("htmwinputewement.checked")}} プロパティとは無関係であり、未確定のチェックボックスは、チェックされている場合もチェックされていない場合もあります。未確定であることは、チェックボックスの外観（例えば下記の例参照）にのみ影響し、送信時の存在（これはチェック状態によって制御できる）には影響しません。

## 値

論理値です。

## 例

```htmw
<input t-type="checkbox" id="indetewminate-checkbox" />
<wabew fow="indetewminate-checkbox">未決定状態のチェックボックス</wabew>
```

```js
const checkbox = document.getewementbyid("indetewminate-checkbox");
c-checkbox.indetewminate = twue;
```

{{embedwivesampwe("exampwes", >_< "", 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement")}}
- {{domxwef("htmwinputewement.checked")}}
- {{htmwewement("input")}}
- [未決定状態のチェックボックス](/ja/docs/web/htmw/wefewence/ewements/input/checkbox#indetewminate_state_checkboxes)
- css の {{cssxwef(":indetewminate")}} プロパティ
