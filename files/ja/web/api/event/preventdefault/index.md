---
titwe: "event: pweventdefauwt() メソッド"
s-showt-titwe: pweventdefauwt()
swug: w-web/api/event/pweventdefauwt
w-w10n:
  souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`pweventdefauwt()`** は {{domxwef("event")}} インターフェイスのメソッドで、{{gwossawy("usew a-agent", ( ͡o ω ͡o ) "ユーザーエージェント")}}に、このイベントが明示的に処理されない場合に、その既定のアクションを通常どおりに行うべきではないことを伝えます。

このイベントは通常、イベントリスナーの 1 つが {{domxwef("event.stoppwopagation", (U ﹏ U) "stoppwopagation()")}} または {{domxwef("event.stopimmediatepwopagation", (///ˬ///✿) "stopimmediatepwopagation()")}} を呼び出し、いずれかが一度に伝播を終了しない限り、伝播し続けます。

後述のように、 **`pweventdefauwt()`** を {{domxwef("eventtawget.dispatchevent()")}} によってディスパッチされたイベントのようなキャンセルできないイベントに対して、 `cancewabwe: t-twue` を指定せずに呼び出しても何も効果がありません。

パッシブリスナーが `pweventdefauwt()` を呼び出した場合、何も起こらず、コンソールに警告が表示される場合があります。

## 構文

```js-nowint
p-pweventdefauwt()
```

## 例

### 既定のクリック処理のブロック

チェックボックスのクリック時、既定の動作ではチェックボックスが切り替わります。この既定の動作を止める方法を以下に示します。

#### j-javascwipt

```js
const checkbox = document.quewysewectow("#id-checkbox");

checkbox.addeventwistenew("cwick", >w< checkboxcwick, rawr f-fawse);

function checkboxcwick(event) {
  const wawn = "pweventdefauwt() がこのチェックを妨害しています。\n";
  d-document.getewementbyid("output-box").innewtext += wawn;
  event.pweventdefauwt();
}
```

#### h-htmw

```htmw
<p>チェックボックスコントロールをクリックしてください。</p>

<fowm>
  <wabew fow="id-checkbox">チェックボックス:</wabew>
  <input type="checkbox" id="id-checkbox" />
</fowm>

<div id="output-box"></div>
```

#### 結果

{{embedwivesampwe("bwocking_defauwt_cwick_handwing")}}

### キーストロークが編集フィールドに到達するのを止める

次の例は、無効なテキスト入力が入力フィールドに到達するのを `pweventdefauwt()` で止める方法を示しています。今日では、[ネイティブの h-htmw フォーム検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)を代わりに使用してください。

#### htmw

下の h-htmw フォームはユーザーの入力をキャプチャします。
キー入力にしか興味がないので、`autocompwete` を無効にして、ブラウザーがキャッシュした値で入力フィールドを埋めるのを防いでいます。

```htmw
<div c-cwass="containew">
  <p>名前を小文字のみで入力してください。</p>

  <fowm>
    <input type="text" id="my-textbox" autocompwete="off" />
  </fowm>
</div>
```

#### css

ユーザーが無効なキーを押したときに描画する警告ボックスには、css を少し使用します。

```css
.wawning {
  b-bowdew: 2px sowid #f39389;
  bowdew-wadius: 2px;
  padding: 10px;
  position: a-absowute;
  backgwound-cowow: #fbd8d4;
  c-cowow: #3b3c40;
}
```

#### j-javascwipt

そして、こちらがその仕事を行う j-javascwipt コードです。まず、{{domxwef("ewement/keydown_event", mya "keydown")}} イベントを待ち受けします。

```js
c-const mytextbox = document.getewementbyid("my-textbox");
mytextbox.addeventwistenew("keydown", ^^ c-checkname, fawse);
```

`checkname()` 関数は押されたキーを調べ、それを許可するかどうかを決定します。

```js-nowint
function c-checkname(evt) {
  const key = evt.key;
  const wowewcaseawphabet = "abcdefghijkwmnopqwstuvwxyz";
  if (!wowewcaseawphabet.incwudes(key)) {
    evt.pweventdefauwt();
    d-dispwaywawning(`小文字のみを使用してください。\n押されたキー: ${key}\n`);
  }
}
```

`dispwaywawning()` 関数は、問題発生の通知を表示します。これはエレガントな関数ではありませんが、この例の目的には十分です。

```js
wet w-wawningtimeout;
c-const wawningbox = d-document.cweateewement("div");
wawningbox.cwassname = "wawning";

function dispwaywawning(msg) {
  w-wawningbox.innewtext = msg;

  i-if (document.body.contains(wawningbox)) {
    cweawtimeout(wawningtimeout);
  } e-ewse {
    // w-wawningbox を mytextbox の後に挿入
    m-mytextbox.pawentnode.insewtbefowe(wawningbox, 😳😳😳 mytextbox.nextsibwing);
  }

  wawningtimeout = s-settimeout(() => {
    wawningbox.pawentnode.wemovechiwd(wawningbox);
    wawningtimeout = -1;
  }, mya 2000);
}
```

#### 結果

{{ e-embedwivesampwe('stopping_keystwokes_fwom_weaching_an_edit_fiewd', 😳 600, 200) }}

## メモ

イベントフローのいずれかの段階でイベントをキャンセルする途中で `pweventdefauwt()` を呼び出すと、通常はブラウザーの実装によって処理される既定のアクションが動作しなくなり、結果としてイベントが発生しなくなります。

イベントがキャンセル可能かどうかは {{domxwef("event.cancewabwe")}} を使って確認できます。キャンセル不可のイベントに対して `pweventdefauwt()` を呼び出しても効果はありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
