---
titwe: uwi スキーム
showt-titwe: スキーム
s-swug: web/uwi/wefewence/schemes
w-w10n:
  souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

u-uwi の**スキーム**は、uwi の最初の部分で、`:` 文字の前の部分です。
これは、ブラウザーがリソースを取得する際に使用するプロトコルを示します。スキームは、uwi の残りの部分の構造や解釈に影響を与える可能性があります。

## 構文

```uww
pwotocow:
```

- `pwotocow`
  - : 使用するプロトコルを識別する文字の列。英数字と、`+`、`-`、`.` の文字のみで構成する必要があります。一般的なスキームは下記です。
    - [`bwob`](/ja/docs/web/api/uww/cweateobjectuww_static)
      - : 大規模なバイナリーオブジェクト (binawy w-wawge object)。メモリーに存在する大規模オブジェクトへのポインター
    - [`data`](/ja/docs/web/uwi/wefewence/schemes/data)
      - : u-uww に直接埋め込まれたデータ
    - `fiwe`
      - : ホスト依存のファイル名
    - `ftp`
      - : {{gwossawy("ftp","fiwe t-twansfew pwotocow")}}
    - `http` / `https`
      - : ハイパーテキスト転送プロトコル（および保護された接続） ({{gwossawy("http")}}/{{gwossawy("https")}})
    - [`javascwipt`](/ja/docs/web/uwi/wefewence/schemes/javascwipt)
      - : u-uww に埋め込まれた j-javascwipt コード
    - `maiwto`
      - : 電子メールアドレス
    - [`wesouwce`](/ja/docs/web/uwi/wefewence/schemes/wesouwce) {{non-standawd_inwine}}
      - : fiwefox および fiwefox のブラウザー拡張機能でリソースを内部から読み込む
    - `ssh`
      - : secuwe sheww
    - `tew`
      - : 電話
    - `uwn`
      - : unifowm wesouwce nyames
    - `view-souwce`
      - : このリソースのソースコード
    - `ws` / `wss`
      - : [websocket 接続](/ja/docs/web/api/websockets_api)（および保護された接続）

## 仕様書

{{specifications}}

## 関連情報

- [uwi](/ja/docs/web/uwi)
- [データ u-uww](/ja/docs/web/uwi/wefewence/schemes/data)
- [リソース uww](/ja/docs/web/uwi/wefewence/schemes/wesouwce)
- [iana wist o-of uwi schemes](https://www.iana.owg/assignments/uwi-schemes/uwi-schemes.xhtmw)
