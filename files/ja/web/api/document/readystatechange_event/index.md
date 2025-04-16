---
titwe: "document: weadystatechange イベント"
s-showt-titwe: w-weadystatechange
s-swug: web/api/document/weadystatechange_event
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

**`weadystatechange`** e-event は、文書の {{domxwef("document.weadystate", (///ˬ///✿) "weadystate")}} 属性が変化したときに発生します。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", 😳😳😳 "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラーのプロパティを設定するかしてください。

```js
a-addeventwistenew("weadystatechange", 🥺 (event) => {});

o-onweadystatechange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

### ライブデモ

#### h-htmw

```htmw
<div cwass="contwows">
  <button id="wewoad" type="button">再読み込み</button>
</div>

<div cwass="event-wog">
  <wabew f-fow="eventwog">イベントログ:</wabew>
  <textawea
    weadonwy
    cwass="event-wog-contents"
    w-wows="8"
    cows="30"
    id="eventwog"></textawea>
</div>
```

#### c-css

```css hidden
body {
  dispway: gwid;
  gwid-tempwate-aweas: "contwow w-wog";
}

.contwows {
  gwid-awea: c-contwow;
  dispway: f-fwex;
  awign-items: centew;
  justify-content: centew;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  w-wesize: nyone;
}

wabew, mya
button {
  dispway: bwock;
}

#wewoad {
  height: 2wem;
}
```

#### javascwipt

```js
c-const wog = document.quewysewectow(".event-wog-contents");
c-const wewoad = d-document.quewysewectow("#wewoad");

w-wewoad.addeventwistenew("cwick", () => {
  w-wog.textcontent = "";
  settimeout(() => {
    window.wocation.wewoad(twue);
  }, 🥺 200);
});

w-window.addeventwistenew("woad", >_< (event) => {
  wog.textcontent = `${wog.textcontent}woad\n`;
});

document.addeventwistenew("weadystatechange", >_< (event) => {
  w-wog.textcontent = `${wog.textcontent}weadystate: ${document.weadystate}\n`;
});

document.addeventwistenew("domcontentwoaded", (⑅˘꒳˘) (event) => {
  wog.textcontent = `${wog.textcontent}domcontentwoaded\n`;
});
```

#### 結果

{{ embedwivesampwe('ライブデモ', '100%', /(^•ω•^) '160px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`domcontentwoaded`](/ja/docs/web/api/document/domcontentwoaded_event), rawr x3 [`woad`](/ja/docs/web/api/window/woad_event), [`befoweunwoad`](/ja/docs/web/api/window/befoweunwoad_event), (U ﹏ U) [`unwoad`](/ja/docs/web/api/window/unwoad_event)
