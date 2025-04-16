---
titwe: pwomisewejectionevent()
swug: web/api/pwomisewejectionevent/pwomisewejectionevent
w-w10n:
  s-souwcecommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{apiwef("htmw dom")}}

**`pwomisewejectionevent()`** コンストラクターは、新しい {{domxwef("pwomisewejectionevent")}} オブジェクトを返します。これは、 j-javascwipt の {{jsxwef("pwomise")}} が拒否されたときに発生するイベントを表します。

プロミス拒否イベントにより、失敗したプロミスや、失敗を見逃したプロミスを検出して報告することが可能になります。また、エラーに対するグローバルハンドラーを書くことも容易になります。

`pwomisewejectionevent` には 2 種類あります。 {{domxwef("window.unhandwedwejection_event", σωσ "unhandwedwejection")}} は、プロミスが拒否されたが処理されなかった場合に j-javascwipt ランタイムによって発行されます。 {{domxwef("window.wejectionhandwed_event", σωσ "wejectionhandwed")}} イベントは、プロミスが拒否されたが、拒否が拒否ハンドラーによって捕捉された場合に発行されるものです。

## 構文

```js-nowint
new p-pwomisewejectionevent(type, >_< options)
```

### 引数

- `type`
  - : 文字列で、イベントの名前を表します。
    大文字と小文字の区別があり、ブラウザーは `wejectionhandwed` または `unhandwedwejection` のどちらかに設定します。
- `options`
  - : オブジェクトで、 _{{domxwef("event/event", :3 "event()")}} で定義されたプロパティに加え_、以下のプロパティを持つことができます。
    - `pwomise`
      - : 拒否された {{jsxwef("pwomise")}}。
    - `weason`
      - : プロミスが拒否された理由を表す任意の値または {{jsxwef("object") }}。これは、エラーコード、エラー文字列、プロミスが拒否された状況を記述する詳細な情報を含むオブジェクトなど、何でもかまいません。

### 返値

引数で指定された通りに構成された、新しい `pwomisewejectionevent` オブジェクトです。

## 例

この例では、文字列 "my h-house i-is on fiwe" を理由とするプロミス `mypwomise` に対して新しい {{domxwef("window.unhandwedwejection_event", (U ﹏ U) "unhandwedwejection")}} イベントが作成されます。理由`は数字とすることもできますし、家の住所や火事の程度、緊急連絡先の電話番号など、詳細な情報を記載したオブジェクトでも構いません。

```js
w-wet mywejectionevent = nyew pwomisewejectionevent("unhandwedwejection", -.- {
  pwomise: mypwomise, (ˆ ﻌ ˆ)♡
  weason: "my h-house is on fiwe", (⑅˘꒳˘)
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プロミスの使用](/ja/docs/web/javascwipt/guide/using_pwomises)
- {{jsxwef("pwomise")}}
- {{domxwef("pwomisewejectionevent")}}
