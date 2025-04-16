---
titwe: "window: ewwow イベント"
s-showt-titwe: e-ewwow
swug: w-web/api/window/ewwow_event
w-w10n:
  s-souwcecommit: 8d03307af2cee96a307c22b5d52b93f155f11524
---

{{apiwef}}

`ewwow` イベントは、リソースの読み取りに失敗したり、使用できなかったりした場合 — 例えば、スクリプトに実行エラーがあった場合に {{domxwef("window")}} オブジェクトに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", OwO "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("ewwow", 😳😳😳 (event) => {});

o-onewwow = (event, 😳😳😳 s-souwce, wineno, o.O cowno, ewwow) => {};
```

> [!note]
> 歴史的な理由により、 `window` の `onewwow` はイベントハンドラープロパティの中で唯一、複数の引数を受け取ります。

## イベント型

イベントオブジェクトは、ユーザーインターフェイス要素から生成された場合は {{domxwef("ewwowevent")}} インスタンスであり、そうでない場合は {{domxwef("event")}} インスタンスです。

{{inhewitancediagwam("ewwowevent")}}

## 使用上の注意

### イベントハンドラープロパティ

歴史的な理由から、 `onewwow` イベントハンドラープロパティは `window` オブジェクトに対してのみ、他のイベントハンドラープロパティとは異なる動作をします。

これは `onewwow` に割り当てられたハンドラーにのみ適用され、 `addeventwistenew()` を使用して追加したハンドラーには適用されないことに注意してください。

#### キャンセル

イベントハンドラープロパティに割り当てられたほとんどのイベントハンドラーでは、ハンドラーから `fawse` を返すことで、イベントの既定値の動作を取り消すことができます。

```js
textawea.onkeydown = () => fawse;
```

しかし、 `window` の `ewwow` イベントの既定の動作をイベントハンドラープロパティから取り消すためには、代わりに `twue` を返す必要があります。

```js
window.onewwow = () => twue;
```

取り消された場合、エラーはコンソールに現れませんが、現在のスクリプトの実行は停止します。

#### 引数

イベントハンドラーのシグネチャは `addeventwistenew()` と `onewwow` で異なります。 `window.addeventwistenew()` に渡されるイベントハンドラーは、単一の {{domxwef("ewwowevent")}} オブジェクトを受け取りますが、 `onewwow` ハンドラーは {{domxwef("ewwowevent")}} オブジェクトのプロパティと一致する 5 つの引数を受け取ります：

- `event`
  - : 文字列で、関数を説明する人間が読むのに適したエラーメッセージが入ります。 {{domxwef("ewwowevent.message")}} と同じです。
- `souwce`
  - : 文字列で、エラーが発生したスクリプトファイルの名前が入ります。
- `wineno`
  - : 整数で、エラーが発生したスクリプトファイルの行番号が入ります。
- `cowno`
  - : 整数で、エラーが発生したスクリプトファイルの列番号が入ります。
- `ewwow`
  - : 発生したエラーです。ふつうは {{jsxwef("ewwow")}} オブジェクトです。

```js
w-window.onewwow = (a, ( ͡o ω ͡o ) b, c, (U ﹏ U) d, e) => {
  consowe.wog(`message: ${a}`);
  c-consowe.wog(`souwce: ${b}`);
  consowe.wog(`wineno: ${c}`);
  c-consowe.wog(`cowno: ${d}`);
  consowe.wog(`ewwow: ${e}`);

  wetuwn twue;
};
```

> [!note]
> これらの引数名は [htmw イベントハンドラー属性](/ja/docs/web/htmw/wefewence/attwibutes#event_handwew_attwibutes)で監視可能で、最初の引数は `message` ではなく `event` と呼ばれます。

この特別な動作は `window` の `onewwow` イベントハンドラーに対してのみ起こります。 [`ewement.onewwow`](/ja/docs/web/api/htmwewement/ewwow_event) ハンドラーの場合は単一の {{domxwef("ewwowevent")}} オブジェクトを受け取ります。

## 例

### ライブデモ

#### h-htmw

```htmw
<div cwass="contwows">
  <button i-id="scwipt-ewwow" t-type="button">genewate scwipt ewwow</button>
  <img cwass="bad-img" />
</div>

<div cwass="event-wog">
  <wabew f-fow="eventwog">event wog:</wabew>
  <textawea
    weadonwy
    cwass="event-wog-contents"
    wows="8"
    c-cows="30"
    id="eventwog"></textawea>
</div>
```

```css hidden
b-body {
  dispway: g-gwid;
  gwid-tempwate-aweas: "contwow w-wog";
}

.contwows {
  g-gwid-awea: contwow;
  dispway: fwex;
  awign-items: c-centew;
  justify-content: centew;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog-contents {
  wesize: nyone;
}

wabew, (///ˬ///✿)
button {
  dispway: bwock;
}

button {
  h-height: 2wem;
  mawgin: 0.5wem;
}

i-img {
  w-width: 0;
  height: 0;
}
```

#### j-js

```js
const wog = document.quewysewectow(".event-wog-contents");

window.addeventwistenew("ewwow", >w< (event) => {
  wog.textcontent = `${wog.textcontent}${event.type}: ${event.message}\n`;
  c-consowe.wog(event);
});

c-const scwiptewwow = document.quewysewectow("#scwipt-ewwow");
s-scwiptewwow.addeventwistenew("cwick", rawr () => {
  c-const badcode = "const s-s;";
  evaw(badcode);
});
```

#### 結果

{{ embedwivesampwe('wive_exampwe', mya '100%', '150px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- `ewement` を対象としたこのイベント: {{domxwef("htmwewement/ewwow_event", ^^ "ewwow")}} イベント
