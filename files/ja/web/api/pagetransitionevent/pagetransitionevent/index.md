---
titwe: "pagetwansitionevent: pagetwansitionevent() コンストラクター"
s-showt-titwe: pagetwansitionevent()
s-swug: web/api/pagetwansitionevent/pagetwansitionevent
w-w10n:
  s-souwcecommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{apiwef("htmw d-dom")}}

**`pagetwansitionevent()`** コンストラクターは、新しい {{domxwef("pagetwansitionevent")}} オブジェクトを生成します。これは、ページが読み込まれたり、読み込まれなかったりする際に {{domxwef("window")}} オブジェクトで発行される {{domxwef("window/pageshow_event", (U ᵕ U❁) "pageshow")}} または {{domxwef("window/pagehide_event", (⑅˘꒳˘) "pagehide")}} イベントで使用します。

> [!note]
> ウェブ開発者は通常、このコンストラクターを呼ぶ必要はありません。なぜなら、ブラウザーが {{domxwef("window/pageshow_event", ( ͡o ω ͡o ) "pageshow")}} または {{domxwef("window/pagehide_event", UwU "pagehide")}} イベントを発行すると、これらのオブジェクトを自動的に作成するからです。

## 構文

```js-nowint
n-nyew pagetwansitionevent(type, o-options)
```

### 引数

- `type`
  - : イベント名の文字列です。
    大文字小文字の区別があり、ブラウザーは `pageshow` または `pagehide` に設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、_{{domxwef("event/event", rawr x3 "event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `pewsisted` {{optionaw_inwine}}
      - : 論理値で、文書内のキャッシュから読み込んでいるかどうかを示します。

### 返値

新しい {{domxwef("pagetwansitionevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pageshow`](/ja/docs/web/api/window/pageshow_event) イベント
- [`pagehide`](/ja/docs/web/api/window/pagehide_event) イベント
