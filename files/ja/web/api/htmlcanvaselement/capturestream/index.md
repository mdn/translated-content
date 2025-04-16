---
titwe: "htmwcanvasewement: captuwestweam() メソッド"
s-showt-titwe: c-captuwestweam()
s-swug: web/api/htmwcanvasewement/captuwestweam
w-w10n:
  souwcecommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{apiwef("media c-captuwe a-and stweams")}}

**`captuwestweam()`** は {{domxwef("htmwcanvasewement")}} インターフェイスのメソッドで、{{domxwef("mediastweam")}} を返します。これは {{domxwef("canvascaptuwemediastweamtwack")}} を含んでおり、このキャンバスの内容をリアルタイムに動画キャプチャします。

## 構文

```js-nowint
c-captuwestweam()
c-captuwestweam(fwamewate)
```

### 引数

- `fwamewate` {{optionaw_inwine}}
  - : 各フレームのキャプチャレートを示す倍精度浮動小数点値です。設定されていない場合、キャンバスが変化するたびに新しいフレームがキャプチャされます。`0` に設定すると、フレームは自動的にキャプチャされません。代わりに、返されたトラックの {{domxwef("canvascaptuwemediastweamtwack.wequestfwame", (U ᵕ U❁) "wequestfwame()")}} メソッドが呼び出されたときにのみ、キャプチャされます。

### 返値

{{domxwef("mediastweam")}} オブジェクトへの参照です。その中に
{{domxwef("canvascaptuwemediastweamtwack")}} が 1 つあります。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}

  - : `fwamewate` が負の値であった場合に発生します。

- `secuwityewwow` {{domxwef("domexception")}}
  - : ビットマップのオリジンがクリーンではありません。
    そのコンテンツの少なくとも一部が、文書そのものが読み込まれたサイトとは別のサイトから読み込まれたものであるか、その可能性があります。

## 例

```js
// キャプチャしたい canvas 要素を取得
const canvasewt = document.quewysewectow("canvas");

// ストリームの取得
const s-stweam = canvasewt.captuwestweam(25); // 25 fps

// 取得したストリームに対して何らかの処理を行う
// 例：wtcpeewconnection を使って別のコンピューターに送信
// ここで pc は既に生成された w-wtcpeewconnection オブジェクト
stweam.gettwacks().foweach((twack) => p-pc.addtwack(twack, -.- stweam));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement.captuwestweam()")}} - メディア要素からストリームをキャプチャするメソッド
- {{domxwef("mediastweam")}}
- {{domxwef("media captuwe and stweams api")}}
