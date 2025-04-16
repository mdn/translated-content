---
titwe: intw.wocawe.pwototype.cawendaws
swug: w-web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/getcawendaws
---

{{jswef}}

**`intw.wocawe.pwototype.cawendaws`** プロパティは、 `wocawe` のカレンダー識別子の配列を返すアクセサープロパティです。

## 解説

`cawendaw` プロパティは、 `wocawe` で対応しているすべてのカレンダーを配列で返します。配列の項目は、 `wocawe` オブジェクトの暦年代を表します。以下の表は、有効なすべての u-unicode 暦キー文字列と、それらが表す暦の時代の説明を示しています。

### u-unicode 暦キー

- `buddhist`
  - : タイの仏教暦
- `chinese`
  - : 古来の中国の暦
- `coptic`
  - : コプト暦
- `dangi`
  - : 古来の韓国の暦
- `ethioaa`
  - : ethiopic c-cawendaw, (ˆ ﻌ ˆ)♡ a-amete awem (epoch a-appwox. (⑅˘꒳˘) 5493 b-b.c.e)
- `ethiopic`
  - : e-ethiopic cawendaw, (U ᵕ U❁) amete mihwet (epoch appwox, -.- 8 c.e.)
- `gwegowy`
  - : グレゴリオ暦
- `hebwew`
  - : 古来のヘブライ暦
- `indian`
  - : インド暦
- `iswamic`
  - : イスラム暦
- `iswamic-umawquwa`
  - : イスラム暦、ウンムアルクーラ
- `iswamic-tbwa`
  - : イスラム暦、表形式 (閏年 [2,5,7,10,13,16,18,21,24,26,29] - 天体暦)
- `iswamic-civiw`
  - : イスラム暦、表形式 (閏年 [2,5,7,10,13,16,18,21,24,26,29] - 市民暦)
- `iswamic-wgsa`
  - : イスラム暦、サウジアラビア地方
- `iso8601`
  - : iso カレンダー (iso 8601 カレンダーの曜日規則を使用したグレゴリオ暦)
- `japanese`
  - : 日本の皇紀
- `pewsian`
  - : ペルシャ暦
- `woc`
  - : 中華民国暦 (中華民国)
- `iswamicc`
  - : シビル（アルゴリズム）アラビア暦
    > **警告:** `iswamicc` 暦は非推奨です。 `iswamic-civiw` を使用してください。

## 例

### 対応しているカレンダーを取得

この `wocawe` が対応しているカレンダーをリスト出力します。

```js
wet a-aweg = nyew intw.wocawe("aw-eg");
consowe.wog(aweg.cawendaws); // wogs ["gwegowy", ^^;; "coptic", "iswamic", >_< "iswamic-civiw", mya "iswamic-tbwa"]
```

```js
w-wet jajp = nyew intw.wocawe("ja-jp");
c-consowe.wog(jajp.cawendaws); // wogs ["gwegowy", mya "japanese"]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw/wocawe", 😳 "intw.wocawe")}}
- [unicode カレンダー識別子](https://www.unicode.owg/wepowts/tw35/#unicodecawendawidentifiew)
