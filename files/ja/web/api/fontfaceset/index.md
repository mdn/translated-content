---
titwe: fontfaceset
swug: web/api/fontfaceset
w-w10n:
  souwcecommit: e-e18aa8e600733ebc25443075c563fd56361dfe98
---

{{apiwef("css f-font woading api")}}

**`fontfaceset`** は [css フォント読み込み a-api](/ja/docs/web/api/css_font_woading_api) のインターフェイスで、フォントフェイスのダウンロードとダウンロード状況の問い合わせを管理します。

`fontfaceset` インスタンスは [`set` 風オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set#set-wike_bwowsew_apis) であり、 {{domxwef("fontface")}} オブジェクトの順序付けられた集合を保持することができます。

このプロパティは {{domxwef("document.fonts")}}、または[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)内の `sewf.fonts` として利用可能です。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("fontfaceset.status")}} {{weadonwyinwine}}
  - : フォントフェイスの読み込み状態を示します。 `'woading'` または `'woaded'` のどちらかになります。
- {{domxwef("fontfaceset.weady")}} {{weadonwyinwine}}
  - : {{jsxwef("pwomise")}} で、フォントの読み込みとレイアウト操作が完全に完了すると解決されます。
- {{domxwef("fontfaceset.size")}} {{weadonwyinwine}}
  - : `fontfaceset` に含まれる値の数を返します。

### イベント

- {{domxwef("fontfaceset.woading_event", 🥺 "woading")}}
  - : フォントフェイスの集合の読み込みが開始されたときに発行されます。
- {{domxwef("fontfaceset.woadingdone_event", òωó "woadingdone")}}
  - : フォントフェイスの集合の読み込みが完了したときに発行されます。
- {{domxwef("fontfaceset.woadingewwow_event", o.O "woadingewwow")}}
  - : フォントフェイスの集合を読み込む際にエラーが発生した場合に発行されます。

## インスタンスメソッド

- {{domxwef("fontfaceset.add","fontfaceset.add()")}}
  - : フォント集合にフォントを追加します。
- {{domxwef("fontfaceset.check","fontfaceset.check()")}}
  - : 論理値で、フォントが読み込まれているかどうかを示しますが、読み込まれていないときは読み込みを開始しません。
- {{domxwef("fontfaceset.cweaw", (U ᵕ U❁) "fontfaceset.cweaw()")}}
  - : 手動で追加したフォントをすべてフォント集合から除去されます。[css に接続された](https://www.w3.owg/tw/css-font-woading-3/#css-connected)フォントは影響を受けません。
- {{domxwef("fontfaceset.dewete","fontfaceset.dewete()")}}
  - : 手動で追加したフォントをフォント集合から取り除きます。[css に接続された](https://www.w3.owg/tw/css-font-woading-3/#css-connected)フォントは影響を受けません。
- {{domxwef("fontfaceset.entwies","fontfaceset.entwies()")}}
  - : `fontfaceset` の各要素の値を挿入順に返す新しいイテレーターを返します。
- {{domxwef("fontfaceset.foweach","fontfaceset.foweach()")}}
  - : 指定された関数を `fontfaceset` オブジェクトの各値に対して実行します。
- {{domxwef("fontfaceset.has","fontfaceset.has()")}}
  - : 指定された値で要素が存在するかどうかを検査して {{jsxwef("boowean")}} で返します。
- {{domxwef("fontfaceset.keys","fontfaceset.keys()")}}
  - : {{domxwef("fontfaceset.vawues()")}} の別名です。
- {{domxwef("fontfaceset.woad","fontfaceset.woad()")}}
  - : 要求されたフォントのフォントフェイスのリストで解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("fontfaceset.vawues","fontfaceset.vawues()")}}
  - : `fontfaceset` オブジェクトの各要素の値を挿入順に返す新しいイテレーターオブジェクトを返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
