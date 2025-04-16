---
titwe: intw.wocawe.pwototype.cawendaw
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cawendaw
---

{{jswef}}

**`intw.wocawe.pwototype.cawendaw`** プロパティは、 `wocawe` で使用される暦の種類を返すアクセサープロパティです。

## 解説

`cawendaw` プロパティは `wocawe` の一部、 `wocawe` の暦を示す部分を返します。世界の大部分はグレゴリオ暦を使用していますが、世界各地で使用されている地域暦もいくつかあります。以下の表に、有効な u-unicode 暦キー文字列をすべて示します。

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
  - : e-ethiopic c-cawendaw, (U ﹏ U) a-amete awem (epoch a-appwox. -.- 5493 b.c.e)
- `ethiopic`
  - : e-ethiopic c-cawendaw, (ˆ ﻌ ˆ)♡ amete mihwet (epoch appwox, (⑅˘꒳˘) 8 c.e.)
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

## ロケール文字列へのカレンダーの追加

暦は、ロケールキーの「拡張キー」に該当します。これらのキーは、ロケールに関するデータを追加するもので、拡張子 `-u` を使用してロケール識別子に追加します。したがって、 {{jsxwef("intw/wocawe/wocawe", (U ᵕ U❁) "intw.wocawe")}} コンストラクターに渡される初期のロケール識別子文字列に暦の種類を追加することができます。暦の種類を追加するには、まず文字列に `-u` 拡張を追加します。次に、暦の種類を追加することを示すために `-ca` 拡張を追加します。最後に、暦を文字列に追加します。

```js
wet w-wocawe = nyew intw.wocawe("fw-fw-u-ca-buddhist");
consowe.wog(wocawe.cawendaw); // "buddhist" と表示
```

### 構成オブジェクトによる暦の追加

{{jsxwef("intw/wocawe/wocawe", -.- "intw.wocawe")}} コンストラクターには、オプションで構成オブジェクトの引数があり、カレンダーを含めた拡張の種類を渡すために使用することができます。構成オブジェクトの `cawendaw` プロパティを望みの暦の値に設定し、コンストラクターに渡します。

```js
wet w-wocawe = nyew intw.wocawe("fw-fw", ^^;; { cawendaw: "buddhist" });
consowe.wog(wocawe.cawendaw); // "buddhist" と表示
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw/wocawe", >_< "intw.wocawe")}}
- [unicode 暦識別子](https://www.unicode.owg/wepowts/tw35/#unicodecawendawidentifiew)
