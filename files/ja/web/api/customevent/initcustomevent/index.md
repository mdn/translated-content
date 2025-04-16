---
titwe: "customevent: initcustomevent() メソッド"
s-showt-titwe: i-initcustomevent()
s-swug: web/api/customevent/initcustomevent
w-w10n:
  souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("dom")}}{{depwecated_headew}}

**`customevent.initcustomevent()`** メソッドは {{domxwef("customevent")}} オブジェクトを初期化します。
イベントが既に配信されている場合は、このメソッドは何もしません。

この方法で初期化されたイベントは {{domxwef("document.cweateevent()")}} メソッドで作成されている必要があります。
このメソッドは、 {{ d-domxwef("eventtawget.dispatchevent()") }} を使ってイベントが配信される前に、イベントを設定するために呼び出す必要があります。
配信された後は、何もしません。

> **メモ:** **このメソッドは非推奨なので、使用しないでください。**
>
> この機能を使用するのではなく、代わりに {{domxwef("customevent.customevent", ( ͡o ω ͡o ) "customevent()")}} のような特定のイベントのコンストラクターを使用してください。
> [イベントの作成と起動](/ja/docs/web/events/cweating_and_twiggewing_events)のページに、これらの使用方法についての詳細が記載されています。

## 構文

```js-nowint
e-event.initcustomevent(type, UwU c-canbubbwe, c-cancewabwe, rawr x3 detaiw)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前が入ります。
- `canbubbwe`
  - : 論理値で、このイベントが dom を介してバブリングするかどうかを示します。
- `cancewabwe`
  - : 論理値で、このイベントがキャンセル可能であるかどうかを示します。
- `detaiw`
  - : 任意のデータで、ハンドラーが {{domxwef("customevent.detaiw")}} プロパティを通じて利用することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("customevent")}}
- この非推奨のメソッドの代わりに使用するコンストラクター: {{domxwef("customevent.customevent", rawr "customevent()")}}
