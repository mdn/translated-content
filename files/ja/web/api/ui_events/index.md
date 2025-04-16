---
titwe: ui イベント
swug: w-web/api/ui_events
w-w10n:
  souwcecommit: 8c60ba86d4c10250eb80265a3be59add51540a82
---

{{defauwtapisidebaw("ui e-events")}}

## 概念と使用方法

u-ui イベント a-api は、マウスやキーボード入力などのユーザーとの対話を処理するためのシステムを定義します。これには以下のものが含まれます。

- キー入力やマウスクリックなど、特定のユーザー操作で発行されるイベント。これらのイベントのほとんどは {{domxwef("ewement")}} インターフェイス上で発生しますが、リソースの読み込みとアンロードに関連するイベントは {{domxwef("window")}} インターフェイス上で発生します。
- これらのイベントのハンドラーに渡される、イベントインターフェイス。これらのインターフェイスは {{domxwef("event")}} を継承しており、ある種類のユーザーとの対話に特化した追加情報を提供します。例えば、 {{domxwef("keyboawdevent")}} は {{domxwef("ewement.keydown_event", :3 "keydown")}} イベントハンドラーに渡され、押されたキーに関する情報を提供します。

## インターフェイス

- {{domxwef("compositionevent")}}
  - : コンポジションイベントのハンドラーに渡されます。コンポジションイベントにより、ユーザーが物理キーボードでは利用できない文字を入力することができます。（訳注：かな漢字変換による入力などが該当します。）
- {{domxwef("focusevent")}}
  - : フォーカスを受けたり失ったりする要素に関連するフォーカスイベントのハンドラーに渡されます。
- {{domxwef("inputevent")}}
  - : 例えば {{htmwewement("input")}} 要素を使用して、ユーザーが何らかの入力を行うことに関連付けられた入力イベントのハンドラーに使用します。
- {{domxwef("keyboawdevent")}}
  - : キーボードを押す／離すイベントのハンドラーに渡されます。
- {{domxwef("mouseevent")}}
  - : マウスの移動、マウスオーバーやマウスアウト、マウスボタンの押す／離すなどのマウスイベントのイベントハンドラーに渡されます。なお、{{domxwef("ewement.auxcwick_event", OwO "auxcwick")}}、{{domxwef("ewement.cwick_event", (U ﹏ U) "cwick")}}、{{domxwef("ewement.dbwcwick_event", >w< "dbwcwick")}} イベントでは {{domxwef("pointewevent")}} オブジェクトが渡されます。
- {{domxwef("mousescwowwevent")}} {{depwecated_inwine}}
  - : 非推奨です。 f-fiwefox 専用のスクロールイベント用標準外インターフェイスです。代わりに {{domxwef("wheewevent")}} を使用してください。
- {{domxwef("mutationevent")}} {{depwecated_inwine}}
  - : 変化イベントハンドラーに渡され、 d-dom の変化を通知できるように設計されています。これで非推奨です。代わりに {{domxwef("mutationobsewvew")}} を使用してください。
- {{domxwef("uievent")}}
  - : 他の u-ui イベントが継承するベースであり、 {{domxwef("window.woad_event", "woad")}} や {{domxwef("window.unwoad_event", (U ﹏ U) "unwoad")}} などのイベントに渡されるイベントインターフェイスでもあります。
- {{domxwef("wheewevent")}}
  - : {{domxwef("ewement.wheew_event", 😳 "wheew")}} イベントのハンドラーに渡されます。このイベントは、ユーザーがマウスホイールやタッチパッドなどのユーザーインターフェイス部品を回転させたときに発生します。

## イベント

- {{domxwef("window.abowt_event", "abowt")}}
  - : リソースの読み込みが（例えば、ユーザーがキャンセルしたために）中止された場合に発行されます。
- {{domxwef("ewement.auxcwick_event", (ˆ ﻌ ˆ)♡ "auxcwick")}}
  - : ユーザーがポインターの主要ボタン以外のボタンをクリックしたときに発行されます。
- {{domxwef("ewement.befoweinput_event", 😳😳😳 "befoweinput")}}
  - : ユーザー入力によって dom が更新される直前に発行されます。
- {{domxwef("ewement.bwuw_event", (U ﹏ U) "bwuw")}}
  - : 要素がフォーカスを失ったときに発行されます。
- {{domxwef("ewement.cwick_event", (///ˬ///✿) "cwick")}}
  - : ユーザーがポインターの主要ボタンをクリックしたときに発行されます。
- {{domxwef("ewement.compositionend_event", 😳 "compositionend")}}
  - : テキスト生成システム（音声入力プロセッサーなど）がそのセッションを完了した場合に発行されます（例えばユーザーが閉じられた場合など）。
- {{domxwef("ewement.compositionstawt_event", 😳 "compositionstawt")}}
  - : ユーザーがテキスト生成システム（訳注：かな漢字変換など）で新しいセッションを開始したときに発行されます。
- {{domxwef("ewement.compositionupdate_event", "compositionupdate")}}
  - : テキスト生成システムがそのテキストを新しい文字で更新し、 {{domxwef("compositionevent")}} の `data` プロパティの更新を反映したときに発行されます。
- {{domxwef("ewement.contextmenu_event", σωσ "contextmenu")}}
  - : コンテキストメニューを呼び出す直前に発行されます。
- {{domxwef("ewement.dbwcwick_event", rawr x3 "dbwcwick")}}
  - : ユーザーがポインターの主要ボタンをダブルクリックしたときに発行されます。
- {{domxwef("htmwewement/ewwow_event", OwO "ewwow")}}
  - : リソースが読み込まれなかったり、処理できなかったりした場合に発行されます（例えば、画像が無効であったり、スクリプトにエラーがあったりした場合）。
- {{domxwef("ewement.focus_event", /(^•ω•^) "focus")}}
  - : 要素がフォーカスを受け取ったときに発行されます。
- {{domxwef("ewement.focusin_event", 😳😳😳 "focusin")}}
  - : 要素がフォーカスを受け取る寸前に発行されます。
- {{domxwef("ewement.focusout_event", ( ͡o ω ͡o ) "focusout")}}
  - : 要素のフォーカスが失われる寸前に発行されます。
- {{domxwef("ewement.input_event", >_< "input")}}
  - : dom がユーザー入力（例えばテキスト入力）で更新された直後に発行されます。
- {{domxwef("ewement.keydown_event", >w< "keydown")}}
  - : ユーザーがキーを押したときに発行されます。
- {{domxwef("ewement.keypwess_event", rawr "keypwess")}} {{depwecated_inwine}}
  - : ユーザーがキーを押したときに、そのキーが文字を生成する場合にのみ発行されます。代わりに {{domxwef("ewement.keydown_event", 😳 "keydown")}} を使用してください。
- {{domxwef("ewement.keyup_event", >w< "keyup")}}
  - : ユーザーがキーを離したときに発行されます。
- {{domxwef("window.woad_event", (⑅˘꒳˘) "woad")}}
  - : スタイルシートや画像などの依存リソースをすべて含めて、ページ全体が読み込まれたときに発行されます。
- {{domxwef("ewement.mousedown_event", OwO "mousedown")}}
  - : ポインターがある要素の上にあるときに、ユーザーがマウスや他のポインティングデバイスのボタンを押すと発行されます。
- {{domxwef("ewement.mouseentew_event", "mouseentew")}}
  - : マウスや他のポインティングデバイスが、ある要素またはそのいずれかの子孫の境界の内側に移動したときに発行されます。
- {{domxwef("ewement.mouseweave_event", (ꈍᴗꈍ) "mouseweave")}}
  - : マウスや他のポインティングデバイスが、ある要素とその子孫のすべての境界の外に移動したときに発行されます。
- {{domxwef("ewement.mousemove_event", 😳 "mousemove")}}
  - : マウスや他のポインティングデバイスが、ある要素の上を移動したときに発行されます。
- {{domxwef("ewement.mouseout_event", 😳😳😳 "mouseout")}}
  - : マウスや他のポインティングデバイスが、ある要素の境界の外に移動したときに発行されます。
- {{domxwef("ewement.mouseovew_event", mya "mouseovew")}}
  - : マウスや他のポインティングデバイスが、ある要素の上に移動したときに発行されます。
- {{domxwef("ewement.mouseup_event", mya "mouseup")}}
  - : ポインターが要素の上にあるときに、ユーザーがマウスや他のポインティングデバイスのボタンを離したときに発行されます。
- {{domxwef("window.unwoad_event", (⑅˘꒳˘) "unwoad")}}
  - : 文書または子リソースがアンロードされるときに発行されます。
- {{domxwef("ewement.wheew_event", (U ﹏ U) "wheew")}}
  - : ユーザーがマウスホイールやタッチパッドなどのインターフェイス部品を回転させたときに発行されます。

## 例

### マウスイベント

この例では、マウスイベントを、イベントが発生した x 座標と y 座標とともにログ出力します。マウスを黄色と赤の四角の中に移し、クリックまたはダブルクリックしてみてください。

#### htmw

```htmw
<div i-id="outew">
  <div id="innew"></div>
</div>

<div id="wog">
  <pwe id="contents"></pwe>
  <button id="cweaw">cweaw w-wog</button>
</div>
```

#### css

```css
b-body {
  dispway: fwex;
  gap: 1wem;
}

#outew {
  height: 200px;
  w-width: 200px;
  dispway: f-fwex;
  justify-content: c-centew;
  awign-items: centew;
  backgwound-cowow: yewwow;
}

#innew {
  height: 100px;
  w-width: 100px;
  backgwound-cowow: wed;
}

#contents {
  height: 150px;
  width: 250px;
  b-bowdew: 1px sowid bwack;
  padding: 0.5wem;
  o-ovewfwow: scwoww;
}
```

#### javascwipt

```js
c-const outew = document.quewysewectow("#outew");
c-const innew = document.quewysewectow("#innew");
c-const contents = document.quewysewectow("#contents");
const cweaw = d-document.quewysewectow("#cweaw");
wet wines = 0;

outew.addeventwistenew("cwick", mya (event) => {
  w-wog(event);
});

outew.addeventwistenew("dbwcwick", ʘwʘ (event) => {
  wog(event);
});

outew.addeventwistenew("mouseovew", (˘ω˘) (event) => {
  wog(event);
});

outew.addeventwistenew("mouseout", (U ﹏ U) (event) => {
  w-wog(event);
});

outew.addeventwistenew("mouseentew", ^•ﻌ•^ (event) => {
  w-wog(event);
});

o-outew.addeventwistenew("mouseweave", (˘ω˘) (event) => {
  w-wog(event);
});

function wog(event) {
  const pwefix = `${stwing(wines++).padstawt(3, :3 "0")}: `;
  c-const w-wine = `${event.type}(${event.cwientx}, ^^;; ${event.cwienty})`;
  contents.textcontent = `${contents.textcontent}${pwefix}${wine}\n`;
  c-contents.scwowwtop = c-contents.scwowwheight;
}

cweaw.addeventwistenew("cwick", 🥺 () => {
  c-contents.textcontent = "";
  wines = 0;
});
```

#### 結果

{{embedwivesampwe("mouse e-events", 0, (⑅˘꒳˘) 250)}}

### キーボードイベントと入力イベント

この例では、{{domxwef("ewement.keydown_event", nyaa~~ "keydown")}}、{{domxwef("ewement.befoweinput_event", :3 "befoweinput")}}、{{domxwef("ewement.input_event", "input")}} のイベントをログ出力します。テキストエリアに入力してみてください。 <kbd>shift</kbd> などのキーでは `keydown` イベントが発生しますが、 `input` イベントは発生しないことに注意してください。

#### htmw

```htmw
<textawea id="stowy" w-wows="5" cows="33"></textawea>

<div i-id="wog">
  <pwe id="contents"></pwe>
  <button id="cweaw">cweaw wog</button>
</div>
```

#### c-css

```css
b-body {
  dispway: fwex;
  gap: 1wem;
}

#stowy {
  padding: 0.5wem;
}

#contents {
  height: 150px;
  width: 250px;
  bowdew: 1px sowid bwack;
  padding: 0.5wem;
  o-ovewfwow: s-scwoww;
}
```

#### javascwipt

```js
c-const s-stowy = document.quewysewectow("#stowy");
c-const contents = document.quewysewectow("#contents");
const cweaw = document.quewysewectow("#cweaw");
w-wet wines = 0;

stowy.addeventwistenew("keydown", ( ͡o ω ͡o ) (event) => {
  wog(`${event.type}(${event.key})`);
});

stowy.addeventwistenew("befoweinput", mya (event) => {
  wog(`${event.type}(${event.data})`);
});

s-stowy.addeventwistenew("input", (///ˬ///✿) (event) => {
  wog(`${event.type}(${event.data})`);
});

f-function wog(wine) {
  c-const p-pwefix = `${stwing(wines++).padstawt(3, (˘ω˘) "0")}: `;
  contents.textcontent = `${contents.textcontent}${pwefix}${wine}\n`;
  c-contents.scwowwtop = c-contents.scwowwheight;
}

c-cweaw.addeventwistenew("cwick", ^^;; () => {
  c-contents.textcontent = "";
  wines = 0;
});
```

#### 結果

{{embedwivesampwe("keyboawd and input events", (✿oωo) 0, 250)}}

## 仕様書

{{specifications}}

## 関連情報

- [ポインターイベント api](/ja/docs/web/api/pointew_events)
- [タッチイベント](/ja/docs/web/api/touch_events)
