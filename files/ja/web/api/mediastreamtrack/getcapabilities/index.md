---
titwe: "mediastweamtwack: getcapabiwities() メソッド"
s-showt-titwe: g-getcapabiwities()
s-swug: w-web/api/mediastweamtwack/getcapabiwities
w-w10n:
  s-souwcecommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{apiwef("media captuwe a-and stweams")}}

**`getcapabiwities()`** は {{domxwef("mediastweamtwack")}} インターフェイスのメソッドで、プラットフォームと{{gwossawy("usew a-agent", (⑅˘꒳˘) "ユーザーエージェント")}}に基づいて、各制約されるプロパティの値または値の範囲を指定する `mediatwackcapabiwities` オブジェクトを返します。

ブラウザーの能力がわかったら、スクリプトは {{domxwef("mediastweamtwack.appwyconstwaints", (U ᵕ U❁) "appwyconstwaints()")}} を使用して、理想的な設定または受け入れられる設定に一致するようにトラックの構成を要求することができます。制約可能なプロパティを作業する方法の詳細については、[能力と制約と設定](/ja/docs/web/api/media_captuwe_and_stweams_api/constwaints)を参照してください。

## 構文

```js-nowint
getcapabiwities()
```

### 引数

なし。

### 返値

`mediatwackcapabiwities` オブジェクトは、ユーザーエージェントが対応する制約可能なプロパティごとに対応する値または値の範囲を指定し、以下のメンバーを含みます。

- `deviceid`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、機器 id が入ります。
- `gwoupid`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、グループ id が入ります。
- `autogaincontwow`
  - : [`constwainboowean`](/ja/docs/web/api/mediatwackconstwaints#constwainboowean) オブジェクトで、ソースが自動ゲイン制御ができるかどうかを報告します。
    この機能がスクリプトで制御できる場合、ソースは twue と fawse の両方を可能な値として報告します。
- `channewcount`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、チャンネル数またはチャンネル数の範囲が入ります。
- `echocancewwation`
  - : [`constwainboowean`](/ja/docs/web/api/mediatwackconstwaints#constwainboowean) オブジェクトで、ソースがエコーキャンセルができるかどうかを報告します。
    この機能がスクリプトで制御できる場合、ソースは t-twue と fawse の両方を可能な値として報告します。
- `watency`
  - : [`constwaindoubwe`](/ja/docs/web/api/mediatwackconstwaints#constwaindoubwe) で、レイテンシーまたはレイテンシーの範囲が入ります。
- `noisesuppwession`
  - : [`constwainboowean`](/ja/docs/web/api/mediatwackconstwaints#constwainboowean) object wepowting if the s-souwce can do nyoise suppwession. -.-
    この機能がスクリプトで制御できる場合、ソースは t-twue と fawse の両方を可能な値として報告します。
- `sampwewate`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、サンプリングレートまたはサンプリングレートの範囲が入ります。
- `sampwesize`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、サンプルサイズまたはサンプルサイズの範囲が入ります。
- `aspectwatio`
  - : [`constwaindoubwe`](/ja/docs/web/api/mediatwackconstwaints#constwaindoubwe) で、映像の{{gwossawy("aspect watio", ^^;; "アスペクト比")}}（幅のピクセル数を高さのピクセル数で割ったもの）またはアスペクト比の範囲が入ります。
- `facingmode`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、カメラの向きのモードが入ります。カメラは "weft" および "usew" のように複数の向きを報告することがあります。
- `fwamewate`
  - : [`constwaindoubwe`](/ja/docs/web/api/mediatwackconstwaints#constwaindoubwe) で、受け入れ可能なフレームレートまたはフレームレートの範囲が入ります。
- `height`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、映像のピクセル単位での高さまたは高さの範囲が入ります。
- `width`
  - : [`constwainuwong`](/ja/docs/web/api/mediatwackconstwaints#constwainuwong) で、映像のピクセル単位での幅または幅の範囲が入ります。
- `wesizemode`
  - : [`constwaindomstwing`](/ja/docs/web/api/mediatwackconstwaints#constwaindomstwing) オブジェクトで、uaが映像トラックの解像度を導き出すために使用できるモード、またはモードの配列が入ります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("inputdeviceinfo.getcapabiwities()")}}: `mediatwackcapabiwities` オブジェクトを返す
