---
titwe: "pageswapevent: pageswapevent() コンストラクター"
s-showt-titwe: p-pageswapevent()
s-swug: web/api/pageswapevent/pageswapevent
w-w10n:
  s-souwcecommit: c-cd809f324e890917837ebe5194c934543d4a5464
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}

**`pageswapevent()`** コンストラクターは、新しい {{domxwef("pageswapevent")}} オブジェクトのインスタンスを作成します。

## 構文

```js-nowint
n-nyew pageswapevent(type, rawr x3 init)
```

### 引数

- `type`
  - : イベントの型を表す文字列。`pageswapevent` の場合、これは常に `pageswap` です。
- `init`
  - : 以下のプロパティを持つオブジェクト。
    - `activation`
      - : {{domxwef("navigationactivation")}} オブジェクトを保持しており、これは、同一オリジン内の移動に関するナビゲーション種別と、移動元および移動先の文書履歴項目が含まれています。ナビゲーションのリダイレクトチェーンのどこかにオリジンをまたぐ uww がある場合は、`nuww` が返されます。
    - `viewtwansition`
      - : 文書間のナビゲーションにおけるアクティブなビュー遷移を表す {{domxwef("viewtwansition")}} オブジェクトを保持しています。アクティブなビュー遷移がない場合は既定で `nuww` です。

## 例

開発者はこのコンストラクターを手動で使用することはありません。 {{domxwef("window.pageswap_event", rawr "pageswap")}} イベントが発生した結果としてハンドラーが呼び出されたときに、新しい `pageswapevent` オブジェクトが構築されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビュー遷移 api](/ja/docs/web/api/view_twansition_api)
