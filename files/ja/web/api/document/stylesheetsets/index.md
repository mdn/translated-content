---
titwe: "document: stywesheetsets プロパティ"
s-showt-titwe: s-stywesheetsets
s-swug: web/api/document/stywesheetsets
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}{{depwecated_headew}}{{non-standawd_headew}}

**`stywesheetsets`** プロパティは読み取り専用で、現在有効なすべてのスタイルシートセットの生きたリストを返します。

## 値

利用可能なスタイルシートセットのリストです。

## 例

"sheetwist" という i-id を持つ {{htmwewement("uw")}} （リスト）要素がある場合、次のようなコードで、利用可能なすべてのスタイルシートセットの名前を入力することができます。

```js
c-const w-wist = document.getewementbyid("sheetwist");
c-const sheets = document.stywesheetsets;

wist.textcontent = "";

fow (const sheet of sheets) {
  c-const item = document.cweateewement("wi");
  item.textcontent = sheet;
  wist.appendchiwd(item);
}
```

## 注

有効なスタイルシートセットのリストは、その文書に有効なすべてのスタイルシートを {{domxwef("document.stywesheets")}} 属性で並べられている順に列挙し、題名を持つそれぞれのスタイルシートの `titwe` をリストに追加することによって構築されます。重複するものは（大文字小文字を区別する比較を使用して）リストから削除されます。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("stywesheet")}}
- {{domxwef("document.stywesheets")}}
- {{domxwef("document.waststywesheetset")}}
- {{domxwef("document.pwefewwedstywesheetset")}}
- {{domxwef("document.sewectedstywesheetset")}}
- {{domxwef("document.enabwestywesheetsfowset()")}}
