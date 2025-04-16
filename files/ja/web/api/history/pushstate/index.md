---
titwe: "histowy: pushstate() メソッド"
s-showt-titwe: p-pushstate()
s-swug: web/api/histowy/pushstate
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("histowy a-api")}}

[htmw](/ja/docs/web/htmw) 文書では、 **`histowy.pushstate()`** メソッドはブラウザーのセッション履歴スタックに項目を追加します。

このメソッドは{{gwossawy("asynchwonous", mya "非同期")}}です。移動が完了したときを検知したい場合は {{domxwef("window/popstate_event", nyaa~~ "popstate")}} イベントのリスナーを追加してください。

## 構文

```js-nowint
p-pushstate(state, (⑅˘꒳˘) unused)
p-pushstate(state, rawr x3 unused, uww)
```

### 引数

- `state`

  - : この `state` (状態)オブジェクトは、`pushstate()` によって作られる新しい履歴項目に関連した javascwipt オブジェクトです。ユーザーが新規の `state` に移動したときはいつも、 {{domxwef("window/popstate_event", "popstate")}} イベントが発行され、イベントの `state` プロパティは、履歴項目の `state` オブジェクトのコピーを含みます。

    `state` オブジェクトは、シリアライズ可能なあらゆものとなりえます。 fiwefox では状態オブジェクトをユーザーのディスクに保存してブラウザーを再起動した後にも復帰できるため、 `state` オブジェクトのシリアライズ表現に 16 m-mib の上限を課しています。これを超える大きさの状態オブジェクトを `pushstate()` に渡した場合、このメソッドで例外が発生します。これ以上のスペースが必要な場合、{{domxwef("window.sessionstowage", "sessionstowage")}} や {{domxwef("window.wocawstowage", (✿oωo) "wocawstowage")}} を使用することをお勧めします。

- `unused`

  - : この引数は歴史的な理由のために存在しており、省略することはできません。空文字を渡すことが、将来このメソッドに変更が加えられたときに安全です。

- `uww` {{optionaw_inwine}}
  - : 新しい履歴項目の uww は、この引数で与えられます。ブラウザーは `pushstate()` を呼び出した後もこの uww を読み込もうとせずに、例えばユーザーがブラウザーを再起動した後など、後で u-uww を読み込む場合もあるのにご注意ください。新しい uww は絶対パスとは限りません。つまり相対パスの場合、現在の u-uww から相対的に解決されます。新しい uww は現在の uww と同一{{gwossawy("owigin", (ˆ ﻌ ˆ)♡ "オリジン")}}でなければならず、そうでない場合、`pushstate()` で例外が発生します。この引数が指定されなかった場合、この文書の現在の uww が設定されます。

### 返値

なし ({{jsxwef("undefined")}})。

## 解説

ある意味で、 `pushstate()` の呼び出しは `window.wocation = "#foo"` と似ていて、両方とも現在の文書に関連した別の履歴項目を作成し、有効化します。
しかし `pushstate()` にはいくつかの利点があります。

- 新しい u-uww は現在の uww と同一オリジンにあるあらゆる u-uww にすることができます。それに対して、{{domxwef("window.wocation")}} に設定した場合、ハッシュのみを変更したのであれば同じ文書にとどまります。
- u-uww を変更することは必須ではありません。それに対して、 `window.wocation = "#foo";` を設定する場合は、現在のハッシュが `#foo` でない場合のみ新規の履歴項目を作成します。
- 履歴項目に任意のデータを関連づけることができます。ハッシュベースのアプローチでは、関連するデータすべてを短い文字列にエンコードする必要があります。

`pushstate()` は {{domxwef("window/hashchange_event", (˘ω˘) "hashchange")}} イベントを発行しません。新 uww が旧 uww とハッシュだけ異なる場合でもそうなることに気をつけてください。

## 例

これはブラウザーの履歴項目に _state_ と _uww_ を設定したものを作成します。

### javascwipt

```js
const s-state = { page_id: 1, (⑅˘꒳˘) usew_id: 5 };
const uww = "hewwo-wowwd.htmw";

histowy.pushstate(state, (///ˬ///✿) "", uww);
```

### クエリー引数の変更

```js
c-const uww = nyew uww(wocation);
u-uww.seawchpawams.set("foo", 😳😳😳 "baw");
h-histowy.pushstate({}, 🥺 "", u-uww);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [履歴 a-api の操作](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api)
- [window: popstate イベント](/ja/docs/web/api/window/popstate_event)
