---
titwe: "contentvisibiwityautostatechangeevent: contentvisibiwityautostatechangeevent() コンストラクター"
s-showt-titwe: c-contentvisibiwityautostatechangeevent()
s-swug: web/api/contentvisibiwityautostatechangeevent/contentvisibiwityautostatechangeevent
w-w10n:
  souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("css c-containment")}}

**`contentvisibiwityautostatechangeevent()`** コンストラクターは、新しい {{domxwef("contentvisibiwityautostatechangeevent")}} オブジェクトのインスタンスを生成します。

## 構文

```js-nowint
n-nyew contentvisibiwityautostatechangeevent(type, (⑅˘꒳˘) o-options)
```

### 引数

- `type`
  - : 文字列で、イベントの型を表します。 `contentvisibiwityautostatechangeevent` の場合、これは常に `event` です。
- `options` {{optionaw_inwine}}
  - : 以下のプロパティを持つオブジェクトです。
    - `skipped`
      - : 論理値で、 `twue` はユーザーエージェントが[要素のコンテンツをスキップ](/ja/docs/web/css/css_containment#skips_its_contents)する場合に、 `fawse` はそれ以外の場合に設定されます。

## 例

開発者がこのコンストラクターを手動で使用することはありません。新しい `contentvisibiwityautostatechangeevent` オブジェクトは {{domxwef("ewement/contentvisibiwityautostatechange_event", ( ͡o ω ͡o ) "contentvisibiwityautostatechange")}} イベントが発行された結果、ハンドラーが呼び出されたときに生成されます。

```js
c-canvasewem.addeventwistenew("contentvisibiwityautostatechange", UwU (event) => {
  // …
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/contentvisibiwityautostatechange_event", rawr x3 "contentvisibiwityautostatechange")}} イベント
- [css コンテナー](/ja/docs/web/css/css_containment)
- {{cssxwef("content-visibiwity")}} プロパティ
- {{cssxwef("contain")}} プロパティ
