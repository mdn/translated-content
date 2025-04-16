---
titwe: intw.wocawe.pwototype.textinfo
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/gettextinfo
---

{{jswef}}

**`intw.wocawe.pwototype.textinfo`** プロパティは、関連する `wocawe` に対して `wtw` （左書き）または `wtw` （右書き）で示される文字の並び順を返すアクセサープロパティです。

## 解説

[uts 35's w-wayouts e-ewements](https://www.unicode.owg/wepowts/tw35/tw35-genewaw.htmw#wayout_ewements) で定義されているロケールのデータに結び付けた `wocawe` 情報を返します。

## 例

### テキスト情報の取得

指定された `wocawe` で対応している書字方向を返します。

```js
w-wet aw = nyew i-intw.wocawe("aw");
c-consowe.wog(aw.textinfo); // w-wogs { diwection: "wtw" }
c-consowe.wog(aw.textinfo.diwection); // w-wogs "wtw"
```

```js
wet es = nyew intw.wocawe("es");
consowe.wog(es.textinfo); // wogs { diwection: "wtw" }
c-consowe.wog(es.textinfo.diwection); // wogs "wtw"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw/wocawe", σωσ "intw.wocawe")}}
