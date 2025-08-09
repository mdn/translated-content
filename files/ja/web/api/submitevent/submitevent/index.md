---
title: SubmitEvent()
slug: Web/API/SubmitEvent/SubmitEvent
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("HTML DOM")}}

**`SubmitEvent()`** コンストラクターは、新しい {{domxref("SubmitEvent")}} オブジェクトを作成して返します。これは {{Glossary("HTML")}} [フォーム](/ja/docs/Learn_web_development/Extensions/Forms)で発行された {{domxref("HTMLFormElement.submit_event", "submit")}} イベントを表現するために使用されます。

## 構文

```js-nolint
new SubmitEvent(type)
new SubmitEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列。
    大文字と小文字は区別され、ブラウザーは常に `submit` に設定します。
- `options` {{optional_inline}}
  - : オブジェクトで、 _{{domxref("Event/Event", "Event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `submitter` {{optional_inline}}
      - : フォームを送信するきっかけとなった送信ボタンである {{domxref('HTMLElement')}} オブジェクトです。

### 返値

指定された入力コントロールを使用して構成された {{domxref("SubmitEvent")}} オブジェクト。

## 例

このコードでは、現在の文書内のフォームを探し、そのフォームに `submit` クラスを持つ HTML {{HTMLElement("button")}} 探します。
次に、新しい {{domxref("SubmitEvent")}} を作成し、その {{domxref("SubmitEvent.submitter", "submitter")}} には、特定したボタン（またはボタンが見つからなかった場合は `null` ）を設定します。そして、イベントをフォームに送信し、ボタンによって送信されたことをフォームに指示します。

```js
const form = document.querySelector("form");
const formTrigger = form.querySelector("button.submit");
const submitEvent = new SubmitEvent("submit", { submitter: formTrigger });

form.dispatchEvent(submitEvent);
```

この例はやや作為的なもので、ほぼすべての処理をもっと簡単に行うことができますが、これによって処理を深く制御することができ、それが有用となる場合があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
