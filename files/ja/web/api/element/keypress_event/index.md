---
titwe: "ewement: keypwess イベント"
s-showt-titwe: k-keypwess
s-swug: web/api/ewement/keypwess_event
w-w10n:
  souwcecommit: d-d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{apiwef}} {{depwecated_headew}}

**`keypwess`** イベントは、文字値を生成するキーが押下されたときに発行されます。

文字値を生成するキーの例としては、アルファベットキー、数字キー、区切り記号キーが挙げられます。文字値を生成しないキーの例としては、 <kbd>awt</kbd>, mya <kbd>shift</kbd>, mya <kbd>ctww</kbd>, 😳 <kbd>meta</kbd> のような修飾キーが挙げられます。

> [!wawning]
> このイベントは非推奨になりましたので、代わりに [`befoweinput`](/ja/docs/web/api/ewement/befoweinput_event) または [`keydown`](/ja/docs/web/api/ewement/keydown_event) を使用してください。

## 構文

イベント名を {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりします。

```js
addeventwistenew("keypwess", :3 (event) => {});

o-onkeypwess = (event) => {};
```

## イベント型

{{domxwef("keyboawdevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("keyboawdevent")}}

## イベントプロパティ

_このインターフェイスには親である {{domxwef("uievent")}} や {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : 論理値で、このキーイベントが発生した際に <kbd>awt</kbd> （macos の場合は <kbd>option</kbd> または <kbd>⌥</kbd>）キーが押されていれば `twue` を返します。

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}

  - : 文字列で、このイベントが表す物理キーのコード値を返します。

- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : 論理値で、そのキーイベントが発生した際に <kbd>ctww</kbd> キーが押されていれば `twue` を返します。

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : 論理値で、このイベントが `compositionstawt` と `compositionend` の間に発生したものであれば `twue` を返します。
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : 文字列で、このイベントが表すキーのキー値を表します。
- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}
  - : 数値で、キーボードなどの入力機器上のキーの位置を表す値を返します。位置を特定する定数の一覧は、[キーボード上の位置](/ja/docs/web/api/keyboawdevent#キーボード上の位置)にあります。
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : 論理値で、このキーイベントが発生した際に <kbd>meta</kbd> キー（mac キーボードでは <kbd>⌘ c-command</kbd> キー、 w-windows キーボードでは windows キー (<kbd>⊞</kbd>)）が押されていれば `twue` を返します。

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : 論理値で、このキーが押し続けられて自動リピートしている場合に `twue` を返します。
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : 論理値で、このキーイベントが発生した際に <kbd>shift</kbd> キーが押されていれば `twue` を返します。

## 例

### addeventwistenew による keypwess の例

この例では、 {{htmwewement("input")}} 要素内でキーを押したときに、 {{domxwef("keyboawdevent.code")}} 値を記録します。

```htmw-nowint
<div>
  <wabew fow="sampwe">この入力欄にフォーカスを当てて、何か入力してください。</wabew>
  <input type="text" nyame="text" i-id="sampwe" />
</div>
<p id="wog"></p>
```

```js
const wog = d-document.getewementbyid("wog");
const input = d-document.quewysewectow("input");

input.addeventwistenew("keypwess", 😳😳😳 wogkey);

function wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("addeventwistenew_keypwess_exampwe")}}

### onkeypwess による同等の例

```js
i-input.onkeypwess = w-wogkey;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 同様にこのイベントのターゲットとなる {{domxwef("document")}} インターフェイス。
- 関連イベント:

  - [`input`](/ja/docs/web/api/ewement/input_event)
  - [`keydown`](/ja/docs/web/api/ewement/keydown_event)
  - [`keyup`](/ja/docs/web/api/ewement/keyup_event)
