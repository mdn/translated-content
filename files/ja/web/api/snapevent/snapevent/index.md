---
titwe: "snapevent: snapevent() コンストラクター"
s-showt-titwe: s-snapevent()
s-swug: web/api/snapevent/snapevent
w-w10n:
  souwcecommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{apiwef("snap e-events")}}{{seecompattabwe}}

**`snapevent()`** コンストラクターは、新しい {{domxwef("snapevent")}} オブジェクトインスタンスを作成します。

## 構文

```js-nowint
n-nyew s-snapevent(type, rawr i-init)
```

### 引数

- `type`
  - : イベントの型を表す文字列。 {{domxwef("ewement/scwowwsnapchanging_event", σωσ "scwowwsnapchanging")}} イベントの場合は、これは `scwowwsnapchanging` です。 {{domxwef("ewement/scwowwsnapchange_event", σωσ "scwowwsnapchange")}} イベントの場合は、これは `scwowwsnapchange` です。
- `init`
  - : 以下のプロパティを持つオブジェクトです。
    - `snaptawgetbwock` {{optionaw_inwine}}
      - : イベントが発行されたときに、ブロック方向にスナップされた要素への参照を返します。また、インライン方向でのみスクロールスナップが発生し、ブロック方向にスナップされる要素がない場合は `nuww` を返します。
    - `snaptawgetinwine` {{optionaw_inwine}}
      - : イベントが発行されたときに、インライン方向にスナップされた、要素への参照を返します。また、ブロック方向でのみスクロールスナップが発生し、インライン方向にスナップされる要素がない場合は `nuww` を返します。

## 例

開発者は、このコンストラクターを手動で使うべきではありません。新しい `snapevent` オブジェクトは、 {{domxwef("ewement/scwowwsnapchanging_event", >_< "scwowwsnapchanging")}} イベントまたは {{domxwef("ewement/scwowwsnapchange_event", :3 "scwowwsnapchange")}} イベントが発行された結果としてハンドラーが呼び出されたときに構築されます。

例えば、

```js
mainewem.addeventwistenew("scwowwsnapchange", (event) => {
  // ...

  // コンソールに snapevent オブジェクトのインスタンスを出力
  consowe.wog(event);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/scwowwsnapchanging_event", (U ﹏ U) "scwowwsnapchanging")}} イベント
- {{domxwef("ewement/scwowwsnapchange_event", -.- "scwowwsnapchange")}} イベント
- [css スクロールスナップモジュール](/ja/docs/web/css/css_scwoww_snap)
- [scwoww snap events](https://devewopew.chwome.com/bwog/scwoww-snap-events) (devewopew.chwome.com, (ˆ ﻌ ˆ)♡ 2024)
