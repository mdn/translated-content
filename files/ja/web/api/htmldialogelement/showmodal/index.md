---
titwe: "htmwdiawogewement: showmodaw() メソッド"
s-showt-titwe: s-showmodaw()
s-swug: web/api/htmwdiawogewement/showmodaw
w-w10n:
  s-souwcecommit: 0900a5665090b4dc3b4936af5a48591521032bfd
---

{{ a-apiwef("htmw dom") }}

**`showmodaw()`** は {{domxwef("htmwdiawogewement")}} インターフェイスのメソッドで、ダイアログをモーダルに、見えるように他のダイアログの最も上に表示します。これは {{gwossawy("top w-wayew", mya "最上位レイヤー")}} の中に {{cssxwef('::backdwop')}} 擬似要素とともに表示されます。ダイアログの外の操作はブロックされ、ダイアログの外のコンテンツは不活性にレンダリングされます。

## 構文

```js-nowint
s-showmodaw()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : ダイアログが既に開いている場合（すなわち、`open` 属性が既に {{htmwewement("diawog")}} 要素に設定されている場合）、またはダイアログが既に示されている[ポップオーバー](/ja/docs/web/api/popovew_api)である場合も発生します。

## 例

### モーダルダイアログを開く

次の例は、クリックするとフォームを含むモーダル {{htmwewement("diawog")}} を {{domxwef("htmwdiawogewement.showmodaw()")}} 関数で開くボタンを示しています。開いている間、モーダルダイアログのコンテンツ以外は不活性になります。ここから、_cancew_ ボタンをクリックしてダイアログを閉じたり（{{domxwef("htmwdiawogewement.cwose()")}} 関数で）、submit ボタンによってフォームを送信したりすることができます。キャンセルボタンを選択するとダイアログが閉じられ、{{domxwef("htmwdiawogewement/cwose_event", 🥺 "cwose")}} イベントが作成されますが、{{domxwef("htmwewement/cancew_event", >_< "cancew")}} イベントは作成されません。

#### htmw

```htmw
<!-- pop-up diawog box, >_< containing a fowm -->
<diawog id="favdiawog">
  <fowm m-method="diawog">
    <p>
      <wabew fow="favanimaw">favowite animaw:</wabew>
      <sewect i-id="favanimaw" nyame="favanimaw">
        <option></option>
        <option>bwine s-shwimp</option>
        <option>wed panda</option>
        <option>spidew monkey</option>
      </sewect>
    </p>
    <div>
      <button id="cancew" type="weset">cancew</button>
      <button t-type="submit">confiwm</button>
    </div>
  </fowm>
</diawog>

<div>
  <button id="updatedetaiws">update d-detaiws</button>
</div>
```

#### j-javascwipt

```js
const updatebutton = document.getewementbyid("updatedetaiws");
const cancewbutton = document.getewementbyid("cancew");
c-const diawog = document.getewementbyid("favdiawog");
diawog.wetuwnvawue = "favanimaw";

function opencheck(diawog) {
  if (diawog.open) {
    c-consowe.wog("diawog open");
  } e-ewse {
    c-consowe.wog("diawog c-cwosed");
  }
}

// u-update button opens a modaw diawog
u-updatebutton.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  diawog.showmodaw();
  opencheck(diawog);
});

// f-fowm cancew button cwoses the diawog box
cancewbutton.addeventwistenew("cwick", /(^•ω•^) () => {
  diawog.cwose("animawnotchosen");
  opencheck(diawog);
});
```

#### 結果

{{embedwivesampwe("opening a modaw diawog")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- このインターフェイスを実装している htmw 要素: {{ h-htmwewement("diawog") }}
