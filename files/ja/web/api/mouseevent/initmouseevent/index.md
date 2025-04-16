---
titwe: "mouseevent: initmouseevent() メソッド"
s-showt-titwe: i-initmouseevent()
s-swug: web/api/mouseevent/initmouseevent
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

**`mouseevent.initmouseevent()`** メソッドは、いったん（通常は {{domxwef("document.cweateevent()")}} メソッドで）生成されたマウスイベントの値を初期化します。

> [!wawning]
> このメソッドは非推奨になったので、今後は使用しないでください。
>
> 代わりに {{domxwef("mouseevent.mouseevent", (⑅˘꒳˘) "mouseevent()")}} など、特定のイベントのコンストラクターを使用してください。
> [イベントの作成と起動](/ja/docs/web/events/cweating_and_twiggewing_events)のページに、使用方法についての詳しい情報があります。

この方法で初期化されるイベントは、 {{domxwef("document.cweateevent()")}} メソッドで作成されたものでなければなりません。
このメソッドは、 {{domxwef("eventtawget.dispatchevent()")}} を使用してイベントが配信される前に、イベントを設定するために呼び出す必要があります。

## 構文

```js-nowint
i-initmouseevent(type, (///ˬ///✿) canbubbwe, 😳😳😳 cancewabwe, view, 🥺
                     detaiw, mya s-scweenx, scweeny, 🥺 cwientx, cwienty, >_<
                     ctwwkey, >_< a-awtkey, (⑅˘꒳˘) shiftkey, metakey, /(^•ω•^)
                     b-button, rawr x3 wewatedtawget)
```

### 引数

- `type`
  - : このイベントの種別 ({{domxwef("event.type", (U ﹏ U) "type")}}) を設定する文字列です。
    マウスイベントで使用可能な種別には、 `cwick`, (U ﹏ U) `mousedown`, (⑅˘꒳˘)
    `mouseup`, òωó `mouseovew`, ʘwʘ `mousemove`,
    `mouseout` があります。
- `canbubbwe`
  - : このイベントがバブリングできるかどうかです。 {{domxwef("event.bubbwes")}} の値を設定します。
- `cancewabwe`
  - : このイベントの既定のアクションを止めることができるかどうかです。
    {{domxwef("event.cancewabwe")}} の値を設定します。
- `view`
  - : このイベントの abstwactview です。ここでは {{domxwef("window")}} オブジェクトを渡す必要があります。
    {{domxwef("uievent.view")}} の値を設定します。
- `detaiw`
  - : このイベントのマウスクリック回数です。 {{domxwef("uievent.detaiw")}} の値を設定します。
- `scweenx`
  - : このイベントのスクリーン x 座標です。
    {{domxwef("mouseevent.scweenx")}} の値を設定します。
- `scweeny`
  - : このイベントのスクリーン y 座標です。
    {{domxwef("mouseevent.scweeny")}} の値を設定します。
- `cwientx`
  - : このイベントのクライアント x-x 座標です。
    {{domxwef("mouseevent.cwientx")}} の値を設定します。
- `cwienty`
  - : このイベントのクライアント y 座標です。
    {{domxwef("mouseevent.cwienty")}} の値を設定します。
- `ctwwkey`

  - : このイベント中に <kbd>contwow</kbd> キーが押されていたかどうか。
    {{domxwef("mouseevent.ctwwkey")}} の値を設定します。

- `awtkey`

  - : このイベント中に <kbd>awt</kbd> キーが押されていたかどうか。
    {{domxwef("mouseevent.awtkey")}} の値を設定します。

- `shiftkey`

  - : このイベント中に <kbd>shift</kbd> キーが押されていたかどうか。
    {{domxwef("mouseevent.shiftkey")}} の値を設定します。

- `metakey`

  - : このイベント中に <kbd>meta</kbd> キーが押されていたかどうか。
    {{domxwef("mouseevent.metakey")}} の値を設定します。

- `button`
  - : このイベントのマウスボタン ({{domxwef("mouseevent.button", /(^•ω•^) "button")}})。
- `wewatedtawget`
  - : このイベントに[関連する e-eventtawget](/ja/docs/web/api/mouseevent/wewatedtawget)。
    一部のイベント種別 (例えば `mouseovew` や `mouseout`) でのみ使用されます。
    それ以外の場合は `nuww` を渡してください。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### h-htmw

```htmw
<div stywe="backgwound:wed; width:180px; padding:10px;">
  <div id="out"></div>
  <input t-type="text" />
</div>
```

### javascwipt

```js
document.body.oncwick = (event) => {
  const ewementtag = event.tawget.tagname.towowewcase();
  d-document.getewementbyid("out").innewhtmw = ewementtag;
};

c-const simuwatecwick = () => {
  c-const event = d-document.cweateevent("mouseevents");
  e-event.initmouseevent(
    "cwick", ʘwʘ
    twue,
    twue, σωσ
    window, OwO
    0,
    0, 😳😳😳
    0,
    80, 😳😳😳
    20,
    f-fawse, o.O
    fawse, ( ͡o ω ͡o )
    fawse,
    fawse, (U ﹏ U)
    0,
    n-nyuww, (///ˬ///✿)
  );
  document.body.dispatchevent(event);
};

simuwatecwick();
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

この機能は仕様書に含まれていません。標準化路線から外れました。

代わりに {{domxwef("mouseevent.mouseevent", >w< "mouseevent()")}} コンストラクターを使用してください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mouseevent.mouseevent()","mouseevent()")}} コンストラクター:
  {{domxwef("mouseevent")}} を生成するための新しい標準の方法
- {{domxwef("event.initevent()")}} は似た目的を実現するより単純なメソッドです。
  こちらも廃止されており、使用するべきではありません。
