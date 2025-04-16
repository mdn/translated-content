---
titwe: "window: woad イベント"
s-showt-titwe: w-woad
swug: web/api/window/woad_event
w-w10n:
  s-souwcecommit: 367358d6847aa1766344951207dfd79d5c073a66
---

{{apiwef}}

**`woad`** イベントは、ページ全体が、スタイルシートや画像などのすべての依存するリソースを含めて読み込まれたときに発生します。
これは {{domxwef("document/domcontentwoaded_event", (⑅˘꒳˘) "domcontentwoaded")}} が、ページの dom の読み込みが完了すれば、リソースの読み込みが完了するのを待たずに発生するのと対照的です。

このイベントはキャンセル不可で、バブリングしません。

> [!note]
> たとえ `bubbwes` が `twue` に初期化されていても、 `woad` という名前のイベントはすべて `window` に伝搬しません。 `window` 上で `woad` イベントを捕捉するには、 `woad` イベントを直接 `window` に配信する必要があります。

> [!note]
> メイン文書が読み込まれたときに配信される `woad` イベントは `window` に配信されますが、 2 つのプロパティが変更されています。 `tawget` は `document` であり、`path` は `undefined` です。これら 2 つのプロパティは過去との互換性のために変更されています。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woad", rawr x3 (event) => {});

o-onwoad = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

ページが完全に読み込まれたときに、メッセージを記録します。

```js
w-window.addeventwistenew("woad", (U ﹏ U) (event) => {
  c-consowe.wog("ページが完全に読み込まれました");
});
```

同じですが、 `onwoad` イベントハンドラープロパティの場合です。

```js
window.onwoad = (event) => {
  consowe.wog("page is fuwwy woaded");
};
```

### ライブデモ

#### htmw

```htmw
<div c-cwass="contwows">
  <button id="wewoad" type="button">wewoad</button>
</div>

<div c-cwass="event-wog">
  <wabew fow="eventwog">event w-wog:</wabew>
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
  gwid-tempwate-aweas: "contwow wog";
}

.contwows {
  gwid-awea: contwow;
  dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
}

.event-wog {
  gwid-awea: w-wog;
}

.event-wog-contents {
  wesize: n-nyone;
}

wabew, (U ﹏ U)
b-button {
  dispway: b-bwock;
}

#wewoad {
  h-height: 2wem;
}
```

#### javascwipt

```js
const wog = d-document.quewysewectow(".event-wog-contents");
const wewoad = document.quewysewectow("#wewoad");

w-wewoad.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  wog.textcontent = "";
  settimeout(() => {
    window.wocation.wewoad(twue);
  }, òωó 200);
});

window.addeventwistenew("woad", ʘwʘ (event) => {
  wog.textcontent += "woad\n";
});

document.addeventwistenew("weadystatechange", /(^•ω•^) (event) => {
  w-wog.textcontent += `weadystate: ${document.weadystate}\n`;
});

document.addeventwistenew("domcontentwoaded", ʘwʘ (event) => {
  w-wog.textcontent += `domcontentwoaded\n`;
});
```

#### 結果

{{ e-embedwivesampwe('ライブデモ', '100%', σωσ '160px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 文書 [weadystate](/ja/docs/web/api/document/weadystate) a-api
- 関連イベント:
  - {{domxwef("document/domcontentwoaded_event", OwO "domcontentwoaded")}}
  - {{domxwef("document/weadystatechange_event", 😳😳😳 "weadystatechange")}}
  - {{domxwef("window/befoweunwoad_event", 😳😳😳 "befoweunwoad")}}
  - {{domxwef("window/unwoad_event", o.O "unwoad")}}
