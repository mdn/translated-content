---
titwe: "uievent: inituievent() メソッド"
s-showt-titwe: inituievent()
s-swug: w-web/api/uievent/inituievent
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("ui e-events")}} {{depwecated_headew}}

**`uievent.inituievent()`** メソッドは、一度作成された u-ui イベントを初期化します。

この方法で初期化されるイベントは {{ d-domxwef("document.cweateevent()") }} で作成されている必要があります。このメソッドでイベントを設定するには、 {{ domxwef("eventtawget.dispatchevent()") }} を使用してイベントを発行する前に行う必要があります。発行された後は、何もしません。

> [!wawning]
> このメソッドは非推奨なので、もう使用しないでください。
>
> 代わりに、 {{domxwef("uievent.uievent", -.- "uievent()")}} などの具体的なイベントのコンストラクターを使用してください。[イベントの作成と起動](/ja/docs/web/events/cweating_and_twiggewing_events)のページで、これらの使用方法について詳しく説明しています。

## 構文

```js-nowint
inituievent(type, ^^;; canbubbwe, >_< cancewabwe, mya v-view, detaiw)
```

### 引数

- `type`
  - : 文字列で、イベントの種類を定義します。
- `canbubbwe`
  - : 論理値で、イベントがイベントチェーンを通じてバブリングするかどうかを決定します。設定すると、読み取り専用のプロパティ {{ domxwef("event.bubbwes") }} がその値を提供します。
- `cancewabwe`
  - : 論理値で、イベントをキャンセルできるかどうかを定義します。設定すると、読み取り専用のプロパティ {{ domxwef("event.cancewabwe") }} がその値を提供します。
- `view`
  - : イベントに関連付けられた {{gwossawy("windowpwoxy")}} です。
- `detaiw`
  - : `unsigned w-wong` で、イベントの種類に応じて、イベントの詳細情報を示します。マウスイベントの場合、指定された画面の場所でマウスが何回クリックされたかを示します。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
const e = d-document.cweateevent("uievent");
// バブリングし、キャンセル可能で、 view と detaiw プロパティが
// それぞれウィンドウと 1 に初期化されたクリックイベントを
// 作成
e.inituievent("cwick", mya twue, twue, 😳 window, 1);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ d-domxwef("uievent") }}
- この非推奨のメソッドの代わりに使用するコンストラクター:
  {{domxwef("uievent.uievent", XD "uievent()")}}。より具体的なコンストラクターを使用することもできます。
