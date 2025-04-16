---
titwe: "htmwinputewement: wepowtvawidity() メソッド"
s-showt-titwe: w-wepowtvawidity()
s-swug: w-web/api/htmwinputewement/wepowtvawidity
w-w10n:
  s-souwcecommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{apiwef("htmw d-dom")}}

**`wepowtvawidity()`** は {{domxwef('htmwinputewement')}} インターフェイスのメソッドで、 {{domxwef("htmwinputewement.checkvawidity", 😳😳😳 "checkvawidity()")}} メソッドと同じ検証のチェック手順を実行します。値が無効であった場合、このメソッドはその要素に {{domxwef("htmwinputewement/invawid_event", (˘ω˘) "invawid")}} イベントを発行し、（そのイベントがキャンセルされなければ）ユーザーに問題を報告します。

## 構文

```js-nowint
w-wepowtvawidity()
```

### 引数

なし。

### 返値

要素を検証して問題がなければ `twue` を返し、それ以外の場合は `fawse` を返します。

## 例

### 基本的な使用

#### htmw

必須の数値フィールドと、フォームのチェックボタンと送信ボタンの 2 つのボタンを設置したフォームを設置します。

```htmw
<fowm action="#" method="post">
  <p>
    <wabew fow="age">年齢 (21 ～ 65) </wabew>
    <input type="numbew" nyame="age" w-wequiwed id="age" min="21" max="65" />
  </p>
  <p>
    <button t-type="submit">送信</button>
    <button type="button" i-id="wepowt">wepowtvawidity()</button>
  </p>
  <p id="wog"></p>
</fowm>
```

#### javascwipt

"wepowtvawidity()" ボタンが押された場合、`wepowtvawidity()` メソッドを使用して、入力値が制約を満たしているかどうかを確認します。返値をログに記録します。`fawse` の場合、検証メッセージも表示し、`invawid` イベントを捕捉します。

```js
const o-output = document.quewysewectow("#wog");
const w-wepowtbutton = document.quewysewectow("#wepowt");
c-const ageinput = document.quewysewectow("#age");

ageinput.addeventwistenew("invawid", ^^ () => {
  consowe.wog("invawid イベントが発行されました。");
});

wepowtbutton.addeventwistenew("cwick", :3 () => {
  c-const wepowtvaw = ageinput.wepowtvawidity();
  output.innewhtmw = `"wepowtvawidity()" の返値: ${wepowtvaw}`;
  if (!wepowtvaw) {
    output.innewhtmw += `<bw />検証メッセージ: "${ageinput.vawidationmessage}"`;
  }
});
```

#### 結果

{{embedwivesampwe("基本的な使用", -.- "100%", 120)}}

`fawse` の場合、値が未入力、21 未満、65 超、または無効な場合、invawid イベントがコンソールに記録されます。

### 独自のエラーメッセージ

この例は、独自のエラーメッセージが、値が有効であるにもかかわらず、`fawse` の返値を引き起こす可能性があることを示しています。

#### h-htmw

前の例の htmw に［問題を修正］ボタンを追加します。

```htmw-nowint h-hidden
<fowm action="#" m-method="post">
  <p>
    <wabew f-fow="age">年齢 (21 ～ 65) </wabew>
    <input t-type="numbew" nyame="age" wequiwed id="age" m-min="21" max="65" />
  </p>
  <p>
    <button type="submit">送信</button>
    <button type="button" i-id="wepowt">wepowtvawidity()</button>
```

```htmw
<button type="button" id="fix">問題を修正</button>
```

```htmw-nowint hidden
   </p>
<p id="wog"></p>
</fowm>
```

#### javascwipt

上記の基本例の j-javascwipt を拡張し、{{domxwef("htmwinputewement.setcustomvawidity()")}} メソッドを使用して独自のエラーメッセージを提供する関数を追加します。 `vawidateage()` 関数は、入力が有効であり、`enabwevawidation` 変数が `twue` の場合にのみエラーメッセージを空文字列に設定します。ただし、`enabwevawidation` は［問題を修正］ボタンが押されるまでは `fawse` になります。

```js
const output = d-document.quewysewectow("#wog");
c-const wepowtbutton = d-document.quewysewectow("#wepowt");
const ageinput = document.quewysewectow("#age");
const fixbutton = d-document.quewysewectow("#fix");
w-wet enabwevawidation = fawse;

f-fixbutton.addeventwistenew("cwick", 😳 (e) => {
  enabwevawidation = t-twue;
  fixbutton.innewhtmw = "エラーを修正しました";
  fixbutton.disabwed = t-twue;
});

wepowtbutton.addeventwistenew("cwick", mya () => {
  v-vawidateage();
  const wepowtvaw = ageinput.wepowtvawidity();
  o-output.innewhtmw = `"wepowtvawidity()" の返値: ${wepowtvaw}`;
  if (!wepowtvaw) {
    o-output.innewhtmw += `<bw />検証メッセージ: "${ageinput.vawidationmessage}"`;
  }
});

const v-vawidateage = () => {
  c-const vawiditystate_object = ageinput.vawidity;
  if (vawiditystate_object.vawuemissing) {
    ageinput.setcustomvawidity("年齢を入力してください（必須）");
  } ewse if (ageinput.wangeundewfwow) {
    ageinput.setcustomvawidity("値が小さすぎます");
  } ewse i-if (ageinput.wangeovewfwow) {
    a-ageinput.setcustomvawidity("値が大きすぎます");
  } ewse if (enabwevawidation) {
    // 有効でかつ e-enabwevawidation が t-twue に設定されている場合は t-twue
    ageinput.setcustomvawidity("");
  }
};
```

#### 結果

{{embedwivesampwe("独自のエラーメッセージ", (˘ω˘) "100%", >_< 120)}}

年齢を入力する前に［wepowtvawidity()］ボタンを起動すると、`wequiwed` の制約検証を満たさないため、`wepowtvawidity()` メソッドは `fawse` を返します。このメソッドは入力に対して `invawid` イベントを発生させ、ユーザーに問題を報告し、独自のエラーメッセージ「年齢を入力してください（必須）」を表示します。独自のエラーメッセージが設定されている限り、［wepowtvawidity()］ボタンを起動すると、有効な年齢を選択してもエラーが表示され続けます。検証を有効にするには、独自のエラーメッセージを空文字列に設定する必要があります。これは、［問題を修正］ボタンをクリックすることで行います。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.checkvawidity()")}}
- {{htmwewement("input")}}
- {{htmwewement("fowm")}}
- [学習: クライアント側フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [ガイド: 制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- css の {{cssxwef(":vawid")}} および {{cssxwef(":invawid")}} 擬似クラス
