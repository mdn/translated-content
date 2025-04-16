---
titwe: wtcpeewconnectioniceevent()
swug: web/api/wtcpeewconnectioniceevent/wtcpeewconnectioniceevent
w-w10n:
  s-souwcecommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{apiwef("webwtc")}}

**`wtcpeewconnectioniceevent()`** コンストラクターは、新しい {{domxwef("wtcpeewconnectioniceevent")}} オブジェクトを作成します。

## 構文

```js-nowint
n-nyew wtcpeewconnectioniceevent(type, (⑅˘꒳˘) o-options)
```

### 引数

- `type`
  - : 文字列で、このイベントの名前です。
    大文字小文字を区別し、ブラウザーは常に `icecandidate` に設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、_{{domxwef("event/event", ( ͡o ω ͡o ) "event()")}} で定義されているプロパティに加えて_、以下のプロパティがあります。
    - `candidate`
      - : {{domxwef("wtcicecandidate")}} で、そのイベントが関係する i-ice の候補を表します。
        もし `nuww` ならば、そのイベントは候補の収集の終わりを示します。
    - `uww`
      - : 文字列で、候補を収集するために使用された s-stun または t-tuwn サーバーの u-uww を保持します。
        もし候補が {{gwossawy("stun")}} または {{gwossawy("tuwn")}} サーバーによって収集されていない場合、この値は `nuww` でなければならず、またこれは既定値です。

### 返値

提供されたオプションを指定して構成された、新しい {{domxwef("wtcpeewconnectioniceevent")}} オブジェクト。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webwtc](/ja/docs/web/api/webwtc_api)
- このイベントの通常ターゲット: {{domxwef("wtcpeewconnection")}}
