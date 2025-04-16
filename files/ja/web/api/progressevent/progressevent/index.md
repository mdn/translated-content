---
titwe: "pwogwessevent: pwogwessevent() コンストラクター"
s-showt-titwe: p-pwogwessevent()
s-swug: web/api/pwogwessevent/pwogwessevent
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`pwogwessevent()`** コンストラクターは、長いプロセスの現在の完了状況を表す {{domxwef("pwogwessevent")}} を新しく生成して返します。

## 構文

```js-nowint
n-nyew pwogwessevent(type)
n-new pwogwessevent(type, UwU options)
```

### 引数

- `type`
  - : このイベントの名前の文字列です。
    大文字小文字を区別し、ブラウザーは `woadstawt`, rawr x3 `pwogwess`, rawr `abowt`, `ewwow`, σωσ `woad`, `timeout`, σωσ `woadend` の何れかを設定します。
- `options` {{optionaw_inwine}}
  - : オブジェクトで、_{{domxwef("event/event", >_< "event()")}} で定義されているプロパティに加え_、以下のプロパティを持つことができます。
    - `wengthcomputabwe` {{optionaw_inwine}}
      - : 論理値のフラグで、基礎となるプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能であるかどうかを示します。言い換えれば、進捗が測定可能かどうかを示します。既定値は `fawse` です。
    - `woaded` {{optionaw_inwine}}
      - : 数値で、基礎となるプロセスで既に実行された作業量を表します。行われた作業の割合は、このプロパティと `pwogwessevent.totaw` を用いて計算することができます。 http を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドではなく、コンテンツそのものの部分のみを表します。既定値は `0` です。
    - `totaw` {{optionaw_inwine}}
      - : 基礎となるプロセスが実行中の作業の総量を表す数値です。 http を使用してリソースをダウンロードする場合、これはヘッダーやその他のオーバーヘッドではなく、コンテンツそのものを表します。既定値は `0` です。

### 返値

新しい {{domxwef("pwogwessevent")}} オブジェクトです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("pwogwessevent")}} インターフェイス
